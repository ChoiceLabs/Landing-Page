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

  var data = saveDataToFirebase();


  var firebaseRef = new Firebase("https://driverformsignups.firebaseio.com/workerSignups");
  firebaseRef.push(data);


}


function saveDataToFirebase() {
  data = {}
  data["firstName"] = $("#first-name-input").val() || "";
  data["lastName"] = $("#last-name-input").val() || "";
  data["phone"] = $("#phone-input").val() || "";
  data["email"] = $("#email-input").val() ||"";

  var desiredLocations =  $("input[name=desired-location]:checked").map(function() {
    return $(this).val();
  }).get();
  if (desiredLocations.length != 0) {
    data["desiredLocations"] = desiredLocations;
  }
  
  var hoursPerWeek = $("input[name=available-hours]:checked").val();
  if (hoursPerWeek != null) {
    data["hoursPerWeek"] = hoursPerWeek;
  }


  var hasLicense = $("input[name=valid-license]:checked").val();
  if (hasLicense != null) {
    data["hasLicense"] = hasLicense;
  }


  var backgroundCheck = $("input[name=background-check]:checked").val();
  if (backgroundCheck != null) {
    data["canDoBackgroundCheck"] = backgroundCheck;
  }

  var contactTimes = $("input[name=time-to-call]:checked").map(function() {
    return $(this).val();
  }).get();
  if (contactTimes != null) {
    data["contactTimes"] = contactTimes
  }

  return data;

  

}
