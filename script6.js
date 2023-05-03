var myMap;				// Objekt för kartan
var myMarkers = [];		// Array med markeringar
var userMarker;			// Objekt för markering där användaren klickar
const markerData = [	// Data för markeringar som hör till knapparna
	{ position: { lat: 56.8748706, lng: 14.8512938 }, title: "Blåbärsstället" },
	{ position: { lat: 56.8743684, lng: 14.8519691 }, title: "Lägenheter" },
	{ position: { lat: 56.8743708, lng: 14.8480399 }, title: "Simon" },
	{ position: { lat: 56.8739679, lng: 14.8521956 }, title: "Nybyggda området" },
	{ position: { lat: 56.8735313, lng: 14.8530707 }, title: "Skolan" }
];
var mapLocationElem;			




function init() {
	initMap();
	mapLocationElem = document.getElementById("mapLocation");
	

	for (let i = 0; i < markerData.length; i++) {
		let btnTitle = markerData[i].title;
		let btn = document.querySelectorAll("#addrBtns button")[i];
		btn.innerHTML = btnTitle;
		btn.setAttribute("data-ix", i);
		btn.addEventListener("click", function () {
			let i = parseInt(this.getAttribute("data-ix"));
			showAddrMarker(i);
		});
	}
}// End init
window.addEventListener("load", init);

// -----------------------------------------------------------------------------------------

// Skapa en karta och markeringar
function initMap() {
	myMap = new google.maps.Map(
		document.getElementById('map'),
		{
			center: { lat: 56.8735505, lng: 14.8450679 },
			zoom: 14.5
			,
			styles: [
				{ featureType: "poi", stylers: [{ visibility: "off" }] },  // No points of interest.
				{ featureType: "transit.station", stylers: [{ visibility: "off" }] }  // No bus stations, etc.
			]
		}
	);
	for (let i = 0; i < markerData.length; i++) {
		let newMarker = new google.maps.Marker(markerData[i]); // Objekt för markering
		myMarkers.push(newMarker);
	}
	userMarker = null;
	google.maps.event.addListener(myMap, "click", newUserMarker);
} // End initMap

// Sätt markerns position till var användaren klickade och lägg in markern på kartan.
function newUserMarker(e) {
	hideMarkers();
	userMarker = new google.maps.Marker();
	userMarker.setPosition(e.latLng);
	userMarker.setMap(myMap);
	let latlong = e.latLng;
	mapLocationElem.innerHTML = "<p>Latitud: " + latlong.lat() + " " + "Longitud: " + latlong.lng() + "</p>";

} // End newUserMarker

// Visa marker för den adressknapp som användaren klickat på
function showAddrMarker(i) {
	hideMarkers();
	myMarkers[i].setMap(myMap);
} // End showAddrMarker

// Dölj alla markeringar
function hideMarkers() {
	for (let i = 0; i < myMarkers.length; i++) {
		myMarkers[i].setMap(null);
	}
	if (userMarker) userMarker.setMap(null);
	mapLocationElem.innerHTML = "";
}