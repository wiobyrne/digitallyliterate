---
{"dg-publish":true,"permalink":"/02-develop/plants/hard-drives-in-proxmox/","title":"Hard Drives in Proxmox","tags":["proxmox","storage","hard-drives","truenas","hardware-configuration"]}
---


# Hard Drives in Proxmox

## System Overview
Linux wiobyrne 6.8.8-4-pve #1 SMP PREEMPT_DYNAMIC PMX 6.8.8-4 (2024-07-26T11:15Z) x86_64

## Storage Controllers

### SATA Controllers
1. **Marvell 88SE9172 SATA 6Gb/s Controller**
   - PCI: 0000:08:00.0
   - 32-bit, 33MHz
   - Driver: ahci

2. **Intel 7 Series/C210 Series Chipset Family 6-port SATA Controller**
   - PCI: 0000:00:1f.2
   - AHCI mode
   - Driver: ahci

## Hard Drive Inventory

### System Drive
- **CT1000MX500SSD1** (1TB SSD)
  - Device: `/dev/sda`
  - Serial: 2209E6128791
  - Size: 931GiB (1TB)
  - Configuration: GPT partitioned
  - Purpose: Proxmox system drive

### Data Drives (12TB Seagate)
1. **ST12000NM0127** - `/dev/sdb`
   - Serial: ZJV5PF47
   - Version: G005
   - Size: 10TiB (12TB)
   - Status: GPT partitioned

2. **ST12000NM0127** - `/dev/sdc`
   - Serial: ZJV651W7
   - Version: G006
   - Size: 10TiB (12TB)
   - Status: Available for passthrough

3. **ST12000NM0127** - `/dev/sdd`
   - Serial: ZJV0HJFD
   - Version: G005
   - Size: 10TiB (12TB)
   - Status: GPT partitioned

4. **ST12000NM0127** - `/dev/sde`
   - Serial: ZJV27NZM
   - Version: G006
   - Size: 10TiB (12TB)
   - Status: GPT partitioned

## Drive Identification Commands

### Hardware Information
```bash
lshw -class disk -class storage
```

### List Drives by ID
```bash
ls -l /dev/disk/by-id/
```

## Passthrough Configuration

To add a drive to a VM (e.g., TrueNAS):
```bash
qm set 100 -scsi1 /dev/disk/by-id/ata-ST12000NM0127_ZJV651W7
```

### Key Drive Identifiers
- `/dev/sdc` - Serial: ZJV651W7
- Device ID: `ata-ST12000NM0127_ZJV651W7`
- WWN: `wwn-0x5000c500c340df04`

## Best Practices

1. **Use device IDs** rather than `/dev/sdX` for passthrough to ensure consistency across reboots
2. **Verify drive status** before passthrough operations
3. **Document serial numbers** for hardware tracking
4. **Consider RAID configuration** for data protection in TrueNAS

This configuration provides robust storage options for both Proxmox system operations and data storage through TrueNAS virtualization.
