---
title: af/form/email/headers
menu:
  main:
    identifier: af-form-email-headers
    parent: "filters/emails"
    weight: 4
aliases: /filters/af-form-email-headers/
---

Filter the headers of a form email before sending. `$headers` should be an array of email headers.

{{< highlight php >}}
<?php

function filter_email_headers( $headers, $email, $form, $fields ) {
	// Set the reply-to address
	$headers[] = 'Reply-To: john@doe.com';

	return $headers;
}
add_filter( 'af/form/email/headers/key=FORM_KEY', 'filter_email_headers', 10, 4 );

{{< / highlight >}}

{{% modifiers form="1" %}}