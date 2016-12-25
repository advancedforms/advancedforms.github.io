---
layout: post
title:  "af/form/args"
date:   2016-12-23 00:01:00 +0100
categories: filters forms
---

Alter the arguments used to display a form. The arguments are either passed to the function call or defined as attributes on a shortcode.

{% highlight php startinline %}

function filter_args( $args, $form ) {
    $args['submit_text'] = 'Send';
    
    return $args;
}
add_filter( 'af/form/args', 'filter_args', 10, 2 );
add_filter( 'af/form/args/id=FORM_ID', 'filter_args', 10, 2 );
add_filter( 'af/form/args/key=FORM_KEY', 'filter_args', 10, 2 );

{% endhighlight %}