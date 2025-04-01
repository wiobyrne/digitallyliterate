---
{"dg-publish":true,"permalink":"/01-consume/articles/setting-up-quartz-with-obsidian-charles-wang/","title":"Setting up Quartz with Obsidian — Charles Wang","tags":["obsidian","quartz","digital-garden"]}
---


# Setting up Quartz with Obsidian — Charles Wang

## Key Points:
## Setting up Quartz with Obsidian

Exposing my unfinished notes online for fun and (no) profit

Live at [otherworld.czw.sh](https://otherworld.czw.sh/). Yes, the name is [once again](https://charleszw.com/projects/door) inspired by OMORI.

First on the backlog of projects I wanted to check out over winter break is Quartz by Jacky Zhao, a static site generator that turns Markdown notes into HTML. This description undersells it quite a bit; just take a look at the [list of features](https://quartz.jzhao.xyz/features/) to see what I mean. Stuff I wanna highlight:

- Generation of index pages for tags, including nested ones like `#this/nested/tag`
- Full text searching
- 100% Obsidian compatibility, including wikilinks, callouts, and file embeds
- LaTeX support via KaTeX or MathJax

Quartz turns your local Obsidian vault into a fully-fledged, functional website. Compared to Obsidian Publish, it’s free and you get to customize many more things. This post documents my experience with Quartz and how I got it to work with my vault. Up to date as of v4.4.0.

## Basic setup and workflow

There are two things that drastically simplified setup for me. The first is that my vault is already on GitHub; this is how I sync notes between my laptop and other devices.<sup><a class="w-fit text-sweater-3 decoration-sweater-3/50 decoration-1 underline-offset-2 transition-[color_opacity] hover:text-sweater-1 hover:decoration-sweater-2 scroll-mt-96" href="https://charleszw.com/posts/#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="">[1]</a></sup>

The second thing is that I use Vercel for hosting, and its GitHub integration automatically rebuilds the site on a new push. So all that is taken care of for me. What about the notes themselves?

Quartz is a separate repository from my Obsidian vault, but expects all Markdown files to live within its own `content/` folder. I wanted the ability to regularly update Quartz’s content, preferably without having to manually copy over notes from one repo to the other. GitHub Actions is the perfect solution to this.<sup><a class="w-fit text-sweater-3 decoration-sweater-3/50 decoration-1 underline-offset-2 transition-[color_opacity] hover:text-sweater-1 hover:decoration-sweater-2 scroll-mt-96" href="https://charleszw.com/posts/#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref="">[2]</a></sup>

My process looks like this:

1. I add a new note or edit an existing one in my vault. Changes (as decided by Git) are made. These changes are committed and pushed to the vault repo on GitHub.
2. GitHub eventually runs my workflow in the Quartz repo, clones the vault repo, copies over all files and attachments to the content/ folder, and lets Quartz sync the changes (if any).
3. Vercel detects a new push and redeploys the site.

The Action runs automatically (see below) so the system essentially runs by itself. Pretty neat.

## Configuration

The level of configuration that Quartz brings to the table truly makes it stand out. You can customize everything from the layout (by defining your own components) to the way Markdown is processed (by writing your own plugins). For the most part I’ve left the defaults alone, but I do have some notes.

Since every link in my vault uses the shortest path possible—plus, none of my files have the same name, so every link is unique and can just be the filename—I can copy over everything, plop them in completely different places, and everything still works. This makes using GitHub Actions viable.

This is thanks to Quartz’s Obsidian support. Make sure to set the markdownLinkResolution option to shortest for the CrawlLinks plugin, like so:

quartz.config.ts

```expressive
  transformers: [    /* ...other plugins... */    Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),],
```

Since I’ll be making copies of my notes, the file creation date on disk will not be accurate. Fortunately, I keep track of when each note was created and modified via frontmatter within the note itself. I tell Quartz to use and display that instead.

quartz.config.ts

```expressive
  transformers: [    /* ...other plugins... */    Plugin.CreatedModifiedDate({        priority: ["frontmatter"],    }),    Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),],
```

### Styling

Most of the time was spent on making things look ✨*pretty*✨

I customized Quartz to use the same color scheme as this website. I also created a light mode version,<sup><a class="w-fit text-sweater-3 decoration-sweater-3/50 decoration-1 underline-offset-2 transition-[color_opacity] hover:text-sweater-1 hover:decoration-sweater-2 scroll-mt-96" href="https://charleszw.com/posts/#user-content-fn-3" id="user-content-fnref-3" data-footnote-ref="">[3]</a></sup> and honestly I think it looks even better than dark:

![Homepage of the my Quartz site, displayed in light purple colors.](https://charleszw.com/_vercel/image?url=_astro%2Fquartz-light.B3tsjowW.png&w=2048&q=100)

Currently I’m using my go-to fonts (Atkinson Hyperlegible and Berkeley Mono), but why limit myself? I might give the [Geist family](https://vercel.com/font) a spin.

It’s a bit hard to make out in the screenshot, but I also made a cute little icon! It’s inspired by the in game location of the same name and all the towers you see while playing.

![Diagram showing how the icon's main tower graphic comes from OMORI, the
game.](https://charleszw.com/_vercel/image?url=_astro%2Fotherworld-icon-ref.Cz_hEYZT.png&w=750&q=100)

**References for the icon.** Sorry, this feels like a shitty YouTube thumbnail.

As is usual with these sorts of icons, I used Figma to make it.

### Bun, Windows, and Quartz commands

Honestly, I’m not sure what’s going on here, and who is at fault.<sup><a class="w-fit text-sweater-3 decoration-sweater-3/50 decoration-1 underline-offset-2 transition-[color_opacity] hover:text-sweater-1 hover:decoration-sweater-2 scroll-mt-96" href="https://charleszw.com/posts/#user-content-fn-4" id="user-content-fnref-4" data-footnote-ref="">[4]</a></sup> But Quartz does not work with [Bun](https://bun.sh/) out of the box. In particular, while Quartz’s documentation uses Node and `npm`, analogous commands like `bunx quartz sync` would fail.

```expressive
> bunx quartz syncerror: could not determine executable to run for package quartz
```

`quartz` is defined as a script name in package.json, so I figured `bun run` would at least work, but this didn’t either at first:

```expressive
> bun run quartz build --serve$ ./quartz/bootstrap-cli.mjs build --servebun: command not found: ./quartz/bootstrap-cli.mjserror: script "quartz" exited with code 1
```

Oops. Looking at the error, this one’s on me. It states we’re trying to *literally* run the file, which unfortunately doesn’t work on Windows because it doesn’t recognize the shebang present at the top of this file. The solution was to prepend `bun run` to the script so that Windows knows which executable to use.

package.json

```expressive
"scripts": {    "quartz": "bun run ./quartz/bootstrap-cli.mjs",    "quartz": "./quartz/bootstrap-cli.mjs",},
```

Now `quartz` is a valid script name that Bun can run, so e.g. `bun quartz build --serve` works flawlessly. Still not sure what’s going on with `bunx` though.

## GitHub Actions

Following [Quartz’s advice](https://quartz.jzhao.xyz/features/private-pages), in my vault I’ve separated public attachments into their own folder. However, the `RemoveDrafts` plugin wasn’t useful to me because during the copying process, my script knows to only copy from the public folder, so I didn’t need to filter anything back out.

Here is the entirety of my workflow file:

.github/workflows/update-content.yml

```expressive
  name: Update vault content
  on: schedule:    - cron: "0 11 * * MON" # Run every Monday at 11 AM UTC  workflow_dispatch:
  jobs: update_vault_content:    runs-on: ubuntu-latest    steps:      - name: Clone aczw/<VAULT_REPO>        uses: actions/checkout@v4.2.2        with:          repository: "aczw/<VAULT_REPO>"          ref: main          token: ${{ secrets.GH_PERSONAL_ACCESS_TOKEN }}          path: <VAULT_REPO>
      - name: Clone this repo        uses: actions/checkout@v4.2.2        with:          ref: v4          token: ${{ secrets.GH_PERSONAL_ACCESS_TOKEN }}          path: <QUARTZ_REPO>
      - name: Delete everything in content/ except index.md        run: |          cd <QUARTZ_REPO>          mv content/index.md .          rm -rf content          mkdir content          mv index.md content
      - name: Copy over media and files        run: |          cd <VAULT_REPO>          echo "----- Copying over public-only attachments"          cp -vr <PUBLIC_ATTACHMENTS_FOLDER> ../<QUARTZ_REPO>/content          echo -e "\n----- Copying over Markdown files"          cp -vr <YOUR_NOTES_FOLDER>/. ../<QUARTZ_REPO>/content          cd ../<QUARTZ_REPO>/content          mv <PUBLIC_ATTACHMENTS_FOLDER> _files        # ^ Include this last line if you want to rename your public folder
      - name: Print out current state of filesystem        run: |          echo "----- Folder: <QUARTZ_REPO>/"          cd <QUARTZ_REPO>          ls | cat          echo -e "\n----- Folder: <QUARTZ_REPO>/content/"          ls content | cat          echo -e "\n----- Folder: <QUARTZ_REPO>/content/_files"          ls content/_files | cat        # ^ NOTE: this uses the renamed folder name from above
      - name: Install Bun just to run literally two commands        uses: oven-sh/setup-bun@v2.0.1        with:          bun-version: latest
      - name: Install dependencies        run: |          cd <QUARTZ_REPO>          bun i
      - name: Setup Git config (user and email), necessary for commits        run: |          git config --global user.name "Porter Robinson"          git config --global user.email "hello@example.com"
      - name: Sync Quartz repo        run: |          cd <QUARTZ_REPO>          bun quartz sync
```

Some notes:

- I’ve also uploaded this file as a Gist, [which you can view here](https://gist.github.com/aczw/7b31a8a94398478f2f13867deb46dc75).
- To clone my repositories I use a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) which I’ve added as a repository secret in the Quartz repo. This is what `secrets.GH_PERSONAL_ACCESS_TOKEN` refers to.
- If you’re using Vercel’s free plan, make sure the Git config email above matches your Vercel account email. Otherwise the GitHub integration might error out claiming “No GitHub account was found matching the commit author email address.” See this [Stack Overflow answer](https://stackoverflow.com/a/79012146).

I hope the job names are self-explanatory. Simply replace `<VAULT_REPO>`, `<QUARTZ_REPO>`, and other values as necessary. If you’re using `npm` you can replace all the Bun stuff.

This is my first time using Actions and writing a workflow so please don’t make too much fun of me. Could some steps be combined? Yeah, but I like seeing them as separate items in the web UI.

## What notes to publish and why

I go into more detail on the site’s homepage (link found at the top), but I maintain a folder in my vault for technical notes from my classes, textbooks, and any other resources. This is what I’m currently publishing.

Another good question you may be asking is why publish my notes at all? It’s not because I think they’re good.<sup><a class="w-fit text-sweater-3 decoration-sweater-3/50 decoration-1 underline-offset-2 transition-[color_opacity] hover:text-sweater-1 hover:decoration-sweater-2 scroll-mt-96" href="https://charleszw.com/posts/#user-content-fn-5" id="user-content-fnref-5" data-footnote-ref="">[5]</a></sup> The simple answer is: why not? I’ve learned more about Markdown transpilation and CI/CD. On the off chance someone stumbles upon the site, they may find the notes useful. I view it as a win-win situation and a net positive result.

I can reference all sorts of other reasons that people have written about, like [Quartz’s philosophy page](https://quartz.jzhao.xyz/philosophy), [working with the garage door up](https://notes.andymatuschak.org/Work_with_the_garage_door_up), or the concept of [digital gardens](https://maggieappleton.com/garden-history), and I’m sure they’ve all subconsciously had an influence on me, but honestly it’s not that deep. I like putting stuff I’ve done online and Quartz made it really easy. That’s 90% of my reasoning!

So, I encourage you to publish your own notes. Feel free to reach out if you have, or if you found mine helpful.

## Footnotes

[^1]: One neat side effect is that my GitHub contribution graph looks absolutely stacked, when in reality it’s mostly just commits to my vault. If you still judge people based on their graphs given [how easy it is to manipulate](https://github.com/gelstudios/gitfiti), then more power to me!

[^2]: My dependence on GitHub grows stronger by the day. I can’t wait to graduate and have to pay for Pro and be hit with charges on things I didn’t know existed.

[^3]: Which this site currently doesn’t have (and probably should have).

[^4]: Probably me. By the way, I’ve added footnotes support to this site, as you’ve probably noticed. I apologize for abusing them in this post. I’ll stop when the novelty wears off.

[^5]: They’re not.

## Summary:
Exposing my unfinished notes online for fun and (no) profit

---

*Source: [Setting up Quartz with Obsidian — Charles Wang](https://charleszw.com/posts/quartz-obsidian#user-content-fn-3)*
