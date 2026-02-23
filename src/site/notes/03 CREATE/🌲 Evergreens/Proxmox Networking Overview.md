---
{"dg-publish":true,"dg-permalink":"proxmox-networking-overview","permalink":"/proxmox-networking-overview/","title":"Proxmox Networking Overview","tags":["proxmox","networking","lxc","static-ip","virtualization","bridge-configuration"]}
---


# Proxmox Networking Overview

## Proxmox Networking: Concepts, Configs, and Common Fixes

This comprehensive guide documents how networking works in Proxmox, especially when dealing with static IPs for LXC containers and connecting them to the internet through a bridge interface.

## 🔌 Physical & Network Setup

- **Proxmox Host** is a physical machine connected to your network
- The machine gets internet via DHCP or a static IP from your router

To verify interfaces:
```bash
ip a
```

## 🌐 Proxmox Host Networking

Proxmox uses a **bridge interface** (`vmbr0`) to connect both the host and the containers to the network.

### Example `/etc/network/interfaces` (on Proxmox Host):

```bash
auto lo
iface lo inet loopback

auto eno1
iface eno1 inet dhcp

auto eth1
iface eth1 inet dhcp

auto vmbr0
iface vmbr0 inet static
    address 192.168.86.64
    netmask 255.255.255.0
    gateway 192.168.86.1
    bridge-ports eth1
    bridge-stp off
    bridge-fd 0
```

**Key Components:**
- `vmbr0` = virtual switch that the host and containers use
- `eth1` = physical NIC connected to the LAN
- `gateway` must match your LAN (e.g., `192.168.86.1`)

Check the current state:
```bash
ip addr show vmbr0
```

## 📦 LXC Container Networking

Each container is configured in `/etc/pve/lxc/<ID>.conf` and has its own virtual NIC.

### Example `/etc/pve/lxc/105.conf`:

```ini
arch: amd64
cores: 2
features: keyctl=1,nesting=1
hostname: sabnzbd
memory: 4096
mp1: /mnt/pve/mediapool/,mp=mediapool
net0: name=eth0,bridge=vmbr0,gw=192.168.86.1,hwaddr=BC:24:11:A7:E1:37,ip=192.168.86.109/24,type=veth
onboot: 1
ostype: debian
rootfs: local:105/vm-105-disk-0.raw,size=20G
swap: 512
tags: community-script;downloader
```

**Critical Requirements:**
- IP is in the correct subnet (e.g., `192.168.86.X/24`)
- Gateway is your **real router** (usually `192.168.86.1`)

> ❌ **Common Mistake**: If you use the Proxmox host's IP (e.g., `192.168.86.100`) as the gateway, the container will have no internet.

## 🧠 Key Networking Concepts

| Component | Description |
|-----------|-------------|
| `vmbr0` | Virtual bridge interface that connects all guests to the outside world |
| LXC NIC | Defined in the LXC's conf file; plugs into `vmbr0` |
| Gateway | Must match the real network router (e.g., `192.168.86.1`) |
| Static IP | Assigned to each container manually in the config |

## 🚩 Common Networking Mistakes

### Incorrect Gateway Configuration
If you assign a **gateway IP** in the LXC config that:
- Isn't part of the container's subnet
- Doesn't actually route traffic

**Result**: Containers will **fail to ping the internet** (e.g., `Destination Host Unreachable`)

### Bridge Misconfiguration
- Bridge must be properly connected to physical interface
- STP (Spanning Tree Protocol) should typically be disabled for performance
- Forward delay should be set to 0 for faster convergence

## 📊 Troubleshooting Commands

### Network Diagnostics
```bash
# View all network interfaces and IPs
ip addr show

# View routing table
ip route show

# Test connectivity
ping 8.8.8.8

# Check bridge status
brctl show
```

### Service Management
```bash
# Restart networking (on host)
systemctl restart networking

# Restart specific container
pct restart <container-id>

# Check container status
pct status <container-id>
```

## 🔧 Static IP Assignment Reference

| Service | IP | Port | Notes |
|---------|----|----- |-------|
| Proxmox UI | 192.168.86.56 | :8006 | Main interface |
| Proxmox VM | 192.168.86.100 | | Primary node |
| TrueNAS | 192.168.86.72 | | Storage |
| Plex | 192.168.86.102 | :32400 | Media server |
| Lidarr | 192.168.86.103 | :8686 | Music management |
| Radarr | 192.168.86.104 | :7878 | Movie management |
| Sonarr | 192.168.86.105 | :8989 | TV management |
| Readarr | 192.168.86.106 | | Book management |
| Speakarr | 192.168.86.107 | | Audio management |
| Prowlarr | 192.168.86.108 | :9696 | Indexer proxy |
| Sabnzbd | 192.168.86.109 | :7777 | Downloader |
| Jellyfin | 192.168.86.110 | :8096 | Media server |

## Best Practices

1. **Use consistent IP ranges** for different service types
2. **Document all static assignments** to prevent conflicts
3. **Test connectivity** after each configuration change
4. **Monitor DHCP lease conflicts** with static assignments
5. **Use meaningful hostnames** for easier identification
6. **Backup network configurations** before major changes

## Advanced Configuration

### Multiple Bridge Setup
For complex networking scenarios, you might need multiple bridges:
- `vmbr0` for management traffic
- `vmbr1` for storage network
- `vmbr2` for guest-only network

### VLAN Integration
```bash
auto vmbr0.100
iface vmbr0.100 inet static
    address 192.168.100.1
    netmask 255.255.255.0
    vlan-raw-device vmbr0
```

This networking guide provides the foundation for robust Proxmox deployments with reliable container connectivity and proper network segmentation.
