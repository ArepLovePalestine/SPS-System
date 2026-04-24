
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Users, ChevronRight, FileText, X } from 'lucide-react';
import { Language } from '../types';

interface OrganizationalChartProps {
  lang: Language;
}

const OrganizationalChart: React.FC<OrganizationalChartProps> = ({ lang }) => {
  const [isEnlargedOpen, setIsEnlargedOpen] = useState(false);
  const chartImageSrc = '/images/about-org-chart/Organization_Charttt.jpg';
  const content = {
    about: { EN: 'About Us', BM: 'Tentang Kami' },
    title: { EN: 'Organizational Chart', BM: 'Carta Organisasi' },
    subtitle: { 
      EN: 'School of Graduate Studies Leadership Structure', 
      BM: 'Struktur Kepimpinan Pusat Pengajian Siswazah' 
    },
    clickToEnlarge: { EN: 'Click to Enlarge', BM: 'Klik untuk Besarkan' },
    description: {
      EN: 'The organizational structure of the School of Graduate Studies (SPS) is designed to provide efficient management and support for all postgraduate academic and research activities at UTeM.',
      BM: 'Struktur organisasi Pusat Pengajian Siswazah (SPS) direka untuk menyediakan pengurusan dan sokongan yang cekap bagi semua aktiviti akademik dan penyelidikan pascasiswazah di UTeM.'
    },
    infoCards: {
      formatTitle: { EN: 'Format', BM: 'Format' },
      formatValue: { EN: 'PDF Document (High Resolution)', BM: 'Dokumen PDF (Resolusi Tinggi)' },
      updatedTitle: { EN: 'Last Updated', BM: 'Kemas Kini Terakhir' },
      updatedValue: { EN: 'March 2026', BM: 'Mac 2026' },
      fileSizeTitle: { EN: 'File Size', BM: 'Saiz Fail' },
      fileSizeValue: { EN: '183 KB', BM: '183 KB' }
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>{content.about[lang]}</span>
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
                {content.description[lang]}
              </motion.p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Chart Display Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 md:p-12 rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="relative group cursor-zoom-in" onClick={() => setIsEnlargedOpen(true)}>
              {/* Placeholder for the actual chart image */}
              <img 
                src={chartImageSrc} 
                alt="UTeM SPS Organizational Chart" 
                className="w-full h-auto rounded-xl shadow-sm"
              />
              
              {/* Overlay info */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2">
                  <Users size={16} className="text-[#A51C30]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                    {content.clickToEnlarge[lang]}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-50 pt-12">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#A51C30]">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">{content.infoCards.formatTitle[lang]}</h4>
                  <p className="text-gray-500 text-sm">{content.infoCards.formatValue[lang]}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#A51C30]">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">{content.infoCards.updatedTitle[lang]}</h4>
                  <p className="text-gray-500 text-sm">{content.infoCards.updatedValue[lang]}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#A51C30]">
                  <Download size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">{content.infoCards.fileSizeTitle[lang]}</h4>
                  <p className="text-gray-500 text-sm">{content.infoCards.fileSizeValue[lang]}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {isEnlargedOpen && (
        <div className="fixed inset-0 z-[220] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsEnlargedOpen(false)}
          />
          <div className="relative z-10 w-full max-w-7xl">
            <button
              type="button"
              onClick={() => setIsEnlargedOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-3 rounded-full bg-white/95 text-gray-900 shadow-lg hover:text-[#A51C30] transition-colors"
              aria-label={lang === 'EN' ? 'Close enlarged image' : 'Tutup imej diperbesarkan'}
            >
              <X size={22} />
            </button>
            <div className="bg-white/5 rounded-3xl p-3 md:p-5">
              <img
                src={chartImageSrc}
                alt="UTeM SPS Organizational Chart Enlarged"
                className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationalChart;
