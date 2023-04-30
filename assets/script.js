//set definitions 
var questionBlock = document.querySelector(".questionBlock");
var choiceBlock = document.querySelector(".choiceBlock")
var ScoreCounter = 0;
var HighestScoreBox = document.querySelector('.highestScore-box');
var recordKeeperBox = document.querySelector('.recordKeeper-box');
var statusBoard = document.querySelector('.statusBoard');
var yourPoints = document.querySelector('.yourPoints');
var timer;
var timerCount = 100;
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector('.startButton')
var timerBox = document.querySelector('.timer-box');
var done = false;
var questionNumber = 0;
var mcA = document.querySelector('.mcA');
var mcB = document.querySelector('.mcB');
var mcC = document.querySelector('.mcC');
var mcD = document.querySelector('.mcD');
var multipleChoiceBtn = document.querySelectorAll('.multipleChoices');
var nameForm = document.querySelector('.nameForm');

var questions = [
    {
        question: 'Question 1: Which one of them would turn the fonts bold?',
        choices: ['A. font-weight: bolder', 'B. color: blue', 'C. background-color:green', 'D. font-size:40px'],
        correctAnswer: 'A. font-weight: bolder',
    },
    {
        question: 'Question 2: Which one of them would turn the fonts bold?',
        choices: ['A. font-weight: bolder', 'B. color: blue', 'C. background-color:green', 'D. font-size:40px'],
        correctAnswer: 'A. font-weight: bolder',

    },
    {
        question: 'Question 3: Which one of them would turn the fonts bold?',
        choices: ['A. font-weight: bolder', 'B. color: blue', 'C. background-color:green', 'D. font-size:40px'],
        correctAnswer: 'A. font-weight: bolder',

    },
    {
        question: 'Question 4: Which one of them would turn the fonts bold?',
        choices: ['A. font-weight: bolder', 'B. color: blue', 'C. background-color:green', 'D. font-size:40px'],
        correctAnswer: 'A. font-weight: bolder',

    },
    {
        question: 'Question 5: Which one of them would turn the fonts bold?',
        choices: ['A. font-weight: bolder', 'B. color: blue', 'C. background-color:green', 'D. font-size:40px'],
        correctAnswer: 'A. font-weight: bolder',

    },
    {
        question: 'Question 6: Which one of them would turn the fonts bold?',
        choices: ['A. font-weight: bolder', 'B. color: blue', 'C. background-color:green', 'D. font-size:40px'],
        correctAnswer: 'A. font-weight: bolder',

    }
]
function init() {
    getPoints()
}

startButton.addEventListener('click', startGame)

function startGame() {
    init()
    startButton.disabled = true;
    reset()
    startTimer()
    displayQuestions()

}

function winGame() {
    statusBoard.textContent = "correct!";
    ScoreCounter++;
    yourPoints.textContent = "yourPoints:" + ScoreCounter;
    questionNumber++;
    if (questionNumber > questions.length - 1) {
        done = true;
    }
    displayQuestions();

}

function loseGame() {
    statusBoard.textContent = "wrong!";
    timerCount -= 5;
    yourPoints.textContent = "yourPoints:" + ScoreCounter;

}
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerBox.textContent = "timer:" + timerCount + 's';
        if (done || timerCount <= 0) {
            clearInterval(timer);
            displayPoints();
        }
    }

        , 1000);
}


function displayQuestions() {
    questionBlock.setAttribute('style', 'display: block');
    choiceBlock.setAttribute('style', 'display: block');
    nameForm.setAttribute('style', 'display: none');
    var currentQuestion = questions[questionNumber].question;
    questionBlock.textContent = currentQuestion;
    mcA.textContent = questions[questionNumber].choices[0];
    mcB.textContent = questions[questionNumber].choices[1];
    mcC.textContent = questions[questionNumber].choices[2];
    mcD.textContent = questions[questionNumber].choices[3];
}





mcA.addEventListener('click', function () {
    if (mcA.textContent === questions[questionNumber].correctAnswer) {
        winGame();

    } else {
        loseGame();
    }

})
mcB.addEventListener('click', function () {
    if (mcB.textContent === questions[questionNumber].correctAnswer) {
        winGame();
    } else {
        loseGame();
    }

})
mcC.addEventListener('click', function () {
    if (mcC.textContent === questions[questionNumber].correctAnswer) {
        winGame();
    } else {
        loseGame();
    }

})
mcD.addEventListener('click', function () {
    if (mcD.textContent === questions[questionNumber].correctAnswer) {
        winGame();

    } else {
        loseGame();
    }

})




function setWins() {
    var previousPoints = localStorage.getItem('points')
    if (ScoreCounter > previousPoints
    ) {
        localStorage.setItem('points', ScoreCounter)

    }

}


function displayPoints() {
    statusBoard.innerHTML = 'you got ' + ScoreCounter + 'points';
    questionBlock.setAttribute('style', 'display:none');
    choiceBlock.setAttribute('style', 'display: none');
    timerBox.textContent = "timer:"
    nameForm.setAttribute('style', 'display: block')
    setWins();
    startButton.disabled = false;


}

function getPoints() {
    storedPoints = localStorage.getItem('points')
    console.log(storedPoints);
    HighestScoreBox.textContent = 'Highest Score: ' + storedPoints;
}
function reset() {
    done = false;
    timerCount = 100;
    ScoreCounter = 0;
    questionNumber = 0;
    statusBoard.innerHTML = '';
    yourPoints.textContent = "yourPoints:" + ScoreCounter;


}

