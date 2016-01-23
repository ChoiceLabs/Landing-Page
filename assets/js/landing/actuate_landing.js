$(document).ready(function () {

  // Landing page content

  // hero section
  var hero_context = {};
  $('.hero-placeholder').html(Handlebars.templates.hero(hero_context));

  // offerings
  var offerings_context = {};
  $('.offerings-placeholder').html(Handlebars.templates.offerings(offerings_context));
  
  // our network
  var our_network_context = {}
  $('.who-we-are-placeholder').html(Handlebars.templates.our_network(our_network_context));

  // How Choice Works
  var how_choice_works_context = {};
  $('.how-choice-works-placeholder').html(Handlebars.templates.how_choice_works(how_choice_works_context));

  // footer
  var navigation_placeholder_context = {}
  $('.navigation-placeholder').html(Handlebars.templates.footer_navigation(navigation_placeholder_context));

});


