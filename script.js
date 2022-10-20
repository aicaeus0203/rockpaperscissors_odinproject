

function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissor'];
    return choice[Math.floor(Math.random() * 3)];
}


let computerChoice = getComputerChoice();
let playerChoice = 'paper';

function playRound(player, computer){
    let result;
    switch(player){
        case 'paper':
            switch(computer){
                case 'paper':
                    result = 'draw';
                    break;
                case 'rock':
                    result = 'win';
                    break;
                case 'scissor':
                    result = 'lose';
                    break;     
                default:
                    result = 'somethings wrong';   
                    break;                    
            }
            break;
        case 'rock':
            switch(computer){
                case 'paper':
                    result = 'lose';
                    break;
                case 'rock':
                    result = 'draw';
                    break;
                case 'scissor':
                    result = 'win';
                    break;     
                default:
                    result = 'somethings wrong';       
                    break;                
            }
            break;
        case 'scissor':
            switch(computer){
                case 'paper':
                    result = 'win';
                    break;
                case 'rock':
                    result = 'lose';
                    break;
                case 'scissor':
                    result = 'draw';
                    break;     
                default:
                    result = 'somethings wrong';     
                    break;                  
            }
            break;
    
    }
    return result;
}


