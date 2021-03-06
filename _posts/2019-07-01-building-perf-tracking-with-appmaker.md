---
title: "Building an employee performance tracking app with AppMaker"
excerpt_separator: "<!--more-->"
categories:
  - Blog
  - Work
tags:
  - work
  - technology
  - Google
classes: wide
comments: true
---

<p><strong>AppMaker is being deprecated.</strong> For an alternative, try <a href="https://www.appsheet.com/" target="_new">AppSheet</a> or <a href="https://www.glideapps.com/"  target="_new">Glide</a>.</p>{: .notice--danger}

## Summary
Google's App Maker is a new tool to rapidly and easily build apps on Google's App Script platform. It provides an easy way to design web-based UIs, with many built-in components like tables and buttons styled in Google's Material Design language. At Maven Wave, our previous employee performance tracking system - known as FUEL - was spreadsheet-based and growing harder to manage as the company grew. A co-worker suggested the new App Maker tool could be used to streamline this process, and I jumped at the chance to try it out and expand my skills. 

We worked with HR and the Maven Wave partners to design a prototype while I built a proof of concept application, and then more team members were brought in to built out the additional features needed to bring it to the wider organization in time for end-of-year performance reviews. The app was rolled out to our triple-digit US-based team for the 2018 year.

## Designing the App
When App Maker was first released, a co-worker thought it would be a great fit to replace our employee performance review process. The process was spreadsheet-based, and largely static: there wasn't much guidance on how to use it. We felt that App Maker was a great fit to rapidly prototype a better solution and learn more about App Maker at the same time. We began asking stakeholders and brainstorming what the data structures would look like.

After several weeks, we had more buy-in from stakeholders and the partners were interested in developing it as a full replacement for our existing process. Development began in earnest as we worked out exactly how the reviews would be conducted and how this would be communicated to the user.

## Building it out
After several months of meeting with our UX, HR, and leadership teams, we finished the app. We kicked off the launch with a lunch session where we told users about the new system, how to use it, and showed them who to contact if they needed help or had feedback.

We got a lot of great feedback in the following weeks and added several features to the app to make the process more clear, and squashed several bugs. Most of the feedback was either for specific technical issues in the product or about the FUEL process a whole.

## Going forward
As Maven Wave grew rapidly around the world, we decided to replace it with an enterprise-tier performance management system that includes many other features we'll need as a quickly growing company. While the app worked for what we needed that year, it required a level of effort that was too high for what we wanted - our software engineers' time was better spent building great products for our clients that building internal apps for just us. But it wasn't a waste - I gained a lot of experience working with AppMaker, and many of the lessons we learned we would only learn from building an app people would depend on.

It was not only an extremely valuable educational experience for myself and the development team but for the HR team as well. The design and processes decisions made for the FUEL app were used as we looked for another SaaS solution. Being forced to redesign the whole performance process from start to finish helped leadership and HR align on their objectives and clarify what we valued most as a company.

## What did we learn?
* **AppMaker projects are best for tightly-scoped, desktop-centric apps that predominantly utilize information from G Suite or information users submit themselves**
  * Tightly-scoped means it does one or two things well. AppMaker does not have any testing infrastructure, and replicating issues proved extremely difficult for us. Simpler apps are easier to manage. App Maker also has lackluster change control, making sharing the project possible on paper but difficult in practice.
    * Some of the challenges with working with multiple people on App Maker were:
      * There was no way to assign code or pages to users. It was hard to tell who was editing or testing what - no `git blame` here.
      * Only one person could publish to a given deployment. So if your publisher leaves the company or is on vacation and you need to publish an update, you need to create a new deployment instance with a different link. We worked around this by giving out a nice URL that did a redirect on the DNS side, but DNS still takes hours to update.
      * AppMaker has sparse documentation and, as of now, little community support, so working around AppMaker-specific behavior can be challenging. For example, we had issues joining three sequel tables - it worked fine on a normal SQL install but failed in AppMaker, and we had no idea why.
  * Most of the bugs we hit occurred with complex custom components we had to write ourselves. Sticking to built-in objects whenever possible will save a development team time and headache.
    * Unfortunately, our custom component was a user picker - the built in user picker did not give us the data we needed.
* AppMaker is best for small working datasets
  * AppMaker should not be used as a way to view or manipulate more than ~50 list or grid objects at a time as performance degrades quickly. It can store much more than this as the backend is SQL, so it's fine to have a large dataset as long as a small amount of data is shown at once.
* While App Maker now has a mobile view option for pages, it's meant as a desktop __or__ mobile view - it's not responsive. Most App Maker components also seem more designed for desktops than mobile devices.