---
{"dg-publish":true,"permalink":"/01-consume/articles/how-i-use-obsidian/","title":"How I Use Obsidian","tags":["obsidian"]}
---


# How I Use Obsidian

## Key Points:
[Obsidian](https://obsidian.md/) is the first stop for thoughts that leave my head.

It’s daily short-term memory, weekly and monthly reflection, and a place for sparks of thought that sometimes catch and light up adjacent villages.

It’s also just a heap of Markdown I’ve carried around and put Obsidian in charge of sometime late in 2021. Those plain text files are mine and they don’t need Obsidian to be useful; I can open the same folder with iA Writer or Sublime Text and get right to work.

The collection is growing toward order and connectedness, which improves how I think and recall information. This is a big deal for me, and Obsidian has had a lot to do with that trend.

This post is my attempt to capture how I use Obsidian, including plugins, where it fits into the broader concept of my “digital brain,” and what’s been working for me.

It’s a deceptively-simple app that can go very deep, and everyone uses it differently. Your ability to thrive with it may depend on how much effort you want to spend tailoring the experience, so I hope my notes can be useful even if your ideal setup is totally different!

## History & Context

Obsidian replaced the meticulously-designed [iA Writer](https://ia.net/writer) because of how much I could customize. Before that, I used [nvALT](https://brettterpstra.com/projects/nvalt/).

I’m surprised to report that Obsidian has replaced task managers: [Things](https://culturedcode.com/things/) and [TaskPaper](https://www.taskpaper.com/). Things is another beautifully-designed app I’ve had an on-and-off relationship with over many years, because I would always end up curating tasks I wouldn’t get to and carry needless existential weight. TaskPaper was a handy, just-enough outliner and daily task manager that never quite felt right for future-scheduled todo items and awkward notes and thoughts that have no place to live.

Obsidian is part of my “digital brain” that’s complemented by a few other carefully chosen apps:

- **[DEVONthink](https://www.devontechnologies.com/apps/devonthink)** is for information hoarding and cold storage: scanned documents and receipts, product manuals, web bookmarks, plain-text quotes I like, and archived email.
- **[Day One](https://dayoneapp.com/)** is for journaling, mostly by force of habit.
- **[Apple Notes](https://www.icloud.com/notes)** is for sharing common scraps of reference with my partner. This replaces [Notion](https://www.notion.so/), which I’ve always adored for multiplayer notes when the subscription fee is warranted <sup><a href="https://mattstein.com/thoughts/how-i-use-obsidian/#user-content-fn-1">1</a></sup>.

Each of these syncs nicely across my usual macOS and iOS devices, and lets me keep just enough out of Obsidian that it can stay focused on my thoughts and ideas without the pressure of being a repository for everything.

## 10,000 Foot View

I use Obsidian with the [Things theme](https://github.com/colineckert/obsidian-things) and pay for [Obsidian Sync](https://obsidian.md/sync) after an okayish experience syncing with iCloud. I use keyboard shortcuts to flip open the sidebars, navigate documents, and use the command palette. I probably still click around more than I should.

- ⌘ + T: open today’s note
- ⌘ + ←: open left sidebar
- ⌘ + →: open right sidebar
- ⌘ + O: quick open note
- ⌘ + P: command palette

It looks like this:

![Screenshot of the entire Obsidian window, with a pinned tab reading 2023-12-18 and another tab with the title and beginning Markdown contents of this article.](https://mattstein.com/_astro/obsidian-window.sGuYnk62_Zugtur.png)

My Obsidian window starting this post.

## Plugins

These are the plugins that shape my daily experience with Obsidian, some of which I’ll get into shortly.

If you haven’t used Obsidian, you should know that plugins come in two flavors: the first-party core plugins that ship with the app, and [Community Plugins](https://obsidian.md/plugins) from third party developers.

### Core Plugins

- Backlinks
- Bookmarks
- Canvas
- Command palette
- Daily notes
- File recovery
- Files
- Graph view
- Note composer
- Outgoing links
- Page preview
- Properties view
- Quick switcher
- Search
- Search
- Sync
- Tags view
- Templates

### Community Plugins

- [Advanced Tables](https://obsidian.md/plugins?id=table-editor-obsidian)
- [Better Word Count](https://obsidian.md/plugins?id=better-word-count)
- [Calendar](https://obsidian.md/plugins?id=calendar)
- [Code Editor Shortcuts](https://obsidian.md/plugins?id=obsidian-editor-shortcuts)
- [Commander](https://obsidian.md/plugins?id=cmdr)
- [Copy as HTML](https://obsidian.md/plugins?id=copy-as-html)
- [Dataview](https://obsidian.md/plugins?id=dataview)
- [Editor Syntax Highlight](https://obsidian.md/plugins?id=cm-editor-syntax-highlight-obsidian)
- [Filename Heading Sync](https://obsidian.md/plugins?id=obsidian-filename-heading-sync)
- [Linter](https://obsidian.md/plugins?id=obsidian-linter)
- [Minimal Theme Settings](https://obsidian.md/plugins?id=obsidian-minimal-settings)
- [Ozan's Image Editor Plugin](https://obsidian.md/plugins?id=oz-image-plugin)
- [Paste URL into selection](https://obsidian.md/plugins?id=url-into-selection)
- [Reading Time](https://obsidian.md/plugins?id=obsidian-reading-time)
- [Templater](https://obsidian.md/plugins?id=templater-obsidian)
- [WakaTime](https://obsidian.md/plugins?id=obsidian-wakatime)

I should point out that there’s a dazzling microcosm of plugins for doing just about anything you can think of, including kanban-style task boards and calculation tables and todo lists computed from multiple files, and one of the features of my setup is what I’ve managed *not* to include.

I’ve learned the hard way that spending too much time customizing a tool can be a barrier to actually being productive with it, and it’s not an easy balance to strike. I’ve borrowed ideas from a lot of people here, and have been amazed by other ones I’ve deliberately avoided.

## Mechanics

First, this is how I’ve set things up at a high level.

### Vault & Sync

I have a single vault that’s synced across devices with via Obsidian Sync.

iCloud had worked pretty well for syncing, with occasional conflicts that got most frustrating and hard to explain with iOS.

I tried Obsidian Sync wondering if it would be any better than iCloud, and it was an immediate and resounding “yes.” Not only was sync faster and more reliable, but the status is always clear in the UI without being a distraction, and a history of changes with diffs is fantastic.

I still have lingering weirdness with iOS, where no matter how many times I manually save a change it may not get picked up and synced properly—but when I’m working at length on anything I’m using a Mac where all syncing is rock solid. I can even move between machines and deliberately edit like a madman with changes neatly showing up in both places.

### Vault Structure

I rely on folders for my high-level organization, and don’t yet use tags or properties consistently. Those folders are:

- **Archive/** – retired files in subfolders from old jobs, places lived, etc.
- **Attachments/** – landing for files automatically copied into the vault.
- **Books/** – book notes [collected](https://mattstein.com/thoughts/collecting-book-notes/) from Kindle titles.
- **Calls/** – meeting notes from Zoom calls and other conversations.
- **Daily/** – dated, automatically-generated files we’ll come back to later.
- **Drafts/** – scratch space for articles, long emails, etc. I start in Obsidian.
- **Monthly/** – monthly summaries that list their week notes.
- **Objects/** – listing of physical things catalogued as writing prompts.
- **People/** – listing of people from my life, catalogued as writing prompts.
- **Places/** – listing of places from my life, again catalogued as writing prompts.
- **Templates/** – my `Daily Note.md` and `Monthly Note.md` templates.
- ...and the root folder, where everything new collects until I put it someplace else.

### Daily Notes & Links

Two things made Obsidian stick for me in the beginning: going in on daily notes, and the Paste URL into selection plugin.

These are laughably different concepts—one being a minor convenience and the other being a major shift in daily habit. Both, however, directly contribute to my head wandering into Obsidian and working fluidly there. While many plugins have added value, those first two lured me into Obsidian when I was trying it out.

Linking counts for a lot!

One of the reasons pen and paper have never worked for me is that so much of a given day involves code snippets and links. I don’t have the patience for hand writing fenced code blocks and URLs, so being able to paste snippets, link quickly to other notes, and paste links onto selected text like GitHub comments are all important efficiencies for maintaining a train of thought and having it reach other things. That’s what that [Paste URL into selection](https://github.com/denolehov/obsidian-url-into-selection) plugin is about:

![Animation of the cursor selecting text, which (on paste) is turned into a Markdown link with the pasted URL.](https://mattstein.com/_astro/paste-into-selection.Do2Bk2VZ_2ud0ES.gif)

Pasting a clipboard link into selected text.

But the thing that made Obsidian home base for me, my default starting point, was embracing daily notes.

That’s the practice of automatically creating a note every day, with the help of the first-party [Daily notes](https://help.obsidian.md/Plugins/Daily+notes) plugin, and using that for task lists, notes for myself, and a general scratchpad of blurbs and links and I want to focus on that day.

![Cropped screenshot of an Obsidian document with a new daily note: a top-level heading that reads 2023-12-19, followed by a pretend open-ended note, then a second-level “TODO” heading followed by checklist items reading “wake up” (checked), “eat lunch,” and “write something.”](https://mattstein.com/_astro/obsidian-daily-note.BR5nLoLd_qaDQA.png)

A pretend daily note. (They’re typically longer and with slightly more challenging tasks.)

Daily notes play out for me in three big ways:

1. When I start using Obsidian every morning, it creates a new file just for that day, named something like `2023-12-18.md`, and drops my cursor into it.
2. When I click on a day in the Calendar view I added, a note is created for that day and I’m dropped into it.
3. Wherever I am, I can hit ⌘ + T and snap to today’s note.

Relying on daily notes means that I can add future todo items and count on seeing them. That’s critical for being able to return my attention to chores and follow-ups when it’s time to actually do something.

![Cropped screenshot of Obsidian with its right sidebar open, a calendar icon selected at the top, and the panel’s content area displaying a “Dec 2023” calendar where each day uses small circles to represent the presence of daily note file headings.](https://mattstein.com/_astro/calendar-view.DwCo-0Qj_ZJTDHQ.png)

Obsidian’s right sidebar open to the calendar view.

Nothing happens automatically if I don’t finish a day’s tasks, which is a feature.

The next day, I have to decide whether I want to abandon unfinished items or go back and copy+paste them into the current day. This is a deliberate, useful point of friction I stole from bullet journaling—I have to think for a moment about the things I carry with me, and confront those annoying ones I keep dragging forward without finishing. That baggage may not be important, realistic, or actionable, and I may need to move it to someplace more appropriate or simply let it go. Either way, it’s about defending my daily focus and staying realistic about whatever I want to accomplish.

### Filename Heading Sync

This one could be controversial in note-taking circles.

Again, being able to fluidly start a new idea is important to me—I don’t want to be creating filenames or making a mess, and that’s where this plugin comes in.

When I create a new Markdown file, I start writing the title as either the H1-level heading or the filename itself and this plugin automatically keeps those in sync. If I change the heading, the filename updates automatically and vice versa.

![Animation editing a filename while the top-level heading updates, then typing additional text into the heading while the filename updates.](https://mattstein.com/_astro/heading-sync.FfIRMkHx_2bnVLL.gif)

The Filename Heading Sync plugin makes sure the filename and heading always match one another.

### Templates

A template is a Markdown file that’s used to generate another one. I only have two, but you could use them for anything that should follow a consistent format—call notes, blog posts, etc.

I have two templates: one for my daily note, and a newer one for monthly notes.

Here’s the daily note template, which lives at `Templats/Daily Note.md`:

```md
# Daily Note

## TODO

<%\* if (tp.date.now("dddd", 0, tp.file.title, "YYYY-MM-DD") == "Friday") { %>

## Week Notes

<%\* } %>
```

Don’t be frightened by that gnarly-looking conditional! I added that recently in order to include a `## Week Notes` heading on Fridays. The funky syntax is handled by the [Templater](https://github.com/SilentVoid13/Templater) plugin, which parses the logic when a new file is created using that template.

Inspired by bloggers, I’ve been writing week notes to reflect on whatever I did in a given week. I’ve been doing it long enough that I thought it’d be nice to zoom out further and reflect on each month.

Sure enough, there was a way to do that! I used a new (to me) plugin called [Dataview](https://github.com/blacksmithgu/obsidian-dataview) to query and automatically list all that month’s week notes—from individual daily note files—in one place. This is my resulting `Templates/Monthly Note.md` template:

```md
# <% tp.date.now("YYYY-MM") %>

\`\`\`dataview

TABLE rows.bullets.text as "Week Notes"

FROM "Daily"

FLATTEN file.lists as bullets

WHERE meta(bullets.section).subpath = "Week Notes" AND contains(file.name, this.file.name)

SORT file.name asc

GROUP BY link(file.link, substring(file.name, 5)) as "Day"

\`\`\`
```

The fact that Dataview exists is an example of how powerful Obsidian plugins can be. It’s still the same folders of Markdown, but being able to query it like a database is pretty wild!

## Practices

This setup makes it possible for me to regularly flow through a few forms of working with my pile of thoughts.

### Capture

Daily notes let me capture whatever I need to, and either have hope of referencing it later or moving it into a more suitable place. I also end up with a pretty good record of what I did on just about any day, which is nice if my journaling efforts waned. (Two weeks later, I probably won’t be able to tell you what I did otherwise!)

### Reflect

Week notes and month notes regularly let me look back at the highlights, which can be easy to lose track of as I’m jumping between urgent issues and bursts of curiosity and... honestly whatever the hell it is I do each day. It’s easy to get bogged down in daily details and not take a moment to gauge progress and appreciate the medium-ish milestones, so these reflection points are valuable despite not requiring much time or effort to maintain.

### Edit

I spend time writing and editing longer pieces in Obsidian because it’s great for that! An automatic table of contents lets me maintain a high-level view of a document, a word count with read time is a helpful measure to have as a guide, and Obsidian Sync’s change history is a nice safety net in case I want to go back to some brilliant thing I wrote and got rid of.

The [Linter](https://github.com/platers/obsidian-linter) plugin is a nice little touch that gently and automatically reinforces stylistic consistency I’d like to have, like spaces around headings and consistent list formatting.

### Refactor

This is one place where Obsidian shines in particular, and helps me slowly transform a heap of Markdown into something more like a digital garden. The graph view visualizes connections and also makes it obvious when tons of notes are floating around that are not connected. This helps me identify themes, redundant efforts, and opportunities to structure and relate ideas. Taking time to tidy up my notes has given me new ideas, and I’m excited to see what happens as I keep at it. I’d like to get to the point where I feel like I’ve documented my existence and can share a digital garden and start finding meaningful intersections with other people that do the same.

[Janitor](https://github.com/Canna71/obsidian-janitor) helps identify cleanup opportunities like orphaned files, and I’d like to use it or something similar to clean up my common cruft, like empty `Untitled 5.md` files and call notes that consist of a bullet point with half a thought that no longer makes any sense. Based on past experience, I’m sure there’s a way to do exactly what I’d like whether someone already made a plugin for it or I’d need to write my own.

## Beyond Obsidian

Not everything I start in Obsidian stays there.

Some bits of writing graduate to blog posts—I copy the Markdown into my Astro blog structure, update the filename, add metadata, and finalize any edits I have for it.

Writing that follows a coherent theme and keeps going will probably land in a [Scrivener](https://www.literatureandlatte.com/scrivener/overview) book where it can expand and be restructured until it starts to calm down.

Some writing turns into a long email, where I dearly wish I had a client as smooth and simple as iA Writer. You already know if you’ve gotten one of those.

## Footnotes

[^1]: I’m fine with subscriptions, and increasingly uncomfortable freeloading at this point, but I want to fully own my personal notes without them being constrained by a free tier or tied to a subscription. The difference between using Notion exports and Obsidian Markdown is a big one, and I’m thrilled to support Obsidian financially because [it puts my file ownership first](https://stephango.com/file-over-app).

## Summary:
Plugins and practices for managing my digital brain.

---

*Source: [How I Use Obsidian](https://mattstein.com/thoughts/how-i-use-obsidian/)*
