// Do While Loops, DOESNT CHECK CONDITION UNTIL IT RUNS ONCE

// do {
//  } while ()
           
//Guess the Number Game

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;

//Player hasn't made any guesses at beginning of game
var correctGuess = false;


function getRandomNumber (upper) {
  var num = Math.floor(Math.random() * upper) +1;
  return num;
}

do {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  guessCount += 1;
  if (parseint(guess) === randomNumber) {
  
  }
           
} while ( )
