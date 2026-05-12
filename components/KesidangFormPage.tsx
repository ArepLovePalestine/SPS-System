import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Download, FileText } from 'lucide-react';
import { Language } from '../types';

interface KesidangFormPageProps {
  lang: Language;
}

// Glob semua PDF dalam folder Kesidang Form
const kesidangDocs = import.meta.glob(
  '../src/assets/Document file/Kesidang Form/*.pdf',
  { eager: true, import: 'default' }
) as Record<string, string>;

// ============================================
// TAMBAH FAIL DI SINI SAHAJA
// ============================================
const KESIDANG_FILES = [
  {
    title: { EN: 'Biasiswa Kesidang Poster (BM)', BM: 'Poster Biasiswa Kesidang (BM)' },
    filename: 'POSTER BIASISWA KESIDANG  BM 2024.pdf',
    description: { EN: 'Kesidang Scholarship poster in Bahasa Melayu.', BM: 'Poster Biasiswa Kesidang dalam Bahasa Melayu.' },
  },
  {
    title: { EN: 'Kesidang Scholarship Poster (EN)', BM: 'Poster Biasiswa Kesidang (EN)' },
    filename: 'POSTER KESIDANG SCHOLARSHIP BI 2024.pdf',
    description: { EN: 'Kesidang Scholarship poster in English.', BM: 'Poster Biasiswa Kesidang dalam Bahasa Inggeris.' },
  },
  {
    title: { EN: 'Part Time Lecture Claim Form', BM: 'Borang Tuntutan Tenaga Pengajar Sambilan' },
    filename: 'BORANG TUNTUTAN TENAGA PENGAJAR SAMBILAN.pdf',
    description: { EN: 'Claim form for part time lecture sessions.', BM: 'Borang tuntutan sesi kuliah sambilan.' },
  },
  {
    title: { EN: 'Publication Incentive Claim Form', BM: 'Borang Tuntutan Insentif Penerbitan' },
    filename: 'borang TUNTUTAN insentif penerbitan.pdf',
    description: { EN: 'Claim form for publication incentive.', BM: 'Borang tuntutan insentif penerbitan.' },
  },
];

// Helper — cari URL fail dari glob
const getFileUrl = (filename: string): string => {
  const key = Object.keys(kesidangDocs).find(k => k.includes(filename));
  return key ? kesidangDocs[key] : '#';
};

const KesidangFormPage: React.FC<KesidangFormPageProps> = ({ lang }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section className="border-b border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">
              {lang === 'EN' ? 'HOME' : 'HALAMAN'}
            </Link>
            <ChevronRight size={11} />
            <Link to="/kesidang-scholarship" className="transition-colors hover:text-[#A51C30]">
              {lang === 'EN' ? 'KESIDANG SCHOLARSHIP' : 'BIASISWA KESIDANG'}
            </Link>
            <ChevronRight size={11} />
            <span className="text-[#A51C30]">
              {lang === 'EN' ? 'FORMS' : 'BORANG'}
            </span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-5 font-serif text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              {lang === 'EN' ? 'Kesidang Forms' : 'Borang Kesidang'}
            </h1>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-gray-600">
              {lang === 'EN'
                ? 'Download official forms and documents for the Kesidang Scholarship application.'
                : 'Muat turun borang dan dokumen rasmi untuk permohonan Biasiswa Kesidang.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              {lang === 'EN' ? 'Documents' : 'Dokumen'}
            </h2>
            <p className="mt-2 text-sm font-light text-gray-500">
              {KESIDANG_FILES.length} {lang === 'EN' ? 'document(s) available' : 'dokumen tersedia'}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <div className="divide-y divide-gray-100">
              {KESIDANG_FILES.map((file, index) => (
                <motion.a
                  key={file.filename}
                  href={getFileUrl(file.filename)}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-center justify-between gap-4 p-6 transition hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#A51C30]/10 text-[#A51C30]">
                      <FileText size={24} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                          PDF
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 transition group-hover:text-[#A51C30] md:text-base">
                          {file.title[lang]}
                        </h3>
                      </div>
                      {file.description && (
                        <p className="mt-1 text-xs font-light text-gray-500">
                          {file.description[lang]}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-3">
                    <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:inline">
                      {lang === 'EN' ? 'Download' : 'Muat Turun'}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition group-hover:bg-[#A51C30] group-hover:text-white">
                      <Download size={16} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="mt-8">
            <Link
              to="/kesidang-scholarship"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 shadow-sm transition hover:border-[#A51C30] hover:text-[#A51C30]"
            >
              <ChevronRight size={14} className="rotate-180" />
              {lang === 'EN' ? 'Back to Kesidang Scholarship' : 'Kembali ke Biasiswa Kesidang'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KesidangFormPage;