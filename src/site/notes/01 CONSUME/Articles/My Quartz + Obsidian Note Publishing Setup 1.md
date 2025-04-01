---
{"dg-publish":true,"permalink":"/01-consume/articles/my-quartz-obsidian-note-publishing-setup-1/","title":"My Quartz + Obsidian Note Publishing Setup","tags":["obsidian","quartz","digital-garden"]}
---


# My Quartz + Obsidian Note Publishing Setup 1

## Key Points:
In this post, I’ll walk through how I’ve set up a system to manage both my private notes and the subset that I publish publicly here as a [Digital garden](https://oliverfalvai.com/Evergreen/Digital-garden). By integrating [Quartz](https://oliverfalvai.com/Resources/Entities/Quartz), [Obsidian](https://oliverfalvai.com/Resources/Entities/Obsidian), and a CI/CD workflow, I can publish a new note or blog post in minutes. I can also mark a page as public when it’s ready for sharing, and it remains connected to all my other private notes.

### A single repo for everything

Similar to other static site projects, Quartz is a repo you are supposed to fork, customize, and then keep up with changes from upstream (Quartz even has a `sync` CLI command for this).

Instead of moving my public notes gradually over to a Quartz repo whenever I want to publish something, I did it the other way around, integrating Quartz into my repo that stores my Obsidian vault. From the high level, my repo structure looks like this:

```
├── quartz
│   └── content (empty)
└── vault
    ├── .obsidian
    ├── Attachments
    ├── _redirects
    └── index.md
```

The entire Quartz repo is one directory within my repo (more on this later) and its usual `content` directory is empty, this is not where my notes live. The other top-level directory is my [Obsidian](https://oliverfalvai.com/Resources/Entities/Obsidian) vault with all my Markdown files, attachments, and the `.obsidian` directory in it.

The quartz directory is not a plain copy of the upstream Quartz repo, but a [git subtree](https://www.atlassian.com/git/tutorials/git-subtree). It’s similar to a git submodule in the sense that I can have a local copy and integrate upstream changes too, but the ergonomics are a bit different (check out the linked tutorial for details). Needless to say, I sometimes face bad merge conflicts when pulling upstream changes, but I think these would have happened in the simple upstream-fork repo setup too.

When I want to pull the upstream changes, I run:

```
git subtree pull --prefix=quartz https://github.com/jackyzha0/quartz.git v4 --squash
```

> Obsidian Sync
> 
> If Obsidian Sync is also active, it’s better to close the Obsidian app before running the above command. When a git conflict happens, the working tree could end up in a temporary state where the entire vault folder is missing. The running Obsidian app detects this change and starts syncing the deletion of all notes. Of course, when the conflict is resolved and the merge continues, the vault appears again in the working tree, but this messes up the sync history.

#### Quartz tweaks

I mentioned that the `quartz` repo’s `content` directory is empty and I instead store my Obsidian vault as a top-level directory. Quartz needs to know about this path change, and the Quartz CLI has a `--directory` flag for overriding the input, so the only change I made was running `npx quartz build --directory=../vault` when building the site (note: this should be run from the `quartz` subdirectory and not the root).

#### Deploy workflow

I’m using Netlify for hosting this site, my workflow is largely the same as the one described in the [Quartz docs for Netlify](https://four.quartz.jzhao.xyz/hosting#netlify).

### Mixing private and public notes

Having a single Obsidian vault for both private and public notes is really simple with Quartz 4. By default, all content files are part of the deployment, but you can easily add a filter to your `quartz.config.ts`:

```
  filters: [Plugin.ExplicitPublish()],
```

[ExplicitPublish](https://quartz.jzhao.xyz/plugins/ExplicitPublish) is a built-in filter that only forwards Markdown pages where the frontmatter has `publish: true` set. There is also [RemoveDrafts](https://quartz.jzhao.xyz/plugins/RemoveDrafts) for filtering out work-in-progress content.

#### Private attachments

It’s important that filters only work on Markdown files, so it’s still possible to publish private files. By default, all non-Markdown files are copied to the publish folder, and even though there are no direct links to those attachments, it’s easy to brute-force the file path and get a public URL.

I worked around this by using the `ignorePatterns` field in `quartz.config.ts` and a special glob pattern:

```
  ignorePatterns: [
	".obsidian/",
	"**/*.patch",
	"**/*.pdf",
	"**/*.canvas",
	"Attachments/!(public-|Public-)*.*",
],
```

The last pattern patches anything in the `Attachments` folder that doesn’t have the `public-` or `Public-` prefix. Since I use a single top-level attachment folder in Obsidian, this seemed like the easiest way to filter out private files.

> Update
> 
> Quartz docs now contain a section about this problem and [have another solution](https://quartz.jzhao.xyz/features/private-pages#filter-plugins) that uses a separate folder for public attachments.

#### 404 page

It’s easy to end up linking a private page from a public one with this Quartz setup. I think it’s fine and shouldn’t stop me from making a page public, but I wanted to explain this to site visitors. I decided to add an explanation to the 404 page directly by editing `quartz/components/pages/404.tsx`

![](https://oliverfalvai.com/Attachments/public-quartz-404-page.png)

### Other nice things

Here are a few other small things I discovered and implemented to make this setup even better.

#### Dead link checker

If you care about dead links and 404s, you can use the amazing [linkinator CLI](https://github.com/JustinBeckwith/linkinator) to recursively scan your site for broken links:

```
npx linkinator --recurse --silent http://localhost:8080
```

#### Visual indicator for public notes in Obsidian

I’m using the [Supercharged links plugin](https://github.com/mdelobelle/obsidian_supercharged_links) to visually distinguish public notes throughout Obsidian’s UI. This helps me remember what is public and what is not, in case I forget to look at the frontmatter before writing something sensitive 🙃 The plugin does much more now than styling links, it can change the rendering of notes in the file tree, tab heading and other UI elements.

I set up a simple rule that adds the 🪴 prefix to notes where `publish: true` is set in the frontmatter:

![](https://oliverfalvai.com/Attachments/public-supercharged-links.png)

## Summary:
In this post, I’ll walk through how I’ve set up a system to manage both my private notes and the subset that I publish publicly here as a Digital garden ...

---

*Source: [My Quartz + Obsidian Note Publishing Setup](https://oliverfalvai.com/evergreen/my-quartz-+-obsidian-note-publishing-setup)*
