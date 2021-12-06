// you can write js here
<<<<<<< HEAD

var coureurInscrit = true; //On vérifie si le coureur est inscrit - bool
var coureurAge = 24; //on vérifie l'age du coureur - integger
var raceNumber = Math.floor(Math.random()*1000);

function inscriptionCoureur(coureurInscrit, raceNumber, age){

    if(coureurInscrit){
        console.log(raceNumber)
        if(coureurInscrit && age > 18){
            console.log('You will race at 9:30 am')
        }else if(coureurInscrit || age > 18){
            console.log('You will race at 11:00 am ' + raceNumber )

        }else if(!coureurInscrit || age < 18){
            console.log('You will race at 12:30 am ' + raceNumber )
        }
    }else{
        console.log('Go to see the registration desk')
    }
}



console.log(inscriptionCoureur(true, raceNumber, 5 ));
=======
console.log('exo-2');

let inscriptionCoureur;           //cette variable est un booléen.
let ageCoureur;

function sortRacers(inscriptionCoureur, ageCoureur) {

    console.log("Your age is " + ageCoureur);

    let raceNumber = Math.floor(Math.random() * 1000); 

    if (!inscriptionCoureur) {
        raceNumber += 1000;
        console.log("You are not registered yet");

    } else {
        console.log("You are registered !");
    }

    if (ageCoureur > 18 && inscriptionCoureur) {

        console.log('You will race at 9:30 am');
        console.log("Your number is " + raceNumber);

    } else if (inscriptionCoureur || ageCoureur > 18) {

        console.log('You will race at 11:00 am');
        console.log("Your number is " + raceNumber);

    } else if (ageCoureur < 18 || !inscriptionCoureur) {

        console.log('You will race at 12:30 pm');
        console.log("Your number is " + raceNumber);
    } else {
        console.log('Go to see the registration desk');
    }
    console.log("\n");
}

sortRacers(true, 19);          //tests avec différentes valeurs
sortRacers(false, 99);
sortRacers(true, 12);
sortRacers(false, 5)


>>>>>>> b7f180a7a8af036fcb2af9024223c312b4c878c9
