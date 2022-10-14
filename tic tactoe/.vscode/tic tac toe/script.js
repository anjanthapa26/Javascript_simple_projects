let playerX = "";
let playerY = "";
let gameBoard = ['','','','','','','','','']
let playerTurn = true;
let winner = false;
const currentPlayer = (playerTurn) => {
    return playerTurn === true ? 'X' : 'O';
}

const updateHeader = () => {

    if(!winner) {
        let currentPlayerText = document.querySelector('.board___player-turn');
        if(currentPlayer(playerTurn) === 'X') {
            currentPlayerText.innerHTML = `
            <span class="name--style">${playerX}</span>, you are up!
            <div class="u-r-winner"></div>` 
        }
        else {
            currentPlayerText.innerHTML = `
            <span class="name--style">${playerY}</span>, you are up.
            <div class="u-r-winner"></div>
        `
        }
    }
}

const checkeWinner = () => {
    const changer = !playerTurn;
    const winningSequences = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let currentPlayerText = document.querySelector('.board___player-turn');
    winningSequences.forEach((sequences) => {
        if(gameBoard[sequences[0]] === currentPlayer(changer) && gameBoard[sequences[1]] === currentPlayer(changer) && gameBoard[sequences[2]] === currentPlayer(changer)) {
            const cell1 = document.getElementById(`${sequences[0]}`);
            const cell2 = document.getElementById(`${sequences[1]}`);
            const cell3 = document.getElementById(`${sequences[2]}`);
            console.log(cell1,cell2,cell3);

            cell1.classList.add('winner-color');
            cell2.classList.add('winner-color');
            cell3.classList.add('winner-color');

            winner = true;
            if(currentPlayer(changer) === 'X') {
                console.log('entered winner X');
                currentPlayerText.innerHTML = `
                <div class="congratulations">Congratulations ${playerX}</div>
                <div class="u-r-winner">You are our winner!</div> `
            }
            else {
                console.log('entered winner Y')
                currentPlayerText.innerHTML = `
                 <div class="congratulations">Congratulations ${playerX}</div>
                 <div class="u-r-winner">You are our winner!</div> `
            }


            removeAction();
            return;
        }
        
    })


}



const boardUpdate = (e) => {
    let counter = 0
    const mainDiv = document.getElementById('box-container');
    for(let obj in Array.from(mainDiv.children)) {
        if (e.target.classList[0] === mainDiv.children[obj].classList[0]) {
            break;
        }
        counter +=1
    }

    const elem = document.getElementsByClassName(e.target.classList[0]);
    elem[0].setAttribute('id',`${counter}`);
    // Check of the selected tag has empty content  if empty place the player sign inside it.
    if(e.target.textContent === "") {

        if(currentPlayer(playerTurn) === 'X') {
            e.target.textContent = 'X';
            playerTurn = false
            gameBoard[counter] = 'X'
        }
        else {
            e.target.textContent = 'O';
            playerTurn = true;
            gameBoard[counter] = 'O';
        }
    }

}

const gameUpdate = (e) => {
    boardUpdate(e);
    checkeWinner();
    updateHeader();

}


const addPlayers = (event) => {
    event.preventDefault();

    if(this.player1.value === "" || this.player2.value === "") {
        alert('please enter the players name first');
        return;
    }
    else {
        const boxContainer = document.querySelector('.header-container');
        const formContainer = document.querySelector('.player-field');
        formContainer.classList.add('hide-container');
        boxContainer.classList.remove('hide-container');
        playerX = this.player1.value;
        playerY = this.player2.value;
        
        updateHeader();
        takeAction();
    }

}

const takeAction = () => {
    const items = document.querySelectorAll('.item');
    console.log(items);
    items.forEach((item) => {
        item.addEventListener('click',gameUpdate);
    })
}

const removeAction = () => {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.removeEventListener('click',gameUpdate);
    })
}



const app= () => {
   let formSubmit = document.querySelector('#form-container');
   formSubmit.addEventListener('submit',addPlayers);
}

window.addEventListener('load',app);