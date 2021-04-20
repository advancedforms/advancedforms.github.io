---
title: af/field/prefill_value
menu:
  main:
    identifier: af-field-prefill_value
    parent: "filters/forms"
    weight: 4
aliases: /filters/af-field-prefill_value/
---

Prefill field values before displaying form. Can be used for example to provide dynamic default values.

{{< highlight php >}}
<?php

function prefill_form_field( $value, $field, $form, $args ) {
    return 'Pre-filled value';
}
add_filter( 'af/field/prefill_value/key=FIELD_KEY', 'prefill_form_field', 10, 4 );

{{< / highlight >}}

{{% modifiers field=1 %}}