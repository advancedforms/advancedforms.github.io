---
title: af/form/submission
menu:
  main:
    identifier: af-form-submission
    parent: "actions/events"
    weight: 1
aliases: /actions/af-email-before_send/
---

Triggered when a form is submitted. Can be used to implement your own submission handling, for example to call third-party APIs. Submitted field values can be retrieved using `af_get_field( 'FIELD_NAME' )`.

More details are available in the [Processing form submissions]({{< ref "/guides/advanced-processing-form-submissions" >}}) guide.

{{< highlight php >}}
<?php

function handle_form_submission( $form, $field, $args ) {
  $email = af_get_field( 'email' );
}
add_action( 'af/form/submission', 'handle_form_submission', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}