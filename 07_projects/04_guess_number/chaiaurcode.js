let randomNumber = parseInt(Math.random() * 100 + 1);

let submit =  document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true ;

if(playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if(isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please Enter a Valid Number');
  } else {
      prevGuess.push(guess);
      if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over , Random Number was ${randomNumber}`);
        endGame();
      } else {
          displayGuess(guess);
          checkGuess(guess);
      }
  }
};

function checkGuess(guess) {
  if(guess === randomNumber) {
    displayMessage(`You Guessed it right`);
  } else if(guess < randomNumber) {
    displayMessage(`Number is Low`);
  } else if(guess > randomNumber) {
    displayMessage(`Number is High`);
  }
};

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

function newGame() {
  let newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
};
