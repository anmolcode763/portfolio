import { useEffect } from 'react';

export default function ParallaxManager() {
  useEffect(() => {
    let raf = null;
    const els = Array.from(document.querySelectorAll('[data-parallax-speed]'));
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        els.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.2;
          const offset = el.getBoundingClientRect().top + scrollY;
          const y = (scrollY - offset) * speed;
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
