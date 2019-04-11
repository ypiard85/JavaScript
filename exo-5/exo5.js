// you can write js here
console.log('exo-5');

var input0 = 'Vive le vent';
var input = input0.toUpperCase();
console.log(input);
var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
var resultArray = [];

for (let letter of input)
{
    console.log(letter);
    // if (vowels.includes(letter) === true)
    if (vowels.indexOf(letter) != -1)
    {
        resultArray.push(letter);
    }
} 
console.log(resultArray);
