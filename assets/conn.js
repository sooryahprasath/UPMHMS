var app_firebase = {};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDLN20pSNQObXbJEo6jRK0DlQaA-4aOvA",
    authDomain: "upmhms.firebaseapp.com",
    databaseURL: "https://upmhms.firebaseio.com",
  firebase.initializeApp(config);

  app_firebase = firebase;

  function dbCreate(path, body, callBack) {
    if(!path || !body) return;
    app_firebase.database().ref(path).push(body, callBack);
    console.log("pushed to fb");
  }

  function dbRead(path, sucessFunction, errorFunction){
    if(!path || !sucessFunction || !errorFunction) return;
    app_firebase.database().ref(path).once('value').then(sucessFunction, errorFunction);

  }


  app_firebase.databaseApi = {
    create: dbCreate,
    read: dbRead,
    //update: fnUpdate,
    //delete: fnDelete
  }




})()
