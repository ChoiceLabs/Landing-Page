$(document).ready(function () {


  var jobs_hero_context = {
    "slogan" : "Grab your keys and make more money",
    "description" : "We offer free consultations to match you with well-paying, flexible driving jobs",
  }
  $(".jobs-hero").html(Handlebars.templates.jobs_hero(jobs_hero_context));


 

  var single_slide_context = {
    "heading" : "Enter your info",
    "caption" : "Just a few questions and you're done!",
    'cities': [
      'SF',
      'Outside SF',
    ],
    "number-of-hours" : [
      '1-15 hours',
      '15+ hours',
    ],
    "time-to-call" : [
      'Before 9AM',
      '9AM - Noon',
      'Noon - 6PM',
      'After 6PM',
    ],
  }

  $(".jobs-form-single-slide").html(Handlebars.templates.single_slide(single_slide_context));

});
