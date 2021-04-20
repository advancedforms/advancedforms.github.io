---
title: af/form/email/styles
menu:
  main:
    identifier: af-form-email-styles
    parent: "filters/emails"
    weight: 6
aliases: /filters/af-form-email-styles/
---

Alter the CSS used for email notifications.

{{< highlight php >}}
<?php

function filter_email_styles( $styles, $email, $form ) {
  // Remove all default styles
  return '';
}
add_filter( 'af/form/email/styles/key=FORM_KEY', 'filter_email_styles', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}