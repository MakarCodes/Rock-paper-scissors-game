
const humanChoice = document.querySelector('#humanside');
const rockHuman = document.querySelector('#rockHuman');
const paperHuman = document.querySelector('#paperHuman');
const scissorsHuman = document.querySelector('#scissorsHuman');
const round = document.querySelector('#round-number');
const scoreComputer = document.querySelector('#computer-points');
const scoreHuman = document.querySelector('#player-points');
let scorePlayer = 0;
let scoreCPU = 0;
let i = 0;
const alertMessage = document.querySelector('.background-alert');
const whoIsTheWinner = document.querySelector('#winner');
const playAgainButton = document.querySelector('.play-again');
let name = '';
const rock = document.querySelector('#rockComputer');
const paper = document.querySelector('#paperComputer');
const scissors = document.querySelector('#scissorsComputer');
// zmienne globalne
// style na punkty
// for na addEventListener
// const computerChoice = document.querySelector('#computerside ul');   JAK ZMIENIC STYL WSZYSTKICH DZIECI
// reset po 5 grach

document.addEventListener('DOMContentLoaded', () => {
    name = prompt("Please enter your name")
    console.log(name);
});



playAgainButton.addEventListener('click', e => {
    e.preventDefault();
    alertMessage.style.display = 'none';
    i=0;
    scorePlayer=0;
    scoreCPU=0;
    round.innerText = '1';
    document.querySelector('#player-points').innerText = '0';
    document.querySelector('#computer-points').innerText = '0';
    rockHuman.style.opacity = '0.5';
    paperHuman.style.opacity = '0.5';
    scissorsHuman.style.opacity = '0.5';
    rock.style.opacity = '0.5';
    paper.style.opacity = '0.5';
    scissors.style.opacity = '0.5';
})

function start(idNumber){ 
    checkOpacity(idNumber);
    imgChange(idNumber);
    const cpu = randomComputerChoice();
    imgChange(cpu);
    ComparisonFunction(idNumber, cpu);
    changeUI();
}


humanChoice.addEventListener('click', e => {
    // console.log(e.target.getAttribute('id'));
    if(e.target.tagName === 'IMG'){
       let x = e.target.id; // ID wybranego obrazka
        // console.log(x);
        start(x);
    }
})



function changeUI(){
    round.innerText = i;
    scoreComputer.innerHTML = scoreCPU;
    scoreHuman.innerHTML = scorePlayer;
    if(i === 5 && scorePlayer > scoreCPU){
        whoIsTheWinner.innerText = name;
        setTimeout(function(){alertMessage.style.display = 'flex';}, 0);
    }else if (i === 5 && scorePlayer < scoreCPU){
        whoIsTheWinner.innerText = 'COMPUTER';
        setTimeout(function(){alertMessage.style.display = 'flex';}, 0);
    }else if (i === 5 && scorePlayer === scoreCPU){
        document.querySelector('.alert-message').innerText = 'REMIS!!!'
        setTimeout(function(){alertMessage.style.display = 'flex';}, 0);
    }
}


function ComparisonFunction(idNumber, cpu){
    let playerResult = document.querySelector('.resultHuman');
    let computerResult = document.querySelector('.resultComputer');

    if(idNumber === 'rockHuman'){
        if(cpu === 'rockComputer'){
            playerResult.innerHTML = 'DRAW!';
            computerResult.innerHTML = 'DRAW!';
             i+=1;
        } else if (cpu === 'paperComputer'){
            playerResult.innerHTML = 'LOST!';
            computerResult.innerHTML = 'WIN!';
            scoreCPU += 1;
             i+=1;
        } else if (cpu === 'scissorsComputer'){
            playerResult.innerHTML = 'WIN!';
            computerResult.innerHTML = 'LOST!';
            scorePlayer += 1;
             i+=1;
        }
    } else if (idNumber === 'paperHuman'){
        if(cpu === 'rockComputer'){
            playerResult.innerHTML = 'WIN!';
            computerResult.innerHTML = 'LOST!';
            scorePlayer += 1;
            i+=1;
        } else if (cpu === 'paperComputer'){
            playerResult.innerHTML = 'DRAW!';
            computerResult.innerHTML = 'DRAW!';
            i+=1;
        } else if (cpu === 'scissorsComputer'){
            playerResult.innerHTML = 'LOST!';
            computerResult.innerHTML = 'WIN!';
            scoreCPU += 1;
            i+=1;
        }
    } else if (idNumber === 'scissorsHuman'){
        if(cpu === 'rockComputer'){
            playerResult.innerHTML = 'LOST!';
            computerResult.innerHTML = 'WIN!';
            scoreCPU += 1;
            i+=1;
        } else if (cpu === 'paperComputer'){
            playerResult.innerHTML = 'WIN!';
            computerResult.innerHTML = 'LOST!';
            scorePlayer += 1;
            i+=1;
        } else if (cpu === 'scissorsComputer'){
            playerResult.innerHTML = 'DRAW!';
            computerResult.innerHTML = 'DRAW!';
            i+=1;
        }
    }
}

// losowanie przez komputer i zmiana opacity
function randomComputerChoice(){
    const myArray = ['rock', 'paper', 'scissors'];
    let int = myArray[Math.floor(Math.random() * myArray.length)];
    if(int === 'rock'){   
        rock.style.opacity = '1';
        paper.style.opacity = '0.5';
        scissors.style.opacity = '0.5';
        return 'rockComputer';
    } else if(int === 'paper') {
        paper.style.opacity = '1';
        scissors.style.opacity = '0.5';
        rock.style.opacity = '0.5';
        
        return 'paperComputer';
    } else if(int === 'scissors') {
        scissors.style.opacity = '1';
        rock.style.opacity = '0.5';
        paper.style.opacity = '0.5';
        return 'scissorsComputer';
    }
}

// funkcja zmieniająca cieniowanie obrazków
function checkOpacity(idNumber){
    if(idNumber === 'rockHuman'){
        rockHuman.style.opacity = '1';
        paperHuman.style.opacity = '0.5';
        scissorsHuman.style.opacity = '0.5';
    } else if (idNumber === 'paperHuman'){
        paperHuman.style.opacity = '1';
        rockHuman.style.opacity = '0.5';
        scissorsHuman.style.opacity = '0.5';
    } else if (idNumber === 'scissorsHuman'){
        scissorsHuman.style.opacity = '1';
        rockHuman.style.opacity = '0.5';
        paperHuman.style.opacity = '0.5';
    } 
}


// funkcja zmieniająca obrazek w zależności od wyboru użytkownika / komputera
function imgChange(choice){
    let imgPlayer = document.querySelector('#imgChangePlayer');
    // console.log(imgPlayer);
    let imgComputer = document.querySelector('#imgChangeComputer');

    switch(choice) {
        case 'rockHuman':
            imgPlayer.src = "img/rock.png";
            break;
        case 'paperHuman':
            imgPlayer.src = "../img/paper.png";
            break;
        case 'scissorsHuman':
            imgPlayer.src = "../img/scissors.png";
            break;
        case 'rockComputer':
            imgComputer.src = "../img/rock.png";
            break;
        case 'paperComputer':
            imgComputer.src = "../img/paper.png";
            break;
        case 'scissorsComputer':
            imgComputer.src = "../img/scissors.png";
            break;
        default:
            break;
    }
}




// if(e.target.tagName === 'A'){
    //     const line = e.target.parentElement.parentElement;
    //     list.removeChild(line);
    // }


// <button id="1" onClick="reply_click(this.id)">B1</button>
// <button id="2" onClick="reply_click(this.id)">B2</button>
// <button id="3" onClick="reply_click(this.id)">B3</button>
    
// <script type="text/javascript">
//   function reply_click(clicked_id)
//   {
//       alert(clicked_id);
//   }
// </script>


/* <button id="1" onClick="reply_click()"></button>
<button id="2" onClick="reply_click()"></button>
<button id="3" onClick="reply_click()"></button>

function reply_click()
{
    // event.target is the element that is clicked (button in this case).
    console.log(event.target.id);
} */