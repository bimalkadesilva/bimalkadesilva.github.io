// Sticky nav background
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  })
);

// Reveal on scroll
const targets = document.querySelectorAll(
  '.section-head, .prose, .card, .impact-item, .journey li, .offer, .paper, .project, .contact-inner'
);
if ('IntersectionObserver' in window) {
  targets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => io.observe(el));
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
