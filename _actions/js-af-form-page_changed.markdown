---
layout: post
title:  "af/form/page_changed"
date:   2020-03-24 00:00:00 +0100
category: javascript
---

This Javascript action will be triggered when the current page is changed in a multi-page form.

{% highlight js startinline %}
acf.addAction( 'af/form/page_changed', function( newPage, previousPage, form ) {
    console.log("Changed page from %d to %d", previousPage, newPage);
});
{% endhighlight %}

## Scroll to top of form when page changes

{% highlight js startinline %}
acf.addAction( 'af/form/page_changed', function( newPage, previousPage, form ) {
    $( 'html, body' ).animate({
        scrollTop: form.$el.offset().top,
    }, 1000);
});
{% endhighlight %}