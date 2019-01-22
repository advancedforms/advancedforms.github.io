---
layout: post
title:  "af/form/editing/post_data"
date:   2019-01-22 00:00:00 +0100
category: pro
---

Override the post data used when a post is created or updated. Post data is the `$postarr` argument passed to [`wp_insert_post`](https://developer.wordpress.org/reference/functions/wp_insert_post/).

{% highlight php startinline %}
<?php

function modify_post_data( $post_data, $form, $args ) {
    // Override post title 
    $post_data['post_title'] = 'New post title!';

    return $post_data;
}
add_filter( 'af/form/editing/post_data', 'modify_post_data', 10, 3 );
add_filter( 'af/form/editing/post_data/id=FORM_ID', 'modify_post_data', 10, 3 );
add_filter( 'af/form/editing/post_data/key=FORM_KEY', 'modify_post_data', 10, 3 );

{% endhighlight %}