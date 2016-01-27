$(document).ready(function () {

  // Landing page content

  // hero section
  var hero_context = {};
  $('.hero-placeholder').html(Handlebars.templates.hero(hero_context));

  // why choice
  var why_choice_context = {};
  $('.why-choice-placeholder').html(Handlebars.templates.why_choice(why_choice_context));

  // services
  var services_context = {};
  $('.services-placeholder').html(Handlebars.templates.services(services_context));
  
  // our network
  var our_network_context = {}
  $('.our-network-placeholder').html(Handlebars.templates.our_network(our_network_context));

  // How Choice Works
  var how_choice_works_context = {};
  $('.how-choice-works-placeholder').html(Handlebars.templates.how_choice_works(how_choice_works_context));

  // 2nd hero
  var getting_started_footer_context = {}
  $('.get-started-placeholder').html(Handlebars.templates.getting_started_footer(getting_started_footer_context));

});


