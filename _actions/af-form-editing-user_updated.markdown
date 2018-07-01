---
layout: post
title:  "af/form/editing/user_updated"
date:   2018-07-01 00:00:00 +0100
category: pro
---

Triggered after a user has been edited. Not triggered when a user is created.

{% highlight php startinline %}
<?php

function form_user_updated( $user, $form, $args ) {
    // Do something with the updated user.
    // $user is a WP_User object.
}
add_action( 'af/form/editing/user_updated', 'form_user_updated', 10, 3 );
add_action( 'af/form/editing/user_updated/id=FORM_ID', 'form_user_updated', 10, 3 );
add_action( 'af/form/editing/user_updated/key=FORM_KEY', 'form_user_updated', 10, 3 );

{% endhighlight %}