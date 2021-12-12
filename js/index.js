'use strict'
//
const player1 = document.querySelector(".first-player-wrap");
const player2 = document.querySelector(".second-player-wrap");
const playScore1 = document.querySelector('#first-player-score');
const playScore2 = document.querySelector('#second-player-score');
const currentScore1 = document.querySelector("#first-current-score");
const currentScore2 = document.querySelector("#second-current-score");
const dice = document.querySelector(".dice-number");
const newGameBtn = document.querySelector(".new-game-button");
const playBtn = document.querySelector(".playing-button");
const holdBtn = document.querySelector(".hold-button");

let scores, currentScore, activePlayerScore, playing;

const init =function(){
    // 점수,주사위 초기화
    playScore1.textContent = 0;
    playScore2.textContent = 0;
    dice.textContent = 0;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;

    // 현재 점수
    scores = [0, 0];
    currentScore = 0;
    activePlayerScore = currentScore1;
    playing = true;

    player1.classList.remove('winner');
    player2.classList.remove('winner');
    player1.classList.add('player-active');
    player2.classList.remove('player-active');
}
init();

const switchPlayer = () =>{
    activePlayerScore.textContent = 0;
        currentScore = 0;
        activePlayerScore = activePlayerScore === currentScore1
            ? currentScore2
            : currentScore1;
        player1
            .classList
            .toggle("player-active");
        player2
            .classList
            .toggle("player-active");
}

playBtn.addEventListener('click', () => {
    // 주사위 동작 주사위 표시 주사위 체크

    if(playing){
        const diceNum = Math.floor(Math.random() * 6) + 1;

    dice.textContent = diceNum;

    if (diceNum !== 1) {
        currentScore += diceNum;
        activePlayerScore.textContent = currentScore;
    } else {
        switchPlayer();
    }
    }
})

holdBtn.addEventListener('click',()=>{
    if(playing){
        scores[activePlayerScore===currentScore1? 0 : 1] += currentScore;
    activePlayerScore.closest('section').querySelector('.score').textContent =scores[activePlayerScore===currentScore1? 0 : 1]
    
    if (scores[activePlayerScore===currentScore1? 0 : 1] >=100){
        playing= false;
        document.querySelector('.player-active').classList.add('winner');
        document.querySelector('.player-active').classList.remove('player-active');        
    }else{
        switchPlayer();
    }
    }
})

newGameBtn.addEventListener('click',init)