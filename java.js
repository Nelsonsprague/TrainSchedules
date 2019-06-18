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
      var tFrequency = $("#frequency").val().trim();
      var firstTime = $("#firstTrain").val().trim();
      
      database.ref().push({
        trainName: trainName,
        destination: destination,
        tFrequency: tFrequency,
        firstTime: firstTime,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      })
      
      
      console.log(tFrequency)
      console.log(firstTime)
 $("#name").val("");
  });

  database.ref().on("child_added", function(childSnapshot){
    var trainNameDB = childSnapshot.val().trainName;
    var firstTimeDB = childSnapshot.val().firstTime;
    var tFrequencyDB = childSnapshot.val().tFrequency;
    var destinationDB = childSnapshot.val().destination;

    var firstTimeCOnverted = moment(firstTimeDB, "HH:mm").subtract(1, "day");

    var currentTime = moment(); 
    var diffTime = moment().diff(moment(firstTimeCOnverted),"minutes");
    var tRemainder = diffTime % tFrequencyDB;
    var minutesAway = tFrequencyDB - tRemainder;
    var nextArrival= moment().add(minutesAway, "minutes").format("HH:mm");
    console.log(minutesAway)
    console.log("next arrival: ", nextArrival)
    var tRow = $("<tr>")
    var nameTd = $("<td>").text(trainNameDB);
    var destinationTd = $("<td>").text(destinationDB);
    var frequencyTd = $("<td>").text(tFrequencyDB);
    var nextArrivalTd = $("<td>").text(nextArrival);
    console.log(nextArrival)
    var minAwayTd = $("<td>").text(minutesAway + " minutes Away");

    tRow.append(nameTd, destinationTd, frequencyTd, nextArrivalTd, minAwayTd)
$("#full-train-list").append(tRow)
},
   function(errorObject){
    console.log("Errors Handled: "+errorObject.code);
})