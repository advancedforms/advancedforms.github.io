---
title: af/form/editing/post_data
menu:
  main:
    identifier: af-form-editing-post_data
    parent: "filters/pro"
    weight: 2
aliases: /filters/af-form-editing-post-data/
---

Override the post data used when a post is created or updated. Post data is the `$postarr` argument passed to [`wp_insert_post`](https://developer.wordpress.org/reference/functions/wp_insert_post/).

{{< highlight php >}}
<?php

function modify_post_data( $post_data, $form, $args ) {
    // Override post title 
    $post_data['post_title'] = 'New post title!';

    return $post_data;
}
add_filter( 'af/form/editing/post_data/key=FORM_KEY', 'modify_post_data', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}