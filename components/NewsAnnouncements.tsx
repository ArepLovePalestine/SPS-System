
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import ImportantNotePoster from '/images/pages/homepages/Note/ImportantNote-optimized.jpg';
import AnnouncementPosterOne from '/images/pages/homepages/Announcement/poster-3-optimized.jpg';
import AnnouncementPosterTwo from '/images/pages/homepages/Announcement/poster-optimized.jpg';


interface Announcement {
  id: number;
  title: { EN: string; BM: string };
  date: string;
  imageUrl: string;
  link?: string;
}
/*Tambah poster baru*/
const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    title: { 
      EN: 'Postgraduate Registration and Semester Update', 
      BM: 'Pendaftaran Pascasiswazah dan Kemaskini Semester' 
    },
    date: '30 Apr 2026',
    imageUrl: AnnouncementPosterOne,
  },
  {
    id: 2,
    title: { 
      EN: 'Campus and Academic Information Update', 
      BM: 'Kemaskini Maklumat Kampus dan Akademik' 
    },
    date: '25 Apr 2026',
    imageUrl: AnnouncementPosterTwo,
  },
];

interface NewsAnnouncementsProps {
  lang: Language;
}

const NewsAnnouncements: React.FC<NewsAnnouncementsProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideTimer = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  useEffect(() => {
    if (!isPaused) {
      autoSlideTimer.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    };
  }, [isPaused]);

  return (
    <section className="overflow-hidden bg-[#f7f5f0] py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-4 mb-2">
            <div className="h-px w-8 bg-[#A51C30]"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#A51C30]">
              {lang === 'EN' ? 'Latest Update' : 'Kemaskini Terkini'}
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-serif tracking-tight text-gray-900 md:text-5xl">
            {lang === 'EN' ? 'News & Announcements' : 'Berita & Pengumuman'}
          </h2>
          <p className="text-gray-500 font-light text-xs max-w-2xl leading-relaxed">
            {lang === 'EN' 
              ? 'Stay informed with the latest notices, academic updates, and important announcements from SPS UTeM.'
              : 'Sentiasa maklum dengan notis terkini, kemaskini akademik, dan pengumuman penting daripada SPS UTeM.'}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Picture Only Card */}
          <div className="lg:col-span-4">
             <div className="overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white p-3 shadow-sm transition-shadow">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-[#f6f1e7]">
                  <img 
                    src={ImportantNotePoster}
                    alt="Notice"
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white bg-[#A51C30] px-3 py-1 rounded-full shadow-lg">
                       {lang === 'EN' ? 'Important Notice' : 'Notis Penting'}
                    </span>
                  </div>
                </div>
             </div>
          </div>

          {/* Right/Center Column: Main Slider */}
          <div className="lg:col-span-8">
            <div 
              className="relative rounded-[1.5rem] overflow-hidden bg-gray-900 shadow-xl group border-[8px] border-white"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Content */}
              <div className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-gray-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={ANNOUNCEMENTS[currentIndex].imageUrl}
                      alt={ANNOUNCEMENTS[currentIndex].title[lang]}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute bottom-6 right-6">
                      <button className="whitespace-nowrap rounded-full bg-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-900 shadow-lg transition-colors hover:bg-gray-100">
                        {lang === 'EN' ? 'View Notice' : 'Lihat Notis'}
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-0 w-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 w-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute top-8 right-8 flex items-center space-x-2">
                {ANNOUNCEMENTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      idx === currentIndex ? 'w-8 bg-[#A51C30]' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Disclaimer / Auxiliary Info */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
