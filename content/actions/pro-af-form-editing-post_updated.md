---
title: af/form/editing/post_updated
menu:
  main:
    identifier: af-form-editing-post_updated
    parent: "actions/pro"
    weight: 2
aliases: /actions/af-form-editing-post_updated/
---

Triggered after a post has been edited. Not triggered when a post is created.

{{< highlight php >}}
<?php

function form_post_updated( $post, $form, $args ) {
    // Do something with the edited post.
    // $post is a WP_Post object.
}
add_action( 'af/form/editing/post_updated/key=FORM_KEY', 'form_post_updated', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}