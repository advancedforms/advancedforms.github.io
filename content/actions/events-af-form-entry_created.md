---
title: af/form/entry_created
menu:
  main:
    identifier: af-form-entry_created
    parent: "actions/events"
    weight: 3
aliases: /actions/af-form-entry_created/
---

Triggered after an entry has been created

{{< highlight php >}}
<?php

function entry_created( $entry_id, $form ) {
    // Do something with entry
}
add_action( 'af/form/entry_created/key=FORM_KEY', 'entry_created', 10, 2 );

{{< / highlight >}}

{{% modifiers form="1" %}}