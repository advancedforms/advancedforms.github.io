---
layout: post
title:  "af/form/editing/user_created"
date:   2018-07-01 00:00:00 +0100
category: pro
---

Triggered after a user has been created. Not triggered when a user is edited.

{% highlight php startinline %}
<?php

function form_user_created( $user, $form, $args ) {
    // Do something with the created user.
    // $user is a WP_User object.
}
add_action( 'af/form/editing/user_created', 'form_user_created', 10, 3 );
add_action( 'af/form/editing/user_created/id=FORM_ID', 'form_user_created', 10, 3 );
add_action( 'af/form/editing/user_created/key=FORM_KEY', 'form_user_created', 10, 3 );

{% endhighlight %}