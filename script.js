(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const header = document.getElementById('site-header');
  if (header) {
    const sentinel = document.createElement('div');
    sentinel.style.height = '1px';
    document.body.prepend(sentinel);
    const obs = new IntersectionObserver(function (entries) {
      header.style.boxShadow = entries[0].isIntersecting ? 'none' : '0 2px 12px rgba(0,0,0,0.6)';
    });
    obs.observe(sentinel);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });
}());