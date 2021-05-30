---
title: af/form/success_message
menu:
  main:
    identifier: af-form-success_message
    parent: "filters/forms"
    weight: 2
---

Alter the success message before it's shown. Submitted field values can be retrieved using `af_get_field( 'FIELD_NAME' )`.

{{< highlight php >}}
<?php

function change_success_message( $success_message, $form, $args ) {
    return 'New success message';
}
add_filter( 'af/form/success_message/key=FORM_KEY', 'change_success_message', 10, 3 );

{{< / highlight >}}

{{% modifiers form=1 %}}