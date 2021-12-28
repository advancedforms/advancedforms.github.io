---
title: af/form/zapier/request
menu:
  main:
    identifier: af-form-zapier-request
    parent: "filters/pro"
    weight: 5
---

Change the Zapier API request before it's sent. 

{{< highlight php >}}
<?php

function modify_zapier_request( $request, $form, $args ) {
  // Combine two fields and send to Zapier with key "full_name"
  $full_name = af_get_field( 'first_name' ) . ' ' . af_get_field( 'last_name' );
  $request['body']['full_name'] = $full_name;

  return $request;
}
add_filter( 'af/form/zapier/request/key=FORM_KEY', 'modify_zapier_request', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}