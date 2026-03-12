import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-[998] md:bottom-6 md:right-6"
        >
          <a
            href="https://wa.me/211911121135?text=Hello%20Mr%20Shawarma!%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-[52px] h-[52px] md:w-[60px] md:h-[60px] bg-[#25D366] rounded-full border-[3px] border-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full animate-[whatsapp-pulse_3s_infinite]" />
            
            <MessageCircle className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] text-white relative z-10" />

            {/* Tooltip */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-full mr-4 hidden md:flex items-center"
                >
                  <div className="bg-[#1A1A1A] text-white font-poppins text-sm px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
                    Chat with us!
                  </div>
                  {/* Arrow */}
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#1A1A1A] -ml-[1px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
