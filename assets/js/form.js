function submit() {
    // validate input
    var first_name = $("#first-name-input").val();
    var last_name = $("#last-name-input").val();
    var phone = $("#phone-number-input").val();
    var city = $("#city-input").val();
    var email = $("#email-input").val();
    var validationMessage = $("#form-status");

    if (first_name === "") {
        validationMessage.text("Please provide a valid first name");
        validationMessage.attr("style", "color: Red");
    } else if (last_name === "") {
        validationMessage.text("Please provide a valid last name");
        validationMessage.attr("style", "color: Red");
    } else if (email === "") {
        validationMessage.text("Please provide a valid email address");
        validationMessage.attr("style", "color: Red");
    } else if (phone === "") {
        validationMessage.text("Please provide a valid phone number");
        validationMessage.attr("style", "color: Red");
    } else if (city === "") {
        validationMessage.text("Please provide a valid city");
        validationMessage.attr("style", "color: Red");
    } else {
        // create in Firebase and callback error/success
        createAccount(first_name, last_name, phone, city, email);
    }
}

// if Firebase throws a validation error, callback here
function validationError(error) {
    var validationMessage = $("#form-status");
    validationMessage.text("Account could not be created: " + error);
    validationMessage.attr("style", "color: Red");
}

// if Firebase successfully adds account
function validationSuccess() {
    var validationMessage = $("#form-status");
    validationMessage.text("Account created");
    validationMessage.attr("style", "color: #15925E");
    //TODO redirect to thank you page
}
