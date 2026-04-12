---
{"dg-publish":true,"permalink":"/03-create/evergreens/the-20-minute-tax/","title":"The 20-Minute Tax","tags":["ai-workflow","productivity","knowledge-management","local-ai"]}
---


# The 20-Minute Tax

Every time I sit down to work with an AI assistant, I pay a tax.

It takes about 20 minutes to get the model up to speed. Who I am, what I'm working on, what I was doing last time, what I actually care about right now versus what's sitting dormant in my notes. Twenty minutes of re-orientation before we can do any real work.

Multiply that by multiple sessions a day, across two machines, with different tools — and I'm spending more time briefing the AI than I'm spending getting things done with it.

This isn't an AI problem exactly. It's a memory problem. These tools don't remember. Each session starts cold. And I'm the one carrying the context.

That's backwards. I have enough to carry.

---

I've been thinking about this as a form of cognitive overhead — the kind that accumulates invisibly. A knowledge worker juggling a dozen parallel projects already has too much to hold in their head. Adding "remember to explain yourself to your tools" to that list is just friction dressed up as technology.

The promise of AI assistants was that they'd reduce overhead. In practice, the context-loading ritual has become its own overhead.

---

Here's what I think is actually needed:

**A persistent layer.** Not memory inside the AI (which resets, which you can't verify, which lives on someone else's server) — but memory you own and control. A file. A document. Something that travels with you between sessions, between machines, between tools.

I already maintain an Obsidian vault. It has my notes, my projects, my thinking in various stages of development. It syncs across devices. It's plain text. Any tool can read it.

The missing piece was treating the vault not just as a place to write notes, but as the source of truth for my current state. What am I working on right now? Not what exists in my notes — that's an inventory. What is actually active?

One file. Updated when things change. Read first by any AI before it does anything else.

---

We're calling it `CURRENT_STATE.md`. It lives in the vault. It syncs. It doesn't assume the tool reading it is Claude — it's just plain text with a clear structure. Any AI, any session, any machine: read this first.

That's the 20-minute tax, paid once, and then rolled forward.

---

There's a bigger version of this idea I'm still working out: a "manager" agent that holds context not just about what I'm doing, but about priorities, dependencies, and what I should probably be doing instead of what I think I want to do.

But that's further out. For now, I want to just not spend 20 minutes explaining myself every morning.

---

*Seeds for further development:*
- What does "owning your AI context" mean as a digital literacy practice?
- The difference between an AI that remembers and an AI that reads your notes
- What other overhead do we accept from tools because we've normalized it?
