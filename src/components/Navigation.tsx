import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Styles', href: '#styles' },
    { name: 'Artists', href: '#artists' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Consultation', href: '#consultation' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-lg bg-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <Heart className="w-6 h-6 text-rose-300 fill-rose-300/20 group-hover:fill-rose-300 transition-colors" />
          <span className="font-serif text-2xl font-bold tracking-wider text-white">
            Ink <span className="text-rose-300">&</span> Rose
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-rose-300 transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white font-semibold shadow-[0_0_15px_rgba(244,63,94,0.4)] hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] transform hover:scale-105 transition-all text-sm"
          >
            Book Session
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-rose-300 transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10 animate-fade-in-down">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-rose-300 text-lg font-serif"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className="text-center py-3 rounded-lg bg-rose-500/20 border border-rose-500/50 text-rose-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Your Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
