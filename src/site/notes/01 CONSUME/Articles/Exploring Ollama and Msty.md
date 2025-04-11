---
{"dg-publish":true,"permalink":"/01-consume/articles/exploring-ollama-and-msty/","title":"Exploring Ollama and Msty"}
---


# Exploring Ollama and Msty

## Key Points:
A chunk of my evening was spent exploring two tools, **[Ollama](https://ollama.com/)** and **[Msty](https://msty.app/)**. The first is a text only local AI running on my machine. Msty reminded me a lot of LM Studio and Sanctum. Except that Msty made it possible to set up a knowledge stack that the chatbot could access when responding to prompts. Who started me down this path? I blame **[Jack Wallen at ZD Net](https://www.zdnet.com/article/how-i-feed-my-files-to-a-local-ai-for-better-more-relevant-responses/)**:

> One Msty/Ollama feature that has intrigued me is the ability to add your own content to what’s called a Knowledge Stack, which can enable you to integrate local data sources to enhance the AI’s ability to provide more relevant and contextual responses. Once you’ve added a document stack, Msty can then serve as a smart assistant with knowledge of whatever it is you deem worth knowing. Once you’ve created a Knowledge Stack, Msty indexes it with a separate model to be used for a chat session.

As easy as Jack makes it sound, I’m not sure why you even need Ollama in this mix. I suspect I’m going to have to take my time applying what he says in his blog entry. In the meantime, I had already installed Ollama before reading this electrifying article, so I jumped up from the couch and ran back to work on installing Msty.

> **Update** 4/2025: I now understand why you have both. But I would suggest sticking with Ollama and **[Page Assist](https://chromewebstore.google.com/detail/page-assist-a-web-ui-for/jfgfiigpkhlkbnfnbobbkinehhfdhndo)** (a browser extension) GUI interface. Most folks are looking for a LIGHT version of AI to run on their <=1 GPU so less is more. I also point you to **[my streamlining Knowledge Stacks](https://mglink.org/2025/03/28/3-ideas-for-streamlining-ai-knowledge-stacks/)**. It REALLY makes a difference.

## Confusion: Why Both?

I’m still confused as to why I need both Ollama and Msty…it appears one only needs Msty. But Jack says I need both:

> To make this work, you’ll need both [Ollama](https://www.zdnet.com/article/how-to-install-an-llm-on-macos-and-why-you-should/)  and  [Msty](https://www.zdnet.com/article/this-app-makes-using-ollama-local-ai-on-macos-devices-so-easy/) installed. You’ll also needs some supported files to add

I wonder if this is a mistake. Anyways…It appears that with Msty Knowledge Stack for technology plan analysis, I am able to point to a folder with all my files for a project, then query it. This is *exactly* what I’ve been wanting to do, as opposed to simply having an AI chatbot running local. This means I now have a tool that can help me search my own files and I don’t have to upload them to the cloud, etc. This merits a bit more play, but I will have to wait until tomorrow evening.

Here’s what an informed chat powered by a Knowledge Stack looks like in Msty…you can see it’s responding to what are the elements of a cybersecurity plan, the internet search is not on, so it’s drawing that info from the Knowledge Stack:

![](https://mglink.org/wp-content/uploads/2025/02/screenshot_8.png?w=723)

## Ollama install

Installing **[Ollama](https://ollama.com/)** is a simple matter of going to cmd.exe on Windows, then typing **ollama run llama3.2** or whatever model you want to run. I found llama3.2 to be quite speedy on my machine, as was Gemma.

**[Find these instructions at the Ollama website](https://github.com/ollama/ollama/blob/main/README.md#quickstart)**:

![](https://mglink.org/wp-content/uploads/2025/02/screenshot_1-5.png?w=648)

You can see what that looks like below as Ollama downloads the Llama3.2 model.

![](https://mglink.org/wp-content/uploads/2025/02/screenshot_2-2.png?w=1024)

As nice as Ollama is for text processing (it can generate markdown and Mermaid syntax), I was intrigued by this article about using Msty. Ollama works great to type prompts and do simple tasks, satisfying my 13-year old wish to be able to type into a computer and get a coherent response. But for real work, I need to be able to have a knowledge stack or base where I put documents that can be reviewed, read, and then used as information sources when prompts are given.

## Enter Msty

**[Msty](https://msty.app/)** has a lot to offer, such as “Msty is designed to function seamlessly offline, ensuring reliability and privacy. For added flexibility, it also supports popular online model vendors, giving you the best of both worlds.” This means that if I wish, I can connect to online model vendors (e.g. OpenAI, Claude) and use those if they are available. If I had more computers with the horsepower (sigh, alas, no), I could connect to Ollama running on a server.

![](https://mglink.org/wp-content/uploads/2025/02/screenshot_4-1.png?w=884)

You are also able to set up a workspace:

![](https://mglink.org/wp-content/uploads/2025/02/screenshot_5-1.png?w=477)

These workspaces can include knowledge stacks:

![](https://mglink.org/wp-content/uploads/2025/02/screenshot_6.png?w=1024)

Here’s one I started setting up as a way to echo a Custom GPT I have set up on OpenAI’s ChatGPT. I’m not sure I did this right since I rushed through the process, but it gave me a big picture overview. I’ll have to try again.

## Overload

I now have several of these tools loaded on my overburdened machine:

- LM Studio
- Sanctum
- Ollama
- Msty

I have tried GPT4All and others, but I’m trying to get a feel for which of these works best, that is, the fastest. And it all depends on the model. So ease of installation is important.

Nevertheless, I’m not sure which of these works best, but Msty has a lot of potential. Time will tell.

---

### Discover more from Another Think Coming

Subscribe to get the latest posts sent to your email.

## Summary:
A chunk of my evening was spent exploring two tools, Ollama and Msty. The first is a text only local AI running on my machine. Msty reminded me a lot of LM Studio and Sanctum. Except that Msty made it possible to set up a knowledge stack that the chatbot could access when responding to…

---

*Source: [Exploring Ollama and Msty](https://mglink.org/2025/02/13/exploring-ollama-and-msty/)*
