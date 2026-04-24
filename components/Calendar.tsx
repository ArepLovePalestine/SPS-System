
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Download, 
  Maximize2, 
  X, 
  ExternalLink,
  Calendar as CalendarIcon,
  Info
} from 'lucide-react';
import { Language } from '../types';

interface CalendarPageProps {
  lang: Language;
}

const CalendarPage: React.FC<CalendarPageProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'S1' | 'S2'>('S1');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calendarData = {
    S1: {
      title: { EN: 'Semester 1', BM: 'Semester 1' },
      period: { EN: 'October 2026 - February 2027', BM: 'Oktober 2026 - Februari 2027' },
      image: '/images/calendar/Calendar-Sem1.png',
    },
    S2: {
      title: { EN: 'Semester 2', BM: 'Semester 2' },
      period: { EN: 'March 2027 - August 2027', BM: 'Mac 2027 - Ogos 2027' },
      image: '/images/calendar/Calendar-Sem2.png',
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Editorial Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A51C30]/[0.02] -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <motion.nav 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-12"
          >
            <Link to="/" className="hover:text-gray-900 transition-colors">HOME</Link>
            <ChevronRight size={10} className="text-gray-300" />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'ACADEMIC CALENDAR' : 'KALENDAR AKADEMIK'}</span>
          </motion.nav>

          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight tracking-tight"
            >
              Academic <br />
              <span className="text-[#A51C30] italic font-normal">Calendar</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl"
            >
              {lang === 'EN' 
                ? 'View the official academic schedule for postgraduate programmes. Stay informed with critical semester dates and registration windows.' 
                : 'Lihat jadual akademik rasmi untuk program pascasiswazah. Sentiasa maklum dengan tarikh semester yang kritikal dan tempoh pendaftaran.'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Interactive Interactive Content */}
      <section className="py-24 max-w-[1400px] mx-auto px-8 lg:px-12">
        
        {/* Tab Selection */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-gray-100 rounded-2xl">
            {(['S1', 'S2'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-white text-[#A51C30] shadow-xl shadow-gray-200/50' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {calendarData[tab].title[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Container */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-gray-100 rounded-[3rem] p-12 md:p-16 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              {/* Image Preview Window */}
              <div 
                onClick={() => setIsModalOpen(true)}
                className="relative aspect-auto min-h-[600px] rounded-[2rem] overflow-hidden bg-gray-50 cursor-zoom-in group shadow-inner"
              >
                <img 
                  src={calendarData[activeTab].image} 
                  alt={calendarData[activeTab].title[lang]}
                  className="w-full h-full object-contain transform transition-transform duration-[2000ms] group-hover:scale-105"
                />
                
                {/* Overlay Feedback */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </div>

              {/* Information Bar */}
              <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-gray-50">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-gray-900">
                    {calendarData[activeTab].title[lang]} Schedule
                  </h3>
                  <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-400">
                    <CalendarIcon size={14} className="text-[#A51C30]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{calendarData[activeTab].period[lang]}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button className="px-8 py-5 bg-gray-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#A51C30] transition-all shadow-xl hover:shadow-red-900/20 flex items-center space-x-3">
                    <Download size={14} />
                    <span>{lang === 'EN' ? 'Download PDF' : 'Muat Turun PDF'}</span>
                  </button>
                  <button className="px-8 py-5 bg-gray-50 text-gray-900 border border-gray-100 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-gray-200 transition-all flex items-center space-x-3">
                    <ExternalLink size={14} />
                    <span>{lang === 'EN' ? 'Full Schedule' : 'Jadual Penuh'}</span>
                  </button>
                </div>
              </div>

              {/* Subtle Decorative Side ID */}
              <div className="absolute left-0 top-1/2 -rotate-90 -translate-x-12 translate-y-1/2 hidden xl:block">
                <span className="text-[10px] font-bold text-gray-200 uppercase tracking-[1em]">UTEM-SPS-AD-2026</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Advisory Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm flex items-start space-x-8">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
              <Info size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Academic Registration Policy</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Please note that dates are subject to change by the University Senate. Scholars are advised to check their student portal regularly for the most up-to-date information regarding registration and deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal / Lightbox */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm p-4 md:p-12 flex items-center justify-center"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
            >
              <img 
                src={calendarData[activeTab].image} 
                className="max-h-full max-w-full object-contain shadow-2xl"
                alt="Modal View"
              />
              <p className="mt-8 text-[11px] font-bold text-white/40 uppercase tracking-[0.5em]">
                {calendarData[activeTab].title[lang]} • Institutional Academic Master Calendar
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="py-12 text-center bg-white border-t border-gray-50">
        <Link to="/" className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-[0.4em] transition-all">
          Back to Institutional Hub
        </Link>
      </div>
    </div>
  );
};

export default CalendarPage;
