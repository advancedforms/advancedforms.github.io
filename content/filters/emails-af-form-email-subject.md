---
title: af/form/email/subject
menu:
  main:
    identifier: af-form-email-subject
    parent: "filters/emails"
    weight: 2
aliases: /filters/af-form-email-subject/
---

Filter the subject line of a form email before sending.

{{< highlight php >}}
<?php

function filter_email_subject( $subject, $email, $form, $fields ) {
  // Alter the subject line
  $subject = 'New subject';
    
  return $subject;
}
add_filter( 'af/form/email/subject/key=FORM_KEY', 'filter_email_subject', 10, 4 );

{{< / highlight >}}

{{% modifiers form="1" %}}