import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Ink & Rose</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              A premium space designed for women to express themselves through the art of ink. Safe, sterile, and supportive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-rose-400 hover:border-rose-400 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-rose-400 hover:border-rose-400 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-rose-400 hover:border-rose-400 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#hero" className="hover:text-rose-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-rose-300 transition-colors">About Us</a></li>
              <li><a href="#artists" className="hover:text-rose-300 transition-colors">Artists</a></li>
              <li><a href="#gallery" className="hover:text-rose-300 transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-rose-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>Custom Design</li>
              <li>Cover-ups</li>
              <li>Fine Line Specialization</li>
              <li>Consultations</li>
              <li>Aftercare Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-rose-400" />
                <span>123 Rosewood Ave, <br />Art District, NY 10012</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-rose-400" />
                <span>(212) 555-0199</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-rose-400" />
                <span>booking@inkandrose.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Ink & Rose Tattoo Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
