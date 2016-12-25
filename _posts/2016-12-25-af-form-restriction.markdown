---
layout: post
title:  "af/form/restriction"
date:   2016-12-23 00:03:00 +0100
categories: filters forms
---

Restrict a form based on custom conditions. Return false to display form normally or return a message which should be displayed instead of the form fields.

The first conditional in the example should always be included in order to not override other restrictions.

{% highlight php startinline %}
<?php

function restrict_form( $restriction, $form, $args ) {
	
	// Added in case another restriction already applies
	if ( $restriction ) {
	    return $restriction;
	}
	
	if ( condition_to_hide_form ) {
	    return 'This message will be displayed instead of the form';
	}
	
	return false;
}
add_filter( 'af/form/restriction', 'restrict_form' );
add_filter( 'af/form/restriction/id=FORM_ID', 'restrict_form' );
add_filter( 'af/form/restriction/key=FORM_KEY', 'restrict_form' );

{% endhighlight %}