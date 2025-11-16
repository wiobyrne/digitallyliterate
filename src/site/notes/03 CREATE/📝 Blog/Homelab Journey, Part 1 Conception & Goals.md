---
{"dg-publish":true,"permalink":"/03-create/blog/homelab-journey-part-1-conception-and-goals/","title":"🪴 Homelab Journey, Part 1: Conception & Goals","tags":["homelab","motivation","learning","selfhosting"]}
---


# Homelab Journey, Part 1: Conception & Goals
## Why Build a Homelab?

[[03 CREATE/🎯 Projects/🟢 Active/Homelab Series/Homelab Journey Overview\|Homelab Journey Overview]]

### Core Questions
- What first inspired me to start this project?  
- What did I want to control, protect, or understand?  
- What personal or professional needs did this serve?  
- What assumptions or anxieties were I testing?

### Drafting Notes
- Initial spark or frustration with cloud systems  
- Early research and influences  
- Defining “success” in the first stage  
- Connections to autonomy, digital literacy, or experimentation  


## Posted blog post

### Why I Built a Homelab (and Why You Might Want To)


Before we get too far, a quick note.

If you’ve read my posts before, you might be wondering what a “homelab” has to do with digital literacy or AI in education. Fair question. This might look like a tangent, but it’s really part of the same thread. Learning how the systems we rely on _actually work_.

I’ve always believed that understanding the “why” and “how” behind our tools is a form of literacy. Learning from the ground up about autonomy, infrastructure, and the future of digital literacy.

---

Lately, I’ve been thinking a lot about _ownership_ of data, of tools, of the ideas we create. It began as a technical curiosity, but quickly evolved into something more profound. The more I built my own systems, the more I realized how little control we often have over the infrastructure that shapes our daily digital lives.

In my prior work, I’ve always been building. Through my early WebMaker work, I explored, experimented with, and [contributed to the development of web literacy](https://mozilla.github.io/webmaker-whitepaper/). With digital badges, you need to design, earn, and award them. As I learn and teach about coding and computational thinking, I need to build and break things. I’m always building, tinkering, and testing things in all of my spaces.

When I started experimenting with running my own AI models earlier this year, I think I surprised a few people. Suddenly, I was talking about GPUs, tokens, and self-hosting models on local hardware. Friends and colleagues who follow my work in digital literacy and education looked at me like I’d started speaking another language.

And in a way, I had.

But behind all the jargon was a simple question: _What does it mean to really understand the systems we rely on?_

That question led me down a new rabbit hole. One that many technologists, educators, and tinkerers are familiar with, called **homelabbing**.

## What Is a Homelab?

At its simplest, a homelab is just a personal computing environment you control.

It might be an old desktop running Linux in a corner, a tiny Raspberry Pi serving your files, or a small server rack quietly humming in the basement. It’s a space where you can _experiment_, break things, fix them, and learn how digital systems actually work.

Think of it like a garden.

You can buy vegetables from the store, or you can grow them yourself and understand what goes into the soil, the sunlight, and the care it takes to sustain them.

A homelab is that. Except instead of tomatoes, you’re growing your own cloud.

You could build a homelab to:

- Learn about virtualization, networks, and automation
- Host your own apps instead of relying on commercial cloud services
- Run experiments with local AI models
- Back up and secure your data on your own terms
- Just _tinker_ for the joy of learning

Mine started small. Then I learned about **Proxmox**, a free virtualization platform that allows you to run multiple systems on a single machine. Then came **containers** (hello, Docker), media servers, and some home automation scripts that occasionally worked. Each new tool taught me something about the invisible machinery that keeps the modern internet running.

## Why This Matters (Even If You’ll Never Build One)

For me, this isn’t just a hobby. It’s a form of digital literacy.

We often discuss “teaching with technology,” but rarely do we delve into _understanding technology itself_. The infrastructure, the architecture, and the systems thinking that underlie the glossy apps and platforms. Homelabbing offers a hands-on way to explore that.

It connects to so much of my ongoing work:

- **Digital agency**: Understanding how systems work means you can question, adapt, and shape them for your specific context.
- **Critical infrastructure literacy**: Knowing what “the cloud” _really is_—someone else’s computer—changes how we think about privacy, ownership, and trust.
- **Pedagogy and practice**: I want educators and students to see that technology isn’t magic. It’s made of choices. And those choices can empower—or exclude.

In a world where AI models, data, and even creativity increasingly live behind corporate APIs, building a homelab felt like reclaiming a small piece of the digital stack. It’s a way to experiment, to fail safely, and to remember that the web was once something you _built_, not something you simply _used_.

## What I’m Learning So Far

Every problem I’ve hit has taught me something I didn’t know I didn’t know.

I’ve learned how permissions work (and how they can fail catastrophically).  
I’ve learned what it means to run a virtual machine safely.  
I’ve learned how fragile and beautiful a network can be when it’s entirely your responsibility.

And I’ve learned that the “hard” parts of homelabbing aren’t really about tech. They’re about patience, design, and clarity of purpose. What do I want this system to _do_? What does it mean to build infrastructure that reflects my values?

Those are questions worth wrestling with, whether you ever build a server or not.

## Where This Series Is Going

Over the next few weeks, I will document this journey. Not as a technical manual, but as a reflective exploration of what it means to take ownership of your digital environment.

Here’s a rough map of where we’ll go:

1. **Mapping the Hardware** — how I designed my setup and why
2. **Getting Virtual** — learning about containers, VMs, and Proxmox
3. **Self-Hosting Essentials** — running services like media, backups, and AI tools
4. **Automating and Learning** — connecting it all through scripts, monitoring, and reflection
5. **The Bigger Picture** — what homelabbing teaches us about autonomy, resilience, and digital literacy

Ultimately, this isn’t just about technology. It’s about _understanding the systems that shape us_, and imagining how we might shape them in return.

I’m not just building a server. Building a homelab is a new way of exploring, one command line at a time.
