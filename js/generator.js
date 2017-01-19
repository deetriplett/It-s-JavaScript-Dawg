//RANDOM NUMBER GENERATOR//

//PROMPT TO COLLECT USER INFO
var userInput = prompt("Let's create a random number together. Get the ball rolling with a number of your own: ");

//PARSEINT() TO CONVERT INPUT TO NUMBER
var userNum = parseInt(userInput); 

//MATH.RANDOM() METHOD TO CREATE RANDOM NUMBER
var randomNum = Math.random(userNum);

//PRINT BACK TO DOC
var answer = "Your random number is " + randomNum + ".";

document.write(answer);


