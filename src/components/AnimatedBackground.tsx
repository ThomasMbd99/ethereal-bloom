import { useEffect, useRef, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { collections, getProduct, type Collection } from '@/data/products';

// Per-collection particle/atmosphere configs
const collectionThemes: Record<Collection, {
  gradient: string;
  particleColors: string[];
  particleCount: number;
  bokehCount: number;
  bokehColors: string[];
  speed: number;
  style: 'warm' | 'tropical' | 'smoke' | 'petals';
}> = {
  sacrae: {
    gradient: 'linear-gradient(180deg, #1A1610 0%, #0D0B08 100%)',
    particleColors: ['201,168,112', '196,149,106', '245,240,225'],
    particleCount: 40,
    bokehCount: 8,
    bokehColors: ['201,168,112', '196,149,106', '245,240,225'],
    speed: 0.3,
    style: 'warm',
  },
  vitaea: {
    gradient: 'linear-gradient(180deg, #0A0F08 0%, #080A06 100%)',
    particleColors: ['168,212,0', '255,179,71', '255,111,97', '76,175,80'],
    particleCount: 55,
    bokehCount: 12,
    bokehColors: ['168,212,0', '255,179,71', '255,111,97'],
    speed: 0.7,
    style: 'tropical',
  },
  umbrae: {
    gradient: 'linear-gradient(180deg, #080404 0%, #2A0A0A 100%)',
    particleColors: ['107,0,0', '139,105,20', '74,14,14'],
    particleCount: 30,
    bokehCount: 6,
    bokehColors: ['107,0,0', '74,14,14', '139,105,20'],
    speed: 0.15,
    style: 'smoke',
  },
  florae: {
    gradient: 'linear-gradient(180deg, #0F0A10 0%, #0A070B 100%)',
    particleColors: ['244,194,194', '212,168,212', '178,223,219'],
    particleCount: 35,
    bokehCount: 10,
    bokehColors: ['244,194,194', '212,168,212', '178,223,219'],
    speed: 0.2,
    style: 'petals',
  },
};

type ThemeStyle = 'warm' | 'tropical' | 'smoke' | 'petals';

const defaultTheme: {
  gradient: string; particleColors: string[]; particleCount: number;
  bokehCount: number; bokehColors: string[]; speed: number; style: ThemeStyle;
} = {
  gradient: '#0A0A0A',
  particleColors: ['201,168,112', '180,140,80'],
  particleCount: 20,
  bokehCount: 5,
  bokehColors: ['201,168,112'],
  speed: 0.25,
  style: 'warm' as const,
};

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  color: string;
  life: number; maxLife: number;
  angle: number; spin: number;
  type: 'dot' | 'petal' | 'smoke';
}

interface Bokeh {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; opacity: number;
  color: string;
  pulsePhase: number; pulseSpeed: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const bokehRef = useRef<Bokeh[]>([]);
  const themeRef = useRef(defaultTheme);
  const transRef = useRef({ from: defaultTheme, to: defaultTheme, progress: 1 });
  const { pathname } = useLocation();

  const collectionId = useMemo<Collection | null>(() => {
    const colMatch = pathname.match(/^\/collection\/(\w+)/);
    if (colMatch) {
      const id = colMatch[1] as Collection;
      if (collections.find(c => c.id === id)) return id;
    }
    const prodMatch = pathname.match(/^\/produit\/(\w+)/);
    if (prodMatch) {
      const product = getProduct(prodMatch[1]);
      if (product) return product.collection;
    }
    return null;
  }, [pathname]);

  // Apply background gradient to body
  useEffect(() => {
    const body = document.body;
    body.style.transition = 'background 0.8s ease-in-out';
    const theme = collectionId ? collectionThemes[collectionId] : defaultTheme;
    body.style.background = theme.gradient;
    return () => { body.style.background = '#0A0A0A'; body.style.transition = ''; };
  }, [collectionId]);

  // Transition theme when collection changes
  useEffect(() => {
    const newTheme = collectionId ? collectionThemes[collectionId] : defaultTheme;
    transRef.current = { from: themeRef.current, to: newTheme, progress: 0 };
    themeRef.current = newTheme;
  }, [collectionId]);

  const createParticle = useCallback((W: number, H: number, theme: typeof defaultTheme, init = false): Particle => {
    const color = theme.particleColors[Math.floor(Math.random() * theme.particleColors.length)];
    const type: Particle['type'] = theme.style === 'petals' ? 'petal' : theme.style === 'smoke' ? 'smoke' : 'dot';
    return {
      x: Math.random() * W,
      y: init ? Math.random() * H : H + 20,
      vx: (Math.random() - 0.5) * theme.speed,
      vy: type === 'smoke' ? -(Math.random() * 0.3 + 0.1) * theme.speed : -(Math.random() * 0.5 + 0.2) * theme.speed,
      size: type === 'petal' ? Math.random() * 6 + 3 : type === 'smoke' ? Math.random() * 30 + 15 : Math.random() * 2.5 + 0.5,
      opacity: type === 'smoke' ? Math.random() * 0.04 + 0.01 : Math.random() * 0.5 + 0.2,
      color,
      life: init ? Math.random() * 300 : 0,
      maxLife: 300 + Math.random() * 400,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02,
      type,
    };
  }, []);

  const createBokeh = useCallback((W: number, H: number, theme: typeof defaultTheme): Bokeh => {
    const color = theme.bokehColors[Math.floor(Math.random() * theme.bokehColors.length)];
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.1,
      radius: Math.random() * 140 + 40,
      opacity: Math.random() * 0.06 + 0.015,
      color,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.008 + 0.003,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles & bokeh
    const theme = themeRef.current;
    particlesRef.current = Array.from({ length: theme.particleCount }, () => createParticle(W, H, theme, true));
    bokehRef.current = Array.from({ length: theme.bokehCount }, () => createBokeh(W, H, theme));

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      time++;

      // Advance transition
      const trans = transRef.current;
      if (trans.progress < 1) {
        trans.progress = Math.min(1, trans.progress + 0.008);
      }

      const currentTheme = themeRef.current;

      // Draw bokeh (large blurred orbs)
      const bokehs = bokehRef.current;
      while (bokehs.length < currentTheme.bokehCount) bokehs.push(createBokeh(W, H, currentTheme));
      while (bokehs.length > currentTheme.bokehCount) bokehs.pop();

      for (const b of bokehs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.radius) b.x = W + b.radius;
        if (b.x > W + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = H + b.radius;
        if (b.y > H + b.radius) b.y = -b.radius;

        const pulse = Math.sin(b.pulsePhase + time * b.pulseSpeed) * 0.3 + 0.7;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        g.addColorStop(0, `rgba(${b.color},${b.opacity * pulse})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw particles
      const parts = particlesRef.current;
      while (parts.length < currentTheme.particleCount) parts.push(createParticle(W, H, currentTheme, true));
      while (parts.length > currentTheme.particleCount) parts.pop();

      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;

        // Wind effect
        p.vx += Math.sin(time * 0.002 + p.y * 0.005) * 0.003;

        const lifeRatio = p.life / p.maxLife;
        const fadeIn = Math.min(lifeRatio * 5, 1);
        const fadeOut = Math.max(1 - (lifeRatio - 0.7) / 0.3, 0);
        const alpha = p.opacity * fadeIn * (lifeRatio > 0.7 ? fadeOut : 1);

        if (p.life > p.maxLife || p.y < -50 || p.x < -50 || p.x > W + 50) {
          parts[i] = createParticle(W, H, currentTheme);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.type === 'petal') {
          // Petal shape
          ctx.fillStyle = `rgba(${p.color},${alpha * 0.6})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'smoke') {
          // Smoke puff
          const sg = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
          sg.addColorStop(0, `rgba(${p.color},${alpha})`);
          sg.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = sg;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Dot / sparkle
          ctx.fillStyle = `rgba(${p.color},${alpha})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Tiny glow
          if (p.size > 1.5) {
            const dg = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 4);
            dg.addColorStop(0, `rgba(${p.color},${alpha * 0.3})`);
            dg.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = dg;
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      }

      // Film grain overlay (very subtle)
      if (time % 3 === 0) {
        const imgData = ctx.createImageData(W, H);
        const d = imgData.data;
        for (let j = 0; j < d.length; j += 16) {
          const v = Math.random() * 12;
          d[j] = d[j + 1] = d[j + 2] = v;
          d[j + 3] = 8;
        }
        ctx.putImageData(imgData, 0, 0);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [createParticle, createBokeh]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
};

export default AnimatedBackground;
