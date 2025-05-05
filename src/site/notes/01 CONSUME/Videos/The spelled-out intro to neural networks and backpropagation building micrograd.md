---
{"dg-publish":true,"permalink":"/01-consume/videos/the-spelled-out-intro-to-neural-networks-and-backpropagation-building-micrograd/","title":"The spelled-out intro to neural networks and backpropagation: building micrograd","tags":["neural-networks","ai","machine-learning"]}
---

# The spelled-out intro to neural networks and backpropagation building micrograd

![The spelled-out intro to neural networks and backpropagation: building micrograd](https://www.youtube.com/watch?v=VMj-3S1tku0)

## Description





This is the most step-by-step spelled-out explanation of backpropagation and training of neural networks. It only assumes basic knowledge of Python and a vague recollection of calculus from high school.

Links:
- micrograd on github: https://github.com/karpathy/micrograd
- jupyter notebooks I built in this video: https://github.com/karpathy/nn-zero-to-hero/tree/master/lectures/micrograd
- my website: https://karpathy.ai
- my twitter: https://twitter.com/karpathy
- "discussion forum": nvm, use youtube comments below for now :)
- (new) Neural Networks: Zero to Hero series Discord channel: https://discord.gg/3zy8kqD9Cp , for people who'd like to chat more and go beyond youtube comments

Exercises:
you should now be able to complete the following google collab, good luck!:
https://colab.research.google.com/drive/1FPTx1RXtBfc4MaTkf7viZZD4U2F9gtKN?usp=sharing

Chapters:
00:00:00 intro
00:00:25 micrograd overview
00:08:08 derivative of a simple function with one input
00:14:12 derivative of a function with multiple inputs
00:19:09 starting the core Value object of micrograd and its visualization
00:32:10 manual backpropagation example #1: simple expression
00:51:10 preview of a single optimization step
00:52:52 manual backpropagation example #2: a neuron
01:09:02 implementing the backward function for each operation
01:17:32 implementing the backward function for a whole expression graph
01:22:28 fixing a backprop bug when one node is used multiple times
01:27:05 breaking up a tanh, exercising with more operations
01:39:31 doing the same thing but in PyTorch: comparison
01:43:55 building out a neural net library (multi-layer perceptron) in micrograd
01:51:04 creating a tiny dataset, writing the loss function
01:57:56 collecting all of the parameters of the neural net
02:01:12 doing gradient descent optimization manually, training the network
02:14:03 summary of what we learned, how to go towards modern neural nets
02:16:46 walkthrough of the full code of micrograd on github
02:21:10 real stuff: diving into PyTorch, finding their backward pass for tanh
02:24:39 conclusion
02:25:20 outtakes :)

## Notes

## Transcript

## intro

0:00

hello my name is andre and i've been training deep neural networks for a bit more than a decade and in this lecture i'd like to show you

0:06

what neural network training looks like under the hood so in particular we are going to start with a blank jupiter

0:12

notebook and by the end of this lecture we will define and train in neural net and you'll get to see everything that

0:18

goes on under the hood and exactly sort of how that works on an intuitive level now specifically what i would like to do

0:24

is i would like to take you through building of micrograd now micrograd is

## micrograd overview

0:29

this library that i released on github about two years ago but at the time i only uploaded the source code and you'd

0:34

have to go in by yourself and really figure out how it works so in this lecture i will take you

0:40

through it step by step and kind of comment on all the pieces of it so what is micrograd and why is it interesting

0:47

good um micrograd is basically an autograd engine autograd is short for automatic

0:53

gradient and really what it does is it implements backpropagation now backpropagation is this algorithm that

0:59

allows you to efficiently evaluate the gradient of some kind of a loss function with

1:05

respect to the weights of a neural network and what that allows us to do then is we can iteratively tune the

1:11

weights of that neural network to minimize the loss function and therefore improve the accuracy of the network so

1:16

back propagation would be at the mathematical core of any modern deep neural network library like say pytorch

1:22

or jaxx so the functionality of microgrant is i think best illustrated by an example so

1:27

if we just scroll down here you'll see that micrograph basically allows you to build out mathematical

1:32

expressions and um here what we are doing is we have an expression that we're building out where you have two inputs a and b

1:40

and you'll see that a and b are negative four and two but we are wrapping those

1:46

values into this value object that we are going to build out as part of micrograd so this value object will wrap the

1:53

numbers themselves and then we are going to build out a mathematical expression here where a and b are transformed into c d and

2:01

eventually e f and g and i'm showing some of the functions some of the functionality of micrograph

2:07

and the operations that it supports so you can add two value objects you can multiply them you can raise them to a

2:13

constant power you can offset by one negate squash at zero

2:18

square divide by constant divide by it etc and so we're building out an expression

2:24

graph with with these two inputs a and b and we're creating an output value of g

2:30

and micrograd will in the background build out this entire mathematical expression so it will for example know

2:36

that c is also a value c was a result of an addition operation and the

2:42

child nodes of c are a and b because the and will maintain pointers to a and b

2:48

value objects so we'll basically know exactly how all of this is laid out and then not only can we do what we call

2:55

the forward pass where we actually look at the value of g of course that's pretty straightforward we will access

3:00

that using the dot data attribute and so the output of the forward pass the value

3:06

of g is 24.7 it turns out but the big deal is that we can also take this g

3:11

value object and we can call that backward and this will basically uh initialize back propagation at the node g

3:19

and what backpropagation is going to do is it's going to start at g and it's going to go backwards through that

3:25

expression graph and it's going to recursively apply the chain rule from calculus and what that allows us to do then is

3:32

we're going to evaluate basically the derivative of g with respect to all the internal nodes

3:38

like e d and c but also with respect to the inputs a and b

3:43

and then we can actually query this derivative of g with respect to a for example that's a dot grad in this case

3:50

it happens to be 138 and the derivative of g with respect to b which also happens to be here 645

3:57

and this derivative we'll see soon is very important information because it's telling us how a and b are affecting g

4:04

through this mathematical expression so in particular a dot grad is 138 so if we slightly

4:11

nudge a and make it slightly larger 138 is telling us that g will grow and

4:18

the slope of that growth is going to be 138 and the slope of growth of b is going to be 645. so that's going to tell us about

4:25

how g will respond if a and b get tweaked a tiny amount in a positive direction

4:31

okay now you might be confused about what this expression is that we built out

4:36

here and this expression by the way is completely meaningless i just made it up i'm just flexing about the kinds of

4:42

operations that are supported by micrograd what we actually really care about are neural networks but it turns out that

4:48

neural networks are just mathematical expressions just like this one but actually slightly bit less crazy even

4:54

neural networks are just a mathematical expression they take the input data as an input and they take the weights of a

5:00

neural network as an input and it's a mathematical expression and the output are your predictions of your neural net

5:06

or the loss function we'll see this in a bit but basically neural networks just happen to be a certain class of

5:12

mathematical expressions but back propagation is actually significantly more general it doesn't

5:17

actually care about neural networks at all it only tells us about arbitrary mathematical expressions and then we

5:22

happen to use that machinery for training of neural networks now one more note i would like to make at this stage

5:28

is that as you see here micrograd is a scalar valued auto grant engine so it's working on the you know level of

5:34

individual scalars like negative four and two and we're taking neural nets and we're breaking them down all the way to

5:39

these atoms of individual scalars and all the little pluses and times and it's just excessive and so obviously you

5:45

would never be doing any of this in production it's really just put down for pedagogical reasons because it allows us

5:50

to not have to deal with these n-dimensional tensors that you would use in modern deep neural network library so

5:56

this is really done so that you understand and refactor out back propagation and chain rule and

6:02

understanding of neurologic training and then if you actually want to train bigger networks you have to be using

6:08

these tensors but none of the math changes this is done purely for efficiency we are basically taking scale

6:13

value all the scale values we're packaging them up into tensors which are just arrays of these scalars and then because

6:20

we have these large arrays we're making operations on those large arrays that allows us to take advantage of the

6:26

parallelism in a computer and all those operations can be done in parallel and then the whole thing runs faster but

6:32

really none of the math changes and that's done purely for efficiency so i don't think that it's pedagogically useful to be dealing with tensors from

6:38

scratch uh and i think and that's why i fundamentally wrote micrograd because you can understand how things work uh at

6:44

the fundamental level and then you can speed it up later okay so here's the fun part my claim is that micrograd is what

6:51

you need to train your networks and everything else is just efficiency so you'd think that micrograd would be a

6:56

very complex piece of code and that turns out to not be the case so if we just go to micrograd

7:03

and you'll see that there's only two files here in micrograd this is the actual engine it doesn't know anything

7:09

about neural nuts and this is the entire neural nets library on top of micrograd so engine and nn.pi

7:17

so the actual backpropagation autograd engine that gives you the power of neural

7:22

networks is literally 100 lines of code of like very simple

7:28

python which we'll understand by the end of this lecture and then nn.pi

7:33

this neural network library built on top of the autograd engine um is like a joke it's like

7:40

we have to define what is a neuron and then we have to define what is the layer of neurons and then we define what is a

7:46

multi-layer perceptron which is just a sequence of layers of neurons and so it's just a total joke

7:52

so basically there's a lot of power that comes from only 150 lines of code

7:57

and that's all you need to understand to understand neural network training and everything else is just efficiency and

8:02

of course there's a lot to efficiency but fundamentally that's all that's happening okay so now let's dive right

## derivative of a simple function with one input

8:09

in and implement micrograph step by step the first thing i'd like to do is i'd like to make sure that you have a very good understanding intuitively of what a

8:16

derivative is and exactly what information it gives you so let's start with some basic imports that i copy

8:22

paste in every jupiter notebook always and let's define a function a scalar

8:27

valued function f of x as follows so i just make this up randomly i just

8:33

want to scale a valid function that takes a single scalar x and returns a single scalar y

8:38

and we can call this function of course so we can pass in say 3.0 and get 20 back

8:43

now we can also plot this function to get a sense of its shape you can tell from the mathematical expression that this is probably a parabola it's a

8:50

quadratic and so if we just uh create a set of um

8:56

um scale values that we can feed in using for example a range from negative five to five in steps of 0.25

9:03

so this is so axis is just from negative 5 to 5 not including 5 in steps of 0.25

9:11

and we can actually call this function on this numpy array as well so we get a set of y's if we call f on axis

9:17

and these y's are basically also applying a function on every one of

9:23

these elements independently and we can plot this using matplotlib so plt.plot x's and y's and we get a nice

9:31

parabola so previously here we fed in 3.0 somewhere here and we received 20

9:36

back which is here the y coordinate so now i'd like to think through what is the derivative

9:42

of this function at any single input point x right so what is the derivative at different points x of this function now

9:49

if you remember back to your calculus class you've probably derived derivatives so we take this mathematical expression 3x squared minus 4x plus 5

9:57

and you would write out on a piece of paper and you would you know apply the product rule and all the other rules and derive the mathematical expression of

10:03

the great derivative of the original function and then you could plug in different texts and see what the derivative is

10:09

we're not going to actually do that because no one in neural networks actually writes out the expression for

10:15

the neural net it would be a massive expression um it would be you know thousands tens of thousands of terms no

10:20

one actually derives the derivative of course and so we're not going to take this kind of like a symbolic approach

10:26

instead what i'd like to do is i'd like to look at the definition of derivative and just make sure that we really understand what derivative is measuring

10:32

what it's telling you about the function and so if we just look up derivative

10:42

we see that okay so this is not a very good definition of derivative this is a definition of what it means to be differentiable

10:48

but if you remember from your calculus it is the limit as h goes to zero of f of x plus h minus f of x over h so

10:55

basically what it's saying is if you slightly bump up you're at some point x

11:00

that you're interested in or a and if you slightly bump up you know you slightly increase it by

11:06

small number h how does the function respond with what sensitivity does it respond what is the

11:11

slope at that point does the function go up or does it go down and by how much and that's the slope of that function

11:18

the the slope of that response at that point and so we can basically evaluate

11:23

the derivative here numerically by taking a very small h of course the definition would ask us to take h to

11:30

zero we're just going to pick a very small h 0.001 and let's say we're interested in point 3.0 so we can look at f of x of course

11:37

as 20 and now f of x plus h so if we slightly nudge x in a positive

11:42

direction how is the function going to respond and just looking at this do you expect do you expect f of x plus h to be

11:49

slightly greater than 20 or do you expect to be slightly lower than 20

11:54

and since this 3 is here and this is 20 if we slightly go positively the function will respond positively so

12:01

you'd expect this to be slightly greater than 20. and now by how much it's telling you the

12:06

sort of the the strength of that slope right the the size of the slope so f of x plus h minus

12:12

f of x this is how much the function responded in the positive direction and we have to

12:17

normalize by the run so we have the rise over run to get the slope so this of course is just a

12:24

numerical approximation of the slope because we have to make age very very small to converge to the exact amount

12:32

now if i'm doing too many zeros at some point i'm gonna get an incorrect answer

12:38

because we're using floating point arithmetic and the representations of all these numbers in computer memory is

12:43

finite and at some point we get into trouble so we can converse towards the right answer with this approach

12:50

but basically um at 3 the slope is 14. and you can see that by taking 3x

12:56

squared minus 4x plus 5 and differentiating it in our head so 3x squared would be

13:02

6 x minus 4 and then we plug in x equals 3 so that's 18 minus 4 is 14. so this is correct

13:10

so that's at 3. now how about the slope at say negative 3

13:17

would you expect would you expect for the slope now telling the exact value is really hard but what is the sign of that slope

13:24

so at negative three if we slightly go in the positive direction at x the function would

13:30

actually go down and so that tells you that the slope would be negative so we'll get a slight number below

13:36

below 20. and so if we take the slope we expect something negative negative 22. okay

13:43

and at some point here of course the slope would be zero now for this specific function i looked it up

13:48

previously and it's at point two over three so at roughly two over three

13:54

uh that's somewhere here um this derivative be zero so basically at that precise point

14:03

yeah at that precise point if we nudge in a positive direction the function doesn't respond this stays the same almost and

14:09

so that's why the slope is zero okay now let's look at a bit more complex case so we're going to start you know

## derivative of a function with multiple inputs

14:15

complexifying a bit so now we have a function here

14:20

with output variable d that is a function of three scalar inputs a b and c

14:26

so a b and c are some specific values three inputs into our expression graph and a single output d

14:32

and so if we just print d we get four and now what i have to do is i'd like to

14:38

again look at the derivatives of d with respect to a b and c and uh think through uh again just the

14:44

intuition of what this derivative is telling us so in order to evaluate this derivative we're going to get a bit hacky here

14:52

we're going to again have a very small value of h and then we're going to fix the inputs

14:57

at some values that we're interested in so these are the this is the point abc

15:02

at which we're going to be evaluating the the derivative of d with respect to all a b and c at that point

15:09

so there are the inputs and now we have d1 is that expression and then we're going to for example look

15:15

at the derivative of d with respect to a so we'll take a and we'll bump it by h and then we'll get d2 to be the exact

15:22

same function and now we're going to print um you know f1

15:28

d1 is d1 d2 is d2 and print slope

15:35

so the derivative or slope here will be um of course

15:41

d2 minus d1 divide h so d2 minus d1 is how much the function

15:47

increased uh when we bumped the uh the specific input that we're interested

15:53

in by a tiny amount and this is then normalized by h

15:59

to get the slope so um

16:05

yeah so this so if i just run this we're going to print

16:10

d1 which we know is four

16:15

now d2 will be bumped a will be bumped by h so let's just think through

16:22

a little bit uh what d2 will be uh printed out here

16:27

in particular d1 will be four will d2 be a number slightly greater

16:33

than four or slightly lower than four and that's going to tell us the sl the the sign of the derivative

16:40

so we're bumping a by h

16:45

b as minus three c is ten so you can just intuitively think through this derivative and what it's

16:51

doing a will be slightly more positive and but b is a negative number

16:57

so if a is slightly more positive because b is negative three

17:03

we're actually going to be adding less to d so you'd actually expect that the value

17:10

of the function will go down so let's just see this

17:16

yeah and so we went from 4 to 3.9996 and that tells you that the slope will

17:22

be negative and then uh will be a negative number because we went down

17:27

and then the exact number of slope will be exact amount of slope is negative 3.

17:33

and you can also convince yourself that negative 3 is the right answer mathematically and analytically because

17:39

if you have a times b plus c and you are you know you have calculus then differentiating a times b plus c with

17:46

respect to a gives you just b and indeed the value of b is negative 3 which is the derivative that we have so

17:52

you can tell that that's correct so now if we do this with b so if we bump b by a little bit in a

17:59

positive direction we'd get different slopes so what is the influence of b on the output d

18:06

so if we bump b by a tiny amount in a positive direction then because a is positive

18:11

we'll be adding more to d right so um and now what is the what is the

18:17

sensitivity what is the slope of that addition and it might not surprise you that this should be

18:22

2 and y is a 2 because d of d by db differentiating with respect to b

18:30

would be would give us a and the value of a is two so that's also working well

18:35

and then if c gets bumped a tiny amount in h by h then of course a times b is unaffected

18:41

and now c becomes slightly bit higher what does that do to the function it makes it slightly bit higher because

18:47

we're simply adding c and it makes it slightly bit higher by the exact same amount that we added to c

18:53

and so that tells you that the slope is one that will be the

18:59

the rate at which d will increase as we scale c

19:05

okay so we now have some intuitive sense of what this derivative is telling you about the function and we'd like to move to neural networks now as i mentioned

## starting the core Value object of micrograd and its visualization

19:11

neural networks will be pretty massive expressions mathematical expressions so we need some data structures that maintain these expressions and that's

19:17

what we're going to start to build out now so we're going to build out this value object that i

19:24

showed you in the readme page of micrograd so let me copy paste a skeleton of the

19:30

first very simple value object so class value takes a single

19:36

scalar value that it wraps and keeps track of and that's it so

19:41

we can for example do value of 2.0 and then we can get we can look at its content and

19:48

python will internally use the wrapper function to uh return

19:54

uh this string oops like that so this is a value object with data

20:00

equals two that we're creating here now we'd like to do is like we'd like to be able to

20:07

have not just like two values but we'd like to do a bluffy right we'd like to add them

20:13

so currently you would get an error because python doesn't know how to add two value objects so we have to tell it

20:21

so here's addition so you have to basically use these

20:27

special double underscore methods in python to define these operators for these objects so if we call um

20:35

the uh if we use this plus operator python will internally call a dot add of

20:43

b that's what will happen internally and so b will be the other and

20:48

self will be a and so we see that what we're going to return is a new value object and it's

20:54

just it's going to be wrapping the plus of their data

20:59

but remember now because data is the actual like numbered python number so this operator here is just the typical

21:06

floating point plus addition now it's not an addition of value objects and will return a new value so now a

21:14

plus b should work and it should print value of negative one because that's two plus minus three

21:20

there we go okay let's now implement multiply just so we can recreate this expression

21:25

here so multiply i think it won't surprise you will be fairly similar

21:31

so instead of add we're going to be using mul and then here of course we want to do times

21:36

and so now we can create a c value object which will be 10.0 and now we should be able to do a times b well

21:44

let's just do a times b first um \[Music\] that's value of negative six now

21:50

and by the way i skipped over this a little bit suppose that i didn't have the wrapper function here then it's just that you'll get some kind

21:57

of an ugly expression so what wrapper is doing is it's providing us a way to print out like a nicer looking

22:03

expression in python uh so we don't just have something cryptic we actually are you know it's

22:09

value of negative six so this gives us a times and then this we should now be able to

22:16

add c to it because we've defined and told the python how to do mul and add and so this will call this will

22:22

basically be equivalent to a dot small of b

22:27

and then this new value object will be dot add of c and so let's see if that worked

22:34

yep so that worked well that gave us four which is what we expect from before and i believe we can just call them

22:40

manually as well there we go so yeah okay so now what we are missing is the

22:46

connective tissue of this expression as i mentioned we want to keep these expression graphs so we need to know and

22:52

keep pointers about what values produce what other values so here for example we are going to

22:58

introduce a new variable which we'll call children and by default it will be an empty tuple and then we're actually going to keep a

23:04

slightly different variable in the class which we'll call underscore prev which will be the set of children

23:11

this is how i done i did it in the original micrograd looking at my code here i can't remember exactly the reason

23:17

i believe it was efficiency but this underscore children will be a tuple for convenience but then when we actually

23:22

maintain it in the class it will be just this set yeah i believe for efficiency

23:27

um so now when we are creating a value like this with a constructor children will be

23:33

empty and prep will be the empty set but when we're creating a value through addition or multiplication we're going

23:39

to feed in the children of this value which in this case is self and other

23:46

so those are the children here so now we can do d dot prev

23:52

and we'll see that the children of the we now know are this value of negative 6

23:58

and value of 10 and this of course is the value resulting from a times b and the c value which is 10.

24:06

now the last piece of information we don't know so we know that the children of every single value but we don't know

24:12

what operation created this value so we need one more element here let's call it underscore pop

24:19

and by default this is the empty set for leaves and then we'll just maintain it here

24:25

and now the operation will be just a simple string and in the case of addition it's plus in the case of

24:31

multiplication is times so now we not just have d dot pref we also have a

24:37

d dot up and we know that d was produced by an addition of those two values and so now

24:42

we have the full mathematical expression uh and we're building out this data structure and we know exactly how each value came to be

24:49

by word expression and from what other values now because these expressions are about

24:56

to get quite a bit larger we'd like a way to nicely visualize these expressions that we're building out so

25:02

for that i'm going to copy paste a bunch of slightly scary code that's going to visualize this these expression graphs

25:08

for us so here's the code and i'll explain it in a bit but first let me just show you what this code does

25:14

basically what it does is it creates a new function drawdot that we can call on some root node

25:20

and then it's going to visualize it so if we call drawdot on d which is this final value here that is a

25:27

times b plus c it creates something like this so this is d

25:32

and you see that this is a times b creating an integrated value plus c gives us this output node d

25:40

so that's dried out of d and i'm not going to go through this in complete detail you can take a look at

25:46

graphless and its api uh graphis is a open source graph visualization software

25:51

and what we're doing here is we're building out this graph and graphis api and

25:56

you can basically see that trace is this helper function that enumerates all of the nodes and edges in the graph

26:02

so that just builds a set of all the nodes and edges and then we iterate for all the nodes and we create special node

26:08

objects for them in using dot node

26:13

and then we also create edges using dot dot edge and the only thing that's like slightly tricky here is you'll notice that i

26:20

basically add these fake nodes which are these operation nodes so for example this node here is just like a plus node

26:27

and i create these special op nodes here

26:34

and i connect them accordingly so these nodes of course are not actual

26:39

nodes in the original graph they're not actually a value object the only value objects here are the things

26:46

in squares those are actual value objects or representations thereof and these op nodes are just created in this

26:52

drawdot routine so that it looks nice let's also add labels to these graphs

26:57

just so we know what variables are where so let's create a special underscore label

27:02

um or let's just do label equals empty by default and save it in

27:08

each node and then here we're going to do label as a

27:15

label is the label a c

27:22

and then let's create a special um e equals a times b

27:30

and e dot label will be e it's kind of naughty and e will be e plus c

27:38

and a d dot label will be d okay so nothing really changes i just

27:44

added this new e function a new e variable and then here when we are

27:50

printing this i'm going to print the label here so this will be a percent s

27:56

bar and this will be end.label

28:01

and so now we have the label on the left here so it says a b creating e and then e plus c

28:07

creates d just like we have it here and finally let's make this expression just one layer deeper

28:14

so d will not be the final output node instead after d we are going to create a

28:20

new value object called f we're going to start running out of variables soon f will be negative

28:25

2.0 and its label will of course just be f and then l capital l will be the output

28:34

of our graph and l will be p times f okay so l will be negative eight is the

28:40

output so now we don't just draw a d we draw l

28:50

okay and somehow the label of l was undefined oops all that label has

28:56

to be explicitly sort of given to it there we go so l is the output

29:01

so let's quickly recap what we've done so far we are able to build out mathematical expressions using only plus and times so

29:08

far they are scalar valued along the way and we can do this forward pass

29:14

and build out a mathematical expression so we have multiple inputs here a b c and f

29:19

going into a mathematical expression that produces a single output l and this here is visualizing the forward

29:26

pass so the output of the forward pass is negative eight that's the value

29:31

now what we'd like to do next is we'd like to run back propagation and in back propagation we are going to

29:37

start here at the end and we're going to reverse and calculate the gradient along along

29:43

all these intermediate values and really what we're computing for every single value here

29:48

um we're going to compute the derivative of that node with respect to l

29:55

so the derivative of l with respect to l is just uh one

30:00

and then we're going to derive what is the derivative of l with respect to f with respect to d with respect to c with

30:06

respect to e with respect to b and with respect to a and in the neural network setting you'd

30:12

be very interested in the derivative of basically this loss function l with respect to the weights of a neural

30:18

network and here of course we have just these variables a b c and f but some of these will eventually

30:23

represent the weights of a neural net and so we'll need to know how those weights are impacting

30:29

the loss function so we'll be interested basically in the derivative of the output with respect to some of its leaf

30:34

nodes and those leaf nodes will be the weights of the neural net and the other leaf nodes of course will be the data itself but usually we will

30:41

not want or use the derivative of the loss function with respect to data because the data is fixed but the

30:47

weights will be iterated on using the gradient information so next we are going to create a variable inside

30:54

the value class that maintains the derivative of l with respect to that

30:59

value and we will call this variable grad so there's a data and there's a

31:05

self.grad and initially it will be zero and remember that zero is basically means no

31:12

effect so at initialization we're assuming that every value does not impact does not affect the out the

31:18

output right because if the gradient is zero that means that changing this variable is not changing the loss function

31:25

so by default we assume that the gradient is zero and then

31:31

now that we have grad and it's 0.0

31:36

we are going to be able to visualize it here after data so here grad is 0.4 f

31:42

and this will be in that graph and now we are going to be showing both the data and the grad

31:50

initialized at zero and we are just about getting ready to calculate the back propagation

31:57

and of course this grad again as i mentioned is representing the derivative of the output in this case l with respect to this value so

32:05

with respect to so this is the derivative of l with respect to f with respect to d and so on so let's now fill

## manual backpropagation example #1: simple expression

32:11

in those gradients and actually do back propagation manually so let's start filling in these gradients and start all

32:16

the way at the end as i mentioned here first we are interested to fill in this gradient here so what is the derivative

32:22

of l with respect to l in other words if i change l by a tiny amount of h

32:29

how much does l change it changes by h so it's proportional and

32:35

therefore derivative will be one we can of course measure these or estimate these numerical gradients

32:40

numerically just like we've seen before so if i take this expression and i create a def lol function here

32:49

and put this here now the reason i'm creating a gating function hello here is because i don't want to pollute or mess

32:55

up the global scope here this is just kind of like a little staging area and as you know in python all of these will

33:00

be local variables to this function so i'm not changing any of the global scope here

33:05

so here l1 will be l and then copy pasting this expression

33:13

we're going to add a small amount h in for example a

33:20

right and this would be measuring the derivative of l with respect to a so here this will be l2

33:28

and then we want to print this derivative so print l2 minus l1 which is how much l changed

33:35

and then normalize it by h so this is the rise over run and we have to be careful because l is a

33:41

value node so we actually want its data um so that these are floats dividing by h

33:48

and this should print the derivative of l with respect to a because a is the one that we bumped a little bit by h

33:55

so what is the derivative of l with respect to a it's six

34:01

okay and obviously if we change l by h

34:06

then that would be here effectively

34:12

this looks really awkward but changing l by h you see the derivative here is 1. um

34:20

that's kind of like the base case of what we are doing here so basically we cannot come up here and

34:26

we can manually set l.grad to one this is our manual back propagation

34:31

l dot grad is one and let's redraw and we'll see that we filled in grad as

34:37

1 for l we're now going to continue the back propagation so let's here look at the derivatives of l with respect to d and f

34:45

let's do a d first so what we are interested in if i create a markdown on here is we'd like to know

34:51

basically we have that l is d times f and we'd like to know what is uh d

34:57

l by d d what is that and if you know your calculus uh l is d

35:03

times f so what is d l by d d it would be f and if you don't believe me we can also

35:10

just derive it because the proof would be fairly straightforward uh we go to the

35:15

definition of the derivative which is f of x plus h minus f of x divide h

35:22

as a limit limit of h goes to zero of this kind of expression so when we have l is d times f

35:28

then increasing d by h would give us the output of b plus h

35:33

times f that's basically f of x plus h right

35:38

minus d times f and then divide h and symbolically

35:44

expanding out here we would have basically d times f plus h times f minus

35:50

t times f divide h and then you see how the df minus df cancels so you're left with h times f

35:57

divide h which is f so in the limit as h goes to zero of

36:03

you know derivative definition we just get f in the case of

36:09

d times f so symmetrically dl by d

36:15

f will just be d so what we have is that f dot grad

36:21

we see now is just the value of d which is 4.

36:28

and we see that d dot grad is just uh the value of f

36:36

and so the value of f is negative two so we'll set those manually

36:45

let me erase this markdown node and then let's redraw what we have

36:50

okay and let's just make sure that these were correct so we seem to think that dl by

36:56

dd is negative two so let's double check um let me erase this plus h from before

37:02

and now we want the derivative with respect to f so let's just come here when i create f and let's do a plus h here and this

37:08

should print the derivative of l with respect to f so we expect to see four

37:14

yeah and this is four up to floating point funkiness and then dl by dd

37:21

should be f which is negative two grad is negative two

37:26

so if we again come here and we change d

37:31

d dot data plus equals h right here so we expect so we've added a little h

37:37

and then we see how l changed and we expect to print uh negative two

37:44

there we go so we've numerically verified what we're doing here is what kind of like an

37:50

inline gradient check gradient check is when we are deriving this like back propagation

37:56

and getting the derivative with respect to all the intermediate results and then numerical gradient is just you know

38:03

estimating it using small step size now we're getting to the crux of backpropagation so this will be the most

38:10

important node to understand because if you understand the gradient for this node you understand all of back

38:16

propagation and all of training of neural nets basically so we need to derive dl by bc

38:23

in other words the derivative of l with respect to c because we've computed all these other gradients already

38:29

now we're coming here and we're continuing the back propagation manually so we want dl by dc and then we'll also

38:36

derive dl by de now here's the problem how do we derive dl

38:41

by dc we actually know the derivative l with respect to d so we know how l assessed

38:48

it to d but how is l sensitive to c so if we wiggle c how does that impact l

38:55

through d so we know dl by dc

39:01

and we also here know how c impacts d and so just very intuitively if you know the impact that c is having on d and the

39:09

impact that d is having on l then you should be able to somehow put that information together to figure out

39:14

how c impacts l and indeed this is what we can actually do so in particular we know just

39:20

concentrating on d first let's look at how what is the derivative basically of d with respect to c so in other words

39:27

what is dd by dc so here we know that d is c times c plus

39:34

e that's what we know and now we're interested in dd by dc if you just know your calculus again and

39:41

you remember that differentiating c plus e with respect to c you know that that gives you

39:46

1.0 and we can also go back to the basics and derive this because again we can go

39:51

to our f of x plus h minus f of x divide by h that's the definition of a derivative as

39:58

h goes to zero and so here focusing on c and its effect on d

40:04

we can basically do the f of x plus h will be c is incremented by h plus e

40:10

that's the first evaluation of our function minus c plus e

40:16

and then divide h and so what is this uh just expanding this out this will be

40:21

c plus h plus e minus c minus e divide h and then you see here how c

40:27

minus c cancels e minus e cancels we're left with h over h which is 1.0

40:33

and so by symmetry also d d by d

40:38

e will be 1.0 as well so basically the derivative of a sum

40:44

expression is very simple and and this is the local derivative so i call this the local derivative because we have the

40:51

final output value all the way at the end of this graph and we're now like a small node here and this is a little plus node

40:58

and it the little plus node doesn't know anything about the rest of the graph that it's embedded in all it knows is

41:04

that it did a plus it took a c and an e added them and created d and this plus note also knows the local

41:11

influence of c on d or rather rather the derivative of d with respect to c and it

41:16

also knows the derivative of d with respect to e but that's not what we want that's just a local derivative what we actually

41:23

want is d l by d c and l could l is here just one step away but in a general case

41:30

this little plus note is could be embedded in like a massive graph so

41:35

again we know how l impacts d and now we know how c and e impact d how do we put

41:41

that information together to write dl by dc and the answer of course is the chain rule in calculus

41:47

and so um i pulled up a chain rule here from kapedia

41:52

and i'm going to go through this very briefly so chain rule wikipedia sometimes can be very

41:58

confusing and calculus can can be very confusing like this is the way i

42:03

learned chain rule and it was very confusing like what is happening it's just complicated so i like this expression

42:10

much better if a variable z depends on a variable y which itself depends on the variable x

42:18

then z depends on x as well obviously through the intermediate variable y in this case the chain rule is expressed

42:24

as if you want dz by dx then you take the dz by dy and you

42:30

multiply it by d y by dx so the chain rule fundamentally is telling you

42:36

how we chain these uh derivatives together

42:41

correctly so to differentiate through a function composition we have to apply a multiplication

42:48

of those derivatives so that's really what chain rule is telling us

42:54

and there's a nice little intuitive explanation here which i also think is kind of cute the chain rule says that

42:59

knowing the instantaneous rate of change of z with respect to y and y relative to x allows one to calculate the instantaneous rate of change of z

43:06

relative to x as a product of those two rates of change simply the product of those two

43:12

so here's a good one if a car travels twice as fast as bicycle and the bicycle is four times as

43:18

fast as walking man then the car travels two times four eight times as fast as demand

43:25

and so this makes it very clear that the correct thing to do sort of is to multiply

43:30

so cars twice as fast as bicycle and bicycle is four times as fast as man

43:36

so the car will be eight times as fast as the man and so we can take these

43:42

intermediate rates of change if you will and multiply them together and that justifies the

43:48

chain rule intuitively so have a look at chain rule about here really what it means for us is there's a very simple

43:54

recipe for deriving what we want which is dl by dc and what we have so far

44:01

is we know want and we know

44:07

what is the impact of d on l so we know d l by

44:12

d d the derivative of l with respect to d d we know that that's negative two and now because of this local

44:19

reasoning that we've done here we know dd by d c

44:24

so how does c impact d and in particular this is a plus node so the

44:29

local derivative is simply 1.0 it's very simple and so the chain rule tells us that dl by dc

44:37

going through this intermediate variable will just be simply d l by

44:44

d times

44:49

dd by dc that's chain rule so this is identical to what's happening

44:55

here except z is rl y is our d and x is rc

45:03

so we literally just have to multiply these and because

45:10

these local derivatives like dd by dc are just one we basically just copy over dl by dd

45:17

because this is just times one so what does it do so because dl by dd is negative two what is dl by dc

45:25

well it's the local gradient 1.0 times dl by dd which is negative two

45:31

so literally what a plus node does you can look at it that way is it literally just routes the gradient

45:37

because the plus nodes local derivatives are just one and so in the chain rule one times

45:43

dl by dd is um is uh is just dl by dd and so that

45:50

derivative just gets routed to both c and to e in this case

45:55

so basically um we have that that grad or let's start with c since that's the

46:01

one we looked at is negative two times one

46:06

negative two and in the same way by symmetry e that grad will be negative two that's the

46:13

claim so we can set those we can redraw

46:19

and you see how we just assign negative to negative two so this backpropagating signal which is carrying the information

46:25

of like what is the derivative of l with respect to all the intermediate nodes we can imagine it almost like flowing

46:30

backwards through the graph and a plus node will simply distribute the derivative to all the leaf nodes sorry

46:36

to all the children nodes of it so this is the claim and now let's verify it so let me remove the plus h

46:43

here from before and now instead what we're going to do is we're going to increment c so c dot

46:48

data will be credited by h and when i run this we expect to see negative 2

46:54

negative 2. and then of course for e so e dot data plus equals h and we

47:01

expect to see negative 2. simple

47:07

so those are the derivatives of these internal nodes and now we're going to recurse our way

47:13

backwards again and we're again going to apply the chain rule so here we go our second

47:19

application of chain rule and we will apply it all the way through the graph we just happen to only have one more node remaining

47:25

we have that d l by d e as we have just calculated is negative two so we know that

47:32

so we know the derivative of l with respect to e and now we want dl

47:39

by da right and the chain rule is telling us that that's just dl by de

47:48

negative 2 times the local gradient so what is the local gradient basically d e

47:55

by d a we have to look at that so i'm a little times node

48:02

inside a massive graph and i only know that i did a times b and i produced an e

48:09

so now what is d e by d a and d e by d b that's the only thing that i sort of

48:14

know about that's my local gradient so because we have that e's a times b we're

48:20

asking what is d e by d a and of course we just did that here we

48:26

had a times so i'm not going to rederive it but if you want to differentiate this

48:32

with respect to a you'll just get b right the value of b which in this case is negative 3.0

48:41

so basically we have that dl by da well let me just do it right here we

48:47

have that a dot grad and we are applying chain rule here is d l by d e which we see here is

48:54

negative two times what is d e by d a

48:59

it's the value of b which is negative 3.

49:04

that's it and then we have b grad is again dl by

49:10

de which is negative 2 just the same way times what is d e by d

49:18

um db is the value of a which is 2.2.0

49:23

as the value of a so these are our claimed derivatives

49:28

let's redraw and we see here that a dot grad turns out to be 6 because

49:36

that is negative 2 times negative 3 and b dot grad is negative 4

49:41

times sorry is negative 2 times 2 which is negative 4. so those are our claims let's delete

49:47

this and let's verify them we have

49:52

a here a dot data plus equals h so the claim is that

49:59

a dot grad is six let's verify six

50:04

and we have beta data plus equals h so nudging b by h

50:11

and looking at what happens we claim it's negative four and indeed it's negative four plus minus

50:17

again float oddness um and uh

50:23

that's it this that was the manual back propagation

50:28

uh all the way from here to all the leaf nodes and we've done it piece by piece and really all we've done is as you saw

50:35

we iterated through all the nodes one by one and locally applied the chain rule we always know what is the derivative of

50:41

l with respect to this little output and then we look at how this output was produced this output was produced

50:47

through some operation and we have the pointers to the children nodes of this operation

50:52

and so in this little operation we know what the local derivatives are and we just multiply them onto the derivative

50:58

always so we just go through and recursively multiply on the local derivatives and

51:04

that's what back propagation is is just a recursive application of chain rule backwards through the computation graph

## preview of a single optimization step

51:10

let's see this power in action just very briefly what we're going to do is we're going to

51:15

nudge our inputs to try to make l go up so in particular what we're doing is we

51:21

want a.data we're going to change it and if we want l to go up that means we just have to go in the direction of the

51:27

gradient so a should increase in the direction of gradient by like some small step amount

51:34

this is the step size and we don't just want this for ba but also for b

51:41

also for c also for f those are

51:47

leaf nodes which we usually have control over and if we nudge in direction of the

51:52

gradient we expect a positive influence on l so we expect l to go up

51:58

positively so it should become less negative it should go up to say negative you know

52:03

six or something like that uh it's hard to tell exactly and we'd have to rewrite the forward pass so let

52:09

me just um do that here um

52:16

this would be the forward pass f would be unchanged this is effectively the forward pass and now if we print l.data

52:24

we expect because we nudged all the values all the inputs in the rational gradient we expected a less negative l

52:30

we expect it to go up so maybe it's negative six or so let's see what happens

52:36

okay negative seven and uh this is basically one step of an

52:41

optimization that we'll end up running and really does gradient just give us some power because we know how to

52:47

influence the final outcome and this will be extremely useful for training knowledge as well as you'll see

## manual backpropagation example #2: a neuron

52:52

so now i would like to do one more uh example of manual backpropagation using

52:58

a bit more complex and uh useful example we are going to back propagate through a

53:04

neuron so we want to eventually build up neural networks and in the simplest case these

53:10

are multilateral perceptrons as they're called so this is a two layer neural net and it's got these hidden layers made up

53:17

of neurons and these neurons are fully connected to each other now biologically neurons are very complicated devices but we have very

53:23

simple mathematical models of them and so this is a very simple mathematical model of a neuron you have

53:29

some inputs axis and then you have these synapses that have weights on them so

53:36

the w's are weights and then the synapse interacts with the input to

53:42

this neuron multiplicatively so what flows to the cell body of this neuron is w times x

53:49

but there's multiple inputs so there's many w times x's flowing into the cell body

53:54

the cell body then has also like some bias so this is kind of like the inert innate sort of trigger happiness

54:02

of this neuron so this bias can make it a bit more trigger happy or a bit less trigger happy regardless of the input

54:08

but basically we're taking all the w times x of all the inputs adding the bias and

54:13

then we take it through an activation function and this activation function is usually some kind of a squashing function

54:20

like a sigmoid or 10h or something like that so as an example we're going to use the 10h in this

54:26

example numpy has a np.10h so

54:32

we can call it on a range and we can plot it this is the 10h function and you see

54:38

that the inputs as they come in get squashed on the y coordinate here so

54:44

um right at zero we're going to get exactly zero and then as you go more positive in

54:49

the input then you'll see that the function will only go up to one and then plateau out

54:55

and so if you pass in very positive inputs we're gonna cap it smoothly at one and on the negative side we're gonna

55:02

cap it smoothly to negative one so that's 10h and that's the squashing function or an

55:08

activation function and what comes out of this neuron is just the activation function applied to the dot product of

55:14

the weights and the inputs so let's write one out

55:21

um i'm going to copy paste because

55:27

i don't want to type too much but okay so here we have the inputs x1 x2 so this is a two-dimensional

55:33

neuron so two inputs are going to come in these are thought out as the weights of this neuron

55:38

weights w1 w2 and these weights again are the synaptic strengths for each

55:43

input and this is the bias of the neuron b

55:49

and now we want to do is according to this model we need to multiply x1 times

55:54

w1 and x2 times w2 and then we need to add bias on top of

56:00

it and it gets a little messy here but all we are trying to do is x1 w1 plus x2 w2

56:06

plus b and these are multiply here except i'm doing it in small steps so

56:12

that we actually have pointers to all these intermediate nodes so we have x1 w1 variable x times x2 w2 variable and

56:19

i'm also labeling them so n is now the cell body raw

56:25

raw activation without the activation function for now

56:30

and this should be enough to basically plot it so draw dot of n

56:37

gives us x1 times w1 x2 times w2 being added

56:43

then the bias gets added on top of this and this n is this sum

56:49

so we're now going to take it through an activation function and let's say we use the 10h

56:54

so that we produce the output so what we'd like to do here is we'd like to do the output and i'll call it o

57:01

is um n dot 10h okay but we haven't yet written the 10h

57:08

now the reason that we need to implement another 10h function here is that tanh is a

57:14

hyperbolic function and we've only so far implemented a plus and the times and you can't make a 10h out of just pluses

57:20

and times you also need exponentiation so 10h is this kind of a formula here

57:27

you can use either one of these and you see that there's exponentiation involved which we have not implemented yet for

57:32

our low value node here so we're not going to be able to produce 10h yet and we have to go back up and implement something like it

57:39

now one option here is we could actually implement um

57:44

exponentiation right and we could return the x of a value instead of a 10h of a value

57:52

because if we had x then we have everything else that we need so um because we know how to add and we know

57:58

how to um we know how to add and we know how to multiply so we'd be able to create 10h

58:04

if we knew how to x but for the purposes of this example i specifically wanted to

58:10

show you that we don't necessarily need to have the most atomic pieces

58:15

in um in this value object we can actually like create functions at arbitrary

58:23

points of abstraction they can be complicated functions but they can be also very very simple functions like a plus and it's totally up to us the only

58:30

thing that matters is that we know how to differentiate through any one function so we take some inputs and we

58:35

make an output the only thing that matters it can be arbitrarily complex function as long as you know how to

58:41

create the local derivative if you know the local derivative of how the inputs impact the output then that's all you

58:46

need so we're going to cluster up all of this expression and we're not going to break it down to its atomic

58:52

pieces we're just going to directly implement tanh so let's do that depth nh

58:59

and then out will be a value of and we need this expression here so

59:05

um let me actually copy paste

59:14

let's grab n which is a cell.theta and then this i believe is the tan h

59:21

math.x of two no n

59:27

n minus one over two n plus one maybe i can call this x

59:33

just so that it matches exactly okay and now this will be t

59:40

and uh children of this node there's just one child and i'm wrapping it in a tuple so this

59:46

is a tuple of one object just self and here the name of this operation will be 10h

59:52

and we're going to return that okay

59:58

so now valley should be implementing 10h and now we can scroll all the way down here

1:00:04

and we can actually do n.10 h and that's going to return the tanhd output of n

1:00:11

and now we should be able to draw it out of o not of n so let's see how that worked

1:00:18

there we go n went through 10 h to produce this output

1:00:24

so now tan h is a sort of our little micro grad supported node

1:00:30

here as an operation and as long as we know the derivative of

1:00:35

10h then we'll be able to back propagate through it now let's see this 10h in action currently it's not squashing too

1:00:41

much because the input to it is pretty low so if the bias was increased to say

1:00:46

eight then we'll see that what's flowing into the 10h now is

1:00:53

two and 10h is squashing it to 0.96 so we're already hitting the tail of this 10h and

1:00:59

it will sort of smoothly go up to 1 and then plateau out over there okay so now i'm going to do something slightly strange i'm going to change

1:01:06

this bias from 8 to this number 6.88 etc

1:01:11

and i'm going to do this for specific reasons because we're about to start back propagation

1:01:16

and i want to make sure that our numbers come out nice they're not like very crazy numbers they're nice numbers that

1:01:22

we can sort of understand in our head let me also add a pose label o is short for output here

1:01:30

so that's zero okay so 0.88 flows into 10 h comes out 0.7 so on

1:01:36

so now we're going to do back propagation and we're going to fill in all the gradients so what is the derivative o with respect

1:01:43

to all the inputs here and of course in the typical neural network setting what we really

1:01:48

care about the most is the derivative of these neurons on the weights specifically the w2 and w1 because those

1:01:56

are the weights that we're going to be changing part of the optimization and the other thing that we have to remember is here we have only a single

1:02:02

neuron but in the neural natives typically have many neurons and they're connected so this is only like a one small neuron

1:02:09

a piece of a much bigger puzzle and eventually there's a loss function that sort of measures the accuracy of the neural net and we're back propagating

1:02:15

with respect to that accuracy and trying to increase it so let's start off by propagation here

1:02:21

in the end what is the derivative of o with respect to o the base case sort of we know

1:02:26

always is that the gradient is just 1.0 so let me fill it in

1:02:32

and then let me split out the drawing function

1:02:40

here and then here cell

1:02:47

clear this output here okay so now when we draw o we'll see that oh

1:02:52

that grad is one so now we're going to back propagate through the tan h so to back propagate through 10h we need

1:02:58

to know the local derivative of 10h so if we have that

1:03:03

o is 10 h of n then what is d o by d n

1:03:12

now what you could do is you could come here and you could take this expression and you could do your calculus derivative taking

1:03:19

um and that would work but we can also just scroll down wikipedia here into a section that hopefully tells us

1:03:26

that derivative uh d by dx of 10 h of x is any of these i like this one 1 minus 10

1:03:33

h square of x so this is 1 minus 10 h of x squared

1:03:39

so basically what this is saying is that d o by d n is

1:03:44

1 minus 10 h of n squared

1:03:51

and we already have 10 h of n that's just o so it's one minus o squared

1:03:56

so o is the output here so the output is this number

1:04:02

data is this number and then

1:04:08

what this is saying is that do by dn is 1 minus this squared so

1:04:13

one minus of that data squared is 0.5 conveniently

1:04:18

so the local derivative of this 10 h operation here is 0.5

1:04:24

and so that would be d o by d n so we can fill in that in that grad

1:04:33

is 0.5 we'll just fill in

1:04:42

so this is exactly 0.5 one half so now we're going to continue the back propagation

1:04:49

this is 0.5 and this is a plus node so how is backprop going to what is that

1:04:55

going to do here and if you remember our previous example a plus is just a distributor of gradient

1:05:01

so this gradient will simply flow to both of these equally and that's because the local derivative of this operation

1:05:07

is one for every one of its nodes so 1 times 0.5 is 0.5

1:05:12

so therefore we know that this node here which we called this

1:05:18

its grad is just 0.5 and we know that b dot grad is also 0.5

1:05:24

so let's set those and let's draw so 0.5

1:05:30

continuing we have another plus 0.5 again we'll just distribute it so 0.5 will flow to both of these

1:05:37

so we can set theirs

1:05:43

x2w2 as well that grad is 0.5 and let's redraw pluses are my favorite

1:05:50

uh operations to back propagate through because it's very simple so now it's flowing into these

1:05:56

expressions is 0.5 and so really again keep in mind what the derivative is telling us at every point in time along

1:06:01

here this is saying that if we want the output of this neuron to increase

1:06:08

then the influence on these expressions is positive on the output both of them are

1:06:13

positive contribution to the output

1:06:20

so now back propagating to x2 and w2 first this is a times node so we know that the

1:06:26

local derivative is you know the other term so if we want to calculate x2.grad

1:06:32

then can you think through what it's going to be

1:06:40

so x2.grad will be w2.data times this x2w2

1:06:48

by grad right and w2.grad will be

1:06:55

x2 that data times x2w2.grad

1:07:01

right so that's the local piece of chain rule

1:07:07

let's set them and let's redraw so here we see that the gradient on our weight 2 is 0 because x2 data was 0

1:07:15

right but x2 will have the gradient 0.5 because data here was 1. and so what's interesting here right is

1:07:22

because the input x2 was 0 then because of the way the times works

1:07:28

of course this gradient will be zero and think about intuitively why that is derivative always tells us the influence

1:07:35

of this on the final output if i wiggle w2 how is the output changing

1:07:41

it's not changing because we're multiplying by zero so because it's not changing there's no derivative and zero is the correct

1:07:47

answer because we're squashing it at zero and let's do it here point five should

1:07:54

come here and flow through this times and so we'll have that x1.grad is

1:08:01

can you think through a little bit what what this should be

1:08:07

the local derivative of times with respect to x1 is going to be w1

1:08:12

so w1 is data times x1 w1 dot grad

1:08:18

and w1.grad will be x1.data times x1 w2 w1 with graph

1:08:27

let's see what those came out to be so this is 0.5 so this would be negative 1.5 and this would be 1.

1:08:34

and we've back propagated through this expression these are the actual final derivatives so if we want this neuron's

1:08:40

output to increase we know that what's necessary is that

1:08:47

w2 we have no gradient w2 doesn't actually matter to this neuron right now but this neuron this weight should uh go

1:08:54

up so if this weight goes up then this neuron's output would have gone up and

1:08:59

proportionally because the gradient is one okay so doing the back propagation manually is obviously ridiculous so we

## implementing the backward function for each operation

1:09:05

are now going to put an end to this suffering and we're going to see how we can implement uh the backward pass a bit

1:09:11

more automatically we're not going to be doing all of it manually out here it's now pretty obvious to us by example

1:09:17

how these pluses and times are back property ingredients so let's go up to the value

1:09:22

object and we're going to start codifying what we've seen in the examples below

1:09:29

so we're going to do this by storing a special cell dot backward

1:09:34

and underscore backward and this will be a function which is going to do that little piece of chain rule at each

1:09:41

little node that compute that took inputs and produced output uh we're going to store

1:09:46

how we are going to chain the the outputs gradient into the inputs gradients

1:09:52

so by default this will be a function that uh doesn't do anything

1:09:58

so um and you can also see that here in the value in micrograb

1:10:03

so with this backward function by default doesn't do anything

1:10:08

this is an empty function and that would be sort of the case for example for a leaf node for leaf node there's nothing to do

1:10:15

but now if when we're creating these out values these out values are an addition

1:10:21

of self and other and so we will want to sell set

1:10:27

outs backward to be the function that propagates the gradient

1:10:34

so let's define what should happen

1:10:40

and we're going to store it in a closure let's define what should happen when we call outs grad

1:10:47

for in addition our job is to take outs grad and propagate it into self's

1:10:55

grad and other grad so basically we want to sell self.grad to something

1:11:00

and we want to set others.grad to something okay

1:11:05

and the way we saw below how chain rule works we want to take the local derivative times

1:11:11

the sort of global derivative i should call it which is the derivative of the final output of the expression with respect to

1:11:18

out's data with respect to out so

1:11:24

the local derivative of self in an addition is 1.0 so it's just 1.0 times

1:11:31

outs grad that's the chain rule and others.grad will be 1.0 times

1:11:38

outgrad and what you basically what you're seeing here is that outscrad will simply be copied onto selfs grad

1:11:45

and others grad as we saw happens for an addition operation so we're going to later call this

1:11:51

function to propagate the gradient having done an addition let's now do multiplication we're going

1:11:57

to also define that backward and we're going to set its backward to

1:12:04

be backward and we want to chain outgrad into

1:12:11

self.grad and others.grad

1:12:17

and this will be a little piece of chain rule for multiplication so we'll have so what should this be

1:12:23

can you think through

1:12:28

so what is the local derivative here the local derivative was others.data

1:12:35

and then oops others.data and the times of that grad that's channel

1:12:42

and here we have self.data times of that grad that's what we've been doing

1:12:49

and finally here for 10 h left backward

1:12:54

and then we want to set out backwards to be just backward

1:13:00

and here we need to back propagate we have out that grad and we want to chain it into self.grad

1:13:09

and salt.grad will be the local derivative of this operation that we've done here which is 10h

1:13:16

and so we saw that the local the gradient is 1 minus the tan h of x squared which here is t

1:13:23

that's the local derivative because that's t is the output of this 10 h so 1 minus t squared is the local derivative

1:13:30

and then gradient um has to be multiplied because of the chain rule so outgrad is chained through the local

1:13:36

gradient into salt.grad and that should be basically it so we're

1:13:41

going to redefine our value node we're going to swing all the way down here

1:13:48

and we're going to redefine our expression make sure that all the grads are zero

1:13:55

okay but now we don't have to do this manually anymore we are going to basically be calling the

1:14:01

dot backward in the right order so first we want to call os

1:14:07

dot backwards

1:14:14

so o was the outcome of 10h right so calling all that those who's

1:14:20

backward will be this function this is what it will do

1:14:26

now we have to be careful because there's a times out.grad

1:14:31

and out.grad remember is initialized to zero

1:14:38

so here we see grad zero so as a base case we need to set both.grad to 1.0

1:14:46

to initialize this with 1

1:14:53

and then once this is 1 we can call oda backward and what that should do is it should

1:14:58

propagate this grad through 10h so the local derivative times

1:15:04

the global derivative which is initialized at one so this should

1:15:11

um a dope

1:15:17

so i thought about redoing it but i figured i should just leave the error in here because it's pretty funny why is

1:15:22

anti-object not callable uh it's because i screwed up we're trying to save these

1:15:29

functions so this is correct this here we don't want to call the function

1:15:34

because that returns none these functions return none we just want to store the function so let me redefine the value object

1:15:42

and then we're going to come back in redefine the expression draw a dot everything is great o dot grad is one

1:15:50

o dot grad is one and now now this should work of course

1:15:55

okay so all that backward should this grant should now be 0.5 if we redraw and if everything went correctly

1:16:03

0.5 yay okay so now we need to call ns.grad

1:16:10

and it's not awkward sorry ends backward so that seems to have worked

1:16:17

so instead backward routed the gradient to both of these so this is looking great

1:16:24

now we could of course called uh called b grad beat up backwards sorry

1:16:30

what's gonna happen well b doesn't have it backward b is backward

1:16:35

because b is a leaf node b's backward is by initialization the empty function

1:16:41

so nothing would happen but we can call call it on it but when we call

1:16:48

this one it's backward

1:16:53

then we expect this 0.5 to get further routed right so there we go 0.5.5

1:17:00

and then finally we want to call it here on x2 w2

1:17:10

and on x1 w1

1:17:16

do both of those and there we go so we get 0 0.5 negative 1.5 and 1

1:17:23

exactly as we did before but now we've done it through calling that backward um

1:17:30

sort of manually so we have the lamp one last piece to get rid of which is us calling

## implementing the backward function for a whole expression graph

1:17:36

underscore backward manually so let's think through what we are actually doing um

1:17:41

we've laid out a mathematical expression and now we're trying to go backwards through that expression

1:17:46

um so going backwards through the expression just means that we never want to call a dot backward for any node

1:17:54

before we've done a sort of um everything after it

1:17:59

so we have to do everything after it before we're ever going to call that backward on any one node we have to get all of its full dependencies everything

1:18:06

that it depends on has to propagate to it before we can continue back propagation so this ordering of

1:18:14

graphs can be achieved using something called topological sort so topological sort

1:18:20

is basically a laying out of a graph such that all the edges go only from left to right basically

1:18:26

so here we have a graph it's a directory a cyclic graph a dag and this is two different topological

1:18:34

orders of it i believe where basically you'll see that it's laying out of the notes such that all the edges go only

1:18:39

one way from left to right and implementing topological sort you can look in wikipedia and so on i'm not

1:18:46

going to go through it in detail but basically this is what builds a

1:18:51

topological graph we maintain a set of visited nodes and

1:18:56

then we are going through starting at some root node

1:19:02

which for us is o that's where we want to start the topological sort and starting at o we go through all of

1:19:08

its children and we need to lay them out from left to right and basically this starts at o

1:19:14

if it's not visited then it marks it as visited and then it iterates through all of its children

1:19:20

and calls build topological on them and then uh after it's gone through all

1:19:26

the children it adds itself so basically this node that we're going to call it on

1:19:31

like say o is only going to add itself to the topo list after all of the

1:19:37

children have been processed and that's how this function is guaranteeing that you're only going to be in the list

1:19:43

once all your children are in the list and that's the invariant that is being maintained so if we built upon o and

1:19:49

then inspect this list we're going to see that it ordered our

1:19:54

value objects and the last one is the value of 0.707 which is the

1:20:00

output so this is o and then this is n and then all the other nodes get laid

1:20:07

out before it so that builds the topological graph and really what we're doing now is we're

1:20:13

just calling dot underscore backward on all of the nodes in a topological order

1:20:19

so if we just reset the gradients they're all zero what did we do we started by

1:20:27

setting o dot grad to b1 that's the base case

1:20:33

then we built the topological order and then we went for node

1:20:41

in reversed of topo now

1:20:47

in in the reverse order because this list goes from you know we need to go through it in reversed order

1:20:53

so starting at o note that backward and this should be

1:21:01

it there we go those are the correct derivatives

1:21:07

finally we are going to hide this functionality so i'm going to copy this and we're going to hide it

1:21:13

inside the valley class because we don't want to have all that code lying around so instead of an underscore backward

1:21:19

we're now going to define an actual backward so that's backward without the underscore

1:21:26

and that's going to do all the stuff that we just arrived so let me just clean this up a little bit so

1:21:32

we're first going to build a topological graph

1:21:38

starting at self so build topo of self

1:21:44

will populate the topological order into the topo list which is a local variable

1:21:49

then we set self.grad to be one and then for each node in the reversed

1:21:55

list so starting at us and going to all the children underscore backward

1:22:02

and that should be it so save

1:22:08

come down here redefine \[Music\] okay all the grands are zero

1:22:13

and now what we can do is oh that backward without the underscore and

1:22:21

there we go and that's uh that's back propagation

1:22:26

place for one neuron now we shouldn't be too happy with ourselves actually because we have a bad

## fixing a backprop bug when one node is used multiple times

1:22:32

bug um and we have not surfaced the bug because of some specific conditions that we are we have to think about right now

1:22:39

so here's the simplest case that shows the bug say i create a single node a

1:22:48

and then i create a b that is a plus a and then i called backward

1:22:54

so what's going to happen is a is 3 and then a b is a plus a so there's two

1:23:00

arrows on top of each other here then we can see that b is of course the

1:23:05

forward pass works b is just a plus a which is six but the gradient here is not actually

1:23:11

correct that we calculate it automatically and that's because

1:23:17

um of course uh just doing calculus in your head the

1:23:22

derivative of b with respect to a should be uh two

1:23:27

one plus one it's not one intuitively what's happening here right so b is the result of a plus a and then

1:23:34

we call backward on it so let's go up and see what that does

1:23:42

um b is a result of addition so out as b and then when we called backward what

1:23:49

happened is self.grad was set to one and then other that grad was set to one

1:23:57

but because we're doing a plus a self and other are actually the exact same object

1:24:03

so we are overriding the gradient we are setting it to one and then we are setting it again to one and that's why

1:24:10

it stays at one so that's a problem there's another way to see this in a

1:24:16

little bit more complicated expression

1:24:21

so here we have a and b and then uh d will be the multiplication

1:24:28

of the two and e will be the addition of the two and then we multiply e times d to get f and

1:24:35

then we called fda backward and these gradients if you check will be incorrect

1:24:40

so fundamentally what's happening here again is basically we're going to see an issue

1:24:46

anytime we use a variable more than once until now in these expressions above every variable is used exactly once so

1:24:53

we didn't see the issue but here if a variable is used more than once what's going to happen during backward pass we're backpropagating from

1:25:00

f to e to d so far so good but now equals it backward and it deposits its

1:25:05

gradients to a and b but then we come back to d and call backward and it overwrites

1:25:11

those gradients at a and b so that's obviously a problem

1:25:17

and the solution here if you look at the multivariate case of the chain rule

1:25:22

and its generalization there the solution there is basically that we have to accumulate these gradients these

1:25:28

gradients add and so instead of setting those gradients

1:25:34

we can simply do plus equals we need to accumulate those gradients plus equals plus equals

1:25:41

plus equals plus equals and this will be okay remember because

1:25:48

we are initializing them at zero so they start at zero and then any

1:25:53

contribution that flows backwards will simply add

1:25:58

so now if we redefine this one because the plus equals this now works

1:26:06

because a.grad started at zero and we called beta backward we deposit one and

1:26:11

then we deposit one again and now this is two which is correct and here this will also work and we'll

1:26:16

get correct gradients because when we call eta backward we will deposit the gradients from this branch and then we get to back into

1:26:23

detail backward it will deposit its own gradients and then those gradients simply add on top of each other and so

1:26:30

we just accumulate those gradients and that fixes the issue okay now before we move on let me actually do a bit of

1:26:35

cleanup here and delete some of these some of this intermediate work so

1:26:41

we're not gonna need any of this now that we've derived all of it um we are going to keep this because i want

1:26:48

to come back to it delete the 10h delete our morning example

1:26:53

delete the step delete this keep the code that draws

1:26:59

and then delete this example and leave behind only the definition of value

## breaking up a tanh, exercising with more operations

1:27:05

and now let's come back to this non-linearity here that we implemented the tanh now i told you that we could

1:27:10

have broken down 10h into its explicit atoms in terms of other expressions if

1:27:16

we had the x function so if you remember tan h is defined like this and we chose to develop tan h as a single function

1:27:22

and we can do that because we know its derivative and we can back propagate through it but we can also break down tan h into

1:27:29

and express it as a function of x and i would like to do that now because i want to prove to you that you get all the

1:27:34

same results and all those ingredients but also because it forces us to implement a few more expressions it

1:27:40

forces us to do exponentiation addition subtraction division and things like that and i think it's a good exercise to

1:27:46

go through a few more of these okay so let's scroll up to the definition of value

1:27:52

and here one thing that we currently can't do is we can do like a value of say 2.0

1:27:58

but we can't do you know here for example we want to add constant one and we can't do something like this

1:28:05

and we can't do it because it says object has no attribute data that's because a plus one comes right here to

1:28:11

add and then other is the integer one and then here python is trying to access

1:28:16

one.data and that's not a thing and that's because basically one is not a value object and we only have addition

1:28:22

for value objects so as a matter of convenience so that we can create expressions like this and make them make

1:28:28

sense we can simply do something like this basically

1:28:33

we let other alone if other is an instance of value but if it's not an instance of value we're going to assume

1:28:39

that it's a number like an integer float and we're going to simply wrap it in in value and then other will just become

1:28:45

value of other and then other will have a data attribute and this should work so if i just say this predefined value then

1:28:51

this should work there we go okay now let's do the exact same thing for multiply because we can't

1:28:57

do something like this again for the exact same reason so we just have to go to mole and if other is

1:29:04

not a value then let's wrap it in value let's redefine value and now this works

1:29:10

now here's a kind of unfortunate and not obvious part a times two works we saw that but two times a is that gonna work

1:29:19

you'd expect it to right but actually it will not and the reason it won't is because python doesn't know

1:29:26

like when when you do a times two basically um so a times two python will

1:29:31

go and it will basically do something like a dot mul of two that's basically what it will

1:29:36

call but to it 2 times a is the same as 2 dot mol of a

1:29:41

and it doesn't 2 can't multiply value and so it's really confused about that

1:29:47

so instead what happens is in python the way this works is you are free to define something called the r mold

1:29:54

and our mole is kind of like a fallback so if python can't do 2 times a it will check if um

1:30:02

if by any chance a knows how to multiply two and that will be called into our mole

1:30:08

so because python can't do two times a it will check is there an our mole in value and because there is it will now

1:30:15

call that and what we'll do here is we will swap the order of the operands so basically

1:30:21

two times a will redirect to armel and our mole will basically call a times two and that's how that will work

1:30:28

so redefining now with armor two times a becomes four okay now looking at the

1:30:33

other elements that we still need we need to know how to exponentiate and how to divide so let's first the explanation to the exponentiation part we're going

1:30:40

to introduce a single function x here and x is going to mirror 10h in the

1:30:47

sense that it's a simple single function that transforms a single scalar value and outputs a single scalar value

1:30:53

so we pop out the python number we use math.x to exponentiate it create a new value object

1:30:59

everything that we've seen before the tricky part of course is how do you propagate through e to the x

1:31:04

and so here you can potentially pause the video and think about what should go here

1:31:13

okay so basically we need to know what is the local derivative of e to the x so

1:31:18

d by d x of e to the x is famously just e to the x and we've already just calculated e to the x and it's inside

1:31:25

out that data so we can do up that data times and out that grad that's the chain rule

1:31:32

so we're just chaining on to the current running grad and this is what the expression looks like it looks a little confusing but

1:31:38

this is what it is and that's the exponentiation so redefining we should now be able to

1:31:43

call a.x and hopefully the backward pass works as well okay and the last thing we'd like

1:31:49

to do of course is we'd like to be able to divide now i actually will implement something slightly more powerful than division

1:31:56

because division is just a special case of something a bit more powerful so in particular just by rearranging

1:32:02

if we have some kind of a b equals value of 4.0 here we'd like to basically be able to do a divide b and we'd like

1:32:09

this to be able to give us 0.5 now division actually can be reshuffled

1:32:14

as follows if we have a divide b that's actually the same as a multiplying one over b

1:32:19

and that's the same as a multiplying b to the power of negative one and so what i'd like to do instead is i

1:32:25

basically like to implement the operation of x to the k for some constant uh k so it's an integer or a

1:32:32

float um and we would like to be able to differentiate this and then as a special case uh negative one will be division

1:32:40

and so i'm doing that just because uh it's more general and um yeah you might as well do it that way so basically what

1:32:46

i'm saying is we can redefine uh division which we will put here somewhere

1:32:54

yeah we can put it here somewhere what i'm saying is that we can redefine division so self-divide other

1:33:00

can actually be rewritten as self times other to the power of negative one and now

1:33:07

a value raised to the power of negative one we have now defined that so here's

1:33:13

so we need to implement the pow function where am i going to put the power function maybe here somewhere

1:33:20

this is the skeleton for it so this function will be called when we try to raise a value to some power and

1:33:26

other will be that power now i'd like to make sure that other is only an int or a float usually other is

1:33:33

some kind of a different value object but here other will be forced to be an end or a float otherwise the math

1:33:40

won't work for for or try to achieve in the specific case that would be a different derivative expression if we wanted other

1:33:47

to be a value so here we create the output value which is just uh you know this data raised to

1:33:53

the power of other and other here could be for example negative one that's what we are hoping to achieve

1:33:59

and then uh this is the backwards stub and this is the fun part which is what is the uh chain rule expression here for

1:34:07

back for um back propagating through the power function where the power is to the power

1:34:13

of some kind of a constant so this is the exercise and maybe pause the video here and see if you can figure it out yourself as to what we should put

1:34:20

here

1:34:26

okay so you can actually go here and look at derivative rules as an example and we

1:34:32

see lots of derivatives that you can hopefully know from calculus in particular what we're looking for is the power rule

1:34:39

because that's telling us that if we're trying to take d by dx of x to the n which is what we're doing here

1:34:44

then that is just n times x to the n minus 1 right okay

1:34:50

so that's telling us about the local derivative of this power operation

1:34:55

so all we want here basically n is now other and self.data is x

1:35:03

and so this now becomes other which is n times

1:35:08

self.data which is now a python in torah float it's not a valley object we're accessing

1:35:14

the data attribute raised to the power of other minus one or n

1:35:19

minus one i can put brackets around this but this doesn't matter because

1:35:25

power takes precedence over multiply and python so that would have been okay and that's the local derivative only but

1:35:31

now we have to chain it and we change just simply by multiplying by output grad that's chain rule

1:35:36

and this should technically work and we're going to find out soon but now

1:35:42

if we do this this should now work and we get 0.5 so the forward pass works

1:35:49

but does the backward pass work and i realize that we actually also have to know how to subtract so

1:35:54

right now a minus b will not work to make it work we need one more

1:36:00

piece of code here and basically this is the

1:36:05

subtraction and the way we're going to implement subtraction is we're going to implement it by addition of a negation

1:36:10

and then to implement negation we're gonna multiply by negative one so just again using the stuff we've already built and just um expressing it in terms

1:36:17

of what we have and a minus b is now working okay so now let's scroll again to this expression here for this neuron

1:36:25

and let's just compute the backward pass here once we've defined o and let's draw it

1:36:32

so here's the gradients for all these leaf nodes for this two-dimensional neuron that has a 10h that we've seen

1:36:37

before so now what i'd like to do is i'd like to break up this 10h into this expression here

1:36:44

so let me copy paste this here and now instead of we'll preserve the label

1:36:50

and we will change how we define o so in particular we're going to implement this formula here

1:36:56

so we need e to the 2x minus 1 over e to the x plus 1. so e to the 2x we need to take 2 times n and we

1:37:04

need to exponentiate it that's e to the two x and then because we're using it twice let's create an intermediate

1:37:10

variable e and then define o as e plus one over

1:37:16

e minus one over e plus one e minus one over e plus one

1:37:22

and that should be it and then we should be able to draw that of o so now before i run this what do we

1:37:29

expect to see number one we're expecting to see a much longer graph here because we've broken up 10h

1:37:35

into a bunch of other operations but those operations are mathematically equivalent and so what we're expecting

1:37:41

to see is number one the same result here so the forward pass works and number two because of that

1:37:47

mathematical equivalence we expect to see the same backward pass and the same gradients on these leaf nodes so these

1:37:53

gradients should be identical so let's run this so number one let's verify that instead

1:38:00

of a single 10h node we have now x and we have plus we have times negative one

1:38:06

uh this is the division and we end up with the same forward pass here and then the gradients we have to be

1:38:13

careful because they're in slightly different order potentially the gradients for w2x2 should be 0 and 0.5

1:38:19

w2 and x2 are 0 and 0.5 and w1 x1 are 1 and negative 1.5

1:38:25

1 and negative 1.5 so that means that both our forward passes and backward passes were correct

1:38:31

because this turned out to be equivalent to 10h before and so the reason i wanted to go through

1:38:37

this exercise is number one we got to practice a few more operations and uh writing more backwards passes and number

1:38:43

two i wanted to illustrate the point that the um the level at which you implement your

1:38:49

operations is totally up to you you can implement backward passes for tiny expressions like a single individual

1:38:54

plus or a single times or you can implement them for say 10h

1:39:00

which is a kind of a potentially you can see it as a composite operation because it's made up of all these more atomic

1:39:05

operations but really all of this is kind of like a fake concept all that matters is we have some kind of inputs

1:39:10

and some kind of an output and this output is a function of the inputs in some way and as long as you can do forward pass and the backward pass of

1:39:16

that little operation it doesn't matter what that operation is and how composite it is

1:39:23

if you can write the local gradients you can chain the gradient and you can continue back propagation so the design

1:39:28

of what those functions are is completely up to you so now i would like to show you how you

## doing the same thing but in PyTorch: comparison

1:39:33

can do the exact same thing by using a modern deep neural network library like for example pytorch which i've roughly

1:39:40

modeled micrograd by and so pytorch is something you would use in production and i'll show you how you can

1:39:46

do the exact same thing but in pytorch api so i'm just going to copy paste it in and walk you through it a little bit

1:39:52

this is what it looks like so we're going to import pi torch and then we need to define these

1:39:59

value objects like we have here now micrograd is a scalar valued

1:40:04

engine so we only have scalar values like 2.0 but in pi torch everything is

1:40:10

based around tensors and like i mentioned tensors are just n-dimensional arrays of scalars

1:40:15

so that's why things get a little bit more complicated here i just need a scalar value to tensor a tensor with

1:40:21

just a single element but by default when you work with pytorch you would use um

1:40:28

more complicated tensors like this so if i import pytorch

1:40:33

then i can create tensors like this and this tensor for example is a two by three array

1:40:39

of scalar scalars in a single compact representation so we

1:40:45

can check its shape we see that it's a two by three array and so on so this is usually what you would work

1:40:50

with um in the actual libraries so here i'm creating a tensor that has only a single element

1:40:58

2.0 and then i'm casting it to be double

1:41:03

because python is by default using double precision for its floating point numbers so i'd like everything to be

1:41:08

identical by default the data type of these tensors will be float32 so it's

1:41:14

only using a single precision float so i'm casting it to double so that we have float64 just like in

1:41:21

python so i'm casting to double and then we get something similar to value of two the

1:41:28

next thing i have to do is because these are leaf nodes by default pytorch assumes that they do not require gradients so i need to explicitly say

1:41:35

that all of these nodes require gradients okay so this is going to construct scalar valued one element tensors

1:41:43

make sure that fighters knows that they require gradients now by default these are set to false by the way because of

1:41:48

efficiency reasons because usually you would not want gradients for leaf nodes like the inputs to the network and this

1:41:55

is just trying to be efficient in the most common cases so once we've defined all of our values

1:42:01

in python we can perform arithmetic just like we can here in microgradlend so this will just work and then there's a

1:42:07

torch.10h also and when we get back is a tensor again and we can

1:42:13

just like in micrograd it's got a data attribute and it's got grant attributes so these tensor objects just like in

1:42:19

micrograd have a dot data and a dot grad and the only difference here is that we need

1:42:25

to call it that item because otherwise um pi torch

1:42:30

that item basically takes a single tensor of one element and it just returns that element stripping out

1:42:36

the tensor so let me just run this and hopefully we are going to get this is going to print

1:42:41

the forward pass which is 0.707 and this will be the gradients which

1:42:46

hopefully are 0.5 0 negative 1.5 and 1. so if we just run this

1:42:53

there we go 0.7 so the forward pass agrees and then point five zero negative one point five

1:42:59

and one so pi torch agrees with us and just to show you here basically o

1:43:05

here's a tensor with a single element and it's a double and we can call that item on it to just

1:43:12

get the single number out so that's what item does and o is a tensor object like i mentioned and it's

1:43:18

got a backward function just like we've implemented and then all of these also have a dot graph so like x2 for example in the grad

1:43:26

and it's a tensor and we can pop out the individual number with that actin

1:43:31

so basically torches torch can do what we did in micrograph is a special case when your

1:43:37

tensors are all single element tensors but the big deal with pytorch is that everything is significantly more

1:43:43

efficient because we are working with these tensor objects and we can do lots of operations in parallel on all of

1:43:49

these tensors but otherwise what we've built very much agrees with the api of pytorch

## building out a neural net library (multi-layer perceptron) in micrograd

1:43:55

okay so now that we have some machinery to build out pretty complicated mathematical expressions we can also start building out neural nets and as i

1:44:02

mentioned neural nets are just a specific class of mathematical expressions so we're going to start building out a

1:44:08

neural net piece by piece and eventually we'll build out a two-layer multi-layer layer perceptron as it's called and i'll

1:44:14

show you exactly what that means let's start with a single individual neuron we've implemented one here but

1:44:19

here i'm going to implement one that also subscribes to the pytorch api in how it designs its neural network

1:44:26

modules so just like we saw that we can like match the api of pytorch on the auto grad side we're going to try

1:44:33

to do that on the neural network modules so here's class neuron and just for the sake of efficiency i'm

1:44:40

going to copy paste some sections that are relatively straightforward so the constructor will take

1:44:47

number of inputs to this neuron which is how many inputs come to a neuron so this

1:44:52

one for example has three inputs and then it's going to create a weight there is some random number between

1:44:58

negative one and one for every one of those inputs and a bias that controls the overall

1:45:03

trigger happiness of this neuron and then we're going to implement a def underscore underscore call

1:45:11

of self and x some input x and really what we don't do here is w times x plus b

1:45:17

where w times x here is a dot product specifically now if you haven't seen

1:45:22

call let me just return 0.0 here for now the way this works now is we can have an x

1:45:28

which is say like 2.0 3.0 then we can initialize a neuron that is two-dimensional

1:45:33

because these are two numbers and then we can feed those two numbers into that neuron to get an output

1:45:39

and so when you use this notation n of x python will use call

1:45:45

so currently call just return 0.0

1:45:50

now we'd like to actually do the forward pass of this neuron instead so we're going to do here first is we

1:45:57

need to basically multiply all of the elements of w with all of the elements of x pairwise we need to multiply them

1:46:04

so the first thing we're going to do is we're going to zip up celta w and x and in python zip takes two iterators

1:46:12

and it creates a new iterator that iterates over the tuples of the corresponding entries

1:46:17

so for example just to show you we can print this list and still return 0.0 here

1:46:30

sorry so we see that these w's are paired up

1:46:36

with the x's w with x

1:46:41

and now what we want to do is

1:46:47

for w i x i in we want to multiply w times

1:46:52

w wi times x i and then we want to sum all of that together to come up with an activation

1:46:59

and add also subnet b on top so that's the raw activation and then of course we need to pass that through a

1:47:05

non-linearity so what we're going to be returning is act.10h and here's out

1:47:12

so now we see that we are getting some outputs and we get a different output from a neuron each time because we are

1:47:17

initializing different weights and by and biases and then to be a bit more efficient here actually sum by the way takes a second

1:47:25

optional parameter which is the start and by default the start is zero so

1:47:31

these elements of this sum will be added on top of zero to begin with but actually we can just start with cell dot

1:47:37

b and then we just have an expression like this

1:47:45

and then the generator expression here must be parenthesized in python there we go

1:47:53

yep so now we can forward a single neuron next up we're going to define a layer of neurons so here we have a

1:47:59

schematic for a mlb so we see that these mlps each layer

1:48:05

this is one layer has actually a number of neurons and they're not connected to each other but all of them are fully connected to the input

1:48:11

so what is a layer of neurons it's just it's just a set of neurons evaluated independently

1:48:16

so in the interest of time i'm going to do something fairly straightforward here

1:48:23

it's um literally a layer is just a list of neurons

1:48:28

and then how many neurons do we have we take that as an input argument here how many neurons do you want in your layer

1:48:34

number of outputs in this layer and so we just initialize completely independent neurons with this given

1:48:40

dimensionality and when we call on it we just independently evaluate them so now instead of a neuron

1:48:47

we can make a layer of neurons they are two-dimensional neurons and let's have three of them and now we see that we have three

1:48:53

independent evaluations of three different neurons right okay finally let's complete this picture

1:49:00

and define an entire multi-layer perceptron or mlp and as we can see here in an mlp these

1:49:06

layers just feed into each other sequentially so let's come here and i'm just going to copy the code here in interest of time

1:49:14

so an mlp is very similar we're taking the number of inputs as before but now instead of taking a

1:49:20

single n out which is number of neurons in a single layer we're going to take a list of an outs and this list defines

1:49:26

the sizes of all the layers that we want in our mlp so here we just put them all together and then iterate over consecutive pairs

1:49:34

of these sizes and create layer objects for them and then in the call function we are just calling them sequentially so that's

1:49:41

an mlp really and let's actually re-implement this picture so we want three input neurons

1:49:46

and then two layers of four and an output unit so we want

1:49:52

a three-dimensional input say this is an example input we want three inputs into

1:49:57

two layers of four and one output and this of course is an mlp

1:50:03

and there we go that's a forward pass of an mlp to make this a little bit nicer you see how we have just a single element but

1:50:09

it's wrapped in a list because layer always returns lists circle for convenience

1:50:15

return outs at zero if len out is exactly a single element else return fullest

1:50:22

and this will allow us to just get a single value out at the last layer that only has a single neuron

1:50:28

and finally we should be able to draw dot of n of x and as you might imagine

1:50:34

these expressions are now getting relatively involved so this is an entire mlp that we're

1:50:40

defining now

1:50:45

all the way until a single output okay and so obviously you would never

1:50:50

differentiate on pen and paper these expressions but with micrograd we will be able to back propagate all the way

1:50:56

through this and back propagate into these weights of all these neurons so

1:51:02

let's see how that works okay so let's create ourselves a very simple example data set here

## creating a tiny dataset, writing the loss function

1:51:08

so this data set has four examples and so we have four possible inputs into the neural net

1:51:15

and we have four desired targets so we'd like the neural net to assign

1:51:21

or output 1.0 when it's fed this example negative one when it's fed these examples and one when it's fed this

1:51:26

example so it's a very simple binary classifier neural net basically that we would like here

1:51:32

now let's think what the neural net currently thinks about these four examples we can just get their predictions

1:51:37

um basically we can just call n of x for x in axis and then we can

1:51:43

print so these are the outputs of the neural net on those four examples

1:51:48

so the first one is 0.91 but we'd like it to be one so we should push this one

1:51:55

higher this one we want to be higher this one says 0.88 and we want this to

1:52:00

be negative one this is 0.8 we want it to be negative one and this one is 0.8 we want it to be one

1:52:08

so how do we make the neural net and how do we tune the weights to better predict the desired targets

1:52:16

and the trick used in deep learning to achieve this is to calculate a single number that somehow

1:52:22

measures the total performance of your neural net and we call this single number the loss

1:52:28

so the loss first is is a single number that we're going to define that basically measures how

1:52:34

well the neural net is performing right now we have the intuitive sense that it's not performing very well because we're not very much close to this

1:52:40

so the loss will be high and we'll want to minimize the loss so in particular in this case what we're

1:52:46

going to do is we're going to implement the mean squared error loss so this is doing is we're going to

1:52:51

basically iterate um for y ground truth

1:52:56

and y output in zip of um wise and white red so we're going to

1:53:01

pair up the ground truths with the predictions and this zip iterates over tuples of

1:53:07

them and for each y ground truth and y output we're going

1:53:13

to subtract them and square them

1:53:18

so let's first see what these losses are these are individual loss components and so basically for each

1:53:25

one of the four we are taking the prediction and the ground truth we are subtracting them and

1:53:30

squaring them so because this one is so close to its target 0.91

1:53:36

is almost one subtracting them gives a very small number

1:53:41

so here we would get like a negative point one and then squaring it just makes sure

1:53:47

that regardless of whether we are more negative or more positive we always get a positive

1:53:52

number instead of squaring we should we could also take for example the absolute value we need to discard the sign

1:53:59

and so you see that the expression is ranged so that you only get zero exactly when y out is equal to y ground truth

1:54:06

when those two are equal so your prediction is exactly the target you are going to get zero and if your prediction is not the target

1:54:12

you are going to get some other number so here for example we are way off and so that's why the loss is quite high

1:54:19

and the more off we are the greater the loss will be so we don't want high loss we want low

1:54:26

loss and so the final loss here will be just the sum

1:54:32

of all of these numbers so you see that this should be zero roughly plus zero roughly

1:54:38

but plus seven so loss should be about seven

1:54:43

here and now we want to minimize the loss we want the loss to be low

1:54:49

because if loss is low then every one of the predictions is equal to its target

1:54:56

so the loss the lowest it can be is zero and the greater it is the worse off the

1:55:01

neural net is predicting so now of course if we do lost that backward

1:55:07

something magical happened when i hit enter and the magical thing of course that happened is that we can look at

1:55:14

end.layers.neuron and that layers at say like the the first layer that neurons at zero

1:55:22

because remember that mlp has the layers which is a list and each layer has a neurons which is a

1:55:28

list and that gives us an individual neuron and then it's got some weights and so we can for example look at the

1:55:34

weights at zero um

1:55:40

oops it's not called weights it's called w and that's a value but now this value

1:55:46

also has a groud because of the backward pass and so we see that because this gradient

1:55:52

here on this particular weight of this particular neuron of this particular layer is negative we see that its influence on the loss is

1:56:00

also negative so slightly increasing this particular weight of this neuron of this layer would make the loss go down

1:56:08

and we actually have this information for every single one of our neurons and all their parameters actually it's worth looking at also the draw dot loss by the

1:56:16

way so previously we looked at the draw dot of a single neural neuron forward pass and that was already a large expression

1:56:23

but what is this expression we actually forwarded every one of those four examples and

1:56:29

then we have the loss on top of them with the mean squared error and so this is a really massive graph

1:56:36

because this graph that we've built up now oh my gosh this graph that we've built

1:56:41

up now which is kind of excessive it's excessive because it has four forward passes of a neural net for every one of

1:56:48

the examples and then it has the loss on top and it ends with the value of the loss which was 7.12

1:56:55

and this loss will now back propagate through all the four forward passes all the way through just every single

1:57:00

intermediate value of the neural net all the way back to of course the parameters of the weights which are the

1:57:06

input so these weight parameters here are inputs to this neural net

1:57:12

and these numbers here these scalars are inputs to the neural net so if we went around here

1:57:18

we'll probably find some of these examples this 1.0 potentially maybe this 1.0 or you know

1:57:25

some of the others and you'll see that they all have gradients as well the thing is these gradients on the

1:57:30

input data are not that useful to us and that's because the input data seems

1:57:36

to be not changeable it's it's a given to the problem and so it's a fixed input we're not going to be changing it or

1:57:42

messing with it even though we do have gradients for it but some of these gradients here

1:57:49

will be for the neural network parameters the ws and the bs and those we of course we want to change

1:57:55

okay so now we're going to want some convenience code to gather up all of the parameters of the neural net so that we

## collecting all of the parameters of the neural net

1:58:01

can operate on all of them simultaneously and every one of them we will nudge a tiny amount

1:58:08

based on the gradient information so let's collect the parameters of the neural net all in one array

1:58:14

so let's create a parameters of self that just returns celta w which is a list

1:58:22

concatenated with a list of self.b so this will just return a list

1:58:29

list plus list just you know gives you a list so that's parameters of neuron and i'm

1:58:35

calling it this way because also pi torch has a parameters on every single and in module

1:58:40

and uh it does exactly what we're doing here it just returns the parameter tensors for us as the

1:58:46

parameter scalars now layer is also a module so it will have parameters

1:58:52

itself and basically what we want to do here is something like this like

1:59:00

params is here and then for neuron in salt out neurons

1:59:07

we want to get neuron.parameters and we want to params.extend

1:59:14

right so these are the parameters of this neuron and then we want to put them on top of params so params dot extend

1:59:21

of peace and then we want to return brands so this is way too much code so actually

1:59:28

there's a way to simplify this which is return

1:59:33

p for neuron in self neurons

1:59:39

for p in neuron dot parameters

1:59:45

so it's a single list comprehension in python you can sort of nest them like this and you can um

1:59:51

then create uh the desired array so this is these are identical

1:59:57

we can take this out and then let's do the same here

2:00:04

def parameters self and return a parameter for layer in self dot layers

2:00:13

for p in layer dot parameters

2:00:20

and that should be good now let me pop out this so

2:00:26

we don't re-initialize our network because we need to re-initialize our

2:00:35

okay so unfortunately we will have to probably re-initialize the network because we just add functionality

2:00:41

because this class of course we i want to get all the and that parameters but that's not going to work because this is

2:00:47

the old class okay so unfortunately we do have to reinitialize the network which will

2:00:53

change some of the numbers but let me do that so that we pick up the new api we can now do in the

2:00:58

parameters and these are all the weights and biases inside the entire neural net

2:01:05

so in total this mlp has 41 parameters

2:01:11

and now we'll be able to change them if we recalculate the loss here we see

## doing gradient descent optimization manually, training the network

2:01:18

that unfortunately we have slightly different predictions and slightly different laws

2:01:26

but that's okay okay so we see that this neurons gradient is slightly negative we can

2:01:33

also look at its data right now which is 0.85 so this is the current

2:01:38

value of this neuron and this is its gradient on the loss so what we want to do now is we want to

2:01:45

iterate for every p in n dot parameters so for all the 41 parameters in this neural net

2:01:51

we actually want to change p data slightly according to the gradient information

2:01:59

okay so dot dot to do here but this will be basically a tiny update

2:02:05

in this gradient descent scheme in gradient descent we are thinking of the

2:02:10

gradient as a vector pointing in the direction of increased

2:02:16

loss and so in gradient descent we are modifying

2:02:22

p data by a small step size in the direction of the gradient so the step size as an

2:02:28

example could be like a very small number like 0.01 is the step size times p dot grad

2:02:35

right but we have to think through some of the signs here so uh

2:02:40

in particular working with this specific example here we see that if we just left it like this

2:02:47

then this neuron's value would be currently increased by a tiny amount of the gradient

2:02:53

the grain is negative so this value of this neuron would go slightly down it would become like 0.8 you know four or

2:03:00

something like that but if this neuron's value goes lower

2:03:06

that would actually increase the loss that's because

2:03:12

the derivative of this neuron is negative so increasing this makes the loss go down so

2:03:19

increasing it is what we want to do instead of decreasing it so basically what we're missing here is we're

2:03:24

actually missing a negative sign and again this other interpretation and that's because we want to minimize

2:03:30

the loss we don't want to maximize the loss we want to decrease it and the other interpretation as i mentioned is you can think of the

2:03:36

gradient vector so basically just the vector of all the gradients as pointing in the direction of

2:03:42

increasing the loss but then we want to decrease it so we actually want to go in the opposite direction

2:03:49

and so you can convince yourself that this sort of plug does the right thing here with the negative because we want to minimize the loss

2:03:55

so if we nudge all the parameters by tiny amount

2:04:00

then we'll see that this data will have changed a little bit so now this neuron

2:04:06

is a tiny amount greater value so 0.854 went to 0.857

2:04:13

and that's a good thing because slightly increasing this neuron uh

2:04:18

data makes the loss go down according to the gradient and so the correct thing has happened sign wise

2:04:26

and so now what we would expect of course is that because we've changed all these parameters we expect that the loss

2:04:32

should have gone down a bit so we want to re-evaluate the loss let me basically

2:04:39

this is just a data definition that hasn't changed but the forward pass here of the network we can recalculate

2:04:49

and actually let me do it outside here so that we can compare the two loss values so here if i recalculate the loss

2:04:57

we'd expect the new loss now to be slightly lower than this number so hopefully what we're getting now is a

2:05:03

tiny bit lower than 4.84 4.36 okay and remember the way we've arranged

2:05:10

this is that low loss means that our predictions are matching the targets so our predictions now are probably

2:05:16

slightly closer to the targets and now all we have to do is we

2:05:22

have to iterate this process so again um we've done the forward pass and this is the loss

2:05:28

now we can lost that backward let me take these out and we can do a step size

2:05:34

and now we should have a slightly lower loss 4.36 goes to 3.9

2:05:39

and okay so we've done the forward pass here's the backward pass nudge

2:05:45

and now the loss is 3.66 3.47

2:05:52

and you get the idea we just continue doing this and this is uh gradient descent we're just iteratively doing

2:05:58

forward pass backward pass update forward pass backward pass update and the neural net is improving its

2:06:04

predictions so here if we look at why pred now

2:06:09

like red we see that um this value should be getting closer to

2:06:16

one so this value should be getting more positive these should be getting more negative and this one should be also getting more positive so if we just

2:06:22

iterate this a few more times actually we may be able to afford go to

2:06:28

go a bit faster let's try a slightly higher learning rate

2:06:34

oops okay there we go so now we're at 0.31 if you go too fast by the way if you try

2:06:41

to make it too big of a step you may actually overstep

2:06:47

it's overconfidence because again remember we don't actually know exactly about the loss function the loss function has all kinds of structure and

2:06:53

we only know about the very local dependence of all these parameters on the loss but if we step too far

2:06:59

we may step into you know a part of the loss that is completely different and that can destabilize training and

2:07:04

make your loss actually blow up even so the loss is now 0.04 so actually the

2:07:11

predictions should be really quite close let's take a look so you see how this is almost one

2:07:17

almost negative one almost one we can continue going uh so

2:07:22

yep backward update oops there we go so we went way too fast

2:07:28

and um we actually overstepped so we got two uh too eager where are we

2:07:34

now oops okay seven e negative nine so this is very very low loss

2:07:41

and the predictions are basically perfect so somehow we

2:07:47

basically we were doing way too big updates and we briefly exploded but then somehow we ended up getting into a really good spot so usually this

2:07:54

learning rate and the tuning of it is a subtle art you want to set your learning rate if it's too low you're going to

2:08:00

take way too long to converge but if it's too high the whole thing gets unstable and you might actually even

2:08:05

explode the loss depending on your loss function so finding the step size to be just

2:08:10

right it's it's a pretty subtle art sometimes when you're using sort of vanilla gradient descent

2:08:15

but we happen to get into a good spot we can look at n-dot parameters

2:08:22

so this is the setting of weights and biases that makes our network

2:08:29

predict the desired targets very very close and

2:08:35

basically we've successfully trained neural net okay let's make this a tiny bit more respectable and implement an actual

2:08:41

training loop and what that looks like so this is the data definition that stays this is the forward pass

2:08:47

um so for uh k in range you know we're going to

2:08:53

take a bunch of steps first you do the forward pass

2:09:00

we validate the loss let's re-initialize the neural net from scratch

2:09:06

and here's the data and we first do before pass then we do

2:09:11

the backward pass

2:09:19

and then we do an update that's gradient descent

2:09:26

and then we should be able to iterate this and we should be able to print the current step the current loss um let's just print the

2:09:33

sort of number of the loss and that should be it

2:09:40

and then the learning rate 0.01 is a little too small 0.1 we saw is like a little bit dangerously too high let's go

2:09:46

somewhere in between and we'll optimize this for not 10 steps but let's go for say 20

2:09:52

steps let me erase all of this junk

2:09:59

and uh let's run the optimization and you see how we've actually converged

2:10:05

slower in a more controlled manner and got to a loss that is very low

2:10:11

so i expect white bread to be quite good there we go

2:10:19

um and that's it okay so this is kind of embarrassing but

2:10:25

we actually have a really terrible bug in here and it's a subtle bug and it's a

2:10:31

very common bug and i can't believe i've done it for the 20th time in my life

2:10:36

especially on camera and i could have reshot the whole thing but i think it's pretty funny and you know you get to

2:10:41

appreciate a bit what um working with neural nets maybe is like sometimes

2:10:47

we are guilty of come bug i've actually tweeted

2:10:52

the most common neural net mistakes a long time ago now uh and

2:10:57

i'm not really gonna explain any of these except for we are guilty of number three you forgot to

2:11:03

zero grad before that backward what is that

2:11:09

basically what's happening and it's a subtle bug and i'm not sure if you saw it is that all of these

2:11:15

weights here have a dot data and a dot grad and that grad starts at zero

2:11:22

and then we do backward and we fill in the gradients and then we do an update on the data but

2:11:27

we don't flush the grad it stays there so when we do the second

2:11:33

forward pass and we do backward again remember that all the backward operations do a plus equals on the grad

2:11:39

and so these gradients just add up and they never get reset to zero

2:11:44

so basically we didn't zero grad so here's how we zero grad before

2:11:50

backward we need to iterate over all the parameters and we need to make sure that p dot grad

2:11:56

is set to zero we need to reset it to zero just like it is in the constructor

2:12:02

so remember all the way here for all these value nodes grad is reset to zero and then all these backward passes do a

2:12:09

plus equals from that grad but we need to make sure that we reset these graphs to zero so that

2:12:15

when we do backward all of them start at zero and the actual backward pass accumulates um

2:12:21

the loss derivatives into the grads so this is zero grad in pytorch

2:12:28

and uh we will slightly get we'll get a slightly different optimization let's reset the neural net

2:12:34

the data is the same this is now i think correct and we get a much more

2:12:40

you know we get a much more slower descent we still end up with pretty good results

2:12:46

and we can continue this a bit more to get down lower and lower

2:12:51

and lower yeah so the only reason that the previous

2:12:57

thing worked it's extremely buggy um the only reason that worked is that

2:13:03

this is a very very simple problem and it's very easy for this neural net to fit this data

2:13:09

and so the grads ended up accumulating and it effectively gave us a massive step size and it made us converge

2:13:16

extremely fast but basically now we have to do more steps to get to very low values of loss

2:13:24

and get wipe red to be really good we can try to step a bit greater

2:13:34

yeah we're gonna get closer and closer to one minus one and one so

2:13:39

working with neural nets is sometimes tricky because uh

2:13:44

you may have lots of bugs in the code and uh your network might actually work just like ours worked

2:13:51

but chances are is that if we had a more complex problem then actually this bug would have made us not optimize the loss

2:13:57

very well and we were only able to get away with it because the problem is very simple

## summary of what we learned, how to go towards modern neural nets

2:14:03

so let's now bring everything together and summarize what we learned what are neural nets neural nets are

2:14:09

these mathematical expressions fairly simple mathematical expressions in the case of multi-layer perceptron

2:14:15

that take input as the data and they take input the weights and the parameters of the

2:14:20

neural net mathematical expression for the forward pass followed by a loss function and the loss function tries to

2:14:26

measure the accuracy of the predictions and usually the loss will be low when your predictions are matching your

2:14:32

targets or where the network is basically behaving well so we we manipulate the loss function so that

2:14:38

when the loss is low the network is doing what you want it to do on your problem

2:14:44

and then we backward the loss use backpropagation to get the gradient and then we know how to tune all the

2:14:50

parameters to decrease the loss locally but then we have to iterate that process many times in what's called the gradient

2:14:55

descent so we simply follow the gradient information and that minimizes the loss

2:15:01

and the loss is arranged so that when the loss is minimized the network is doing what you want it to do

2:15:06

and yeah so we just have a blob of neural stuff and we can make it do arbitrary things and that's what gives

2:15:13

neural nets their power um it's you know this is a very tiny network with 41 parameters

2:15:19

but you can build significantly more complicated neural nets with billions at this point almost trillions of

2:15:25

parameters and it's a massive blob of neural tissue simulated neural tissue

2:15:31

roughly speaking and you can make it do extremely complex problems and these neurons then have all

2:15:37

kinds of very fascinating emergent properties in when you try to make them do

2:15:43

significantly hard problems as in the case of gpt for example we have massive amounts of text from the

2:15:49

internet and we're trying to get a neural net to predict to take like a few words and try to predict the next word

2:15:55

in a sequence that's the learning problem and it turns out that when you train this on all of internet the neural net

2:16:00

actually has like really remarkable emergent properties but that neural net would have hundreds of billions of parameters

2:16:07

but it works on fundamentally the exact same principles the neural net of course will be a bit more complex but otherwise the

2:16:15

value in the gradient is there and would be identical and the gradient descent would be there and would be

2:16:21

basically identical but people usually use slightly different updates this is a very simple stochastic gradient descent

2:16:27

update um and the loss function would not be mean squared error they would be using something called the cross-entropy loss

2:16:34

for predicting the next token so there's a few more details but fundamentally the neural network setup and neural network

2:16:39

training is identical and pervasive and now you understand intuitively

2:16:44

how that works under the hood in the beginning of this video i told you that by the end of it you would understand everything in micrograd and then we'd

## walkthrough of the full code of micrograd on github

2:16:50

slowly build it up let me briefly prove that to you so i'm going to step through all the code that is in micrograd as of today

2:16:57

actually potentially some of the code will change by the time you watch this video because i intend to continue developing micrograd

2:17:03

but let's look at what we have so far at least init.pi is empty when you go to engine.pi that has the value

2:17:10

everything here you should mostly recognize so we have the data.grad attributes we have the backward function

2:17:15

uh we have the previous set of children and the operation that produced this value we have addition multiplication and

2:17:22

raising to a scalar power we have the relu non-linearity which is slightly different type of nonlinearity

2:17:28

than 10h that we used in this video both of them are non-linearities and notably 10h is not actually present in

2:17:34

micrograd as of right now but i intend to add it later with the backward which is identical and

2:17:40

then all of these other operations which are built up on top of operations here so values should be very recognizable

2:17:47

except for the non-linearity used in this video um there's no massive difference between relu and 10h and sigmoid and these other

2:17:54

non-linearities they're all roughly equivalent and can be used in mlps so i use 10h because it's a bit smoother and

2:18:00

because it's a little bit more complicated than relu and therefore it's stressed a little bit more the

2:18:05

local gradients and working with those derivatives which i thought would be useful and then that pi is the neural networks

2:18:12

library as i mentioned so you should recognize identical implementation of neuron layer and mlp

2:18:18

notably or not so much we have a class module here there is a parent class of all these modules i did

2:18:24

that because there's an nn.module class in pytorch and so this exactly matches that api and end.module and pytorch has

2:18:31

also a zero grad which i've refactored out here so that's the end of micrograd really

2:18:38

then there's a test which you'll see basically creates two chunks of code one in micrograd and

2:18:45

one in pi torch and we'll make sure that the forward and the backward pass agree identically for a slightly less complicated

2:18:51

expression a slightly more complicated expression everything agrees so we agree with pytorch on all

2:18:57

of these operations and finally there's a demo.ipymb here and it's a bit more complicated binary

2:19:03

classification demo than the one i covered in this lecture so we only had a tiny data set of four examples um here

2:19:09

we have a bit more complicated example with lots of blue points and lots of red points and we're trying to again build a

2:19:15

binary classifier to distinguish uh two dimensional points as red or blue it's a bit more complicated mlp here

2:19:22

with it's a bigger mlp the loss is a bit more complicated because it supports batches

2:19:29

so because our dataset was so tiny we always did a forward pass on the entire data set of four examples but when your

2:19:35

data set is like a million examples what we usually do in practice is we chair we basically pick out some random subset we

2:19:41

call that a batch and then we only process the batch forward backward and update so we don't have to forward the

2:19:47

entire training set so this supports batching because there's a lot more examples here

2:19:53

we do a forward pass the loss is slightly more different this is a max margin loss that i implement here

2:20:00

the one that we used was the mean squared error loss because it's the simplest one there's also the binary cross entropy

2:20:06

loss all of them can be used for binary classification and don't make too much of a difference in the simple examples

2:20:11

that we looked at so far there's something called l2 regularization used here this has to do

2:20:17

with generalization of the neural net and controls the overfitting in machine learning setting but i did not cover

2:20:23

these concepts and concepts in this video potentially later and the training loop you should recognize so forward backward with zero

2:20:31

grad and update and so on you'll notice that in the update here the learning rate is

2:20:36

scaled as a function of number of iterations and it shrinks and this is something called learning

2:20:43

rate decay so in the beginning you have a high learning rate and as the network sort of stabilizes near the end you

2:20:49

bring down the learning rate to get some of the fine details in the end and in the end we see the decision

2:20:54

surface of the neural net and we see that it learns to separate out the red and the blue area based on the data

2:21:00

points so that's the slightly more complicated example and then we'll demo that hyper ymb that you're free to go over

2:21:07

but yeah as of today that is micrograd i also wanted to show you a little bit of real stuff so that you get to see how

## real stuff: diving into PyTorch, finding their backward pass for tanh

2:21:13

this is actually implemented in production grade library like by torch uh so in particular i wanted to show i

2:21:18

wanted to find and show you the backward pass for 10h in pytorch so here in

2:21:23

micrograd we see that the backward password 10h is one minus t square where t is the output of the tanh of x

2:21:33

times of that grad which is the chain rule so we're looking for something that looks like this now

2:21:39

i went to pytorch um which has an open source github codebase and uh i looked

2:21:45

through a lot of its code and honestly i i i spent about 15 minutes and i couldn't find 10h

2:21:51

and that's because these libraries unfortunately they grow in size and entropy and if you just search for 10h

2:21:57

you get apparently 2 800 results and 400 and 406 files so i don't know what these

2:22:04

files are doing honestly and why there are so many mentions of

2:22:09

10h but unfortunately these libraries are quite complex they're meant to be used not really inspected um

2:22:15

eventually i did stumble on someone who tries to change the 10 h backward

2:22:21

code for some reason and someone here pointed to the cpu kernel and the kuda kernel for 10 inch

2:22:26

backward so this so basically depends on if you're using pi torch on a cpu device or

2:22:31

on a gpu which these are different devices and i haven't covered this but this is the 10 h backwards kernel

2:22:37

for uh cpu and the reason it's so large is that

2:22:43

number one this is like if you're using a complex type which we haven't even talked about if you're using a specific data type of b-float 16 which we haven't

2:22:50

talked about and then if you're not then this is the kernel and deep here we see something

2:22:57

that resembles our backward pass so they have a times one minus b square uh so this b

2:23:05

b here must be the output of the 10h and this is the health.grad so here we found it

2:23:11

uh deep inside pi torch from this location for some reason inside binaryops kernel when 10h

2:23:18

is not actually a binary op and then this is the gpu kernel

2:23:25

we're not complex we're here and here we go with one line of code

2:23:30

so we did find it but basically unfortunately these codepieces are very large and

2:23:36

micrograd is very very simple but if you actually want to use real stuff uh finding the code for it you'll actually

2:23:41

find that difficult i also wanted to show you a little example here where pytorch is showing

2:23:47

you how can you can register a new type of function that you want to add to pytorch as a lego building block

2:23:53

so here if you want to for example add a gender polynomial 3

2:23:59

here's how you could do it you will register it as a class that subclasses storage.org that function

2:24:06

and then you have to tell pytorch how to forward your new function and how to backward through it

2:24:12

so as long as you can do the forward pass of this little function piece that you want to add and as long as you know the the local derivative the local

2:24:19

gradients which are implemented in the backward pi torch will be able to back propagate through your function and then

2:24:24

you can use this as a lego block in a larger lego castle of all the different lego blocks that pytorch already has

2:24:31

and so that's the only thing you have to tell pytorch and everything would just work and you can register new types of functions

2:24:36

in this way following this example and that is everything that i wanted to cover in this lecture so i hope you enjoyed building out

## conclusion

2:24:42

micrograd with me i hope you find it interesting insightful and

2:24:47

yeah i will post a lot of the links that are related to this video in the video description below i will also

2:24:53

probably post a link to a discussion forum or discussion group where you can ask questions related to this video and then

2:25:00

i can answer or someone else can answer your questions and i may also do a follow-up video that answers some of the

2:25:06

most common questions but for now that's it i hope you enjoyed it if you did then please like and

2:25:11

subscribe so that youtube knows to feature this video to more people and that's it for now i'll see you later

## outtakes :)

2:25:22

now here's the problem we know dl by

2:25:28

wait what is the problem and that's everything i wanted to cover in this lecture

2:25:34

so i hope you enjoyed us building up microcraft micro crab

2:25:42

okay now let's do the exact same thing for multiply because we can't do something like a times two

2:25:47

oops i know what happened there