// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAAu42_uROj_7XIRFx_jOk4yclrUPCIApM",
    authDomain: "traintime-536e8.firebaseapp.com",
    databaseURL: "https://traintime-536e8.firebaseio.com",
    projectId: "traintime-536e8",
    storageBucket: "traintime-536e8.appspot.com",
    messagingSenderId: "544941327570"
  };
  firebase.initializeApp(config);

  	var name;
	var destination;
	var departure;
	var frequency;



  var database = firebase.database();



// timeAdjust = function(start,end) {
//   	return moment("hh:mm").subtract(1, "days");
// };


$("#btn-submit").on("click", function(event){
	event.preventDefault();
	
	Aname = $("#trainName").val();
	Adestination = $("#trainDestination").val();
	Adeparture = moment($("#trainTime").val(), "HH:mm").subtract(10, "years").format("X");
	Afrequency = $("#trainFrequency").val();


database.ref().push({
	name: Aname,
	destination: Adestination,
	departure: Adeparture,
	frequency: Afrequency,
});


	console.log(Aname);
	console.log(Adestination);
	console.log(Adeparture);
	console.log(Afrequency);




alert("New Train Added!");

	$("#trainName").val("");
	$("#trainDestination").val("");
	$("#trainTime").val("");
	$("#trainFrequency").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	console.log(childSnapshot.val());

	var Fname = childSnapshot.val().name;
	var Fdestination = childSnapshot.val().destination;
	var Fdeparture = childSnapshot.val().departure;
	var Ffrequency = childSnapshot.val().frequency;

	console.log(Fname);
	console.log(Fdestination);
	console.log(Fdeparture);
	console.log(Ffrequency);

	var differenceTimes = moment().diff(moment.unix(Fdeparture), "minutes");
	var tRemainder = moment().diff(moment.unix(Fdeparture), "minutes") % Ffrequency ;
	var minutesAway = Ffrequency - tRemainder;

	var nextArrival = moment().add(minutesAway, "m").format("hh:mm A");


	$("#trainTable > tbody").append(
		"<tr><td>" + Fname + 
		"</td><td>" + Fdestination + 
		"</td><td>" + Ffrequency + 
		"</td><td><span id='flash'>" + nextArrival + "</span>" +
		"</td><td>" + minutesAway + 
		"</td><td>");
});













