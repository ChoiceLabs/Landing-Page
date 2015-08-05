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






  /* SUBMIT FORM */
  $("#submit-button").click(function() {

    // validate fields and display error messages
    isValidated = validateForm();
    console.log("isValidated: " + isValidated);

    // if the data is validated,
    // format data for firebase
    // additional user data grabbed here
    if (isValidated) {
      var data = formatFirebaseData();
      console.log(data);

      // send data to firebase
      // if successful, display thank you modal
      // if not successful, display error
      var firebaseRef = new Firebase("https://driverformsignups.firebaseio.com/workerSignups");
      firebaseRef.push(data, function(error) {
        if (error) {
          $(".thank-you-message").html("Whoops, there was an error. Please try again or contact us below");
        }
      });

      // show thank you message
      $('#thank-you-modal').modal('toggle');
    }
  
  });

});




function validateForm() {
  var isValidated = false;
  
  // checks for errors
  // create custom error message for each field
  if ($("#first-name-input").val() == "") {
    console.log('first name error')
  }
  else if ($("#phone-input").val() == "") {
    console.log('phone error');
  }
  else if ($("#email-input").val() == "") {
    console.log('email-error');
  }
  else {
    isValidated = true;
  }

  // display general error message
  if (!isValidated) {
    $("#form-error-message").css("display", "block");
  }

  return isValidated;
}


function formatFirebaseData() {
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


