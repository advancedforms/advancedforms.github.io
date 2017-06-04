---
layout: post
title:  "Displaying a form"
date:   2016-12-23 00:01:00 +0100
categories: guides basic
---

Once a form has been added and fields have been assigned you can display the form either using a shortcode or with a function call.

## Using shortcode

To display a form using a shortcode use the structure below.

`[advanced_form form="FORM_ID_OR_KEY"]`

The form can be specified either by its post ID or its form key but it's recommended to always use the form key. The form key can be found right below the title on the form edit page.

## Using function call

A form can also be displayed using a function call which specifies the form key or ID. The function call is shown below.

`advanced_form( $form_id_or_key, $args );`

The $args parameter allows you to tweak how the form is displayed. These settings can also be passed to the shortcode. The available settings and their defaults are as follows.

{% highlight php startinline %}
<?php

$args = array(
    // Whether the title should be displayed or not (true/false)
    'display_title' => false,
    
    // Whether the description should be displayed or not (true/false)
    'display_description' => false,
    
    // Text used for the submit button
    'submit_text' => 'Submit',
    
    // The URL to which the form points. Defaults to the current URL which will automatically display a success message after submission
    // If this is overriden you may use af_has_submission to check for a form submission
    'target' => CURRENT_URL,
    
    // Whether the form output should be echoed or returned	
    'echo' => true,
    
    // Field values to pre-fill. Should be an array with format: $field_name_or_key => $field_prefill_value
    'values' => array(),
    
    // Array of field keys or names to exclude from form rendering
    'exclude_fields' => array(),
    
    // Either 'wp' or 'basic'. Whether to use the Wordpress media uploader or a regular file input for file/image fields.
    'uploader' => 'wp',
    
    // The URL to redirect to after a successful submission. Defaults to false for no redirection.
    'redirect' => false,
    
    // ID to use for form element. Defaults to form key.
    'id' => FORM_KEY,
    
    // Filter mode disables the success message after submission and instead displays all fields again with their submitted values.
    'filter_mode' => false,
);

advanced_form( 'form_key', $args );

{% endhighlight %}