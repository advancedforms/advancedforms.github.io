---
layout: post
title:  "af/form/editing/user_data"
date:   2020-06-14 00:00:00 +0100
category: pro
---

Override the user data used when a user is created or updated. User data is the `$userdata` argument passed to [`wp_insert_user`](https://developer.wordpress.org/reference/functions/wp_insert_user/).

{% highlight php startinline %}
<?php

function modify_user_data( $user_data, $form, $args ) {
    // Override user role
    $user_data['user_role'] = 'administrator';

    return $user_data;
}
add_filter( 'af/form/editing/user_data', 'modify_user_data', 10, 3 );
add_filter( 'af/form/editing/user_data/id=FORM_ID', 'modify_user_data', 10, 3 );
add_filter( 'af/form/editing/user_data/key=FORM_KEY', 'modify_user_data', 10, 3 );

{% endhighlight %}