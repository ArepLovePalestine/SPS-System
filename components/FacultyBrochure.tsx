
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ExternalLink, ChevronRight, Building2, X, FileText, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface Faculty {
  id: string;
  name: { EN: string; BM: string };
  image: string;
  link: string;
  pages: string[];
}

interface FacultyBrochureProps {
  lang: Language;
}

const FacultyBrochure: React.FC<FacultyBrochureProps> = ({ lang }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faculties: Faculty[] = [
    { 
      id: 'fkm', 
      name: { EN: 'Faculty of Mechanical Engineering', BM: 'Fakulti Kejuruteraan Mekanikal' },
      image: 'https://picsum.photos/seed/fkm/800/1100',
      landscapeImage: 'https://picsum.photos/seed/fkml/1200/600',
      link: 'https://fkm.utem.edu.my',
      pages: []
    },
    { 
      id: 'fke', 
      name: { EN: 'Faculty of Electrical Engineering', BM: 'Fakulti Kejuruteraan Elektrik' },
      image: 'https://picsum.photos/seed/fke/800/1100',
      landscapeImage: 'https://picsum.photos/seed/fkel/1200/600',
      link: 'https://fke.utem.edu.my',
      pages: []
    },
    { 
      id: 'ftmk', 
      name: { EN: 'Faculty of Information & Communication Technology', BM: 'Fakulti Teknologi Maklumat & Komunikasi' },
      image: 'https://picsum.photos/seed/ftmk/800/1100',
      landscapeImage: 'https://picsum.photos/seed/ftmkl/1200/600',
      link: 'https://ftmk.utem.edu.my',
      pages: []
    },
  ];

  const content = {
    title: { EN: 'Faculty Brochure', BM: 'Broshur Fakulti' },
    subtitle: { 
      EN: 'Specific postgraduate program brochures categorized by faculty', 
      BM: 'Broshur program pascasiswazah khusus mengikut fakulti' 
    },
    downloadBtn: { EN: 'Download PDF', BM: 'Muat Turun PDF' },
    viewBtn: { EN: 'View Brochure', BM: 'Lihat Broshur' },
    closeBtn: { EN: 'Close', BM: 'Tutup' },
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="space-y-4">
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>{lang === 'EN' ? 'Student' : 'Pelajar'}</span>
              <ChevronRight size={10} />
              <span>{lang === 'EN' ? 'Future Students' : 'Bakal Pelajar'}</span>
              <ChevronRight size={10} />
              <span className="text-[#A51C30]">{content.title[lang]}</span>
            </nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif text-gray-900"
            >
              {content.title[lang]}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl text-lg font-light"
            >
              {content.subtitle[lang]}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="relative min-h-[600px] flex items-center justify-center">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {faculties.map((faculty, index) => {
                const isExpanded = expandedId === faculty.id;
                const isOtherExpanded = expandedId !== null && !isExpanded;

                return (
                  <motion.div
                    key={faculty.id}
                    layout
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className={`
                      relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col
                      ${isExpanded ? 'z-50 md:absolute md:inset-0 md:h-full md:w-full' : 'z-10'}
                      ${isOtherExpanded ? 'opacity-40 scale-95 blur-[2px]' : 'opacity-100 scale-100'}
                    `}
                  >
                    {!isExpanded ? (
                      /* Grid Card View */
                      <div className="flex flex-col h-full group">
                        <div className="aspect-[3/4] overflow-hidden relative bg-gray-100">
                          <img 
                            src={faculty.image} 
                            alt={faculty.name[lang]} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <button 
                              onClick={() => setExpandedId(faculty.id)}
                              className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center space-x-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all"
                            >
                              <FileText size={16} />
                              <span>{content.viewBtn[lang]}</span>
                            </button>
                          </div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-xl font-serif text-gray-900 leading-tight">
                            {faculty.name[lang]}
                          </h3>
                        </div>
                      </div>
                    ) : (
                      /* Expanded View (Centered Single Landscape Image) */
                      <div className="flex flex-col h-full bg-white">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-[#A51C30]/5 rounded-xl flex items-center justify-center text-[#A51C30]">
                              <Building2 size={20} />
                            </div>
                            <h2 className="text-xl font-serif text-gray-900">
                              {faculty.name[lang]}
                            </h2>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button className="flex items-center space-x-2 bg-[#A51C30] text-white px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#800000] transition-colors shadow-lg shadow-maroon-900/10">
                              <Download size={14} />
                              <span>{content.downloadBtn[lang]}</span>
                            </button>
                            <button 
                              onClick={() => setExpandedId(null)}
                              className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-colors"
                            >
                              <X size={14} />
                              <span>{content.closeBtn[lang]}</span>
                            </button>
                          </div>
                        </div>

                        {/* Centered Landscape Image */}
                        <div className="flex-grow flex items-center justify-center p-8 md:p-12 bg-gray-50/50">
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                          >
                            <img 
                              src={faculty.landscapeImage} 
                              alt="Brochure Preview" 
                              className="w-full h-auto object-contain max-h-[60vh]"
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyBrochure;
