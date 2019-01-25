var app_firebase = {};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDLN20pSNQObXbJEo6jRK0DlQaA-4aOvA",
    authDomain: "upmhms.firebaseapp.com",
    databaseURL: "https://upmhms.firebaseio.com",
    projectId: "upmhms",
    storageBucket: "upmhms.appspot.com",
    messagingSenderId: "714203416633"
  };
  firebase.initializeApp(config);

  app_firebase = firebase;
})()
