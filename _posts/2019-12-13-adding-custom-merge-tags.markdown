---
layout: post
title: "Adding custom merge tags"
date: 2019-12-13 00:00:00 +0100
categories: guides advanced
---

Advanced Forms has a variety of built-in merge tags which can be used in success messages, emails, and calculated fields. Examples include `{field:NAME}` and `{entry_id}`. Sometimes it's desirable to add custom merge tags which we'll cover in this guide.

To add merge tags we use the `af/merge_tags/resolve` filter. This filter will be invoked for every merge tag, that is all occurences of two braces (`{}`) with content in between. Because the filter is invoked for every merge tag we first need to check that we're targeting the right tag with `'hello' != $tag`.

The following snippet adds a new merge tag `{hello}` which will be replaced with the text "Hello" followed by the submitted value for a field named `first_name`.

{% highlight php startinline %}
<?php

function add_hello_merge_tag( $output, $tag ) {
  if ( 'hello' != $tag ) {
    return $output;
  }

  return "Hello " . af_get_field( 'first_name' );
}
add_filter( 'af/merge_tags/resolve', 'add_hello_merge_tag', 10, 2 );

{% endhighlight %}

## Adding merge tags to the UI

When editing success messages and emails there is a dropdown which can be used to insert merge tags without having to remember their syntax. Using the `af/merge_tags/custom` it's possible to add custom merge tags to this dropdown. Here's an example of adding the previously created `{hello}` tag:

{% highlight php startinline %}
<?php

function register_hello_merge_tag( $tags, $form ) {
  $tags[] = array(
    'value' => 'hello',
    'label' => "Hello!",
  );

  return $tags;
}
add_filter( 'af/merge_tags/custom', 'register_hello_merge_tag', 10, 2 );

{% endhighlight %}