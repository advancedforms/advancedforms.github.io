---
title: af/field/calculate_value
menu:
  main:
    identifier: af-field-calculate_value
    parent: "filters/pro"
    weight: 1
aliases: /filters/af-field-calculate_value/
---

Provide your own value to be displayed in a calculated field. `af_get_field` can be used as normal but beware that no validation is performed on fields.

{{< highlight php >}}
<?php

function calculate_field_value( $value, $field, $form, $args ) {
    $quantity = af_get_field( 'quantity' );
    $price = 10;
    $total = $quantity * $price;

    return '$' . $total;
}
add_filter( 'af/field/calculate_value/name=FIELD_NAME', 'calculate_field_value', 10, 4 );

{{< / highlight >}}

{{% modifiers field="1" %}}