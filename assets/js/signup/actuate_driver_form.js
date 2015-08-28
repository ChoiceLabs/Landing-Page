$(document).ready(function () {


  // lead gen hero content
  var jobs_hero_context = {
    "slogan" : "Make up to $35/hour",
    "description" : "We match you with flexible driving jobs so you can work when you want and maximize your income. Work for Uber, Lyft, Instacart, and more when you can make the most money. No more downtime and wasting gas. Approval is fast, easy, and free.",
  }
  $(".jobs-hero").html(Handlebars.templates.jobs_hero(jobs_hero_context));


  // lead gen single-page form
  var single_slide_context = {
    "heading" : "Sign up to drive",
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
