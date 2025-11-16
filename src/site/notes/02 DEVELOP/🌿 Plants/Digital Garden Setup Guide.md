---
{"dg-publish":true,"permalink":"/02-develop/plants/digital-garden-setup-guide/","title":"Digital Garden Setup Guide","tags":["howto","tutorial","digital-gardening","obsidian","publishing","technical-guide"]}
---


# Digital Garden Setup Guide

> [!info] Audience
> This guide is for anyone wanting to publish a digital garden from their personal knowledge management system. Assumes basic computer literacy but explains technical concepts.

## Decision Tree: Choose Your Path

Before starting, consider your technical comfort level and goals:

### Path A: Easiest (Obsidian → Digital Garden Plugin)
**Best for:**
- Obsidian users
- Want one-click publishing
- Minimal technical setup
- Quick start (< 1 hour)

**Time investment:** 30-60 minutes
**Technical level:** Beginner

### Path B: Powerful (Obsidian → Quartz)
**Best for:**
- Want modern, fast site
- Comfortable with command line
- Want full customization
- Any Markdown files (not just Obsidian)

**Time investment:** 2-3 hours first time
**Technical level:** Intermediate

### Path C: Maximum Control (Jekyll / Hugo)
**Best for:**
- Already familiar with static site generators
- Want complete control over everything
- Comfortable with web development

**Time investment:** 4-8 hours first time
**Technical level:** Advanced

### Path D: Federation-First (WriteFreely)
**Best for:**
- Want ActivityPub integration
- Prioritize fediverse connection
- Blogging over pure garden

**Time investment:** 1-2 hours
**Technical level:** Beginner-Intermediate

---

## Path A: Obsidian + Digital Garden Plugin

### Prerequisites

**What you need:**
- Obsidian installed (free from obsidian.md)
- GitHub account (free from github.com)
- Vercel or Netlify account (free)

**No coding knowledge required.**

### Step-by-Step Setup

#### 1. Install Digital Garden Plugin

**In Obsidian:**
1. Open Settings → Community Plugins
2. Disable Safe Mode if prompted
3. Browse Community Plugins
4. Search "Digital Garden"
5. Install and Enable

#### 2. Run Setup Wizard

**The plugin includes guided setup:**
1. Click plugin settings
2. Click "Open Setup Wizard"
3. Follow prompts to:
   - Create GitHub repository
   - Connect to Vercel
   - Set up deployment

**Wizard handles:**
- GitHub authentication
- Repository creation
- Deployment configuration
- Custom domain setup (optional)

#### 3. Configure Publishing Settings

**In plugin settings:**

**Repository:**
- GitHub username: [your username]
- Repository name: [your-garden-name]

**Site settings:**
- Site name: Your Garden Name
- Site description: Brief description
- Your name: [Your Name]

**Appearance:**
- Choose base theme
- Set accent colors
- Enable/disable features (graph, search, etc.)

#### 4. Publish Your First Note

**In any note:**
1. Add to frontmatter: `dg-publish: true`
2. Open command palette (Cmd/Ctrl + P)
3. Run "Digital Garden: Publish Single Note"
4. Wait for deployment (30-60 seconds)
5. Visit your site URL

**Example frontmatter:**
```yaml
---
dg-publish: true
---
```

#### 5. Set Up Homepage

**Create `index.md` or `home.md`:**
- Add `dg-publish: true`
- Add `dg-home: true` (makes it homepage)
- Write welcome content
- Link to other notes

**Example:**
```markdown
---
dg-publish: true
dg-home: true
---

# Welcome to My Digital Garden

This is a collection of my thoughts, notes, and ideas.

## Start Here
- [[About Me]]
- [[Now]]
- [[My Interests]]
```

### Advanced Features

#### Custom Domain

**In plugin settings:**
1. Enter your domain name
2. Follow instructions to configure DNS
3. Point CNAME record to Vercel

**DNS example:**
```
Type: CNAME
Name: garden (or @)
Value: cname.vercel-dns.com
```

#### Custom Styling

**Create `styles.css` in vault:**
```css
/* Custom styles go here */
body {
  font-family: your-preferred-font;
}
```

**In plugin settings:**
- Point to your styles.css file
- Styles apply to published site

#### Graph View Configuration

**Enable in plugin settings:**
- Show local graph on pages
- Adjust graph appearance
- Filter which notes appear

### Troubleshooting

**Note won't publish:**
- Check frontmatter syntax
- Ensure `dg-publish: true` exactly
- Try publishing from command palette

**Site not updating:**
- Check Vercel deployment status
- May take 1-2 minutes to deploy
- Clear browser cache

**Links broken:**
- Use `[[WikiLinks]]` format
- Ensure linked notes also have `dg-publish: true`
- Case sensitive (match note titles exactly)

### Maintenance

**Daily:**
- Just write notes as normal
- Add `dg-publish: true` when ready
- Click publish button

**Weekly:**
- Review published notes
- Check for broken links
- Update outdated information

**Monthly:**
- Update plugin (Settings → Community Plugins)
- Review analytics if enabled
- Adjust published note selection

---

## Path B: Obsidian + Quartz

### Prerequisites

**What you need:**
- Obsidian installed
- Node.js installed (nodejs.org)
- Git installed (git-scm.com)
- GitHub account
- Terminal/command line basic comfort

### Step-by-Step Setup

#### 1. Install Quartz

**Open terminal:**
```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```

**Follow prompts:**
- Choose "copy an existing folder" option
- Point to your Obsidian vault folder
- Or choose to start fresh

#### 2. Configure Quartz

**Edit `quartz.config.ts`:**
```typescript
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Your Garden Name",
    enableSPA: true,
    enablePopovers: true,
    baseUrl: "yourdomain.com",
    // ... other settings
  },
}
```

**Key settings to customize:**
- `pageTitle` – Your site name
- `baseUrl` – Your domain
- `enableSPA` – Faster navigation
- `enablePopovers` – Hover previews

#### 3. Preview Locally

**Run development server:**
```bash
npx quartz build --serve
```

**Open browser:** `http://localhost:8080`

**Test:**
- Navigation works
- Links function correctly
- Backlinks appear
- Graph displays

#### 4. Filter Published Content

**Option A: Separate folder**
Create `/content` folder for published notes only.

**Option B: Metadata filtering**
Configure Quartz to only build notes with `publish: true`.

**Edit `quartz.config.ts`:**
```typescript
plugins: {
  filters: [Plugin.RemoveDrafts()],
  // Only publishes notes without draft: true
}
```

#### 5. Deploy to Hosting

**GitHub Pages (free):**
```bash
npx quartz sync
# Pushes to GitHub
# Enable GitHub Pages in repo settings
```

**Netlify (free):**
1. Connect GitHub repo
2. Build command: `npx quartz build`
3. Publish directory: `public`

**Vercel (free):**
1. Import GitHub repo
2. Framework preset: Other
3. Build command: `npx quartz build`
4. Output directory: `public`

#### 6. Automation

**Auto-deploy on commit:**
- Push to GitHub
- Hosting service rebuilds automatically
- Changes live in 1-2 minutes

**GitHub Action example:**
```yaml
name: Deploy Quartz
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm i
      - run: npx quartz build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

### Customization

#### Styling

**Edit `quartz/styles/custom.scss`:**
```scss
// Your custom styles
body {
  font-family: "Your Font", sans-serif;
}

// Customize colors
:root {
  --primary-color: #your-color;
}
```

#### Layout

**Edit `quartz.layout.ts`:**
```typescript
export const layout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
  ],
  left: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [
    Component.Graph(),
    Component.TableOfContents(),
    Component.Backlinks(),
  ],
}
```

#### Plugins

**Enable/disable features:**
```typescript
plugins: {
  transformers: [
    Plugin.FrontMatter(),
    Plugin.CreatedModifiedDate(),
    Plugin.SyntaxHighlighting(),
    Plugin.ObsidianFlavoredMarkdown(),
    Plugin.GitHubFlavoredMarkdown(),
    Plugin.TableOfContents(),
  ],
}
```

### Troubleshooting

**Build errors:**
- Check Node.js version (need v18+)
- Run `npm i` again
- Delete `node_modules`, reinstall

**Links not working:**
- Use `[[WikiLinks]]` format
- Ensure paths correct
- Check case sensitivity

**Graph not showing:**
- Enable in config
- Ensure notes have bidirectional links
- Check browser console for errors

---

## Path C: Jekyll / Hugo

### Jekyll (Ruby-based)

**Prerequisites:**
- Ruby installed
- Git installed

**Quick start:**
```bash
gem install jekyll bundler
jekyll new my-garden
cd my-garden
bundle exec jekyll serve
```

**Garden themes:**
- [Jekyll Garden](https://github.com/Jekyll-Garden/jekyll-garden.github.io)
- [Simply Jekyll](https://simply-jekyll.netlify.app/)

**Deploy:** GitHub Pages (native support)

### Hugo (Go-based)

**Prerequisites:**
- Hugo installed
- Git installed

**Quick start:**
```bash
hugo new site my-garden
cd my-garden
git submodule add [theme-repo] themes/[theme-name]
hugo server
```

**Garden themes:**
- [Hugo Obsidian](https://github.com/jackyzha0/hugo-obsidian)

**Deploy:** Netlify, Vercel, or GitHub Pages

### Configuration

Both require more manual setup than Quartz or Digital Garden plugin. See respective documentation for details.

---

## Path D: WriteFreely (Federation-First)

### Write.as (Hosted)

**Quickest ActivityPub presence:**
1. Sign up at write.as
2. Start writing posts
3. Your blog is automatically federated
4. Others can follow from Mastodon

**Pros:**
- Zero technical setup
- Native federation
- Beautiful, minimal design
- Privacy-focused

**Cons:**
- Less "garden" feel (more blog-like)
- Limited customization
- Monthly cost for features

### Self-Hosted WriteFreely

**Requirements:**
- Server/VPS (DigitalOcean, etc.)
- Domain name
- Basic Linux knowledge

**Setup:** Follow WriteFreely documentation

**Benefits:**
- Full control
- Free (except hosting)
- Federation included

---

## Post-Setup: Essential Configuration

### RSS Feeds

**Ensure enabled:**
- Most static generators include RSS by default
- Check `/feed.xml` or `/rss.xml` exists
- Validate with feed validator

**Promote your RSS:**
- Link from homepage
- Add to social media bio
- Submit to aggregators

### Webmentions (Optional)

**Add cross-site comments:**

1. Sign up at webmention.io
2. Add verification links to site
3. Add webmention endpoint to HTML:
```html
<link rel="webmention" href="https://webmention.io/yourdomain/webmention" />
```
4. Display received webmentions

**Services:**
- [Webmention.io](https://webmention.io/)
- [Bridgy](https://brid.gy/) – for social media

### Analytics (Optional)

**Privacy-respecting options:**
- **Plausible** – Simple, privacy-focused
- **Goatcounter** – Free, open source
- **None** – Most authentic garden approach

**Avoid:** Google Analytics (privacy concerns, overkill)

### Search Functionality

**Most gardens include:**
- Full-text search
- Tag filtering
- Graph exploration

**Ensure enabled in your chosen tool.**

---

## Publishing Workflow

### Deciding What to Publish

**Publish when note is:**
- Useful to someone else (even if incomplete)
- Not embarrassingly wrong
- Not private/sensitive

**Don't wait for perfection.**

### Gradual Disclosure

**Maturity levels:**
- 🌱 Seed – New idea, just planted
- 🌿 Plant – Developing, being refined
- 🌳 Evergreen – Mature, stable

**Use status tags:**
```yaml
---
status: 🌱_seed
dg-publish: true
---
```

### Update Existing Notes

**Gardens are living:**
- Edit published notes freely
- Add updates/corrections
- Show revision history (optional)
- No shame in changing mind

### Link Generously

**Every note should link to:**
- Related concepts
- Source material
- Continuing discussion
- Your other work

**Both directions:**
- Forward links (what you reference)
- Backlinks (who references you)

---

## Maintenance and Growth

### Daily Habits

**Sustainable practices:**
- Write notes for yourself first
- Publish when ready, not on schedule
- Update existing notes over creating new ones
- Follow curiosity, not metrics

### Weekly Review

**Garden tending:**
- Review recent notes
- Add backlinks discovered
- Identify publishing candidates
- Update index/navigation

### Monthly Reflection

**Assess health:**
- What's growing well?
- What needs attention?
- Any dead branches to prune?
- New areas to explore?

---

## Common Pitfalls

### Perfectionism

**Problem:** Waiting for notes to be "done"
**Solution:** Publish seeds, let them grow publicly

### Over-organization

**Problem:** Spending more time organizing than writing
**Solution:** Let structure emerge organically

### Publication pressure

**Problem:** Feeling obligated to publish regularly
**Solution:** Gardens grow at their own pace

### Comparison

**Problem:** Comparing your garden to polished examples
**Solution:** Your garden is unique, embrace it

---

## Advanced Topics

### Custom Domains

**Most hosting services support:**
1. Buy domain (Namecheap, Google Domains, etc.)
2. Configure DNS
3. Point to hosting service
4. Enable HTTPS (usually automatic)

### Backups

**Essential practice:**
- Git repository = automatic backup
- Local files = additional backup
- Export occasionally for safety

### Collaboration

**Enable contributions:**
- Accept pull requests on GitHub
- Add comments via webmentions
- Create "suggestions" page

### Migration

**Moving hosts:**
- Your files remain unchanged (Markdown)
- Export from old hosting
- Import to new hosting
- Update DNS records

---

## Resources and Community

### Documentation

**Tools:**
- [Quartz Docs](https://quartz.jzhao.xyz/)
- [Digital Garden Plugin](https://dg-docs.ole.dev/)
- [Obsidian Help](https://help.obsidian.md/)

### Communities

**Ask questions:**
- Obsidian Discord
- Quartz Discord
- r/DigitalGardens
- r/ObsidianMD

### Inspiration

**Gardens to explore:**
- [Maggie Appleton](https://maggieappleton.com/garden)
- [Andy Matuschak](https://notes.andymatuschak.org/)
- [Tom Critchlow](https://tomcritchlow.com/wiki/)
- [Gwern.net](https://gwern.net)

---

## Getting Help

**When stuck:**
1. Check tool documentation first
2. Search community forums
3. Ask specific questions (include error messages)
4. Share your setup details

**Most helpful information:**
- What you're trying to do
- What you've already tried
- Error messages (full text)
- Your operating system

---

## Next Steps

**After setup complete:**
1. Write 3-5 initial notes
2. Publish them
3. Share with one friend
4. Get feedback
5. Iterate and improve

**Then:**
- Keep writing
- Publish when ready
- Connect with other gardeners
- Enjoy the process

---

## Related Notes

- [[02 DEVELOP/🌿 Plants/My PKM Stack and Workflow\|My PKM Stack and Workflow]] – How I use these tools
- [[Tools for Federated Publishing\|Tools for Federated Publishing]] – Tool comparisons
- [[02 DEVELOP/🌿 Plants/Build Your Own Federated Garden\|Build Your Own Federated Garden]] – Broader guide
- [[Publishing Workflows\|Publishing Workflows]] – Different approaches

---

🪴 **This note will continue to grow...**

*Last tended: 2025-11-04*

**Questions about setup?** Ask in the [Obsidian Discord](https://obsidian.md/community) or reach out to gardeners you admire.
