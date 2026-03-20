import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('thaem-splash-seen');
    }
    return false;
  });

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem('thaem-splash-seen', '1');
      }, 3800);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: '#0A0A0A' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Flacon SVG */}
            <div className="relative flex flex-col items-center">
              <motion.svg
                viewBox="0 0 80 160"
                className="w-16 h-32 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Cap */}
                <motion.rect
                  x="28" y="4" width="24" height="16" rx="3"
                  fill="none" stroke="hsl(43, 50%, 54%)" strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                {/* Neck */}
                <motion.rect
                  x="32" y="20" width="16" height="20" rx="2"
                  fill="none" stroke="hsl(43, 50%, 54%)" strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
                {/* Body */}
                <motion.rect
                  x="16" y="40" width="48" height="100" rx="6"
                  fill="none" stroke="hsl(43, 50%, 54%)" strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 1.2 }}
                />
                {/* Liquid fill */}
                <motion.rect
                  x="18" y="80" width="44" height="58" rx="4"
                  fill="hsl(43, 50%, 54%)"
                  fillOpacity="0.15"
                  initial={{ height: 0, y: 138 }}
                  animate={{ height: 58, y: 80 }}
                  transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                />
                {/* Spray particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={40 + Math.cos((i / 8) * Math.PI * 2) * 8}
                    cy={10}
                    r="1.5"
                    fill="hsl(43, 50%, 54%)"
                    initial={{ opacity: 0, y: 0, x: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      y: [0, -20 - Math.random() * 20],
                      x: [0, (Math.random() - 0.5) * 40],
                    }}
                    transition={{
                      delay: 1.5 + i * 0.1,
                      duration: 1.2,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </motion.svg>

              {/* Brand name */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                <h1 className="font-display text-3xl sm:text-4xl tracking-[0.2em] text-foreground">
                  TH<motion.span
                    className="ae-highlight inline-block"
                    animate={{
                      textShadow: [
                        '0 0 20px hsl(43 60% 65% / 0.5)',
                        '0 0 40px hsl(43 60% 65% / 0.9)',
                        '0 0 20px hsl(43 60% 65% / 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >Æ</motion.span>M{' '}
                  <motion.span
                    className="ae-highlight inline-block"
                    animate={{
                      textShadow: [
                        '0 0 20px hsl(43 60% 65% / 0.5)',
                        '0 0 40px hsl(43 60% 65% / 0.9)',
                        '0 0 20px hsl(43 60% 65% / 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >Æ</motion.span>TERNUM
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                Le souffle de l'âme
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default SplashScreen;
