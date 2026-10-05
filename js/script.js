const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  const current =
    document.documentElement.style.getPropertyValue('color-scheme');

  document.documentElement.style.colorScheme =
    current === 'dark' ? 'light' : 'dark';

  toggle.textContent =
    current === 'dark' ? '☼' : '☾';
});

const observer = new IntersectionObserver(
  entries =>
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }),
  { threshold: .14 }
);

document
  .querySelectorAll('.reveal, .slide-in')
  .forEach(el => observer.observe(el));
