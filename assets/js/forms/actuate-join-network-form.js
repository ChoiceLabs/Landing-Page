$(document).ready(function () {


  /* ------
  Client quote form
  ------- */
  var join_network_form_context = {
    "heading" : "Join us, we pay.",
    "description" : "We will reject you if you aren't good enough because we are elitist.",
  }
  $(".join-network-form-placeholder").html(Handlebars.templates.join_network(join_network_form_context));



});
