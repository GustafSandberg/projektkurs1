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
