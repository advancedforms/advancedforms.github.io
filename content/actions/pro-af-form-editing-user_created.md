---
title: af/form/editing/user_created
menu:
  main:
    identifier: af-form-editing-user_created
    parent: "actions/pro"
    weight: 3
aliases: /actions/af-form-editing-user_created/
---

Triggered after a user has been created. Not triggered when a user is edited.

{{< highlight php >}}
<?php

function form_user_created( $user, $form, $args ) {
    // Do something with the created user.
    // $user is a WP_User object.
}
add_action( 'af/form/editing/user_created/key=FORM_KEY', 'form_user_created', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}