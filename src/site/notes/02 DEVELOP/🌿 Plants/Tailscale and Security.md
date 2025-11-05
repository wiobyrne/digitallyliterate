---
{"dg-publish":true,"permalink":"/02-develop/plants/tailscale-and-security/","title":"Tailscale and Security","tags":["tailscale","security","vpn","network-security","remote-access"]}
---


# Tailscale and Security

Understanding what Tailscale does and how it helps (or doesn't help) "lock down" your Proxmox settings is crucial for proper security implementation.

## What Tailscale Does

Tailscale creates a secure, private network (a mesh VPN) between your devices. Think of it like creating a virtual, encrypted tunnel between your devices, no matter where they are located. This tunnel makes your devices act as if they are on the same local network, even if they are miles apart.

## How Tailscale Helps with Security

### 1. Remote Access Security
If you want to access your Proxmox web interface or your LXCs remotely (from outside your home network), Tailscale provides a secure way to do so. Instead of opening ports on your router and exposing your Proxmox web interface directly to the internet, you can connect to your Proxmox host via Tailscale.

**Benefits:**
- All traffic is encrypted
- No need to open ports on your router
- Only devices that are part of your Tailscale network can access your Proxmox host

### 2. Network Segmentation
Tailscale can help you create separate, isolated networks. For example, you could have one Tailscale network for your personal devices and another for your work devices. This can limit the impact of a security breach if one of your devices is compromised.

## What Tailscale Does NOT Do

### 1. Firewall Replacement
Tailscale is **not** a firewall. It doesn't replace the need for a firewall on your Proxmox host or on your local network. You still need to configure firewalls to control what traffic is allowed in and out of your network and your Proxmox host.

### 2. Intrusion Detection/Prevention
Tailscale doesn't actively monitor for or prevent intrusions. It provides a secure connection, but it doesn't analyze the traffic for malicious activity.

### 3. Application-Level Security
Tailscale doesn't secure the applications running on your LXCs. For example, if you have a web server running in an LXC, Tailscale will provide secure access to that web server, but it doesn't protect the web server from vulnerabilities in the web server software itself.

## Is Tailscale Enough to "Lock Down" Proxmox?

Tailscale is a great tool for securing **remote access** to your Proxmox host and other devices. It's an important piece of the security puzzle. However, it's not a complete solution.

## Comprehensive Security Strategy

To fully secure your Proxmox setup, you should also:

### Essential Security Measures
- **Configure a firewall:** Use `iptables` or `nftables` on your Proxmox host to restrict access to the Proxmox web interface and other services
- **Keep software updated:** Regularly apply security updates to Proxmox and the operating systems running in your LXCs
- **Use strong passwords:** Implement strong and unique passwords for your Proxmox web interface, your LXCs, and your Tailscale account
- **Enable two-factor authentication (2FA):** Enable 2FA for your Proxmox web interface and your Tailscale account
- **Harden your LXCs:** Follow security best practices for the operating systems running in your LXCs
- **Monitor logs:** Regularly review logs to identify any suspicious activity

### Access Control Best Practices
- Only allow access from trusted IP addresses or networks (including your Tailscale network)
- Implement principle of least privilege
- Regular access reviews and cleanup

## Summary

**Tailscale enhances your security by providing secure remote access.** But it's just one component of a comprehensive security strategy. You need to combine it with other security measures to fully "lock down" your Proxmox environment.

Think of Tailscale as a secure front door to your house - it's excellent protection, but you still need locks on individual rooms, security cameras, and alarm systems for complete protection.
