var myApiKey = "FUsnXFJS";
var smapilistor;
var latitude;
var longitude;

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
			else textdiv.innerHTML = "Servern hittades inte ";
	};
	
}

function smapi2() {
	smapilistor = document.getElementById("lista1");
    textdiv = document.getElementById("textdiv");
    text = document.getElementById("text");
    getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }, function(error) {
        console.error("Error getting current position:", error);
    });
    let request = new XMLHttpRequest();
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=activity&method=getfromlatlng&debug=true&descriptions=golfbana&provinces=småland&lat=" + latitude + "&lng=" + longitude + "&radius=500&sort_in=DESC&order_by=rating");
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText);
            else textdiv.innerHTML = "Servern hittades inte";
    };
    console.log(latitude);
    console.log(longitude);
}


function smapi3() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getall&debug=true&descriptions=golfbana&provinces=öland");
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState == 4)
			if (request.status == 200) displayResponseText(request.responseText);
			else textdiv.innerHTML = "Servern hittades inte";
	};
}


function smapi4() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=activity&method=getall&debug=true&descriptions=golfbana");
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState == 4)
			if (request.status == 200) displayResponseText(request.responseText);
			else textdiv.innerHTML = "Servern hittades inte ";
	};
}
