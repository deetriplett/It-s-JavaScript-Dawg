alert("Time for some Mad Libs!Help me finish the story by giving answers to the prompt.");.  

var name = prompt("Silly Name");
var animal = prompt("Type of pet");
var action = prompt("Now I need an action in the past tense");
var furniture = prompt("A large piece of furniture");
var exclaim = prompt("Exclaimation of your liking!");
var food = prompt("Type of food");
var verb = prompt("Verb");

alert("You are done! Now let's see that story!");


document.write("<h1>" + name + " is our pet " + animal + ". She was left home alone. </h1>");
document.write("<h1>" + name + action + " on the " + furniture + " and ate the bread." </h1>);
document.write("<h1>" + exclaim.toUpperCase() + "! Mom yelled. </h1>"); 
document.write("<h1> Now we have to make sandwhiches out of" + food + ". They tasted" + verb + ". </h1>");
