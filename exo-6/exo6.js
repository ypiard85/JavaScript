// Partie 8 code academy

// PARTIE 1

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};


// afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.rooms = 5
console.log(joeInfo.rooms)

// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage = true
console.log(joeInfo)


var team = {
    _players: [
        {
            firstName: 'Yoann',
            lastName: 'Piard',
            age: 25
        },
        {
            firstName: 'Choi',
            lastName: 'Sol',
            age: 23
        },
        {
            firstName: 'Vincent',
            lastName: 'Piard',
            age: 21
        },
    ],
    _games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 10
        },
        {
            opponent: "Broncos",
            teamPoints: 45,
            opponentPoints: 41
        },
        {
            opponent: "Broncos",
            teamPoints: 70,
            opponentPoints: 21
        }
    ],
    addPlayer(first, last, age){

    }

}

//calculer le nombre de points de l'équipe
var teamPointsTotal = 0;

team._games.forEach(point => {
    teamPointsTotal += point.teamPoints
});
console.log(teamPointsTotal)

//calculer le nombre de points moyen de l'équipe adverse
var opponentPointsMedian = 0;

team._games.forEach(pm => {
    opponentPointsMedian += (pm.opponentPoints / team._games.length)
});

console.log(opponentPointsMedian)

//Trouver le joueur le plus agé

var ageList = []; //récupération des ages de tout les joueurs

for(var i = 0; i < team._players.length; i++ ){
    ageList.push(team._players[i].age)//Je push les ages adans le tableau vide ageList
}

console.log(Math.max(...ageList)); //affichage du plus grand age


//joueur par ordre alphabétique
var playerName = [];
for(var i = 0; i < team._players.length; i++ ){
    playerName.push(team._players[i].firstName)//Je push les ages adans le tableau vide ageList
}

console.log(playerName.sort())
