$(document).ready(function() {



  /* ---------
  radio and checkbox button functionality 
  -----------*/
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

  /* ----------
  validation
  ------------ */


  // real-time validation styling on visited inputs
  $("input[type=text], input[type=tel], input[type=email]").focus(function() {
    $(this).addClass('visited');
  });

  // removes error message when valid
  $('input[required]').keydown(function(event) {
    var error_message_id = this.name + "-error";
    if (this.checkValidity() == false) {;
      showElementErrorMessage(this);
    }
    else {
      hideElementErrorMessage(this);
    }

  });



  /* SUBMIT FORM */
  $("#submit-button").click(function(evt) {

    var isValid = true;
    // show errors if form is not valid
    if ($("#driver-form")[0].checkValidity() === false) {      
      showValidationErrors();
      evt.preventDefault();
      isValid = false;
    }

    // if the data is validated,
    // format data for firebase
    // additional user data grabbed here
    if (isValid) {

      var data = formatFirebaseData();

      // send data to firebase
      var firebaseRef = new Firebase("https://driverformsignups.firebaseio.com/workerSignups");
      firebaseRef.push(data, function(error) {

        // if not successful, display error in thank you modal
        if (error) {
          $(".thank-you-message").html("Whoops, there was an error. Please try again or contact us below");
        }
      });

      // show thank you message
      $('#thank-you-modal').modal('toggle');
    }
  
  });

});


function showValidationErrors() {

  $("input[required").each(function() {
    if (this.checkValidity() == false) {
      $(this).addClass("visited");
      showElementErrorMessage(this);
    }
  });
}

function showElementErrorMessage(elem) {
  var elem_error_message_id = "#" + elem.name + "-error";
  $(elem_error_message_id).css("display", "block");
}

function hideElementErrorMessage(elem) {
 var elem_error_message_id = "#" + elem.name + "-error";
  $(elem_error_message_id).css("display", "none"); 
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


