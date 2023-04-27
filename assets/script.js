//set definitions 
var questionBlock = document.querySelector(".questionBlock");
var choiceBlock = document.querySelector(".choiceBlock")
var ScoreCounter = 0;
var HighestScoreBox = document.querySelector('.highestScore-box');
var recordKeeperBox = document.querySelector('.recordKeeper-box');
var statusBoard = document.querySelector('.statusBoard');
var yourPoints = document.querySelector('.yourPoints');
var timer;
var timerCount;
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector('.startButton')
var timerBox = document.querySelector('.timer-box');
var done = false;
var mcButton = document.querySelector('.mcButton');
var questionNumber = 0;
function init() {

}

function startGame() {
    timerCount = 75;
    startButton.disabled = true;
    startTimer()
    showQuestion()
}

function winGame() {
    statusBoard.textContent = "correct!";
    ScoreCounter++;
    yourPoints.textContent = "yourPoints:" + ScoreCounter;
    setWins()
}
function loseGame() {
    statusBoard.textContent = "wrong!";
    ScoreCounter -= 0.5;
    yourPoints.textContent = "yourPoints:" + ScoreCounter;
    setlosses()
}


function startTimer(timerCount) {
    timer = setInterval(function () {
        timerCount--;
        timerBox.textContent = "timer:" + timerCount + 's';
        if (timerCount >= 0) {
            if (done && timerCount > 0) {
                clearInterval(timer);
                displayPoints();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            displayLoss();
        }
    }
        , 1000);
}

function showQuestion() {
    var questions = [
        {
            question: 'Question 1: Which one of them would turn the fonts bold?',
        },
        {
            question: 'Question 2: Which one of them would turn the fonts bold?',
        },
        {
            question: 'Question 3: Which one of them would turn the fonts bold?',
        },
        {
            question: 'Question 4: Which one of them would turn the fonts bold?',
        },
        {
            question: 'Question 5: Which one of them would turn the fonts bold?',
        },
        {
            question: 'Question 6: Which one of them would turn the fonts bold?',
        }

    ]
    var currentQuestion = questions[questionNumber].question;

    function displayQuestion() {
        questionBlock.textContent = currentQuestion;
    }
    function nextQuestion() {
        questionNumber++;
        if (questionNumber >= questions.length) {
            done = true;
        } else {
            currentQuestion = questions[questionNumber].question;
            displayQuestion();
        }
    }

    mcButton.addEventListener('click', function (event) {
        var pickedAnswer = event.target.parentNode;
        if (pickedAnswer.classList.contains('correctAnswer') === false) {
            loseGame()
        } else {
            winGame()
            nextQuestion();
        }
    })
    displayQuestion()
}

















// var questions = [
//     {
//         title: 'Question 1: Which one of them would turn the fonts bold?',
//         choices: ['a. font-size: 20px', 'b. font-weight: bold', 'c. font-family: serif', 'd. padding: 20px'],
//         correctAnswer: 'b. font-weight: bold',
//     },
//     {
//         title: 'Question 2: Which one of them would turn the fonts bold',
//         choices: ['a. font-size: 20px', 'b. font-weight: bold', 'c. font-family: serif', 'd. padding: 20px'],
//         correctAnswer: 'b. font-weight: bold',
//     },
//     {
//         title: 'Question 3: Which one of them would turn the fonts bold',
//         choices: ['a. font-size: 20px', 'b. font-weight: bold', 'c. font-family: serif', 'd. padding: 20px'],
//         correctAnswer: 'b. font-weight: bold',
//     },
//     {
//         title: 'Question 4: Which one of them would turn the fonts bold',
//         choices: ['a. font-size: 20px', 'b. font-weight: bold', 'c. font-family: serif', 'd. padding: 20px'],
//         correctAnswer: 'b. font-weight: bold',
//     },
//     {
//         title: 'Question 5: Which one of them would turn the fonts bold',
//         choices: ['a. font-size: 20px', 'b. font-weight: bold', 'c. font-family: serif', 'd. padding: 20px'],
//         correctAnswer: 'b. font-weight: bold',
//     },
//     {
//         title: 'Question 6: Which one of them would turn the fonts bold',
//         choices: ['a. font-size: 20px', 'b. font-weight: bold', 'c. font-family: serif', 'd. padding: 20px'],
//         correctAnswer: 'b. font-weight: bold',
//     }
// ];



//init function: 
//to get the items from local storage 






















// function init() {
//     getHighestScore()
// }


// function startGame() {
//     var timeCount = 75;

//     hideStartTap();
//     showQuestion();
//     startTimer();
// }
// function winGame() {
//     statusBoard.textContent = "correct";
//     ScoreCounter++;
//     yourPoints.textContent = "yourPoint:" + ScoreCounter;
//     setWin()
// }
// function loseGame() {
//     statusBoard.textContent = "wrong, please try again! 5 sec deducted";
//     timerCount - 5;
// }

// function startTimer() {
//     Timer = setInterval(function () {
//         timerCount--;
// timerElement.textContent = timerCount;
// if (timerCount>= 0) {
//     if (timercount && ) {

//     }

// }
//     })

// }






// function showQuestion() {
//     var currentQuestion = 0;
//     var h3El = document.createElement('h3');
//     questionBlock.append(h3El);
//     h3El.textContent = questions[currentQuestion].title;

//     for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
//         var liEl = document.createElement('li');
//         liEl.setAttribute('style', 'list-style-type: none')
//         choiceBlock.append(liEl);
//         liEl.textContent = questions[currentQuestion].choices[i];
//         var buttonEl = document.createElement('button');
//         buttonEl.textContent = '✓';
//         liEl.append(buttonEl);
//         buttonEl.setAttribute('style', 'margin-left:20px; padding:10px;');
//     }

//     checkAnswer();
// }
// function checkAnswer() {
//     var chosen = [];
//     buttonEl.addEventListener('click', function (event) {
//         pickedChoice = getParentElement(event.target)
//         chosen.push(pickedChoice)
//     }

































showQuestion();

