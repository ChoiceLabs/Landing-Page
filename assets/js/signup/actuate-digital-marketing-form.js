$(document).ready(function () {


  /* ------
  THE DIGITAL MARKETING SIGNUP FORM PAGE 
  ------- */
  var digital_marketing_hero_context = {
    "slogan" : "Jumpstart your career with our 12-week Digital Marketing Program",
    "description" : "The Choice Digital Marketing Training Program helps you land a paid job in this field. Our program is centered around an apprenticeship, where you can work on resume-building projects and get mentored by one of our top-notch employers -- many of whom used to work at Google.",
  }
  $(".digital-marketing-hero").html(Handlebars.templates.jobs_hero(digital_marketing_hero_context));


  // lead gen single-page form
  var digital_marketing_questions_context =  {
    "heading" : "Sign up to learn more",
    "caption" : "Just a few questions and you're done!",
    "start-dates" : [
      'Jan 4',
      'Jan 18',
    ],
  }
  $(".digital-marketing-signup-form").html(Handlebars.templates.digital_marketing_signup(digital_marketing_questions_context));







  /* ------
  AD-SPECIFIC PAGES
  ------- */


  var munchery_context = {
    "slogan" : "Make up to $17/hour",
    "description" : "We match you with flexible driving jobs so you can work when you want and maximize your income. With Munchery, your miles are reimbursed, you get a 50% employee discount on meals, and you have close delivery zones. Approval is fast, easy, and free.",
  }
  $(".munchery-hero").html(Handlebars.templates.jobs_hero(munchery_context));

  var order_ahead_context = {
    "slogan" : "Make up to $25/hour",
    "description" : "We match you with flexible driving jobs so you can work when you want and maximize your income. With Order Ahead's group orders, you have higher tips and fewer gaps in your shift. Approval is fast, easy, and free.",
  }
  $(".order_ahead-hero").html(Handlebars.templates.jobs_hero(order_ahead_context));

  var eat_club_context = {
    "slogan" : "Make up to $32/hour",
    "description" : "We match you with flexible driving jobs so you can work when you want and maximize your income. With Eat Club, you enjoy a team atmosphere with paid time off, mileage reimbursement, and complimentary lunch during most shifts. Approval is fast, easy, and free.",
  }
  $(".eat_club-hero").html(Handlebars.templates.jobs_hero(eat_club_context));

  var farm_hill_context = {
    "slogan" : "Make up to $18/hour",
    "description" : "We match you with flexible driving jobs so you can work when you want and maximize your income. With Farm Hill, miles are covered and you get tips. Plus, free food with every shift! Approval is fast, easy, and free.",
  }
  $(".farm_hill-hero").html(Handlebars.templates.jobs_hero(farm_hill_context));

  var sprig_context = {
    "slogan" : "Make up to $25/hour",
    "description" : "We match you with flexible driving jobs so you can work when you want and maximize your income. With Sprig, you get free food with every shift and nearby delivery zones to save on gas. Approval is fast, easy, and free."
  }
  $(".sprig-hero").html(Handlebars.templates.jobs_hero(sprig_context));

  var chewse_context = {
    "slogan" : "Make up to $25/hour",
    "description" : "We match you with flexible driving jobs so you can work when you want and maximize your income. With Chewse, you get free meals when you work. Plus, larger orders means larger tips. Approval is fast, easy, and free.",
  }
  $(".chewse-hero").html(Handlebars.templates.jobs_hero(chewse_context));

});
