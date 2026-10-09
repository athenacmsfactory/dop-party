export function initHeader() {
  const header = document.querySelector('.site-header');
  const burger = document.querySelector('.site-header__burger');
  const mobileNav = document.querySelector('.site-header__mobile-nav');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (burger && mobileNav) {
    const setOpen = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      mobileNav.classList.toggle('is-open', open);
      mobileNav.setAttribute('aria-hidden', String(!open));
    };

    burger.addEventListener('click', () => {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }
}
