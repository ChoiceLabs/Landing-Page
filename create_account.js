
var ref = new Firebase("https://choice-dev.firebaseio.com/");

function createAccount(firstName, lastName, phone, city, email) {
  var workersRef = ref.child("workers");
  workersRef.child(userData.uid).set({
    timeCreated     :   (new Date()).getTime(),
    signupComplete  :   true,
    firstName       :   firstName,
    lastName        :   lastName,
    phone           :   phone,
    city            :   city,
    email           :   email,
    reputation      :   null,
  });
}
