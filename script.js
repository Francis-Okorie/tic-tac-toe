const gameBoard = document.querySelector(".game-container");
const infoDisplay = document.querySelector(".info-display");
const gameCell = ["", "", "","", "", "", "", "", "",];
const resetGame = document.querySelector(".reset-game");

let go ="circle"

function gameStart(){
    gameCell.forEach((cell, index) => {
        console.log(index);
        let boardBody = document.createElement("div");
        boardBody.classList.add("square");
        boardBody.id =index;
        boardBody.addEventListener("click", addGo)
        gameBoard.appendChild(boardBody);
    })
}

gameStart();

function addGo(e){
    const goDisplay = document.createElement("div");
    goDisplay.classList.add(go);
    e.target.appendChild(goDisplay)
    go = go === "circle" ? "cross": "circle";
    infoDisplay.textContent = `It is ${go} turn`;
    e.target.removeEventListener("click", addGo);
    checkScore()
}

function checkScore(){
    const allSquares = document.querySelectorAll(".square");
    const winningSquare = [
        [0,1,2], [0,3,6], [0,4,8], [3,4,5], [1,4,7], [2,4,6], [6,7,8], [2,5,8]
    ]

    winningSquare.forEach(array => {
        const circleWins = array.every(cell => allSquares[cell].firstElementChild?.classList.contains("circle"));
        const crossWins = array.every(cell => allSquares[cell].firstElementChild?.classList.contains("cross"));
        if (circleWins) {
            infoDisplay.textContent = `Circle Wins!`;
            disableBoard()
        } else if (crossWins) {
            infoDisplay.textContent = `Cross Wins!`;
            disableBoard()
        } else if (gameCell.every(cell => cell !== "")) {
            infoDisplay.textContent = `It's a Draw!`;
        }
    });
}

function disableBoard(){
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => {
        square.removeEventListener("click", addGo)
    })
}

resetGame.addEventListener("click", restartGame);

function restartGame(){
    gameCell.fill("");
    go = "circle";
    gameBoard.innerHTML = "";
    infoDisplay.innerHTML = "";

    gameStart()
}
