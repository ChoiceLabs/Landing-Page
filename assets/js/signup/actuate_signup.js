$(document).ready(function () {
  var slider_context = {
    'cities': [
      {
        key: '',
        name: ''
      },
      {
        key: 'San Fransisco',
        name: 'San Fransisco'
      },
      {
        key: 'Las Angeles',
        name: 'Las Angeles'
      },
      {
        key: 'Seattle',
        name: 'Seattle'
      },
      {
        key: 'Washington DC',
        name: 'Washington DC'
      },
      {
        key: 'San Diego',
        name: 'San Diego'
      },
      {
        key: 'Brooklyn',
        name: 'Brooklyn'
      },
      {
        key: 'Other',
        name: 'Other'
      },
    ],

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

    'checkbox-image': '../images/checkbox.png',
    'checkbox-text': 'The question goes here'
  };

  Handlebars.registerPartial(
    'slide-header',

    '<div class="slide__header">' +
      '<h2 class="slide__header__title">{{heading}}</h2>' +
      '<p class="slide__header__caption">5 of 3</p>' +
    '</div>'
  );

  $('.slider-placeholder').html(Handlebars.templates.slider(slider_context));
});
