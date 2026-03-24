# Digitally Literate — Digital Garden

My personal digital garden: an evolving space for digital literacy, creativity, and professional development.

**[digitallyliterate.net](https://digitallyliterate.net)** · **[Newsletter](https://digitallyliterate.net/newsletter/)** · **[Blog](https://wiobyrne.com)**

Built with the [Obsidian Digital Garden plugin](https://github.com/oleeskild/Obsidian-Digital-Garden) and deployed on Netlify.

---

## How notes grow here

Notes move through growth stages — from raw captures to polished, teachable ideas:

| Stage | What it means |
|---|---|
| 🌱 Seed | Raw capture, lightly structured |
| 🌿 Plant | Expanded, connected, tensions clarified |
| 🌲 Evergreen | Polished, teachable, reusable |
| 🪴 Grove | A cluster of related notes |
| 🌳 Forest | A full framework or domain |

Growth stage badges appear on every note.

---

## What's customized here

This repo is a fork of [oleeskild/digitalgarden](https://github.com/oleeskild/digitalgarden) with significant changes to the theme and layout:

**Typography & Color**
- Fonts: [Lora](https://fonts.google.com/specimen/Lora) (headings), [Inter](https://fonts.google.com/specimen/Inter) (body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code)
- Palette: Steel Teal / Midnight Green / Orange-Red accent
- Full light and dark theme support via CSS custom properties

**Layout**
- Sidebar (TOC, graph, backlinks) moved below content instead of fixed right
- Responsive content width, mobile-first

**Components**
- Growth stage badges on every note
- Reading time estimates
- Grove card grid layout for topic index pages
- Recently updated notes on the homepage
- Custom footer
- Breadcrumb navigation
- Custom 404 page

All changes live in `src/site/styles/custom-style.scss` and `src/site/_includes/components/user/`.

---

## Run your own

Fork this repo and deploy it on Netlify or Vercel — both work out of the box.

**1. Fork and deploy**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wiobyrne/digitallyliterate)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wiobyrne/digitallyliterate)

**2. Set environment variables**

| Variable | Description |
|---|---|
| `SITE_BASE_URL` | Your site URL (e.g. `https://yourdomain.com`) |
| `SITE_NAME_HEADER` | Site name shown in the navbar |
| `BASE_THEME` | `dark` or `light` |

**3. Connect the Obsidian plugin**

Install the [Digital Garden plugin](https://github.com/oleeskild/Obsidian-Digital-Garden) in Obsidian, point it at your forked repo, and set `dg-publish: true` on any note you want to publish.

Full plugin docs: [dg-docs.ole.dev](https://dg-docs.ole.dev/)

---

Built on [oleeskild/digitalgarden](https://github.com/oleeskild/digitalgarden). Subscribe to the newsletter at [buttondown.com/digitallyliterate](https://buttondown.com/digitallyliterate).
