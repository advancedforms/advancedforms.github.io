---
title:  "Creating a form"
categories: guides basic
filters: ["af/form/email/recipient","af/form/email/subject","af/form/email/content","af/form/email/attachments","af/form/email/headers"]
menu:
  main:
    parent: guides/basic
    weight: 1
aliases: /guides/basic/creating-a-form/
---

Forms can be created either through the WordPress admin interface or programmatically.

## Using the admin interface

To create a form using the admin interface, do the following:

1. Navigate to the "Forms" page in the admin panel.
2. Click "Add new", give the form a name, and then click "Publish".
3. Create a new ACF field group and add the fields you want to be part of your form.
4. Configure a location rule for your field group. Select "Form" -> "is equal to" -> name of your form.
5. Go back to the form admin page and [configure the features that you need]({{< ref "guides/2-configuring-your-form" >}}).
6. [Display your form]({{< ref "guides/3-displaying-your-form" >}}).

Below you can see an example of a ACF location rule configured for a form named "Test form".

![ACF field group location rule for a form named "Test form"](/images/location-rule.png)

## Programmatically

Registering your forms programmatically is great if you want to integrate Advanced Forms with your theme or plugin. The plugin also has an export feature which will generate the registration code for you. This tools can be found by editing a form in the admin panel and then clicking the "Export" button.

To create a form programmatically the function `af_register_form( $form )` is provided. We recommend using the form export feature to determine the structure of the `$form` array.

Note that the only required attribute is **key** which should be a unique identifier for your form starting with `"form_"`. Setting the title attribute is recommended.

{{< highlight php >}}
<?php

function register_form() {
	$form = array(
	    'title' => 'Form title',
	    'key' => 'form_some_unique_key',
	    'display' => array(
	        'description' => '',
	        'success_message' => '',
	    ),
	    'create_entries' => false,
	    'restrict_entries' => false,
	    'entries_limit' => 0,
	    'entries_restriction_message' => '',
	);
	
	af_register_form( $form );
}
add_action( 'af/register_forms', 'register_form' );

{{< / highlight >}}

It's recommended to register your forms on the `af/register_forms` hook to ensure that both Advanced Forms and ACF are installed and ready.

If you are adding ACF field groups programmatically using the function `acf_add_local_field_group` then you need to set your ACF location rule to match your registered form. Adding your form as a location rule is simple and can be done like this:

{{< highlight php >}}
<?php

$acf_location_rule = array (
    'param' => 'af_form',
    'operator' => '==',
    'value' => YOUR_FORM_KEY,
);

// Use the location rule with acf_add_local_field_group
{{< / highlight >}}
