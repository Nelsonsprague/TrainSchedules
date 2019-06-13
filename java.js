

var firebaseConfig = {
    apiKey: "AIzaSyA8TG1EUw3r6xbj4ChW0EjpfN3uB9Qz2n8",
    authDomain: "bidding-63908.firebaseapp.com",
    databaseURL: "https://bidding-63908.firebaseio.com",
    projectId: "bidding-63908",
    storageBucket: "",
    messagingSenderId: "708267226320",
    appId: "1:708267226320:web:5f285dd131f33c3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var createRow = function(data) {
    // Create a new table row element
    var tRow = $("<tr>");
 
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
   
 
 
    // Append the newly created table data to the table row
    tRow.append(nameTd, roleTd, startTd, monWorkedTd, monRateTd, totBilledTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
  };

  database.ref().on("value", function(snapshot){


  })

  $("#submit-button").on("click", function(childSnapshot){
      event.preventDefault();
      var employeeName = $("#name").val().trim();
      var employeeRole = $("#role").val().trim();
      var startDate = parseInt($("#start").val().trim());
      var currentDate = new Date();
      var payRate = parseInt($("#rate").val().trim());
      
    //   database.ref().push({
          
    //   })

      
  });

//   database.ref().onchild{

//   }

  function createRow(){
    var tRow = $("<tr>")
    var nameTd = $("#name-display").append(employeeName);
    var roleTd = $("<td>").text(employeeRole);
    var startTd = $("<td>").text(startDate);
    var monWorkedTd = $("<td>").text();
    var monRateTd = $("<td>").text(payRate);
    var totBilledTd = $("<td>").text();
  }

  $("#employeeList").append("")