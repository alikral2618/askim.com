// Gün sayacı
const startDate = new Date("2025-05-18");
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("day-counter").textContent = diffDays >= 0 ? diffDays : 0;

// Kalpli animasyonlar oluşturma
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  // Kalbin rastgele başlangıç pozisyonu (x ekseni)
  heart.style.left = Math.random() * 100 + 'vw';

  // Kalbin rastgele boyutu
  const size = Math.random() * 20 + 20; // 20px - 40px arası
  heart.style.fontSize = size + 'px';

  // Animasyon süresi rastgele (5s - 12s arası)
  heart.style.animationDuration = (Math.random() * 7 + 5) + 's';

  // Animasyon gecikmesi rastgele (0s - 10s arası)
  heart.style.animationDelay = (Math.random() * 10) + 's';

  heartsContainer.appendChild(heart);

  // Animasyon bittikten sonra kalbi DOM'dan kaldır
  setTimeout(() => {
    heart.remove();
  }, (parseFloat(heart.style.animationDuration) + parseFloat(heart.style.animationDelay)) * 1000);
}

// Sürekli kalpler oluştur
setInterval(createHeart, 300);

// Başlangıçta birkaç kalp oluştur (sayfa dolunca hemen animasyon başlasın diye)
for(let i = 0; i < 20; i++) {
  setTimeout(createHeart, i * 300);
}
