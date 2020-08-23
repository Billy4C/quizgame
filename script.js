var body = document.body
var questionIndex = 0
var score = 0
var timerEl = document.getElementById('time');
var message = "Time's up!"
var words = message.split('+');
var timeLeft = 100;
var timerId;
var currentQ;
var resultEl = document.getElementById("result")
var questionEl = document.getElementById("questions")
var scoreEl = document.getElementById("score");
var submitScore = document.getElementById("btn")

function countDown() {
    timeLeft--
    timerEl.textContent = timeLeft
    if (timeLeft == 0) {
        clearInterval(timerId)
        timerEl.textContent = message;
        // console.log(message);
        endGame();
    }
}
// display Time's up message
// function displayMessage() {

// }

function startQuiz() {
    var startEl = document.getElementById('startScreen')
    startEl.setAttribute("class", "hide")
    // var questionEl = document.getElementById("questions")
    questionEl.removeAttribute("class")
    timerId = setInterval(countDown, 1000)
    timerEl.textContent = timeLeft
    // call get question function

    // while (questionIndex !== questions.length) {
    getQuestion();
    // }
}

var start = document.getElementById('start')
start.onclick = startQuiz

// questions array
var questions = [
    {
        question: "Arrays are stored within:",
        choices: ['[ brackets ]', '{ curly braces }', '( parentheses )', '" quotations "'],
        answer: 0
    },
    {
        question: "What does DOM stand for?",
        choices: ['Document Object Model', 'Direct Object Mover', 'Do Other Methods', 'Document Observer Maker'],
        answer: 0
    },
    {
        question: "Which method stops the timer?",
        choices: ['clearInterval', 'setInterval', 'intervalTimer', 'timeClear'],
        answer: 0
    },
    {
        question: "What does appendChild do?",
        choices: ['adds a node as the last child', 'adds a node as the first child', 'adds a node as the middle child',
            'it does nothing'],
        answer: 0
    },
    {
        question: "++ means:",
        choices: ['increment by 1', 'increment by 2', 'increment by 3', 'increment by double'],
        answer: 0
    },
    {
        question: 'What does the "hide" style do?',
        choices: ['hides and element', 'removes lines of code', 'hides all the useless code', 'removes mistakes'],
        answer: 0
    },
    {
        question: 'What does a function call look like?',
        choices: ['function();', 'function{};', 'function[];', 'Hey function!;'],
        answer: 0
    },
    {
        question: 'What does unit 4 cover?',
        choices: ['javascript', 'css', 'HTML', 'python'],
        answer: 0
    },
    {
        question: 'How do you create and element in Javascript?',
        choices: ['createElement', 'getElementbyId', 'removeAttribute', 'clearInterval'],
        answer: 0
    },
    {
        question: 'Do I understand any of this coding business?',
        choices: ['not really', 'totally', 'mostly', 'kind of'],
        answer: 0
    }
]

function getQuestion() {
    currentQ = questions[questionIndex]
    var questionTitle = document.getElementById("questionTitle")
    questionTitle.textContent = currentQ.question

    for (var i = 0; i < currentQ.choices.length; i++) {
        var button = document.createElement("button")
        button.setAttribute("id", [i]);
        button.textContent = currentQ.choices[i]
        button.onclick = function () {

            if (currentQ.answer == event.target.id) {
                // var result = document.getElementById("result")
                resultEl.textContent = "You're right!" ;
                // resultEl.appendChild(result)
                buttonClick()
            }
            else {
                resultEl.textContent = "NO!!!";
                timeLeft -= 5;
            }
        }
        console.log(button)
        choices.appendChild(button)
        // questions[i].question
    }
    // for loop or foreach loop to show choices and answer
    // for (i = 0; i , questions.length; i++) {
    // //     var 
    // // }
    // questionIndex++;
}



// we want to check to see if button value is correct, increment question index, call get question function to retrieve next question, 
// check for end condition
function buttonClick() {
    if (questionIndex < questions.length-1) {
        questionIndex++
        var choices = document.getElementById("choices")
        choices.innerHTML = ""
        getQuestion();

    } else {
        endGame();
        saveScores();

    }

    // if (i > )
}
function endGame() {
    clearInterval(timerId)
    timerEl.textContent = timeLeft
    score = timeLeft
    // scoreEl.textContent += score;
    scoreEl.removeAttribute("class")
    console.log(scoreEl.textContent)
    questionEl.setAttribute("class", "hide")
    saveScores();
}

// not sure how to connect this to scores
// need to connect it with high scores
var saveScores = function () {
    localStorage.setItem("score", JSON.stringify(scoreEl));
}
var loadScores = function () {
    // gets task items from localStorage
    //converts tasks from the stringified format back into the array of objects
    // iterates through array and creates task elements on the page from it
    var existingTaskEl = localStorage.getItem('score');
    existingTaskEl = JSON.parse(existingTaskEl);
    for (var i = 0; i < existingTasksEl.length; i++);{
        createTaskEl(existinTasksEl[i]);
    }
    // console.log(tasks)
}


// start.onclick = countDown;