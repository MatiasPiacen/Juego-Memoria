var movimientos = 0;
var grupoTarjetas = [
    ["Pokemons/1.jpg", "Pokemons/2.jpg"]
    ["Pokemons/3.jpg", "Pokemons/4.jpg"],
    ["Pokemons/5.jpg", "Pokemons/6.jpg", "./Pokemons/7.jpg", "./Pokemons/8.jpg"], 
    ["Pokemons/9.jpg", "Pokemons/10.jpg", "./Pokemons/11.jpg", "./Pokemons/12.jpg"], 
    ["Pokemons/13.jpg", "Pokemons/14.jpg", "./Pokemons/15.jpg", "./Pokemons/16.jpg"]
];
var nivelActual = 0;
var niveles = [
    {
      tarjetas: grupoTarjetas[0],
      movimientosMax: 3
    },
    {
      tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
      movimientosMax: 8
    },
    {
      tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
      movimientosMax: 12
    },
    {
      tarjetas: grupoTarjetas[0].concat(
        grupoTarjetas[1],
        grupoTarjetas[2],
        grupoTarjetas[3]
      ),
      movimientosMax: 25
    },
    {
      tarjetas: grupoTarjetas[0].concat(
        grupoTarjetas[1],
        grupoTarjetas[2],
        grupoTarjetas[3],
        grupoTarjetas[4]
      ),
      movimientosMax: 60
    }
  ];
  

// var grupoTarjetas = ["./Pokemons/1.jpg", "./Pokemons/2.jpg", "./Pokemons/3.jpg", "./Pokemons/4.jpg", "./Pokemons/5.jpg", "./Pokemons/6.jpg", "./Pokemons/7.jpg", "./Pokemons/8.jpg", "./Pokemons/9.jpg", "./Pokemons/10.jpg", "./Pokemons/11.jpg", "./Pokemons/12.jpg", "./Pokemons/13.jpg", "./Pokemons/14.jpg", "./Pokemons/15.jpg", "./Pokemons/16.jpg",]