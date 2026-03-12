import { motion } from 'motion/react';
import { ChevronRight, Star, MessageCircle, ArrowRight, ThumbsUp, Share2, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Stephen Dinsmore',
    initials: 'SD',
    color: 'bg-[#2E5BBA]',
    badges: ['Local Guide', '34 reviews', '14 photos'],
    time: 'Edited a year ago',
    rating: 5,
    text: 'Excellent Turkish food. Shawarma wrap particularly tasty. Helpful staff, Jojo upstairs in the quiet cool restaurant smiling and attentive. Delicious freshly pressed fruit juices too.',
    detailedRatings: { Food: 5, Service: 5, Atmosphere: 5 },
    tags: ['Dine-in', 'Dinner']
  },
  {
    id: 2,
    name: 'Thomas Wandundu',
    initials: 'TW',
    color: 'bg-[#2E7D32]',
    badges: ['Local Guide', '4 reviews', '36 photos'],
    time: 'a year ago',
    rating: 5,
    text: 'The restaurant has up to standard Turkish cuisine with very polite staff.',
    detailedRatings: null,
    tags: []
  },
  {
    id: 3,
    name: 'Avi Shaikh',
    initials: 'AS',
    color: 'bg-[#E65100]',
    badges: ['3 reviews'],
    time: '2 months ago',
    rating: 4,
    text: 'Staff was nice and the food was great they can work on the ambiance overall solid 8.5/10',
    detailedRatings: { Food: 5, Service: 5, Atmosphere: 3 },
    tags: ['Suitable for all group sizes', 'No wait']
  },
  {
    id: 4,
    name: 'Carlos Respeito',
    initials: 'CR',
    color: 'bg-[#6A1B9A]',
    badges: ['Local Guide', '152 reviews', '466 photos'],
    time: 'a year ago',
    rating: 5,
    text: 'I was amazed by the fast service they provided. I placed my order and it came in no time. The staff was very friendly and explained every item on the menu to me.',
    detailedRatings: null,
    tags: []
  },
  {
    id: 5,
    name: 'David Hamilton',
    initials: 'DH',
    color: 'bg-[#00796B]',
    badges: ['Local Guide', '176 reviews', '243 photos'],
    time: 'a year ago',
    rating: 5,
    text: 'Wonderful new Shawarma restaurant. You get a complimentary soup when you dine in. Rooftop has great view of Hai Cinema. Food is delicious and priced appropriately. I am definitely coming back again and again.',
    detailedRatings: { Food: 5, Service: 5, Atmosphere: 5 },
    tags: ['Dine-in', 'Lunch', 'Recommended: Shawarma Arabic Plate']
  },
  {
    id: 6,
    name: 'Ahmed S. Ali',
    initials: 'AA',
    color: 'bg-[#C62828]',
    badges: ['Local Guide', '16 reviews', '15 photos'],
    time: 'a year ago',
    rating: 3,
    text: 'The environment is good and quiet. I ordered a Mix grill, but I found Kabab is not cooked well, there is still blood in the meat.',
    detailedRatings: { Food: 2, Service: 4, Atmosphere: 4 },
    tags: []
  }
];

export default function Reviews() {
  const [filter, setFilter] = useState('All');
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;

    const timer = setInterval(() => {
      start += 1;
      setCount(Math.min((start / steps) * 4.8, 4.8));
      if (start >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedReviews(prev => 
      prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
    );
  };

  const filteredReviews = reviews.filter(r => {
    if (filter === 'All') return true;
    if (filter === '5 Stars') return r.rating === 5;
    if (filter === '4 Stars') return r.rating === 4;
    if (filter === '3 Stars') return r.rating === 3;
    return true;
  });

  return (
    <main className="relative w-full overflow-hidden bg-white">
      {/* SECTION R.1: HERO */}
      <section className="relative w-full h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMlY2aDRWNGgtNHpNNiAzNHYtNEg0djRIMGYyaDR2NGgydi00aDR2LTJINnpNNiA0VjBINFY0SDB2Mmg0djRoMlY2aDRWNEg2eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] animate-[pan_60s_linear_infinite]" />
        </div>

        <div className="relative z-10 max-w-[650px] px-6 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6 font-poppins text-[13px] text-gold">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/50" />
            <span className="text-white">Reviews</span>
          </div>

          <div className="flex space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
              >
                <Star className="w-8 h-8 text-gold fill-gold" />
              </motion.div>
            ))}
          </div>

          <h1 className="font-playfair text-[40px] md:text-[56px] font-bold text-white mb-4">
            Guest Reviews
          </h1>

          <p className="font-sans text-[16px] md:text-[18px] text-white/70 mb-8">
            Don't just take our word for it — hear what our valued guests have to say about their Mr Shawarma experience.
          </p>

          <div className="flex flex-col items-center">
            <span className="font-playfair text-[56px] md:text-[72px] font-bold text-gold leading-none">{count.toFixed(1)}</span>
            <span className="font-sans text-[16px] md:text-[18px] text-white/50 mb-2">out of 5.0</span>
            <div className="flex space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-gold fill-gold' : 'text-gold/30 fill-gold/30'}`} />
              ))}
            </div>
            <span className="font-sans text-[14px] text-white/40">Based on Google Reviews</span>
          </div>
        </div>
      </section>

      {/* SECTION R.2: RATING BREAKDOWN */}
      <section className="py-[80px] bg-[#FAF7F2]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🍽️", label: "Food Quality", rating: 4.8, percent: 96, reviews: 5 },
              { icon: "👨‍🍳", label: "Service", rating: 4.8, percent: 96, reviews: 5 },
              { icon: "🏠", label: "Atmosphere", rating: 4.0, percent: 80, reviews: 4 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white rounded-[16px] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-poppins text-[16px] font-semibold text-[#1A1A1A] mb-2">{item.label}</h3>
                <span className="font-playfair text-[28px] font-bold text-gold mb-4 block">{item.rating.toFixed(1)} / 5</span>
                
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < Math.floor(item.rating) ? 'text-gold fill-gold' : 'text-gray-300 fill-gray-300'}`} />
                  ))}
                </div>

                <div className="w-full h-2 bg-[#E8E8E8] rounded-full overflow-hidden mb-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-gold to-orange rounded-full"
                  />
                </div>
                <span className="font-sans text-[12px] text-gray-500">Based on {item.reviews} rated reviews</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION R.3: HIGHLIGHTS */}
      <section className="py-[60px] bg-[#FFF8E7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-3 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231A1A1A\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-wrap justify-center gap-4">
          {[
            { icon: "⚡", text: "Lightning-Fast Service" },
            { icon: "🌟", text: "5-Star Food Quality" },
            { icon: "😊", text: "Friendly & Attentive Staff" },
            { icon: "🏙️", text: "Amazing Rooftop Views" },
            { icon: "💰", text: "Great Value for Money" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="bg-white border border-gold/30 rounded-full px-7 py-3 flex items-center space-x-2 shadow-sm hover:bg-gold hover:text-white transition-colors cursor-default group"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-poppins text-[14px] font-medium text-[#1A1A1A] group-hover:text-white transition-colors">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION R.4: ALL REVIEWS */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-6">All Guest Reviews</h2>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="font-sans text-[14px] text-gray-500 mr-2">Filter by:</span>
              {['All', '5 Stars', '4 Stars', '3 Stars'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full font-poppins text-[13px] transition-colors ${
                    filter === f ? 'bg-gold text-white font-semibold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredReviews.map((review, i) => (
              <motion.div 
                key={review.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`bg-white rounded-[20px] p-7 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-[#F0EBE3] border-l-4 ${review.rating < 4 ? 'border-l-gray-400' : 'border-l-gold'}`}
              >
                {/* Row 1: Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-[52px] h-[52px] rounded-full ${review.color} flex items-center justify-center border-2 border-gold shrink-0`}>
                      <span className="font-poppins text-[20px] font-bold text-white">{review.initials}</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-poppins text-[17px] font-semibold text-[#1A1A1A]">{review.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        {review.badges.map((badge, j) => (
                          <span key={j} className={badge.includes('Local Guide') ? "bg-gradient-to-br from-gold to-[#C49B38] text-white font-poppins text-[11px] uppercase tracking-[1px] px-2.5 py-1 rounded-[10px] flex items-center" : "font-sans text-[13px] text-[#888] flex items-center"}>
                            {badge.includes('Local Guide') && <Star className="w-3 h-3 mr-1 fill-white" />}
                            {badge.includes('photos') && <Camera className="w-3 h-3 mr-1" />}
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:items-end">
                    <span className="font-sans text-[13px] text-[#999] mb-1">{review.time}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className={`w-[18px] h-[18px] ${j < review.rating ? 'text-gold fill-gold' : 'text-[#DDD] fill-[#DDD]'}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 2: Text */}
                <div className="relative mb-6">
                  <span className="absolute -top-2 -left-2 font-playfair text-[24px] text-gold leading-none">"</span>
                  <p className="font-sans text-[16px] text-[#3A3A3A] leading-[1.9] pl-4">
                    {review.text.length > 150 && !expandedReviews.includes(review.id) 
                      ? `${review.text.substring(0, 150)}... ` 
                      : review.text}
                    {review.text.length > 150 && (
                      <button 
                        onClick={() => toggleExpand(review.id)}
                        className="text-gold underline font-medium ml-1 hover:text-orange transition-colors"
                      >
                        {expandedReviews.includes(review.id) ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </p>
                </div>

                {/* Row 3: Detailed Ratings */}
                {review.detailedRatings && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {Object.entries(review.detailedRatings).map(([key, val]) => (
                      <div key={key} className={`px-3 py-1.5 rounded-[8px] flex items-center space-x-1 font-sans text-[13px] ${val < 4 ? 'bg-red-50 text-red-700' : 'bg-gray-50 text-gray-700'}`}>
                        <span className="font-medium">{key}:</span>
                        <Star className={`w-3 h-3 ${val < 4 ? 'text-orange fill-orange' : 'text-gold fill-gold'}`} />
                        <span className="font-bold">{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Row 4: Tags */}
                {review.tags && review.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {review.tags.map((tag, j) => {
                      let bg = 'bg-gray-100';
                      let icon = '';
                      if (tag.includes('Dine-in')) { bg = 'bg-blue-50 text-blue-700'; icon = '🍽️ '; }
                      else if (tag.includes('Dinner') || tag.includes('Lunch')) { bg = 'bg-orange-50 text-orange-700'; icon = tag.includes('Dinner') ? '🌙 ' : '☀️ '; }
                      else if (tag.includes('Recommended')) { bg = 'bg-green-50 text-green-700'; icon = '👨‍🍳 '; }
                      else if (tag.includes('group')) { bg = 'bg-purple-50 text-purple-700'; icon = '👥 '; }
                      else if (tag.includes('wait')) { bg = 'bg-yellow-50 text-yellow-700'; icon = '⚡ '; }

                      return (
                        <span key={j} className={`px-3 py-1 rounded-full font-sans text-[12px] ${bg}`}>
                          {icon}{tag}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Row 5: Actions */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center space-x-1.5 text-gray-500 hover:text-gold transition-colors font-sans text-[13px]">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful</span>
                  </button>
                  <button className="flex items-center space-x-1.5 text-gray-500 hover:text-blue-500 transition-colors font-sans text-[13px]">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION R.6: LEAVE A REVIEW CTA */}
      <section className="py-[80px] bg-[#1A1A1A] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="max-w-[600px] mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6"
          >
            <MessageCircle className="w-10 h-10 text-gold" />
          </motion.div>

          <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-white mb-4">Loved Your Experience?</h2>
          <p className="font-sans text-[16px] md:text-[17px] text-white/70 mb-8 leading-[1.8]">
            Your feedback means the world to us. Share your Mr Shawarma story with the community and help other food lovers discover us.
          </p>

          <a 
            href="#" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-gold to-[#C49B38] text-[#1A1A1A] font-poppins text-[16px] font-semibold px-10 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(212,168,67,0.4)] transition-all duration-300 group mb-4"
          >
            Leave a Review on Google <ArrowRight className="w-5 h-5 ml-2 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <Link to="/contact" className="font-sans text-[14px] text-white/60 hover:text-gold underline decoration-gold/50 underline-offset-4 transition-colors">
            Or share your thoughts by contacting us directly →
          </Link>
        </div>
      </section>
    </main>
  );
}
