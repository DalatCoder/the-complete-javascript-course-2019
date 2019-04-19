
// Question contructors
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

var q1 = new Question('Is JavaScript the cooleast programming language in the world!',
                      ['Yes', 'No'],
                      0);

var q2 = new Question('What is the name of this course\'s teacher?',
                      ['John', 'Micheal', 'Jonas'],
                      2);


var q3 = new Question('What does best describe coding?',
                      ['Boring', 'Hard', 'Fun', 'Tedious'],
                      2);

