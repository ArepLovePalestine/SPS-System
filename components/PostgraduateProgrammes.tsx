
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Info, Search, Filter } from 'lucide-react';
import { Language } from '../types';

interface ProgrammeRow {
  bmName: string;
  enName: string;
  code: string;
  mode: 'RESEARCH' | 'MIXED MODE' | 'TAUGHT COURSE';
  accreditation: string;
}

interface FacultyGroup {
  nameBM: string;
  nameEN: string;
  programmes: ProgrammeRow[];
}

const PROGRAMME_DATA: FacultyGroup[] = [
  {
    nameBM: 'Fakulti Teknologi dan Kejuruteraan Elektrik',
    nameEN: 'Faculty of Electrical Technology and Engineering',
    programmes: [
      { bmName: 'Doktor Falsafah', enName: 'Doctor of Philosophy', code: 'PEKA', mode: 'RESEARCH', accreditation: 'MQA / FA5628' },
      { bmName: 'Doktor Kejuruteraan', enName: 'Doctor of Engineering', code: 'EEKA', mode: 'RESEARCH', accreditation: 'MQA / FA5629' },
      { bmName: 'Sarjana Sains Dalam Kejuruteraan Elektrik', enName: 'Master of Science in Electrical Engineering', code: 'MEKA', mode: 'RESEARCH', accreditation: 'MQA / FA5630' },
      { bmName: 'Sarjana Sains Dalam Kejuruteraan Mekatronik', enName: 'Master of Science in Mechatronic Engineering', code: 'MEKM', mode: 'RESEARCH', accreditation: 'MQA / FA5632' },
      { bmName: 'Sarjana Kejuruteraan Elektrik (Elektronik Kuasa dan Pemacu)', enName: 'Master of Electrical Engineering (Power Electronics and Drives)', code: 'MEKE', mode: 'MIXED MODE', accreditation: '-' },
      { bmName: 'Sarjana Kejuruteraan Elektrik (Kuasa Industri)', enName: 'Master of Electrical Engineering (Industrial Power)', code: 'MEKP', mode: 'MIXED MODE', accreditation: 'MQA / FA5631' },
      { bmName: 'Sarjana Kejuruteraan Elektrik (Kawalan dan Robotik)', enName: 'Master of Electrical Engineering (Control and Robotics)', code: 'MEKC', mode: 'MIXED MODE', accreditation: '-' },
      { bmName: 'Sarjana Kejuruteraan Mekatronik', enName: 'Master of Mechatronics Engineering', code: 'MEKH', mode: 'TAUGHT COURSE', accreditation: 'MQA / PA9765' },
      { bmName: 'Sarjana Kejuruteraan Elektrik', enName: 'Master of Electrical Engineering', code: 'MEKG', mode: 'TAUGHT COURSE', accreditation: 'MQA / PA9764' },
    ]
  },
  {
    nameBM: 'Fakulti Teknologi dan Kejuruteraan Elektronik & Kejuruteraan Komputer',
    nameEN: 'Faculty of Electronic and Computer Technology and Engineering',
    programmes: [
      { bmName: 'Doktor Falsafah', enName: 'Doctor of Philosophy', code: 'PENA', mode: 'RESEARCH', accreditation: 'MQA / FA5633' },
      { bmName: 'Doktor Kejuruteraan', enName: 'Doctor of Engineering', code: 'EENA', mode: 'RESEARCH', accreditation: 'MQA / FA5634' },
      { bmName: 'Sarjana Sains Dalam Kejuruteraan Elektronik', enName: 'Master of Science in Electronic Engineering', code: 'MENA', mode: 'RESEARCH', accreditation: 'MQA / FA5635' },
      { bmName: 'Sarjana Kejuruteraan Elektronik (Kejuruteraan Komputer)', enName: 'Master of Electronic Engineering (Computer Engineering)', code: 'MENC', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5637' },
      { bmName: 'Sarjana Kejuruteraan Elektronik (Sistem Elektronik)', enName: 'Master of Electronic Engineering (Electronic System)', code: 'MENE', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5638' },
      { bmName: 'Sarjana Kejuruteraan Elektronik (Sistem Telekomunikasi)', enName: 'Master of Electronic Engineering (Telecommunication System)', code: 'MENT', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5636' },
    ]
  },
  {
    nameBM: 'Fakulti Teknologi dan Kejuruteraan Mekanikal',
    nameEN: 'Faculty of Mechanical Technology and Engineering',
    programmes: [
      { bmName: 'Doktor Falsafah', enName: 'Doctor of Philosophy', code: 'PMCA', mode: 'RESEARCH', accreditation: 'MQA / FA5639' },
      { bmName: 'Doktor Kejuruteraan', enName: 'Doctor of Engineering', code: 'EMCA', mode: 'RESEARCH', accreditation: 'MQA / FA5640' },
      { bmName: 'Sarjana Sains Dalam Kejuruteraan Mekanikal', enName: 'Master of Science in Mechanical Engineering', code: 'MMCA', mode: 'RESEARCH', accreditation: 'MQA / FA5641' },
      { bmName: 'Sarjana Kejuruteraan Mekanikal (Mekanik Gunaan)', enName: 'Master of Mechanical Engineering (Applied Mechanics)', code: 'MMCG', mode: 'MIXED MODE', accreditation: 'MQA / FA1497' },
      { bmName: 'Sarjana Kejuruteraan Mekanikal (Tenaga)', enName: 'Master of Mechanical Engineering (Energy)', code: 'MMCT', mode: 'MIXED MODE', accreditation: '-' },
      { bmName: 'Sarjana Kejuruteraan Mekanikal (Automotif)', enName: 'Master of Mechanical Engineering (Automotive)', code: 'MMCK', mode: 'MIXED MODE', accreditation: 'MQA / FA1496' },
      { bmName: 'Sarjana Kejuruteraan Mekanikal (Mekanik Struktur)', enName: 'Master of Mechanical Engineering (Structure Mechanics)', code: 'MMCS', mode: 'MIXED MODE', accreditation: '-' },
      { bmName: 'Sarjana Kejuruteraan Mekanikal (Kejuruteraan Tenaga)', enName: 'Master of Mechanical Engineering (Energy Engineering)', code: 'MMCE', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA1498' },
      { bmName: 'Sarjana Kejuruteraan Mekanikal (Automotif)', enName: 'Master of Mechanical Engineering (Automotive)', code: 'MMCV', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA1499' },
      { bmName: 'Sarjana Kejuruteraan Mekanikal (Rekabentuk Produk)', enName: 'Master of Mechanical Engineering (Product Design)', code: 'MMCD', mode: 'TAUGHT COURSE', accreditation: '-' },
      { bmName: 'Sarjana Kejuruteraan Mekanikal', enName: 'Master of Mechanical Engineering', code: 'MMCM', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA10825' },
    ]
  },
  {
    nameBM: 'Fakulti Teknologi dan Kejuruteraan Industri dan Pembuatan',
    nameEN: 'Faculty of Industrial and Manufacturing Technology and Engineering',
    programmes: [
      { bmName: 'Doktor Falsafah', enName: 'Doctor of Philosophy', code: 'PMFA', mode: 'RESEARCH', accreditation: 'MQA / FA5642' },
      { bmName: 'Doktor Kejuruteraan', enName: 'Doctor of Engineering', code: 'EMFA', mode: 'RESEARCH', accreditation: 'MQA / FA5643' },
      { bmName: 'Sarjana Sains Dalam Kejuruteraan Pembuatan', enName: 'Master of Science in Manufacturing Engineering', code: 'MMFA', mode: 'RESEARCH', accreditation: 'MQA / FA5644' },
      { bmName: 'Sarjana Kejuruteraan Pembuatan (Kejuruteraan Sistem Pembuatan)', enName: 'Master of Manufacturing Engineering (Manufacturing System Engineering)', code: 'MMFS', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5645' },
      { bmName: 'Sarjana Kejuruteraan Pembuatan (Kejuruteraan Sistem Kualiti)', enName: 'Master of Manufacturing Engineering (Quality System Engineering)', code: 'MMFQ', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5647' },
      { bmName: 'Sarjana Kejuruteraan Pembuatan (Kejuruteraan Industri)', enName: 'Master of Manufacturing Engineering (Industrial Engineering)', code: 'MMFD', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5646' },
      { bmName: 'Sarjana Kejuruteraan Pembuatan (Kejuruteraan Kepersisan)', enName: 'Master of Manufacturing Engineering (Precision Engineering)', code: 'MMFP', mode: 'TAUGHT COURSE', accreditation: '-' },
      { bmName: 'Sarjana Muda Kejuruteraan Pembuatan (Bahan Termaju dan Pemprosesan)', enName: 'Master of Manufacturing Engineering (Advanced Materials and Processing)', code: 'MMFB', mode: 'TAUGHT COURSE', accreditation: 'MQA / PA9176' },
    ]
  },
  {
    nameBM: 'Fakulti Teknologi Maklumat Dan Komunikasi',
    nameEN: 'Faculty of Information and Communication Technology',
    programmes: [
      { bmName: 'Doktor Falsafah', enName: 'Doctor of Philosophy', code: 'PITA', mode: 'RESEARCH', accreditation: 'MQA / FA5648' },
      { bmName: 'Doktor Teknologi Maklumat', enName: 'Doctor of Information Technology', code: 'PDIT', mode: 'TAUGHT COURSE', accreditation: '-' },
      { bmName: 'Sarjana Sains Dalam Teknologi Maklumat dan Komunikasi', enName: 'Master of Science in Information and Communication Technology', code: 'MITA', mode: 'RESEARCH', accreditation: 'MQA / FA5649' },
      { bmName: 'Sarjana Sains Komputer (Teknologi Rangkaian Internet)', enName: 'Master of Computer Science (Internetworking Technology)', code: 'MITI', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5650' },
      { bmName: 'Sarjana Sains Komputer (Teknologi Pangkalan Data)', enName: 'Master of Computer Science (Database Technology)', code: 'MITD', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5652' },
      { bmName: 'Sarjana Sains Komputer (Kejuruteraan Perisian)', enName: 'Master of Computer Science (Software Engineering)', code: 'MITS', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5651' },
      { bmName: 'Sarjana Sains Komputer (Sains Keselamatan)', enName: 'Master of Computer Science (Security Science)', code: 'MITZ', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5653' },
      { bmName: 'Ijazah Sarjana Sains Komputer (Pengkomputeran Multimedia)', enName: 'Master of Computer Science (Multimedia Computing)', code: 'MCSM', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA1760' },
      { bmName: 'Sarjana Teknologi (Sains Data dan Analitik)', enName: 'Master of Technology (Data Science and Analytics)', code: 'MTDS', mode: 'TAUGHT COURSE', accreditation: 'MQA / PA9613' },
      { bmName: 'Sarjana Kejuruteraan Perisian (Pembangunan Mudah Alih)', enName: 'Master of Software Engineering (Mobile Development)', code: 'MSMD', mode: 'TAUGHT COURSE', accreditation: 'MQA / PA9614' },
      { bmName: 'Sarjana Sistem Maklumat', enName: 'Master of Information System', code: 'MIS', mode: 'TAUGHT COURSE', accreditation: 'MQA / PA9766' },
    ]
  },
  {
    nameBM: 'Fakulti Pengurusan Teknologi Dan Teknousahawanan',
    nameEN: 'Faculty of Technology Management and Technopreneurship',
    programmes: [
      { bmName: 'Doktor Falsafah', enName: 'Doctor of Philosophy', code: 'PIPE', mode: 'RESEARCH', accreditation: 'MQA / FA5654' },
      { bmName: 'Ijazah Kedoktoran Pengurusan Teknologi', enName: 'Doctor of Technology Management', code: 'DTM', mode: 'MIXED MODE', accreditation: 'MQA / PA9615' },
      { bmName: 'Sarjana Sains Dalam Pengurusan Teknologi', enName: 'Master of Science in Technology Management', code: 'MIPM', mode: 'RESEARCH', accreditation: 'MQA / FA5655' },
      { bmName: 'Sarjana Sains Dalam Keusahawanan', enName: 'Master of Science in Entrepreneurship', code: 'MIPE', mode: 'RESEARCH', accreditation: 'MQA / FA5656' },
      { bmName: 'Sarjana Pentadbiran Perniagaan (Pengurusan Operasi Termaju)', enName: 'Master of Business Administration (Advanced Operations Management)', code: 'MBAKA', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5657' },
      { bmName: 'Sarjana Pentadbiran Perniagaan (Pengurusan Teknologi dan Inovasi)', enName: 'Master of Business Administration (Technology and Innovation Management)', code: 'MBAKT', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA5658' },
      { bmName: 'Sarjana Teknoinovasi', enName: 'Master of Technovation', code: 'MTV', mode: 'TAUGHT COURSE', accreditation: 'MQA / PA9612' },
    ]
  },
  {
    nameBM: 'Institut Pengurusan Teknologi Dan Keusahawanan',
    nameEN: 'Institute of Technology Management and Entrepreneurship',
    programmes: [
      { bmName: 'Doktor Falsafah', enName: 'Doctor of Philosophy', code: 'PIPK', mode: 'RESEARCH', accreditation: 'MQA / FA5654' },
      { bmName: 'Sarjana Sains Komunikasi Teknikal', enName: 'Master of Science in Technical Communication', code: 'MIPC', mode: 'RESEARCH', accreditation: 'MQA / FA13359' },
      { bmName: 'Sarjana Sains Kaunseling Industri', enName: 'Master of Science in Industrial Counseling', code: 'MIPI', mode: 'RESEARCH', accreditation: 'MQA / FA15299' },
      { bmName: 'Sarjana Sains Pembangunan Sumber Manusia', enName: 'Master of Science in Human Resource Development', code: 'MIPH', mode: 'RESEARCH', accreditation: 'MQA / FA13360' },
      { bmName: 'Master of Engineering Business Management', enName: 'Master of Engineering Business Management', code: 'MIEM', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA12944' },
      { bmName: 'Master of Business Information Management', enName: 'Master of Business Information Management', code: 'MIIM', mode: 'TAUGHT COURSE', accreditation: 'MQA / FA12943' },
    ]
  }
];

interface PostgraduateProgrammesProps {
  lang: Language;
}

const PostgraduateProgrammes: React.FC<PostgraduateProgrammesProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modeFilter, setModeFilter] = useState<string>('ALL');

  const filteredData = useMemo(() => {
    return PROGRAMME_DATA.map(faculty => {
      const filteredProgrammes = faculty.programmes.filter(prog => {
        const matchesSearch = 
          prog.bmName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prog.enName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prog.code.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesMode = modeFilter === 'ALL' || prog.mode === modeFilter;

        return matchesSearch && matchesMode;
      });

      return { ...faculty, filteredProgrammes };
    }).filter(faculty => faculty.filteredProgrammes.length > 0);
  }, [searchTerm, modeFilter]);

  const getRowColor = (prog: ProgrammeRow) => {
    const name = prog.enName.toLowerCase();
    const mode = prog.mode;

    if (name.includes('doctor of philosophy')) return 'bg-[#FFD966]'; // Orange/Golden
    if (name.includes('doctor of engineering')) return 'bg-[#C9DAF8]'; // Light Blue
    if (name.includes('master of science') && mode === 'RESEARCH') return 'bg-[#F4CCCC]'; // Soft Pink
    if (mode === 'MIXED MODE') return 'bg-[#D9D2E9]'; // Lavender
    if (mode === 'TAUGHT COURSE') return 'bg-[#FFF2CC]'; // Soft Yellow
    
    return 'bg-white';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Breadcrumbs & Header */}
      <section className="bg-white border-b border-gray-100 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#A51C30] transition-colors">HOME</Link>
            <ChevronRight size={10} />
            <Link to="/programmes" className="hover:text-[#A51C30] transition-colors">PROGRAMMES</Link>
            <ChevronRight size={10} />
            <span className="text-[#A51C30]">LIST OF PROGRAMMES</span>
          </nav>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-[#A51C30]/5 text-[#A51C30] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#A51C30]/10">
                <FileText size={14} />
                <span>Formal Accreditation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
                {lang === 'EN' ? 'Postgraduate Programmes' : 'Program Pascasiswazah'}
              </h1>
              <p className="mt-4 text-gray-500 max-w-2xl text-lg font-light mb-8">
                {lang === 'EN' 
                  ? 'UTeM is proud to announce that all its postgraduate programs are approved by the Ministry of Education (MOE) and recognized by Malaysian Qualifications Agency (MQA). The table below shows the comprehensive list of all postgraduate programs offered.' 
                  : 'UTeM dengan bangganya mengumumkan bahawa semua program pascasiswazahnya diluluskan oleh Kementerian Pendidikan Tinggi (KPT) dan diiktiraf oleh Agensi Kelayakan Malaysia (MQA). Jadual di bawah menunjukkan senarai komprehensif semua program pascasiswazah yang ditawarkan.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12">
        
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch md:items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder={lang === 'EN' ? "Search programme name or code..." : "Cari nama program atau kod..."}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-2xl border border-gray-100 shadow-sm">
              <Filter size={16} className="text-[#A51C30]" />
              <select 
                className="bg-transparent text-sm font-bold uppercase tracking-widest border-none focus:ring-0 outline-none pr-8 cursor-pointer"
                value={modeFilter}
                onChange={(e) => setModeFilter(e.target.value)}
              >
                <option value="ALL">{lang === 'EN' ? 'All Modes' : 'Semua Mod'}</option>
                <option value="RESEARCH">{lang === 'EN' ? 'Research' : 'Penyelidikan'}</option>
                <option value="MIXED MODE">{lang === 'EN' ? 'Mixed Mode' : 'Mod Campuran'}</option>
                <option value="TAUGHT COURSE">{lang === 'EN' ? 'Taught Course' : 'Kerja Kursus'}</option>
              </select>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
        >
          {/* Action Bar / Note */}
          <div className="p-6 md:p-8 border-b border-gray-50 bg-gray-50/50 flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#A51C30] shadow-sm border border-gray-100 flex-shrink-0">
              <Info size={18} />
            </div>
            <div>
              <p className="text-gray-900 font-bold text-sm mb-1">
                {lang === 'EN' ? 'Live Academic Registry' : 'Daftar Akademik Rasmi'}
              </p>
              <p className="text-gray-500 text-xs font-light">
                {lang === 'EN' 
                  ? 'Refer to the table below for the full list of postgraduate programmes.' 
                  : 'Rujuk jadual di bawah untuk senarai penuh program pascasiswazah.'}
              </p>
            </div>
          </div>

          {/* Table Container with Horizontal Scroll */}
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full border-collapse border-spacing-0 min-w-[1000px]">
              <thead className="bg-[#D9EAD3]">
                <tr className="border-b-2 border-gray-800">
                  <th className="p-5 border-r-2 border-gray-800 text-[11px] font-bold uppercase tracking-widest text-gray-900 leading-tight">
                    {lang === 'EN' ? 'FACULTY / INSTITUTE' : 'FAKULTI / INSTITUT'}
                  </th>
                  <th className="p-5 border-r-2 border-gray-800 text-[11px] font-bold uppercase tracking-widest text-gray-900 leading-tight">
                    {lang === 'EN' ? 'PROGRAMME NAME (BAHASA MELAYU)' : 'NAMA PROGRAM (BAHASA MELAYU)'}
                  </th>
                  <th className="p-5 border-r-2 border-gray-800 text-[11px] font-bold uppercase tracking-widest text-gray-900 leading-tight">
                    {lang === 'EN' ? 'PROGRAMME NAME (ENGLISH)' : 'NAMA PROGRAM (ENGLISH)'}
                  </th>
                  <th className="p-5 border-r-2 border-gray-800 text-[11px] font-bold uppercase tracking-widest text-gray-900 leading-tight text-center">
                    {lang === 'EN' ? 'CODE' : 'KOD'}
                  </th>
                  <th className="p-5 border-r-2 border-gray-800 text-[11px] font-bold uppercase tracking-widest text-gray-900 leading-tight text-center">
                    {lang === 'EN' ? 'MODE' : 'MOD'}
                  </th>
                  <th className="p-5 text-[11px] font-bold uppercase tracking-widest text-gray-900 leading-tight text-center">
                    {lang === 'EN' ? 'ACCREDITATION' : 'AKREDITASI'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filteredData.map((faculty, fIdx) => (
                    <React.Fragment key={fIdx}>
                      {faculty.filteredProgrammes.map((prog, pIdx) => (
                        <tr 
                          key={`${fIdx}-${pIdx}`} 
                          className={`${getRowColor(prog)} border-b border-gray-800 transition-colors`}
                        >
                          {pIdx === 0 && (
                            <td 
                              rowSpan={faculty.filteredProgrammes.length}
                              className="bg-[#FFF2CC]/50 p-6 border-r-2 border-gray-800 text-xs font-bold text-gray-900 text-center align-middle max-w-[200px]"
                            >
                              <div className="flex flex-col gap-2">
                                <span>{faculty.nameBM}</span>
                                <span className="text-gray-500 font-light italic">({faculty.nameEN})</span>
                              </div>
                            </td>
                          )}
                          <td className="p-5 border-r-2 border-gray-800 text-sm font-medium text-gray-900 leading-snug">
                            {prog.bmName}
                          </td>
                          <td className="p-5 border-r-2 border-gray-800 text-sm font-medium text-gray-900 leading-snug">
                            {prog.enName}
                          </td>
                          <td className="p-5 border-r-2 border-gray-800 text-xs font-bold text-gray-900 text-center font-mono">
                            {prog.code}
                          </td>
                          <td className="p-5 border-r-2 border-gray-800 text-[10px] font-bold uppercase tracking-widest text-gray-700 text-center">
                            {prog.mode}
                          </td>
                          <td className="p-5 text-xs font-bold text-gray-900 text-center font-mono">
                            {prog.accreditation}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          
          {/* Footer note inside container */}
          <div className="p-10 bg-gray-50/30 text-center border-t border-gray-50">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              UTeM School of Graduate Studies • Official Programme Registry
            </p>
          </div>
        </motion.div>
      </section>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
        table {
          border: 2px solid #1f2937;
        }
      `}</style>
    </div>
  );
};

export default PostgraduateProgrammes;
