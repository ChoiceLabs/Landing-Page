$(document).ready(function () {


  var header_context = {
    'logo_file': 'assets/images/choice_logo2.png'
  };
  $('.header-placeholder').html(Handlebars.templates.header(header_context));



  var footer_context = {
    'copyright':'&copy; Choice 2015 All rights reserved.'
  };
  $('.footer-placeholder').html(Handlebars.templates.footer(footer_context));



  var terms_context = {
  	'terms' : "this is where the terms should go"
  }
  $('.terms-placeholder').html(Handlebars.templates.terms(terms_context));



  var privacy_context = {
  	"privacy" : "this is where the privacy text should go"
  }
  $(".privacy-placeholder").html(Handlebars.templates.privacy(privacy_context));



  var simple_contact_context = {
  	"email" : "chris@getchoice.io",
  	"phone" : "123-456-7890"
  }
  $(".simple-contact-placeholder").html(Handlebars.templates.simple_contact(simple_contact_context));

});
