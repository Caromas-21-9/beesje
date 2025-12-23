fetch("data/afbeeldingen.json")
    .then((antwoord)=>antwoord.json())
    .then(shuffleArray)
    .then(antwoord=>{lijst1=antwoord})
    .then(haalMotivatieOp)
    .catch(error=>{alert(`Er is een fout opgetreden\nFoutboodschap: ${error}`)});

let lijst1;
let lijst2;
let timer1;
let timer2;
let canvas=document.getElementById("canv");
let context=canvas.getContext("2d");
let img=new Image();
let index1=0;
let index2=0;

function shuffleArray(array){
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function haalMotivatieOp(){
    fetch("data/motivatie.json")
        .then((antwoord)=>antwoord.json())
        .then(shuffleArray)
        .then(antwoord=>{lijst2=antwoord})
        .then(main)
        .catch(error=>{alert(`Er is een fout opgetreden\nFoutboodschap: ${error}`)});
}

function main(){
    alert("lay-out zuigt nog steeds");
    alert("laatste toevoeging => Nieuwe liedjes (Finally)");
    alert("I LOVE YOU THE MOST");
    let knop=document.getElementById("start");
    knop.addEventListener("click", klik);
    knop.hidden=false;

    
}

function klik(){
    alert("Ik denk dat jij niet zo goed kunt lezen...");
    let knop=document.getElementById("start");
    knop.innerText="START";
    knop.removeEventListener("click", klik);
    knop.addEventListener("click", toonKnoppen);
    knop.addEventListener("click",vervolgAnimatie);
}

function toonKnoppen(){
    let knop= document.getElementById("start");
    knop.hidden=true;
    knop.removeEventListener("click", toonKnoppen);
    let volgende = document.getElementById("volgende");
    let vorige=document.getElementById("vorige");
    volgende.hidden=false;
    vorige.hidden=false;
    volgende.addEventListener("click", andereAfbeelding);
    vorige.addEventListener("click", andereAfbeelding);
}

function andereAfbeelding(event){
    clearInterval(timer1);
    if(event.target.id.includes("vorige")){
        index1=(index1+lijst1.length-1)%lijst1.length;
    }
    else{
        index1=(index1+1)%lijst1.length;
    }
    nieuweAfbeelding();
    let knop=document.getElementById("start");
    knop.innerText="Hervat automatisch volgende";
    knop.hidden=false;
    knop.addEventListener("click", vervolgAnimatie);

}

function nieuweAfbeelding(){
    img.src="afbeeldingen/"+lijst1[index1]+".jpg";
    img.alt=lijst1[index1];
    img.onload=function(){
        let factor=herschaal();
        let breedte = img.width*factor;
        let hoogte=img.height*factor;
        context.clearRect(0,0, canvas.width, canvas.height);
        context.drawImage(img, (650-breedte)/2, (650-hoogte)/2, breedte, hoogte);
    };
}

function herschaal(){
    return Math.min(600/img.width, 600/img.height);
}


function volgendeAfbeelding(){
    index1=(index1+1)%lijst1.length;
    nieuweAfbeelding();
}

function vervolgAnimatie(){
    timer1=setInterval(volgendeAfbeelding, 2000)
    let start=document.getElementById("start");
    start.hidden=true;
    start.removeEventListener("click", vervolgAnimatie);
    timer2=setInterval(nieuweWoordjes, 4000);
    
}
function nieuweWoordjes(){
    index2=(index2+1)%lijst2.length;
    let quote=document.getElementById("quote");
    quote.innerText=lijst2[index2];
}

