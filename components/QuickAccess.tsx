
import React from 'react';
import { Send, UserCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface QuickAccessProps {
  lang: Language;
}

const QuickAccess: React.FC<QuickAccessProps> = ({ lang }) => {
  const content = {
    sectionTitle: { EN: 'Example', BM: 'Contoh' },
    apply: {
      title: { EN: 'Apply Now', BM: 'Mohon Sekarang' },
      desc: { 
        EN: 'ayat.',
        BM: 'ayat.'
      },
      cta: { EN: 'Online Admission', BM: 'Kemasukan Dalam Talian' }
    },
    student: {
      title: { EN: 'Student Info', BM: 'Maklumat Pelajar' },
      desc: { 
        EN: 'ayat',
        BM: 'ayat.'
      },
      cta: { EN: 'Student Portal', BM: 'Portal Pelajar' }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center py-32 overflow-hidden bg-[#050505]">
      {/* Background Image: Students sitting on the field / campus grass */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/picsum15/2070/1380" 
          alt="Students on Field"
          className="w-full h-full object-cover scale-105"
        />
        {/* Cinematic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
        <div className="flex flex-col space-y-20">
          
          {/* Section Header with "03" branding */}
          <div className="max-w-2xl relative">
            <div className="flex items-center space-x-6 mb-4">
              <span className="text-[12px] font-bold text-[#A51C30] tracking-[0.8em] uppercase">Page Number</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight animate-fade-in flex items-baseline">
              <span className="text-[#A51C30] mr-6 italic font-light">03</span>
              <span>{content.sectionTitle[lang]}</span>
            </h2>
            
            <p className="mt-6 text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">
              UTeM School of Graduate Studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Apply Now - Glass Card */}
            <div className="group relative flex flex-col p-12 lg:p-16 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#A51C30]/50 hover:bg-white/[0.07] transition-all duration-700 shadow-2xl">
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
                <button className="w-full py-5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#A51C30] hover:border-[#A51C30] transition-all duration-500 flex items-center justify-center space-x-4">
                  <span>{content.apply.cta[lang]}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Student Info - Glass Card */}
            <div className="group relative flex flex-col p-12 lg:p-16 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#A51C30]/50 hover:bg-white/[0.07] transition-all duration-700 shadow-2xl">
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
                <button className="w-full py-5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center space-x-4">
                  <span>{content.student.cta[lang]}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Large Decorative Page Number Background */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-y-1/4 translate-x-1/4">
        <span className="text-[30rem] font-serif font-black text-white leading-none select-none italic">03</span>
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
