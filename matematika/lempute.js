
function changeImage() {
    elementas = document.getElementById('lempa');
    if (elementas.src.match("light-bulb.jpg")) {
        elementas.src = "bulbOn.jpg";
    } else {
        elementas.src = "light-bulb.jpg";
    }
}
