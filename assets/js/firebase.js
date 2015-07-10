var ref = new Firebase("https://choice-dev.firebaseio.com/");

function createAccount(firstName, lastName, phone, city, email) {
  var prospectsRef = ref.child("prospects");
  uniqueAccount(prospectsRef, phone, email, function (isUnique) {
    if (isUnique) {
      pushToProspects(prospectsRef, firstName, lastName, phone, city, email);
    } else {
      console.log('account not created.');
    }
  });
}

function uniqueAccount(prospectsRef, phone, email, completionCallback) {
  var uniquePhone;
  var uniqueEmail;
  var phoneRequestComplete = false;
  var emailRequestComplete = false;

  fetchProspectWithPhone(phone, prospectsRef, function (prospectsRef) {
    phoneRequestComplete = true;
    if (prospectsRef !== null) {
      uniquePhone = false;
      console.log("phone already exists!");
    } else {
      uniquePhone = true;
    }
    if (emailRequestComplete) {
      completionCallback(uniqueEmail && uniquePhone);
    }
  });

  fetchProspectWithEmail(email, prospectsRef, function (prospectsRef) {
    emailRequestComplete = true;
    if (prospectsRef !== null) {
      uniqueEmail = false;
      console.log("email already exists!");
    } else {
      uniqueEmail = true;
    }
    if (phoneRequestComplete) {
      completionCallback(uniqueEmail && uniquePhone);
    }
  });
}

function pushToProspects(prospectsRef, firstName, lastName, phone, city, email) {
  var newUser = {
    timeCreated     :   (new Date()).getTime(),
    firstName       :   firstName,
    lastName        :   lastName,
    phone           :   phone,
    city            :   city,
    email           :   email,
    verified        :   false,
    reputation      :   null,
  };

  var uidRef = prospectsRef.push(newUser, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("user added with UID:", uidRef.key());
    }
  });
}

function fetchProspectWithPhone(phone, ref, callback) {
  ref.orderByChild("phone").equalTo(phone).once("value", function (snapshot) {
    callback(snapshot.val());
  });
}

function fetchProspectWithEmail(email, ref, callback) {
  ref.orderByChild("email").equalTo(email).once("value", function(snapshot) {
    callback(snapshot.val());
  });
}
