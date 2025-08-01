---
{"dg-publish":true,"permalink":"/01-consume/web-clippings/cyberspace-crypto-anarchy-and-pushing-limits/","title":"Cyberspace, Crypto Anarchy, and Pushing Limits"}
---

# Cyberspace, Crypto Anarchy, and Pushing Limits

This message from Timothy C. May delves into the topics of cyberspace, crypto anarchy, and pushing limits in the digital realm. He discusses the importance of examining the absolute limits of what is possible without regard for engineering practicalities, drawing parallels to Kip Thorne's work on black holes and space warps.

May highlights the need for payment systems for message transmission to address issues like mailbombing and flooding, emphasizing the concept of "pay as you go" as a natural way to handle economic transactions in cyberspace. He also discusses the implications of strong crypto, digital money, and ideal remailers, stressing the importance of developing anonymous or identity-obscuring protocols.

The message touches on the idea that cyberspace is infinitely colonizable with no limits to growth, and that strong crypto serves as the building material of this digital frontier. May envisions a future where physical location of cyberspace locations will be increasingly hard to pin down, leading to a decentralized and locally controllable virtual landscape.

Overall, May advocates for taking a longer-range view of inevitable trends in cyberspace and encourages further discussion on these complex and evolving topics.

---

```
Subject: Cyberspace, Crypto Anarchy, and Pushing Limits
From: tcmay@netcom.com (Timothy C. May)
To: cypherpunks@toad.com
Date: Sun, 3 Apr 1994 19:16:49 -0700 (PDT)
Cc: tcmay@netcom.com (Timothy C. May)
```

This messages touches on two topics of recent interest (to some) here:

1. Setting up payment systems for message transmission, to handle the issues of “mailbombing” and “flooding” in a more natural way (locality of reference, user of a service pays, avoidance of the “Morris Worm” explosion effects which could’ve happened with Detweiler bombed us, as Hal noted).
2. The general issue of “Cyberspace.” This lies at the root of some recent disagreements here, and is worthy of more discussion. Crypto will make this a very real cusp issue in the next several years.

Why debate it now? What could possibly come out of such a debate?

It happens that I’m reading a wonderful new book by Kip Thorne, entitled “Black Holes and Space Warps.” This is widely available in bookstores, in hardback only at this time. (30, but it’s a whopping big book, and I got it at Barnes and Noble for 24\. Speaking of Barnes and Noble, the Santa Clara store is selling Li and Vitanyi’s “Intro. to Kolmogorov Complexity” book for 44, before the 20% hardback discount, which may be a mispricingm, as I paid 60 for mine. Check it out if you’re interested…I think there were two copies.)

Thorne has spent 30 years studying gravitational collapse and black holes, and was a coauthor of the famed 1973 book on “Gravitation,” which I got to use in a Xeroxed form for my general relativity class in 1973.

The point? Thorne describes his involvement with Carl Sagan in working out the physics of time travel via wormholes. Thorne had an epiphany: however unlikely the engineering or financing of something is, there is something valuable to be gained in examining the absolute limits of what is possible without regard for engineering practicalities. Thus, he and his students looked into the implications of an extremely advanced civilization able to somehow hold open the mouth of a wormhole. The conclusions are fascinating and led to a new line of thinking about the structure of space-time.

Pushing limits and seeing “ideal” behavior is invigorating.

The connection to crypto is this: Perhaps we should be thinking more about the implicaitons and effects of strong crypto, digital money, ideal remailers, etc., assuming that certain practical problems that bedevil us today are, or soon will be, solved. To some extent we already do this, as when we discuss Chaum’s ideal mixes in the same way engineer’s discuss ideal op amps—a useful abstraction of behavior in the limit that lesser, real world implementations can then be contrasted with.

And of course many of us have found Vernor Vinge’s “True Names” to be an excellent (and quickly readable) treatment of how things could work in a world of fast, cheap, and secure communication. Other writers have seen things differently (e.g., “Shockwave Rider,” “1984,” “Snow Crash”).

Here, to cut to the chase, are some brief statements of what I see as the “behavior in the limits.” I won’t elaborate on them right now.

- “Pay as you go” is the natural way to handle most economic transactions. There are exceptions, of course, such as insurance, contracts for future perfomance, etc., but for the most part money is used to mediate immediate exchanges. For a timely example, why can your enemies not “junk mail bomb” you with truly large (tons) of junk mail? Junk mail, as we call it, is in relatively small volumes (at most a mailbox full, except for celebrities perhaps) because of one simple thing: someone has to pay for the delivery! There is no possibility of a “free” way to “Make 19 copies of this ton of garbabe and mail them to your enemies.” That there is with software—the remailer bombing by Detweiler, the 1988 Morris Worm, the “Dave Rhodes” chain letters—is due to some flaws in the current Net model:
	- costs of message trasnmission are not directly borne by senders (encourage overuse by some of scarce resources, a la the “tragedy of the commons”).
	- sites and remailers will respond to “instructions” to send the message on, to make copies of it, etc.
- I thus consider it imperative that we develop as quickly as we can the following:
	- payment systems for message transmission (I’ve argued for “digital postage” as a first and comparatively easy application of digital money, others have as well, and Ray Cromwell just today issued his own proposal…time we get going on this. And lest you think I’m calling for altruism here, I think some fortunes will be made in this area.)
	- anonymous or identity-obscuring protocols, a la Chaum.
	- a general move away from “commons”-oriented systems, which breed the notions of “fair access” and such. If the “problem” is that poor people cannot—it is alleged—afford a $17 a month Net connection (what Netcom charges, in about 25 cities and growing), then my solution would be to simply *subsidize* their bill. (I’m not advocating this, nor do I think it wise to subsidize anyone’s phone, Net, or dinner bills, but better this than “nationalizing” networks and thus creating more confusion and less efficiency for all.)
- Connectivity will be altered dramatically, The “distance” in cyberspace is already uncorrelated to physical distance. (Hardly surprising, as this was apparent with the telephone. But a useful way of looking at cyberspace, as being a space of radically altered connectivities and distances.)
	- Local access to service, the phone or cable lines that reach the home or office, is a potential bottleneck. But once a connection is made to a local node where multiple competitors exist (that is, once beyond the local government-granted monopoly), the possibility of “censorship” decreases rapidly, for several reasons.
		- thus, push for “encrypted access” lines from a terminal node (home, office) to a point with unlimited connectivity.
		- this is the situation I now have with my PacBell line and Netcom: PacBell doesn’t “care” what I use the local line for, and once outside, I can dial a less-censorious Netcom rather than a Big Brotherish AOL or Prodigy.
- Cyberspace is infinitely colonizable. No limits to growth. (Assumption: realization of cyberspace is on various machines and networks, which are not free, nor infinite. But the “no limits” comes from ease with which those near a “boundary” can simply push out that boundary with more CPU resource, more networks, etc.).
- Crypto means access to “regions” can be controlled by “owners”:
	- “my house, my rules” enforced locally, without central State authority
	- essentially unbreakable security (in crypto sense)
- By the way, strong crypto is the “building material” of cyberspace…the mortar, the bricks, the support beams, the walls. Nothing else can provide the “permanence”…without crypto, the walls are subject to collapse at the first touch by a malicious person or agency. With crypto, not even a 100 megaton H-bomb can breach the walls.
	(If you think I’m exaggerating, do some calculations on the energy to break a 1000-decimal-digit modulus.)
- No “zoning laws” will be needed, or possible, in cyberspace. (Neil Stephenson’s “Snow Crash,” while a wonderful and thought-provoking read, got it wrong here: cyberspace is too extensible and locally controllable.)
- Physical location of cyberspace locations will be increasingly hard to pin down. A vast “labyrinth of rooms and corridors” might be physically instantiated on a computer in Malaysia, while a “virtual gambling hall” is being run via cryptographic cutouts (remailers) from someone’s bedroom in Provo, Utah.
- The talk about “access rules” is thus shown to be meaningless, unless the governments crack down on networks, crypto, and private systems in a way far beyond anything now being talked about.

This is the “crypto anarchy” I have been writing about since 1988. Cyberspace will turn out to be a far vaster frontier than *anything* we have seen so far. With “only” 10^70 or so particles in the entire universe, there’s vastly more “space” (address space, key space, etc.) in even a relatively small set of digits. Cyberspace is mathematical space, and its spaciousness is truly unlimited.

And we’ll be moving our trade, our entertainment, and much of our lives into cyberspace a whole lot faster than we’ll be slowly moving into low Earth orbit and beyond. In fact, I consider that I’m already half-way in. In a few years, with Mosaic-like one-touch connectivity, with a plethora of network choices, with secure remailers and similar tools to anonymize my transactions, I’ll be so far in there’ll be turning back.

Enough for these remarks right now. I think it makes sense to take a slightly longer-range view of the inevitable trends, to see where we’re going, to see what issues need more work.

I hope some of you agree with me.

—Tim May



