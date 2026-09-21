import React, { useState } from 'react';
import { Home, Dumbbell, Trees, CheckCircle, Shield, Award, ArrowRight, Phone } from 'lucide-react';

const Hero = ({ onOpenBooking }) => {
  const [activeLocation, setActiveLocation] = useState('home');

  const locationData = {
    home: {
      title: "Personal Training at Your Home",
      desc: "No equipment? No problem. We bring all necessary specialized workout gear directly to your doorstep in Doha.",
      image: "/img2.jpg",
      badge: "Doorstep Convenience"
    },
    gym: {
      title: "1-on-1 Coaching at Your Gym",
      desc: "Maximize your workouts at your commercial or private residential gym with certified guidance and form correction.",
      image: "/img4.jpg",
      badge: "Gym Optimization"
    },
    outdoor: {
      title: "Outdoor & Park Workouts",
      desc: "Enjoy fresh air and functional conditioning sessions at Doha’s premier outdoor locations and parks.",
      image: "/img3.jpg",
      badge: "Functional Outdoor Training"
    }
  };

  return (
    <div className="relative bg-[#0D0D0D] overflow-hidden border-b border-neutral-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E61C24]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-full">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-gray-300">
                NASM & REPs UK Certified • 10+ Years Experience
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
              TRAIN SMART. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61C24] via-red-500 to-[#D4AF37]">
                TRAIN STRONG.
              </span>
            </h1>

            <p className="text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
              Elevate your fitness with Doha’s premier private personal coaching. Tailored weight loss, muscle building, and health longevity programs delivered directly to your schedule.
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Select Your Preferred Training Location:
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md">
                <button
                  onClick={() => setActiveLocation('home')}
                  className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 px-2 sm:px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                    activeLocation === 'home'
                      ? 'bg-[#E61C24] border-[#E61C24] text-white shadow-lg shadow-red-950/50'
                      : 'bg-neutral-900 border-neutral-800 text-gray-400 hover:border-neutral-700'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>At Home</span>
                </button>

                <button
                  onClick={() => setActiveLocation('gym')}
                  className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 px-2 sm:px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                    activeLocation === 'gym'
                      ? 'bg-[#E61C24] border-[#E61C24] text-white shadow-lg shadow-red-950/50'
                      : 'bg-neutral-900 border-neutral-800 text-gray-400 hover:border-neutral-700'
                  }`}
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>At Gym</span>
                </button>

                <button
                  onClick={() => setActiveLocation('outdoor')}
                  className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 px-2 sm:px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                    activeLocation === 'outdoor'
                      ? 'bg-[#E61C24] border-[#E61C24] text-white shadow-lg shadow-red-950/50'
                      : 'bg-neutral-900 border-neutral-800 text-gray-400 hover:border-neutral-700'
                  }`}
                >
                  <Trees className="w-4 h-4" />
                  <span>Outdoor</span>
                </button>
              </div>
            </div>

            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-4 sm:p-5 max-w-xl">
              <div className="flex items-center space-x-2 text-[#D4AF37] text-xs font-bold tracking-wider uppercase mb-1">
                <Shield className="w-4 h-4" />
                <span>{locationData[activeLocation].badge}</span>
              </div>
              <h3 className="text-white text-base font-bold">
                {locationData[activeLocation].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {locationData[activeLocation].desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center space-x-2 bg-[#E61C24] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-xl hover:shadow-red-900/50 transition-all transform hover:-translate-y-0.5"
              >
                <span>Book Free Trial Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/97450619372?text=Hello%20LAX%20FITPRO,%20I%20am%20interested%20in%20a%20personal%20training%20trial!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-800/80 font-bold text-sm py-4 px-6 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: 5061 9372</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800/80">
              <div className="flex items-center space-x-2 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#E61C24]" />
                <span>1-on-1 Guidance</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#E61C24]" />
                <span>Custom Diet Plans</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#E61C24]" />
                <span>Flexible Timings</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E61C24] to-[#D4AF37] rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
                <img
                  src={locationData[activeLocation].image}
                  alt="Personal Trainer in Doha"
                  className="w-full h-[480px] object-cover object-top transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                    Doha, Qatar
                  </span>
                  <h4 className="text-white text-xl font-bold mt-1">
                    Certified Professional Coaching
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">
                    NASM & REPs Registered Trainers Available Daily
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;