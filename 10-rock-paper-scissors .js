let score =  JSON.parse(localStorage.getItem('score')) || {
    wins :  0,
    losses : 0,
    ties : 0
   }; // to change string to object we use jason parse

/* above method is tthe shortcut for this one
if(!score){
  score = {
    wins :  0,
    losses : 0,
    ties : 0
   };
};
*/ 
updateScoreElement();

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let results = '';

    if (playerMove === 'scissors'){

        if(computerMove === 'rock'){
            results = 'You lose.';
        }else if(computerMove === 'paper'){
            results = 'You Win.';
        }else if (computerMove === 'scissors'){
            results = 'Tie.';
        }

    } else if(playerMove === 'paper'){

        if(computerMove === 'rock'){
            results = 'You Win.';
        }else if(computerMove === 'paper'){
            results = 'Tie.';
        }else if (computerMove === 'scissors'){
            results = 'You lose.';
        }
        
    }else if(playerMove === 'rock'){

        if(computerMove === 'rock'){
            results = 'Tie.';
        }else if(computerMove === 'paper'){
            results = 'You lose.';
        }else if (computerMove === 'scissors'){
            results = 'You Win.';
        }
    }

    if(results === 'You Win.') {
        score.wins +=1;
    } else if (results === 'You lose.' ){
        score.losses +=1;
    }else if (results === 'Tie.'){
        score.ties +=1;
    }

    localStorage.setItem('score', JSON.stringify(score));


    updateScoreElement();

    document.querySelector('.js-results').innerHTML = results;
    
    document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
Computer `;

}

function updateScoreElement() {
    document.querySelector('.js-score')
     .innerHTML = `wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3 ){
        computerMove = 'rock';
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}