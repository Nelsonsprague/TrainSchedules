var firebaseConfig = {
    apiKey: "AIzaSyB8vrpYurJmhdHU9DQuEbEwsQ8Y1eBJRB0",
    authDomain: "my-awesome-trains.firebaseapp.com",
    databaseURL: "https://my-awesome-trains.firebaseio.com",
    projectId: "my-awesome-trains",
    storageBucket: "my-awesome-trains.appspot.com",
    messagingSenderId: "575028153856",
    appId: "1:575028153856:web:e6b556e2146efe25"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var createRow = function(data) {
    // Create a new table row element
    var tRow = $("<tr>");
    // Append the newly created table data to the table row
    tRow.append(nameTd, destinationTd, frequencyTd, nextArrivalTd, minAwayTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
  };

  database.ref().on("value", function(snapshot){


  })

  $("#submit-button").on("click", function(childSnapshot){
      event.preventDefault();
      var trainName = $("#name").val().trim();
      var destination = $("#destination").val().trim();
      var tFrequency = parseInt($("#frequency").val().trim());
      var firstTime = parseInt($("#firstTrain").val().trim());
      var firstTimeCOnverted = moment(firstTime, "HH").subtract(1, "years");
  console.log(firstTimeCOnverted)

  // Current Time
  var currentTime = moment();

  //Difference between the times 
  var diffTime = moment().diff(moment(firstTimeCOnverted),'minutes');

  var tRemainder = diffTime % tFrequency;

  var nextArrival = tFrequency - tRemainder;

  var minutesAway = moment().add(nextArrival, "minutes").format("mm");
 
      
      database.ref().push({
          trainName: trainName,
          destination: destination,
          tFrequency: tFrequency,
          nextArrival: nextArrival,
          minutesAway: minutesAway,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      })

      
  });

  database.ref().on("child_added", function(childSnapshot){
    var tRow = $("<tr>")
    var nameTd = $("<td>").append(trainName);
    var destinationTd = $("<td>").text(destination);
    var frequencyTd = $("<td>").text(frequency);
    var nextArrivalTd = $("<td>").text(nextArrival);
    var minAwayTd = $("<td>").text(minutesAway);

// $("#full-train-list").append("<tr>"+childSnapshot(trainName)+"<td>"+childSnapshot(destination)+childSnapshot(frequency)+childSnapshot(nextArrival+childSnapshot(minutesAway)+childSnapshot(dateAdded))
  },
   function(errorObject){
    console.log("Errors Handled: "+errorObject.code);
})

// DataTransfer.ref().orderByChild("dateAdded").limitTOlast(1).on("child_added", function(snapshot){
//   $("#name").text(snapshot.val().trainName);
//   $("#destination").text(snapshot.val().destination);
//   $("#frequency").text(snapshot.val().frequency);
//   $("#next-arrival").text(snapshot.val().nextArrival);
//   $("#minutes-away").text(snapshot.val().minutesAway);
// })
  function createRow(){

  }

  // $("#employeeList").append("")

