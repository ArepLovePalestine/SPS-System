
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import QuickAccess from './components/QuickAccess';
import TestimonialSection from './components/TestimonialSection';
import AdmissionJourney from './components/AdmissionJourney';
import SlidingFeatures from './components/SlidingFeatures';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLang(prev => prev === 'EN' ? 'BM' : 'EN');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} onToggleLanguage={toggleLanguage} />
      <main>
        {/* Page 01 */}
        <Hero lang={lang} />
        
        {/* Page 02 */}
        <InfoSection lang={lang} />
        
        {/* Page 03 - Moved here as requested */}
        <QuickAccess lang={lang} />
        
        <AdmissionJourney lang={lang} />
        <TestimonialSection lang={lang} />
        <SlidingFeatures lang={lang} />
      </main>
      
      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-24 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="font-serif text-3xl mb-4 text-[#A51C30]">UTeM SPS</h3>
            <p className="text-gray-400 font-light leading-relaxed max-w-md">
              The School of Graduate Studies at Universiti Teknikal Malaysia Melaka is a center of excellence for technical leadership and advanced research innovation.
            </p>
            <p className="text-gray-500 text-sm italic">
              Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-gray-500 mb-2">Academic Links</h4>
            <a href="#" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Academic Calendar</a>
            <a href="#" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Thesis Submission</a>
            <a href="#" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">International Students</a>
            <a href="#" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Course Registration</a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-gray-500 mb-2">Global Network</h4>
            <div className="flex space-x-6 mt-2">
              <span className="text-gray-400 cursor-pointer hover:text-[#A51C30] transition-colors text-xs uppercase tracking-widest font-bold">Facebook</span>
              <span className="text-gray-400 cursor-pointer hover:text-[#A51C30] transition-colors text-xs uppercase tracking-widest font-bold">LinkedIn</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800/50 mt-20 pt-10 flex flex-col md:row justify-between items-center text-[10px] tracking-widest uppercase font-bold text-gray-600">
          <span>© {new Date().getFullYear()} Universiti Teknikal Malaysia Melaka</span>
          <span className="mt-4 md:mt-0">Legacy of Technical Excellence</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
