---
layout: post
title:  "Customizing validations"
categories: guides advanced
actions: 'af/form/validate'
menu:
  main:
    parent: guides/advanced
    weight: 7
aliases: /guides/advanced/customizing-validations/
---

## Validating individual fields

Advanced Forms uses ACF to render and validate fields. This means that any custom field validations will also work with your forms. ACF provides the `acf/validate_value` to add extra validation logic for specific fields and it's the recommended way to add validation logic for form fields as well. Refer to the [ACF documentation](https://www.advancedcustomfields.com/resources/) for more info.

## Validating forms

Sometimes it's not sufficient to validate individual fields. From version 1.5 and onwards Advanced Forms includes the ability to add custom validation logic for full forms. This is made possible with the `af/form/validate` action combined with the `af_add_error` function. `af/form/validate` is invoked before submission and has access to the submitted data through `af_get_field`.

The following is an example of custom validation involving two separate fields. The `af_add_error` functions takes a field name (or key) as its first parameter and an error message as its second.

{{< highlight php >}}
<?php
function validate_name() {
    $first_name = af_get_field( 'first_name' );
    $last_name = af_get_field( 'last_name' );

    if ( 'Fabian Lindfors' != $first_name . ' ' . $last_name ) {
        af_add_error( 'first_name', 'Full name must be Fabian Lindfors!' );
    }
}
add_action( 'af/form/validate/key=FORM_KEY', 'validate_name' );
{{< / highlight >}}

