import React, { useEffect, useRef } from 'react';

export default function Confetti() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = 400;
    let height = canvas.height = 180;
    const colors = ['#F7CA18', '#A084E8', '#3A3A8C', '#F8F8FF'];
    const confetti = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.3,
      r: Math.random() * 7 + 4,
      dx: (Math.random() - 0.5) * 2.5,
      dy: Math.random() * 2 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2
    }));
    function draw() {
      ctx.clearRect(0, 0, width, height);
      confetti.forEach(c => {
        c.x += c.dx;
        c.y += c.dy;
        c.angle += c.spin;
        if (c.y > height) c.y = -10;
        if (c.x < -10) c.x = width + 10;
        if (c.x > width + 10) c.x = -10;
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.angle);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.r/2, -c.r/2, c.r, c.r);
        ctx.restore();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }, []);
  return (
    <canvas ref={canvasRef} width={400} height={180} style={{ position: 'absolute', left: '50%', top: '-90px', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 10 }} />
  );
}
