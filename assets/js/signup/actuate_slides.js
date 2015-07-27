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
      'San Fransisco',
      'East Bay',
      'North Bay',
      'Penninsula',
      'South Bay',
    ],
    "time-to-call" : [
    ],
    "birth_year" : ["", 1997, 1996, 1995, 1994, 1993, 1992, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960, 1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951, 1950, 1949, 1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941, 1940, 1939, 1938, 1937, 1938, 1935, 1934, 1933, 1932, 1931, 1930],
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
