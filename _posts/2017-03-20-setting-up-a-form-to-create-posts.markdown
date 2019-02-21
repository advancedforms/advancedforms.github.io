---
layout: post
title: "Setting up a form which creates posts"
date: 2017-03-20 21:00:00 +0100
categories: guides advanced
---

> This guide is only applicable if you're using the free version of Advanced Forms. The easiest way to create posts with a form is to use Advanced Forms Pro. It supports creating and editing both posts and users. You can read more about post editing [here]({% post_url 2018-06-21-creating-and-editing-posts %}) and Pro is available from [hookturn.io](https://hookturn.io/downloads/advanced-forms-pro/).

A common use for front-end forms is to create posts with submitted form data. Advanced Forms is perfect for this use case and in this guide we'll cover how to set up a form which generates a new post from its field values.

## Setting up form and fields

The first step is creating a form which we'll later customize. Create a new form through the admin panel and leave all settings to their defaults. Make note of the unique form key shown beneath the title field, the form key will be used to target our form in code later.

Next we need to add fields to our form. Create a new ACF field group and set its location to match our form. Add one field for the post title and another for the post content and also set the location to match posts because we want to use the same fields there. Here's an example of a configured field group:

![Example field configuration]({{ site.url }}/assets/images/post-generating-form-group.png)

## Generating a post after submission

The next step is customizing our form to make it generate a post after submission. For this we'll use the `af/form/submission` action ([documentation]({{ site.url }}/guides/basic/processing-form-submissions/)). Add the following code to your theme's functions.php or a plugin:

{% highlight php startinline %}

<?php

function generate_post_from_form_submission() {
    
	// Get the submitted field values
	$post_title = af_get_field( 'post_title' );
	$post_content = af_get_field( 'post_content' );
    
	// Set up a form using the values for post title and content
	// Replace post_type with whatever type of post you want to generate
	$post_data = array(
		'post_type' => 'post',
		'post_status' => 'publish',
		'post_title' => $post_title,
		'post_content' => $post_content,
	);
	
	// Create post with the previously retrieved values
	$post_id = wp_insert_post( $post_data );
	
	// Save extra_information field directly to custom field on post
	af_save_field( 'extra_information', $post_id );
    
}
add_action( 'af/form/submission/key=YOUR_FORM_KEY', 'generate_post_from_form_submission', 10 );

{% endhighlight %}

The code runs after our form has been submitted, retrieves the field values and generates a form from them. Make sure to replace `YOUR_FORM_KEY` with the key for your specific form.

## Saving custom fields

Because Advanced Forms uses ACF fields it's really easy to save your form values directly to custom fields on a post. A helper function `af_save_field( $field_key_or_name, $object_id )` is provided for this exact purpose. `af_save_field` takes your field key or name as the first parameter and a post ID to save to as the second. In the example above it's used to save the extra_information field to the recently created post.

## Results

Our form should now automatically generate a new post from its field values.

![Form and generated post]({{ site.url }}/assets/images/post-form-results.png)
