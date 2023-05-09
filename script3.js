var myApiKey = "FUsnXFJS";
var smapilistor;
var latitude;
var longitude;
var order_by ="rating"; 
var sort_in ="DESC";
var golfbanorELem;
var shopbild;
var golfclub;
var golffield;
var trailer;
var food;




function init() {
    smapilistor = document.getElementById("lista1");
    textdiv = document.getElementById("show");
    text = document.getElementById("text");
    golfbanorELem=document.getElementById("Golfbanor");
    shopbild = document.getElementById("shopbild").src; 
    golfclub = document.getElementById("golfclub").src;
    golffield = document.getElementById("golffield").src;
    trailer = document.getElementById("trailer").src;
    food = document.getElementById("food").src;
    getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        smapi2(latitude, longitude); 

    }, function(error) {
        console.error("Error getting current position:", error);
    }); 
    document.getElementById("Avstånd").addEventListener("click", function(){
    order_by = "distance_in_km"
    sort_in = "DESC"
    smapi2(); 
    }); 

    document.getElementById("Pris1").addEventListener("click", function(){
        order_by = "price_range";
        sort_in = "DESC";
        smapi2(); 
    })

    document.getElementById("Pris2").addEventListener("click", function(){
        order_by = "price_range";
        sort_in = "ASC";
        smapi2(); 
    })

    document.getElementById("Betyg").addEventListener("click", function(){
        order_by = "rating"; 
        sort_in = "DESC"; 
        smapi2();

    } )

    
    
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
    request.open("GET", "https://smapi.lnu.se/api/?api_key=" + myApiKey + "&controller=establishment&provinces=småland&method=getfromlatlng&descriptions=golfbana&lat=" + latitude + "&lng=" + longitude + "&radius=5000&sort_in="+sort_in+"&order_by=" + order_by);

    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText);
            else textdiv.innerHTML = "Servern hittades inte";
    };
    
}



function displayResponseText(responseText, selectedID) {
    var jsonResponse = JSON.parse(responseText);
    let smapitext = "";
    

    if (smapilistor != null) {
        console.log(jsonResponse)
        if(jsonResponse.payload) {
            console.log("payload")
            for (var i = 0; i < jsonResponse.payload.length; i++) {
            var item = jsonResponse.payload[i];

            smapitext += "<div onclick='addElement("+item.id + ")' id='id-" + item.id + "'><p> <br>" + "<b>" + item.name + "</b>" + "<br>"+
            "Betyg: " + parseFloat(item.rating).toFixed(1) + "<br>" +
           "<a href='" + item.website + "'>Webbplats</a> <br>" +
            "Recensioner: " + item.num_reviews + "<br>" +
            "Pris: " + item.price_range + "<br>" + "Avstånd: " + parseFloat(item.distance_in_km).toFixed(1)+ " km " +  "<hr></p></div>";
            
        } 

        }
       else {
        console.log("golfbanor")
        for (var i = 0; i < jsonResponse.Golfbanor.length; i++) {
        var Golfbanor = jsonResponse.Golfbanor;

        if(Golfbanor[i].id == selectedID){
            let Shop = Golfbanor[i].Shop !== undefined ? "<p><b> Shop: </b><img src='" + shopbild + "' alt='Shop image'>" + Golfbanor[i].Shop + "</p>" : "";
    
            let Husvagnar = Golfbanor[i].Husvagnar !== undefined ? "<p><b> Husvagn: </b><img src='" + trailer + "' alt='trailer'>" + Golfbanor[i].Husvagnar + "</p>" : "";
    
            let Restaurant = Golfbanor[i].Restaurant !== undefined ? "<p><b> Restaurang: </b><img src='" + food + "' alt='restaurant'>" + Golfbanor[i].Restaurant + "</p>" : "";
    
            let Boende = Golfbanor[i].Boende !== undefined ?  "<p><b> Boende: </b>" + Golfbanor[i].Boende + "</p>" : "" ;
    
            let Range = Golfbanor[i].Range !== undefined ? "<p><b> Range: </b><img src='" + golfclub + "' alt='golfclub'>" + Golfbanor[i].Range + "</p>" : "";
    
            let SlopeT = Golfbanor[i].SlopeT !== undefined ?  "<p><b> Slopetabell: </b>" + Golfbanor[i].SlopeT + "</p>" : ""; 
    
            let SlopeK = Golfbanor[i].SlopeK !== undefined ?  "<p><b> Slopkalkylatro: </b>" + Golfbanor[i].SlopeK + "</p>" : "";  
    
            let type = Golfbanor[i].type !== undefined ? smapitext+= "<h3>" + Golfbanor[i].type + "</h3>" :  ""; 
            
           
           
            smapitext+=  
             Golfbanor[i].Name + 
             Golfbanor[i].Holes + 
             Restaurant + 
             Shop + 
             Boende +
             Husvagnar + 
             Range +  
             SlopeT + 
             SlopeK; 
        
        } 
      } 
    }
      
    }
    smapilistor.innerHTML = smapitext;

   
    
}

function addElement (id){
    let request = new XMLHttpRequest();
    
    request.open("GET", "golfklubbar.json?id=" + id, true);
    request.send(null);
    
    request.onreadystatechange = function() {
        if (request.readyState == 4)
            if (request.status == 200) displayResponseText(request.responseText, id);
            else show.innerHTML = "Servern hittades inte";
    };
    
   

    

}


