---
{"dg-publish":true,"permalink":"/03-create/blog/homelab-journey-part-4-network-configuration/","title":"Homelab Journey, Part 4: Network Configuration","tags":["homelab","networking","vlan","security","proxmox"]}
---


# Homelab Journey, Part 4: Network Configuration
## Designing the Digital Neighborhood

[[03 CREATE/🎯 Projects/🟢 Active/Homelab Bloging/Homelab Journey Overview\|Homelab Journey Overview]]
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

[[03 CREATE/🎯 Projects/🟢 Active/Homelab Bloging/Homelab Journey Overview\|Homelab Journey Overview]]

---

This is a great pivot. The old draft was describing a "traditional" homelab (VLANs, physical switches, firewalls like pfSense).

**Your actual reality is much more modern and software-defined.** You aren't slicing up cables with VLANs; you are slicing up **traffic** using Nginx Proxy Manager and Docker. You are trading network complexity for application complexity (YAML, Reverse Proxies, Containers).

Here is the revised blog post outline that matches **exactly** what you built today: the Mac mini Proxmox cluster, the Ubuntu Docker VM, and the Nginx "Traffic Cop."

---

# Homelab Journey, Part 4: The Network & The Traffic Cop

## Escaping `192.168.86.x`: How I Used Nginx Proxy Manager to Tame the Chaos

[[03 CREATE/🎯 Projects/🟢 Active/Homelab Bloging/Homelab Journey Overview\|Homelab Journey Overview]]

### Core Questions

- How do I access 20 different services without remembering 20 different IP addresses?
    
- How do I get the "Green Padlock" (HTTPS) inside my own house?
    
- Why did I choose a Reverse Proxy over complex VLANs?
    
- How do I troubleshoot when the "Bad Gateway" (502) strikes?
    

### Drafting Notes

- **The Shift:** Moving from "IP:Port" access (e.g., `192.168.86.110:8123`) to Subdomains (`ha.heartpine.online`).
    
- **The Architecture:** Proxmox Node -> Ubuntu Docker VM -> Nginx Proxy Manager.
    
- **The Struggle:** Protocol mismatches (HTTP vs HTTPS backends) and Websockets.
    

---

# 🌐 Homelab Journey, Part 4: The Network Layer

**Domains, Reverse Proxies, and the "Green Padlock" — how I stopped memorizing ports and started acting like a SysAdmin.**

[[03 CREATE/🎯 Projects/🟢 Active/Homelab Bloging/Homelab Journey Overview\|Homelab Journey Overview]]

---

## TL;DR

I skipped the traditional "physical segmentation" (VLANs/Managed Switches) in favor of **Application-Layer Networking**. Using a Mac mini running Proxmox, I consolidated my services into a Docker stack. The hero of this story is **Nginx Proxy Manager (NPM)**, which acts as the traffic cop, routing `plex.heartpine.online` to the right internal IP while managing SSL certificates automatically. It wasn't without headaches—specifically 502 errors and protocol mismatches—but the result is a seamless, professional dashboard.

---

## Background & Constraints

- **Hardware Base:** A Mac mini running Proxmox VE (quiet, power-efficient).
    
- **The "Before" State:** A Google Wifi mesh network (192.168.86.x) where every service lived on a random port. "What port was Sonarr again? 8989? 7878?"
    
- **The Goal:** A unified "Command Center" (Homepage) accessible via clean URLs, secured with SSL, without needing to run a heavy VPN client on every device.
    

---

## The Logical Topology (The "Stack")

Instead of complex wiring, my network is defined by software:

1. **The Entry Point:** Google Wifi Router (Port 80/443 forwarded to my Server).
    
2. **The Hypervisor:** Proxmox VE (Hosting the infrastructure).
    
3. **The Docker Host:** An Ubuntu VM serving as the "Engine Room."
    
4. **The Gatekeeper:** **Nginx Proxy Manager (NPM)** container.
    
    - _Traffic Flow:_ `Internet` -> `Router` -> `NPM` -> `Internal Docker Containers`.
        

> _Visual Idea: A diagram showing a funnel. The top is "The Internet," narrowing down to "Nginx Proxy Manager," which then sprays traffic out to Plex, Home Assistant, and Sonarr based on the domain name used._

---

## How I Set It Up (The Real Steps)

### 1) The "One VM to Rule Them All" Strategy

Instead of running Docker directly on Proxmox (messy), I spun up a dedicated Ubuntu VM.

- **Why?** It keeps the Proxmox host clean. If I break Docker, I just restore the Ubuntu VM snapshot.
    
- **Networking:** The VM gets a static IP (`192.168.86.29`) so my router always knows where to send traffic.
    

### 2) The Reverse Proxy (Nginx Proxy Manager)

This was the game changer. instead of accessing `http://192.168.86.29:8123` for Home Assistant, I configured NPM to listen for `ha.heartpine.online`.

- **SSL is Free:** NPM connects to Let's Encrypt to generate valid certificates automatically. No more "Your connection is not private" warnings in Chrome.
    
- **The "Hairpin" Benefit:** Even when I'm home, I use the domain name. My router loops the traffic back locally, so it feels like a cloud service but runs on my desk.
    

### 3) Handling the "Other" Nodes (Scrypted & TrueNAS)

My lab grew. I added a second Proxmox node for **Scrypted** (Camera interactions) and have a separate **TrueNAS** box.

- **The Win:** NPM doesn't just proxy local Docker containers; it can proxy _anything_ on the network. I pointed `nas.heartpine.online` to `192.168.86.101` and suddenly my storage server has SSL too.
    

---

## Troubleshooting Highlights (The "Oh Sh*t" Moments)

### 1. The "502 Bad Gateway" Nightmare

I spent hours fighting 502 errors when trying to proxy Proxmox and TrueNAS.

- **The Cause:** Protocol Mismatch. I was telling Nginx to speak `HTTP` to Proxmox, but Proxmox _only_ speaks `HTTPS`.
    
- **The Fix:** Changing the backend scheme in NPM to `https` and port to `8006`. It seems obvious now, but the error logs were cryptic.
    

### 2. The "Black Screen" Console (Websockets)

I got Proxmox loading, but the VNC console (the screen where you actually see the VM) stayed black.

- **The Fix:** Ticking the tiny checkbox in NPM called **"Websockets Support."** Without this, the live streaming data (used by Scrypted cameras and Proxmox consoles) gets dropped at the door.
    

### 3. The "Headless" Ghost (HDHomeRun)

I tried to proxy my HDHomeRun DVR to add it to the dashboard.

- **The Realization:** Not everything _has_ a web interface. The DVR engine is "headless"—it just runs. No UI means nothing to proxy. Sometimes, a service is just a background worker, and that's okay.
    

---

## Security Checklist (What I actually implemented)

- **Block Common Exploits:** A simple toggle in NPM that filters out known malicious web requests.
    
- **Strict Port Forwarding:** The _only_ ports open on my physical router are 80 and 443. Everything else (SSH, Portainer, Database ports) is locked inside the network.
    
- **Host Validation:** Dealing with Homepage's new security features (the `HOMEPAGE_ALLOWED_HOSTS` error) to ensure only valid traffic hits the dashboard.
    

---

## What I’d write into the lab notebook (Obsidian)

- **The "Services" Cheat Sheet:** A table listing the Internal IP vs. External Domain for every service.
    
    - _Ex:_ `192.168.86.110:8123` -> `ha.heartpine.online`
        
- **Docker Compose Backups:** A copy of the `docker-compose.yml` file. If the VM dies, I can paste this text into a new VM and be back up in 5 minutes.
    
- **The "Golden Rule" of YAML:** "Indentation is not a suggestion; it is the law." (Learned after crashing the dashboard with a single stray space).
    

---

## Closing Thoughts

My network isn't defined by cables anymore; it's defined by **domains**. By shifting the complexity to the software layer (Nginx), I gained flexibility. I can move a service to a different IP, update the proxy, and no one in the house notices because the URL stays the same.

Next: Part 5 — The Dashboard (Homepage) & The YAML War.

Parallel meta post: [[ai-02-co-piloting-the-config\|ai-02-co-piloting-the-config]]


This is a crucial distinction to understand, especially when writing your blog post. You have effectively chosen **convenience and accessibility** (Software-Defined) over **hard isolation** (Hardware/VLANs).

Here is the breakdown of the two philosophies, why you chose the path you did, and the security reality of that choice.

### 1. The Analogy: Slicing Cables vs. Slicing Traffic

#### The Traditional Way: "Slicing Cables" (VLANs)

Imagine your network is a physical office building.

- **VLANs (Virtual LANs)** are like building brick walls between departments.
    
- The "IoT" department is in a locked room. The "Server" department is in a vault.
    
- If a cheap smart bulb in the IoT room gets "infected" (hacked), it cannot walk over to the Server room because there is a physical wall (firewall rule) blocking it.
    
- **The Cost:** You need expensive blueprints (managed switches), a rigorous security guard (pfSense/OPNSense router), and complex rules to let them talk when necessary.
    

#### Your Way: "Slicing Traffic" (Reverse Proxy)

Imagine your network is an open-plan office (a "flat" network). Everyone is in the same room.

- **Nginx Proxy Manager** is the Receptionist at the front desk.
    
- All requests from the outside world must go to the Receptionist. She checks the guest list (Domain Name), puts a security badge on them (SSL/HTTPS), and points them to the right desk.
    
- **The Difference:** Once someone is inside the room, there are no walls. If the Receptionist accidentally lets a bad guy in, or if a bad guy sneaks in through a window (a hacked device), they can walk over to any desk they want.
    

---

### 2. Why Your Approach is Better (For You)

You chose the "Traffic Cop" model over the "Brick Wall" model. Here is why that was the smart move for your specific setup:

**1. You are hardware-constrained (Google Wifi).**

- **The Limit:** Consumer mesh systems like Google Wifi / Nest Wifi generally **do not support VLANs** for internal segmentation. They create one big happy network.
    
- **The Fix:** To do VLANs, you would have had to throw away your mesh system and buy Ubiquiti or Omada gear ($500+ investment). Your software approach cost $0.
    

**2. Ease of Access > Military Isolation.**

- **The Benefit:** You want your phone to control Home Assistant and your TV to play Plex without complex firewall rules blocking the traffic.
    
- **The Reality:** In a VLAN setup, getting your phone (VLAN A) to cast YouTube to a TV (VLAN B) is a networking nightmare (mDNS reflection, firewall pinholes). Your "flat" network just works.
    

**3. "Green Lock" Security.**

- **The Benefit:** Your setup prioritizes **encryption**. By using Nginx, you ensure that even though everyone is in the same room, they are whispering in code (HTTPS). No one listening on the wire can steal your passwords.
    

---

### 3. The Security Ledger: What Are You Actually Protecting?

This is critical for the blog post. You need to be honest about the trade-offs.

#### ✅ What This Protects (Your Wins)

1. **Eavesdropping:** Because Nginx handles SSL (Let's Encrypt), your passwords and data are encrypted in transit. If you log into Home Assistant from a coffee shop, no one can sniff your credentials.
    
2. **Port Scanning:** You are only exposing Port 443 (HTTPS) to the internet. Bots scanning for open SSH ports (22) or Database ports (3306) will hit a wall.
    
3. **Service Obscurity:** Attackers don't know that Sonarr is on port 8989 or that Proxmox is on 8006. They only see the Receptionist (Nginx).
    
4. **Exploit Filtering:** Nginx Proxy Manager has basic "Block Common Exploits" settings that can stop simple SQL injections or script attacks before they reach your apps.
    

#### ❌ What This DOESN'T Protect (The Risks)

1. **Lateral Movement (The "Infected Bulb" Scenario):** Since you don't have VLANs, if a hacker manages to compromise a cheap $10 smart plug on your wifi, that plug can technically "ping" your TrueNAS server or your Proxmox host because they are on the same `192.168.86.x` network. There is no internal firewall stopping device A from talking to device B.
    
2. **Compromised Container:** If your "Sonarr" container gets hacked, the attacker is now inside your Docker network and can potentially attack other containers or the host itself (unless you use strict Docker network isolation, which is advanced).
    

### Summary for the Blog

You can frame it like this:

> _"I didn't build a fortress with internal blast doors (VLANs); I built a modern, open-concept office with a very strict, high-tech doorman (Nginx). For a home lab running media and automation on consumer hardware, protecting the **entry point** (Identity & Encryption) was more valuable to me than segregating the **internal traffic**."_