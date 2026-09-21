import React from 'react';
import { Calendar, Award, Users, Target, ShieldCheck } from 'lucide-react';

const Hero = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[90vh] bg-[#0D0D0D] flex items-center pt-12 pb-20 overflow-hidden">
      
      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/hero-bg.avif" 
          alt="Personal Trainer Spotting Bench Press" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-neutral-900/90 border border-neutral-800 px-4 py-2 rounded-full shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#E61C24]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                Certified Elite Personal Training • Doha
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
              Transform Your Body <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61C24] to-red-500">
                Elevate Your Health
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Customized 1-on-1 fitness coaching, targeted strength development, and senior wellness tailored to your unique goals. Step up your performance with Coach LAX FITPRO.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#E61C24] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg shadow-red-950/50 hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Trial Session</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-gray-300 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl border border-neutral-800 transition-colors"
              >
                <span>Explore Programs</span>
              </a>
            </div>

            {/* Social Proof Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-white">100%</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Tailored Plans</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-[#E61C24]">1-on-1</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Dedicated Focus</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-white">Doha</p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">On-site / Gym</p>
              </div>
            </div>

          </div>

          {/* Right Column - Highlight Feature Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-neutral-900/90 border border-neutral-800 rounded-2xl p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                <img 
                  src="/hero-bg.avif" 
                  alt="Coach Spotting Bench Press" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-900/90 border border-neutral-800/80 rounded-xl backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#E61C24]">1-on-1 Coaching</p>
                  <h3 className="text-lg font-black text-white mt-0.5">Maximum Safety & Peak Performance</h3>
                  <p className="text-xs text-gray-400 mt-1">Get precise form correction and continuous spotting during every heavy set.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;