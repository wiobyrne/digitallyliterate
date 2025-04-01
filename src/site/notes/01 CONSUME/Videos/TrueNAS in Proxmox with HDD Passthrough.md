---
{"dg-publish":true,"permalink":"/01-consume/videos/true-nas-in-proxmox-with-hdd-passthrough/","title":"TrueNAS in Proxmox with HDD Passthrough","tags":["truenas","proxmox"]}
---

# TrueNAS in Proxmox with HDD Passthrough

![How to Install TrueNAS in Proxmox with HDD Passthrough! - YouTube](https://www.youtube.com/watch?v=MkK-9_-2oko)


[[01 CONSUME/Articles/Passthrough HD SSD Physical disks to VM on Proxmox\|Passthrough HD SSD Physical disks to VM on Proxmox]]
## Notes

## Transcript

## Proxmox and TrueNAS

  0: 00

hello everybody this is techa in this

  0: 02

video what I'm going to be doing is

  0: 03

showing you how to install true Nas core

  0: 06

within proxmox now this right here is

  0: 08

the home page for True NASCAR the

  0: 10

world's most popular storage OS what it

  0: 12

is is a solution so you can basically

  0: 15

turn any machine you have into a network

  0: 18

attached storage device and then from

  0: 20

there set up hard drives in the raid

  0: 21

configuration install popular services

  0: 23

on it you could really do a lot and you

  0: 26

can see down here some of the more

  0: 27

specific features this will be linked

  0: 29

down below and if you don't know what

  0: 30

proxmox is this right here is my

  0: 32

specific instance of proxmox essentially

  0: 35

what this is is a virtualization

  0: 37

environment in which you could create

  0: 39

full virtual machines or containers to

  0: 41

run various operating Services whatever

  0: 43

you need and kind of separate them out

  0: 45

and technically I could just install

  0: 47

true Nas core on the entire system and

  0: 50

use that to get a lot of the same

  0: 51

features and functionality but I do like

  0: 54

the option to have various things

  0: 55

separated out in different virtual

  0: 57

machines and containers for example I

  0: 59

have a separate container running

  1: 00

protein right here or portainer and then

  1: 03

I have another virtual machine which is

  1: 05

running a suite of these applications

  1: 08

here which I want separate from my main

  1: 11

Nas installation instance that I'm going

  1: 13

to be putting on this now regardless of

  1: 15

your reason or use case it's actually a

  1: 17

fairly straightforward process we're

  1: 19

going to install true Nas on here and

  1: 21

before we do that we're going to want to

  1: 22

go ahead and pass through some hard

  1: 23

disks this machine running proxmox is

  1: 26

actually my old desktop that I had

  1: 28

turned into my home lab I put in a three

  1: 31

four terabyte hard drive switch if I go

  1: 33

I believe it is here go to disks you can

  1: 37

see them right here SDA sdb and SDC all

  1: 41

four terabyte hard drives what we're

  1: 42

going to need to do to properly get

  1: 44

trunes to recognize these and use these

  1: 46

as if they're just native not through a

  1: 48

virtual machine is pass them through but

  1: 50

in addition to that we need to do a

  1: 51

little extra configuration so trunes can

  1: 54

read the serial numbers because

  1: 55

generally if you don't do that true Nas

  1: 57

kind of gets mad at you and is just not

  1: 59

a fan so once you kind of have your

## Download TrueNAS

  2: 01

blank environment and you're ready to go

  2: 02

you're going to want to go and download

  2: 03

a true Nas core you could go to their

  2: 05

website again linked down below click on

  2: 08

download here you're going to want to

  2: 09

scroll down click this link right here

  2: 11

no thank you of course you should

  2: 12

probably sign up and true now's course

  2: 15

so if we just go ahead and download the

  2: 16

stable the download process will begin

  2: 18

luckily I already have it downloaded and

  2: 20

I actually have it already uploaded to

  2: 22

upload what you're going to want to do

  2: 24

is go to your local storage node here go

  2: 27

over to ISO images click on upload and

  2: 30

then go to select file if I go over to

  2: 33

downloads you can see it is right here I

  2: 35

would just hit open that begin the

  2: 37

upload process but since I do already

  2: 39

have it in there we're going to be good

## Creating Virtual Machine

  2: 40

to go so from there we're going to

  2: 42

create our virtual machine you can give

  2: 44

it whatever ID you prefer as long as

  2: 46

it's not used name I'm going to call

  2: 48

this trunes and for this one I'm going

  2: 50

to want to start it on boot now for this

  2: 53

setup we could go with a lot of the

  2: 54

default settings so we're going to go

  2: 56

next OS we're going to select that true

  2: 58

Nas ISO we put in here this is

  3: 00

technically free BSD I believe but Linux

  3: 03

is going to be fine we'll go next for

  3: 05

system I'm going to be using all the

  3: 07

defaults here next now for disks this is

  3: 10

not going to be the disks we're going to

  3: 12

pass through and we can't do it through

  3: 13

here this is going to be the disk that

  3: 15

the operating system is installed on and

  3: 17

32 should technically be completely fine

  3: 20

but I'm going to give it 64. if we head

  3: 22

over to this true Nest site here we can

  3: 25

see the full Hardware requirements kind

  3: 27

of reference this a bit you see the

  3: 28

minimum requirement is a 16 gig boot

  3: 30

drive as well as eight gigabytes of

  3: 33

memory and a two core Intel or AMD

  3: 36

processor so let's go back over here 64

  3: 38

is going to be fine for me I'm going to

  3: 40

go next here we have the amount of cores

  3: 42

we're going to definitely want to up

  3: 43

that to at least two now I'm going to be

  3: 46

using this for a nexcloud and a couple

  3: 48

other services so I'm going to give it

  3: 50

access to for my system cores and then

  3: 52

we'll go next here we're going to want

  3: 54

to up this to eight gigabytes so I

  3: 56

forgot I think it's like 96 or something

  3: 58

bam there we go 92 that was close so pop

  4: 02

that in there go next and all this is

  4: 05

going to be good just the default bridge

  4: 07

if you have other network devices set up

  4: 09

just go with the one that's connected to

  4: 11

your Lan but for me the default settings

  4: 12

is going to be perfect boom and then

  4: 15

confirm and finish but first if this

  4: 18

right here is checked make sure you go

  4: 19

ahead and uncheck it because we're going

  4: 20

to want to do some configurations first

  4: 22

so let's click on finish and there is

## Drive Passthrough

  4: 25

our true Nas right here and actually

  4: 27

pass through these hard drives they're

  4: 28

going to be kind of referencing this

  4: 30

Wiki page this is pass through physical

  4: 33

disks to the virtual machine and it

  4: 35

looks a little complicated but it

  4: 37

actually is a fairly straightforward

  4: 39

process alright so here we are in the

  4: 41

shell for our node and the very first

  4: 42

thing that we're going to want to do is

  4: 44

install an application not in caps lock

  4: 46

an application called

  4: 49

lshw what this does is it allows us to

  4: 52

see a lot of information about our

  4: 54

system and the components you can see I

  4: 56

already have it installed and it's at

  4: 58

this point what I'd recom end is opening

  5: 01

up a application here that we can use to

  5: 03

copy down the serial number and the IDS

  5: 05

of our drives if we run this command

  5: 07

here which is the class disk and class

  5: 10

storage we should be able to see the

  5: 12

disks that we're going to be using in

  5: 13

this case it's going to be disk 0 1 and

  5: 15

2\. and here we're going to have access

  5: 17

to our serial numbers which are going to

  5: 19

be very important and we can see this is

  5: 21

at Deva SDA Dev sdb and Dev SDC so I'm

  5: 25

just going to open this up I'm going to

  5: 26

type in SDA sdb and

  5: 29

SDC and then let's copy down these

  5: 32

serial numbers so this one for SDA give

  5: 34

that a copy I'm going to paste it on in

  5: 36

there and then just repeat the process

  5: 37

for however many drives you happen to be

  5: 40

doing this with so I'm going to grab

  5: 41

this last one here give that a copy and

  5: 44

then paste it on in right here okay and

  5: 47

for this next step let's make this a

  5: 48

little bigger so we can actually output

  5: 50

all the information we're going to be

  5: 51

needing this is the command that we're

  5: 53

going to use it's a little long it's a

  5: 55

little complicated but it will spit out

  5: 57

the information that we need and here

  5: 59

are our device IDs you can see we have

  6: 01

two IDs for each one really the only

  6: 03

difference is formatting these ATA ones

  6: 06

include the serial number and this wwm

  6: 08

one does not any guides or anything I've

  6: 11

seen recommend using this one right here

  6: 13

which does include the serial number of

  6: 15

the specific drive but just in case if

  6: 16

you're only getting these ones I will

  6: 18

show you how to pass through the serial

  6: 19

number in the configuration in just a

  6: 21

sec so this one is for the SDA as we can

  6: 25

see here so I'm just going to go ahead

  6: 26

and paste that ID there I'm going to

  6: 28

grab these ones for the B paste it on in

  6: 31

there and then let's grab our C so copy

  6: 34

open up Kate and then paste it right

  6: 37

here so now at this point that we can

  6: 40

add these to our configuration and just

  6: 43

real quick before I move on let's go to

  6: 44

this container here and see what it

  6: 46

looks like before so under Hardware you

  6: 48

can see we have the hard disk that we

  6: 50

added the 64 gig one at SCSI zero so we

  6: 53

want to make sure we don't use that one

  6: 55

and you'll see what I mean in just a

  6: 57

second because we're going to be using

  6: 59

this qm set Command right here so I'm

  7: 02

going to paste this in and then get rid

  7: 04

of this ID right here and you're going

  7: 06

to want to pay attention to the qm set

  7: 08

100 you're going to want to use the ID

  7: 10

for the virtual machine you can see for

  7: 12

me it is 100 but change that as needed

  7: 15

and for SCSI this one's five I'm going

  7: 18

to make this one because we're already

  7: 19

using 0 and then let's go ahead and

  7: 21

paste in this right here so give that a

  7: 25

copy and then paste it in so hit paste

  7: 29

enter and then we can see we updated VM

  7: 32

ID 100 so now if we go to that virtual

  7: 35

machine and we go to Hardware right here

  7: 38

we can see hard disk scsi1 and

  7: 41

everything is looking good so now we

  7: 43

just need to repeat that step for our

  7: 45

other drives and there's my last one

  7: 47

making sure that again for everyone

  7: 49

you're going up a number with the actual

  7: 51

drive or the SCSI let's hit enter there

  7: 54

we go now if we head over to True Nas we

  7: 57

are in Hardware we can see we now have

  7: 59

those three drives now like I said

  8: 01

depending on the device ID you used it

  8: 04

might not have the serial number

  8: 05

attached to it so to edit that all we're

  8: 09

going to want to do is go back to our

  8: 10

home lab into the shell and then before

  8: 12

we edit this we can make a backup so to

  8: 14

do that we're going to do copy paste and

  8: 16

this is going to be the configuration

  8: 17

for that virtual machine so I'm going to

  8: 19

paste that this is an Etsy PVE qem

  8: 22

server 100 conf obviously changed 100

  8: 25

depending on whatever your number is and

  8: 27

let's just throw this into root and then

  8: 29

I'll do like 100 dash backup dot comp

  8: 33

hit enter so now that we're backed up we

  8: 35

can go and edit it so I'm going to just

  8: 37

redo this get rid of that and Nano in

  8: 39

and then from here we could see the

  8: 41

disks that we just added at one two and

  8: 43

three so we are going to go to the end

  8: 46

of this and we're going to add in the

  8: 48

serial number variable so let's go like

  8: 50

that paste this down the line and then

  8: 52

throw in those serial numbers so I have

  8: 54

them here just copy and paste get our

  8: 56

last one in there and then we should be

  8: 58

good to go so let's to exit out of here

## TrueNAS Install

  9: 01

and fire up true Nas and you can see

  9: 04

beforehand under the hardware tab we now

  9: 06

have those serial numbers in there and

  9: 07

they do seem to match up so let's start

  9: 09

that machine go under console and here

  9: 12

is our trueness boot screen so I'm going

  9: 13

to skip this by pressing one let it boot

  9: 16

into the system and then when you're in

  9: 17

you'll have a couple different options

  9: 18

we're going to go ahead and install and

  9: 20

upgrade it's a fairly easy process and

  9: 22

to see that it's working we can see our

  9: 25

hard disks here but we're going to want

  9: 26

to install this on that 64 gig volume we

  9: 29

created continue

  9: 31

this will erase all partitions let's go

  9: 34

ahead and proceed give ourselves a root

  9: 37

password so don't forget this and then

  9: 40

okay and then let's boot via bios and

  9: 43

proxmox probably have a better time

  9: 45

doing that 16 gig swap partition I'm

  9: 48

going to say no swap I could always just

  9: 50

give it a little more actual Ram a

  9: 52

little bit later but obviously do that

  9: 54

as your preferences see fit and when we

  9: 57

have an installation successful it's

  9: 58

going to look something like this we

  10: 00

could continue and then reboot our

  10: 03

system so here we go proxmox and it

  10: 05

should put us into the boot and not the

  10: 07

actual uh ISO so here you have boot true

  10: 11

Nas let's go ahead hit one and it should

  10: 13

be at this point when it boots up we're

  10: 15

not really going to need to do anything

  10: 16

else just like installing proxmox it's

  10: 18

going to give us the IP address that we

  10: 20

need to connect to and upon first boot

  10: 22

it's going to take a little longer as

  10: 23

you can see there this is going to take

  10: 25

a long time and here we go so you have

  10: 27

options in here to do some configuration

  10: 28

to reset your password if you forgot it

  10: 30

but right here is is our IP address

  10: 32

ending in 192 and this is going to be

  10: 36

110 enter and here we are so the login

  10: 39

is going to be root and then that

  10: 41

password we selected during the

  10: 42

installation process let's log in and

  10: 45

here on the dashboard you get a lot of

  10: 46

really nice information we see our

  10: 48

interface here help our memory CPU but

  10: 52

what is most important or what we did in

  10: 55

this video is storage so if I go to

  10: 57

storage here and I look at disks we can

  11: 00

see all the disks with their serial

  11: 02

numbers and I could use that from there

  11: 04

to create a pool let's add a new pool

  11: 07

create pool here let's give it a super

  11: 09

unique name cool select all available

  11: 12

disks throw them over into this pool and

  11: 15

then we have our raid options here so we

  11: 17

have raid Z there's only three drives so

  11: 20

we could either stripe near it which

  11: 23

mirroring would be the the best for if a

  11: 26

drive fails or if two drives fail but

  11: 28

I'm going to go with good old raid Z

  11: 30

what should give us just about of seven

  11: 32

terabytes of the 12 ish that's in the

  11: 35

system so let's create that pool confirm

  11: 38

create pool and there we go we have our

  11: 40

new pool which is our file system with

  11: 43

7.14 terabytes available so now it's

  11: 46

from here that you'd want to go to users

  11: 48

create the proper users go over to

  11: 50

sharing set up your Windows shares and

  11: 52

all that this was just the installation

  11: 54

there will be more videos coming soon as

  11: 56

I am going to spend some time learning

  11: 58

true Nas and everything that it can

  12: 00

provide so with that I do hope you

  12: 03

enjoyed this video anything and

  12: 05

everything that I have mentioned will be

  12: 06

linked down below and with all that I do

  12: 09

hope you have an absolutely beautiful

  12: 10

day and good bye