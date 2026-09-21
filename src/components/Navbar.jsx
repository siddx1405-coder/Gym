import React, { useState } from 'react';
import { Calendar, Menu, X, Phone } from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#services' },
    { name: 'About Coach', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0D0D]/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with img1.jpg */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900 group-hover:border-[#E61C24] transition-all shrink-0">
              <img 
                src="/img1.jpg" 
                alt="LAX FITPRO Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white uppercase tracking-tight leading-none">
                LAX <span className="text-[#E61C24]">FITPRO</span>
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-1">
                Personal Training • Doha
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#E61C24] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/97450619372"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-neutral-900 border border-neutral-800 text-green-500 rounded-xl hover:bg-neutral-800 transition-colors"
              title="Chat on WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center space-x-2 bg-[#E61C24] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-md shadow-red-950/40"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Trial</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#E61C24] text-white font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded-lg"
            >
              Book
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-400 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-[#E61C24] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800 flex flex-col space-y-3">
            <a
              href="https://wa.me/97450619372"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-neutral-900 border border-neutral-800 text-gray-200 text-xs font-bold uppercase py-3 rounded-xl"
            >
              <Phone className="w-4 h-4 text-green-500" />
              <span>WhatsApp: +974 5061 9372</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;