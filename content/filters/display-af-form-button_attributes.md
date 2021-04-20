---
title: af/form/button_attributes
menu:
  main:
    identifier: af-form-button_attributes
    parent: "filters/display"
    weight: 2
aliases: /filters/af-form-button_attributes/
---

Filter attributes on the submit button. Use to add classes, set an ID, or add new attributes.

`$attributes` is an array of HTML attributes and their values.

{{< highlight php >}}
<?php

function filter_submit_button_attributes( $attributes, $form, $args ) {
    $attributes['class'] .= ' button';
    
    return $attributes;
}
add_filter( 'af/form/button_attributes/key=FORM_KEY', 'filter_submit_button_attributes', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}