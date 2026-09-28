const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

const updateHeader = () => header?.classList.toggle('scrolled', scrollY > 24);
updateHeader();
addEventListener('scroll', updateHeader, { passive: true });

function setMenuOpen(open) {
  menuButton?.setAttribute('aria-expanded', String(open));
  menuButton?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav?.classList.toggle('open', open);
}

menuButton?.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

nav?.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

const revealTargets = document.querySelectorAll('.section, .workspace-preview');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.08 });
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('revealed'));
}
