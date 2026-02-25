
import React from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, GraduationCap, ArrowRight, ChevronRight } from 'lucide-react';
import { Language, Programme } from '../types';

interface ProgrammesPageProps {
  lang: Language;
}

const programmes: Programme[] = [
  {
    id: 'phd-mechanical',
    title: { EN: 'Doctor of Philosophy in Mechanical Engineering', BM: 'Doktor Falsafah dalam Kejuruteraan Mekanikal' },
    description: { 
      EN: 'Advanced research in thermodynamics, robotics, and advanced manufacturing systems.', 
      BM: 'Penyelidikan lanjutan dalam termodinamik, robotik, dan sistem pembuatan maju.' 
    },
    image: 'https://picsum.photos/seed/phd1/800/600',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'fkm',
    category: 'phd'
  },
  {
    id: 'master-ict',
    title: { EN: 'Master of Information Technology', BM: 'Sarjana Teknologi Maklumat' },
    description: { 
      EN: 'Focus on cybersecurity, data analytics, and software engineering excellence.', 
      BM: 'Fokus pada keselamatan siber, analitik data, dan kecemerlangan kejuruteraan perisian.' 
    },
    image: 'https://picsum.photos/seed/mict/800/600',
    mode: { EN: 'Coursework', BM: 'Kerja Kursus' },
    duration: { EN: '1.5 - 3 Years', BM: '1.5 - 3 Tahun' },
    faculty: 'ftmk',
    category: 'taught'
  },
  {
    id: 'master-electronics',
    title: { EN: 'Master of Electronics Engineering', BM: 'Sarjana Kejuruteraan Elektronik' },
    description: { 
      EN: 'Specialization in microelectronics, telecommunications, and embedded systems.', 
      BM: 'Pengkhususan dalam mikroelektronik, telekomunikasi, dan sistem terbenam.' 
    },
    image: 'https://picsum.photos/seed/mele/800/600',
    mode: { EN: 'Mixed Mode', BM: 'Mod Campuran' },
    duration: { EN: '2 - 4 Years', BM: '2 - 4 Tahun' },
    faculty: 'fkekk',
    category: 'research'
  },
  {
    id: 'phd-tech-management',
    title: { EN: 'Doctor of Philosophy in Technology Management', BM: 'Doktor Falsafah dalam Pengurusan Teknologi' },
    description: { 
      EN: 'Strategic research in technopreneurship, supply chain, and innovation management.', 
      BM: 'Penyelidikan strategik dalam teknokeusahawanan, rantaian bekalan, dan pengurusan inovasi.' 
    },
    image: 'https://picsum.photos/seed/phd2/800/600',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'fptt',
    category: 'phd'
  },
  {
    id: 'master-manufacturing',
    title: { EN: 'Master of Manufacturing Engineering', BM: 'Sarjana Kejuruteraan Pembuatan' },
    description: { 
      EN: 'Advanced study in lean manufacturing, automation, and industrial engineering.', 
      BM: 'Pengajian lanjutan dalam pembuatan tanpa pembaziran, automasi, dan kejuruteraan industri.' 
    },
    image: 'https://picsum.photos/seed/mman/800/600',
    mode: { EN: 'Coursework', BM: 'Kerja Kursus' },
    duration: { EN: '1.5 - 3 Years', BM: '1.5 - 3 Tahun' },
    faculty: 'fkp',
    category: 'taught'
  },
  {
    id: 'phd-electrical',
    title: { EN: 'Doctor of Philosophy in Electrical Engineering', BM: 'Doktor Falsafah dalam Kejuruteraan Elektrik' },
    description: { 
      EN: 'Research in power systems, renewable energy, and control engineering.', 
      BM: 'Penyelidikan dalam sistem kuasa, tenaga boleh diperbaharui, dan kejuruteraan kawalan.' 
    },
    image: 'https://picsum.photos/seed/phd3/800/600',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'fke',
    category: 'phd'
  }
];

const ProgrammesPage: React.FC<ProgrammesPageProps> = ({ lang }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/utem-campus/1920/1080" 
            alt="UTeM Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#A51C30]/90 to-[#A51C30]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">
              <span>{lang === 'EN' ? 'Programmes' : 'Program'}</span>
              <ChevronRight size={12} />
              <span className="text-white">{lang === 'EN' ? 'Postgraduate' : 'Pascasiswazah'}</span>
            </nav>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]"
            >
              {lang === 'EN' ? 'Postgraduate Programmes' : 'Program Pascasiswazah'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed"
            >
              {lang === 'EN' 
                ? 'Explore Our Master\'s and PhD Opportunities' 
                : 'Terokai Peluang Sarjana dan PhD Kami'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROGRAMME GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {programmes.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={prog.image} 
                    alt={prog.title[lang]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                      <span className="text-[10px] font-bold text-[#A51C30] uppercase tracking-widest">{prog.faculty.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1.5 text-gray-500">
                      <BookOpen size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{prog.mode[lang]}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex items-center space-x-1.5 text-gray-500">
                      <Clock size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{prog.duration[lang]}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#A51C30] transition-colors duration-300">
                    {prog.title[lang]}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {prog.description[lang]}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <button className="flex items-center space-x-2 text-[11px] font-bold text-[#A51C30] uppercase tracking-[0.2em] group/btn">
                      <span>{lang === 'EN' ? 'View Details' : 'Lihat Butiran'}</span>
                      <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CALL TO ACTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-16 h-1 bg-[#A51C30] mx-auto mb-10" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              {lang === 'EN' ? 'Ready to Apply?' : 'Sedia untuk Memohon?'}
            </h2>
            <p className="text-gray-500 text-lg mb-12 font-light">
              {lang === 'EN' 
                ? 'Join our vibrant community of researchers and professionals. Start your application process today.' 
                : 'Sertai komuniti penyelidik dan profesional kami yang dinamik. Mulakan proses permohonan anda hari ini.'}
            </p>
            <button className="bg-[#A51C30] text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#800000] transition-all duration-300 shadow-xl shadow-maroon-900/20 hover:shadow-maroon-900/40 hover:-translate-y-1">
              {lang === 'EN' ? 'Apply Now' : 'Mohon Sekarang'}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammesPage;
