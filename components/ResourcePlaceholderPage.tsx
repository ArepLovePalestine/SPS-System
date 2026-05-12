import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, FileText } from 'lucide-react';
import { Language } from '../types';

interface ResourcePlaceholderPageProps {
  title: {
    EN: string;
    BM: string;
  };
  description?: {
    EN: string;
    BM: string;
  };
  lang: Language;
}

const ResourcePlaceholderPage: React.FC<ResourcePlaceholderPageProps> = ({
  title,
  description,
  lang,
}) => {
  const displayTitle = title[lang];
  const displayDescription = description?.[lang] || (lang === 'EN' 
    ? 'Resources and documents will be uploaded soon. Please check back later.' 
    : 'Sumber dan dokumen akan dimuat naik tidak lama lagi. Sila periksa semula kemudian.');

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header Section */}
      <section className="border-b border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">
              {lang === 'EN' ? 'HOME' : 'HALAMAN'}
            </Link>
            <ChevronRight size={11} />
            <span className="text-[#A51C30]">{displayTitle.toUpperCase()}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-5 font-serif text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              {displayTitle}
            </h1>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-gray-600">
              {displayDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-gray-100 bg-white p-12 text-center shadow-sm"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#A51C30]/10 text-[#A51C30]">
              <FileText size={40} />
            </div>

            <h2 className="mb-3 font-serif text-3xl font-bold text-gray-900">
              {lang === 'EN' ? 'Coming Soon' : 'Akan Datang'}
            </h2>

            <p className="mx-auto max-w-md text-gray-600 font-light leading-relaxed mb-8">
              {lang === 'EN'
                ? 'This section is currently being prepared. Files and resources will be uploaded shortly.'
                : 'Bahagian ini sedang disediakan. Fail dan sumber akan dimuat naik tidak lama lagi.'}
            </p>

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-lg bg-[#A51C30] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#A51C30]/15 transition hover:bg-[#8B1829]"
            >
              {lang === 'EN' ? 'Back to Resources' : 'Kembali ke Sumber'}
              <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcePlaceholderPage;
