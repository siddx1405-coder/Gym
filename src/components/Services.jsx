import React from 'react';
import { Flame, Dumbbell, HeartPulse, UserCheck, Utensils, Clock, Award, ShieldCheck, Users, Sparkles, ArrowRight } from 'lucide-react';

const Services = ({ onOpenBooking }) => {
  const serviceList = [
    {
      icon: <Flame className="w-6 h-6 text-[#E61C24]" />,
      title: "Weight Loss Program",
      desc: "Burn fat efficiently with custom calorie-deficit strategies and high-metabolic conditioning.",
      tag: "Popular"
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#E61C24]" />,
      title: "Muscle Building & Strength",
      desc: "Hypertrophy and progressive overload routines designed to increase strength and athletic size.",
      tag: "Core Focus"
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-[#E61C24]" />,
      title: "Cardio & Stamina",
      desc: "Boost cardiovascular endurance, lower resting heart rate, and sustain all-day energy levels.",
      tag: "Vitality"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#E61C24]" />,
      title: "1-on-1 Personal Training",
      desc: "Dedicated personal attention and posture tracking during every exercise.",
      tag: "100% Customized"
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#E61C24]" />,
      title: "Basic Diet & Nutrition Plan",
      desc: "Tailored meal guidelines to support your fitness objectives without restrictive dieting.",
      tag: "Included"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#E61C24]" />,
      title: "Free Trial Sessions",
      desc: "Experience our structured coaching firsthand before committing to a full training package.",
      tag: "No Risk"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#121212] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-full inline-block mb-3">
            Tailored Fitness Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            OUR COACHING <span className="text-[#E61C24]">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Designed for men, women, and all age groups in Doha with flexible scheduling and proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {serviceList.map((service, idx) => (
            <div 
              key={idx}
              className="bg-neutral-900/90 border border-neutral-800 hover:border-[#E61C24]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-neutral-800 rounded-xl group-hover:bg-[#E61C24]/10 transition-colors">
                  {service.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-neutral-800/80 px-2.5 py-1 rounded-md border border-neutral-700">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#E61C24] transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div id="senior-fitness" className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#1a1112] border border-neutral-800 rounded-3xl p-6 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 bg-red-950/50 border border-red-800/60 px-3 py-1 rounded-full text-xs font-semibold text-[#E61C24]">
                <Users className="w-3.5 h-3.5" />
                <span>Specialized Senior Training Program</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Fitness at Every Age: <span className="text-[#D4AF37]">Active, Healthy & Independent</span>
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                We offer safe, low-impact exercise routines specially formulated for older adults to enhance longevity and quality of life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Improve Heart Health & Circulation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Increase Mobility & Joint Flexibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Build Balance & Prevent Fall Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Boost Energy & Daily Well-Being</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center space-x-2 bg-[#E61C24] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all"
                >
                  <span>Book Senior Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl relative">
                <img 
                  src="/img7.jpg" 
                  alt="Senior Fitness Training in Qatar" 
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 text-center border-t border-neutral-700">
                  <span className="text-xs text-[#D4AF37] font-semibold">
                    1-on-1 Gentle Strength & Mobility Coaching
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
            <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-1" />
            <span className="block text-xl font-black text-white">10+ Years</span>
            <span className="text-[11px] text-gray-400">Coaching Experience</span>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-[#E61C24] mx-auto mb-1" />
            <span className="block text-xl font-black text-white">NASM</span>
            <span className="text-[11px] text-gray-400">Sports Medicine Cert.</span>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-[#E61C24] mx-auto mb-1" />
            <span className="block text-xl font-black text-white">REPs UK</span>
            <span className="text-[11px] text-gray-400">Registered Professional</span>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
            <Users className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
            <span className="block text-xl font-black text-white">Doha, Qatar</span>
            <span className="text-[11px] text-gray-400">Doorstep & Gym Service</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;