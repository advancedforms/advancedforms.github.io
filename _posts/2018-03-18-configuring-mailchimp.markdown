---
layout: post
title:  "Configuring Mailchimp"
date:   2018-03-18 00:01:00 +0100
categories: pro integrations
redirect_from:
- /pro/configuration/configuring-mailchimp/
---

Advanced Forms Pro enables you to connect forms to Mailchimp and subscribe your visitors to Mailchimp lists. Configuring Mailchimp is easy, all you need is an API key.

## Generating an API Key

Start by logging in to your Mailchimp account on mailchimp.com. Click your profile name in the top right corner and select *Account*. Navigate to *API Keys* under the *Extras* tab and press the *Create a Key* button. Lastly, copy the newly generated key.

<iframe src="//fast.wistia.net/embed/iframe/0x8n36j330" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" oallowfullscreen="oallowfullscreen" msallowfullscreen="msallowfullscreen" width="600" height="400"></iframe>


## Connecting your form to Mailchimp

Once you have your API key it's time to configure Advanced Forms. Log in to the Wordpress admin panel and navigate to *Forms* → *Settings*. Paste your API key in the *Mailchimp API key* and save. Advanced Forms is now connected to your Mailchimp account and ready to start adding some subscribers.

Find and edit the form you want to connect. Navigate to the *Integrations* tab and enable the Mailchimp integration. You should now be faced with a few settings. The list field lets you configure which Mailchimp list to subscribe users to and the email field lets you select which form field to get an email address from. Remember that this needs to be a valid email address and hence it's recommended to use an ACF email field. Optionally you may also configure first name and last name to make your subscriber info more complete.

![Mailchimp form settings]({{ site.url }}/assets/images/mailchimp-settings.png)