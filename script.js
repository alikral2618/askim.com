const startDate = new Date("2023-02-14"); // İlk tanışma ya da sevgili olma tarihi
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("day-counter").textContent = diffDays;
