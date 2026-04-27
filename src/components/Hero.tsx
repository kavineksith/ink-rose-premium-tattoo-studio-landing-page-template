import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1652882861012-95f3263cab63?q=80&w=1200"
          crossOrigin="anonymous"
          alt="Tattoo Art Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-rose-900/20 mix-blend-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-rose-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse-slow delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-rose-300/30 text-rose-200 text-sm tracking-widest uppercase mb-4 animate-float">
          <Sparkles size={14} /> Premium Ladies Only Studio
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          Where Art Meets <br />
          <span className="gradient-text italic">Emotion</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          A sanctuary for self-expression. Specializing in fine-line, floral, and minimalist designs that tell your unique story.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <a
            href="#booking"
            className="group relative px-8 py-4 rounded-full bg-rose-500 text-white font-semibold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(244,63,94,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Tattoo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full glass-panel text-white font-semibold text-lg hover:bg-white/10 transition-all border border-white/20 hover:border-rose-300/50"
          >
            View Gallery
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
