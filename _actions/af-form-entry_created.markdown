---
layout: post
title:  "af/form/entry_created"
date:   2018-07-01 00:00:00 +0100
category: events
---

Triggered after an entry has been created

{% highlight php startinline %}
<?php

function entry_created( $entry_id, $form ) {
    // Do something with entry
}
add_action( 'af/form/entry_created', 'entry_created', 10, 2 );
add_action( 'af/form/entry_created/id=FORM_ID', 'entry_created', 10, 2 );
add_action( 'af/form/entry_created/key=FORM_KEY', 'entry_created', 10, 2 );

{% endhighlight %}