---
title: Creating and editing posts
menu:
  main:
    parent: guides/pro
    weight: 2
aliases: /pro/editing/creating-and-editing-posts/
---

A common use case for front-end forms is allowing users to create and edit posts. Maybe you want to let users submit post drafts which administrators can review and publish. Or have a post type for support issues which customers can submit and edit. Advanced Forms Pro makes it dead-simple to make forms which create and edit posts.

## Configuring your form

Go to the Wordpress admin and edit the form which you want to configure. Under "Editing", select "Posts" and you should be presented with a wide array of settings.

The "Post type" setting specifies which post type new posts will have. When editing a post instead the post type setting will be ignored. For the post title and content it's possible to either select a field from which to retrieve a value or use a more complex, custom format. A custom format won't work with post editing and should only be used for creating new posts.

There is also a setting for "Custom fields" which allows you to map fields from a form to a post. This enables you to create an ACF field group which is shared between a form and a post type. The selected fields will the automatically be mapped without any code.

![Example form configuration](/images/editing-post-settings.png)

## Creating new posts

If you have configured post editing in the form settings, you don't have to do anything more. Once your form is submitted, it will automatically create a new post according to your configuration.

## Editing existing posts

To edit an existing post, you need to specify which post you want your form to edit. This is achieved using the `post` argument which supports three different values:

- `current` to edit the currently displayed post

- `param` to edit based on a post ID passed in as a `post` query parameter, for example `https://example.com/page?post=123`. When using this, it's also recommended to restrict the form so that users can only edit their own posts. This can be enabled under "Restrictions" in the form settings.

- A specific post ID

For example, to edit a post with ID 123: `[advanced_form form="KEY" post="123"]` or to edit the current post: `[advanced_form form="KEY" post="current"]`.

## Customizations

### Setting the post thumbnail

The post thumbnail (also called featured image) can be set from a field using the `af/form/editing/post_created` action. Make sure your image field is configured to return an attachment ID.

{{< highlight php >}}
<?php

function form_created_post_thumbnail( $post ) {
  $image_id = af_get_field( 'IMAGE_FIELD_NAME' );
  set_post_thumbnail( $post->ID, $image_id );
}
add_action( 'af/form/editing/post_created/key=FORM_KEY', 'form_created_post_thumbnail', 10, 1 );

{{< / highlight >}}

### Redirecting to post after creation

To redirect to a post after creation, it's recommended to use `af/form/submission` with a high priority instead of `af/form/editing/post_created`. Otherwise there is a risk of stopping emails from being sent and integrations from working. The created post ID can be accessed by using `AF()->submission['post']`.

{{< highlight php >}}
<?php

function form_redirect_to_post() {
  $post_id = AF()->submission['post'];
  $url = get_permalink( $post_id );

  wp_redirect( $url );
  exit;
}
add_action( 'af/form/submission/key=FORM_KEY', 'form_redirect_to_post', 20 );

{{< / highlight >}}