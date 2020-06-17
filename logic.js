// Gather elements

var startBtn = document.getElementById("startButton");
var titleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("question-choice");
var containerEl = document.getElementById("question-container");
var scoreEl = document.getElementById("scoreScreen");
var highScoreEl = document.getElementById("highScoreScreen");
var submitBtn = document.getElementById("submit");
var initialsSubmit = document.getElementById("initials-input");

// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var currentQuestionIndex = 0;
var count
var interval;



// function startQuiz () {
//     //Beginning the quiz (1 line of code?)
//     startBtn.addEventListener("click", function() {
    

// // function startQuiz () {
// //Beginning the quiz (1 line of code?)
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  //Hide the start page (2 lines of code)
  var queryContainer = document.querySelector("#startScreen");
  //queryContainer.setAttribute("class", "hide");
  highScoreEl.classList.add("hide");
  queryContainer.classList.add("hide");
  //Show the question div
  containerEl.classList.remove("hide");
  //Start the timer
  count = 75;

  interval = setInterval(function () {
    document.getElementById("count").innerHTML = count;
    count--;
    if (count <= 0) {
      clearInterval(interval);
      document.getElementById("count").innerHTML = "0";
      quizEnd();
      //call quizEnd
    }
  }, 1000);

  getQuestion();
}

function getQuestion() {
  //Get current question object from the array
  var currentQuestion = questions[currentQuestionIndex];
  //Update title with the current question

  titleEl.textContent = currentQuestion.title;
  //Clear our any old question choices
  choicesEl.innerHTML = "";
  //Loop over the choices
  currentQuestion.choices.forEach(function (choice, i) {
    //Create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    //Attach a click listener to each choice
    choiceNode.onclick = questionClick;
    //choiceNode.addEventListener("click", questionClick);
    console.log(choiceNode);
    //Display the results of the loop on the page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    count -= 15;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    quizEnd();
    
  } 
  else {
    getQuestion();
  }
}

function quizEnd() {
    myStopFunction();
    containerEl.classList.add("hide");
    scoreEl.classList.remove("hide");
   

}


function saveHighScore() {
    scoreEl.classList.add("hide");
    highScoreEl.classList.remove("hide");
    

}


function myStopFunction() {
    clearInterval(interval);
}

