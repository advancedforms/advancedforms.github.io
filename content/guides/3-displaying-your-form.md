---
layout: post
title:  "Displaying your form"
categories: guides basic
filters: ["af/form/args", "af/form/before_render"]
actions: ["af/form/before_title", "af/form/before_fields", "af/form/after_fields", "af/field/attributes", "af/form/hidden_fields"]
menu:
  main:
    parent: guides/basic
    weight: 3
aliases:
 - /guides/basic/creating-a-form/
 - /guides/basic/displaying-a-form/
---

Once a form has been added and fields have been assigned you can display the form either using a shortcode or with a function call. There are a [variety of available arguments](#) that can be used to tweak how your form appears and behaves.

## Using shortcode

To display a form using a shortcode use the structure below. The form key can be found right below the title on the form edit page.

{{< highlight php >}}
[advanced_form form="FORM_KEY"]
{{< / highlight >}}

## Using function call

A form can also be displayed using a function call which specifies the form key or ID. The function call is shown below.

{{< highlight php >}}
advanced_form( $form_id_or_key, $args );
{{< / highlight >}}

The `$args` parameter allows you to tweak how the form is displayed. Please read `Display arguments` to learn which arguments are available.