---
{"dg-publish":true,"permalink":"/01-consume/web-clippings/the-texting-network-for-the-end-of-the-world/","title":"The Texting Network for the End of the World","tags":["meshtastic","lora","communication"]}
---

# The Texting Network for the End of the World
## Highlights

1. Meshtastic allows devices to send text messages over long distances without Wi-Fi or cell service, using Long Range Radio (LoRa) nodes.
2. The program is low-cost, open-source, and end-to-end encrypted for privacy.
3. Meshtastic can be used for communication in remote areas, during natural disasters, or in scenarios where internet access is restricted.
4. The system has a DIY ethos and a growing community of developers and users.
5. Meshtastic has limitations in terms of network range, technical capabilities, and bandwidth but continues to be developed for broader accessibility.


---
Hypothetical: You wake up tomorrow morning to find a superstorm that developed overnight thanks to climate change has sparked a chain of events that abruptly ushers in a new ice age and alters human society as we know it. (Yes, this is the plot of *The Day After Tomorrow*. Stick with us.) [All the communication networks you relied on are down](https://www.wired.com/story/sun-storm-end-civilization/). Your phone is basically worthless. The internet has functionally ceased to exist. But you need to connect with people you trust to get help and survive. What do you do? More importantly, how did you prepare?

Less Hollywood-esque versions of having no cell service or Wi-Fi happen all the time, of course; maybe you’re hiking in a secluded area, white-knuckling through a major natural disaster, or living under a repressive regime that [cuts internet access to quash public protests](https://www.wired.com/story/subvert-iran-internet-blackout/). Fortunately, for all these scenarios, there’s a low-budget solution: Meshtastic.

Meshtastic is a program that enables devices to send text messages over long distances without needing Wi-Fi or cell service. Long range radio (LoRa) nodes help pass messages along, forming a network of devices that can talk to each other even in remote areas. Messages hop from device to device, with each node relaying messages it hasn't seen before—extending the network’s reach across miles using minimal power. That is to say, Meshtastic is designed specifically for sending text messages over free-to-use radio frequencies to both groups and individuals, even when cell service and internet connections are nowhere to be found.

“The cool thing about Meshtastic is that it’s like a radio infrastructure without the infrastructure. It’s ad hoc,” says Eric Kristoff, a volunteer member of the Chicago chapter of the Mars Society, a nonprofit that advocates for the human exploration and colonization of Mars.

Kristoff says the group has been testing the use of Meshtastic as a way to give Mars Society “analog astronauts” the ability to communicate and keep track of each others’ locations without the use of earthly infrastructure.

“We have a set of Meshtastic T-Echo radios, about the size of a deck of cards, and they are worn on the person of the analog astronaut,” he says.

Photograph: Michael Tessier

Photograph: Michael Tessier

The radios that use Meshtastic cost roughly $30 (though you can spend two, three, or four times that if you want to). And because they operate over unlicensed radio frequencies on a network created by personal devices, they’re essentially free to use. Each message is end-to-end encrypted, ensuring privacy while it’s relayed through the network. And Meshtastic’s optional location-tracking capabilities give people a way to monitor their communities and keep tabs on their kids—or fellow analog astronauts—without using invasive, data-hungry apps.

Kristoff says that Mars Society members will take weeks-long excursions in remote areas with little cellular or Wi-Fi connectivity, which creates additional risks.

“There is heat stroke. We are two hours from the nearest hospital. If you go too far from the campus, it can get dangerous,” Kristoff says of the experience. “So anytime there’s a risk, the risk is made worse if people don’t know where you are.”

Most Meshtatic devices currently on the market need to pair with a phone over Bluetooth to function as a texting alternative. Some devices are just a radio, antenna, and battery, with the expectation that you’ll make the housing yourself. The radio does all the device-to-device communication, while the iOS and Android apps or the web client let you read and compose messages that are received or sent over the network—no service plan needed.

The apps also allow you to see the approximate location of nearby nodes and a map of the Meshtastic network. But fancier stand-alone devices are already available, like a line of Meshtastic-enabled gadgets from maker-friendly tech firm LilyGo that, in addition to the T-Echo model used by Mars Society members, includes [Blackberry-like handhelds](https://lilygo.cc/products/t-deck-plus-meshtastic) with their own keyboards, a [smartphone-like device with an e-paper screen](https://lilygo.cc/products/t5-e-paper-s3-pro), and even a [Meshtastic-enabled smartwatch](https://lilygo.cc/products/t-watch-s3-plus).

Meshtastic was created by [technologist Kevin Hester](https://www.hackster.io/punkgeek/meshtastic-a-hiking-skiing-gps-mesh-communicator-84f999) in early 2020 as a way to communicate while doing “any hobby where you don’t have reliable internet access,” and it remains a grassroots endeavor, with [established local communities](https://meshtastic.org/docs/community/local-groups/) spanning from Argentina to China that are ripe with a DIY ethos. The software itself is open source, meaning anyone can theoretically contribute, and [hundreds have](https://github.com/meshtastic/firmware). Still, as with many open source projects, a core group of volunteer developers helps maintain the Meshtastic firmware, mobile apps, and more.

Jonathan Bennett, a self-described “Linux guy” who upgraded Meshtastic to [stronger end-to-end encryption](https://meshtastic.org/docs/overview/encryption/) for direct messaging and keeps the software working on Linux, says he first got involved in the project after a listener of one his podcasts wanted a way to communicate with friends while attending a festival where the cell network could get overloaded.

“I put my open source enthusiast hat on and I went looking, and I came across Meshtastic,” he says. “And it immediately tickled my interest.”

Bennett says he ultimately connected with Garth Vander Houwen, a C# developer who wrote Meshtastic’s iOS app, and Ben Meadors, another C# developer who took on maintaining the Android app, web client, firmware, and other parts of the Meshtastic ecosystem after Hester needed to step back due to health issues.

Like Bennett, Vander Houwen and Meadors got involved with Meshtastic while looking for solutions to real-life problems. Vander Houwen, an iPhone user, says he found Meshtastic while on the hunt for a way to communicate as he hiked on remote trails in the Seattle area, just to find that it only had an Android app. He decided to write the iOS app himself. “So the fact that there was not an iOS app for Meshtastic was kind of how I got started,” he says, “and it's been a lot of fun.”

Meadors says he came to Meshtastic after a dangerous tornado hit his home state of Arkansas, causing major damage. “My kind of initial use case was honestly a backup communication for storm-related outages,” Meadors says. After taking part in the cleanup effort around Little Rock, he realized the value of a decentralized, off-grid communication network like Meshtastic. “It's just really handy to have anywhere where you’ve got a limited connection to the grid.”

None of which is to say you should throw your cell phone in the sea and go all-in on Meshtastic. At least not yet. First, getting into the world of LoRa remains a little bit technical, so if the idea of “flashing” your device with new firmware makes you instinctively pick up your phone to scroll TikTok, it might not be the hobby for you. Even if you are tech savvy, the system has some notable limitations.

Using the decentralized mesh network requires having your Meshtastic device in range of at least one other radio; obstructions like buildings, trees, and hills or mountains can prevent the line-of-sight communication needed to join the mesh network. This means it may only be reliable when there’s a variety of other Meshtastic nodes in the area.

Next is what Meadors calls the “narrowness” of the network’s technical capabilities. “One of the most frequent things that we get is, ‘Can I replace the internet with this?’ No, no you cannot,” he says. “You can send text messages.” Mercifully, that does include emoji.

Photograph: Michael Tessier

This may be obvious, but you also need to have a network set up before disaster hits, Meadors says. So, set up anyone who you might need to communicate with during a cell and internet blackout before it actually happens. And, due to relatively frequent firmware updates, you can’t just toss your device in a bug-out bag and forget about it. But “if it's something that you actually use, like if you pull it out and use it once a month, you'll be good to go,” Bennett says.

Then there’s the issue of raw bandwidth. This limitation can cause issues when a lot of people are trying to use the network at the same time. At a ham radio convention in Dayton, Ohio, last year (yes, it’s called Hamvention), the Meshtastic network crashed after someone ran a program that flooded the network with additional traffic, pushing the Meshtastic network to its limits.

“Because literally one person turned on this MQTT bridge, which then joined the rest of us into this mesh in a metal building in Dayton, it crashed the whole mesh immediately,” Vander Houwen says.

After this incident, Vander Houwen, Bennett, and Meadors went to work to prepare for the upcoming in Las Vegas, ultimately releasing a special firmware for the much larger event that Vander Houwen estimates allows “somewhere between 2,000 and 2,500 nodes” to operate on the network simultaneously. A [similar firmware](https://hamvention.meshtastic.org/) released ahead of the 2025 Hamvention in May [drew praise](https://www.reddit.com/r/meshtastic/comments/1kqal5h/shout_out_to_the_meshtastic_dev_team_hamvention/) from the community.

Despite Meshtastic’s limitations, its promise as a backup communication system—and the sheer fun you can have with it—continues to pull in new enthusiasts. The Android app alone has drawn thousands of reviews, and the [Meshtastic subreddit](https://www.reddit.com/r/meshtastic/) has grown to nearly 50,000 members. Some municipalities are even hoping to [launch Meshtastic networks](https://www.wtxl.com/news/local-news/in-your-neighborhood/monticello/monticello-council-considers-new-emergency-communication-system-proposal) to help protect their communities in the event of natural disasters.

For Bennett, Meadors, and Vander Houwen, they’re excited to not just see the number of Meshtastic nodes increase, but to see the technology develop into something anyone can use without having to become an enthusiast or “analog astronaut” at all.

“I think the biggest thing for me too is that it’s not just accessible from the aspect of the hardware being available to more people. I want to make the software more accessible,” Meadors says. “I want to make the experience such that I can hand this device to anybody and have them download the app and start messaging. We've come a long way. I think there's still some room to grow there.”



### List suggested tags
- Meshtastic
- Communication
- Emergency Preparedness
- Technology
- LoRa
- End-to-end Encryption