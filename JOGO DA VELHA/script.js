let currentPlayer = 1;
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = false;
let player1Name, player2Name;

function startGame() {
  player1Name = document.getElementById("player1").value || "Jogador 1";
  player2Name = document.getElementById("player2").value || "Jogador 2";

  document.getElementById("player-input").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("current-player").innerText = currentPlayer === 1 ? player1Name : player2Name;

  gameActive = true;
}

function makeMove(index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer === 1 ? "X" : "O";
  document.getElementById("board").children[index].innerText = board[index];

  if (checkWinner()) {
    document.getElementById("result").innerText = `Parabéns! ${currentPlayer === 1 ? player1Name : player2Name} venceu!`;
    gameActive = false;
  } else if (board.every(cell => cell !== "")) {
    document.getElementById("result").innerText = "Empate! O jogo terminou.";
    gameActive = false;
  } else {
    currentPlayer = 3 - currentPlayer; // Alternar entre jogador 1 e jogador 2 (1+2=3)
    document.getElementById("current-player").innerText = currentPlayer === 1 ? player1Name : player2Name;
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  return false;
}
