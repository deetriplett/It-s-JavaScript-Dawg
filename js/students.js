var students = [
  {
    name:'Dawn',
    track: 'JavaScript', 
    grade: 98, 
    points: 14730
  },
   {
    name: 'Chris',
    track: 'Photography', 
    grade: 92, 
    points: 13999
  },
   {
    name: 'Jackson',
    track: 'History', 
    grade:88, 
    points: 11456
  },
   {
    name: 'Ruby',
    track: 'English', 
    grade: 82, 
    points: 10090
  },
   {
    name: 'Pepper',
    track: 'Cuisine', 
    grade: 75, 
    points: 987
   }
] //End Students Array 
///////////////////////////////////////////////////////////////////////////////////

var message ='';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport () {}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

while (true) {
  search = prompt('Search student records: type a name (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') { // || means or
    break; }
  for ( var i = 0; i < student.length; i =+1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Grade: ' + student.grade + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
}

  
}


print(message);



