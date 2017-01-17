alert("Hey!");
alert("Time for some Mad Libs! Help me finish the story by giving answers to the prompt.");

//Question countdown
var questions = 7; //[7 questions left]
var questionsLeft = '[ ' + questions + ' left ]'; 

//Mad Lib Questions 
var name = prompt("Silly Name" + questionsLeft);
questions -= 1;
var questionsLeft = '[ ' + questions + ' left ]'; 
var animal = prompt("Type of pet" + questionsLeft);
questions -= 1;
var questionsLeft = '[ ' + questions + ' left ]'; 
var action = prompt("Now I need an action in the past tense" + questionsLeft);
questions -= 1;
var questionsLeft = '[ ' + questions + ' left ]'; 
var furniture = prompt("A large piece of furniture" + questionsLeft);
questions -= 1;
var questionsLeft = '[ ' + questions + ' left ]'; 
var exclaim = prompt("Exclaimation of your liking!" + questionsLeft);
questions -= 1;
var questionsLeft = '[ ' + questions + ' left ]'; 
var food = prompt("Type of food" + questionsLeft);
questions -= 1;
var questionsLeft = '[ ' + questions + ' left ]'; 
var verb = prompt("Verb" + questionsLeft);


alert("You are done! Now let's see that story!");

//Mad Lib Story 
var sentence = ("<h2>" + name + " is our pet " + animal + ". She was left home alone. </h2>");
sentence += ("<h2>" + name + " " + action + " on the " + furniture + " and ate the bread. </h2>");
sentence += ("<h2>" + exclaim.toUpperCase() + "! Mom yelled. </h2>"); 
sentence += ("<h2> Now we have to make sandwiches out of " + food + ". They tasted " + verb + ". </h2>");

document.write(sentence); 

//Console Notes
console.log(name);
console.log(animal);
console.log(action);
console.log(furniture);
console.log(exclaim);
console.log(food);
console.log(verb);
console.log("End StoryMaker");
