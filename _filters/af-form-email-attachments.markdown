---
layout: post
title:  "af/form/email/attachments"
date:   2016-12-23 00:05:00 +0100
category: emails
---

Filter the attachments of a form email before sending. `$attachments` should be an array of file paths similar to the attachments parameter for `wp_mail`.

{% highlight php startinline %}
<?php

function filter_email_attachments( $attachments, $email, $form, $fields ) {
	// Add a file as an attachment
	$attachments[] = '/path/to/file';
    
    return $attachments;
}
add_filter( 'af/form/email/attachments', 'filter_email_attachments', 10, 4 );
add_filter( 'af/form/email/attachments/id=FORM_ID', 'filter_email_attachments', 10, 4 );
add_filter( 'af/form/email/attachments/key=FORM_KEY', 'filter_email_attachments', 10, 4 );

{% endhighlight %}