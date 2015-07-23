$(document).ready(function(){
  $('.slider').slick({
    adaptiveHeight: true,
    dots: false,
    arrows: false,
    infinite: false,
    respondTo: 'slider'
  });

  $('#next-button').click(function(){
    $(".slider").slick('slickNext');
  });
});
