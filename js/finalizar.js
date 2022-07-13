function finalizar(){
    if (nivelActual < niveles.length -1){
        document.querySelector("#subeNivel").clasList.add("visible");
    } else{
        document.querySelector("#endGame").classList.add("visible");
    }

}