const score = {
    wins: 0,
    losses: 0,
    ties: 0
};
localStorage.getItem('score');

function resultPrint(result) {
    document.querySelector('.js-result').innerHTML = `${result}`;
}

function scorePrint(score) {
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins} losses:${score.losses} ties:${score.ties}`;
}

function dowork(computerMove, move) {
    document.querySelector('.js-choice').innerHTML = `You
 <img class="webimg" src="images/${move}-emoji.png">
 <img class="webimg" src="images/${computerMove}-emoji.png">Computer`;
}

function compumove() {
    const random = Math.random();
    let computerMove = '';
    if (random >= 0 && random < 1 / 3) {
        computerMove = 'rock';
    }
    else if (random >= 1 / 3 && random < 2 / 3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissors';
    }
    return computerMove;
}

document.body.addEventListener('keydown',(event) => {

    if(event.key==='r'){
        playGame('rock');
    }
    else if(event.key==='p'){
        playGame('paper');
    }
    else if(event.key==='s'){
        playGame('scissors');
    }
    else if(event.key==='a'){
        autoplay();
    }
});


document.querySelector('.js-rock').addEventListener('click',() =>{
    playGame('rock');
});

document.querySelector('.js-paper').addEventListener('click',() =>{
    playGame('paper');
});

document.querySelector('.js-scissors').addEventListener('click',() =>{
    playGame('scissors');
});

function playGame(playerMove){
    const computerMove=compumove();
    
    let result='';

    if(playerMove==='scissors'){
 
            if(computerMove==='scissors'){
                result='Tie';
                score.ties++;
            }
            else if(computerMove==='rock'){
                result='You lose -_-!';
                score.losses++;
            }
            else{
                result='You Win !';
                score.wins++;
            }
        resultPrint(result);
        dowork(computerMove,'scissors');
        scorePrint(score);
    
    }
    else if(playerMove==='paper'){

        if(computerMove==='paper'){
            result='Tie';
            score.ties++;
        }
        else if(computerMove==='scissors'){
           result='You lose -_-!';
           score.losses++;
        }
        else{
            result='You Win !';
            score.wins++;
        }
      resultPrint(result);
      dowork(computerMove,'paper');
      scorePrint(score);
    

    }
    else{

        if(computerMove==='rock'){
            result='Tie';
            score.ties++;
        }
        else if(computerMove==='paper'){
           result='You lose -_-!';
           score.losses++;
        }
        else{
            result='You Win !';
            score.wins++;
        }
      resultPrint(result);
      dowork(computerMove,'rock'); 
      scorePrint(score);

    }
   
}

let isAutoPlaying=false;
let intervalId;

function autoplay() {

    if(!isAutoPlaying){
            intervalId = setInterval(function(){
            
            const randomMove=compumove();
            playGame(randomMove);

             },1000);
            isAutoPlaying=true;
            document.querySelector('.js-auto-play').innerHTML='Stop Play';
    }
    else{
           clearInterval(intervalId);
           isAutoPlaying=false;
           document.querySelector('.js-auto-play').innerHTML='Auto Play';
    }
     
    
}
