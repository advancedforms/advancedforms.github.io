---
layout: post
title:  "Available arguments"
categories: guides basic
menu:
  main:
    parent: guides/basic
    weight: 4
---

This page lists all the available arguments that may be passed when displaying a form, either using a shortcode or a function call.

## submit_text

Text used for the submit button. Default to "Submit".

```[advanced_form submit_text="Send"]```

```advanced_form( 'KEY', array( 'submit_text' => 'Send' ) )```

## redirect

URL to redirect to after successful submission. Defaults to the current URL where the success message will be displayed after submission.
    
```[advanced_form redirect="/thank-you"]```

```advanced_form( 'KEY', array( 'redirect' => '/thank-you' ) )```

## ajax

Enable AJAX for form submissions. This will remove the need for a page reload, making submissions faster.

```[advanced_form ajax="1"]```

```advanced_form( 'key', array( 'ajax' => true ) )```

## values 

Values to pre-fill fields with. Only works for function calls where the argument should be an array mapping field names or keys to values. If you want to programmatically pre-fill some fields you might want to use the `af/field/prefill_value` filter.

{{< highlight php >}}
<?php

advanced_form( 'FORM_KEY', array(
  'values' => array(
    'first_name' => 'Fabian',
    'last_name' => 'Lindfors',
  ),
));
{{< / highlight >}}

## exclude_fields

Array of field names or keys to exclude from the form.

```[advanced_form exclude_fields="field_name"]```

{{< highlight php >}}
<?php

advanced_form( 'FORM_KEY', array(
  'exclude_fields' => array( 'field_name_1', 'field_name_2' ),
));
{{< / highlight >}}

## uploader

Whether to use the WordPress media uploader or a regular file input for file fields. Use `wp` for the media uploader and `basic` for the file input. Defaults to `wp` if the user is logged in, otherwise falls back to `basic`.

```[advanced_form uploader="basic"]```

```advanced_form( 'KEY', array( 'uploader' => 'basic' ) )```

## filter_mode

Whether to enable filter mode. Defaults to `false`. Filter mode disables the success message after submission and instead displays all fields again with their submitted values.

```[advanced_form filter_mode="1"]```

```advanced_form( 'KEY', array( 'filter_mode' => true ) )```

## instruction_placement

Whether to place instructions right below the label (`label`) or to place them after the field (`field`). Default to `label`.

```[advanced_form instruction_placement="field"]```

```advanced_form( 'KEY', array( 'instruction_placement' => 'field' ) )```

## display_title

Whether to display the form title or not. Defaults to `false`.

## display_description

Whether to display the form description or not. Defaults to `false`.

## id

HTML ID to use for the form element. Default to the form key.

```[advanced_form id="your-id"]```

```advanced_form( 'KEY', array( 'id' => 'your-id' ) )```

## honeypot

Whether to include a honeypot for spam prevention. Default to `true` and should normally not be changed.

```[advanced_form honeypot="0"]```

```advanced_form( 'KEY', array( 'honeypot' => false ) )```

## target

The URL to which the HTML form points. Default to the current URL and should most often not be changed. If you want to redirect to another page after submission, use `redirect` instead.