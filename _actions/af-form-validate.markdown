---
layout: post
title:  "af/form/validate"
date:   2018-07-01 00:00:00 +0100
category: events
---

Triggered before a form is submitted, giving a chance to perform extra validation. Validation errors should be added using `af_add_error( $field_name_or_key, $message )`.

{% highlight php startinline %}
<?php

function validate_form( $form, $args ) {
    $age = af_get_field( 'age' );
    if ( $age > 18 ) {
        af_add_error( 'age', 'You must be above 18' );
    }
}
add_action( 'af/form/validate', 'validate_form', 10, 2 );
add_action( 'af/form/validate/id=FORM_ID', 'validate_form', 10, 2 );
add_action( 'af/form/validate/key=FORM_KEY', 'validate_form', 10, 2 );

{% endhighlight %}