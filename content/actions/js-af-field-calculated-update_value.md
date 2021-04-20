---
title: af/field/calculated/update_value
menu:
  main:
    identifier: af-field-calculated-update_value
    parent: "actions/js"
    weight: 2
aliases: /actions/js-af-field-calculated-update_value/
---

This Javascript action will be triggered when a calculated field has been updated with a new value.

{{< highlight javascript >}}

// This will intercept the rendered calculated field and insert the markup
// into an element with the id `#preview-container`
acf.addAction( 'af/field/calculated/value_updated/name=FIELD_NAME', function( value, field, form ) {
  $('#preview-container').html(value);
});
{{< / highlight >}}

{{% modifiers field="1" %}}