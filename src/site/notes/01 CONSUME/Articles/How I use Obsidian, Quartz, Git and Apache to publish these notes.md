---
{"dg-publish":true,"permalink":"/01-consume/articles/how-i-use-obsidian-quartz-git-and-apache-to-publish-these-notes/","title":"How I use Obsidian, Quartz, Git and Apache to publish these notes","tags":["obsidian","quartz","digital-garden"]}
---


# How I use Obsidian, Quartz, Git and Apache to publish these notes

## Key Points:
I wanted to collect the details of the process I use to publish these notes. Both for my future reference and to help anyone else who wants to try a similar approach.

I realize my website setup is not the same as everyone else. It is a common setup, and allows more hands-on control. I host this site through Dreamhost and have SSH access to my web server.

The setup may seem a bit daunting, but is very straightforward. And publishing notes to the website afterward is quite simple.

## Assumptions

In making these notes, I’m going to make a few assumptions about the prerequisite knowledge needed, else this would have to be a much longer note.

- working knowledge of [Obsidian](https://www.rcook.net/Obsidian) for note taking
- how to clone a Git repository from Github, and set up local and remote Git repositories
- familiar with running programs via the command-line
- examples are being done on MacOS, but should work similarly on any Unix variant … Windows is likely slightly different

## Prerequisites

Along with the above knowledge assumptions, here are are a few setup prerequisites that I am not going to cover in these notes.

- [Obsidian](https://www.rcook.net/Obsidian) is already installed
- Both Node and `npm` are installed as needed for [Quartz](https://www.rcook.net/Quartz)
- your website is hosted via Apache on a server you have SSH access to
- you have access to Git both locally and on your web server
- sidenote: I use Sourcetree for most of my local Git work

## Steps Involved

This is a high level overview of the detailed steps following:

1. [Quartz](https://www.rcook.net/Quartz) installation, setup and configuration
2. [Obsidian](https://www.rcook.net/Obsidian) vault setup and configuration
3. Remote server setup
4. Local Git repository setup
5. Steps to publish new content
6. Further [Quartz](https://www.rcook.net/Quartz) customization
7. Further [Obsidian](https://www.rcook.net/Obsidian) tips
8. Final Notes

## [Quartz](https://www.rcook.net/Quartz) installation, setup and configuration

You can follow along in the [Quartz documentation](https://quartz.jzhao.xyz/)

- open a Terminal window and change the parent directory you want to contain your quartz installation
- `git clone https://github.com/jackyzha0/quartz.git`
- this will create a `quartz` folder in your parent directory
- `mv quartz quartz-demosite`
- rename this folder to represent your website, I’m using the “demosite” name above for this
- `cd quartz-demosite`
- change into your new quartz site folder
- `npm i`
- this updates any needed dependencies for [Quartz](https://www.rcook.net/Quartz) in your Node environment
- `npx quartz create`
- this command will initialize your [Quartz](https://www.rcook.net/Quartz) installation
- installation options provided are: empty Quartz install, copy existing or symlink existing
- for this install I selected “empty Quartz install”
- file path options provided are: treat links as shortest path, absolute path or relative path
- for this install I selected “shortest path”
- this option needs to match your [Obsidian](https://www.rcook.net/Obsidian) configuration, which usually defaults to “shortest”
- next let’s create a couple of folders for later use in [Obsidian](https://www.rcook.net/Obsidian)
- `mkdir content/attachments`
- “content” is the folder for your notes in [Obsidian](https://www.rcook.net/Obsidian)
- I’ve added a folder for [Obsidian](https://www.rcook.net/Obsidian) to place all the attachments
- `mkdir templates`
- I added a “templates” folder to place my [Obsidian](https://www.rcook.net/Obsidian) template files
- finally, let’s create a branch for any changes we make to [Quartz](https://www.rcook.net/Quartz) files
- I used Sourcetree for this, but here is an equivalent command line, against using the “demosite” name
- `git checkout demosite`
- we are not going to push our changes anywhere, but we don’t want to step on the [Quartz](https://www.rcook.net/Quartz) files, as we should pull from their repo periodically to update our installation with their latest changes

## [Obsidian](https://www.rcook.net/Obsidian) vault setup and configuration

- from the [Obsidian](https://www.rcook.net/Obsidian) “Open Vault” dialog, open the folder for your [Quartz](https://www.rcook.net/Quartz) installation as a vault
- open the “Setting” and let’s make a few changes, some of these are personal preferences, feel free to make your own changes
- “Files and links”
- make sure “New Link Format” is “Shortest path when possible”
- turn on “Automatically update internal links”
- Set “Default location for new notes” to be “In the folder specified below” - “/content”
- set “Default location for new attachments” to be “/content/attachments”
- add several folders to the “Excluded files”
- “docs/”
- “node\_modules/”
- “quartz/”
- “Templates”
- set “Template folder location” to “templates”
- “Hotkeys”
- add hotkey `⌘T` for “Templates: Insert template”
- remove conflicting hotkey for “New Tab”

## Remote server setup

Here we are going to set up the remote Git repo and a hook to publish the website from the repo.

- SSH into the remote server and navigate to the parent folder for your website folders
- set up the website folder (if needed), this will depend on your hosting environment
- `mkdir demosite.com`
- set up a folder for the Git repository
- `mkdir demosite.com.git`
- set up the bare Git repository
- `cd demosite.com.git`
- `git init --bare`
- set up the `post-receive` hook
- use your file editor of choice (make sure to use your “user” name, and website folder)
- `nano hooks/post-receive`

```
#!/bin/sh
git archive main | tar -x -C /home/user/demosite.com/
```

- set the script as executable
- `chmod +x hooks/post-receive`
- change back up to your parent folder (above the website folders)
- `cd ..`
- One final update for Apache, as [Quartz](https://www.rcook.net/Quartz) does not append the HTML file extension, so we need Apache to fixup the requests
- `nano demosite.com/.htaccess`

```
Options +FollowSymlinks
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ /$1.html [L,QSA]
```

## Local Git repository setup

When [Quartz](https://www.rcook.net/Quartz) publishes the static site, it does so to the `./public` folder. However in doing so, it destroys and re-creates this folder. So that prevents us from putting a Git repository directly in the `./public` folder.

- start in the local [Quartz](https://www.rcook.net/Quartz) project root folder
- create a directory for the new local website repository
- `mkdir quartz.demosite.com`
- `cd quartz.demosite.com`
- initialize and setup the local Git repository
- `git init`
- now we need to point this repository to the one on our web server
- this step is going to make a few assumptions, and you may need to change this line depending on your setup
- `git remote add origin user@demosite.com:demosite.com.git`
- let’s break this down a bit:
- “user” is your remote login username
- “demosite.com” is your website, here we are using it to log into the web server via SSH
- “demosite.com.git” is the Git folder you created on the web server in the previous section
- if using Sourcetree, add the existing repository you just created to Sourcetree
- now we’re going to create a couple of helper scripts in the [Quartz](https://www.rcook.net/Quartz) project folder
- first create a `build.sh` script, this script does two actions:
- first it builds the static website via the [Quartz](https://www.rcook.net/Quartz) build process
- next it sync’s the `./public` output folder from [Quartz](https://www.rcook.net/Quartz) over to the folder with our Git repository

```
#!/bin/sh
npx quartz build
rsync -a public/ quartz.demosite.com
```

- finally create a script to locally preview your changes, create `preview.sh`

```
#!/bin/sh
npx quartz build --serve
```

- make sure both of your scripts are locally executable
- `chmod +x build.sh preview.sh`

## Steps to publish new content

If you have successfully completed all those setup steps, publishing new content is a breeze. I’m sure there are ways to better automate this process, but I don’t mind the flow for now.

- write your new content in the [Obsidian](https://www.rcook.net/Obsidian) vault you created in the [Quartz](https://www.rcook.net/Quartz) project folder
- preview the content locally by running `./preview.sh` and going to [http://localhost:8080](http://localhost:8080/)
- this is a live preview, that updates while you type in [Obsidian](https://www.rcook.net/Obsidian)
- cancel the preview, and run `./build.sh`, which builds and copies the content to the Git folder
- open Sourcetree for `quartz.demosite.com` (or use the command line Git)
- commit all changes and push to the remote server
- verify changes at `http://demosite.com` (your website address here)

## Further [Quartz](https://www.rcook.net/Quartz) customization

- the [Quartz](https://www.rcook.net/Quartz) configuration file is `./quartz.config.ts`
- the [Quartz](https://www.rcook.net/Quartz) layout file is `./quartz.layout.ts`
- both of these files can be customized to alter the base look of your website
- [Quartz](https://www.rcook.net/Quartz) does not yet have a template system, so you are altering some base Typescript files

## Further [Obsidian](https://www.rcook.net/Obsidian) tips

- here is a template with helpful front matter for publishing through [Quartz](https://www.rcook.net/Quartz)

```
---
  title: 
  draft: false
  description: 
  aliases: 
  tags: 
  date: 
---
```

- be careful using wiki links, as [Quartz](https://www.rcook.net/Quartz) tries to be helpful finding the correct page even in a case mismatch, while Apache is less forgiving
- my process:
- create the target page first with the desired title
- when wiki linking to the page, use the `[[Actual Page Name|displayed page name]]` style
- using the `aliases` front matter is another way to access a page through multiple names
- the aliases are published as static html pages with refresh/redirects to the real page

## Final Notes

There is a bit of setup work here, but it’s all pretty straightforward if you are comfortable setting up Git repositories, both local and remote. But you do all that once. The publish process is very streamlined, which is what you do over and over.

If you find any issues with these steps, have any questions or want to share your experiences, I would love to hear from you. Please [message me](https://www.rcook.net/Message-me).

## Summary:
I wanted to collect the details of the process I use to publish these notes. Both for my future reference and to help anyone else who wants to try a similar approach.

---

*Source: [How I use Obsidian, Quartz, Git and Apache to publish these notes](https://www.rcook.net/How-I-use-Obsidian,-Quartz,-Git-and-Apache-to-publish-these-notes)*
