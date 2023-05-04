var golfbanorELem

function init() {
    golfbanorELem=document.getElementById("Golfbanor");
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
       if (Golfbanor[i].Shop == undefined)
       HTMLcode==""

       else
         
        HTMLcode+= "<h3>" + Golfbanor[i].type + "</h3>" +
        "<p><b> Namn: </b>" + Golfbanor[i].Name + "</p>" + 
        "<p><b> Hål:  </b>" + Golfbanor[i].Holes + "</p>"+
        "<p><b> Resturang: </b>" + Golfbanor[i].Restaurant + "</p>"+
        "<p><b> Shop: </b>" + Golfbanor[i].Shop + "</p>" + 
        "<p><b> Boende: </b>" + Golfbanor[i].Boende +"</p>" +
        "<p><b> Husvagnar: </b>" + Golfbanor[i].Husvagnar + "</p>" + 
        "<p><b> Range: </b>" + Golfbanor[i].Range + "</p>" + 
        "<p><b> Par: </b>" + Golfbanor[i].Shop + "</p>" + 
        "<p><b> Sloptabell: </b>" + Golfbanor[i].SlopeT + "</p>" + 
        "<p><b> Slopekalkylator: </b>" + Golfbanor[i].SlopeK; 
    

    }
    golfbanorELem.innerHTML = HTMLcode;
}