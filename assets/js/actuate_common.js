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
      "Choice's mission is to help workers make more money. Our first product helped candidates optimize their earnings and placed them in on-demand jobs at companies looking to find qualified workers.",

      "After working with a few hundred workers, we realized impactful and sustainable increases in earnings can only be achieved by augmenting skills and unlocking job opportunities.",

      "We are partnering with companies in growing sectors of the economy to help them fill internships and jobs openings. Our learning and development platform assesses and trains workers in skills required to succeed in today's economy. Through personalized educational content, live mentoring from one of our specialists, and hands-on apprenticeships, talented workers can grow faster in their current jobs or transition to new careers",
    ],
    "team" : [
      "Choice was started by a team of ex-Google and startup veterans passionate about leveraging technology to dramatically expand the quality of life of workers in the on-demand economy. Choice trains workers in skilled tasks, setting them on a new career with a higher income.",
      "Our team include engineers and business graduates from the University of California, Berkeley, University of Southern California, Columbia University, Cornell University and the University of Sydney."
    ],
  }

  $(".about-placeholder").html(Handlebars.templates.about(about_context));


});
