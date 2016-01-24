$(document).ready(function() {


  /* Header Scroll Handler */
  $(window).on('scroll', function() {
      var header = $("header");
      if ($(this).scrollTop() < 150) {
        $("header").css("box-shadow", "none");
      }
      else if ($(this).scrollTop() >= 150) {
        $("header").css("box-shadow", "0px 2px 8px 0px rgba(0,0,0, .05)").fadeIn();
      }
  });

  /* Slick Slider */
  $(document).ready(function(){
  $('#profiles-slider').slick({
    autoplay : true,
    autoplaySpeed : 5000,
    swipeToSlide : true,
    dots : true,
  });
});


});

