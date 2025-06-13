// 18 Mayıs 2025 başlangıç tarihi
const startDate = new Date("2025-05-18");
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("day-counter").textContent = diffDays;
