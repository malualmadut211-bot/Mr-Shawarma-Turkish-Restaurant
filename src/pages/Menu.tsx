import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'sandwiches', name: 'Sandwiches', icon: '🥙' },
  { id: 'pizzas', name: 'Pizzas', icon: '🍕' },
  { id: 'salads', name: 'Salads', icon: '🥗' },
  { id: 'pastry', name: 'Pastry', icon: '🧁' },
  { id: 'juices', name: 'Juices & Drinks', icon: '🍹' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' }
];

const sandwiches = [
  { name: 'Shawarma Chicken', desc: 'Succulent marinated chicken, slow-roasted on the spit, wrapped in warm flatbread with garlic sauce, pickles, and fresh vegetables.', price: 'Ask for price', badge: 'POPULAR', badgeColor: 'bg-crimson', img: 'https://images.unsplash.com/photo-1648823153736-9a2026ae3d16?auto=format&fit=crop&q=80&w=300' },
  { name: 'Beef Shawarma', desc: 'Tender seasoned beef, spit-roasted to perfection, served in a soft wrap with tahini, tomatoes, onions, and a touch of spice.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=300' },
  { name: 'Burger Jambo', desc: 'Our jumbo-sized beef burger loaded with fresh lettuce, tomato, melted cheese, and our secret house sauce.', price: 'Ask for price', badge: "CHEF'S PICK", badgeColor: 'bg-gold text-[#1A1A1A]', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=300' },
  { name: 'Cheese Burger', desc: 'A classic cheeseburger with a juicy seasoned beef patty, melted cheddar, crisp lettuce, tangy pickles on a toasted sesame bun.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=300' },
  { name: 'Burger Normal', desc: 'A simple, satisfying beef burger with fresh toppings, tomato, lettuce, and our signature Turkish seasoning blend.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=300' },
  { name: 'Crispy Chicken', desc: 'Golden-fried crispy chicken fillet in a soft bun with creamy coleslaw, tangy mayo, and a side of pickles.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=300' },
  { name: 'Zinger Chicken', desc: 'Spicy crispy chicken fillet with a fiery kick, layered with jalapeños, fresh lettuce, and our house-made spicy mayo.', price: 'Ask for price', badge: 'SPICY 🌶️', badgeColor: 'bg-orange', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=300' },
  { name: 'Shish Tawook', desc: 'Chargrilled chicken skewers marinated in a blend of lemon, garlic, and yogurt, wrapped in warm flatbread.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=300' },
  { name: 'Kofta Kebab', desc: 'Hand-shaped minced meat blended with aromatic spices, parsley, and onions, grilled over open flame.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=300' },
  { name: 'Hot Dog', desc: 'A classic beef hot dog in a soft, toasted bun with your choice of mustard, ketchup, and crispy fried onions.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&q=80&w=300' },
  { name: 'Fish Sandwich', desc: 'Lightly battered and golden-fried fish fillet served in a warm bun with homemade tartar sauce.', price: 'Ask for price', badge: 'NEW', badgeColor: 'bg-[#4CAF50]', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=300' }
];

const pizzas = [
  { name: 'Mixed Pizza', desc: 'The ultimate combination — tender chicken, seasoned beef, fresh vegetables, mushrooms, and a generous layer of melted mozzarella.', price: 'Ask for price', badge: 'POPULAR', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600' },
  { name: 'Chicken Pizza', desc: 'Juicy marinated chicken pieces with colorful bell peppers, caramelized onions, and a blend of melted mozzarella and cheddar.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600' },
  { name: 'Beef Pizza', desc: 'Richly seasoned ground beef with sliced mushrooms, black olives, and tangy tomato sauce, topped with a blanket of bubbling cheese.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Hot Dog Pizza', desc: 'A fun and unique twist — sliced beef hot dogs arranged on a cheesy base with a drizzle of mustard, pickles, and crispy onions.', price: 'Ask for price', badge: 'NEW', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600' },
  { name: 'Margherita Pizza', desc: 'The timeless Italian-Turkish classic — sweet San Marzano-style tomato sauce, creamy fresh mozzarella, and fragrant basil leaves.', price: 'Ask for price', badge: 'CLASSIC', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600' },
  { name: 'Vegetable Pizza', desc: 'A garden-fresh celebration of flavors — colorful bell peppers, red onions, ripe tomatoes, black olives, sweet corn, and mushrooms.', price: 'Ask for price', badge: 'VEGETARIAN', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600' }
];

const salads = [
  { name: 'Mutabelle', desc: 'Smoky fire-roasted eggplant blended silky-smooth with tahini, fresh lemon juice, and roasted garlic.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=300' },
  { name: 'Hummus', desc: 'Velvety smooth chickpea dip whisked with tahini, extra virgin olive oil, and a hint of cumin.', price: 'Ask for price', badge: 'POPULAR', badgeColor: 'bg-crimson', img: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&q=80&w=300' },
  { name: 'Babaganush', desc: 'Charred eggplant mixed with fire-roasted peppers, diced tomatoes, fresh herbs, and a splash of pomegranate molasses.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=300' },
  { name: 'Russian Salad', desc: 'A creamy, comforting mix of diced potatoes, carrots, green peas, crunchy pickles, and hard-boiled eggs.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300' },
  { name: 'Zengin Salad', desc: 'A rich and hearty Turkish salad featuring mixed greens, crumbled white cheese, toasted walnuts, pomegranate seeds.', price: 'Ask for price', badge: "CHEF'S PICK", badgeColor: 'bg-gold text-[#1A1A1A]', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300' },
  { name: 'Green Salad', desc: 'Crisp romaine lettuce, cool cucumber, juicy tomatoes, and fresh herbs tossed in a light lemon-olive oil vinaigrette.', price: 'Ask for price', badge: '🌿', badgeColor: 'bg-[#4CAF50]', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300' },
  { name: 'Mix Salad', desc: 'A colorful medley of seasonal vegetables — peppers, onions, tomatoes, carrots, and radishes — with a zesty house dressing.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300' },
  { name: 'Tarator', desc: 'A refreshing cold yogurt and cucumber dip infused with garlic, dried mint, and a drizzle of olive oil.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=300' },
  { name: 'Potato Salad', desc: 'Tender boiled potatoes tossed with fresh herbs, a touch of Dijon mustard, spring onions, and a light olive oil dressing.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300' },
  { name: 'Avocado Salad', desc: 'Ripe, creamy avocado slices fanned over a bed of mixed greens with cherry tomatoes, thinly sliced red onion.', price: 'Ask for price', badge: 'NEW', badgeColor: 'bg-[#4CAF50]', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300' }
];

const pastry = [
  { name: 'Cheese with Chicken', desc: 'Layers of crispy, buttery phyllo pastry wrapped around a savory filling of seasoned shredded chicken and melted cheese.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300' },
  { name: 'Cheese with Olive', desc: 'Flaky pastry stuffed with a tangy blend of briny green and black olives paired with creamy, melted cheese.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300' },
  { name: 'Mix Pastry', desc: 'Can\'t decide? Our assorted pastry platter brings you a selection of our most popular varieties.', price: 'Ask for price', badge: 'POPULAR', badgeColor: 'bg-crimson', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300' },
  { name: 'Cheese with Beef', desc: 'Rich, seasoned ground beef and gooey melted cheese encased in crispy, golden layers of buttery pastry.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300' },
  { name: 'Cheese with Zaatar', desc: 'A fragrant, herbaceous delight — aromatic zaatar paired with warm, melted cheese in flaky pastry.', price: 'Ask for price', badge: '🌿', badgeColor: 'bg-[#4CAF50]', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300' },
  { name: 'Cheese with Honey', desc: 'The perfect sweet-savory combination — warm, gooey cheese pastry fresh from the oven, generously drizzled with golden wildflower honey.', price: 'Ask for price', badge: 'SWEET 🍯', badgeColor: 'bg-orange', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300' },
  { name: 'Cheese with Hot Dog', desc: 'A crowd-pleaser — juicy sliced hot dogs rolled in layers of cheesy pastry dough and baked to a satisfying golden crunch.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300' },
  { name: 'Small Pastry', desc: 'Bite-sized pastry parcels filled with a chef\'s choice of savory fillings — ideal as a starter or snack.', price: 'Ask for price', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300' }
];

const juices = [
  { name: 'Mix Juice', desc: 'A tropical symphony of seasonal fruits blended into one vibrant, refreshing glass.', price: 'Ask for price', color: 'bg-gradient-to-r from-red-500 via-yellow-500 to-green-500', icon: '🍹', badge: 'POPULAR' },
  { name: 'Orange', desc: 'Pure, freshly squeezed orange juice — sunshine and vitamin C in every sip.', price: 'Ask for price', color: 'bg-[#FF8C00]', icon: '🍊' },
  { name: 'Mango', desc: 'Lusciously sweet mango, blended silky-smooth for a tropical escape.', price: 'Ask for price', color: 'bg-[#FFB347]', icon: '🥭' },
  { name: 'Mango with Milk', desc: 'Creamy mango milkshake — rich, thick, and satisfying with a velvety texture.', price: 'Ask for price', color: 'bg-[#FFD699]', icon: '🥛' },
  { name: 'Avocado', desc: 'Silky avocado blended to creamy perfection — unique, healthy, and surprisingly delicious.', price: 'Ask for price', color: 'bg-[#6B8E23]', icon: '🥑' },
  { name: 'Avocado with Milk', desc: 'An indulgent avocado milkshake with honey — smooth, creamy, and energizing.', price: 'Ask for price', color: 'bg-[#9ACD32]', icon: '🥑' },
  { name: 'Papaya', desc: 'Tropical papaya juice, naturally sweet and packed with vitamins — a refreshing choice.', price: 'Ask for price', color: 'bg-[#FF6347]', icon: '🍈' },
  { name: 'Pineapple', desc: 'Tangy, tropical, and thirst-quenching — freshly pressed pineapple at its finest.', price: 'Ask for price', color: 'bg-[#FFD700]', icon: '🍍' },
  { name: 'Banana with Milk', desc: 'The classic banana milkshake — creamy, naturally sweet, and wonderfully filling.', price: 'Ask for price', color: 'bg-[#FFE4B5]', icon: '🍌' },
  { name: 'Lemon', desc: 'Zesty, refreshing freshly squeezed lemonade — the perfect palate cleanser.', price: 'Ask for price', color: 'bg-[#FFF44F]', icon: '🍋' },
  { name: 'Watermelon', desc: 'Cool, hydrating, and naturally sweet — ideal for beating the Juba heat.', price: 'Ask for price', color: 'bg-[#FC6C85]', icon: '🍉' },
  { name: 'Guava', desc: 'Fragrant and tropical guava, blended fresh — aromatic and full of flavor.', price: 'Ask for price', color: 'bg-[#FFB6C1]', icon: '🍈' },
  { name: 'Guava with Milk', desc: 'A creamy guava milkshake with a tropical twist — smooth and irresistible.', price: 'Ask for price', color: 'bg-[#F0D5E0]', icon: '🥛' },
  { name: 'Passion Fruit', desc: 'Bold, tangy, and exotic — bursting with tropical passion fruit intensity.', price: 'Ask for price', color: 'bg-[#8B008B]', icon: '💜' },
  { name: 'Soda', desc: 'Your choice of classic chilled soft drinks.', price: 'Ask for price', color: 'bg-[#87CEEB]', icon: '🥤' },
  { name: 'Water Bottle', desc: 'Chilled purified still water.', price: 'Ask for price', color: 'bg-[#ADD8E6]', icon: '💧' },
  { name: 'Red Bull', desc: 'The classic energy boost — served ice cold.', price: 'Ask for price', color: 'bg-[#0033A0]', icon: '⚡' }
];

const desserts = [
  { name: 'Fruit Salad', desc: 'A vibrant rainbow of fresh seasonal fruits, lovingly cut and arranged — light, refreshing, and naturally sweet.', price: 'Ask for price', badge: 'HEALTHY', img: 'https://images.unsplash.com/photo-1490474418585-ba9f5272b1ea?auto=format&fit=crop&q=80&w=600' },
  { name: 'Crème Caramel', desc: 'Silky, trembling custard with a deep golden caramel crown — a timeless French-Turkish classic.', price: 'Ask for price', badge: 'POPULAR', img: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=600' },
  { name: 'Mahalabiya', desc: 'A delicate traditional Middle Eastern milk pudding, gently perfumed with rosewater, topped with crushed pistachios.', price: 'Ask for price', badge: "CHEF'S PICK", img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600' },
  { name: 'Custard', desc: 'Warm, velvety vanilla custard — comforting, rich, and lovingly made just like a homemade recipe.', price: 'Ask for price', badge: '', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600' }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('sandwiches');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-130px 0px -60% 0px' }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full overflow-hidden bg-offwhite">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[45vh] lg:h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920" 
            alt="Menu Spread" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10" />
        </div>

        <div className="relative z-20 max-w-[800px] px-6 flex flex-col items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex items-center space-x-2 mb-4 font-poppins text-[13px] text-white/60">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Menu</span>
          </motion.div>

          <h1 className="font-playfair text-[36px] lg:text-[56px] font-bold text-white mb-4 flex flex-wrap justify-center">
            {"Our Menu".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.04, duration: 0.4 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-sans text-[15px] lg:text-[18px] text-white/75 mb-6"
          >
            Explore our full range of authentic Turkish dishes, fresh juices, and irresistible desserts
          </motion.p>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="w-[100px] h-[2px] bg-gold" />
        </div>
      </section>

      {/* SECTION 2: STICKY NAV */}
      <div className="sticky top-[65px] z-[500] w-full h-[56px] bg-[#0D0D0D]/90 backdrop-blur-[10px] border-b border-gold/15 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex items-center overflow-x-auto hide-scrollbar">
        <div className="flex items-center gap-2 px-6 mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`flex items-center whitespace-nowrap rounded-full px-4 lg:px-5 py-1.5 lg:py-2 font-poppins text-[12px] lg:text-[13px] font-medium uppercase tracking-[1px] transition-all duration-200 ${
                activeCategory === cat.id ? 'bg-gold text-[#1A1A1A]' : 'bg-transparent text-white hover:bg-gold/15 hover:text-gold'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 3: SANDWICHES */}
      <section id="sandwiches" className="py-[60px] lg:py-[80px] bg-offwhite relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="mb-10">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-crimson shadow-[0_4px_15px_rgba(212,168,67,0.3)] flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🥙</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-2">Sandwiches</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[16px] text-[#777] italic mb-4">Juicy, flavorful, and made to order — choose your favorite wrap, burger, or sandwich</motion.p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-gold to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {sandwiches.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="flex h-[130px] bg-white rounded-[12px] border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-350 relative"
              >
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <div className="w-[130px] h-full shrink-0 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-poppins text-[17px] font-bold text-[#1A1A1A]">{item.name}</h3>
                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full ${item.badgeColor} text-white font-poppins text-[9px] font-bold uppercase`}>{item.badge}</span>
                    )}
                  </div>
                  <p className="font-sans text-[13px] text-[#888] leading-[1.5] line-clamp-2 mb-auto">{item.desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-poppins text-[18px] font-bold text-gold">{item.price}</span>
                    <button className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                      <span className="text-xl leading-none -mt-0.5">+</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PIZZAS */}
      <section id="pizzas" className="py-[60px] lg:py-[80px] bg-white relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="mb-10">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-crimson shadow-[0_4px_15px_rgba(212,168,67,0.3)] flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🍕</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-2">Pizzas</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[16px] text-[#777] italic mb-4">Hand-stretched, stone-baked, and loaded with your favorite toppings</motion.p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-gold to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pizzas.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white rounded-[16px] border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-gold/30 transition-all duration-400 flex flex-col"
              >
                <div className="relative h-[160px] lg:h-[200px] overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {item.badge && (
                    <div className="absolute top-4 right-4 bg-crimson text-white font-poppins text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="font-poppins text-[18px] font-bold text-[#1A1A1A] mb-2">{item.name}</h3>
                  <p className="font-sans text-[14px] text-[#777] leading-[1.6] line-clamp-3 mb-4 flex-1">{item.desc}</p>
                  <div className="w-10 h-[1px] bg-gold mx-auto mb-4" />
                  <span className="font-poppins text-[20px] font-bold text-gold">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SALADS */}
      <section id="salads" className="py-[60px] lg:py-[80px] bg-[#FAF7F2] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#6B8E23]/5" />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="mb-10">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-crimson shadow-[0_4px_15px_rgba(212,168,67,0.3)] flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🥗</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-2">Salads & Dips</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[16px] text-[#777] italic mb-4">Fresh, healthy, and bursting with authentic Turkish flavors</motion.p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-gold to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {salads.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="flex h-[130px] bg-white rounded-[12px] border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-350 relative"
              >
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <div className="w-[130px] h-full shrink-0 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-poppins text-[17px] font-bold text-[#1A1A1A]">{item.name}</h3>
                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full ${item.badgeColor || 'bg-gold text-[#1A1A1A]'} text-white font-poppins text-[9px] font-bold uppercase`}>{item.badge}</span>
                    )}
                  </div>
                  <p className="font-sans text-[13px] text-[#888] leading-[1.5] line-clamp-2 mb-auto">{item.desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-poppins text-[18px] font-bold text-gold">{item.price}</span>
                    <button className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                      <span className="text-xl leading-none -mt-0.5">+</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PASTRY */}
      <section id="pastry" className="py-[60px] lg:py-[80px] bg-white relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="mb-10">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-crimson shadow-[0_4px_15px_rgba(212,168,67,0.3)] flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🧁</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-2">Pastry</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[16px] text-[#777] italic mb-4">Flaky, golden, and filled with delicious Turkish-inspired fillings</motion.p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-gold to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {pastry.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="flex h-[130px] bg-white rounded-[12px] border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-350 relative"
              >
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <div className="w-[130px] h-full shrink-0 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-poppins text-[17px] font-bold text-[#1A1A1A]">{item.name}</h3>
                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full ${item.badgeColor || 'bg-gold text-[#1A1A1A]'} text-white font-poppins text-[9px] font-bold uppercase`}>{item.badge}</span>
                    )}
                  </div>
                  <p className="font-sans text-[13px] text-[#888] leading-[1.5] line-clamp-2 mb-auto">{item.desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-poppins text-[18px] font-bold text-gold">{item.price}</span>
                    <button className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                      <span className="text-xl leading-none -mt-0.5">+</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: JUICES */}
      <section id="juices" className="py-[60px] lg:py-[80px] bg-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="mb-10">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-crimson shadow-[0_4px_15px_rgba(212,168,67,0.3)] flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🍹</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-2">Fresh Juices & Beverages</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[16px] text-[#777] italic mb-2">Freshly pressed to order, vibrant, and refreshingly natural</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-sans text-[13px] text-[#4CAF50] italic mb-4">🍊 All our juices are made from 100% fresh fruit — no concentrates, no preservatives</motion.p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-gold to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {juices.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="bg-white rounded-[16px] p-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto rounded-full ${item.color} bg-opacity-15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-poppins text-[15px] font-bold text-[#1A1A1A] mb-1.5">{item.name}</h3>
                <p className="font-sans text-[12px] text-[#999] leading-[1.5] line-clamp-2 mb-2">{item.desc}</p>
                <span className="font-poppins text-[16px] font-bold text-gold">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DESSERTS */}
      <section id="desserts" className="py-[60px] lg:py-[80px] bg-[#FFF5E1] relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="mb-10">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-crimson shadow-[0_4px_15px_rgba(212,168,67,0.3)] flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🍰</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-[36px] font-bold text-[#1A1A1A] mb-2">Desserts</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-[16px] text-[#777] italic mb-4">The perfect sweet ending to your Mr Shawarma experience</motion.p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-gold to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {desserts.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-[20px] border border-gold/15 shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:ring-2 hover:ring-gold/30 transition-all duration-400 flex flex-col"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1 text-center -mt-4 relative z-10">
                  <h3 className="font-playfair text-[20px] italic text-[#1A1A1A] mb-2">{item.name}</h3>
                  <p className="font-sans text-[14px] text-[#777] leading-[1.6] line-clamp-3 mb-4 flex-1">{item.desc}</p>
                  <span className="font-poppins text-[18px] font-bold text-gold">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: INFO BAR */}
      <section className="bg-[#FFF5E1] border-y border-gold/20 py-6">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <Info className="w-5 h-5 text-gold mx-auto mb-3" />
          <div className="space-y-2 font-sans text-[14px] text-[#666] italic leading-[2.0]">
            <p>📋 Please inform our staff of any food allergies or dietary requirements.</p>
            <p>🥩 All our meats are 100% Halal certified.</p>
            <p>💰 Prices may vary. Please ask our friendly staff for today's specials and seasonal offerings.</p>
            <p>📞 For large group orders or catering, please call us at <a href="tel:+211911121135" className="text-gold font-bold not-italic hover:underline">+211 911 121 135</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
