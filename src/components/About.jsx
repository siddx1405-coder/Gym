import React from 'react';
import { Target, Award, CheckCircle2, ShieldAlert } from 'lucide-react';

const About = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-[#121212] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Image & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 p-2 shadow-xl">
              <img 
                src="/strength-training.avif" 
                alt="Coach LAX FITPRO guiding client form" 
                className="w-full h-80 sm:h-[420px] object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 border border-neutral-800 p-4 rounded-xl backdrop-blur-md">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#E61C24]/20 rounded-lg text-[#E61C24]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Coach LAX FITPRO</h4>
                    <p className="text-xs text-gray-400">Personal Trainer & Fitness Consultant • Doha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#E61C24]">About The Trainer</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2">
                Dedicated To Real, Sustainable Results
              </h2>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Fitness isn’t one-size-fits-all. At **LAX FITPRO**, every program is tailored specifically to your body mechanics, strength level, and daily schedule. My focus is on safe progression, precise movement technique, and keeping you accountable so you achieve noticeable, lasting changes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-2">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <Target className="w-4 h-4 text-[#E61C24]" />
                  <span>Targeted Goal Setting</span>
                </div>
                <p className="text-xs text-gray-400">
                  Custom routine building based on your exact objectives—whether muscle gain, weight loss, or functional fitness.
                </p>
              </div>

              <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-2">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E61C24]" />
                  <span>Strict Form & Technique</span>
                </div>
                <p className="text-xs text-gray-400">
                  Hands-on form monitoring to ensure maximum efficiency on every repetition while protecting your joints.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#E61C24] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md shadow-red-950/40"
              >
                Claim Free Trial Session
              </button>
              
              <a 
                href="#contact" 
                className="w-full sm:w-auto text-center text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white py-3.5 px-6"
              >
                Get In Touch →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;