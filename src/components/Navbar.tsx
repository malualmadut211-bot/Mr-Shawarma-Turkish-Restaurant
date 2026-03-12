import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[1000] transition-all duration-300 ease-out ${
          scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-[20px] h-[65px]' : 'bg-transparent h-[80px]'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className={`transition-all duration-300 ${scrolled ? 'h-[38px]' : 'h-[45px]'} flex items-center`}>
              <svg viewBox="0 0 100 100" className="h-full w-auto mr-3 group-hover:drop-shadow-[0_0_8px_rgba(212,168,67,0.4)] transition-all duration-300">
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="transparent" stroke="#D4A843" strokeWidth="4" />
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="url(#logoGrad)" />
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#C8102E" />
                    <stop offset="100%" stopColor="#E87121" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col justify-center">
                <span className="font-playfair text-lg font-bold text-white leading-none">MR SHAWARMA</span>
                <span className="font-poppins text-[9px] uppercase tracking-[3px] text-gold mt-1 leading-none">TURKISH RESTAURANT</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-poppins text-sm font-medium uppercase tracking-[1.5px] transition-colors duration-200 group ${
                    isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1.5 h-[2px] bg-gold transition-all duration-200 origin-left ${
                      isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+211911121135" className="hidden xl:flex items-center text-white hover:text-gold group transition-colors">
              <Phone className="w-4 h-4 text-gold mr-2 group-hover:rotate-12 transition-transform" />
              <span className="font-poppins text-[13px]">+211 911 121 135</span>
            </a>
            <Link
              to="/menu"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-crimson to-orange text-white font-poppins text-xs font-bold uppercase tracking-[2px] px-7 py-2.5 border border-gold/30 shadow-[0_4px_15px_rgba(200,16,46,0.3)] hover:shadow-[0_6px_25px_rgba(200,16,46,0.5)] hover:scale-105 transition-all duration-200 group"
            >
              <span className="relative z-10">ORDER NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-[1001]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`bg-white h-[2px] w-6 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : 'mb-1.5'}`} />
            <span className={`bg-white h-[2px] w-6 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : 'mb-1.5'}`} />
            <span className={`bg-white h-[2px] w-6 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ clipPath: 'circle(0% at 95% 5%)', transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] bg-[#0D0D0D]/98 flex flex-col justify-center px-8"
          >
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            
            <div className="flex flex-col items-center space-y-10 relative z-10">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-playfair text-3xl flex items-center group transition-transform hover:translate-x-2 ${
                        isActive ? 'text-gold' : 'text-white hover:text-gold'
                      }`}
                    >
                      {isActive && <span className="w-2 h-2 rounded-full bg-gold mr-4" />}
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute bottom-12 left-0 right-0 flex flex-col items-center space-y-6 z-10"
            >
              <a href="tel:+211911121135" className="flex items-center text-gold font-poppins text-lg">
                <Phone className="w-5 h-5 mr-3" />
                +211 911 121 135
              </a>
              <div className="text-white/60 font-poppins text-sm">Addis Ababa Street, Juba</div>
              
              <Link
                to="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-[280px] text-center rounded-full bg-gradient-to-r from-crimson to-orange text-white font-poppins text-sm font-bold uppercase tracking-[2px] py-4 border border-gold/30 shadow-[0_4px_15px_rgba(200,16,46,0.3)]"
              >
                ORDER NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
