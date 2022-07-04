function iniciar(){
    var movimientos = 0;
    repartirTarjetas();
    //document.querySelector("#feedback").classList.remove("visible");
    document.querySelectorAll(".contenedorJuego").forEach(function(elemento){
        elemento.addEventListener("click", descubrir);
    });

    iniciaCronometro ()  
}

iniciar();
//document.querySelector("#reiniciar").addEventListener('click', iniciar)