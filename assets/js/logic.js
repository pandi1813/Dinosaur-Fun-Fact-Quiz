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



// displaying questions and answer options

let questionIndex = 0; // increment this when clicked on an answer to go to the next question
let displayQuestion =  questionTitle.textContent = questions[questionIndex].question;

let choicesArray = questions[questionIndex].answers;




for (let i = 0; i < choicesArray.length; i++) { // loop to display all choices
    let choiceButton = document.createElement("button");
    let choice = choicesArray[i];
    choices.append(choiceButton);
    choiceButton.textContent = choice;

    choiceButton.addEventListener("click", function() {
        questionIndex++;
    })
}


    
 
// starting quiz
    // hide start screen and remove .hide class from questions screen

    startButton.addEventListener("click", function () {
        startScreen.classList.add("hide")
        questionsDiv.classList.remove("hide")
    })
