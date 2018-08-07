var b=10;
var i=0;

while(i<b){
    i++;
    console.log(i);
}
var amzius;
var vardas;
document.getElementById("rezultatas"). innerHTML = 5+6;
var Skaiciuoti = function () {
    var dabar =(new Date()).getFullYear();
vardas=document.getElementById("vardas").value;
amzius=document.getElementById("amzius").value;

document.getElementById('rezultatas').innerHTML = vardas + ' gimė ' + (dabar - amzius);
}