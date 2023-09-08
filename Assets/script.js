
const myQuestions = [
    {
      question: "Javascript is an ______ language",
      answers: {
        1: "Object-Oriented",
        2: "Object-Based",
        3: "Procedural",
        4: "Functional",
      },
      correctAnswer: "Object-Oriented",
    },
  
    {
      question:
        "Which of the following methods can be used to display data in some form using Javascript?",
      answers: {
        1: "document.write()",
        2: "console.log()",
        3: "window.alert()",
        4: "All of the above",
      },
      correctAnswer: "All of the above",
    },
  
    {
      question: "Arrays in JavaScript can be used to store ____________.",
      answers: {
        1: "numbers and strings",
        2: "other arrays",
        3: "booleans",
        4: "all of the above",
      },
      correctAnswer: "all of the above",
    },
  
    {
      question:
        "What is the use of the <noscript> tag in Javascript?",
      answers: {
        1: "The contents are displayed in non-Javascript-based browsers",
        2: "Clears all the cookies and cache",
        3: "Displays none of the text",
        4: "None of the above",
      },
      correctAnswer: "The contents are displayed in non-Javascript-based browsers",
    },
  
    {
      question:
        "When an operator’s value is NULL, the typeof returned by the unary operator is:",
      answers: {
        1: "Boolean",
        2: "Integer",
        3: "String",
        4: "Object",
      },
      correctAnswer: "Object",
    },
  ];
  
  var startQuizEl = document.getElementById("start-quiz");
  var questions = document.getElementById("questions");
  var answers = document.getElementById("answers");
  var timerEl = document.getElementById("countdown");
  var score = document.getElementById("score");
  var initials = document.getElementById("initials");
  var submit = document.getElementById("submit");
  var highscores = document.getElementById("highscores");
  var activeStepIndex = 1;
  var timeLeft = 40;
  var games = [];
  
  
  
  startQuizEl.addEventListener("click", function () {
    countdown();
    renderQuestions(myQuestions[0]);
  });
  
  questions.addEventListener("click", function (event) {
    if (activeStepIndex === 5) {
      answers.textContent = "Thank you for playing";
      score.textContent = timeLeft;
    } else if (
      event.target.textContent !== myQuestions[activeStepIndex - 1].correctAnswer
    ) {
      answers.textContent = "Try again.";
      timeLeft -= 3;
    } else {
      answers.textContent = "Correct!";
      console.log(timeLeft);
      activeStepIndex++;
      renderQuestions(myQuestions[activeStepIndex - 1]);
    }
  });
  
  
  function renderQuestions(activeQuestion) {
    questions.innerHTML = "";
  
    
    var questionTitle = document.createElement("p");
    var answerList = document.createElement("ol");
    var answerItem1 = document.createElement("li");
    var answerItem2 = document.createElement("li");
    var answerItem3 = document.createElement("li");
    var answerItem4 = document.createElement("li");
  
    questionTitle.textContent = activeQuestion.question;
    answerItem1.textContent = activeQuestion.answers[1];
    answerItem2.textContent = activeQuestion.answers[2];
    answerItem3.textContent = activeQuestion.answers[3];
    answerItem4.textContent = activeQuestion.answers[4];
  
    answerList.append(answerItem1);
    answerList.append(answerItem2);
    answerList.append(answerItem3);
    answerList.append(answerItem4);
    questions.append(questionTitle);
    questions.append(answerList);
  }
  
 
  function countdown() {
    var timeInterval = setInterval(function () {
      if (timeLeft > 1 && activeStepIndex !== 5) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  
  
  
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    var game = {
      initials: initials.value.trim(),
      score: timeLeft,
    };
    games.push(game);
    storeGames();
    renderGames();
  });
  
  function renderGames() {
    for (var i = 0; i < games.length; i++) {
      console.log(games[i]);
      var highScore = document.createElement("li");
      highScore.textContent = games[i].initials + " " + games[i].score;
      highscores.append(highScore);
    }
  
   
    console.log(games.length);
  }
  
  function storeGames() {
    console.log(games);
    localStorage.setItem("games", JSON.stringify(games));
  }
  
  
  function init() {
    var storeGames = JSON.parse(localStorage.getItem("games"));
    if (storeGames !== null) {
      games = storeGames;
    }
  }
  
  init();
