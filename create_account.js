
var ref = new Firebase("https://choice-dev.firebaseio.com/");

function createAccount(firstName, lastName, phone, city, email, password) {
  ref.createUser({
    email    : email,
    password : password
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
      //TODO properly handle error
    } else {
      // save user to firebase workers table //TODO could possibly use transactions
      var workersRef = ref.child("workers");
      workersRef.child(userData.uid).set({
        timeCreated     :   (new Date()).getTime(),
        signupComplete  :   true,
        firstName       :   firstName,
        lastName        :   lastName,
        email           :   email,
        phone           :   phone,
        city            :   city,
        reputation      :   null,
      });
    }
  });
}
