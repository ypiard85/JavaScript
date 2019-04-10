var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");
parseInt(kelvin);
let celsius = kelvin-273;               //on soustrait 273 à kelvin pour obtenir celsius
let fahrenheit = celsius * (9/5) + 32;  //on multiplie celsius par 9/5 et on lui ajoute 32 pour obtenir fahrenheit
console.log(Math.floor(fahrenheit));    //on applique la méthode floor à farenheit pour obtenir un entier
