
import React from 'react';
import { FEATURE_CARDS } from '../constants';
import { Language } from '../types';

interface SlidingFeaturesProps {
  lang: Language;
}

const SlidingFeatures: React.FC<SlidingFeaturesProps> = ({ lang }) => {
  // Triple the items to ensure a seamless loop
  const displayCards = [...FEATURE_CARDS, ...FEATURE_CARDS, ...FEATURE_CARDS];

  return (
    <section className="py-24 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 mb-16 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A51C30] block mb-2">The Scholar Experience</span>
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Enriching Your Academic Life</h2>
      </div>

      <div className="relative">
        <div className="flex animate-scroll hover:pause-scroll space-x-8 px-4">
          {displayCards.map((card, idx) => (
            <div 
              key={`${card.id}-${idx}`}
              className="flex-shrink-0 w-[350px] md:w-[420px] bg-white rounded-2xl p-10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-50 group hover:shadow-[0_25px_60px_-15px_rgba(165,28,48,0.12)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#A51C30] group-hover:text-white transition-colors duration-500">
                <card.icon size={32} strokeWidth={1.2} />
              </div>
              
              <h3 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-[#A51C30] transition-colors duration-300">
                {card.title[lang]}
              </h3>
              
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                {card.description[lang]}
              </p>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-[10px] font-bold uppercase tracking-widest text-[#A51C30] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span>Explore Further</span>
                <div className="ml-3 h-[1px] w-8 bg-[#A51C30]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * ${FEATURE_CARDS.length} - 2rem * ${FEATURE_CARDS.length})); }
        }
        @media (min-width: 768px) {
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-420px * ${FEATURE_CARDS.length} - 2rem * ${FEATURE_CARDS.length})); }
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .hover\:pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SlidingFeatures;