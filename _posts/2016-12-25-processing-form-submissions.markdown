---
layout: post
title:  "Processing form submissions"
date:   2016-12-23 00:02:00 +0100
categories: guides basic
---

After a form has been submitted the field values need to be processed. The plugin comes with the ability to automatically save form data to entries and to send custom emails. Emails and entries can be configured in the form settings but are not enabled by default.

If you need to process the form data further the handy action hook af/form/submission should be used. The hook can be used in three different ways.

{% highlight php startinline %}

add_action( 'af/form/submission', 'your_callback_function' );
add_action( 'af/form/submission/id=FORM_ID', 'your_callback_function' );
add_action( 'af/form/submission/key=FORM_KEY', 'your_callback_function' );

{% endhighlight %}

The first hook is invoked for all form submissions while the two last ones allow you to specify a form using either the form post ID or form key. It's recommended to use the form key.

The action passes three different parameters:

- `$form` – The form object
- `$fields` – Array of the submitted fields and their processed values
- `$args` – Array of arguments used to display the form

To simplify the retrieval of field values a helper function af_get_field is provided which takes the field name/key to find and the array of fields. The function returns a processed value in the same format as ACF's `get_field` would.

The following is an example of processing a form submission and extracting the value entered into the field with name "email".

{% highlight php startinline %}

function handle_form_submission( $form, $fields, $args ) {
    
    $email = af_get_field( 'email', $fields );
    
}
add_action( 'af/form/submission', 'handle_form_submission' );

{% endhighlight %}