const gameBoard = document.querySelector(".game-container");
const infoDisplay = document.querySelector(".info-display");
const gameCell = ["", "", "","", "", "", "", "", "",];

function gameStart(){
    gameCell.forEach((cell, index) => {
        console.log(index);
        let boardBody = document.createElement("div");
        boardBody.classList.add("square");
        boardBody.id =index;
        gameBoard.appendChild(boardBody);
    })
}

gameStart()