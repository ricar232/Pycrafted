import { useEffect, useRef } from 'react';

const rand = (min, max) => Math.random() * (max - min) + min;

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let rafId = null;

    const createParticles = () => {
      const count = Math.round(Math.min(280, Math.max(130, (width * height) / 5600)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rand(0.3, 0.9),
        baseAlpha: rand(0.35, 0.85),
        driftX: rand(-0.05, 0.05),
        driftY: rand(-0.11, -0.02),
        wanderPhase: rand(0, Math.PI * 2),
        wanderSpeed: rand(0.001, 0.0032),
        twinklePhase: rand(0, Math.PI * 2),
        twinkleSpeed: rand(0.008, 0.026),
        gold: Math.random() < 0.3,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const step = (time) => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.driftX + Math.sin(p.wanderPhase + time * p.wanderSpeed) * 0.045;
        p.y += p.driftY;
        p.wanderPhase += p.wanderSpeed;

        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        if (p.y < -4) p.y = height + 4;
        if (p.y > height + 4) p.y = -4;

        const twinkle = 0.62 + 0.38 * Math.sin(p.twinklePhase + time * p.twinkleSpeed);
        const alpha = p.baseAlpha * twinkle;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? `rgba(228,197,140,${alpha})` : `rgba(238,236,230,${alpha})`;
        ctx.shadowColor = p.gold ? 'rgba(220,174,74,.5)' : 'rgba(255,255,255,.35)';
        ctx.shadowBlur = p.r * 1.4;
        ctx.fill();
      }
      if (!reduceMotion) rafId = requestAnimationFrame(step);
    };

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        if (!reduceMotion && rafId === null) rafId = requestAnimationFrame(step);
      } else if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    resize();
    step(0);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}

export default Particles;
