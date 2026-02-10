---
{"dg-publish":true,"dg-permalink":"model-context-protocol","permalink":"/model-context-protocol/","title":"Model Context Protocol (MCP)","tags":["MCP","AI","personal-AI","RAG","tools","workflows"]}
---


# Model Context Protocol (MCP)

*Giving your AI the right information at the right time*

> MCP is like giving your AI a backpack full of your stuff—your notes, ideas, and schoolwork—so it always knows how to help *you* best.

---

## What is MCP?

Model Context Protocol (MCP) is a method for giving AI the *right* information at the *right* time—based on what you're working on.

Think of it as handing your AI assistant a custom folder of your most relevant notes before you ask a question. No guessing. No re-uploading. Just **context-aware intelligence**, embedded inside your existing tools.

---

## MCP vs. RAG: The Backpack Metaphor

### RAG = A Trapper Keeper
You organize your notes, articles, and worksheets in one place. When you want help, you open it and point to the stuff the AI should look at.

**It's organized, but you still have to tell the AI where to look.**

### MCP = A Super-Smart Study Buddy
MCP doesn't just look at your Trapper Keeper—it remembers what's in your *entire backpack* (notes, Google Docs, past projects, questions, ideas).

Instead of you telling it what to check every time, it already *knows* what you've worked on and how you think.

| Approach | How It Works |
|----------|--------------|
| **RAG** | You handpick the info every time |
| **MCP** | It already knows what matters to you |

---

## Technical Overview

"MCP" = **modular connector / capability / plugin** (tools you can attach to an LLM workflow).

### Common MCP Types
- **Filesystem MCP** — Read, rename, move, edit files on your disk
- **Shell MCP** — Run terminal commands
- **Browser/Puppeteer MCP** — Scrape websites, run JavaScript
- **SQLite MCP** — Query local databases
- **Git MCP** — Manage repositories
- **Custom MCPs** — Build your own (Python, Node, Rust)

---

## Example Workflow: Deep Research Pipeline

Combining Sequential Thinking + Brave Search + Puppeteer:

1. **User gives topic** to research
2. **Sequential thinking** plans what searches to run
3. **Brave Search** returns candidate URLs
4. **Puppeteer** visits and scrapes pages
5. **LLM** synthesizes scraped content into a report

This creates a "Perplexity clone" — deep search + synthesis.

---

## Running MCP on Linux/Ubuntu

| Client | Supports MCP? | Works on Ubuntu? |
|--------|---------------|------------------|
| Claude Desktop | Yes | No (macOS-only) |
| Claude for VS Code | Yes | Yes |
| MCP clients (Python/Node) | Yes | Yes |
| DIY agent using MCP SDK | Yes | Yes |

You do **not** need Claude Desktop to run MCPs on Ubuntu. Use Claude Code in VS Code or community CLI clients.

---

## Why MCP Matters

NotebookLM helped "talk to notes" but with limitations:
- Manual upload to one platform
- Doesn't work across tools
- Hard to maintain as knowledge grows
- Can't control context in real-time

**MCP enables:**
- Portable, private knowledge systems
- Context that travels with you across tools
- Personal intelligence systems grounded in your thinking

---

## The Bigger Picture

> It's not about finding *one* perfect AI tool. It's about using the *right* tools—and knowing how they work together.

MCP works best alongside a broader AI practice:
- Consult multiple models
- Compare perspectives
- Synthesize insight

---

## Related

- [[02 DEVELOP/🌿 Plants/Artificial Intelligence\|Artificial Intelligence]] — The broader context
- [[02 DEVELOP/🌿 Plants/Agentic AI\|Agentic AI]] — Autonomous AI systems
- [[02 DEVELOP/🌿 Plants/Large Language Model (LLM)\|Large Language Model (LLM)]] — The underlying technology
- [[02 DEVELOP/🌿 Plants/Building My Personal Cyberinfrastructure\|Building My Personal Cyberinfrastructure]] — DIY infrastructure

---

*MCP connects your AI to your real thinking, your actual systems, and your evolving ideas.*
