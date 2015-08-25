$(document).ready(function () {

  // Landing page content

  // hero section
  var hero_context = {};
  $('.hero-placeholder').html(Handlebars.templates.hero(hero_context));

  // signup form (entire section)
  var signup_form_section_context = {};
  $(".signup-section-placeholder").html(Handlebars.templates.signup_form_section(signup_form_section_context));


  // signup form (just the form)
  var signup_form_context = {};
  $(".signup-form-placeholder").html(Handlebars.templates.signup_form(signup_form_context));



  // How Choice Works
  var how_choice_works_context = {};
  $('.how-choice-works-placeholder').html(Handlebars.templates.how_choice_works(how_choice_works_context));

  var worker_faq_context = {
    "question1" : "What is Choice",
    "answer1" : [
      "Choice helps you maximize your income and earnings by matching you with well-paying, flexible jobs. Drivers share their availability, schedule and interest and Choice will connect you with the most suitable new jobs for you to choose from, to allow you to make more money and hit your financial goals."
      ],

    "question2" : "What kinds of jobs am I matched with",
    "answer2" : [
      "Choice helps you find full-time, part-time and contract work in a variety of fields, such as deliveries, valet services, and operations. New jobs are added frequently, and we’re always expanding available positions that we advise drivers on.",
      ],

    "question3" : "How flexible are Choice jobs",
    "answer3" : [
      "Our selection of jobs are designed to be as accommodating as possible. Some of our jobs are completely on-demand — work only when you want for as long or as little as you like. Others vary from part-time (a few hours a day or a few days per week) to full-time.",
      ],

    "question4" : "Would I be a contractor or an employee",
    "answer4" : [
      "Both 1099 contracting and W2 employee jobs are available through Choice."
      ],

    "question5" : "Would I need my own car",
    "answer5" : [
      "Many of our jobs do require you to operate your own vehicle. Some of our partners require cars to be of a certain size or year, but others are more inclusive. If you don’t have a car, we can help guide you to obtain one.", 
      "There are also some positions that do not require vehicles.",
      ],

    "question6" : "What are some of the requirements to be qualified for Choice’s jobs",
    "answer6" : [
      "We require all candidates to speak English (English as a second language is perfectly fine) and be comfortable working with and around people. Having customer service experience helps, but is not required.",
      "A valid California Driver’s License is needed for all driving jobs. For jobs requiring you to operate your vehicle, we would also need you to provide vehicle registration information and car insurance documentation.",
      "All of our workers must also undergo a background check.",
    ],

  "question7" : "Where are jobs typically located",
  "answer7" : [
    "Our current jobs are in the San Francisco Bay Area but we are expanding soon.",
    ],
  }

  $('.worker-faq-placeholder').html(Handlebars.templates.worker_faq(worker_faq_context));

});
