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

Gmail's simplicity more than makes up for the few small quirks it has. It gets even easier if you use App Script - send an email with `MailApp.sendMail("subjct","Your body content")`.

## 🤮 What sucks about Gmail

Gmail has been around since 2004, and some things that made sense in 2004 don't make any sense at all anymore - but here they are! This list is going to be more specific than the "what works" list.

### 🗑️ The Settings
**Settings in Gmail are a nightmare.**

The new sidebar that appears is a nice band-aid to help make commonly used settings easier to change (as discussed earlier), but it's just that - a band aid.[^2] Let's break down the main settings page and see what issues we find.

[^2]: As of this writing, the question mark icon that's supposed to explain what "conversation mode" is isn't working.

#### 🗑️ Settings - General
"General" is a vague term, and a bunch of settings are shoved into general that make them hard to locate. Let's go through each page of settings and see if things make sense, because in my experience people struggle to find most settings.

* Language & Phone number format
  * Makes sense to be in General, these don't fit elsewhere.
* maximum page size
  * This setting affects the page size on not just the inbox, but also when searching and in label views, so this makes sense to have in General.
* Undo Send
  * This only becomes relevant when sending a message
* Default reply behavior
  * Again, only relevant when sending (replying to) a message
* Hover actions
  * Affects all views of messages; makes sense to have in General
* Send and Archive
  * Again, only relevant when sending (replying to) a message
* Default text style
  * Again, only relevant when sending a message - can you sense a pattern here?
* Images
  * Affects message viewing
* Dynamic email
  * ~~Shouldn't exist~~
  * Affects message viewing
* Grammar
  * Only relevant when sending a message
* Spelling
  * Only relevant when sending a message
* Auto-advance
  * Affects message viewing in multiple screens, makes sense to have in general
* Autocorrect
  * Only relevant when sending a message
  * No, I didn't screw up the order - this setting is separated from Grammar and Spelling by one unrelated item even though it's almost identical in function
* Smart Compose
  * Only relevant when sending a message
* Smart Compose personalization
  * Only relevant when sending a message
* Experimental Access
* Conversation View
  * Only relevant when viewing a message
* Nudges
  * Only relevant in the Inbox
* Preview Pane
  * Does not control if preview pane is on/off, it controls how much time is required to elapse to mark a message as read when it's opened in the preview pane.
  * Only relevant when viewing a message
* Desktop notifications
  * Good in general.
* Stars
  * Easily the worst, most user-hostile setting in Gmail. I think this is so bad it's getting it's own section.
* Keyboard shortcuts
  * Toggle keyboard shortcuts on/off. Good fit for general.
* Button labels
  * Another good fit for General. We're on a roll.
* My picture
  * Tells you you can't change your picture and links you to your About Me page in Google
  * A lot of thoughts on this, none of which can fit so - sure, keep this here. Whatever.
* Create contacts for auto-complete
  * A close number two to Stars in the contest for worst setting in Gmail. Also gets its own section below!
* Importance signals for ads
  * Links to Google's ad settings page. Makes sense.
* Signature
  * Only relevant when sending a message
* Personal level indicators
  * > Display an arrow ( › ) by messages sent to my address (not a mailing list), and a double arrow ( » ) by messages sent only to me.
  * I find this just adds noise to the message displays, but it's pretty clear about what it does (a screenshot would be good to add, but a common theme with Google is they resist using screenshots almost as a rule)
* Snippets
  * > Show snippets of the message (like Google web search!).
  * Like *Google web search* you say? Exciting!
  * Again, a screenshot would be helpful to show users what this looks like.
* Vacation responder
  * A good fit for general, and a nice way to end all these settings.

This list seems like a lot, because *it is a lot*. It is, by far, the longest settings screen in Gmail. One fix I think would help is splitting off anything only relevant when composing a message into a new settings tab - perhaps named Composing, or something more creative. This would take a huge chunk of settings out of General.

Breaking it up further, some settings are only relevant to how messages are viewed, and some are used to control the Gmail UI. It may be helpful to split one of these into their own tab. Even adding groupings inside of General would help.

Okay, now on the two *stars* of the above list that got a special callout:

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

My suggestion for this would be tto auto-update the autocomplete contact when the source user is updated (I'm surprised this isn't the default behavior).

