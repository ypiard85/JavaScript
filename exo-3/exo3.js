// you can write js here

let choix = ['pierre', 'feuille', 'ciseaux'];
let choixOrdi = Math.floor(Math.random() * choix.length) ;




function getUserChoice(userInput){
    userInput.toLowerCase();
        if(userInput == 'pierre' || userInput == 'feuille' || userInput == 'ciseaux' || userInput == 'bomb' ){
            return userInput
        }else{
            alert("Veuillez choisir entre pierre feuille ciseau")
        }

}

function getComputerChoice(){
   return choix[choixOrdi]
}

function determineWinner(userChoice, computerChoice ){
    if(userChoice === computerChoice ){
       return console.log('Tied')
    }else if (userChoice == 'pierre'){
        if(computerChoice == 'ciseaux'){
            return console.log('WON')
        }else if(computerChoice == 'feuille'){
            return console.log('LOST')
        }
    }else if (userChoice == 'feuille'){
        if(computerChoice == 'ciseaux'){
            return console.log('LOST')
        }else if(computerChoice == 'pierre'){
            return console.log('WIN')
        }
    }else if (userChoice == 'ciseaux'){
        if(computerChoice == 'fueille'){
            return console.log('WIN')
        }else if(computerChoice == 'pierre'){
            return console.log('LOST')
        }
    }else if(userChoice === 'bomb'){
        return console.log('WIN')
    }
}

function playGame(){
    var uChoice = getUserChoice('feuille');
    var computerChoice = getComputerChoice();
    console.log(determineWinner(uChoice, computerChoice))
}

playGame()

determineWinner(getUserChoice, getComputerChoice)