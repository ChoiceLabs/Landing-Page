$(document).ready(function () {


  /* ------
  Client quote form
  ------- */
  var client_form_context = {
    "heading" : "Tell us about your marketing needs",
    "description" : "We'll reach out to match you with the right marketer."
  }
  $(".client-form-placeholder").html(Handlebars.templates.new_client_form(client_form_context));



});
