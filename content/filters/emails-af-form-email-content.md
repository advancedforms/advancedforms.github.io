---
title: af/form/email/content
menu:
  main:
    identifier: af-form-email-content
    parent: "filters/emails"
    weight: 3
aliases: /filters/af-form-email-content/
---

Filter the contents of a form email before sending.

{{< highlight php >}}
<?php

function filter_email_content( $content, $email, $form, $fields ) {
	// Add some extra text to the end of the content
    $content .= ' Some extra content';
    
    return $content;
}
add_filter( 'af/form/email/content/key=FORM_KEY', 'filter_email_content', 10, 4 );

{{< / highlight >}}

{{% modifiers form="1" %}}