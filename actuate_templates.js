$(document).ready(function () {
  var header_context = {};
  $('.header-placeholder').html(Handlebars.templates.header(header_context));

  var footer_context = {};
  $('.footer-placeholder').html(Handlebars.templates.footer(footer_context));
});
