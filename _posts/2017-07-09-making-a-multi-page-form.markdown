---
layout: post
title:  "Configuring a multi-page form"
date:   2017-07-09 00:00:00 +0100
categories: guides basic
filters: ["af/form/previous_button_atts", "af/form/next_button_atts"]
---

From version 1.5 and onwards Advanced Forms supports multi-page forms. Setting them up is similar to configuring tabs in a regular ACF field group. To create a paged form simply insert "Page" fields to divide your form. The "Page" field has settings for numbering and button text as well. Only the settings on the first page field will be used.

After setting up the page fields your form should now be split over multiple forms. Users can navigate the form by clicking the previous and next buttons as well as the progression indicator at the top. When navigating forward each page will be validated and any error messages will be displayed before progressing.

![Multi-page form]({{ site.url }}/assets/images/paged-form.png)