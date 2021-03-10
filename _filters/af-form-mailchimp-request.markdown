---
layout: post
title:  "af/form/mailchimp/request"
date:   2021-03-11 00:00:00 +0100
category: pro
---

Change the Mailchimp API request before it's sent. The request is for the ["Add member to list" endpoint](https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/).

{% highlight php startinline %}
<?php

function modify_mailchimp_request( $request, $form, $args ) {
    // The request body is JSON encoded so we must first decode it
    $body = json_decode( $request['body'], true );

    // Set custom merge tag named "NICKNAME" from "nickname" field 
    $body['merge_fields']['NICKNAME'] = af_get_field( 'nickname' );

    // Re-encode the altered body as JSON
    $request['body'] = json_encode( $body, JSON_FORCE_OBJECT );

    return $request;
}
add_filter( 'af/form/mailchimp/request', 'modify_mailchimp_request', 10, 3 );
add_filter( 'af/form/mailchimp/request/id=FORM_ID', 'modify_mailchimp_request', 10, 3 );
add_filter( 'af/form/mailchimp/request/key=FORM_KEY', 'modify_mailchimp_request', 10, 3 );

{% endhighlight %}