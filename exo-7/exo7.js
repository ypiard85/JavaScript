console.log("exo-7");

for (var i=0; i < jsonDatas.length; i++)            //afficher tous les objets
    {
        for (var j=0; j < jsonDatas[i].items.length; j++)
        {
            console.log(jsonDatas[i].items[j]);
        }

    }

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

//console.log(jsonDatas);

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
            if (checkbox.checked === true)                        //si la checkbox est cochée
            {   
                for (var j = 0; j < jsonDatas[i].items.length; j++)         //on parcourt les articles de l'objet
                {
                    if (jsonDatas[i].items[j].quantity > 0)             
                    {
                        console.log(jsonDatas[i].items[j]);              //on affiche l'article (implicite : pas d'affichage si stock à 0)
                    }     
                }
            }
            else                                              //autres cas (checkbox non cochée)
            { 
                console.log(jsonDatas[i]);
            }
        }
    } 
}

var allArticles = [];                                 //on définit un tableau vide qui contient...
                                                      //...tous les articles
for (var i=0; i < jsonDatas.length; i++)              //on parcourt les catégories
{   

    for (var j=0; j < jsonDatas[i].items.length; j++) //puis les articles de chaque catégorie
    {
        allArticles.push(jsonDatas[i].items[j]);     //on ajoute chaque article au tableau avec push
    }
}

//***********************/TRIER PAR NOM (ORDRE ALPHABÉTIQUE)****************************

var btnTriNom = document.createElement("BUTTON");         // Créer un élément <button>
var t1 = document.createTextNode("Trier par nom (ordre alphab.)");        // Créer un noeud textuel
btnTriNom.appendChild(t1);                                // Ajouter le texte au bouton
document.body.appendChild(btnTriNom);                     // Ajoute la balise <button> à la balise <body>

btnTriNom.onclick = function ()                          //clic sur bouton = appel fonction
{
    function trierParNom (a,b)                            //fonction qui trie par nom (ordre alphab.)  
    {
        return a.name > b.name;
    }
    
    allArticles.sort(trierParNom);                      //on applique le tri au tableau des articles
    console.log(allArticles);                           //on affiche le résultat
}


//***********************/TRIER PAR NOM (ORDRE INVERSE ALPHABET)****************************

var btnTriNomD = document.createElement("BUTTON");         // Créer un élément <button>
var t1 = document.createTextNode("Trier par nom (inverse ordre alphab.)");        // Créer un noeud textuel
btnTriNomD.appendChild(t1);                                // Ajouter le texte au bouton
document.body.appendChild(btnTriNomD);                     // Ajoute la balise <button> à la balise <body>

btnTriNomD.onclick = function ()                          //clic sur bouton = appel fonction
{
    function trierParNom (a,b)                            //fonction qui trie par nom (ordre inverse alphab.)  
    {
        return b.name < a.name;
    }
    
    allArticles.sort(trierParNom);                      //on applique le tri au tableau des articles
    console.log(allArticles);                           //on affiche le résultat
}


//******************************TRIER PAR PRIX CROISSANT********************************

var btnTriPrix = document.createElement("BUTTON");        // Créer un élément <button>
var t2 = document.createTextNode("Trier par prix croissant");       // Créer un noeud textuel
btnTriPrix.appendChild(t2);                               // Ajouter le texte au bouton
document.body.appendChild(btnTriPrix);                    // Ajoute la balise <button> à la balise <body>


btnTriPrix.onclick = function ()                          //clic sur bouton = appel fonction
{
    allArticles.sort(function(a, b){return a.price - b.price});  //on applique le tri au tableau des articles
    console.log(allArticles);                                   //on affiche le résultat
}


//******************************TRIER PAR PRIX DECROISSANT********************************

var btnTriPrixD = document.createElement("BUTTON");               // Créer un élément <button>
var t3 = document.createTextNode("Trier par prix décroissant");   // Créer un noeud textuel
btnTriPrixD.appendChild(t3);                                      // Ajouter le texte au bouton
document.body.appendChild(btnTriPrixD);                           // Ajoute la balise <button> à la balise <body>


btnTriPrixD.onclick = function ()                                 //clic sur bouton = appel fonction
{
    allArticles.sort(function(a, b){return b.price - a.price});  //on applique le tri au tableau des articles
    console.log(allArticles);                                    //on affiche le résultat
}


//******************************FORMULAIRE AJOUT ARTICLES**********************************

//formulaire ajout article créé d'abord en js (je l'ai finalement refait en html)

/*var f = document.createElement("form");
f.setAttribute('method',"get");
f.setAttribute('action',"index.html");
 
var inputType = document.createElement("input");                                //input "type"
inputType.setAttribute('type',"text"); 
inputType.setAttribute('name',"type");

var inputName = document.createElement("input");                                //input "nom"
inputName.setAttribute('type',"text"); 
inputName.setAttribute('name',"name");
 
var inputDescr = document.createElement("input");                               //input "description"
inputDescr.setAttribute('type',"text");  
inputDescr.setAttribute('name',"description");

var inputPrice = document.createElement("input");                               //input "prix"
inputPrice.setAttribute('type',"text"); 
inputPrice.setAttribute('name',"price");

var inputQuant = document.createElement("input");                               //input "quantité"
inputQuant.setAttribute('type',"text");  
inputQuant.setAttribute('name',"quantity");

var inputContact = document.createElement("input");                               //input "quantité"
inputContact.setAttribute('type',"text");  
inputContact.setAttribute('name',"contact");

var inputLastName = document.createElement("input");                               //input "quantité"
inputLastName.setAttribute('type',"text");  
inputLastName.setAttribute('name',"lastName");

var inputFirstName = document.createElement("input");                               //input "quantité"
inputFirstName.setAttribute('type',"text");  
inputFirstName.setAttribute('name',"firstName");

var inputAddress = document.createElement("input");                               //input "quantité"
inputAddress.setAttribute('type',"text");
inputAddress.setAttribute('label',"adresse");  
inputAddress.setAttribute('name',"address");

var buttonSubmit = document.createElement("input");                             //bouton "valider"
buttonSubmit.setAttribute('type',"submit");
buttonSubmit.setAttribute('value',"Ajouter article");

f.appendChild(inputName);
f.appendChild(inputType);
f.appendChild(inputDescr);
f.appendChild(inputPrice);
f.appendChild(inputContact);
f.appendChild(inputLastName);
f.appendChild(inputFirstName);
f.appendChild(inputAddress);
f.appendChild(buttonSubmit);

document.getElementsByTagName('body')[0].appendChild(f);*/

document.getElementById('valider').onclick = function AddArticle () {
    for (var i=0; i < jsonDatas.length; i++) 
    {   if (jsonDatas[i].type == [document.forms[0].elements["type"].value])
        {
        jsonDatas[i].items.push (
        {
        //allArticles.push({
            "name": document.forms[0].elements["name"].value,
            "description": document.forms[0].elements["description"].value,
            "price": document.forms[0].elements["price"].value,
            "quantity": document.forms[0].elements["quantity"].value,
            "contact": {
                        lastName: document.forms[0].elements["lastName"].value,
                        firstName: document.forms[0].elements["firstName"].value,
                        address : document.forms[0].elements["address"].value,
                    }
        });
        }
    }
    console.log(jsonDatas);
}


f.addEventListener("submit", function (e) {
    e.preventDefault();
    alert('Article ajouté');
});


console.log (jsonDatas);

for (var i=0; i < jsonDatas.length; i++)
    {
        for (var j=0; j < jsonDatas[i].items.length; j++)
        {
            console.log(jsonDatas[i].items[j]["contact"]);
        }

    }









