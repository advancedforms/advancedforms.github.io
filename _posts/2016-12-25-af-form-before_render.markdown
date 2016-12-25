---
layout: post
title:  "af/form/before_render"
date:   2016-12-23 00:00:00 +0100
categories: filters forms
---

Make changes to a form before it's rendered. Parameter `$form` is a form array.

Can be used for example to modify the form title, description, or success message.

{% highlight php startinline %}

function filter_form( $form, $args ) {
    $form['display']['description'] = 'New form description';
    
    return $form;
}
add_filter( 'af/form/before_render', 'filter_form', 10, 2 );
add_filter( 'af/form/before_render/id=FORM_ID', 'filter_form', 10, 2 );
add_filter( 'af/form/before_render/key=FORM_KEY', 'filter_form', 10, 2 );

{% endhighlight %}