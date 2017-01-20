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

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}


