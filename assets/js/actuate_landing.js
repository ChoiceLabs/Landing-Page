$(document).ready(function () {
  // Landing page content
  var hero_context = {};
  $('.hero-placeholder').html(Handlebars.templates.hero(hero_context));

  var how_it_works_context = {};
  $('.how-it-works-placeholder').html(Handlebars.templates.how_it_works(how_it_works_context));

  var why_choice_context = {};
  $('.why-choice-placeholder').html(Handlebars.templates.why_choice(why_choice_context));
});
