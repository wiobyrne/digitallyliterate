---
{"dg-publish":true,"permalink":"/01-consume/articles/public-second-brain-with-quartz/","title":"Public Second Brain with Quartz","tags":["obsidian","quartz","digital-garden"]}
---


# Public Second Brain with Quartz

## Key Points:
This is my documentation of how I publish my notes from a private [Obsidian](https://www.ssp.sh/brain/obsidian) vault to my [Public Second Brain](https://brain.sspaeti.com/?ref=ssp.sh) with open-source [Quartz](https://www.ssp.sh/brain/quartz-publish-obsidian-vault) and [GoHugo](https://www.ssp.sh/brain/gohugo).

> Video Format
> 
> Part of how I publish is also on my YouTube video [My Obsidian Note-Taking Workflow](https://www.youtube.com/watch?v=myHKHM2mIis&ref=ssp.sh) about my [Note-Taking Workflow](https://ssp.sh/blog/obsidian-note-taking-workflow/?ref=ssp.sh) article.

[

## \# Journey of Publishing Notes

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#journey-of-publishing-notes)

I had [several iterations](https://ssp.sh/blog/why-i-moved-away-from-wordpress/?ref=ssp.sh). I used to have an HTML/CSS/PHP website, moved to a traditional blog with WordPress, and now have a [Static Site Generators (SSG)](https://www.ssp.sh/brain/static-site-generators-ssg)\-blog with GoHugo and a Second Brain (where you read this note) with GoHugo/Quartz.

On this page, I elaborate on how I can simply write in my Obsidian Vault, add `#publish` anywhere in my note, and run `make deploy` and it’s published on my public brain. No conversion, no extra formatting, no nothing needed, just running a make file.

I can write offline, on my mobile phone, or wherever I want; Obsidian will sync it across. Publishing will happen on my laptop (running the `make deploy`, which essentially does a rsync to my web hosting).

[

## \# Publish

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#publish)

How do I publish? There are two steps.

1. I added a Python script [find-publish-notes.py](https://github.com/sspaeti/second-brain-public/blob/hugo/utils/find-publish-notes.py?ref=ssp.sh) to the [Makefile](https://github.com/sspaeti/second-brain-public/blob/hugo/Makefile?ref=ssp.sh) to copy all my SecondBrain notes from my [Obsidian](https://www.ssp.sh/brain/obsidian) Vault with the hashtag `#publish` and copy it into the Quartz git-repo.
1. Since 2023-06-07: I switched to a [Rust-script](https://github.com/sspaeti/second-brain-public/blob/hugo/utils/obsidian-quartz/src/main.rs?ref=ssp.sh) that does the same but adds #hashtags properly as Hugo requests, and it is 30x faster. To get the Rust executable, you need to run `cargo build --release` from within the `utils/obsidian-quartz` folder.
2. I ran the [`make deploy`](https://github.com/sspaeti/second-brain-public/blob/3b99ddb68035977890f578ccdf781ce34529e6d4/Makefile?ref=ssp.sh#L52) that syncs the changes to my website. This command copies notes with the hashtag “publish” and deploys to [brain.ssp.sh](https://brain.ssp.sh/?ref=ssp.sh). See also more in below .
1. Since I use GitHub, I could also create a [GitHub Action to deploy](https://quartz.jzhao.xyz/hosting?ref=ssp.sh#github-pages) on commit. But I actually prefer to run the make file.

> Quartz v3 Workaround
> 
> I copy all my [Zettel](https://www.ssp.sh/brain/zettel)s in the root folder instead of adding sub-folders in Quartz. This way I can use Wikilinks `[[]]` and do not need to change to absolute paths - which I do not want to activate in my Second Brain.

[

### \# Deployment

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#deployment)

Here I describe how I deploy my second brain.

[

#### \# Self Hosting

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#self-hosting)

I self-host on my own server as I already have hosting for my website. The only thing I do I `rsync` the `public`\-folder to my web hosting, that’s all. The [script](https://github.com/sspaeti/second-brain-public/blob/6a2b157564aca5f6c576544433057134c91b00b5/Makefile?ref=ssp.sh#L38) shows how I do it. The actual line is `rsync -avz --delete public/ USER@DOMAIN.com:~/www/brain` (just replace with your user and domain).

[

#### \# GitHub

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#github)

If you do want to use GitHub actions, you can check the Data Glossary (glossary.airbyte.com) which is the same setup as Quartz, but there we use GitHub. Checkout the required [deploy.yaml](https://github.com/airbytehq/glossary/blob/hugo/.github/workflows/deploy.yaml?ref=ssp.sh) that makes the magic work

Basically, when someone changes the branch `hugo`, it will deploy changes to `master` branch and publish that. I think I wrote some more details [here](https://github.com/airbytehq/glossary/blob/hugo/deployment?ref=ssp.sh).

[

### \# Adding an Image (Front Matter)

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#adding-an-image-front-matter)

I added the [option](https://github.com/sspaeti/second-brain-public/commit/ce1d877bb800a75f55fc2535c6df33755c208383?ref=ssp.sh) to overwrite the header image, and its width and height for each note, as well as the description. E.g. in the Frontmatter I can now overwrite the terms with:

| ``` 1 2 3 4 5 6 ``` | ```yaml --- ogimage: de-vault.jpg ogwidth: 1024 ogheight: 761 ogdescription: this is my new description --- ``` |
| --- | --- |

[

### \# Long-form example of how I publish to Quartz

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#long-form-example-of-how-i-publish-to-quartz)

![](https://www.ssp.sh/brain/Public%20Second%20Brain%20with%20Quartz-20250113205955395.webp)  
[Link: My Obsidian Note-Taking Workflow - YouTube](https://youtu.be/myHKHM2mIis?si=O7Gd5F2pg2yu3FFc&ref=ssp.sh)

[

### \# Short Asciinema Video

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#short-asciinema-video)

[![asciicast](https://asciinema.org/a/537695.svg)](https://asciinema.org/a/537695?ref=ssp.sh)

[

## \# See Other Public Brains

](https://www.ssp.sh/brain/public-second-brain-with-quartz/#see-other-public-brains)

[Other Public Second Brains](https://www.ssp.sh/brain/other-public-second-brains)

---

  Origin: 
  References: [GoHugo](https://www.ssp.sh/brain/gohugo) [Static Site Generators (SSG)](https://www.ssp.sh/brain/static-site-generators-ssg) [Shared on SH: Hackernews](https://news.ycombinator.com/item?id=36074512&ref=ssp.sh), [My Tech Stack](https://www.ssp.sh/brain/my-tech-stack)  
Created 2022-08-20

## Summary:
This is my documentation of how I publish my notes from a private [[01 CONSUME/Inbox/obsidian\|Obsidian]] vault to my 

Public Second Brain with open-source [[Quartz - Publish Obsidian Vault\|Quartz]] and [[GoHugo\|GoHugo]].

---

*Source: [Public Second Brain with Quartz](https://www.ssp.sh/brain/public-second-brain-with-quartz/)*
