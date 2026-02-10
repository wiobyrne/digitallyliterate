---
{"title":"My PKM Stack and Workflow","tags":["pkm","workflow","tools","obsidian","publishing","personal-setup"],"status":"🌿_plant","created":"2025-11-04","dg-publish":true,"connections":["[[02 DEVELOP/🌿 Plants/Digital Garden Setup Guide\|Digital Garden Setup Guide]]","[[Tools for Federated Publishing\|Tools for Federated Publishing]]","[[Federating Your Second Brain]]","[[Publishing Workflows\|Publishing Workflows]]"],"permalink":"/02-develop/plants/my-pkm-stack-and-workflow/","dgPassFrontmatter":true}
---


# My PKM Stack and Workflow

> [!info] Living Document
> This note documents my current setup as of November 2025. It evolves as I experiment with new tools and refine my workflow. Check the "Last tended" date to see how current this is.

## Philosophy and Principles

### Core Values

**Local-first:**
- My notes exist as plain Markdown files
- Accessible without internet or proprietary software
- Full control over my data

**Open formats:**
- Markdown for writing
- Git for version control
- Standard web technologies for publishing
- No proprietary lock-in

**Federated presence:**
- One source of truth (Obsidian vault)
- Multiple publication layers (garden, newsletter, social)
- Interconnected via open protocols

**Gradual disclosure:**
- Not everything public by default
- Intentional choice about what to share
- Different maturity levels visible through status tags

## The Stack Overview

```
┌─────────────────┐
│  Obsidian Vault │  ← Source of truth
└────────┬────────┘
         │
         ├─→ [GitHub] ← Version control + backup
         │
         ├─→ [Digital Garden Plugin / Quartz] ← Public garden
         │
         ├─→ [Ghost / Buttondown] ← Newsletter
         │
         └─→ [Mastodon] ← Social presence
```

## Layer 1: Private Vault (Obsidian)

### Why Obsidian

**Chosen because:**
- Local-first (files on my computer)
- Plain Markdown (portable, future-proof)
- Excellent plugin ecosystem
- Active community
- Bidirectional linking built-in
- Graph view for visualization

**Not locked in:** Could migrate to Logseq, Foam, or any Markdown editor if needed.

### Vault Structure

```
/00 INBOX/              ← Capture zone
/01 ACTIVE/             ← Current projects
/02 DEVELOP/
  └── 🌱 Seeds/         ← New ideas, rough notes
  └── 🌿 Plants/        ← Developing notes
/03 CREATE/
  └── Evergreen/        ← Mature, stable notes
/04 ARCHIVE/            ← Completed or dormant
/05 RESOURCES/          ← References, templates, assets
```

### Key Plugins

**Essential:**
- **Dataview** – Query notes like a database
- **Templater** – Dynamic note templates
- **Digital Garden** – Publish to web (or Quartz for more control)
- **Calendar** – Visual daily notes navigation
- **Omnisearch** – Better search

**Nice-to-have:**
- **Git** – Version control from within Obsidian
- **Advanced Tables** – Table editing
- **Excalidraw** – Embedded drawings
- **Tag Wrangler** – Tag management



### Note-Taking Practices

**Daily notes:**
- Capture everything throughout day
- Process into permanent notes weekly
- Template includes: weather, tasks, reflections

**Atomic notes:**
- One idea per note
- Descriptive titles (not dates or codes)
- Dense linking to related notes

**Status tags:**
- 🌱 `seed` – Initial capture, rough idea
- 🌿 `plant` – Developing, being refined
- 🌳 `evergreen` – Mature, stable, referenceable

**Publishing tags:**
- `dg-publish: true` – Approved for digital garden
- `newsletter-candidate` – Might become newsletter essay
- `private` – Never publish

### Metadata Convention

```yaml
---
title: Note Title
tags: [tag1, tag2, tag3]
status: 🌿_plant
created: 2025-11-04
dg-publish: false
connections:
  - "[[Related Note 1]]"
  - "[[Related Note 2]]"
---
```

## Layer 2: Version Control (Git + GitHub)

### Why Git

**Benefits:**
- Complete history of every change
- Easy rollback if needed
- Backup automatically pushed to cloud
- Enables collaboration (PRs for suggestions)
- Professional standard (transferable skill)

### Workflow

**Daily (automated via Git plugin or script):**
```bash
# Commit changes
git add .
git commit -m "Daily update: $(date)"
git push origin main
```

**Weekly review:**
- Review git log to see what I worked on
- Clean up messy commits if needed
- Check GitHub issues for ideas/todos

### Repository Structure

**Private repo for entire vault:**
- Contains everything (published and private)
- `.gitignore` for sensitive files

**Public repo option:**
- Only published notes
- Automated sync from main vault
- Clean separation of public/private



## Layer 3: Public Garden

### Current Setup: [Digital Garden Plugin / Quartz / Other]



**Publishing workflow:**
1. Write/refine note in Obsidian
2. Add `dg-publish: true` to frontmatter
3. [Describe your publishing process]
4. Note appears on public garden site

**Garden URL:** [Your garden URL]

**Features:**
- Backlinks displayed on each note
- Graph view shows connections
- Search functionality
- RSS feed auto-generated
- Custom styling via CSS

### Design Decisions

**Visual approach:**
- Readable typography
- Clear status indicators
- Minimal but functional
- Dark/light mode toggle

**Navigation:**
- Index page highlights entry points
- Tag pages cluster related notes
- Backlinks create organic pathways
- Search for direct access

**Branding:**
- [Describe your garden's personality/aesthetic]
- Professional but personal
- Work-in-progress embraced

## Layer 4: Newsletter (Ghost / Buttondown / Other)

### Current Platform: [Your newsletter platform]



**Publishing frequency:** [Weekly / Bi-weekly / Monthly / Irregular]

**Workflow:**

**Option A: Manual curation**
1. Review recent garden notes
2. Identify themes or mature ideas
3. Write synthesis essay for newsletter
4. Link back to garden notes
5. Publish and announce on social

**Option B: Automated**
1. Tag notes with `newsletter-ready`
2. RSS-to-email sends new garden posts
3. Subscribers get garden updates automatically

**Current approach:** [Describe what you actually do]

### Newsletter Philosophy

**Purpose:**
- Synthesize garden notes for wider audience
- Provide context for recent thinking
- Invite conversation and feedback
- Drive traffic back to living garden

**Relationship to garden:**
- Newsletter = snapshot in time
- Garden = living, evolving source
- Always link from newsletter to garden
- Garden is canonical, newsletter is syndication

## Layer 5: Social Presence (Mastodon / Bluesky / Other)

### Current Platform: [Your social platform]



**Handle:** [Your handle]

**Posting strategy:**
- Announce new garden notes
- Share highlights/excerpts
- Ask questions from developing notes
- Engage with other gardeners

**POSSE approach:**
- Garden is source of truth
- Social posts link back to garden
- Conversations happen on social
- Context preserved in garden

### Automation (if any)

**RSS-to-Mastodon bot:**
- [Describe if you use automation]
- Automatically toots new garden posts
- Custom message template

**Or manual:**
- [Describe manual posting workflow]
- How you decide what to share

## Integration Points

### Garden ↔ Newsletter

**Flow:**
- Garden notes mature → become newsletter essays
- Newsletter links back to garden
- Readers can explore deeper in garden

### Garden ↔ Social

**Flow:**
- Social mentions link to garden
- Garden notes reference social conversations
- Bidirectional engagement

### Newsletter ↔ Social

**Flow:**
- Announce newsletter on social
- Social discussions inform next newsletter
- Both link to garden as canonical source

## What Works Well



**Successes:**
- [What's working in your workflow]
- [Tools you're happy with]
- [Practices that feel sustainable]

**Examples:**
- Daily notes habit catching everything
- Weekly review keeps vault organized
- Gradual publishing reduces pressure

## What I'm Still Figuring Out



**Challenges:**
- [What's not working yet]
- [Tools you're considering changing]
- [Practices you want to improve]

**Examples:**
- Finding balance between private/public
- Deciding what deserves garden publication
- Maintaining consistency without pressure

## Workflow Examples

### Morning Routine

1. Open Obsidian, create today's daily note
2. Review yesterday's note, process any items
3. Check calendar, add relevant links to today
4. Capture thoughts throughout morning

### Weekly Review (Sunday)

1. Review week's daily notes
2. Extract atomic notes from captures
3. Add backlinks to relevant evergreens
4. Identify newsletter candidates
5. Publish 1-3 garden notes if ready
6. Update this note if workflow changed

### Monthly Reflection

1. Review git commit history
2. Check garden analytics (if any)
3. Review newsletter subscriber growth/engagement
4. Assess what's working, what's not
5. Adjust workflow as needed

## Tools and Resources

### Software

**Core:**
- Obsidian (free)
- Git (free)
- [Your static site generator] (free)
- [Your newsletter platform] (free/paid tier)

**Optional:**
- [Any other tools you use]

**Total cost:** $[X]/month or year

### Learning Resources

**Obsidian:**
- Official documentation
- Community forums
- YouTube tutorials that helped

**Publishing:**
- [Resources you found helpful]
- [Communities you're part of]

## Related Notes

- [[Digital Garden Setup Guide]] – How to build similar setup
- [[Tools for Federated Publishing]] – Tool comparisons
- [[Publishing Workflows]] – Other workflow patterns
- [[Obsidian Configuration\|Obsidian Configuration]] – Detailed Obsidian setup

## Changelog

- **2025-11-04:** Initial documentation of current setup
- [Add dates when you make significant changes]

---

🪴 **This note will continue to grow...**

*Last tended: 2025-11-04*

**Have questions about my setup?** Reach out via [your contact method].
