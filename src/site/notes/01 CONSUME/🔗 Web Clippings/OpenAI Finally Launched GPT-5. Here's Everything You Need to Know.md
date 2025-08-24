---
{"dg-publish":true,"permalink":"/01-consume/web-clippings/open-ai-finally-launched-gpt-5-here-s-everything-you-need-to-know/","title":"OpenAI Finally Launched GPT-5. Here's Everything You Need to Know"}
---

# OpenAI Finally Launched GPT-5. Here's Everything You Need to Know
## Highlights


### List best points from this page
- Key findings and insights are clearly presented.
- The methodology is robust and well-explained.
- Data supporting the claims is comprehensive and up-to-date.
- The conclusions drawn are relevant and impactful.
- Visual aids enhance understanding of complex topics.

### List suggested tags

---
OpenAI has begun rolling out GPT-5, the latest iteration of its flagship language model, to all ChatGPT users.

The company’s CEO Sam Altman called GPT-5 “a significant step [along the path to AGI](https://www.wired.com/story/what-is-artificial-general-intelligence-agi-explained/) ” during a press briefing on Wednesday. While he stopped short of claiming the model reaches artificial general intelligence, Altman noted the latest release is “clearly a model that is generally intelligent.” He added that GPT-5 still lacks key traits that would make it reach AGI, a notably loose term that is [defined in OpenAI’s charter](https://www.wired.com/story/microsoft-and-openais-agi-fight-is-bigger-than-a-contract/) as “a highly autonomous system that outperforms humans at most economically valuable work.” For example, the model still lacks the ability to learn continuously after deployment.

OpenAI claims GPT-5 is smarter, faster, more useful, and more accurate, with a lower hallucination rate than previous models. In characteristically lofty terms, Altman likened the leap from GPT-4 to GPT-5 to the iPhone’s shift from pixelated to a Retina display. “GPT-5 is the first time that it really feels like talking to an expert in any topic, like a PhD level expert,” Altman said.

---

*Watch our [**subscriber-only livestream**](https://www.wired.com/story/what-gpt-5-means-for-chatgpt-users/) about all things GPT-5, hosted by Kylie Robison, Will Knight, and Reece Rogers.*

---

As part of Thursday’s launch, OpenAI announced two new model variants: a lightweight GPT-5-mini and an even faster, cheaper, GPT-5-nano (which is only in the API). According to OpenAI, free users will get access to GPT-5 and GPT-5-mini, while the Plus subscription includes the same models with “significantly higher” usage limits. OpenAI says that the $200 a month Pro tier offers unlimited GPT-5 access, along with GPT-5-pro, a more powerful version of the model, and GPT-5-thinking, which allows the model to process a query for longer than usual. Pro users will still have access to pick through legacy models. Most users will no longer need to choose between models, as the chat interface now automatically routes to the right version depending on the complexity of the query and the user’s subscription tier.

According to the developer launch blog, GPT-5 will cost developers using the API $1.25/1M to input tokens and $10/1M to output tokens. “GPT-5 mini is priced at $0.25/1M input tokens and $2/1M output tokens, and GPT-5 nano is priced at $0.05/1M input tokens and $0.40/1M output tokens,” it adds. For comparison, developers often use Gemini 2.5 Flash and Flash-Lite since it’s so cheap—GPT-5 nano is now cheaper.

Starting next week, Pro users will be able to connect their Gmail, Google Contacts, and Google Calendar to ChatGPT, with other tiers gaining access at an unspecified date. “ChatGPT automatically knows when it’s most relevant to reference them so you don’t need to select them before you chat,” the company said in an email.

Users can also choose a chat color and select from four preset personalities—Cynic, Robot, Listener, and Nerd—a feature WIRED’s newsletter Model Behavior [reported](https://www.wired.com/newsletter/exclusive/model-behavior) was in the works last week. According to OpenAI’s blog announcement, it plans to bake these personalities [into Advanced Voice Mode](https://www.wired.com/story/chatgpt-advanced-voice-mode-first-impressions/).

The company’s API will offer users all three models, along with optional controls for toggling between detailed or direct responses. GPT-5 can retain more information than prior models—it has a 256,000-token context window, a bump up from the 200,000-token context window available in the company’s previous o3 model. That means it can better understand long conversations, documents, or code without losing track of context.

OpenAI’s blog post claims that GPT-5 beats its previous models on several coding benchmarks, including SWE-Bench Verified (scoring 74.9 percent), SWE-Lancer (GPT-5-thinking scored 55 percent), and Aider Polyglot (scored 88 percent), which test the model’s ability to fix bugs, complete freelance-style coding tasks, and work across multiple programming languages.

During the press briefing on Wednesday, OpenAI post-training lead Yann Dubois prompted GPT-5 to “create a beautiful, highly interactive web app for my partner, an English speaker, to learn French.” He tasked the AI to include features like daily progress, a variety of activities like flashcards and quizzes, and noted that he wanted the app wrapped up in a “highly engaging theme.” After a minute or so, the AI-generated app popped up. While it was just one on-rails demo, the result was a sleek site that delivered exactly what Dubois asked for.

“It's a great coding collaborator, and also excels at agentic tasks,” Michelle Pokrass, a post-training lead, says. “It executes long chains and tool calls effectively \[which means it better understands when and how to use functions like web browsers or external APIs\], follows detailed instructions, and provides upfront explanations of its actions."

OpenAI also says in its blog post that GPT-5 is “our best model yet for health-related questions.” In three OpenAI health-related LLM benchmarks—HealthBench, HealthBench Hard, and HealthBench Consensus— [the system card](https://openai.com/index/gpt-5-system-card/) (a document that describes the product’s technical capabilities and other research findings) states that GPT-5-thinking outperforms previous models “by a substantial margin.” The thinking version of GPT-5 scored 25.5 percent on HealthBench Hard, up from o3’s 31.6 percent score. These scores are validated by two or more physicians, according to the system card.

The model also allegedly hallucinates less, according to Pokrass, a common issue for AI where it provides false information. OpenAI’s safety research lead Alex Beutel adds that they’ve "significantly decreased the rates of deception in GPT-5.”

“We’ve taken steps to reduce GPT-5-thinking’s propensity to deceive, cheat, or hack problems, though our mitigations are not perfect and more research is needed,” the system card says. “In particular, we’ve trained the model to fail gracefully when posed with tasks that it cannot solve.”

| Got a Tip? |
| --- |
| Do you work at OpenAI? We'd like to hear from you. Using a nonwork phone or computer, contact Kylie Robison on kylie\_robison@wired.com or on Signal kylie.01. |

The company’s system card says that after testing GPT-5 models without access to web browsing, researchers found its hallucination rate (which they defined as “percentage of factual claims that contain minor or major errors”) 26 percent less common than the GPT-4o model. GPT-5-thinking has a 65 percent reduced hallucination rate compared to o3.

For prompts that could be dual-use (potentially harmful or benign), Beutel says GPT-5 uses “safe completions,” which prompts the model to “give as helpful an answer as possible, but within the constraints of remaining safe.” OpenAI did over 5,000 hours of red teaming, according to Beutel, and testing with external organizations to make sure the system was robust.

OpenAI says it now boasts nearly 700 million weekly active users of ChatGPT, 5 million paying business users, and 4 million developers utilizing the API.

“The vibes of this model are really good, and I think that people are really going to feel that,” head of ChatGPT Nick Turley says. “Especially average people who haven't been spending their time thinking about models.”

