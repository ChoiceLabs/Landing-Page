$(document).ready(function () {

  // insert header
  var header_context = {};
  $('.header-placeholder').html(Handlebars.templates.header());

  // insert footer
  var footer_context = {};
  $('.footer-placeholder').html(Handlebars.templates.footer());

});
