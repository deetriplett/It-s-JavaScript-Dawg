alert("Hey!");
alert("Time for some Mad Libs! Help me finish the story by giving answers to the prompt.");

var name = prompt("Silly Name");
var animal = prompt("Type of pet");
var action = prompt("Now I need an action in the past tense");
var furniture = prompt("A large piece of furniture");
var exclaim = prompt("Exclaimation of your liking!");
var food = prompt("Type of food");
var verb = prompt("Verb");

alert("You are done! Now let's see that story!");

var sentence = ("<h2>" + name + " is our pet " + animal + ". She was left home alone. </h2>");
sentence += ("<h2>" + name + " " + action + " on the " + furniture + " and ate the bread. </h2>");
sentence += ("<h2>" + exclaim.toUpperCase() + "! Mom yelled. </h2>"); 
sentence += ("<h2> Now we have to make sandwiches out of " + food + ". They tasted " + verb + ". </h2>");

document.write(sentence); 

console.log(name);
console.log(animal);
console.log(action);
console.log(furniture);
console.log(exclaim);
console.log(food);
console.log(verb);

console.log("End StoryMaker");
