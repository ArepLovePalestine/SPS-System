
import React from 'react';
import { Link } from 'react-router-dom';
import { ACADEMIC_BLOCKS } from '../constants';
import { Language } from '../types';

interface InfoSectionProps {
  lang: Language;
}

const InfoSection: React.FC<InfoSectionProps> = ({ lang }) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        
        {/* Elite Section Header (Typography focus) */}
        <div className="text-center mb-32 flex flex-col items-center">
          <div className="h-px w-24 bg-gray-200 mb-8"></div>
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#A51C30] mb-6">
            {lang === 'EN' ? 'Global Leadership' : 'Kepimpinan Global'}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-950 tracking-tight leading-[1.1]">
            {lang === 'EN' ? 'Cultivating Intellectual Excellence' : 'Memupuk Kecemerlangan Intelek'}
          </h2>
          <p className="mt-8 text-gray-400 font-light tracking-[0.2em] uppercase text-[10px]">
            Universiti Teknikal Malaysia Melaka
          </p>
        </div>

        {/* Alternating Premium Content Blocks */}
        <div className="space-y-48">
          {ACADEMIC_BLOCKS.map((block, index) => (
            <div 
              key={block.id}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
                block.layout === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image with Luxury Accent (Requirement 4) */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative overflow-hidden aspect-[16/9] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-gray-50">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                  <img 
                    src={block.image} 
                    alt={block.title.EN}
                    className="w-full h-full object-cover transform transition-transform duration-[3000ms] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  {/* Harvard Crimson Geometry Accent */}
                  <div className={`absolute -bottom-12 ${block.layout === 'left' ? '-right-12' : '-left-12'} w-48 h-48 border border-[#A51C30]/20 rotate-45 pointer-events-none transition-transform duration-1000 group-hover:scale-150`}></div>
                </div>
              </div>

              {/* Text Body (Requirement 3 Typography) */}
              <div className="w-full lg:w-2/5 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-px w-8 bg-[#A51C30]"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">0{index + 1}</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-serif text-gray-900 tracking-tight leading-tight">
                    {block.title[lang]}
                  </h3>
                </div>
                
                <p className="text-gray-500 text-lg leading-[1.8] font-light italic serif">
                  {block.description[lang]}
                </p>

                <div className="pt-6 flex flex-wrap gap-8">
                  {block.id === 'scholarships' ? (
                    <>
                      <Link 
                        to="/apply-now"
                        className="relative inline-flex items-center text-[11px] font-bold uppercase tracking-[0.3em] text-gray-900 group"
                      >
                        <span className="mr-6 transition-all duration-300 group-hover:mr-10">{lang === 'EN' ? 'Apply Now' : 'Mohon Sekarang'}</span>
                        <div className="h-px w-12 bg-gray-200 group-hover:w-24 group-hover:bg-[#A51C30] transition-all duration-700"></div>
                      </Link>
                      <Link 
                        to="/student-info"
                        className="relative inline-flex items-center text-[11px] font-bold uppercase tracking-[0.3em] text-gray-900 group"
                      >
                        <span className="mr-6 transition-all duration-300 group-hover:mr-10">{lang === 'EN' ? 'Student Info' : 'Maklumat Pelajar'}</span>
                        <div className="h-px w-12 bg-gray-200 group-hover:w-24 group-hover:bg-[#A51C30] transition-all duration-700"></div>
                      </Link>
                    </>
                  ) : (
                    <Link 
                      to={
                        block.id === 'about' ? '/about' :
                        block.id === 'programs' ? '/programmes/dashboard' :
                        '/student-info'
                      }
                      className="relative inline-flex items-center text-[11px] font-bold uppercase tracking-[0.3em] text-gray-900 group"
                    >
                      <span className="mr-6 transition-all duration-300 group-hover:mr-10">{block.cta[lang]}</span>
                      <div className="h-px w-12 bg-gray-200 group-hover:w-24 group-hover:bg-[#A51C30] transition-all duration-700"></div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
