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


                                                                       //formulaire ajout article
var f = document.createElement("form");
f.setAttribute('method',"get");
f.setAttribute('action',"index.html");

var inputName = document.createElement("input");                        //input "nom"
inputName.setAttribute('type',"text"); 
inputName.setAttribute('name',"name");

var inputType = document.createElement("input");                       //input "type"
inputType.setAttribute('type',"text"); 
inputType.setAttribute('name',"type");

var inputDescr = document.createElement("input");                               //input "description"
inputDescr.setAttribute('type',"text"); 
inputDescr.setAttribute('name',"description");

var inputPrice = document.createElement("input");                              //input "prix"
inputPrice.setAttribute('type',"text"); 
inputPrice.setAttribute('name',"price");

var inputQuant = document.createElement("input");                              //input "quantité"
inputQuant.setAttribute('type',"text"); 
inputQuant.setAttribute('name',"quantity");

var buttonSubmit = document.createElement("input");                              //bouton "valider"
buttonSubmit.setAttribute('type',"submit");
buttonSubmit.setAttribute('value',"Ajouter article");

f.appendChild(inputName);
f.appendChild(inputType);
f.appendChild(inputDescr);
f.appendChild(inputPrice);
f.appendChild(inputQuant);
f.appendChild(buttonSubmit);

document.getElementsByTagName('body')[0].appendChild(f);

buttonSubmit.onclick = function AddArticle () {
    jsonDatas[jsonDatas.length] = {
        name: document.forms[0].elements["name"].value,
        type: document.forms[0].elements["type"].value,
        description: document.forms[0].elements["description"].value,
        price: document.forms[0].elements["price"].value,
        quantity: document.forms[0].elements["quantity"].value,
    };
    console.log(jsonDatas);
}

f.addEventListener("submit", function (e) {
    e.preventDefault();
    alert('Formulaire envoyé !');
});


console.log (jsonDatas);

for (var i=0; i < jsonDatas.length; i++)
    {
        for (var j=0; j < jsonDatas[i].items.length; j++)
        {
            console.log(jsonDatas[i].items[j]["contact"]);
        }

    }









