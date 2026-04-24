
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, FileText, Download, ExternalLink, Library, BookOpen, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface ResourcesProps {
  lang: Language;
}

const Resources: React.FC<ResourcesProps> = ({ lang }) => {
  const categories = [
    {
      title: { EN: 'Academic Resources', BM: 'Sumber Akademik' },
      items: [
        { EN: 'Thesis Template', BM: 'Templat Tesis' },
        { EN: 'Research Proposal Guide', BM: 'Panduan Cadangan Penyelidikan' },
        { EN: 'Academic Calendar', BM: 'Kalendar Akademik' }
      ]
    },
    {
      title: { EN: 'Digital Repositories', BM: 'Repositori Digital' },
      items: [
        { EN: 'UTeM e-Prints', BM: 'e-Prints UTeM' },
        { EN: 'Library Database', BM: 'Pangkalan Data Perpustakaan' },
        { EN: 'Scholarly Journals', BM: 'Jurnal Ilmiah' }
      ]
    },
    {
      title: { EN: 'Forms & Templates', BM: 'Borang & Templat' },
      items: [
        { EN: 'Academic Forms', BM: 'Borang Akademik', href: '/resources/academic-forms' },
        { EN: 'Research Proposal Templates', BM: 'Templat Cadangan Penyelidikan', href: '/resources/research-proposal' },
        { EN: 'Thesis Forms & Templates', BM: 'Borang & Templat Tesis', href: '/resources/thesis-forms' },
        { EN: 'Financial Forms', BM: 'Borang Kewangan', href: '/resources/financial-forms' },
        { EN: 'ISO Forms & Templates', BM: 'Borang & Templat ISO', href: '/resources/iso-forms' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2070&auto=format&fit=crop" 
            alt="Resources" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <span className="text-white">{lang === 'EN' ? 'RESOURCES' : 'SUMBER'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            {lang === 'EN' ? 'Scholarly Resources' : 'Sumber Ilmiah'}
          </motion.h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">
            {lang === 'EN' 
              ? 'Access the tools and documents needed for your academic success.' 
              : 'Akses alatan dan dokumen yang diperlukan untuk kejayaan akademik anda.'}
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center space-x-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    <Library size={20} />
                  </div>
                  <span>{cat.title[lang]}</span>
                </h3>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="group">
                      {item.href ? (
                        <Link to={item.href} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <FileText size={18} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                            <span className="text-gray-600 font-light group-hover:text-gray-900 transition-colors">{item[lang]}</span>
                          </div>
                          <Download size={16} className="text-gray-300 group-hover:text-indigo-600 transition-all transform group-hover:translate-y-0.5" />
                        </Link>
                      ) : (
                        <a href="#" className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <FileText size={18} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                            <span className="text-gray-600 font-light group-hover:text-gray-900 transition-colors">{item[lang]}</span>
                          </div>
                          <Download size={16} className="text-gray-300 group-hover:text-indigo-600 transition-all transform group-hover:translate-y-0.5" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-12 border-t border-gray-100 text-center">
        <Link to="/" className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest transition-colors">
          {lang === 'EN' ? 'Back to Home' : 'Kembali ke Utama'}
        </Link>
      </div>
    </div>
  );
};

export default Resources;
