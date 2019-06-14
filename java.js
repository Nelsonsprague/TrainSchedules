

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
      var trainName = $("#name").val().trim();
      var destination = $("#destination").val().trim();
      var frequency = parseInt($("#frequency").val().trim());
      var nextArrival = moment();
      var minutesAway = parseInt($("#rate").val().trim());
      
      database.ref().push({
          trainName: trainName,
          destination: destination,
          frequency: frequency,
          nextArrival: nextArrival,
          minutesAway: minutesAway,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      })

      
  });

  database.ref().on("child_added", function(childSnapshot){
console.log(trainName);
console.log(destination);
console.log(frequency);
console.log(nextArrival);
console.log(minutesAway);
console.log(dateAdded);



$("#full-train-list").append("<tr>"+childSnapshot(trainName)+childSnapshot(destination)+childSnapshot(frequency)+childSnapshot(nextArrival+childSnapshot(minutesAway)+childSnapshot(dateAdded))
  }, function(errorObject){
    console.log("Errors Handled: "+errorObject.code);
   

})

DataTransfer.ref().orderByChild("dateAdded").limitTOlast(1).on("child_added", function(snapshot){
  $("#name").text(snapshot.val().trainName);
  $("#destination").text(snapshot.val().destination);
  $("#frequency").text(snapshot.val().frequency);
  $("#next-arrival").text(snapshot.val().nextArrival);
  $("#minutes-away").text(snapshot.val().minutesAway);
})
  // function createRow(){
  //   var tRow = $("<tr>")
  //   var nameTd = $("#name-display").append(employeeName);
  //   var roleTd = $("<td>").text(employeeRole);
  //   var startTd = $("<td>").text(startDate);
  //   var monWorkedTd = $("<td>").text();
  //   var monRateTd = $("<td>").text(payRate);
  //   var totBilledTd = $("<td>").text();
  // }

  // $("#employeeList").append("")

  // creating train math

  var tFrequency = 3;
  var firstTime = "3:30";
  // first train
  var firstTimeCOnverted = moment(firstTime, "HH").subtract(1, "years");
  console.log(firstTimeCOnverted)

  // Current Time
  var currentTime = moment();

  //Difference between the times 
  var diffTime = moment().diff(moment(firstTimeCOnverted),'minutes');

  console.log(diffTime)

  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log(tMinutesTillTrain)

  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log(moment(nextTrain).format("HH"));