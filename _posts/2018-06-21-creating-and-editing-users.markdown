---
layout: post
title: "Creating and editing users"
date: 2018-06-21 00:01:00 +0100
categories: pro editing
actions: ["af/form/editing/user_created", "af/form/editing/user_updated"]
---

A common use case for front-end forms is allowing visitors to create and edit users. Maybe you want to let users upload a picture gallery to their own profile. Or you want a sign up form where users can provide extra information which is saved as fields on their profiles. Advanced Forms Pro makes user creation and editing super easy to setup.

## Configuring your form

Go to the Wordpress admin and edit the form which you want to configure. Under "Editing", select "Users" and you should be presented with a wide array of settings.

The first setting is for user role which will only be used for new users. The rest specify how to map between form fields and user fields. For the field mappings you can either chose a field to retrieve values from or a custom format. The custom format will only work for new users. If the "Send notification" setting is enabled, created users will receive the standard Wordpress email with a password-reset link.

There is also a setting for "Custom fields" which allows you to map fields from a form to a user. This enables you to create an ACF field group which is shared between a form and users. The selected fields will the automatically be mapped without any code.

![Example form configuration]({{ site.url }}/assets/images/editing-user-settings.png)

## Displaying your form

If editing has been configured for a form you will also need to specify whether to create a new user or edit an existing one. If you want to edit a user you need to pass a user ID with the form argument `user`. For creating a user, the form argument `user` should be set to `new`. The current user can be edited by using `current`. With a shortcode this would look like

`[advanced_form form="form_key" user="new"]`

`[advanced_form form="form_key" user="1"]`

`[advanced_form form="form_key" user="current"]`

And the function call equivalent is

`advanced_form( 'form_key', array( 'user' => 1 ) );`

## Sign in user after registration

If you want users to be automatically signed in after registering you can use the following snippet.

{% highlight php startinline %}
<?php

function form_sign_in_user( $user ) {
  wp_set_auth_cookie( $user->ID );
}
add_action( 'af/form/editing/user_created/key=FORM_KEY', 'form_sign_in_user', 10, 1 );
{% endhighlight %}