
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Megaphone, Download, Bell } from 'lucide-react';
import { Language } from '../types';

interface AnnouncementPopupProps {
  lang: Language;
}

const AnnouncementPopup: React.FC<AnnouncementPopupProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  // Auto-popup on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasOpenedOnce(true);
    }, 1000); // Small delay for better UX
    return () => clearTimeout(timer);
  }, []);

  const posterUrl = "/images/homepages/poster.jpeg";

  return (
    <>
      {/* Floating Reopen Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#A51C30] text-white rounded-full shadow-2xl flex items-center justify-center group"
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
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        )}
      </motion.button>

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
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            >
              {/* Close Button */}
               <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg transition-all group"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform" />
              </button>

              {/* Poster Image Container */}
              <div
                className="relative w-full h-full overflow-hidden bg-gray-100 flex items-center justify-center"
                style={{ maxWidth: '90vw', maxHeight: '90vh' }}
              >
                <img
                  src={posterUrl}
                  alt="SGS Registration Announcement"
                  className="block object-contain"
                  style={{ maxWidth: '90vw', maxHeight: '90vh' }}
                  referrerPolicy="no-referrer"
                />
                
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
    </>
  );
};

export default AnnouncementPopup;
