$(document).ready(function () {


  /* ------
  Client quote form
  ------- */
  var join_network_form_context = {
    "heading" : "Join our network of digital marketers",
    "description" : "Fill out the form and we'll reach out shortly.",
  }
  $(".join-network-form-placeholder").html(Handlebars.templates.join_network(join_network_form_context));



});
