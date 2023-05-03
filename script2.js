var myApiKey = "FUsnXFJS";
var smapilistor;
var latitude;
var longitude;
var radie = 50

function init() {

    
    smapilistor = document.getElementById("lista1");
    textdiv = document.getElementById("textdiv");
    text = document.getElementById("text");
    getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        smapi2(latitude, longitude); ;
    }, function(error) {
        console.error("Error getting current position:", error);
    });
    document.getElementById("Avstånd").addEventListener("click", function(){
        radie = "50"
        smapi2(); 
        }); 

    document.getElementById("Pris").addEventListener("click", function(){
            radie = "100"
            smapi2(); 
            }); 

    document.getElementById("Betyg").addEventListener("click", function(){
                radie = "200"
                smapi2(); 
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
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getfromlatlng&debug=true&descriptions=golfbana&lat=" + latitude + "&lng=" + longitude + "&radius=" + radie + "&sort_in=DESC&order_by=distance_in_km");
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText);
            else textdiv.innerHTML = "Servern hittades inte";
    };
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

function smapifilter() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getstats&debug=true&descriptions=golfbana")
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText);
            else textdiv.innerHTML = "Servern hittades inte";
    };

}

