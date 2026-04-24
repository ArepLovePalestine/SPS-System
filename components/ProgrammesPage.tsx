
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Layers, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface ProgrammesPageProps {
  lang: Language;
}

const ProgrammesPage: React.FC<ProgrammesPageProps> = ({ lang }) => {
  const masterOptions = [
    {
      title: { EN: 'Master Programme by Taught Course', BM: 'Program Sarjana secara Kerja Kursus' },
      description: { 
        EN: 'Structured learning with coursework, ideal for professional development.', 
        BM: 'Pembelajaran terstruktur dengan kerja kursus, sesuai untuk pembangunan profesional.' 
      },
      icon: BookOpen,
      path: '/programmes/master-taught',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: { EN: 'Master Programme by Research', BM: 'Program Sarjana secara Penyelidikan' },
      description: { 
        EN: 'Independent research leading to a thesis contribution in your field.', 
        BM: 'Penyelidikan bebas yang membawa kepada sumbangan tesis dalam bidang anda.' 
      },
      icon: Search,
      path: '/programmes/master-research',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: { EN: 'Master Programme by Mixed Mode', BM: 'Program Sarjana secara Mod Campuran' },
      description: { 
        EN: 'A balanced combination of coursework and research projects.', 
        BM: 'Gabungan seimbang antara kerja kursus dan projek penyelidikan.' 
      },
      icon: Layers,
      path: '/programmes/master-mixed',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  const doctoralGroup = {
    title: { EN: 'Doctoral Programmes', BM: 'Program Doktoral' },
    description: { 
      EN: 'Achieve the highest level of academic and professional excellence.', 
      BM: 'Capai tahap kecemerlangan akademik dan profesional yang tertinggi.' 
    },
    programmes: [
      'Doctor of Philosophy (PhD)',
      'Doctor of Engineering (DEng)',
      'Doctor of Technology Management (DTM)',
      'Doctor of Information Technology (DIT)'
    ],
    path: '/programmes/doctoral'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="...................." 
            alt="University Hall" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#A51C30]/95 to-[#A51C30]/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight size={12} />
              <span className="text-white">OUR PROGRAMMES</span>
            </nav>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              {lang === 'EN' ? 'Programmes Overview' : 'Gambaran Keseluruhan Program'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed"
            >
              {lang === 'EN' 
                ? 'Explore our postgraduate programmes designed to support advanced academic and research development across multiple disciplines.' 
                : 'Terokai program pascasiswazah kami yang direka untuk menyokong pembangunan akademik dan penyelidikan lanjutan merentasi pelbagai disiplin.'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Master's Programmes Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-[2px] w-12 bg-[#A51C30]" />
            <h2 className="text-3xl font-serif font-bold text-gray-900 uppercase tracking-tight">
              {lang === 'EN' ? "Master's Programmes" : 'Program Sarjana'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masterOptions.map((opt, idx) => (
              <motion.div
                key={opt.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link 
                  to={opt.path}
                  className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                >
                  <div className={`w-14 h-14 ${opt.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#A51C30] group-hover:text-white transition-all duration-500`}>
                    <opt.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-[#A51C30] transition-colors">
                    {opt.title[lang]}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow italic">
                    {opt.description[lang]}
                  </p>
                  <div className="flex items-center space-x-2 text-[10px] font-bold text-[#A51C30] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    <span>{lang === 'EN' ? 'Learn More' : 'Ketahui Lanjut'}</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctoral Programmes Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-[2px] w-12 bg-[#A51C30]" />
            <h2 className="text-3xl font-serif font-bold text-gray-900 uppercase tracking-tight">
              {lang === 'EN' ? 'Doctoral Programmes' : 'Program Doktoral'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctoralGroup.programmes.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link 
                  to={doctoralGroup.path}
                  className="group block bg-gray-50 hover:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-100 hover:border-[#A51C30]/50 transition-all duration-500 h-full"
                >
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm mb-6 flex items-center justify-center text-[#A51C30] group-hover:bg-[#A51C30] group-hover:text-white transition-all duration-500">
                    <GraduationCap size={20} />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-gray-900 group-hover:text-white transition-colors mb-4">
                    {prog}
                  </h4>
                  <div className="h-px w-8 bg-gray-200 group-hover:w-16 group-hover:bg-[#A51C30] transition-all duration-700" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammesPage;
