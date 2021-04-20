---
layout: post
title:  "Processing form submissions"
categories: guides basic
menu:
  main:
    parent: guides/advanced
    weight: 1
aliases: /guides/basic/processing-form-submissions/
---

## Overview

After a form has been submitted the field values need to be processed. The plugin comes with the ability to automatically save form data to entries and to send custom emails. Emails and entries can be configured in the form settings but are not enabled by default.

If you need to process the form data further the handy action hook `af/form/submission` should be used. To simplify the retrieval of field values a helper function `af_get_field` is provided which takes a field name/key and returns a value. The function returns a processed value in the same format as ACF's `get_field` would.

Following is an example of how to process a form submission and extract the value entered into the field with name `email`.

{{< highlight php >}}
<?php

function handle_form_submission( $form, $fields, $args ) {
    $email = af_get_field( 'email' );
}
add_action( 'af/form/submission', 'handle_form_submission', 10, 3 );

{{< / highlight >}}

The `$fields` parameter has been deprecated and `af_get_field` should be used instead. It remains for backwards compatibility.

## Using repeater fields

`af_get_field` works with all ACF field types including repeaters. Let's say we have a repeater field called `people` containing two sub fields, `first_name` and `last_name`. The following code can be used to iterate over all the repeater rows and process them one by one.

{{< highlight php >}}
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
{{< / highlight >}}

## Using flexible fields

Let's say we have a flexible field called `entries` with two different layouts called `person` and `business`. Person has two subfields: `first_name` and `last_name` whilst `business` has a single subfield: `business_name`. The following code can be used to iterate over the flexible rows:

{{< highlight php >}}
<?php

function handle_form_flexible_field_submission() {
    $entries = af_get_field( 'entries' );

    // Iterate over all the rows of the flexible field
    foreach ( $entries as $entry ) {
        $layout = $entry['acf_fc_layout'];

        if ( 'person' == $layout ) {
            // Get subfield values for the `person` layout
            $first_name = $entry['first_name'];
            $last_name = $entry['last_name'];

            // Use $first_name and $last_name
        } else if ( 'business' == $layout ) {
            // Get subfield value for the `business` layout
            $business_name = $entry['business_name'];

            // Use $business_name
        }
    }
}
add_action( 'af/form/submission', 'handle_form_flexible_field_submission', 10, 0 );

{{< / highlight >}}