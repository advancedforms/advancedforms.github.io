---
layout: post
title: "Creating and editing posts"
date: 2018-06-21 00:00:00 +0100
categories: pro editing
actions: ["af/form/editing/post_created", "af/form/editing/post_updated"]
---

A common use case for front-end forms is allowing users to create and edit posts. Maybe you want to let users submit post drafts which administrators can review and publish. Or have a post type for support issues which customers can submit and edit. Advanced Forms Pro makes it dead-simple to make forms which create and edit posts.

## Configuring your form

Go to the Wordpress admin and edit the form which you want to configure. Under "Editing", select "Posts" and you should be presented with a wide array of settings.

The "Post type" settings specifies which post type created post will be assigned and won't be used when editing existing posts. For the post title and content it's possible to either select a field from which to retrieve a value or use a more complex, custom format. A custom format won't work with post editing and should only be used for creating new posts.

There is also a setting for "Custom fields" which allows you to map fields from a form to a post. This enables you to create an ACF field group which is shared between a form and a post type. The selected fields will the automatically be mapped without any code.

![Example form configuration]({{ site.url }}/assets/images/editing-post-settings.png)

## Displaying your form

If editing has been configured for a form you will also need to specify whether to create a new post or edit an existing one. If you want to edit a post you need to pass a post ID with the form argument `post`. For creating a post, the form argument `post` should be set to `new`. The current post can be edited by using `current`. With a shortcode this would look like.

`[advanced_form form="form_key" post="new"]`

`[advanced_form form="form_key" post="1"]`

`[advanced_form form="form_key" post="current"]`

And the function call equivalent is

`advanced_form( 'form_key', array( 'post' => 1 ) );`

## Creating posts as draft

By default posts will be created with a status of published. This might not always be desirable if the posts first needs to be reviewed. The following code snippet can be used to create posts as drafts by default, remember to replace `FORM_KEY` with your actual form key.

{% highlight php startinline %}
<?php

function create_post_as_draft() {
    // Set post status to draft
    $post_data['post_status'] = 'draft';

    return $post_data;
}
add_filter( 'af/form/editing/post_data/key=FORM_KEY', 'create_post_as_draft');

{% endhighlight %}
