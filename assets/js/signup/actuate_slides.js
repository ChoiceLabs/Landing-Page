$(document).ready(function () {
  // template context for each slide
  var slide1_content_context = {
    'cities': [
      '',
      'San Fransisco',
      'Brooklyn',
      'Los Angeles',
      'San Diego',
      'Seattle',
      'Washington DC',
      'Other',
    ],
    'checkbox-image': '../images/checkbox.png',
    'checkbox-text': 'The question goes here',
  };

  var slide2_content_context = {};

  var slide3_content_context = {
    'questions': [
      {
        'question-text': 'Are you eligible to work in the U.S.?',
        'toggle-true-text': 'Yes',
        'toggle-false-text': 'No'
      },
      {
        'question-text': 'Are you willing to undergo a background check?',
        'toggle-true-text': 'Yes',
        'toggle-false-text': 'No'
      },
      {
        'question-text': 'Do you have a valid U.S. Driver\'s License?',
        'toggle-true-text': 'Yes',
        'toggle-false-text': 'No'
      }
    ],
  };

  var slide4_content_context = {};

  var single_slide_context = {
    "heading" : "Enter your info",
    "caption" : "We'll reach out and help you find flexible work",
    'cities': [
      'In San Fransisco',
      'Outside San Francisco',
    ],
    "number-of-hours" : [
      'Less than 15 hours',
      'More than 15 hours',
    ],
    "time-to-call" : [
      'Before 9:00AM',
      '9:00AM - 6:00PM',
      'After 6:00PM',
    ],
  }

  $(".jobs-form-single-slide").html(Handlebars.templates.single_slide(single_slide_context));



  var jobs_hero_context = {
    "slogan" : "Drive with Choice",
  }
  $(".jobs-hero").html(Handlebars.templates.jobs_hero(jobs_hero_context));




  // template context for overall slider (renders each slide's content)
  var slides_context = {
    'slides': [
      {
        'heading': 'Basics',
        'caption': 'STEP 1 of 4',
        'content': Handlebars.templates.slide1_content(slide1_content_context),
      },
      {
        'heading': 'Experience',
        'caption': 'STEP 2 of 4',
        'content': Handlebars.templates.slide2_content(slide2_content_context),
      },
      {
        'heading': 'Eligibility',
        'caption': 'STEP 3 of 4',
        'content': Handlebars.templates.slide3_content(slide3_content_context),
      },
      {
        'heading': 'Availability',
        'caption': 'STEP 4 of 4',
        'content': Handlebars.templates.slide4_content(slide4_content_context),
      }
    ]
  };

  var placeholder;
  for (var i=0; i<slides_context.slides.length; i++) {
    // header
    placeholder = '.slide' + (i+1).toString() + '-header-placeholder';
    $(placeholder).html(Handlebars.templates.slide_header(slides_context.slides[i]));
    // content
    placeholder = '.slide' + (i+1).toString() + '-content-placeholder';
    $(placeholder).html(slides_context.slides[i].content);
  }
});
