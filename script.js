'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
console.log(secretNumber);

//when player wins H1 changes random text
let winnerText = [
  'OMG! You are Smartest man alive🥰',
  'OMG! You are Smartest man alive🥰',
  'Awesome Job😎',
  'Great Job🦾',
  'Incredible 🤩',
  'Oh, You are So Incredible😍',
];

const randomText = Math.trunc(Math.random() * 6);
let randomWinnerText = winnerText[randomText];

// console.log(randomWinnerText);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //When there is no number
    document.querySelector('.message').textContent = '⛔️ No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('h1').textContent = randomWinnerText;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;

    //Refactoring code
    //When guess is wrong!!!

    // if (score > highscore) {
    //   highscore = score;
    //   document.querySelector('.highscore').textContent = highscore;
    // } else if (guess !== secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       guess > secretNumber ? '📈Too High!' : '📉Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '🎊You Lost the Game!';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('h1').textContent = '😟 You LOST';
    //     document.querySelector('body').style.backgroundColor = 'red';
    //     document.querySelector('.number').textContent = '😭';
    //   }
    // }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎊You Lost the Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('h1').textContent = '😟 You LOST';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = '😭';
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎊You Lost the Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('h1').textContent = '😟 You LOST';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = '😭';
    }
  }
  console.log(guess, typeof guess);
});

// Refreshing

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('h1').textContent = 'Guess My Number!';

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '🤔?';
});
