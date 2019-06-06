---
title: "Using Tiller and Glide Together"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - hobby
  - technology
---

[Tiller](https://tillerhq.com) is a service that sync all of your finanical data in a Google sheet, and comes with several great templates to organize your data.
I've been using it for several months now and it works great. Transactions are logged in a Transactions tab, and the main information I use is:

<table class="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">6/3/2019</th>
<th title="Field #2">Marianos #538</th>
<th title="Field #3">🍞Groceries</th>
<th title="Field #4">-$29.96</th>
<th title="Field #5">Quicksilver</th>
</tr></thead>
<tbody></tbody></table>

The category `🍞Groceries` is set by me in the categories sheet, which looks like this:

<table class="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Group</th>
<th title="Field #2">Category</th>
<th title="Field #3">Type</th>
<th title="Field #4">Subtype</th>
</tr></thead>
<tbody><tr>
<td>Living</td>
<td>🍞Groceries</td>
<td>Expense</td>
<td>Flex</td>
</tr>
</tbody></table>

Tiller also gives you budgeting tools, dashboards, trands, and so on. But the one downside to Tiller is that it's contrained to a Google Sheet, and while Sheets has a great mobile app, spreadsheets just aren't a good fit for mobile devices. This is where [Glide](https://glideapps.com) comes in.

Glide attaches to a Google Spreadsheet and then creates an mobile web app designed around it. Here's what that transaction looks like in my Tiller Glide app:

![screenshot of Glide app showing three transactions]({{ site.baseurl }}/assets/images/glide.png "Glide Screenshot")
