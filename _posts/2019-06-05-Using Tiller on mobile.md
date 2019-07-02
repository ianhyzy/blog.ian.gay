---
title: "Using Tiller and Glide Together"
excerpt_separator: "<!--more-->"
categories:
  - Blog
  - Tutorial
tags:
  - hobby
  - technology
  - Google
---

[Tiller](https://tillerhq.com) is a service that syncs all of your financial data to a Google sheet, and it comes with several great templates to organize your finances.
I've been using it for several months and it works great - I use the Debt Tracker, Category Detail, and Monthly Budget templates frequently.

But Google Sheets isn't a great user experience on a small mobile device in portrait mode. I wanted a way to view and categorize transactions on mobile. This is where [Glide](https://glideapps.com) comes in. Glide attaches to a Google Spreadsheet and then creates a mobile web app designed around it. As an example, here's what a transaction looks like in the Transactions tab of a Tiller sheet:

<table class="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">6/3/2019</th>
<th title="Field #2">Marianos #538</th>
<th title="Field #3">🍞Groceries</th>
<th title="Field #4">-$29.96</th>
<th title="Field #5">Quicksilver</th>
</tr></thead>
<tbody></tbody></table>

I like to use emoji in category names to make them easier to differentiate, and this also adds an icon automatically in Glide!
The category `🍞Groceries` is set by me in the Categories sheet, which looks like this:

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

Here's what that transaction looks like in the list in my Tiller Glide app:

![screenshot of Glide app showing three transactions](/assets/images/glide.jpg)

<sub><sup><i>And yes, there's a dark mode!</i></sup></sub>

Glide doesn't just pull the transaction data, but that's what's best suited to display in Glide. Many of the other Tiller templates are Google Sheets-specific graphs and formulae which don't translate as well. 

Glide can also display the other transaction information Tiller has after clicking on the row. This is configured in the Properties pane on the right-hand side of the screen in Glide:

![screenshot of Glide app properties page](/assets/images/properties-glide.jpg)

The nicest part of Glide is that you can interact with the Glide app in the editor to see your changes live. After clicking the row, you can determine what detail appears in the detail view. I choose to display the summary, date, category, and account of transactions to keep things simple. I also have editing turned on, so the category of transactions can be modified from the Glide app.

![screenshot of Glide app components page](/assets/images/tiller category choice.png)


I added a page to my Tiller Sheet that takes the values from several pages and puts them on one Sheet, which allows me to create a Glide view that shows that information. You can also link charts from Sheets as images in glide. I use this in detail views to show how that item changed over time.

[![screenshot of mobile summary page](/assets/images/tiller mobile summary.png)](/assets/images/tiller mobile summary.png)
<sub><sup><i>Click to expand image</i></sup></sub>

For example, Tiller has a built-in graph for Net Worth that I copied. You'll get the URL to put in Glide by going to the three-dot menu in the upper right of the chart, clicking `Publish Chart` and then choosing the chart title and selecting `image` from the dropdown. You'll also want to check the box that automatically republishes the chart when changes are made.

![screenshot of three-dot dropdown showing button to go to chart publish settings](/assets/images/edit chart.jpg)
![screenshot of publish settings](/assets/images/publish settings.jpg)

You may need to modify references for some formulas to work on a new page, and be aware that adding more graphs or formulas will increase the calculation time of your Sheet. If your sheet takes a long time to calculate, you can try some of the things listed [here](https://www.benlcollins.com/spreadsheets/slow-google-sheets/) to speed it up, but any Tiller sheet will require a lot of calculations.

With Glide reading data from your Tiller Sheets, you can build a snazzy mobile app with everything you want to see and nothing you don't.