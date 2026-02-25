
import React from 'react';
import { motion } from 'motion/react';
import { Download, Users, ChevronRight, FileText } from 'lucide-react';
import { Language } from '../types';

interface OrganizationalChartProps {
  lang: Language;
}

const OrganizationalChart: React.FC<OrganizationalChartProps> = ({ lang }) => {
  const content = {
    title: { EN: 'Organizational Chart', BM: 'Carta Organisasi' },
    subtitle: { 
      EN: 'School of Graduate Studies Leadership Structure', 
      BM: 'Struktur Kepimpinan Pusat Pengajian Siswazah' 
    },
    downloadBtn: { EN: 'Download PDF Chart', BM: 'Muat Turun Carta PDF' },
    description: {
      EN: 'The organizational structure of the School of Graduate Studies (SPS) is designed to provide efficient management and support for all postgraduate academic and research activities at UTeM.',
      BM: 'Struktur organisasi Pusat Pengajian Siswazah (SPS) direka untuk menyediakan pengurusan dan sokongan yang cekap bagi semua aktiviti akademik dan penyelidikan pascasiswazah di UTeM.'
    }
  };

  const handleDownload = () => {
    // In a real app, this would be a link to a PDF file
    alert(lang === 'EN' ? 'Downloading Organizational Chart PDF...' : 'Memuat turun PDF Carta Organisasi...');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>{lang === 'EN' ? 'About Us' : 'Tentang Kami'}</span>
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
            
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="flex items-center space-x-3 bg-[#A51C30] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-maroon-900/20 hover:bg-[#800000] transition-all"
            >
              <Download size={18} />
              <span>{content.downloadBtn[lang]}</span>
            </motion.button>
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
            <div className="relative group cursor-zoom-in">
              {/* Placeholder for the actual chart image */}
              <img 
                src="https://picsum.photos/seed/utem-org/1600/1200" 
                alt="UTeM SPS Organizational Chart" 
                className="w-full h-auto rounded-xl shadow-sm"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay info */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2">
                  <Users size={16} className="text-[#A51C30]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                    {lang === 'EN' ? 'Click to Enlarge' : 'Klik untuk Besarkan'}
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
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">Format</h4>
                  <p className="text-gray-500 text-sm">PDF Document (High Resolution)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#A51C30]">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">Last Updated</h4>
                  <p className="text-gray-500 text-sm">January 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#A51C30]">
                  <Download size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-1">File Size</h4>
                  <p className="text-gray-500 text-sm">2.4 MB</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OrganizationalChart;
