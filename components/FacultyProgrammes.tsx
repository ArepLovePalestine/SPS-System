
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, BookOpen, Search, GraduationCap, Settings, ArrowRight, ExternalLink, Clock, DollarSign } from 'lucide-react';
import { Language, Programme } from '../types';
import { faculties } from './FacultyDashboard';

interface FacultyProgrammesProps {
  lang: Language;
}

const allProgrammes: Programme[] = [
  // FTMK
  {
    id: 'ftmk-phd',
    title: { EN: 'Doctor of Philosophy (Information and Communication Technology)', BM: 'Doktor Falsafah (Teknologi Maklumat dan Komunikasi)' },
    description: { EN: 'Advanced research in ICT domains.', BM: 'Penyelidikan lanjutan dalam domain TMK.' },
    image: '',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'ftmk',
    category: 'phd',
    link: 'https://ftmk.utem.edu.my'
  },
  {
    id: 'ftmk-master-research',
    title: { EN: 'Master of Science (Information and Communication Technology)', BM: 'Sarjana Sains (Teknologi Maklumat dan Komunikasi)' },
    description: { EN: 'Research-based master programme.', BM: 'Program sarjana berasaskan penyelidikan.' },
    image: '',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '1.5 - 3 Years', BM: '1.5 - 3 Tahun' },
    faculty: 'ftmk',
    category: 'research',
    link: 'https://ftmk.utem.edu.my'
  },
  {
    id: 'ftmk-master-coursework',
    title: { EN: 'Master of Information Technology', BM: 'Sarjana Teknologi Maklumat' },
    description: { EN: 'Coursework-based master programme.', BM: 'Program sarjana berasaskan kerja kursus.' },
    image: '',
    mode: { EN: 'Coursework', BM: 'Kerja Kursus' },
    duration: { EN: '1.5 - 3 Years', BM: '1.5 - 3 Tahun' },
    faculty: 'ftmk',
    category: 'taught',
    link: 'https://ftmk.utem.edu.my'
  },
  // FKM
  {
    id: 'fkm-phd',
    title: { EN: 'Doctor of Philosophy in Mechanical Engineering', BM: 'Doktor Falsafah dalam Kejuruteraan Mekanikal' },
    description: { EN: 'Research in mechanical systems.', BM: 'Penyelidikan dalam sistem mekanikal.' },
    image: '',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'fkm',
    category: 'phd',
    link: 'https://fkm.utem.edu.my'
  },
  {
    id: 'fkm-engd',
    title: { EN: 'Doctor of Engineering (Mechanical)', BM: 'Doktor Kejuruteraan (Mekanikal)' },
    description: { EN: 'Industry-focused engineering doctorate.', BM: 'Doktorat kejuruteraan berfokuskan industri.' },
    image: '',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'fkm',
    category: 'engd',
    link: 'https://fkm.utem.edu.my'
  }
];

const categories = [
  { id: 'taught', label: { EN: 'TAUGHT COURSE', BM: 'KERJA KURSUS' }, icon: BookOpen, desc: { EN: 'Programmes focused on structured coursework and exams.', BM: 'Program yang berfokus pada kerja kursus terstruktur dan peperiksaan.' } },
  { id: 'research', label: { EN: 'RESEARCH', BM: 'PENYELIDIKAN' }, icon: Search, desc: { EN: 'Master programmes based on original research and thesis.', BM: 'Program sarjana berasaskan penyelidikan asli dan tesis.' } },
  { id: 'phd', label: { EN: 'DOCTOR OF PHILOSOPHY', BM: 'DOKTOR FALSAFAH' }, icon: GraduationCap, desc: { EN: 'Highest academic degree based on significant research contribution.', BM: 'Ijazah akademik tertinggi berasaskan sumbangan penyelidikan yang signifikan.' } },
  { id: 'engd', label: { EN: 'DOCTOR OF ENGINEERING', BM: 'DOKTOR KEJURUTERAAN' }, icon: Settings, desc: { EN: 'Professional doctorate for engineering practitioners in industry.', BM: 'Doktorat profesional untuk pengamal kejuruteraan dalam industri.' } }
];

const FacultyProgrammes: React.FC<FacultyProgrammesProps> = ({ lang }) => {
  const [searchParams] = useSearchParams();
  const facultyId = searchParams.get('faculty');
  const categoryId = searchParams.get('category');

  const faculty = faculties.find(f => f.id === facultyId);
  const category = categories.find(c => c.id === categoryId);

  if (!faculty) return <div className="pt-40 text-center">Faculty not found</div>;

  const filteredProgrammes = allProgrammes.filter(p => p.faculty === facultyId && p.category === categoryId);

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={faculty.bannerImage} 
            alt={faculty.fullName[lang]} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#A51C30]/90 to-[#A51C30]/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <Link to="/programmes/dashboard" className="hover:text-white transition-colors">PROGRAMMES</Link>
            <ChevronRight size={12} />
            <Link to={`/programmes/faculty?faculty=${facultyId}`} className="hover:text-white transition-colors">{faculty.shortName}</Link>
            {category && (
              <>
                <ChevronRight size={12} />
                <span className="text-white">{category.label[lang]}</span>
              </>
            )}
          </nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight"
          >
            {faculty.fullName[lang]}
          </motion.h1>
          <p className="text-xl text-white/90 font-light">
            {lang === 'EN' 
              ? `Postgraduate Programmes at ${faculty.shortName}` 
              : `Program Pascasiswazah di ${faculty.shortName}`}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50 min-h-[60vh]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          {!categoryId ? (
            /* PAGE 2 — Category Selection */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {categories.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col group"
                >
                  <div className="w-16 h-16 bg-[#A51C30]/5 rounded-2xl flex items-center justify-center text-[#A51C30] mb-8 group-hover:bg-[#A51C30] group-hover:text-white transition-colors duration-500">
                    <cat.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{cat.label[lang]}</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                    {cat.desc[lang]}
                  </p>
                  <Link 
                    to={`/programmes/faculty?faculty=${facultyId}&category=${cat.id}`}
                    className="flex items-center space-x-2 text-[11px] font-bold text-[#A51C30] uppercase tracking-[0.2em] group/btn"
                  >
                    <span>{lang === 'EN' ? 'View Programmes' : 'Lihat Program'}</span>
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            /* PAGE 3 — Programme List */
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {category?.label[lang]}
                </h2>
                <Link 
                  to={`/programmes/faculty?faculty=${facultyId}`}
                  className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest flex items-center space-x-2"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  <span>{lang === 'EN' ? 'Back to Categories' : 'Kembali ke Kategori'}</span>
                </Link>
              </div>

              {filteredProgrammes.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredProgrammes.map((prog, idx) => (
                    <motion.div
                      key={prog.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between group hover:shadow-md transition-all"
                    >
                      <div className="space-y-4 md:max-w-2xl">
                        <h4 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#A51C30] transition-colors">
                          {prog.title[lang]}
                        </h4>
                        <div className="flex flex-wrap gap-6">
                          <div className="flex items-center space-x-2 text-gray-500">
                            <BookOpen size={14} className="text-[#A51C30]" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{prog.mode[lang]}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <Clock size={14} className="text-[#A51C30]" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{prog.duration[lang]}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <DollarSign size={14} className="text-[#A51C30]" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{lang === 'EN' ? 'Competitive Fees' : 'Yuran Kompetitif'}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 md:mt-0">
                        <a 
                          href={prog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-gray-50 hover:bg-[#A51C30] text-gray-600 hover:text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
                        >
                          <span>{lang === 'EN' ? 'More Information' : 'Maklumat Lanjut'}</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-20 rounded-3xl text-center border border-dashed border-gray-200">
                  <p className="text-gray-400 font-light italic">
                    {lang === 'EN' 
                      ? 'No programmes currently listed for this category. Please check back later or contact the faculty.' 
                      : 'Tiada program disenaraikan buat masa ini untuk kategori ini. Sila semak semula nanti atau hubungi fakulti.'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FacultyProgrammes;
