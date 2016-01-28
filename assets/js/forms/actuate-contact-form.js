$(document).ready(function () {


  // simple contact
  // not active
  var simple_contact_context = {
    "title" : "Contact Us",
    "email" : "info@getchoice.io",
    "phone" : "(888) 720-7272"
  }
  $(".simple-contact-placeholder").html(Handlebars.templates.simple_contact(simple_contact_context));


// contact form
  var contact_form_context = {
    "title" : "Reach out",
    "description" : "We response to every inquiry"
  }
  $(".contact-form-placeholder").html(Handlebars.templates.contact_form(contact_form_context));

});
