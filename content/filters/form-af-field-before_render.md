---
title: af/field/before_render
menu:
  main:
    identifier: af-field-before_render
    parent: "filters/forms"
    weight: 5
aliases: /filters/af-field-before_render/
---

Modify an ACF field before it's rendered. Similar to `acf/prepare_field`.

{{< highlight php >}}
<?php

function modify_field( $field, $form, $args ) {
    $field['label'] = 'New field label';
    return $field;
}
add_filter( 'af/field/before_render/name=FIELD_NAME', 'modify_field', 10, 3 );

{{< / highlight >}}

{{% modifiers field="1" %}}