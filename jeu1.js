<<<<<<< HEAD
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const totalScoreText = document.getElementById("totalScore");
const startBtn = document.getElementById("startGame");

let score = 0;
let timeLeft = 20;
let gameRunning = false;
let timerId = null;

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

function clearGameArea() {
    gameArea.innerHTML = "";
}

function spawnHeart() {
    if (!gameRunning) return;

    clearGameArea();

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.fontSize = "42px";

    const maxX = Math.max(0, gameArea.clientWidth - 60);
    const maxY = Math.max(0, gameArea.clientHeight - 60);

    heart.style.left = Math.random() * maxX + "px";
    heart.style.top = Math.random() * maxY + "px";

    heart.addEventListener("click", () => {
        if (!gameRunning) return;

        score++;
        scoreText.textContent = String(score);

        spawnHeart();
    });

    gameArea.appendChild(heart);
}

function endGame() {
    gameRunning = false;
    clearInterval(timerId);
    timerId = null;

    clearGameArea();

    const total = getTotalScore() + score;
    setTotalScore(total);
    localStorage.setItem("jeu1Done", "true");

    alert("Jeu 1 terminé 💖\nTu as gagné " + score + " points.");

    window.location.href = "jeu2.html";
}

function startGame() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    score = 0;
    timeLeft = 20;
    gameRunning = true;

    scoreText.textContent = "0";
    timeText.textContent = String(timeLeft);

    clearGameArea();
    spawnHeart();

    timerId = setInterval(() => {
        timeLeft--;
        timeText.textContent = String(timeLeft);

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

startBtn.addEventListener("click", startGame);
localStorage.setItem("totalScore", "0");
=======
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const totalScoreText = document.getElementById("totalScore");
const startBtn = document.getElementById("startGame");

let score = 0;
let timeLeft = 20;
let gameRunning = false;
let timerId = null;

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

function clearGameArea() {
    gameArea.innerHTML = "";
}

function spawnHeart() {
    if (!gameRunning) return;

    clearGameArea();

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.fontSize = "42px";

    const maxX = Math.max(0, gameArea.clientWidth - 60);
    const maxY = Math.max(0, gameArea.clientHeight - 60);

    heart.style.left = Math.random() * maxX + "px";
    heart.style.top = Math.random() * maxY + "px";

    heart.addEventListener("click", () => {
        if (!gameRunning) return;

        score++;
        scoreText.textContent = String(score);

        spawnHeart();
    });

    gameArea.appendChild(heart);
}

function endGame() {
    gameRunning = false;
    clearInterval(timerId);
    timerId = null;

    clearGameArea();

    const total = getTotalScore() + score;
    setTotalScore(total);
    localStorage.setItem("jeu1Done", "true");

    alert("Jeu 1 terminé 💖\nTu as gagné " + score + " points.");

    window.location.href = "jeu2.html";
}

function startGame() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    score = 0;
    timeLeft = 20;
    gameRunning = true;

    scoreText.textContent = "0";
    timeText.textContent = String(timeLeft);

    clearGameArea();
    spawnHeart();

    timerId = setInterval(() => {
        timeLeft--;
        timeText.textContent = String(timeLeft);

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

startBtn.addEventListener("click", startGame);
localStorage.setItem("totalScore", "0");
>>>>>>> 4ca4e72 (first commit)
updateTotalDisplay();