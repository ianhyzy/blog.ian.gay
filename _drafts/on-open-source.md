---
title: "Investigating Open Source apps for teams"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - technology
classes: wide
comments: true
---

# The extinct animal, or the Open-Source team
Over the past few weeks, I've spent a lot of time investigating the options for teams that want to work with entirely Open Source, self-hostable software. I would be giving documentation to people who may not be tech savvy at all, so any app we chose needed to be easy to install, update, and keep secure. It's a tall order, but one I thought I could fufill "good enough" with enough research and careful planning.

I failed. There is nothing out there that solves even a fraction of a team's needs "good enough", let alone as well as a paid solution. As Linux thrives in datacenters, webservers, and databases, it falters on projects people actually want to use. These are my notes from a field exploration of the prospect of taking a team fully FOSS.

### Starting (not so simple) - Chat
I started with chat; wanting a replacement for Slack. I like Slack a lot, and expected that other software would not be as mature. I also had a very good idea of what I would want, ideally, from a chat app:

* Channels for a large number of users that moderators can control
* The ability to totally lock specified channels for announcements, or to admins only
* Private channels / groups
* Direct messages
* Message threading - a crucial feature to help keep busy channels clean
* Easy but secure sign-up options for users
  * for example, a special link that allows signup or password-based signup
* Easy to use mobile and desktop apps
* Federation to other instances running the same software so instances can easily collaborate
* Easy integration with video chat solution
* [not in Slack] - Encryption, to protect us from the people who want us to not be doing all this (yes, they say they have encryption, but they can decrypt it)
* [not in Slack] open source code, so we have transparency about what we're running, paying for, and storing member data with

I looked at these options:

* [Zulip](https://zulipchat.com)
* [Mattermost](https://mattermost.org)
* [Twake](https://twake.app/)
* [Wire](https://wire.com/en/)
* [Rocket Chat](https://rocket.chat)
* [Matrix](https://matrix.org)

All except two were non-starters. Here are the apps that didn't make the cut to Round 2:

#### Zulip
Zulip was easy to install and the offical Zulip client can connect to self-hosted servers, which was a great start. Zulip uses a unique threading system that takes getting used to, but that wasn't a dealbreaker. It was open soruce and seemed to welcome contributions, but wasn't a busy repo.

The ultimate issue with Zulip is that it was just too simple. Updating looked like a chore, there was no E2EE (a server admin could verify easily export all messages), no federation, no built in video calls, the list goes on. Zulip was too restrictive; we would be asking Slack users to give up far too much when switching.

#### Mattermost

I disqualified Mattermost somewhat quickly. I was looking for a chat solution someone who had never touched a SSH console before could muddle through installing and upgrading with enough help - one look at Mattermosts's [install guide](https://docs.mattermost.com/install/install-ubuntu-1804.html) basically ensures that person would fail. I was dissapointed as Mattermost seemed stable and feature risk, and I may revisit it later to see if there's a better way to install and keep all those components updated, but for now it was off the list.

#### Twake

Twake was brought to my attention the day it was open-sourced. It's a newcomer but has many very compelling features, like a built-in calendar, tasks/kanban board, file sharing, and something no other option on this list has - an attractive UI! It seemed to not only solve our chat problem, but several other problems as well, which was very exciting. 

Unfortuantely, newness comes with some gorwing pains - docs are almost non-existent, what little docs were there were wrong for installation (which was otherwise easy), and I hit several bugs while using it. Despite these issues, I am keeping Twake installed and plan on keeping it updated. If the bugs can be squashed it will be an extremely compelling option, and the dev team was very responsive to the issue requests I filed. It's one to keep an eye on as it matures.

#### Wire

Like Mattermost, Wire is an __enterprise-y__ chat app. The install process is too much for someone who will need their hand held getting PuTTy installed. Sorry, Wire.

#### Matrix / Synapse / Riot / Element
I really wanted to like Matrix, I admit. It's on fire in the open soruce world, has a wide ecosystem of tools and support, and being both encryption and federation focused seemed like a fantastic fit. Unfortuantely, the intall process is not fun. There are multiple methods of installation and I wouldn't be comfortable trusting a non-techie with any of them. Matrix's community came to the rescue here though - there are several very affordable hosting options for Matrix servers, or 3rd party easy install methods. I decided that Matrix had a compelling enough featue set to outweigh the installation hump so I installed it with the ansible method.

Several hours later, I had a working install. It was not a fun or easy process, but it worked. I opened Riot and was dissapointed in a few minutes. Threading did not work well, the mobile apps seemed janky, and I spoke to another more experienced sysadmin who seconded my concerns about the overall stability and UX of Riot baed on his experience.

One other benefit of the (rough, complex) install process is that once you set it up, it's very easy to update. You can just run the ansible recipie again. It also includes many of the other services or plugins a server owner would want, which is extremely useful.

Recently, Riot re-branded to be called Element, and updated their UX, which is now a bit nicer. There are still a few too many bugs and gotchas with Matrix / Element to reccomend it to a newbie, but it's another case where I'm keeping a close eye on it and waiting to see if the bugs can be ironed out.

#### Rocket Chat 
Rocket Chat is more similar to Mattermost or Zulip than the other options here, but it had several advantages. Installation is easy, their documentation is complete, the desktop and mobile UX is pretty good, it has E2EE and federation on the roadmap, and threaded messaging __mostly__ works. 

It ticked all the boxes, and I gave it a spin with another test user to try it out. Out of all the apps so far, Rocket Chat is the best overall.

Unfortuntaely, the same quality issues that plauged Element/Riot and Twake raised their head here as well, but usually in a less severe manner. Given all the option here, I feel that Rocket Chat strikes the best balance of a tool that's open source, easy enough for non-nerds to install, and still looks good doing it.

But that's just it - it's still not quite *good enough*. Imagine you talk to a team with a 500 people on Slack. You want them to move everyone over to a new system that they 1) have to pay for 2) maintain 3) worry about and all they're getting is control over their data, a very vauge and intagible idea, and a worse product. Rocket Chat has no compelling featues Slack doesn't have, there's no pull to use it other than it's more competent than everything else. 

This was a common theme as I would later realize.

Want an open soruce calendar server? You can pick Radical or Nextcloud. Radical is bare bones to a fault, Nextcloud is bloated to a fault. 

Nextcloud seemed like it could take care of all our needs with one package, but in realize it does everything sort of OK at best and is a broken blob of PHP at worst. The UI is bad, the install process is a pain, but hey, it technically can do most anything you want it to. If I had to give a "least worst" award, it's to Nextcloud. But there is one notable exception to the nextcloud suite - the ability to create documents, presentations, and spreadsheets.

There is no good open source program to create documents, spreadsheets, and presentations. None. Let's run through our options once more:

#### Offline Editors
I have respect for the LibreOffice project but their product is buggy, ugly, and pales in comparison to the Microsoft Office of ten years ago. I have repeatedly tried to use LibreOffice becuase I want so badly for it to work, but it has failed every test, slowly, and looked ugly while doing it. LibreOffice touting adding a ribbion to their interface that looks like it came out of Office '95 shows how terribly far behind they are. I was very suprised to see people defending the LibreOffice UI as "pragmatic" or usable - I'd wager it's anything but for the vast majority of people. 

OpenOffice is basically dead, it's a zombie version of LibreOffice for masochists. Next caller.

#### Online Editor Suites
LibreOffice Online is a web-based version of LibreOffice, mostly eveloped by one firm - Collabora. It has all the UX problems of LibreOffice. By default it will nag you if you have more than 20 users. You can compile it yourself to remove this warning, but there are various other features only in the paid version as well. 

OnlyOffice built their own open-source document solution but again - it also has a 20 user cap on the open source version. "Open source until you have this many users and then you have to pay even when you host it yourself" is quite a creative interpretation of Open Source principles.

#### Online Editors
Etherpad, Ethercalc, and Hacker Slides are web-based alternatives that also suffer from horrible, no good, very bad UX. Etherpad is OK, but Ethercalc and Hacker Slides border on unusable.

## So What?
*you, the reader:*

*why are you complaining about UX so much? I think it's fine! You're just being mean to open source devs for no reason! If you think the UX is so bad, fix it yourself, or pay for real software!*

First off, I don't meant to disparage any of the people who work on these projects. Working on any open source project is difficult, and internet randos who can't code that well telling you your product sucks probably doesn't help. 

But I think UX matters a lot, and in my experience, open-source devs tend not to prioritize UX. At best, they are users of the software, and so they don't notice it as much or make little changes to reduce their own pain points. At worst, they are the types to actively fight any kind of moderinzation effort, critizing modern designs as childish, inefiicient, or dumbed-down. 

I care about open source software, I want to use more of it, but I also don't want to deal with software that's ugly and doesn't make it easy to do what I want. More relevantly to this blog post, I can't reccomend software to people they will stuggle to install, struggle to understand, and struggle to use. That's not what computers were made for.

There is no solution to this that I can see. No, really - I don't think there is. To get to the level of polish something like macOS, Stripe, Gmail, Word, Docs, or other well-designed software systems have takes an incredible amount of time and expensive engineering effort. You cannot muster that without financial backing. Most of the chat apps on the list above have VC funding and get significant financial support from companies that use their software. And to be clear, when I say 'significant', I mean 'enough to pay the employee's salries'. 

Microsoft and more recently, Google, have a death grip on the office collaboration space. Even closed-source, VC-funded or otherwise wealthy projects like Notion, Airtable, or Salesforce's Quip are struggling to break the duopoly. Google has only been able to break Microsoft's dominance by beating them to punch on cloud computing and collaborate editing. For all of Google's faults, they usually don't lack vision. 

This leaves us with a motley crew of also-ran rebels, open source projects held together by the labor of the rebels and their donations. So back to the wider question - I want to get a team on a fully open-source software stack.

I steamroll their concerns, force them all on to LibreOffice, Nextcloud, Rocket Chat, and tell them we're going to make it work. This works in the enterprise - your boss is your boss, you get paid during training time, you can call IT when you have a problem, you don't need to set the software up. Not too bad! For German universities or French municipalities, I can see how this model works and why it's beneficial.

But what about a volunteer organization? One with no buget for anything but VPS services? One with no helpdesk, no bosses, no regulations they can enforce? Do you want to sit people down for 10 hours of LibreOffice training before they can contribute? Do you want to have to explain how every piece of tech in your stack works? Do you have a good explanation for when someone asks "Why can't we just use Google Drive? It's free?" Are you willing to face the attrition rate your choice of software will cause? What cause matters more, the one you want to fight for or the one you're fighting with to get work done?

I kept looking for an answer to this - something to fix the problem, some magic piece of software to bridge this gap. There isn't one. Sandstorm.io made a valiant effort, died, and was ressureced in a barely-functional state. Other services are mostly script wrappers and a web UI, not robust enough to handle changes and updates without an involved admin to be there when something inevitably goes wrong.

### Is there  any solution?

The best solution I found to this was [collective.tools](https://collective.tools/). They host Nextcloud, Rocket Chat, and a kanban board for you for about $23 a month for a smaller server (50 total users, 10 active at a time) or $56 a month for a large one (500 users or 50 active users). If you go above those limits, you are basically out of luck. Even with this solution you're still using Nextcloud, which as was covered earlier, is not a great experience compared to Drive, Dropbox, OneDrive, Box... 

If you want an office solution for those 500 people, tell them to download the LibreOffice desktop app and throw the files in Nextcloud. Collaborate editing? Just make new versions and reconcile manually. Hey, we're running out of space...

Now you need email! Just give up on that one. Don't even think about it.

## Closing thoughts

There is no money in open source. There is little interest, outside of a select few firms in a handful of European countries, in breaking the Microsoft/Google stranglehold on the office/groupware suite. It is a David vs. Goliath story where even David is kind of asshole and kicked a puppy on the way to fight Goliath.

I wish nothing but the best of luck to the people working on Libreoffice, Nextcloud, and the rest - I really do. As much as I'll critize them I'm rooting for them to succeed. The worlds needs more, better open source projects and people to build them. I just wish the world wanted them as badly as it needs them.