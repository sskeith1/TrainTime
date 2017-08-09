$("#btn-submit").on("click", function(event){
	console.log("Name: " + $("#trainName") + ", Final destination" + $("#trainDestination") + 
		", time of departure" + $("#trainTime") + ", requency of trip" + $("#trainFrequency"))
});