'use strict';

// Whenever we select a dom we always gget return typpe as string... and we need to explixitly convert them to other type ourselevs 

// 1. Adding event listner type('click')

// document.querySelector('.check').addEventListener('click', () => {
//     console.log(document.querySelector('.guess').value);
// });


let score = 20;
let key = Math.ceil(Math.random() * 20);
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'NO Number entered !!!';
    }
    else if (guess == key && score > 0) {
        displayMessage('😁👍Correct Guess !!!');
        document.querySelector('.number').textContent = key;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
            displayMessage('😁👍Correct Guess !!! New HIGHSCORE');
        }

    }
    else if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
        if (key < guess) {
            displayMessage('Number entered is large !!!');
        }
        else {

            displayMessage('Number entered is small !!!');
        }
        if (score === 0) {
            displayMessage('😭 You Lost,  Idiot!!');
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    key = Math.ceil(Math.random() * 20);
    displayMessage('Start guessing...');
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;

});