---
layout: post
title:  "af/form/before_fields"
date:   2016-12-23 00:01:00 +0100
categories: actions form-display
---

Triggered right before the fields and after the description.

{% highlight php startinline %}

function before_fields( $form, $args ) {
    echo 'Before fields and after description';
}
add_action( 'af/form/before_fields', 'before_fields' );
add_action( 'af/form/before_fields/id=FORM_ID', 'before_fields' );
add_action( 'af/form/before_fields/key=FORM_KEY', 'before_fields' );

{% endhighlight %}