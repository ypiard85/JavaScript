// you can write js here

var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?") //Création d'une variable pour stocker le degrert en kelvin

var celsius = kelvin - 273 //La température en Kelvin - 273 pour avoir le degret en celsius

var fahrenheit = celsius * (9/5) + 32 //Formule pour avoir la température fahrenheit

var fahrenheitFloor = Math.floor(fahrenheit)

console.log(fahrenheitFloor);