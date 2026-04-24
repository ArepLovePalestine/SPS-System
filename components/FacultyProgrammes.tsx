
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, BookOpen, Search, GraduationCap, Settings, ArrowRight, ExternalLink, Clock, DollarSign, Mail, Phone, Globe } from 'lucide-react';
import { FacultyDetail, Language, Programme } from '../types';
import FTKMImg from '../images/Faculty_TaughtCourse/FTKM.jpeg';
import FTKEImg from '../images/Faculty_TaughtCourse/FTKE.jpeg';
import FTMKImg from '../images/Faculty_TaughtCourse/FTMK.jpeg';
import FPTTImg from '../images/Faculty_TaughtCourse/FPTT.jpeg';
import FTKEKImg from '../images/Faculty_TaughtCourse/FTKEK.jpeg';
import FTKIPImg from '../images/Faculty_TaughtCourse/FTKIP.jpeg';
import IPTKImg from '../images/Faculty_TaughtCourse/IPTK.jpeg';
import FTMKPagePic from '../images/Faculty_TaughtCourse/EachPagePic/FTMK_pic.jpg';

interface FacultyProgrammesProps {
  lang: Language;
}

const faculties: FacultyDetail[] = [
  {
    id: 'fkm',
    shortName: 'FTKM',
    fullName: { EN: 'Faculty of Mechanical Technology and Engineering (FTKM)', BM: 'Fakulti Teknologi dan Kejuruteraan Mekanikal (FTKM)' },
    image: FTKMImg,
    bannerImage: FTKMImg
  },
  {
    id: 'fke',
    shortName: 'FTKE',
    fullName: { EN: 'Faculty of Electrical Technology and Engineering (FTKE)', BM: 'Fakulti Teknologi dan Kejuruteraan Elektrik (FTKE)' },
    image: FTKEImg,
    bannerImage: FTKEImg
  },
  {
    id: 'ftmk',
    shortName: 'FTMK',
    fullName: { EN: 'Faculty of Information and Communications Technology (FTMK)', BM: 'Fakulti Teknologi Maklumat dan Komunikasi (FTMK)' },
    image: FTMKImg,
    bannerImage: FTMKPagePic
  },
  {
    id: 'fptt',
    shortName: 'FPTT',
    fullName: { EN: 'Faculty of Technology Management and Technopreneurship (FPTT)', BM: 'Fakulti Pengurusan Teknologi dan Teknokeusahawanan (FPTT)' },
    image: FPTTImg,
    bannerImage: FPTTImg
  },
  {
    id: 'fkp',
    shortName: 'FTKIP',
    fullName: { EN: 'Faculty of Industrial and Manufacturing Technology and Engineering (FTKIP)', BM: 'Fakulti Teknologi dan Kejuruteraan Industri dan Pembuatan (FTKIP)' },
    image: FTKIPImg,
    bannerImage: FTKIPImg
  },
  {
    id: 'fkekk',
    shortName: 'FTKEK',
    fullName: { EN: 'Faculty of Electronics and Technology Computer and Engineering (FTKEK)', BM: 'Fakulti Teknologi dan Kejuruteraan Elektronik dan Komputer (FTKEK)' },
    image: FTKEKImg,
    bannerImage: FTKEKImg
  },
  {
    id: 'ftkip',
    shortName: 'FTKIP',
    fullName: { EN: 'Faculty of Industrial and Manufacturing Technology and Engineering (FTKIP)', BM: 'Fakulti Teknologi dan Kejuruteraan Industri dan Pembuatan (FTKIP)' },
    image: FTKIPImg,
    bannerImage: FTKIPImg
  },
  {
    id: 'iptk',
    shortName: 'IPTK',
    fullName: { EN: 'Institute of Technology Management and Entrepreneurship (IPTK)', BM: 'Institut Pengurusan Teknologi dan Keusahawanan (IPTK)' },
    image: IPTKImg,
    bannerImage: IPTKImg
  }
];

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

type CurriculumGroup = {
  category: string;
  selectionNote?: string;
  entries: Array<{ course: string; credit: string }>;
};

type DetailedTaughtProgramme = {
  id: string;
  title: string;
  summary: string;
  durationFullTime: string;
  durationPartTime: string;
  totalCredits: string;
  accreditation?: string;
  modeLabel?: string;
  mqaLevel?: string;
  necField?: string;
  studyMode?: string;
  programmeType?: string;
  fees?: {
    malaysian: string;
    international: string;
  };
  structure: CurriculumGroup[];
};

const FTKM_TAUGHT_PROGRAMMES: DetailedTaughtProgramme[] = [
  {
    id: 'ftkm-energy',
    title: 'Master of Mechanical Engineering (Energy Engineering)',
    summary: 'Specialised coursework pathway centred on energy systems, thermal engineering, and sustainable technology applications.',
    durationFullTime: '1.5 - 2.5 years',
    durationPartTime: '3 - 5 years',
    totalCredits: '40',
    accreditation: 'MQA / FA1498',
    structure: [
      { category: 'Compulsory Subjects', entries: [{ course: 'Research Methodology', credit: '3' }] },
      {
        category: 'University Elective Subjects',
        selectionNote: 'Choose one',
        entries: [
          { course: 'Entrepreneurship', credit: '3' },
          { course: 'Engineering & Technology Management', credit: '' },
          { course: 'Project Management', credit: '' },
          { course: 'Quality Systems Management', credit: '' }
        ]
      },
      {
        category: 'Faculty Core',
        entries: [
          { course: 'Mechanical System Design', credit: '3' },
          { course: 'Numerical Analysis', credit: '3' },
          { course: 'Master Project', credit: '10' }
        ]
      },
      {
        category: 'Programme Core',
        entries: [
          { course: 'Advanced Heat Transfer', credit: '3' },
          { course: 'Monitoring & Verification', credit: '3' },
          { course: 'Energy Management', credit: '3' },
          { course: 'Renewable Energy Technology', credit: '3' },
          { course: 'Computational Fluid Dynamics', credit: '3' }
        ]
      },
      {
        category: 'Programme Electives',
        selectionNote: 'Choose one',
        entries: [
          { course: 'Bio-Fuel Technology', credit: '3' },
          { course: 'Waste Heat Recovery', credit: '' },
          { course: 'Small Scale Electric Hydro', credit: '' }
        ]
      }
    ]
  },
  {
    id: 'ftkm-automotive',
    title: 'Master of Mechanical Engineering (Automotive)',
    summary: 'Advanced coursework programme focusing on intelligent vehicle systems, performance, and automotive engineering integration.',
    durationFullTime: '1.5 - 2.5 years',
    durationPartTime: '3 - 5 years',
    totalCredits: '40',
    accreditation: 'MQA / FA1499',
    structure: [
      { category: 'Compulsory Subjects', entries: [{ course: 'Research Methodology', credit: '3' }] },
      {
        category: 'University Elective Subjects',
        selectionNote: 'Choose one',
        entries: [
          { course: 'Entrepreneurship', credit: '3' },
          { course: 'Engineering & Technology Management', credit: '' },
          { course: 'Project Management', credit: '' },
          { course: 'Quality Systems Management', credit: '' }
        ]
      },
      {
        category: 'Faculty Core',
        entries: [
          { course: 'Mechanical System Design', credit: '3' },
          { course: 'Numerical Analysis', credit: '3' },
          { course: 'Master Project', credit: '10' }
        ]
      },
      {
        category: 'Programme Core',
        entries: [
          { course: 'Green Technology Vehicle', credit: '3' },
          { course: 'Vehicle Electrical & Electronics System', credit: '3' },
          { course: 'Intelligent Vehicle Control', credit: '3' },
          { course: 'Noise, Vibration & Harshness', credit: '3' },
          { course: 'Automotive Human Factor', credit: '3' }
        ]
      },
      {
        category: 'Programme Electives',
        selectionNote: 'Choose two',
        entries: [
          { course: 'Emission Control Technology', credit: '3' },
          { course: 'Vehicle Power Train and Driveline', credit: '3' },
          { course: 'Vehicle Braking System', credit: '' },
          { course: 'Tyre Behaviour & Performance Control', credit: '' },
          { course: 'Advanced Vehicle Dynamics', credit: '3' }
        ]
      }
    ]
  },
  {
    id: 'ftkm-product-design',
    title: 'Master of Mechanical Engineering (Product Design)',
    summary: 'Premium design-focused pathway blending product engineering, manufacturing strategy, and reliability-centred design methods.',
    durationFullTime: '1.5 - 2.5 years',
    durationPartTime: '3 - 5 years',
    totalCredits: '40',
    structure: [
      { category: 'Compulsory Subjects', entries: [{ course: 'Research Methodology', credit: '3' }] },
      {
        category: 'University Elective Subjects',
        selectionNote: 'Choose one',
        entries: [
          { course: 'Entrepreneurship', credit: '3' },
          { course: 'Engineering & Technology Management', credit: '' },
          { course: 'Project Management', credit: '' },
          { course: 'Quality Systems Management', credit: '' }
        ]
      },
      {
        category: 'Faculty Core',
        entries: [
          { course: 'Mechanical System Design', credit: '3' },
          { course: 'Numerical Analysis', credit: '3' },
          { course: 'Master Project', credit: '10' }
        ]
      },
      {
        category: 'Programme Core',
        entries: [
          { course: 'Computer Aided Engineering', credit: '3' },
          { course: 'Time Compression Technologies', credit: '3' },
          { course: 'Fatigue & Fracture Mechanics', credit: '3' },
          { course: 'Thermal System Design', credit: '3' }
        ]
      },
      {
        category: 'Programme Electives',
        selectionNote: 'Choose two',
        entries: [
          { course: 'Industrial & Design Engineering', credit: '3' },
          { course: 'Human Factors in Design', credit: '3' },
          { course: 'Product Reliability & Integrity', credit: '' },
          { course: 'Design for Manufacturing and Assembly', credit: '' }
        ]
      }
    ]
  },
  {
    id: 'ftkm-mechanical',
    title: 'Master of Mechanical Engineering',
    summary: 'A contemporary taught-course programme introduced for advanced mechanical engineering practice with flexible registration modes.',
    durationFullTime: '1 - 2 years',
    durationPartTime: '2 - 3 years',
    totalCredits: '40',
    accreditation: 'MQA / FA10825',
    modeLabel: 'Taught Course',
    mqaLevel: '7',
    necField: '521 - Mechanics and Metal Work',
    studyMode: 'Full-Time (1-2 years) / Part-Time (2-3 years)',
    programmeType: 'New taught course programme introduced in 2019',
    fees: {
      malaysian: 'RM 8,710.00',
      international: 'RM 14,710.00'
    },
    structure: [
      { category: 'Compulsory Subjects', entries: [{ course: 'Research Methodology', credit: '3' }] },
      { category: 'University Elective', entries: [{ course: 'Project Management', credit: '3' }] },
      {
        category: 'Programme Core',
        entries: [
          { course: 'Numerical Analysis', credit: '3' },
          { course: 'Mechanical System Design', credit: '3' },
          { course: 'Applied Heat Transfer', credit: '10' },
          { course: 'Applied Engineering Statistics', credit: '3' },
          { course: 'Advanced Material Engineering', credit: '3' },
          { course: '3D Modelling', credit: '3' },
          { course: 'Structural Dynamic', credit: '3' }
        ]
      },
      {
        category: 'Elective',
        selectionNote: 'Choose one only',
        entries: [
          { course: 'Computational Fluid Dynamics', credit: '3' },
          { course: 'Solid Mechanics Computer Modelling', credit: '' },
          { course: 'Intelligent Vehicle Control', credit: '' },
          { course: 'Computer Aided Engineering', credit: '' }
        ]
      },
      {
        category: 'Master Project',
        entries: [
          { course: 'Master Project I', credit: '4' },
          { course: 'Master Project II', credit: '6' }
        ]
      }
    ]
  }
];

const FTKM_CONTACT = {
  faculty: 'Faculty of Mechanical Technology and Engineering (FTKM)',
  university: 'Universiti Teknikal Malaysia Melaka (UTeM)',
  address: 'Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia.',
  phone: '+606-229 2119',
  email: 'ftkm@utem.edu.my',
  website: 'https://ftkm.utem.edu.my/'
};

const FacultyProgrammes: React.FC<FacultyProgrammesProps> = ({ lang }) => {
  const [searchParams] = useSearchParams();
  const facultyId = searchParams.get('faculty');
  const categoryId = searchParams.get('category');

  const faculty = faculties.find(f => f.id === facultyId);
  const category = categories.find(c => c.id === categoryId);

  if (!faculty) return <div className="pt-40 text-center">Faculty not found</div>;

  const filteredProgrammes = allProgrammes.filter(p => p.faculty === facultyId && p.category === categoryId);
  const isFtkmTaught = facultyId === 'fkm' && categoryId === 'taught';
  const getSharedSelectionCredit = (group: CurriculumGroup) => {
    if (!group.selectionNote) return null;
    const credits = group.entries.map((entry) => entry.credit).filter(Boolean);
    if (credits.length === 0) return null;
    return credits.every((credit) => credit === credits[0]) ? credits[0] : null;
  };

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
            <Link to="/programmes" className="hover:text-white transition-colors">PROGRAMMES</Link>
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
          ) : isFtkmTaught ? (
            <div className="space-y-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {lang === 'EN' ? 'FTKM Taught-Course Portfolio' : 'Portfolio Kerja Kursus FTKM'}
                </h2>
                <Link 
                  to={`/programmes/faculty?faculty=${facultyId}`}
                  className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest flex items-center space-x-2"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  <span>{lang === 'EN' ? 'Back to Categories' : 'Kembali ke Kategori'}</span>
                </Link>
              </div>

              <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-12 bg-[#A51C30]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                      {lang === 'EN' ? 'Programmes Offered' : 'Program Ditawarkan'}
                    </span>
                  </div>
                  <div className="rounded-full border border-[#A51C30]/15 bg-[#faf7f5] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#A51C30]">
                    {lang === 'EN' ? '4 taught-course pathways' : '4 laluan kerja kursus'}
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                          {lang === 'EN' ? 'Programme' : 'Program'}
                        </th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                          {lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}
                        </th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                          {lang === 'EN' ? 'Part Time' : 'Separuh Masa'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {FTKM_TAUGHT_PROGRAMMES.map((programme) => (
                        <tr key={programme.id}>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">{programme.title}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.durationFullTime}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.durationPartTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-8">
                {FTKM_TAUGHT_PROGRAMMES.map((programme, idx) => (
                  <motion.article
                    key={programme.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="border-b border-gray-200 bg-[#fcfaf8] px-7 py-7">
                      <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                        <div className="max-w-3xl">
                          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                            {programme.programmeType || (lang === 'EN' ? 'Taught-Course Programme' : 'Program Kerja Kursus')}
                          </div>
                          <h3 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
                            {programme.title}
                          </h3>
                          <p className="mt-4 text-base leading-8 text-gray-600">
                            {programme.summary}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 xl:min-w-[340px]">
                          <div className="rounded-2xl border border-gray-200 bg-white p-4">
                            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</div>
                            <div className="mt-2 text-sm font-semibold text-gray-900">{programme.durationFullTime}</div>
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-4">
                            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</div>
                            <div className="mt-2 text-sm font-semibold text-gray-900">{programme.durationPartTime}</div>
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-4">
                            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Total Credits' : 'Jumlah Kredit'}</div>
                            <div className="mt-2 text-sm font-semibold text-gray-900">{programme.totalCredits}</div>
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-4">
                            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">Accreditation</div>
                            <div className="mt-2 text-sm font-semibold text-gray-900">{programme.accreditation || '-'}</div>
                          </div>
                        </div>
                      </div>

                      {(programme.mqaLevel || programme.necField || programme.studyMode || programme.fees) && (
                        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                          {programme.mqaLevel && (
                            <div className="rounded-2xl bg-white px-5 py-4 border border-gray-200">
                              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">MQA Level</div>
                              <div className="mt-2 text-sm font-semibold text-gray-900">{programme.mqaLevel}</div>
                            </div>
                          )}
                          {programme.necField && (
                            <div className="rounded-2xl bg-white px-5 py-4 border border-gray-200">
                              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">NEC Field</div>
                              <div className="mt-2 text-sm font-semibold text-gray-900">{programme.necField}</div>
                            </div>
                          )}
                          {programme.studyMode && (
                            <div className="rounded-2xl bg-white px-5 py-4 border border-gray-200">
                              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Mode of Study' : 'Mod Pengajian'}</div>
                              <div className="mt-2 text-sm font-semibold text-gray-900">{programme.studyMode}</div>
                            </div>
                          )}
                          {programme.fees && (
                            <div className="rounded-2xl bg-white px-5 py-4 border border-gray-200">
                              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Academic Fee' : 'Yuran Akademik'}</div>
                              <div className="mt-2 text-sm font-semibold text-gray-900">{programme.fees.malaysian}</div>
                              <div className="text-xs text-gray-500">{lang === 'EN' ? 'Malaysian' : 'Malaysia'}</div>
                              <div className="mt-3 text-sm font-semibold text-gray-900">{programme.fees.international}</div>
                              <div className="text-xs text-gray-500">{lang === 'EN' ? 'International' : 'Antarabangsa'}</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="px-7 py-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#A51C30]/70" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#A51C30]">
                          {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-[#fff34a]">
                            <tr>
                              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.18em] text-gray-900">{lang === 'EN' ? 'Category' : 'Kategori'}</th>
                              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.18em] text-gray-900">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                              <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-gray-900">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-300 bg-[#c7f3f3]">
                            {programme.structure.map((group) => {
                              const sharedCredit = getSharedSelectionCredit(group);
                              return group.entries.map((entry, entryIndex) => (
                                <tr key={`${group.category}-${entry.course}`} className="align-top">
                                  {entryIndex === 0 && (
                                    <td rowSpan={group.entries.length} className="align-top bg-[#c7f3f3] px-4 py-3 text-[13px] font-semibold leading-5 text-gray-900 border-r border-gray-300">
                                      <div>{group.category}</div>
                                      {group.selectionNote && (
                                        <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#A51C30]">
                                          {group.selectionNote}
                                        </div>
                                      )}
                                    </td>
                                  )}
                                  <td className="px-4 py-2.5 text-[13px] leading-5 text-gray-700">{entry.course}</td>
                                  {sharedCredit ? (
                                    entryIndex === 0 && (
                                      <td rowSpan={group.entries.length} className="bg-[#c7f3f3] px-4 py-3 text-center text-[13px] font-semibold leading-5 text-gray-900 border-l border-gray-300 align-middle">
                                        {sharedCredit}
                                      </td>
                                    )
                                  ) : (
                                    <td className="px-4 py-2.5 text-center text-[13px] font-semibold leading-5 text-gray-900">{entry.credit}</td>
                                  )}
                                </tr>
                              ));
                            })}
                            <tr className="bg-[#98f28c]">
                              <td colSpan={2} className="px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-gray-800">
                                {lang === 'EN' ? 'Total Credit Hours' : 'Jumlah Jam Kredit'}
                              </td>
                              <td className="px-4 py-3 text-center text-sm font-bold text-gray-900">{programme.totalCredits}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)]">
                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programme Fees' : 'Yuran Program'}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Master of Mechanical Engineering</h3>
                  <p className="text-sm leading-7 text-gray-600 mb-6">
                    {lang === 'EN'
                      ? 'Academic fees for the newly introduced Master of Mechanical Engineering taught-course programme.'
                      : 'Yuran akademik untuk program kerja kursus Sarjana Kejuruteraan Mekanikal yang baharu diperkenalkan.'}
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#f4e9e3]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Study Mode' : 'Mod Pengajian'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Malaysian' : 'Malaysia'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'International' : 'Antarabangsa'}</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-5 py-4 text-sm font-semibold text-gray-900">Taught Course</td>
                          <td className="px-5 py-4 text-sm text-gray-600">1 - 2</td>
                          <td className="px-5 py-4 text-sm text-gray-600">2 - 3</td>
                          <td className="px-5 py-4 text-sm text-gray-900">RM 8,710.00</td>
                          <td className="px-5 py-4 text-sm text-gray-900">RM 14,710.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Further Information' : 'Maklumat Lanjut'}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">{FTKM_CONTACT.faculty}</h3>
                  <p className="text-sm leading-7 text-gray-600">
                    {FTKM_CONTACT.university}<br />
                    {FTKM_CONTACT.address}
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <Phone size={16} className="text-[#A51C30]" />
                      <span>{FTKM_CONTACT.phone}</span>
                    </div>
                    <a href={`mailto:${FTKM_CONTACT.email}`} className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Mail size={16} className="text-[#A51C30]" />
                      <span>{FTKM_CONTACT.email}</span>
                    </a>
                    <a href={FTKM_CONTACT.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Globe size={16} className="text-[#A51C30]" />
                      <span>{FTKM_CONTACT.website}</span>
                    </a>
                  </div>
                </div>
              </section>
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
