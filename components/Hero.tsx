
import React, { useEffect, useRef } from 'react';
import { Language } from '../types';
/*
import SPSLogo from '';
*/

interface HeroProps { lang: Language; }

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isAutoScrolling = useRef(false);

  const scrollToNextSection = () => {
    if (isAutoScrolling.current) return;
    const nextSection = document.getElementById('info-section');
    if (!nextSection) return;

    isAutoScrolling.current = true;

    window.scrollTo({
      top: nextSection.getBoundingClientRect().top + window.scrollY,
      behavior: 'smooth'
    });

    window.setTimeout(() => {
      isAutoScrolling.current = false;
    }, 900);
  };

  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    if (event.deltaY <= 8 || window.scrollY > window.innerHeight * 0.35) return;
    event.preventDefault();
    scrollToNextSection();
  };

  useEffect(() => {
    const handleGlobalWheel = (event: WheelEvent) => {
      const isNearHeroTop = window.scrollY < window.innerHeight * 0.35;
      if (event.deltaY <= 8 || !isNearHeroTop || isAutoScrolling.current) return;

      event.preventDefault();
      scrollToNextSection();
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleGlobalWheel);
  }, []);

  return (
      <section
        className="fixed inset-x-0 top-0 z-0 h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center"
        onWheel={handleWheel}
      >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover transform-gpu"
          src="/images/homepages/SPS_mainVideo2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>

      {/* Premium vertical overlay: darker top, lighter bottom for readability. */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.34) 35%, rgba(0, 0, 0, 0.18) 70%, rgba(0, 0, 0, 0.08) 100%)'
        }}
        aria-hidden="true"
      />
  
      

      {/* Cinematic bottom accent line */}
      <div className="absolute bottom-12 left-0 w-full z-40 px-12 lg:px-24">
        <div className="flex items-center space-x-6">
          <div className="flex-1 h-[1px] bg-white/20 relative">
             <div 
               className="absolute top-0 left-0 h-[2px] bg-[#A51C30]"
               style={{ width: '100%' }}
             />
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
           @keyframes hero-wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-hero-wave { animation: hero-wave 18s linear infinite; }
        .animate-hero-wave-slow { animation: hero-wave 28s linear infinite reverse; }
      `}</style>
    </section>
  );
};

export default Hero;
