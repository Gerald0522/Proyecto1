
const iconos = document.querySelectorAll(".icono-extintor");

const sonido = new Audio("fuego.mp3");
sonido.loop = true;

iconos.forEach(function(icono) {

    icono.addEventListener("mouseenter", function() {
        sonido.play().catch(function(error) {
            console.log("Audio bloqueado:", error);
        });
    });

    icono.addEventListener("mouseleave", function() {
        sonido.pause();
        sonido.currentTime = 0;
    });

});
