let highScoresDiv = document.querySelector("#highscores")
let playerNames = JSON.parse(localStorage.getItem("playerNames")) || [];
let playerScores = JSON.parse(localStorage.getItem("playerScores")) || [];
let clearScoresButton = document.getElementById("clear")

let sortedScores = playerScores.sort();
console.log("sort: " + sortedScores)
let reversedScores = sortedScores.reverse();
console.log( "reverse: " + reversedScores);


displayScores();
function displayScores() {
    for (let i = 0; i < reversedScores.length; i++) {
        let nameIndex = playerScores.indexOf(reversedScores[i]);
        console.log(nameIndex);
        let playerName = playerNames[nameIndex];
    
        let liElement = document.createElement("li");
        liElement.textContent = playerName + ": " + reversedScores[i]
        highScoresDiv.append(liElement);
    }
    
}

clearScoresButton.addEventListener("click", function() {
    localStorage.clear();
    highScoresDiv.textContent = "";
})

