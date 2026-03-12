import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, MapPin, Phone, Clock, Send, CheckCircle2, ChevronDown, Facebook, Instagram, MessageCircle, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    source: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [sourceOpen, setSourceOpen] = useState(false);

  const subjects = ["General Inquiry", "Table Reservation", "Feedback & Suggestions", "Catering & Events", "Partnership & Business", "Complaint", "Other"];
  const sources = ["Google Search", "Social Media", "Friend/Family Recommendation", "Walked By", "Other"];

  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 23;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormState({ name: '', email: '', phone: '', subject: '', message: '', source: '' });
    setIsSuccess(false);
  };

  return (
    <main className="relative w-full overflow-hidden bg-white">
      {/* SECTION C.1: HERO */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1920" 
            alt="Restaurant Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/70" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50" />
        </div>

        <div className="relative z-10 max-w-[800px] px-6 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6 font-poppins text-[13px] text-gold">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/50" />
            <span className="text-white">Contact</span>
          </div>

          <h1 className="font-playfair text-[40px] md:text-[56px] font-bold text-white mb-4 flex flex-wrap justify-center">
            {"Get in Touch".split('').map((char, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="font-sans text-[16px] md:text-[18px] text-white/70 mb-8 max-w-[600px]">
            Whether you have a question, want to make a reservation, or simply want to say hello — we're here for you.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-wrap justify-center items-center gap-4 text-white/90 font-poppins text-[14px]">
            <a href="tel:+211911121135" className="flex items-center hover:text-gold transition-colors group">
              <Phone className="w-4 h-4 mr-2 text-gold group-hover:rotate-12 transition-transform" /> +211 911 121 135
            </a>
            <span className="text-gold hidden sm:inline">♦</span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gold" /> Addis Ababa Street, Juba
            </span>
            <span className="text-gold hidden sm:inline">♦</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-gold" /> Open Daily
            </span>
          </motion.div>
        </div>
      </section>

      {/* SECTION C.2: INFO CARDS */}
      <section className="py-[80px] bg-[#FAF7F2]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: MapPin, title: "Visit Us", 
                lines: ["Addis Ababa Street", "Juba, South Sudan"], 
                sub: "Plus Code: RJV7+W2R", 
                link: "Get Directions →", href: "#" 
              },
              { 
                icon: Phone, title: "Call Us", 
                lines: ["+211 911 121 135"], 
                sub: "We're happy to answer your questions and take your orders over the phone.", 
                link: "Call Now →", href: "tel:+211911121135" 
              },
              { 
                icon: Clock, title: "Opening Hours", 
                lines: ["Mon – Thu: 10AM – 11PM", "Fri – Sat: 10AM – 12AM", "Sun: 12PM – 10PM"], 
                sub: isOpen ? "Open Now" : "Closed Now", 
                isStatus: true,
                link: "", href: "" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white rounded-[20px] p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-400 group flex flex-col items-center"
              >
                <div className="w-[72px] h-[72px] rounded-full border-2 border-gold flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300 relative overflow-hidden">
                  <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <motion.circle cx="50" cy="50" r="48" fill="none" stroke="#D4A843" strokeWidth="4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} />
                  </motion.svg>
                  <item.icon className="w-8 h-8 text-crimson group-hover:text-white relative z-10 transition-colors" />
                </div>
                <h3 className="font-poppins text-[22px] font-semibold text-[#1A1A1A] mb-4">{item.title}</h3>
                
                <div className="space-y-1 mb-4 flex-1">
                  {item.lines.map((line, j) => (
                    <p key={j} className={`font-sans text-[16px] ${item.title === 'Call Us' ? 'font-poppins text-[20px] font-semibold text-[#1A1A1A]' : 'text-gray-600'}`}>{line}</p>
                  ))}
                </div>

                {item.isStatus ? (
                  <div className="flex items-center justify-center space-x-2 mt-auto">
                    <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-[#4CAF50] animate-pulse' : 'bg-red-500'}`} />
                    <span className={`font-poppins text-[14px] font-medium ${isOpen ? 'text-[#4CAF50]' : 'text-red-500'}`}>{item.sub}</span>
                  </div>
                ) : (
                  <p className={`font-sans text-[14px] ${item.title === 'Visit Us' ? 'text-gold font-mono' : 'text-gray-500'} mb-4 mt-auto`}>{item.sub}</p>
                )}

                {item.link && (
                  <a href={item.href} className="font-poppins text-[14px] font-semibold text-crimson hover:underline underline-offset-4 mt-2">
                    {item.link}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C.3: CONTACT FORM */}
      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Form */}
          <div className="w-full lg:w-[55%]">
            <h2 className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-3">Send Us a Message</h2>
            <p className="font-sans text-[15px] text-gray-500 mb-10 max-w-[480px]">
              Fill out the form below and we'll get back to you as soon as possible. For immediate assistance, please call us directly.
            </p>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  onSubmit={handleSubmit} 
                  className="space-y-7"
                >
                  {/* Name */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="peer w-full bg-transparent border-b-2 border-[#E0E0E0] py-3 text-[#1A1A1A] font-sans text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_2px_8px_rgba(212,168,67,0.2)] transition-all placeholder-transparent"
                      placeholder="Your Full Name"
                    />
                    <label htmlFor="name" className="absolute left-0 top-3 text-gray-400 font-sans text-[16px] transition-all peer-focus:-translate-y-7 peer-focus:text-[12px] peer-focus:text-gold peer-focus:font-semibold peer-valid:-translate-y-7 peer-valid:text-[12px] peer-valid:text-gray-500 peer-valid:font-semibold cursor-text">
                      Your Full Name
                    </label>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="peer w-full bg-transparent border-b-2 border-[#E0E0E0] py-3 text-[#1A1A1A] font-sans text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_2px_8px_rgba(212,168,67,0.2)] transition-all placeholder-transparent"
                        placeholder="Email Address"
                      />
                      <label htmlFor="email" className="absolute left-0 top-3 text-gray-400 font-sans text-[16px] transition-all peer-focus:-translate-y-7 peer-focus:text-[12px] peer-focus:text-gold peer-focus:font-semibold peer-valid:-translate-y-7 peer-valid:text-[12px] peer-valid:text-gray-500 peer-valid:font-semibold cursor-text">
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input 
                        type="tel" 
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        className="peer w-full bg-transparent border-b-2 border-[#E0E0E0] py-3 pl-12 text-[#1A1A1A] font-sans text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_2px_8px_rgba(212,168,67,0.2)] transition-all placeholder-transparent"
                        placeholder="Phone Number"
                      />
                      <span className="absolute left-0 top-3.5 text-gray-500 font-sans text-[15px]">+211</span>
                      <label htmlFor="phone" className={`absolute left-0 top-3 text-gray-400 font-sans text-[16px] transition-all cursor-text ${formState.phone ? '-translate-y-7 text-[12px] text-gray-500 font-semibold' : 'peer-focus:-translate-y-7 peer-focus:text-[12px] peer-focus:text-gold peer-focus:font-semibold'}`}>
                        Phone Number (Optional)
                      </label>
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="relative">
                    <div 
                      className="w-full border-b-2 border-[#E0E0E0] py-3 flex justify-between items-center cursor-pointer"
                      onClick={() => setSubjectOpen(!subjectOpen)}
                    >
                      <span className={`font-sans text-[16px] ${formState.subject ? 'text-[#1A1A1A]' : 'text-gray-400'}`}>
                        {formState.subject || 'Subject'}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${subjectOpen ? 'rotate-180' : ''}`} />
                    </div>
                    <label className={`absolute left-0 top-3 text-gray-400 font-sans text-[16px] transition-all pointer-events-none ${formState.subject || subjectOpen ? '-translate-y-7 text-[12px] text-gold font-semibold' : 'opacity-0'}`}>
                      Subject
                    </label>
                    
                    <AnimatePresence>
                      {subjectOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 w-full bg-white shadow-xl rounded-b-lg border border-gray-100 z-20 overflow-hidden mt-1"
                        >
                          {subjects.map(sub => (
                            <div 
                              key={sub}
                              className="px-4 py-3 font-sans text-[15px] text-gray-700 hover:bg-gold/10 hover:text-gold cursor-pointer transition-colors"
                              onClick={() => { setFormState({...formState, subject: sub}); setSubjectOpen(false); }}
                            >
                              {sub}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea 
                      id="message"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="peer w-full bg-transparent border-b-2 border-[#E0E0E0] py-3 text-[#1A1A1A] font-sans text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_2px_8px_rgba(212,168,67,0.2)] transition-all placeholder-transparent min-h-[120px] resize-y"
                      placeholder="Your Message"
                      maxLength={500}
                    />
                    <label htmlFor="message" className="absolute left-0 top-3 text-gray-400 font-sans text-[16px] transition-all peer-focus:-translate-y-7 peer-focus:text-[12px] peer-focus:text-gold peer-focus:font-semibold peer-valid:-translate-y-7 peer-valid:text-[12px] peer-valid:text-gray-500 peer-valid:font-semibold cursor-text">
                      Your Message
                    </label>
                    <div className={`absolute bottom-3 right-0 text-[12px] font-sans ${formState.message.length === 500 ? 'text-red-500' : 'text-gray-400'}`}>
                      {formState.message.length} / 500
                    </div>
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit"
                    disabled={isSubmitting || !formState.name || !formState.email || !formState.message}
                    className="w-full h-[56px] rounded-[12px] bg-gradient-to-r from-crimson to-orange text-white font-poppins text-[16px] font-semibold uppercase tracking-[2px] flex items-center justify-center hover:shadow-[0_8px_24px_rgba(200,16,46,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                  >
                    {isSubmitting ? (
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 bg-green-50/50 rounded-[20px] border border-green-100"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="font-poppins text-[24px] font-semibold text-[#1A1A1A] mb-3">Message Sent Successfully!</h3>
                  <p className="font-sans text-[15px] text-gray-600 max-w-[400px] mb-8">
                    Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="px-8 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-poppins text-[14px] font-semibold hover:border-gold hover:text-gold transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Decorative Panel */}
          <div className="w-full lg:w-[40%] hidden lg:block">
            <div className="relative w-full h-full min-h-[600px] rounded-[20px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800" alt="Turkish Tea" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#1A1A1A]/80" />
              
              <div className="absolute inset-0 p-12 flex flex-col">
                <h3 className="font-playfair text-[28px] text-white mb-6">We'd Love to Hear From You</h3>
                <div className="w-[40px] h-[2px] bg-gold mb-10" />
                
                <div className="space-y-8 flex-1">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-gold mr-4 shrink-0" />
                    <span className="font-sans text-[15px] text-white leading-relaxed">Addis Ababa Street,<br/>Juba, South Sudan</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-gold mr-4 shrink-0" />
                    <span className="font-sans text-[15px] text-white">+211 911 121 135</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-gold mr-4 shrink-0" />
                    <span className="font-sans text-[15px] text-white">Open Daily: 10AM – 11PM</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex space-x-4">
                    {[Facebook, Instagram, MessageCircle, Map].map((Icon, i) => (
                      <a key={i} href="#" className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:bg-gold hover:text-[#1A1A1A] transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C.4: MAP */}
      <section className="w-full h-[350px] lg:h-[500px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15939.882195973804!2d31.5722!3d4.8517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDYuMSJOIDMxwrAzNCcyMC4wIkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }} 
          allowFullScreen 
          loading="lazy"
        />
        {/* Overlay to prevent accidental scrolling on mobile */}
        <div className="absolute inset-0 bg-transparent lg:pointer-events-none flex items-center justify-center group">
          <div className="bg-black/70 text-white px-4 py-2 rounded-full font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity lg:hidden pointer-events-none">
            Use two fingers to move the map
          </div>
        </div>
      </section>

      {/* SECTION C.5: ADDITIONAL INFO */}
      <section className="py-[80px] bg-[#FAF7F2]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-2">Everything You Need to Know</h2>
            <p className="font-sans text-[16px] text-gray-500">Quick reference guide for your visit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🍽️", color: "bg-red-50", title: "Service Options", items: ["Dine-In", "Takeout", "Outdoor Seating", "Table Service"] },
              { icon: "⭐", color: "bg-yellow-50", title: "Popular For", items: ["Lunch", "Dinner", "Solo Dining", "Quick Bites"] },
              { icon: "👥", color: "bg-blue-50", title: "Great For", items: ["Groups", "Families", "Kids", "Casual Dining"] },
              { icon: "🅿️", color: "bg-green-50", title: "Parking & Access", items: ["Free Parking Lot", "Free Street Parking", "Wheelchair Accessible"] }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-[16px] p-8 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-shadow"
              >
                <div className={`w-14 h-14 rounded-full ${card.color} flex items-center justify-center text-2xl mb-6`}>
                  {card.icon}
                </div>
                <h3 className="font-poppins text-[18px] font-semibold text-[#1A1A1A] mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center font-sans text-[14px] text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C.6: WHATSAPP CTA */}
      <section className="py-[80px] bg-[#1A1A1A] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-3 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="max-w-[600px] mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="font-playfair text-[36px] font-bold text-white mb-4">Prefer to Chat?</h2>
          <p className="font-sans text-[17px] text-white/70 mb-10">
            Reach us instantly on WhatsApp for quick orders, reservations, or any questions.
          </p>

          <a 
            href="https://wa.me/211911121135" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center bg-[#25D366] text-white font-poppins text-[18px] font-semibold px-12 py-4 rounded-full hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-all duration-300 mb-12"
          >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20" />
            <MessageCircle className="w-6 h-6 mr-3 relative z-10" /> 
            <span className="relative z-10">Chat on WhatsApp</span>
          </a>

          <div className="w-full flex flex-col items-center">
            <span className="font-inter text-[14px] text-gray-400 mb-4">Follow Us:</span>
            <div className="flex space-x-5">
              {[Facebook, Instagram, MessageCircle, MapPin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  href="#" 
                  className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
