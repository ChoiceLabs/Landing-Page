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
  Validation
  ------------ */


  // real-time validation styling on visited inputs fields
  $("input[type=text], input[type=tel], input[type=email]").focus(function() {
    $(this).addClass('visited');
  });

  // shows error message on input fields
  // only shows if the following critera are met:
    // the field has been visited
    // the field is not focused (error messages are annoying)
    // the field is invalid (duh)

  $('input[required]').blur(function() {

    if (this.checkValidity() == false) {;
      showElementErrorMessage(this);
    }
    else {
      hideElementErrorMessage(this);
    }
  });

  $('input[required]').keyup(function(event) {
    if (this.checkValidity() == true) {;
      hideElementErrorMessage(this);
    }
  });



  function showElementErrorMessage(elem) {
    var elem_error_message_id = "#" + elem.name + "-error";
    $(elem_error_message_id).css("display", "block");
  }

  function hideElementErrorMessage(elem) {
   var elem_error_message_id = "#" + elem.name + "-error";
    $(elem_error_message_id).css("display", "none"); 
  }

  function showValidationErrors() {

    // show validation errors on each field
    $("input[required]").each(function() {
      if (this.checkValidity() == false) {
        $(this).addClass("visited");
        showElementErrorMessage(this);
      }
    });

    // show general validation error
    $(".form-error-message").css('display', 'block');
  }

  // code specific to terms agreement
  $("input[name=terms]").click(function() {
    if ($(this).prop("checked")) {
      $("#terms-error").css("display", "none");
      $("#terms-link").css("color", "white");
    }
    else {
      $("#terms-error").css("display", "block")
       $("#terms-link").css("color", "#333");
    }

  });





  /* -----------
  Submitting Form
  ----------- */

  $("#submit-button").click(function(evt) {

    var isValid = true;
    // show errors if form is not valid
    if ($("#driver-form")[0].checkValidity() === false) {      
      showValidationErrors();
      evt.preventDefault();
      isValid = false;
    }

    // if the data is validated,
    if (isValid) {

      // format data for firebase
      // additional user data grabbed here
      var data = formatFirebaseData();

      // send data to firebase
      var firebaseRef = new Firebase("https://driverformsignups.firebaseio.com/workerSignups");
      firebaseRef.push(data, function(error) {

        // if not successful, display error in thank you modal
        if (error) {
          $(".thank-you-message").html("Whoops, there was an error. Please try again or contact us below");
          $(".form-error-message").html("Whoa, we had an error. Please contact us");
        }
        else {
<<<<<<< HEAD
          // show thank you messages
          //$('#thank-you-modal').modal('toggle');
          $(".form-error-message").css("display", 'none');
          $(".form-success-message").toggle();

          // disable submit button
          $("#submit-button").attr("disabled", true);
          $("#submit-button").css("background-color", "#ccc");
          window.location.href = "thanks.html";
        }
      });

=======

          // show thank you messages
          // $('#thank-you-modal').modal('toggle');  // don't show modal
          $(".form-error-message").css("display", 'none');
          $(".form-success-message").toggle();
          $("#submit-button").attr("disabled", true);

          // redirect to thank you page
          window.location.href = "thanks.html";
        }
      });

>>>>>>> neilsharma
      // clear fields
      /*
      $("#driver-form")[0].reset();
      $("input.visited").removeClass("visited");
      $(".item-selected").removeClass("item-selected");
      */
    }
  
  });

});



/* -----------
Firebase
----------- */

function formatFirebaseData() {
  data = {}
  data["name"] = $("#name-input").val() || "";
  //data["firstName"] = $("#first-name-input").val() || "";
  //data["lastName"] = $("#last-name-input").val() || "";
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


