---
{"dg-publish":true,"permalink":"/01-consume/articles/thinking-like-a-hacker-part-1/","title":"Thinking Like A Hacker — Part 1","tags":["hacker","ethical-hacker"]}
---


# Thinking Like A Hacker — Part 1

## Key Points:
One of the things that amaze me is how the mind works and it’s ability to be malleable and accommodate new thinking patterns. An ethical hacker follows methodological thinking that soon becomes second nature as it is repeated again and again. This thinking pattern is responsible for some of greatest feats in the cybersecurity domain.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*2lizEfewPiQ8wA7i2SanSQ.jpeg)

[Unsplash](https://unsplash.com/photos/58Z17lnVS4U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

## Let’s get into the hacker’s brain — R.S.E.M.C

## 1\. Reconnaissance

> *Reconnaissance has its origin in the French word “* reconnaître” *which means to “recognize”*

That is basically what reconnaissance is about; it is investigating to see if we can recognize any information that can give us an advantage or leverage *(actionable intelligence)* as we attempt breaking into a device, network or organization *(eg. host information, network infrastructure, security policies etc)*. This is the first stage in any ethical hacking endeavor so it’s important to spend enough time to gather as much as possible especially if you haven’t run recon on that target before — the more actionable intelligence you have, the better.

Reconnaissance is also called footprinting. Have you heard of a digital *footprint*? It’s basically all the information that exists on the internet as a result of your online activity. Footprinting = finding the target’s digital footprint. I’m sure you get the idea now.

Reconnaissance comes in two flavors: Passive Reconnaissance & Active Reconnaissance

- **Passive Reconnaissance:** In passive recon, you gather information without directly interacting with the target. In this instance, the target does not know the attacker is gathering information on it/them. Most information gathering here is from publicly available sources which is called Open Source Intelligence (OSINT).

There are a plethora of tools to use when it comes to OSINT but let me give you two resource where you can find 100+ resources to help gather information on your target:  
[https://osintframework.com/](https://osintframework.com/)

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*BPEyPUPLfSsE63Buhz7SAw.png)

OSINT Framework

[https://start.me/p/aLGJ1j/osint](https://start.me/p/aLGJ1j/osint)

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*yAG-gXPgmHuOejNkFvpvRw.png)

- **Active Reconnaissance:** In active recon, you gather information by directly interfacing with the target. This method is generally faster and more accurate with more real-time information. However, it also has the tendency of generating noise within the system and there is a higher chance of being detected (although a lot of organizations tend to have poor security hygiene so you may not be detected, but either way, be wary).

> A good rule of thumb is to use passive recon to gather breadth and use active recon to gain depth and accuracy. It’s not always applicable in every instance, but it’s a good way to start.

## 2\. Scanning & Enumeration

This stage involves accumulating information about the ports, services and resources available on a list of targets gathered from the reconnaissance stage. The aim is to find the services that are known and reachable from your source. Information gathered during this phase is also traditionally used to determine the operating system (or firmware version) of the target devices.

The key focus of this stage is to identify security vulnerabilities within systems and networks. Here are some things to pay attention to:

- **Network scanning**: Scanning the target’s network to discover IP addresses, operating systems, topology, etc.
- **Port scanning**: Scanning the target for open ports and running services.
- **Vulnerability scanning**: This scanning technique identifies a target’s weaknesses and attempts to exploit those bugs in various ways. It is carried out using automated tools such as Nessus, OpenVAS, Nikto, and others. One resource to use is the [National Vulnerability Database (NVD)](https://nvd.nist.gov/), it is home to vulnerability management data created and maintained by the U.S. government that analyzes the software vulnerabilities published in the Common Vulnerabilities and Exposures (CVE) database. The NVD rates the severity of known vulnerabilities using the Common Vulnerability Scoring System (CVSS).

Let’s talk about one of the big players used in scanning and enumeration — **Nessus**  
Nessus is an open-source network vulnerability scanner, developed by Tenable, that scans for possible vulnerabilities that could be exploited. Nessus tests each port, determines what service is running, its version, and then tests the service to make sure there are no vulnerabilities in it that could be used by a bad actor to carry out a malicious attack.  
[Download Nessus from Tenable](https://www.tenable.com/downloads/nessus?loginAttempted=true)

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*UR3EMT4pKe-ufELNRPV7hA.png)

Nessus scan

> Here’s a tool you can use to parse Nessus scan files Nessus and export those files to a Microsoft Excel Workbook for easy analysis: [Nessus File Analyzer](https://github.com/LimberDuck/nessus-file-analyzer)

The summary of part one is that reconnaissance and scanning & enumeration are essential stages in the ethical hacking methodology. These steps involve gathering information, identifying vulnerabilities, and mapping the target network or system. Ethical hackers use these techniques to gain valuable intelligence, identify potential entry points, and understand the target’s security posture. In part two, we will look at how all these valuable findings can turn into actionable steps for gaining access to the target.

I demystify cybersecurity through documenting my journey, accessible content, sharing advice, and discussions. Building a community for a secure digital future.

## More from iamblacklight

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--2548de8656f7---------------------------------------)

## Summary:
Thinking Like A Hacker - The Ethical Hacker Methodology - Part 1 is about the first two stages of ethical hacking, reconnaissance, scanning & enumeration.

---

*Source: [Thinking Like A Hacker — Part 1](https://medium.com/@iamblacklight/thinking-like-a-hacker-part-1-2548de8656f7)*
