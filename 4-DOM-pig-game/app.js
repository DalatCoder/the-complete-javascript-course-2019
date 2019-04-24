
var activePlayer, scores, roundScore;

activePlayer = 0;
scores = [0, 0];
roundScore = 0;

// Hide the dice by default
document.querySelector('.dice').style.display = 'none';

// Set all score to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click', function() {

  // 1. Create random number  
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').src = 'dice-' + dice + '.png';

  // 3. Update current score
  if (dice != 1) {
    roundScore += dice;
  } else {
    roundScore = 0;
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }

  document.getElementById('current-' + activePlayer).textContent = roundScore;
});



