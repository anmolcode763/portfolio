import { useEffect } from 'react';

export default function IntersectionObserverManager() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
        else entry.target.classList.remove('in-view');
      });
    }, { threshold: 0.18 });

    const els = document.querySelectorAll('.section-fade');
    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
