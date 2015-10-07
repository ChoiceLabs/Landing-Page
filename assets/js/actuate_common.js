$(document).ready(function () {

  var tag_manager_context = {}
  $('.tag-manager').html(Handlebars.templates.tag_manager(tag_manager_context));


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
  	"email" : "info@getchoice.io",
  	"phone" : "(888) 720-7272"
  }
  $(".simple-contact-placeholder").html(Handlebars.templates.simple_contact(simple_contact_context));


  var thanks_context = {
    "title" : "Next Step: Employment Application",
    "message" : "Thanks for choosing Choice for your free job consultation. To begin, please complete the 5-minute application."
  }
  $(".thanks-placeholder").html(Handlebars.templates.thanks(thanks_context));


  var about_context = {
    "about"  : [
      "Choice is a marketplace for on-demand labor, providing merchants and workers with an easy option to optimize and organize flexible work.",
      "Using a patent pending technology and process (including GPS, user preferences and demand of a worker’s skills), the Choice - developed platform matches workers with flexible job opportunities with an eye toward maximizing earnings. Workers choose jobs that accommodate their schedules and interests, while enabling merchants to dynamically increase their work demands with qualified contractors, during peak times."
    ],
    "team" : [
      "Choice was started by a team of ex-Google and startup veterans, passionate about leveraging technology to dramatically increase the quality of life of workers in the on-demand economy. Choice make it easy to optimize flexible work in order to maximize worker earnings and minimize employer inefficiencies.",
      "Our team include engineers and business graduates from the University of California, Berkeley, University of Southern California, Columbia University, Cornell University and the University of Sydney."
    ],
  }

  $(".about-placeholder").html(Handlebars.templates.about(about_context));


});
