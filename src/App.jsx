import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HealthHub from './components/HealthHub';
import ContactFooter from './components/ContactFooter';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#E61C24] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <Services onOpenBooking={handleOpenBooking} />
        <HealthHub />
      </main>

      {/* Footer & Booking Modal */}
      <ContactFooter 
        isBookingOpen={isBookingOpen} 
        onCloseBooking={handleCloseBooking} 
      />
    </div>
  );
}

export default App;