---
layout: post
title:  "af/form/email/subject"
date:   2016-12-23 00:01:00 +0100
categories: filters emails
---

Filter the subect line of a form email before sending.

{% highlight php startinline %}
<?php

function filter_email_subject( $subject, $email, $form, $fields ) {
	// Alter the subject line
	$subject = 'New subject';
    
    return $subject;
}
add_filter( 'af/form/email/subject', 'filter_email_subject', 10, 4 );
add_filter( 'af/form/email/subject/id=FORM_ID', 'filter_email_subject', 10, 4 );
add_filter( 'af/form/email/subject/key=FORM_KEY', 'filter_email_subject', 10, 4 );

{% endhighlight %}