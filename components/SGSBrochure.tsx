
import React from 'react';
import { motion } from 'motion/react';
import { Download, Eye, FileText, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface SGSBrochureProps {
  lang: Language;
}

const SGSBrochure: React.FC<SGSBrochureProps> = ({ lang }) => {
  const brochures = [
    { id: 1, title: 'Postgraduate Prospectus 2024', image: 'https://picsum.photos/seed/sgs1/800/1100' },
    { id: 2, title: 'Research Programs Guide', image: 'https://picsum.photos/seed/sgs2/800/1100' },
    { id: 3, title: 'Coursework Programs Guide', image: 'https://picsum.photos/seed/sgs3/800/1100' },
    { id: 4, title: 'International Student Handbook', image: 'https://picsum.photos/seed/sgs4/800/1100' },
  ];

  const content = {
    title: { EN: 'SGS Brochure', BM: 'Broshur SGS' },
    subtitle: { 
      EN: 'Official publications and guides for postgraduate studies at UTeM', 
      BM: 'Penerbitan rasmi dan panduan untuk pengajian pascasiswazah di UTeM' 
    },
    viewBtn: { EN: 'View Full', BM: 'Lihat Penuh' },
    downloadBtn: { EN: 'Download PDF', BM: 'Muat Turun PDF' }
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

      {/* Brochures Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {brochures.map((brochure, index) => (
              <motion.div
                key={brochure.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
              >
                {/* Brochure Image */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={brochure.image} 
                    alt={brochure.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex flex-col space-y-3 px-6 w-full">
                      <button className="flex items-center justify-center space-x-2 bg-white text-gray-900 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors">
                        <Eye size={16} />
                        <span>{content.viewBtn[lang]}</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 bg-[#A51C30] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#800000] transition-colors">
                        <Download size={16} />
                        <span>{content.downloadBtn[lang]}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#A51C30] mb-2">
                    <FileText size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Publication</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase leading-tight">
                    {brochure.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SGSBrochure;
