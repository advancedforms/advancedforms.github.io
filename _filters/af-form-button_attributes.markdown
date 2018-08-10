---
layout: post
title:  "af/form/button_attributes"
date:   2017-07-09 00:00:00 +0100
category: form-display
---

Filter attributes on the submit button. Use to add classes, set an ID, or add new attributes.

`$attributes` is an array of HTML attributes and their values.

{% highlight php startinline %}
<?php

function filter_submit_button_attributes( $attributes, $form, $args ) {
    $attributes['class'] .= ' button';
    
    return $attributes;
}
add_filter( 'af/form/button_attributes', 'filter_submit_button_attributes', 10, 3 );
add_filter( 'af/form/button_attributes/id=FORM_ID', 'filter_submit_button_attributes', 10, 3 );
add_filter( 'af/form/button_attributes/key=FORM_KEY', 'filter_submit_button_attributes', 10, 3 );

{% endhighlight %}