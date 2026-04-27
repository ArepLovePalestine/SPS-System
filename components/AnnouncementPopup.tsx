
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { X, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface AnnouncementPopupProps {
  lang: Language;
}

const AnnouncementPopup: React.FC<AnnouncementPopupProps> = ({ lang }) => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [currentPoster, setCurrentPoster] = useState(0);

  useEffect(() => {
    const isHomePage = location.pathname === '/';
    const cameFromAnotherPage = previousPath.current !== '/' && isHomePage;

    previousPath.current = location.pathname;

    if (!isHomePage) {
      setIsOpen(false);
      return;
    }

    setCurrentPoster(0);
    setShowHint(true);

    const popupTimer = setTimeout(() => {
      setIsOpen(true);
    }, cameFromAnotherPage ? 500 : 1000);

    const hintTimer = setTimeout(() => {
      setShowHint(false);
    }, 4500);

    return () => {
      clearTimeout(popupTimer);
      clearTimeout(hintTimer);
    };
  }, [location.pathname]);

  const posters = [
    "/images/homepages/Note/ImportantNote-optimized.jpg",
    "/images/homepages/Announcement/poster-optimized.jpg",
    "/images/homepages/Announcement/poster-3-optimized.jpg"
  ];

  useEffect(() => {
    posters.forEach((poster) => {
      const image = new Image();
      image.src = poster;
      image.decode?.().catch(() => undefined);
    });
  }, []);

  const goToPreviousPoster = () => {
    setCurrentPoster((current) => (current - 1 + posters.length) % posters.length);
  };

  const goToNextPoster = () => {
    setCurrentPoster((current) => (current + 1) % posters.length);
  };

  return (
    <>
      {/* Floating Reopen Button */}
      <div className="fixed bottom-8 right-8 z-40 flex items-center gap-3">
        <AnimatePresence>
          {showHint && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block rounded-2xl border border-[#A51C30]/10 bg-white/95 px-4 py-3 text-right shadow-xl shadow-black/10 backdrop-blur-md"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A51C30]">
                {lang === 'EN' ? 'Important notice' : 'Notis penting'}
              </p>
              <p className="mt-1 text-xs font-medium text-gray-600">
                {lang === 'EN' ? 'Click for latest updates' : 'Klik untuk maklumat terkini'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            setShowHint(false);
            setIsOpen(true);
          }}
          className="relative w-16 h-16 bg-[#A51C30] text-white rounded-full shadow-2xl shadow-[#A51C30]/25 flex items-center justify-center group animate-announcement-glow"
          title="Announcement"
        >
          <Megaphone size={24} className="group-hover:rotate-12 transition-transform" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-3 py-1 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {lang === 'EN' ? 'Announcement' : 'Pengumuman'}
          </div>

          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-notice-dot rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-white"></span>
            </span>
          )}
        </motion.button>
      </div>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[24px] shadow-2xl overflow-hidden flex items-center justify-center"
              style={{ maxWidth: '82vw', maxHeight: '84vh' }}
            >
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-end p-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg transition-all group hover:bg-[#A51C30] hover:text-white"
                  aria-label={lang === 'EN' ? 'Close announcement' : 'Tutup pengumuman'}
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              {/* Poster Image Container */}
              <div
                className="relative w-full h-full overflow-hidden bg-gray-100 flex items-center justify-center p-4 pt-14 pb-20 md:p-6 md:pt-16 md:pb-24"
                style={{ maxWidth: '82vw', maxHeight: '84vh' }}
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={posters[currentPoster]}
                    src={posters[currentPoster]}
                    alt={`SGS announcement and important notice ${currentPoster + 1}`}
                    className="block object-contain will-change-transform"
                    style={{ maxWidth: '78vw', maxHeight: '62vh' }}
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="async"
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -14 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>

                {posters.length > 1 && (
                  <>
                    <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white px-3 py-2 shadow-lg">
                      <button
                        type="button"
                        onClick={goToPreviousPoster}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition hover:bg-[#A51C30] hover:text-white"
                        aria-label={lang === 'EN' ? 'Previous announcement' : 'Pengumuman sebelumnya'}
                      >
                        <ChevronLeft size={21} />
                      </button>
                      {posters.map((poster, index) => (
                        <button
                          key={poster}
                          type="button"
                          onClick={() => setCurrentPoster(index)}
                          className={`h-2 rounded-full transition-all ${
                            currentPoster === index ? 'w-6 bg-[#A51C30]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to announcement ${index + 1}`}
                        />
                      ))}
                      <button
                        type="button"
                        onClick={goToNextPoster}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition hover:bg-[#A51C30] hover:text-white"
                        aria-label={lang === 'EN' ? 'Next announcement' : 'Pengumuman seterusnya'}
                      >
                        <ChevronRight size={21} />
                      </button>
                    </div>
                  </>
                )}
                
                {/* Overlay Content (Optional/Stylistic) */}
                {/* <\div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#A51C30] text-[8px] font-bold uppercase tracking-widest rounded">Important</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">School of Graduate Studies</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                    {lang === 'EN' ? 'Postgraduate Registration Open' : 'Pendaftaran Pascasiswazah Dibuka'}
                  </h2>
                </div> */}
              </div>

              {/* Action Bar */}
              {/* <div className="p-6 bg-white flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-gray-500 text-xs font-light">
                    {lang === 'EN' 
                      ? 'Intake for Semester 1, 2026/2027 is now active.' 
                      : 'Kemasukan untuk Semester 1, 2026/2027 kini aktif.'}
                  </p>
                </div>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-none bg-[#A51C30] hover:bg-[#800000] text-white px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-lg shadow-red-900/20">
                    <Download size={14} />
                    <span>{lang === 'EN' ? 'Download Poster' : 'Muat Turun Poster'}</span>
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="flex-1 md:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all"
                  >
                    {lang === 'EN' ? 'Close' : 'Tutup'}
                  </button>
                </div>
              </div> */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style>{`
        @keyframes announcement-glow {
          0%, 100% { box-shadow: 0 18px 40px rgba(165, 28, 48, 0.22), 0 0 0 0 rgba(165, 28, 48, 0.22); }
          50% { box-shadow: 0 22px 54px rgba(165, 28, 48, 0.34), 0 0 0 10px rgba(165, 28, 48, 0.08); }
        }
        .animate-announcement-glow {
          animation: announcement-glow 3.4s ease-in-out infinite;
        }

        @keyframes notice-dot {
          0%, 100% { transform: scale(0.92); opacity: 0.48; }
          50% { transform: scale(1.25); opacity: 0.95; }
        }
        .animate-notice-dot {
          animation: notice-dot 1.9s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default AnnouncementPopup;
