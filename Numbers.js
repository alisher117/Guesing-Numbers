let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();
guessSubmit.addEventListener('click', checkGuess);

function checkGuess(){
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous answer: ";
    }
    guesses.textContent += `${userGuess}`;
    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "Green";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if(guessCount === 10){
        lastResult.textContent = "Game Over!";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else{
        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = "Red";
        if (userGuess > randomNumber) {
            lowOrHi.textContent = "Your result is too high";
        }
        else if (userGuess < randomNumber) {
            lowOrHi.textContent = "Your result is too low";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
function animation1(){
    resetButton.style.transform = "scale(110%)";
}
function animation2() {
    resetButton.style.transform = "scale(100%)";
}
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("Button");
    resetButton.textContent = "Start a new game";
    resetButton.style.position = "Absolute";
    resetButton.style.bottom = "30%";
    resetButton.style.backgroundColor = "Black";
    resetButton.style.color = "White";
    resetButton.style.fontSize = "0.7em";  
    resetButton.style.padding = "10px"
    resetButton.style.transition = "all 0.3s ease"
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
    resetButton.addEventListener('mouseenter', animation1);
    resetButton.addEventListener('mouseleave', animation2);
}
function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  //Styles for Guessing Game
  guessSubmit.style.backgroundColor = "Black"
  guessSubmit.style.color = "White"  
  


  //Experiments Field
  function Press() {
    const name = prompt("What is your name");
    alert(`Hello ${name}, nice to see you!`);
    let Text = document.createElement('p');
    Text.textContent = `Welcome ${name}`;
    document.body.append(Text)
  }
  const aes = document.querySelector(".press");
  aes.addEventListener('click', Press);