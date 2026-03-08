---
{"dg-publish":true,"dg-permalink":"privacy-by-design","permalink":"/privacy-by-design/","title":"Privacy by Design","tags":["grove","privacy-by-design","privacy","encryption","tools","zero-knowledge"]}
---


# Privacy by Design

*Tools That Protect You by Default*

> Privacy should be built into technology from the start, not added as an afterthought.

---

## What is Privacy by Design?

Think of it like a house built with strong locks on every door and window by default — you shouldn't have to install the locks after moving in.

Tools that follow privacy-by-design principles **protect your information automatically**, so you don't need to be a tech expert to stay safe. The key insight: **the tool itself does the privacy work**, not you.

**Example:** An online document editor with privacy by design will encrypt your notes automatically. Even the server hosting it can't read what you write. You just... use it. The privacy happens in the background.

---

## Why This Matters

Every platform we use either reinforces extractive digital practices or models a cooperative, privacy-respecting alternative.

**Tool choices become pedagogy.** When we choose privacy-first tools, we're not just protecting ourselves — we're demonstrating that alternatives exist and work.

---

## Core Principle

**Zero-knowledge architecture**: The service provider cannot access your data, even if they wanted to. Your encryption keys stay with you.

This is different from "we promise not to look" — it's "we literally cannot look."

---

## The Privacy-First Toolkit

### Documents: [[CryptPad\|CryptPad]] 🔹

**The Google Docs replacement that can't read your docs.**

| What | Why |
|------|-----|
| Zero-knowledge encryption | Even admins can't read your data |
| Real-time collaboration | Works like Google Docs |
| Multiple doc types | Documents, spreadsheets, presentations, kanban |
| GDPR compliant | EU hosting, privacy-first |

**Getting Started:** Visit [cryptpad.fr](https://cryptpad.fr), create a free account, start a document. That's it.

**Cost:** Free tier (1GB) → Premium €5-15/month

---

### Messaging: [[Signal\|Signal]] 🔹

**Private messaging that just works.**

| What | Why |
|------|-----|
| End-to-end encryption | Only you and recipient can read messages |
| Disappearing messages | Auto-delete sensitive chats |
| Simple interface | As easy as regular texting |
| Cross-platform | Phone, tablet, desktop |

**Getting Started:** Download from app store, verify with phone number, message someone.

**Limitation:** Requires phone number (use [[Session\|Session]] for full anonymity)

---

### Community Chat: [[Matrix\|Matrix]]/Element 🔸

**Discord/Slack alternative you can actually control.**

| What | Why |
|------|-----|
| End-to-end encryption | All messages protected |
| Federation | No single point of failure or control |
| Self-hostable | Run your own server if you want |
| Bridges | Connect to Discord/Slack during transition |

**Getting Started:** Download Element app, join a public server or create your own space.

**Cost:** Free (hosted) → $5/user/month (managed) → Self-host for full control

---

### File Storage: [[Nextcloud\|Nextcloud]] 🔸

**Your own cloud. Your rules.**

| What | Why |
|------|-----|
| Complete data sovereignty | Your servers, your data |
| Full productivity suite | Files, calendar, contacts, office |
| Self-hosted or cooperative | Multiple deployment options |
| 300+ apps | Extend functionality as needed |

**Getting Started:** Use a cooperative host like CommonsCloud, or self-host with Docker.

**Cost:** Cooperative hosting €0.50-15/user/month → Self-hosted $75-150/month

---

## Quick Reference

| Need | Privacy-First Solution | Alternative | Why It Protects |
|------|------------------------|-------------|-----------------|
| Documents | **CryptPad** | HedgeDoc | Zero-knowledge encryption |
| Messaging | **Signal** | Session | End-to-end encryption by default |
| Community | **Matrix/Element** | Rocket.Chat | Encrypted + federated |
| Files | **Nextcloud** | Proton Drive | Community ownership |

---

## Making the Switch

### Start Simple
1. **Pick one tool** — Signal is usually easiest
2. **Use it alongside** your current tools
3. **Invite others** — privacy works better together
4. **Gradually migrate** as you get comfortable

### For Communities
1. **Identify champions** who learn deeply and help others
2. **Run parallel systems** during transition
3. **Frame it as learning** not just a tech swap
4. **Decide together** — democratic governance matters

---

## Common Concerns

**"This sounds hard."**
→ Start with Signal. It's as easy as regular texting.

**"I'm not technical."**
→ Privacy-by-design means the tool does the work, not you.

**"What if it breaks?"**
→ Cooperative hosts provide professional maintenance and backups.

**"Can we afford this?"**
→ Many tools are free. Paid options often cost less than what you're giving away in data.

---

## Deeper Dives

- [[02 DEVELOP/🌿 Plants/Document Collaboration Tools\|Document Collaboration Tools]] — Detailed comparison of CryptPad, HedgeDoc, Nextcloud Office
- [[02 DEVELOP/🌿 Plants/Communication Platforms\|Communication Platforms]] — Matrix vs Signal vs Session: when to use each
- [[02 DEVELOP/🌿 Plants/File Storage Solutions\|File Storage Solutions]] — Self-hosted vs cooperative vs privacy cloud
- [[02 DEVELOP/🌿 Plants/Privacy-First Communication Tools\|Privacy-First Communication Tools]] — Voice messaging and group calls
- [[02 DEVELOP/🌿 Plants/Privacy Tools Index\|Privacy Tools Index]] — Full curated list of privacy-forward tools

---

## Foundational Concepts

- [[03 CREATE/🌲 Evergreens/Privacy Security Encryption Defined\|Privacy Security Encryption Defined]] — The three layers of protection (curtains, locks, safe)
- [[02 DEVELOP/🌿 Plants/Privacy is Power Not Secrecy\|Privacy is Power Not Secrecy]] — Why privacy matters
- [[02 DEVELOP/🌿 Plants/Threat Modeling for Regular People\|Threat Modeling for Regular People]] — Asking the right questions

---

Privacy by Design reduces risk through architecture, but tools alone can't protect people from poor communication practices.

## Messaging as Privacy by Design (Worked Example)

Signal illustrates what privacy by design looks like in everyday communication:

- **[[Signal: Private Messaging by Design\|Signal: Private Messaging by Design]]** — How encryption and minimal metadata work by default
- **[[02 DEVELOP/🌿 Plants/Signal Group Hygiene & Communication Norms\|Signal Group Hygiene & Communication Norms]]** — How shared habits protect people, not just messages
- **[[02 DEVELOP/🌿 Plants/Disappearing Messages as a Care Practice\|Disappearing Messages as a Care Practice]]** — Why message decay supports consent and reduces harm
- **[[Signal Usernames: Access, Boundaries, and Care\|Signal Usernames: Access, Boundaries, and Care]]** — How flexible contact paths support healthy boundaries

Together, these notes show how tool design and communication norms work best when they reinforce each other.

---

## Legal and Policy Frameworks

Privacy by design doesn't exist in a vacuum — it responds to (and sometimes outpaces) legal frameworks.

- [[GDPR (General Data Protection Regulation)\|GDPR (General Data Protection Regulation)]] — The EU standard that made privacy-by-design a legal requirement
- [[CCPA (California Consumer Privacy Act)\|CCPA (California Consumer Privacy Act)]] — U.S. state-level data protection
- [[Data Sovereignty\|Data Sovereignty]] — Jurisdiction and control over where data lives
- [[Digital Rights Advocacy\|Digital Rights Advocacy]] — The movement pushing for structural change
- [[03 CREATE/🌲 Evergreens/Surveillance Capitalism\|Surveillance Capitalism]] — The economic model privacy by design resists

---

## Privacy-Preserving Technologies

The technical frontier — ways to use data without exposing it.

- [[Federated Learning\|Federated Learning]] — Training AI without centralizing data
- [[Differential Privacy\|Differential Privacy]] — Mathematical guarantees for individual protection
- [[Homomorphic Encryption\|Homomorphic Encryption]] — Computing on encrypted data
- [[Secure Multi-Party Computation\|Secure Multi-Party Computation]] — Multiple parties collaborating without revealing their inputs
- [[Decentralized Identity\|Decentralized Identity]] — Identity you control, not a platform
- [[Zero Trust Architecture\|Zero Trust Architecture]] — Trust nothing by default, verify everything

---

## Related

- [[03 CREATE/🪴 Groves/Digital Self-determination\|Digital Self-determination]] — The parent Grove
- [[03 CREATE/🪴 Groves/Digital Sovereignty\|Digital Sovereignty]] — Owning your infrastructure
- [[03 CREATE/🪴 Groves/Digital Resilience\|Digital Resilience]] — Skills for staying safe online
- [[03 CREATE/🪴 Groves/Security Culture as Digital Literacy\|Security Culture as Digital Literacy]] — Shared norms that protect people, not just data
- [[02 DEVELOP/🌿 Plants/Self-Hosting for Digital Sovereignty\|Self-Hosting for Digital Sovereignty]] — Taking control of your infrastructure
- [[02 DEVELOP/🌱 Seeds/Signal and the Law\|Signal and the Law]] — Legal framing for encrypted communication

---

*Privacy by design isn't about being paranoid. It's about choosing tools that respect you by default.*

## Connections
