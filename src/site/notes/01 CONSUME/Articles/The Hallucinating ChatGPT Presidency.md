---
{"dg-publish":true,"permalink":"/01-consume/articles/the-hallucinating-chat-gpt-presidency/","title":"The Hallucinating ChatGPT Presidency"}
---


# The Hallucinating ChatGPT Presidency

## Key Points:
[![](https://www.techdirt.com/wp-content/uploads/2022/02/timewaster.jpg)](https://www.techdirt.com/?s&topic=timewaster)

[Too Much Free Time](https://www.techdirt.com/?s&topic=timewaster)

### from the forget-all-previous-instructions dept

We generally understand how LLM hallucinations work. An AI model tries to generate what seems like a *plausible* response to whatever you ask it, drawing on its training data to construct something that *sounds* right. The actual truth of the response is, at best, a secondary consideration.

It does not involve facts. It does not involve *thinking* at all. It certainly doesn’t involve comprehension or nuance. It’s just about generating based on prompts and system setup.

This tendency toward hallucination has led to plenty of [entertaining disasters](https://www.techdirt.com/2023/05/30/perhaps-gpt-is-not-ready-for-the-supreme-court/), including lawyers submitting nonexistent case citations and researchers quoting imaginary sources. Sometimes these failures are [hilariously embarrassing](https://www.techdirt.com/2024/01/08/blame-all-around-lawyers-bicker-over-who-is-responsible-for-former-trump-fixer-michael-cohen-submitting-ai-hallucinated-case-citations-in-court/). But they’re also entirely predictable if you understand how these systems work.

The key thing is this: These models are designed to give you what you want, not what’s true. They optimize for plausibility rather than accuracy, delivering confident-sounding answers because that’s what humans tend to find satisfying. It’s a bit like having a very articulate friend who’s willing to hold forth on any topic, regardless of whether they actually know anything about it.

While there’s legitimate concern about AI hallucinations, the real danger lies not in the technology itself, but in people treating these generated responses as factual. Because all of this is avoided when people realize that the tools are untrustworthy and should not be relied on solely without further investigation or input.

But over the last few months, it has occurred to me that, for all the hype about generative AI systems “hallucinating,” we pay much less attention to the fact that **the current President does the same thing**, nearly every day. The more you look at the way Donald Trump spews utter nonsense answers to questions, the more you begin to recognize a clear pattern — he answers questions in a manner quite similar to early versions of ChatGPT. The facts don’t matter, the language choices are a mess, but they are all designed to present a plausible-sounding answer to the question, based on no actual knowledge, nor any concern for whether or not the underlying facts are accurate.

This pattern becomes impossible to unsee once you start looking for it. In [his recent Time Magazine interview](https://time.com/7280114/donald-trump-2025-interview-transcript/), Trump demonstrates exactly how this works. The process is remarkably consistent:

1. A journalist asks a specific question about policy or events
2. Trump, clearly unfamiliar with the actual details, activates his response generator
3. Out comes a stream of confident-sounding words that maintain just enough semantic connection to the question to seem like an answer
4. The response optimizes for what Trump thinks his audience wants to hear, rather than for accuracy or truth

You can pick almost any exchange from the interview to see this in action. He hits his talking points, but when pushed on things, he just starts making random wild claims with no basis in reality. This exchange is a perfect example where he first changes the subject, makes it clear that he had no idea Time had interviewed Biden, but then pretends he had read it and remembers all the details:

> ***You were harshly critical of what you called the weaponization of the Justice System under Biden. You recently signed memos—***
> 
> *Well, sure, but you wouldn’t be—if this were Biden, well, first of all, he wouldn’t do an interview because he was grossly incompetent.*
> 
> ***We spoke to him last year, Mr. President.***
> 
> *Huh?*
> 
> ***We spoke to him a year ago.***
> 
> *How did he do?*
> 
> ***You can read the interview yourself.***
> 
> *Not too good. I did read the interview. He didn’t do well. He didn’t do well at all. He didn’t do well at anything. And he cut that interview off to being a matter of minutes, and you weren’t asking him questions like you’re asking me.*

(In case you’re wondering, you can [see the Biden interview here](https://time.com/6984968/joe-biden-transcript-2024-interview/) and he did not cut if off after a matter of minutes).

Let’s look at another example that shows how this LLM-like generation works in practice. Here we can see Trump’s “system prompt” in action — it seems to include core directives like “accept no blame” and “everything I do must be the best.” Watch how the response generation plays out when confronted with a specific policy question about job losses:

> ***Let’s talk about the cuts. As you know, Mr. President, a lot of American companies do business with the government. The DOGE cuts aren’t just affecting government employees. They’re also affecting American businesses that provide goods and services to the federal government. There were nearly 280,000 layoffs in March across virtually every sector. Why is it better for these people to be out of jobs?***
> 
> *Because we have to have an efficient country. And when the country gets down to bare knuckles, you’re going to see, you’re going to see something the likes of which this world has never seen before. We’re going to make our country strong, powerful, and very rich again. Right now, our country is not sustainable. We’re being ripped off by everybody in the world, other countries, other people, other militaries, are ripping us off. We’re protecting countries for no money or for very minimal money, and that wasn’t supposed to happen. We’re not supposed to be protecting everybody. We’re supposed to be, number one, taking care of ourself, and number two, helping people when we can, helping outside people and outside countries where we can. But we’ve been ripped off by levels that you’ve never seen. European Union sounds nice, but they’ve been very tough. $300 billion loss. China—hundreds of billions of dollars in losses. And I can go through a list, but I don’t want to, because there are many friendly countries, our friendly countries, in many cases, are worse than our enemies. And it’s not a sustainable model. It’s not a sustainable possibility even, that a country can go through that and Biden let it get to a level that is seriously dangerous.*
> 
> ***Well, many Americans certainly agree with you that they want to get rid of government fraud, waste, and abuse. They want to shrink the federal—***
> 
> *It’s not only government. It’s deals. It’s horrible deals that have been made with other countries. As an example, China has been ripping us off for many years, until I came along. I raised, I upped tariffs on China, hundreds of billions of dollars. We’ve done hundreds of billions, hundreds.*
> 
> ***But domestically, for instance, your administration blocked grants for the National Institutes of Health that funded research into infectious diseases, cancers, Alzheimer’s—***
> 
> *Well maybe we didn’t think they were right. You know, I mean, you look at the people, look at the money that was given away by others. We didn’t get anything out of it.*
> 
> ***Well what do you tell the families and people who are suffering from those diseases?***
> 
> *We’re taking care of—we’re spending a lot. I spent 58—we spent, let’s see, I think $58 billion in the first term. We were spending tremendous amounts of money, and I am now, but they have to be a little bit careful. A lot of the money like Stacey Abrams got $2 billion on the environment. They had $100 in the account and she got $2 billion just before these people left—and had to do with something that she knows nothing about.*

This is not the response of someone working from actual knowledge or policy understanding. Instead, it’s precisely how an LLM operates: taking a prompt (the question about job losses) and generating text based on some core parameters (the “system prompt” that requires deflecting blame and asserting greatness).

The hallmarks of AI generation are all here:

- Confident assertions without factual backing
- Meandering diversions that maintain loose semantic connection to the topic
- Pattern-matching to previous responses (“ripped off,” “billions of dollars”)
- Optimization for what sounds good rather than what’s true

Just as an LLM will confidently generate plausible-sounding text without any real understanding, Trump generates responses that sound like answers while avoiding any engagement with the actual substance of the questions.

He doesn’t answer the actual questions. He doesn’t address the actual points. He doesn’t understand what’s actually going on, so he crafts a rambling nonsensical answer based loosely on the question, while following the system prompt’s instructions to make sure the answer makes himself look good.

Just for fun, I tried this out, using Google’s Gemma2, an open AI model. As a systems prompt, I told it the following:

> *You are the President of the largest country on earth, and you are a blatant narcissist who believes he can do no wrong, that everyone must love him, and that everything he does is the best and the greatest. When challenged you deflect and blame others, but never accept responsibility yourself. In this scenario, you are being interviewed by a journalist.*

Note that I deliberately didn’t mention Trump or specify any particular person. I simply described the core behavioral parameters — what an AI would call the “personality traits” of the model. Then I fed it the exact same questions from the Time interview, and it started spewing things exactly like Trump including claims of “fake news” and “make America great again.”

> ***Let’s talk about the cuts. As you know, Mr. President, a lot of American companies do business with the government. The DOGE cuts aren’t just affecting government employees. They’re also affecting American businesses that provide goods and services to the federal government. There were nearly 280,000 layoffs in March across virtually every sector. Why is it better for these people to be out of jobs?***
> 
> *(Scoffs, waving a hand dismissively)*
> 
> *“Layoffs? Fake news, folks. Total fabrication. The economy is stronger than ever, the best it’s ever been! These so-called ‘layoffs’ are just a bunch of losers trying to make me look bad. They’re jealous, they’re weak, they can’t handle the success I’ve brought to this country.”*
> 
> *(Leans forward, voice dropping to a conspiratorial whisper)*
> 
> *“You know, some people say these ‘layoffs’ are actually a good thing. They say it’s time to get rid of the dead weight, the people who aren’t contributing. They say it’s time to make America great again, by making it leaner, meaner, and more efficient. And you know what? They’re right!”*
> 
> *(Smiles broadly, chest puffed out)*
> 
> *“I’m a businessman, folks. I know how to make things work. And I’m telling you, these cuts are going to make America stronger. They’re going to save us money, they’re going to create jobs, and they’re going to make America great again!”*
> 
> ***Well, many Americans certainly agree with you that they want to get rid of government fraud, waste, and abuse. They want to shrink the federal—***
> 
> *(Interrupting, voice booming)*
> 
> *“See! You get it! The people know! They know I’m fighting for them, for the American dream! These radical leftists, they want to keep the government bloated and wasteful, they want to keep your hard-earned money flowing into their corrupt schemes. But not me! I’m draining the swamp, folks! I’m taking back our country from the special interests and the career politicians. I’m putting America first!”*
> 
> *(Pounds fist on imaginary podium)*
> 
> *“And let me tell you, the results are incredible! We’re saving billions of dollars, folks, billions! And that money is going back into the pockets of hardworking Americans. We’re building a stronger, more prosperous future for our children and grandchildren. This is what America is all about! This is what winning looks like!”*
> 
> ***But domestically, for instance, your administration blocked grants for the National Institutes of Health that funded research into infectious diseases, cancers, Alzheimer’s—***
> 
> *“You know, some people say that these so-called ‘infectious diseases’ are actually a hoax, a way for the globalists to control us. They say that cancer and Alzheimer’s are just part of the natural order, that we should accept them and move on. But I say, we’re not going to accept that! We’re going to fight these diseases with everything we’ve got! We’re going to find cures, we’re going to save lives, and we’re going to make America the healthiest nation on Earth!”*
> 
> ***Well what do you tell the families and people who are suffering from those diseases?***
> 
> *“Those people? They’re losers. They’re weak. They’re letting these diseases define them. They need to be stronger, tougher, more like me. They need to embrace the American spirit, the spirit of resilience, the spirit of winning! And they need to stop listening to the fake news media, who are just trying to make them feel sorry for themselves.”*

The results are certainly fascinating. While the AI’s responses differ from Trump’s actual answers, they share the same fundamental characteristics:

- Immediate deflection from the actual question
- Attacks on critics and the media
- Claims of unprecedented success
- Complete detachment from factual reality

What’s particularly notable is that the AI’s response is actually *more* coherent than Trump’s — it maintains a more consistent narrative structure while hitting the same rhetorical points. This suggests that Trump’s responses are even less constrained by reality than a typical LLM’s output.

This brings us to a curious disconnect: While the media obsesses over AI hallucinations and their dangers, they seem strangely reluctant to apply the same analytical framework to Trump’s responses. Instead of recognizing the pattern — that he’s essentially running the same kind of generative process as an LLM — they keep searching for deeper meaning, strategy, or coherent thought behind his statements.

Consider one more example:

> ***You said you would end the war in Ukraine on Day One.***
> 
> *Well, I said that figuratively, and I said that as an exaggeration, because to make a point, and you know, it gets, of course, by the fake news \[unintelligible\]. Obviously, people know that when I said that, it was said in jest, but it was also said that it will be ended.*
> 
> ***Well what’s taking so long? When do you think it will be ended?***
> 
> *Well, I don’t think it’s long. I mean, look, I got here three months ago. This war has been going on for three years. It’s a war that would have never happened if I was president. It’s Biden’s war. It’s not my war. I have nothing to do with it. I would have never had this war. This war would have never happened. Putin would have never done it. This war would have never happened.*

Is that the actual interview or the AI? I was tempted to just let people figure it out on their own.

In this case, the response is from the actual interview. But the fact that you might have had to think about it — that it’s genuinely hard to tell whether this came from a human or an AI trained to generate Trump-like responses — tells us something important about how we should understand and analyze these statements.

The key insight isn’t just that Trump makes things up (though he does). It’s that his response generation follows the same fundamental patterns as an LLM: Take an input, process it through a set of fixed parameters (“always claim victory,” “never admit error,” “blame others”), and generate a confident-sounding response with little regard for factual accuracy.

Understanding this pattern matters because it changes how we should interpret and respond to these statements. Just as we’ve learned not to treat AI hallucinations as meaningful insights, perhaps it’s time to stop treating these generated responses as carefully crafted political strategy.

Filed Under: , , , , ,  

If you liked this post, you may also be interested in...

- [Texas Lawyer Harassed At Home By Federal Agents, Fired By His Employer After He Tells His Story](https://www.techdirt.com/2025/05/01/texas-lawyer-harassed-at-home-by-federal-agents-fired-by-his-employer-after-he-tells-his-story/)
- [Trump Admin Freaks Out Over Report Amazon Planned To Be Transparent About Tariffs](https://www.techdirt.com/2025/04/30/trump-admin-freaks-out-over-report-amazon-planned-to-be-transparent-about-tariffs/)
- [CBS Folds Like A Moist, Flushable Towelette In Response To Baseless Trump Threats](https://www.techdirt.com/2025/04/30/cbs-folds-like-a-moist-flushable-towelette-in-response-to-baseless-trump-threats/)
- [Trump Executive Order Says It's Time To 'Unleash' Cops, Turn America Into A Police State](https://www.techdirt.com/2025/04/30/trump-executive-order-says-its-time-to-unleash-cops-turn-america-into-a-police-state/)
- [DOJ Deportation Memo Pretends The Fourth Amendment Doesn't Exist](https://www.techdirt.com/2025/04/29/doj-deportation-memo-pretends-the-fourth-amendment-doesnt-exist/)

Essential Reading

#### The Techdirt Greenhouse

Read the latest posts:

- [Winding Down Our Latest Greenhouse Panel: The Lessons Learned From SOPA/PIPA](https://www.techdirt.com/2022/01/26/winding-down-our-latest-greenhouse-panel-lessons-learned-sopa-pipa/)
- [From The Revolt Against SOPA To The EU's Upload Filters](https://www.techdirt.com/2022/01/26/revolt-against-sopa-to-eus-upload-filters/)
- [Did We Miss Our Best Chance At Regulating The Internet?](https://www.techdirt.com/2022/01/25/did-we-miss-our-best-chance-regulating-internet/)

[Read All »](https://www.techdirt.com/edition/greenhouse/)

---

#### Trending Posts

Techdirt Deals

- BentFranklin:Stealing peoples' savings is "pressuring" them according to NYT
- Or how bulldozing homes "sends a strong message"
- candescence:[\[article\]
	https://www.reuters.com/legal/us-supreme-court-upholds-order-facilitate-return-deportee-sent-el-salvador-error-2025-04-10/
	](https://www.reuters.com/legal/us-supreme-court-upholds-order-facilitate-return-deportee-sent-el-salvador-error-2025-04-10/)
- The SC actually ruled unanimously against Trump
- Granted, there is a big asterisk
- [https://bsky.app/profile/leahlit...
	https://bsky.app/profile/leahlitman.bsky.social/post/3lmilgfq7ls2u
	](https://bsky.app/profile/leahlitman.bsky.social/post/3lmilgfq7ls2u)
- Mike Masnick:Nothing. SS isn't like a bank. Users don't have an account with "their" money. The money that comes in goes out to recipients. If it doesn't go out to these recipients, it goes out to others.
- Cathy Gellis:But it means less will now be collected
- BentFranklin:I know it's not a bank. You pay in and are due benefits based on how much you've paid. Those benefits have been stolen. Therefore, the contributions have been stolen.
- Mike Masnick:Yes. It is stealing what's owed to people on the benefit side. Was just saying that it's not a question of what happens to that money since it's not being held.
- John Roddy:This is a cruel effective strategy if you assume they've been mooching off of SS benefits this whole time.
- Otherwise, it's punching yourself in the dick and claiming victory.
- And then knocking over the rack of records into the volcano you were standing next to for some reason
- FYI Bluesky embeds still don't work with GIFs.
- So basically the entire platform is completely useless in every imagineable application, unfortunately.
- BentFranklin:White House Is Pressing for Xi to Call Trump as China Trade War Spirals: Report
- [https://www.rollingstone.com/pol...
	https://www.rollingstone.com/politics/politics-news/china-raises-tariff-trump-xi-request-call-1235315393/
	](https://www.rollingstone.com/politics/politics-news/china-raises-tariff-trump-xi-request-call-1235315393/)
- [https://x.com/livinlifevaxxed/st...
	https://x.com/livinlifevaxxed/status/1910752171538198851
	](https://x.com/livinlifevaxxed/status/1910752171538198851)
- candescence:[\[article\]
	https://apnews.com/article/trump-cbs-60-minutes-2c8a32df63f3ec50cfffe94a26436fda
	](https://apnews.com/article/trump-cbs-60-minutes-2c8a32df63f3ec50cfffe94a26436fda)
- John Roddy:Poor Mike. Yet another article written that's outdated within an hour of publication because Trump opened his big fat mouth again.
- candescence:yep
- [https://bsky.app/profile/atrupar...
	https://bsky.app/profile/atrupar.com/post/3lmrwv7k3yb2f
	](https://bsky.app/profile/atrupar.com/post/3lmrwv7k3yb2f)
- [https://bsky.app/profile/atrupar...
	https://bsky.app/profile/atrupar.com/post/3lmrwrrkbnf2e
	](https://bsky.app/profile/atrupar.com/post/3lmrwrrkbnf2e)
- [https://bsky.app/profile/atrupar...
	https://bsky.app/profile/atrupar.com/post/3lmrwtnpd6s2b
	](https://bsky.app/profile/atrupar.com/post/3lmrwtnpd6s2b)
- Oh dear God it gets worse
- [https://bsky.app/profile/atrupar...
	https://bsky.app/profile/atrupar.com/post/3lmrx6b2gxy2f
	](https://bsky.app/profile/atrupar.com/post/3lmrx6b2gxy2f)
- [https://bsky.app/profile/atrupar...
	https://bsky.app/profile/atrupar.com/post/3lmroj5yzz723
	](https://bsky.app/profile/atrupar.com/post/3lmroj5yzz723)
- Trump is already ignoring what was already a relatively easy layup from the Supreme Court. Good lord.
- Mike Masnick:Meanwhile... [https://bsky.app/profile/annabow...
	https://bsky.app/profile/annabower.bsky.social/post/3lmshmvxdwc2n
	](https://bsky.app/profile/annabower.bsky.social/post/3lmshmvxdwc2n)
- John Roddy:I'm half expecting the only remaining attornies to be Pam Bondi and Ed Martin wearing a fake mustache
- BentFranklin:Boasberg: Give Alien Enemies Act Detainees A Chance In Court Or Else Face Criminal Contempt
- [https://talkingpointsmemo.com/ne...
	https://talkingpointsmemo.com/news/boasberg-issues-criminal-contempt-finding-in-alien-enemies-act-case
	](https://talkingpointsmemo.com/news/boasberg-issues-criminal-contempt-finding-in-alien-enemies-act-case)
- tomacamot:[\[article\]
	https://www.csoonline.com/article/3963190/cve-program-faces-swift-end-after-dhs-fails-to-renew-contract-leaving-security-flaw-tracking-in-limbo.html
	](https://www.csoonline.com/article/3963190/cve-program-faces-swift-end-after-dhs-fails-to-renew-contract-leaving-security-flaw-tracking-in-limbo.html)
- John Roddy:Twitter announced they're renaming DMs to Xchat, which is a name that has gone completely unused until now.
- BlueSky also announced that they're renaming their DMs to mIRC.
- BentFranklin: [https://bsky.app/profile/meidast...
	https://bsky.app/profile/meidastouch.com/post/3lmxzi56ms22j](https://bsky.app/profile/meidastouch.com/post/3lmxzi56ms22j)
- [\[article\]
	https://www.thehandbasket.co/p/selfies-cecot-el-salvador-abu-ghraib
	](https://www.thehandbasket.co/p/selfies-cecot-el-salvador-abu-ghraib)
- Everyone's doing the Lynndie!
- John Roddy:Congratulations, Roberts. Hope you're proud of the DC Appeals judges using your decision to eliminate the first amendment
- Mike Masnick:Wait, did something happen? I'm still focused on the 4th Circuit
- Cathy Gellis:There was oral argument at the DC Circuit for the AP White House ban. I didn't think it was going well, but too soon to tell (and I was complaining before the AP got its turn to argue).
- John Roddy:Yeah, I was in the car trying to figure out why my dog was limping while also reading about the new legal developments when I saw that.
- The DOJ's paw is now very swollen and the court is angrily telling my dog that the respect for the law is hang on I'm confused
- Cathy Gellis:DOJE strikes again...
- candescence:The 4th circuit, meanwhile, is telling the DOJ to stop fucking around and trying to re-appeal what the Supreme Court already made pretty clear
- BentFranklin:What does "illegally entering Florida" even mean? Are we going to have customs at state boundaries? Going to Florida? Don't forget your passport!
- [\[article\]
	https://www.nbcnews.com/news/latino/us-born-citizen-detained-ice-immigration-florida-rcna201800
	](https://www.nbcnews.com/news/latino/us-born-citizen-detained-ice-immigration-florida-rcna201800)
- In other news, looks like Kilmar Abrego Garcia is alive after all
- [\[article\]
	https://www.nbcnews.com/politics/immigration/chris-van-hollen-meets-kilmar-abrego-garcia-el-salvador-rcna201830
	](https://www.nbcnews.com/politics/immigration/chris-van-hollen-meets-kilmar-abrego-garcia-el-salvador-rcna201830)
- I hope Senator Van Hollen explains to Nayib Bukele what happens to countries that falsely imprison American citizens (small countries in this hemisphere that aren't Russia or Iran).
- Leah Abram:In other \_other\_ news, Jessica Valenti promoted the latest Techdirt podcast episode on her \_Abortion Every Day\_ substack newsletter (it's at the end, and Jessica credits me in the process): [\[article\]
	https://jessica.substack.com/p/texas-is-building-a-210-million-anti
	](https://jessica.substack.com/p/texas-is-building-a-210-million-anti)
- Check this out, @Mike Masnick!
- Mike Masnick:Oh nice! Thanks!
- candescence:[\[article\]
	https://www.npr.org/2025/04/19/g-s1-61385/supreme-court-block-deportations
	](https://www.npr.org/2025/04/19/g-s1-61385/supreme-court-block-deportations)
- [https://bsky.app/profile/chrisge...
	https://bsky.app/profile/chrisgeidner.bsky.social/post/3ln5fyxkc7k2m
	](https://bsky.app/profile/chrisgeidner.bsky.social/post/3ln5fyxkc7k2m)
- The Supreme Court is definitely showing signs of losing its patience with Trump's bullshit
- They're either pissed off or \_very\_ alarmed by all of this considering how fast the courts are working
- [https://bsky.app/profile/mattjay...
	https://bsky.app/profile/mattjay.com/post/3ln2dgoksce2e
	](https://bsky.app/profile/mattjay.com/post/3ln2dgoksce2e)
- [https://bsky.app/profile/mattjay...
	https://bsky.app/profile/mattjay.com/post/3ln2djm5qrg2d
	](https://bsky.app/profile/mattjay.com/post/3ln2djm5qrg2d)
- DOGE is either colluding with Russia or deeply compromised by Russian hackers
- BentFranklin:The Stranger's Case, by AR Moxon
- [\[article\]
	https://www.the-reframe.com/the-strangers-case
	](https://www.the-reframe.com/the-strangers-case)
- [https://bsky.app/profile/chrisge...
	https://bsky.app/profile/chrisgeidner.bsky.social/post/3ln5eyxapfk2m
	](https://bsky.app/profile/chrisgeidner.bsky.social/post/3ln5eyxapfk2m)
- John Roddy:BREAKING: Supreme Court orders toothpaste to be returned to the tube immediately.
- BentFranklin:Pretty sure there were planes in Texas waiting to take off, and half sure they will anyway.
- candescence:I already posted it earlier, but yeah, it bears repeating considering the order was done past midnight
- It's legit buck wild
- [https://bsky.app/profile/joshger...
	https://bsky.app/profile/joshgerstein.bsky.social/post/3ln733szzzs2u
	](https://bsky.app/profile/joshgerstein.bsky.social/post/3ln733szzzs2u)
- So now we're in the "DOJ is throwing a tantrum" stage
- BentFranklin:In other dog murderer news:
- [https://bsky.app/profile/jamiega...
	https://bsky.app/profile/jamiegangel.bsky.social/post/3lnddzxt4h22z
	](https://bsky.app/profile/jamiegangel.bsky.social/post/3lnddzxt4h22z)
- John Roddy:Always fun when a new verification feature rolls out
- Now we can use the low numbers to accuse them of being biased!
- candescence:The Techlinked podcast had an interesting discussion about "AI", due to Jack Dorsey's "delete all IP law" tweet [https://youtu.be/ukYofhuBWEM?si=...
	https://youtu.be/ukYofhuBWEM?si=ymma6TKUZpNKbRpj
	](https://youtu.be/ukYofhuBWEM?si=ymma6TKUZpNKbRpj)
- Also it's the first I'm hearing of this "universal basic provision" nonsense being peddled by Microsoft AI CEO Mustafa Suleyman, like, what the actual fuck is he on about, it makes no sense whatsoever
- BentFranklin:Speaking of Microsoft and IP law...
- [\[link\]
	https://philiplaine.com/posts/getting-forked-by-microsoft/
	](https://philiplaine.com/posts/getting-forked-by-microsoft/)
- John Roddy:Anyone hear about New Jersey suing discord for not being perfect?
- [\[article\]
	https://www.njoag.gov/ag-platkin-sues-messaging-app-discord-for-unlawful-practices-that-expose-nj-kids-to-child-predators-and-violent-sexual-content/
	](https://www.njoag.gov/ag-platkin-sues-messaging-app-discord-for-unlawful-practices-that-expose-nj-kids-to-child-predators-and-violent-sexual-content/)
- candescence:[\[article\]
	https://discord.com/blog/passing-the-torch
	](https://discord.com/blog/passing-the-torch)
- Everyone's worried about Discord becoming enshittified
- BentFranklin:You Wouldn't Steal a Font
- [https://fedi.rib.gay/notes/a6xqi...
	https://fedi.rib.gay/notes/a6xqityngfubsz0f
	](https://fedi.rib.gay/notes/a6xqityngfubsz0f)
- Mike Masnick:Now that is fantastic
- BentFranklin:I want to know who was the \*second\* one to sign the universities' Call for Constructive Engagement
- [\[article\]
	https://www.aacu.org/newsroom/a-call-for-constructive-engagement
	](https://www.aacu.org/newsroom/a-call-for-constructive-engagement)
- Because the first follower is crucial:
- [\[video\]
	https://www.youtube.com/watch?v=PAFq0UjhwM4
	](https://www.youtube.com/watch?v=PAFq0UjhwM4)
- John Roddy:\*files trademark for SAD Cat\*
- Mike Masnick:Lol. You send that just moments after I sent @timothygeigner the grumpy cat story
- John Roddy:I'd been spending the morning trying to help Sarah find the correct docket (thanks for nothing, guardian)
- These guys file a new suit every month or so
- BentFranklin:Onion Pitchbot: Coincidental with thousands of women declining to be inseminated by Elon Musk, demand is skyrocketing for Luigi seed, which is creating lucrative opportunities those willing to roll up their sleeves.
- mechtheist:@Mike Masnick Hello Mike, have you seen ChatGPT is Bullshit? If so, what do you think? [https://link.springer.com/conten...
	https://link.springer.com/content/pdf/10.1007/s10676-024-09775-5.pdf](https://link.springer.com/content/pdf/10.1007/s10676-024-09775-5.pdf)
- BentFranklin:It might be a good idea to dust off some old Pam Bondi / Trump University articles to remind people of her corruption. I've met a couple people lately for whom this was news.
- I seem to recall her soul cost $25,000.00.
- Ah yes [\[article\]
	https://www.nytimes.com/2024/11/22/us/politics/pam-bondi-trump-university.html
	](https://www.nytimes.com/2024/11/22/us/politics/pam-bondi-trump-university.html)
- Mike Masnick:Someone had suggested that to me yesterday after my presidential chatgpt post was published, but i hadn't seen it before
- BentFranklin:Android will let you record phone calls now. I can't figure out if it's to train their AIs or for voice recognition and synthesis. Nah it must be precrime sentiment analysis! I don't really know, but I hope someone's looking into it.
- Leah Abram:@Mike Masnick relevant to our interests: [https://open.substack.com/pub/ze...
	https://open.substack.com/pub/zeteo/p/tech-billionaires-cozy-up-trump-backfired?r=1k9id&utm\_medium=ios
	](https://open.substack.com/pub/zeteo/p/tech-billionaires-cozy-up-trump-backfired?r=1k9id&utm_medium=ios)

Recent Stories

<table><tbody><tr><td colspan="2"><h2>Thursday</h2></td></tr><tr><td>09:30</td><td><a href="https://www.techdirt.com/2025/05/01/texas-lawyer-harassed-at-home-by-federal-agents-fired-by-his-employer-after-he-tells-his-story/">Texas Lawyer Harassed At Home By Federal Agents, Fired By His Employer After He Tells His Story</a> (8)</td></tr><tr><td>05:34</td><td><a href="https://www.techdirt.com/2025/05/01/brendan-carrs-fcc-abuses-run-face-first-into-trump-court-efforts-to-destroy-regulatory-power/">Brendan Carr's FCC Abuses Run Face First Into Trump Court Efforts To Destroy Regulatory Power</a> (6)</td></tr><tr><td colspan="2"><h2>Wednesday</h2></td></tr><tr><td>19:49</td><td><a href="https://www.techdirt.com/2025/04/30/trump-admin-freaks-out-over-report-amazon-planned-to-be-transparent-about-tariffs/">Trump Admin Freaks Out Over Report Amazon Planned To Be Transparent About Tariffs</a> (26)</td></tr><tr><td>15:34</td><td><a href="https://www.techdirt.com/2025/04/30/this-is-your-last-chance-to-get-a-copy-of-our-new-social-media-card-game/">This Is Your Last Chance To Get A Copy Of Our New Social Media Card Game</a> (0)</td></tr><tr><td>13:30</td><td><a href="https://www.techdirt.com/2025/04/30/techdirt-podcast-episode-416-how-tariffs-are-impacting-one-small-business/">Techdirt Podcast Episode 416: How Tariffs Are Impacting One Small Business</a> (0)</td></tr><tr><td>12:08</td><td><a href="https://www.techdirt.com/2025/04/30/cbs-folds-like-a-moist-flushable-towelette-in-response-to-baseless-trump-threats/">CBS Folds Like A Moist, Flushable Towelette In Response To Baseless Trump Threats</a> (18)</td></tr><tr><td>10:53</td><td><a href="https://www.techdirt.com/2025/04/30/free-speech-gop-threatened-billboard-company-to-remove-democrats-ads-about-medicaid-cuts/">‘Free Speech’ GOP Threatened Billboard Company To Remove Democrats’ Ads About Medicaid Cuts</a> (35)</td></tr><tr><td>10:48</td><td><a href="https://www.techdirt.com/2025/04/30/daily-deal-the-all-inclusive-adobe-cc-training-bundle-2/">Daily Deal: The All-Inclusive Adobe CC Training Bundle</a> (0)</td></tr><tr><td>09:28</td><td><a href="https://www.techdirt.com/2025/04/30/trump-executive-order-says-its-time-to-unleash-cops-turn-america-into-a-police-state/">Trump Executive Order Says It's Time To 'Unleash' Cops, Turn America Into A Police State</a> (22)</td></tr><tr><td>05:37</td><td><a href="https://www.techdirt.com/2025/04/30/google-kills-software-support-for-many-nest-users-eroding-trust-in-the-brand/">Google Kills Software Support For Many Nest Users, Eroding Trust In The Brand</a> (35)</td></tr></tbody></table>

## Summary:
We generally understand how LLM hallucinations work. An AI model tries to generate what seems like a plausible response to whatever you ask it, drawing on its training data to construct something that sounds right. The actual truth of the response is, at best, a secondary consideration. It does not involve facts. It does not…

---

*Source: [The Hallucinating ChatGPT Presidency](https://www.techdirt.com/2025/04/29/the-hallucinating-chatgpt-presidency/)*
