var config = {
  apiKey: "AIzaSyAapDTx27pzMe7K7nMzFvJenzevIioe-2M",
  authDomain: "test-2580d.firebaseapp.com",
  databaseURL: "https://test-2580d.firebaseio.com",
  projectId: "test-2580d",
  storageBucket: "test-2580d.appspot.com",
  messagingSenderId: "969548949059",
  appId: "1:969548949059:web:6d01727f16970c442f56f6"
};
firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    //document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    document.location.href="./home.html";

    window.alert("Welcome to food for All");

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    //document.location.href="./log.html";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  document.location.href="./log.html";
}
