// you can write js here
console.log('exo-2');

let inscriptionCoureur;           //cette variable est un booléen.
let ageCoureur;

function sortRacers(inscriptionCoureur, ageCoureur) {

    console.log("Your age is " + ageCoureur);
    
    let raceNumber = Math.floor(Math.random() * 1000);

    if (inscriptionCoureur) {

        console.log("You are registered with number " + raceNumber);

        if (ageCoureur > 18) { // inscrit et +18ans  : condition 1

            console.log('You will race at 9:30 am');
            console.log('\n')
        }

        else {               // inscrit et 18 ou - : condition 2
            console.log('you will race at 11:00 am');
            console.log('\n')
        }
    }

    else {
        raceNumber += 1000;

        console.log("Registration in progress, number " + raceNumber);

        if (ageCoureur > 18) { // pas inscrit et +18ans : condition 2 
            console.log('you will race at 11:00 am');
            console.log('\n')
        }
        else { // pas inscrit et 18 ou - : condition 3 
            console.log('You will race at 12:30 pm');
            console.log('\n')
        }
    }
}

sortRacers(true, 19);          //tests avec différentes valeurs
sortRacers(false, 99);
sortRacers(true, 12);
sortRacers(false, 18)


