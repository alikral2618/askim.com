// Gün sayacı
const startDate = new Date("2025-05-18");
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("day-counter").textContent = diffDays >= 0 ? diffDays : 0;

// Arka plandaki yukarı süzülen kalpler
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';

  const size = Math.random() * 20 + 20;
  heart.style.fontSize = size + 'px';

  heart.style.animationDuration = (Math.random() * 7 + 5) + 's';

  heart.style.animationDelay = (Math.random() * 10) + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, (parseFloat(heart.style.animationDuration) + parseFloat(heart.style.animationDelay)) * 1000);
}

setInterval(createHeart, 300);
for(let i = 0; i < 20; i++) {
  setTimeout(createHeart, i * 300);
}

// "Hacer ❤️ Alimert" yanından geçen kalpler
const heartsNextToText = document.querySelector('.hearts-next-to-text');

function createHeartNextToText() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  const size = Math.random() * 15 + 15; // 15px - 30px
  heart.style.fontSize = size + 'px';

  heart.style.top = Math.random() * 40 + 'px'; // 0 - 40 px arası yukarı aşağı

  const duration = Math.random() * 4 + 3; // 3s - 7s
  heart.style.animationDuration = duration + 's';

  heart.style.left = '100%';

  heartsNextToText.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeartNextToText, 500);
