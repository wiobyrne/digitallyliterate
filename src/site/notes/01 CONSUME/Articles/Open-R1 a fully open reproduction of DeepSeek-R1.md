---
{"dg-publish":true,"permalink":"/01-consume/articles/open-r1-a-fully-open-reproduction-of-deep-seek-r1/","title":"Open-R1: a fully open reproduction of DeepSeek-R1"}
---


# Open-R1: a fully open reproduction of DeepSeek-R1

## Key Points:
[Back to Articles](https://huggingface.co/blog) Published January 28, 2025 [Update on GitHub](https://github.com/huggingface/blog/blob/main/open-r1.md) [Upvote836](https://huggingface.co/login?next=%2Fblog%2Fopen-r1) [eliebak Elie Bakouch](https://huggingface.co/eliebak) [lvwerra Leandro von Werra](https://huggingface.co/lvwerra) [lewtun Lewis Tunstall](https://huggingface.co/lewtun)

## What is DeepSeek-R1?

If you’ve ever struggled with a tough math problem, you know how useful it is to think a little longer and work through it carefully. [OpenAI’s o1 model](https://x.com/polynoamial/status/1834280155730043108) showed that when LLMs are trained to do the same—by using more compute during inference—they get significantly better at solving reasoning tasks like mathematics, coding, and logic.

However, the recipe behind OpenAI’s reasoning models has been a well kept secret. That is, until last week, when DeepSeek released their [DeepSeek-R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) model and promptly broke the internet (and the [stock market!](https://x.com/KobeissiLetter/status/1883831022149927352)).

Besides performing as well or better than o1, the [DeepSeek-R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) release was accompanied by a detailed [tech report](https://github.com/deepseek-ai/DeepSeek-R1/tree/main) that outlined the key steps of their training recipe. This recipe involved several innovations, most notably the application of pure reinforcement learning to teach a base language model how to reason without ***any*** human supervision. As shown in the figure below, making a powerful reasoning model is now very simple if you have access to a capable base model and a high-quality data mixture:

![DeepSeek-R1 training pipeline](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/open-r1/rl.png)

However, the DeepSeek-R1 release leaves open several questions about:

- **Data collection:** How were the reasoning-specific datasets curated?
- **Model training:** No training code was released by DeepSeek, so it is unknown which hyperparameters work best and how they differ across different model families and scales.
- **Scaling laws:** What are the compute and data trade-offs in training reasoning models?

These questions prompted us to launch the [Open-R1 project](https://github.com/huggingface/open-r1), an initiative to systematically reconstruct DeepSeek-R1’s data and training pipeline, validate its claims, and push the boundaries of open reasoning models. By building Open-R1, we aim to provide transparency on how reinforcement learning can enhance reasoning, share reproducible insights with the open-source community, and create a foundation for future models to leverage these techniques.

In this blog post we take a look at key ingredients behind DeepSeek-R1, which parts we plan to replicate, and how to contribute to the Open-R1 project.

Let’s dive in 🚀!

## How did they do it?

DeepSeek-R1 is a reasoning model built on the foundation of [DeepSeek-V3](https://huggingface.co/deepseek-ai/DeepSeek-V3-Base). Like any good reasoning model, it starts with a strong base model, and DeepSeek-V3 is exactly that. This 671B Mixture of Experts (MoE) model performs on par with heavyweights like Sonnet 3.5 and GPT-4o. What’s especially impressive is how cost-efficient it was to train—just $5.5M—thanks to architectural changes like Multi Token Prediction (MTP), Multi-Head Latent Attention (MLA) and a LOT (seriously, a lot) of hardware optimization.

DeepSeek also introduced two models: DeepSeek-R1-Zero and DeepSeek-R1, each with a distinct training approach. DeepSeek-R1-Zero skipped supervised fine-tuning altogether and relied entirely on reinforcement learning (RL), using Group Relative Policy Optimization (GRPO) to make the process more efficient. A simple reward system was used to guide the model, providing feedback based on the accuracy and structure of its answers. This approach helped the model develop useful reasoning skills, such as breaking problems into steps and verifying its own outputs. However, its responses often lacked clarity and were difficult to read.

That’s where DeepSeek-R1 comes in. It started with a "cold start" phase, fine-tuning on a small set of carefully crafted examples to improve clarity and readability. From there, it went through more RL and refinement steps, including rejecting low-quality outputs with both human preference based and verifiable reward, to create a model that not only reasons well but also produces polished and consistent answers.

![DeepSeek-V3 architecture](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/open-r1/arch.png)

This all sounds great, but what's actually missing? Let's have a look at the missing pieces of the puzzle.

## Open-R1: the missing pieces

The release of DeepSeek-R1 is an amazing boon for the community, but they didn’t release *everything—* although the model weights are open, the datasets and code used to train the model are not 😢.

The goal of *Open-R1* is to build these last missing pieces so that the whole research and industry community can build similar or better models using these recipes and datasets. And by doing this in the open, everybody in the community can contribute!

As shown in the figure below, here’s our plan of attack:

- **Step 1:** Replicate the R1-Distill models by distilling a high-quality reasoning dataset from DeepSeek-R1.
- **Step 2:** Replicate the pure RL pipeline that DeepSeek used to create R1-Zero. This will involve curating new, large-scale datasets for math, reasoning, and code.
- **Step 3:** Show we can go from base model → SFT → RL via multi-stage training.
![Open-R1 steps](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/open-r1/steps.png) The synthetic datasets will allow everybody to fine-tune existing or new LLMs into reasoning models by simply fine-tuning on them. The training recipes involving RL will serve as a starting point for anybody to build similar models from scratch and will allow researchers to build even more advanced methods on top.

Note that we don’t want to stop at math datasets. There’s a lot of potential in exploring other areas, obvious one like code but also scientific fields such as medicine, where reasoning models could have significant impact.

This initiative isn’t just about replicating results—it’s about sharing insights with the community. By documenting what works, what doesn’t, and why, we hope to save others from wasting time and compute on unproductive paths.

If this sounds interesting, we’d love your help! Whether it’s contributing [code](https://github.com/huggingface/open-r1/issues/23), joining discussions on [Hugging Face](https://huggingface.co/open-r1), there are plenty of ways to get involved. Let’s build this together! 🚀

More Articles from our Blog

DABStep: Data Agent Benchmark for Multi-step Reasoning

By [eggie5](https://huggingface.co/eggie5) February 3, 2025 guest • 70

[View original](https://huggingface.co/blog/dabstep)Open R1: How to use OlympicCoder locally for coding?

By [burtenshaw](https://huggingface.co/burtenshaw) March 19, 2025 • 56

[View original](https://huggingface.co/blog/olympic-coder-lmstudio)

### Community

[facti](https://huggingface.co/facti)

Where is the evaluation numbers? without it you can’t call it reproduction.

· [elephant-bear](https://huggingface.co/elephant-bear)

True, but it seems like there’s nothing to be evaluated as of right now. I assume the ultimate goal is to train a new reasoning model and then use the same evaluation metrics as o1 and the DeepSeek-R1.

[ghabib](https://huggingface.co/ghabib) • [edited Jan 28](https://huggingface.co/blog/#6798a510a8b0d165e39cd319 "Edited 2 times by ghabib")

That's quite interesting,I was asking myself why the questions the author exposed here are not being asked by others? I believe the work they have done is memorable but at the same time I wonder why they wouldn't put these missing pieces on if they are supposed to be fully open.  
Why even without reproduction and comprehension of the innovation they could affect so much the market in this way?

· [eliebak](https://huggingface.co/eliebak) Article author

Hi! This blog post is an introduction to the project, not a claim that we’ve reproduced R1 yet. We will totally share the missing piece when we have them, you can expect the models and datasets to be upload in this [Hugging Face org](https://huggingface.co/open-r1) and the code to be in this [GitHub repo](https://huggingface.co/blog/\(https://github.com/huggingface/open-r1)

[bojan2501](https://huggingface.co/bojan2501)

Interesting read, and it is good that we see more effort into this direction: more optimization and less brute force.  
Also wonder what tool did the author use for creating step diagram.

· [eliebak](https://huggingface.co/eliebak) Article author

Excalidraw 👀

[beretis](https://huggingface.co/beretis)

I'm so glad that initiative like this already exist, I'm gonna try to contribute:)

· [eliebak](https://huggingface.co/eliebak) Article author

looking forward to it! 🚀

deleted

So racist articel

· [schilling3003](https://huggingface.co/schilling3003)

WTF are your talking about?

[ryanmarten](https://huggingface.co/ryanmarten) • [edited Jan 28](https://huggingface.co/blog/#67991c6c32212e398a6ef6c3 "Edited by ryanmarten")

Awesome to have this open reproduction started!

For Step #1 check out [https://github.com/open-thoughts/open-thoughts](https://github.com/open-thoughts/open-thoughts)!

[https://x.com/ryanmart3n/status/1884284101265612856](https://x.com/ryanmart3n/status/1884284101265612856)

Let's do this thing!

· [lvwerra](https://huggingface.co/lvwerra) Article author

It's really cool to see how the whole open source community comes together!

[wsfung2008](https://huggingface.co/wsfung2008)

Does anyone know the actual training cost of r1? I can't find it in the paper or the announcement post. Is the 6M cost reported by media just the number taken from v3's training cost?

· [ghabib](https://huggingface.co/ghabib)

Ops...

[fnia](https://huggingface.co/fnia)

Has anyone asked the DeepSeek team to publish their training data and code, or at least share them privately with an independent replication project like this? Have they rejected such a request?

A faithful replication depends on using the same dataset and hyperparameters. Otherwise, any major discrepancies with the published benchmarks would be hard to pin down—whether due to training data differences or the replication method itself.

· [lvwerra](https://huggingface.co/lvwerra) Article author

Historically, they have never released code or datasets of their LLM training, so I wouldn't expect this time to be different. If they would release it that would be amazing of course!

In the meantime we have to make best guess estimates and see if we can get there ourselves.

[legolasyiu](https://huggingface.co/legolasyiu)

You provide good replication process of Deepseek reasoning training. I will try something similar to it.

[nageshsomayajula](https://huggingface.co/nageshsomayajula)

This is really good information, can we fine tune with specific use case when code is released?

· [eliebak](https://huggingface.co/eliebak) Article author

Yes of course!

[appl044](https://huggingface.co/appl044)

Please consider removing biased, tainted or unaligned training data and make an effort to remove copyrighted works from the crawl from intake. This will make the model more usable. If you reused anthropic curation checks, this might also help, remove obviouslybiased data will likely add a lot of value. We don't want another tainted, unaligned open source model, right? And no corporate would ever use deepseek or a model that reuses it, right?  
We appreciate your work for the benefit of humanity, we hope.  
Miike C from NJ

· [enzomich](https://huggingface.co/enzomich)

So basically you're asking to replace existing censorship with another flavour of censorship?

[PizzaHamburgerGuy](https://huggingface.co/PizzaHamburgerGuy)

Can't wait! Hopefully the model will be uncensored but whatever you can do is alright! Love seeing open source building itself up. I'm not smart enough to actually help but I can contribute moral support lol

[mseeger](https://huggingface.co/mseeger)

Hello guys, I am even just trying to find code for DeepSeek-V2, in order to fully understand multi-head latent attention. You do not seem to have code in Hugging Face even for that. Or am I missing something? Don't see anything in src/transformers/models. MLA is not properly described in their paper, so it would be important to have code for this.

· [lvwerra](https://huggingface.co/lvwerra) Article author

The code for the models are inside the model repositories, e.g. for V3: [https://huggingface.co/deepseek-ai/DeepSeek-V3/blob/main/modeling\_deepseek.py](https://huggingface.co/deepseek-ai/DeepSeek-V3/blob/main/modeling_deepseek.py)

[pytholic](https://huggingface.co/pytholic)

Is it possible to contribute to this project?

· [eliebak](https://huggingface.co/eliebak) Article author

Yes, you can look at [https://huggingface.co/open-r1](https://huggingface.co/open-r1) and [https://github.com/huggingface/open-r1/discussions](https://github.com/huggingface/open-r1/discussions):)

[ippali](https://huggingface.co/ippali)

I wonder what data was used for the training of R1 and R1-zero. Is there any news on the possibly tos -breaking openAI API calls that were made this past autumn?

[BILOO237](https://huggingface.co/BILOO237)

Let's build this together

[charlieluo1999](https://huggingface.co/charlieluo1999)

This project inspires me. At the moment, I developed an enhanced transformer. The goal is to figure out an equivalent SFT component in deepseek. The theoretical part and numeric examples worked out fine. I am now implementing it in a small scale LLM. Hopefully we can see the benchmark results in a few weeks. Thanks for the inspiration.

Charles

[moefear85](https://huggingface.co/moefear85)

releasing weights means open-binary ie freeware (as opposed to SAAS). but the actual blueprint/design of the network, defined in a HL language, is not provided, so it isn't even partially open (SOURCE).

[dailysi](https://huggingface.co/dailysi)

Amazing work!

PS: Why don't OpenAI change its name since it guide AI industry into another directions?

[legolasyiu](https://huggingface.co/legolasyiu)

If you need any help with Open-R1? Please let me know.

Your need to confirm your account before you can post a new comment.

[Sign up](https://huggingface.co/join?next=%2Fblog%2Fopen-r1) or [log in](https://huggingface.co/login?next=%2Fblog%2Fopen-r1) to comment

[Upvote836](https://huggingface.co/login?next=%2Fblog%2Fopen-r1)

## Summary:
We’re on a journey to advance and democratize artificial intelligence through open source and open science.

---

*Source: [Open-R1: a fully open reproduction of DeepSeek-R1](https://huggingface.co/blog/open-r1)*
