---
title: af/form/editing/user_data
menu:
  main:
    identifier: af-form-editing-user_data
    parent: "filters/pro"
    weight: 3
aliases: /filters/af-form-editing-user-data/
---

Override the user data used when a user is created or updated. User data is the `$userdata` argument passed to [`wp_insert_user`](https://developer.wordpress.org/reference/functions/wp_insert_user/).

{{< highlight php >}}
<?php

function modify_user_data( $user_data, $form, $args ) {
    // Override user role
    $user_data['user_role'] = 'administrator';

    return $user_data;
}
add_filter( 'af/form/editing/user_data/key=FORM_KEY', 'modify_user_data', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}