---
title: "Prevent Google Docs Phishing with one filter"
excerpt_separator: "<!--more-->"
categories:
  - Blog
  - Tutorial
tags:
  - technology
  - Google
classes: wide
comments: true
---

### What's the phishing risk of Docs?
If you use Google Docs and Gmail, you may have seen an email like this before:

![screenshot of request for access email](/assets/images/request-for-access-email.png)

This is one of the most dangerous emails you can get, for a few reasons:

* You only see the name of the person requesting - if you want to see their email, you need to hover over their name (or long-press on mobile). This allows a bad actor to make an account with the same name as someone you may know but with a different email. The sharing interface in Google Drive will show the name of the person and not their email by default as well. If you aren't careful, you may click the link and approve access for the bad actor. 
* Emails like this can be easily copied by bad actors and sent with phishing links - you may think you're clicking a link to be taken to Google Drive but in reality you would be taken to a malicious webpage.

So, how do you prevent this type of phishing? One way is to simply delete all sharing request emails automatically. If someone needs access to a doc you have, have them reach out using Hangouts Chat, Slack, Signal, or other sources where you can better identify the person requesting access.

1. Paste this into your Gmail search bar:

`from:(drive-shares-noreply@google.com) subject:("Request for access")`

2. Then click the small down arrow or carat in the search bar.
3. Then click `Create Filter`
4. Then click `Delete it`
5. Then click `Create Filter`

If you click the gear icon and select `Settings > Filters and Blocked Addresses` you should see this in your filters list:

![filter as it appears in settings](/assets/images/drive-sharing-filter.png)

If you don't see that or are having trouble, press `Import Filters` on that screen and upload <a href="/assets/mailFilters.xml" download>this file</a>.