const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-08-12T00:00:00'); // ajuste para o seu aniversário

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}

setInterval(updateCountdown, 1000);
