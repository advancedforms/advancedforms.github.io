---
title: af/form/email/before_send
menu:
  main:
    identifier: af-form-email-before_send
    parent: "actions/events"
    weight: 2
aliases: /actions/af-email-before_send/
---

Triggered before an email is sent.

{{< highlight php >}}
<?php

function before_email_send( $email, $form ) {
    // Do something with email
}
add_action( 'af/email/before_send/key=FORM_KEY', 'before_email_send', 10, 2 );

{{< / highlight >}}

{{% modifiers form="1" %}}