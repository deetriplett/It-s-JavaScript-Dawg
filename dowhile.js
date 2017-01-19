// Do While Loops, DOESNT CHECK CONDITION UNTIL IT RUNS ONCE

// do {
//  } while ()
           
//Guess the Number Game

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;

function getRandomNumber (upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}
