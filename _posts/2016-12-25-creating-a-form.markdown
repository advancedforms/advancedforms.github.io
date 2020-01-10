---
layout: post
title:  "Creating a form"
date:   2016-12-23 00:00:00 +0100
categories: guides basic
filters: ["af/form/email/recipient","af/form/email/subject","af/form/email/content","af/form/email/attachments","af/form/email/headers"]
---

Forms can be created either using the UI provided or programmatically.

## Using the admin interface

To create a form using the UI navigate to the "Forms" admin page and create a new form. Use the form settings to set up entries, emails and display options. At the bottom you will find a list of all fields which are connected to your form.

![Editing a form using the admin interface]({{ site.url }}/assets/images/form-interface.png)

The fields connected to a form are set up through Advanced Custom Fields allowing you to use the full range of field types offered by ACF. To connect a field group to your form set its location rule to match. This can be done in the ACF field group UI by adding a location rule and setting it to "Form" -> "is equal to" -> your form title.

## Programmatically

Registering your forms programmatically is great if you want to integrate Advanced Forms with your theme or plugin. The plugin also has an export feature which will generate the registration code for you. This tools can be found by editing a form in the admin panel and then clicking the "Export" button.

To create a form programmatically the function `af_register_form( $form )` is provided. The $form parameter should be an array matching the structure in the following example.

Note that the only required attribute is **key** which should be a unique identifier for your form starting with `"form_"`. Setting the title attribute is recommended.

{% highlight php %}
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

{% endhighlight %}

It's recommended to register your forms on the `af/register_forms` hook to ensure that both Advanced Forms and ACF are installed and ready.

If you are adding ACF field groups programmatically using the function `acf_add_local_field_group` then you need to set your ACF location rule to match your registered form. Adding your form as a location rule is simple and can be done like this:

{% highlight php startinline %}
<?php

$acf_location_rule = array (
    'param' => 'af_form',
    'operator' => '==',
    'value' => YOUR_FORM_KEY,
);

// Use the location rule with acf_add_local_field_group

{% endhighlight %}
