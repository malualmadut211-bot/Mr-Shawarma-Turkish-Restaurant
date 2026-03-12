import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const minTime = 3500;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minTime - elapsedTime);
      setTimeout(() => setIsLoading(false), remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(skipTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center">
            {/* Logo Icon */}
            <motion.div
              className="relative w-20 h-20 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.path
                  d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
                  fill="transparent"
                  stroke="#D4A843"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
                  fill="url(#grad1)"
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#C8102E" />
                    <stop offset="100%" stopColor="#E87121" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Text */}
            <motion.div
              className="font-playfair text-gold text-2xl tracking-[4px] mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              MR SHAWARMA
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="font-poppins text-white text-sm tracking-[6px] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.4 }}
            >
              Turkish Restaurant
            </motion.div>

            {/* Line */}
            <motion.div
              className="h-[1px] bg-gold mt-4"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 3.2, duration: 0.3 }}
            />

            {/* Progress Bar */}
            <div className="absolute bottom-20 w-48 h-[2px] bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gold"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.5, ease: "linear" }}
              />
            </div>

            {/* Skip */}
            <AnimatePresence>
              {showSkip && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-8 right-8 text-white text-xs uppercase tracking-wider hover:text-gold transition-colors"
                  onClick={() => setIsLoading(false)}
                >
                  Skip
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
