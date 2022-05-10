
playGame(5);

function playGame(rounds){
    for(let i=0; i<rounds; i++){
        let PlayerSelect = prompt("Choose rock[R], paper[P] or scissors[S]").toUpperCase();
        let ComputerSelect = computerPlay();
        alert(playRound(PlayerSelect, ComputerSelect));
    }
}
function playRound(playerSelection, computerSelection){
    let p = playerSelection
    let c = computerSelection;
    let str = "You chose:"+p[0] + ", Computer chose:"+c[0];
    console.log(str);
    if(playerSelection[0]=="R"){
        if(computerSelection[0]=="R"){
            return "Draw!";
        }
        else if(computerSelection[0]=="P"){
            return "You lose! Paper beats Rock";
        }
        else if(computerSelection[0]=="S"){
            return "You win! Rock beats Paper"
        }
    }
    else if(playerSelection[0]=="P"){
        if(computerSelection[0]=="R"){
            return "You win! Paper beats Rock";
        }
        else if(computerSelection[0]=="P"){
            return "Draw!";
        }
        else if(computerSelection[0]=="S"){
            return "You lose! Scissors beats Paper";
        }
    }
    else if(playerSelection[0]=="S"){
        if(computerSelection[0]=="R"){
            return "You lose! Rock beats Scissors"
        }
        else if(computerSelection[0]=="P"){
            return "You win! Scissors beats paper";
        }
        else if(computerSelection[0]=="S"){
            return "Draw";
        }
    }
}

function computerPlay(){
    compChoice = rand(3);
    if(compChoice===1) return "Rock"
    else if(compChoice===2) return "Paper"
    else return "Scissors";
}
function rand(upto){
    return Math.floor(Math.random() * upto) + 1;
}