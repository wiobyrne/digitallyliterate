---
{"dg-publish":true,"permalink":"/01-consume/videos/the-accidental-ai-canvas-with-steve-ruiz-of-tldraw/","title":"The Accidental AI Canvas - with Steve Ruiz of tldraw"}
---

# The Accidental AI Canvas - with Steve Ruiz of tldraw

![The Accidental AI Canvas - with Steve Ruiz of tldraw](https://www.youtube.com/watch?v=0iZdmGmk3sQ)

how might this be used in my research, teaching, and knowledge management?

In this podcast episode, Steve Ruiz, the founder of tldraw, discusses the usage and importance of The Accidental AI Canvas in various fields like research, teaching, and knowledge management. 

1. Research: The Accidental AI Canvas is a tool that can help in structuring and visualizing complex research data. It can assist researchers in understanding the underlying patterns and correlations within their data. This tool could also aid in communicating findings more effectively to stakeholders or the public. 

2. Teaching: In an educational setting, The Accidental AI Canvas can serve as a helpful tool for teachers to explain complex concepts to students by simplifying them into easily understandable visual representations. It can be used to foster active learning and encourage students to participate more fully in classroom discussions.

3. Knowledge Management: For knowledge management purposes, this tool can be used to map out organizational knowledge structures and identify gaps or areas for improvement. It can also be employed for planning strategies to manage intellectual capital within an organization.

Ruiz emphasizes that while The Accidental AI Canvas is a powerful tool for visualization and understanding complex systems, it should not replace human judgement and critical thinking skills. He suggests using it as a complement to existing tools or methods rather than as a standalone solution.

## Description

At the first AI Engineer Summit in October, Logan (our first guest!) declared this the Year of Multimodality. Over the next 2 months we saw an explosion of activity in multimodal: GPT-4V’s API release at OpenAI Dev Day (our coverage here), LLaVA (our chat with author here on Visual Instruction Tuning), BakLLaVA, Qwen-VL, CogVLM, etc.

On today’s episode we have Steve Ruiz, founder of tldraw. The project originally started as an open source whiteboard that Steve built for himself and then “accidentally made a really, really good visual multimodal prompting application environment”. Turns out that infinite canvas and generative models are a very good match:

Design is iterative: DALL-E, Midjourney, etc all work in a linear way: prompt goes in, 1-4 images come back. As you generate more, the previous images scroll away from your view. In a canvas environment, you can see the progression of your generation and visually “branch” by putting new prompts in different spaces.

UI has “layers”: when designing interfaces there are different layers to it: the functionality, the style, the state, etc. Some of what they are building in tldraw is bringing images into the canvas to influence different layers: “One thing that we've done is to bring in screenshots of other apps, like here's Stripe.com, like make it look like Stripe, you know? Or like here's Linear.com, like let's do it this way”.

In the episode we spend a lot more time talking through all of these ideas and how Steve’s background in fine arts came back to being really useful in building a multi-modal AI canvas. Enjoy!

  Timestamps: (will be off because this is for audio timestamps)

[00:00:00] Introductions
[00:01:02] Steve's Background In Fine Arts and Transition into Tech
[00:08:22] The creation of tldraw and its open source origin
[00:15:44] The Inception and Growth of tldraw
[00:18:40] The Integration of AI with tldraw and Make It Real Feature
[00:21:56] Discussion on Multimodal Prompting and Iterative Design
[00:32:32] The Concept of Parallel Prompting in Design
[00:34:11] Impact of AI on developer jobs
[00:37:28] Additional Layers in Multimodal Prompting
[00:45:18] Introduction of DrawFast and Lens Projects
[00:50:03] tldraw 2.0 and the future of the project
[00:55:41] The Competitive Landscape of Canvas Tools and tldraw's Unique Position
[01:00:22] Advice for Founders: Following Your Interests and Desires

## Notes

## Transcript

## Introductions

  0: 00

welcome back to Laton space I'm very excited to have my good friend Steve Ruiz uh Hol this morning or hey how's it

  0: 08

going evening for me but yeah evening for you well thanks for staying up um I

  0: 14

have had the Good Fortune of knowing you before you got famous and actually hanging out in uh

  0: 20

the precise uh office and Studio that you're recording from right now congrats on Make It Real congrats on T draw uh I

  0: 26

you know I think it's been something that's sort of years into making but it's probably looks like overnight success to a lot of

  0: 33

people yeah thank you I uh yeah it's kind of a funny story um I don't know

  0: 39

where where where should we jump into it well I like to people give you a little background on on the on the person um

  0: 46

you don't have a lot of detail LinkedIn just like myself um we I just found out just before recording that you're also a

  0: 53

late entrance into Tech uh so maybe just like you know what's your background coming into something like ta draw um

  0: 59

what makes you uh so unique at at doing sort of creative collaborative experiences like um you know I've I know

## Steve's Background In Fine Arts and Transition into Tech

  1: 07

you and I've I've uh I've actually used y draw so um I have some appreciation for how hard this thing is like you said

  1: 13

I kind of came into this a little late and kind of came into it from a a weird angle I uh my background is actually in

  1: 18

in like Fine Art in studio art so um I have my masters from University of Chicago and visual art and um would

  1: 26

write about Contemporary Art and and you know put together exhibitions and do my own paintings and drawings um and that

  1: 33

was back when I was living in Chicago um and then when I moved over to

  1: 38

the UK kind of you know got a new studio kept that going but when I turned 30 I kind of decided I should probably make

  1: 45

some make some money uh and and kind of work with other people closer than I was

  1: 51

at the time studio art is primarily a solo thing um I'd always had kind of

  1: 57

like an analytical background or kind of side to me my day jobs were you know I was working for lawyers I was doing this

  2: 03

writing um like magazines and stuff um and so when I when I did that kind of

  2: 11

that switch back um eventually to to design and to product design um it uh I

  2: 18

was also able to use a little bit of tech like a tiny little bit of technical skill that I had had just building like

  2: 23

WordPress websites for myself and other artists as as portfolios um kind of take that and and just some Natural Curiosity

  2: 30

around the way that that products work um and kind of create a a career direction that was more around

  2: 37

prototyping and like technical design and doing that um kind of like doing the

  2: 42

design on the bits of a product that that really couldn't be designed otherwise um so the the interactive bits

  2: 49

the the the bits which are um maybe more um there's more questions about

  2: 56

them there's no clear answer ter terms of like how should this work you know in all those places you kind of have to

  3: 02

build something um in order to to figure out what you want to build um it turns

  3: 07

out you know to to skip right to the end for a moment like uh canvas is just full of those types of problems so it's no

  3: 13

surprise that I ended up there as like kind of an extreme form of the same problem uh but yeah so I was working

  3: 19

this was back in like 2017 2018 and uh I used at the time a product

  3: 25

called framer that was back when it was more of like a more of like a code product than than U

  3: 32

what it is now which is more of like a visual visual Builder that that is kind of backed by code um and so sort of just

  3: 40

drilled into that every it was cool uber was using it no one knew how it worked no one could use it so I got good at it

  3: 46

and got a lot of um advancement early traction whatever in my career uh based on that but it also you know taught me

  3: 53

to code taught me to think about you know building things that other people are going to use uh uh taught me about

  4: 00

kind of like the type of code that you write when you're in a exploratory phase rather than like in a ex like execution

  4: 07

um like production phase and that uh yeah Carri I actually ended up working

  4: 13

for framer I did their education for a year uh which is very different than the type of product design that I was doing before that um I did a lot of video

  4: 21

tutorials and uh writing and tweeting trying to figure out some way

  4: 27

to make technical design content interesting you know in in little chunks that people could uh could consume uh

  4: 36

and I I I joke that like they probably got less out of me in that job than I

  4: 42

got out of the job itself like because um yeah I I walked away from that um not

  4: 47

sure if I'd helped anyone really learn how to use framer but I I certainly learned how to how to tweet um and

  4: 53

learned how to record a good GIF and learned how to talk into a microphone and all that type of stuff um and so in

  5: 00

the next roles that I had which were I worked for a company called play out in New York who's also doing design tools

  5: 06

and I really wanted to work in design tools after that plays doing like a mobile um I guess or now it's like just

  5: 12

general iOS Mac OS um platform specific design tools where you're you're using

  5: 18

actual elements from the um kind of widgets from that that um component component collection I don't know um in

  5: 26

your designs and kind of bringing that a lot closer to the end product um and at the same time I started

  5: 32

getting into open source I'd kind of done some popular Open Source before but um this was now 2019 it was

  5: 41

it was lockdown I had a little bit more time I also had a daughter so not that much more time um or I'm sorry it was

  5: 48

2020 and uh yeah I guess that open source that I started getting into

  5: 54

started swinging back towards some of my kind of artistic interests or Studio interests and kind of visual interest

  6: 00

those were the parts where I felt like the the problem space was was really underserved and really um it wasn't

  6: 08

necessarily like technical problems that were really hard it was more uh

  6: 13

subjective problems where I think the thing that was lacking was the taste or

  6: 19

the uh opinions or the like the the the feeling for what good Solutions were so

  6: 26

the first kind of problem like this that I I got into was uh arrows like I had you know two boxes or two points

  6: 32

arbitrarily placed I want a good-look arrow like a quote Mark like good-looking Arrow between the two you

  6: 39

know well that could be anything that's not a math problem maybe it involves some angles and linear geometry and

  6: 45

vectors and all that but it's like the good-look part really was the um was

  6: 51

just like my own taste and my own eye and like tons and tons of iterations and arrows are super tricky and there's a

  6: 57

million ways for this you know edge cases when things are overlapping or things are too far away or too close and

  7: 02

all this um but I was working on this and I was working on this in public on Twitter recording Gifts of boxes and

  7: 09

arrows kind of squishing together and all that and I think people really liked that uh and they liked kind of following

  7: 17

me on this uh somewhat obsessive Journey which was uh technical but it wasn't like it wasn't like trying to crack an

  7: 24

algorithm it was like trying to trying to figure out and identify the the rules

  7: 29

governing an aesthetic experience or an aesthetic you know um thing which was a

  7: 35

good-looking Arrow uh that became perfect arrows and that was pretty popular but the next one really is what

  7: 41

what kind of broke my popularity on on Twitter or just in the space and that was a project that ended up being called

  7: 48

perfect freehand this is um a little hard to describe if you've ever used

  7: 54

like an iPad pencil or or Drew with like a stylus in Photoshop or something

  7: 59

um like the harder you push the thicker the line gets and the lighter you push the thinner the line gets it kind of is

  8: 06

like this ink experience um and that's it's not a easy problem

  8: 14

but if you're doing it in a kind of a Photoshop style like raster environment you know the solution is pretty

  8: 20

straightforward you just draw like uh you interpolate like tons and tons and tons of whatever shape you're

## The creation of tldraw and its open source origin

  8: 26

drawing in between each point that you've actually moved your mouse to and you just change the size of that little

  8: 33

stamp that you're making so it's like a little circle slightly bigger Circle slightly bigger Circle slightly bigger

  8: 38

Circle but they're all really tightly packed together and so it looks like a kind of a um a line that's changing its

  8: 44

width as it moves um my angle on this the reason why I spent

  8: 51

so much time on it was that I wanted to do that using vectors I wanted to get um a bunch of points in and then like a

  8: 57

polygon that sort of defined the outside of that shape coming out because I like to work in SVG

  9: 03

and uh and it turned out that this was like an insanely hard problem that no one had solved um and if they have Sol

  9: 11

solved it they certainly didn't open source it but I couldn't find any good example of a variable width line that

  9: 17

actually worked fast enough and uh consistent enough etc for for it to be

  9: 23

digital Inc and so again I did this in public did this in on Twitter a million

  9: 29

Gifts of uh lines that look terrible but you know like slowly attracting more uh

  9: 34

like getting closer to the the solution attracting more people who had solved this problem or tried to do this or they wrote their PHD on Inc and let me tell

  9: 41

you about you know how arcs work in this environment and all this stuff um wow and I uh yeah it was it was fantastic

  9: 49

like I met so many good you know people who had like were experts on on this or

  9: 55

or something like it and um slowly we made made a a an Al like a really really

  10: 02

good tight um little library for for doing exactly what I wanted like here are a bunch of mouse points or just

  10: 08

arbitrary points like give me back a polygon that surrounds them and let me essentially draw a line around the edge

  10: 14

of that polygon fill it in and it'll look like ink and um so that was perfect

  10: 20

freehand and that's now used in like canva uses it like draw.io uses it excal

  10: 25

draw uses it we use it a teal draw all over the place um yeah it's uh it's just like a

  10: 32

significantly better than the next best solution in that space and there really wasn't even any known solution in that

  10: 39

space so someday I'm going to be checking out at a hotel and see my own ink and you know a little iPad or something like that

  10: 45

a and so um I might as well just kind of finish

  10: 50

the the the whole uh origin story or something but that that's kind of LED right into teal draw is that I i'

  10: 57

integrated My Ink into to excal draw and I you know spent time in that that code

  11: 02

base and I'd also like created several like Infinite Canvas like tools

  11: 07

to help me build perfect freehand and visualize it and sort of um you know do

  11: 13

my ink and pan and zoom in and and program against this thing and so I had

  11: 18

done including Globs do design which I won't necessarily talk about but it's uh

  11: 23

um yeah it's kind of like a weird experimental design tool but anyway it

  11: 28

was like it's an infinite canvas it was very much like you know framer figma Etc and after doing excal draw and been

  11: 35

working on these kind of projects that were in the same area I was like you know I maybe there's there's a market

  11: 41

here for uh or not even a market it was just like I think the thing that I want to work on

  11: 47

next is uh is like a general purpose kind of like whiteboard like engine uh

  11: 54

mostly for myself I built Globs but the only thing that you could put on the canvas in Globs was a glob so I had all

  12: 00

this like code and these solutions that I uh you know was like hanging around I could kind of see how I would adapt it

  12: 07

um and so that's what I started doing and that was the next story that I was kind of telling on Twitter is that like

  12: 12

okay here's how selection Works in something like figma or or something like Miro or framer or sketch these uh

  12: 20

these kind of like not um heris these sort of conventions that are part of this really complicated thing called

  12: 26

like the infinite canvas um you know going all the way back to whatever uh

  12: 32

Flash and before then you know Adobe Illustrator and before then all the way back um and they're all pretty

  12: 38

consistent between products like if you're making a a canvas this way you have to kind of do them all like your undo redo should work in a specific way

  12: 45

your uh selection should work in a specific way like you know the camera position and how the camera moves should

  12: 50

work in a you know certain way all the modifier like option drag to clone and all of those became their little

  12: 56

vignettes of uh of how I was building this thing uh this was now like spring

  13: 03

of 2021 and I had uh everyone from any Infinite Canvas

  13: 11

related creative product kind of like in my inbox being like hey can you come work for us you know like let's talk

  13: 16

let's do this so I was either gonna go work for figma or adobe uh and uh I

  13: 23

ended up going with Adobe in part because I think fig Jem had just come out and uh and the the team at at Figo

  13: 30

were like well this this is competitive with with fig Jam I'm like this thing is like nothing it's like a little open

  13: 37

source you know it's like no one uses this it's just me trying to get to 10,000 Twitter followers uh but you know

  13: 44

it's mine so no so I went with Adobe and I told but I told him I'm like uh I don't want to start for six months

  13: 51

like this is actually a pretty fun project for me I want to get it out of my system uh you know let me start in

  13: 57

January and and just work on this and so they said yes and I you know quit my uh

  14: 04

working with play uh and and said I'm going to go work on this this little open source thing for for six months I

  14: 09

have some you know Contracting money in the bank let's drain the the company account and and do this that's not what

  14: 16

happened uh the the like I went full-time from a

  14: 22

Wednesday on Thursday I had a uh a very large Communications company um say hey

  14: 27

we're moving our um a whiteboard that we've designed for specific touchscreen devices we're

  14: 33

moving that into the browser uh it turns out people want to use the Whiteboard on their phones and

  14: 39

on their laptops and all that like like they do with Meo and so we need to make this thing that we wrote in C++ to be

  14: 46

highly performant on these you know kind of tiny microcomputers that were part of these interactive touchscreen TVs we

  14: 53

have to make this work on the web and we don't think it's going to be good enough we have to build from scratch we don't have the team can we just build done

  14: 58

what you're building at the time this thing wasn't open source it was just sort of but it was getting there and I'm

  15: 04

like uh yeah sure like give me like $75,000 I'll let you see the source code

  15: 09

just you know don't I don't want to talk to you very often you know like I'm not working for you I never want to see your

  15: 15

code but you can look at mine um and they said yes to that and so I was you

  15: 20

know funded for those those first six months uh and I got to work on this uh nice you know without having to feel bad

  15: 27

about it uh and I'd also opened up uh eventually opened up te draw to be um

  15: 34

like sponsor Weare that if you were sponsoring me on GitHub you could you could access it you know in its kind of

  15: 39

primitive State uh on t.com and had like couple hundred people

## The Inception and Growth of tldraw

  15: 45

join that way and sponsor me so at one point like my sponsorship was you know over $5,000 a month which is not massive

  15: 53

money but it's like I wasn't doing anything different so it was pretty good that's a kind of a passive thing uh uh

  15: 59

anyway I shipped it at the end of November 2021 and it was uh very popular I just

  16: 07

open source everything I was just like you know the t.com app the library the

  16: 12

canvas and you know I was organized in a certain way um it just made it all

  16: 17

public everything was MIT you know let's just let's just throw this out into the world and see where it goes uh well it

  16: 24

went pretty far there was like number one on Hacker News for a while it was like the top trending repo on GitHub um

  16: 30

a lot of people like 40,000 people showed up at tor.com to use it um on that launch date which was all good like

  16: 38

so far this was all within my same Narrative of okay this is cool I'll make this and then I'll go do something else

  16: 43

afterwards the uh the thing that really surprised me was how many teams wanted

  16: 48

to build on this and they weren't like they weren't building whiteboards they weren't like Miro competitors or figma

  16: 56

competitors they were just like apps that wouldn't you wouldn't expect to have infinite canvases inside of them uh

  17: 04

but and and they wouldn't have built it except that I had suddenly made this

  17: 09

very easy and I had suddenly Shrunk The the development time of this like

  17: 14

whiteboard like feature in their product from like three years and three people to three weeks and one person um and not

  17: 23

even one person just like you know no new developers no new team no new graphics experts no no no like

  17: 29

computational geometry guys like you know we can do this we the canvas itself is like react all the way down so even

  17: 34

if you wanted to customize it you just be writing react components and then a little bit more code on top it got like

  17: 40

I was totally overwhelmed by inbound from companies who were like I I want to build this or I want to acquire you or I

  17: 46

want to you know um I want you to build something for me or you know I want this in my app you know how do you help me or

  17: 53

how can I do this and um and people were shipping things also like within two weeks three weeks like like like

  17: 59

production ready like people had taken this and run with it and so the the story that I started

  18: 06

to get around te dra was that like okay well this is this is a cool little whiteboard but it's also a kind of like

  18: 13

filling a gap that no one knew was there which was that like um in the same way

  18: 20

that like mapbox or Google Maps you know provide maps for apps that would definitely not build Maps themselves

  18: 26

like maps are insanely hard like your little local food delivery app like wouldn't just wouldn't have a map at it

  18: 31

you know like easy uh but it is a value ad if they can have it in there then absolutely it is a value ad uh it's just

  18: 39

completely impractical to do themselves and what I learned talking to folks was that like every PM had used Miro or used

## The Integration of AI with tldraw and Make It Real Feature

  18: 47

figma or used um you know one of these other collaborative tools uh and every

  18: 53

creative product person was like well this is fun collaboration is fun this canvas thing is pretty cool like uh why

  18: 59

don't we do uh why don't we why can't we put our information on uh you know why can't we put our CRM on the the canvas

  19: 05

or why can't we do our sales stuff here like we're already kind of using Miro for this like why don't we give why

  19: 11

couldn't we give this to our customers as well like why don't we build a product around this um and it was just a

  19: 16

technical no until you know November 24th

  19: 22

2021 when suddenly it was like a technical maybe uh and yeah there was there was absolutely

  19: 29

demand so hence the this you know I had to call Adobe and say no I'm not going

  19: 34

to come in on Monday like it turned out that the best possible outcome of this happened and uh there's actually a

  19: 41

company here uh and then I went out and I raised a seed round from Lux in New York and amplify in California and a

  19: 47

whole bunch of really great Angels um you know on the story of yeah this is this is cool it's good app feels

  19: 55

good companies want it and you know by then I had almost $200,000 of of sponsorship

  20: 01

you know and people were just signing up and signing up because there was no way to even be a customer

  20: 07

um like sponsorship sponsorship and uh but also yeah massive 200 you're not

  20: 13

saying 200k a month that's no no no but like I mean I had had uh up to then the

  20: 20

amount of sponsorship that I had received was around $200,000 um dollars

  20: 26

and I think some of the recurring stuff was like uh like 5,000 a month but yeah like it

  20: 32

was a which is in in the top Echelon a lot yeah oh yeah like yeah yeah um

  20: 39

certainly the uh but yeah the and just the amount of like kind of validation that had come in around this was like

  20: 45

more than more than usual uh so race company

  20: 50

or race around put together a team here in London and uh basically had just been

  20: 56

building this this whiteboard DK since then you know we we reconfigured the project around okay we're going to be

  21: 02

building this not necessarily for end users but for for teams to use as kind of an infrastructure product a developer

  21: 08

product something closer to mapbox um and uh you know we were making demos to

  21: 14

kind of like show different ways that it could be used U certainly the collaboration thing is is a big one but

  21: 20

the fact that you could put anything on the canvas that you can put on a website um just because it is a it is a web like

  21: 25

all HTML CSS all the way down um and that was going really well it was

  21: 32

already a good story uh and then uh I just raised like a two million extension for the

  21: 39

company while I was on the the final pitch for for that um the the dev day

  21: 45

was happening at open Ai and in the morning I woke up and I I was getting all this kind of you know action on

  21: 52

Twitter because a developer at figma had used teal draw to make this little demo

## Discussion on Multimodal Prompting and Iterative Design

  21: 57

where you could draw a website click a button and get back a uh

  22: 02

a big popup that had your your website in there it was like a prompt like uh you know hey you're you're a developer

  22: 09

you just got this this uh wireframe from your designer can you give it back as a single page HTML file um and uh and it

  22: 17

would do it and it could do it and then you could show that website to to whoever is using the app um and we took

  22: 24

that and we like wow you could do so much more with this like like with teal draw just like it's it's only scratching

  22: 30

the the surface of the type of integration that you could do so again we just finished the race pressure was

  22: 38

off a little bit was kind of getting towards the end of the year I was like all right let's let's just take this and have some fun let's make some some viral

  22: 43

maybe we'll get like 200 likes or something like that uh and it exploded

  22: 49

um it was like I think we're at like for this this month last 30 days like 22

  22: 55

million views or something like that it's just like it was was Kanye West numbers it was it was really really really popular for a couple days if

  23: 02

you're on Twitter and at all technical you might have just seen a ton of teal draw stuff on your timeline or about two

  23: 09

weeks ago three weeks ago uh well so yeah that that that kind of brings us up almost to today um you just released

  23: 15

something two hours ago which we talk about yeah but maybe maybe this will bring a

  23: 21

good time to bring up the the screens um you know for those who let me let me share yeah

  23: 28

we're recording video as well you can jump over to the YouTube to see uh stuff but this is an inherently visual podcast

  23: 35

so we have to show stuff on um the incremental

  23: 40

thing I got from your blog post so you did do a write out which thank you for that because I actually didn't know that you did it write up um it was just drawn

  23: 47

up oh yeah all the videos um uh this is a power of Open Source right that

  23: 53

someone else had the idea you weren't even focus on dev day uh someone else had

  23: 58

uh and just like you know made it without your permission or or you know talking with you and then the idea could

  24: 04

spread back to you and you could run with it yeah exactly and uh we had made a lot of the bits and pieces like in

  24: 10

place already based on you know I mean it's it's well documented or it's documented uh tons of

  24: 18

examples tons of examples and all that yeah yeah um and it's a uh it's not I

  24: 25

mean it's a big Library as far as an open source Library goes but it's uh it is yeah you can work with it um and once

  24: 34

this thing got popular uh like the the first thing we did was create like a starter kit so that someone could take

  24: 40

it and like run with it yeah um so this is this is normal teal draw where yeah you can um you know you can draw you can

  24: 47

whatever move things around it it works if you if you've used figma if you've used um Miro it's it's kind of kind of

  24: 53

familiar to that um and you can put pretty much much anything on this canvas

  24: 59

that you want like YouTube links uh Etc just because it is a um I always have to

  25: 06

remember to to open this open YouTube in a um Incognito in in a uh incognito

  25: 13

window so that people don't see my embarrassing uh interest here so yeah because like because this canvas is HTML

  25: 20

and CSS and like divs and stuff all the way down you can put things like YouTube videos on there you can even make them

  25: 27

play um because again like anything you can do in a website you can do on on te's

  25: 33

canvas what's fun is because it is a canvas all the way down you can also like draw on top uh and like do the kind

  25: 39

of canvas manipulation stuff that you might do with normal shapes but also with this type of content um so that

  25: 48

ended up becoming like a big part of why Make It Real uh got kind of kind of popular so

  25: 55

anyway I'll show you make it real now um this was a a hastily built layer on top of the

  26: 03

the kind of te draw engine the SDK that we we sent out and the idea here is that you can make a wireframe and we're going

  26: 11

to send it to uh gp4 with vision with like a prompt like much like the

  26: 16

original one that that um Sawyer Hood had come up with which is you are a a web

  26: 21

developer you work with designers they give you wireframes and notes and screenshots and all sorts of stuff could

  26: 28

be anything um your job is to come back with a single page uh or single HTML

  26: 34

file that has all the Styles all the um JavaScript uh all the markup necessary in order to make a real working

  26: 41

prototype based on on what youve been sent it also has you know slight

  26: 46

emotional manipulation like you love your designers and you want them to be happy and like the the better your

  26: 53

prototype is the happier they are and all that oh in the promps but the uh yeah yeah yeah yeah it's again it's open

  26: 59

source you can read read The Prompt it's kind of a funny one um but we do we do some other tricks that I'll like for

  27: 05

example the um well we'll have a second as I do this so you select something like this you click to make real button

  27: 10

and you get back a little uh waiting box we we've considered running ads

  27: 16

or like in this this waiting moment but no I don't know it's maybe like a kind

  27: 21

of Zelda style like tips you know tips and tricks like here's here's different ways you can you can do

  27: 28

um but the uh yeah for example like we also send it I mean this is part of the

  27: 33

joy of like a multimodal prompt is we send it the photo which kind of looks like the same as if you had done a copy

  27: 40

and paste thing so like an image uh fality worked out prior you know yeah

  27: 48

yeah yeah like that's that's what I find so poetic about this that you were just ready yeah like it it really I mean it

  27: 55

it feels like we had gone off in this like this very you know as as collaboration

  28: 00

Ai and stuff was going in one direction we kind of just went off in our own weird like hey the world is really going to need a whiteboard at some point uh

  28: 07

Direction and then and then it just they kind of met us where we were at um and then we've been able to just be like

  28: 14

show up like show up on day one of this new world of possibility with like the

  28: 21

thing that like if I hadn't spent the last two years building this I would spend the next years building this like

  28: 28

it it is the right product for this type of uh type of feature so anyway they

  28: 34

give us back a HTML we stick it into an iframe put that onto the canvas just like we did with that YouTube link and I

  28: 40

can uh I can interact with it so should be going from Orange to Pink uh orange

  28: 45

to Pink hey I got it right that it's giv us the hex code I can click the hex code

  28: 51

uh and it gives me uh you know YouTube links uh Etc just because it is a

  28: 58

um I always have to remember to to open this open YouTube in a um way that in in something like vzer or

  29: 06

or some of these other um kind of prompting environments like the only way for you to then make this better uh oh

  29: 14

maybe you can do this with chat gbt or something and you could you could write like oh actually you know uh instead of

  29: 20

um or like you you missed the labels like it it should say orange and pink you know on top of this thing uh and and

  29: 26

it doesn't so you could go back here and like you know make make sure that this is uh

  29: 33

whatever you could change the input but because this is teal draw because you can draw on top of this stuff you could

  29: 39

um also you know write on top like you could kind of modify this uh and maybe

  29: 47

even give it the same type of markup that you would give to um uh a designer

  29: 52

you know a designer or something like that you know draw some arrows or maybe paste in a screenshot and say hey make

  29: 59

it look more stylistically close to this other thing um and I'll I'll say this as well um

  30: 07

I'll say like full width uh for that for that button and uh

  30: 12

anything else that we well let's just see what it does um and then what you do

  30: 17

is you select you select the the the website that they gave you back the previous

  30: 23

result along with all this markup and you use that as the new input and so

  30: 28

that's going to give you uh something kind of like yeah it's going to give you an

  30: 34

image that looks like this that you've now sent but we've also kind of tweaked The Prompt a little bit when you when

  30: 39

you do include a uh a previous result and say like hey this you know the the uh the W frames coming back are uh

  30: 47

annotations or markup based on um on what you sent before and there there you go so now we have a new prompt uh that

  30: 54

sure enough the the labels are there uh you know it still works just like before the button is full width and uh and you

  31: 01

know it still works just the same so we send it back again we send it the image

  31: 06

we send it the text uh uh The Prompt we also send it all the text items

  31: 14

themselves separately because chipt is not really great with uh with recognizing text so we say like oh by

  31: 19

the way your vision's not so good so we've we've ensured to have our copywriter you know list out all the the

  31: 25

copy that you can use I think we even send it back the HTML that they used for the the the previous

  31: 32

result um so we just dumped like as much information as possible at this uh the

  31: 37

the gp4 with vision uh and that's how you're able to to get these sort of iterative results and the it it

  31: 47

is it is like legitimately good uh like it it feels

  31: 55

like work it feels like like you're actually doing stuff when you're iterating through this way and and slowly shaping and adding complexity and

  32: 02

doing step by step uh you know as you're you're you're building something um and

  32: 08

when you're done you can uh you know copy a link to that and and open that in a new tab like we we host it it's there

  32: 14

forever you can you can bookmark this if if you really just needed a uh slider between orange and pink um well now you

  32: 21

have one you you you know whether you could code it or not or you maybe not worth building or using a no code tool

  32: 26

to build but you know we just made that in 5 minutes um if you are more on the Cod side and you want to use this as a

## The Concept of Parallel Prompting in Design

  32: 32

kind of a foundation uh of of a real project or maybe just to like see how it like well

  32: 38

how did how did how does that actually work uh you can open it up in stack blits or code sandbox I think tomorrow

  32: 45

we'll have repet uh and yeah see all the code see what chat jpt came up with and um and

  32: 51

kind of uh use it or adapt it or you know keep it going or do whatever you want with it but um yeah CU it is it is

  33: 01

like uh it is real and yeah it make real yeah uh yeah it's it's interesting that

  33: 08

you can also I've seen some of your other demos it looks like you're you're about to move us on to

  33: 13

another yeah I'm I'm going to grab a couple the the ones that I have showed before um this one's a really

  33: 21

interesting one because it is uh okay so what's on the screen now just

  33: 27

to um to kind of uh narate describe it is is I have a uh I have a drawing of a

  33: 36

stop like a kitchen timer you know where you can add a minute add a second you know start or stop the timer or or reset

  33: 43

the timer um and then next to it I also have a state chart like State machine

  33: 48

describing uh the three states of the the timer start or stopped running or

  33: 53

complete and like what each one of those uh buttons could should do in terms of transitions or changing the state I

  34: 00

think you could hand this to pretty much any designer or developer and get back a you know a working result like it's

  34: 06

fully fully spec sort sort of um but what what you do with this divid cochet

## Impact of AI on developer jobs

  34: 14

might say develop a state chart first and then you know plug it into yeah exactly and what what's cool this way is

  34: 20

that you can uh well let's do a couple of things in in parallel uh first thing

  34: 25

I'm going to do is I'm going to um I am just going to make a box over

  34: 30

here and I'm going to say uh kitchen timer right in the middle of the box and

  34: 38

and this is going to be the only prompt that I'm going to I'm going to give it I'm just going to click make real on just the the kitchen timer box you

  34: 45

sometimes you see with these multimodal prompting like uh um like someone will draw a calculator like in in a lot of

  34: 52

complexity and and say you know make this make this real and sure enough you get back like a really complex full

  34: 58

calculator uh but if you did the same thing and you just said empty box but just the word

  35: 03

calculator it would give you back the same thing is that it knows what a calculator looks like and it knows how it works and all that so next let's also

  35: 10

give it the uh just the the user interface like without the state chart

  35: 15

we we'll leave the state chart out uh but we'll do just the user interface um and then we'll do just the state

  35: 25

chart you know and say hey make this real uh and then we'll do um both the

  35: 32

state chart and the UI so we have four different prompts um with uh four potential

  35: 41

different results based on you know variations of the same same input so first off our

  35: 49

kitchen timer where all we did was we we sent it a box with the word kitchen timer uh it has I don't know what this

  35: 56

box is for but we have a time we have start stop and reset I can double click

  36: 02

in I can click Start uh it doesn't do anything what is this oh whoa this is

  36: 08

that if this okay well if the number is there yeah then it'll it'll it'll stop

  36: 14

if I stop it it goes it stops I can start it it'll keep going again okay and I can reset it and there we go the only

  36: 21

weird thing is that it's uh yeah it has a a number input field for the number of

  36: 27

seconds that I can I can type out but yeah you know what in a pinch in a pinch I'll take it if I really need it just to

  36: 34

to count 60 seconds or something uh next we have the input where or the result

  36: 39

where the input was just my drawing of a kitchen timer I didn't tell it it was a kitchen timer I didn't send it the words

  36: 46

kitchen timer and I didn't tell it how it should work but it did produce something that kind of looks the same uh

  36: 53

let's see if it works so I'm going to click minute second start reset no so

  36: 59

unfortunately uh it did not make any uh working UI although it did you know put

  37: 04

the buttons in the right place or something like that uh maybe it over focuses on the UI because you you told

  37: 11

it you you just that's all you gave it you know yeah yeah I mean there is in the prompt kind of language around like

  37: 18

you use what you know about the way that applications work in order to sort of fill in the blanks here in terms of the

  37: 23

uh behavior and all that but let's let's go the next one this one is where we only sent it to state chart uh there's

## Additional Layers in Multimodal Prompting

  37: 30

also something in the prompt that says like if it's red it's not part of the UI like if it's red then like treat that as

  37: 36

an adaptation rather than a like a a thing that you should should actually make uh okay so this time it it actually

  37: 45

looks a lot like the previous one uh but it does have these um minute second

  37: 52

buttons Oh weird it has plus and minus for minute minute second

  37: 58

uh and it also has this like stopped State written at the bottom so there's four buttons you know minus minute minus

  38: 04

second plus minute plus second and then there starts uh start and reset so does it work I can add a minute I can also

  38: 11

subtract a minute all right I can add a second I can also yeah and if I press

  38: 17

start we're now in the running State uh unfortunately it's going up rather than

  38: 24

down and I and I can reset it and okay uh I'm just curious if I if I do give it

  38: 30

an additional prompt here and I say like uh uh this should

  38: 36

countown not up uh and just kind of do an arrow towards the start button here let let me

  38: 42

see if that uh that'll make a real one but and then finally we look at the other example which is where we sent the

  38: 48

state chart and the UI we get something that looks much much more like our user

  38: 54

interface the question is does it work yes it does uh perfect I can stop it I

  39: 01

can start it can reset it wonderful uh

  39: 06

and in this case yeah my my my my feedback was

  39: 13

accepted I I went back to the one where I I'd asked it to count down and not up and it all looks the same but now it's

  39: 19

counting down so I think for folks especially who have like uh who have worked in design and

  39: 28

who have worked in sort of like user experience design in particular like this should feel pretty familiar of of

  39: 35

kind of sketching out and trying to do your best to specify like what it is you want and see what you get back from your

  39: 41

designers you see what you back from your developer um but having like a a

  39: 47

environment in which to have that like game Loop that like iteration cycle uh alone and and instantaneous and

  39: 53

essentially free uh is really really wild and uh you end up spending a lot of

  39: 59

time kind of like uh not only getting into the head of the the AI and sort of

  40: 05

being like okay well why are they getting confused you know what am I sending that is confusing how do I send

  40: 10

more information in order to like produce a better result uh but also it really forces you to

  40: 16

clarify your own expectations of like somewhere up here I have a uh uh a drag

  40: 22

and drop list you know where you can drag list items between and like I started working on this and started

  40: 28

specking it out I was like man this is like actually like not only really hard

  40: 33

to um like to produce a good result but it's also like just really hard to describe is that like the failure was

  40: 40

really on on my end for just not knowing how to get the information in there because I didn't actually know how this

  40: 45

thing should work um but yeah but you know I could figure it out I I have an

  40: 51

environment in which to figure that out it was fun

  40: 58

that's amazing uh I'm still processing oh you have a picture of a oh yeah all

  41: 05

right so this is this is kind of an like uh slightly obnoxious but uh during this

  41: 10

ma like because this thing went massively popular on on Twitter uh uh

  41: 16

yeah like thousands of retweets type of level um and there there were some folks

  41: 22

who like were subtweeting it about like you know get over it it's just just a wireframing or no code tool or something

  41: 28

like that one guy did say like you know I prefer to to wireframe like the oldfashioned way with pen and paper and

  41: 36

uh I was like oh yeah no that that works too like this works with screenshots I can just take the screenshot here of you

  41: 43

know that the the dude posted of of the uh the the drawing that he had made you

  41: 48

know it's not even like a good photo there's a pen you know across one of the screens Etc but if you just give that

  41: 55

with no other information uh to like as a prompt uh you get back a pretty good

  42: 03

result like it loading right now but uh I've done this before and yeah like you

  42: 09

get back um you know just from this like photo of a of a piece of paper on the

  42: 16

the the guy's desk you know you have a um like not not completely

  42: 25

arbitrary uh result like working website here um that was that was that was inferred from just

  42: 31

that picture with no other input not not even like titles or anything else and of course it's like responsive and and all

  42: 37

this stuff uh and so the idea of like yeah like our tools yes I've I've worked

  42: 43

really hard to make all of our shapes you know really good and our arrows obsessively good and and all this

  42: 49

stuff but like the fun of the infinite canvas and te draw in particular is that

  42: 55

you could just d dump like whatever you want onto the canvas screenshots text

  43: 02

images other websites uh sticky notes all that stuff and uh the the the model

  43: 09

even as something that was in preview like the very very first sort of multimodal uh model uh can do a really

  43: 17

good job at just taking all that stuff as the input and um and yeah like so we accidentally made

  43: 24

a really really good visual multimodal prompting

  43: 29

uh uh application environments or or user experience environment I'm not even

  43: 34

sure what we're going to call this thing it's a TL draw

  43: 40

uh uh you you also had in our pre-show prep you also talked about parallel prompting is that basically just uh

  43: 47

prompting and then moving on to something else is is that is that what yeah that's kind of what we did up here with the uh the stopwatches the fact

  43: 53

that we could get multiple prompts going at the same time time and like arrange them spatially

  43: 59

uh and um people have done this also with with imagery uh to say okay well

  44: 06

here are we're going to use do we're going to kind of like make a tree of prompts as

  44: 13

you go you know different iterations based on um which whatever you make four

  44: 19

iterations you pick your favorite one you keep going kind of like what you do in mid Journey but to have that spatial

  44: 24

and to have that like arranged on a canvas so that it actually can make sense to you and you can kind of look back and follow it follow

  44: 31

forward that like I like whiteboards Infinite Canvas stuff is just really good for a lot of things um and uh so

  44: 40

organizing like a whole bunch of different content that is uh irregular or ephemeral or

  44: 48

um or has a kind of like ad hoc meaning

  44: 53

configuration like you know things that are next to each other or things that are in a grid or in this case you know

  44: 59

uh just even what we're what we have here for what we did with the stopwatch like there's an implicit meaning of like

  45: 05

okay the source is on the left the result is on the right and any further iterations are further on the right

  45: 12

right like there we we didn't put that into a data model we didn't structure that in any way it doesn't actually that

  45: 17

meaning relationship doesn't really exist in any part of the product it just exists to us because we that we can make

## Introduction of DrawFast and Lens Projects

  45: 24

sense of it um and yeah so for for this type of thing

  45: 30

not only is it cool that now a model can make sense of it as well but uh but yeah

  45: 37

for for organizing uh complex iterations of imagery complex iterations of of of

  45: 44

outputs Etc like yeah the canvas is the place I I really do believe

  45: 51

that yeah um I mean that's that's that's really incredible I

  45: 57

it's also it's a little you know I think a few developers are kind of scared uh about uh you know how much of this uh

  46: 04

their jobs this does obviously uh there's a lot more that they can't do yeah so the the will this take my job

  46: 11

story is is interesting I'm not actually concerned but I'm I'm uh uh I I think

  46: 18

this augments like uh my actually my concern as a developer is that this is good but not good enough you know like

  46: 24

it's good for throw away UI uh but I would I actually export the code and

  46: 30

take that code um I don't know uh it it looks like uh your first MVP was just

  46: 36

HTML files which you know if it's a single HTML file it can it can have some js and some CSS um I saw some problems

  46: 43

with layout uh in there which I don't know how good it is at layout uh it's it

  46: 49

looks like you could just prompt it for Tailwind if you want Tailwinds I assume it can generate reacts uh I don't know

  46: 54

what what are the limitations this thing well there's there's the limitations that are in that particular demo which

  47: 00

is that like well it couldn't do react because it needs to just be a single compiled thing uh you can't do any

  47: 06

multi-page stuff or or anything like that but that's more of like how we're structuring the uh the project rather

  47: 14

than like a specific requirement of of the project itself the I mean we've

  47: 20

talked about having well there there's two kind of things there's one is like how big is the input window and how big is output window or something uh so in

  47: 29

theory you could have uh the input be here's a entire full stack react

  47: 37

application uh together with all my UI and all this all my components Etc and

  47: 42

here is a screenshot that I took of the landing page where the

  47: 48

menu uh is in the wrong spot you know and I'm I'm going to annotate that with

  47: 53

some arrows and some text in order to say like here's what I where I want it to be or here's what I want

  47: 59

Etc and for the output to be um you know a diff that I can apply to my codebase

  48: 06

like produce the the the the get like basically like produce the commit um

  48: 13

that would change this and have that commit be against multiple files and and

  48: 18

Etc um in order to to have potentially like a solution

  48: 24

that is just like ready to go applicable like a patch or a PR that you could make

  48: 31

um there really isn't any any limit in that and we've seen

  48: 38

with copilot Etc the challenge is more on the input side than the the output side like like absolutely you could

  48: 45

figure out a way for this thing to spit out like a working IOS app or something like that uh the question is like how do

  48: 52

you tell it what you want and and how do you iterate when it gets it wrong and

  48: 57

and just doing zero shot zero shot zero shot is like really a frustrating um

  49: 02

process uh but if you do have a way of of iterating if you do have a way of kind of like step byep moving towards

  49: 08

the the solution that you want and kind of like you know getting it into like okay well this is good but it's not

  49: 14

great could be better Etc um it's uh that's how you actually make that type

  49: 21

of complex output more practical or more realistic um is that you probably won't get ever get the prompt just right even

  49: 28

if you have like a really really really good you know three generations from now agent like you you still have to put

  49: 35

that information in um but you're never going to put the all the information in the first time you need to be able to to

  49: 41

iterate on it and so with visual stuff uh I feel like the canvas like what we

  49: 47

were looking at um that's part of what it unlocks is that like space of iteration that space of uh um you have a

  49: 54

way of marking up the result and using that as the new prompt um and that's

  50: 00

that's kind of new yeah yeah um multimotor prompting is

## tldraw 2.0 and the future of the project

  50: 06

such a brilliant concept that uh you know I think it's uh it's going to be a norm for for for some things um in my

  50: 14

mind you demonstrated you know I would coming from Photoshop there's this

  50: 19

concept of layers um you can you can kind of simulate layers in in t draw um

  50: 24

and I see like a emerging property of layers in in this kind of prompting

  50: 30

which is there's the UI layer and then there's the state chart layer um and those two things seem like pretty useful

  50: 36

in in uh spec specifying a prompt I was just wondering if you if you thought a little bit about like other dimensions

  50: 43

or other layers that would be useful in multimod Pro yeah so uh one thing that

  50: 50

we've done is to bring in screenshots of other apps

  50: 56

like here's stripe.com like make it look like stripe you know so the sort of like

  51: 02

like or like here's linear. comom like let's let's do it this way make my dev's

  51: 07

website uh or make you should just you just you should just like give a design

  51: 14

and ask it to make pop instead of make real yeah exactly make it make it more

  51: 19

make it more make it more pop uh so there there's the idea of like bringing in style

  51: 25

as like a as another um another in like part of the input uh flowcharts are are

  51: 32

absolutely useful uh I mean this is it really just blil on to like what would you really give a developer who you are

  51: 39

working completely asynchronous with you know if you had to uh Speck out a

  51: 47

project and put that print it out on paper and mail it to a developer and they were going to mail back a a disc

  51: 54

with an HTML file on it like what would you send uh if you were sending this to the moon or

  52: 00

something uh H so yeah definitely like descriptions of how the state should

  52: 05

operate insects on that uh We've um what else have we done we've done flowcharts

  52: 13

we've done screenshots of other apps we've

  52: 19

uh I think we've we've even just pasted in code like like here's a whole bunch

  52: 24

of Jason that can use um and have it just read that as the as the input data

  52: 31

uh we can you can point it at specific endpoints you can say like I want you to hit this endpoint and then display the

  52: 38

results you know as uh as cards or as items or something like that uh not I

  52: 45

mean you don't even have to like wire this up it's not like retool or anything where you you have to register that or

  52: 50

you know it's not built into the tool you're just from an endpoint oh yeah yeah yeah yeah I'm trying to think of uh

  52: 57

what a good demo endpoint would be we could maybe we could do one more uh more T what is it like dog.co is that yeah is

  53: 05

is a good demo yeah yeah I've used that one um I mean this this might be this

  53: 10

might be kind of like the box with the word calculator like it might just know because it's probably been a bunch of

  53: 16

tutorials oh it's in the set yeah not but you know what we'll we'll do it

  53: 21

anyway we'll uh I'll I'll share it and uh we we'll try so for those who don't know dog CEO is

  53: 27

is one of those like uh demo apis that uh you just set up just because it's not

  53: 34

offensive and ex dogs you can get

  53: 39

dog yeah um I'll try and think if there's a there's a more complicated end

  53: 44

point that we could hit maybe maybe while I'm doing this yeah ideas of what to promts and

  53: 51

what what can go in uh I definitely didn't think about hitting end points just cuz I it's just not in any of the

  53: 58

demos I've seen yeah uh but it works um let me see

  54: 04

I'll I'll have a big button down here uh show me a

  54: 11

dog okay so that's going to be already show me a dog Button uh this should be a picture of a

  54: 20

dog oh that's a great dog no thank you oh yeah

  54: 26

yeah yeah uh and and then we'll we'll do some

  54: 33

annotations here we'll say like uh uh okay

  54: 38

when when this is clicked get a new dog um yeah there's those uh perfect arrows

  54: 46

coming in yeah exactly when clicked get a new dog from Dog from I'll

  54: 54

just paste in this this um yeah and put the result in the

  55: 00

image okay so it's more of a more of an instruction than you would normally you

  55: 06

know I don't know yeah one thing that is gonna have to guess is that you know the the response format right because it

  55: 13

could be anything this is true let's see if it

  55: 19

works hey all right well that one work yeah and let's see if it if it actually

  55: 25

hit it hit the uh the right um the end point the in the right way so um dog

  55: 33

Button yeah okay it hit the right righted end point Jason dog image uh and

  55: 39

then it put it in so there you go uh you have yourself a uh JavaScript tutorial

## The Competitive Landscape of Canvas Tools and tldraw's Unique Position

  55: 47

in a box ready to go and I think like I mean we probably wouldn't do this on

  55: 52

camera but like you can say you know like like use the off token you know

  55: 58

whatever and like you know go like really get you know real data back from

  56: 04

this thing um yeah there's no no reason why it wouldn't be able to do that

  56: 09

uh you're kind of yeah yeah well not really

  56: 15

because again what inside of the prompt for this we do give it like an array of

  56: 22

all the text that you've put in we say like look I know your vision

  56: 28

isn't so good or you have hard time reading text sometimes when it's small uh because what like the input that that

  56: 34

you get is pretty wild it's like it takes this as a PNG uh and then it like um I can't do

  56: 42

this in teal draw but it it resizes it it it squishes it into a a 512 by 512

  56: 48

image or something like this and tiles it yeah and then yeah so it's like

  56: 53

um it text especially can get kind of like chunked up especially it's small so we

  56: 59

we send those strings separately uh so that it can kind of reassemble um

  57: 05

anything that it can't read uh right off the bat yeah it's this is weird future that

  57: 13

we've uh we found ourselves in it's pretty cool it's pretty cool yeah I mean you

  57: 19

know one one layer I automatically think of is is backend right like uh as someone who has uh works at AWS um I see

  57: 27

a lot of systems diagrams like Cloud diagrams um entity relationship diagrams

  57: 32

for database schema so I wonder if like anyone's tackled extending this to backend and then obviously the next

  57: 39

level from that is uh full sa caps where you have backend in front it yeah um

  57: 44

short answer is yes there there's someone on Twitter that was using this to generate

  57: 49

um yeah like was doing like flowcharts I'm not a backend guy so

  57: 54

don't actually know exactly what the output was um but I believe it was like a like a configuration script for

  58: 02

AWS um that was built off of this like you I think he just copy and pasted a a

  58: 08

a a diagram that he had made in Te draw anyway and said okay well let's throw this at this thing and see what it comes

  58: 14

up with tweaking the prompt to say like you um rather than building single page

  58: 20

websites you just return the Json you know description of this configuration

  58: 25

or something like that or return a script that would set this up um you could tweak it to say like

  58: 32

here are like yeah all the entity relationships between um uh different

  58: 37

tables or items in tables uh and and give me the give me back the SQL you

  58: 43

know like you know initialization or something so that would make all these tables and um and set up these

  58: 50

relationships uh yeah it's just again like the hard part is getting that

  58: 55

information in but we I don't know pictures are really

  59: 01

good and yeah they if you can tell it that way

  59: 06

works yeah yeah awesome um you are also part of uh so you were one of two what I

  59: 15

think about uh multimodal um viral hits in November uh the other one also you

  59: 20

had a part to play in which is the local consistency models yeah Trend where I

  59: 27

think you worked with f yeah so we uh and actually I do have

  59: 32

something to show here we we actually have a couple of things to show here uh we connected with Fel because they used

  59: 39

um te draw to to create a demo for uh for their their

  59: 45

cons LC LCM right yeah latency cons yeah

  59: 52

um but we took that and we we made uh draw fast. draw.com which is

  1: 00:00

uh basically you get a these like shapes these little draw fast shapes um and it

  1: 00:07

puts the result B go grabs that new image and puts it right next to it and these are um these are extremely fast so

  1: 00:16

as I'm moving things you should see the image um updating as well uh and I think

## Advice for Founders: Following Your Interests and Desires

  1: 00:24

it I think this was originally not a goat you know whatever this is

  1: 00:29

a um uh a wise princess I don't know I I

  1: 00:36

play this more with my uh my daughter than anything else I like what this looks like you know and um oh my gosh

  1: 00:44

she she does and actually we had a lot of uh a lot of folks on uh Twitter um

  1: 00:53

being like this is this is not good like whatever like cuz I had a video of whatever my my daughter drawing and you

  1: 00:59

know she made this awesome drawing of a a mermaid and we turned it into like this really Anonymous crappy version of

  1: 01:06

like an illustration of a mermaid and uh they're like no no the children's drawing is much more interesting I'm

  1: 01:12

like yeah yeah yeah come on what who who cares of course it is but like this is uh you know this is this is fun so yeah

  1: 01:20

like I do think it gets pretty wild animations like some kind of like you

  1: 01:25

could make uh some kind of it's this is almost like stop motion film um yeah

  1: 01:32

yeah I mean we need to do more work on consistency but like this is getting

  1: 01:37

there yeah uh it is uh car driving through a busy Market Marketplace uh the

  1: 01:46

fun is that like you end up after playing this with this for a little while you end up like uh getting

  1: 01:53

really into the particularities of the input like the uh like what can you do with a design tool okay you can move

  1: 02:00

things around right I can grab some of these and move them around um and like

  1: 02:05

oh yeah there's a highlighter here too so we could like we could do some highlighting you know that'll that'll do

  1: 02:10

stuff uh and then you kind of like we we couldn't help ourselves we started

  1: 02:16

making these like stories so uh one thing you can do is kind of click this little button and that'll make the the

  1: 02:22

drawing and the result kind of on top of each other all right well then I'll move

  1: 02:28

on to the other one that we uh that we released earlier today which is called lens. draw.com so that was draw fast.

  1: 02:35

draw.com uh and again this is probably not making a good podcast audio but it

  1: 02:40

is uh the image updates as soon as possible based on what the input drawing

  1: 02:46

is um and it is pretty hypnotic so the uh this one's a little riskier because

  1: 02:53

it's live so this this is is a we took a project called together which is a

  1: 02:58

vertically scrolling infinite drawing collaborative experience uh it's a

  1: 03:03

little bit like a chat room as you're drawing everything's just sort of moving up and it just disappears off the top of the screen never to be seen again so

  1: 03:10

it's kind of just fun to play with um but by the way one of the most magical chat experiences I ever had was with you

  1: 03:17

uh I think you were like with your daughter or something and I was I was whatever showing off together and you

  1: 03:22

started writing I started writing and had chat onto together.com I was like

  1: 03:28

what is this it's super cool like you know there inevitably someone will write like you

  1: 03:34

know where are you from you know and everyone's like chiming in and talking about yeah you or like this is cool

  1: 03:41

where you know yeah you can chat um so what I'll describe what's on

  1: 03:47

the screen now which is basically we've we're taking like a

  1: 03:52

screenshot of the center uh like a square out of the center of this chaotic vertically scrolling chat

  1: 03:59

experience and we're sending that to the to the LCM and putting back the image

  1: 04:04

based on like a prompt uh like you know desert scene or busy Marketplace or uh

  1: 04:11

futuristic cityscape or something like that and so it is updating like you know 10 times a second as uh as we go but

  1: 04:19

yeah I would say like it's updating surprisingly quickly like 10 times 10 frames per second here we go

  1: 04:26

yeah yeah uh no I think it's now like to 32 milliseconds basically uh as you go

  1: 04:33

and um so if I draw like a big orange thing down here it's going to kind of

  1: 04:38

show up into the drawing um maybe I'll do a big black one so you can see better

  1: 04:44

uh like it just sort of becomes part of the the input to this prompt um and it

  1: 04:51

is extremely hypnotic uh this is again like lens. draw.com um

  1: 04:58

this isn't live so no one should come on here and say hello Steve for anything like that but it is a no yeah nobody it

  1: 05:05

is yeah it's like this like slow moving um collaborative kind of like

  1: 05:12

hallucination experience and it just never ends I mean yeah I'm probably going to be funding

  1: 05:19

fou completely for the for next uh you know their series a or something like

  1: 05:24

that but the uh yeah are you on here uh Sean uh I'm not but maybe I should yeah

  1: 05:32

well whatever yeah yeah uh I I have like

  1: 05:37

I don't know I have a healthy respect for like the the amount of processing that must be going on Behind these things um I I

  1: 05:46

just yeah well what's funny is that uh oh cool perfect someone's doing looks

  1: 05:53

like can't really draw the way I normally draw draw you you blobbed it somehow yeah it's everything's a little

  1: 06:00

bit bigger um little smiley face when there's 36 people on it's it's kind of

  1: 06:05

slow as well so uh yeah we

  1: 06:11

um what's funny is that like yeah we're using like Cloud flare workers to do the uh the the the updates and the crdts to

  1: 06:19

do the collaboration and you know all this like whatever LC models to to to to populate

  1: 06:26

this image or create this image yeah but um there's also a laptop in my living room right now uh that is doing the

  1: 06:33

actual screenshotting uh and sending that up and so there's a big note that I had to write you know for my family to say like

  1: 06:41

don't turn off this laptop don't close this laptop because uh this needs to be on in order for this thing to work uh

  1: 06:48

and yeah so you know we'll no matter how good our text stack gets we'll always come back to uh some some laptop stuck

  1: 06:55

in the corner that can't possibly be turned off uh it's pretty fun yeah I've heard of

  1: 07:02

major businesses being run that way uh yeah exactly there's raspberry pie in the closet yeah I I you know it's weird

  1: 07:09

because it's really funny because like you know you are inventing your own art form uh this is uh Fine Art you know

  1: 07:15

going back to your degree um it's just a definitely a uh you know to it's it's funny because

  1: 07:24

like the output of this like while it is like a visual output the output like doesn't actually matter like it's gone

  1: 07:30

in in 16 milliseconds and it's you're it's not coming back uh and I think with all this AI stuff right now just where

  1: 07:37

we are with it and just how completely unknown it is in terms of like where is this

  1: 07:43

useful uh like the best thing that you can get out of this is like the experience uh and so I think of this

  1: 07:50

much more as like you know the thing that people will walk away from from playing with like lens. til.com

  1: 07:58

uh should be more of like that experience of of having interacted with this thing or interacted with it you

  1: 08:04

know among with others uh rather than like oh there's it made my favorite

  1: 08:10

image or something like that so I think the uh yeah I don't know as

  1: 08:16

a as a former Image Maker like the idea of having having like you know experience

  1: 08:24

where the image is uh a major part but it's it's not necessarily like the the

  1: 08:29

important part uh or any one of these images isn't the important part I don't know there there's some like there's

  1: 08:35

some uh there's something something new

  1: 08:41

feeling about this kind of fun certainly I I wish I was

  1: 08:47

uh could do a a big critique with all the New Media artist people um about

  1: 08:53

this about like what you know where does this where does this fit into the sort of the uh yeah yeah like other people

  1: 09:00

well that's that's for them to to write and you know for you to build uh and I think that's a that's a you know I would

  1: 09:06

encourage you to keep building there because you're definitely not done explor with your

  1: 09:11

Explorations um thank you cool yeah well so I can kind of round It Out by sort of

  1: 09:18

looking towards the future uh you hinted a little bit uh you're working towards te draw to 0 um what so first of all

  1: 09:26

actually so uh it seems like you're very focused on the core mission of canvas um and the

  1: 09:33

AI stuff is is a side project for now um why why not pursue it as like a a why

  1: 09:40

want to Pivot and like be an AI company right sure a lot of those questions yeah I mean when you when you

  1: 09:47

get something as viral as as te draw got like I think I've talked to everyone um

  1: 09:53

certainly every every investor uh and um okay so I guess the way that the

  1: 10:01

way that yes we we probably could on for something like together or that draw fast thing uh make a a tiny little sass

  1: 10:10

app you know give me $10 a month play with this thing and uh you know could

  1: 10:16

make it make it good we could go in that direction um there's not much of

  1: 10:22

a around any of this stuff and and we're seeing that just in you know I don't

  1: 10:28

know Gemini is going to come out in a couple of days weeks or whatever um and

  1: 10:35

if it's better then people are just going to use that until the next better thing comes along like it's not there's

  1: 10:40

not a lot of like unique uh it's not there's nothing really

  1: 10:45

defensible about like hey it's an it's a drawing app plus an LCM like model uh because there's going to be a lot of

  1: 10:51

those models and there's going to be a lot of drawing apps the the thing that I think is really unique for Te draw the

  1: 10:56

thing that we have added that is not easily created

  1: 11:03

is the canvas itself is that like this uh you know web-based uh hackable

  1: 11:10

extendable uh super refined um interactions and and all that stuff like

  1: 11:16

you know all the but thousand table Stakes features that that drive people nuts when building something like this

  1: 11:22

like they're all there they're all good day one you could build a really great experience uh whether it's Aid driven or

  1: 11:28

not like using teal draw um in a way that it's just not practical to do if you're building it yourself and

  1: 11:34

especially if you're not doing like graphic stuff there's really not that much else out there uh oriented towards

  1: 11:39

towards this type of thing um and I think in a world where like these type

  1: 11:46

of experiences are going to or not these experiences these types of Aid driven capabilities are just going to keep

  1: 11:52

coming out faster and faster and like you know I don't next next year

  1: 11:57

is going to be wild like every month there's going to be some new uh you know capability or something

  1: 12:04

the the thing that I would want to see both just me as a as as a person and as

  1: 12:11

me as having built the business that I've built uh is for Te draw to sort of

  1: 12:16

become the the place where some of this prompting some of these ideas are

  1: 12:22

explored um even if we decided to okay we're just going to close everything up we're going

  1: 12:28

to build a product based on this that maybe it's a great product but it's it would only be one kind

  1: 12:34

of One Direction one Ray kind of into this Infinite Space of of

  1: 12:40

possibility uh and that that could be successful good but like the idea of

  1: 12:47

building the um I mean we've built the the sort of the direct manipulation manipulation core but there are so many

  1: 12:53

many even like AI specific apis that we could build around te draw for having

  1: 12:58

you know like a virtual collaborator uh or or or working with images in a in a more more Rich way like

  1: 13:05

there's just so much that we could build in order to make this the best possible place to explore Not Just One Direction

  1: 13:11

but like you know many many many directions um and I think that that

  1: 13:17

narrative gets me out of bed in the morning and in a much more uh that that gets me much more excited

  1: 13:24

um and I think we're also just like the team that we have and and the the tech that we have and the skills that we have

  1: 13:29

we're more the team to build that rather than like to um become like a SAS

  1: 13:35

product uh company I'm not saying we'll never do like a you know it pay us 10

  1: 13:41

bucks a month and we can you can play with our magic toy um but uh

  1: 13:47

primarily my goal is to make uh te draw the either the place to explore these

  1: 13:53

these different models or you might you might think of it as like U the Battleground on which the the winners

  1: 13:59

will be kind of identified um like right now we're using open AI for the make real thing um maybe next week we'll be

  1: 14:08

using uh Gemini and now it's now it's a question of okay well now we have an environment in which to compare these

  1: 14:14

two models um with the same input and a very advanced form of input uh but yeah

  1: 14:21

like let's see which one does better that nothing would make me happier than to be sort of like the the battlefield

  1: 14:27

for multimodal prompting and multimodal uh AI experience I should also shout out

  1: 14:32

baklava as a one the open source um vision and multimodal model um yeah I

  1: 14:40

mean like uh so so I fully understand you want to you want to own the light cone of of multimodal prompting uh I

  1: 14:47

think that that'll probably be the title of the episode um I like it what's uh what's coming up for tail draw 2.

  1: 14:53

now so really the CH draw that you are using now and that I'm using are is

  1: 14:59

basically 2.0 it's been in pre-release for a long time uh really the only change that's going to happen once we

  1: 15:05

launch it is uh we're going to start selling commercial licenses for it uh so if you are using te draw in a commercial

  1: 15:12

product or if you want to then um you know if it's if you're funded or if you have

  1: 15:17

Revenue then you know you'll buy a license and I'll um add you to our our

  1: 15:23

special list of customers um so yeah it's mostly just go to market and the the necessary changes are on there there

  1: 15:29

will be some kind of fun changes secret Saucy changes that that launch but nothing substantial nothing breaking uh

  1: 15:36

we've put a lot of effort in the last like it's crazy that we've only had it open source since May of this year uh

  1: 15:44

this this new version right and yeah it's we've been very busy since then but

  1: 15:49

it is uh it's stable it's robust we put it through

  1: 15:55

you know a lot of usage and caught a lot of the the issues so it's absolutely ready to go um but I have uh one or two

  1: 16:03

conversations with my lawyer before we uh we turn turn over the license and start start moving it that way gotcha um

  1: 16:10

and then uh maybe uh if I could get your commentary uh before we close on on um

  1: 16:15

just the the competition out there like um so you are not you are not the only s

  1: 16:21

of canvas tool I I I think I get now that I was going to ask about like figma fig jam and like they have some AI thing

  1: 16:27

that they're also doing Adobe is also working on similar things canvas also working similar things but they're all individual Point Solutions whereas

  1: 16:34

you're more the open source uh canvas to power all of them um yeah I

  1: 16:41

feel like it's just excal draw that's like the other alternative uh that

  1: 16:46

remains I think excal and I like excal a lot I I contributed there and you know

  1: 16:52

we we retweet each other and tease each other on on Twitter and stuff uh and uh

  1: 16:57

early on I was copying features from them Now They're copying features for me so I am you know but no it's uh

  1: 17:05

it's like the collaboration space is so has so many dominant players like um

  1: 17:13

that I uh I think meix calra are tiny within that

  1: 17:19

um yeah well I there's two things one is that we made this very strange bet on

  1: 17:27

using a kind of a web canvas that our canvas is not like an HTML element or HTML canvas element it's

  1: 17:35

like normal react components all the way down so if you wanted to add something interactive and have that participate in the sort of space of the canvas uh the

  1: 17:44

way that we were doing our our um ey frames kind of like being able to write on top of an eye frame you can't do that

  1: 17:52

in excal draw you can't do that anywhere um that is like a very strange Tech

  1: 17:57

choice that we made around uh te draw that is you know Finding its home in uh

  1: 18:03

in a few different ways most of the people who pick te draw and approach me like the inbound that I get are folks

  1: 18:10

for whom that's like the killer feature um to be able to to put interactive widgets on the canvas using just react

  1: 18:17

uh the yeah I I'll kind of repeat the same point that you you kind of

  1: 18:24

suggested which is that like no matter how good figma's uh like

  1: 18:31

AI solution is and I hope it's great because I love figman I use it um it's not going to solve every possible

  1: 18:37

problem in this space it's not even going to like touch you know like like you can't like none of these things and

  1: 18:44

I mean I already had identified like okay uh there was a point where like any can

  1: 18:50

band board was like uh was Trello right when you when you talked about can bed

  1: 18:55

boards you were talking about Trello can bed boards are in every productivity app now uh I think the same thing is going

  1: 19:00

to happen with collaborative whiteboards it's like people like them uh I'm making it

  1: 19:05

easy uh people are already doing it even without te draw when it's hard like uh

  1: 19:12

like yeah that's going to become a kind of a commodity user experience in a lot of different products um probably you

  1: 19:19

know give me a diagram from a text prompt like yeah that is probably going to be a

  1: 19:24

commodity too give me an image from a text brow like yeah that's just going to be everywhere we're just going to assume that that's you know it's like adding a

  1: 19:30

gift to a to a chat or something that there's no mo there um I do hope that

  1: 19:37

figma has an amazing AI integration but I think the thing that it will help you do is use figma um like it like

  1: 19:46

generating an image won't be super useful but like generating it uh

  1: 19:51

extended autocomplete this uh this uh design absolutely would be and and I

  1: 19:57

hope that they launch something amazing there uh but yeah there's

  1: 20:02

uh I like I said there's just a million different directions that this stuff could go in uh the canvas is just like

  1: 20:10

a input device it's allows a certain type of user experience um and that's

  1: 20:16

certainly not limited to design that's not limited to whiteboarding it's not limited to collaboration or anything like that so um

  1: 20:23

yeah my hope is that there are those like kind of 10,000 products that that could be made with what we're making uh

  1: 20:31

yeah yeah that's that's a really uh great Mission and I I see why you're so passionate about it you're the right

  1: 20:36

team for it um okay uh uh you know a couple lightning round questions um uh

  1: 20:42

sure one which is like if you had some AI capability that you would wish for

  1: 20:48

that you don't have yet what would it be oh that's a really good question

  1: 20:55

uh helps people to do some research I think probably related

  1: 21:01

to it's not quite a CRM but like a a human uh just normal relationship

  1: 21:07

management um this is something that I've never had a problem with until uh until I had a startup actually

  1: 21:14

where there's just a lot more people involved in my life and it's uh um it's

  1: 21:20

hard to keep up with them all and I think this is probably something that like an EA like kind of does of saying

  1: 21:26

like hey there's a birthday coming up or something like that um but also just you know identifying opportunities to to

  1: 21:32

work together uh to to connect or you know who's an expert on this thing that

  1: 21:37

I'm working on like that doesn't always occur to me um and I think there could

  1: 21:43

be I don't know I think the the value of your network um that even if you're good at

  1: 21:51

that you're probably only scratching the surface of like you know how how you could be helping the people around you

  1: 21:57

and how they could be helping you based on like the specific context of like what you're working on and the problems

  1: 22:03

on your table today yeah I've often wanted to build a CRM on top of Twitter uh because you

  1: 22:09

have all the info there about what people working on your past conversations with each other um and

  1: 22:14

your shared interests you know like it it should be able to search you should be like a bare minimum search it but to

  1: 22:20

proactively suggest is uh the next layer um and I guess AI Chief of Staff AI

  1: 22:27

executive assist exactly you know something like that interested yeah yeah um I I think like some people are

  1: 22:33

working on that but the problem is so big that they're they're working on like the automation piece so like Lindy I had

  1: 22:40

at my conference um where they're they're like it's a it's a virtual system you can uh trigger on your

  1: 22:47

desktop or via email um and it's it mostly deals with scheduling um but also

  1: 22:52

helps you do a little bit of research um so that yeah I think the agent field will progress there we might take 10

  1: 22:58

years to do it yeah yeah I can wait it's all good and then and then finally um uh

  1: 23:05

if I to Founders like what what has helped you the most as as a Founder you know you're two years into your

  1: 23:11

journey yeah I think the uh so this this kind of comes a little

  1: 23:18

bit out of uh like what you learn in Art School uh type of thing um but yeah uh

  1: 23:25

but one thing is that that basically like when you're a studio artist or

  1: 23:31

you're in a studio whatever there's no external constraints you just kind of are running on well what do I feel like working on uh and the further you get

  1: 23:38

away from like what do I feel like working on kind of like the worst your work becomes so having like a really

  1: 23:44

good uh feeling for that sort of desire and and being able to respect and follow

  1: 23:50

that that desire as like a um because it's not arbitrary is that like

  1: 23:56

if if you really really feel like working on um on a thing like it that might be the

  1: 24:07

sort of the the tip of a very complex uh Iceberg of analysis of like the field or

  1: 24:13

like what people are talking about or or something uh that you directions and Market or something like that like I

  1: 24:19

don't know I think with with te draw and with as a Founder on this um the thing

  1: 24:25

that I've tried to do and I've tried to preserve is like the uh being able to

  1: 24:31

prioritize based on like what is most interesting right now uh and that is that is true for uh what code we write

  1: 24:38

and like what features we work on that's true for like which Partners we you know we spend time with in terms of who's

  1: 24:44

using teal draw the types of problems that we want to solve like using your own sort of sense of

  1: 24:51

what's interesting as a filter uh and what you want to work on like what sounds like a fun thing to

  1: 24:56

work on right now as a filter is not it's not naive um and it it can be kind

  1: 25:02

of part of your your secret sauce and I think it's uh I think a lot of early

  1: 25:07

Founders are encouraged against that and to to be working backwards from a certain outcome and all that um and yeah

  1: 25:14

you do have to have to do that you have to put that into the um into the mix as well but um you know be sure that you're

  1: 25:21

you're picking the best parts um out of that mix I don't know the parts that you want to work on yeah well I mean what's the point of

  1: 25:29

doing this if you don't have as have some fun indul curiosity the worst case you you'll

  1: 25:34

build something that you love yeah yeah exactly and good things can come out good things can absolutely come out of

  1: 25:40

like uh you 8,000% increase in your followers or something not should I put

  1: 25:47

this on camera I'll I'll share my screen we'll look at my uh my Twitter analytics it's on your

  1: 25:53

yeah oh yeah it is it is I need to update that image I've done it once already uh yeah if if you're a if you're

  1: 26:00

a subst reader the teal draw subst 72 hours into this big make real virality

  1: 26:06

explosion I I sat down and wrote a blog post and I uh I wanted to at least capture that that Vibe um of what it

  1: 26:14

felt like in the middle of that that hurricane uh yeah so it's a pretty fun one it's good to read

  1: 26:20

back uh well I'm sure it's not the last time we'll see you do something crazy viral I'm sure that a lot of people will

  1: 26:26

be exploring te draw I hope a lot of people honestly um one thing I'm thinking about is like in emitting ta

  1: 26:32

draw into my my input box like why can't I can't ta draw be like you know part of

  1: 26:38

the the input hey I'm I'm talking to uh the good folks over at open AI tomorrow

  1: 26:44

fingers crossed maybe we uh maybe we get it in inside of a cat GPT or something

  1: 26:49

cuz yeah like I don't know I want to I need

  1: 26:55

yeah we like what you want to like take a drawing or take a photo and then annotate it or Like You Know sketch

  1: 27:02

something out you should be able to do this yeah exactly yeah it's just a good it's just a good thing uh yeah the the

  1: 27:10

PE people cry out for it I uh can't build it fast enough yeah um well thank

  1: 27:17

you for uh inspiring the rest of us uh thank you for everything and I'm sure we we'll hear for more from over over the

  1: 27:22

next few years uh so uh thanks thanks for your time awesome thank you for your

  1: 27:28

\[Music\]

  1: 27:47

time