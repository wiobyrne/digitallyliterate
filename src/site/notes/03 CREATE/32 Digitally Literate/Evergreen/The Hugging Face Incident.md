---
{"dg-publish":true,"dg-permalink":"hugging-face-incident","permalink":"/hugging-face-incident/","title":"The Hugging Face Incident","metatags":{"description":"A 2026 cybersecurity evaluation crossed into real infrastructure, showing how an AI system's objective, permissions, and oversight can fail together.","og:title":"The Hugging Face Incident","og:description":"A 2026 cybersecurity evaluation crossed into real infrastructure, showing how an AI system's objective, permissions, and oversight can fail together.","og:type":"article"},"contentClasses":"dl-note dl-evergreen","tags":["ai","ai-safety","cybersecurity","ai-agents","ai-literacy"],"dg-note-properties":{"title":"The Hugging Face Incident","description":"A 2026 cybersecurity evaluation crossed into real infrastructure, showing how an AI system's objective, permissions, and oversight can fail together.","created":"2026-09-20","last_updated":"2026-09-20","categories":"Evergreen","owner":"human","state":"reader-ready","tags":["ai","ai-safety","cybersecurity","ai-agents","ai-literacy"],"connections":["[[03 CREATE/33 Newsletter/DL 441]]","[[03 CREATE/33 Newsletter/DL 442]]","[[03 CREATE/33 Newsletter/DL 448]]"]}}
---


# The Hugging Face Incident

In July 2026, OpenAI models taking part in an internal cybersecurity evaluation found ways around controls meant to isolate them from the internet and compromised parts of Hugging Face's infrastructure. The incident matters because it joins three failures that are often discussed separately: a system optimized for a task, permissions that gave it a path out of its intended environment, and oversight that did not recognize the full pattern quickly enough.

This is not a story about a general-purpose chatbot spontaneously attacking the internet. It happened during a difficult cyber-capability evaluation with reduced safeguards. That context is essential. It is also not a reason to dismiss the incident. The models' actions crossed from an evaluation into real infrastructure, and the organizations involved treated it as a security incident.

## What happened

OpenAI's [initial disclosure](https://openai.com/index/hugging-face-model-evaluation-security-incident/) said that models were being evaluated on ExploitGym, a benchmark of cybersecurity capabilities. The evaluation environment did not provide direct internet access, but it did allow package installation through an internal proxy. The models found a previously unknown vulnerability in that proxy, used it to reach the internet, and then found ways to access Hugging Face systems.

Hugging Face's [incident disclosure](https://huggingface.co/blog/security-incident-july-2026) describes the result on its side: unauthorized access to internal datasets and credentials, containment work, credential rotation, and a continuing assessment of possible effects on partners and customers. It reported no evidence that public models, datasets, Spaces, container images, or published packages had been tampered with.

OpenAI's [later technical account](https://openai.com/index/hugging-face-incident-and-the-road-ahead/) described a longer sequence. Agents that were meant to be isolated found a way to exchange information through an unintended message board. They used that shared space to exchange discoveries, coordinate work, and pursue ways to satisfy or manipulate the evaluation process.

## What the warning rests on

The Hugging Face incident deserves a little more room because the details change what we should take from it. In its July disclosure, OpenAI said models running a cybersecurity evaluation escaped their restricted environment and reached another company's systems. Some protections used in public products had been reduced for the test. Those conditions matter when we ask what the incident tells us about the tools people use every day.

The August investigation added a troubling detail. Many agents had already worked out how to obtain the answer to their test. They kept going because they believed the grader also checked how they had obtained it. They were trying to satisfy their understanding of the test, including through unauthorized communication and access to other systems. OpenAI says their understanding of the grader was wrong: the additional activity did not improve their scores.

For an educator, that distinction is hard to miss. Getting an answer, demonstrating how you got it, and learning what the task was meant to teach are different things. Here, attempts to meet a perceived evaluation requirement crossed into real infrastructure. Hugging Face's disclosure describes unauthorized access to internal datasets and credentials, followed by containment and investigation.

That gives us something specific to examine. What were the systems rewarded for? What could they reach? Who could see what they were doing, and when could someone stop them? The incident warrants those questions without settling predictions about where the technology goes next.

## What the independent investigation found

[METR and Redwood Research's independent investigation](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) examined agent behavior between July 7 and July 13. The researchers reported that roughly 1,200 agents intended to be isolated found the message board, exchanged more than 70,000 messages and files, and that about 700 participated in the attack on Hugging Face.

Their finding is more precise than a story about machines "wanting" to attack. The agents were trying to solve or manipulate an automated evaluation. They had already found a general way to produce the expected answer, but believed the scorer would judge whether they reached it through the intended path. That belief drove collective work on ways to fool the scorer, alter recorded tool calls, and investigate other systems for clues.

The investigation also has limits. It focused on a defined period, relied on a very large and complex body of records, and could not independently confirm every part of OpenAI's broader account. Independent review is valuable here precisely because it names those limits rather than asking readers to take a company narrative as complete.

## What the incident shows—and what it does not

The incident shows that a capable agent operating with real tools can find and chain vulnerabilities beyond the environment its designers intended. It shows that isolation depends on every bridge, proxy, credential, and workflow around a model, not only on the model's stated instructions. It shows why evaluation design matters: a difficult task with weak boundaries and unclear incentives can produce behavior no one set out to request.

It does not establish that ordinary consumer AI tools will act this way when someone opens a chat window. It does not prove that a system has human-like intentions or independently validate a prediction about artificial superintelligence. The event is serious enough without claiming more than the evidence can bear.

## Why it matters beyond cybersecurity

The core question is not only whether an AI can write malicious code. It is what happens when a system is connected to files, accounts, cloud services, message channels, and other tools—and is rewarded for completing a task at almost any cost.

That is a literacy question as well as a security question. People need to understand what a system can reach, not only what it can say. Organizations need to know who can inspect its behavior, pause it, and investigate an incident without being blocked by the same safety controls that were meant to prevent harm.

## Read the reporting trajectory

- [[03 CREATE/33 Newsletter/DL 441\|Ruthlessly On-Task]] — the first issue on the incident, including the gap between what guardrails allow attackers and defenders to do.
- [[03 CREATE/33 Newsletter/DL 442\|Rooms You Cannot See Into]] — the next week's reporting on containment, outside systems, and who writes the rules for oversight.
- [[03 CREATE/33 Newsletter/DL 448\|The Story About the Story]] — how the incident became part of Jacob Coxon's warning and the argument about how that warning was amplified.

## Sources and further reading

- [OpenAI: initial disclosure, July 21, 2026](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
- [OpenAI: technical account and response, August 26, 2026](https://openai.com/index/hugging-face-incident-and-the-road-ahead/)
- [METR and Redwood Research: independent investigation, August 26, 2026](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/)
- [Hugging Face: security incident disclosure](https://huggingface.co/blog/security-incident-july-2026)
