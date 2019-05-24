/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', () => {
    // 1. Random number
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display the result
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = `dice-${dice}.png`;

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    } else {
        // Next player
        roundScore = 0;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }
});
