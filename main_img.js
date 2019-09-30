



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



function showimage() {



         var storageRef = firebase.storage().ref();
         var spaceRef = storageRef.child('sweet/bonjo.png');
         storageRef.child('sweet/bonjo.png').getDownloadURL().then(function(url) {
             var bonjo_test = url;
             alert(url);
             document.querySelector('img').src = bonjo_test;

         }).catch(function(error) {

         });


     }
