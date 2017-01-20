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

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for ( var i = 0; i < student.length; i =+1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Grade: ' + student.grade + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
}

print(message);



