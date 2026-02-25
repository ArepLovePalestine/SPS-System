
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Building2, ArrowRight } from 'lucide-react';
import { Language, FacultyDetail } from '../types';

interface FacultyDashboardProps {
  lang: Language;
}

export const faculties: FacultyDetail[] = [
  {
    id: 'fkm',
    shortName: 'FKM',
    fullName: { EN: 'Faculty of Mechanical Engineering', BM: 'Fakulti Kejuruteraan Mekanikal' },
    image: 'https://picsum.photos/seed/fkm_b/800/450',
    bannerImage: 'https://picsum.photos/seed/fkm_banner/1920/600'
  },
  {
    id: 'fke',
    shortName: 'FKE',
    fullName: { EN: 'Faculty of Electrical Engineering', BM: 'Fakulti Kejuruteraan Elektrik' },
    image: 'https://picsum.photos/seed/fke_b/800/450',
    bannerImage: 'https://picsum.photos/seed/fke_banner/1920/600'
  },
  {
    id: 'ftmk',
    shortName: 'FTMK',
    fullName: { EN: 'Faculty of Information & Communication Technology', BM: 'Fakulti Teknologi Maklumat & Komunikasi' },
    image: 'https://picsum.photos/seed/ftmk_b/800/450',
    bannerImage: 'https://picsum.photos/seed/ftmk_banner/1920/600'
  },
  {
    id: 'fptt',
    shortName: 'FPTT',
    fullName: { EN: 'Faculty of Technology Management & Technopreneurship', BM: 'Fakulti Pengurusan Teknologi & Teknokeusahawanan' },
    image: 'https://picsum.photos/seed/fptt_b/800/450',
    bannerImage: 'https://picsum.photos/seed/fptt_banner/1920/600'
  },
  {
    id: 'fkp',
    shortName: 'FKP',
    fullName: { EN: 'Faculty of Manufacturing Engineering', BM: 'Fakulti Kejuruteraan Pembuatan' },
    image: 'https://picsum.photos/seed/fkp_b/800/450',
    bannerImage: 'https://picsum.photos/seed/fkp_banner/1920/600'
  },
  {
    id: 'fkekk',
    shortName: 'FKEKK',
    fullName: { EN: 'Faculty of Electronics & Computer Engineering', BM: 'Fakulti Kejuruteraan Elektronik & Kejuruteraan Komputer' },
    image: 'https://picsum.photos/seed/fkekk_b/800/450',
    bannerImage: 'https://picsum.photos/seed/fkekk_banner/1920/600'
  }
];

const FacultyDashboard: React.FC<FacultyDashboardProps> = ({ lang }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Breadcrumb & Header */}
      <section className="bg-white border-b border-gray-100 py-12 mb-12">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#A51C30] transition-colors">HOME</Link>
            <ChevronRight size={10} />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'PROGRAMME DASHBOARD' : 'PAPAN PEMUKA PROGRAM'}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {lang === 'EN' ? 'Faculty Dashboard' : 'Papan Pemuka Fakulti'}
          </h1>
          <p className="text-gray-500 max-w-2xl text-lg font-light">
            {lang === 'EN' 
              ? 'Select a faculty to explore specialized postgraduate opportunities.' 
              : 'Pilih fakulti untuk menerokai peluang pascasiswazah khusus.'}
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty, idx) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={faculty.image} 
                  alt={faculty.fullName[lang]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-[#A51C30] text-white px-3 py-1 rounded-lg shadow-lg">
                    <span className="text-xs font-bold tracking-widest">{faculty.shortName}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 leading-tight min-h-[3rem]">
                  {faculty.fullName[lang]}
                </h3>
                
                <Link 
                  to={`/programmes/faculty?faculty=${faculty.id}`}
                  className="mt-auto w-full bg-gray-50 hover:bg-[#A51C30] text-gray-600 hover:text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>{lang === 'EN' ? 'View Postgraduate Programmes' : 'Lihat Program Pascasiswazah'}</span>
                  <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FacultyDashboard;
