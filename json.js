var golfbanorELem;
var shopbild;
var golfclub;
var golffield;
var trailer;
var food;


function init() {
    golfbanorELem=document.getElementById("Golfbanor");
    shopbild = document.getElementById("shopbild").src; 
    golfclub = document.getElementById("golfclub").src;
    golffield = document.getElementById("golffield").src;
    trailer = document.getElementById("trailer").src;
    food = document.getElementById("food").src;
    requestData(); 
    
}
window.addEventListener("load", init);

function requestData(){
    let request = new XMLHttpRequest(); 
    request.open ("GET", "golfklubbar.json", true); 
    request.send(null); 

    request.onreadystatechange = function (){
        if (request.readyState ==4)
        if (request.status == 200) getData(request.responseText); 
        else document.getElementById("Golfbanor").innerHTML ="Den begärda resursen finns inte"; 

    }
}

function getData(JSONtext){
    let Golfbanor = JSON.parse(JSONtext).Golfbanor; 

    let HTMLcode = ""; 
    

    for (let i=0; i < Golfbanor.length; i++){ //turner operator 

        let Shop = Golfbanor[i].Shop !== undefined ? "<p><b> Shop: </b><img src='" + shopbild + "' alt='Shop image'>" + Golfbanor[i].Shop + "</p>" : "";


        let Husvagnar = Golfbanor[i].Husvagnar !== undefined ? "<p><b> Husvagn: </b><img src='" + trailer + "' alt='trailer'>" + Golfbanor[i].Husvagnar + "</p>" : "";

        let Restaurant = Golfbanor[i].Restaurant !== undefined ? "<p><b> Restaurang: </b><img src='" + food + "' alt='restaurant'>" + Golfbanor[i].Restaurant + "</p>" : "";

        let Boende = Golfbanor[i].Boende !== undefined ?  "<p><b> Boende: </b>" + Golfbanor[i].Boende + "</p>" : "" ;

        let Range = Golfbanor[i].Range !== undefined ? "<p><b> Range: </b><img src='" + golfclub + "' alt='golfclub'>" + Golfbanor[i].Range + "</p>" : "";

        let SlopeT = Golfbanor[i].SlopeT !== undefined ?  "<p><b> Slopetabell: </b>" + Golfbanor[i].SlopeT + "</p>" : ""; 

        let SlopeK = Golfbanor[i].SlopeK !== undefined ?  "<p><b> Slopkalkylatro: </b>" + Golfbanor[i].SlopeK + "</p>" : "";  

        let type = Golfbanor[i].type !== undefined ? HTMLcode+= "<h3>" + Golfbanor[i].type + "</h3>" :  ""; 
        
       
       
        HTMLcode+=  
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
    golfbanorELem.innerHTML = HTMLcode;
}