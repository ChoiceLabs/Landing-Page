$(document).ready(function() {

  $(window).on('scroll', function() {
      var header = $("header");
      if ($(this).scrollTop() < 150) {
        $("header").css("box-shadow", "none");
      }
      else if ($(this).scrollTop() >= 150) {
        $("header").css("box-shadow", "0px 2px 8px 0px rgba(0,0,0, .05)").fadeIn();
      }
  });


});

