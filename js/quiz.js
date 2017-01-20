var questions = [
  {question: "How many states are in the United States?", 
   answer: 50},
  {question: "How many continents are there?",
   answer:7},
  {question: "How many legs does an insect have", 
   answer: 6},
  {question: "How many sides are there of an octagon?",
   answer: 8} 
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//Ordered List
function buildList(arr) {
  var listHTML = '<ol>';
    for ( var i = 0; i < arr.lenght; i +=1 ) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
  return listHTML;
}

//Loop thru array
for ( var i = 0; i < questions.length; i += 1 ) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = parseint(prompt(question));
  if (response === answer) {
    correctAnswers =+1;
    correct.push(question);//push method
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right!";
html += "<h2> You got these questions correct: </h2>";
html += buildList(correct);
html += "<h2> You got these questions wrong: </h2>";
html += buildList(wrong);

print(html);








