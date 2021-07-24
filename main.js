const startHead = document.querySelector('.initial');
const startButton = document.querySelector('.initial button');

const game = document.querySelector('.game');
const remainingRoll = document.querySelector('.remainingRoll');

// hide remaining roll h4
game.style.display = 'none';

const player1 = document.querySelector('.img1');
const player2 = document.querySelector('.img2');
const p1Score = document.querySelector('.p1Score');
const p2Score = document.querySelector('.p2Score');
const btn = document.getElementById('btn');

startButton.addEventListener('click', () => {
  startHead.style.display = 'none';
  game.style.display = 'block';
});

let count1 = 0;
let count2 = 0;

let round = 5;

btn.addEventListener('click', function () {
  startHead.style.display = 'none';

  const randomP1 = parseInt(Math.random() * 6) + 1;
  const randomP2 = parseInt(Math.random() * 6) + 1;

  count1 += randomP1;
  count2 += randomP2;

  player1.setAttribute('src', `/images/dice${randomP1}.png`);
  player2.setAttribute('src', `/images/dice${randomP2}.png`);

  if (randomP1 > randomP2) {
    game.style.display = 'block';
    game.innerHTML = 'Player1 won';
  } else if (randomP1 < randomP2) {
    game.style.display = 'block';
    game.innerHTML = 'Player2 won';
  } else {
    game.style.display = 'block';
    game.innerHTML = 'game draw';
  }
});
