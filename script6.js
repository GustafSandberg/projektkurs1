var myMarkers = [];
const markerData = [
	{ position: { lat: 57.762352, lng: 14.211483 }, title: "A6 Golfklubb" },
	{ position: { lat: 56.963305, lng: 14.565473 }, title: "Alvesta Golfklubb" },
	{ position: { lat: 56.632005, lng: 16.221657 }, title: "Binga Golfbana" },
	{ position: { lat: 57.310726, lng: 16.995506 }, title: "Byxelkroks Golfklubb" },
	{ position: { lat: 56.784971, lng: 16.575665 }, title: "Ekerum Golf & Resort" },
	{ position: { lat: 57.644788, lng: 14.898124 }, title: "Eksjö Golfklubb" },
	{ position: { lat: 56.529265, lng: 15.589330 }, title: "Emmaboda GK" },
	{ position: { lat: 57.379138, lng: 16.579130 }, title: "Figeholm Golf & Country Club" },
	{ position: { lat: 56.897919, lng: 14.865326 }, title: "Glasrikets Golfklubb" },
	{ position: { lat: 57.989190, lng: 14.419517 }, title: "Gränna Golfklubb" },
	{ position: { lat: 56.276110, lng: 16.398627 }, title: "Grönhögen Golf" },
	{ position: { lat: 57.451887, lng: 14.100963 }, title: "Götaströms Golfklubb" },
	{ position: { lat: 57.442602, lng: 13.652047 }, title: "Isaberg Golfklubb" },
	{ position: { lat: 57.747790, lng: 14.134173 }, title: "Jönköpings Golfklubb" },
	{ position: { lat: 56.714876, lng: 16.340771 }, title: "Kalmar Golfklubb" },
	{ position: { lat: 56.924330, lng: 13.972583 }, title: "Lagans Golfklubb" },
	{ position: { lat: 57.215096, lng: 13.762882 }, title: "Lanna Golfklubb" },
	{ position: { lat: 57.706277, lng: 15.702713 }, title: "Lysingsbadet Golfklubb" },
	{ position: { lat: 56.447787, lng: 16.092606 }, title: "Möre Golf" },
	{ position: { lat: 56.447787, lng: 16.092606 }, title: "Mönsterås Golfklubb" },
	{ position: { lat: 56.695137, lng: 15.984055 }, title: "Nybro Golfklubb" },
	{ position: { lat: 57.194772, lng: 16.389016 }, title: "Oskarshamns Golfklubb" },
	{ position: { lat: 57.207112, lng: 14.939133 }, title: "Ramkvilla Golfklubb" },
	{ position: { lat: 57.204991, lng: 13.611208 }, title: "Reftele GK" },
	{ position: { lat: 56.835991, lng: 14.724235 }, title: "Rockatorp Golfklubb" },
	{ position: { lat: 57.904911, lng: 13.822457 }, title: "Ryfors Golfklubb" },
	{ position: { lat: 57.850828, lng: 14.037062 }, title: "Sand Golf Club" },
	{ position: { lat: 56.692296, lng: 16.485699 }, title: "Saxnäs Golfklubb" },
	{ position: { lat: 57.711260, lng: 14.047051 }, title: "Skinnarebo Golf & Country Club" },
	{ position: { lat: 57.576204, lng: 15.803366 }, title: "Tobö Golfklubb" },
	{ position: { lat: 58.051440, lng: 15.003742 }, title: "Tranås Golfklubb" },
	{ position: { lat: 57.142082, lng: 15.150124 }, title: "Uppvidinge Golfklubb" },
	{ position: { lat: 57.410237, lng: 15.044234 }, title: "Vetlanda Golf AB" },
	{ position: { lat: 57.674179, lng: 15.884552 }, title: "Vimmerby Golfklubb" },
	{ position: { lat: 58.032797, lng: 14.323207 }, title: "Visingsö Golfklubb" },
	{ position: { lat: 57.772326, lng: 16.654882 }, title: "Västerviks Golfklubb" },
	{ position: { lat: 56.901853, lng: 14.770866 }, title: "Växjö Golfklubb" },
	{ position: { lat: 57.910881, lng: 14.644474 }, title: "Wiredaholm Golf & Konferens" },
	{ position: { lat: 56.564709, lng: 14.177020 }, title: "Älmhults Golfklubb" },
	{ position: { lat: 57.138411, lng: 16.963828 }, title: "Ölands Golfklubb" },
];
const markerData2 = [
	{ position: { lat: 56.447787, lng: 16.092606 }, title: "Möre Golf" },
	{ position: { lat: 56.632005, lng: 16.221657 }, title: "Binga Golfbana" },
];

const markerData3 = [
	{ position: { lat: 56.632005, lng: 16.221657 }, title: "Binga Golfbana" },
	{ position: { lat: 57.762352, lng: 14.211483 }, title: "A6 Golfklubb" },
	{ position: { lat: 56.963305, lng: 14.565473 }, title: "Alvesta Golfklubb" },
	{ position: { lat: 56.897919, lng: 14.865326 }, title: "Glasrikets Golfklubb" },

];

const markerData4 = [
	{ position: { lat: 57.762352, lng: 14.211483 }, title: "A6 Golfklubb" },
	{ position: { lat: 56.963305, lng: 14.565473 }, title: "Alvesta Golfklubb" },
	{ position: { lat: 56.632005, lng: 16.221657 }, title: "Binga Golfbana" },
	{ position: { lat: 57.442602, lng: 13.652047 }, title: "Isaberg Golfklubb" },
	{ position: { lat: 57.747790, lng: 14.134173 }, title: "Jönköpings Golfklubb" },
	{ position: { lat: 56.924330, lng: 13.972583 }, title: "Lagans Golfklubb" },
	{ position: { lat: 57.706277, lng: 15.702713 }, title: "Lysingsbadet Golfklubb" },
	{ position: { lat: 56.835991, lng: 14.724235 }, title: "Rockatorp Golfklubb" },
	{ position: { lat: 58.051440, lng: 15.003742 }, title: "Tranås Golfklubb" },
	{ position: { lat: 57.142082, lng: 15.150124 }, title: "Uppvidinge Golfklubb" },
	{ position: { lat: 57.674179, lng: 15.884552 }, title: "Vimmerby Golfklubb" },
	{ position: { lat: 58.032797, lng: 14.323207 }, title: "Visingsö Golfklubb" },
	{ position: { lat: 57.379138, lng: 16.579130 }, title: "Figeholm Golf & Country Club" },
];

const markerData5 = [
	{ position: { lat: 57.762352, lng: 14.211483 }, title: "A6 Golfklubb" },
	{ position: { lat: 56.963305, lng: 14.565473 }, title: "Alvesta Golfklubb" },
	{ position: { lat: 56.784971, lng: 16.575665 }, title: "Ekerum Golf & Resort" },
	{ position: { lat: 57.644788, lng: 14.898124 }, title: "Eksjö Golfklubb" },
	{ position: { lat: 56.529265, lng: 15.589330 }, title: "Emmaboda GK" },
	{ position: { lat: 57.379138, lng: 16.579130 }, title: "Figeholm Golf & Country Club" },
	{ position: { lat: 56.897919, lng: 14.865326 }, title: "Glasrikets Golfklubb" },
	{ position: { lat: 57.989190, lng: 14.419517 }, title: "Gränna Golfklubb" },
	{ position: { lat: 56.276110, lng: 16.398627 }, title: "Grönhögen Golf" },
	{ position: { lat: 57.451887, lng: 14.100963 }, title: "Götaströms Golfklubb" },
	{ position: { lat: 57.442602, lng: 13.652047 }, title: "Isaberg Golfklubb" },
	{ position: { lat: 57.747790, lng: 14.134173 }, title: "Jönköpings Golfklubb" },
	{ position: { lat: 56.714876, lng: 16.340771 }, title: "Kalmar Golfklubb" },
	{ position: { lat: 56.924330, lng: 13.972583 }, title: "Lagans Golfklubb" },
	{ position: { lat: 57.215096, lng: 13.762882 }, title: "Lanna Golfklubb" },
	{ position: { lat: 56.447787, lng: 16.092606 }, title: "Möre Golf" },
	{ position: { lat: 56.695137, lng: 15.984055 }, title: "Nybro Golfklubb" },
	{ position: { lat: 57.194772, lng: 16.389016 }, title: "Oskarshamns Golfklubb" },
	{ position: { lat: 57.207112, lng: 14.939133 }, title: "Ramkvilla Golfklubb" },
	{ position: { lat: 57.204991, lng: 13.611208 }, title: "Reftele GK" },
	{ position: { lat: 57.904911, lng: 13.822457 }, title: "Ryfors Golfklubb" },
	{ position: { lat: 57.850828, lng: 14.037062 }, title: "Sand Golf Club" },
	{ position: { lat: 56.692296, lng: 16.485699 }, title: "Saxnäs Golfklubb" },
	{ position: { lat: 57.711260, lng: 14.047051 }, title: "Skinnarebo Golf & Country Club" },
	{ position: { lat: 57.576204, lng: 15.803366 }, title: "Tobö Golfklubb" },
	{ position: { lat: 58.051440, lng: 15.003742 }, title: "Tranås Golfklubb" },
	{ position: { lat: 57.410237, lng: 15.044234 }, title: "Vetlanda Golf AB" },
	{ position: { lat: 57.772326, lng: 16.654882 }, title: "Västerviks Golfklubb" },
	{ position: { lat: 56.901853, lng: 14.770866 }, title: "Växjö Golfklubb" },
	{ position: { lat: 57.910881, lng: 14.644474 }, title: "Wiredaholm Golf & Konferens" },
	{ position: { lat: 56.564709, lng: 14.177020 }, title: "Älmhults Golfklubb" },
	{ position: { lat: 57.138411, lng: 16.963828 }, title: "Ölands Golfklubb" },
];
var mapLocationElem;
var smapilistor;
var golfbanorELem;
var shopbild;
var golfclub;
var golffield;
var trailer;
var food;
var hotel;
var tabell;
var header;
var golfpar; 



function init() {
	initMap();
	mapLocationElem = document.getElementById("mapLocation");
	document.getElementById("billigast").addEventListener("click", billigast);
	document.getElementById("högstbetyg").addEventListener("click", highcourses);
	document.getElementById("visaalla").addEventListener("click", visaAlla);
	document.getElementById("niohål").addEventListener("click", nioHål);
	document.getElementById("artonhål").addEventListener("click", artonHål);
	smapilistor = document.getElementById("listajson");
	golfbanorELem = document.getElementById("Golfbanor");
	shopbild = document.getElementById("shopbild").src;
	golfclub = document.getElementById("golfclub").src;
	golffield = document.getElementById("golffield").src;
	trailer = document.getElementById("trailer").src;
	food = document.getElementById("food").src;
	Golfboll = document.getElementById("boll").src;
	hotel = document.getElementById("hotel").src;
	tabell = document.getElementById("sloptabell").src;
	golfpar = document.getElementById("golfpar").src;
}
window.addEventListener("load", init);





function initMap() {
	myMap = new google.maps.Map(document.getElementById("map"), {
		zoom: 6.5,
		center: { lat: 57.4254, lng: 15.0865 },
	});

	for (let i = 0; i < markerData.length; i++) {
		const marker = new google.maps.Marker({
			position: markerData[i].position,
			title: markerData[i].title,
			map: myMap,
		});
		myMarkers.push(marker);
		marker.addListener("click", function(){
			addElement(markerData[i].id)
		})
	}

}



function hideMarkers() {
	for (let i = 0; i < myMarkers.length; i++) {
		myMarkers[i].setMap(null);
	}
}

function billigast() {
	hideMarkers();
	for (let i = 0; i < markerData2.length; i++) {
		const marker = new google.maps.Marker({
			position: markerData2[i].position,
			title: markerData2[i].title,
			map: myMap,
		});
		myMarkers.push(marker);
		marker.addListener("click", addElement);
	}
}

function highcourses() {
	hideMarkers();
	for (let i = 0; i < markerData3.length; i++) {
		const marker = new google.maps.Marker({
			position: markerData3[i].position,
			title: markerData3[i].title,
			map: myMap,
		});
		myMarkers.push(marker);
		marker.addListener("click", addElement);
	}
}

function visaAlla() {
	hideMarkers();
	for (let i = 0; i < markerData.length; i++) {
		const marker = new google.maps.Marker({
			position: markerData[i].position,
			title: markerData[i].title,
			map: myMap,
		});
		myMarkers.push(marker);
		marker.addListener("click", addElement);
	}

}

function nioHål() {
	hideMarkers();
	for (let i = 0; i < markerData4.length; i++) {
		const marker = new google.maps.Marker({
			position: markerData4[i].position,
			title: markerData4[i].title,
			map: myMap,
		});
		myMarkers.push(marker);
		marker.addListener("click", addElement);
	}
}

function artonHål() {
	hideMarkers();
	for (let i = 0; i < markerData5.length; i++) {
		const marker = new google.maps.Marker({
			position: markerData5[i].position,
			title: markerData5[i].title,
			map: myMap,
		});
		myMarkers.push(marker);
		marker.addListener("click", addElement);
	}
}




function addElement(selectedID) {
	let request = new XMLHttpRequest();
	var id = selectedID; 

	request.open("GET", "golfklubbar.json?id=" + id, true);
	request.send(null);

	request.onreadystatechange = function () {
		if (request.readyState == 4)
			if (request.status == 200) {
				showMoreInfo(request.responseText, id);
			}
			else smapilistor.innerHTML = "Servern hittades inte";
	};

}


function showMoreInfo(responseText, selectedID) {
	console.log("hej");
	var jsonResponse = JSON.parse(responseText);
	let smapitext = "";


	for (var i = 0; i < jsonResponse.Golfbanor.length; i++) {
		var Golfbanor = jsonResponse.Golfbanor;

		if (Golfbanor[i].id == selectedID) {
			jsonLat = Golfbanor[i].Lat;
			jsonLng = Golfbanor[i].Lng;


			let Shop = Golfbanor[i].Shop !== undefined ? "<p id=shop><b></b><img class=Ikoner src='" + shopbild + "' alt='Shop image'>" + Golfbanor[i].Shop + "</p>" : "";

			let Husvagnar = Golfbanor[i].Husvagnar !== undefined ? "<p id=Husvagn><b></b><img class=Ikoner src='" + trailer + "' alt='trailer'>" + Golfbanor[i].Husvagnar + "</p>" : "";

			let Restaurant = Golfbanor[i].Restaurant !== undefined ? "<p id=Restaurant><b></b><img class=Ikoner src='" + food + "' alt='restaurant'>" + Golfbanor[i].Restaurant + "</p>" : "";

			let Boende = Golfbanor[i].Boende !== undefined ? "<p id=Boende><b></b><img class=Ikoner src='" + hotel + "' alt='hotel'>" + Golfbanor[i].Boende + "</p>" : "";

			let Range = Golfbanor[i].Range !== undefined ? "<p id=Range><b></b><img class=Ikoner src='" + golfclub + "' alt='golfclub'>" + Golfbanor[i].Range + "</p>" : "";

			let SlopeT = Golfbanor[i].SlopeT !== undefined ? "<p id=SlopeT><b></b><img class=Ikoner src='" + tabell + "' alt ='sloptabell'>" + Golfbanor[i].SlopeT + "</p>" : "";

			let Namn = Golfbanor[i].Name !== undefined ? "<p id=Namn><b></b>" + Golfbanor[i].Name + "</p>" : "";

			let Holes = Golfbanor[i].Holes !== undefined ? "<p id=Holes><b></b><img class=Ikoner src='" + Golfboll + "'alt=Golfboll'>" + Golfbanor[i].Holes + "</p>" : "";

			let text = Golfbanor[i].Text !== undefined ? "<p id=Text><b></b>" + Golfbanor[i].Text + "</p>" : "";

			let BetygS = Golfbanor[i].BetygS !== undefined ? "<p class=Bild id=BetygS><b></b>" + Golfbanor[i].BetygS + "</p>" : "";

			let Pris = Golfbanor[i].Pris !== undefined ? "<p class=Bild id=Pris><b></b>" + Golfbanor[i].Pris + "</p>" : "";

			let Bild = Golfbanor[i].Bild !== undefined ? "<p class=Bild id=Bild1><b></b>" + Golfbanor[i].Bild + "</p>" : "";

			let Betyg = Golfbanor[i].Betyg !== undefined ? "<p class=Bild id=Betyg><b></b>" + Golfbanor[i].Betyg + "</p>" : "";

			let Webb = Golfbanor[i].Webb !== undefined ? "<p id=Webb><b></b>" + Golfbanor[i].Webb + "</p>" : "";

			let Tillbaka = Golfbanor[i].Tillbaka !== undefined ? "<p id=Tillbaka><b></b><a href=index3.html><img id=back1 src=img/back.png alt=backbutton></a></p>" : "";

			let Par = Golfbanor[i].Par !== undefined ? "<p id=Par><b></b><img class=Ikoner src='" + golfpar + "'alt=golfpar'>" + Golfbanor[i].Par + "</p>" : "";

			let type = Golfbanor[i].type !== undefined ? smapitext += "<h3>" + Golfbanor[i].type + "</h3>" : "";


			smapitext += Namn +
				"<div id=DivIkoner>" +
				Holes +
				Par +
				Range +
				Restaurant +
				Boende +
				Husvagnar +
				Shop +
				SlopeT +
				"</div>" +
				text +
				Bild +
				BetygS +
				Pris +
				Webb +
				Tillbaka +
				Betyg;



		}
		
		
	}smapilistor.innerHTML = smapitext;
}







