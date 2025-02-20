---
{"dg-publish":true,"permalink":"/01-consume/videos/you-should-be-using-proxmox-backup-server/","title":"You should be using Proxmox Backup Server"}
---

# You should be using Proxmox Backup Server

![You should be using Proxmox Backup Server](https://www.youtube.com/watch?v=KxPl8SHREcE)

## Description

The disk, network, and computational savings are incredible with Proxmox Backup Server and you should be using it if you are running Proxmox VE.  I used NFS for years and only now do I realize how inefficient that is.  This is why I started using Proxmox Backup Server.

Video Notes: https://technotim.live/posts/proxmox-backup-server/

Support me on Patreon: https://www.patreon.com/technotim
Sponsor me on GitHub: https://github.com/sponsors/timothystewart6
Subscribe on Twitch: https://www.twitch.tv/technotim
Become a YouTube member: https://www.youtube.com/channel/UCOk-gHyjcWZNj3Br4oxwh0A/join
Merch Shop 🛍️: https://l.technotim.live/shop
Gear Recommendations: https://l.technotim.live/gear
Get Help in Our Discord Community: https://l.technotim.live/discord
2nd channel: https://www.youtube.com/@TechnoTimTinkers

(Affiliate links may be included in this description. I may receive a small commission at no cost to you.)

00:00 - Why should I run Proxmox Backup Server?
00:54 - What is Proxmox Backup Server? (PBS)
01:57 - Installation
02:40 - Configuration
03:18 - Pruning and Garbage Collection
04:16 - Adding PBS to Proxmox VE
05:24 - Incremental Backups and Deduplication
06:34 - Comparing to NFS Backups
07:29 - File Level Backup & Restore
08:04 - Client Backups
08:28 - Bare Metal Restore?
08:45 - Backing up Proxmox VE Host
09:08 - Remote Synchronization
09:35 - Tape Backups
10:13 - Proxmox Backup Server is Back in my HomeLab!

#HomeLab #TechnoTim

Thank you for watching!

## Notes

## Transcript

You should be using Proxmox Backup Server - YouTube
https://www.youtube.com/watch?v=KxPl8SHREcE

Transcript:
(00:00) If you're running Proxmox VE, you're probably backing up your machines and your containers. But did you know that by using Proxmox Backup Server, you can reduce the storage needed for backups, reduce the time it takes to backup your machines, and reduce the bandwidth needed when backups run? A lot has changed since I first looked at Proxmox Backup Server years ago, and after checking out the most recent version, I realized how inefficient my current Proxmox Backup solution is. In this video, I'm going to show you why I switched back to Proxmox Backup Server,
(00:31) what the features are and how to use them, and how you can get the most out of Proxmox Backup Server and maybe reclaim 6 terabytes of data like I did. We'll also talk about what it's good at and some things that it's not so good at, but I'm pretty confident that by the end of this video, if you're running Proxmox VE and not running Proxmox Backup Server, you'll be running Proxmox Backup Server before the week's up. Now, if you've never heard of Proxmox Backup Server, or PBS for short,
(00:59) it's a standalone server to help you backup and restore your virtual machines, containers, and even physical host, but more on that later. It's written in Rust, but that probably doesn't matter unless you're like ThePrimeagen or really in the software development, but what that really means to you, the operator, is that it's lightweight, efficient, and fast.
(01:18) In fact, it's so lightweight that you'll have no problem running it on an old PC, a server, or even a mini PC like this one. Yes, you can run Proxmox Backup Server on a small N100 CPU with limited compute and RAM. Really, all you need is disk space, and depending on how many machines you need to backup, it might just all fit in this little machine.
(01:40) But hardware aside, Proxmox Backup Server is the one place to backup all of your machines, whether they are virtual machines or Linux containers that are running on Proxmox VE server. It can even backup other Linux machines in your environment, but spoiler alert, it's not great, but I'll tell you why when we cover it later. The installation is super simple.
(02:02) Dedicate a machine, download the ISO, write it to a USB drive, and install the server. Some may choose to virtualize this server like I have, but just understand that there's an inception scenario you might run into if you're running it as a virtual machine that's backing up the host's VMs. If your virtualization host is down, this means you cannot restore any of your machines or files.
(02:23) That's why I recommend installing this on a separate physical machine or at least another hypervisor in your environment. Once it's installed, you'll visit the Proxmox Backup Server web GUI to manage it. Some of this may seem familiar, like the dashboard, metrics over time, and many of the other features you see on its cousin, Proxmox Virtual Environment.
(02:43) There are a handful of things you may want to configure like your subscription, updates, repos, or even disks. After doing that, you'll want to visit the data store selection. Think of a data store as a location where your backups are stored. When adding a data store, you'll have the option to give it a name and the path on disk and where you want to store it.
(03:02) Now it's recommended to put this on something that has redundancy, like a ZFS pool, but it will work just fine using a standard Unix file system. If you're like me and using it for HomeLab, there are even ways to store it on a remote NFS share, which isn't supported, but it works just fine. I'll have a link to the guide that I followed in the video notes linked below. You also have the option to schedule garbage collection and your prune settings.
(03:22) Now I schedule these daily and these two jobs go hand-in-hand. Pruning will clean up the backup index files and the garbage collection will clean up the actual files or chunks on disk. That's how I like to think of it. In prune options, you can control which backup snapshots you want to keep. This is really going to depend on how long you want to keep your backups, so I will link to their docs so you can decide on your own strategy with all of the many other tuning options you have for datasets. But you can see mine here. You can also edit all of these options later too, so feel free
(03:54) to go with the defaults. Once the data store is created, you can now see more information about it as well as many other options that we just talked about. So before moving on, I would just make sure that you have prune and garbage collection jobs set up as well as verified jobs so we can be sure that your backups are cleaned up and that they are valid.
(04:14) I run this nightly when new backups are found and again every 30 days. So now that we have a data store, it's time to add it to Proxmox VE server so that we can start backing it up. After visiting your Proxmox VE server, you'll want to visit the data center section and then storage.
(04:29) When clicking add, you'll see a list of storage items that you can add, one being Proxmox backup server. After choosing it, you'll want to enter information about your Proxmox backup server. Now I would not use your root account here. I would create a backup account on PBS specifically for backups that only has data store permissions. This will allow this account to manage backups on your Proxmox backup server and nothing else.
(04:51) You'll also want to grab your certificate information too while you're here and paste it into this field. You don't need to make any changes in the retention policies since those are set on the server and I would highly recommend encrypting these backups and keeping your key in a safe place since this is the only way to unlock them.
(05:12) Once your PBS server is added, you can now back up your server as you normally would. In the data center view, I would choose backup, create a schedule, choose the storage location of PBS, choose which machines you want to back up, create, and you're all set. So why do we configure a Proxmox server over just using the file system or NFS over the network? Great question and this is where PBS really shines.
(05:35) With Proxmox backup server, backups are incremental and data is deduplicated. So what does that mean for you? That means that backups will take less time and less space and that's something that I think we all want from our backup system. For instance, if I backup a machine now, the first time it backs up, the system is going to do just that, backup the entire system.
(05:55) This also means that it's going to take up as much space as the files from the machine itself. This means that the backup ratio and time it takes is one-to-one. No time savings and no disk savings. If I back up the machine again, it now only incrementally backs up the client, only sending the data that has changed, and then later that data is deduplicated as needed.
(06:20) This makes it pretty efficient as far as backups go because there's less data to transfer, which has less impact on the network. Backups run for less time, which frees up resources on both servers sooner, and less storage used once the data is deduplicated on Proxmox backup server. This is the primary reason I switched back to Proxmox backup server over just backing up my machines to an NFS share.
(06:44) For example, when I was backing up to NFS, I was using almost 7 terabytes of space to backup my lab machines and my colocation machines. But after switching to Proxmox backup server, I was only using just over a terabyte of disk space while still having 10 times the amount of snapshots per machine. This is some pretty incredible storage savings.
(07:05) If you're trying to gauge how much storage savings you're getting from your data set, you can check this out on the data set page. Here you'll see a deduplication factor, so the higher the better. You can see I have a deduplication factor of around 65. This means if I weren't deduping, like when I was using NFS without PBS, I would be using 65 times the amount of disk space that I'm using now. So this is really cool stuff.
(07:30) One of the other benefits of using Proxmox backup server is that you can also do file level restores. This is such a nice feature and it works out of the box without any additional configuration. But this feature isn't as intuitive as I would like it to be. You can't seem to run it on PBS itself. You have to navigate into the backups on your PVE server. From there, you'll now see an additional option of file restore.
(07:52) This works just like you think it would. Select the backup date, select a folder or individual file, and then choose the archive you want to use and that's it. You can download it to the machine and use it however you like. Now you might be thinking that Proxmox would be a great general purpose backup system because it can backup individual files, but sadly I can't say that it is.
(08:13) While you can install the agent on most Debian systems, that's about it. There aren't any official ARM agents, Windows agents, or macOS agents. While there are some unofficial ones out there that may work, it's still on Proxmox's roadmap for the future.
(08:29) Another reason I don't think it's great for a general purpose backup system is that it can't do bare metal restores. If PBS could backup other operating systems and it offered a bare metal restore option, this would be a killer backup system. But I get it. It mainly exists to just backup Proxmox client machines. But what about the host server itself? Surely you can backup a Proxmox VE server in its configuration.
(08:52) No, at least not yet. As you can see on the roadmap, this feature is not yet supported for PBS and while you can simply install the PBS agent on the host and exclude most of the files and folders, a first class integration like VMs would be fantastic. There are two other features that I think that make this a well-rounded backup system.
(09:14) And the first one is remote synchronization, which allows you to synchronize your backups to other locations for redundancy. All you have to do is add the remote server, supply credentials, and the server certificate fingerprint, and you're connected. Then you just set up a sync job on your data stores, schedule it, and that's it.
(09:30) You're now syncing your data stores to another PBS system. Pretty awesome. The other feature is tape backup. Wait, tapes? What year is this? Yes, tapes. While I don't have a tape backup system, tapes are still a great way to backup data for long-term storage. Tapes are relatively cheap and dense, but tape drives are typically expensive.
(09:53) But the price doesn't stop a lot of enterprises from using them and is actually a great tool in a 3-2-1 backup strategy. The 3-2-1 backup strategy is three copies of your data on two different mediums and one off site. Supporting tape backup in a backup system actually makes a lot of sense because you get two mediums with it, your hard drives and the tape.
(10:18) So yeah, Proxmox backup server has once again landed in my home lab and isn't going anywhere soon since it's a perfect complement to Proxmox VE. If you're still using the built-in Proxmox VE backup and backing up to a file share, give Proxmox backup server a shot and you'll get some really cool features along the way. I hope you enjoyed this video. I'm Tim. Thanks for watching.