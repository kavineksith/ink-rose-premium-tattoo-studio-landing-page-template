import React from 'react';

const BookingSection: React.FC = () => {
  return (
    <section id="booking" className="py-24 relative bg-black">
      {/* Glow effects */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-rose-900/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to tell <br />
            <span className="text-rose-300">Your Story?</span>
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Appointments fill up quickly. Secure your session with our master artists today. A $50 deposit is required to confirm your booking.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-3xl font-bold text-rose-300 font-serif">2k+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Happy Clients</span>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-3xl font-bold text-rose-300 font-serif">5/5</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Star Rating</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="glass-panel p-8 rounded-2xl relative">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-rose-500 rounded-full blur-3xl opacity-20"></div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-400 transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Phone</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-400 transition-colors" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-400 transition-colors" placeholder="hello@example.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Placement</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-rose-400 transition-colors">
                    <option>Arm / Sleeve</option>
                    <option>Wrist</option>
                    <option>Back / Spine</option>
                    <option>Ribs</option>
                    <option>Leg / Ankle</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Style</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-rose-400 transition-colors">
                    <option>Fine Line</option>
                    <option>Floral</option>
                    <option>Minimalist</option>
                    <option>Script</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-gray-500">Describe Your Idea</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-400 transition-colors h-24" placeholder="Size, details, meaning..."></textarea>
              </div>

              <button type="button" className="w-full py-4 rounded-lg bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all transform hover:-translate-y-1">
                Request Appointment
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                We respect your privacy. Your details are safe with us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
