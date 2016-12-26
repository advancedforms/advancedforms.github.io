---
layout: post
title:  "af/form/email/content"
date:   2016-12-23 00:02:00 +0100
categories: filters emails
---

Filter the contents of a form email before sending.

{% highlight php startinline %}
<?php

function filter_email_content( $content, $email, $form, $fields ) {
	// Add some extra text to the end of the content
    $content .= ' Some extra content';
    
    return $content;
}
add_filter( 'af/form/email/content', 'filter_email_content', 10, 4 );
add_filter( 'af/form/email/content/id=FORM_ID', 'filter_email_content', 10, 4 );
add_filter( 'af/form/email/content/key=FORM_KEY', 'filter_email_content', 10, 4 );

{% endhighlight %}