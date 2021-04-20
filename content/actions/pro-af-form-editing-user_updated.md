---
title: af/form/editing/user_updated
menu:
  main:
    identifier: af-form-editing-user_updated
    parent: "actions/pro"
    weight: 4
aliases: /actions/af-form-editing-user_updated/
---

Triggered after a user has been edited. Not triggered when a user is created.

{{< highlight php >}}
<?php

function form_user_updated( $user, $form, $args ) {
    // Do something with the updated user.
    // $user is a WP_User object.
}
add_action( 'af/form/editing/user_updated/key=FORM_KEY', 'form_user_updated', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}