// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAapDTx27pzMe7K7nMzFvJenzevIioe-2M",
  authDomain: "test-2580d.firebaseapp.com",
  databaseURL: "https://test-2580d.firebaseio.com",
  projectId: "test-2580d",
  storageBucket: "test-2580d.appspot.com",
  messagingSenderId: "969548949059",
  appId: "1:969548949059:web:6d01727f16970c442f56f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


/*firebase.database().ref('/messages/').orderByChild('email').equalTo(name)

function  retrieve()
{


return firebase.database().ref('/messages/').orderByChild('email').equalTo(name).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  // ...
});

}*/

$(document).ready(function(){//will start working right after the page is loaded

  var rootRef=firebase.database().ref().child("messages");


  rootRef.on("child_added", snap => {

    //alert(snap.val()); //to check if the code works..nothing fancy

    var name=  snap.child("name").val();
    var email=  snap.child("email").val();

    $("#write_ere").append(`<p>`+ email + `</p>` + `<p>` + name + `</p>` );
  });


});
