console.log("exo-7");


var allArticles = [];                                 //on définit un tableau vide qui contient...
                                                      //...tous les articles
for (var i=0; i < jsonDatas.length; i++)              //on parcourt les catégories
{   

    for (var j=0; j < jsonDatas[i].items.length; j++) //puis les articles de chaque catégorie
    {
        allArticles.push(jsonDatas[i].items[j]);     //on ajoute chaque article au tableau avec push
    }
}


console.log(allArticles);
function tableDisplay (){
    for (var i=0; i < allArticles.length; i++)                        //pour chaque article de allArticles
    {   
        var newRow = document.createElement("tr");                    //on crée une rangée ds le tableau
        document.getElementById("tbody").appendChild(newRow);         //on la lie au body de la table

        /*newCell.innerHTML = allArticles[i];                          
        newRow.appendChild(newCell);*/

        for (var property in allArticles[i])                          //pour chaque attribut d'un article
        {
        var newCell = document.createElement("td");                //on crée une cellule 
        newCell.innerHTML = allArticles[i][property];                        //on la remplit avec la valeur de l'attribut
        newRow.appendChild(newCell);                               //on la lie à la nouvelle rangée créée précédemment 
        } 
    }
}

document.getElementById('valider').onclick = function AddArticle () {         //clic sur valider : appel fonction ajout
        allArticles.push({                                                    //on ajoute un article (sous forme d'objet) qui contient
            "name": document.forms[0].elements["name"].value,                 //tous les champs du formulaire (ses attributs)
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
console.log(allArticles);                               
tableDisplay();                                  //appel fonction affichage tableau

f.addEventListener("submit", function (e) {      //clic sur valider (submit) : déclenchement de la fonction
    e.preventDefault();                          //ne pas ouvrir index.html dans sa version de base (pour conserver les articles ajoutés)
    alert('Article ajouté');                     //afficher une fenêtre pop-up pour confirmer l'ajout
    var Parent = document.getElementById("tbody");  //retrouver le body du tableau
    while(Parent.hasChildNodes())                  //supprimer toutes les données
    {
      Parent.removeChild(Parent.firstChild);
    }
    tableDisplay();                              //afficher à nouveau le tableau, mis à jour
});

