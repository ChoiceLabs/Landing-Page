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
    getData();
    
    /*
    number_of_selected_locations = $("#desired-locations").find("button.active").length;
    if (number_of_selected_locations == 0) {
      console.log('hi');
      $("#desired-locations-error").css("display", "auto");
    }
    */
  });

});


function getData() {
  var questions = $("form").children().hasClass("question");

  /* 
  Easiest Solution: Grab every element in form automatically, put in array, and dump it to firebase
  Pros: can work for any number and type of fields
  Cons: everything is now stored as an array :(
    */
  var form_data = $('form').serializeArray();
  form_data_obj = {}
  jQuery.each(form_data, function() {    
    var name = $(this).attr("name");
    var value = $(this).attr("value");;
    if (name in form_data_obj) {
      form_data_obj[name].push(value);
    }
    else {
      form_data_obj[name] = [value];
    }
  });

  validateFields();


  var firebaseRef = new Firebase("https://driverformsignups.firebaseio.com/workerSignups");
  firebaseRef.push({"firstName" : 12});

  /*

  firebaseRef.set({
    first : "",
    last : "",
    phone : "",
    email : "",
    desired_locations : "",
    hours_a_week : "",
    valid_license : "",
    background_check : "",
    contact_time : ""
  })
*/


}


function validateFields() {
  data = {}
  $("#first-name-input").val();
  $("#last-name-input").val();
  $("#phone-input").val();
  $("#email-input").val();

  var desired_locations = [];
  var x = $("input[name=desired-location]:checked").map(function() {
    //console.log($(this));
    //desired_locations.push($(this).val());
    return $(this).val();
  }).get();
  console.log(x);
  $("input[name=available-hours]:checked").val();

}
