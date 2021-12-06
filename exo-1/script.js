<<<<<<< HEAD
// you can write js here

var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?") //Création d'une variable pour stocker le degrert en kelvin

var celsius = kelvin - 273 //La température en Kelvin - 273 pour avoir le degret en celsius

var fahrenheit = celsius * (9/5) + 32 //Formule pour avoir la température fahrenheit

var fahrenheitFloor = Math.floor(fahrenheit)

console.log(fahrenheitFloor);
=======
var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");

kelvin = parseInt(kelvin);              //on convertit la saisie en nombre entier

celsius = kelvin - 273;                 //on convertit en degrés celsius

let fahrenheit = celsius * (9/5) + 32;  //on multiplie celsius par 9/5 et on lui ajoute 32 pour obtenir fahrenheit

console.log(kelvin + " degrés Kelvin = " + celsius + " degrés Celsius")

console.log(kelvin + " degrés Kelvin = " + Math.floor(fahrenheit) + " degrés Farenheit");    //on applique la méthode floor à farenheit pour obtenir un entier

>>>>>>> b7f180a7a8af036fcb2af9024223c312b4c878c9
