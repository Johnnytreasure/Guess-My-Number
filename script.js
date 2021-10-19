'use strict';

const randomNumberGenerator = () => Math.trunc(Math.random() * 20) + 1;

let randomNumber = randomNumberGenerator();
let score = 20;
let highscore = 0;

let message = document.querySelector('.message');
let number = document.querySelector('.number');
let scoreDisplay = document.querySelector('.score');
let highscoreDisplay = document.querySelector('.highscore');
let body = document.querySelector('body');

document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (guessValue === randomNumber) {
      message.textContent = 'You got it!';
      number.textContent = randomNumber;

      body.style.backgroundColor = '#60b347';
      number.style.width = '20rem';
      if (score > highscore) {
        highscoreDisplay.textContent = highscore = score;
      }
      // When player wins
    } else if (!guessValue) {
      message.textContent = 'No number guessed yet!';
      // When no value has been entered
    } else if (guessValue > 20 || guessValue <= 0) {
      message.textContent = 'Number will be betweeen 1 & 20!';
      score--;
      scoreDisplay.textContent = score;

      // When player guesses outside of accepted range
    } else if (guessValue !== randomNumber) {
      message.textContent =
        guessValue < randomNumber ? 'Too low!' : 'Too High!';
      score--;
      scoreDisplay.textContent = score;
      // When guess is too low or too high
    }
  } else {
    score = 0;
    scoreDisplay.textContent = score;
    message.textContent = 'Game over! Select again to try again';
    body.style.backgroundColor = '#ee1b2f';
    scoreDisplay.textContent = score;
    number.style.width = '20rem';
    // When they ran out of guesses
  }
});

document.querySelector('.again').addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  randomNumber = randomNumberGenerator();
  score = 20;
  scoreDisplay.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
  // When they reset the game
});
