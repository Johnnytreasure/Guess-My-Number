'use strict';

const randomNumberGenerator = () => Math.trunc(Math.random() * 20) + 1;

let randomNumber = randomNumberGenerator();
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

function displayHighscore(score) {
  document.querySelector('.highscore').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (guessValue === randomNumber) {
      displayMessage('You got it!');
      displayNumber(randomNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '20rem';
      if (score > highscore) {
        highscore = score;
        displayHighscore(highscore);
      }
      // When player wins
    } else if (!guessValue) {
      displayMessage('No number guessed yet!');
      // When no value has been entered
    } else if (guessValue > 20 || guessValue <= 0) {
      displayMessage('Number will be betweeen 1 & 20!');
      score--;
      displayScore(score);
      // When player guesses outside of accepted range
    } else if (guessValue !== randomNumber) {
      displayMessage(guessValue < randomNumber ? 'Too low!' : 'Too High!');
      score--;
      displayScore(score);
      // When guess is too low or too high
    }
  } else {
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent =
      'Game over! Select again to try again';
    document.querySelector('body').style.backgroundColor = '#ee1b2f';
    displayScore(score);
    document.querySelector('.number').style.width = '20rem';
    // When they ran out of guesses
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  let randomNumber = randomNumberGenerator();
  score = 20;
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  // When they reset the game
});
