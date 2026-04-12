---
{"dg-publish":true,"dg-permalink":"uses","permalink":"/uses/","title":"Uses","tags":["tools","setup","productivity","indieweb"]}
---


# Uses

This is my "/uses" page — inspired by [uses.tech](https://uses.tech/) — documenting the tools, software, and setup that power my work in digital literacy research and education.

My choices prioritize open standards, data portability, and privacy by design. I'm mid-migration away from surveillance-based platforms toward local-first and self-hosted alternatives. This page reflects that work in progress.

---

## 💻 Hardware

### Primary Setup

- **Desktop (Main)**: DIY build — Ryzen 7 5800X3D, NVIDIA RTX 4070 (12GB), running Ubuntu. Primary workstation for everything.
- **The Metal Box**: Repurposed Intel i7-3770 desktop running Proxmox. Home for all self-hosted services.
- **Lenovo T480p**: Recycled e-waste, rebuilt on Pop!_OS. Road machine and backup.
- **Monitors**: LG 32ML600M (32" FHD) plus repurposed Dell monitors.
- **Input**: Logitech MX Keys keyboard and MX Master 3 mouse. Also experimenting with a Huion Kamvas 13 pen display for sketching and markup.
- **Audio**: Sony WH-1000XM4 (over-ear) and Sony WF-1000XM4 (earbuds).

### Mobile

- **Phone**: Google Pixel 9 Pro XL
- **Tablet**: Boox Note Air 5c — primary e-ink device for reading and annotation. Slower screen, intentionally. See [[02 DEVELOP/E-Ink and Intentional Computing\|E-Ink and Intentional Computing]].

---

## 🧠 Knowledge Management

### Core System

- **[Obsidian](https://obsidian.md/)** — Primary knowledge management. My entire intellectual life runs through here.
- **Digital Garden Plugin** — Publishes select vault notes to [digitallyliterate.net](https://digitallyliterate.net) via GitHub → Netlify → 11ty.
- **[Zotero](https://www.zotero.org/)** — Academic reference management. See [[01 CONSUME/📰 Papers/Zotero Obsidian Research Workflow\|Zotero Obsidian Research Workflow]].
- **[Hypothesis](https://web.hypothes.is/)** — Web annotation and research.

### Key Obsidian Plugins

- **Dataview** — Dynamic content queries across the vault
- **Templater** — Automated note creation
- **Smart Connections** — AI-powered note linking
- **Calendar** — Daily note organization

### Local AI

- **[Ollama](https://ollama.ai/)** — Self-hosted local LLM runner. Runs on the desktop GPU (RTX 4070) so models stay on my hardware.
- **[AnythingLLM](https://anythingllm.com/)** — Interface for chatting with my vault locally via RAG. See [[04 META/🔧 Workbench/Obsidian/Local AI Setup - Ollama and AnythingLLM with Obsidian\|Local AI Setup - Ollama and AnythingLLM with Obsidian]].

### Research Tools

- **[NotebookLM](https://notebooklm.google.com/)** — Qualitative research analysis, especially for working with transcripts and interview data.
- **Connected Papers / Semantic Scholar** — Academic paper discovery and citation mapping.

---

## 📝 Writing & Research

### Academic Writing

- **Google Docs** — Still using for collaborative drafts and co-authored papers. On the migration list.
- **Pandoc** — Document conversion and formatting between formats.
- **ProtonMail / ProtonDrive** — Secure email and document sharing.
- **CryptPad / Nextcloud** — Collaborative writing and storage for projects where I want something other than Google.

### Content Creation

- **WordPress** — Blog publishing at [wiobyrne.com](https://wiobyrne.com).
- **Buttondown** — Newsletter distribution for Digitally Literate.
- **Canva** — Visual content creation.

---

## 🌐 Web & Infrastructure

### Site Publishing

- **GitHub** — Version control and digital garden hosting.
- **Netlify** — Static site deployment.
- **Cloudflare** — DNS and performance.

### Homelab

- **[Proxmox](https://www.proxmox.com/)** — Virtualization platform. Runs VMs and containers for all self-hosted services. See [[02 DEVELOP/Homelab Journey Overview\|02 DEVELOP/Homelab Journey Overview]].
- **[Home Assistant](https://www.home-assistant.io/)** — Local-first smart home automation, running as a Proxmox VM. No cloud dependency.
- **[Frigate](https://frigate.video/)** — Self-hosted NVR for home cameras, replacing Wyze cloud. Local AI object detection via VAAPI. See [[04 META/🔧 Workbench/Homelab/Services/Frigate NVR\|Frigate NVR]].
- **[TrueNAS](https://www.truenas.com/)** — Network attached storage and local backup.
- **[FreshRSS](https://freshrss.org/)** — Self-hosted RSS reader. Paired with Feedflow for mobile reading.
- **[Calibre-Web](https://github.com/janeczku/calibre-web)** — Self-hosted ebook library.

### Development Tools

- **VS Code** — Code editing and markdown work.
- **[Warp](https://www.warp.dev/)** — Terminal with AI assist for command line work.
- **Git** — Version control.

---

## 🎙️ Media & Communication

### Communication

- **Zoom / Jitsi** — Video conferencing.
- **Signal** — Secure messaging.

---

## 🔐 Privacy & Security

### De-Googling (In Progress)

I'm actively moving away from Google's ecosystem. Progress is real but uneven.

| Service | From | To | Status |
|---------|------|----|--------|
| Storage | Google Drive | Nextcloud / ProtonDrive | 🔄 In Progress |
| Email | Gmail | ProtonMail | ✅ Done |
| Surveillance | Wyze Cloud | Frigate + Home Assistant | ✅ Done |
| Calendar | Google Calendar | [Replacement TBD] | 🔄 In Progress |
| Docs | Google Docs | CryptPad / Nextcloud | 🔄 In Progress |

### Security Essentials

- **[Bitwarden](https://bitwarden.com/)** — Password management and authenticator.
- **[ProtonVPN](https://protonvpn.com/)** — VPN.
- **Signal** — Encrypted messaging.
- **ProtonMail** — Secure email.

### Privacy Tools

- **uBlock Origin, Privacy Badger** — Browser extensions.
- **DuckDuckGo** — Primary search.

---

## 📚 Reading & Research

- **FreshRSS** (self-hosted) + **Feedflow** — RSS reading and management.
- **Obsidian Web Clipper** — Save and annotate web content directly to the vault.
- **KOReader** — Ebook reading on the Boox.
- **Calibre-Web** (self-hosted) — Personal epub library.
- **Audible / Hoopla / Libby** — Audiobooks.

---

## 🎯 Productivity

- **Tasks**: Testing Obsidian Tasks and Todoist. Not settled.
- **Calendar**: Google Calendar (migration in progress).

---

## 🔄 Why These Choices?

My tool choices prioritize **open standards**, **data portability**, and **privacy by design**. The core principle is tools that enhance thinking rather than complicate it.

In 2025–2026 that's sharpened into something more specific: sovereignty at a reasonable cost. I'm decoupling my research and personal life from surveillance capitalism, favoring local-first software and self-hosted infrastructure where practical. This isn't purist — I still use tools I'm skeptical of — but the direction of travel matters.

I try to practice what I teach. If I'm asking students to think critically about the platforms and tools shaping their digital lives, I should be doing the same work myself.

Happy to discuss any of these. Reach out if you have questions about implementing similar setups.

---

*This page is part of the [IndieWeb](https://indieweb.org/) "/uses" tradition. Find more at [uses.tech](https://uses.tech/).*

---

## Connections

- [[04 META/👤 About Me/Now\|Now]]
- [[04 META/👤 About Me/About Me\|About Me]]
- [[02 DEVELOP/Digital Sovereignty Framework\|Digital Sovereignty Framework]]
- [[04 META/🔧 Workbench/Obsidian/Local AI Setup - Ollama and AnythingLLM with Obsidian\|Local AI Setup - Ollama and AnythingLLM with Obsidian]]
- [[02 DEVELOP/Homelab Journey Overview\|02 DEVELOP/Homelab Journey Overview]]
