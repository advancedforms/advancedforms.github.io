---
layout: post
title: "af/field/before_render"
date: 2019-01-05 00:00:00 +0100
category: forms
---

Modify an ACF field before it's rendered. Similar to `acf/prepare_field`.

{% highlight php startinline %}

<?php

function modify_field( $field, $form, $args ) {
    $field['label'] = 'New field label';
    return $field;
}
add_filter( 'af/field/before_render', 'modify_field', 10, 3 );
add_filter( 'af/field/before_render/name=FIELD_NAME', 'modify_field', 10, 3 );
add_filter( 'af/field/before_render/key=FIELD_KEY', 'modify_field', 10, 3 );

{% endhighlight %}
