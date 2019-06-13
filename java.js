

var firebaseConfig = {
    apiKey: "AIzaSyB8vrpYurJmhdHU9DQuEbEwsQ8Y1eBJRB0",
    authDomain: "my-awesome-trains.firebaseapp.com",
    databaseURL: "https://my-awesome-trains.firebaseio.com",
    projectId: "my-awesome-trains",
    storageBucket: "",
    messagingSenderId: "575028153856",
    appId: "1:575028153856:web:e6b556e2146efe25"
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