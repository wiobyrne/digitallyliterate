---
{"dg-publish":true,"permalink":"/01-consume/articles/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/","title":"AI haters build tarpits to trap and trick AI scrapers that ignore robots.txt"}
---


# AI haters build tarpits to trap and trick AI scrapers that ignore robots.txt

## Key Points:
Last summer, [Anthropic inspired backlash](https://www.theverge.com/2024/7/25/24205943/anthropic-ai-web-crawler-claudebot-ifixit-scraping-training-data) when its ClaudeBot AI crawler was accused of hammering websites a [million or more](https://www.theregister.com/2024/07/30/taming_ai_content_crawlers/) times a day.

And it wasn't the only artificial intelligence company making headlines for supposedly ignoring instructions in robots.txt files to avoid scraping web content on certain sites. Around the same time, Reddit's CEO [called out all AI companies](https://arstechnica.com/gadgets/2024/07/reddit-ceo-stands-by-change-that-blocks-most-non-google-search-engines/) whose crawlers he said were "a pain in the ass to block," despite the tech industry otherwise agreeing to respect "no scraping" robots.txt rules.

Watching the controversy unfold was a software developer whom Ars has granted anonymity to discuss his development of malware (we'll call him Aaron). Shortly after he noticed Facebook's crawler exceeding 30 million hits on his site, Aaron began plotting a new kind of attack on crawlers "clobbering" websites that he told Ars he hoped would give "teeth" to robots.txt.

Building on an anti-spam cybersecurity tactic known as tarpitting, he created [Nepenthes](https://zadzmo.org/code/nepenthes/), malicious software named after a carnivorous plant that will "eat just about anything that finds its way inside."

Aaron clearly warns users that Nepenthes is aggressive malware. It's not to be deployed by site owners uncomfortable with trapping AI crawlers and sending them down an "infinite maze" of static files with no exit links, where they "get stuck" and "thrash around" for months, he tells users. Once trapped, the crawlers can be fed gibberish data, aka Markov babble, which is designed to poison AI models. That's likely an appealing bonus feature for any site owners who, like Aaron, are fed up with paying for AI scraping and just want to watch AI burn.

### Ars Video

[

### How The Callisto Protocol's Team Designed Its Terrifying, Immersive Audio

](https://www.arstechnica.com/video/watch/how-the-callisto-protocol-designed-its-terrifying-immersive-audio)

Tarpits were originally designed to waste spammers' time and resources, but creators like Aaron have now evolved the tactic into an anti-AI weapon. As of this writing, Aaron confirmed that Nepenthes can effectively trap all the major web crawlers. So far, only OpenAI's crawler has managed to escape.

It's unclear how much damage tarpits or other AI attacks can ultimately do. Last May, Laxmi Korada, Microsoft's director of partner technology, published a [report](https://www.researchgate.net/profile/Laxminarayana-Korada/publication/382649828_Data_Poisoning_-what_is_it_and_how_it_is_being_addressed_by_the_leading_Gen_AI_providers/links/66a7c17c4433ad480e845d45/Data-Poisoning-what-is-it-and-how-it-is-being-addressed-by-the-leading-Gen-AI-providers.pdf) detailing how leading AI companies were coping with poisoning, [one of the earliest AI defense tactics deployed](https://arstechnica.com/information-technology/2023/10/university-of-chicago-researchers-seek-to-poison-ai-art-generators-with-nightshade/). He noted that all companies have developed poisoning countermeasures, while OpenAI "has been quite vigilant" and excels at detecting the "first signs of data poisoning attempts."

Despite these efforts, he concluded that data poisoning was "a serious threat to machine learning models." And in 2025, tarpitting represents a new threat, potentially increasing the costs of fresh data at a moment when AI companies are heavily investing and competing to innovate quickly while rarely turning significant profits.

"A link to a Nepenthes location from your site will flood out valid URLs within your site's domain name, making it unlikely the crawler will access real content," a Nepenthes explainer reads.

The only AI company that responded to Ars' request to comment was OpenAI, whose spokesperson confirmed that OpenAI is already working on a way to fight tarpitting.

"We’re aware of efforts to disrupt AI web crawlers," OpenAI's spokesperson said. "We design our systems to be resilient while respecting robots.txt and standard web practices."

But to Aaron, the fight is not about winning. Instead, it's about resisting the AI industry further decaying the Internet with tech that no one asked for, like chatbots that replace customer service agents or the rise of inaccurate AI search summaries. By releasing Nepenthes, he hopes to do as much damage as possible, perhaps spiking companies' AI training costs, dragging out training efforts, or even accelerating model collapse, with tarpits helping to delay the next wave of [enshittification](https://en.wikipedia.org/wiki/Enshittification).

"Ultimately, it's like the Internet that I grew up on and loved is long gone," Aaron told Ars. "I'm just fed up, and you know what? Let's fight back, even if it's not successful. Be indigestible. Grow spikes."

## Nepenthes instantly inspires another tarpit

Nepenthes was released in mid-January but was instantly popularized beyond Aaron's expectations after tech journalist Cory Doctorow boosted a tech commentator, Jürgen Geuter, [praising](https://tldr.nettime.org/@tante/113833396846881683) the novel AI attack method on Mastodon. Very quickly, Aaron was shocked to see engagement with Nepenthes skyrocket.

"That's when I realized, 'oh this is going to be something,'" Aaron told Ars. "I'm kind of shocked by how much it's blown up."

It's hard to tell how widely Nepenthes has been deployed. Site owners are discouraged from flagging when the malware has been deployed, forcing crawlers to face unknown "consequences" if they ignore robots.txt instructions.

Aaron told Ars that while "a handful" of site owners have reached out and "most people are being quiet about it," his web server logs indicate that people are already deploying the tool. Likely, site owners want to protect their content, deter scraping, or mess with AI companies.

When software developer and hacker Gergely Nagy, who goes by the handle "algernon" online, saw Nepenthes, he was delighted. At that time, Nagy told Ars that nearly all of his server's bandwidth was being "eaten" by AI crawlers.

Already blocking scraping and attempting to poison AI models through a simpler method, Nagy took his defense method further and created his own tarpit, [Iocaine](https://iocaine.madhouse-project.org/). He told Ars the tarpit immediately killed off about 94 percent of bot traffic to his site, which was primarily from AI crawlers. Soon, social media discussion drove users to inquire about Iocaine deployment, including not just individuals but also organizations wanting to take stronger steps to block scraping.

Iocaine takes ideas (not code) from Nepenthes, but it's more intent on using the tarpit to poison AI models. Nagy used a reverse proxy to trap crawlers in an "infinite maze of garbage" in an attempt to slowly poison their data collection as much as possible for daring to ignore robots.txt.

Taking its name from "one of the deadliest poisons known to man" from *The Princess Bride*, Iocaine is jokingly depicted as the "deadliest poison known to AI." While there's no way of validating that claim, Nagy's motto is that the more poisoning attacks that are out there, "the merrier." He told Ars that his primary reasons for building Iocaine were to help rights holders wall off valuable content and stop AI crawlers from crawling with abandon.

## Tarpits aren’t perfect weapons against AI

Running malware like Nepenthes can burden servers, too. Aaron likened the cost of running Nepenthes to running a [cheap virtual machine on a Raspberry Pi](https://arstechnica.com/gadgets/2025/01/new-120-16gb-raspberry-pi-5-is-for-the-people-who-use-it-like-an-everyday-pc/), and Nagy said that serving crawlers Iocaine costs about the same as serving his website.

But Aaron told Ars that Nepenthes wasting resources is the chief objection he's seen preventing its deployment. Critics fear that deploying Nepenthes widely will not only burden their servers but also increase the costs of powering all that AI crawling for nothing.

"That seems to be what they're worried about more than anything," Aaron told Ars. "The amount of power that AI models require is already astronomical, and I'm making it worse. And my view of that is, OK, so if I do nothing, AI models, they boil the planet. If I switch this on, they boil the planet. How is that my fault?"

Aaron also defends against this criticism by suggesting that a broader impact could slow down AI investment enough to possibly curb some of that energy consumption. Perhaps due to the resistance, AI companies will be pushed to seek permission first to scrape or agree to pay more content creators for training on their data.

"Any time one of these crawlers pulls from my tarpit, it's resources they've consumed and will have to pay hard cash for, but, being bullshit, the money \[they\] have spent to get it won't be paid back by revenue," Aaron [posted](https://chirp.zadzmo.org/@aaron), explaining his tactic online. "It effectively raises their costs. And seeing how none of them have turned a profit yet, that's a big problem for them. The investor money will not continue forever without the investors getting paid."

Nagy agrees that the more anti-AI attacks there are, the greater the potential is for them to have an impact. And by releasing Iocaine, Nagy showed that social media chatter about new attacks can inspire new tools within a few days. Marcus Butler, an independent software developer, similarly built his poisoning attack called [Quixotic](https://marcusb.org/hacks/quixotic.html) over a few days, he told Ars. Soon afterward, he received messages from others who built their own versions of his tool.

Butler is not in the camp of wanting to destroy AI. He told Ars that he doesn't think "tools like Quixotic (or Nepenthes) will 'burn AI to the ground.'" Instead, he takes a more measured stance, suggesting that "these tools provide a little protection (a very little protection) against scrapers taking content and, say, reposting it or using it for training purposes."

But for a certain sect of Internet users, every little bit of protection seemingly helps. Geuter linked Ars to a [list](https://tldr.nettime.org/@asrg/113867412641585520) of tools bent on sabotaging AI. Ultimately, he expects that tools like Nepenthes are "probably not gonna be useful in the long run" because AI companies can likely detect and drop gibberish from training data. But Nepenthes represents a sea change, Geuter told Ars, providing a useful tool for people who "feel helpless" in the face of endless scraping and showing that "the story of there being no alternative or choice is false."

## Criticism of tarpits as AI weapons

Critics debating Nepenthes' utility [on Hacker News](https://news.ycombinator.com/item?id=42725147) suggested that most AI crawlers could easily avoid tarpits like Nepenthes, with one commenter describing the attack as being "very crawler 101." Aaron said that was his "favorite comment" because if tarpits are considered elementary attacks, he has "2 million lines of access log that show that Google didn't graduate."

But efforts to poison AI or waste AI resources don't just mess with the tech industry. Governments globally are seeking to leverage AI to solve societal problems, and attacks on AI's resilience seemingly threaten to disrupt that progress.

Nathan VanHoudnos is a senior AI security research scientist in the federally funded [CERT Division](https://www.sei.cmu.edu/about/divisions/cert/) of the Carnegie Mellon University Software Engineering Institute, which partners with academia, industry, law enforcement, and government to "improve the security and resilience of computer systems and networks." He told Ars that new threats like tarpits seem to replicate a problem that AI companies are already well aware of: "that some of the stuff that you're going to download from the Internet might not be good for you."

"It sounds like these tarpit creators just mainly want to cause a little bit of trouble," VanHoudnos said. "They want to make it a little harder for these folks to get" the "better or different" data "that they're looking for."

VanHoudnos co-authored a [paper](https://insights.sei.cmu.edu/documents/5976/6054_Counter_AI_What_Is_It_and_What_Can_You_Do_About_It_hxn8ysd.pdf) on "Counter AI" last August, pointing out that attackers like Aaron and Nagy are limited in how much they can mess with AI models. They may have "influence over what training data is collected but may not be able to control how the data are labeled, have access to the trained model, or have access to the Al system," the paper said.

Further, AI companies are increasingly turning to the deep web for unique data, so any efforts to wall off valuable content with tarpits may be coming right when crawling on the surface web starts to slow, VanHoudnos suggested.

But according to VanHoudnos, AI crawlers are also "relatively cheap," and companies may deprioritize fighting against new attacks on crawlers if "there are higher-priority assets" under attack. And tarpitting "does need to be taken seriously because it is a tool in a toolkit throughout the whole life cycle of these systems. There is no silver bullet, but this is an interesting tool in a toolkit," he said.

## Offering a choice to abstain from AI training

Aaron told Ars that he never intended Nepenthes to be a major project but that he occasionally puts in work to fix bugs or add new features. He said he'd consider working on integrations for real-time reactions to crawlers if there was enough demand.

Currently, Aaron predicts that Nepenthes might be most attractive to rights holders who want AI companies to pay to scrape their data. And many people seem enthusiastic about using it to reinforce robots.txt. But "some of the most exciting people are in the 'let it burn' category," Aaron said. These people are drawn to tools like Nepenthes as an act of rebellion against AI making the Internet less useful and enjoyable for users.

Geuter told Ars that he considers Nepenthes "more of a sociopolitical statement than really a technological solution (because the problem it's trying to address isn't purely technical, it's social, political, legal, and needs way bigger levers)."

To Geuter, a computer scientist who has been writing about the social, political, and structural impact of tech for two decades, AI is the "most aggressive" example of "technologies that are not done 'for us' but 'to us.'"

"It feels a bit like the social contract that society and the tech sector/engineering have had (you build useful things, and we're OK with you being well-off) has been canceled from one side," Geuter said. "And that side now wants to have its toy eat the world. People feel threatened and want the threats to stop."

As AI evolves, so do attacks, with one 2021 [study](https://link.springer.com/content/pdf/10.1007/s10994-021-06119-y.pdf) showing that increasingly stronger data poisoning attacks, for example, were able to break data sanitization defenses. Whether these attacks can ever do meaningful destruction or not, Geuter sees tarpits as a "powerful symbol" of the resistance that Aaron and Nagy readily joined.

"It's a great sign to see that people are challenging the notion that we all have to do AI now," Geuter said. "Because we don't. It's a choice. A choice that mostly benefits monopolists."

Tarpit creators like Nagy will likely be watching to see if poisoning attacks continue growing in sophistication. On the Iocaine site—which, yes, is protected from scraping by Iocaine—he posted this call to action: "Let's make AI poisoning the norm. If we all do it, they won't have anything to crawl."

[342 Comments](https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/#comments "342 comments")

[Prev story](https://arstechnica.com/security/2025/01/newly-discovered-flaws-in-apple-chips-leak-secrets-in-safari-and-chrome/ "Go to: Apple chips can be hacked to leak secrets from Gmail, iCloud, and more")

[Next story](https://arstechnica.com/ai/2025/01/how-does-deepseek-r1-really-fare-against-openais-best-reasoning-models/ "Go to: How does DeepSeek R1 really fare against OpenAI’s best reasoning models?")

## Summary:
Attackers explain how an anti-spam defense became an AI weapon.

---

*Source: [AI haters build tarpits to trap and trick AI scrapers that ignore robots.txt](https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/)*
