//Objects have properties and methods:
//  Properties = a variable that belongs to the object
//  Methods = something the object can do or that can be done to the object
//  {} creates an object (uses keys to access data), [] creates an array (uses index numbers to access values)
//  Example: 
//    var student = {
//      name: "Dawn",
//      grades: [80, 85, 90, 95]
//     };
//  
//  
//  
//  
//  

var person = {
  name: "Dawn",
  age: 28,
  country: "US",
  student: true,
  skills: ['JavaScript','HTML','CSS']
  };
//insert variable message into the output div
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = "<p>Hello. My name is " + person.name + " and I am " + person.age + ".</p>"; 
message += "<p>I live in the " + person.country + ".</p>";
person.name = "Rainbow Dash";
message += "<p>But I wish my name was " + person.name + ".</p>";
message += "<p>I have " person.skills.length + " skills. They are: " + person.skills.join(', ') + ". </p>";

print(message);

//for...in loop with bracket notation to access property values
for ( key in person ) {
  console.log(key, ',', person[key]);
 }
