//While Loops

//Example of While Loop, run counter 26 times
//var counter = 1;
//while (counter < 26 ) {
//    document.write("<p>Now in loop #" + counter + "</p>");
//    counter += 1;}

// Random Number Generator //

//1. Generate a random # from 1 - 10,000. This is the # computer needs to guess.

//2. Enter while loop. Computer will guess random number and will not stop til it corrects number. 

//3. Exit Loop. Print the random number and how many times computer had to "guess" (run through the loop) to reach the random number. 

var upperNum = 10000;
var randomNum = getRandomNum(upper);
var guess;
var attempts = 0;

function getRandomNum(upper) {
  return Math.floor(Math.random() * upper ) +1;
  }

//If the value in guess is NOT equal to value in random, condition evaluates as true and loop runs
while ( guess !== randomNum ) {
  guess = getRandomNum( upper );
  attempts += 1;
}

document.write("<p> The Random number was: " + randomNUm + ".</p>");
document.write("<p> It took the computer " + attempts + " attempts to get.</p>");
  
  


