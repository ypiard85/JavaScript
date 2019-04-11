// you can write js here
console.log('exo-2');
let inscriptionCoureur;           //cette variable est un booléen.
let ageCoureur;              
var raceNumber = Math.floor(Math.random()*1000);

function sortRacers (inscriptionCoureur, ageCoureur, raceNumber)
{
    if (inscriptionCoureur === true)
    {
        console.log(raceNumber);

        if (ageCoureur<18)
        {
            console.log('You will race at 9:30 am');
        }
        else if (ageCoureur>18)
        {
            console.log ('you will race at 11:00 am');
        }
    }

    else
    {
        var raceNumber = raceNumber+1000;
        console.log(raceNumber);

        if (ageCoureur<18)
        {
            console.log ('you will race at 12:30 am');
        }
        else 
        {
            console.log ('Go to see the registration desk');
        }
    }
}

sortRacers(true, 50, raceNumber);          //tests avec différentes valeurs
sortRacers(false, 99, raceNumber);


