import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 23;

  return (
    <footer className="relative bg-[#141414] text-white pt-20 pb-10 overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-8 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231E1E1E\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Top Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-crimson via-gold to-crimson origin-center"
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[120%]"
          >
            <div className="flex items-center mb-4">
              <svg viewBox="0 0 100 100" className="h-[50px] w-auto mr-3">
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="transparent" stroke="#D4A843" strokeWidth="4" />
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="url(#footerLogoGrad)" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#C8102E" />
                    <stop offset="100%" stopColor="#E87121" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col justify-center">
                <span className="font-playfair text-xl font-bold text-white leading-none">MR SHAWARMA</span>
              </div>
            </div>
            <p className="font-poppins text-[15px] text-white/70 leading-[1.6] mb-5">
              Authentic Turkish Cuisine in the Heart of Juba
            </p>
            <p className="font-poppins text-[14px] text-white/50 leading-[1.7] mb-6 pr-4">
              From our perfectly seasoned shawarma to our freshly pressed juices, every visit to Mr Shawarma is a journey of flavor. Come taste the difference.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-[#141414] hover:scale-110 transition-all duration-250">
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-poppins text-[14px] font-bold uppercase text-gold tracking-[2px] mb-2">QUICK LINKS</h3>
            <div className="w-[30px] h-[2px] bg-gold mb-5" />
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Menu', path: '/menu' },
                { name: 'About Us', path: '/about' },
                { name: 'Customer Reviews', path: '/reviews' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="font-poppins text-[15px] text-white/60 hover:text-gold transition-colors duration-200 flex items-center group">
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-2 transition-all duration-200">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-poppins text-[14px] font-bold uppercase text-gold tracking-[2px] mb-2">CONTACT US</h3>
            <div className="w-[30px] h-[2px] bg-gold mb-5" />
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="w-[18px] h-[18px] text-gold mr-3 mt-1 group-hover:-translate-y-1 transition-transform" />
                <span className="font-poppins text-[15px] text-white/60">Addis Ababa Street, Juba, South Sudan</span>
              </li>
              <li className="flex items-start group">
                <Phone className="w-[18px] h-[18px] text-gold mr-3 mt-1 group-hover:-translate-y-1 transition-transform" />
                <a href="tel:+211911121135" className="font-poppins text-[15px] text-white/60 hover:text-gold transition-colors">+211 911 121 135</a>
              </li>
              <li className="flex items-start group">
                <Mail className="w-[18px] h-[18px] text-gold mr-3 mt-1 group-hover:-translate-y-1 transition-transform" />
                <a href="mailto:info@mrshawarma.com" className="font-poppins text-[15px] text-white/60 hover:text-gold transition-colors">info@mrshawarma.com</a>
              </li>
              <li className="flex items-start group">
                <Clock className="w-[18px] h-[18px] text-gold mr-3 mt-1 group-hover:-translate-y-1 transition-transform" />
                <span className="font-poppins text-[15px] text-white/60">Daily: 10:00 AM — 11:00 PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-poppins text-[14px] font-bold uppercase text-gold tracking-[2px] mb-2">OPENING HOURS</h3>
            <div className="w-[30px] h-[2px] bg-gold mb-5" />
            <div className="space-y-3 font-poppins text-[14px]">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/60">Monday – Friday</span>
                <span className="text-white/90">10:00 AM — 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/60">Saturday</span>
                <span className="text-white/90">10:00 AM — 12:00 AM</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-white/60">Sunday</span>
                <span className="text-white/90">12:00 PM — 10:00 PM</span>
              </div>
            </div>
            
            <div className="mt-4 flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-[#4CAF50] animate-pulse' : 'bg-crimson'}`} />
              <span className={`font-poppins text-[14px] ${isOpen ? 'text-[#4CAF50]' : 'text-crimson'}`}>
                {isOpen ? 'Open Now' : 'Currently Closed'}
              </span>
            </div>
            <p className="mt-4 text-[12px] italic text-white/40">Hours may vary on holidays. Please call to confirm.</p>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-poppins text-[13px] text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} Mr Shawarma Turkish Restaurant. All Rights Reserved.
          </p>
          <p className="font-poppins text-[13px] text-white/40 text-center md:text-right">
            Crafted with <span className="text-crimson">❤️</span> in Juba
          </p>
        </div>
      </div>
    </footer>
  );
}
