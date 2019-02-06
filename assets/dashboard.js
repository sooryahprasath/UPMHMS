var mainApp = {};
(function(){

  var firebase = app_firebase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
    uname = user.email;
    M.toast({html: uname+' has logged in', classes: 'rounded'});
  }else {
    //redirect to login page
    uid = null;
    window.location.replace("login.html");
  }
});

function logout(){
  firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
}

function messageHandler(err){
  if(!!err){
      console.log(err);
      M.toast({html: 'Institution creation Unsucessful', classes: 'rounded'});

  }else {
      console.log("Sucess!");
      M.toast({html: 'Institution added Sucessfully' , classes: 'rounded'});
      document.getElementById("inst_name").value = "";
      document.getElementById("head_name").value = "";
      document.getElementById("contact_mail").value = "";
      document.getElementById("contact_phno").value = "";
      document.getElementById("inst_addressBldgNo").value = "";
      document.getElementById("inst_addressStrtNo").value = "";
      document.getElementById("inst_addressLclty").value = "";
      document.getElementById("inst_addressCity").value = "";
      document.getElementById("inst_addressPnCd").value = "";
  }
}

function messageHandlerAcc(err){
  if(!!err){
      console.log(err);
      M.toast({html: 'Account creation Unsucessful', classes: 'rounded'});

  }else {
      console.log("Sucess!");
      M.toast({html: 'Account Created', classes: 'rounded'});
  }
}


function fnHCreate() {
  var name = document.getElementById("inst_name");
  var owner = document.getElementById("head_name");
  var email = document.getElementById("contact_mail");
  var phone = document.getElementById("contact_phno");
  var bldgno = document.getElementById("inst_addressBldgNo");
  var street = document.getElementById("inst_addressStrtNo");
  var locality = document.getElementById("inst_addressLclty");
  var city = document.getElementById("inst_addressCity");
  var pincode = document.getElementById("inst_addressPnCd");

  var path = 'institutions/' + uid;
  var data = {
      inst_name: name.value,
      inst_owner: owner.value,
      inst_email: email.value,
      inst_phone: phone.value,
      inst_bldgno: bldgno.value,
      inst_street: street.value,
      inst_locality: locality.value,
      inst_city: city.value,
      inst_pincode: pincode.value
  }
  if(name.value == '' || owner.value == '' || email.value == '' || phone.value == '' || bldgno.value == '' || street.value == '' || locality.value == '' || city.value == '' || pincode.value == ''){
    M.toast({html: 'Feilds cannot be empty, Please check and try again', classes: 'rounded'});
  }else{
    app_firebase.databaseApi.create(path, data, messageHandler);
    console.log("Pushed to conn");
  }
}

function fnAccCreate() {

  var accEmail = document.getElementById("inst_email");
  var accEmailre = document.getElementById("inst_emailrntr");
  var accPass = document.getElementById("inst_pass");
  var accPassre = document.getElementById("inst_passrntr");
  var pathAcc = 'hospitalAccounts/';
  var dataAcc = {
    inst_accEmail: accEmail.value,
    inst_accPass: accPass.value
  }

  if(accEmail.value == '' || accEmailre.value == '' || accPass.value == '' || accPassre.value == ''){
    M.toast({html: 'Email or password feilds cannot be empty', classes: 'rounded'});
    console.log("Pushed to conn UNAME AND PASS");

  }else if(accEmail.value != accEmailre.value || accPass.value != accPassre.value){
    M.toast({html: 'Email or password feilds do not match', classes: 'rounded'});

  }else{
    app_firebase.databaseApi.create(pathAcc, dataAcc, messageHandlerAcc);
  }
 
}

function fnPCreate() {
  var name = document.getElementById("pat_name");
  var age = document.getElementById("pat_age");
  var email = document.getElementById("pat_mail");
  var phone = document.getElementById("pat_phno");
  var bldgno = document.getElementById("pat_addressBldgNo");
  var street = document.getElementById("pat_addressStrtNo");
  var locality = document.getElementById("pat_addressLclty");
  var city = document.getElementById("pat_addressCity");
  var pincode = document.getElementById("pat_addressPnCd");

  var path = 'patients/';
  var data = {
      pat_name: name.value,
      pat_age: age.value,
      pat_email: email.value,
      pat_phone: phone.value,
      pat_bldgno: bldgno.value,
      pat_street: street.value,
      pat_locality: locality.value,
      pat_city: city.value,
      pat_pincode: pincode.value
  }
  app_firebase.databaseApi.create(path, data, messageHandler);
  console.log("Pushed to conn");

}

function fnHRead() {
  var path = 'institutions/' + uid;
  app_firebase.databaseApi.read(path, sucessFn, messageHandler)
  function sucessFn(snapShot){
    if(!!snapShot && !!snapShot.val()){
      //console.log(snapShot.val());
      var inst_info = snapShot.val();
      var keys = Object.keys(inst_info);
      console.log(keys);
      var html = "<table class='centered' border='1|1'>";
      html+= "<thead>";
      html+= "<tr>";
      html+= "<th>Institution Name</th>";
      html+= "<th>Proprietor</th>";
      html+= "<th>Phone</th>";
      html+= "<th>Email</th>";
      html+= "<th>Locality</th>";
      html+= "<th>City</th>";
      html+= "<th>Manage</th>";
      html+= "</tr>";
      html+= "</thead>";
      
      for (var i = 0;i < keys.length; i++){
        var k = keys[i];
        var name = inst_info[k].inst_name;
        var ownerName = inst_info[k].inst_owner;
        var email = inst_info[k].inst_email;
        var phone = inst_info[k].inst_phone;
        var locality = inst_info[k].inst_locality;
        var city = inst_info[k].inst_city;
        var path = keys[i];

          html+="<tr>";
          html+="<td>"+name+"</td>";
          html+="<td>"+ownerName+"</td>";
          html+="<td>"+phone+"</td>";
          html+="<td>"+email+"</td>";
          html+="<td>"+locality+"</td>";
          html+="<td>"+city+"</td>";
          html+="<td><a class='waves-effect waves-light btn red' onclick='mainApp.deletePatient("+path+")'>Delete</a></td>";
          html+="</tr>";
          //console.log(name,ownerName,email,phone,locality,city);
          console.log(path);
          
      }
      html+="</table>";
        document.getElementById("manageExist").innerHTML = html;
        M.toast({html: 'Institution list Fetch Sucessfull', classes: 'rounded'});

    }else{
      console.log("No data la");
      M.toast({html: 'Institution list Fetch Unsucessful', classes: 'rounded'});
    }
  }   
}

function fnHDelete(path){
    app_firebase.databaseApi.delete(path, messageHandler);

}

function fnHShow() {
  var path = 'institutions/' + uid;
  app_firebase.databaseApi.read(path, sucessFn, messageHandler)
  function sucessFn(snapShot){
    if(!!snapShot && !!snapShot.val()){
      //console.log(snapShot.val());
      var inst_info = snapShot.val();
      var keys = Object.keys(inst_info);
      console.log(keys);
      var html = "<table class='centered' border='1|1'>";
      html+= "<thead>";
      html+= "<tr>";
      html+= "<th>Institution Name</th>";
      html+= "<th>City</th>";
      html+= "</tr>";
      html+= "</thead>";
      
      for (var i = 0;i < keys.length; i++){
        var k = keys[i];
        var name = inst_info[k].inst_name;
        var city = inst_info[k].inst_city;

          html+="<tr>";
          html+="<td>"+name+"</td>";
          html+="<td>"+city+"</td>";
          html+="</tr>";
      }
      html+="</table>";
        document.getElementById("viewHospitals").innerHTML = html;

    }else{
      M.toast({html: 'Institution list Empty', classes: 'rounded'});
    }
  }   
}

function fnPRead() {
  var path = 'patients/';
  app_firebase.databaseApi.read(path, sucessFn, messageHandler)
  function sucessFn(snapShot){
    if(!!snapShot && !!snapShot.val()){
      //console.log(snapShot.val());
      var pat_info = snapShot.val();
      var keys = Object.keys(pat_info);
      var html = "<table class='centered' border='1|1'>";
      html+= "<thead>";
      html+= "<tr>";
      html+= "<th>Patient Name</th>";
      html+= "<th>Age</th>";
      html+= "<th>Phone</th>";
      html+= "<th>Email</th>";
      html+= "<th>Locality</th>";
      html+= "<th>City</th>";
      html+= "<th>Manage</th>";
      html+= "</tr>";
      html+= "</thead>";
      
      for (var i = 0;i < keys.length; i++){
        var k = keys[i];
        var name = pat_info[k].pat_name;
        var age = pat_info[k].pat_age;
        var email = pat_info[k].pat_email;
        var phone = pat_info[k].pat_phone;
        var locality = pat_info[k].pat_locality;
        var city = pat_info[k].pat_city;

          html+="<tr>";
          html+="<td>"+name+"</td>";
          html+="<td>"+age+"</td>";
          html+="<td>"+phone+"</td>";
          html+="<td>"+email+"</td>";
          html+="<td>"+locality+"</td>";
          html+="<td>"+city+"</td>";
          html+="<td>"+keys+"</td>";
          html+="</tr>";
          console.log(name,age,email,phone,locality,city);
          console.log(keys);
      }
      html+="</table>";
        document.getElementById("viewPatient").innerHTML = html;
        M.toast({html: 'Patient list Fetch Sucessful', classes: 'rounded'});

    }else{
      console.log("No data la");
      M.toast({html: 'Patient list Fetch Unsucessful', classes: 'rounded'});
    }
  }   
}
function fnUpdate() {

}

function fnDelete() {

}

mainApp.createInstitution = fnHCreate;
mainApp.createPatient = fnPCreate;
mainApp.deletePatient = fnHDelete;
mainApp.viewInstitution = fnHRead;
mainApp.viewPatient = fnPRead;
mainApp.showHospital = fnHShow;
mainApp.updateInstitution = fnUpdate;
mainApp.createInstAcc = fnAccCreate;
mainApp.deleteInstitution = fnDelete;
mainApp.logout = logout;
})()