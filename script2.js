
var myApiKey = "FUsnXFJS";
var smapilistor;
var latitude;
var longitude;
var radie = 50
var golfbanorELem;
var shopbild;
var golfclub;
var golffield;
var trailer;
var food;
var hotel;
var tabell;
var smapilistor2 = "";
var smapitext2;
var header;
var golfpar;
var KartaMapss;
var MapsID
var Show = true
var jsonLat
var jsonLng
var jsonBild


function init() {
    KartaMaps = document.getElementById("KartaBtn").addEventListener("click", ShowMap);
    smapilistor = document.getElementById("lista1");
    smapilistor2 = document.getElementById("listajson");
    golfbanorELem = document.getElementById("Golfbanor");
    shopbild = document.getElementById("shopbild").src;
    golfclub = document.getElementById("golfclub").src;
    golffield = document.getElementById("golffield").src;
    food = document.getElementById("food").src;
    Golfboll = document.getElementById("boll").src;
    hotel = document.getElementById("hotel").src;
    tabell = document.getElementById("sloptabell").src;
    header = document.getElementById("header");
    golfpar = document.getElementById("golfpar").src;


    getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        smapi2(latitude, longitude);

    }, function (error) {
        console.error("Error getting current position:", error);
    });
    document.getElementById("Avstånd").addEventListener("click", function () {
        radie = "50"
        smapi2();
    });

    document.getElementById("Pris").addEventListener("click", function () {
        radie = "100"
        smapi2();
    });

    document.getElementById("Betyg").addEventListener("click", function () {
        radie = "200"
        smapi2();
    });

}

window.addEventListener("load", init);



function getCurrentPosition(successCallback, errorCallback) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                successCallback(position);
            },
            function (error) {
                errorCallback(error);
            }
        );
    } else {
        errorCallback(new Error("Geolocation is not supported in this browser."));
    }
}

function smapi2() {
    let request = new XMLHttpRequest();
    request.responseType = "json";
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getfromlatlng&descriptions=golfbana&lat=" + latitude + "&lng=" + longitude + "&radius=" + radie + "&sort_in=DESC&order_by=distance_in_km", true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                displayResponseText(request.response);
            } else {
                textdiv.innerHTML = "Servern hittades inte";
            }
        }
    };
}

function displayResponseText(response, selectedID) {
    var jsonResponse = response;
    let smapitext2 = "";

    if (smapilistor != null) {
        for (var i = 0; i < jsonResponse.payload.length; i++) {
            var item = jsonResponse.payload[i];

            smapitext2 += "<div onclick='addElement(" + item.id + ")' id='id-" + item.id + "'> " +
                "<div id=NamnAPI>" + item.name + "</div>" + "<div id=ratingprice>" +
                "<p id=BetygAPI>" + parseFloat(item.rating).toFixed(1) + "/5 <img src='img/stars/star.png' alt='star' id='star'></p>" +
                "<p id=PrisAPI>" + item.price_range + " kr <img src ='img/money.png' alt='money' id='money'></p>" +
                "<p id=AvståndAPI>" + parseFloat(item.distance_in_km).toFixed(1) + " km <img src ='img/route.png' alt='route' id='route'></p>" + "</div></div>";
        }
        smapilistor2.innerHTML = smapitext2;
    }
    requestPic(jsonResponse);
}

function addElement(id) {
    let request = new XMLHttpRequest();

    request.open("GET", "golfklubbar.json?id=" + id, true);
    request.send(null);

    request.onreadystatechange = function () {
        if (request.readyState == 4)
            if (request.status == 200) {
                showMoreInfoJson(request.responseText, id);
            }
            else smapilistor.innerHTML = "Servern hittades inte";
    };

}

function showMoreInfoJson(responseText, selectedID) {
    var jsonResponse = JSON.parse(responseText);
    let smapitext = "";
    document.getElementById("KartaBtn").classList.remove("hidden");


    for (var i = 0; i < jsonResponse.Golfbanor.length; i++) {
        var Golfbanor = jsonResponse.Golfbanor;
        smapilistor2.innerHTML = "";
        header.innerHTML = "";

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

            let Tillbaka = Golfbanor[i].Tillbaka !== undefined ? "<p id=Tillbaka><b></b><a href=index2.html><img id=back1 src=img/cross.png alt=backbutton></p>" : "";

            let Par = Golfbanor[i].Par !== undefined ? "<p id=Par><b></b><img class=Ikoner src='" + golfpar + "'alt=golfpar'>" + Golfbanor[i].Par + "</p>" : "";

            let PrisBild = Golfbanor[i].PrisBild !== undefined ? "<p class=Bild id=PrisBild <b></b>" + Golfbanor[i].PrisBild + "</p>" : "";

            let Hem = Golfbanor[i].Hem !== undefined ? "<p><b></b><a href=index.html><img id=hem src=img/home.png alt=homeBTN></p>" : "";

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
                "<div id=betygpriser>" +
                Betyg +
                BetygS +
                Pris +
                PrisBild +
                "</div>" +
                Webb +
                "<div id=Navigering>" +
                Hem +
                Tillbaka + "</div>";

        }
        smapilistor.innerHTML = smapitext;
    }
}

function smapifilter() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getstats&debug=true&descriptions=golfbana")
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText);
            else textdiv.innerHTML = "Servern hittades inte";
    };

}



function ShowMap() {

    if (Show) {
        Show = false;
        document.getElementById("KartaMaps").classList.remove("hidden");
        KartaMaps = new google.maps.Map(document.getElementById("KartaMaps"), {
            zoom: 6.5,
            center: { lat: 57.4254, lng: 15.0865 },

        });
        const marker = new google.maps.Marker({
            position: { lat: Number(jsonLat), lng: Number(jsonLng) },
            map: KartaMaps,
        });
        const marker2 = new google.maps.Marker({
            position: { lat: latitude, lng: longitude},
            map: KartaMaps,
        });
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        
        directionsRenderer.setMap(KartaMaps);
        
        const request = {
            origin: { lat: latitude, lng: longitude  },
            destination: { lat: Number(jsonLat), lng: Number(jsonLng)},
            travelMode: google.maps.TravelMode.DRIVING
        };
        
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
            }
        });
    }
    else {
        Show = true;
        document.getElementById("KartaMaps").classList.add("hidden");
    }

}

function requestPic(smapiResponse) {
    let request = new XMLHttpRequest();
    request.open("GET", "golfklubbar.json", true);
    request.send(null);

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                ShowPic(request.responseText, smapiResponse);
            } else {
                smapilistor.innerHTML = "Servern hittades inte";
            }
        }
    };
}

function ShowPic(jsonResponse, smapiResponse) {
    var jsonResponseParsed = JSON.parse(jsonResponse);
    var smapiResponseParsed = smapiResponse.payload;

    for (var i = 0; i < smapiResponseParsed.length; i++) {
        let bildID = smapiResponseParsed[i].id;
        var golfbanor = jsonResponseParsed.Golfbanor;

        for (var j = 0; j < golfbanor.length; j++) {
            if (bildID == golfbanor[j].id) {
                let Bild = golfbanor[j].Bild !== undefined ? "<p><b></b>" + golfbanor[j].Bild + "</p>" : "";
                document.getElementById("id-" + bildID).innerHTML += Bild;
            }
        }
    }
}


