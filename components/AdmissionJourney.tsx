
import React from 'react';
import { Link } from 'react-router-dom';
import { ADMISSION_STEPS } from '../constants';
import { Language } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface AdmissionJourneyProps {
  lang: Language;
}

const AdmissionJourney: React.FC<AdmissionJourneyProps> = ({ lang }) => {
  return (
      <section className="relative z-40 -mt-px min-h-screen rounded-none bg-[#550000] pt-32 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage: "url('/images/homepages/Bg-maroon.jpeg')"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-[#550000]/60" aria-hidden="true" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
        
        {/* Header Block with Symmetrical Branding */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/70 block mb-4">
              {lang === 'EN' ? 'Gateway to Excellence' : 'Gerbang Kecemerlangan'}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight drop-shadow-sm">
              {lang === 'EN' ? 'Postgraduate Experience' : 'Pengalaman Pascasiswazah'}
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-white/30 mb-4"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/55">
              UTeM SPS HUB
            </p>
          </div>
        </div>

        {/* 3x2 Premium Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ADMISSION_STEPS.map((step) => (
            <div 
              key={step.number}
              className="group bg-white hover:bg-[#670E10] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border-0 flex flex-col"
            >
              {/* Thumbnail Image */}
              <div className="-mx-1 -mt-1 aspect-[16/10] overflow-hidden relative bg-[#670E10]">
                <img 
                  src={step.imageUrl || 'https://picsum.photos/seed/utem/800/500'} 
                  alt={step.title[lang]} 
                  className="absolute -inset-1 h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)] object-cover object-center group-hover:scale-110 transition-transform duration-[2000ms]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#A51C30] shadow-lg">
                    <step.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#550000] group-hover:text-white/80 transition-colors duration-300">{step.number}</span>
                  <div className="h-px w-8 bg-gray-100 group-hover:bg-white/20 transition-colors duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#550000] mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
                  {step.title[lang]}
                </h3>
                <p className="text-gray-500 group-hover:text-white/80 text-sm font-light leading-relaxed mb-10 line-clamp-3 transition-colors duration-300">
                  {step.description[lang]}
                </p>

                <div className="mt-auto pt-6">
                  {step.number === '01' ? (
                    <a
                      href="https://www.flickr.com/photos/198669247@N05/albums/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-all duration-500"
                    >
                      <span>{lang === 'EN' ? 'View More' : 'Lihat Lagi'}</span>
                      <ArrowRight size={14} className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                  ) : (
                    <Link 
                      to={
                        step.number === '02' ? '/facilities' :
                        step.number === '03' ? '/about/staff' :
                        step.number === '04' ? '/calendar' :
                        step.number === '05' ? '/regulations' :
                        '/resources'
                      }
                      className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-all duration-500"
                    >
                      <span>{lang === 'EN' ? 'View More' : 'Lihat Lagi'}</span>
                      <ArrowRight size={14} className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
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

export default AdmissionJourney;
