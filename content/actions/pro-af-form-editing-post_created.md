---
title: af/form/editing/post_created
menu:
  main:
    identifier: af-form-editing-post_created
    parent: "actions/pro"
    weight: 1
aliases: /actions/af-form-editing-post_created/
---

Triggered after a post has been created. Not triggered when a post is edited.

{{< highlight php >}}
<?php

function form_post_created( $post, $form, $args ) {
    // Do something with the created post.
    // $post is a WP_Post object.
}
add_action( 'af/form/editing/post_created/key=FORM_KEY', 'form_post_created', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}