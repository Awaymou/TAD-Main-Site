const carousel = document.querySelector('.client-carousel');
const toggle = document.querySelector('.carousel-toggle');
if (carousel && toggle) {
  toggle.addEventListener('click', () => {
    const paused = carousel.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume scrolling' : 'Pause scrolling';
  });
}
