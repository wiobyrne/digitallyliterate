# Digitally Literate — repository design contract

This file is the **repository-local** statement of the Digitally Literate design
system. It exists so that work in this repository can be checked against the
design without re-reading the vault.

## Authority

The **canonical** design contract is the vault note
`04 META/47 Workbench/Digital Garden/design/Apparatus DL Design System.md`.
That note governs. This file distills it for implementers and adds the
repository-specific facts (cascade order, extension points, archetype wiring)
that the vault note deliberately does not carry.

Where this file and the canonical vault note disagree, **the vault note wins**
and this file is the thing that gets corrected. Nothing in this repository
edits the vault.

Two further vault notes are implementation records, not authority:
`.../active/Garden Redesign.md` (what shipped) and `.../active/Current State.md`
(what production currently does).

Digitally Literate is the study/library surface of the Apparatus system.
`wiobyrne.com` is the portfolio surface. They share structural grammar —
zero radius, narrow single reading column, restrained rules, serif reading
voice — and deliberately diverge on identity. The divergence is the point;
do not "harmonise" it away.

## Locked decisions

These are settled. Treat them as fixed inputs, not open questions.

- **Theme origin.** Hallmark **Garden** is the implementation starting point.
  It is not a superseding design authority, and it is not re-selected or blended
  with other catalog themes.
- **Three font families, no fourth.** Inter is retired. Do not restore it.
- **Green is the link colour.** On DL, green *is* the identity signal, not a
  sparing accent. Charcoal links are a `wiobyrne.com` rule and are wrong here.
- **Zero border radius**, everywhere, no exceptions.
- **Light is the default reading surface.** Dark is a deliberately designed
  alternative, not a mechanical inversion. An explicit reader choice persists.
- **Single column, no sidebar**, ever.

## Type

| Role | Family | Applies to |
|---|---|---|
| Display / identity | `Grenze Gotisch` (500, upright) | every page-level H1, masthead and footer wordmarks |
| Reading | `Source Serif 4` | body prose, long-form, secondary editorial headings |
| Navigation / meta / UI | `JetBrains Mono` | nav, buttons, tags, dates, labels, code, eyebrows |

Grenze identifies, Source Serif helps readers linger, JetBrains Mono helps them
navigate and interpret the system. Page-level H1s are Grenze upright at 500 —
never Source Serif italic. No font size below `0.7rem`.

Fonts are self-hosted from `src/site/img/fonts/` and declared once, in
`src/site/styles/user/000-tokens.scss`. There is no Google Fonts network
dependency and no second `@font-face` block anywhere else.

Prose leading is `1.8`–`1.85`, looser than the base Apparatus system. This is
deliberate: DL is a place to linger, not a fast portfolio read.

## Colour

Colour semantics are load-bearing, not decorative.

- **Green** — open, free, ongoing, and the DL identity itself. It is the link
  colour and the primary identity signal.
- **Coral** — paid or gated Understory content **only**. Never anything else.
- **Clay** — non-semantic texture and detail only. Never interactive meaning.
  Clay never substitutes for coral (paid) or green (open).
- **Neutral** — the garden itself.

Do not invent a fourth accent role. Public page formats are distinguished
typographically and structurally, not by minting new colours.

All colour lives as tokens in `src/site/styles/user/000-tokens.scss`, in OKLCH,
with a light block on `:root` and a dark block on `html.theme-dark`. Raw hex or
`oklch()` values outside that file are drift.

## Layout and depth

- Reading column `660px`; shell/nav `720px`.
- Spacing scale `8 / 16 / 32 / 64`. Padding `24px` mobile, `40px` desktop.
- Border radius `0` everywhere.
- **No-line rule.** `hr` and section dividers are hidden by default; tonal
  shifts and spacing carry structure. A hairline top border is acceptable only
  as a compositional aid on long section transitions, never as decoration.
- No drop shadows on cards. Borders only.
- No gradients, no card-grid listings, no hero banners, no stock photography,
  no marketing hero.

**Content architecture** is a forest cross-section, and it is structural before
it is chromatic: Canopy (free newsletter, most prominent) → Understory (paid,
quieter, coral) → garden layer (always free, structurally separate from the
newsletter funnel).

## Texture

Halftone / bitmap-era texture is a personality layer confined to dividers,
transitions, identity details, control edges, and adjacent interaction marks.
Intensity 25–40 on a 0–100 scale, **35 is the ceiling**.

Texture never sits behind prose, navigation labels, reading surfaces, or data.
No CRT/VHS scan lines, no Risograph, no heavy chromatic aberration — wrong
aesthetic lineage.

## Identity marks

- **Regmark** — the structural family mark. Navigation, colophon, system chrome.
  Three variants ship as CSS masks: `crosshair` (primary), `quartered`
  (utility), `brackets` (section/frame).
- **Avatar** — a DL personality asset, not the global logo. Welcome, sign-off,
  or authored illustration contexts only.
- **Maturity marks** — plain mono labels or the established emoji shorthand.
  The custom botanical stage-mark exploration is **paused**; do not invent
  glyphs for garden stages.

---

# Page archetypes

Seven archetypes. Each is a body class plus a `contentClasses` value on
`<main class="content">`.

Two taxonomies drive this, and they must not be confused:

- **`categories`** (frontmatter) is the **public page type**. It selects the
  archetype. Values: `Newsletter`, `Evergreen`, `Grove`, `Forest`, `Page`.
- **`status`** (frontmatter) is **private maturity** — `seed`, `sprout`,
  `evergreen`. It never creates public navigation and never selects an
  archetype.

The collision to watch: `status: evergreen` currently appears on 444 newsletter
issues, while `categories: Evergreen` appears on none. Wiring `/evergreens/` to
`status` instead of `categories` would publish the entire newsletter archive as
Evergreens. Public collections read `categories`, only.

### 1. Homepage — `body.dl-home`

The front door. Leads with the writing, never with a "what is this site" block.
Order: hero (Grenze H1, one-line statement) → Canopy, the newsletter as the
most featured element → the garden index → footer. The template's inline `<h1>`
is visually hidden; the authored H1 in the note carries the page.

Decorative grove illustration is absolutely positioned, `pointer-events: none`,
and hidden below `42rem`.

### 2. Newsletter issue — `body.dl-note` + `.content.dl-newsletter`

The Canopy archetype and the bulk of the site (445 issues). Long Document
macrostructure: Grenze H1, mono secondary heading, serif body at reading
leading, green links throughout. No card, no thumbnail.

The archetype carries a green header rule to mark the issue as free and open,
but it does not currently render: `dgShowInlineTitle` and `dgShowTags` are both
off, so a note's `<header>` is empty and is collapsed rather than left to draw
a stray line above the title. The rule activates if either setting is turned
on. Whether the Canopy should get a green mark that does not depend on those
settings is an open design decision — deliberately not invented here.

### 3. Newsletter archive — `.content.dl-newsletter-archive`

Dense, scannable, text-first index of every issue. Title + date only — no
descriptions, no cards, no images. Carries a filter input and a subscribe link
styled as a mono action, not a marketing button.

### 4. Evergreen — `.content.dl-evergreen`

A durable, standalone explanation of a recurring idea. Eyebrow reads
`Durable explainer`. Lede paragraph is set larger. Prioritises legible
cross-linking and mono-labelled metadata — this is where the "field guide"
feeling should be strongest.

### 5. Grove — `.content.dl-grove`

A hand-built reading path: editorial framing plus a deliberate sequence through
selected Evergreens and issues. Eyebrow reads `Curated reading path`. The
ordered list is the structure and carries a green left rule to mark the path.

### 6. Forest — `.content.dl-forest`

A comprehensive index of a whole subject area. Eyebrow reads
`Comprehensive index`. Lists become full-width ruled rows rather than bulleted
prose. Production routing for Forest remains deferred, but Forest is a live
public format, not a deprecated one.

### 7. Utility pages — `.content.dl-page`

About, Subscribe, Colophon, Start Here, `/books/`, `/evergreens/`, `/groves/`,
404. Quieter than the homepage. Same shell, same masthead, same footer, same
green links. A utility page that does not receive the garden shell is a bug,
not a variant.

**Evergreen, Grove, and Forest collections are currently empty.** The archetypes
are defined and wired so that they activate when Ian publishes content with
those categories. Do not fabricate content to populate them, and do not delete
the archetypes because they are unused.

---

# Implementation contract

## Where the design lives

The Digital Garden plugin's template updater owns most of this repository.
Design work belongs in the extension points it does not replace:

| Path | Owner | Purpose |
|---|---|---|
| `src/site/styles/user/*.scss` | **us** | all design tokens and styling |
| `src/site/_includes/components/user/**` | **us** | injected markup and scripts |
| `src/site/img/fonts/` | **us** | self-hosted type |
| `src/helpers/userSetup.js`, `userUtils.js` | **us** | collections, filters, computed data |
| `design.md`, `TEMPLATE_FORK.md` | **us** | this contract, and the fork record |

`src/site/styles/user/` is loaded **last** in the cascade, via `dynamics.styles`.
It is the correct home for anything new.

## Cascade order

Every page loads, in order:

1. `obsidian-base.css` — template-owned Obsidian markdown rendering (~485 KB)
2. `_theme.<hash>.css` — third-party Obsidian theme, fetched at build time
3. `digital-garden-base.css` — template-owned plugin layout
4. `custom-style.css` — user-owned legacy layer, plugin-provided but never
   overwritten by the updater
5. `user/000-tokens.css` — **tokens**
6. `user/010-garden-slice.css` — **the design**

Layers 5 and 6 are the design system. Layer 4 is legacy and is being reduced to
generic element defaults only; do not add to it. Layers 1–3 are not ours.

`style.scss` is template-owned and carries upstream's demo styling (yellow H1s,
dark background). It is **not loaded in production** because `meta.themeStyle`
is always set. Leave it untouched — editing it creates updater friction for no
rendering benefit.

## Template-owned divergences

Exactly three template-owned files differ from Digital Garden 1.83.7. Keeping
this list at three is a maintenance goal.

- `src/site/_includes/layouts/index.njk` — adds the `dl-home` body hook
- `src/site/_includes/layouts/note.njk` — adds the `dl-note` body hook
- `src/site/_includes/components/navbar.njk` — branded masthead, publication
  links, search control, theme control

The body hooks stay because they are a stable page contract. Replacing them
with DOM-dependent selectors or client-side class injection would lower the diff
count while making rendering more fragile.

The updater's indicator compares file hashes, so it will keep reporting an
update whenever an intentional fork file differs from upstream — even when the
current release is already merged. That is expected. See `TEMPLATE_FORK.md` for
the update procedure.

## Theme switching

One theme system, one storage key: `digitally-literate-theme`, bootstrapped in
`components/user/common/head/001-garden-theme.njk` before paint. It sets
`theme-light` / `theme-dark` on `<html>`, which is what the token blocks key
off. Any page that ships a second toggle or a second storage key is a bug.

## Checks

- `npm run build` — full production build
- `npm test` — unit tests
- `npm run validate` — frontmatter and publishing validator

The validator parses notes with **the repository's own** frontmatter options
(`.eleventy.js` rewrites `\|` to `|` before YAML parsing). A validator that uses
a stock parser will report hundreds of false failures on wikilink aliases.

## Verification expectations

Design changes are verified at 320 / 375 / 414 / 768 / 1024 / 1440 px, in both
light and dark, on at least: the homepage, a newsletter issue, the newsletter
archive, and one utility page. No horizontal scroll at any width. Theme toggled
by real interaction, not class injection.
