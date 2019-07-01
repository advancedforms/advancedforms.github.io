---
layout: post
title:  "af/field/prefill_value"
date:   2018-11-15 00:00:00 +0100
category: forms
---

Prefill field values before displaying form. Can be used for example to provide dynamic default values.

{% highlight php startinline %}
<?php

function prefill_form_field( $value, $field, $form, $args ) {
    return 'Pre-filled value';
}
add_filter( 'af/field/prefill_value', 'prefill_form_field', 10, 4 );
add_filter( 'af/field/prefill_value/name=FIELD_NAME', 'prefill_form_field', 10, 4 );
add_filter( 'af/field/prefill_value/key=FIELD_KEY', 'prefill_form_field', 10, 4 );

{% endhighlight %}
