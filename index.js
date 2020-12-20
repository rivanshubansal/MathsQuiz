var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name?");
const chalk = require('chalk');
const log = console.log;

log(chalk.blue("Welcome " + userName + " so you know Rivanshu."));

log("So here is a small quiz on mathematics for you.......");

var highScore = [{
  name: "Rivanshu",
  score: 2
},
{
  name: "Sanu",
  score: 3
}
];

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    log("Right!!");
    score++;
  }else {
    log("Wrong!!");
    log("Try Again...");
  }
  log("Your score is: ",score);
  log("-------------------------------------------");
}

var questionbank = [{
  question: `
  Area of square is:
  a)pi*r*r
  b)a*a
  c)2*pi*a*b\n`,
  answer: "b"
},
{
  question:`
  Area of circle is:
  a)pi*r*r
  b)pi*a*b
  c)2*pi*r\n`,
  answer: "a"
},
{
  question:`
  What is 7% equal to?
 a) 0.007
 b) 0.07
 c) 0.7
 d) 7\n`,
 answer: "b"
},
{
  question:`
  Fill in the blanks; 4, 6, 12, 14, 28, 30, (?)
  a)60
  b)32
  c)42
  d)90\n`,
  answer: "a"
},
{
  question:`
  The number which is neither prime nor composite is ……. 
  a)0
  b)1
  c)2
  d)3\n`,
  answer: "b"
}
];
for(var i=0; i<questionbank.length; i++){
  var currentQuestion = questionbank[i];
  //console.log(currentQuestion.question);
  log(play(currentQuestion.question,currentQuestion.answer)
  );
  }
  log(chalk.blue("YAY! You scored : ",score));
  log(chalk.blue("THANKS FOR PLAYING.."));
  if(score>3){
    log(chalk.red("CONGRATS YOU HAVE GAINED HIGHEST MARKS!!!!"));
    log(chalk.blue("Send me a screenshot of this score.."));
  }