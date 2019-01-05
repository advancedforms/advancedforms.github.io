---
layout: post
title: "Using calculated fields"
date: 2019-01-04 00:00:00 +0100
categories: pro configuration
filters: "af/field/calculate_value"
---

Calculated fields are updated live when a form is filled and can contain any content you'd like to. They are perfect for providing previews or to show calculated values before submission.

## Adding a calculated field

Calculated fields are just regular ACF fields. Go to your field group and add a new field of type "Calculated". Next we need to configure what value this field should display which is done in the form settings. Head on over to your form settings and switch to the "Calculated" tab.

Here you'll find a WYSIWYG editor for each calculated field. You can add regular content and mix in field values which will be updated in real-time.

## Customizing calculated value

Field are not limited to static content with mixed in fields but also support providing your own content through code. Use the `af/field/calculate_value` filter to provide your own content or edit it before it's displayed.
