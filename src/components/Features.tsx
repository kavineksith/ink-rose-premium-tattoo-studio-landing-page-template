import React from 'react';
import { Flower2, PenTool, Heart, Sparkles, Feather, Palette } from 'lucide-react';
import type { TattooStyle } from '../types';

const styles: TattooStyle[] = [
  { id: 1, title: 'Fine Line', icon: 'PenTool', description: 'Delicate, precise, and sophisticated single-needle art.' },
  { id: 2, title: 'Floral & Nature', icon: 'Flower2', description: 'Blooming botanicals that flow with your body.' },
  { id: 3, title: 'Minimalist', icon: 'Feather', description: 'Small, meaningful symbols with powerful impact.' },
  { id: 4, title: 'Matching', icon: 'Heart', description: 'Bonding pieces for couples, besties, and soulmates.' },
  { id: 5, title: 'Spiritual', icon: 'Sparkles', description: 'Sacred geometry, zodiacs, and energy symbols.' },
  { id: 6, title: 'Watercolor', icon: 'Palette', description: 'Soft color blends mimicking painted masterpieces.' },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Flower2': return <Flower2 size={24} />;
    case 'PenTool': return <PenTool size={24} />;
    case 'Heart': return <Heart size={24} />;
    case 'Sparkles': return <Sparkles size={24} />;
    case 'Feather': return <Feather size={24} />;
    case 'Palette': return <Palette size={24} />;
    default: return <Sparkles size={24} />;
  }
};

const Features: React.FC = () => {
  return (
    <section id="styles" className="py-24 relative bg-slate-950">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Signature Styles</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            We specialize in feminine aesthetics, ensuring every piece is as unique and beautiful as you are.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {styles.map((style) => (
            <div key={style.id} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-rose-300 mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(style.icon)}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{style.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{style.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* About Split Section */}
        <div className="relative glass-panel rounded-3xl overflow-hidden grid md:grid-cols-2">
           <div className="relative h-[400px] md:h-full">
             <img 
               src="https://images.unsplash.com/photo-1652882861012-95f3263cab63?q=80&w=1200" 
               crossOrigin="anonymous"
               alt="Cozy Studio" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent"></div>
           </div>
           
           <div className="p-8 md:p-16 flex flex-col justify-center space-y-6">
              <h3 className="font-serif text-3xl md:text-4xl text-white">
                A Studio Designed for <span className="text-rose-300 italic">Comfort</span>
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Step into a sanctuary where hygiene meets high fashion. Our ladies-only studio provides a safe, welcoming environment free from the intimidation of traditional shops. 
              </p>
              <ul className="space-y-3">
                {['Female-Only Artists', 'Hospital-Grade Hygiene', 'Private Booths', 'Vegan Ink Options'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-200">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
