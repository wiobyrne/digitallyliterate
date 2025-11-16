---
{"dg-publish":true,"permalink":"/03-create/blog/homelab-journey-part-4-network-configuration/","title":"Homelab Journey, Part 4: Network Configuration","tags":["homelab","networking","vlan","security","proxmox"]}
---


# Homelab Journey, Part 4: Network Configuration
## Designing the Digital Neighborhood

[[03 CREATE/🎯 Projects/🟢 Active/Homelab Series/Homelab Journey Overview\|Homelab Journey Overview]]
### Core Questions
- What’s my network layout (router, switch, VLANs, firewall)?  
- How did I handle DNS, DHCP, and SSL/TLS?  
- What solutions manage remote access (VPN, Tailscale, etc.)?  
- How do I visualize or map this network?

### Drafting Notes
- Network diagram and addressing schema  
- Configuration challenges (e.g., VLAN tagging, routing loops)  
- Integration with Proxmox bridges or Docker networks  
- Lessons about simplicity vs segmentation  

# 🌐 Homelab Journey, Part 4: Network Configuration
VLANs, DNS, VPNs, and secure remote access — how I learned to isolate, protect, and reach everything.

[[03 CREATE/🎯 Projects/🟢 Active/Homelab Series/Homelab Journey Overview\|Homelab Journey Overview]]

---

## TL;DR
I built my network out of thrifted hardware and one repurposed desktop running Proxmox. The network evolved from “one flat LAN” to a small segmented topology with VLANs, a reverse proxy, and a secure remote access method (VPN/Tailscale). I learned the hard way that clear naming, diagrams, and small incremental changes make debugging survivable.

---

## Background & constraints
- Hardware base: a repurposed desktop and a mix of thrift-store / marketplace NICs and switches. (See Part 2 for the scavenged parts story.)  
- Primary goals: isolate services, minimize blast radius for compromised apps, and retain secure remote access without exposing admin ports to the public internet.  
- Practical limits: cheap switch (no full L3 features), limited NICs, and preference for low-noise, low-power gear.

---

## Topology (high level)
Internet -> Router/Firewall (home ISP or pfSense/OPNsense VM) -> Managed switch
├─ VLAN 10 (LAN) -> client devices
├─ VLAN 20 (SERVICES) -> Proxmox VMs / containers (Jellyfin, Nextcloud, etc.)
├─ VLAN 30 (IOT) -> home automation devices
└─ VLAN 99 (MGMT) -> admin devices, management ports (Proxmox GUI, switch mgmt)

yaml
Copy code

> Paste your exact diagram here: `<<insert network diagram image>>`

---

## How I set it up (practical steps & examples)
Below are the core patterns I used — adapted to my thrifted hardware and Proxmox setup. These are the commands and concepts that helped when things went sideways.

### 1) Decide where your routing/firewall lives
- Option A: Use your ISP router + an internal pfSense/OPNsense VM on Proxmox (bridged or passthrough NIC).  
- Option B: Dedicated physical router (if you have one) + Proxmox on a separate VLAN.

I started with the ISP router for simplicity, then moved key services behind a pfSense VM when I needed more fine-grained control.

### 2) VLAN-aware bridge in Proxmox
Make the bridge VLAN-aware so LXC/VMs can use VLAN tags without complicated host-side config.

Example (from `/etc/network/interfaces` style configs — adapt for your distro):
auto vmbr0
iface vmbr0 inet manual
bridge-ports eno1
bridge-stp off
bridge-fd 0
post-up /sbin/ifconfig vmbr0 up
bridge-vlan-aware yes

yaml
Copy code
Then create subinterfaces or tag VMs/containers with VLAN IDs (e.g., `eno1.10`, `eno1.20`) or set the VM network device to use VLAN tag `10`.

> My early mistake: adding lots of VLAN rules before I documented them. Document the mapping (VLAN ID → purpose) in Obsidian first.

### 3) Managed switch config (if available)
- Create VLANs on the switch and assign ports as access or trunk.  
- Trunk port(s) connected to the Proxmox host use all VLANs (tagged).  
- Access ports assigned per device (untagged in a single VLAN).

If using an unmanaged switch: you’re limited to a flat LAN or must rely on router-based isolation and separate physical NICs for segmentation.

### 4) DNS — local resolution & ad blocking
I used a local DNS resolver to both speed name resolution and block trackers:

Options I used/experimented with:
- **Pi-hole** as a DNS sink to block trackers, paired with Unbound (recursive DNS) for privacy.  
- **Unbound** or local resolver for caching upstream queries.  
- For internal names, bind local hostnames via Unbound or a small DNS server (and register entries in Proxmox / DHCP).

> Note: I kept service hostnames consistent between Proxmox VM names and internal DNS entries. This dramatically reduced confusion during troubleshooting.

### 5) Reverse proxy & TLS
To expose web services safely I ran a reverse proxy (Nginx Proxy Manager / Nginx with Let's Encrypt):

- Reverse proxy runs in its own VM or container in the SERVICES VLAN.  
- All web services are proxied through secure hostnames; certificates managed centrally (Let’s Encrypt + automated renewal).  
- Only ports 80/443 are forwarded on the firewall to the reverse proxy — no direct ports to individual services.

### 6) Remote access: VPN vs Tailscale vs SSH jumpbox
I experimented with both:

- **Tailscale** — quickest remote access with minimal firewall changes; excellent for personal access.  
- **OpenVPN / WireGuard via pfSense** — more control, good for exposing a single secure entry point.  
- **SSH Bastion (jump host)** — for admin tasks, with MFA and key-only access.

My workflow now: Tailscale for ad-hoc access, WireGuard for stable remote needs, and a hardened SSH bastion in the MGMT VLAN for administrative operations.

---

## Troubleshooting highlights & hard lessons (from our chats)
- **Proxmox network weirdness:** I ran into a gnarly Proxmox networking problem during virtualization setup that required rolling back a bridge config. Small changes + clear backups of `/etc/network/interfaces` saved the day.  
- **Docker + Proxmox bridging:** When moving Docker containers to dedicated networks, I had to reconcile Docker’s network model with Proxmox bridges — mistakes here broke DNS resolution for containers until I fixed bridge VLAN awareness.  
- **Documentation saved me:** the Obsidian notes where I logged each change, and the times I asked ChatGPT “what did I just change?” were invaluable. The AI helped generate checklists and rollback plans when I was stuck.

---

## Security checklist (what I recommend you actually do)
- Harden Proxmox web GUI: use firewall rules, limit access to MGMT VLAN, and enable 2FA.  
- Use strong certificates (Let's Encrypt) and keep reverse proxy updated.  
- Rotate SSH keys and forbid password logins.  
- Run fail2ban or similar on exposed services.  
- Keep a minimal set of ports forwarded; put everything else behind the proxy/VPN.

---

## What I’d write into the lab notebook (Obsidian)
- VLAN mapping table (ID → name → purpose → switch port)  
- Bridge/host configs and snapshots of `/etc/network/interfaces` or Netplan files  
- List of management IPs and device access credentials (slot in secrets manager)  
- Timeline of changes with "undo" steps for risky edits

> Insert sample snippet or screenshot from your Obsidian note: `<<insert network note screenshot>>`

---

## Closing thoughts
Network design here was shaped by constraints — thrifted hardware, a single host, and a desire to keep my home environment usable. That forced me into simple, robust patterns: VLANs for isolation, a single reverse proxy for exposure, and a VPN/Tailscale for remote access. Most importantly, I learned to document every change so I could ask better questions of myself — and my AI writing partner — when things broke.

**Next:** Part 5 — Storage & Backup Strategy.  
**Parallel meta post:** [[ai-02-when-the-ai-forgets\|ai-02-when-the-ai-forgets]]