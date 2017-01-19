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
    correctGuess = true; //Change variable to true once the correct guess is made 
  }          
} while ( ! correctGuess )
           
document.write("<h1> You guessed the number!</h1>");
document.write("<h1> It took you " + guessCount + " tries to correctly guess" + randomNumber + "!</h1>");

//Changed loop to while/if/ added break
// while (guessCount <10) {
//   guess = prompt("I am thinking of a number between 1 and 10. What is it?");
//   guessCount += 1;
//   if (parseint(guess) === randomNumber) {
//     correctGuess = true; //Change variable to true once the correct guess is made 
//     break;
//   }          
// } 
// if ( correctGuess ) {         
// document.write("<h1> You guessed the number!</h1>");
// document.write("<h1> It took you " + guessCount + " tries to correctly guess" + randomNumber + "!</h1>");
//} else { document.write("<h1> Sorry you did not guess the right number. </h1>");}
