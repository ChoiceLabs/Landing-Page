$(document).ready(function () {
  // Landing page content
  var hero_context = {};
  $('.hero-placeholder').html(Handlebars.templates.hero(hero_context));

  var how_it_works_context = {};
  $('.how-it-works-placeholder').html(Handlebars.templates.how_it_works(how_it_works_context));

  var why_choice_context = {};
  $('.why-choice-placeholder').html(Handlebars.templates.why_choice(why_choice_context));

  var worker_faq_context = {
  	"question1" : "What is Choice",
  	"answer1" : "Choice is a recruitment consultancy that matches workers with well-paying, flexible jobs throughout the Bay Area. We look at a worker’s availability, schedule, and interests to connect them with new jobs and make more money.",

  	"question2" : "What kinds of jobs do Choice match me with",
  	"answer2" : "Choice helps you find both full time and part time work in a variety of fields, such as deliveries, valet services, and warehouse operations. New jobs are added frequently, and we’re always looking to expand our available positions.",

  	"question3" : "How flexible are Choice jobs",
  	"answer3" : "Our selection of jobs are designed to be as accommodating as possible. Some of our jobs are completely on-demand -- work only when you want for as long or as little as you like. Others vary from part time (a few hours a day or a few days per week) to full time.,"
  }
  $('.worker-faq-placeholder').html(Handlebars.templates.worker_faq(worker_faq_context));
});
