---
title: af/form/before_fields
menu:
  main:
    identifier: af-form-before_fields
    parent: "actions/display"
    weight: 3
aliases: /actions/af-form-before_fields/
---

Triggered right before the fields and after the description.

{{< highlight php >}}
<?php

function before_fields( $form, $args ) {
    echo 'Before fields and after description';
}
add_action( 'af/form/before_fields/key=FORM_KEY', 'before_fields', 10, 2 );

{{< / highlight >}}

{{% modifiers form="1" %}}