
var ref = new Firebase("https://choice-dev.firebaseio.com/");

function createAccount(firstName, lastName, phone, city, email) {
  var prospectsRef = ref.child("prospects");
  checkUniquePhone(phone, prospectsRef, function (isUnique) {
    checkUniqueEmail(email, prospectsRef, function (isUnique) {
      pushToProspects(prospectsRef, firstName, lastName, phone, city, email);
    });
  });
}

function pushToProspects(prospectsRef, firstName, lastName, phone, city, email) {
  var uidRef = prospectsRef.push({
    timeCreated     :   (new Date()).getTime(),
    firstName       :   firstName,
    lastName        :   lastName,
    phone           :   phone,
    city            :   city,
    email           :   email,
    verified        :   false,
    reputation      :   null,
  });
  console.log('user added with UID:', uidRef.key());
}

function checkUniquePhone(phone, ref, callback) {
  ref.orderByChild("phone").equalTo(phone).once("value", function(snapshot) {
    if (!snapshot.exists()) {
      callback();
    } else {
      console.log('phone already exists!');
    }
  });
}

function checkUniqueEmail(email, ref, callback) {
  ref.orderByChild("email").equalTo(email).once("value", function(snapshot) {
    if (!snapshot.exists()) {
      callback();
    } else {
      console.log('email already exists!');
    }
  });
}

