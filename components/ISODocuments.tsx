
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  FileText, 
  Eye, 
  ChevronRight, 
  Info,
  FileCheck,
  ClipboardList,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';
import PageHeader from './PageHeader';

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
      href: 'https://iso.utem.edu.my/index.php/a-manual-kualiti',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: { EN: 'Prosedur Kerja', BM: 'Prosedur Kerja' },
      description: { 
        EN: 'Standard operating procedures for administrative and academic processes within the School of Graduate Studies.',
        BM: 'Prosedur operasi standard untuk proses pentadbiran dan akademik di Sekolah Pengajian Siswazah.'
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
        EN: 'Official quality forms required for academic and administrative processes.',
        BM: 'Borang kualiti rasmi yang diperlukan untuk proses akademik dan pentadbiran.'
      },
      href: 'https://iso.utem.edu.my/index.php/c-borang-kualiti/a-proses-pengurusan-pengajaran-pembelajaran-dan-penyelidikan-1/2-pengurusan-perkhidmatan-akademik-pascasiswazah-1',
      icon: FileCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="pt-24">
        <PageHeader
          breadcrumbs={[
            { label: 'HOME', to: '/' },
            { label: 'ABOUT US', to: '/about' },
            { label: 'ISO DOCUMENTS' },
          ]}
          title="ISO DOCUMENTS"
          subtitle={
            lang === 'EN'
              ? 'Access official quality management and ISO documentation for the School of Graduate Studies.'
              : 'Akses pengurusan kualiti rasmi dan dokumentasi ISO untuk Sekolah Pengajian Siswazah.'
          }
        />
      </div>

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
                    <span>{lang === 'EN' ? 'View Details' : 'Lihat Butiran'}</span>
                  </a>
                </div>
              </motion.div>
            ))}
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
