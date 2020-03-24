---
layout: post
title: "Decreasing number of scripts and styles"
date: 2019-12-15 00:00:00 +0100
categories: guides advanced
---

Advanced Custom Fields has the unfortunate habit of enqueuing scripts and styles for all field types even when not in use. As a result there are normally scripts and styles included when displaying a form which are not actually in use.

It's possible to manually dequeue unecessary resources with a bit of care. The following snippet can be used to dequeue some things which are included by ACF. The comments explain which field types use which enqueues. If you're actually using one of the field types please remove the corresponding dequeue.

{% highlight php startinline %}
<?php

function form_remove_enqueues() {
  // Stylized select (including user and post fields)
  wp_dequeue_script( 'select2' );
  wp_dequeue_style( 'select2' );

  // Date picker
  wp_dequeue_script( 'jquery-ui-datepicker' );
  wp_dequeue_style( 'acf-datepicker' );

  // Date and time picker
  wp_dequeue_script( 'acf-timepicker' );
  wp_dequeue_style( 'acf-timepicker' );

  // Color picker
  wp_dequeue_script( 'wp-color-picker' );
  wp_dequeue_style( 'wp-color-picker' );
}
add_action( 'af/form/enqueue/key=FORM_KEY', 'form_remove_enqueues' );

{% endhighlight %}

In the future Advanced Forms will be able to automatically dequeue unused resources. Until then it's recommended to use this snippet and manually determine which enqueues are unnecessary.