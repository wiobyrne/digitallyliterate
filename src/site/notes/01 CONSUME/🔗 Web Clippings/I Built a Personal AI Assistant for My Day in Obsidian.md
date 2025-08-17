---
{"dg-publish":true,"permalink":"/01-consume/web-clippings/i-built-a-personal-ai-assistant-for-my-day-in-obsidian/","title":"I Built a Personal AI Assistant for My Day in Obsidian","tags":["obsidian","ai","personal-assistant"]}
---

# I Built a Personal AI Assistant for My Day in Obsidian
## Highlights


### List best points from this page
- Key arguments presented in the article
- Notable examples or case studies referenced
- Important statistics or data highlighted
- Conclusions drawn by the author
- Implications for future research or practice

### List suggested tags

---
---

My morning routine was a mess of apps and mental friction. So I built an AI assistant to design a better start to my day.

I used to spend my first waking hour trying to assemble a plan, scattered across calendars and notes. I’ve always been drawn to building simple, single-click systems, and I realized I could build my way out of this chaos. This is the story of the system I built with a **macOS Shortcut**, **Obsidian**, and a **Claude AI agent** and what it taught me about building tools that feel like an extension of your own mind.

---

## 1\. a frictionless morning by design

Here’s my morning now. I press a single button to run a macOS Shortcut “Start day”:

![macOS Shortcut interface showing the Start day shortcut configuration](https://artemxtech.github.io/screenshot_5_shortcut.png)

A terminal window opens and an AI agent greets me. It’s already scanned my calendar and presents exactly what I need to know right now:

![A clean screenshot of the terminal showing the agent's welcome message, calendar summary, and prompts.](https://artemxtech.github.io/screenshot_1_terminal_greeting.png)

The agent then asks me three questions I designed for myself:

- **🎯 Intention:** What’s your main intention for today?
- **🔧 Systems focus:** What system will you build vs just complete tasks?
- **📈 Development:** What skill/quality will you strengthen today?

The voice input is what makes it feel seamless. Speaking your thoughts is a completely different regime than typing. It’s faster, more natural. I use [SuperWhisper](https://superwhisper.com/) to just speak my answers. The experience is fluid, almost effortless.

Once I respond, the agent creates my daily note in Obsidian, populates it with my intentions and a checklist of my events, and opens it directly. The entire sequence, from a single click to a fully prepared daily plan, takes seconds. The friction is just gone.

What impressed me wasn’t just the automation. It was that the system could be *interactive*.

This morning, as I reviewed my note, I realized I’d forgotten to add an event. The old workflow would be a series of context switches: open Calendar, create the event, go back to Obsidian, and manually update my note. Instead, I just spoke to the agent again, right in the terminal.

The agent understood the natural language. It ran a script, created the event in my calendar, and updated the daily note in Obsidian to keep everything in sync. The system adjusted to my thinking in real time, without breaking my flow.

![A side-by-side screenshot showing the Calendar app with the new event and the Obsidian note updated with the same event.](https://artemxtech.github.io/screenshot_2_calendar_obsidian_sync.png)

### 3\. under the hood: simple tools, powerful orchestration

Like the best systems, the technical foundation is surprisingly simple. There’s no complex server or database. It’s a chain of trusted tools, each doing what it does best.

- **The Trigger:** A **macOS Shortcut**. The entry point. It runs one shell command.
- **The Brain:****Claude Code**. The orchestrator. It lives in my terminal and follows instructions from a file in my Obsidian vault.
- **The Home:****Obsidian**. My “second brain.” The destination for the final, structured output.
- **The Voice:****SuperWhisper**. Using local NVIDIA models, it turns my speech into text on-device.

The magic isn’t in any single tool, but in how the agent connects them at the right time.

### 4\. control, privacy, and permissions

You have complete control over what the agent sees. You can use the `/permission` command to automatically deny access to specific folders or grant it for the operations it needs. In the slash command itself, you can pre-approve the tools the agent needs, so it doesn’t have to ask every time.![Claude Code permissions interface showing how to control agent access](https://artemxtech.github.io/screenshot_3_claude_permissions.png)

### 5\. context is everything: teaching the agent what you want

A key insight I’ve learned: you have to be extremely specific with AI instructions to get reproducible workflows. The agent has no inherent context. It’s your job to provide it.

Don’t say “create calendar event.” Tell it exactly how. Here’s a real example from my instructions file:

```
**Add New Events to Calendar:** If user mentions new events in their responses, add them to Home calendar using:
\`osascript -e 'tell application "Calendar" to tell calendar "Home" to make new event with properties {summary:"EVENT_TITLE", start date:date "Day, Month DD, YYYY at HH:MM:SS AM/PM", end date:date "Day, Month DD, YYYY at HH:MM:SS AM/PM"}'\`
```

This is the new craft. There’s a balance between rigid scripts and flexible agents. Scripts are for deterministic, repetitive tasks. Agents are for when you need interpretation and adaptation. That’s where they shine.![Agent slash command interface showing how to configure specific instructions](https://artemxtech.github.io/screenshot_4_agent_slash_command.png)

### 6\. the future is a personal system

Obsidian is where you store your brain. Claude Code is what turns that passive archive into an active system. Together, they make your knowledge base an active participant in your daily routines.

We’re all becoming architects of our own workflows. You could build this for anything:

- An **evening wind-down** to reflect on your day.
- A **weekly review** that summarizes changes in your notes.
- An **inbox assistant** to help you process and categorize ideas.

This is what excites me most. Not just starting my day with a click, but having the power to design the exact conversation I want to have with myself to begin it. The friction is replaced by clarity. And that’s a much better way to start the day.

---

I’m just getting started with this. I’m sharing it because it might inspire you to think about what parts of your own life could be improved with a little thoughtful, personal automation.

I’d love to hear your thoughts. What would your ideal assistant do for you?

---

