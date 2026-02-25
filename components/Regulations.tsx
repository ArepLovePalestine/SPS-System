
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, FileText, Download, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface RegulationsProps {
  lang: Language;
}

const Regulations: React.FC<RegulationsProps> = ({ lang }) => {
  const rules = [
    {
      title: { EN: 'Academic Integrity', BM: 'Integriti Akademik' },
      desc: { EN: 'Strict adherence to ethical research practices and anti-plagiarism policies.', BM: 'Pematuhan ketat terhadap amalan penyelidikan beretika dan polisi antiPlagiarisme.' }
    },
    {
      title: { EN: 'Candidature Duration', BM: 'Tempoh Pencalonan' },
      desc: { EN: 'Guidelines on minimum and maximum duration for Master and PhD completion.', BM: 'Garis panduan mengenai tempoh minimum dan maksimum untuk penyiapan Sarjana dan PhD.' }
    },
    {
      title: { EN: 'Thesis Submission', BM: 'Penghantaran Tesis' },
      desc: { EN: 'Protocols for thesis formatting, examination, and final submission.', BM: 'Protokol untuk format tesis, peperiksaan, dan penghantaran akhir.' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
            alt="Regulations" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <span className="text-white">{lang === 'EN' ? 'ACADEMIC REGULATIONS' : 'PERATURAN AKADEMIK'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            {lang === 'EN' ? 'Governance & Ethics' : 'Tadbir Urus & Etika'}
          </motion.h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">
            {lang === 'EN' 
              ? 'Ensuring the highest standards of academic excellence and integrity.' 
              : 'Memastikan piawaian tertinggi kecemerlangan dan integriti akademik.'}
          </p>
        </div>
      </section>

      {/* Regulations Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {rules.map((rule, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{rule.title[lang]}</h3>
                <p className="text-gray-500 font-light leading-relaxed mb-10 flex-grow">{rule.desc[lang]}</p>
                <button className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-[#A51C30] hover:underline">
                  <FileText size={16} />
                  <span>{lang === 'EN' ? 'Read Full Policy' : 'Baca Polisi Penuh'}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Download Section */}
          <div className="mt-24 bg-white p-12 md:p-20 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0 w-24 h-24 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-600">
              <AlertCircle size={48} strokeWidth={1} />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                {lang === 'EN' ? 'Postgraduate Handbook' : 'Buku Panduan Pascasiswazah'}
              </h2>
              <p className="text-gray-500 font-light text-lg">
                {lang === 'EN' 
                  ? 'Download the complete handbook containing all academic regulations and procedures.' 
                  : 'Muat turun buku panduan lengkap yang mengandungi semua peraturan dan prosedur akademik.'}
              </p>
            </div>
            <button className="shrink-0 bg-[#A51C30] text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#800000] transition-all flex items-center space-x-3">
              <Download size={16} />
              <span>{lang === 'EN' ? 'Download PDF' : 'Muat Turun PDF'}</span>
            </button>
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

export default Regulations;
