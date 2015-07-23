$(document).ready(function () {
  var header_context = {
    'logo_file': 'assets/images/choice_logo.png'
  };
  $('.header-placeholder').html(Handlebars.templates.header(header_context));

  var footer_context = {
    'copyright':'&copy; Choice 2015 All rights reserved.'
  };
  $('.footer-placeholder').html(Handlebars.templates.footer(footer_context));
});
