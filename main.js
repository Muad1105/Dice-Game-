const startHead = document.querySelector('.initial');
const startButton = document.querySelector('.initial button');

const game = document.querySelector('.game');
const remainingRoll = document.querySelector('.remainingRoll');

// hide remaining roll h4
game.style.display = 'none';

const gamePlay = document.querySelector('.game-play');

const player1 = document.querySelector('.img1');
const player2 = document.querySelector('.img2');
const p1Score = document.querySelector('.p1Score');
const p2Score = document.querySelector('.p2Score');
const btn = document.getElementById('btn');

gamePlay.style.display = 'none';
btn.style.display = 'none';

startButton.addEventListener('click', () => {
  gamePlay.style.display = 'block';
  btn.style.display = 'block';
  startHead.style.display = 'none';
  game.style.display = 'block';

  let count1 = 0;
  let count2 = 0;
  let randomP1, randomP2;
  let round = 5;

  btn.addEventListener('click', function () {
    round--;
    remainingRoll.innerHTML = round;
    if (round >= 0) {
      randomP1 = parseInt(Math.random() * 6) + 1;
      randomP2 = parseInt(Math.random() * 6) + 1;

      count1 += randomP1;
      count2 += randomP2;

      p1Score.innerHTML = count1;
      p2Score.innerHTML = count2;

      player1.setAttribute('src', `/images/dice${randomP1}.png`);
      player2.setAttribute('src', `/images/dice${randomP2}.png`);
    } else {
      if (count1 > count2) {
        game.style.display = 'block';
        game.innerHTML = 'Player1 won';
      } else if (count1 < count2) {
        game.style.display = 'block';
        game.innerHTML = 'Player2 won';
      } else {
        game.style.display = 'block';
        game.innerHTML = 'game draw';
      }
    }
  });
});
