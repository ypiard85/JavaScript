// you can write js here
console.log('exo-5');

var input0 = 'Vive le vent';
var input = input0.toUpperCase();
console.log(input);
var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
var resultArray = [];

for (let letter of input)                      //version 1 (for of et indexOf)
{
    console.log(letter);
    // if (vowels.includes(letter) === true)
    if (vowels.indexOf(letter) != -1)
    {
        resultArray.push(letter);
    }
} 
console.log(resultArray);

for (let i=0 ; i<input.length ; i++)           //version 2 (for et includes)
{
console.log(input[i]);
if (vowels.includes(input[i]) === true)
{
resultArray.push(input[i]);
}
}
console.log(resultArray);

//input.forEach()
