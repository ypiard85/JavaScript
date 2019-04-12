console.log("exo-7");

var typesTraduits = {                               //objet avec types traduits
    "car": "voiture",
    "house": "maison",
    "game": "jeu",
    "videoGame": "jeu vidéo",
    "show": "spectacle"
}

jsonDatas.forEach(element => element.translatedType = typesTraduits[element.type]); //méthode 1 ajout types traduits
//console.log(jsonDatas);

function addTranslatedType (data1, data2)                        //méthode 2 ajout types traduits
{
    for (var i=0; i < data1.length; i++)
    {
        data1[i].translatedType = data2[data1[i].type];
    }
}

addTranslatedType(jsonDatas, typesTraduits);                     //appel fonction
console.log(jsonDatas);


var input = document.createElement("INPUT");      // Créer un élément <input>
document.body.appendChild(input);                 // Ajoute la balise <input> à la balise <body>

var btn = document.createElement("BUTTON");       // Créer un élément <button>
var t = document.createTextNode("Valider");       // Créer un noeud textuel
btn.appendChild(t);                               // Ajouter le texte au bouton
document.body.appendChild(btn);                   // Ajoute la balise <button> à la balise <body>

var input = document.querySelector('input');

var checkbox = document.createElement("INPUT");
checkbox.setAttribute("type", "checkbox");
document.body.appendChild(checkbox);

btn.onclick = function () {                       //fonction qui affiche les objets du type choisi
    for (var i=0; i < jsonDatas.length; i++)
    {
        if (jsonDatas[i].translatedType === input.value)        //si le type de l'objet i est identique au type saisi
        {
            console.log(checkbox.checked);
            if (checkbox.checked === true)        //si la checkbox est cochée
            {
                if (jsonDatas[i].quantity > 0)
                {
                    console.log(jsonDatas[i]);
                }     
            }
            else                                    //autres cas (checkbox non cochée)
            { 
                console.log(jsonDatas[i]);
            }
        }
    }
}


var btnTriNom = document.createElement("BUTTON");         // Créer un élément <button>
var t1 = document.createTextNode("Trier par nom (ordre alphab.)");        // Créer un noeud textuel
btnTriNom.appendChild(t1);                                // Ajouter le texte au bouton
document.body.appendChild(btnTriNom);                     // Ajoute la balise <button> à la balise <body>

btnTriNom.onclick = function ()                          //fonction qui trie par nom (ordre alphab.)
{
    function trierParNom (a,b) 
    {
        return a.name > b.name;
    }
    jsonDatas.sort(trierParNom);
    console.log(jsonDatas);
}



var btnTriNomD = document.createElement("BUTTON");         // Créer un élément <button>
var t1 = document.createTextNode("Trier par nom (inverse ordre alphab.)");        // Créer un noeud textuel
btnTriNomD.appendChild(t1);                                // Ajouter le texte au bouton
document.body.appendChild(btnTriNomD);                     // Ajoute la balise <button> à la balise <body>

btnTriNomD.onclick = function ()                          //fonction qui trie par nom (inverse ordre alphab.)
{
    function trierParNom (a,b) 
    {
        return a.name < b.name;
    }
    jsonDatas.sort(trierParNom);
    console.log(jsonDatas);
}



var btnTriPrix = document.createElement("BUTTON");        // Créer un élément <button>
var t2 = document.createTextNode("Trier par prix croissant");       // Créer un noeud textuel
btnTriPrix.appendChild(t2);                               // Ajouter le texte au bouton
document.body.appendChild(btnTriPrix);                    // Ajoute la balise <button> à la balise <body>


btnTriPrix.onclick = function ()                          //fonction qui trie par prix croissant
{
    jsonDatas.sort(function(a, b){return a.price - b.price});
    console.log(jsonDatas);
}



var btnTriPrixD = document.createElement("BUTTON");        // Créer un élément <button>
var t3 = document.createTextNode("Trier par prix décroissant");       // Créer un noeud textuel
btnTriPrixD.appendChild(t3);                               // Ajouter le texte au bouton
document.body.appendChild(btnTriPrixD);                    // Ajoute la balise <button> à la balise <body>


btnTriPrixD.onclick = function ()                          //fonction qui trie par prix décroissant
{
    jsonDatas.sort(function(a, b){return b.price - a.price});
    console.log(jsonDatas);
}







