// you can write js here
console.log('exo-3');
var userInput = prompt('rock, paper or scissors ?')
userInput = userInput.toLowerCase();

function getUserChoice(userInput)
{
    if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb'))
    {
        return userInput;
    }
    else
    {
        console.log('erreur : saisie incorrecte');
    }
    
}

function getComputerChoice()
{
    let number = Math.floor(Math.random()*(2-0+1)+0);
    console.log(number);
    if (number === 0)
    {
        computerChoice = 'rock';
    } 
    else if (number === 1)
    {
        computerChoice ='paper';
    }
    else
    {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function determineWinner(userChoice, computerChoice)
{
    if (userChoice === 'bomb')
    {
        return 'Won';
    }
    else if (userChoice === computerChoice)
    {
        return 'Tied';
    }
    else if (userChoice === 'rock')
    {
        if (computerChoice === 'scissors')
        {
            return 'Won';
        }
        else
        {
            return 'Lost';
        }
    }
    else if (userChoice === 'paper')
    {
        if (computerChoice === 'scissors')
        {
            return 'Lost';
        }
        else
        {
            return 'Won';
        }
    }
    else
    {
        if (computerChoice === 'paper')
        {
            return 'Won';
        }
        else
        {
            return 'Lost';
        }
    }
}

function playGame ()
{
    let uChoice = getUserChoice(userInput);
    let computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
    console.log(determineWinner (uChoice, computerChoice));
}

playGame();
