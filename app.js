const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 24), { passive: true });

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const labels = {
  inbox: ['✉', 'Inbox Cleanup'],
  reminders: ['◷', 'Smart Reminders'],
  quotes: ['▤', 'Quote Builder'],
  birthdays: ['✦', 'Customer Care'],
  invoices: ['$', 'Invoice Helper'],
  custom: ['◇', 'Custom Task']
};

const selected = new Set(['inbox']);
const cards = [...document.querySelectorAll('.skill-card')];
const selectedSkills = document.querySelector('#selectedSkills');
const skillCount = document.querySelector('#skillCount');

function renderToolkit() {
  selectedSkills.innerHTML = [...selected].map((key) => {
    const [icon, label] = labels[key];
    return `<span><i>${icon}</i> ${label}</span>`;
  }).join('');
  skillCount.textContent = selected.size;
}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const key = card.dataset.skill;
    if (key === 'inbox') return;
    selected.has(key) ? selected.delete(key) : selected.add(key);
    card.classList.toggle('selected', selected.has(key));
    card.setAttribute('aria-pressed', String(selected.has(key)));
    const action = card.querySelector('b');
    if (action && !['invoices', 'custom'].includes(key)) action.textContent = selected.has(key) ? 'ADDED' : 'ADD TO TOOLKIT';
    renderToolkit();
  });
});

const observed = document.querySelectorAll('.section, .workspace-preview');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.08 });
  observed.forEach((element) => observer.observe(element));
} else {
  observed.forEach((element) => element.classList.add('revealed'));
}
