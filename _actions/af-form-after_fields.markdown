---
layout: post
title:  "af/form/after_fields"
date:   2016-12-23 00:03:00 +0100
category: form-display
---

Triggered after the submit button.

{% highlight php startinline %}
<?php

function after_fields( $form, $args ) {
    echo 'After fields';
}
add_action( 'af/form/after_fields', 'after_fields', 10 ,2 );
add_action( 'af/form/after_fields/id=FORM_ID', 'after_fields', 10 ,2 );
add_action( 'af/form/after_fields/key=FORM_KEY', 'after_fields', 10 ,2 );

{% endhighlight %}