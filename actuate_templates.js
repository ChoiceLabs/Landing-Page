$(document).ready(function () {

  // insert header
  var header_context = {};
  $('.template-header').html(Handlebars.templates.header());

  // insert footer
  var footer_context = {};
  $('.template-footer').html(Handlebars.templates.footer());

});
