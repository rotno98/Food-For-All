var firebaseConfig = {
  apiKey: "AIzaSyAapDTx27pzMe7K7nMzFvJenzevIioe-2M",
  authDomain: "test-2580d.firebaseapp.com",
  databaseURL: "https://test-2580d.firebaseio.com",
  projectId: "test-2580d",
  storageBucket: "",
  messagingSenderId: "969548949059",
  appId: "1:969548949059:web:6d01727f16970c442f56f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//var msgref=firebase.database().ref('messages');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //document.location.href="./index.html";
    window.alert("user logged in");

    var user = firebase.auth().currentUser;
  } else {
    // No user is signed in.
    window.alert("NOPW");
  }
});


function login()
{
  //e.preventDefault();
  //window.alert("done1");

var logemail=document.getElementById("bonjo1").value;
var logpass=document.getElementById("bonjo2").value;

window.alert(logemail+" " logpass);

firebase.auth().signInWithEmailAndPassword(logemail,logpass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  //window.alert("done2");

  //saveMessage(log_email,log_pass);
});
}

//window.alert("this page works");
