---
{"dg-publish":true,"permalink":"/01-consume/videos/deep-seek-the-chinese-ai-that-crashed-the-markets/","title":"DeepSeek - The Chinese AI That Crashed The Markets","tags":["deepseek","ai"]}
---

# DeepSeek - The Chinese AI That Crashed The Markets

![DeepSeek - The Chinese AI That Crashed The Markets](https://www.youtube.com/watch?v=9TU2Ootf7QE?start=1040)

## Description

Let's talk about DeepSeek and DeepSeek-R1.

Resources From Today's Video:
DeepSeek Stock Impact: https://www.cnn.com/2025-01-27/tech/deepseek-stocks-ai-china/index.html
Andreessen DeepSeek Praise: https://x.com/pmarca/status/1882719769851474108
NVIDIA Market Analysis: https://x.com/mreflow/status/1883975293683351722
DeepSeek V3 Paper: https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf
DeepSeek Research: https://arxiv.org/pdf/2501.12948
DeepSeek R1 Guide: https://www.datacamp.com/blog/deepseek-r1
DeepSeek Homepage: https://www.deepseek.com
DeepSeek Signup Issues: https://www.businessinsider.com/deepseek-issues-account-registration-limited-china-phone-numbers-malicious-attack-2025-1
Chinese AI Context: https://x.com/hxiao/status/1882649545982849031
NVIDIA Stock Drop: https://www.investopedia.com/nvidia-stock-worst-day-since-2020-deepseek-ai-wall-street-8780814
Market Impact Analysis: https://www.investing.com/news/stock-market-news/nvidia-sheds-589-billion-in-market-cap-on-deepseek-concerns-most-in--history-3831096
DeepSeek Training Discussion: https://manifold.markets/AndrewPeterson960c/did-deepseek-lie-about-the-number-o
AI Compute Demand: https://x.com/garrytan/status/1883037020207153580
Jevons AI Paradox: https://x.com/satyanadella/status/1883753899255046301
Jevons Definition: https://en.m.wikipedia.org/wiki/Jevons_paradox
Janus Model Release: https://x.com/rowancheung/status/1883917681642070282
Janus Technical Report: https://github.com/deepseek-ai/Janus/blob/main/janus_pro_tech_report.pdf


Time Stamps:
  0: 00 Intro
  1: 02 Explaining DeepSeek-V3
  4: 11 Explaining DeepSeek-R1
  6: 37 Why People Are Freaking Out
  8: 18 DeepSeek is a Side-Project
  9: 09 Counter-Arguments To Freak Out
  13: 00 Jevon's Paradox
  15: 12 How To Use DeepSeek Yourself (Plus Examples)
  20: 41 DeepSeek Janus-Pro
  22: 35 Final Thoughts

## Notes

## Transcript

## Intro

  0: 00

there's one new AI advancement that has

  0: 02

the tech World sort of spinning right

  0: 04

now we're getting articles like this a

  0: 06

shocking Chinese AI advancement called

  0: 08

Deep seek is sending us stocks plunging

  0: 10

we can see on January 27th the day I'm

  0: 12

recording this video Nvidia lost over

  0: 15

177% of its value according to leor here

  0: 18

the release of deep seek made Nvidia

  0: 20

stock crash by 177% or

  0: 23

465 billion dollar mark andreon one of

  0: 26

silicon Valley's most prominent

  0: 27

investors said deep seek R1 is one of

  0: 29

the most amazing and impressive

  0: 30

breakthroughs I've ever seen and as open

  0: 33

source a profound gift to the world so

  0: 35

in this video I want to do my best to

  0: 36

try to explain what deep seek is why the

  0: 38

stock market is freaking out about it

  0: 40

talk about some speculation around it

  0: 42

talk about what I believe is going to be

  0: 44

the long-term end result of something

  0: 46

like deep seek and even show you how you

  0: 49

can use it yourself if you want I want

  0: 50

to give you the whole picture of deep

  0: 52

seek so that you're looped in on the

  0: 54

biggest story in the AI world right now

  0: 56

as well as have all of the necessary

  0: 58

context to speak intelligently about it

  1: 01

and form your own opinions on it to

## Explaining DeepSeek-V3

  1: 02

really understand deep seek R1 and why

  1: 05

people are freaking out about it we need

  1: 07

to go back to a research paper that came

  1: 09

out last month in December of 2024

  1: 12

called Deep seek V3 now deep seek V3 was

  1: 16

a large model with 671 billion

  1: 19

parameters however it used what's called

  1: 21

a mixture of experts model meaning that

  1: 23

it didn't use all of these parameters

  1: 25

every single time it was prompted in

  1: 28

fact it only used 37 billion activated

  1: 31

parameters for each token what made this

  1: 33

model really really special is this line

  1: 36

right here despite its excellent

  1: 37

performance deep seek V3 requires only

  1: 40

2.78 million h800 GPU hours for its full

  1: 45

training to put that into perspective

  1: 47

according to perplexity GPT for's

  1: 49

training required approximately 60

  1: 52

million GPU hours again compared to just

  1: 55

2.78 million h800 GPU hours and when

  1: 59

open AI did it with gp4 they were using

  2: 02

really high-end a100 gpus from Nvidia

  2: 05

these h800 gpus that deep seek was using

  2: 09

was because China actually has

  2: 10

restrictions on what gpus the US can

  2: 14

send them so Nvidia developed these h800

  2: 17

gpus to make them compliant and actually

  2: 20

be allowed to send them to China but

  2: 21

they're not nearly as powerful as the

  2: 23

gpus that the us-based AI companies have

  2: 27

access to so they were able to train

  2: 29

this model about

  2: 30

95% faster than what something like GPT

  2: 33

40 was trained on with less powerful

  2: 37

gpus than what companies like open aai

  2: 39

had access to and then when we look at

  2: 41

the benchmarks here we can see deep seek

  2: 43

V3 is this blue dashed line GPT 40 is

  2: 47

this sort of Darker yellow line here the

  2: 50

second to last line and Claude 3.5 Sonet

  2: 52

is this final line here and in things

  2: 55

like math and coding this deep seek V3

  2: 58

scored pretty close I mean in math it

  3: 00

did a lot better than GPT 40 and about

  3: 04

on par with Claude on the MML U which

  3: 07

tests for a variety of tasks for large

  3: 09

language models it was the second

  3: 11

highest only behind Claude 3.5 Sonet in

  3: 15

math it scored higher than pretty much

  3: 17

everything and in this code Force

  3: 19

Benchmark it crushed the other models

  3: 21

and in swe bench which tests how well AI

  3: 25

does on solving problems on GitHub it

  3: 28

was only barely out scored by Claude 3.5

  3: 31

Sonic so this deep seek V3 again

  3: 34

required 95% less compute to train and

  3: 38

got results on par with GPT 40 and

  3: 41

Claude 3.5 Sonet all while being open

  3: 43

source and publicly available however

  3: 46

around the same time this came out in

  3: 48

December we got access to models like 01

  3: 50

01 Pro open AI showed off their next

  3: 53

models in' 03 and so some of these

  3: 56

benchmarks didn't look as exciting

  3: 58

because people were cons considering 01

  4: 00

and 03 the new state-ofthe-art models

  4: 02

and these are being compared to the sort

  4: 04

of last generation of state-of-the-art

  4: 06

models so why are people freaking out

  4: 08

about it all of a sudden now this week

## Explaining DeepSeek-R1

  4: 11

well last week deep seek released some

  4: 13

new research in their deep seek R1 now

  4: 16

deep seek R1 uses deep seek V3 so the

  4: 20

model we were just looking at that was

  4: 22

really fast and a lot less expensive to

  4: 24

train on lesser gpus it's using that as

  4: 27

its underlying model however this model

  4: 29

went through a new fine-tuning method on

  4: 33

top of the existing V3 model so if we

  4: 35

read the abstract here it says deep seek

  4: 37

R1 a model trained via large scale

  4: 40

reinforcement learning without

  4: 41

supervised fine-tuning as a preliminary

  4: 43

step demonstrates remarkable reasoning

  4: 45

capabilities basically they asked it a

  4: 47

whole bunch of questions that they

  4: 49

already knew the answers to and had it

  4: 51

double check itself against the existing

  4: 54

answer key essentially now this is a

  4: 57

super oversimplification but that's kind

  4: 59

of how the reinforcement learning worked

  5: 01

it was unsupervised reinforcement

  5: 03

learning so it would ask it for example

  5: 05

a math question the model would try to

  5: 07

figure out the answer on its own and

  5: 09

then double check its response to

  5: 12

essentially like an answer key of the

  5: 14

known answers it did that with math it

  5: 16

did that with coding it did that with

  5: 18

the various skills that they wanted it

  5: 20

to specialize on now the other thing

  5: 22

that makes R1 Stand Out specifically is

  5: 25

that it actually uses Chain of Thought

  5: 27

prompting at the time of inference so

  5: 30

when you put a prompt in you'll actually

  5: 32

see it think through and even correct

  5: 35

itself it might think through an A

  5: 37

logical way of doing something and then

  5: 39

go actually this might be the better way

  5: 40

to do it and then think through that so

  5: 42

it has this reasoning process that it

  5: 45

goes through right after you ask it a

  5: 47

question now that's not actually

  5: 49

specifically detailed in the research

  5: 50

paper but we can see here that the

  5: 53

template requires deep seek r10 to First

  5: 55

produce a reasoning process followed by

  5: 57

the final answer and as I recently L

  5: 59

mentioned we saw 01 from open AI we saw

  6: 03

demos of 03 making deep seek V3 feel a

  6: 06

little bit less impressive but when you

  6: 08

combine the fact that V3 was very very

  6: 11

inexpensive to train on lesser Hardware

  6: 14

than what we have in the US and now with

  6: 17

this new R1 model that uses

  6: 19

reinforcement learning to fine-tune the

  6: 21

model as well as a sort of Chain of

  6: 24

Thought reasoning when you give it a

  6: 26

prompt now we're actually getting this

  6: 28

open source model to give us results

  6: 31

just as good if not better than what

  6: 33

we're seeing out of open ai's

  6: 35

state-of-the-art closed model that's why

## Why People Are Freaking Out

  6: 37

people are freaking out so check out The

  6: 39

Benchmark comparison here once again the

  6: 42

blue with the little lines through it is

  6: 44

deep seek R1 this dark gray bar here is

  6: 47

open AI 01 and this light blue line on

  6: 49

the very right was deep seek V3 the

  6: 52

model that sort of preceded this R1

  6: 54

model we can see in pretty much every

  6: 56

single Benchmark it either outperformed

  6: 59

or performed just as good as open ai's

  7: 02

01 model so it's about on par with what

  7: 05

we're getting out of 01 for code it's

  7: 06

beating 01 in math in sort of general

  7: 09

purpose use it's about on par with 01

  7: 12

and in this ability to solve GitHub

  7: 14

problems it is leading the pack open AI

  7: 17

01 Clos Source model minimum 20 bucks a

  7: 20

month to use trained on thousands of A1

  7: 22

100s or h100s from Nvidia and now we've

  7: 26

got this deep seek R1 model that was

  7: 29

trained on lesser gpus in way less time

  7: 33

that does just as good and that freaks

  7: 36

people out now coming back to these

  7: 38

headlines a shocking Chinese AI

  7: 39

advancement called Deep seek is sending

  7: 41

us stocks plunging like we saw Nvidia

  7: 44

had a big drop today the thinking behind

  7: 46

this drop is that well maybe we don't

  7: 49

need nearly as many gpus as we thought

  7: 52

we did to train these next level AI

  7: 55

models if all of the big research

  7: 56

companies that are training AI models

  7: 59

can now do it at 5% of the time and cost

  8: 03

as before and still get like 01 level

  8: 05

results why are people going to need to

  8: 07

buy as many gpus and this had a ripple

  8: 10

effect we also saw meta and Google and

  8: 12

Oracle and most of the big tech

  8: 14

companies had a drop as a result today

  8: 17

because of this what makes this even

## DeepSeek is a Side-Project

  8: 18

more fascinating is this is basically a

  8: 21

side project of this company according

  8: 23

to this tweet from Han Xiao I'm not sure

  8: 26

if I mispronounced that or not he's

  8: 27

saying that the company that owns deeps

  8: 29

is a Quant company they've been working

  8: 31

together for many years already they're

  8: 32

super smart guys with a top math

  8: 34

background and they happen to own a lot

  8: 36

of gpus for trading and Mining purposes

  8: 39

and deep seek is their side project for

  8: 42

squeezing those gpus so they bought the

  8: 44

gpus for investments in crypto and Quant

  8: 47

trading and things like that and

  8: 48

apparently they had more power than they

  8: 50

needed so they started training their

  8: 52

own models Han here followed up saying

  8: 54

that nobody in China even takes them

  8: 56

seriously so it's not that Chinese AI

  8: 59

team are lean and great and can do such

  9: 01

great things but it's only deep seek

  9: 03

that's lean and mean Chinese AI

  9: 05

companies are just as fat and heavy on

  9: 07

marketing just like their American

  9: 08

counterparts but I actually do think

## Counter-Arguments To Freak Out

  9: 10

Nvidia is going to recover I think my

  9: 12

personal opinion is that people are

  9: 14

starting to get worried that Nvidia was

  9: 16

getting overvalued and they saw this

  9: 18

news as a chance to get out a few people

  9: 20

probably started getting out it caused a

  9: 21

little bit of a panic more people

  9: 23

panicked and got out not Financial

  9: 24

advice but I think it's going to recover

  9: 26

there are a few things I want to share

  9: 27

about deep seek that make them a little

  9: 29

bit more ambiguous and also some

  9: 31

counterarguments that I want to share

  9: 32

that make me think that selling Nvidia

  9: 34

right now was probably a little bit

  9: 36

misguided let's start with some of the

  9: 37

controversy around it according to this

  9: 39

Investopedia article here Analyst at

  9: 41

City Bank expressed doubt that deep seek

  9: 44

had achieved its results without the

  9: 45

most advanced chips they maintained

  9: 47

their buy rating on nvidia's stock and

  9: 50

said they don't expect major US AI

  9: 52

companies to move away from using its

  9: 53

Advanced gpus Alexander Wang the CEO of

  9: 56

scale AI also sort of disputes whether

  9: 59

or not they actually used as few of the

  10: 02

gpus that they said they used and

  10: 04

whether or not they actually used h800

  10: 07

the sort of dumb down versions of the

  10: 09

h100s or they use something else so he

  10: 12

says he thinks it's closer to 50,000

  10: 14

more powerful Nvidia Hopper gpus or

  10: 17

h100s but believes the company can't

  10: 19

disclose the truth due to us export

  10: 22

controls on AI chips again I mentioned

  10: 24

this earlier but the reason they're

  10: 25

claiming they used

  10: 27

800s is because the US basic basically

  10: 29

limits the amount of compute power that

  10: 32

are available in the chips that we sell

  10: 34

to China so Nvidia built these h800

  10: 38

which are less powerful in order to

  10: 40

still be able to sell these things to

  10: 41

China but according to Alexander Wang

  10: 43

here and also the City Bank official

  10: 46

they actually belied that they were

  10: 47

using a lot more gpus than they claimed

  10: 49

to be using and a lot more powerful of

  10: 51

gpus than they claimed to be using

  10: 53

they're just claiming they used h800 to

  10: 56

not get themselves in trouble there's

  10: 58

also been some rumors around that maybe

  11: 00

they didn't start from scratch maybe

  11: 02

they used like a llama model as a

  11: 04

starting point and then trained on top

  11: 06

of that from all of my digging and

  11: 08

research there's no real weight that I

  11: 10

can find to those claims other than the

  11: 12

fact that sometimes some of the prompts

  11: 14

will claim that the model was created by

  11: 16

open AI or if you asked it to

  11: 18

troubleshoot something for you it might

  11: 21

give you instructions on how to

  11: 22

troubleshoot something in chat GPT but

  11: 24

the reality is it was likely trained on

  11: 26

just a ton of open internet data and

  11: 29

there's a lot of chat GPT and open AI

  11: 32

instructions publicly available on the

  11: 34

internet therefore a lot of that was

  11: 36

probably in his training data just by

  11: 38

default and the way they collected the

  11: 40

data there's this site manifold. markets

  11: 43

here where you can bet on random things

  11: 46

and they asked did deep seek lie about

  11: 47

the number of gpus they Ed in training

  11: 50

of V3 right now it's saying there's a

  11: 52

38% chance that they did so seemingly

  11: 56

most people don't believe that they

  11: 58

actually cheated with this this but as

  12: 00

of right now everybody's just kind of

  12: 01

taking deep seeks word for it like we

  12: 04

haven't seen receipts or anything now I

  12: 06

summed up my overall thoughts in this

  12: 08

expost here most people are saying the

  12: 10

dip is because models can be trained

  12: 11

with way less compute now and that's not

  12: 13

good for NVIDIA and that's most likely

  12: 15

the reason for the dip but here's my

  12: 17

counter arguments I just went over this

  12: 19

one many analysts claim that deep seek

  12: 20

either trained on much more powerful

  12: 22

gpus but can't talk about it due to

  12: 24

restrictions or they started with a

  12: 25

different set of model weights like

  12: 27

llama where the expensive part of the

  12: 29

training had already been done this is

  12: 30

just speculation but it is fairly

  12: 32

widespread speculation I also believe

  12: 35

that if we know we can use less compute

  12: 38

to train fairly powerful models people

  12: 40

will still throw way more compute at it

  12: 43

to train even more powerful models so my

  12: 46

second Point here if in fact it did just

  12: 48

get much cheaper to train 01 level

  12: 49

models with far less compute many

  12: 51

companies will likely still throw more

  12: 53

compute at it if we can train this level

  12: 55

of model with this low of compute

  12: 56

imagine what we can train if we 10x or

  12: 59

100 Exit and then finally the point that

## Jevon's Paradox

  13: 01

I think is the most important point and

  13: 03

after I said this I noticed that a whole

  13: 04

bunch of other people said it likely

  13: 06

before I did if it is actually a whole

  13: 08

ton cheaper to train New Foundation

  13: 09

models that really means many of the big

  13: 11

companies like open AI have even less of

  13: 13

a moat than we thought it opens the

  13: 15

doors for many new companies and many

  13: 16

new open- source models to pop up which

  13: 18

all need compute the lack of compute

  13: 20

needed to train a single model seems

  13: 22

like it will counterbalance with more

  13: 24

companies buying gpus because now they

  13: 26

too can create their own Foundation

  13: 28

models specifically tailored to their

  13: 30

needs essentially maybe companies will

  13: 32

buy less gpus per company but this could

  13: 34

be counterbalanced by a lot more

  13: 36

companies getting into the game due to

  13: 38

lower barrier of entry and of course

  13: 40

after I posted this I saw this post from

  13: 42

Gary tan posted several days before my

  13: 45

post say do people really believe this

  13: 47

if training models get cheaper faster

  13: 48

and easier the demand for inference

  13: 50

actual real world use of AI will grow

  13: 53

and accelerate even faster which assures

  13: 55

the supply of compute will be used and

  13: 57

this was in response to somebody's

  13: 59

saying China's deep seat could represent

  14: 00

the biggest threat to us Equity markets

  14: 02

as the company seems to have built a

  14: 04

groundbreaking AI model at an extremely

  14: 06

low price and without having access to

  14: 08

Cutting Edge chips Satia nadela the CEO

  14: 10

of Microsoft pointed out javon's Paradox

  14: 12

strikes again as AI gets more efficient

  14: 14

and accessible we will see its use

  14: 16

Skyrocket turning it into a commodity we

  14: 18

just can't get enough of this is that

  14: 20

same three that I was making here if we

  14: 23

take a peek at what javon's Paradox is

  14: 25

here on Wikipedia The javon's Paradox

  14: 28

occurs when technological advancements

  14: 30

make a resource more efficient to use

  14: 32

thereby reducing the amount needed for a

  14: 34

single application however because the

  14: 36

cost of using the resource drops overall

  14: 38

demand increases to the point where

  14: 40

Total Resource consumption actually

  14: 42

Rises rather than Falls so basically if

  14: 45

we can do more with less compute that

  14: 47

doesn't mean people are going to buy

  14: 49

less compute they're going to buy more

  14: 51

compute to do even more with less

  14: 53

compute and also the barrier to entry

  14: 55

just got lower for more companies to

  14: 57

develop their own models so I feel like

  15: 00

in the end this will be a net win for

  15: 02

NVIDIA but again this is not Financial

  15: 05

advice I would take everything I'm

  15: 06

saying with the grain of salt I'm just

  15: 08

sort of digging through all the

  15: 09

resources I've come across and trying to

  15: 11

put the puzzle pieces together for you

## How To Use DeepSeek Yourself (Plus Examples)

  15: 12

now anybody can use deep seek right now

  15: 15

there's multiple ways to do it you can

  15: 16

go to deep seek.com and play with it

  15: 19

straight on their website you can click

  15: 21

Start now it'll log you in through a

  15: 23

Google account and if you want to use

  15: 24

the R1 model you click this button that

  15: 26

says deep think R1 that will make sure

  15: 29

you're using R1 I'll tell it to invent a

  15: 31

complex logic problem and then solve it

  15: 34

and when I do that you can see it

  15: 35

actually says it's thinking and you can

  15: 37

actually see it think in real time okay

  15: 40

I need to invent a complex logic problem

  15: 41

and then solve it let me start by

  15: 43

brainstorming etc etc wait I remember

  15: 45

there's a classic puzzle type where

  15: 46

there are three types of people another

  15: 48

angle wait here's another idea let me

  15: 50

outline the problem but it makes it more

  15: 52

complex alternative like you could just

  15: 53

see it thinking through all of this

  15: 55

stuff as I'm talking through it here

  15: 57

this is what makes R1 different than V3

  16: 00

again the underlying model that this was

  16: 02

built on was that V3 that I talked about

  16: 04

in the very beginning this R1 is the one

  16: 07

that introduced this extra thinking

  16: 09

through the problem as well as the

  16: 11

reinforcement learning fine-tuning

  16: 13

process okay so that was wild it

  16: 15

actually thought through this process

  16: 17

for like a good five minutes or so you

  16: 19

could see all of the thinking that it

  16: 21

did here and it thought for a long time

  16: 23

208 seconds so I guess closer to like 4

  16: 26

minutes it then created its own logic

  16: 29

problem and then went on to solve the

  16: 30

logic problem but that's not the only

  16: 32

way to get it as of right now deep seek

  16: 34

is also the number one app inside of the

  16: 38

free app store on the iPhone so if you

  16: 40

want to use it on mobile you can get it

  16: 42

there as well all of this news and

  16: 44

everybody talking about it has actually

  16: 46

caused it to pass chat GPT now if you do

  16: 48

run into issues trying to actually use

  16: 50

deep seek this article also came out on

  16: 52

Business Insider deep seek temporary

  16: 54

limited new signups citing large scale

  16: 57

malicious attacks I don't know if the is

  16: 59

still ongoing I didn't see any errors or

  17: 01

messages when I tried to log into deep

  17: 03

seek but the article does say deep seek

  17: 05

said only users with a china-based phone

  17: 06

number could register for a new count a

  17: 08

measure taken because it had recently

  17: 10

faced large scale malicious attacks

  17: 12

apparently the issue has sort of worked

  17: 14

itself out as of the time of this

  17: 15

recording but just know that it could be

  17: 17

up or down a little bit if you are

  17: 19

trying to log in and use it there's also

  17: 21

a couple ways to use distilled versions

  17: 23

of deep seek now a distilled version is

  17: 25

using a smaller underlying model so

  17: 28

instead of us using deep seek V3 as its

  17: 31

underlying model it might be using

  17: 33

something like Quinn 7B Quinn 14b or one

  17: 36

of the Llama models if you head over to

  17: 38

the console. gro.com you can actually

  17: 41

use deep seek in grock they're using a

  17: 43

distilled llama 70b model so that

  17: 46

underlying model that it's using is

  17: 48

llama 70b but it's using r1's sort of

  17: 51

thinking ability on top of it and

  17: 53

because grock is insanely fast you get

  17: 56

results really really quickly so if I

  17: 58

ask the same question and tell it to

  18: 00

invent a complex logic problem and then

  18: 02

solve it and then submit it using grock

  18: 05

we can see that it is thinking but it's

  18: 07

just going really really really fast cuz

  18: 09

that's just what grock does when it's

  18: 10

using grock's Cloud gpus it just blows

  18: 14

everything else out of the water in

  18: 16

terms of speed now that it's done we can

  18: 17

see all of the thinking through that it

  18: 19

did here it's a little bit less

  18: 21

formatted than the main web version but

  18: 23

you can see here's where the thinking

  18: 25

starts we scroll all the way down here

  18: 27

and we can see that it gave us a complex

  18: 30

problem and solved its own problem and

  18: 32

it did the whole thing in just a few

  18: 34

seconds and then finally you can run it

  18: 36

completely locally if you want I

  18: 38

recommend a tool called LM studio for

  18: 40

this it's a free tool that makes it

  18: 42

really easy to download and add models

  18: 44

so I downloaded LM Studio here if I want

  18: 46

to add new models I just come to this

  18: 48

discover button and then I can just type

  18: 50

deep seek up here in the top it'll find

  18: 52

all the different versions of deep seek

  18: 54

that you can download and use you find

  18: 56

the one you want to use and then you

  18: 57

click this little download button to

  18: 59

grab it onto your computer and then you

  19: 01

could run the model locally on your own

  19: 03

computer right now I'm using the Deep

  19: 04

seek R1 distill Quinn 14b model so the

  19: 08

underlying model is the Quinn 14b for

  19: 10

this one let's give it the same prompt

  19: 12

create a complex logic problem and then

  19: 14

solve it and we can see it's got its

  19: 16

whole thinking box where it goes through

  19: 17

and thinks through the whole problem on

  19: 19

its own we can see it thought through

  19: 20

the whole process it actually thought

  19: 22

for one minute and 55 seconds to get

  19: 25

through this whole process here when I

  19: 26

ran it locally now I am using it Nvidia

  19: 29

5090 GPU so I'm pretty much using the

  19: 32

most top-of-the-line consumer GPU you

  19: 34

can get and it did it all in about 2

  19: 36

minutes we can see how much it actually

  19: 38

thought through before finally at the

  19: 41

end giving us the logic problem as well

  19: 43

as its answer to the logic problem and

  19: 45

it did it at a rate of 63.4 two tokens

  19: 48

per second the nice thing about using LM

  19: 50

studio is once you've downloaded the

  19: 52

model you still need to be connected to

  19: 54

the internet to download the model but

  19: 55

once the model's downloaded on your

  19: 56

computer you could unplug the internet

  19: 58

turn off your Wi-Fi and this would have

  20: 00

given me the same response in the same

  20: 01

amount of time I can be completely

  20: 03

offline it's sending nothing to the

  20: 05

cloud if I was worried about privacy or

  20: 07

data protection or anything like that I

  20: 09

can run these models completely offline

  20: 11

with no issues using something like LM

  20: 14

studio and I would know for certain that

  20: 17

none of my information is actually

  20: 19

getting back to any sort of cloud

  20: 21

provider or anything like that and so

  20: 23

that's how you can use deep seek right

  20: 25

now if you want to again You've Got Deep

  20: 27

seek.com you've got the deep seek mobile

  20: 29

app you can run it straight from grock

  20: 31

using a distilled llama version or you

  20: 34

can use LM studio and use any variation

  20: 37

of distilled model on your own local

  20: 40

computer and if you think the story for

## DeepSeek Janus-Pro

  20: 42

deep seek ends there well the day I'm

  20: 44

recording this January 27th that same

  20: 46

company dropped new research this time

  20: 49

in an AI image generation model this new

  20: 52

model is called Janice Pro 7B so not

  20: 55

only are they creating top-of-the line

  20: 57

pretty much state-ofthe-art art new

  20: 59

large language models at cheaper costs

  21: 02

and doing it a lot faster they now

  21: 04

appear to also be doing this with AI

  21: 06

image generation now I haven't played

  21: 08

with this model myself yet so I don't

  21: 10

know too much about it it literally came

  21: 11

out while I was in the process of

  21: 13

recording this video but if we look at

  21: 15

their benchmarks here we can see this

  21: 16

new Janice Pro is the blue with the

  21: 18

white lines on it and it pretty much

  21: 20

outperformed in both of these benchmarks

  21: 23

against sdxl stable diffusion 1.5 pixart

  21: 26

a dolly 3 sd3 medium and emu 3 gen which

  21: 30

I believe is meta's AI image model so

  21: 33

not only are they disrupting the large

  21: 36

language models they're now also trying

  21: 38

to disrupt the AI image generation

  21: 40

models as well as I learn more about

  21: 43

this Janice model we'll talk about it in

  21: 45

some future videos I just wanted to add

  21: 47

this to the mix because it's that same

  21: 49

deep seek company that has people kind

  21: 51

of freaking out right now but there you

  21: 53

have it there's kind of the lay of the

  21: 54

land you're going to hear a lot of

  21: 56

people talking about deep seek and deep

  21: 57

seek R1 it's going to be in the news

  22: 00

more and more there's going to be a lot

  22: 01

of videos about it a lot of expost about

  22: 03

it I wanted to break down the facts and

  22: 05

what we know about it and some opinions

  22: 07

from other people and just make sure you

  22: 09

had the lay of the land and know exactly

  22: 11

what it's about and can speak

  22: 13

intelligently on it there's probably a

  22: 14

few things I've left out I'm sure

  22: 16

they'll get mentioned in the comments if

  22: 18

I did but that is deep seek R1 and now

  22: 21

deep seek Janice and that's why Nvidia

  22: 24

and the stock market were affected by it

  22: 27

at least that's why people are claiming

  22: 29

the stock market was affected by it I

  22: 31

think it's just a sort of short-term

  22: 32

thing but we'll see how it all plays out

## Final Thoughts

  22: 35

hopefully you enjoyed this video

  22: 36

hopefully you learn something new

  22: 37

hopefully you feel more looped in if you

  22: 39

like breakdowns like this and you want

  22: 40

more AI news more tutorials and to learn

  22: 42

about more cool AI tools make sure you

  22: 44

like this video And subscribe to this

  22: 46

Channel and I will make sure a lot more

  22: 47

of this kind of stuff shows up in your

  22: 49

YouTube feed and of course if you

  22: 50

haven't already check out futur tools.

  22: 53

this is the site where I curate all the

  22: 54

cool AI tools I come across I keep your

  22: 56

AI news up to dat on a daily basis is

  22: 58

here and I have a free newsletter where

  23: 00

I share just the coolest tools and most

  23: 02

important news from the week it's twice

  23: 05

a week it'll hit your inbox and if you

  23: 07

sign up you'll also get free access to

  23: 08

the AI income database a database of

  23: 11

cool ways to make money using various AI

  23: 13

tools again it's all free you can find

  23: 15

it over at future tools. thank you so

  23: 17

much for hanging out with me thanks for

  23: 18

nerding out with me really really

  23: 20

appreciate you hopefully I'll see you in

  23: 21

the next one bye-bye