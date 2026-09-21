import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HealthHub from './components/HealthHub';
import ContactFooter from './components/ContactFooter';
import { X, Calendar, User, Phone, Mail, Clock } from 'lucide-react';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Personal Training',
    preferredTime: 'Morning',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setIsSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Redirects to WhatsApp with pre-filled booking details
    const text = `Hello Coach LAX, I would like to book a free trial session.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Program:* ${encodeURIComponent(formData.program)}%0A*Preferred Time:* ${encodeURIComponent(formData.preferredTime)}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/97450619372?text=${text}`, '_blank');
      handleCloseBooking();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans antialiased selection:bg-[#E61C24] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <Services onOpenBooking={handleOpenBooking} />
        <HealthHub onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer & Contact Section */}
      <ContactFooter onOpenBooking={handleOpenBooking} />

      {/* Global Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={handleCloseBooking}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  Redirecting to WhatsApp...
                </h3>
                <p className="text-gray-300 text-sm">
                  Connecting you with Coach LAX to confirm your trial session timing.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#E61C24]">
                    Start Your Fitness Journey
                  </p>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">
                    Book Free Trial Session
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E61C24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+974 ..."
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E61C24]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E61C24]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                        Program Focus
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E61C24]"
                      >
                        <option value="Personal Training">Strength & Personal Training</option>
                        <option value="Circuit Training">Circuit & Fat Loss</option>
                        <option value="Doorstep Coaching">Doorstep Personal Coaching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-400 mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E61C24]"
                        >
                          <option value="Morning">Morning (6 AM - 11 AM)</option>
                          <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                          <option value="Evening">Evening (5 PM - 10 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-[#E61C24] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg shadow-red-950/50 mt-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Booking Request</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;