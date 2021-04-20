---
title: af/form/mailchimp/request
menu:
  main:
    identifier: af-form-mailchimp-request
    parent: "filters/pro"
    weight: 4
aliases: /filters/af-form-mailchimp-request/
---

Change the Mailchimp API request before it's sent. The request is for the ["Add member to list" endpoint](https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/).

{{< highlight php >}}
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
add_filter( 'af/form/mailchimp/request/key=FORM_KEY', 'modify_mailchimp_request', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}