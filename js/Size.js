var plotis;
var ilgis;
var storis;
    Skaiciuoti = document.getElementById('Skaiciuoti').value;

    if (2070 <= plotis && plotis <= 2470) {
        document.getElementById('rezultatas').innerHTML = plotis + "pagaminti galime";
    } else if (2000 <= ilgis && ilgis <= 2800){
        document.getElementById('rezultatas1').innerHTML = ilgis + "pagaminti galime";
        }
        else if (10 <= storis && storis <= 40){
        document.getElementById('rezultatas2').innerHTML = storis + "pagaminti galime"
        }







