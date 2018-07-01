---
layout: post
title:  "af/email/before_send"
date:   2018-07-01 00:00:00 +0100
category: events
---

Triggered before an email is sent.

{% highlight php startinline %}
<?php

function before_email_send( $email, $form ) {
    // Do something with email
}
add_action( 'af/email/before_send', 'before_email_send', 10, 2 );
add_action( 'af/email/before_send/id=FORM_ID', 'before_email_send', 10, 2 );
add_action( 'af/email/before_send/key=FORM_KEY', 'before_email_send', 10, 2 );

{% endhighlight %}