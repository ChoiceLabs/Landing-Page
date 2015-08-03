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

    // validate fields and display error messages
    isValidated = validateForm();

    // if the data is validated,
    // format data for firebase
    // additional user data grabbed here
    if (isValidated) {
      var data = formatFirebaseData();

      // send data to firebase
      // if successful, display thank you modal
      // if not successful, display error
      var firebaseRef = new Firebase("https://driverformsignups.firebaseio.com/workerSignups");
      firebaseRef.push(data, function(error) {
        if (error) {
          alert("there was an error" + error);
        }
        else {
          $('#thank-you-modal').modal('toggle');
        }
      });
    }

  
  });



  $('input[name=phone]').keyup(function()
{
    this.value = this.value.replace('^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$');
});
});



function validateForm() {
  var isValidated = false
  if ($("#first-name-input").val() == "") {
    //alert('Please write your first name');
  }
  else if ($("#last-name-input").val() == "") {
    //alert('Please write your first name');
  }
  else if ($("#phone-input").val() == "") {
    //alert("Please input a phone number");
  }
  else if ($("#email-input").val() == "") {
    //alert("please provide an email address");
  }
  else {
    isValidated = true;
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
