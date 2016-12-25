---
layout: post
title:  "af/form/hidden_fields"
date:   2016-12-23 00:02:00 +0100
categories: actions form-display
---

Triggered right before the fields and after the description.

{% highlight php startinline %}
<?php

function hidden_field( $form, $args ) {
    echo '<input type="hidden" name="some_hidden_field" value="with some value">';
}
add_action( 'af/form/hidden_fields', 'hidden_field' );
add_action( 'af/form/hidden_fields/id=FORM_ID', 'hidden_field' );
add_action( 'af/form/hidden_fields/key=FORM_KEY', 'hidden_field' );

{% endhighlight %}