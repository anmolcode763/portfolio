import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Don't enable on touch devices or very small screens
    if (typeof window === 'undefined') return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 640) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;

    const onMouseMove = (e) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const animate = () => {
      ring.current.x += (pointer.current.x - ring.current.x) * 0.18;
      ring.current.y += (pointer.current.y - ring.current.y) * 0.18;
      if (ringEl) ringEl.style.transform = `translate3d(${ring.current.x - 18}px, ${ring.current.y - 18}px, 0)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    const onOver = (e) => {
      const target = e.target;
      if (target.closest && (target.closest('a, button, .interactive') )) {
        document.body.classList.add('cursor-hover');
      }
    };
    const onOut = (e) => {
      const related = e.relatedTarget;
      if (!related || !(related.closest && related.closest('a, button, .interactive'))) {
        document.body.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onOver, true);
    document.addEventListener('mouseout', onOut, true);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onOver, true);
      document.removeEventListener('mouseout', onOut, true);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
