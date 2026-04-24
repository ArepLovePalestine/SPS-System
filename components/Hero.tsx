
import React, { useEffect, useRef } from 'react';
import { Language } from '../types';
import SPSLogo from '../images/homepages/SPS_logo_BW.png';

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
        className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center"
        onWheel={handleWheel}
      >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
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

      {/* Hero Content - Matching Typography from reference image */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto flex justify-center">
          <img
            src={SPSLogo}
            alt="SPS logo"
            className="w-56 sm:w-72 md:w-96 lg:w-[30rem] h-auto object-contain grayscale contrast-125 brightness-0 invert drop-shadow-[0_12px_45px_rgba(0,0,0,0.45)] animate-title-blur opacity-0"
            loading="eager"
          />
        </div>
      </div>

       {/* Animated maroon wave footer over the bottom of the hero image. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[22vh] min-h-[150px] overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 h-full w-[220%] animate-hero-wave opacity-95"
          viewBox="0 0 2400 260"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="heroMaroonFade" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#7F1425" stopOpacity="1" />
              <stop offset="45%" stopColor="#A51C30" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#A51C30" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="heroMaroonFadeSoft" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#550000" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#7F1425" stopOpacity="0.46" />
              <stop offset="100%" stopColor="#7F1425" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path
            fill="url(#heroMaroonFade)"
            d="M0,92 C220,130 360,42 590,78 C820,114 980,190 1215,135 C1450,80 1625,28 1860,82 C2095,136 2225,165 2400,110 L2400,260 L0,260 Z"
          />
        </svg>
                  <svg
          className="absolute bottom-0 left-0 h-[88%] w-[220%] animate-hero-wave-slow opacity-70"
          viewBox="0 0 2400 260"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="url(#heroMaroonFadeSoft)"
            d="M0,126 C240,84 420,148 650,108 C880,68 1010,52 1230,102 C1450,152 1630,202 1870,142 C2110,82 2240,76 2400,116 L2400,260 L0,260 Z"
          />
          </svg>
      </div>

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
