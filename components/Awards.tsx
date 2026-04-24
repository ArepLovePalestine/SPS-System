
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Zap, 
  Leaf, 
  Trophy, 
  Star, 
} from 'lucide-react';
import { Language } from '../types';

interface AwardsProps {
  lang: Language;
}

const Awards: React.FC<AwardsProps> = ({ lang }) => {
  const tabs = [
    {
      id: 'maptep-2022',
      label: { EN: 'MAPTEP Assessment 2022', BM: 'Penilaian MAPTEP 2022' },
      image: '/images/award-pic/maptep-2022.jpeg'
    },
    {
      id: 'maptep-2023',
      label: { EN: 'MAPTEP Assessment 2023', BM: 'Penilaian MAPTEP 2023' },
      image: '/images/award-pic/maptep-2023.jpeg'
    },
    {
      id: 'maptep-2024',
      label: { EN: 'MAPTEP Assessment 2024', BM: 'Penilaian MAPTEP 2024' },
      image: '/images/award-pic/maptep-2024.jpeg'
    },
    {
      id: 'sudut-2024',
      label: { EN: 'Energy Corner Assessment 2024', BM: 'Penilaian Sudut Tenaga 2024' },
      image: '/images/award-pic/Sudut tenaga-2024.jpeg'
    },
    {
      id: 'sudut-2025',
      label: { EN: 'Energy Corner Assessment 2025', BM: 'Penilaian Sudut Tenaga 2025' },
      image: '/images/award-pic/Sudut tenaga-2025.jpeg'
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find(t => t.id === activeTab);
  const isMaptepLandscape = ['maptep-2022', 'maptep-2023', 'maptep-2024'].includes(activeTab);

  const content = {
    title: { EN: 'Awards', BM: 'Anugerah' },
    about: { EN: 'About Us', BM: 'Tentang Kami' },
    itexTitle: { EN: 'ITEX Awards', BM: 'Anugerah ITEX' },
    energyTitle: { EN: 'Energy Saving Award', BM: 'Anugerah Penjimatan Tenaga' },
    bannerCaption: {
      EN: 'Gold Medal Achievement at ITEX 2020',
      BM: 'Pencapaian Pingat Emas di ITEX 2020'
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        {/* Slanted background shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A51C30]/5 skew-x-12 transform translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#A51C30] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-900/20">
                <Trophy size={24} />
              </div>
              <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                <span>{lang === 'EN' ? 'About Us' : 'Tentang Kami'}</span>
                <ChevronRight size={10} />
                <span className="text-[#A51C30]">{content.title[lang]}</span>
              </nav>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
              {content.title[lang]}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
              {lang === 'EN' 
                ? 'Recognizing outstanding research and innovation achievements.' 
                : 'Mengiktiraf pencapaian penyelidikan dan inovasi yang cemerlang.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ITEX Awards Section */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        <div className="flex items-center space-x-4 mb-12">
          <div className="h-px flex-grow bg-gray-200"></div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 px-4">{content.itexTitle[lang]}</h2>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-14"
        >
          <figure className="relative mx-auto w-full max-w-[760px]">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-lg">
              <img 
                src="/images/award-pic/Itex Award section/ITEXAward.jpeg" 
                alt="ITEX Award" 
                className="mx-auto h-auto w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-gray-500">
              <Star size={15} className="text-[#A51C30]" fill="currentColor" />
              <span>Gold Medal Achievement - ITEX 2020</span>
            </figcaption>
          </figure>
        </motion.div>

        {/* Award Details Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[760px] overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-4 shadow-sm sm:p-6"
        >
          <img
            src="/images/award-pic/Itex Award section/list award.jpeg"
            alt={lang === 'EN' ? 'ITEX award recipient list' : 'Senarai penerima anugerah ITEX'}
            className="mx-auto h-auto w-full rounded-[1.75rem] object-contain"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Energy Saving Award Section */}
      <section className="py-16">
        <div className="flex items-center space-x-4 mb-12 max-w-7xl mx-auto px-8">
          <div className="h-px flex-grow bg-gray-200"></div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 px-4">{content.energyTitle[lang]}</h2>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>

        {/* Tabs Section */}
        <div className="max-w-5xl mx-auto px-6 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all duration-200 border ${
                  activeTab === tab.id
                    ? 'bg-[#A51C30] text-white border-[#A51C30] shadow-md'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-[#A51C30] hover:text-[#A51C30]'
                }`}
              >
                {tab.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Display Section */}
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className={`w-full ${isMaptepLandscape ? 'aspect-[16/9] bg-gray-50' : ''}`}>
                <img 
                  src={activeTabData?.image} 
                  alt={activeTabData?.label[lang]} 
                  className={`w-full ${isMaptepLandscape ? 'h-full object-contain' : 'h-auto'} block`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Awards;
