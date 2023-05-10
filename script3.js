var myApiKey = "FUsnXFJS";
var smapilistor;
var latitude;
var longitude;
var order_by = "rating";
var sort_in = "DESC";
var golfbanorELem;
var shopbild;
var golfclub;
var golffield;
var trailer;
var food;
var imgElem
var Golfboll
var hotel




function init() {
    smapilistor = document.getElementById("lista1");
    golfbanorELem = document.getElementById("Golfbanor");
    shopbild = document.getElementById("shopbild").src;
    golfclub = document.getElementById("golfclub").src;
    golffield = document.getElementById("golffield").src;
    trailer = document.getElementById("trailer").src;
    food = document.getElementById("food").src;
    Golfboll =document.getElementById("boll").src; 
    hotel = document.getElementById("hotel").src; 

    getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        smapi2(latitude, longitude);

    }, function (error) {
        console.error("Error getting current position:", error);
    });
    document.getElementById("Avstånd").addEventListener("click", function () {
        order_by = "distance_in_km"
        sort_in = "DESC"
        smapi2();
    });

    document.getElementById("Pris1").addEventListener("click", function () {
        order_by = "price_range";
        sort_in = "DESC";
        smapi2();
    })

    document.getElementById("Pris2").addEventListener("click", function () {
        order_by = "price_range";
        sort_in = "ASC";
        smapi2();
    })

    document.getElementById("Betyg").addEventListener("click", function () {
        order_by = "rating";
        sort_in = "DESC";
        smapi2();

    })



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
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&provinces=småland&method=getfromlatlng&descriptions=golfbana&lat=" + latitude + "&lng=" + longitude + "&radius=5000&sort_in=" + sort_in + "&order_by=" + order_by);

    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText);
            else smapilistor.innerHTML = "Servern hittades inte";
    };

}



function displayResponseText(responseText, selectedID) {
    var jsonResponse = JSON.parse(responseText);
    let smapitext = "";


    if (smapilistor != null) {
        if (jsonResponse.payload) {

            for (var i = 0; i < jsonResponse.payload.length; i++) {
                var item = jsonResponse.payload[i];

                smapitext += "<div onclick='addElement(" + item.id + ")' id='id-" + item.id + "'><p> <br>" +

                "<div id=Namn>" + "<b>" + item.name + "</b>" + "<br></div>" +

                "<div id=Betyg>" + "Betyg: " + parseFloat(item.rating).toFixed(1) + "<br></div>" +

                "<div id=länk>" + "<a href='" + item.website + "'>Webbplats</a> <br></div>" +

                "<div id=Recensioner>" + "Recensioner: " + item.num_reviews + "<br> </div>" +

                "<div id=pris>" + "Pris: " + item.price_range + "<br></div>" +

                "<div id=avstånd>" + "Avstånd: " + parseFloat(item.distance_in_km).toFixed(1) + " km " + "</div>" + "<hr></p></div>";

        
             
        }

        }
        else {
            for (var i = 0; i < jsonResponse.Golfbanor.length; i++) {
                var Golfbanor = jsonResponse.Golfbanor;

                if (Golfbanor[i].id == selectedID) {

                    let Shop = Golfbanor[i].Shop !== undefined ? "<p id=shop><b> </b><img src='" + shopbild + "' alt='Shop image'>" + Golfbanor[i].Shop + "</p>" : "";

                    let Husvagnar = Golfbanor[i].Husvagnar !== undefined ? "<p id=Husvagn><b> Husvagn: </b><img src='" + trailer + "' alt='trailer'>" + Golfbanor[i].Husvagnar + "</p>" : "";

                    let Restaurant = Golfbanor[i].Restaurant !== undefined ? "<p id=Restaurant><b>  </b><img src='" + food + "' alt='restaurant'>" + Golfbanor[i].Restaurant + "</p>" : "";

                    let Boende = Golfbanor[i].Boende !== undefined ? "<p id=Boende><b></b><img src='" + hotel + "' alt='hotel'>" + Golfbanor[i].Boende + "</p>" : "";

                    let Range = Golfbanor[i].Range !== undefined ? "<p id=Range><b> </b><img src='" + golfclub + "' alt='golfclub'>" + Golfbanor[i].Range + "</p>" : "";

                    let SlopeT = Golfbanor[i].SlopeT !== undefined ? "<p id=SlopeT><b>  </b>" + Golfbanor[i].SlopeT + "</p>" : "";

                    let SlopeK = Golfbanor[i].SlopeK !== undefined ? "<p id=SlopeK><b>  </b>" + Golfbanor[i].SlopeK + "</p>" : "";

                    let Namn = Golfbanor[i].Name !== undefined ? "<p id=Namn><b></b>" + Golfbanor[i].Name + "</p>" : "";

                    let Holes = Golfbanor[i].Holes !== undefined ? "<p id=Holes><b></b><img src='"+ Golfboll +"'alt=Golfboll'>" + Golfbanor[i].Holes + "</p>" : "";

                    let text = Golfbanor[i].Text !== undefined ? "<p id=Text><b></b><img src='" +"'alt=Golfboll'>" + Golfbanor[i].Text + "</p>" : "";

                    let type = Golfbanor[i].type !== undefined ? smapitext += "<h3>" + Golfbanor[i].type + "</h3>" : "";



                    smapitext +=
                        Namn +
                        Holes +
                        Restaurant +
                        Shop +
                        Boende +
                        Husvagnar +
                        Range +
                        SlopeT +
                        SlopeK +
                        text +
                        Golfbanor[i].Bild;

                }
                
               
              
            }
        }
        

    }
    smapilistor.innerHTML = smapitext;



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

