---
layout: post
title:  "af/field/calculated/update_value"
date:   2019-11-12 00:00:00 +0100
category: javascript
---

This Javascript action will be triggered when a calculated field has been updated with a new value.

{% highlight js startinline %}
// This will intercept the rendered calculated field and insert the markup
// into an element with the id `#preview-container`
acf.addAction( 'af/field/calculated/value_updated', function( value, field, form ) {
  $('#preview-container').html(value);
});

// You may intercept the return values of specific fields by field name
acf.addAction( 'af/field/calculated/value_updated/name=FIELD_NAME', function( value, field, form ) {
  // …
});

// You may also intercept the return values of specific fields by field key
acf.addAction( 'af/field/calculated/value_updated/key=FIELD_KEY', function( value, field, form ) {
  // …
});

{% endhighlight %}