---
layout: post
title:  "af/form/email/styles"
date:   2020-09-15 00:02:00 +0100
category: emails
---

Alter the CSS used for email notifications.

{% highlight php startinline %}
<?php

function filter_email_styles( $styles, $email, $form ) {
    // Remove all default styles
    return '';
}
add_filter( 'af/form/email/styles', 'filter_email_styles', 10, 3 );
add_filter( 'af/form/email/styles/id=FORM_ID', 'filter_email_styles', 10, 3 );
add_filter( 'af/form/email/styles/key=FORM_KEY', 'filter_email_styles', 10, 3 );

{% endhighlight %}