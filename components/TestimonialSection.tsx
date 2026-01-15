
import React, { useState, useEffect, useCallback } from 'react';
import { GRADUATE_TESTIMONIALS } from '../constants';
import { Language } from '../types';

interface TestimonialSectionProps {
  lang: Language;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % GRADUATE_TESTIMONIALS.length);
      setIsAnimating(false);
    }, 600); // Half of the CSS transition duration
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = GRADUATE_TESTIMONIALS[activeIndex];

  return (
    <section className="py-32 bg-[#F9F7F5] overflow-hidden relative group">
      {/* Background Decorative Wavy Pattern (subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500 L1000,1000 L0,1000 Z" fill="#A51C30" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto px-8 relative z-10">
        
        {/* Top Section: Logos and Title info */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full">
            
            {/* Graduate Portrait with Transition */}
            <div className="relative flex-shrink-0">
              <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-white shadow-xl overflow-hidden bg-gray-200 transition-all duration-1000 ease-in-out ${
                isAnimating ? 'opacity-0 scale-90 blur-lg -translate-x-10' : 'opacity-100 scale-100 blur-0 translate-x-0'
              }`}>
                <img 
                  src={current.image} 
                  alt={current.name}
                  className="w-full h-full object-cover grayscale-[0.2]"
                />
              </div>
              {/* Speech bubble tail pointer */}
              <div className="absolute -bottom-4 right-12 w-8 h-8 bg-[#A51C30] rotate-45 transform origin-center hidden md:block"></div>
            </div>

            {/* Title and Bullet Info with Transition */}
            <div className={`flex-1 space-y-6 text-center md:text-left pt-4 transition-all duration-1000 delay-75 ease-in-out ${
              isAnimating ? 'opacity-0 translate-x-10 blur-sm' : 'opacity-100 translate-x-0 blur-0'
            }`}>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-800 leading-[0.9] tracking-tight">
                Graduates<br />Testimonial
              </h2>
              
              <ul className="space-y-2 text-gray-700 font-medium text-lg md:text-xl">
                <li className="flex items-center justify-center md:justify-start">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-4"></span>
                  {current.name}
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-4"></span>
                  {current.location}
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-4 mt-2"></span>
                  <span>{current.degree}<br /><span className="text-gray-500">({current.batch})</span></span>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-4 mt-2"></span>
                  <span>{current.position} {current.company}</span>
                </li>
              </ul>
            </div>

            {/* University Logos (Top Right) */}
            <div className="hidden lg:flex flex-col items-end gap-2 opacity-80">
               <div className="flex items-center gap-4">
                 <div className="h-10 w-auto">
                    <span className="font-serif font-bold text-navy-900 text-xl">UTeM</span>
                 </div>
                 <div className="w-[1px] h-8 bg-gray-300"></div>
                 <div className="h-10 w-auto">
                    <span className="font-serif font-bold text-[#A51C30] text-xl italic">SPS</span>
                 </div>
               </div>
               <span className="text-[8px] tracking-widest text-gray-400 font-bold">SCHOOL OF GRADUATE STUDIES</span>
            </div>
          </div>
        </div>

        {/* Large Quote Speech Bubble with Transition */}
        <div className={`relative bg-[#A51C30] rounded-[3rem] p-10 md:p-16 shadow-2xl transition-all duration-1000 delay-150 ease-in-out ${
          isAnimating ? 'opacity-0 scale-95 translate-y-10 blur-md' : 'opacity-100 scale-100 translate-y-0 blur-0'
        }`}>
          <p className="text-white text-lg md:text-2xl leading-[1.6] font-light text-justify md:text-left italic">
             &ldquo;{current.quote}&rdquo;
          </p>
          
          {/* Mobile tail pointer */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#A51C30] rotate-45 md:hidden"></div>
        </div>

        {/* Slide Indicators (Pagination) */}
        <div className="flex justify-center md:justify-end gap-3 mt-12 px-12">
          {GRADUATE_TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 transition-all duration-500 rounded-full ${
                idx === activeIndex ? 'w-12 bg-[#A51C30]' : 'w-4 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
