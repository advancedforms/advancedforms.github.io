---
title: af/form/email/recipients
menu:
  main:
    identifier: af-form-email-recipients
    parent: "filters/emails"
    weight: 1
aliases: /filters/af-form-email-recipient/
---

Filter the recipient of a form email before sending. Should be a comma-separated list of email addresses.

This filter can also be used to stop an email by returning `false`. In combination with `af_get_field( 'FIELD_NAME' )` this can be used to conditionally send emails based on submitted values.

{{< highlight php >}}
<?php

function filter_email_recipient( $recipient, $email, $form, $fields ) {
	// Add another recipient to email
    $recipient .= ', john@doe.com';
    
    return $recipient;
}
add_filter( 'af/form/email/recipient/key=FORM_KEY', 'filter_email_recipient', 10, 4 );

{{< / highlight >}}

{{% modifiers form="1" %}}