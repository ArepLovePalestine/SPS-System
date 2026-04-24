
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { GRADUATE_TESTIMONIALS } from '../constants';
import { Language } from '../types';

interface TestimonialSectionProps {
  lang: Language;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ lang }) => {
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const current = GRADUATE_TESTIMONIALS[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % GRADUATE_TESTIMONIALS.length);
    setIsExpanded(false);
  };
  const prev = () => {
    setIndex((prev) => (prev - 1 + GRADUATE_TESTIMONIALS.length) % GRADUATE_TESTIMONIALS.length);
    setIsExpanded(false);
  };

  // Auto-advance
  useEffect(() => {
    if (!isExpanded) {
      const timer = setInterval(next, 10000);
      return () => clearInterval(timer);
    }
  }, [index, isExpanded]);

  const truncateText = (text: string, limit: number = 150) => {
    if (text.length <= limit) return text;
    const sub = text.substring(0, limit);
    const lastSpace = sub.lastIndexOf(' ');
    const end = lastSpace > 0 ? lastSpace : limit;
    return text.substring(0, end) + '...';
  };

  const displayText = isExpanded ? current.quote : truncateText(current.quote);
  const showToggle = current.quote.length > 150;

  return (
    <section className="py-12 bg-white overflow-hidden relative border-y border-gray-100">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header - More Compact */}
        <div className="text-center mb-10">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#A51C30] mb-2 block">Alumni Excellence</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">
            {lang === 'EN' ? 'Graduate Success Stories' : 'Kisah Kejayaan Graduan'}
          </h2>
        </div>

        {/* Ultra-Compact Testimonial Card with Dynamic Height */}
        <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full bg-white border border-gray-100 shadow-lg p-6 md:p-10 relative flex flex-col justify-between"
            >
              {/* Smaller Decorative Quote Icon */}
              <Quote size={60} className="text-[#A51C30]/5 absolute top-2 left-2 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Even Smaller Image Profile */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-md ring-1 ring-gray-100"
                    >
                      <img 
                        src={current.image} 
                        alt={current.name} 
                        className="w-full h-full object-cover transition-all duration-500" 
                      />
                    </motion.div>
                    <div className="absolute -inset-1.5 border border-[#A51C30]/10 rounded-full" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-grow flex flex-col justify-between text-center md:text-left">
                  <div className="mb-6">
                    {/* Tighter Quote with JS Truncation */}
                    <p className="text-lg md:text-xl font-serif text-gray-800 leading-relaxed italic">
                      &ldquo;{displayText}&rdquo;
                    </p>
                    {showToggle && (
                      <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-3 text-[10px] font-bold uppercase tracking-widest text-[#A51C30] hover:opacity-70 transition-opacity"
                      >
                        {isExpanded 
                          ? (lang === 'EN' ? 'Read Less' : 'Tutup') 
                          : (lang === 'EN' ? 'Read More' : 'Cek Lanjut')}
                      </button>
                    )}
                  </div>

                  <div>
                    {/* Compact Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-50 pt-6">
                      <div className="flex items-center md:items-start space-x-2 justify-center md:justify-start">
                        <GraduationCap size={16} className="text-[#A51C30] flex-shrink-0" />
                        <div>
                          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Education</p>
                          <p className="text-[10px] font-bold text-gray-900 leading-tight">{current.degree}</p>
                        </div>
                      </div>
                      <div className="flex items-center md:items-start space-x-2 justify-center md:justify-start">
                        <Briefcase size={16} className="text-[#A51C30] flex-shrink-0" />
                        <div>
                          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Role</p>
                          <p className="text-[10px] font-bold text-gray-900 leading-tight line-clamp-1">{current.position}</p>
                          <p className="text-[8px] text-gray-500 line-clamp-1">{current.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center md:items-start space-x-2 justify-center md:justify-start">
                        <MapPin size={16} className="text-[#A51C30] flex-shrink-0" />
                        <div>
                          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Location</p>
                          <p className="text-[10px] font-bold text-gray-900 line-clamp-1">{current.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Name & Batch - Tighter */}
                    <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between">
                      <div>
                        <h4 className="text-xl font-serif font-bold text-gray-900">{current.name}</h4>
                        <p className="text-[#A51C30] text-[9px] font-bold uppercase tracking-widest">Class of {current.batch}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Compact Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 md:-mx-10">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-400 hover:text-[#A51C30] transition-all pointer-events-auto"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-400 hover:text-[#A51C30] transition-all pointer-events-auto"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Progress Dots - Smaller */}
        <div className="mt-8 flex justify-center items-center space-x-2">
          {GRADUATE_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-[#A51C30]' : 'w-1 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
