const SPLASH_TIME = 3000;
const FLOATING_LOGO_SRC = 'images/CataLeet.png';
const MAX_FLOATING = 8;

function finishSplash() {
  const splash = document.getElementById('splash');
  splash.classList.add('fade-out');
  setTimeout(() => {
    splash.classList.add('hidden');
    document.getElementById('site').classList.remove('hidden');
  }, 800);
}

function startFloatingLogos() {
  const container = document.getElementById('floating-logos');
  if (!container) return;

  const imgPre = new Image();
  imgPre.src = FLOATING_LOGO_SRC;
  imgPre.onload = () => {
    for (let i = 0; i < 5; i++) createFloatingLogo(container);
    setInterval(() => {
      if (container.children.length < MAX_FLOATING) {
        createFloatingLogo(container);
      }
    }, 4000);
  };
}

function createFloatingLogo(container) {
  const el = document.createElement('img');
  el.src = FLOATING_LOGO_SRC;
  el.className = 'floating-logo';

  const size = Math.floor(Math.random() * 100) + 70;
  el.style.width = `${size}px`;

  const vw = window.innerWidth, vh = window.innerHeight;
  el.style.left = `${Math.random() * (vw - size)}px`;
  el.style.top = `${Math.random() * (vh - size)}px`;

  el.style.opacity = (Math.random() * 0.05 + 0.02).toFixed(4);

  const duration = (Math.random() * 25) + 20;
  const delay = Math.random() * 5;
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay = `${delay}s`;

  container.appendChild(el);

  setTimeout(() => {
    if (el && el.parentNode) el.remove();
  }, 900000);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(finishSplash, SPLASH_TIME);
  startFloatingLogos();
});
