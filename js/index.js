const $ = (selector) => document.querySelector(selector);

const player1 = $(".first-player-wrap");
const player2 = $(".second-player-wrap");
const playScore1 = $('#first-player-score');
const playScore2 = $('#second-player-score');
const currentScore1= $("#first-current-score");
const currentScore2= $("#second-current-score");
const dice = $(".dice-number");
const newGameBtn = $(".new-game-button");
const playBtn = $(".playing-button");
const holdBtn = $(".hold-button");

// 점수 초기화
playScore1.textContent = 0;
playScore2.textContent = 0;
dice.textContent = 0;

const scores = [0,0];
let currentScore = 0;
let activePlayer= currentScore1;

playBtn.addEventListener("click", ()=>{
    // 주사위 동작
    // 주사위 표시
    // 주사위 체크

    const diceNum = Math.floor(Math.random() * 6) + 1;
    
    dice.textContent = diceNum;

    if(diceNum !== 1){
        currentScore += diceNum;
        activePlayer.textContent = currentScore;
    }else{
        activePlayer.textContent = 0;
        currentScore=0;
        activePlayer = activePlayer === currentScore1 ? currentScore2 :currentScore1;
        player1.classList.toggle("player-active");
        player2.classList.toggle("player-active");
    }
})