var plotis;
var ilgis;
var storis;

plotis=document.getElementById('plotis').value;
var Skaiciuoti=function(){
if(2070<=plotis<=2470){
    Plotis=0;
    document.getElementById('rezultatas').innerHTML = plotis + "pagaminti galime";
}
else{
    document.getElementById('rezultatas').innerHTML = plotis + "pagaminti negalime";
}}
ilgis=document.getElementById('ilgis').value;
var Skaiciuoti=function(){
if(2000<=ilgis<=2800){
    document.getElementById('rezultatas1').innerHTML = ilgis + "pagaminti galime";
}
else{
    document.getElementById('rezultatas1').innerHTML = ilgis + "pagaminti negalime";
}}
storis=document.getElementById('storis').value;
var Skaiciuoti=function(){
if(10<=storis<=40){
    document.getElementById('rezultatas2').innerHTML = storis + "pagaminti galime";
}
else{
    document.getElementById('rezultatas2').innerHTML = storis + "pagaminti negalime";
}}