$(document).ready(function () {


  /* ------
  Client quote form
  ------- */
  var client_form_context = {
    "slogan" : "Tell us about your project",
    "description" : "We evaluate each project and match you with the best people in our network.",
  }
  $(".client-form-placeholder").html(Handlebars.templates.client_quote(client_form_context));



});
