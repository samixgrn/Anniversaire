const mouseGlow = document.querySelector(".mouse-glow");
const heartsBackground = document.getElementById("heartsBackground") || document.querySelector(".hearts-background");

const datesBtn = document.getElementById("datesBtn");
const musicBtn = document.getElementById("musicBtn");
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

const overlay = document.getElementById("overlay");
const sidePanel = document.getElementById("sidePanel");
const panelLabel = document.getElementById("panelLabel");
const panelTitle = document.getElementById("panelTitle");
const panelBody = document.getElementById("panelBody");
const closePanelBtn = document.getElementById("closePanelBtn");

const openLetterBtn = document.getElementById("openLetterBtn");
const letterModal = document.getElementById("letterModal");
const closeLetterBtn = document.getElementById("closeLetterBtn");

const loveAudio = document.getElementById("loveAudio");

/* Mets ici vos vraies dates */
const relationshipStartDate = new Date("2025-06-13T00:00:00");
const meetingStartDate = new Date("2022-06-15T00:00:00");
const nextMeetingDate = new Date("2026-06-25T18:00:00");

/* Mets ici tes vrais fichiers audio */
const playlist = [
  {
    title: "Musique 1/5",
    src: "musique/raindance.mp3"
  },
    {
    title: "Musique 2/5",
    src: "musique/reste_en_vie.mp3"
  },
    {
    title: "Musique 3/5",
    src: "musique/embeli.mp3"
  },
  {
    title: "Musique 4/5",
    src: "musique/motel.mp3"
  },
      {
    title: "Musique 5/5",
    src: "musique/me_u.mp3"
  }
];

let currentTrackIndex = Number(localStorage.getItem("musicTrack") || 0);

/* Thème initial */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  if (themeIcon) themeIcon.textContent = "☀️";
} else {
  if (themeIcon) themeIcon.textContent = "🌙";
}

/* Glow souris */
window.addEventListener("mousemove", (e) => {
  if (!mouseGlow) return;
  mouseGlow.style.left = `${e.clientX}px`;
  mouseGlow.style.top = `${e.clientY}px`;
});

window.addEventListener(
  "touchmove",
  (e) => {
    if (!mouseGlow) return;
    const touch = e.touches[0];
    if (!touch) return;
    mouseGlow.style.left = `${touch.clientX}px`;
    mouseGlow.style.top = `${touch.clientY}px`;
  },
  { passive: true }
);

/* Coeurs */
function createBackgroundHeart() {
if (!heartsBackground) return;

  const heart = document.createElement("div");
  heart.classList.add("bg-heart");
  heart.textContent = Math.random() > 0.5 ? "❤" : "♥";

  const size = Math.random() * 16 + 12;
  const left = Math.random() * 100;
  const duration = Math.random() * 5 + 7;
  const delay = Math.random() * 2;
  const opacity = Math.random() * 0.18 + 0.06;

  heart.style.left = `${left}vw`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.opacity = opacity;

  heartsBackground.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, (duration + delay) * 1000 + 500);
}

setInterval(createBackgroundHeart, 700);

for (let i = 0; i < 10; i++) {
  setTimeout(createBackgroundHeart, i * 250);
}

/* Lettre */
if (openLetterBtn && letterModal) {
  openLetterBtn.addEventListener("click", () => {
    letterModal.classList.remove("hidden");
  });
}

if (closeLetterBtn && letterModal) {
  closeLetterBtn.addEventListener("click", () => {
    letterModal.classList.add("hidden");
  });
}

if (letterModal) {
  letterModal.addEventListener("click", (e) => {
    if (e.target === letterModal) {
      letterModal.classList.add("hidden");
    }
  });
}

/* Panneau latéral */
function openSidePanel(label, title, content) {
  if (!panelLabel || !panelTitle || !panelBody || !overlay || !sidePanel) return;

  panelLabel.textContent = label;
  panelTitle.textContent = title;
  panelBody.innerHTML = content;

  overlay.classList.remove("hidden");
  sidePanel.classList.remove("hidden");

  bindMusicControlsIfNeeded();
  bindDateRevealIfNeeded();
}

function bindDateRevealIfNeeded() {
  const dateItems = document.querySelectorAll(".date-item");

  if (!dateItems.length) return;

  dateItems.forEach((item) => {
    item.onclick = () => {
      item.classList.remove("is-hidden");
      item.classList.add("is-revealed");

      const hint = item.querySelector(".date-item-hint");
      if (hint) {
        hint.textContent = "Révélé ❤️";
      }
    };
  });
}

function closeSidePanel() {
  if (overlay) overlay.classList.add("hidden");
  if (sidePanel) sidePanel.classList.add("hidden");
}

if (closePanelBtn) {
  closePanelBtn.addEventListener("click", closeSidePanel);
}

if (overlay) {
  overlay.addEventListener("click", closeSidePanel);
}

/* Temps */
function getDurationParts(fromDate, toDate) {
  const diff = Math.floor((toDate - fromDate) / 1000);

  if (diff <= 0) {
    return null;
  }

  const days = Math.floor(diff / (60 * 60 * 24));
  const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = diff % 60;

  return { days, hours, minutes, seconds };
}

function formatDurationText(diff) {
  if (!diff) return "Pas encore disponible.";
  return `${diff.days} jours, ${diff.hours} heures, ${diff.minutes} minutes et ${diff.seconds} secondes`;
}

function getKnownDurationText() {
  return formatDurationText(getDurationParts(meetingStartDate, new Date()));
}

function getRelationshipDurationText() {
  return formatDurationText(getDurationParts(relationshipStartDate, new Date()));
}

function getCountdownText() {
  const diff = getDurationParts(new Date(), nextMeetingDate);
  if (!diff) return "C’est le moment de vous retrouver ❤️";
  return formatDurationText(diff);
}

/* Bouton dates */
if (datesBtn) {
  datesBtn.addEventListener("click", () => {
    openSidePanel(
      "Dates importantes",
      "Devine nos dates 📅",
      `
        <div class="dates-stack">
          <div class="date-item is-hidden" data-reveal="countdown">
            <span class="date-item-label">Avant qu’on se revoie</span>
            <div class="date-item-value" id="dynamicCountdown">${getCountdownText()}</div>
            <span class="date-item-hint">Clique pour révéler</span>
          </div>

          <div class="date-item is-hidden" data-reveal="known">
            <span class="date-item-label">Depuis qu’on se connaît</span>
            <div class="date-item-value" id="dynamicKnownTime">${getKnownDurationText()}</div>
            <span class="date-item-hint">Clique pour révéler</span>
          </div>

          <div class="date-item is-hidden" data-reveal="love">
            <span class="date-item-label">Depuis qu'on a assumé</span>
            <div class="date-item-value" id="dynamicLoveCounter">${getRelationshipDurationText()}</div>
            <span class="date-item-hint">Clique pour révéler</span>
          </div>
        </div>
      `
    );
  });
}

/* Bouton musique */
if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    openSidePanel(
      "Notre musique",
      "Contrôle la musique 🎵",
      `
        <p class="panel-big-text" id="dynamicMusicTitle">${playlist[currentTrackIndex].title}</p>

        <div class="music-controls">
          <button class="music-control-btn" id="prevTrackBtn" type="button">⏮</button>
          <button class="music-control-btn" id="playPauseBtn" type="button">▶</button>
          <button class="music-control-btn" id="nextTrackBtn" type="button">⏭</button>
        </div>

        <div class="volume-control">
          <label for="volumeRange">Volume</label>
          <input type="range" id="volumeRange" min="0" max="1" step="0.05" value="${loveAudio ? (loveAudio.volume || 0.7) : 0.7}">
        </div>
      `
    );
  });
}

/* Bouton thème */
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");

    if (themeIcon) {
      themeIcon.textContent = isLight ? "☀️" : "🌙";
    }

    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

/* Mise à jour dynamique */
setInterval(() => {
  const dynamicCountdown = document.getElementById("dynamicCountdown");
  const dynamicKnownTime = document.getElementById("dynamicKnownTime");
  const dynamicLoveCounter = document.getElementById("dynamicLoveCounter");

  if (dynamicCountdown) {
    dynamicCountdown.textContent = getCountdownText();
  }

  if (dynamicKnownTime) {
    dynamicKnownTime.textContent = getKnownDurationText();
  }

  if (dynamicLoveCounter) {
    dynamicLoveCounter.textContent = getRelationshipDurationText();
  }
}, 1000);

/* Musique */
function loadTrack(index) {
  const track = playlist[index];
  loveAudio.src = track.src;

  const savedTime = Number(localStorage.getItem("musicTime") || 0);

  loveAudio.addEventListener(
    "loadedmetadata",
    () => {
      if (!isNaN(savedTime) && savedTime > 0) {
        loveAudio.currentTime = savedTime;
      }
    },
    { once: true }
  );

  const dynamicMusicTitle = document.getElementById("dynamicMusicTitle");
  if (dynamicMusicTitle) {
    dynamicMusicTitle.textContent = track.title;
  }
}

function playCurrentTrack() {
    if (!loveAudio) return;
  loveAudio.play();
  localStorage.setItem("musicPlaying", "true");
  const playPauseBtn = document.getElementById("playPauseBtn");
  if (playPauseBtn) {
    playPauseBtn.textContent = "⏸";
  }
}

function pauseCurrentTrack() {
    if (!loveAudio) return;
  loveAudio.pause();
  localStorage.setItem("musicPlaying", "false");
  const playPauseBtn = document.getElementById("playPauseBtn");
  if (playPauseBtn) {
    playPauseBtn.textContent = "▶";
  }
}

function bindMusicControlsIfNeeded() {
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevTrackBtn = document.getElementById("prevTrackBtn");
  const nextTrackBtn = document.getElementById("nextTrackBtn");
  const volumeRange = document.getElementById("volumeRange");

  if (!playPauseBtn || !prevTrackBtn || !nextTrackBtn || !volumeRange) {
    return;
  }

  volumeRange.value = loveAudio.volume || 0.7;

  prevTrackBtn.onclick = () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    localStorage.setItem("musicTrack", currentTrackIndex);
    localStorage.setItem("musicTime", "0");
    loadTrack(currentTrackIndex);
    playCurrentTrack();
  };

  nextTrackBtn.onclick = () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    localStorage.setItem("musicTrack", currentTrackIndex);
    localStorage.setItem("musicTime", "0");
    loadTrack(currentTrackIndex);
    playCurrentTrack();
  };

  playPauseBtn.onclick = () => {
    if (!loveAudio.src) {
      loadTrack(currentTrackIndex);
      playCurrentTrack();
      return;
    }

    if (loveAudio.paused) {
      playCurrentTrack();
    } else {
      pauseCurrentTrack();
    }
  };

volumeRange.oninput = () => {
  loveAudio.volume = volumeRange.value;
  localStorage.setItem("musicVolume", loveAudio.volume);
};

  if (!loveAudio.src) {
    loadTrack(currentTrackIndex);
  }

  playPauseBtn.textContent = loveAudio.paused ? "▶" : "⏸";
}

if (loveAudio) {
loveAudio.volume = Number(localStorage.getItem("musicVolume") || 0.7);
const wasPlaying = localStorage.getItem("musicPlaying") === "true";

if (wasPlaying) {
  loadTrack(currentTrackIndex);
  loveAudio.play();
}
  loveAudio.addEventListener("ended", () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    playCurrentTrack();
  });
}

loveAudio.addEventListener("timeupdate", () => {
  localStorage.setItem("musicTime", loveAudio.currentTime);
});