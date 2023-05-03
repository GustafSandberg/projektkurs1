var myApiKey = "FUsnXFJS";
var smapilistor;
var latitude;
var longitude;

function init() {
    smapilistor = document.getElementById("lista1");
    textdiv = document.getElementById("textdiv");
    text = document.getElementById("text");
    getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        smapi2();
    }, function(error) {
        console.error("Error getting current position:", error);
    });
}

window.addEventListener("load", init);

function getCurrentPosition(successCallback, errorCallback) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                successCallback(position);
            },
            function(error) {
                errorCallback(error);
            }
        );
    } else {
        errorCallback(new Error("Geolocation is not supported in this browser."));
    }
}

function smapi2() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=activity&method=getfromlatlng&debug=true&descriptions=golfbana&lat=" + latitude + "&lng=" + longitude + "&radius=500");
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText);
            else textdiv.innerHTML = "Servern hittades inte";
    };
    console.log(latitude);
    console.log(longitude);
}

function displayResponseText(responseText) {
    var jsonResponse = JSON.parse(responseText);
    let smapitext = "";

    if (smapilistor != null) {
        for (var i = 0; i < jsonResponse.payload.length; i++) {
            var item = jsonResponse.payload[i];

            smapitext += "<p> <br>" + "<b>" + item.name + "</b>" + "<br>"+
            "Betyg: " + parseFloat(item.rating).toFixed(1) + "<br>" +
           "<a href='" + item.website + "'>Webbplats</a> <br>" +
            "Recensioner: " + item.num_reviews + "<br>" +
            "Pris: " + item.price_range + "<br>" + "Avstånd: " + parseFloat(item.distance_in_km).toFixed(1)+ " km " +  "<hr></p>";
        }
    }
    smapilistor.innerHTML = smapitext;
}
