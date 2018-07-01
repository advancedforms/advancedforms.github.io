---
layout: post
title:  "af/form/editing/post_created"
date:   2018-07-01 00:00:00 +0100
category: pro
---

Triggered after a post has been created. Not triggered when a post is edited.

{% highlight php startinline %}
<?php

function form_post_created( $post, $form, $args ) {
    // Do something with the created post.
    // $post is a WP_Post object.
}
add_action( 'af/form/editing/post_created', 'form_post_created', 10, 3 );
add_action( 'af/form/editing/post_created/id=FORM_ID', 'form_post_created', 10, 3 );
add_action( 'af/form/editing/post_created/key=FORM_KEY', 'form_post_created', 10, 3 );

{% endhighlight %}