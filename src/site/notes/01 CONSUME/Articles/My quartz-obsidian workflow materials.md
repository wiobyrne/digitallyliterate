---
{"dg-publish":true,"permalink":"/01-consume/articles/my-quartz-obsidian-workflow-materials/","title":"My quartz-obsidian workflow materials","tags":["obsidian","quartz","reclaim-hosting"]}
---


# My quartz-obsidian workflow materials

## Key Points:
This page is some detail regarding the setup of this website.

### Hosting

I have shared hosting with [https://www.reclaimhosting.com/](https://www.reclaimhosting.com/)

> Reclaim Hosting provides institutions and educators with an easy way to offer their students domains and web hosting that they own and control.

I like their model, I’ve found them responsive and it’s reasonably priced. It’s let me play with various systems (my [website was on Wordpress for a long time](https://sjgknight.com/finding-knowledge/2014-04-moving-to-my-own-hosting), but I also ran a wiki instance, I played with Drupal, etc.) through CPanel.

### Website writing

Since I moved off [Wordpress to quartz](https://sjgknight.com/finding-knowledge/2023-11-Moving-to-quartz) (more on [Quartz](https://quartz.jzhao.xyz/)), I’ve also been using [Obsidian](https://obsidian.md/) as the main place I edit and create content.

My Obsidian instance includes a set of plugins, that currently comprises:

```
[
  "tag-wrangler",
  "obsidian42-brat",
  "obsidian-excalidraw-plugin",
  "execute-code",
  "image-ocr",
  "obsidian-git",
  "obsidian-paste-image-rename",
  "obsidian-pandoc",
  "cm-editor-syntax-highlight-obsidian",
  "templater-obsidian",
  "tags-overview",
  "insert-unsplash-image",
  "advanced-merger",
  "obsidian-enhancing-export",
  "obsidian-minimal-settings",
  "image-captions",
  "notion-like-tables",
  "find-unlinked-files",
  "mermaid-themes",
  "obsidian-banners",
  "multi-column-markdown",
  "recent-files-obsidian",
  "obsidian-advanced-slides",
  "obsidian-argdown-plugin"
]
```

### Website building

I now build my website on my PC using **Quartz**, and end up with a set of static html+ files. Those need moving online to be hosted and viewable for the world. I was doing that through FTP for a bit, but it’s very inefficient.

What my workflow now looks like is:

```
#npx quartz update
npm i
 
# git pull content upstream
 
#build quartz site
npx quartz build
 
# or to preview/view
npx quartz serve --fastRebuild
 
#add new items to git
git add .
# commit new and edited
git commit -m "customise"
 
#connect to server to push (assuming SSH setup via putty, and saved with name "reclaim")
putty -load "reclaim"
#or
plink -load "reclaim"
#this may need more faffing in windows to cache the key, you might need to add an environment variable GIT_SSH for plink.exe
 
#push updated site from local machine to server
git push live content:main
git push origin content:content
```

#### How to sync static built site to server

What that rests on is using a `post-receive` script in a git repository hosted in my reclaimhosting space.

This largely reflects the very helpful instructions [https://jekyll.polyrhetor.io/](https://jekyll.polyrhetor.io/) but (a) I’m on Windows, and (b) I found some bits confusing/I did things in a different sequence, so it shows a bit more detail.

[(see their instructions)](https://support.reclaimhosting.com/hc/en-us/articles/4405854225815-Connecting-via-SSH)

#### Step 2: Setup directories on reclaimhosting space

You can do this either via SSH (using the instructions [https://jekyll.polyrhetor.io/](https://jekyll.polyrhetor.io/) ), or via the CPanel GUI file manager (how I did it).

You need to create three directories:

1. Name: gitbare, Description: This’ll hold a ‘bare’ git repository, it’s where the `post-receive` script below will go.
2. Name: you.com-quartztree, Description: This is where your entire git history for the repo will go
3. Name: public\_html or a subdomain (preferably), Description: This is your live website

You also need to know:

1. What the name of the directory that holds your public built website is (mine is `public`)
2. If you want to add another directory, what that’s called (and, possible security issues)

#### Step 3:

Either using SSH or the CPanel terminal, you need to:

1. Run `git init --bare` inside the directory **gitbare**
2. add the script below (edited) as your `post-receive` inside the `hooks` directory (you’ll see there’s a sample in it already)

I did ‘2’ using the browser editor and CPanel file manager.

Make sure to change the two variables at the top so `DOMAIN` is where your website will be served from (setup a subdomain in CPanel so it will load from this directory if you need to), and `DOMAINTRACKING` is where the git history is.

```
#!/bin/bash
 
  # instructions from https://jekyll.polyrhetor.io/
 
  # Replace this value with the actual domain name (or subdomain) that you want to serve from
  DOMAIN=public_html
  DOMAINTRACKING=you.com-quartztree
 
  echo
  echo "~~ Updating $DOMAIN ~~"
  echo
 
  # Clearing git env
  unset GIT_DIR
  unset GIT_WORK_TREE
 
  # auxiliary domain storing the entire tree (all repo content). You can name this what you want
  # DONT FORGET below you need to create this dir
  cd ~/$DOMAINTRACKING
  git pull
 
  echo
  echo "~~ inside the auxiliary domain ~~"
  echo
  
  # get to the static build directory, for jekyl _site for other builders public (or whatever you chose)
  cd public
 
  # delete domain contents
  rm -rf ~/$DOMAIN/*
 
  # copy the current directory (public) to our domain path
  cp -R * ~/$DOMAIN
  
  # if you want to add files that arent in your public directory, you can do that (assuming the directories exist), e.g. I have a htaccess file that my SSG doesn't build, so I keep it separately 
  echo "~~ inside the supplement to public dir ~~"
  cd ../web
 
  shopt -s dotglob # include hidden files in the wildcard match
  if [ "$(ls -A .)" ]; then
    cp -R * ~/$DOMAIN
  fi
  shopt -u dotglob # disable dotglob
 
  echo
  echo "~~ Done ~~"
  echo
  
# On server you also need to then
	# git clone you-tracking.git test.you.com-quartztree
	# or you.com-quartztree
 
# On your local machine assuming you have a repository already hook it up to the remote, live is the remote name
	# git remote add live ssh://<polyrhet>@<servername>/~/<webdomain>.git
	# git remote add live ssh://you@you.com/home/you/you-tracking.git
 
	# then push, to live, from main (or in my case content)
	# git push live content
```

#### Step 4:

On your local computer, if you don’t have a repo, make one.

If you do, then you can run:

`git remote add live ssh://<polyrhet>@<servername>/~/<webdomain>.git` (changing it for the address for your `barerepo`).

You may need to fix branch names or connections.

You’ll see above that I have two (at least) remotes, and I push

To my live website on reclaimhosting, using: `git push live content:main` (i.e., my local branch is called `content` and the remote server branch is called `main`)

And to github using: `git push origin content:content`

## Summary:
This page is some detail regarding the setup of this website. Hosting I have shared hosting with www.reclaimhosting.com/ Reclaim Hosting provides institutions and educators with an easy way to offer their students domains and web hosting that they own and control.

---

*Source: [My quartz-obsidian workflow materials](https://sjgknight.com/finding-knowledge/2024-05-my-quartz-obsidian-workflow)*
