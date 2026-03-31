
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  FileText, 
  Download, 
  Eye, 
  ShieldCheck, 
  ChevronRight, 
  Info,
  FileCheck,
  ClipboardList,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';

interface ISODocumentsProps {
  lang: Language;
}

const ISODocuments: React.FC<ISODocumentsProps> = ({ lang }) => {
  const documents = [
    {
      id: 1,
      title: { EN: 'Manual Kualiti', BM: 'Manual Kualiti' },
      description: { 
        EN: 'Comprehensive quality manual outlining the standards and procedures for the School of Graduate Studies.',
        BM: 'Manual kualiti komprehensif yang menggariskan piawaian dan prosedur untuk Sekolah Pengajian Siswazah.'
      },
      href: 'https://dev.utem.edu.my/sps/administrator/index.php?option=com_ajax&p=customizer&templateStyle=13&section=builder&format=html&site=https%3A%2F%2Fdev.utem.edu.my%2Fsps%2Fabout-us%2Fiso-documents.html&return=https%3A%2F%2Fdev.utem.edu.my%2Fsps%2Fadministrator%2Findex.php%3Foption%3Dcom_content%26view%3Darticle%26return%3Dfeatured%26layout%3Dedit%26id%3D197%26return%3Dfeatured',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: { EN: 'Prosedur Kerja', BM: 'Prosedur Kerja' },
      description: { 
        EN: 'Standard operating procedures for administrative and academic processes within the graduate school.',
        BM: 'Prosedur operasi standard untuk proses pentadbiran dan akademik dalam sekolah siswazah.'
      },
      href: 'https://iso.utem.edu.my/index.php/b-prosedur-kerja/a-proses-pengurusan-pengajaran-pembelajaran-dan-penyelidikan/2-pengurusan-perkhidmatan-akademik-pascasiswazah',
      icon: ClipboardList,
      color: 'text-[#A51C30]',
      bgColor: 'bg-red-50'
    },
    {
      id: 3,
      title: { EN: 'Borang Kualiti', BM: 'Borang Kualiti' },
      description: { 
        EN: 'Official quality forms required for various applications and documentation processes.',
        BM: 'Borang kualiti rasmi yang diperlukan untuk pelbagai permohonan dan proses dokumentasi.'
      },
      href: 'https://dev.utem.edu.my/sps/administrator/index.php?option=com_ajax&p=customizer&templateStyle=13&section=builder&format=html&site=https%3A%2F%2Fdev.utem.edu.my%2Fsps%2Fabout-us%2Fiso-documents.html&return=https%3A%2F%2Fdev.utem.edu.my%2Fsps%2Fadministrator%2Findex.php%3Foption%3Dcom_content%26view%3Darticle%26return%3Dfeatured%26layout%3Dedit%26id%3D197%26return%3Dfeatured',
      icon: FileCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Office Environment" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-8">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight size={12} />
              <Link to="/about" className="hover:text-white transition-colors">ABOUT US</Link>
              <ChevronRight size={12} />
              <span className="text-white">ISO DOCUMENTS</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              ISO DOCUMENTS
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              {lang === 'EN' 
                ? 'Access official quality management and ISO documentation for the School of Graduate Studies.' 
                : 'Akses pengurusan kualiti rasmi dan dokumentasi ISO untuk Sekolah Pengajian Siswazah.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Access Notice */}
      <section className="pt-16">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-amber-50 border border-amber-100 p-6 rounded-2xl flex items-center space-x-4 shadow-sm"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
              <Info size={24} />
            </div>
            <p className="text-amber-900 font-medium text-sm md:text-base">
              {lang === 'EN'
                ? 'This page contains intranet documents and may only be accessed through the UTeM internal network.'
                : 'Halaman ini mengandungi dokumen intranet dan hanya boleh diakses melalui rangkaian dalaman UTeM.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Document Grid */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[20px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
              >
                <div className={`w-16 h-16 ${doc.bgColor} ${doc.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <doc.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-[#A51C30] transition-colors">
                  {doc.title[lang]}
                </h3>
                
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-10 flex-grow">
                  {doc.description[lang]}
                </p>
                
                <div className="flex flex-col space-y-3">
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 border border-gray-100"
                  >
                    <Eye size={14} />
                    <span>{lang === 'EN' ? 'View Document' : 'Lihat Dokumen'}</span>
                  </a>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#A51C30] hover:bg-[#800000] text-white py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-red-900/10 flex items-center justify-center space-x-2"
                  >
                    <Download size={14} />
                    <span>{lang === 'EN' ? 'Download' : 'Muat Turun'}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-xl">
              <div className="flex items-center space-x-4 mb-6">
                <ShieldCheck size={32} className="text-[#A51C30]" />
                <h2 className="text-3xl font-serif font-bold">
                  {lang === 'EN' ? 'Quality Assurance' : 'Jaminan Kualiti'}
                </h2>
              </div>
              <p className="text-white/60 text-lg font-light">
                {lang === 'EN' 
                  ? 'We are committed to maintaining the highest standards of academic and administrative excellence through rigorous ISO compliance.' 
                  : 'Kami komited untuk mengekalkan piawaian kecemerlangan akademik dan pentadbiran tertinggi melalui pematuhan ISO yang ketat.'}
              </p>
            </div>
            <div className="relative z-10">
              <button className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-gray-100 transition-all">
                {lang === 'EN' ? 'Contact Quality Unit' : 'Hubungi Unit Kualiti'}
              </button>
            </div>
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

export default ISODocuments;
