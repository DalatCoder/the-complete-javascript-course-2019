
var activePlayer, scores, roundScore;

activePlayer = 0;
scores = [0, 0];
roundScore = 0;

// Hide the dice by default
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {

  // 1. Create random number  
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display


  // 3. Update current score

});