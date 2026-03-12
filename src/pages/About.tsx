import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, ArrowRight, Star, Clock, Heart, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function About() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2500;
          const interval = 20;
          const steps = duration / interval;

          const timer = setInterval(() => {
            start += 1;
            setCount1(Math.min(Math.floor((start / steps) * 1000), 1000));
            setCount2(Math.min(Math.floor((start / steps) * 50), 50));
            setCount3(Math.min((start / steps) * 4.8, 4.8));
            setCount4(Math.min(Math.floor((start / steps) * 7), 7));

            if (start >= steps) clearInterval(timer);
          }, interval);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById('stats-section');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-offwhite">
      {/* SECTION A.1: HERO */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[50vh] lg:min-h-[65vh] overflow-hidden">
        {/* Left: Image */}
        <div className="w-full lg:w-[55%] h-[40vh] lg:h-auto relative overflow-hidden">
          <motion.img 
            style={{ scale }}
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920" 
            alt="Restaurant Exterior" 
            className="w-full h-full object-cover filter sepia-[0.2] saturate-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1A1A1A] opacity-0 lg:opacity-100" />
        </div>

        {/* Right: Text Panel */}
        <div className="w-full lg:w-[45%] bg-[#1A1A1A] relative flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 97%)' }}>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-6 font-poppins text-[13px] text-gold/70">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">About Us</span>
            </div>

            <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.6 }} className="h-[2px] bg-gold mb-4" />
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.4 }} className="font-poppins text-[12px] uppercase tracking-[4px] text-gold mb-4">
              ESTABLISHED IN JUBA
            </motion.p>

            <h1 className="font-playfair text-[32px] md:text-[40px] lg:text-[56px] font-bold text-white mb-4 flex flex-wrap">
              {"Our Story".split('').map((char, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.03, duration: 0.5 }}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="font-poppins text-[16px] lg:text-[18px] font-light text-white/70 mb-6">
              The heart, soul, and fire behind every dish at Mr Shawarma
            </motion.p>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }} className="w-[120px] h-[20px] flex items-center mb-6">
              <div className="w-full h-[1px] bg-gold/50 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-gold bg-[#1A1A1A]" />
              </div>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="font-sans text-[16px] text-white/60 leading-[1.8] mb-12">
              From the sizzling streets of Istanbul to the vibrant heart of Juba, Mr Shawarma Turkish Restaurant was born from a singular vision — to bring the authentic, bold, and unforgettable flavors of Turkish cuisine to South Sudan. Every dish we serve carries the warmth of Turkish hospitality and the passion of master craftsmen who have perfected their art over generations.
            </motion.p>

            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="w-[1px] h-[30px] bg-gold relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
              </div>
              <span className="font-poppins text-[11px] text-gold mt-2">Scroll to Explore</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION A.2: ORIGIN STORY */}
      <section className="relative py-[80px] lg:py-[120px] bg-[#FAF7F2] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative">
          {/* Timeline Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gold/30 -translate-x-1/2 z-0" />

          {/* Block 1 */}
          <div className="flex flex-col lg:flex-row items-center mb-24 relative z-10">
            <div className="absolute left-0 lg:left-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,168,67,0.8)] -translate-x-1/2 animate-pulse" />
            
            <div className="w-full lg:w-[50%] pl-8 lg:pl-0 lg:pr-16 mb-10 lg:mb-0">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block bg-[#1A1A1A] text-gold font-poppins text-[11px] uppercase tracking-[3px] px-4 py-1 rounded-full mb-4">CHAPTER 01</motion.div>
              <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-playfair text-[28px] lg:text-[36px] font-bold text-[#1A1A1A] mb-4">Where It All Began</motion.h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 50 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.4 }} className="h-[3px] bg-gold mb-6" />
              
              <div className="space-y-4 font-sans text-[16px] text-[#4A4A4A] leading-[1.9]">
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  The story of Mr Shawarma begins not in Juba, but in the bustling bazaars and aromatic kitchens of Turkey — a land where food is not just sustenance, but an art form, a celebration, and a way of bringing people together.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="pl-6 border-l-[3px] border-gold my-6">
                  <p className="font-playfair text-[22px] italic text-crimson">That gap became a calling.</p>
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
                  With a dream, a recipe book passed down through generations, and an unwavering commitment to quality, Mr Shawarma Turkish Restaurant was born on the vibrant Addis Ababa Street — a street that would soon become synonymous with the best shawarma in South Sudan.
                </motion.p>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 60, rotate: 2 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full lg:w-[45%] pl-8 lg:pl-0 relative">
              <div className="relative rounded-[16px] overflow-hidden aspect-[3/4]">
                <div className="absolute -top-2 -left-2 w-full h-full border-t-2 border-l-2 border-gold rounded-[16px] z-0" />
                <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" alt="Bazaar" className="w-full h-full object-cover relative z-10" />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }} className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold rounded-full shadow-lg z-20 flex items-center justify-center p-2">
                  <div className="w-full h-full border border-white/30 rounded-full flex items-center justify-center">
                    <span className="font-poppins text-[11px] uppercase font-bold text-white text-center leading-tight">Since<br/>Day One</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center mb-24 relative z-10">
            <div className="absolute left-0 lg:left-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,168,67,0.8)] -translate-x-1/2 animate-pulse" />
            
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full lg:w-[45%] pl-8 lg:pl-0 lg:pr-10 mt-10 lg:mt-0">
              <div className="relative rounded-[16px] overflow-hidden aspect-[4/3] shadow-[0_0_30px_rgba(232,113,33,0.2)]" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)' }}>
                <img src="https://images.unsplash.com/photo-1648823153736-9a2026ae3d16?auto=format&fit=crop&q=80&w=800" alt="Shawarma Spit" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <div className="w-full lg:w-[50%] pl-8 lg:pl-16">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block bg-[#1A1A1A] text-gold font-poppins text-[11px] uppercase tracking-[3px] px-4 py-1 rounded-full mb-4">CHAPTER 02</motion.div>
              <motion.h2 initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-playfair text-[28px] lg:text-[36px] font-bold text-[#1A1A1A] mb-4">The Art of the Perfect Shawarma</motion.h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 50 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.4 }} className="h-[3px] bg-gold mb-6" />
              
              <div className="space-y-4 font-sans text-[16px] text-[#4A4A4A] leading-[1.9]">
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  At Mr Shawarma, making a shawarma isn't just cooking — it's a ritual. Every morning before dawn, our master chefs begin the meticulous process that transforms raw ingredients into the dishes you love.
                </motion.p>
                
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="bg-white border-l-4 border-crimson p-5 rounded-r-lg shadow-sm my-6">
                  <h4 className="font-poppins text-[16px] font-bold text-[#1A1A1A]">12+ Hours of Marination for Maximum Flavor</h4>
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
                  The marinated meat is then layered on our traditional vertical rotisserie — the döner spit — and slow-roasted over carefully controlled heat. As the outer layers caramelize to golden-brown perfection, our skilled carvers slice paper-thin ribbons of succulent meat.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col lg:flex-row items-center relative z-10">
            <div className="absolute left-0 lg:left-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,168,67,0.8)] -translate-x-1/2 animate-pulse" />
            
            <div className="w-full lg:w-[50%] pl-8 lg:pl-0 lg:pr-16 mb-10 lg:mb-0">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block bg-[#1A1A1A] text-gold font-poppins text-[11px] uppercase tracking-[3px] px-4 py-1 rounded-full mb-4">CHAPTER 03</motion.div>
              <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-playfair text-[28px] lg:text-[36px] font-bold text-[#1A1A1A] mb-4">More Than Just a Meal</motion.h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 50 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.4 }} className="h-[3px] bg-gold mb-6" />
              
              <div className="space-y-4 font-sans text-[16px] text-[#4A4A4A] leading-[1.9]">
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  We believe that great food deserves a great setting. That's why Mr Shawarma isn't just a restaurant — it's a destination. Step inside our ground floor and you'll find a spacious, modern dining room designed for comfort.
                </motion.p>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="bg-[#FFF5E1] p-5 rounded-lg border border-gold/20 my-6 relative">
                  <span className="absolute top-2 left-2 text-gold text-2xl font-playfair leading-none">"</span>
                  <p className="font-sans italic text-[#555] pl-6 text-[15px]">Jojo upstairs in the quiet cool restaurant smiling and attentive</p>
                  <p className="text-right font-poppins text-[12px] text-gold font-semibold mt-2">— Stephen Dinsmore, Guest</p>
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
                  But the magic truly happens upstairs. Climb to our rooftop terrace and you're greeted by a stunning panoramic view of Hai Cinema and the surrounding Juba skyline.
                </motion.p>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full lg:w-[45%] pl-8 lg:pl-0 relative">
              <div className="relative rounded-[16px] overflow-hidden aspect-[3/4] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Rooftop" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION A.3: OUR VALUES */}
      <section className="relative py-[100px] bg-[#0D0D0D] overflow-hidden">
        {/* Wave Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#D4A843"></path>
          </svg>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 relative z-10 mt-10">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-poppins text-[12px] uppercase tracking-[5px] text-gold mb-4">OUR CORE VALUES</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-playfair text-[32px] lg:text-[44px] font-bold text-white mb-4">Built on Passion, Served with Pride</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[17px] text-white/60 max-w-[700px]">These are the principles that guide every decision we make, every dish we prepare, and every guest we serve.</motion.p>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }} className="w-[60px] h-[20px] flex items-center justify-center mt-6">
              <div className="w-full h-[1px] bg-gold/50 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-gold bg-[#0D0D0D]" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Star, title: "Authenticity", desc: "Our recipes are rooted in centuries-old Turkish culinary traditions. We don't cut corners or take shortcuts." },
              { icon: CheckCircle2, title: "Uncompromising Quality", desc: "Every ingredient that enters our kitchen is held to the highest standard. Our meats are premium cuts." },
              { icon: Clock, title: "Lightning-Fast Service", desc: "We know your time is valuable. Our kitchen is engineered for efficiency without sacrificing quality." },
              { icon: Heart, title: "Genuine Hospitality", desc: "In Turkish culture, hospitality isn't just politeness — it's a sacred tradition. Every guest is treated like family." },
              { icon: Star, title: "Farm-Fresh, Always", desc: "There are no frozen, pre-packaged, or reheated meals at Mr Shawarma. Freshness isn't a feature — it's our foundation." },
              { icon: Users, title: "A Place for Everyone", desc: "Mr Shawarma is designed to welcome every person who walks through our doors. Everyone has a place here." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                className="bg-white/[0.03] border border-gold/15 rounded-[20px] p-12 px-9 text-center hover:bg-white/[0.06] hover:border-gold/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,168,67,0.1)] transition-all duration-400 group"
              >
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold flex items-center justify-center mb-6 relative overflow-hidden">
                  <item.icon className="w-8 h-8 text-gold relative z-10" />
                  <div className="absolute inset-0 bg-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </div>
                <h3 className="font-poppins text-[24px] font-semibold text-white mb-3">{item.title}</h3>
                <div className="w-1.5 h-1.5 rounded-full bg-gold mx-auto mb-4" />
                <p className="font-sans text-[15px] text-white/55 leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION A.4: EXPERIENCE */}
      <section className="py-[80px] bg-[#FFF5E1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }} />
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="font-playfair text-[40px] font-bold text-[#1A1A1A] mb-2">The Mr Shawarma Experience</h2>
          <p className="font-sans text-[17px] text-[#666]">Six reasons our guests keep coming back</p>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 px-6 max-w-[1200px] mx-auto pb-8 hide-scrollbar snap-x snap-mandatory relative z-10">
          {[
            { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600", title: "Cool, Comfortable Dining", desc: "Escape the heat in our spacious, air-conditioned dining room.", icon: "🍽️" },
            { img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600", title: "Rooftop with a View", desc: "Dine under the stars with panoramic views of Hai Cinema.", icon: "🌆" },
            { img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600", title: "Al Fresco Dining", desc: "Enjoy the vibrant energy of Juba from our comfortable outdoor seating.", icon: "🌿" },
            { img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=600", title: "Fast & Fresh Takeout", desc: "In a rush? Our efficient takeout service ensures you get restaurant-quality food.", icon: "🥡" },
            { img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600", title: "Perfect for Families", desc: "Kid-friendly menu options, high chairs, and a welcoming atmosphere.", icon: "👨‍👩‍👧‍👦" },
            { img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600", title: "Ideal for Groups", desc: "Hosting a get-together? Our flexible seating makes group dining easy.", icon: "👥" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] group hover:scale-[1.03] transition-all duration-400 flex flex-col h-[480px]"
            >
              <div className="h-[60%] overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-md">{item.icon}</div>
              </div>
              <div className="h-[40%] bg-[#1A1A1A] p-6 flex flex-col justify-center text-center">
                <h3 className="font-poppins text-[20px] font-bold text-white mb-3">{item.title}</h3>
                <p className="font-sans text-[14px] text-white/70 leading-[1.6]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION A.5: ACCESSIBILITY */}
      <section className="py-[100px] bg-white">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full lg:w-[45%] relative aspect-square rounded-full border-4 border-gold/20 p-4"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Accessibility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100">
              <span className="text-4xl">♿</span>
            </div>
          </motion.div>

          <div className="w-full lg:w-[50%]">
            <h2 className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-2">Designed for Everyone</h2>
            <p className="font-sans text-[16px] text-[#666] mb-8">We've thought of every detail to ensure your visit is comfortable, convenient, and enjoyable.</p>

            <div className="space-y-8">
              {[
                { title: "ACCESSIBILITY", items: ["Wheelchair Accessible Entrance", "Wheelchair Accessible Parking Lot", "Wheelchair Accessible Restroom"] },
                { title: "PARKING", items: ["Free Parking Lot", "Free Street Parking"] },
                { title: "SERVICE OPTIONS", items: ["Dine-In with Table Service", "Takeout", "Outdoor Seating"] }
              ].map((category, i) => (
                <div key={i}>
                  <div className="flex items-center mb-4">
                    <span className="font-poppins text-[13px] uppercase tracking-[3px] text-gold font-semibold">{category.title}</span>
                    <div className="flex-1 h-[1px] bg-gold/30 ml-4" />
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, j) => (
                      <motion.div 
                        key={j}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-center group border-b border-black/5 pb-3"
                      >
                        <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center mr-4 group-hover:bg-gold transition-colors shrink-0">
                          <span className="text-gold group-hover:text-white text-xs">✓</span>
                        </div>
                        <span className="font-poppins text-[15px] font-bold text-[#1A1A1A] group-hover:translate-x-1 transition-transform">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A.6: BY THE NUMBERS */}
      <section id="stats-section" className="relative py-[80px] bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=1920" alt="Shawarma" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A1A1A]/85" />
          <div className="absolute inset-0 bg-crimson/30 mix-blend-multiply" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <p className="font-poppins text-[12px] uppercase tracking-[4px] text-gold mb-2">MR SHAWARMA IN NUMBERS</p>
          <h2 className="font-playfair text-[40px] font-bold text-white mb-12">Our Impact at a Glance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { num: count1, suffix: "+", label: "HAPPY GUESTS", desc: "Satisfied customers and counting" },
              { num: count2, suffix: "+", label: "MENU ITEMS", desc: "Dishes, drinks, and desserts to explore" },
              { num: count3, suffix: "", label: "STAR RATING", desc: "Average rating from verified reviews" },
              { num: count4, suffix: "", label: "DAYS A WEEK", desc: "We're here for you every single day" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-playfair text-[48px] lg:text-[64px] font-bold text-gold leading-none mb-4">
                  {stat.num}{stat.suffix}
                </span>
                <motion.div initial={{ width: 0 }} whileInView={{ width: 30 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} className="h-[2px] bg-gold mb-4" />
                <span className="font-poppins text-[14px] uppercase tracking-[3px] text-white/70 mb-2">{stat.label}</span>
                <p className="font-sans text-[13px] text-white/40 max-w-[200px]">{stat.desc}</p>
                {i === 2 && (
                  <div className="flex space-x-1 mt-2">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-gold fill-gold" />)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION A.7: OUR COMMITMENT */}
      <section className="py-[100px] bg-[#FAF7F2]">
        <div className="max-w-[900px] mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="font-playfair text-[120px] text-gold/20 leading-none absolute -top-10 left-1/2 -translate-x-1/2">"</motion.div>
          
          <div className="relative z-10 p-10 border border-gold/30 rounded-lg">
            {/* Corner flourishes could be added here as SVGs */}
            <h3 className="font-playfair text-[24px] md:text-[32px] italic text-[#1A1A1A] leading-[1.7] mb-6">
              {"We don't just serve food. We serve an experience — crafted with passion, rooted in tradition, and delivered with love. Every dish that leaves our kitchen carries our name, our reputation, and our promise to you.".split(' ').map((word, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="inline-block mr-2">
                  {word}
                </motion.span>
              ))}
            </h3>
            <p className="font-poppins text-[16px] text-gold font-semibold">— The Mr Shawarma Family</p>
          </div>
        </div>
      </section>

      {/* SECTION A.8: CTA */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            animate={{ scale: [1, 1.08, 1] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920" 
            alt="Rooftop Night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]/90" />
        </div>

        <div className="relative z-10 px-6 max-w-[700px]">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-poppins text-[12px] uppercase tracking-[6px] text-gold mb-4">READY?</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-playfair text-[36px] lg:text-[52px] font-bold text-white mb-4">Come Taste the Difference</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[18px] text-white/80 mb-8">Visit us at Addis Ababa Street, Juba — or call ahead to place your order. We can't wait to welcome you.</motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Link to="/menu" className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-crimson to-orange text-white font-poppins text-[16px] font-semibold px-10 py-4 rounded-full hover:scale-105 hover:shadow-[0_8px_24px_rgba(200,16,46,0.4)] transition-all duration-300 group">
                View Our Menu <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <a href="tel:+211911121135" className="inline-flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-gold text-gold font-poppins text-[16px] font-semibold px-10 py-4 rounded-full hover:bg-gold hover:text-[#1A1A1A] transition-colors duration-300">
                <span className="mr-2">📞</span> Call to Order
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
