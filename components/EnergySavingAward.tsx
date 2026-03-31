
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Award, Zap, Leaf } from 'lucide-react';
import { Language } from '../types';

interface EnergySavingAwardProps {
  lang: Language;
}

const EnergySavingAward: React.FC<EnergySavingAwardProps> = ({ lang }) => {
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
    title: { EN: 'Energy Saving Award', BM: 'Anugerah Penjimatan Tenaga' },
    about: { EN: 'About Us', BM: 'Tentang Kami' },
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-4 text-center">
            <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>{content.about[lang]}</span>
              <ChevronRight size={10} />
              <span className="text-[#A51C30]">{content.title[lang]}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900">
              {content.title[lang]}
            </h1>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6">
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
      </section>

      {/* Certificate Display Section */}
      <section className="pb-16">
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

export default EnergySavingAward;
