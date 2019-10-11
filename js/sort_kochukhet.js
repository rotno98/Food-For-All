
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
  var flag=false;

$(document).ready(function(){
  //firebase.auth().onAuthStateChanged(function(user) {



      //var user = firebase.auth().currentUser;

        //console.log('flag');

        //var flag=false;

              flag=sort();


      //clickmeh();

  //});
});

function sort()
{
  firebase.database().ref('/Posts/').orderByChild('zone').equalTo('Kochukhet').once('value').then(function(snapshot){


    var currentRow1;
    snapshot.forEach(child=>{
      var PostObject=child.val();

      var currentObject=PostObject;


      currentRow1=document.createElement("div");
      $(currentRow1).addClass("row");

      dummycol=document.createElement("div");
      $(dummycol).addClass("col-md-8");//setting class col-md-8
      $(currentRow1).append(dummycol);


      dummycol2=document.createElement("div");//setting class card mb-4
      $(dummycol2).addClass("card mb-4");
      $(dummycol).append(dummycol2);

      dummycolname=document.createElement("div");
      $(dummycolname).addClass("card-body");
      $(dummycol2).append(dummycolname);

      dummycolfooter=document.createElement("div");
      $(dummycolfooter).addClass("card-footer text-muted");
      $(dummycol2).append(dummycolfooter);

      $("#contentHolder").append(currentRow1);


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

      var contact=document.createElement("p");
      $(contact).html(currentObject.contact);

      $(dummycol2).append(image);

      $(dummycolfooter).append(name);
      $(dummycolfooter).append(time);
      $(dummycolfooter).append(zone);
      $(dummycolfooter).append(email);
      $(dummycolfooter).append(contact);




      $(dummycolname).append(title);
      $(dummycolname).append(desc);
      //$(dummycolname).append(but);

      $(currentRow1).append(col);
      });

      console.log("done");


  });
}



function clickmeh()
{

    if(document.getElementById('zone').value=='Farmgate')
      document.location.href='home_sort_farmgate.html';

    else if(document.getElementById('zone').value=='Kochukhet')
      document.location.href='home_sort_kochukhet.html';

    else if(document.getElementById('zone').value=='ECB')
      document.location.href='home_sort_ecb.html';

    else if(document.getElementById('zone').value=='Mirpur')
        document.location.href='home_sort_mirpur.html';

    else if(document.getElementById('zone').value=='Tejgaon')
          document.location.href='home_sort_Tejgaon.html';

    }

function goto()
{
  document.location.href="home.html";
}
