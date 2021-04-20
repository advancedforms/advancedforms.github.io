---
title: af/form/args
menu:
  main:
    identifier: af-form-args
    parent: "filters/forms"
    weight: 1
aliases: /filters/af-form-args/
---

Alter the arguments used to display a form. The arguments are either passed to the function call or defined as attributes on a shortcode.

{{< highlight php >}}
<?php

function filter_args( $args, $form ) {
    $args['submit_text'] = 'Send';
    return $args;
}
add_filter( 'af/form/args/key=FORM_KEY', 'filter_args', 10, 2 );

{{< / highlight >}}

{{% modifiers form="1" %}}