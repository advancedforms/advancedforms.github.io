---
layout: post
title:  "Processing form submissions"
date:   2016-12-23 00:02:00 +0100
categories: guides basic
---

After a form has been submitted the field values need to be processed. The plugin comes with the ability to automatically save form data to entries and to send custom emails. Emails and entries can be configured in the form settings but are not enabled by default.

If you need to process the form data further the handy action hook `af/form/submission` should be used. To simplify the retrieval of field values a helper function `af_get_field` is provided which takes the field name/key to find. The function returns a processed value in the same format as ACF's `get_field` would.

Following is an example of how to process a form submission and extract the value entered into the field with name `email`.

{% highlight php startinline %}
<?php

function handle_form_submission( $form, $fields, $args ) {
    $email = af_get_field( 'email' );
}
add_action( 'af/form/submission', 'handle_form_submission', 10, 3 );

{% endhighlight %}

The `$fields` parameter has been deprecated and `af_get_field` should be used instead. It remains for backwards compatibility.

## Using repeater fields

`af_get_field` works with all ACF field types including repeaters. Let's say we have a repeater field called `people` containing two sub fields, `first_name` and `last_name`. The following code can be used to iterate over all the repeater rows and process them one by one.

{% highlight php startinline %}
<?php

function handle_form_repeater_submission() {
    $people = af_get_field( 'people' );

    // Iterate over all the rows
    foreach ( $people as $person ) {
        // Get the sub field values for the row
        $first_name = $person['first_name'];
        $last_name = $person['last_name'];

        // Use $first_name and $last_name
    }
}
add_action( 'af/form/submission', 'handle_form_repeater_submission', 10, 0 );

{% endhighlight %}