
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Calendar as CalendarIcon, Clock, MapPin, Download } from 'lucide-react';
import { Language } from '../types';

interface CalendarPageProps {
  lang: Language;
}

const CalendarPage: React.FC<CalendarPageProps> = ({ lang }) => {
  const events = [
    {
      date: 'OCT 2026',
      title: { EN: 'Semester I Registration', BM: 'Pendaftaran Semester I' },
      desc: { EN: 'Official registration period for new and returning postgraduate students.', BM: 'Tempoh pendaftaran rasmi untuk pelajar pascasiswazah baharu dan sedia ada.' }
    },
    {
      date: 'NOV 2026',
      title: { EN: 'Research Proposal Defense', BM: 'Pembelaan Cadangan Penyelidikan' },
      desc: { EN: 'Scheduled defense sessions for PhD and Master by Research candidates.', BM: 'Sesi pembelaan berjadual untuk calon PhD dan Sarjana secara Penyelidikan.' }
    },
    {
      date: 'JAN 2027',
      title: { EN: 'Final Examination Week', BM: 'Minggu Peperiksaan Akhir' },
      desc: { EN: 'Examination period for taught course and mixed mode modules.', BM: 'Tempoh peperiksaan untuk modul kerja kursus dan mod campuran.' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2070&auto=format&fit=crop" 
            alt="Calendar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <span className="text-white">{lang === 'EN' ? 'ACADEMIC CALENDAR' : 'KALENDAR AKADEMIK'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            {lang === 'EN' ? 'Important Dates' : 'Tarikh-tarikh Penting'}
          </motion.h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">
            {lang === 'EN' 
              ? 'Stay informed with the latest academic schedule and milestones.' 
              : 'Sentiasa maklum dengan jadual akademik dan pencapaian terkini.'}
          </p>
        </div>
      </section>

      {/* Calendar List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="shrink-0 w-32 h-32 bg-[#A51C30] rounded-2xl flex flex-col items-center justify-center text-white shadow-xl shadow-maroon-900/20">
                  <span className="text-xs font-bold tracking-widest opacity-70">{event.date.split(' ')[1]}</span>
                  <span className="text-3xl font-serif font-bold">{event.date.split(' ')[0]}</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{event.title[lang]}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{event.desc[lang]}</p>
                </div>
                <div className="shrink-0">
                  <button className="p-4 bg-gray-50 text-gray-400 hover:text-[#A51C30] hover:bg-gray-100 rounded-2xl transition-all">
                    <CalendarIcon size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="inline-flex items-center space-x-3 bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl">
              <Download size={16} />
              <span>{lang === 'EN' ? 'Download Full Calendar (PDF)' : 'Muat Turun Kalendar Penuh (PDF)'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-12 border-t border-gray-100 text-center">
        <Link to="/" className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest transition-colors">
          {lang === 'EN' ? 'Back to Home' : 'Kembali ke Utama'}
        </Link>
      </div>
    </div>
  );
};

export default CalendarPage;
