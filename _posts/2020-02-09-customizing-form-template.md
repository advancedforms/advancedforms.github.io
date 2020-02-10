---
layout: post
title:  "Customizing the form template"
date:   2020-02-09 00:00:00 +0100
categories: guides advanced
---

This guide is intended to give an overview of what the markup for a form looks like and what options are available to customize it. The visualization below shows the different HTML elements that make up a form, classes that can be used to style them and hooks that might be useful.

Some customization can be achieved with the [form arguments](/guides/basic/displaying-a-form/), for example changing the submit button text. If you want to programmatically change the arguments then use the [af/form/args](/filters/af-form-args) filter.

<div class="form-template-visual section">
  <div class="section">
    <div class="action">
      <p class="text"><a href="/actions/af-form-before_title">af/form/before_title</a></p>
    </div>
    <div class="section alternate no-children">
      <div class="element-description">af-title</div>
      <p class="text with-description">Title</p>
      <p class="description">Only shown if argument <code>display_title</code> is true</p>
    </div>
    <div class="section alternate no-children">
      <div class="element-description">af-description</div>
      <p class="text with-description">Description</p>
      <p class="description">Only shown if argument <code>display_description</code> is true</p>
    </div>
    <div class="section alternate">
      <div class="element-description">af-fields acf-fields acf-form-fields</div>
      <div class="action">
        <p class="text"><a href="/actions/af-form-before_fields">af/form/before_fields</a></p>
      </div>
      <!--<div class="action">
        <p class="text">af/field/before_field</p>
        <p class="description">Triggered before each field</p>
      </div>-->
      <div class="section">
        <div class="element-description">
          af-field af-field-{NAME} af-field-type-{TYPE}
        </div>
        <div class="filter">
          <p class="text"><a href="/filters/af-form-field_attributes">af/form/field_attributes</a></p>
        </div>
        <div class="section alternate no-children">
          <div class="element-description">af-label</div>
          <p class="text">Label</p>
          <div class="section top-margin alternate no-children">
            <div class="element-description">af-field-instructions</div>
            <p class="text">Instructions</p>
            <p class="description">Can be moved after the field by setting the <code>instruction_placement</code> argument or using the <code>af/field/instructions_placement</code> filter</p>
          </div>
        </div>
        <div class="section alternate no-children">
          <div class="element-description">af-input</div>
          <p class="text">Rendered by ACF</p>
          <p class="description">Refer to the <a href="https://www.advancedcustomfields.com/resources/">ACF documentation</a> for information on how to customize fields. The <a href="/filters/af-field-before_render">af/field/before_render</a> filter can be used to alter the field object before it's rendered by ACF.</p>
        </div>
      </div>
      <!--<div class="action">
        <p class="text">af/field/after_field</p>
        <p class="description">Triggered after each field</p>
      </div>-->
      <div class="action">
        <p class="text"><a href="/actions/af-form-after_fields">af/form/after_fields</a></p>
      </div>
      <div class="section">
        <div class="element-description">af-submit</div>
        <div class="section alternate no-children">
          <div class="element-description">af-submit-button</div>
          <p class="text with-description">Submit button</p>
          <p class="description">Button text can be changed using the <code>submit_text</code> argument</p>
          <div class="filter top-margin">
            <p class="text"><a href="/filters/af-form-button_attributes">af/form/button_attributes</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>