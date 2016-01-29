$(document).ready(function () {


// contact form
  var contact_form_context = {
    "title" : "Contact Us",
    "description" : "We response to every inquiry."
  }
  $(".contact-form-placeholder").html(Handlebars.templates.contact_form(contact_form_context));

});
