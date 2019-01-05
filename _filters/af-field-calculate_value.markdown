---
layout: post
title:  "af/field/calculate_value"
date:   2019-01-04 00:00:00 +0100
category: pro
---

Provide your own value to be displayed in a calculated field. `af_get_field` can be used as normal but beware that no validation is performed on fields.

{% highlight php startinline %}
<?php

function calculate_field_value( $value, $field, $form, $args ) {
    $quantity = af_get_field( 'quantity' );
    $price = 10;
    $total = $quantity * $price;

    return '$' . $total;
}
add_filter( 'af/field/calculate_value', 'calculate_field_value', 10, 4 );
add_filter( 'af/field/calculate_value/name=FIELD_NAME', 'calculate_field_value', 10, 4 );
add_filter( 'af/field/calculate_value/key=FIELD_KEY', 'calculate_field_value', 10, 4 );

{% endhighlight %}