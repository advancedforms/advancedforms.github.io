---
title: af/form/validate
menu:
  main:
    identifier: af-form-validate
    parent: "actions/events"
    weight: 5
aliases: /actions/af-form-validate/
---

Triggered before a form is submitted, giving a chance to perform extra validation. Validation errors should be added using `af_add_error( $field_name_or_key, $message )`.

{{< highlight php >}}
<?php

function validate_form( $form, $args ) {
    $age = af_get_field( 'age' );
    if ( $age > 18 ) {
        af_add_error( 'age', 'You must be above 18' );
    }
}
add_action( 'af/form/validate/key=FORM_KEY', 'validate_form', 10, 2 );

{{< / highlight >}}

{{% modifiers form="1" %}}