$(document).ready(function() {


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
    $("input[required").each(function() {
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
      var firebaseRef = new Firebase("https://choicesignups.firebaseio.com/homePageWorkers");
      //var firebaseRef = new Firebase("https://driverformsignups.firebaseio.com/landingPageSignups");
      firebaseRef.push(data, function(error) {

        // if firebase fails, display error message
        // note: (if the modal doesn't exist, this will still work)
        if (error) {
          $(".thank-you-message").html("Whoops, there was an error. Please try again or contact us below");
          $(".form-error-message").html("Whoa, we had an error. Please contact us");
        }

        else {

          // show thank you messages
          // $('#thank-you-modal').modal('toggle');  // don't show modal
          $(".form-error-message").css("display", 'none');
          $(".form-success-message").toggle();
          $("#submit-button").attr("disabled", true);

          // redirect to thank you page
          window.location.href = "thanks.html";

        }
      });

    }
  
  });

});



/* -----------
Firebase
----------- */

function formatFirebaseData() {
  data = {}
  data["date"] = Date();
  data["name"] = $("#name-input").val() || "";
  var phone = $("#phone-input").val().replace(/\D/g,'');
  if (phone.length == 10) {
    phone = 1 + phone;
  }
  data["phone"] = phone || "";
  data["email"] = $("#email-input").val() ||"";
  return data;
}

