---
title: af/form/field_attributes
menu:
  main:
    identifier: af-form-field_attributes
    parent: "filters/display"
    weight: 1
aliases: /filters/af-form-field_attributes/
---

Filter attributes on field wrappers. Use to add classes, set an ID, or add new attributes.

`$attributes` is an array of HTML attributes and their values.

{{< highlight php >}}
<?php

function filter_field_attributes( $attributes, $field, $form, $args ) {
    $attributes['id'] = 'form-id';
    
    return $attributes;
}
add_filter( 'af/form/field_attributes/key=FORM_KEY', 'filter_field_attributes', 10, 4 );

{{< / highlight >}}

{{% modifiers form="1" %}}