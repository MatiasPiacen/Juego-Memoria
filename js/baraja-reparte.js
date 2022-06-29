function barajarTarjetas (){
    var resultado;

    resultado = totalTarjetas.sort(function(){
       return 0.5 - Math.random();
    })
    return resultado;
}

function repartirTarjetas(){

    var mesa = document.querySelector("#mesa"); 
    var tarjetaBarajadas = barajarTarjetas();

    mesa.innerHTML = "";

    for (var i = 0; i < totalTarjetas.length; i++) {
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML = 
        `<div class='contenedorJuego' data-valor= "${totalTarjetas[i]}
        ">` + 
        `<div class='tarjetas'>` + 
        `<img src='${totalTarjetas[i]
        }'` + `/>` +
        `</div>` +
        `</div>`;

        mesa.appendChild(tarjeta)
} 
}