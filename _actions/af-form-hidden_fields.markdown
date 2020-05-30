---
layout: post
title:  "af/form/hidden_fields"
date:   2016-12-23 00:02:00 +0100
category: form-display
---

Use this action to add hidden inputs which can contain data you want to pass along your form, for example the current post title as shown in the example below.

The hidden fields will be available in all submission hooks, such as `af/form/submission`, and can be accessed through the `$_POST` object. Please keep in mind that hidden inputs are not ACF fields and won't be saved automatically to entries or posts.

{% highlight php startinline %}
<?php

function hidden_field( $form, $args ) {
    // The title can later be retrieved using $_POST['post_title'].
    $title = get_the_title();
    echo sprintf( '<input type="hidden" name="post_title" value="%s">', $title );
}
add_action( 'af/form/hidden_fields', 'hidden_field', 10, 2 );
add_action( 'af/form/hidden_fields/id=FORM_ID', 'hidden_field', 10, 2 );
add_action( 'af/form/hidden_fields/key=FORM_KEY', 'hidden_field', 10, 2 );

{% endhighlight %}