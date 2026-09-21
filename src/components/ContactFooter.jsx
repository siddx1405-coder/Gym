import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, X, MessageSquare } from 'lucide-react';

const ContactFooter = ({ isBookingOpen, onCloseBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Home Training',
    goal: 'Weight Loss'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const message = `Hello LAX FITPRO! My name is ${formData.name}. I would like to book a free trial session for ${formData.goal} at ${formData.location}. Contact number: ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/97450619372?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      onCloseBooking();
    }, 1200);
  };

  return (
    <>
      <footer id="contact" className="bg-[#0A0A0A] border-t border-neutral-800 text-gray-300 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/img1.jpg" 
                  alt="LAX FITPRO Logo" 
                  className="h-10 w-auto object-contain rounded border border-neutral-700" 
                />
                <div>
                  <span className="text-lg font-black text-white block leading-none">
                    LAX <span className="text-[#E61C24]">FITPRO</span>
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                    Private Fitness Coach • Qatar
                  </span>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
                Certified 1-on-1 personal training tailored to your fitness goals across Doha. Available for home, gym, and outdoor training sessions with flexible scheduling.
              </p>

              <div className="pt-2 flex items-center space-x-3 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Flexible Timings • Daily Availability</span>
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
                Contact Information
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <a 
                  href="https://wa.me/97450619372" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call / WhatsApp: +974 5061 9372</span>
                </a>

                <a 
                  href="mailto:laxumantimilsina@gmail.com" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#E61C24] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E61C24]" />
                  <span>laxumantimilsina@gmail.com</span>
                </a>

                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Doha, Qatar (Home, Gym & Outdoor)</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-neutral-800 pb-2">
                Get Started Today
              </h4>
              <p className="text-xs text-gray-400">
                Ready to transform your fitness? Reserve a free trial consultation session with certified trainers.
              </p>
              
              <a
                href="https://wa.me/97450619372?text=Hello!%20I%20want%20to%20book%20a%20free%20trial%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-emerald-900/50 transition-colors w-full justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          <div className="pt-8 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} LAX FITPRO. All Rights Reserved. Private Fitness Coach Doha, Qatar.</p>
            <p className="text-[11px]">NASM & REPs Certified Training</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/97450619372?text=Hello%20LAX%20FITPRO,%20I%20am%20interested%20in%20a%20personal%20training%20trial!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Chat with Coach
        </span>
      </a>

      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#141414] border border-neutral-700 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            
            <button 
              onClick={onCloseBooking}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-neutral-800 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
              Free Trial Booking
            </span>
            <h3 className="text-2xl font-black text-white mb-2">
              Start Your Fitness Journey
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Fill out your details below to schedule your 1-on-1 trial session in Doha.
            </p>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Redirecting to WhatsApp...</h4>
                <p className="text-xs text-gray-400">Connecting you directly with Coach LAX FITPRO.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E61C24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+974 5061 9372"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E61C24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Preferred Training Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E61C24]"
                  >
                    <option value="At Your Home">At Your Home</option>
                    <option value="At Gym">At Commercial / Private Gym</option>
                    <option value="Outdoor Park">Outdoor / Park Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E61C24]"
                  >
                    <option value="Weight Loss">Weight Loss & Fat Burn</option>
                    <option value="Muscle Building">Muscle Building & Strength</option>
                    <option value="Senior Fitness">Senior Fitness & Mobility</option>
                    <option value="Cardio Stamina">Cardio & General Health</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E61C24] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all flex items-center justify-center space-x-2 mt-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Free Trial Booking</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default ContactFooter;