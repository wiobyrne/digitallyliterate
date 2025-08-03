---
{"dg-publish":true,"permalink":"/01-consume/web-clippings/she-won-they-didn-t-just-change-the-machines-they-rewired-the-election/","title":"She Won. They Didn't Just Change the Machines. They Rewired the Election."}
---

# She Won. They Didn't Just Change the Machines. They Rewired the Election.

### Highlights

- **Key Argument:** The main thesis of the article is centered around how the 2024 election was tampered with through a series of technological manipulations involving key players like Eaton, Palantir, Elon Musk, and others.
- **Evidence:** The author supports their claims with a detailed timeline of events, partnerships between tech companies, and specific technological vulnerabilities that were exploited to manipulate the election outcome.
- **Implications:** The findings suggest that the election results were not reflective of genuine voter behavior and raise serious concerns about the integrity of the democratic process.
- **Recommendations:** The article provides recommendations for state attorneys general and investigators to conduct audits, subpoena communications, and take other actions to ensure transparency and accountability in future elections.
- **Conclusion:** The author concludes by urging readers to take action against potential election fraud and emphasizes the need for courage in upholding constitutional values.

### Suggested Tags
- Election Fraud
- Technology Manipulation
- Voter Integrity
- Tech Giants
- Election Security

---
### How Leonard Leo's 2021 sale of an electronics firm enabled tech giants to subvert the 2024 election.

**The Dark Enlightenment Coup**

The missing votes uncovered in [Smart Elections’ legal case](https://apnews.com/press-release/access-newswire/diane-sare-kamala-harris-kamala-harris-es-kirsten-gillibrand-new-hampshire-225173eaaf66b420844508516b365caf?utm_source=copy&utm_medium=share) in Rockland County, New York, are just the tip of the iceberg—an iceberg that extends across the swing states and into Texas.

On Monday, an [investigator’s story](https://dissentinbloom.substack.com/p/the-machines-were-changed-before) *finally* hit the news cycle: Pro V&V, one of only two federally accredited testing labs, approved sweeping last-minute updates to ES&S voting machines in the months leading up to the 2024 election—without independent testing, public disclosure, or full certification review.  
These changes were labeled “de minimis”—a term meant for trivial tweaks. But they touched ballot scanners, altered reporting software, and modified audit files—yet were all rubber-stamped with no oversight.  
  
That revelation is a shock to the public.  
But for those [who’ve been digging](https://thecommoncoalition.com/report/) into the bizarre election data since November, this isn’t the headline—it’s the final piece to the puzzle. While Pro V&V was quietly updating equipment in plain sight, a parallel operation was unfolding behind the curtain—between tech giants and Donald Trump.  

And it started with a long forgotten sale.

![](https://substackcdn.com/image/fetch/$s_!6jS7!)

**A Power Cord Becomes a Backdoor**

In March 2021, Leonard Leo—the judicial kingmaker behind the modern conservative legal machine—sold a quiet Chicago company by the name of Tripp Lite for $1.65 billion. The buyer: Eaton Corporation, a global power infrastructure conglomerate that just happened to have a partnership with Peter Thiel’s Palantir.

  
To most, Tripp Lite was just a hardware brand—battery backups, surge protectors, power strips. But in America’s elections, Tripp Lite devices were something else entirely.

They are physically connected to ES&S central tabulators and Electionware servers, and Dominion tabulators and central servers across the country. And they aren’t dumb devices. They are smart UPS units—programmable, updatable, and capable of communicating directly with the election system via USB, serial port, or Ethernet.  

ES&S systems, including central tabulators and Electionware servers, rely on Tripp Lite UPS devices. ES&S’s Electionware suite runs on Windows OS, which automatically trusts connected UPS hardware.

**If Eaton pushed an update to those UPS units, it could have gained root-level access to the host tabulation environment—without ever modifying certified election software.**  

In Dominion’s Democracy Suite 5.17, the drivers for these UPS units are listed as “optional”—meaning **they can be updated remotely without triggering certification requirements or oversight.** Optional means unregulated. Unregulated means invisible. *And invisible means perfect for infiltration.*

![](https://substackcdn.com/image/fetch/$s_!YcfN!)

**A New Purpose for the Partnership**

After the Tripp Lite acquisition, Eaton stayed under the radar. But in May 2024, it resurfaced with an announcement that escaped most headlines: Eaton was [deepening its partnership](https://www.eaton.com/us/en-us/company/news-insights/news-releases/2024/eaton-deepens-partnership-with-palantir-to-enhance-ai-use.html#:~:text=DUBLIN%20AND%20DENVER%2C%20May%2029,\(AIP\)%20to%20Eaton's%20operations.) with Palantir Technologies.  
  
Let’s be clear, Palantir wasn’t brought in for customer service. It was brought in to do what it does best: manage, shape, and secure vast streams of data—quietly. According to Eaton’s own release, Palantir’s role would include:  
\- AI-driven oversight of connected infrastructure  
\- Automated analysis of large datasets  
\- And—most critically—“secure erasure of digital footprints”  
  
The Digital Janitor:also known as forensic sanitization, it was now being embedded into Eaton-managed hardware connected directly to voting systems. Palantir didn’t change the votes. *It helped ensure you’d never prove it if someone else did.*

![](https://substackcdn.com/image/fetch/$s_!P2oj!)

**BallotProof: The Front-End for Scrubbing Democracy**

Enter the ballot scrubbing platform [BallotProof.](https://substack.com/home/post/p-158825637) Co-created by Ethan Shaotran, a longtime employee of Elon Musk and current DOGE employee, BallotProof was pitched as a transparency solution—an app to “verify” scanned ballot images and support election integrity.

With Palantir's AI controlling the backend, and BallotProof cleaning the front, only one thing was missing: the signal to go live.

**September 2024: Eaton and Musk Make It Official**

Then came the final public breadcrumb:  
In September 2024, Eaton [formally partnered](https://www.eaton.com/us/en-us/company/news-insights/news-releases/2024/eaton-launches-collaboration-with-tesla.html) with Elon Musk.  
The stated purpose? A vague, forward-looking collaboration focused on “grid resilience” and “next-generation communications.”  
But buried in the partnership documents was this line:

> *“Exploring integration with Starlink's emerging low-orbit DTC infrastructure for secure operational continuity.”*

**The Activation: Starlink Goes Direct-to-Cell**

That signal came on October 30, 2024—just days before the election, Musk [activated](https://www.rfsafe.com/spacex-starlinks-direct-to-cell-service-a-game-changer-in-global-connectivity/) 265 brand new low Earth orbit (LEO) V2 Mini satellites, each equipped with Direct-to-Cell (DTC) technology capable of processing, routing, and manipulating real-time data, including voting data, through his satellite network.  
  
DTC doesn’t require routers, towers, or a traditional SIM. It connects directly from satellite to any compatible device—including embedded modems in “air-gapped” voting systems, smart UPS units, or unsecured auxiliary hardware.  
  
From that moment on:  
\- Commands could be sent from orbit  
\- Patch delivery became invisible to domestic monitors  
\- Compromised devices could be triggered remotely

**This groundbreaking project that should have taken two-plus years to build, was completed in just under ten months.**

Elon Musk boasts endlessly about everything he’s launching, building, buying—or even just thinking about—whether it’s real or not. But he pulls off one of the largest and fastest technological feats in modern day history… and says nothing? One might think that was kind of… “weird.”

![](https://substackcdn.com/image/fetch/$s_!-7-8!)

**Lasers From Space**

According to *[New York Times](https://www.nytimes.com/2025/05/30/us/elon-musk-drugs-children-trump.html)* [reporting,](https://www.nytimes.com/2025/05/30/us/elon-musk-drugs-children-trump.html) on October 5—just before Starlink’s DTC activation—Musk texted a confidant:

> *“I’m feeling more optimistic after tonight. Tomorrow we unleash the anomaly in the matrix.”*
> 
> Then, an hour later:
> 
> *“This isn’t something on the chessboard, so they’ll be quite surprised. **‘Lasers’ from space.”***

It read like a riddle. In hindsight, it was a blueprint.

Let’s review what was in place:

![](https://substackcdn.com/image/fetch/$s_!VwMW!)

**This wasn’t a theory. It was a full-scale operation. A systemic digital occupation—clean, credentialed, and remote-controlled.**

![](https://substackcdn.com/image/fetch/$s_!1r63!)

![](https://substackcdn.com/image/fetch/$s_!_om3!)

**The Outcome**

Data that makes [no statistical sense.](https://bsky.app/profile/electiontruth.bsky.social) A clean sweep in all seven swing states.  
The fall of the Blue Wall. Eighty-eight counties flipped red— *not one* flipped blue.  
Every victory landed just under the threshold that would trigger an automatic recount. Donald Trump outperformed expectations in down-ballot races with margins never before seen—while Kamala Harris simultaneously underperformed *in those exact same areas.*

**If one were to accept these results at face value—Donald Trump, a 34-count convicted felon, supposedly outperformed Ronald Reagan.** According to the co-founder of the Election Truth Alliance:

> *“These anomalies didn’t happen nationwide. They didn’t even happen across all voting methods—this just doesn’t reflect human voting behavior.”*

They were concentrated.  
Targeted.  
**Specific to swing states and Texas—and specific to Election Day voting.**

And the supposed explanation? “Her policies were unpopular.”

Let’s think this through logically. We’re supposed to believe that in all the [battleground states](https://smartelections.us/dropoff#e1654582-c3af-468b-83ae-0a310a1a609f), Democratic voters were so disillusioned by Vice President Harris’s platform that they voted *blue down ballot* —but flipped to Trump at the top of the ticket?

Not in early voting.  
Not by mail.  
With exception to Nevada, only on Election Day.  
And only *after* a certain threshold of ballots had been cast—where VP Harris’s numbers begin to diverge from her own party, and Trump’s suddenly begin to surge. As President Biden would say, “C’mon, man.”

In the world of election data analysis, there’s a term for that: **[vote-flipping algorithm.](https://youtu.be/AWSWqn7UHYM?si=yUjGZXAezM83jZZD)**

![](https://substackcdn.com/image/fetch/$s_!UksR!)

**Billionaires and Tech Giants Pulled Off the Crime of the Century**

Why? There wasn’t just one reason—there were many.

Elon Musk himself [hinted at the stakes:](https://www.youtube.com/watch?v=k89aYdZOC_I) he faced the real possibility of a prison sentence if Trump lost. He launched his bid for Twitter—at $20 billion over market value—just 49 days after Putin invaded Ukraine. **That alone should have raised every red flag.** But when the ROI is $15 trillion in mineral rights tied to Ukraine losing the war and geopolitical deals Trump could green light, it wasn’t a loss—it was leverage.

It’s no secret Musk was in [communication with Putin](https://apnews.com/article/musk-putin-x-trump-tesla-election-russia-9cecb7cb0f23ccce49336771280ae179) for over two years. He even granted [Starlink access](https://www.reuters.com/world/europe/russia-using-thousands-spacex-starlink-terminals-ukraine-wsj-says-2024-02-15/) to Russian forces. That’s not just profiteering. *That’s treason.*

Then there’s Peter Thiel and the so-called “broligarchs”—tech billionaires who worship at the altar of shower-avoidant blogger Curtis Yarvin. They casually joke about *“humane genocide for non-producers”* and have long viewed [democracy as a nuisance](https://www.theguardian.com/technology/2016/jul/21/peter-thiel-republican-convention-speech) —an obstacle to their vision of hypercapitalism and themselves as the permanent ruling elite.

Well, what is the elimination of Medicaid if not *“humane genocide”* —and does anyone really wonder why his 40-year-old protégé and political rookie, JD Vance, is Vice President? With this technology in place, if the third-term legislation were to pass, it would hand Vance a minimum of twelve years at the helm of Thiel’s regime.

And of course, Donald Trump himself:  
He spent a year telling his followers he didn’t need their votes— [at one point stating](https://www.reuters.com/world/us/trump-tells-christians-they-wont-have-vote-after-this-election-2024-07-27/),

> *“...in four years, you don't have to vote again. We'll have it fixed so good, you're not gonna have to vote.”*

Trump was facing [eighty-eight felony indictments](https://www.citizensforethics.org/reports-investigations/crew-reports/trumps-91-criminal-charges-and-where-they-stand/) —he was desperate to avoid conviction and locked in a decades-long alliance with Vladimir Putin. An alliance that’s now impossible to ignore—look no further than his policy trail.

He [froze aid to Ukraine](https://apnews.com/article/trump-zelenskyy-russia-ukraine-a15a459c9a3a393d040478ebbe250a9e) and has threatened to place sanctions *on* *them*, while planning to lift sanctions *off* Russia. He openly campaigned for anti-EU candidates, and sided with Russia in multiple key United Nations [votes](https://apnews.com/article/un-russia-ukraine-war-resolution-trump-zelenskyy-cde221e5850196776525403e788c272c) related to the Ukraine conflict.

Let’s be clear:  
Donald Trump pledges allegiance to a red, white, and blue flag—  
**It’s just not the American one.**

**What Happens Now?**

**We don’t need permission to enforce the Constitution.** We need *courage.* While state attorneys general begin their investigations, it only takes *one* U.S. senator to initiate the disqualification proceedings against the unelected and unfit occupant of the Oval Office.

**Action Item:**

The ETA has confirmed **at least 111,000 malevolent anomalies** in Pennsylvania’s 2024 election data. Sign the [petition](https://www.change.org/p/demand-a-hand-count-audit-of-pennsylvania-s-2024-presidential-election) demanding a hand-count audit.

**State Attorneys General and Investigators:**  
\- Conduct independent audits of UPS firmware on Dominion and ES&S machines  
\- Subpoena communications between Eaton, Palantir, Starlink employees, and Pro V&V  
\- Audit Starlink satellite logs for the week of the election  
\- Freeze uncertified infrastructure updates  
\- Recount physical ballots— *by hand*

Now they’re rolling out the same technological toolkit abroad—forcing countries into Starlink contracts in exchange for tariff relief.

**The U.S. election wasn’t their endgame. It was their litmus test.**


