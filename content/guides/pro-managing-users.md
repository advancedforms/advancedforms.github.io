---
title: Creating and editing users
menu:
  main:
    parent: guides/pro
    weight: 3
aliases: /pro/editing/creating-and-editing-users/
---

A common use case for front-end forms is allowing visitors to create and edit users. Maybe you want to let users upload a picture gallery to their own profile. Or you want a sign up form where users can provide extra information which is saved as fields on their profiles. Advanced Forms Pro makes user creation and editing super easy to setup.

## Configuring your form

Go to the Wordpress admin and edit the form which you want to configure. Under "Editing", select "Users" and you should be presented with a wide array of settings.

The first setting is for user role which will only be used for new users. The rest specify how to map between form fields and user fields. For the field mappings you can either chose a field to retrieve values from or a custom format. The custom format will only work for new users. If the "Send notification" setting is enabled, created users will receive the standard Wordpress email with a password-reset link.

There is also a setting for "Custom fields" which allows you to map fields from a form to a user.
This will only work if the same ACF field group is used both for the form and user profiles.

![Example form configuration](/images/editing-user-settings.png)

## Registering new users

If you have configured user editing in the form settings, you don't have to do anything more. Once your form is submitted, it will automatically register a new user according to your configuration.

## Editing existing users

To edit an existing user, you need to specify which user you want your form to edit. This is achieved using the `user` argument. You can either specify `current` to edit the currently logged in user or a user ID to edit a specific one.

Edit the currently logged in user: `[advanced_form form="KEY" user="current"]`

Edit user with ID 123: `[advanced_form form="KEY" user="123"]`

## Customizations

### Sign in user after registration

If you want users to be automatically signed in after registering, you can use the following snippet.

{{< highlight php >}}
<?php

function form_sign_in_user( $user ) {
  wp_set_auth_cookie( $user->ID );
}
add_action( 'af/form/editing/user_created/key=FORM_KEY', 'form_sign_in_user', 10, 1 );
{{< / highlight >}}