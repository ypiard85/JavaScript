// you can write js here
<<<<<<< HEAD

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
=======
console.log('exo-3');
var userInput = prompt('rock, paper or scissors ?').toLowerCase()

function getUserChoice(userInput) {
    if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb')) {
        return userInput;
    }
    else {
        console.log('erreur : saisie incorrecte');
    }
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    // console.log(number);
    if (number === 0) {
        computerChoice = 'rock';
    }
    else if (number === 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'Won';
    }
    else if (userChoice === computerChoice) {
        return 'Tied';
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        }
        else {
            return 'Lost';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Lost';
        }
        else {
            return 'Won';
        }
    }
    else {
        if (computerChoice === 'paper') {
            return 'Won';
        }
        else {
            return 'Lost';
        }
    }
}

function playGame() {
    let userChoice = getUserChoice(userInput);
    let computerChoice = getComputerChoice();
    console.log("Your choice : " + userChoice);
    console.log("Computer's choice : " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
>>>>>>> b7f180a7a8af036fcb2af9024223c312b4c878c9
