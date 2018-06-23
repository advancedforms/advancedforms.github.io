---
layout: post
title:  "Setting up Slack notifications"
date:   2018-03-18 00:01:00 +0100
categories: pro configuration
---

By connecting your Slack workspace to a form you will instantly get a message whenever a visitor sends a submission. A perfect way to be notified whether you're creating a simple contact form or building a full-blown helpdesk.

## Creating a webhook

All you need to connect your form to Slack is a single URL called a webhook. Here's how you get one:

1. Navigate to [my.slack.com/services/new/incoming-webhook/](https://my.slack.com/services/new/incoming-webhook/) and make sure you are logged in to your Slack workspace.
2. Select the channel you want notifications to be sent to and click *Add Incoming WebHooks integration*.
3. Copy your fresh webhook URL.

## Configuring your form

Once a webhook has been generated you're ready to set up your form. In the Wordpress admin find your form, edit it, and enable the Slack integration under *Integrations*. Fill in your webhook URL and type a little message which will be included with each notification. Also select any fields which you would like included. That's it!

![Example of a Slack notification]({{ site.url }}/assets/images/slack-notification.png)