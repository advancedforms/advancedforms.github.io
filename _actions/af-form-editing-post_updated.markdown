---
layout: post
title:  "af/form/editing/post_updated"
date:   2018-07-01 00:00:00 +0100
category: pro
---

Triggered after a post has been edited. Not triggered when a post is created.

{% highlight php startinline %}
<?php

function form_post_updated( $post, $form, $args ) {
    // Do something with the edited post.
    // $post is a WP_Post object.
}
add_action( 'af/form/editing/post_updated', 'form_post_updated', 10, 3 );
add_action( 'af/form/editing/post_updated/id=FORM_ID', 'form_post_updated', 10, 3 );
add_action( 'af/form/editing/post_updated/key=FORM_KEY', 'form_post_updated', 10, 3 );

{% endhighlight %}