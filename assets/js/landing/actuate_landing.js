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
    "answer1" : [
      "Choice is a recruitment consultancy that matches workers with well-paying, flexible jobs throughout the Bay Area. We look at a worker’s availability, schedule, and interests to connect them with new jobs and make more money.",
      ],

    "question2" : "What kinds of jobs does Choice match me with",
    "answer2" : [
      "Choice helps you find both full time and part time work in a variety of fields, such as deliveries, valet services, and warehouse operations. New jobs are added frequently, and we’re always looking to expand our available positions.",
      ],

    "question3" : "How flexible are Choice jobs",
    "answer3" : [
      "Our selection of jobs are designed to be as accommodating as possible. Some of our jobs are completely on-demand -- work only when you want for as long or as little as you like. Others vary from part time (a few hours a day or a few days per week) to full time.",
      ],

    "question4" : "Would I be a contractor or an employee",
    "answer4" : [
      "We have available positions for both 1099 contractors and W2 employees."
      ],

    "question5" : "Would I need my own car",
    "answer5" : [
      "Many of our jobs do require you to operate your own vehicle. Some of our partners require cars to be of a certain size or year, but others are more inclusive. If you don’t have a car, we can help provide one for you.", 
      "We also have a few positions that do not require vehicles.",
      ],

    "question6" : "What are some of the requirements to be qualified for Choice’s jobs",
    "answer6" : [
      "We require all candidates to speak English (English as a second language is perfectly fine) and be comfortable working with or around people. Having customer service experience helps, but is not required.",
      "A valid California Driver’s License is needed for all driving jobs. For jobs requiring you to operate your vehicle, we would also need vehicle registration information and car insurance documentation.",
      "All of our workers must also undergo a background check.",
    ],

  "question7" : "Where are jobs typically located",
  "answer7" : [
    "Most of our partners are located in San Francisco or along the peninsula, though some have openings elsewhere in the Bay Area. We are looking to expand to New York in the upcoming weeks.",
    ],

  "question8" : "How will I be compensated and how often",
  "answer8" : [
    "Each of our partners has a different compensation policy. More information can be provided during the consultation.",
    ],
  }

  $('.worker-faq-placeholder').html(Handlebars.templates.worker_faq(worker_faq_context));



  var getting_started_context = {};
  $('.getting-started-placeholder').html(Handlebars.templates.getting_started(getting_started_context));
});
