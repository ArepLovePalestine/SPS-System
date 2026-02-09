
import React, { useState, useEffect } from 'react';
import { SLIDES } from '@/SLIDES.1';
import { Language } from '../types';

interface HeroProps { lang: Language; }

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      {/* Cinematic Slideshow Background */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-all duration-[4500ms] cubic-bezier(0.4, 0, 0.2, 1) ${
              isActive ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-2xl'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.title}
              className={`w-full h-full object-cover transform transition-transform duration-[25000ms] ease-linear ${
                isActive ? 'scale-110' : 'scale-100'
              } brightness-[0.45] contrast-[1.1]`}
            />

            <div 
              className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-[4000ms] ${
                isActive ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/foggy-birds.png')] animate-mist opacity-30 mix-blend-overlay"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20" />
          </div>
        );
      })}

      {/* Hero Content - Matching Typography from reference image */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-4">
          
          <h1 className="text-white font-serif leading-tight tracking-tight">
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] italic font-medium animate-title-blur opacity-0 drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              School of Graduate
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] italic font-medium animate-title-blur-delayed opacity-0 -mt-4 drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              Studies
            </span>
          </h1>
          
          <div className="pt-8 overflow-hidden">
            <p className="text-white/80 text-xs sm:text-sm md:text-base font-light tracking-[0.8em] uppercase animate-subtitle-reveal opacity-0">
              {SLIDES[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Slide Navigation - Matching line style from bottom of reference image */}
      <div className="absolute bottom-12 left-0 w-full z-40 px-12 lg:px-24">
        <div className="flex items-center space-x-6">
          <div className="flex-1 h-[1px] bg-white/20 relative">
             <div 
               className="absolute top-0 left-0 h-[2px] bg-[#A51C30] transition-all duration-[9000ms] ease-linear"
               style={{ width: '100%' }}
               key={currentSlide}
             />
          </div>
          <div className="text-white font-mono text-sm tracking-widest">
            0{currentSlide + 1}
          </div>
          <div className="w-24 h-[1px] bg-white/10 hidden md:block"></div>
        </div>
      </div>

      <style>{`
        @keyframes mist {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-2%, 2%) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-mist { animation: mist 30s ease-in-out infinite; }

        @keyframes title-blur {
          0% { opacity: 0; filter: blur(30px); transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
        }
        .animate-title-blur { animation: title-blur 2.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-title-blur-delayed { animation: title-blur 3s cubic-bezier(0.19, 1, 0.22, 1) 0.4s forwards; }

        @keyframes subtitle-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-subtitle-reveal { animation: subtitle-reveal 2s cubic-bezier(0.19, 1, 0.22, 1) 1.2s forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
