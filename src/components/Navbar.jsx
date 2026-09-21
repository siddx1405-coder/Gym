import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img 
              src="/img1.jpg" 
              alt="LAX FITPRO Logo" 
              className="h-12 w-auto object-contain rounded border border-neutral-700" 
            />
            <div>
              <span className="text-xl font-black text-white tracking-tight block leading-none">
                LAX <span className="text-[#E61C24]">FITPRO</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                Personal Coaching • Doha
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#E61C24] transition-colors"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#E61C24] transition-colors"
            >
              Services
            </a>
            <a 
              href="#senior-fitness" 
              onClick={(e) => handleNavClick(e, 'senior-fitness')}
              className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              Senior Fitness
            </a>
            <a 
              href="#health-hub" 
              onClick={(e) => handleNavClick(e, 'health-hub')}
              className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#E61C24] transition-colors"
            >
              Health Hub
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#E61C24] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/97450619372"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/80 px-3.5 py-2 rounded-xl hover:bg-emerald-900/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>5061 9372</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center space-x-2 bg-[#E61C24] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-md shadow-red-950/40"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Trial</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg bg-neutral-900 border border-neutral-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="block text-sm font-bold uppercase text-gray-300 hover:text-[#E61C24] py-2 border-b border-neutral-800/50"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="block text-sm font-bold uppercase text-gray-300 hover:text-[#E61C24] py-2 border-b border-neutral-800/50"
          >
            Services
          </a>
          <a
            href="#senior-fitness"
            onClick={(e) => handleNavClick(e, 'senior-fitness')}
            className="block text-sm font-bold uppercase text-[#D4AF37] py-2 border-b border-neutral-800/50"
          >
            Senior Fitness
          </a>
          <a
            href="#health-hub"
            onClick={(e) => handleNavClick(e, 'health-hub')}
            className="block text-sm font-bold uppercase text-gray-300 hover:text-[#E61C24] py-2 border-b border-neutral-800/50"
          >
            Health Hub
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="block text-sm font-bold uppercase text-gray-300 hover:text-[#E61C24] py-2 border-b border-neutral-800/50"
          >
            Contact
          </a>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full bg-[#E61C24] text-white text-xs font-bold uppercase py-3 rounded-xl"
            >
              Book Free Trial Session
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;