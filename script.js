var myApiKey = "FUsnXFJS";
var smapilistor;

function init() {
	document.getElementById("close").addEventListener("click", smapi);
	document.getElementById("smaland").addEventListener("click", smapi2);
	document.getElementById("oland").addEventListener("click", smapi3);
	document.getElementById("paket").addEventListener("click", smapi4);
	smapilistor = document.getElementById("lista1");
	textdiv = document.getElementById("textdiv");
	text = document.getElementById("text");
	
}
window.addEventListener("load", init);

function smapi() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getall&debug=true&descriptions=golfbana");
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState == 4)
			if (request.status == 200) displayResponseText(request.responseText);
			else textdiv.innerHTML = "hej";
	};
}

function smapi2() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getall&debug=true&descriptions=golfbana&provinces=småland");
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState == 4)
			if (request.status == 200) displayResponseText(request.responseText);
			else textdiv.innerHTML = "hej";
	};
}

function smapi3() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getall&debug=true&descriptions=golfbana&provinces=öland");
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState == 4)
			if (request.status == 200) displayResponseText(request.responseText);
			else textdiv.innerHTML = "hej";
	};
}


function smapi4() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=activity&method=getall&debug=true&descriptions=golfbana");
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState == 4)
			if (request.status == 200) displayResponseText(request.responseText);
			else textdiv.innerHTML = "hej";
	};
}
function displayResponseText(responseText) {
	// Parse the JSON response
	var jsonResponse = JSON.parse(responseText);
	// Get the text element by id
	//var textElement = document.getElementById("text");
	
	// Clear any existing content in the text element
	let smapitext = "";
	
	// Loop through the payload array and create HTML elements to display the properties
	if (smapilistor!= null){
	for (var i = 0; i < jsonResponse.payload.length; i++) 
	 {
	  var item = jsonResponse.payload[i];
	  
	smapitext += "<p>ID: " + item.id + "<br>" +
						   "Name: " + item.name + "<br>" +
						   "Rating: " + item.rating + "<br>" +
						   "Num Reviews: " + item.num_reviews + "<hr></p>";
						   console.log(jsonResponse);
	}
	 }smapilistor.innerHTML = smapitext;

  }
  
