var mainApp = {};
(function(){

  var firebase = app_firebase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
  }else {
    //redirect to login page
    uid = null;
    window.location.replace("login.html");
  }
});

function logout(){
firebase.auth().signOut();

}

function messageHandler(err){
  if(!!err){
      console.log(err);

  }else {
      console.log("Sucess!");
  }
}
function fnCreate() {
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
  app_firebase.databaseApi.create(path, data, messageHandler);
  console.log("Pushed to conn");

}

function fnRead() {
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
        var link;

          html+="<tr>";
          html+="<td>"+name+"</td>";
          html+="<td>"+ownerName+"</td>";
          html+="<td>"+phone+"</td>";
          html+="<td>"+email+"</td>";
          html+="<td>"+locality+"</td>";
          html+="<td>"+city+"</td>";
          html+="<td><a href='"+link+"'>Edit</a></td>";
          html+="</tr>";
          console.log(name,ownerName,email,phone,locality,city);
      }
      html+="</table>";
        document.getElementById("manageExist").innerHTML = html;

    }else{
      console.log("No data la");
    }
  }   
}

function fnUpdate() {

}

function fnDelete() {

}

mainApp.createInstitution = fnCreate;
mainApp.readInstitution = fnRead;
mainApp.updateInstitution = fnUpdate;
mainApp.deleteInstitution = fnDelete;
mainApp.logout = logout;

})()
