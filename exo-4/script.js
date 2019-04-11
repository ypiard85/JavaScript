// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

var last = secretMessage.pop();                            //supprime le dernier élément du tableau
var newLength = secretMessage.push('to','program');        //ajoute des éléments à la fin
var position = secretMessage.indexOf('easily');            //récupère l'index du mot
secretMessage.splice(position, 1, 'right');                //insère "right" au niveau de l'index de "easily" (le remplace)
var first = secretMessage.shift();                         //supprime le 1er élément du tableau
var newLength = secretMessage.unshift('Programming');      //ajoute un élément au début du tableau
var position2 = secretMessage.indexOf('get', 'right', 'the', 'first', 'time'); //on récupère l'index des 5 mots
secretMessage.splice(position2, 5, 'know');                //on les remplace par 'know'

console.log(secretMessage.join(' '));                      //afficher le message en séparant les mots par des espaces
