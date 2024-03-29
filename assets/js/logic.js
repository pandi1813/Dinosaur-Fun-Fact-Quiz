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

// variable to use in the logic

let intervalId;
let questionIndex = 0; // increment this when clicked on an answer to go to the next question
let choiceButton;
let timerValue = 60




// **************** EVENT LISTENERS ******************
// starting quiz
// hide start screen and remove unhide questions screen
// start timer

startButton.addEventListener("click", function (event) {
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");
    displayQuestion();
    timer();
})

// selecting answers and moving to the next question
choices.addEventListener("click", function (event) {
    // questionIndex++;
    if (event.target.matches("button")) {
        // console.log("test")
        choices.textContent = ""; //clears the buttons from previous question
        // console.log(questionIndex);
        let buttonIndex = event.target.getAttribute("data-index")
        
        deductPoint(buttonIndex)
        questionIndex++
        displayQuestion();
    };
});



//-----------------
    function deductPoint(indexNumber) {
        let correctAnswer = questions[questionIndex].correct
        console.log("correct: " + correctAnswer)
        console.log(indexNumber)
        if (indexNumber == correctAnswer ) {
        } else{
            timerValue-=10

        }
        
    }
// ----------------



let storeNames = JSON.parse(localStorage.getItem("playerNames")) || [];
console.log(storeNames);
let storeScores = JSON.parse(localStorage.getItem("playerScores")) || [];
console.log(storeScores);

submitButton.addEventListener("click", function () {


    storeNames.push(nameInput.value);
    console.log(storeNames);
    localStorage.setItem("playerNames", JSON.stringify(storeNames));

    storeScores.push(timerValue);
    localStorage.setItem("playerScores", JSON.stringify(storeScores));

    // endScreen.classList.add("hide")
    // startScreen.classList.remove("hide")
    console.log(localStorage);
})






// ****************** FUNCTIONS *********************
// timer
function timer(params) {

    intervalId = setInterval(function () {
        timerValue--
        // console.log(timer)
        timerCount.textContent = timerValue;
        if (timerValue === 0) {
            loadEndScreen()
        }
    }, 1000);
}

// displaying questions and answer options
function displayQuestion() {
    if (questionIndex === questions.length) { //exits code and loads end screen
        return loadEndScreen()
    }

    let choicesArray = questions[questionIndex].answers;
    questionTitle.textContent = questions[questionIndex].question;
    for (let i = 0; i < choicesArray.length; i++) { // loop to display all choices
        choiceButton = document.createElement("button");
        choiceButton.setAttribute("data-index", i)
        // choiceButton.setAttribute("class", "choice-btn")
        let choice = choicesArray[i];
        choices.append(choiceButton);
        choiceButton.textContent = choice;

    }
}


// load end screen
function loadEndScreen() {
    questionsDiv.classList.add("hide");
    endScreen.classList.remove("hide");
    clearInterval(intervalId);                         // stops timer
    document.querySelector(".timer").textContent = ""; //hides timer
    finalScore.textContent = timerValue;               //displays timer value as final score
}

