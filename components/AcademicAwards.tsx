
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Trophy, 
  Star, 
  Medal,
  Info,
  User,
  ArrowUp,
  Home
} from 'lucide-react';
import { Language } from '../types';

interface AwardsProps {
  lang: Language;
}

interface DistinctionAward {
  id: string;
  name: { EN: string; BM: string };
  level: { EN: string; BM: string };
  details: { EN: string[]; BM: string[] };
  reward: { EN: string; BM: string };
  convocation: { EN: string; BM: string };
  icon: React.ElementType;
}

interface EligibilityRequirement {
  no: string;
  title: { EN: string; BM: string };
  points: { EN: string[]; BM: string[] };
}

interface Recipient {
  name: string;
  award: { EN: string; BM: string };
  faculty: string;
}

const Awards: React.FC<AwardsProps> = ({ lang }) => {

  const awardsData: DistinctionAward[] = [
    {
      id: 'chancellor',
      name: { EN: "Chancellor's Award", BM: 'Anugerah Canselor' },
      level: { EN: 'Doctor of Philosophy (PhD)', BM: 'Doktor Falsafah (PhD)' },
      details: { EN: ['Highest academic honor', 'Announced at Convocation'], BM: ['Penghormatan akademik tertinggi', 'Diumumkan di Konvokesyen'] },
      reward: { EN: 'RM 2,000 + Certificate', BM: 'RM 2,000 + Sijil' },
      convocation: { EN: 'Must attend the Convocation Ceremony', BM: 'Mesti menghadiri Majlis Konvokesyen' },
      icon: Trophy
    },
    {
      id: 'pro-chancellor',
      name: { EN: "Pro-Chancellor's Award", BM: 'Anugerah Pro-Canselor' },
      level: { EN: 'Master of Science (MSc)', BM: 'Sarjana Sains (MSc)' },
      details: { EN: ['Exceptional research output', 'Announced at Convocation'], BM: ['Hasil penyelidikan luar biasa', 'Diumumkan di Konvokesyen'] },
      reward: { EN: 'RM 1,500 + Certificate', BM: 'RM 1,500 + Sijil' },
      convocation: { EN: 'Must attend the Convocation Ceremony', BM: 'Mesti menghadiri Majlis Konvokesyen' },
      icon: Medal
    },
    {
      id: 'vice-chancellor',
      name: { EN: "Vice-Chancellor's Award", BM: 'Anugerah Naib Canselor' },
      level: { EN: 'Master (Mixed Mode & Taught Course)', BM: 'Sarjana (Mod Campuran & Kerja Kursus)' },
      details: { EN: ['Excellence in academic & results', 'Announced at Convocation'], BM: ['Kecemerlangan akademik & keputusan', 'Diumumkan di Konvokesyen'] },
      reward: { EN: 'RM 1,000 + Certificate', BM: 'RM 1,000 + Sijil' },
      convocation: { EN: 'Name will be announced at Convocation', BM: 'Nama akan diumumkan di Konvokesyen' },
      icon: Award
    },
    {
      id: 'best-thesis',
      name: { EN: "Best Thesis Award", BM: 'Anugerah Tesis Terbaik' },
      level: { EN: 'PhD and MSc (All Modes)', BM: 'PhD dan MSc (Semua Mod)' },
      details: { EN: ['Innovative research contribution', 'Superior thesis quality'], BM: ['Sumbangan penyelidikan inovatif', 'Kualiti tesis unggul'] },
      reward: { EN: 'RM 1,000 + Certificate', BM: 'RM 1,000 + Sijil' },
      convocation: { EN: 'Name will be announced at Convocation', BM: 'Nama akan diumumkan di Konvokesyen' },
      icon: Star
    }
  ];

  const eligibilityRequirements: EligibilityRequirement[] = [
    {
      no: '01',
      title: { EN: 'Graduate-on-Time (GOT) Status', BM: 'Status Bergraduat Dalam Tempoh (GOT)' },
      points: {
        EN: [
          'Proof of evidence must be attached to the application',
          'Candidate must fulfill the GOT criteria based on their respective program duration'
        ],
        BM: [
          'Bukti keterangan mestilah dilampirkan bersama permohonan',
          'Calon mestilah memenuhi kriteria GOT berdasarkan tempoh program masing-masing'
        ]
      }
    },
    {
      no: '02',
      title: { EN: 'Publication Standards', BM: 'Piawaian Penerbitan' },
      points: {
        EN: [
          'Must be the 1st Author or Student MUST be the first student author',
          'All articles must be already published',
          'Clearly mentioned the Month and Year of Publication',
          'Publications without the name of supervisors will not be considered',
          'Only publication with UTeM affiliation will be considered',
          'Indexed journal (SCOPUS or ERA or ISI WOS at level Q1 / Q2 / Q3 / Q4) must be published during duration of study',
          'Proof of evidence for indexed publication must be attached'
        ],
        BM: [
          'Mestilah Penulis Pertama atau Pelajar MESTILAH penulis pelajar pertama',
          'Semua artikel mestilah sudah diterbitkan',
          'Menyatakan Bulan dan Tahun Penerbitan dengan jelas',
          'Penerbitan tanpa nama penyelia tidak akan dipertimbangkan',
          'Hanya penerbitan dengan gabungan (affiliation) UTeM akan dipertimbangkan',
          'Jurnal berindeks (SCOPUS atau ERA atau ISI WOS tahap Q1 / Q2 / Q3 / Q4) mestilah diterbitkan semasa tempoh pengajian',
          'Bukti keterangan untuk penerbitan berindeks mestilah dilampirkan'
        ]
      }
    },
    {
      no: '03',
      title: { EN: 'Academic & Non-Academic Awards', BM: 'Anugerah Akademik & Bukan Akademik' },
      points: {
        EN: [
          'Candidates who received any academic or non-academic award(s)',
          'Proof of evidence must be attached',
          'The awards should be related to your research study'
        ],
        BM: [
          'Calon yang menerima sebarang anugerah akademik atau bukan akademik',
          'Bukti keterangan mestilah dilampirkan',
          'Anugerah tersebut mestilah berkaitan dengan kajian penyelidikan anda'
        ]
      }
    },
    {
      no: '04',
      title: { EN: 'External Recognitions', BM: 'Pengiktirafan Luar' },
      points: {
        EN: [
          'Recognition(s) from Industry / Community / MOA / MOU',
          'Proof of evidence must be attached',
          'Should be related to your research study'
        ],
        BM: [
          'Pengiktirafan daripada Industri / Komuniti / MOA / MOU',
          'Bukti keterangan mestilah dilampirkan',
          'Mestilah berkaitan dengan kajian penyelidikan anda'
        ]
      }
    },
    {
      no: '05',
      title: { EN: 'Societal & Research Participation', BM: 'Penyertaan Persatuan & Penyelidikan' },
      points: {
        EN: [
          'Participation in any society(s) / competition(s) / conference(s) / community service(s)',
          'Levels: International / National / University Level',
          'Proof of evidence must be attached'
        ],
        BM: [
          'Penyertaan dalam sebarang persatuan / pertandingan / persidangan / khidmat masyarakat',
          'Tahap: Antarabangsa / Kebangsaan / Peringkat Universiti',
          'Bukti keterangan mestilah dilampirkan'
        ]
      }
    },
    {
      no: '06',
      title: { EN: 'Thesis & Report Endorsement', BM: 'Perakuan Tesis & Laporan' },
      points: {
        EN: [
          'Proof of evidence for Thesis / Dissertation / Master Project Report must be attached',
          'Softcopy of the original report is a must',
          'Must be endorsed by supervisor and faculty'
        ],
        BM: [
          'Bukti keterangan Tesis / Disertasi / Laporan Projek Sarjana mestilah dilampirkan',
          'Salinan lembut (softcopy) laporan asal adalah wajib',
          'Mestilah diperakukan oleh penyelia dan fakulti'
        ]
      }
    },
    {
      no: '07',
      title: { EN: 'Application Procedure', BM: 'Prosedur Permohonan' },
      points: {
        EN: [
          'Candidate must fill the application form of Postgraduate Academic Awards',
          'Application must be enclosed with valid and complete information and proof',
          'Incomplete applications will be rejected',
          'Only application endorsed by faculty / institute will be considered',
          'Result of application is strictly final, and no appeal will be entertained'
        ],
        BM: [
          'Calon mestilah mengisi borang permohonan Anugerah Akademik Pascasiswazah',
          'Permohonan mestilah disertakan dengan maklumat dan bukti yang sah serta lengkap',
          'Permohonan yang tidak lengkap akan ditolak',
          'Hanya permohonan yang diperakukan oleh fakulti / institut akan dipertimbangkan',
          'Keputusan permohonan adalah muktamad, dan sebarang rayuan tidak akan dilayan'
        ]
      }
    }
  ];

  const pastRecipients: Record<string, Recipient[]> = {
    '2018': [
      { name: 'SATRYA FAJRI PRATAMA', award: { EN: "Chancellor's Award (PhD)", BM: "Hadiah Canselor (PhD)" }, faculty: 'FKE' },
      { name: 'NURAYATI BINTI DABAS', award: { EN: "Pro-Chancellor's Award (MSc)", BM: "Hadiah Pro Canselor (MSc)" }, faculty: 'FKM' },
      { name: 'MD SAIFUDDIN BIN MD YUSOP', award: { EN: "Vice Chancellor's Award (Master Engineering)", BM: "Hadiah Naib Canselor (Sarjana Kejuruteraan)" }, faculty: 'FKM' },
      { name: 'NOORHARNANI BINTI MOHD SARKAWI', award: { EN: "Vice Chancellor's Award (Master Non-Engineering)", BM: "Hadiah Naib Canselor (Sarjana Bukan Kejuruteraan)" }, faculty: 'FKM' },
      { name: 'CHIEW TSUNG HENG', award: { EN: "Best Thesis Award (Doctoral Engineering)", BM: "Hadiah Tesis Terbaik (Kedoktoran Kejuruteraan)" }, faculty: 'FKM' },
      { name: 'MU’ATH IBRAHIM MOHAMMAD JARRAH', award: { EN: "Best Thesis Award (Doctoral Non-Engineering)", BM: "Hadiah Tesis Terbaik (Kedoktoran Bukan Kejuruteraan)" }, faculty: 'FKM' },
      { name: 'MARWAN QAID ABDULRAZZAQ MOHAMMED', award: { EN: "Best Thesis Award (Master Engineering)", BM: "Hadiah Tesis Terbaik (Sarjana Kejuruteraan)" }, faculty: 'FKM' },
      { name: 'SIAH JIA WEN', award: { EN: "Best Thesis Award (Master Non-Engineering)", BM: "Hadiah Tesis Terbaik (Sarjana Bukan Kejuruteraan)" }, faculty: 'FKM' }
    ],
    '2017': [
      { name: 'Dr. Amyrul Azuan bin Mohd Bahar', award: { EN: "Chancellor's Award", BM: "Anugerah Canselor" }, faculty: 'FKEKK' },
      { name: 'Sharif Ahmed Qasem Ahmed', award: { EN: "Pro-Chancellor's Award", BM: "Anugerah Pro-Canselor" }, faculty: 'FKEKK' },
      { name: 'Faris bin Azman', award: { EN: "Vice-Chancellor's Award", BM: "Anugerah Naib Canselor" }, faculty: 'FKM' },
      { name: 'Ir. Dr. Noorazizi bin Mohd Samsuddin', award: { EN: "Best Thesis Award (PhD)", BM: "Anugerah Tesis Terbaik (PhD)" }, faculty: 'FKP' },
      { name: 'Sharif Ahmed Qasem Ahmed', award: { EN: "Best Thesis Award (MSc)", BM: "Anugerah Tesis Terbaik (MSc)" }, faculty: 'FKEKK' }
    ]
  };

  const content = {
    title: { EN: 'Postgraduate Academic Awards', BM: 'Anugerah Akademik Pascasiswazah' },
    intro: {
      EN: 'The Postgraduate Academic Awards aim to recognize postgraduate students for their caliber and excellence in the academic field. Recipients are committed contributors to the discovery and development of knowledge, aligning with the university\'s aspirations as a center of engineering and technical excellence.\n\nNominations are open to all students who have graduated at the Postgraduate level (PhD, MSc, Mixed Mode, or Taught Course).',
      BM: 'Anugerah Akademik Pascasiswazah bertujuan untuk mengiktiraf pelajar pascasiswazah dalam kaliber dan kecemerlangan mereka dalam bidang akademik. Penerima adalah penyumbang komited kepada penemuan dan pembangunan pengetahuan, selaras dengan aspirasi universiti sebagai pusat kecemerlangan kejuruteraan dan teknikal.\n\nPencalonan dibuka kepada semua pelajar yang telah bergraduat di peringkat Pascasiswazah (PhD, MSc, Mod Campuran, atau Kerja Kursus).'
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A51C30]/[0.01] -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-1 bg-[#A51C30] mb-10"
          />
          
          <div className="max-w-4xl space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight leading-[1.1]"
            >
              Postgraduate <br />
              <span className="text-[#A51C30] italic font-normal">Academic Awards</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl"
            >
              {content.intro[lang]}
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2: AWARD CATEGORIES TABLE */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">{lang === 'EN' ? 'Award Categories' : 'Kategori Anugerah'}</h2>
          <div className="w-10 h-0.5 bg-[#A51C30]" />
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-amber-400 text-gray-900 border-b border-amber-500/10">
                <th className="px-4 py-2 text-[9px] font-bold uppercase tracking-widest border-r border-amber-500/20 w-10 text-center">No.</th>
                <th className="px-4 py-2 text-[9px] font-bold uppercase tracking-widest border-r border-amber-500/20 w-1/3">Academic Award</th>
                <th className="px-4 py-2 text-[9px] font-bold uppercase tracking-widest border-r border-amber-500/20 w-1/4">Level</th>
                <th className="px-4 py-2 text-[9px] font-bold uppercase tracking-widest">Award Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 italic">
              {awardsData.map((award, idx) => (
                <tr key={award.id} className="hover:bg-amber-50/20 transition-colors">
                  <td className="px-4 py-3 text-[10px] font-bold text-gray-400 border-r border-gray-100 text-center">{idx + 1}</td>
                  <td className="px-4 py-3 border-r border-gray-100">
                    <p className="text-[13px] font-bold text-gray-900 leading-tight">{award.name[lang]}</p>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100">
                    <span className="text-[9px] font-bold text-gray-600 uppercase tracking-tight">{award.level[lang]}</span>
                  </td>
                  <td className="px-4 py-3 space-y-0.5">
                     <p className="text-[11px] text-gray-700 font-semibold">{award.reward[lang]}</p>
                     <p className="text-[9px] text-gray-400 leading-relaxed italic">{award.convocation[lang]}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-gray-500 font-medium italic border-l-2 border-amber-400 pl-3 py-1 inline-block bg-amber-50/30 pr-5 rounded-r">
            Candidate should fill the application form and must be accompanied by a copy of the document as evidence, if relevant.
          </p>
        </div>
      </section>

      {/* SECTION 3: ELIGIBILITY & REQUIREMENTS TABLE */}
      <section className="py-10 bg-[#F8F9FA] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Eligibility & Requirements</h2>
            <div className="w-10 h-0.5 bg-[#A51C30]" />
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm bg-white">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="bg-amber-400 text-gray-900 border-b border-amber-500/10">
                  <th className="px-4 py-2 text-[9px] font-bold uppercase tracking-widest border-r border-amber-500/20 w-10 text-center">NO.</th>
                  <th className="px-4 py-2 text-[9px] font-bold uppercase tracking-widest border-r border-amber-500/20 w-1/4">Eligibility / Requirement</th>
                  <th className="px-4 py-2 text-[9px] font-bold uppercase tracking-widest">Additional Information</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {eligibilityRequirements.map((req) => (
                  <tr key={req.no}>
                    <td className="px-4 py-3 text-[10px] font-bold text-gray-400 border-r border-gray-200 align-top text-center">{parseInt(req.no)}.</td>
                    <td className="px-4 py-3 border-r border-gray-200 align-top bg-cyan-50/[0.15]">
                      <h3 className="text-[12px] font-bold text-gray-800 leading-snug">{req.title[lang]}</h3>
                    </td>
                    <td className="px-4 py-3 align-top bg-cyan-50/[0.15]">
                      <ul className="space-y-0.5">
                        {req.points[lang].map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-[#A51C30]/20 rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-[11px] text-gray-500 leading-normal">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: PAST RECIPIENTS */}
      <section className="py-32 bg-[#F9FAFB] relative overflow-hidden">
        {/* Subtle architectural background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A51C30]/[0.015] -skew-x-12 translate-x-1/2" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gray-100 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="max-w-2xl mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
              Past <span className="text-[#A51C30] italic font-normal">Convocation Awards</span>
            </h2>
            <div className="w-20 h-1 bg-[#A51C30] mb-8" />
            <p className="text-lg text-gray-500 font-light italic leading-relaxed">
              Commemorating academic brilliance and scholarly distinction at official UTeM Convocation ceremonies.
            </p>
          </div>

          <div className="space-y-32">
            {Object.keys(pastRecipients).sort((a, b) => parseInt(b) - parseInt(a)).map((year) => (
              <div key={year} className="space-y-12">
                <div className="flex items-center space-x-8">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900/10 uppercase tracking-tighter">
                    {year === '2018' ? 'UTeM 14th Convocation' : year === '2017' ? 'UTeM 13th Convocation' : year}
                  </h3>
                  <div className="flex-grow h-px bg-gray-200" />
                  <span className="text-xl font-serif font-bold text-[#A51C30]/30">{year}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {pastRecipients[year].map((recipient, rIdx) => (
                    <motion.div 
                      key={rIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: rIdx * 0.05 }}
                      className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="flex flex-col h-full space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-300 group-hover:bg-[#A51C30]/5 group-hover:text-[#A51C30] transition-colors duration-500">
                             <User size={18} strokeWidth={1.5} />
                          </div>
                          <div className="px-3 py-1 bg-gray-50 text-gray-400 text-[8px] font-bold uppercase tracking-widest rounded-full border border-gray-100 group-hover:border-[#A51C30]/10 group-hover:text-[#A51C30]/60 transition-all">
                            Awardee
                          </div>
                        </div>

                        <div className="space-y-5 flex-grow">
                          <h4 className="text-lg font-serif font-bold text-gray-800 group-hover:text-[#A51C30] transition-colors duration-500 leading-tight">
                            {recipient.name}
                          </h4>
                          
                          <div className="pt-5 border-t border-gray-50 space-y-4">
                            <div className="space-y-1">
                              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Distinction</p>
                              <p className="text-[12px] font-medium text-gray-700 leading-relaxed max-w-[200px]">
                                {recipient.award[lang]}
                              </p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Faculty</p>
                              <p className="text-[11px] font-light text-gray-500">
                                {recipient.faculty}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="py-24 border-t border-gray-50 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              to="/"
              className="flex items-center space-x-3 px-10 py-5 bg-white border border-gray-200 text-gray-700 rounded-2xl text-xs font-bold uppercase tracking-widest hover:border-[#A51C30] hover:text-[#A51C30] hover:shadow-lg transition-all group"
            >
              <Home size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>{lang === 'EN' ? 'Back to Homepage' : 'Kembali ke Laman Utama'}</span>
            </Link>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 px-10 py-5 bg-[#A51C30] text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-[#800000] hover:shadow-xl hover:shadow-red-900/20 hover:-translate-y-1 transition-all group"
            >
              <span>{lang === 'EN' ? 'Scroll to Top' : 'Kembali ke Atas'}</span>
              <ArrowUp size={16} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

          <div className="mt-12 text-center text-gray-400">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Postgraduate Academic Awards</p>
            <p className="text-xs italic font-light">UTeM School of Postgraduate Studies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
