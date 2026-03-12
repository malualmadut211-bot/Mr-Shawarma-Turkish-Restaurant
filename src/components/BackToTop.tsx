import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-[76px] right-4 md:bottom-24 md:right-6 z-[997] w-10 h-10 md:w-11 md:h-11 bg-gold rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(212,168,67,0.3)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(212,168,67,0.5)] transition-all duration-300 group"
        >
          <ChevronUp className="w-[18px] h-[18px] text-white group-active:rotate-360 transition-transform duration-500" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
