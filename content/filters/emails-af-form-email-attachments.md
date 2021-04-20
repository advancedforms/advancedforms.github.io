---
title: af/form/email/attachments
menu:
  main:
    identifier: af-form-email-attachments
    parent: "filters/emails"
    weight: 5
aliases: /filters/af-form-email-attachments/
---

Filter the attachments of a form email before sending. `$attachments` should be an array of file paths similar to the attachments parameter for `wp_mail`.

{{< highlight php >}}
<?php

function filter_email_attachments( $attachments, $email, $form, $fields ) {
  // Add a file as an attachment
  $attachments[] = '/path/to/file';

  return $attachments;
}
add_filter( 'af/form/email/attachments/key=FORM_KEY', 'filter_email_attachments', 10, 4 );

{{< / highlight >}}

{{% modifiers form="1" %}}