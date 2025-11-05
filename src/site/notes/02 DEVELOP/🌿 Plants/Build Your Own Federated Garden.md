---
{"dg-publish":true,"permalink":"/02-develop/plants/build-your-own-federated-garden/","title":"Build Your Own Federated Garden","tags":["digital-gardening","pkm","self-hosting","federation","open-web"]}
---


# Build Your Own Federated Garden
*A practical guide to publishing your personal knowledge on the open web*

> [!info] Companion Guide
> This note accompanies the talk [[02 DEVELOP/🌿 Plants/Federating Your Second Brain\|Federating Your Second Brain]]. Start there for context, come here for implementation.

---

## 🌱 Start Small

**Don't wait for the perfect setup.** Start with what you have.

### The Minimum Viable Garden

You can begin with:
1. **A folder of Markdown files** (even just 3-5 notes)
2. **A GitHub account** (free)
3. **A static site host** (Netlify, Vercel, GitHub Pages—all free)
4. **30 minutes**

**The goal isn't perfection—it's *permeability*.** Let one idea breathe in public before building elaborate infrastructure.

### Progression Path

Most successful gardens evolve through stages:

**Stage 0: Private vault**
- Just you, taking notes
- Tools: Obsidian, Logseq, Notion, or even plain text files

**Stage 1: Single public page**
- Publish one evergreen note
- Test the waters, adjust comfort level

**Stage 2: Selective garden**
- 10-20 interconnected notes
- Intentional publishing workflow

**Stage 3: Federated network**
- RSS feeds active
- Newsletter connected
- Cross-posting to social platforms
- Webmentions or backlinks from other gardens

**Stage 4: Living ecosystem**
- Regular updates flow naturally
- Bidirectional links with other gardens
- Notes as public scholarship

> **Start here:** Choose one note that you'd feel comfortable making public. Not your best work—just something useful.

---

## 🛠️ Core Tools

### Option A: Obsidian → Digital Garden (Easiest)

**Best for:** Obsidian users who want one-click publishing

**What you need:**
- Obsidian (free)
- [Digital Garden Plugin](https://github.com/oleeskild/obsidian-digital-garden) by oleeskild
- GitHub account
- Vercel or Netlify account

**Setup (< 20 minutes):**
1. Install Digital Garden plugin in Obsidian
2. Follow plugin's guided setup wizard
3. Adds `dg-publish: true` to frontmatter of notes you want public
4. Click "Publish" button in plugin
5. Auto-deploys to your custom domain

**Pros:**
- Zero code required
- Maintains backlinks and graph view
- Beautiful default theme
- Almost instant publishing

**Cons:**
- Tied to Obsidian ecosystem
- Limited customization without coding
- Requires GitHub + Vercel setup (though wizard handles this)



### Option B: Quartz (Most Powerful)

**Best for:** Those who want full control and modern features

**What you need:**
- Folder of Markdown files
- Basic command line comfort
- GitHub account
- Node.js installed

**Setup:**
```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
# Follow prompts, point to your vault folder
npx quartz build --serve
```

**Pros:**
- Gorgeous, fast, modern design
- Full-text search built in
- Interactive graph view
- Works with any Markdown files (not just Obsidian)
- Highly customizable
- Active development community

**Cons:**
- Requires terminal comfort
- Steeper learning curve
- Must manage builds/deploys yourself

**Resources:**
- [Quartz Documentation](https://quartz.jzhao.xyz/)
- [Quartz Discord Community](https://discord.gg/cRFFHYye7t)



### Option C: Jekyll / Hugo (Classic Static Sites)

**Best for:** Those who want maximum control or are already familiar with static site generators

**Jekyll:**
- Ruby-based, GitHub Pages' default
- Massive theme ecosystem
- Great documentation
- [Jekyll Garden theme](https://github.com/Jekyll-Garden/jekyll-garden.github.io)

**Hugo:**
- Go-based, extremely fast builds
- Great for large gardens (1000+ notes)
- [Hugo Obsidian theme](https://github.com/jackyzha0/hugo-obsidian)

**Pros:**
- Industry-standard tools
- Free hosting via GitHub Pages
- Endless customization

**Cons:**
- More technical setup
- Need to learn templating languages
- Manual deployment workflow (unless CI/CD)

### Option D: Write.as / WriteFreely (Federation-First)

**Best for:** Writers who want ActivityPub integration out-of-the-box

**What you need:**
- Write.as account or self-hosted WriteFreely instance

**Features:**
- Posts appear in Mastodon feeds
- Can follow/be followed like any fediverse account
- Minimalist, distraction-free writing
- Federation without technical complexity

**Pros:**
- Native ActivityPub support
- Beautiful reading experience
- Can connect custom domain
- Privacy-focused (no tracking)

**Cons:**
- Less "garden" feel (more blog-like)
- Limited backlinking features
- Smaller ecosystem than Obsidian tools

**Resources:**
- [Write.as](https://write.as)
- [WriteFreely](https://writefreely.org/)

---

## 📤 Publish in Layers

Think of your publishing strategy as **concentric circles** of disclosure:

### Layer 1: Private Vault (Everything)
- Raw notes, daily logs, sensitive info
- **Tools:** Obsidian, Logseq, Notion, Roam
- **Access:** Only you

### Layer 2: Semi-Public Garden (Selected Notes)
- Evergreen notes, developing ideas
- Clearly marked as "work in progress"
- **Tools:** Digital Garden, Quartz, Jekyll
- **Access:** Anyone with link, indexed by search engines
- **Publish when:** Note feels "useful to someone else, even unfinished"

### Layer 3: Newsletters (Polished Essays)
- Refined takes on garden themes
- Links back to living garden notes
- **Tools:** Ghost, Buttondown, Substack
- **Access:** Subscribers
- **Publish when:** Idea feels developed enough for email

### Layer 4: Social Syndication (Excerpts & Threads)
- Highlights, questions, links to longer work
- **Tools:** Mastodon, Threads, Bluesky
- **Access:** Followers + public timelines
- **Publish when:** You want conversation

### Layer 5: Archives & Longevity (Permanent Records)
- Backup to Internet Archive
- Possibly print/PDF compilation
- **Tools:** Wayback Machine, Perma.cc
- **Publish when:** Something feels "done" (rare!)

> **Key principle:** Each layer links back to the source of truth (your vault or garden). Never orphan your best thinking inside platform-specific formats.

---

## 🌐 Federation Possibilities

### RSS: The Universal Connector

Every garden should have RSS feeds:
- Full content feed (for your superfans)
- Summary feed (for casual readers)
- Tag-specific feeds (e.g., `example.com/tags/philosophy/rss`)

**Why RSS matters:**
- Platform-independent subscriptions
- No algorithms deciding what readers see
- Can pipe into email, Slack, Discord, anywhere
- Works with Feedly, NetNewsWire, Reeder, etc.

**How to add:**
- Most static site generators include RSS by default
- Jekyll: Built in
- Hugo: Built in
- Quartz: Built in
- Digital Garden plugin: Supported



### Webmentions: Backlinks Across Sites

**What they are:** Notification when someone links to your note from their site

**How they work:**
1. Someone writes a post mentioning your URL
2. Their site sends a "webmention" ping to yours
3. Your site displays "X responded to this note"

**Implementation:**
- [Webmention.io](https://webmention.io/) – Free service that handles sending/receiving
- Add a few lines of JavaScript to your garden template
- Works with Bridgy to capture comments from social media

**Example workflow:**
- You publish note on "Digital Gardens"
- Someone blogs a response with your URL
- Their webmention appears on your note
- You've created a **bidirectional link across independent sites**

### ActivityPub: Your Garden as a Fediverse Actor

**The dream:** Your digital garden itself has a Mastodon-style presence

**Current reality:** Emerging tooling, requires technical setup

**Options:**
1. **WriteFreely blog** with your garden link in bio
2. **Bridgy Fed** – Experimental ActivityPub bridge for static sites
3. **Automate toots** when you publish (via RSS → Mastodon bot)

**Why pursue this:**
- Your notes can be "followed" like a person
- Updates appear in people's feeds organically
- Decentralized discovery without algorithmic mediation



### POSSE: Publish (On) Own Site, Syndicate Elsewhere

**The philosophy:**
- Your garden/blog is the **canonical source**
- Everything else is a **syndicated copy** with link back

**Example flow:**
1. Publish evergreen note to garden: `garden.com/note-123`
2. Copy to newsletter with "Read more" link
3. Thread on Mastodon with link to full note
4. All versions link back to living document

**Benefits:**
- Google and humans find your owned version
- When platform dies, your content persists
- You control updates/corrections in one place

---

## 📚 Resources & Examples

### Gardens to Explore (Inspiration)

**Exemplary digital gardens:**
- [Maggie Appleton's Garden](https://maggieappleton.com/garden) – Visual, polished, amazing
- [Gwern.net](https://gwern.net) – Deeply researched, long-form
- [Andy Matuschak's Notes](https://notes.andymatuschak.org/) – Evergreen note philosophy
- [Tom Critchlow's Wiki](https://tomcritchlow.com/wiki/) – Consultancy thinking in public
- [Nikita Voloboev's Everything I Know](https://wiki.nikiv.dev/) – Massive, organized knowledge base

**Look for:**
- How they structure navigation
- How they signal "work in progress"
- How they use backlinks
- Their metadata/tagging systems

### Technical Resources

**Obsidian + Publishing:**
- [Obsidian Digital Garden Plugin Docs](https://dg-docs.ole.dev/)
- [Obsidian Publish](https://obsidian.md/publish) (official paid option)
- [Obsidian Help: Publishing](https://help.obsidian.md/Plugins/Publish)

**Quartz:**
- [Official Quartz Docs](https://quartz.jzhao.xyz/)
- [Quartz Community Showcase](https://quartz.jzhao.xyz/showcase)

**Jekyll Gardens:**
- [Simply Jekyll Theme](https://simply-jekyll.netlify.app/)
- [Jekyll Garden Template](https://github.com/Jekyll-Garden/jekyll-garden.github.io)

**Hugo:**
- [Hugo Obsidian](https://github.com/jackyzha0/hugo-obsidian)

**Federation Tools:**
- [IndieWeb Wiki](https://indieweb.org/)
- [Webmention.io](https://webmention.io/)
- [Bridgy](https://brid.gy/) – Backfeed and POSSE
- [ActivityPub Docs](https://www.w3.org/TR/activitypub/)

### Communities & Learning

**Where to ask questions:**
- [Obsidian Discord](https://obsidian.md/community) – Huge, active, helpful
- [Quartz Discord](https://discord.gg/cRFFHYye7t)
- [IndieWeb Chat](https://indieweb.org/discuss)
- [r/DigitalGardens](https://reddit.com/r/DigitalGardens)
- [r/ObsidianMD](https://reddit.com/r/ObsidianMD)

**Newsletters & Blogs:**
- [Ness Labs](https://nesslabs.com/) – Anne-Laure Le Cunff
- [Linking Your Thinking](https://www.linkingyourthinking.com/) – Nick Milo
- [Maggie Appleton's Newsletter](https://maggieappleton.com/newsletter)

---

## 🚀 Your Next Steps

### Week 1: Explore
- Browse 3-5 digital gardens above
- Install Obsidian or choose your Markdown editor
- Start one "evergreen note" on a topic you know well

### Week 2: Set Up
- Choose your publishing path (start with Digital Garden plugin for ease)
- Get one note live on a public URL
- Share with one friend for feedback

### Week 3: Connect
- Add RSS feed to your site
- Set up webmentions (if feeling adventurous)
- Write a second note that links to the first

### Month 2: Grow
- Publish 2-4 more notes
- Experiment with newsletter crossposting
- Share your garden on Mastodon/social with `#digitalgarden` tag

### Month 3: Federate
- Connect your RSS to a newsletter tool
- Set up POSSE workflow for new notes
- Start commenting on others' gardens with backlinks

> **Reflection question:** What's the smallest thing you could publish this week that would help someone else?

---

## 🤔 Common Questions

### "My notes are too messy to publish"
Perfect! That's what makes a garden a *garden* and not a *museum*. Use status indicators like 🌱 seedling, 🌿 budding, 🌳 evergreen to signal maturity.

### "What if I'm wrong about something?"
Update the note! Add a "Changelog" section or footnote. Digital gardens embrace iterative thinking. You're modeling intellectual humility, which is valuable in itself.

### "Nobody will read my notes"
Maybe! But that's not really the point. Gardens are for:
1. Future-you (searchable external memory)
2. People with very specific curiosities (findable via search)
3. Building relationships through ideas, not followers

The "audience" emerges slowly through backlinks and RSS, not virality.

### "Is this just blogging with extra steps?"
Sort of! Key differences:
- Gardens privilege **connections over chronology**
- Notes update and evolve, rather than freezing in time
- Less pressure to "perform" polished content
- Structure emerges organically, not via archives

### "How do I decide what to publish?"
Start with "useful to someone else, even partially formed." Err on the side of sharing. You can always unpublish later. Notes no one should see:
- Private/sensitive information
- Half-baked hot takes you'll regret
- Notes that would hurt someone

Otherwise? Plant it and see what grows.

---

## 🪴 This note will continue to grow…

As new tools emerge, as I refine my own setup, as others share their workflows—this guide will evolve. Check back periodically, or subscribe via RSS to see updates.

**Have questions or tips to add?** Reach out:
- Comment on the live garden version of this note
- Send a webmention from your own garden
- Find me on Mastodon: `%% add your handle %%`

---

**Related:** [[02 DEVELOP/🌿 Plants/Federating Your Second Brain\|Federating Your Second Brain]] • [[Digital Literacies and Open Knowledge Practices\|Digital Literacies and Open Knowledge Practices]]

**Tags for discovery:** #howto #tutorial #getting-started #obsidian #quartz #jekyll #rss #webmentions #indieweb

*Last tended: 2025-11-04*
