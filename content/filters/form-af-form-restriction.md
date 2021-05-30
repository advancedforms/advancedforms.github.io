---
title: af/form/restriction
menu:
  main:
    identifier: af-form-restriction
    parent: "filters/forms"
    weight: 4
aliases: /filters/af-form-restriction/
---

Restrict a form based on custom conditions. Return false to display form normally or return a message which should be displayed instead of the form fields.

The first conditional in the example should always be included in order to not override other restrictions

{{< highlight php >}}
<?php

function restrict_form( $restriction, $form, $args ) {
	// Added in case another restriction already applies
	if ( $restriction ) {
	    return $restriction;
	}
	
	if ( condition_to_hide_form ) {
	    return 'This message will be displayed instead of the form';
	}
	
	return false;
}
add_filter( 'af/form/restriction/key=FORM_KEY', 'restrict_form', 10, 3 );

{{< / highlight >}}

{{% modifiers form="1" %}}