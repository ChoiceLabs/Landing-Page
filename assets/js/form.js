$(document).ready(function() {

  /* radio and checkbox button functionality */
  $("input[type=checkbox], input[type=radio]").on("click", function(){

    // if input is a radio item
    if ( $(this).attr("type") === "radio" ) {
      $(this).parent().siblings().removeClass("item-selected");
      $(this).parent().addClass("item-selected");
    }

    // if input is a checkbox
    else {
      $(this).parent().toggleClass("item-selected");
    }
  });


  /* submit button functionality */
  $("#submit-button").click(function() {
    number_of_selected_locations = $("#desired-locations").find("button.active").length;
    if (number_of_selected_locations == 0) {
      console.log('hi');
      $("#desired-locations-error").css("display", "auto");
    }
  });




});


