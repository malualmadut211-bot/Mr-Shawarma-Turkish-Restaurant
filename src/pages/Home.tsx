import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, ArrowRight, Calendar, Star, MapPin, Phone, Clock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <main className="relative w-full overflow-hidden bg-offwhite">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920" 
            alt="Shawarma" 
            className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-[#0D0D0D]/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/90 z-20" />
          <div className="absolute inset-0 opacity-5 z-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          {/* Particles */}
          <div className="absolute inset-0 z-40 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-gold/30"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 100 
                }}
                animate={{ 
                  y: -100,
                  x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`
                }}
                transition={{ 
                  duration: 10 + Math.random() * 10, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-50 max-w-[800px] px-6 flex flex-col items-center">
          {/* Welcome Tag */}
          <div className="flex items-center space-x-3 mb-4">
            <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ delay: 0.5, duration: 0.6 }} className="h-[1px] bg-gold" />
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.4 }} className="font-poppins text-[12px] uppercase tracking-[4px] text-gold font-medium">
              WELCOME TO
            </motion.span>
            <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ delay: 0.5, duration: 0.6 }} className="h-[1px] bg-gold" />
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-[52px] lg:text-[80px] font-bold text-white tracking-[4px] lg:tracking-[6px] drop-shadow-[0_2px_40px_rgba(0,0,0,0.5)] mb-4 flex flex-wrap justify-center">
            {"MR SHAWARMA".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: "backOut" }}
                className={char === 'M' || char === 'S' ? 'text-gold' : ''}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="font-poppins text-[16px] lg:text-[20px] font-light text-white/85 tracking-[2px] mb-3"
          >
            Authentic Turkish Cuisine in Juba, South Sudan
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
            className="font-vibes text-[22px] lg:text-[28px] text-gold mb-9"
          >
            Where Every Bite Tells a Story
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <Link to="/menu" className="w-full sm:w-auto flex items-center justify-center bg-gradient-to-br from-crimson to-orange text-white font-poppins text-[14px] font-bold uppercase tracking-[2px] px-9 py-4 rounded-full border border-gold/30 shadow-[0_4px_20px_rgba(200,16,46,0.35)] hover:shadow-[0_8px_35px_rgba(200,16,46,0.5)] hover:scale-105 transition-all duration-300 group">
              Explore Our Menu
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center bg-transparent text-white font-poppins text-[14px] font-bold uppercase tracking-[2px] px-9 py-4 rounded-full border-2 border-white/60 hover:bg-gold hover:text-[#1A1A1A] hover:border-gold hover:shadow-[0_4px_20px_rgba(212,168,67,0.3)] hover:scale-105 transition-all duration-300 group">
              <Calendar className="w-4 h-4 mr-2" />
              Reserve a Table
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 flex flex-col items-center z-50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: MARQUEE */}
      <section className="w-full h-[48px] lg:h-[56px] bg-black border-y border-gold/20 flex items-center overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center font-poppins text-[12px] lg:text-[14px] uppercase tracking-[3px] text-gold font-medium">
              <span className="mx-5 text-crimson text-[16px]">★</span> Shawarma
              <span className="mx-5 text-crimson text-[16px]">★</span> Kebabs
              <span className="mx-5 text-crimson text-[16px]">★</span> Fresh Juices
              <span className="mx-5 text-crimson text-[16px]">★</span> Turkish Pizza
              <span className="mx-5 text-crimson text-[16px]">★</span> Grilled Meats
              <span className="mx-5 text-crimson text-[16px]">★</span> Pastry
              <span className="mx-5 text-crimson text-[16px]">★</span> Desserts
              <span className="mx-5 text-crimson text-[16px]">★</span> Dine-In
              <span className="mx-5 text-crimson text-[16px]">★</span> Takeout
              <span className="mx-5 text-crimson text-[16px]">★</span> Rooftop Dining
              <span className="mx-5 text-crimson text-[16px]">★</span> Complimentary Soup
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ABOUT US */}
      <section className="relative py-[60px] lg:py-[120px] px-6 max-w-[1280px] mx-auto overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231A1A1A\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 relative z-10">
          {/* Left: Text */}
          <div className="lg:w-[55%] flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center mb-5">
              <div className="w-5 h-[2px] bg-gold mr-3" />
              <span className="font-poppins text-[11px] uppercase tracking-[3px] font-semibold text-gold">ABOUT US</span>
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="font-playfair text-[28px] md:text-[32px] lg:text-[44px] font-bold text-[#1A1A1A] leading-[1.2] mb-6">
              A Taste of <span className="text-crimson">Turkey</span> in Every Dish
            </motion.h2>
            
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="font-sans text-[16px] text-[#555] leading-[1.8] mb-8">
              Nestled in the vibrant heart of Juba on Addis Ababa Street, Mr Shawarma Turkish Restaurant brings the rich, bold flavors of authentic Turkish cuisine to South Sudan. From our perfectly seasoned shawarma carved fresh off the spit to our delicious hand-pressed fruit juices, every dish is crafted with passion, premium ingredients, and time-honored Turkish recipes.
              <br/><br/>
              Whether you're grabbing a quick bite on the go, enjoying a relaxed lunch with friends, or savoring a rooftop dinner under the stars — Mr Shawarma delivers an unforgettable culinary experience.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {[
                { icon: Clock, title: "Fast & Friendly Service", desc: "Your order, ready in minutes" },
                { icon: MapPin, title: "Dine-In, Takeout & Outdoor", desc: "Multiple ways to enjoy" },
                { icon: Star, title: "Perfect for Everyone", desc: "Families, groups & solo diners welcome" },
                { icon: Info, title: "Fully Accessible", desc: "Wheelchair accessible throughout" }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-start">
                  <item.icon className="w-6 h-6 text-gold mr-3 shrink-0" />
                  <div>
                    <h4 className="font-poppins text-[14px] font-bold text-[#1A1A1A]">{item.title}</h4>
                    <p className="font-sans text-[13px] text-[#777]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
              <Link to="/about" className="inline-flex items-center justify-center bg-transparent text-crimson font-poppins text-[13px] font-bold uppercase tracking-[2px] px-8 py-3.5 rounded-full border-2 border-crimson hover:bg-crimson hover:text-white hover:shadow-[0_4px_15px_rgba(200,16,46,0.3)] transition-all duration-300 group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-[45%] relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[16px] overflow-hidden group">
              {/* Floating Frame Effect */}
              <div className="absolute -top-4 -right-4 w-full h-full border-t-4 border-r-4 border-gold rounded-[16px] z-0" />
              
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" alt="Restaurant Interior" className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-110 contrast-105" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ scale: 0 }} 
                whileInView={{ scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] z-20 flex items-center justify-center p-2"
              >
                <div className="w-full h-full border border-[#1A1A1A]/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                  <span className="font-poppins text-[10px] uppercase font-bold text-[#1A1A1A] text-center leading-tight">100%<br/>Authentic</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: FEATURED MENU */}
      <section className="relative py-[60px] lg:py-[120px] bg-[#0D0D0D] overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute inset-0 opacity-4 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231A1A1A\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center mb-4">
              <div className="w-4 h-[1px] bg-gold mr-3" />
              <span className="font-poppins text-[11px] uppercase tracking-[4px] font-semibold text-gold">OUR MENU</span>
              <div className="w-4 h-[1px] bg-gold ml-3" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-[32px] lg:text-[44px] font-bold text-white mb-3">
              Signature Dishes
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[17px] italic text-white/60 mb-6">
              Handcrafted with love, served with pride
            </motion.p>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="w-[120px] h-[20px] flex items-center justify-center">
              <div className="w-full h-[1px] bg-gold/50 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-gold bg-[#0D0D0D]" />
              </div>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 hide-scrollbar snap-x snap-mandatory">
            {[
              { img: "https://images.unsplash.com/photo-1648823153736-9a2026ae3d16?auto=format&fit=crop&q=80&w=600", cat: "SANDWICH", name: "Chicken Shawarma", desc: "Tender marinated chicken, slow-roasted on the spit, wrapped in warm flatbread.", badge: "POPULAR", badgeColor: "bg-crimson" },
              { img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=600", cat: "PLATTER", name: "Shawarma Arabic Plate", desc: "Our signature shawarma served as a full plate with hummus, tabbouleh, and pita.", badge: "RECOMMENDED", badgeColor: "bg-[#4CAF50]" },
              { img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600", cat: "GRILL", name: "Mixed Grill", desc: "A generous platter of succulent kebabs, kofta, and grilled meats served with rice.", badge: "CHEF'S PICK", badgeColor: "bg-gold text-[#1A1A1A]" },
              { img: "https://images.unsplash.com/photo-1622597467836-f38240662c8b?auto=format&fit=crop&q=80&w=600", cat: "BEVERAGE", name: "Fresh Mix Juice", desc: "A vibrant blend of seasonal tropical fruits, freshly pressed to order.", badge: "", badgeColor: "" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-[#1A1A1A] rounded-[16px] overflow-hidden border border-gold/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)] group hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.5)] hover:border-gold/30 transition-all duration-400 cursor-pointer flex flex-col"
              >
                <div className="relative h-[180px] lg:h-[220px] overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-112 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/60 transition-colors duration-300 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white text-crimson flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                  {item.badge && (
                    <div className={`absolute top-4 left-4 ${item.badgeColor} ${item.badgeColor.includes('text') ? '' : 'text-white'} font-poppins text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full`}>
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-poppins text-[10px] uppercase tracking-[2px] text-gold font-semibold mb-2">{item.cat}</span>
                  <h3 className="font-poppins text-[20px] font-semibold text-white mb-2.5">{item.name}</h3>
                  <p className="font-sans text-[14px] text-white/55 leading-[1.6] line-clamp-2 mb-4 flex-1">{item.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-poppins text-[18px] font-bold text-gold">View Details</span>
                    <button className="w-9 h-9 rounded-full bg-crimson flex items-center justify-center text-white group-hover:bg-white group-hover:text-crimson transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mt-12">
            <Link to="/menu" className="inline-flex items-center justify-center bg-transparent text-gold font-poppins text-[13px] font-bold uppercase tracking-[2px] px-10 py-4 rounded-full border-2 border-gold hover:bg-gold hover:text-[#1A1A1A] hover:shadow-[0_4px_20px_rgba(212,168,67,0.3)] transition-all duration-300 group">
              View Full Menu
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="relative py-[100px] bg-white">
        {/* Transition Wave */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0D0D0D] to-transparent opacity-10" />
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center mb-4">
              <div className="w-4 h-[1px] bg-gold mr-3" />
              <span className="font-poppins text-[11px] uppercase tracking-[4px] font-semibold text-gold">WHY US</span>
              <div className="w-4 h-[1px] bg-gold ml-3" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-[32px] lg:text-[40px] font-bold text-[#1A1A1A] mb-3">
              Why Choose <span className="text-crimson">Mr Shawarma</span>?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[16px] text-[#777] mb-6">
              More than just a restaurant — an experience
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Authentic Turkish Recipes", desc: "Our recipes are rooted in centuries-old Turkish culinary traditions, bringing you genuine flavors." },
              { icon: Clock, title: "Lightning-Fast Service", desc: "Place your order and enjoy your meal in minutes — no long waits, just great food delivered with a smile." },
              { icon: Info, title: "Fresh Ingredients Daily", desc: "Every ingredient is sourced fresh daily. From our crisp vegetables to our juicy meats." },
              { icon: MapPin, title: "Rooftop Dining", desc: "Enjoy your meal with a stunning view of Hai Cinema from our beautiful rooftop terrace." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                className="bg-white border border-black/5 rounded-[16px] p-10 px-7 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-400 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-[72px] h-[72px] mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-crimson transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-gold group-hover:text-white group-hover:rotate-360 transition-all duration-600" />
                </div>
                <h3 className="font-poppins text-[18px] font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="font-sans text-[14px] text-[#777] leading-[1.7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="relative py-[120px] bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920" alt="Restaurant" className="w-full h-full object-cover blur-[4px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/85 to-[#1A1A1A]/90" />
        </div>

        <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center mb-4">
            <div className="w-4 h-[1px] bg-gold mr-3" />
            <span className="font-poppins text-[11px] uppercase tracking-[4px] font-semibold text-gold">TESTIMONIALS</span>
            <div className="w-4 h-[1px] bg-gold ml-3" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-playfair text-[32px] lg:text-[44px] font-bold text-white mb-6">
            What Our Guests Say
          </motion.h2>
          
          <div className="flex justify-center space-x-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15 }}>
                <Star className="w-7 h-7 text-gold fill-gold" />
              </motion.div>
            ))}
          </div>
          <p className="font-poppins text-[14px] text-white/70 mb-12">4.8 out of 5 · Based on Google Reviews</p>

          {/* Single Testimonial (Static for now, could be a carousel) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="relative">
            <span className="absolute -top-10 -left-4 font-playfair text-[120px] text-gold/30 leading-none">"</span>
            <p className="font-sans text-[16px] lg:text-[20px] text-white italic leading-[1.8] mb-8 relative z-10">
              "The best shawarma I've had in Juba! The meat is perfectly seasoned, and the garlic sauce is incredible. Fast service and a great atmosphere on the rooftop."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center text-white font-bold text-xl mb-3">SD</div>
              <h4 className="font-poppins text-[16px] font-bold text-white">Stephen Dinsmore</h4>
              <p className="font-poppins text-[12px] text-white/50 mb-3">Local Guide · 34 reviews</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 rounded-full bg-black/30 border border-white/20 text-white text-[10px]">Dine-in</span>
                <span className="px-3 py-1 rounded-full bg-black/30 border border-white/20 text-white text-[10px]">Dinner</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="mt-12">
            <Link to="/reviews" className="inline-flex items-center justify-center bg-transparent text-white font-poppins text-[13px] font-bold uppercase tracking-[2px] px-8 py-3.5 rounded-full border border-white hover:bg-gold hover:text-[#1A1A1A] hover:border-gold transition-all duration-300">
              Read All Reviews <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: GALLERY */}
      <section className="py-[80px] lg:py-[100px] bg-offwhite">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center mb-4">
              <div className="w-4 h-[1px] bg-gold mr-3" />
              <span className="font-poppins text-[11px] uppercase tracking-[4px] font-semibold text-gold">GALLERY</span>
              <div className="w-4 h-[1px] bg-gold ml-3" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-playfair text-[32px] lg:text-[40px] font-bold text-[#1A1A1A] mb-3">
              Feast Your Eyes
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-sans text-[16px] text-[#777]">
              A glimpse into the Mr Shawarma experience
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1622597467836-f38240662c8b?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1484723091791-009e32b45495?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-[12px] overflow-hidden group cursor-pointer aspect-square ${(i === 0 || i === 5) ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 text-3xl font-light">+</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: LOCATION */}
      <section className="py-[100px] bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center mb-4">
              <div className="w-4 h-[1px] bg-gold mr-3" />
              <span className="font-poppins text-[11px] uppercase tracking-[4px] font-semibold text-gold">FIND US</span>
              <div className="w-4 h-[1px] bg-gold ml-3" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-playfair text-[32px] lg:text-[40px] font-bold text-[#1A1A1A] mb-3">
              Visit Mr Shawarma
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-sans text-[16px] text-[#777]">
              We're conveniently located in the heart of Juba
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Map */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2 h-[300px] lg:h-[450px] rounded-[16px] overflow-hidden border-2 border-gold/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15939.882195973804!2d31.5722!3d4.8517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDYuMSJOIDMxwrAzNCcyMC4wIkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </motion.div>

            {/* Info */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              {[
                { icon: MapPin, label: "ADDRESS", text: "Addis Ababa Street, Juba, South Sudan", sub: "Plus Code: RJV7+W2R" },
                { icon: Phone, label: "PHONE", text: "+211 911 121 135", sub: "", link: "tel:+211911121135" },
                { icon: Clock, label: "HOURS", text: "Mon-Fri: 10AM-11PM | Sat: 10AM-12AM | Sun: 12PM-10PM", sub: "" }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="mb-6 flex items-start">
                  <item.icon className="w-5 h-5 text-gold mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-[11px] uppercase tracking-[2px] text-gold font-semibold mb-1">{item.label}</h4>
                    {item.link ? (
                      <a href={item.link} className="font-sans text-[16px] text-[#333] hover:text-crimson transition-colors">{item.text}</a>
                    ) : (
                      <p className="font-sans text-[16px] text-[#333]">{item.text}</p>
                    )}
                    {item.sub && <p className="font-sans text-[13px] text-[#999] mt-1">{item.sub}</p>}
                  </div>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white font-poppins text-[12px]">🍽️ Dine-In</span>
                <span className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white font-poppins text-[12px]">🥡 Takeout</span>
                <span className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white font-poppins text-[12px]">🌿 Outdoor Seating</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <a href="#" className="inline-flex items-center justify-center bg-gradient-to-r from-crimson to-orange text-white font-poppins text-[14px] font-bold uppercase tracking-[2px] px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(200,16,46,0.3)] hover:scale-105 transition-all duration-300">
                  Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA BANNER */}
      <section className="relative py-[100px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1920" alt="Rooftop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/80 to-[#1A1A1A]/85" />
        </div>
        
        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-playfair text-[28px] lg:text-[40px] font-bold text-white mb-4">
            Ready to Experience Authentic Turkish Flavors?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[17px] text-white/80 mb-8">
            Visit us on Addis Ababa Street or call to place your takeout order. We can't wait to serve you!
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+211911121135" className="inline-flex items-center justify-center bg-gold text-[#1A1A1A] font-poppins text-[14px] font-bold uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white transition-colors">
              <Phone className="w-4 h-4 mr-2" /> Call Us Now
            </a>
            <Link to="/menu" className="inline-flex items-center justify-center bg-transparent text-white font-poppins text-[14px] font-bold uppercase tracking-[2px] px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-[#1A1A1A] transition-colors">
              View Our Menu
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
