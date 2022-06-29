function descubrir (){
    var descubiertas;
    var tarjetasPendientes;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)")
    if (totalDescubiertas.length > 1){
        return;
    }
    
    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)")
    if (descubiertas.length < 2){
        return;
    }
    comparar(descubiertas);
    actualizarContador();
    tarjetasPendientes = document.querySelectorAll(".contenedorJuego:not(.acertada)");
    if(tarjetasPendientes.length === 0){
        finalizar();
    }
}

function comparar(tarjetasAcomparar){
    if (tarjetasAcomparar[0].dataset.valor === tarjetasAcomparar[1].dataset.valor){
        acierto(tarjetasAcomparar);
    }
    else {
        error(tarjetasAcomparar);
    }  

}

   