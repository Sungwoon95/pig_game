const $ = (selector) => document.querySelector(selector);

const player1 = $(".first-player-wrap");
const player2 = $(".second-player-wrap");
const playScore1 = $('#first-player-score');
const playScore2 = $('#second-player-score');
const currentScore1 = $("#first-current-score");
const currentScore2 = $("#second-current-score");
const dice = $(".dice-number");
const newGameBtn = $(".new-game-button");
const playBtn = $(".playing-button");
const holdBtn = $(".hold-button");

// 점수 초기화
playScore1.textContent = 0;
playScore2.textContent = 0;
dice.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayerScore = currentScore1;
let playing = true;

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

playBtn.addEventListener("click", () => {
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
    
    if (scores[activePlayerScore===currentScore1? 0 : 1] >=10){
        playing= false;
        $('.player-active').classList.add('winner');
        $('.player-active').classList.remove('player-active');
    }else{
        switchPlayer();
    }
    }
    //activePlayer.closest(".score").textContent=scores[activePlayer]    
})