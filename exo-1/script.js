var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");

parseInt(kelvin);                       //on convertit la saisie en nombre entier

var kelvin2 = Number(kelvin);           //on fait comprendre au programme que c'est bien un nombre

celsius = kelvin2 - 273;                //on convertit en degrés celsius

let fahrenheit = celsius * (9/5) + 32;  //on multiplie celsius par 9/5 et on lui ajoute 32 pour obtenir fahrenheit

console.log(Math.floor(fahrenheit));    //on applique la méthode floor à farenheit pour obtenir un entier
