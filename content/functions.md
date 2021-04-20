---
title: Functions
menu:
  main:
    weight: 10
    pre: "<i data-feather='code'></i>"

type: page
---

## advanced_form()

Use `advanced_form( $form_key_or_id, $args = array() )` to render a form in code. The first argument should be either the form key or ID. The second argument is optional and specifies the form arguments. You can read more about the available arguments [here](/guides/available-arguments).

## af_get_field()

Use `af_get_field( $field_name_or_key )` to get the value of a submitted field. This function works from all actions and filters and will return the same value as ACF's `get_field()`.

## AF()

`AF()` returns the singleton object which contains information about the current submission, including the form, arguments and fields. This object can be accessed from all actions and filters.

Get the form arguments: `AF()->submission['args']`

Get the ID for a recently created post. `AF()->submission['post']`

Get the ID for a recently registered user: `AF()->submission['user']`