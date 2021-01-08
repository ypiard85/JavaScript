console.log("exo-6");

// PARTIE 1 

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
console.log(joeInfo.cars);
// changer le nombre de salle de bains de Joe : il n'en possède qu'une.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// Joe vient d'acquérir un garage : changer la structure pour le refléter.
joeInfo.garage = 1;
console.log(joeInfo.garage);


// PARTIE 2

var team = {};
team._players = [];
team._games = [];

team._players = [{
    firstName: 'Lionel',
    lastName: 'Messi',
    age: 32
},
{
    firstName: 'Luis',
    lastName: 'Suarez',
    age: 31
},
{
    firstName: 'Ivan',
    lastName: 'Rakitic',
    age: 30
}
]

team._games = [{
    opponent: 'Real Madrid',
    teamGoals: 3,
    opponentGoals: 1
},
{
    opponent: 'Valencia',
    teamGoals: 2,
    opponentGoals: 0
},
{
    opponent: 'Atletico Madrid',
    teamGoals: 1,
    opponentGoals: 1
}]

function addPlayer(first, last, age) {
    team._players[team._players.length] = { firstName: first, lastName: last, age: age };
}

function addGame(opponent, teamGoals, opponentGoals) {
    team._games[team._games.length] = { opponent: opponent, teamGoals: teamGoals, opponentGoals: opponentGoals };
}

addPlayer('Luka', 'Modric', 33);
addPlayer('Paul', 'Pogba', 27);
addPlayer('Antoine', 'Griezmann', 28);
console.log(team._players);

addGame('Sevilla FC', 4, 0);
addGame('Manchester Utd', 1, 0);
addGame('Bilbao', 2, 0);
console.log(team._games);

function goalsSum() {
    var goalsTotal = 0;
    for (var i = 0; i < team._games.length; i++) {
        goalsTotal += team._games[i].teamGoals;
    }
    console.log(goalsTotal);
}

goalsSum();

function opponentAverage() {
    var average = 0;
    var opponentGoalsTotal = 0;
    for (var i = 0; i < team._games.length; i++) {
        opponentGoalsTotal += team._games[i].opponentGoals;
    }
    average = opponentGoalsTotal / team._games.length;
    console.log(average);
}

opponentAverage();

function oldestPlayer(list) {
    console.log(list);
    var highestAge = 0;
    var highestAgeIndex = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].age > highestAge) {
            highestAge = list[i].age;
            highestAgeIndex = i;
        }
    }
    console.log("le joueur le plus âgé est", list[highestAgeIndex].firstName, list[highestAgeIndex].lastName, "et il a", highestAge, "ans");
}

oldestPlayer(team._players);

team._players.sort((a, b) => {
    if (a.lastName < b.lastName) return -1
    return a.lastName > b.lastName ? 1 : 0
  })

console.log(team._players);