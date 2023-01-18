# Dinosaur Fun Fact Quiz

 Check out the live app [here](https://pandi1813.github.io/Dinosaur-Fun-Fact-Quiz/)
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

To create a quiz game using javascript that responds to the players choices and stores the scores using local storage in a high score page

### Screenshot

![](./assets/images/Screenshot%202023-01-17%20190530.png)





## My process

I created  a pseudocode to identify the major steps.
After creating the question database I added functions to create a timer and to display the answer options. I used event listener on the buttons to make them respond to clicks and created a high score board to store the player data after submitting it on the end screen.

### Built with

- Vanilla JS
- strings, numbers, arrays, objects and the combination of them as data types
- functions
- event listeners
- DOM



### What I learned

- How to link into html elements using the DOM API and how to modify them.
- How to use event listeners to create responsive pages
To see how you can add code snippets, see below:



```js
function timer(params) {

    intervalId = setInterval(function () {
        timerValue--
        // console.log(timer)
        timerCount.textContent = timerValue;
        if (timer === 0) {
            loadEndScreen()
        }
    }, 1000);
}
;
```

```js
clearScoresButton.addEventListener("click", function() {
    localStorage.clear();
    highScoresDiv.textContent = "";
})
```



### Continued development
I would like to focus on simplifying my code to make it more professional and easier to read




## Author
  Andrea Peter

- GitHub - [pandi1813](https://github.com/pandi1813)



## Acknowledgments
 Fun facts from [Dorchester Dinosaur Museum](https://www.thedinosaurmuseum.com/dino-facts)