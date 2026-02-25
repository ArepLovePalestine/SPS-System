
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
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        
        {/* Header Block with Symmetrical Branding */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#A51C30] block mb-4">
              {lang === 'EN' ? 'Gateway to Excellence' : 'Gerbang Kecemerlangan'}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-gray-950 tracking-tight leading-tight">
              {lang === 'EN' ? 'Postgraduate Experience' : 'Pengalaman Pascasiswazah'}
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-gray-200 mb-4"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              UTeM SPS HUB
            </p>
          </div>
        </div>

        {/* 3x2 Premium Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ADMISSION_STEPS.map((step) => (
            <div 
              key={step.number}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 flex flex-col"
            >
              {/* Thumbnail Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={step.imageUrl || 'https://picsum.photos/seed/utem/800/500'} 
                  alt={step.title[lang]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
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
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A51C30]">{step.number}</span>
                  <div className="h-px w-8 bg-gray-100"></div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 tracking-tight group-hover:text-[#A51C30] transition-colors duration-300">
                  {step.title[lang]}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-10 line-clamp-3">
                  {step.description[lang]}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50">
                  <Link 
                    to={
                      step.number === '01' ? '/gallery' :
                      step.number === '02' ? '/facilities' :
                      step.number === '03' ? '/about/staff' :
                      step.number === '04' ? '/calendar' :
                      step.number === '05' ? '/regulations' :
                      '/resources'
                    }
                    className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#A51C30] transition-all duration-500"
                  >
                    <span>{lang === 'EN' ? 'View More' : 'Lihat Lagi'}</span>
                    <ArrowRight size={14} className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA Section */}
        <div className="mt-24 py-16 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white">
              <span className="text-xs font-serif italic">i</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-900">Need immediate assistance?</p>
              <p className="text-sm text-gray-400 font-light">Contact our Graduate Helpdesk for scholarship inquiries.</p>
            </div>
          </div>
          
          <button className="px-10 py-5 bg-[#A51C30] text-white text-[10px] font-bold uppercase tracking-[0.4em] shadow-xl hover:bg-[#821626] transition-all duration-500 hover:-translate-y-1">
            {lang === 'EN' ? 'Graduate Helpdesk' : 'Meja Bantuan Siswazah'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionJourney;
