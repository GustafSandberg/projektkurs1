var golfbanorELem
let hej


function init() {
    golfbanorELem=document.getElementById("Golfbanor");
    hej = document.getElementById("shopbild").src; 
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
    

    for (let i=0; i < Golfbanor.length; i++){

        let Shop = Golfbanor[i].Shop !== undefined ? "<p><b> Shop: </b><img src='" + hej + "' alt='Shop image'>" + Golfbanor[i].Shop + "</p>" : "";


        let Husvagnar = Golfbanor[i].Husvagnar !== undefined ? "<p><b> Husvagn:  </b>" + Golfbanor[i].Husvagnar + "</p>" : "";

        let Restaurant = Golfbanor[i].Restaurant !== undefined ?  "<p><b> Restruang: </b>" + Golfbanor[i].Restaurant + "</p>" : "" ; 

        let Boende = Golfbanor[i].Boende !== undefined ?  "<p><b> Boende: </b>" + Golfbanor[i].Boende + "</p>" : "" ;

        let Range = Golfbanor[i].Range !== undefined ?  "<p><b> Range: </b>" + Golfbanor[i].Range + "</p>" : "" ;

        let SlopeT = Golfbanor[i].SlopeT !== undefined ?  "<p><b> Slopetabell: </b>" + Golfbanor[i].SlopeT + "</p>" : ""; 

        let SlopeK = Golfbanor[i].SlopeK !== undefined ?  "<p><b> Slopkalkylatro: </b>" + Golfbanor[i].SlopeK + "</p>" : "";  

        let type = Golfbanor[i].type !== undefined ? HTMLcode+= "<h3>" + Golfbanor[i].type + "</h3>" :  ""; 
        
       
       
        HTMLcode+=  
        "<p><b> Namn: </b>" + Golfbanor[i].Name + 
        "<p><b> Holes: </b>" + Golfbanor[i].Holes + 
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