
import React from 'react';
import { ADMISSION_STEPS } from '../constants';
import { Language } from '../types';
import { ArrowRight } from 'lucide-react';

interface AdmissionJourneyProps {
  lang: Language;
}

const AdmissionJourney: React.FC<AdmissionJourneyProps> = ({ lang }) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        
        {/* Header Block with Symmetrical Branding */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#A51C30] block mb-4">
              {lang === 'EN' ? 'Gateway to Excellence' : 'Gerbang Kecemerlangan'}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-gray-950 tracking-tight leading-tight">
              {lang === 'EN' ? 'Your Academic Journey' : 'Perjalanan Akademik Anda'}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADMISSION_STEPS.map((step) => (
            <div 
              key={step.number}
              className="group relative flex flex-col bg-[#FDFCFB] border border-gray-100 p-10 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(165,28,48,0.12)] transition-all duration-700 cursor-pointer overflow-hidden"
            >
              {/* Step Counter Overlay (Subtle) */}
              <div className="absolute top-6 right-8 text-[60px] font-serif font-black text-gray-900/[0.03] leading-none group-hover:text-[#A51C30]/[0.05] transition-colors duration-700 select-none">
                {step.number}
              </div>

              {/* Icon Container with Circular Accent */}
              <div className="relative mb-10">
                <div className="w-16 h-16 rounded-full border border-[#A51C30]/20 flex items-center justify-center text-[#A51C30] group-hover:bg-[#A51C30] group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12">
                  <step.icon size={28} strokeWidth={1.2} />
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-gray-900 mb-4 tracking-tight group-hover:text-[#A51C30] transition-colors duration-300">
                  {step.title[lang]}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
                  {step.description[lang]}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#A51C30] transition-all duration-500">
                <span>{lang === 'EN' ? 'Access Portal' : 'Akses Portal'}</span>
                <ArrowRight size={14} className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
              </div>

              {/* Background Geometry (Hover only) */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-[#A51C30]/10 rotate-45 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-150"></div>
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
