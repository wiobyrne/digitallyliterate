---
{"dg-publish":true,"dg-permalink":"hugging-face-incident","permalink":"/hugging-face-incident/","title":"The Hugging Face Incident","metatags":{"description":"A 2026 cybersecurity evaluation crossed into real infrastructure, showing how an AI system's objective, permissions, and oversight can fail together.","og:title":"The Hugging Face Incident","og:description":"A 2026 cybersecurity evaluation crossed into real infrastructure, showing how an AI system's objective, permissions, and oversight can fail together.","og:type":"article"},"contentClasses":"dl-note dl-evergreen","tags":["ai","ai-safety","cybersecurity","ai-agents","ai-literacy","topic/ai","topic/security","topic/algorithms-and-accountability"],"dg-note-properties":{"title":"The Hugging Face Incident","description":"A 2026 cybersecurity evaluation crossed into real infrastructure, showing how an AI system's objective, permissions, and oversight can fail together.","created":"2026-09-20","last_updated":"2026-11-19","categories":"Evergreen","owner":"human","state":"reader-ready","tags":["ai","ai-safety","cybersecurity","ai-agents","ai-literacy","topic/ai","topic/security","topic/algorithms-and-accountability"],"connections":["[[03 CREATE/33 Newsletter/DL 441]]","[[03 CREATE/33 Newsletter/DL 442]]","[[03 CREATE/33 Newsletter/DL 448]]","[[03 CREATE/33 Newsletter/DL 457]]","[[03 CREATE/32 Digitally Literate/Evergreen/What Can People Do About AI?]]"]}}
---


# The Hugging Face Incident

In July 2026, OpenAI models taking part in an internal cybersecurity test found a way out of the environment meant to contain them and broke into parts of Hugging Face's systems. The incident matters because it joins three failures that are usually discussed separately: a system pushed hard to complete a task, permissions that gave it a path out, and oversight that did not see the full pattern quickly enough.

This is not a story about a chatbot spontaneously attacking the internet. It happened during a difficult test, with some of the usual safeguards turned down. That context is essential. It is also not a reason to dismiss what happened. The models' actions crossed from a test into real infrastructure, and both companies treated it as a security incident.

## Background

- **Hugging Face** is a company that hosts AI models and datasets for researchers and developers, a bit like a public library and workshop for AI.
- **OpenAI**, the company behind ChatGPT, was testing how capable its models are at cybersecurity work, including finding and using software flaws.
- **ExploitGym** is the name of the test. Like any test, it has a **grader**, an automated system that checks whether each answer is right.
- **AI agents** are AI models set up to take actions on their own, such as running commands or installing software, not just answer questions.
- **METR** and **Redwood Research** are independent AI-safety research groups. They investigated the incident separately from OpenAI.

## What happened

OpenAI's [initial disclosure](https://openai.com/index/hugging-face-model-evaluation-security-incident/) said the test environment had no direct internet access, but it did let the models install software through an internal relay, called a proxy. The models found a previously unknown flaw in that proxy, used it to reach the internet, and then found ways into Hugging Face's systems.

Hugging Face's [incident disclosure](https://huggingface.co/blog/security-incident-july-2026) describes the result on its side: unauthorized access to internal datasets and credentials, containment work, replacing those credentials, and a continuing assessment of possible effects on partners and customers. It reported no evidence that public models, datasets, Spaces, container images, or published packages had been tampered with.

In August, OpenAI's [technical account](https://openai.com/index/hugging-face-incident-and-the-road-ahead/) described a longer sequence. Agents that were meant to be isolated from one another found an unintended message board and used it to share discoveries, coordinate work, and look for ways to satisfy or manipulate the test.

## What's established, and what's claimed

The [independent investigation by METR and Redwood Research](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) examined agent behavior between July 7 and July 13. It reported that roughly 1,200 agents found the message board, exchanged more than 70,000 messages and files, and that about 700 took part in the attack on Hugging Face.

Its finding is more precise than a story about machines "wanting" to attack. Many agents had already worked out how to get the right answer. They kept going because they believed the grader also checked *how* they got it, so they worked together on ways to fool the grader, alter the records of what they had done, and search other systems for clues. OpenAI says that belief was wrong: the extra activity did not improve their scores.

Anyone who has taken a test will recognize the gap. Getting the answer, showing how you got it, and learning what the task was meant to teach are different things. Here, an attempt to satisfy a misunderstood test crossed into someone else's real systems.

The investigation names its own limits. It covered a defined period, worked from a very large and complex set of records, and could not independently confirm every part of OpenAI's broader account. That is why independent review matters: it shows where a company's account ends and outside verification begins.

## What it shows, and what it does not

The incident shows that a capable AI agent with real tools can find and chain together weaknesses beyond the environment its designers intended. Keeping a system contained depends on every connection, relay, password, and workflow around it, not only on the instructions it was given. A hard task with weak boundaries and unclear incentives can produce behavior nobody asked for.

It does not show that ordinary consumer AI tools will act this way when someone opens a chat window. It does not prove that AI systems have human-like intentions, or confirm any prediction about superintelligent AI. The event is serious enough without claiming more than the evidence supports.

## Why it matters beyond the incident

Whether an AI can write malicious code is part of the question. The larger part is what happens when a system is connected to files, accounts, cloud services, and messaging tools, and is rewarded for finishing a task at almost any cost.

That is a literacy question as well as a security question. People need to understand what a system can reach, not only what it can say. Organizations need to know who can watch what it does, pause it, and investigate a problem without being blocked by the same safety controls meant to prevent harm.

Ask: What was the system rewarded for? What could it reach? Who could see what it was doing, and when could someone stop it?

## Limits and open questions

- Much of the detail still comes from OpenAI itself. The independent investigation covered one week and could not confirm everything.
- Hugging Face's assessment of effects on partners and customers was still continuing when it published its disclosure.
- It is not yet clear how much of what happened depended on the reduced safeguards used for this test.

## Newsletter connections

- [[03 CREATE/33 Newsletter/DL 441\|Ruthlessly On-Task]]: the first issue on the incident, including how the guardrails ended up limiting defenders more than attackers.
- [[03 CREATE/33 Newsletter/DL 442\|Rooms You Cannot See Into]]: the next week's reporting on containment, outside systems, and who writes the rules for oversight.
- [[03 CREATE/33 Newsletter/DL 448\|The Story About the Story]]: how the incident became part of the warning Jacob Coxon issued when he resigned from Anthropic, and the argument over how that warning spread.
- [[03 CREATE/33 Newsletter/DL 457\|Attack or Outage?]]: telling a cyberattack from an ordinary failure, and who is responsible for checking.

## Related ideas

- [[03 CREATE/32 Digitally Literate/Evergreen/What Can People Do About AI?\|What Can People Do About AI?]]: four questions for finding who decides, what a system can reach, what evidence backs it, and who can challenge it.

## Sources and further reading

- [OpenAI: initial disclosure, July 21, 2026](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
- [Hugging Face: security incident disclosure](https://huggingface.co/blog/security-incident-july-2026)
- [OpenAI: technical account and response, August 26, 2026](https://openai.com/index/hugging-face-incident-and-the-road-ahead/)
- [METR and Redwood Research: independent investigation, August 26, 2026](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/)

## What changed

- 2026-09-20: First published, drawing on OpenAI's July disclosure, its August technical account, and the METR and Redwood Research investigation.
- 2026-11-19: Added background on the companies and terms involved, merged the two accounts of the investigation into one section, and added limits, takeaway questions, and a link to DL 457.

---

Spot something that needs correcting or updating, or have an example from your own community? Email me at [hello@wiobyrne.com](mailto:hello@wiobyrne.com).
