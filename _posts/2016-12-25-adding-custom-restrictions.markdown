---
layout: post
title:  "Adding custom restrictions"
date:   2016-12-23 00:01:00 +0100
categories: guides advanced
---

Advanced Forms comes with the option to hide a form unless certain conditions are meet. Included is the ability to limit the number of entries created by a form, to restrict a form from non-logged in users, and to set a schedule during which the form should be available.

Custom restrictions may be applied using the filter `af/form/restriction` which is documented [here]({{ site.url }}/filters/forms/af-form-restriction). The following is an example of limiting a form to only administrators.

{% highlight php startinline %}
<?php

function restrict_form( $restriction, $form, $args ) {
    
    if ( $restriction ) {
        return $restriction;
    }
    
    if ( ! current_user_can( 'manage_options' ) ) {
        return 'You need to be an administrator.';
    }
    
    return false;
    
}
add_filter( 'af/form/restriction', 'restrict_form' );

{% endhighlight %}