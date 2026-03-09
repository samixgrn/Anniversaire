const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const totalScoreText = document.getElementById("totalScore");
const startBtn = document.getElementById("startGame");
const rewardBox = document.getElementById("rewardBox");
const finalTotal = document.getElementById("finalTotal");
const rewardText = document.getElementById("rewardText");
const restartAll = document.getElementById("restartAll");

let score = 0;
let timeLeft = 20;
let gameRunning = false;
let timerId = null;
let moveHeartId = null;

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

function showHeart() {
    if (!gameRunning) return;

    clearGameArea();

    const heart = document.createElement("div");
    heart.className = "flash-heart";
    heart.textContent = "💘";
    heart.style.fontSize = "46px";

    const maxX = Math.max(0, gameArea.clientWidth - 60);
    const maxY = Math.max(0, gameArea.clientHeight - 60);

    heart.style.left = Math.random() * maxX + "px";
    heart.style.top = Math.random() * maxY + "px";

    heart.addEventListener("click", () => {
        if (!gameRunning) return;

        score++;
        scoreText.textContent = String(score);
        showHeart();
    });

    gameArea.appendChild(heart);
}

function getRewardMessage(total) {
    if (total >= 100) {
        return "🎁 Récompense débloquée : sortie voiture + manger 🚗🍴 / sortie plage, restau et activité nautique 🌊💖 / séjour à l'hôtel ❤️";
    }

    if (total >= 95) {
        return "🎁 Récompense débloquée : sortie voiture + manger 🚗🍴 / sortie plage, restau et activité nautique 🌊💖";
    }

    if (total >= 90) {
        return "🎁 Récompense débloquée : sortie voiture + manger 🚗🍴";
    }

    return "💗 Pas encore de récompense débloquée. Il faut atteindre au moins 90 points.";
}

function endGame() {
    gameRunning = false;

    clearInterval(timerId);
    clearInterval(moveHeartId);
    timerId = null;
    moveHeartId = null;

    clearGameArea();

    const total = getTotalScore() + score;
    setTotalScore(total);
    localStorage.setItem("jeu3Done", "true");

    finalTotal.textContent = String(total);

    rewardText.innerHTML = `
    <strong>Score total :</strong> ${total}<br><br>
    ${getRewardMessage(total)}
  `;

    rewardBox.classList.remove("hidden");
}

function startGame() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    if (moveHeartId) {
        clearInterval(moveHeartId);
        moveHeartId = null;
    }

    score = 0;
    timeLeft = 20;
    gameRunning = true;

    rewardBox.classList.add("hidden");
    scoreText.textContent = "0";
    timeText.textContent = String(timeLeft);

    clearGameArea();
    showHeart();

    timerId = setInterval(() => {
        timeLeft--;
        timeText.textContent = String(timeLeft);

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    moveHeartId = setInterval(() => {
        if (gameRunning) {
            showHeart();
        }
    }, 900);
}

restartAll.addEventListener("click", () => {
    localStorage.setItem("totalScore", "0");
    localStorage.removeItem("jeu1Done");
    localStorage.removeItem("jeu2Done");
    localStorage.removeItem("jeu3Done");
});

startBtn.addEventListener("click", startGame);
updateTotalDisplay();
rewardBox.classList.add("hidden");