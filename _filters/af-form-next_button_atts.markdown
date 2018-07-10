---
layout: post
title:  "af/form/next_button_atts"
date:   2017-07-09 01:00:00 +0100
category: form-display
---

Filter attributes on the next button in multi-page forms. Use to add classes, set an ID, or add new attributes.

`$attributes` is an array of HTML attributes and their values.

{% highlight php startinline %}
<?php

function filter_next_button_attributes( $attributes, $field ) {
    $attributes['class'] .= ' button';
    
    return $attributes;
}
add_filter( 'af/form/next_button_atts', 'filter_next_button_attributes', 10, 2 );

{% endhighlight %}