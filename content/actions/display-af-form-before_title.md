---
title: af/form/before_title
menu:
  main:
    identifier: af-form-before_title
    parent: "actions/display"
    weight: 2
aliases: /actions/af-form-before_title/
---

Triggered at the beginning of a form, before the title.

{{< highlight php >}}
<?php

function before_title( $form, $args ) {
    echo 'Before title';
}
add_action( 'af/form/before_title/key=FORM_KEY', 'before_title', 10, 2 );

{{< / highlight >}}


{{% modifiers form="1" %}}