---
title: af/form/email/after_send
menu:
  main:
    identifier: af-form-email-after_send
    parent: "actions/events"
    weight: 3
aliases: /actions/af-email-after_send/
---

Triggered after an email has been sent.

{{< highlight php >}}
<?php

function after_email_send( $email, $form ) {
    // Do something with email
}
add_action( 'af/form/email/after_send/key=FORM_KEY', 'after_email_send', 10, 2 );

{{< / highlight >}}

{{% modifiers form="1" %}}