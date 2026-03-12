import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[995] bg-[#1A1A1A]/95 backdrop-blur-[10px] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"
        >
          <p className="font-poppins text-[14px] text-white/80 text-center md:text-left leading-relaxed max-w-4xl">
            🍪 We use cookies to enhance your browsing experience and serve you the best content. By continuing, you agree to our use of cookies.
          </p>
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-5 py-2 rounded-full border border-white text-white font-poppins text-[12px] hover:bg-white/10 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2 rounded-full bg-gold text-[#1A1A1A] font-poppins text-[12px] font-bold hover:bg-gold/90 transition-colors"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
