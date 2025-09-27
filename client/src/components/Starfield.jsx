import React, { useRef, useEffect } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate stars with depth
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      twinkle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.01,
      z: Math.random() * 1.5 + 0.5, // depth
      color: [
        '#F7CA18', // gold
        '#A084E8', // purple
        '#F8F8FF', // white
        '#3A3A8C', // blue
      ][Math.floor(Math.random() * 4)]
    }));

    // Shooting stars
    let shootingStars = [];
    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + Math.random() * Math.PI / 8,
        alpha: 1,
        color: '#F8F8FF',
      });
    }
    setInterval(() => {
      if (shootingStars.length < 2 && Math.random() > 0.7) spawnShootingStar();
    }, 1200);

    // Parallax effect
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', e => {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
    });

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Nebula gradient
      const grad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/1.2);
      grad.addColorStop(0, 'rgba(49,34,91,0.7)');
      grad.addColorStop(0.5, 'rgba(160,132,232,0.2)');
      grad.addColorStop(1, 'rgba(35,35,91,0.9)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      // Stars with parallax
      stars.forEach(star => {
        star.twinkle += star.speed;
        const alpha = 0.7 + 0.3 * Math.sin(star.twinkle);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        // Parallax based on depth
        const px = star.x + mouseX * 40 * star.z;
        const py = star.y + mouseY * 30 * star.z;
        ctx.arc(px, py, star.r * star.z, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8 * star.z;
        ctx.fill();
        ctx.restore();
      });
      // Shooting stars
      shootingStars.forEach((s, i) => {
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
        ctx.shadowColor = '#F8F8FF';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.restore();
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.012;
        if (s.alpha <= 0 || s.x > width || s.y > height) shootingStars.splice(i, 1);
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
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />
  );
}
