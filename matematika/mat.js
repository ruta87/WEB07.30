var b=10;
var i=0;

while(i<b){
    i++;
    console.log(i);
}
document.getElementById("rezultatas"). innerHTML = 5+6;
function f() {
vardas=document.getElementById("vardas").value;
amzius=document.getElementById("amzius").value;
var dabar=(new Date()).getFullYear();
document.getElementById('vardas_r').innerHTML= vardas;
document.getElementById('amzius_r').innerHTML=(dabar-amzius)
}