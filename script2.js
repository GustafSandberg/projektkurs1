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
//var golfboll
var hotel;
var tabell;
var smapilistor2 = "";
var smapitext2;
var header;
var golfpar;


function init() {
    smapilistor = document.getElementById("lista1");
    golfbanorELem = document.getElementById("Golfbanor");
    smapilistor2 = document.getElementById("listajson");
    shopbild = document.getElementById("shopbild").src;
    golfclub = document.getElementById("golfclub").src;
    golffield = document.getElementById("golffield").src;
    trailer = document.getElementById("trailer").src;
    food = document.getElementById("food").src;
    //golfboll = document.getElementById("golfboll"); 
    Golfboll = document.getElementById("boll").src;
    hotel = document.getElementById("hotel").src;
    tabell = document.getElementById("sloptabell").src;
    header = document.getElementById("header");
    golfpar = document.getElementById("golfpar").src;


    getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        smapi2(latitude, longitude);;
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
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&method=getfromlatlng&debug=true&descriptions=golfbana&lat=" + latitude + "&lng=" + longitude + "&radius=" + radie + "&sort_in=DESC&order_by=distance_in_km");
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText);
            else textdiv.innerHTML = "Servern hittades inte";
    };
}

function displayResponseText(responseText, selectedID) {
    var jsonResponse = JSON.parse(responseText);
    let smapitext = "";
    let smapitext2 = "";

    if (smapilistor != null) {
        if (jsonResponse.payload) {
            for (var i = 0; i < jsonResponse.payload.length; i++) {
                var item = jsonResponse.payload[i];

                smapitext2 += "<div onclick='addElement(" + item.id + ")' id='id-" + item.id + "'><p> <br>" +

                    "<div id=NamnAPI>" + "<b>" + item.name + "</b>" + "<br></div>" +

                    "<div id=BetygAPI>" + "Betyg: " + parseFloat(item.rating).toFixed(1) + "<br></div>" +

                    "<div id=PrisAPI>" + "Pris: " + item.price_range + "<br></div>" +

                    "<div id=AvståndAPI>" + "Avstånd: " + parseFloat(item.distance_in_km).toFixed(1) + " km " + "</div>" + "<hr></p></div>";
            }
            smapilistor2.innerHTML = smapitext2;
        }
        else {
            for (var i = 0; i < jsonResponse.Golfbanor.length; i++) {
                var Golfbanor = jsonResponse.Golfbanor;
                smapilistor2.innerHTML = "";
                header.innerHTML = "";

                if (Golfbanor[i].id == selectedID) {


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

                    let Tillbaka = Golfbanor[i].Tillbaka !== undefined ? "<p id=Tillbaka><b></b>" + Golfbanor[i].Tillbaka + "</p>" : "";

                    let Par = Golfbanor[i].Par !== undefined ? "<p id=Par><b></b><img class=Ikoner src='" + golfpar + "'alt=golfpar'>" + Golfbanor[i].Par + "</p>" : "";

                    let type = Golfbanor[i].type !== undefined ? smapitext += "<h3>" + Golfbanor[i].type + "</h3>" : "";



                    smapitext +=

                        Namn +
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



            }
        }

        smapilistor.innerHTML = smapitext;
    }
}

function addElement(id) {
    let request = new XMLHttpRequest();

    request.open("GET", "golfklubbar.json?id=" + id, true);
    request.send(null);

    request.onreadystatechange = function () {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText, id);
            else smapilistor.innerHTML = "Servern hittades inte";
    };





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

