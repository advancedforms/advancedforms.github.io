---
title: af/form/previous_button_atts
menu:
  main:
    identifier: af-form-previous_button_atts
    parent: "filters/display"
    weight: 3
aliases: /filters/af-form-previous_button_atts/
---

Filter attributes on the previous button in multi-page forms. Use to add classes, set an ID, or add new attributes.

`$attributes` is an array of HTML attributes and their values.

{{< highlight php >}}
<?php

function filter_previous_button_attributes( $attributes, $field ) {
    $attributes['class'] .= ' button';
    
    return $attributes;
}
add_filter( 'af/form/previous_button_atts', 'filter_previous_button_attributes', 10, 2 );

{{< / highlight >}}