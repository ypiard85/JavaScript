// you can write js here
console.log('exo-2');
let inscriptionCoureur = false;    //cette variable est un booléen. Test avec false
let ageCoureur = 99;               //test avec 99
var raceNumber = Math.floor(Math.random()*1000);

if (inscriptionCoureur != true)
{
    var raceNumber = raceNumber+1000;
}

if ((ageCoureur<18) && (inscriptionCoureur === true))
{
    console.log('You will race at 9:30 am');
}

else if ((inscriptionCoureur === true) || (ageCoureur>18))
{
    console.log ('you will race at 11:00 am');
}

else if ((ageCoureur<18) || (inscriptionCoureur === false))
{
    console.log ('you will race at 12:30 am');
    console.log (raceNumber);
}

else 
{
    console.log ('Go to see the registration desk');
}
console.log (raceNumber);