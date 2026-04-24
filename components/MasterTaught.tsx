
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Building2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { FACULTIES } from '../constants';
import FPTTLogo from '../images/Faculty_TaughtCourse/FPTT-logo.png';
import FTKELogo from '../images/Faculty_TaughtCourse/FTKE-logo.png';
import FTKEKLogo from '../images/Faculty_TaughtCourse/FTKEK-logo.png';
import FTKIPLogo from '../images/Faculty_TaughtCourse/FTKIP-logo.png';
import FTKMLogo from '../images/Faculty_TaughtCourse/FTKM-logo.png';
import FTMKLogo from '../images/Faculty_TaughtCourse/FTMK-logo.png';
import IPTKLogo from '../images/Faculty_TaughtCourse/IPTK-logo.png';

interface MasterTaughtProps {
  lang: Language;
}

const facultyLogos: Partial<Record<string, string>> = {
  fkm: FTKMLogo,
  fke: FTKELogo,
  ftmk: FTMKLogo,
  fptt: FPTTLogo,
  fkp: FTKIPLogo,
  fkekk: FTKEKLogo,
  iptk: IPTKLogo,
};

const MasterTaught: React.FC<MasterTaughtProps> = ({ lang }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-16 mb-12">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#A51C30] transition-colors">HOME</Link>
            <ChevronRight size={10} />
            <Link to="/programmes" className="hover:text-[#A51C30] transition-colors">PROGRAMMES</Link>
            <ChevronRight size={10} />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'MASTER BY TAUGHT COURSE' : 'SARJANA KERJA KURSUS'}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                {lang === 'EN' ? 'Master by Taught Course' : 'Sarjana secara Kerja Kursus'}
              </h1>
              <p className="text-gray-500 text-xl font-light leading-relaxed">
                {lang === 'EN' 
                  ? 'Expand your professional expertise through our industry-aligned coursework programmes. Choose a faculty below to view available courses.' 
                  : 'Kembangkan kepakaran profesional anda melalui program kerja kursus kami yang selaras dengan industri. Pilih fakulti di bawah untuk melihat kursus yang tersedia.'}
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#A51C30]">
                <Building2 size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available</div>
                <div className="text-xl font-serif font-bold text-gray-900">{FACULTIES.length} Faculties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Selection Grid */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTIES.map((faculty, idx) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={faculty.image} 
                  alt={faculty.fullName[lang]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 px-3 py-2 rounded-xl shadow-xl border border-white/70 min-w-[76px] min-h-[46px] flex items-center justify-center">
                    {facultyLogos[faculty.id] ? (
                      <img
                        src={facultyLogos[faculty.id]}
                        alt={`${faculty.shortName} Logo`}
                        className="h-8 w-auto max-w-[84px] object-contain"
                      />
                    ) : (
                      <span className="text-xs font-bold tracking-widest text-[#A51C30]">{faculty.shortName}</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 leading-tight min-h-[4rem]">
                  {faculty.fullName[lang]}
                </h3>
                
                <p className="text-gray-500 font-light mb-10 text-sm leading-relaxed">
                  {lang === 'EN' 
                    ? `Explore specialized taught master's degrees offered by the ${faculty.shortName}.`
                    : `Terokai ijazah sarjana kerja kursus khusus yang ditawarkan oleh ${faculty.shortName}.`}
                </p>
                
                <Link 
                  to={`/programmes/faculty?faculty=${faculty.id}&category=taught`}
                  className="mt-auto w-full bg-gray-50 group-hover:bg-[#A51C30] text-gray-600 group-hover:text-white py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-3 group/btn"
                >
                  <span>{lang === 'EN' ? 'View Taught Programmes' : 'Lihat Program Kerja Kursus'}</span>
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

export default MasterTaught;
