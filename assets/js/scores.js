let highScoresDiv = document.querySelector("#highscores")
let displayName = localStorage.getItem("name");
console.log(displayName);

let displayScore = localStorage.getItem("score");
console.log(displayScore);

let liElement = document.createElement("li");
liElement.textContent = displayName + ": "+ displayScore;

console.log(liElement.textContent)

highScoresDiv.append(liElement);
