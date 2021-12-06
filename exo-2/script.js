// you can write js here

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