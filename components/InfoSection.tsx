
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { ACADEMIC_BLOCKS } from '../constants';
import { Language } from '../types';

interface InfoSectionProps {
  lang: Language;
}

const InfoSection: React.FC<InfoSectionProps> = ({ lang }) => {
  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const headerContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: smoothEase
      }
    }
  };

  const labelReveal: Variants = {
    hidden: { opacity: 0, y: 20, letterSpacing: '0.34em' },
    show: {
      opacity: 1,
      y: 0,
      letterSpacing: '0.5em',
      transition: {
        duration: 1.05,
        ease: smoothEase
      }
    }
  };

  const blockContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14
      }
    }
  };

  const imageReveal: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: smoothEase
      }
    }
  };

  const textSequence: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.28,
        staggerChildren: 0.14
      }
    }
  };

  const textSlideIn: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.85,
        ease: smoothEase
      }
    }
  };

  return (
    <section id="info-section" className="relative isolate z-[60] -mt-px pt-0 pb-32 bg-[#eceae7] overflow-hidden scroll-mt-0">
      <div
        className="pointer-events-none relative z-10 h-32 md:h-40 overflow-hidden bg-gradient-to-b from-[#550000] via-[#8f1628]/70 to-transparent"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-x-0 top-0 h-full w-[220%] animate-info-wave opacity-95"
          viewBox="0 0 2400 260"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="infoMaroonWave" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#550000" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#7F1425" stopOpacity="0.58" />
              <stop offset="100%" stopColor="#A51C30" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="infoMaroonWaveDeep" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#670E10" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#A51C30" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#A51C30" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#infoMaroonWave)"
            d="M0,0 L2400,0 L2400,118 C2190,78 2030,88 1810,112 C1590,136 1390,108 1200,68 C1010,28 820,36 610,88 C400,140 225,112 0,82 Z"
          />
        </svg>
        <svg
          className="absolute inset-x-0 top-0 h-[82%] w-[220%] animate-info-wave-slow opacity-75"
          viewBox="0 0 2400 260"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#infoMaroonWaveDeep)"
            d="M0,0 L2400,0 L2400,104 C2210,126 2015,72 1800,96 C1585,120 1400,162 1190,108 C980,54 805,80 610,112 C415,144 240,86 0,112 Z"
          />
        </svg>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-8 lg:px-12 pt-0">
        
        {/* Elite Section Header (Typography focus) */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="h-px w-24 bg-gray-200 mb-4"></div>
          <motion.span
            variants={labelReveal}
            className="text-[11px] font-bold uppercase text-[#A51C30] mb-4"
          >
            {lang === 'EN' ? 'Global Leadership' : 'Kepimpinan Global'}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl font-serif text-gray-950 tracking-tight leading-[1.1]"
          >
            {lang === 'EN' ? 'Cultivating Intellectual Excellence' : 'Memupuk Kecemerlangan Intelek'}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-400 font-light tracking-[0.2em] uppercase text-[10px]"
          >
            Universiti Teknikal Malaysia Melaka
          </motion.p>
        </motion.div>

        {/* Alternating Premium Content Blocks */}
        <div className="space-y-32">
          {ACADEMIC_BLOCKS.map((block, index) => (
            <motion.div
              key={block.id}
              variants={blockContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.28 }}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
                block.layout === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image with Luxury Accent (Requirement 4) */}
              <motion.div variants={imageReveal} className="w-full lg:w-3/5 group">
                <div className="relative overflow-hidden aspect-[16/9] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-gray-50">
                  <img 
                    src={block.image} 
                    alt={block.title.EN}
                    className="w-full h-full object-cover transform transition-transform duration-[3000ms] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  />
                </div>
              </motion.div>

              {/* Text Body (Requirement 3 Typography) */}
              <motion.div variants={textSequence} className="w-full lg:w-2/5 space-y-10">
                <div className="space-y-6">
                  <motion.div variants={textSlideIn} className="flex items-center space-x-4">
                    <div className="h-px w-8 bg-[#A51C30]"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">0{index + 1}</span>
                  </motion.div>
                  <motion.h3 variants={textSlideIn} className="text-4xl lg:text-5xl font-serif text-gray-900 tracking-tight leading-tight">
                    {block.title[lang]}
                  </motion.h3>
                </div>
                
                <motion.p variants={textSlideIn} className="text-gray-500 text-lg leading-[1.8] font-light italic serif">
                  {block.description[lang]}
                </motion.p>

                <motion.div variants={textSlideIn} className="pt-6 flex flex-wrap gap-8">
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
                        to="/student/student-info"
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
                        block.id === 'programs' ? '/programmes' :
                        '/student-info'
                      }
                      className="relative inline-flex items-center text-[11px] font-bold uppercase tracking-[0.3em] text-gray-900 group"
                    >
                      <span className="mr-6 transition-all duration-300 group-hover:mr-10">{block.cta[lang]}</span>
                      <div className="h-px w-12 bg-gray-200 group-hover:w-24 group-hover:bg-[#A51C30] transition-all duration-700"></div>
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes info-wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-info-wave { animation: info-wave 22s linear infinite; }
        .animate-info-wave-slow { animation: info-wave 32s linear infinite reverse; }
      `}</style>
    </section>
  );
};

export default InfoSection;

