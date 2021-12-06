// you can write js here
console.log('exo-5');

var input = 'Vive le vent';                    // 1) variable "input"
var input = input.toUpperCase();               // convertie en majuscules => plus pratique pour la suite
console.log(input);

var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];   // 2) Tableau des voyelles, en majuscules

var resultArray = [];                          // 3) Tableau qui va stocker le résultat

for (let letter of input)                      // 4) 5) 6) boucle version 1 (for of et indexOf)
{
    console.log(letter);

    if (vowels.indexOf(letter) !== -1) {
        resultArray.push(letter);
    }

}

console.log(resultArray.join(""));

var input = 'Bonjour, la terre ceci est la phrase à traduire';
var input = input.toUpperCase();

var vowels = ['A','E','I','O','U','Y'];

var resultArray = [];

for(let letter of input){
   if(vowels.indexOf(letter) !== -1 ){
    resultArray.push(letter);
}
}

console.log(resultArray.join(''));
