---
{"dg-publish":true,"permalink":"/01-consume/articles/passthrough-hd-ssd-physical-disks-to-vm-on-proxmox/","title":"Passthrough HDD/SSD/Physical disks to VM on Proxmox VE(PVE)","tags":["proxmox","truenas"]}
---


# Passthrough HD SSD Physical disks to VM on Proxmox 

## Key Points:
  Note: This guide only works for virtual machines not for containers(CT).  
Note 2: For using with RAID controllers, please read the guide first (without doing anything) then refer to **[benzene6](https://dannyda.com/2020-08-26/how-to-passthrough-hdd-ssd-physical-disks-to-vm-on-proxmox-vepve/#comment-396)**‘s comment.

## 1 Install lshw on PVE

1.1 Bring up terminal from PVE directly or via SSH or by using “Shell” from PVE web gui

1.2 Enter following command to install lshw

```
apt install lshw
```

## 2 Check & note down details about physical disks we want to passthrough

2.1 Using following command

```
lshw -class disk -class storage
```

Output

| 1  2  3  4  5  6  7  8  9  10  11  12  13 | `...`  `*-disk`  `description: ATA Disk`  `product: SHdi1uhJ-128s`  `vendor: FakeName`  `physical id: 0.0.0`  `bus info: scsi@2:0.0.0`  `logical name: /dev/sdb`  `version: DC09`  `serial: SJFhf7219`  `size: 15000GiB (15TB)`  `configuration: ansiversion=5 sectorsize=512`  `...` |
| --- | --- |

We should use disk by their ID rather than name (/dev/sda) which can change and will cause trouble

2.2 Use following command to list all physical disk IDs

```
ls -l /dev/disk/by-id/
```

2.3 Now we need to find the one that matches the “product” or “serial”

e.g.

```
..... /dev/disk/by-id/ata-xxxxxxxxx-xxxxx_xxx ......
```

or try

```
ls -al /dev/disk/by-id | grep SHdi1uhJ
or
ls -al /dev/disk/by-id | grep SJFhf7219
```

## 3 Add the disk to VM

3.1 Bring up the terminal or shell for PVE host again

3.2 Execute following command

```
qm set 100 -scsi5 /dev/disk/by-id/ata-xxxxxxxxx-xxxxx_xxx
```

Output

```
update VM 100: -scsi5 /dev/disk/by-id/ata-xxxxxxxxx-xxxxx_xxx
```

**100**: The VM id which can be found from PVE web gui (besides the VM’s name)

**scsi5**: The virtual port number which the disk will be using to attach to VM

For example, in the following configuration, the disk is attached by using **\-scsi0**, if we want to attach another disk, we can use -scsi1 or -scsi2 or -scsi3 etc…..

![PVE - Hardware - scsi0](https://dannyda.com/myupload/2020/06/image-6.png)

PVE – Hardware – scsi0

## 4 Check if the disk attached successfully

```
grep SHdi1uhJ /etc/pve/qemu-server/100.conf
```

Output

```
  scsi5: /dev/disk/by-id/ata-xxxxxxxxx-xxxxx_xxx, size=......
```

## Note

There are different Controller Types we can use, IDE (Slow), SCSI (Fast), VirtIO Block (May get deprecated in the future)

Using SCSI with VirtIO SCSI as SCSI Controller Type for VM disks is recommended

## 5 Bonus

### 5.1 How to passthrough HDD serial number to VM

To passthrough HDD or SSD serial number, we can find the HDD serial number, manually edit the VM conf file and add the HDD serial number there.

Before start, make sure the relative VM is powered off.

5.1.1 To find HDD/SSH serial number by [using lshw following step 5.1.1a](https://dannyda.com/2020-08-26/how-to-passthrough-hdd-ssd-physical-disks-to-vm-on-proxmox-vepve/#5.1.1a-Install-lshw) OR using [PVE web gui to find it directly following step 5.1.1b](https://dannyda.com/2020-08-26/how-to-passthrough-hdd-ssd-physical-disks-to-vm-on-proxmox-vepve/#5.1.1b-Using-PVE-web-gui)

5.1.1a Install **lshw**, then use this command to find the HDD/SSD serial we need

```
# Install lshw
apt install lshw
```
```
# Find the HDD/SSD disk serial number
lshw -C disk
```

We will get output like following

```
  *-disk:0                  
  description: ATA Disk
  product: Hitachi HTS10000
  vendor: Hitachi
       physical id: 0
       bus info: scsi@0:0.0.0
       logical name: /dev/sda
  version: A980
  serial: J100009BDS32SA
  size: 931GiB (1TB)
  capabilities: gpt-1.00 partitioned partitioned:gpt
  configuration: ansiversion=5 guid=e2ffe4a9-21a9-1bd1-ff00-5dfutv2s1b17 logicalsectorsize=512 sectorsize=4096
```

5.1.1b Using PVE web gui

Login to PVE https://IP:8006

From left hand side, Make sure it’s in **Server View**, Click on the node name

From right hand side panel, Click on **Disks**, now we can find out the disk serials

5.1.2 Note down the ID (Here we assume the VM ID is **100**) of the VM we want to passthrough the disk serial for

5.1.3 From left hand side of PVE web gui, Right Click on the node name -> **\>\_ Shell** or login to PVE via SSH

5.1.4 Make a backup of the configuration file

```
cp /etc/pve/qemu-server/100.conf /root/100.conf
```

5.1.5 Edit the configuration file

```
nano /etc/pve/qemu-server/100.conf
```

Find the line like following

```
  virtio1: /dev/disk/by-id/ata-WDC_xxxxxxx-xxxxxxxxxxxxxx,size=xxxxxxK
```

We add the serial number to the end of the line, the final line looks like

```
  virtio1: /dev/disk/by-id/ata-WDC_xxxxxxx-xxxxxxxxxxxxxx,size=xxxxxxK,serial=xxxxxx-xxxxxxx
```

  Note: The limit for serial is 18-20bytes (around 18 characters), no space allowed

Ctrl + X, Y, Enter key to Save and Exit the nano text editor

## References

\[1\] “Physical disk to kvm – Proxmox VE”, *Pve.proxmox.com*, 2020. \[Online\]. Available: https://pve.proxmox.com/wiki/Physical\_disk\_to\_kvm

---

## Summary:
How to: Passthrough HDD/SSD/Physical disks directly to VM on Proxmox VE(PVE) (Proxmox VE (PVE) hard drive pasthrough to virtual machine/VM)

---

*Source: [How to: Passthrough HDD/SSD/Physical disks to VM on Proxmox VE(PVE) < Blog-D without Nonsense](https://dannyda.com/2020-08-26/how-to-passthrough-hdd-ssd-physical-disks-to-vm-on-proxmox-vepve/)*
