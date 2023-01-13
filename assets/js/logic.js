// variables to link into index.html

let timerCount = document.querySelector("#time");
let startScreen = document.querySelector("#start-screen");
let startButton = document.querySelector("#start");

let questionsDiv = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");

let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let nameInput = document.querySelector("#initials");
let submitButton = document.querySelector("#submit");

let feedback = document.querySelector("#feedback");



// starting quiz
   // hide start screen and remove .hide class from questions screen

   startButton.addEventListener("click", function (event) {
       startScreen.classList.add("hide");
       questionsDiv.classList.remove("hide");
       showQuestion();
       timer();
   })

// timer
function timer(params) {
    let timer = 60
    
    let intervalId = setInterval(function() {
        timer--
        console.log(timer)
        timerCount.textContent = timer;
    }, 1000);

}


// displaying questions and answer options

let questionIndex = 0; // increment this when clicked on an answer to go to the next question
// let displayQuestion =  questionTitle.textContent = questions[questionIndex].question;


let choiceButton;

function showQuestion() {
    let choicesArray = questions[questionIndex].answers;
    questionTitle.textContent = questions[questionIndex].question;
    for ( let i = 0; i < choicesArray.length; i++) { // loop to display all choices
        choiceButton = document.createElement("button");
        let choice = choicesArray[i];
        choices.append(choiceButton);
        choiceButton.textContent = choice;
        
    }
}

choices.addEventListener("click", function(event) {
    // questionIndex++;
    if (event.target.matches("button")) {
        console.log("test")
        choices.textContent = "" //clears the buttons from previous question
        questionIndex++
        console.log(questionIndex);
        showQuestion()
    }
})
    
