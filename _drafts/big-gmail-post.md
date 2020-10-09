---
title: "A Big Post About Gmail"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - technology
classes: wide
comments: true
---

## Why are you blogging about Gmail?
I've been using Gmail since about 2010, or possibly before. In 2017 I got a job at Maven Wave, and from answering support tickets to diagnosing complex mail flow issues, I quickly got very aquatinted with the admin side of Gmail for G Suite users (I'm now the G Suite admin at GrubHub).

I'm not a UX designer, I'm not a mail server expert, but I am someone who has used gmail as a consumer, as a corporate user, and as an admin of corporate users, and I have some Thoughts™ that I wanted to get down on paper, as much for myself as for others who may have the same questions.

## Why bother thinking about email at all, though?
After using [Hey](../_posts/2020-07-04-hey-vs-gmail.md), I started thinking a lot more about what I like about Gmail, and what drives me crazy. I had always has frustrations with email and Gmail in particular, but I never really imagined what an alternative would look like - I certainty didn't like the complexity, slowness, and overall clunkiness of Outlook, and what else was there? 

Hey answered the "what else is there" question and jogged my imagination. Real innovation in G Suite has slowed outside of Admin functions, and I wanted to imagine what Gmail would look like if it became unmoored from its past - what would Gmail look like if it was released today? What's still great about Gmail, and what sucks?

There is still a lot to love about Gmail - I initially had a list of complaints, but I don't think that's entirely fair to post by itself - Gmail is still extremely unique and offers a lot of benefits on its own. For simplicity's sake, I'm only going to focus on Gmail as a user - I'm not going to dive into the Admin Console settings.

## ✨ What's great about Gmail

### 🤑 It's available to (almost) everyone, everywhere - for free
Gmail is free. This seems like not a big deal, but was pretty novel in 2004. Even now, I'd argue free services are pretty amazing - anybody, (almost) anywhere on the planet can sign up for a free Google account and get the most secure, performant, and stable consumer email service on the planet for free.

**What does (almost) mean?** Google is still subject to compliance with [US sanctions](https://techcrunch.com/2019/06/18/an-open-letter-to-google-and-apple-stop-hindering-iranian-entrepreneurs/) on countries like Cuba and Iran.
{: .notice--primary}

Gmail is not only free, but available on mobile devices, including cheap [low-performace devices](https://play.google.com/store/apps/details?id=com.google.android.gm.lite&hl=en_US).

As discussed in the "what sucks" section, free-as-in-beer comes at a cost. But for a great many people, the cost is negligible and the benefits are tremendous.

### 🔒 Gmail is secure
Gmail is one of the most secure inboxes you can get on the planet, and it's unquestionably the most secure free option if the user chooses to enable the Advanced Protection Program on their account. 

Gmail performs malware checking, attachment scanning, and the best spam heuristics in the business in a few seconds. Your home built, open source mail server can't compete with that scale and speed, let alone the security of entire teams of people dedicated to (almost) every threat your account can face.

**Again with the "almost"?** Google will fork over all your data to the government if they get a warrant, and they almost always get a warrant if they want one.
{: .notice--primary}

Gmail's spam scanning is excellent, and accurate warnings for phishing attacks are only getting more important as attackers realize the weakest link in the email security chain is between your ears.

### 😀 It's user friendly for basic usage
Gmail is pretty user friendly for common email use cases. Most users read emails far more than they send them, and want to see emails from people they know or services they consider important before other emails.

By default, Gmail tries to help a user take control of the onslaught of email hitting their inboxes via Categories. Categories is a  pretty good solution at solving the prioritization problem with a zero-config-required solution.

Other common tasks, like searching for emails, bulk modifying messages, and drag and drop just work as people expect them to.

Gmail also makes it easy for users to change commonly-used preferences such as inbox configuration, conversation mode, and background theme via the new Settings sidebar.[^1]

[^1]: The regular settings screen though? More on that in the next section.

#### 📐 The New Quick Settings Pane
Recently, Google added the Quick Settings pane. This is a sidebar that opens when you click the settings icon, presenting you with the following options:
* Display density
* Theme
* Inbox type
* Reading Pane
* Email threading

In my experience, these are the most common things users change, so having them appear first and in focus is great!

### 🤖 A robust yet simple API
Gmail comes with a full-featured API that's easy to use. Look at the Microsoft docs for API access to Exchange (Are you on-prem? Hybrid? O365? Do you want to use the old API, the new API, or the Graph API? Are you in China?) and then get back to me after you're done crying and polishing off a handle of whisky.

Gmail's simplicity more than makes up for the few small quirks it has. It gets even easier if you use App Script - send an email with `MailApp.sendMail("subject","Your body content")`.

## 🤮 What sucks about Gmail

Gmail has been around since 2004, and some things that made sense in 2004 don't make any sense at all anymore - but here they are! This list is going to be more specific than the "what works" list.

### 🗑️ The Settings
**Settings in Gmail are a nightmare.**

The new sidebar that appears is a nice band-aid to help make commonly used settings easier to change (as discussed earlier), but it's just that - a band aid. Gmail settings are confusing to navigate and don't present options anywhere near as well as they could. But let's focus on the two worst settings:

#### 🗑️ The many, many problems with Stars
The Stars setting is the worst in Gmail, perhaps tied only with the Contacts importing. Here is the description:

> Drag the stars between the lists. The stars will rotate in the order shown below when you click successively. To learn the name of a star for search, hover your mouse over the image.

Let's break this mess down. For context, five of the twelve stars are not stars, but rather boxy icons. Also, only the default gold star is usable on mobile.

* > Drag the stars between the lits
  * This UI affordance is used nowhere else in Gmail. The "lanes" of the lists are invisible.
* > The stars will rotate in the order shown below when you click successively.
  * There are twelve stars. Does clicking the star icon twelve times sounds like good UX to you? Why not click and hold to access a floating panel of stars, like Facebook reactions?
  * Or just get rid of eleven of the stars and recommend users use labels for advanced organization.
* > To learn the name of a star for search, hover your mouse over the image.
  * Many Gmail users are not aware you can even type specific operators into the search bar. Hovering the mouse over an icon and then re-typing the name into the search bar is clunky.
  * Assuming you are using some workflow involving search names: what possible good reason could you have for not using labels? 

So, to recap: you can't use the non-gold stars on mobile, you need to click multiple times to apply them (more than a label in most cases), setup can be confusing, and you need to manually type their names in search to filter by them. 

It really seems like Google wants to kill eleven of the twelve stars and I'd really wish they'd hurry up and do it already.

#### 🗑️ The confusing contacts import setting
The setting named `Create contacts for auto-complete` is a tricky one, as it provides a useful function for a lot of people, many of whom may never even know it's on. I like it, I understand why it's in Gmail, and I'm glad it's there as an option. 

That being said: *it confuses the hell out of some people.* "It works so good you don't know it's on" becomes a problem when, well, the user doesn't know it's on. 

When users change their name, autocomplete may not reflect if they were already imported with their old name - imagine how a married person who changed their last name or a trans person who goes by a new name feels about this. 

These auto-imports are not exposed anywhere in Gmail, they're in Contacts, and they're just called Other Contacts, with no obvious connection to Gmail unless you know what to look for. Many users don't go into Contacts much (or ever!) because they don't need to - they rely on Autocomplete!

My suggestion for this would be to auto-update the autocomplete contact when the source user is updated (I'm surprised this isn't the default behavior).

## A Vision for email that's a decade old
The fundamentals of Gmail haven't changed since it was released - this is mostly good! Email is the only really standard digital communication tool that everyone has and works for billions of people. On the other hand, the way people use email has changed a lot, and the feature additions to Gmail have not kept up with 