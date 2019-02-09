var mainApp = {};
(function () {

  var firebase = app_firebase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      window.location.replace("dashboard.html");
      uid = user.uid;
    }else {
      //redirect to login page
      uid = null;
    }
  });

  function accLogin() {

    var hosp_accEmail = document.getElementById("hosp_email").value;
    var hosp_accPass = document.getElementById("hosp_pass").value;
    var path = 'hospitalAccounts/';
    var dbIndex = 'inst_accEmail'

    //grab email and this func is nested to check if the user first exists the nest to validate pwd
    firebase.database().ref(path).orderByChild(dbIndex).equalTo(hosp_accEmail).once("value", snapshot => {
      if (snapshot.exists()) {
        var userData = snapshot.val();
        var keys = Object.keys(userData);
        console.log("exists!", userData);


        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var dbEmail = userData[k].inst_accEmail;
          var dbPwd = userData[k].inst_accPass;
        }
        if (hosp_accEmail == dbEmail && hosp_accPass == dbPwd) {
          window.location.replace("dashboard.html");

          M.toast({
            html: 'You have been logged in',
            classes: 'rounded'
          });

        } else {
          M.toast({
            html: 'Invalid Cridentials',
            classes: 'rounded'
          });

        }

      } else {
        M.toast({
          html: 'User does not exist',
          classes: 'rounded'
        });


      }


    });
  }

  mainApp.login = accLogin;

})()