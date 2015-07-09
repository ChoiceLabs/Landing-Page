
var ref = new Firebase("https://choice-dev.firebaseio.com/");

function createAccount(firstName, lastName, phone, city, email) {
  var prospectsRef = ref.child("prospects");
  var uidRef = prospectsRef.push({
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

function testRead() {
  var prospectsRef = ref.child("prospects");
  prospectsRef.orderByChild('phone').equalTo('0443378745').on("value", function(snapshot) {
    console.log(snapshot.key());
  });
}
