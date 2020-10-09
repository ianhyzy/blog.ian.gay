---
title: "Building your own chat and video conferencing services"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - technology
classes: wide
comments: true
---

<p>If you're familiar with Matrix, skip to Prerequisites</p>{: .notice--information}

# Why build your own chat and video conferencing services?
What do you use if you want to chat with other people in your private clubs or organizations? You might sign up for the free version of Slack, or use Discord, or maybe something like Telegram or WhatsApp. But all of these services can fail to meet your needs. Slack is limited without paying for it, Discord isn't really designed for work, Telegram and WhatApp are designed around small group commination. All of these services are also closed-source and some, like Slack and Discord, will easily hand your information to the government as long as they ask nicely. Even if this isn't a concern, Slack gets expensive fast - what if you have thousands of users? What if you need SSO or other "enterprise" features?

Put another way - what do you do when you need something Slack-like, but cheaper, and open-source so you can run and configure it yourself? For a long time, the only real answer was IRC. But IRC is clunky, old-school, and doesn't have anything near what users expect from their communication tools. Luckily, today we have [Matrix](https://matrix.org/) and [Riot](https://about.riot.im/).

# What is Matrix?

Matrix is an open standard that defines a method for decentralized, real-time communication. Matrix handles a lot of the hardest parts about getting a message from one user to another other the internet in a secure fashion, even if those users are using different applications on different servers. As long as they're compatible with the Matrix protocol, anyone can chat with anyone else. 

Riot is one application that implements the Matrix protocol, and it's available on all platforms, both desktop and mobile. This guide will focus on Riot.

# What about videoconferencing?
Videoconferencing is easy with [Jitsi](https://jitsi.org/). It includes everything you would expect from a videoconferencing app like Zoom or Google Meet, and it also runs across all desktop platforms and has apps for iOS and Android. Jitsi will be installed on our server along with Matrix.

# Prerequisites
* You should have a basic familiarity with Linux and using the command line and SSH, but I'm going to make an effort to make this guide as clear as possible even if you aren't familiar with Linux.
* **Two** Linux machines, or access to them. I used Upcloud during this guide as they have a data center in Chicago. Why you need two will be explained later.
* A domain. I got mine from [Google Domains](https://domains.google.com/), but anything that's not Godaddy is fine. Ensure you enable "privacy mode" when purchasing a domain so your address is not publicly exposed.

# Getting Ready
In this guide, I'll walk you through setting up [matrix-docker-ansible-deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy). Docker is a technology that makes it easier to run applications and keep them updated, and Ansible is kind of configuration language that lets you setup services and keep them updated using a template. This repo contains an Ansible "playbook" with many optional components. They're all pretty self-explanatory, and we'll go into those in more detail later. 

Let's create your VMs. One VM will act as your Ansible servers, running the Ansible playbook. The other server will run Matrix and all of your services. I'm creating the controller VM first, so I chose UpCloud's lowest standard tier (1 core, 1GB memory, 25GB storage), the latest LTS release of Ubuntu Server, and... wait! It wants an SSH key. Let's create one - download and install [PuTTY](https://www.putty.org/) if you're on Windows. Accept the default settings. Once it's installed, you will have PuTTY and PuTTYgen installed. PuTTYgen is what we want, so open that (hit the windows key and type `puttygen` if you can't find it). Click create key. Your screen should look like this:

![screenshot of Glide app properties page](/assets/images/comms-puttygen.png)

We're going to create two key pairs - one with a passphrase, and one without. The one with a passphrase will be used when you want to connect to either VM. The one without a passphrase will only be stored on the controller VM and used to run commands on the services VM. 

Click DSS at the bottom. For each key, you need to click "save public key" and "save private key" - so to be clear, you're creating to *pairs* of keys.

When you're done, the folder where you're saving the keys should have **four** files:

![screenshot of Glide app properties page](/assets/images/comms-puttyfiles.png)

Now we can add the public key to UpCloud. Open up the **password-protected** public key.

