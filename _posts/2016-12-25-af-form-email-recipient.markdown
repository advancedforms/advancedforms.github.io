---
layout: post
title:  "af/form/email/recipient"
date:   2016-12-23 00:00:00 +0100
categories: filters emails
---

Filter the recipient of a form email before sending. Should be a comma-separated list of email addresses.

{% highlight php startinline %}
<?php

function filter_email_recipient( $recipient, $email, $form, $fields ) {
	// Add another recipient to email
    $recipient .= ', john@doe.com';
    
    return $recipient;
}
add_filter( 'af/form/email/recipient', 'filter_email_recipient', 10, 4 );
add_filter( 'af/form/email/recipient/id=FORM_ID', 'filter_email_recipient', 10, 4 );
add_filter( 'af/form/email/recipient/key=FORM_KEY', 'filter_email_recipient', 10, 4 );

{% endhighlight %}