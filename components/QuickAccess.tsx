
import React from 'react';
import { Link } from 'react-router-dom';
import { Send, UserCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface QuickAccessProps {
  lang: Language;
}

const QuickAccess: React.FC<QuickAccessProps> = ({ lang }) => {
  const content = {
    sectionTitle: { EN: 'Quick Access', BM: 'Gerbang Akses' },
    apply: {
      title: { EN: 'Apply Now', BM: 'Mohon Sekarang' },
      desc: { 
        EN: 'Begin your postgraduate journey today. Our streamlined application process is designed for modern scholars.',
        BM: 'Mulakan perjalanan pascasiswazah anda hari ini. Proses permohonan kami direka untuk sarjana moden.'
      },
      cta: { EN: 'Online Admission', BM: 'Kemasukan Dalam Talian' }
    },
    student: {
      title: { EN: 'Student Info', BM: 'Maklumat Pelajar' },
      desc: { 
        EN: 'Access comprehensive resources, academic calendars, and personalized portals for current UTeM students.',
        BM: 'Akses sumber komprehensif, kalendar akademik, dan portal peribadi untuk pelajar UTeM sedia ada.'
      },
      cta: { EN: 'Student Portal', BM: 'Portal Pelajar' }
    }
  };

  return (
      <section className="relative z-0 -mt-[100vh] min-h-[260vh] -mb-[60vh] bg-[#050505]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Pinned section background: no translate/parallax movement is applied. */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/homepages/QuickAccess.jpeg" 
            alt="School of Graduate Studies quick access background"
            className="absolute inset-0 h-full w-full object-cover scale-105"
          />
          {/* Cinematic overlays keep text readable and let dark panels gradually cover the image. */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35"></div>
        </div>
      </div>

        <div className="relative z-10 flex min-h-screen items-center py-24 md:py-32">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <div className="flex flex-col space-y-20">
          
          {/* Section Header */}
          <div className="max-w-2xl relative">
            <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight animate-fade-in flex items-baseline">
              <span>{content.sectionTitle[lang]}</span>
            </h2>
            
            <p className="mt-6 text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">
              UTeM School of Graduate Studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Apply Now - Glass Card */}
            <div className="group relative flex flex-col p-12 lg:p-16 bg-black/35 backdrop-blur-2xl border border-white/15 hover:border-[#A51C30]/50 hover:bg-black/45 transition-all duration-700 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between mb-10">
                <div className="w-16 h-16 flex items-center justify-center bg-[#A51C30] text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Send size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono text-white/30 tracking-[0.5em] uppercase">Admission</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-serif text-white mb-6">
                {content.apply.title[lang]}
              </h3>
              
              <p className="text-white/50 font-light leading-relaxed mb-12 max-w-sm text-sm lg:text-base italic">
                {content.apply.desc[lang]}
              </p>
              
              <div className="mt-auto">
                <a
                  href="https://portal.utem.edu.my/admission/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#A51C30] hover:border-[#A51C30] transition-all duration-500 flex items-center justify-center space-x-4"
                >
                  <span>{content.apply.cta[lang]}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Student Info - Glass Card */}
            <div className="group relative flex flex-col p-12 lg:p-16 bg-black/35 backdrop-blur-2xl border border-white/15 hover:border-[#A51C30]/50 hover:bg-black/45 transition-all duration-700 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between mb-10">
                <div className="w-16 h-16 flex items-center justify-center bg-white text-black shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <UserCircle size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono text-white/30 tracking-[0.5em] uppercase">Current Scholar</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-serif text-white mb-6">
                {content.student.title[lang]}
              </h3>
              
              <p className="text-white/50 font-light leading-relaxed mb-12 max-w-sm text-sm lg:text-base italic">
                {content.student.desc[lang]}
              </p>
              
              <div className="mt-auto">
                <Link
                  to="/student/student-info"
                  className="w-full py-5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center space-x-4"
                >
                  <span>{content.student.cta[lang]}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default QuickAccess;
