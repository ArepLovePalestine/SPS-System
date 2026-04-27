import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Download, ExternalLink, FileText, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface RegulationsProps {
  lang: Language;
}

const Regulations: React.FC<RegulationsProps> = ({ lang }) => {
  const academicRegulationsPdf = '/images/homepages/Regulations/e-POSTGRADUATE%20ACADEMIC%20REGULATIONS.pdf';
  const hasDocument = academicRegulationsPdf.length > 0;

  const content = {
    title: { EN: 'Academic Regulations', BM: 'Peraturan Akademik' },
    subtitle: {
      EN: 'Official regulations and academic guidelines for postgraduate studies at UTeM',
      BM: 'Peraturan rasmi dan garis panduan akademik bagi pengajian pascasiswazah di UTeM'
    },
    breadcrumbHome: { EN: 'HOME', BM: 'UTAMA' },
    breadcrumbStudent: { EN: 'STUDENT INFO', BM: 'MAKLUMAT PELAJAR' },
    actionDownload: { EN: 'Download PDF', BM: 'Muat Turun PDF' },
    actionOpen: { EN: 'Open in New Tab', BM: 'Buka di Tab Baharu' },
    viewerTitle: { EN: 'Academic Regulations Document', BM: 'Dokumen Peraturan Akademik' },
    viewerNote: {
      EN: 'Read the official document directly within the website interface.',
      BM: 'Baca dokumen rasmi secara terus dalam antara muka laman web.'
    },
    unavailableTitle: {
      EN: 'Academic regulations document is not attached yet',
      BM: 'Dokumen peraturan akademik belum dilampirkan lagi'
    },
    unavailableText: {
      EN: 'This page layout is ready for the official PDF. Once the file is added to the project, it will appear here automatically.',
      BM: 'Susun atur halaman ini sedia untuk PDF rasmi. Sebaik sahaja fail ditambah ke dalam projek, ia akan dipaparkan di sini secara automatik.'
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f3ef]">
      <section className="border-b border-gray-200 bg-white pt-28 pb-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <nav className="mb-6 flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link to="/" className="hover:text-[#A51C30] transition-colors">{content.breadcrumbHome[lang]}</Link>
            <ChevronRight size={12} />
            <span>{content.breadcrumbStudent[lang]}</span>
            <ChevronRight size={12} />
            <span className="text-[#A51C30]">{content.title[lang]}</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-bold text-gray-900 tracking-tight"
          >
            {content.title[lang]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-3xl text-base md:text-lg font-light leading-8 text-gray-600"
          >
            {content.subtitle[lang]}
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="rounded-[2rem] border border-gray-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] overflow-hidden">
            <div className="flex flex-col gap-6 border-b border-gray-100 px-6 py-6 md:px-8 md:py-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  {content.viewerTitle[lang]}
                </h2>
                <p className="mt-2 text-sm md:text-base font-light leading-7 text-gray-500">
                  {content.viewerNote[lang]}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={hasDocument ? academicRegulationsPdf : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                    hasDocument
                      ? 'bg-[#A51C30] text-white shadow-lg shadow-[#A51C30]/20 hover:bg-[#8b1326]'
                      : 'pointer-events-none bg-gray-200 text-gray-400'
                  }`}
                >
                  <Download size={16} />
                  <span>{content.actionDownload[lang]}</span>
                </a>
                <a
                  href={hasDocument ? academicRegulationsPdf : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                    hasDocument
                      ? 'border-gray-200 bg-white text-gray-700 hover:border-[#A51C30] hover:text-[#A51C30]'
                      : 'pointer-events-none border-gray-200 bg-white text-gray-300'
                  }`}
                >
                  <ExternalLink size={16} />
                  <span>{content.actionOpen[lang]}</span>
                </a>
              </div>
            </div>

            <div className="bg-[#faf8f5] p-4 md:p-6">
              <div className="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-inner">
                {hasDocument ? (
                  <iframe
                    src={academicRegulationsPdf}
                    title={content.title[lang]}
                    className="block h-[80vh] w-full border-0"
                  />
                ) : (
                  <div className="flex h-[80vh] w-full items-center justify-center px-6">
                    <div className="max-w-xl text-center">
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-50 text-amber-600">
                        <AlertCircle size={34} strokeWidth={1.6} />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                        {content.unavailableTitle[lang]}
                      </h3>
                      <p className="mt-4 text-base font-light leading-8 text-gray-500">
                        {content.unavailableText[lang]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-[#A51C30]"
            >
              <FileText size={14} />
              <span>{lang === 'EN' ? 'Back to Home' : 'Kembali ke Utama'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regulations;
