// Day/Night switch: follows the device until pressed, then keeps the choice for this visit.
(() => {
  const root = document.documentElement;
  const dark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const label = button => { button.textContent = dark() ? 'Show Day' : 'Show Night'; button.setAttribute('aria-pressed', String(dark())); };
  for (const button of document.querySelectorAll('.theme-toggle')) {
    label(button);
    button.addEventListener('click', () => { root.dataset.theme = dark() ? 'light' : 'dark'; document.querySelectorAll('.theme-toggle').forEach(label); });
  }
  // Reveal on scroll, only where motion is welcome.
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const seen = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); seen.unobserve(entry.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-reveal]').forEach(element => { element.classList.add('pre'); seen.observe(element); });
})();
