var myMarkers = [];		// Array med markeringar
var userMarker;			// Objekt för markering där användaren klickar
const markerData = [	// Data för markeringar som hör till knapparna
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
var mapLocationElem;			




function init() {
	initMap();
	mapLocationElem = document.getElementById("mapLocation");
	

	
}
window.addEventListener("load", init);





function initMap() {
	myMap = new google.maps.Map(document.getElementById("map"), {
	  zoom: 7,
	  center: { lat: 57.762352, lng: 14.211483 },
	});

	for (let i = 0; i < markerData.length; i++) {
	  const marker = new google.maps.Marker({
		position: markerData[i].position,
		title: markerData[i].title,
		map: myMap,
	  });
  
	
	  myMarkers.push(marker);
	}
  }
  
  
  

