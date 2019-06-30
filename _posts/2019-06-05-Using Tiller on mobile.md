---
title: "Using Tiller and Glide Together"
excerpt_separator: "<!--more-->"
categories:
  - Blog
  - Tutorial
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

![screenshot of Glide app showing three transactions](/assets/images/glide.jpg)

<sub><sup><i>And yes, there's a dark mode!</i></sup></sub>

Glide doesn't just pull the transaction data, but that's what's best suited to display in Glide. Many of the other Tiller templayes are Google Sheets-specific graphs and formulae which doesn't translate as well. 

Glide can also display the other transaction information Tiller has after clicking on the row. This is configured in the Properties pane on the right-hand side of the screen in Glide:

![screenshot of Glide app properties page](/assets/images/properties-glide.jpg)

The nicest part of Glide is that you can interact with the Glide app in the editor to see your changes live. After clicking the row, you can determine what detail appears in the detail view. I choose to display the summary, date, category, and account of transactions to keep things simple. I also have editing turned on, so the category of transactions can be modified from the Glide app.

![screenshot of Glide app components page](/assets/images/tiller category choice.png)


I added a page to my Tiller Sheet that takes the values from several pages and puts them on one Sheet, which allows me to create a Glide view that shows that information. You can also link charts from Sheets as images in glide. I use this in detail views to show how that item changed over time. For example, Tiller has a built-in graph for Net Worth that I copied. You'llget the URL to put in Glide by going to the three-dot menu in the upper right of the chart, clicking `Publish Chart` and then choosing the chart title and selecting `image` from the dropdown. You'll also want to check the box that automatically republishes the chart when changes are made.

[![screenshot of mobile summary page](/assets/images/tiller mobile summary.png)](/assets/images/tiller mobile summary.png)
<sub><sup><i>Click to expand image</i></sup></sub>

You may need to modify references for some formulas to work on a new page, and be aware adding more graphs or formulas will increase the calculation time of your Sheet. If your sheet takes a long time to calculate, you can try some of the things listed [here](https://www.benlcollins.com/spreadsheets/slow-google-sheets/) to speed it up, but any Tiller sheet will require a lot of calculations.

With this done, you get a snazzy mobile app showing you everything you'd want to see on your mobile.