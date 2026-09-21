import React from 'react';
import { Dumbbell, Activity, ShieldCheck, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const Services = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-20 bg-[#0D0D0D] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#E61C24]">Training Programs</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Tailored Fitness Solutions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Whether you want to build raw strength, torch fat, or improve mobility, every session is designed explicitly around your body type and fitness goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service Card 1: Strength & Hypertrophy */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col hover:border-neutral-700 transition-all duration-300 group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/strength-training.avif" 
                alt="1-on-1 Strength Training Guidance" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#E61C24] text-white p-2.5 rounded-xl shadow-lg">
                <Dumbbell className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Strength & Body Building</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Focus on progressive overload, proper muscle activation, and strict technique refinement to build lean mass safely.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>Personalized Weightlifting Routines</span>
                  </li>
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>Form Correction & Injury Prevention</span>
                  </li>
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>Hypertrophy & Muscle Tone Focus</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center space-x-2 bg-neutral-800 hover:bg-[#E61C24] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors"
              >
                <span>Book This Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Service Card 2: Circuit & Functional Conditioning */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col hover:border-neutral-700 transition-all duration-300 group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/circuit-training.avif" 
                alt="Circuit Training and Conditioning Session" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#E61C24] text-white p-2.5 rounded-xl shadow-lg">
                <Activity className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Circuit & Fat Loss</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  High-energy conditioning sessions designed to elevate heart rate, maximize stamina, burn calories, and boost endurance.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>HIIT & Functional Movement Circuits</span>
                  </li>
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>Endurance & Athletic Agility</span>
                  </li>
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>Metabolic Rate Boosters</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center space-x-2 bg-neutral-800 hover:bg-[#E61C24] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors"
              >
                <span>Book This Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Service Card 3: Doorstep & Personal Training */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col hover:border-neutral-700 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/img2.jpg" 
                alt="LAX FITPRO Personal Fitness Trainer Doha" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#E61C24] text-white p-2.5 rounded-xl shadow-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="absolute top-4 right-4 bg-neutral-950/80 border border-neutral-800 text-xs font-bold text-gray-300 px-3 py-1 rounded-full backdrop-blur-md">
                Doorstep Service
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Doorstep Coaching • Doha</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Certified personal training brought directly to your home, outdoor location, or local gym across Doha, Qatar.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>NASM & REPs Qatar Certified</span>
                  </li>
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>Home | Outdoor | Gym Training</span>
                  </li>
                  <li className="flex items-center text-xs text-gray-300 space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E61C24] shrink-0" />
                    <span>Flexible Timings for Men & Women</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center space-x-2 bg-[#E61C24] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors"
                >
                  <span>Book Doorstep Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/97450619372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-neutral-800 hover:bg-neutral-700 text-gray-300 text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-green-500" />
                  <span>WhatsApp: +974 5061 9372</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;