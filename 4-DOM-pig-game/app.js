
var activePlayer, scores, roundScore, winningScore, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // 1. Create random number  
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';

    console.log(dice);

    // 3. Update current score
    if (dice != 1) {
      roundScore += dice;
    } else {
      nextPlayer();
    }

    document.getElementById('current-' + activePlayer).textContent = roundScore;
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // Update the score
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    console.log(scores[activePlayer]);

    // check if player win the game
    if (scores[activePlayer] >= winningScore) {
      gamePlaying = false;
      document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    } else {
      // next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
  roundScore = 0;
    
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // hide the dice
  document.querySelector('.dice').style.display = 'none';
}

function init() {

  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  winningScore = 20;
  gamePlaying = true;
  
  // Hide the dice by default
  document.querySelector('.dice').style.display = 'none';
  
  // Set all score to 0
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
}



