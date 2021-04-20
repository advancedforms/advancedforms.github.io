---
title: af/form/after_fields
menu:
  main:
    identifier: af-form-after_fields
    parent: "actions/display"
    weight: 5
aliases: /actions/af-form-after_fields/
---
Triggered after the submit button.

{{< highlight php >}}
<?php

function after_fields( $form, $args ) {
    echo 'After fields';
}
add_action( 'af/form/after_fields/key=FORM_KEY', 'after_fields', 10 ,2 );

{{< / highlight >}}

{{% modifiers form="1" %}}