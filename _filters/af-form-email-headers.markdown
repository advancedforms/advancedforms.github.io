---
layout: post
title:  "af/form/email/headers"
date:   2016-12-23 00:04:00 +0100
category: emails
---

Filter the headers of a form email before sending. `$headers` should be an array of email headers.

{% highlight php startinline %}
<?php

function filter_email_headers( $headers, $email, $form, $fields ) {
	// Set the reply-to address
	$headers[] = 'Reply-To: john@doe.com';
  
  eturn $headers;
}
add_filter( 'af/form/email/headers', 'filter_email_headers', 10, 4 );
add_filter( 'af/form/email/headers/id=FORM_ID', 'filter_email_headers', 10, 4 );
add_filter( 'af/form/email/headers/key=FORM_KEY', 'filter_email_headers', 10, 4 );

{% endhighlight %}