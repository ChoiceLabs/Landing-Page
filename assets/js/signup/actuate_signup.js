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
    ]
  };
  $('.slider-placeholder').html(Handlebars.templates.slider(slider_context));
});
