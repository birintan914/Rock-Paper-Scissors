//Initialization:
let mainMsg = document.querySelector(".mainMsg")
let secondaryMsg = document.querySelector(".secondaryMsg")
let playbut = document.querySelector('.playbtn')
let human = document.querySelector(".you")
let computer = document.querySelector(".computer")
let title = document.querySelector(".title")
let subtitle = document.querySelector(".subtitle")
let scoreBoard = document.querySelector(".scoreboard")
let choices = document.querySelectorAll(".choice")
let playAgain = document.getElementById('again')

const yourScorebox = document.getElementById('playerScore')
const computerScorebox = document.getElementById('computerScore');;
let yourScore = 0;
let computerScore = 0;

//Toggles:
function toggleMSG(){
    if(mainMsg.style.display==='none'){ //turn Message ON, Playbtn Off
        mainMsg.style.display = 'block';
        secondaryMsg.style.display = 'block'
        playbut.style.display = 'none'
    }
    else {  //turn Message OFF, playbtn On
        mainMsg.style.display = 'none';
        secondaryMsg.style.display = 'none'
        playbut.style.display = 'inline-block'
    }
}

function toggleScore(){
    if(human.style.display==='none'){   //turn Score ON, Title OFF
        human.style.display = 'flex';
        computer.style.display = 'flex'
        title.style.display = 'none';
        subtitle.style.display = 'none';
        scoreBoard.style.display = 'flex'
    }
    else {  //turn Score OFF, title ON
        human.style.display = 'none'; 
        computer.style.display = 'none'
        title.style.display = 'block';
        subtitle.style.display = 'block';
        scoreBoard.style.display = 'block'
    }
}

function toggleOptions(setting){
    let options = document.querySelectorAll('.choice')

    if(setting==1){ //Choices
        options.forEach(choice => {
            choice.style.display = 'none'
            choice.style.display = 'inline-block'
        })
        playAgain.style.display = 'none'
    }
    else if(setting==2){ //Play Again button
        options.forEach(choice => {
            choice.style.display = 'none'
        })
        playAgain.style.display = 'inline-block'
    }
}

//FUNCTIONS:
function resetScore(urScore,pcScore){
    yourScore = urScore;
    computerScore = pcScore;
    yourScorebox.textContent = urScore;
    computerScorebox.textContent = pcScore;
}
function startGame(){
    resetScore(0,0);

    toggleScore();
    toggleMSG();

    mainMsg.textContent = 'Choose a Weapon'
    secondaryMsg.textContent = 'first to 5, wins the game'
}
function getRobotsMove(){
    compChoice = rand(3);
    if(compChoice===1) return "rock"
    else if(compChoice===2) return "paper"
    else return "scissor";
}
function rand(upto){
    return Math.floor(Math.random() * upto) + 1;
}
function restartGame(){
    mainMsg.textContent = 'Game Over'
    secondaryMsg.textContent = (yourScore > computerScore) ? 'You Won!' : 'You Lost!'

    toggleOptions(2)
    playAgain.addEventListener('click', ()=> {
        console.log('test')
        resetScore(0,0)
        toggleOptions(1)
        mainMsg.textContent = 'Choose a Weapon'
        secondaryMsg.textContent = 'first to 5, wins the game'
    })
}
function playRound(){
    let playerMove = this.id;
    let robot = getRobotsMove();

    //Draw
    if(playerMove===robot){
        mainMsg.textContent = "DRAW";
    }

    //Player Wins:
    else if((playerMove==='rock' && robot==='scissor') ||
            (playerMove==='paper' && robot==='rock') ||
            (playerMove==='scissor' && robot ==='paper')){
                mainMsg.textContent = 'You Win'
                secondaryMsg.textContent = `${playerMove} beats ${robot}`
                yourScore +=1;
                yourScorebox.textContent = yourScore;

            }
    else if((robot==='rock' && playerMove==='scissor') ||
            (robot==='paper' && playerMove==='rock') ||
            (robot==='scissor' && playerMove ==='paper')){
                mainMsg.textContent = "You Lose"
                secondaryMsg.textContent = `${robot} beats ${playerMove}`
                computerScore +=1;
                computerScorebox.textContent = computerScore;
            }

    if(yourScore===5 || computerScore===5){
        restartGame();
    }
}
//MAIN
    toggleMSG();
    toggleScore();
    toggleOptions(1);

    playbut.addEventListener('click', startGame)

    choices.forEach(choice => choice.addEventListener('click', playRound))
