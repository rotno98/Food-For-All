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


$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //document.location.href="./index.html";
      var token=firebase.auth().currentUser.uid;
      var token2=firebase.auth().currentUser.email;
      console.log("a user logged in " + firebase.auth().currentUser.uid +" " +firebase.auth().currentUser.email);


      var user = firebase.auth().currentUser;


      queryDatabase();
    } else {
      // No user is signed in.
      window.alert("NOPW");
      document.location.href="./log.html"
    }
  });
});


function queryDatabase()
{
  firebase.database().ref('/Posts/').once('value').then(function(snapshot){


    var PostObject=snapshot.val();
    var currentRow;

    var keys=Object.keys(PostObject);

    for(var i=0;i<keys.length;i++)
    {
      var currentObject=PostObject[keys[i]];


      currentRow=document.createElement("div");
      $(currentRow).addClass("row");

      dummycol=document.createElement("div");
      $(dummycol).addClass("col-md-8");//setting class col-md-8
      $(currentRow).append(dummycol);


      dummycol2=document.createElement("div");//setting class card mb-4
      $(dummycol2).addClass("card mb-4");
      $(dummycol).append(dummycol2);

      dummycolname=document.createElement("div");
      $(dummycolname).addClass("card-body");
      $(dummycol2).append(dummycolname);

      dummycolfooter=document.createElement("div");
      $(dummycolfooter).addClass("card-footer text-muted");
      $(dummycol2).append(dummycolfooter);

      $("#contentHolder").append(currentRow);


      var col=document.createElement("div");
      $(col).addClass("col-lg-4");

      var image=document.createElement("img");
      image.src=currentObject.url;
      $(image).addClass("card-img-top");

      var name=document.createElement("p");
      $(name).html(currentObject.name);
      $(name).addClass("contentName");

      //caption to be written

      var title=document.createElement("h2");
      $(title).html(currentObject.title);
      $(title).addClass("card-title");

      var desc=document.createElement("p");
      $(desc).html(currentObject.desc);
      $(desc).addClass("card-text");




      var time=document.createElement("p");
      $(time).html(currentObject.time);

      var zone=document.createElement("p");
      $(zone).html(currentObject.zone);

      var email=document.createElement("p");
      $(email).html(currentObject.mail);

      $(dummycol2).append(image);

      $(dummycolfooter).append(name);
      $(dummycolfooter).append(time);
      $(dummycolfooter).append(zone);
      $(dummycolfooter).append(email);


      $(dummycolname).append(title);
      $(dummycolname).append(desc);
      //$(dummycolname).append(but);

      $(currentRow).append(col);

      console.log("done");

    }
    //console.log(keys);//to check if its working


  });
}

function logout(){
  firebase.auth().signOut();
  document.location.href="./log.html";
}


//var ts = new Date();
//console.log(ts.toDateString());
//console.log(ts.toLocaleString());
