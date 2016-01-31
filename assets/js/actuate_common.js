$(document).ready(function () {

  // Tag manager
  var tag_manager_context = {};
  $('.tag-manager').html(Handlebars.templates.tag_manager(tag_manager_context));

  // header
  var header_context = {
    "logo-src" : "assets/images/choice-logo.png"
  };
  $('.header-placeholder').html(Handlebars.templates.header(header_context));

  // footer
  var footer_context = {
    'copyright':'&copy; Choice 2015 All rights reserved.'
  };
  $('.footer-placeholder').html(Handlebars.templates.footer(footer_context));

  // terms
  var terms_context = {}
  $('.terms-placeholder').html(Handlebars.templates.terms(terms_context));

  // privacy
  var privacy_context = {}
  $(".privacy-placeholder").html(Handlebars.templates.privacy(privacy_context));
  

  var thanks_context = {
    "title" : "Next Step: Employment Application",
    "message" : "Thanks for choosing Choice for your free job consultation. To begin, please complete the 5-minute application."
  }
  $(".thanks-placeholder").html(Handlebars.templates.thanks(thanks_context));


  var about_context = {

    "about"  : [
      "Hiring is tough, and it's especially hard online. Concerns whether the potential hire has the communication ability, talent, and work ethic make choosing a freelancer a risk of not just your time and money, but also your reputation within your company.",
      "At the same time, getting recognized as a skilled, dedicated professional online is increasingly difficult in a web full of noise where quality and results are hard to evaluate.",
      "At Choice, we are adding confidence and trust back into the hiring process. We do this by thoroughly vetting every marketer we work with and carefully match you with the right professional based on your needs. Each professional has years of experience at top companies and can hit the ground running."
    ],
    "team" : [
      "Choice was started by a team of ex-Google and startup veterans passionate about leveraging technology to better match talent with opportunity. We are dedicated to reducing the friction of matching employers looking to hire with professionals looking for work."
    ],
  }

  $(".about-placeholder").html(Handlebars.templates.about(about_context));

  digital_marketing_training_program_context = {}
  $(".digital-marketing-training-program-placeholder").html(Handlebars.templates.digital_marketing_training_program(digital_marketing_training_program_context));



});