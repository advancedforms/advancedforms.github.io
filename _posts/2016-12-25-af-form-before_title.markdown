---
layout: post
title:  "af/form/before_title"
date:   2016-12-23 00:00:00 +0100
categories: actions form-display
---

Triggered at the beginning of a form, before the title.

{% highlight php startinline %}
<?php

function before_title( $form, $args ) {
    echo 'Before title';
}
add_action( 'af/form/before_title', 'before_title' );
add_action( 'af/form/before_title/id=FORM_ID', 'before_title' );
add_action( 'af/form/before_title/key=FORM_KEY', 'before_title' );

{% endhighlight %}