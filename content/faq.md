---
title: Frequently Asked Questions
menu:
  main:
    name: FAQ
    weight: 4
    pre: "<i data-feather='help-circle'></i>"
type: page
---

## Why is my success message not showing after submission?

This issue is often caused by page caching provided either by your host or a plugin on your site. We recommend disabling the cache for the page with your form or to create a custom "thank you" page and redirecting to that after submission.

## How do I redirect to another page after submission?

You can pass a URL as the `redirect` argument when displaying your form. For example to redirect to a thank you-page available at `/thank-you`:

```[advanced_form form="KEY" redirect="/thank-you"]```

## How do I change the submit button text?

You can pass the `submit_text` argument to change the submit button text. For example to change the text to "Send":

```[advanced_form form="KEY" submit_text="Send"]```

## Is it possible to handle submissions without a page reload (using AJAX)?

Advanced Forms can handle submissions without a reload using AJAX. Activate it for your form using:

```[advanced_form form="KEY" ajax="1"]```

## How do I connect my form to an external service?

Advanced Forms Pro has built-in integrations with Slack, Mailchimp, and thousands of other services through Zapier. If you need to integrate with a service that is not supported it's normally simple to build a custom integration. This normally entails [writing a custom submission handler]({{< ref "/guides/advanced-processing-form-submissions">}}) which collects form data and sends it to an third-party API.

## How do I only subscribe users in Mailchimp if they have checked a checkbox?

To achieve this you can use the [af/form/mailchimp/request]({{< ref "filters/pro-af-form-mailchimp-request.md" >}}) filter and conditionally return `false` to stop the request. For example, if you have a checkbox field named "subscribe_to_newsletter" you can use the following snippet:

{{< highlight php >}}
<?php

function form_mailchimp_conditional_checkbox( $request ) {
  if ( af_get_field( 'subscribe_to_newsletter' ) ) {
    return $request;
  }

  return false;
}
add_filter( 'af/form/mailchimp/request/key=FORM_KEY', 'form_mailchimp_conditional_checkbox', 10, 3 );

{{< / highlight >}}