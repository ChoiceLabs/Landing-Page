
var ref = new Firebase("https://choice-dev.firebaseio.com/");

function createAccount(firstName, lastName, phone, city, email) {
  var workersRef = ref.child("prospects");
  var uidRef = workersRef.push({
    timeCreated     :   (new Date()).getTime(),
    firstName       :   firstName,
    lastName        :   lastName,
    phone           :   phone+'',
    city            :   city,
    email           :   email,
    verified        :   false,
    reputation      :   null,
  });
  console.log(uidRef.key());
}

function test() {
  var workersRef = ref.child("test");
  var uidRef = workersRef.push({
    name        :   "hello"
  });
  console.log(uidRef.key());
}
