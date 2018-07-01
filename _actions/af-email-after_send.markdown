---
layout: post
title:  "af/email/after_send"
date:   2018-07-01 00:00:00 +0100
category: events
---

Triggered after an email has been sent.

{% highlight php startinline %}
<?php

function after_email_send( $email, $form ) {
    // Do something with email
}
add_action( 'af/email/after_send', 'after_email_send', 10, 2 );
add_action( 'af/email/after_send/id=FORM_ID', 'after_email_send', 10, 2 );
add_action( 'af/email/after_send/key=FORM_KEY', 'after_email_send', 10, 2 );

{% endhighlight %}