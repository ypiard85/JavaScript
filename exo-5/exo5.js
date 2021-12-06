// you can write js here

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