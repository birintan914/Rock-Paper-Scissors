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

//FUNCTIONS:
function startGame(){
    toggleScore();
    toggleMSG();

    mainMsg.textContent = 'Choose a Weapon'
    secondaryMsg.textContent = 'first to 5, wins the game'
}

function checkWinner(){
    console.log(this.id)
}

//MAIN
    toggleMSG();
    toggleScore();

    playbut.addEventListener('click', startGame)

    choices.forEach(choice => choice.addEventListener('click', checkWinner))