import React from 'react';
import { Link } from 'react-router-dom';
import { Send, UserCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import quickAccessBg from '../images/homepages/QuickAccess.jpeg';

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
        BM: 'Mulakan perjalanan pascasiswazah anda hari ini. Proses permohonan kami direka untuk sarjana moden.',
      },
      cta: { EN: 'Online Admission', BM: 'Kemasukan Dalam Talian' },
    },
    student: {
      title: { EN: 'Student Info', BM: 'Maklumat Pelajar' },
      desc: {
        EN: 'Access comprehensive resources, academic calendars, and personalized portals for current UTeM students.',
        BM: 'Akses sumber komprehensif, kalendar akademik, dan portal peribadi untuk pelajar UTeM sedia ada.',
      },
      cta: { EN: 'Student Portal', BM: 'Portal Pelajar' },
    },
  };

  return (
    <section className="relative h-screen overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${quickAccessBg})`,
            backgroundAttachment: 'fixed',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
      </div>

      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1400px] items-center px-8 py-20 lg:px-12 lg:py-24">
        <div className="flex w-full flex-col space-y-12 lg:space-y-16">
          <div className="relative max-w-2xl">
            <h2 className="animate-fade-in flex items-baseline text-5xl font-serif tracking-tight text-white md:text-7xl lg:text-8xl">
              <span>{content.sectionTitle[lang]}</span>
            </h2>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
              UTeM School of Graduate Studies
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
            <div className="group relative flex flex-col border border-white/15 bg-black/35 p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-700 hover:border-[#A51C30]/50 hover:bg-black/45 md:p-10 lg:p-14">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center bg-[#A51C30] text-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <Send size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30">
                  Admission
                </span>
              </div>

              <h3 className="mb-5 text-3xl font-serif text-white lg:text-4xl">
                {content.apply.title[lang]}
              </h3>

              <p className="mb-10 max-w-sm text-sm font-light italic leading-relaxed text-white/50 lg:text-base">
                {content.apply.desc[lang]}
              </p>

              <div className="mt-auto">
                <a
                  href="https://portal.utem.edu.my/admission/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center space-x-4 border border-white/10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-[#A51C30] hover:bg-[#A51C30]"
                >
                  <span>{content.apply.cta[lang]}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="group relative flex flex-col border border-white/15 bg-black/35 p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-700 hover:border-[#A51C30]/50 hover:bg-black/45 md:p-10 lg:p-14">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center bg-white text-black shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <UserCircle size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30">
                  Current Scholar
                </span>
              </div>

              <h3 className="mb-5 text-3xl font-serif text-white lg:text-4xl">
                {content.student.title[lang]}
              </h3>

              <p className="mb-10 max-w-sm text-sm font-light italic leading-relaxed text-white/50 lg:text-base">
                {content.student.desc[lang]}
              </p>

              <div className="mt-auto">
                <Link
                  to="/student/student-info"
                  className="flex w-full items-center justify-center space-x-4 border border-white/10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all duration-500 hover:bg-white hover:text-black"
                >
                  <span>{content.student.cta[lang]}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default QuickAccess;