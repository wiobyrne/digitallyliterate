---
{"dg-publish":true,"dg-permalink":"zotero-obsidian-workflow","permalink":"/zotero-obsidian-workflow/","title":"Zotero Obsidian Research Workflow","tags":["PKM","obsidian","zotero","research","workflow","academic"]}
---


# Zotero Obsidian Research Workflow

*An academic workflow for collecting, annotating, and synthesizing research*

> Combining Zotero for reference management with Obsidian for knowledge synthesis creates a powerful research system.

---

## Why This Combination?

| Tool | Primary Purpose |
|------|-----------------|
| **Zotero** | Collect resources, create annotations, manage citations |
| **Obsidian** | Synthesize ideas, create connections, write manuscripts |

### Benefits of Markdown-Based Writing
- Durable, standardized file format
- No program-specific lock-in
- Lighter and faster than traditional word processors
- Stays connected to your notes

---

## The Workflow

### 1. Collect in Zotero

- Use browser connector to save articles, books, web pages
- Organize into collections by project or theme
- Read and annotate PDFs directly in Zotero
- Highlight key passages and add notes

### 2. Sync to Obsidian

Use the **Zotero Integration** plugin to:
- Import literature notes automatically
- Pull annotations and highlights
- Maintain citation keys for later export

### 3. Synthesize in Obsidian

- Create literature notes for each source
- Build concept notes that synthesize across sources
- Use backlinks to connect related ideas
- Develop arguments through linked notes

### 4. Write and Cite

- Draft manuscripts in Obsidian using markdown
- Use Pandoc to convert to Word/PDF with formatted citations
- Export bibliography from Zotero

---

## Key Plugins

### For Obsidian
| Plugin | Purpose |
|--------|---------|
| **Zotero Integration** | Import annotations and citations |
| **Pandoc Reference List** | Render citations in preview |
| **Dataview** | Query and organize literature notes |
| **Templates** | Consistent structure for literature notes |

### For Zotero
| Plugin | Purpose |
|--------|---------|
| **Better BibTeX** | Manage citation keys |
| **ZotFile** | Manage PDF attachments |
| **Zotero Connector** | Browser integration |

---

## Literature Note Template

```markdown
---
title: "{{title}}"
authors: {{authors}}
year: {{year}}
citekey: {{citekey}}
tags:
  - literature-note
  - reading/in-progress
---

# {{title}}

## Summary
[Your summary of the main argument]

## Key Points
-

## Annotations
{{annotations}}

## Connections
- Related to [[concept note]]
- Contradicts [[other source]]

## Questions
-
```

---

## Adding Local AI (Optional)

For RAG (Retrieval-Augmented Generation) with your vault:

### Option 1: LLM Workspace Plugin
- Install from Community Plugins
- Configure to use local model (Ollama)
- Query your notes in natural language

### Option 2: AnythingLLM
- Index your Obsidian vault
- Query with local AI model
- Keep data private and local

### Option 3: Smart Connections
- Semantic search across your vault
- Find related notes automatically
- AI-powered synthesis

---

## Tips for Success

1. **Process regularly** — Don't let unprocessed sources pile up
2. **Write in your own words** — Summaries beat highlights for retention
3. **Connect aggressively** — Link to existing notes as you read
4. **Review periodically** — Revisit old literature notes
5. **Start writing early** — Synthesis happens through writing

---

## Related

- [[02 DEVELOP/🌿 Plants/Building a Digital Commonplace Book\|Building a Digital Commonplace Book]] — The broader PKM system
- [[02 DEVELOP/🪴 Groves/Digital Self-determination\|Digital Self-determination]] — Owning your knowledge tools

---

*The goal is seamless flow from reading to synthesis to writing.*

