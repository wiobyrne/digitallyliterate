---
{"dg-publish":true,"permalink":"/01-consume/web-clippings/mcp-an-accidentally-universal-plugin-system/","title":"MCP: An (Accidentally) Universal Plugin System"}
---

# MCP An (Accidentally) Universal Plugin System
## Highlights


### List best points from this page
- Key findings and insights are clearly outlined.
- The methodology is robust and well-documented.
- Important statistics are presented, supporting the main arguments.
- Conclusions are drawn logically from the evidence provided.
- Relevant case studies or examples enhance understanding.

### List suggested tags

---
### Or: The Day My Toaster Started Taking Phone Calls

There's this thing about USB-C that nobody really talks about. Not the part where we all had to buy new dongles (RIP my dongle drawer, 2010-2023). The other part.

See, we all thought USB-C was just going to be about charging things and moving files around like the other USBs. Very serious. Very purposeful. But because of the way it is it can do... other things.

![](https://substackcdn.com/image/fetch/$s_!kwfs!)

My friend Rex connected his toaster to his monitor last week. I don't know why. The toaster doesn't know why. But it *worked*, and now Rex's toast has HDMI output.

## The Cigarette Lighter Principle

Remember car cigarette lighters? Nobody uses them for cigarettes anymore. They're just universal power outlets that happen to be shaped like something from 1952. Your car doesn't care if you're charging a phone or running a personal pizza oven. The hole is the same size. The power is there.

*The protocol doesn't judge your life choices.*

This brings me to something I discovered about MCP (Model Context Protocol) while trying to make my calendar app order takeout. Stay with me here.

## When Protocols Become Accidentally Universal

Everyone thinks MCP is for making AI assistants smarter. You know, "Claude, please read my files and understand my soul." And sure, it does that. But here's what they put in the documentation that made me spit out my morning tea:

> "MCP provides a standardized way to connect AI models to different data sources and tools."

Okay but. *But*. What if you just... removed the AI part?

What if it's just "a standardized way to connect ~~AI models~~ **literally anything** to different data sources and tools"?

![](https://worksonmymachine.substack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/ca785d13-391f-42fa-8109-7ae384ec5e99_1836x1203.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:954,%22width%22:1456,%22resizeWidth%22:null,%22bytes%22:554311,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:%22https://worksonmymachine.substack.com/i/166947463?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fca785d13-391f-42fa-8109-7ae384ec5e99_1836x1203.png%22,%22isProcessing%22:false,%22align%22:null,%22offset%22:false})

## The NFT Base64 Revelation

Or remember when someone looked at NFTs—which were supposed to just *point* at images—and thought "what if the pointer... WAS the image?"

![](https://worksonmymachine.substack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/77d811eb-b5b3-44be-9a9d-e88ba57c7b38_3072x1002.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:475,%22width%22:1456,%22resizeWidth%22:null,%22bytes%22:417583,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:%22https://worksonmymachine.substack.com/i/166947463?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77d811eb-b5b3-44be-9a9d-e88ba57c7b38_3072x1002.png%22,%22isProcessing%22:false,%22align%22:null,%22offset%22:false})

For those of you who don’t get the idea, copy and paste this into your url bar: data:application/json;base64,eyJuYW1lIjogIkJhZyAjNzQ4IiwgImRlc2NyaXB0aW9uIjogIkxvb3QgaXMgcmFuZG9taXplZCBhZHZlbnR1cmVyIGdlYXIgZ2VuZXJhdGVkIGFuZCBzdG9yZWQgb24gY2hhaW4uIFN0YXRzLCBpbWFnZXMsIGFuZCBvdGhlciBmdW5jdGlvbmFsaXR5IGFyZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgZm9yIG90aGVycyB0byBpbnRlcnByZXQuIEZlZWwgZnJlZSB0byB1c2UgTG9vdCBpbiBhbnkgd2F5IHlvdSB3YW50LiIsICJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSEJ5WlhObGNuWmxRWE53WldOMFVtRjBhVzg5SW5oTmFXNVpUV2x1SUcxbFpYUWlJSFpwWlhkQ2IzZzlJakFnTUNBek5UQWdNelV3SWo0OGMzUjViR1UrTG1KaGMyVWdleUJtYVd4c09pQjNhR2wwWlRzZ1ptOXVkQzFtWVcxcGJIazZJSE5sY21sbU95Qm1iMjUwTFhOcGVtVTZJREUwY0hnN0lIMDhMM04wZVd4bFBqeHlaV04wSUhkcFpIUm9QU0l4TURBbElpQm9aV2xuYUhROUlqRXdNQ1VpSUdacGJHdzlJbUpzWVdOcklpQXZQangwWlhoMElIZzlJakV3SWlCNVBTSXlNQ0lnWTJ4aGMzTTlJbUpoYzJVaVBsTm9iM0owSUZOM2IzSmtQQzkwWlhoMFBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJME1DSWdZMnhoYzNNOUltSmhjMlVpUGtScGRtbHVaU0JTYjJKbElHOW1JSFJvWlNCR2IzZzhMM1JsZUhRK1BIUmxlSFFnZUQwaU1UQWlJSGs5SWpZd0lpQmpiR0Z6Y3owaVltRnpaU0krU0c5dlpEd3ZkR1Y0ZEQ0OGRHVjRkQ0I0UFNJeE1DSWdlVDBpT0RBaUlHTnNZWE56UFNKaVlYTmxJajVRYkdGMFpXUWdRbVZzZER3dmRHVjRkRDQ4ZEdWNGRDQjRQU0l4TUNJZ2VUMGlNVEF3SWlCamJHRnpjejBpWW1GelpTSStSR2wyYVc1bElGTnNhWEJ3WlhKelBDOTBaWGgwUGp4MFpYaDBJSGc5SWpFd0lpQjVQU0l4TWpBaUlHTnNZWE56UFNKaVlYTmxJajVEYUdGcGJpQkhiRzkyWlhNOEwzUmxlSFErUEhSbGVIUWdlRDBpTVRBaUlIazlJakUwTUNJZ1kyeGhjM005SW1KaGMyVWlQazVsWTJ0c1lXTmxQQzkwWlhoMFBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJeE5qQWlJR05zWVhOelBTSmlZWE5sSWo1VWFYUmhibWwxYlNCU2FXNW5QQzkwWlhoMFBqd3ZjM1puUGc9PSJ9

The protocol meant for storing references became a protocol for storing reality. It's like using a library card as the actual book.

## The Network Effect Nobody Expected

Here's where it gets even better. The more MCP servers people build for AI, the more capabilities *every* app can have. It's like:

1. Someone builds an MCP server for their AI to access Spotify
2. Your workout app can now generate playlists
3. You didn't write any Spotify code
4. The Spotify MCP developer doesn't know your app exists
5. Everyone wins?

It's like a potluck where everyone brings their specialty dish, but instead of food, it's functionality. And instead of eating, you're... actually, this metaphor is falling apart. But you get it.

![](https://worksonmymachine.substack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/6fea5180-6f0c-4642-8a2f-9c2f6ab5e6ab_1980x1539.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:1132,%22width%22:1456,%22resizeWidth%22:null,%22bytes%22:629338,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:%22https://worksonmymachine.substack.com/i/166947463?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6fea5180-6f0c-4642-8a2f-9c2f6ab5e6ab_1980x1539.png%22,%22isProcessing%22:false,%22align%22:null,%22offset%22:false})

The beautiful chaos is that every MCP server built for Claude or ChatGPT or whatever becomes a free plugin for *anything* that speaks MCP. It's accidentally creating a universal plugin ecosystem. Nobody planned this (I don’t think). It's just happening.

## What USB-C Actually Means (A Meditation)

They keep saying MCP is like USB-C for AI. But what does that actually mean?

USB-C isn't special because it's a port. It's special because it's a *possibility space*. It's a hole that says "put something here and we'll figure it out." Power? Sure. Data? Why not. Video? Apparently yes. Toaster control protocols? Rex says absolutely.

MCP is the same thing but for functionality. It's not saying "I'm for AI." It's saying "I'm a well-designed hole. Put something here."

## The Part Where I Tell You I'm Building Something

So we’re building this thing called **APM** ([Actions Per Minute](https://actionsperminute.io/)). On paper, it's a task management app. In reality? It's a shape-shifter that becomes whatever you plug into it.

The entire plugin system? Just MCP servers.

Want spell check? MCP server.

Want it to order coffee when you complete 10 tasks? MCP server.

Want your AI agents to respond like peons from Warcraft 3 when you assign them a task? Of course you do, and that MCP server is already written and ready to use.

![](https://worksonmymachine.substack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/e3871464-0023-4b56-8235-fad217a9a232_3045x3018.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:1443,%22width%22:1456,%22resizeWidth%22:null,%22bytes%22:1310775,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:%22https://worksonmymachine.substack.com/i/166947463?img=https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3871464-0023-4b56-8235-fad217a9a232_3045x3018.png%22,%22isProcessing%22:false,%22align%22:null,%22offset%22:false})

## The Toaster Protocol Principle

Every great protocol gets used for something its creators never imagined:

- HTTP was for academic papers. Now it runs civilization.
- Bluetooth was for hands-free calling. Now it unlocks your front door.
- USB was for keyboards and mice. Now it charges your emotional support portable fan.

MCP thinks it's for giving context to AI models.

But really? It's just a really good protocol for making things talk to other things.

And in a world where Rex's toast has HDMI output, maybe that's exactly what we need.

\---

**P.S.** If you build an MCP server that makes your computer emit the smell of fresh bread, we need to talk.

**P.P.S.** We’ve just opened up early access for APM. Build something weird. Build something useful. Build something that makes us question our life choices. I believe in you.

*(Somewhere, a protocol is being used exactly as intended. This is deeply suspicious.)*

