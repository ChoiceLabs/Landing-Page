$(document).ready(function () {
  var slides_context = {
    'slides': [
      {
        'heading': 'Basics',
        'caption': 'STEP 1 of 4',
      },
      {
        'heading': 'Experience',
        'caption': 'STEP 2 of 4',
      },
      {
        'heading': 'Eligibility',
        'caption': 'STEP 3 of 4',
      },
      {
        'heading': 'Availability',
        'caption': 'STEP 4 of 4',
      }
    ]
  };

  for (var i=0; i<slides_context.slides.length; i++) {
    var placeholder = '.slide' + (i+1).toString() + '-header-placeholder';
    $(placeholder).html(Handlebars.templates.slide_header(slides_context.slides[i]));
  }
});
