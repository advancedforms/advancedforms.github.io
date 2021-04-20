---
title: Using calculated fields
menu:
  main:
    parent: guides/pro
    weight: 4
aliases: /pro/configuration/using-calculated-fields/
---

Calculated fields are updated live when a form is filled out and can contain any content you'd like to. They are perfect for providing previews or to show calculated values before submission.

## Adding a calculated field

Calculated fields are just regular ACF fields. Go to your field group and add a new field of type "Calculated". Next you need to configure what value this field should display which is done in the form settings. Head on over to your form settings and switch to the "Calculated" tab.

Under the "Calculated" tab you will find a WYSIWYG editor for each calculated field. You can add regular content and mix in field values which will be updated in real-time, similar to how field values can be included in email notifications and success messages. Mathematical arithmetic, such as addition, is not currently supported through the admin interface but can easily be achieved with a little bit of code. Read the next section for an example on how this can be done.

## Customizing the calculated value

Calculated fields are not limited to static content with mixed in fields but also support using code to define more complex calculations, for example arithmetic. Use the `af/field/calculate_value` filter to provide your own calculation logic.

Below is an example of a calculated field which display the sum of two other fields in the form called `number_field_1` and `number_field_2`. Replace `FIELD_NAME` in the example below with the name of your calculated field.

{{< highlight php >}}
<?php

function calculated_field_value() {
  // Get field values (these will be updated in real-time)
  $val1 = af_get_field( 'number_field_1' );
  $val2 = af_get_field( 'number_field_2' );

  // Calculate the sum of the current field values
  $sum = $val1 + $val2;

  // Display the sum in the calculated field
  return 'Sum: ' . $sum;
}
add_filter( 'af/field/calculate_value/name=FIELD_NAME', 'calculated_field_value', 10, 0 );

{{< / highlight >}}

## Extending calculated fields with Javascript

Using the ACF Javascript API the behaviour of calculated fields can be customized. The `af/field/calculated/value_updated` action is triggered when a calculated field is updated and can be used when you want use the calculated value for something more than just the field.

{{< highlight js >}}

// Intercept the rendered calculated field and insert the markup
// into an element with the id `#preview-container`
acf.addAction( 'af/field/calculated/value_updated/name=FIELD_NAME', function( value, field, form ) {
  $('#preview-container').html(value);
});

{{< / highlight >}}

If you want to cause an update of a calculated field you can use trigger the `af/field/calculated/update_value`. This is convenient for example when you want to update a calculated field when the user interacts with something outside the form.

{{< highlight js >}}
// This is the simplest format available and will trigger the update for 
// all calculated fields on the page
acf.doAction( 'af/field/calculated/update_value' );

// You may target specific fields by field name
acf.doAction( 'af/field/calculated/update_value/name=FIELD_NAME' );

// You may also target specific fields by field key
acf.doAction( 'af/field/calculated/update_value/key=FIELD_KEY' );
{{< / highlight >}}