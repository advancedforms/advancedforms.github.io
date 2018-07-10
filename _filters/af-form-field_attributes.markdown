---
layout: post
title:  "af/form/field_attributes"
date:   2016-12-23 00:04:00 +0100
category: form-display
---

Filter attributes on field wrappers. Use to add classes, set an ID, or add new attributes.

`$attributes` is an array of HTML attributes and their values.

{% highlight php startinline %}
<?php

function filter_field_attributes( $attributes, $field, $form, $args ) {
    $attributes['id'] = 'form-id';
    
    return $attributes;
}
add_filter( 'af/form/field_attributes', 'filter_field_attributes', 10, 4 );
add_filter( 'af/form/field_attributes/id=FORM_ID', 'filter_field_attributes', 10, 4 );
add_filter( 'af/form/field_attributes/key=FORM_KEY', 'filter_field_attributes', 10, 4 );

{% endhighlight %}