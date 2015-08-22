$(document).ready(function () {


  var header_context = {
    'logo_file': 'assets/images/choice_logo2.png'
  };
  $('.header-placeholder').html(Handlebars.templates.header(header_context));



  var footer_context = {
    'copyright':'&copy; Choice 2015 All rights reserved.'
  };
  $('.footer-placeholder').html(Handlebars.templates.footer(footer_context));



  var terms_context = {}
  $('.terms-placeholder').html(Handlebars.templates.terms(terms_context));



  var privacy_context = {}
  $(".privacy-placeholder").html(Handlebars.templates.privacy(privacy_context));



  var simple_contact_context = {
    "title" : "Contact Us",
  	"email" : "chris@getchoice.io",
  	"phone" : "(888) 720-7272"
  }
  $(".simple-contact-placeholder").html(Handlebars.templates.simple_contact(simple_contact_context));


  var thanks_context = {
    "title" : "Thanks for signing up!",
    "message" : "A member of our team will contact you shortly to schedule your free consultation. In the mean time, if you have any questions, please feel free to contact us.",
    "email" : "chris@getchoice.io",
    "phone" : "(888) 720-7272"
  }
  $(".thanks-placeholder").html(Handlebars.templates.thanks(thanks_context));


});
