---
{"dg-publish":true,"permalink":"/01-consume/ai-chats/what-is-jules-chat-gpt/","title":"What is Jules?","tags":["jules","agentic-coding"]}
---

# What is Jules - ChatGPT
> [!ChatGPT-prompt]
> can you explain what jules is? Skip to content Jules logoJules Search Ctrl K Select theme Auto Getting Started Environment setup Running tasks Planning Reviewing code Managing tasks and repos Repo view Errors and failures Usage and limits Feedback and support FAQ Changelog Contact On this page Overview Login Connect GitHub Starting your first task Enabling notifications What’s next? Getting started Jules is an experimental coding agent that helps you fix bugs, add documentation, and build new features. It integrates with GitHub, understands your codebase, and works asynchronously — so you can move on while it handles the task. This guide will walk you through setting up Jules and running your first task. Login Visit jules.google.com Sign in with your Google account. Accept the privacy notice (one‑time). Connect GitHub Jules needs access to your repositories in order to work. Click Connect to GitHub account. Complete the login flow. Choose all or specific repos that you want to connect to Jules. You will be redirected back to Jules. If not, try refreshing the page. Once connected, you’ll see a repo selector where you can select the repo you want Jules to work with, and a prompt input box. Starting your first task Jules runs in a virtual machine where it clones your code, installs dependencies, and modifies files. Pick a repository from the repo selector. Choose the branch you want Jules to work on. The default branch will be selected already. You do not have to modify this unless you want Jules to work on a specific branch. Write a clear, specific prompt. For example, Add a test for "parseQueryString function in utils.js (Optional) Add environment setup scripts. Click Give me a plan Once you submit a task, Jules will generate a plan. You can review and approve it before any code changes are made. Screenshot of prompt Enabling notifications You are free to leave Jules while it is running. To stay informed: When prompted, enable browser notifications. Go to Settings —> notifications at any time to enable or disable notifications. You’ll be notified when the task completes or needs your input. Notifications What’s next? Running a task with Jules - Full walkthrough Environment setup - Make Jules smarter about your project Reviewing plans & feedback - how to approve and integrates Want to dive into real-world use cases? Check out the Jules Awesome Prompts repo. Next Environment setup

> [!ChatGPT-response]
> ![](https://www.youtube.com/watch?v=YO7I8OLSwKE)
> 
> **What is Jules?**  
> Jules is Google’s **autonomous, asynchronous coding agent** that connects to your GitHub repo, clones it into a secure Cloud VM, and then autonomously handles complex development tasks—from bug fixes and writing tests to adding new features and bumping dependencies—while you continue working on other things . Powered by Gemini 2.5 Pro, it resembles a remote teammate: Jules generates a plan, explains its reasoning, applies code diffs, and even produces PRs and audio changelogs—ready for your review .
> 
> ---
> 
> ### 🛠 Key Features
> 
> - **Full-repo awareness & context**: Loads entire codebase in a secure VM, not just snippets
> - **Plan-first workflow**: Before touching code, it outlines step-by-step how it’ll do the work
> - **Hands-off operation**: You can stay productive while Jules tackles tasks in the background
> - **GitHub-native flow**: Jules creates pull requests in your repository—no sandbox needed
> - **Asynchronous control**: Review diffs, modify plans mid-stream, or pause tasks
> - **Audio changelogs**: Builds spoken summaries of commits—ideal for team standups, onboarding, or async updates
> - **Privacy-focused**: Runs in isolated VMs, doesn’t train on your private code
> 
> ---
> 
> ### 🚀 Getting Started
> 
> 1. **Sign in** at jules.google.com using your Google account
> 2. **Connect GitHub**—authorize repositories you want Jules to work with
> 3. **Create a task**: pick a branch, provide a prompt (e.g. *“Add tests for parseQueryString in utils.js”*), then click **“Give me a plan”**
> 4. **Review the plan**, approve it, and let Jules run in the VM
> 5. **Merge the generated PR**, optionally with an audio summary of the changes
> 
> ---
> 
> ### 💡 Practical Use Cases
> 
> According to tutorials:
> 
> - **Fix layout bugs**, update documentation, or refine README files
> - **Add meaningful features**, like data tracking or trend reporting across modules
> - **Auto-generate audio summaries** of recent commits for easier sharing in team syncs
> 
> It’s best for tasks involving multiple files or logical changes, while developers retain full oversight of final edits.
> 
> ---
> 
> ### 📅 Availability & Status
> 
> - **Initial launch** showcased at Google Labs in Dec 2024 using Gemini 2.0
> - **Public beta** rolled out during Google I/O May 20, 2025—now available worldwide with no waitlist
> - **Access is currently free**, with usage limits (e.g., 5 tasks per day); pricing expected post-beta
> 
> ---
> 
> **In summary**, Jules is a next-gen coding companion—an AI-powered, autonomous developer that deeply understands your codebase, works asynchronously, and delivers ready-to-merge changes alongside audio and plan transparency. It’s not just coding suggestions—it delivers real, executable results via GitHub PRs. If you’re handling multi-file updates, tests, or doc work, **Jules is designed to supercharge your workflow**.
> 
> Curious to try it or have questions about how to craft effective prompts? Just let me know!

> [!ChatGPT-prompt]
> what is the difference between this and vibe coding?

> [!ChatGPT-response]
> Here’s a clearer breakdown:
> 
> ---
> 
> ### 🧠 Vibe Coding
> 
> - **Definition**: A lightweight, prompt-driven, creative coding style coined by Andrej Karpathy. You give natural language prompts (or voice), and the AI generates code snippets or small features.
> - **Workflow**:
> 	- You prompt the tool (e.g. Cursor, Replit, GitHub Copilot).
> 	- Instantly get generated code in your IDE or app builder.
> 	- You review, test, iterate—looping interactively.
> - **Strengths**:
> 	- Great for rapid prototyping, experimentation, creative flow (“flow state”).
> 	- Accessible to non-developers too.
> - **Drawbacks**:
> 	- Often lacks deep planning, safeguards, and production readiness.
> 	- Can introduce technical debt or vulnerabilities.
> 	- Suited for small-scale experiments, not large or critical systems.
> 
> ---
> 
> ### 🤖 Agentic Coding (exemplified by Jules)
> 
> - **Definition**: Tools like Jules act as autonomous software engineers. They understand full repos, plan tasks, run commands in secure VMs, and produce pull requests.
> - **Workflow**:
> 	1. You give a **clear task prompt** (e.g., fix a bug or add a test).
> 	2. Jules **clones your repo** in a sandboxed cloud VM.
> 	3. It provides a **step-by-step plan**, asking for your approval.
> 	4. On approval, Jules **executes the plan**, generates diffs, PRs, tests, audio summaries, etc.
> 	5. You **review**, possibly tweak, then merge.
> - **Strengths**:
> 	- Handles **multi-file, multi-step tasks** across a whole codebase.
> 	- **Asynchronous**, so you can continue working while it runs.
> 	- Better for **production-level** tasks—tests, CI/CD, dependency updates.
> 	- Maintains visibility and control over planning and execution.
> - **Limitations**:
> 	- Not yet tailored for high-level architecture or creative decisions; humans still needed.
> 
> ---
> 
> ### 🔍 Framework Comparison
> 
> According to an academic breakdown, they're two ends of a spectrum:
> 
> - **Vibe coding** = creative, interactive prompt-based coding with human control.
> - **Agentic coding** = autonomous agents with goal-driven execution pipelines and minimal human intervention.
> 
> ---
> 
> ### ✅ TL;DR Comparison
> 
> | Feature | **Vibe Coding** | **Agentic Coding (Jules)** |
> | --- | --- | --- |
> | **Control** | Manual prompts, human-in-the-loop | Plan review → autonomous execution |
> | **Scope** | Snippets, prototypes, UI bits | Multi-file tasks, tests, dependencies |
> | **Execution** | In-editor suggestions | Secure VM execution, CI/CD-style workflow |
> | **Best for** | Experimentation, rapid flow, beginners | Production readiness, QA, background task handling |
> | **Risks** | Technical debt, inconsistent code quality | Less suited for architecture/creative shaping |
> 
> ---
> 
> ### 🎯 In Context
> 
> - *Vibe coding* is ideal for riffing on ideas, prototyping, and riding the creative wave.
> - *Agentic systems* like Jules shine when you need robust, reliable changes applied across your repo without manual intervention.
> 
> Want to dive deeper into either workflow or explore hybrid setups? I can help!
> 
> ---
> 
> Related news on vibe coding & agentic tools
> 
> [
> 
> ![Silicon Valley's next act: bringing 'vibe coding' to the world](https://i.insider.com/67acccd87bb3f854015ca40d?format=jpeg)
> 
> ![Favicon](https://www.google.com/s2/favicons?domain=https://www.businessinsider.com&sz=32)
> 
> businessinsider.com
> 
> Silicon Valley's next act: bringing 'vibe coding' to the world
> 
> ](https://www.businessinsider.com/vibe-coding-ai-silicon-valley-andrej-karpathy-2025-2?utm_source=chatgpt.com)[
> 
> ![An Amazon AI leader tells BI why vibe coding is here to stay](https://i.insider.com/67f7ab8b3fe8d3928362ac74?format=jpeg)
> 
> ![Favicon](https://www.google.com/s2/favicons?domain=https://www.businessinsider.com&sz=32)
> 
> businessinsider.com
> 
> An Amazon AI leader tells BI why vibe coding is here to stay
> 
> ](https://www.businessinsider.com/amazon-q-developer-ai-vibe-coding-aws-2025-4?utm_source=chatgpt.com)[
> 
> ![Tech companies have a new hiring requirement: vibe coding](https://i.insider.com/6843693585e81483682ba5d7?format=jpeg)
> 
> ![Favicon](https://www.google.com/s2/favicons?domain=https://www.businessinsider.com&sz=32)
> 
> businessinsider.com
> 
> Tech companies have a new hiring requirement: vibe coding
> 
> ](https://www.businessinsider.com/vibe-coding-tech-firms-hire-engineers-2025-6?utm_source=chatgpt.com)

> [!ChatGPT-prompt]
> i use obsidian as my learning management system and share this to github to publish my digital garden. I've been looking at ways to improve the look and feel of my digital garden online, would Jules address this?

> [!ChatGPT-response]
> Absolutely — **Jules could absolutely help improve and polish your digital garden's presentation.**
> 
> Here's how:
> 
> ---
> 
> ### 🎨 1. Styling & Theme Enhancements
> 
> You can prompt Jules with tasks like:
> 
> - “Create a responsive, clean CSS theme for my Obsidian-published site.”
> - “Add a dark-light mode toggle using CSS variables.”
> 
> Since Jules can **clone your repo, modify CSS/HTML/JS files**, and open PRs, it’s well-suited for applying design changes across all templates and styles.
> 
> ---
> 
> ### 🛠 2. Template & Front-End Component Updates
> 
> Need to rework your homepage layout, add interactive elements, or embed dynamic widgets?
> 
> - “Refactor my homepage to use a CSS grid or Flexbox layout.”
> - “Add a collapsible sidebar with note categories.”
> 
> Jules will generate a plan, then implement the changes—updating HTML templates, JS behaviors, and CSS—just like a developer would.
> 
> ---
> 
> ### 🧩 3. Assets & Configuration
> 
> It can handle non-code assets too:
> 
> - Optimize image sizes and generate responsive `srcset`.
> - Add or update a site `manifest.json` for improved PWA support.
> 
> ---
> 
> ### ✅ 4. Review, CI & PRs
> 
> - You approve the plan before anything happens.
> - Jules runs changes in a VM, generates a PR (with diffs & optional audio changelog), and you review before merging.  
> 	This ensures you stay in control while getting polished, production-ready results.
> 
> ---
> 
> ### ⚠️ One Consideration
> 
> Jules isn’t a **visual design assistant** per se—it won’t craft a brand-new design from scratch. You’ll still want to give clear, design-oriented prompts (or share mockups/CSS examples) to guide its output.
> 
> ---
> 
> ### 🗣 Typical Workflow
> 
> 1. 🎯 **Prompt**: “Please improve the typography, spacing, and add a hero banner to my digital garden site.”
> 2. **Plan**: Jules outlines, e.g., “Update CSS variables, adjust font sizes, add hero section in index.html.”
> 3. **Execution & PR**: After approval, Jules runs the plan in the VM, creates the PR, and provides a summary.
> 4. ✅ **Review & Merge**: You review changes, request tweaks if needed, then merge to publish.
> 
> ---
> 
> ### TL;DR
> 
> Yes, Jules is fully capable of helping you **elevate your digital garden’s look and feel**—whether it's styling, layout updates, interactivity, or PWA enhancements. Just provide **clear design-driven prompts**, and let Jules handle the implementation. You stay in control, and get the refined online experience you want.
> 
> ---
> 
> Want sample prompts to ask Jules, or tips for managing front-end iterations? I can help tailor them!

> [!ChatGPT-prompt]
> so I could give it access to my vault and say "I want a dark/light mode switcher on my digital garden and give it an example and let it go. I'd obviously back things up along the way, but it could figure it out and make it happen?

> [!ChatGPT-response]
> Absolutely! You can definitely give Jules access to your Obsidian vault (via your GitHub-published repo) and ask it to add a dark/light mode switcher—with enough detail, it can handle it end-to-end. Here's how it would work:
> 
> ---
> 
> ### 🧠 How Jules Would Take This On
> 
> 1. **Prompt Setup**
> 	- You’d create a task like:  
> 		*“Add a dark/light mode toggle to my digital garden. I want a switcher like \[provide example code or URL\]. Use CSS variables, update the footer or header template.”*
> 2. **Automated Planning**
> 	- Jules clones your vault, installs dependencies, and outlines a plan: where to insert toggle HTML, how to manage CSS classes (e.g. `.theme-dark`, `.theme-light`), and include optional JS for persistence. You get to review and approve this plan before any changes are made.
> 3. **Implementation in Secure VM**
> 	- Once approved, Jules applies the plan:
> 		- Inserts the switcher component (HTML + icons) into your theme’s layout.
> 		- Adds CSS rules for both dark and light modes.
> 		- Adds JavaScript that toggles the theme, syncs with `prefers-color-scheme`, and stores user preference in `localStorage`.
> 4. **PR Generation & Review**
> 	- Jules opens a PR with diffs and can even provide an audio changelog summarizing what it did. You inspect, request changes if needed, and then merge.
> 
> ---
> 
> ### 🔄 A Real-World Example
> 
> Reddit users for Obsidian’s digital garden plugin have done something similar manually. For instance:
> 
> > “I implemented that same file into my site… `theme-switch` span with sun/moon icons and JS to add/remove `.theme-dark`/`.theme-light` classes”
> 
> That very same pattern could be replicated—and optimized—by Jules, across your custom templates and styles.
> 
> ---
> 
> ### ✅ Your Role: Give Clear Examples
> 
> Jules works best with clear examples or mockups. For example, share a snippet like:
> 
> ```
> <body class="theme-light">
>   <!-- Toggle HTML button goes here -->
> </body>
> <script>
>   // JS to switch classes and persist mode
> </script>
> ```
> 
> Then instruct Jules to “make this work on every page, include icon switching, and respect system color scheme.”
> 
> ---
> 
> ### 🧠 TL;DR
> 
> - **Yes**, you can ask Jules to automate the entire process.
> - It will **plan**, **execute**, and **generate a PR** with the switcher—no manual coding required on your end.
> - Just be specific, backup your repo, and let Jules work in its sandboxed environment.
> 
> ---
> 
> Would you like help crafting the exact prompt or example code to feed Jules? I'm happy to help make it smoother!