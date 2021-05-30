---
title: af/form/before_render
menu:
  main:
    identifier: af-form-before_render
    parent: "filters/forms"
    weight: 3
aliases: /filters/af-form-before_render/
---

Make changes to a form before it's rendered. Parameter `$form` is a form array.

Can be used for example to modify the form title, description, or success message.

{{< highlight php >}}
<?php

function filter_form( $form, $args ) {
    $form['display']['description'] = 'New form description';
    
    return $form;
}
add_filter( 'af/form/before_render/key=FORM_KEY', 'filter_form', 10, 2 );

{{< / highlight >}}

{{% modifiers form="1" %}}
