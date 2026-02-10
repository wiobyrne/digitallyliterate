---
{"dg-publish":true,"permalink":"/03-create/blog/growing-ideas-in-public/","title":"Growing Ideas in Public -How I Built My Digital Garden with Obsidian"}
---


# Growing Ideas in Public
## How I Built My Digital Garden with Obsidian
After months of crafting notes, refining content, and building systems behind the scenes, I finally published my digital garden. This post walks you through the technical process, the tools I used, the challenges I faced along the way, and how I solved them.

## Why Obsidian?

[Obsidian](https://obsidian.md/) is a powerful, flexible note-taking app that treats your notes like a graph of interconnected ideas, rather than isolated documents. I chose Obsidian because it allows me to easily link notes, visualize relationships between ideas, and work locally without relying on a cloud-based service.

Once I committed to using Obsidian as my primary workspace, I started moving over my blog posts, newsletter content, and other professional writing. I also imported my reading notes from books, videos, podcasts, research papers, and conversations. All this knowledge in one place made it easy to spot connections I hadn’t seen before. As these connections grew more interesting and valuable, I became inspired to make them explicit and open online through a digital garden.

## The Technical Process

With Obsidian as my main note-taking app, I aimed to share selected notes publicly without duplicating my vault (the main directory or folder where I save everything) or losing control over what gets published. I was heavily inspired by these two videos from wanderloots (check out [Callum’s Digital Garden here](https://wanderloots.xyz/)).

Here’s the process I followed:

1. **Digital Garden Plugin:** I installed the [Digital Garden plugin](https://github.com/oleeskild/obsidian-digital-garden) in Obsidian. This plugin allows you to mark notes for publishing with a simple `dg-publish: false` YAML property. [A YAML property](https://help.obsidian.md/properties) is a bunch of metadata, or information about the information in a note.
2. **GitHub Repository:** I created [a public GitHub repo](https://github.com/wiobyrne/digitallyliterate) to store my published notes. This gave me version control and a backup of everything I wanted to share.
3. **Netlify Hosting:** I connected the GitHub repo to [Netlify](https://www.netlify.com/), a free and easy-to-use hosting service that automatically rebuilds the site whenever I push updates.
4. **Custom Domain:** I already owned a domain from [Reclaim Hosting](https://reclaimhosting.com/). I pointed the domain to Netlify following their DNS configuration instructions.
5. **Initial Build:** The Digital Garden plugin provides a base template for a static site. I customized it slightly. This included changing colors, adjusting font sizes, and adding a favicon before deploying.

## Insights About the Tools

- **Digital Garden Plugin:** It’s an incredibly powerful tool if you want fine-grained control over which notes get published. You can continue working privately in Obsidian while selectively “pushing” notes live with a toggle in the frontmatter.
- **GitHub:** Even if you’re not a developer, GitHub offers an easy way to track changes and roll back if something breaks. Plus, it’s essential if you’re using Netlify’s continuous deployment. I also think that GitHub may allow people to comment and respond to sections in the future.
- **Netlify:** Their Git integration is seamless. The free tier offers everything you need to start, including HTTPS (SSL) for your custom domain.

## Challenges and How I Overcame Them

**Challenge 1: Managing Publish Status**. At first, I forgot which notes I had already published. To solve this, I used Obsidian search queries to build a “Published Notes” dashboard based on the `dg-publish: false` property.

As I indicated earlier, the YAML property is information about the information in each note. For example, a note in Obsidian might include metadata like a movie’s title, year, or cast members. This front matter allows me to describe each note in a structured way.

[![](https://i0.wp.com/wiobyrne.com/wp-content/uploads/2025/04/Screenshot-from-2025-04-23-13-41-42.png?resize=615%2C248&ssl=1)](https://i0.wp.com/wiobyrne.com/wp-content/uploads/2025/04/Screenshot-from-2025-04-23-13-41-42.png?ssl=1)

The Digital Garden plugin simply looks for a line that includes `dg-publish:` and then whether it’s set to true or false. If it’s true, the note is published. If it’s false, it remains private.

I really liked this method of publishing my digital garden because it gave me control to make individual notes public or private on a granular level. I have notes spread across my vault that I slowly want to make public over time, and this setup gave me exactly that flexibility.

**Challenge 2: Folder Structure Confusion**. My Obsidian vault is divided into folders like `01 Consume`, `02 Curate`, and `03 Create`, which made syncing complicated. I organize it this way to mimic how I cognitively process information and move from inputs to outputs.

The Digital Garden plugin doesn’t require moving notes into a special folder, but I had to be very careful about frontmatter to prevent accidentally publishing drafts. Using the `dg-publish: false` setting by default helped me stay organized.

**Challenge 3: Styling the Garden and Choosing a Framework**. The Digital Garden plugin takes your Markdown-formatted notes from Obsidian and pushes them to your GitHub repository. From there, Netlify uses [11ty](https://www.11ty.dev/) to generate a static site. This sounds super complex, but once you set it up, it works very well.

Initially, I started with this setup—Digital Garden and 11ty—and it worked well. But the default styling felt too basic. I spent time tweaking the CSS in the base template: adjusting padding, choosing a cleaner font, and adding hover effects. These small changes helped the site feel more personal and polished.

Still, I wanted something even more professional-looking. I experimented with frameworks like Quartz, Hugo, and others to build a sleeker garden. But each new approach introduced technical headaches. Things kept breaking, and I found myself spending more time troubleshooting than writing.

Eventually, I realized that chasing the “perfect” look kept me from publishing anything. So I returned to the Digital Garden plugin, accepting that I could always improve the design later. That mindset shift was key. It freed me to finally launch and start sharing my work openly.

**Challenge 4: DNS and SSL Issues**  
Once the digital garden ran smoothly, I turned my attention to replacing my old WordPress-based newsletter site at [digitallyliterate.net](https://digitallyliterate.net/) with the new garden.

Pointing my domain to Netlify was straightforward, but it required a few hours for DNS propagation. This meant waiting for global servers to update so visitors would be correctly routed to the new garden hosted on GitHub.

SSL didn’t activate automatically, which can sometimes trigger browser warnings about site security. To fix this, I manually renewed the certificate via Netlify’s dashboard. SSL (Secure Sockets Layer) ensures that encrypted and secure data is passed between the site and visitors. In short, I wanted people to visit my site without wondering if it was trustworthy. 😄

## Final Thoughts

Publishing my digital garden felt like opening the door to a new phase of my work. Now that the system is set up, I can take notes in my Obsidian vault and slowly connect ideas as I process information. I can connect these ideas to one another and then create a blog post, lecture, book chapter, or another idea. I can then publish these ideas with others, and share a trail of breadcrumbs to show how, when, and where my ideas developed over time.

It’s one thing to take notes for yourself, and another to share them—raw, evolving, and imperfect—with the world. Using the Digital Garden plugin, GitHub, and Netlify made the process relatively smooth, and now my garden lives at [digitallyliterate.net](https://digitallyliterate.net/), ready to grow alongside me.

If you’re on the fence about publishing your own digital garden, I can’t recommend the experience enough. Yes, there are technical hurdles—but each one you overcome gives you a little more ownership of your digital space.

Cover image [CC BY-SA 3.0](https://www.deviantart.com/cyclicalcore/art/Tunnel-452133085)