---
title: af/form/page_changed
menu:
  main:
    identifier: af-form-page_changed
    parent: "actions/js"
    weight: 1
aliases: /actions/js-af-form-page_changed/
---

This Javascript action will be triggered when the current page is changed in a multi-page form.

{{< highlight javascript >}}

acf.addAction( 'af/form/page_changed', function( newPage, previousPage, form ) {
    console.log("Changed page from %d to %d", previousPage, newPage);
});

{{< / highlight >}}

## Scroll to top of form when page changes

{{< highlight javascript >}}

acf.addAction( 'af/form/page_changed', function( newPage, previousPage, form ) {
    $( 'html, body' ).animate({
        scrollTop: form.$el.offset().top,
    }, 1000);
});

{{< / highlight >}}