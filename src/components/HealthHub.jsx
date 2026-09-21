import React, { useState } from 'react';
import { BookOpen, Eye, Sparkles, X } from 'lucide-react';

const HealthHub = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      id: 'diabetes',
      title: "How to Prevent Diabetes",
      category: "Lifestyle & Prevention",
      image: "/img5.jpg",
      summary: "Small daily habits make a big difference in preventing Type 2 diabetes through structured exercise and balanced nutrition.",
      highlights: [
        "Types of Diabetes: Type 1, Type 2, and Gestational",
        "Balanced diet rich in vegetables, fruits, and lean protein",
        "At least 150 minutes of moderate exercise per week",
        "Managing stress and prioritizing 7-8 hours of sleep"
      ]
    },
    {
      id: 'backpain',
      title: "Lower Back Pain? Move Smart",
      category: "Rehabilitation & Posture",
      image: "/img6.jpg",
      summary: "Gentle mobility exercises to reduce lower back stiffness and improve functional movement safely.",
      highlights: [
        "Pelvic Tilts: Tighten core and gently flatten lower back",
        "Knee-to-Chest Stretch: Pull knee gently to chest",
        "Glute Bridge: Lift hips, squeeze glutes, and control lower",
        "Gentle Knee Rolls: Side-to-side knee control keeping shoulders down"
      ]
    },
    {
      id: 'chest',
      title: "Chest Muscle Anatomy & Functions",
      category: "Exercise Science",
      image: "/img8.jpg",
      summary: "Understanding upper, main, and lower chest muscle groups for superior chest strength and athletic performance.",
      highlights: [
        "Upper Chest (Clavicularis), Main (Pectoralis Major), and Lower (Sternalis)",
        "Supports push movements and upper body strength",
        "Improves daily posture and athletic resistance"
      ]
    },
    {
      id: 'cholesterol',
      title: "HDL Cholesterol Explained",
      category: "Cardiovascular Health",
      image: "/img9.jpg",
      summary: "Understanding what 'good' HDL cholesterol really means and how high-density lipoproteins help carry cholesterol back to the liver.",
      highlights: [
        "HDL acts as a scavenger carrying cholesterol to the liver",
        "Supports long-term cardiovascular health",
        "Enhanced through consistent aerobic workouts and clean eating"
      ]
    },
    {
      id: 'potassium',
      title: "Potassium: The Forgotten Nutrient",
      category: "Nutrition & Electrolytes",
      image: "/img10.jpg",
      summary: "Essential mineral and electrolyte benefits for regulating fluid balance, blood pressure, and muscle contractions.",
      highlights: [
        "Supports heart health, muscle function, and nerve signaling",
        "Rich sources: Bananas, Sweet Potatoes, Spinach, Avocados, Beans",
        "Additional sources: Coconut Water, Tomatoes, Seeds, Yogurt"
      ]
    }
  ];

  return (
    <section id="health-hub" className="py-20 bg-[#0D0D0D] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-full inline-block mb-3">
            Client Education Hub
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            HEALTH & <span className="text-[#E61C24]">WELLNESS KNOWLEDGE</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            We empower our clients with actionable knowledge on nutrition, movement mechanics, and disease prevention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className="bg-neutral-900 border border-neutral-800 hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-black">
                  <img 
                    src={topic.image} 
                    alt={topic.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-neutral-700 px-2.5 py-1 rounded-md text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                    {topic.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E61C24] transition-colors mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {topic.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                <span className="flex items-center space-x-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Guide</span>
                </span>
                <Eye className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#141414] border border-neutral-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl">
            
            <button 
              onClick={() => setSelectedTopic(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-neutral-800 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
              {selectedTopic.category}
            </span>
            <h3 className="text-2xl font-black text-white mb-4 pr-10">
              {selectedTopic.title}
            </h3>

            <div className="rounded-xl overflow-hidden border border-neutral-800 mb-6 bg-black">
              <img 
                src={selectedTopic.image} 
                alt={selectedTopic.title} 
                className="w-full h-auto max-h-[450px] object-contain mx-auto"
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedTopic.summary}
              </p>

              <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E61C24] mb-2 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Educational Takeaways</span>
                </h4>
                <ul className="space-y-2">
                  {selectedTopic.highlights.map((item, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start space-x-2">
                      <span className="text-[#D4AF37] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
              <button 
                onClick={() => setSelectedTopic(null)}
                className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors"
              >
                Close Guide
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default HealthHub;