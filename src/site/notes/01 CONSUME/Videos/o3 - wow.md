---
{"dg-publish":true,"permalink":"/01-consume/videos/o3-wow/","title":"o3 - wow"}
---

# o3 - wow

![o3 - wow](https://www.youtube.com/watch?v=YAgIh4aFawU)

## Description

o3 isn’t one of the biggest developments in AI for 2+ years because it beats a particular benchmark. It is so because it demonstrates a reusable technique through which almost any benchmark could fall, and at short notice. I’ll cover all the highlights, benchmarks broken, and what comes next. Plus, the costs OpenAI didn’t want us to know, Genesis, ARC-AGI 2, Gemini-Thinking, and much more. 

AI Insiders ($9!): https://www.patreon.com/AIExplained

  FrontierMath: https://epoch.ai/frontiermath
  https: //arxiv.org/pdf/2411.04872
Chollet Statement:https://arcprize.org/blog/oai-o3-pub-breakthrough
MLC Paper: 
  https: //www.scientificamerican.com/article/new-training-method-helps-ai-generalize-like-people-do/?utm_campaign=socialflow&utm_source=twitter&utm_medium=social
AlphaCode 2: https://storage.googleapis.com/deepmind-media/AlphaCode2/AlphaCode2_Tech_Report.pdf
Human Performance on ARC-AGI: https://arxiv.org/pdf/2409.01374v1
Wei Tweet ‘3 months’:https://x.com/_jasonwei/status/1870184982007644614
Deliberative Alignment Paper: https://openai.com/index/deliberative-alignment/
Brown Safety Tweet: https://x.com/polynoamial/status/1870196476908834893
Swe-Bench Verified: https://openai.com/index/introducing-swe-bench-verified/
Amodei Prediction: https://x.com/OfirPress/status/1858567863788769518
David Dohan: 16 hours https://x.com/dmdohan/status/1870171404093796638
OpenAI Personal Writing: https://openai.com/index/learning-to-reason-with-llms/
  https: //simple-bench.com/
John Hallman Tweet: https://x.com/johnohallman/status/1870233375681945725

  00: 00 - Introduction
  01: 19 - What is o3?
  03: 18 - FrontierMath
  05: 15 - o4, o5
  06: 03 - GPQA
  06: 24 - Coding, Codeforces + SWE-verified, AlphaCode 2
  08: 13 - 1st Caveat
  09: 03 - Compositionality?
  10: 16 - SimpleBench?
  13: 11 - ARC-AGI, Chollet
  20: 25 - Safety Implicaitons


AI Insiders: https://www.patreon.com/AIExplained


Non-hype Newsletter: https://signaltonoise.beehiiv.com/

  Podcast: https://aiexplainedopodcast.buzzsprout.com/

## Notes

## Transcript

## Introduction

  0: 00

the model announced tonight by open AI

  0: 03

called 03 could well be the final

  0: 07

reputation the artificial intelligence

  0: 09

was hitting a wall open AI it seems have

  0: 13

not so much as surmounted that wall they

  0: 16

have supplied evidence that the wall did

  0: 18

not in fact exist the real news of

  0: 20

tonight isn't for me the 03 just crushed

  0: 24

benchmarks designed to stand for decades

  0: 28

it's that open AI have shown that

  0: 30

anything you can Benchmark the O Series

  0: 33

of models can eventually beat let me

  0: 35

invite you to think of any challenge if

  0: 38

that challenge is ultimately susceptible

  0: 40

to reasoning and if the reasoning steps

  0: 43

are represented anywhere in the training

  0: 45

data the O Series of models will

  0: 47

eventually Crush that challenge yes it

  0: 50

might have cost 03 or open AI 350 Grand

  0: 55

in thinking time to beat some of these

  0: 57

benchmarks but costs alone will not hold

  1: 00

the tide at Bay for long yes I'll give

  1: 02

the caveats I always do and there are

  1: 05

quite a few but I must admit and I will

  1: 07

admit that this is a Monumental day in

  1: 10

Ai and pretty much everyone listening

  1: 13

should adjust their timelines before we

  1: 15

get to the absolutely crazy benchmark

  1: 18

scores what actually is 03 what did they

## What is o3?

  1: 21

do well I've given more detail on the 0

  1: 24

series of models in previous videos on

  1: 26

this channel but let me give you a

  1: 28

30second summary I AI get the base model

  1: 31

to generate hundreds or potentially

  1: 33

thousands of candidate Solutions

  1: 35

following long chains of thought to get

  1: 37

to an answer a verifier model likely

  1: 40

based on the same base model then

  1: 42

reviews those answers and ranks them

  1: 44

looking for classic calculation mistakes

  1: 46

or reasoning mistakes that verifier

  1: 48

model of course is trained on thousands

  1: 51

of correct reasoning steps but here's

  1: 53

the kicker in scientific domains like

  1: 55

mathematics and coding you can know what

  1: 57

the correct answer is so when the system

  2: 00

generates a correct set of reasoning

  2: 02

steps steps that led to the correct

  2: 04

verified answer then the model as a

  2: 07

whole can be fine-tuned on those correct

  2: 09

steps this fundamentally shifts us from

  2: 12

predicting the next word to predicting

  2: 14

the series of tokens that will lead to

  2: 16

an objectively correct answer that

  2: 18

fine-tuning on just the correct answers

  2: 21

can be classed as reinforcement learning

  2: 23

so what then is 03 well more of the same

  2: 27

as one researcher at open aai told us

  2: 29

tonight 03 is powered by further scaling

  2: 33

up reinforcement learning Beyond 01 no

  2: 35

special ingredient added to 01 it seems

  2: 38

no secret Source no wall and that's why

  2: 41

I said in the intro if you can Benchmark

  2: 44

it the O Series of models can eventually

  2: 46

beat it what I don't want to imply

  2: 48

though is that this leap forward with 03

  2: 51

was entirely predictable yes I talked

  2: 53

about AI being on an exponential in my

  2: 56

first video of this year and I even

  2: 59

referenced verifiers and inference time

  3: 01

compute that's the fancy term for

  3: 03

thinking longer and generating more

  3: 05

candidate Solutions but I am in pretty

  3: 07

good company in not predicting this much

  3: 10

of a leap this soon let's briefly start

  3: 13

with Frontier Math and how did O3 do

  3: 15

this is considered today the toughest

  3: 17

mathematical Benchmark out there this is

## FrontierMath

  3: 20

a data set that consists of Novel

  3: 22

unpublished and also very hard extremely

  3: 25

hard yeah very very hard problems even

  3: 26

turn houses you know it would take

  3: 28

professional mathematicians hours or

  3: 30

even days to solve one of these problems

  3: 33

and today all offerings out there have

  3: 37

less than 2% accuracy on this Benchmark

  3: 39

and we're seeing with 03 in aggressive

  3: 41

test time settings we're able to get

  3: 43

over

  3: 44

25% yeah they didn't say this in the

  3: 46

announcement tonight but the darker part

  3: 48

of the bar the smaller part is the model

  3: 51

getting it right with only one attempt

  3: 53

the lighter part of the bar is when the

  3: 55

model gave lots of different solutions

  3: 58

but the one that came up the most most

  4: 00

often the consensus answer was the

  4: 02

correct answer we'll get to time and

  4: 04

cost in a moment but those details aside

  4: 06

the achievement of 25% is Monumental

  4: 09

here's what Terren to said at the

  4: 12

beginning of November these questions

  4: 14

are extremely challenging he's arguably

  4: 16

the smartest guy in the world by the way

  4: 18

I think that in the near term basically

  4: 20

the only way to solve them short of

  4: 23

having a real domain expert in the area

  4: 25

is by a combination of a semi-expert

  4: 27

like a grad student in a related field

  4: 29

pair with some combination of a modern

  4: 31

Ai and lots of other algebra packages

  4: 34

given that 03 doesn't rely on algebra

  4: 37

packages he's basically saying that O3

  4: 40

must be a real domain expert in

  4: 42

mathematics summing up Terren to said

  4: 45

that this Benchmark would resist AIS for

  4: 48

several years at least Sam Orman seem to

  4: 50

imply that they were releasing the full

  4: 52

03 perhaps in February or at least the

  4: 55

first quarter of next year and that

  4: 57

implies to me at least that they didn't

  4: 59

just bust every single GPU on the planet

  5: 02

to get this score but could never serve

  5: 04

it realistically to the public or to

  5: 06

phrase things another way we are not at

  5: 08

the limits of the compute we even have

  5: 10

available today the Next Generation 04

  5: 12

could be with us by quarter 2 of next

## o4, o5

  5: 15

year 05 by quarter 3 here's what another

  5: 19

top open AI researcher said' 03 is very

  5: 21

performant more importantly progress

  5: 24

from 01 to03 was only 3 months which

  5: 27

shows how fast progress will be in the

  5: 29

new paradigm of reinforcement learning

  5: 31

on Chain of Thought to scale influence

  5: 34

compute way faster than the pre-training

  5: 36

Paradigm of a new model every 1 to two

  5: 38

years we may never get GPT 5 but get AGI

  5: 42

anyway of course safety testing May well

  5: 45

end up delaying the release to the

  5: 47

public of these new generations of

  5: 48

models and so there might end up being

  5: 50

an increasingly wide gap between what

  5: 53

the frontier Labs have available to use

  5: 55

themselves and what the public has what

  5: 57

about Google proof graduate level

  6: 00

science questions and as one openai

  6: 02

researcher put it take a moment of

## GPQA

  6: 04

silence for that Benchmark it was born

  6: 06

in November of 2023 and died just a year

  6: 09

later why rip GP QA well 03 gets

  6: 14

87.7% benchmarks are being crushed

  6: 17

almost as quickly as they can be created

  6: 20

then there's competitive coding where 03

  6: 23

establishes itself as the

## Coding, Codeforces + SWE-verified, AlphaCode 2

  6: 26

175th highest scoring Global competitor

  6: 29

better at this coding competition than

  6: 32

99.95% of humans now you might say

  6: 34

that's competition coding that's not

  6: 36

real software engineering but then we

  6: 38

had sbench verified that Benchmark tests

  6: 41

real issues faced by real software

  6: 43

Engineers the verified part refers to

  6: 45

the fact that the Benchmark was combed

  6: 47

for only genuine questions with real

  6: 49

clear answers Claude 3.5 Sonic gets 49%

  6: 53

03

  6: 55

71.7% as foreseen you could argue by the

  6: 59

CEO of anthropic the creators of Claude

  7: 03

um the latest model we released Sonet

  7: 05

3.5 the new updated version it gets

  7: 09

something like 50% on sbench and sbench

  7: 12

is an example of a bunch of professional

  7: 14

real world software engineering tasks at

  7: 17

the beginning of the year I think the

  7: 19

state-of-the-art was three or 4% so in

  7: 22

10 months we've gone from 3% to 50% on

  7: 26

this task and I think in another year

  7: 28

we'll probably be at 90% I mean I don't

  7: 30

know but might might even be might even

  7: 32

be less than that before you ask by the

  7: 34

way yes these were unseen programming

  7: 36

competitions this isn't data

  7: 38

contamination again if you can Benchmark

  7: 41

it the O Series of models will

  7: 43

eventually or imminently Beat It

  7: 46

interestingly if you were following the

  7: 48

channel closely you might have guessed

  7: 50

that this was coming in code forces as

  7: 52

of this time last year Google produced

  7: 54

Alpha code 2 which in certain parts of

  7: 57

the code forces competition outperformed

  8: 00

99.5% of competition participants and

  8: 03

they went on prophetically we find that

  8: 05

performance increases roughly log

  8: 07

linearly with more samples yes of course

  8: 10

I'm going to get to Arc AGI but I just

  8: 11

want to throw in my first quick caveat

## 1st Caveat

  8: 14

what happens if you can't Benchmark it

  8: 16

or at least it's harder to Benchmark or

  8: 18

the field isn't as susceptible to

  8: 21

reasoning steps how about personal

  8: 23

writing for example well as open AI

  8: 25

admitted back in September the O Series

  8: 27

of models starting with o1 VI is not

  8: 30

preferred on some natural language tasks

  8: 33

suggesting that is not well suited for

  8: 35

all use cases again then think of a task

  8: 38

is there an objectively correct answer

  8: 40

to that task the O Series will likely

  8: 43

soon beat it as O3 proof tonight that's

  8: 47

regardless of how difficult that task is

  8: 50

is the correctness of the answer or the

  8: 52

quality of the output more a matter of

  8: 54

taste however well that might take

  8: 56

longer to be what about core reasoning

  8: 59

though out of distribution

  9: 00

generalization what I started this

  9: 02

channel to cover back at the beginning

## Compositionality?

  9: 05

of last year forgetting about cost or

  9: 07

latency for a moment what we all want to

  9: 09

know is how intrinsically intelligent

  9: 11

are these models that will dictate

  9: 13

everything else and I will raise that

  9: 15

question through three examples to end

  9: 17

the video the first is compositionality

  9: 20

which came in a famous paper in nature

  9: 23

published last year essentially you test

  9: 26

models by making up a language full of

  9: 29

con Concepts like between or double or

  9: 32

colors and see if they can compose those

  9: 35

Concepts into a correct answer the

  9: 37

concepts are abstract enough that they

  9: 39

would of course never have been seen in

  9: 41

the training data the original GPT 4

  9: 44

flopped hard at this challenge in the

  9: 46

paper in nature and 01 PR mode gets

  9: 51

close but still can't do it after

  9: 53

thinking for 9 minutes it successfully

  9: 55

translates who as double but doesn't

  9: 58

quite understand Moro it thinks it's

  10: 02

something about symmetry but doesn't

  10: 04

grasp that it means between will 03

  10: 07

master compositionality I can't answer

  10: 09

that question because I can't yet test

  10: 11

it next is of course my own Benchmark

  10: 14

called Simple bench this video was

## SimpleBench?

  10: 16

originally meant to be a summary of the

  10: 18

12 days I was going to show off VO2 and

  10: 20

talk about Gemini 2.0 flash thinking

  10: 23

experimental from Google the thinking

  10: 25

this time invisible chains of thought is

  10: 28

reminiscent then of the O Series of

  10: 30

models on the three runs we've done so

  10: 32

far it scores around 25% which is great

  10: 36

for such a small model as flash but

  10: 38

isn't quite as good as even their own

  10: 40

model Gemini experimental 126 for this

  10: 43

particular day of shipus we are though

  10: 46

putting Google to one side because open

  10: 48

AI have produced 03 so here's what I'm

  10: 51

looking out for in 03 to see whether it

  10: 54

would crush simple bench essentially it

  10: 56

needs to master spatial reasoning now

  10: 58

you can pause and read the question

  11: 01

yourself but I helpfully supplied 01

  11: 03

prom mode with this visual as well and

  11: 06

without even reading the question what

  11: 08

would you say would happen to this glove

  11: 10

if it fell off of the bike and let's say

  11: 13

I also supplied you with the speed of

  11: 15

the river well you might well say to me

  11: 17

thanks for all of those details but

  11: 19

honestly the glove is just going to fall

  11: 21

onto the road 01 doesn't even consider

  11: 23

that possibility and never does because

  11: 27

spatial data isn't really in its

  11: 29

training data nor is sophisticated

  11: 32

social reasoning data wait let me caveat

  11: 34

that of course we don't know what is in

  11: 36

the training data I just suspect it's

  11: 38

not in the training data of 01 at least

  11: 41

likely not in 03 but we don't know is

  11: 44

the base model for 03 oion or what would

  11: 47

have been GPT 4.5 GPT 5 open AI never

  11: 49

mentioned a shift in what the base model

  11: 52

was but they haven't denied it either

  11: 54

someone could make the argument that 03

  11: 56

is so good at something like physics

  11: 59

that it can Intuit it for itself what

  12: 01

would happen in spatial reasoning

  12: 02

scenarios maybe but we'd have to test it

  12: 06

what I do have to remind myself though

  12: 08

with simple bench and spatial reasoning

  12: 10

more generally is it doesn't strike me

  12: 12

perhaps as a fundamental limitation for

  12: 15

the model going forward as I said right

  12: 17

in the start of the intro to this video

  12: 19

open AI have fundamentally with 03

  12: 22

demonstrated the extent of a

  12: 24

generalizable approach to solving things

  12: 26

in other words with enough spatial

  12: 27

reasoning data and good spatial

  12: 30

reasoning benchmarks and some more of

  12: 32

that scaled up reinforcement learning I

  12: 34

think models would get great at this too

  12: 36

and frankly even if benchmarks like

  12: 38

simple bench Can last a little bit

  12: 40

longer because of a parity of spatial

  12: 42

reasoning data or text-based spatial

  12: 45

reasoning data not being enough you have

  12: 47

simulators like genesis that can model

  12: 50

physics and give models like O3 almost

  12: 54

infinite training data of lifelike

  12: 56

simulations you could almost imagine 03

  12: 59

404 being unsure of an answer spinning

  13: 02

up a simulation spotting what would

  13: 04

happen and then outputting the answer

  13: 06

and now at last what about Ark AGI I

  13: 10

made an entire video not that long ago

## ARC-AGI, Chollet

  13: 12

about how this particular challenge

  13: 14

created by France Chalet was a necessary

  13: 17

but not sufficient condition for AGI the

  13: 20

reason why 03 beating this Benchmark is

  13: 23

so significant is because each example

  13: 26

is supposed to be a novel test a

  13: 28

challenge in other words that's

  13: 30

deliberately designed not to be in any

  13: 33

training data past or present beating it

  13: 36

therefore has to involve at least a

  13: 38

certain level of reasoning in case

  13: 40

you're wondering by the way I think

  13: 42

reasoning is actually a spectrum I

  13: 44

Define it as deriving efficient

  13: 47

functions and composite functions llms

  13: 50

therefore always have done a form of

  13: 52

reasoning it's just that their functions

  13: 54

that they derive are not particularly

  13: 57

efficient more like convoluted

  13: 59

interpolations humans tend to spot

  14: 01

things quicker have more meta rules of

  14: 03

thumb and with these more meta rules of

  14: 06

thumb we can generalize better and solve

  14: 09

challenges that we haven't seen before

  14: 11

more efficiently hence why many humans

  14: 13

can see what has occurred to get from

  14: 16

input one to Output one input two to

  14: 19

Output two GPT 4 couldn't and even 01

  14: 23

couldn't really and for these specific

  14: 25

examples even 03 can't yes it might

  14: 29

surprise you there are still questions

  14: 31

that aren't crazy hard the 03 Can't Get

  14: 34

Right nevertheless 03 when given maximal

  14: 38

compute what I've calculated at being

  14: 41

350 Grand worth gets 88% and here's what

  14: 45

the author of that Benchmark said this

  14: 48

isn't just Brute Force yes it's very

  14: 51

expensive but these capabilities are new

  14: 54

territory and they demand serious

  14: 56

scientific attention we believe he said

  14: 59

said it represents a significant

  15: 00

breakthrough in getting AI to adapt to

  15: 03

novel tasks reinforced again and again

  15: 06

with those chains of thought or

  15: 07

reasoning steps that led it to correct

  15: 09

answers 03 has gotten pretty good at

  15: 12

deriving efficient functions in other

  15: 14

words it reasons pretty well now Chalet

  15: 17

has often mentioned in the past that

  15: 20

many of his smart friends scored around

  15: 22

98% in AR AGI but a fairly recent paper

  15: 26

from September showed that that when an

  15: 29

exhaustive study was done on average

  15: 32

human performance it was

  15: 35

64.2% on the public evaluation set

  15: 38

Chalet himself predicted 2 and a half

  15: 39

years ago that there wouldn't be a quote

  15: 42

pure Transformer based model that gets

  15: 45

greater than 50% on previously unseen

  15: 48

Arc tasks within a time limit of 5 years

  15: 51

again I want to give you a couple of

  15: 52

quick caveats before we get to his

  15: 55

assessment of whether o03 is Agi one

  15: 59

open AI researcher admitted that it took

  16: 01

16 hours to get 03 to get

  16: 04

87.5% with an increase rate of 3.5% an

  16: 07

hour to get to solved and another caveat

  16: 10

this time from his public statement on

  16: 13

03 open aai apparently requested that

  16: 16

they didn't publish the high compute

  16: 18

costs involved in getting that high

  16: 20

score but they kind of did anyway saying

  16: 23

the amount of compute was roughly 172 X

  16: 27

the low compute configuration if the low

  16: 30

compute high efficiency retail cost was

  16: 33

$22,000 by my calculation that's around

  16: 35

$350 Grand to get the

  16: 39

87.5% if your day job is solving Arc AGI

  16: 42

challenges and you're paid less than 350

  16: 45

Grand a year you're safe just for now

  16: 48

and of course if you're crazy worried by

  16: 50

cost there's always 03 mini which gets

  16: 52

close to the performance of 03 for a

  16: 55

fraction of the cost but more seriously

  16: 56

he said later in the statement but cost

  16: 59

performance will likely improve quite

  17: 01

dramatically over the next few months

  17: 04

and years so you should plan for these

  17: 06

capabilities to become competitive with

  17: 08

human work within a fairly short

  17: 10

timeline the challenge was always to get

  17: 13

models to reason the costs and latency

  17: 15

came second those can drop later with

  17: 18

more gpus More's law and algorithmic

  17: 22

efficiency it's the crushing of these

  17: 24

challenges that was the hard part cost

  17: 26

is not a barrier that's going to last

  17: 28

long now Chalet does go on to say that

  17: 30

03 still fails on some very easy tasks

  17: 34

and you might argue that that Arc

  17: 35

challenge I showed just earlier was such

  17: 38

an example the blocks move essentially

  17: 40

in the direction of the lines that

  17: 42

protrude out of them and he mentions

  17: 44

that he's crafting a so-called Ark AGI 2

  17: 48

Benchmark that he thinks will still pose

  17: 50

a significant challenge to o03

  17: 52

potentially reducing its score to under

  17: 55

30% sounds like he's almost already

  17: 56

tested it he goes on even at at high

  17: 59

compute while a smart human would still

  18: 01

be able to score over 95% with no

  18: 04

training notice that smart human rather

  18: 06

than average human though and also it's

  18: 08

kind of like 03 is under 30% but what

  18: 11

about 04 05 what if even 06 is released

  18: 15

before the end of 2025 that's maybe why

  18: 17

Mike nup the funer of the arc $1 million

  18: 21

prize says we want AGI benchmarks that

  18: 24

can endure many years I do not expect V2

  18: 28

will and so cryptically he says we're

  18: 30

also starting turning attention to V3

  18: 33

which will be very different that sets

  18: 34

up the crucial definition then of what

  18: 37

counts as AGI is it still not AGI as

  18: 41

long as there's any Benchmark that the

  18: 43

average human can outperform a model at

  18: 45

Chet's position at least as of tonight

  18: 48

is that he doesn't believe that o03 is

  18: 50

AI the reason because it's still

  18: 53

feasible to create unsaturated not

  18: 55

crushed interesting benchmarks that are

  18: 58

easy for humans yet impossible for AI

  19: 01

without involving specialist knowledge

  19: 03

in some we will have AGI when creating

  19: 06

such evals becomes outright impossible

  19: 09

the question is is that a fair marker

  19: 12

does it have to be impossible to create

  19: 14

such a benchmark one that humans can

  19: 16

beat easily yet is impossible for AI or

  19: 19

should the definition of AGI be when

  19: 22

it's harder to create a benchmark that's

  19: 25

easier for humans than it is for AI in a

  19: 28

way that seems like a fairer definition

  19: 31

such that there isn't just a single

  19: 33

Benchmark out there that's holding out

  19: 35

and the rest have fallen and we're still

  19: 37

saying not AGI that of course leaves the

  19: 39

question of is it harder to create a

  19: 41

benchmark that O3 can't solve and yet

  19: 43

it's easy for humans do we consider

  19: 45

different modalities can it spot the

  19: 47

lack of realism in certain AI generated

  19: 50

videos what kind of benchmarks are

  19: 52

allowed or are not allowed what about

  19: 54

benchmarks where we factor in how

  19: 56

quickly challenges are solved I alas

  19: 58

can't provide a satisfying answer for

  20: 01

those of you who want a simple yes no

  20: 04

AGI or not what I can do though is shine

  20: 07

a light on the significance of this

  20: 09

achievement again it's not about

  20: 11

particular benchmarks it's about an

  20: 13

approach that can be used again and

  20: 15

again on whatever Benchmark you create

  20: 18

and to whatever scale you can pay for

  20: 20

it's almost like they've shown that they

  20: 22

can defeat the very concept of a

  20: 24

benchmark yes of course I read the paper

## Safety Implicaitons

  20: 26

released tonight by open AI on

  20: 28

deliberative alignment essentially they

  20: 30

use these same reasoning techniques to

  20: 32

get the models to be great at refusing

  20: 34

harmful requests while also not over

  20: 37

refusing innocent ones know Brown who is

  20: 40

one of the research leads 401 said that

  20: 43

Frontier math result actually had safety

  20: 46

implications he said even if llms are

  20: 48

dumb in some ways and of course I can't

  20: 51

yet test o03 on simple bench nor even 01

  20: 54

they haven't yet given me API access he

  20: 56

went on saturating evals like Frontier

  20: 59

math suggests AI is surpassing top human

  21: 02

intelligence in certain domains the

  21: 05

first implication of that he said is

  21: 06

that we may see a broad acceleration in

  21: 09

scientific research but then he went on

  21: 11

this also means that AI safety topics

  21: 14

like scalable oversight May soon stop

  21: 16

being hypothetical research in these

  21: 18

domains needs to be a priority for the

  21: 21

field scalable oversight in a ridiculous

  21: 23

nutshell is answering the question of

  21: 26

how essentially a dumber model or a

  21: 28

human can still have oversight over a

  21: 31

smarter model this then is one of the

  21: 33

co-creators of 03 saying we really need

  21: 37

to start focusing on safety it's perhaps

  21: 39

then more credible when open AI

  21: 41

researchers like John hman say this when

  21: 44

Sam and as researchers say AGI is coming

  21: 47

we aren't doing it to sell you Kool-Aid

  21: 49

a $2,000 subscription or to trick you to

  21: 52

invest in our next round it's actually

  21: 54

coming whatever you've made of o03

  21: 56

tonight let me know in the comments

  21: 58

personally can't wait to test it this

  22: 01

has been a big night in Ai and thank you

  22: 03

so much for joining me on it as always

  22: 06

would love to see you over on patreon

  22: 08

where I'll be continuing the discussion

  22: 10

and actually fairly soon releasing a

  22: 12

mini documentary on the Fateful year

  22: 14

2015 when open AI started but regardless

  22: 17

wherever you are have a wonderful day