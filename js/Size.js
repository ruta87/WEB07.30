/*var plotis;
var ilgis;
*/
   /* Skaiciuoti = document.getElementById('Skaiciuoti').value;

    if (2070 <= plotis && plotis <= 2470) {
        document.getElementById('rezultatas').innerHTML = plotis + "pagaminti galime";
    } else {
        document.getElementById('rezultatas').innerHTML = plotis + "pagaminti negalime";
        }

*/

   function Skaiciuoti()
   {
       var plotis = document.getElementById('plotis').value;
       var ilgis = document.getElementById('ilgis').value;
       var storis = document.getElementById('storis').value;

       if (2070 <= plotis && plotis <= 2470) {
           document.getElementById('rezultatas').innerHTML = plotis + " pagaminti galime";
       }else {
           document.getElementById('rezultatas').innerHTML = plotis + " pagaminti negalime";
       }
   }

