import React, { useRef, useEffect } from 'react';

export default function ParticlesBg({ parallax }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate particles
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 18 + 12,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: [
        'rgba(160,132,232,0.12)', // purple
        'rgba(247,202,24,0.10)', // gold
        'rgba(58,58,140,0.13)', // blue
        'rgba(248,248,255,0.09)', // white
      ][Math.floor(Math.random() * 4)]
    }));

    let mouseX = 0, mouseY = 0;
    if (parallax) {
      window.addEventListener('mousemove', e => {
        mouseX = (e.clientX / width - 0.5) * 2;
        mouseY = (e.clientY / height - 0.5) * 2;
      });
    }
    function draw() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;
        ctx.save();
        ctx.beginPath();
        let px = p.x, py = p.y;
        if (parallax) {
          px += mouseX * 30 * (p.r / 30);
          py += mouseY * 20 * (p.r / 30);
        }
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 30;
        ctx.fill();
        ctx.restore();
      });
      requestAnimationFrame(draw);
    }
    draw();
    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />
  );
}
