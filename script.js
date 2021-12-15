const players = [0, 1];

const playersScore = players.map(() => {
    return Math.floor(Math.random() * 6) + 1;
});

const bonesScoresImages = {
    1: '.one',
    2: '.two',
    3: '.three',
    4: '.four',
    5: '.five',
    6: '.six',
}

const winnerTitle = document.getElementsByTagName('h1');
const playerBones = document.querySelectorAll('.bone-container');

playersScore.forEach((s, i) => playerBones[i].querySelector(bonesScoresImages[s]).style.display = 'flex');

if ( playersScore[0] > playersScore[1] ) {
    winnerTitle[0].innerText = 'Player 1 win!';
}
else if ( playersScore[0] < playersScore[1] ) { 
    winnerTitle[0].innerText = 'Player 2 win!';
}
else {
    winnerTitle[0].innerText = 'Draw!';
}