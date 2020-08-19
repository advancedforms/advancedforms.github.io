---
layout: post
title:  "Configuring Google reCAPTCHA"
date:   2020-04-26 00:00:00 +0100
categories: pro integrations
---

Basic spam protection is built into all forms using a honeypot. Sometimes more sophisticated spam protection is necessary and for these situations Advanced Forms Pro supports Google reCAPTCHA. Once configured, the user will be presented with a challenge when submitting a form if they are suspected of being a bot. Because Advanced Forms uses the invisible reCAPTCHA, most users won't have to click anything to prove that they are human.

## Getting API keys

Google requires a set of API keys which you'll have to create using a Google account.

1. Navigate to [this page](https://www.google.com/recaptcha/admin/create) and sign in with your Google account.
2. For "reCAPTCHA type", select "reCAPTCHA v2" and "Invisible reCAPTCHA badge" from the options that appear.
3. Fill in the rest of the form and then click "Submit". Make note of the generated site key and secret key.

## Configuring your form

Once you have your API keys it's time to configure the plugin and the forms you want to protect. Log in to the WordPress admin panel and navigate to *Forms* → *Settings*. Fill in the site key and secret key you generated in the previous step and save.

Every form you want to protect must be enabled manually. Go to the edit panel of your form and navigate to the *Integrations* tab. If you have added your API keys to the plugin settings you should be able to enable the *Google reCAPTCHA* integration.