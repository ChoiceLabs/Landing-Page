$(document).ready(function() {



  /* ----------
  Validation
  ------------ */


  // real-time validation styling on visited inputs fields
  $("input[type=text], input[type=tel], input[type=email], textarea[required]").focus(function() {
    $(this).addClass('visited');
  });

  // shows error message on input fields
  // only shows if the following critera are met:
    // the field has been visited
    // the field is not focused (error messages are annoying)
    // the field is invalid (duh)

  $('input[required], textarea[required]').blur(function() {

    if (this.checkValidity() == false) {;
      showElementErrorMessage(this);
    }
    else {
      hideElementErrorMessage(this);
    }
  });

  $('input[required], textarea[required]').keyup(function(event) {
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
    $("input[required], textarea[required]").each(function() {
      if (this.checkValidity() == false) {
        $(this).addClass("visited");
        showElementErrorMessage(this);
      }
    });

    // show general validation error
    $(".form-error-message").css('display', 'block');
  }




  /* -----------
  Submitting Form
  ----------- */

  $("#submit-button").click(function(evt) {

    var isValid = true;
    // show errors if form is not valid
    if ($("#join-network-form")[0].checkValidity() === false) {      
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
      //var firebaseRef = new Firebase("https://driverformsignups.firebaseio.com/workerSignups");
      var firebaseRef = new Firebase("https://choicesignups.firebaseio.com/new_digital_marketers");
      firebaseRef.push(data, function(error) {

        // if not successful, display error in thank you modal
        if (error) {
          $(".thank-you-message").html("Whoops, there was an error. Please try again or contact us below");
          $(".form-error-message").html("We had an error. Please contact us");
        }
        else {
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
      
      // clear fields
      /*
      $("#driver-form")[0].reset();
      $("input.visited").removeClass("visited");
      $(".item-selected").removeClass("item-selected");
      */
    }
  
  });

});



/* ----------
QUERY PARAMETERS
------------*/

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

// last parameter sometimes has an appended trailing slash
function stripTrailingSlash(str) {
  if (str != null) {
    if(str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }
    return str;
  }
}



/* -----------
Firebase
----------- */

function formatFirebaseData() {
  data = {}

  data["name"] = $("#name-input").val() || "";
  data["date"] = Date();
  data["email"] = $("#email-input").val() || "";
  data["resume"] = $("#resume-input").val() || "";
  data["details"] = $("#details-input").val() || "";
  
  return data;

}


