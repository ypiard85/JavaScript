// you can write js here


var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

var replace = ['get', 'right', 'the', 'first', 'time'];

secretMessage.pop();//enleve le dernier élément du tableau
secretMessage.push('to', 'program');//ajout des éléments au tableaux
secretMessage[6] = 'right'
secretMessage.shift()
secretMessage.unshift('Programming')
secretMessage.splice(5,9, 'know' )

console.log(secretMessage.join());
