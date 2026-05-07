

const knapp = document.getElementById("mogelBtn");
const sida1 = document.getElementById("mogelOstSida1");
const sida2 = document.getElementById("mogelOstSida2");

knapp.addEventListener("click", function() {
    sida1.classList.add("displayNone");    // göm sida 1
    sida2.classList.remove("displayNone"); // visa sida 2
});



document.addEventListener("DOMContentLoaded", function() {
    const knapp = document.getElementById("mogelBtn");
    const sida1 = document.getElementById("mogelOstSida1");
    const sida2 = document.getElementById("mogelOstSida2");
    const boxBild = document.getElementById("boxBild");

    knapp.addEventListener("click", function() {
        sida1.classList.add("displayNone");
        sida2.classList.remove("displayNone");
    });

    // Klick på Box.png
    boxBild.addEventListener("click", function() {
        boxBild.style.position = "absolute";
        boxBild.style.top = "??px";   // ← ange din Y-position här
        boxBild.style.left = "??px";  // ← ange din X-position här
    });
});