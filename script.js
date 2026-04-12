(function () {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const panels = Array.from(document.querySelectorAll('.panel'));
  const goButtons = Array.from(document.querySelectorAll('[data-go]'));
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setActiveLink(id) {
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
    });

    panels.forEach(panel => {
      panel.classList.toggle('is-current', panel.id === id);
    });
  }

  function goToTarget(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      event.preventDefault();
      goToTarget(href);
    });
  });

  goButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-go');
      if (!target) return;
      goToTarget(target);
    });
  });

  const panelObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActiveLink(visible.target.id);
      }
    },
    {
      threshold: [0.3, 0.45, 0.6],
      rootMargin: '-18% 0px -30% 0px'
    }
  );

  panels.forEach(panel => panelObserver.observe(panel));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  reveals.forEach(item => revealObserver.observe(item));

  const initialHash = window.location.hash;
  if (initialHash) {
    window.requestAnimationFrame(() => {
      goToTarget(initialHash);
    });
  } else {
    setActiveLink('begin');
  }
})();
