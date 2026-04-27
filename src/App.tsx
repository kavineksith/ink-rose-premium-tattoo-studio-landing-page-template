import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-rose-500 selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <Features />
        
        {/* Special Offers Banner */}
        <div className="bg-gradient-to-r from-rose-900/40 to-purple-900/40 border-y border-white/5 backdrop-blur-sm py-8 overflow-hidden relative group">
           <div className="max-w-7xl mx-auto px-4 text-center">
             <p className="font-serif text-xl md:text-2xl text-rose-200">
               ✨ Special Offer: <span className="font-bold text-white">20% OFF</span> Couple Tattoos this Month ✨
             </p>
           </div>
           <div className="absolute top-0 left-0 w-full h-full bg-white/5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>

        <Gallery />
        
        {/* Artists Teaser (Simplified for this structure) */}
        <section id="artists" className="py-20 bg-black/50">
           <div className="max-w-7xl mx-auto px-4 text-center mb-12">
             <h2 className="font-serif text-4xl font-bold mb-4">Meet the <span className="text-rose-300">Artists</span></h2>
             <div className="flex flex-wrap justify-center gap-8 mt-12">
               {[
                 { name: 'Elena Rose', spec: 'Fine Line', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
                 { name: 'Sarah Ink', spec: 'Watercolor', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
                 { name: 'Maya Vibe', spec: 'Minimalist', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop' }
               ].map((artist, idx) => (
                 <div key={idx} className="glass-card p-4 rounded-xl w-64 group hover:-translate-y-2 transition-transform">
                   <div className="h-64 w-full rounded-lg overflow-hidden mb-4">
                     <img src={artist.img} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <h3 className="font-serif text-xl font-bold">{artist.name}</h3>
                   <p className="text-rose-300 text-sm">{artist.spec}</p>
                 </div>
               ))}
             </div>
           </div>
        </section>

        <BookingSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
