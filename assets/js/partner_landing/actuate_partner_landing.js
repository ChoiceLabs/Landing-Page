$(document).ready(function () {

  // Landing page content

  // hero section
  var hero_context = {};
  $('.hero-placeholder').html(Handlebars.templates.partner_hero(hero_context));

  // signup form (just the form)
  var signup_form_context = {};
  $(".signup-form-placeholder").html(Handlebars.templates.partner_signup_form(signup_form_context));


  // How Choice Works
  var how_choice_works_context = {};
  $('.how-choice-works-placeholder').html(Handlebars.templates.partner_how_choice_works(how_choice_works_context));

  var partner_faq_context = {
    "question1" : "What is Choice?",
    "answer1" : [
      "Choice is a marketplace for on-demand labor, providing merchants and workers an easy way to optimize delivery of flexible work. For merchants, we help you meet customer demand by supplying a workforce through our API or our jobs portal only when you need it. For certain partners we can directly offer pre-qualified leads to help build your base of workers. Please contact our partnerships team at info@getchoice.io for more information"
      ],

    "question2" : "What kinds of drivers do you supply?",
    "answer2" : [
      "We currently supply full-time, part-time, and contract workers to our partners in a variety of fields such as deliveries, valet services, and operations. If you are looking for assistance with supply for another type of work, please contact our partnerships team at  info@getchoice.io",
      ],

    "question3" : "I only need drivers at certain times. How flexible are the hours?",
    "answer3" : [
      "Working with Choice drivers is incredibly flexible. Through our app, we help you match supply and demand. We can increase your driver supply during peak times, giving you a workforce when you need it.",
      ],

    "question4" : "Are your drivers independent contractors or employees?",
    "answer4" : [
      "All drivers are independent contractors. However, some drivers are sourced through third parties and the existing relationship is a mix of both independent contractor and employer/employee relationships depending upon specific Federal and State guidelines."
      ],

    "question5" : "How do you qualify the drivers? Are there background checks?",
    "answer5" : [
      "During the onboarding process and through partners we work with, the drivers are qualified for service through satisfactory ratings of criminal background checks per State Law, motor vehicle, operating insurance, and reference checks. Additionally, all drivers must speak English and must have a valid California Driver’s License.",
      ],

    "question6" : "How do you ensure the performance of your drivers?",
    "answer6" : [
      "We monitor the of location of drivers through our app and will be able to assess their locations to ensure they hit the required delivery times. We also welcome a customer rating system as applicable to your business.",
    ],

  "question7" : "I have specific requirements for my drivers. Can you screen for them?",
  "answer7" : [
    "We can absolutely screen for specific requirements. When we onboard drivers, we pre-qualify them for certain jobs with our partners and only supply you with drivers that fit your specific needs.",
    ],

  "question8" : "What is your pricing?",
  "answer8" : [
    "Please contact our partnerships team at  info@getchoice.io for details about our pricing structure.",
  ]
  }
  $('.partner-faq-placeholder').html(Handlebars.templates.partner_faq(partner_faq_context));



  var navigation_placeholder_context = {}
  $('.navigation-placeholder').html(Handlebars.templates.partner_footer_navigation(navigation_placeholder_context));

});
