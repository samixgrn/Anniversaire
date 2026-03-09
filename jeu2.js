<<<<<<< HEAD
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const totalScoreText = document.getElementById("totalScore");
const startBtn = document.getElementById("startGame");

let score = 0;
let timeLeft = 45;
let gameRunning = false;
let timerId = null;

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

const symbols = ["💖", "💘", "💝", "💕", "💗", "❤️", "🩷", "💞"];

function getTotalScore() {
  return Number(localStorage.getItem("totalScore") || "0");
}

function setTotalScore(value) {
  localStorage.setItem("totalScore", String(value));
  totalScoreText.textContent = String(value);
}

function updateTotalDisplay() {
  totalScoreText.textContent = String(getTotalScore());
}

function shuffle(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function createBoard() {
  gameArea.innerHTML = "";
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  matchedPairs = 0;

  const deck = shuffle([...symbols, ...symbols]);

  deck.forEach((symbol) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = "❔";
    card.dataset.symbol = symbol;

    card.addEventListener("click", () => flipCard(card));

    gameArea.appendChild(card);
  });
}

function flipCard(card) {
  if (!gameRunning) return;
  if (lockBoard) return;
  if (card.classList.contains("flipped")) return;
  if (card.classList.contains("matched")) return;

  card.classList.add("flipped");
  card.textContent = card.dataset.symbol;

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;

  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    score += 5;
    matchedPairs++;
    scoreText.textContent = String(score);

    resetTurn();

    if (matchedPairs === symbols.length) {
      endGame();
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.textContent = "❔";
      secondCard.textContent = "❔";
      resetTurn();
    }, 700);
  }
}

function endGame() {
  gameRunning = false;
  clearInterval(timerId);
  timerId = null;

  const total = getTotalScore() + score;
  setTotalScore(total);
  localStorage.setItem("jeu2Done", "true");

  alert("Jeu 2 terminé 💞\nTu as gagné " + score + " points.");

  window.location.href = "jeu3.html";
}

function startGame() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  score = 0;
  timeLeft = 45;
  gameRunning = true;

  scoreText.textContent = "0";
  timeText.textContent = String(timeLeft);

  createBoard();

  timerId = setInterval(() => {
    timeLeft--;
    timeText.textContent = String(timeLeft);

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);
=======
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const totalScoreText = document.getElementById("totalScore");
const startBtn = document.getElementById("startGame");

let score = 0;
let timeLeft = 45;
let gameRunning = false;
let timerId = null;

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

const symbols = ["💖", "💘", "💝", "💕", "💗", "❤️", "🩷", "💞"];

function getTotalScore() {
  return Number(localStorage.getItem("totalScore") || "0");
}

function setTotalScore(value) {
  localStorage.setItem("totalScore", String(value));
  totalScoreText.textContent = String(value);
}

function updateTotalDisplay() {
  totalScoreText.textContent = String(getTotalScore());
}

function shuffle(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function createBoard() {
  gameArea.innerHTML = "";
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  matchedPairs = 0;

  const deck = shuffle([...symbols, ...symbols]);

  deck.forEach((symbol) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = "❔";
    card.dataset.symbol = symbol;

    card.addEventListener("click", () => flipCard(card));

    gameArea.appendChild(card);
  });
}

function flipCard(card) {
  if (!gameRunning) return;
  if (lockBoard) return;
  if (card.classList.contains("flipped")) return;
  if (card.classList.contains("matched")) return;

  card.classList.add("flipped");
  card.textContent = card.dataset.symbol;

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;

  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    score += 5;
    matchedPairs++;
    scoreText.textContent = String(score);

    resetTurn();

    if (matchedPairs === symbols.length) {
      endGame();
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.textContent = "❔";
      secondCard.textContent = "❔";
      resetTurn();
    }, 700);
  }
}

function endGame() {
  gameRunning = false;
  clearInterval(timerId);
  timerId = null;

  const total = getTotalScore() + score;
  setTotalScore(total);
  localStorage.setItem("jeu2Done", "true");

  alert("Jeu 2 terminé 💞\nTu as gagné " + score + " points.");

  window.location.href = "jeu3.html";
}

function startGame() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  score = 0;
  timeLeft = 45;
  gameRunning = true;

  scoreText.textContent = "0";
  timeText.textContent = String(timeLeft);

  createBoard();

  timerId = setInterval(() => {
    timeLeft--;
    timeText.textContent = String(timeLeft);

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);
>>>>>>> 4ca4e72 (first commit)
updateTotalDisplay();