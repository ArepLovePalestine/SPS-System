import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Download, FileText } from 'lucide-react';
import { Language } from '../types';

interface SGSBrochureProps {
  lang: Language;
}

type BrochureItem = {
  id: string;
  title: { EN: string; BM: string };
  description: { EN: string; BM: string };
  pages: string[];
  pdf: string;
};

const SGSBrochure: React.FC<SGSBrochureProps> = ({ lang }) => {
  const brochure: BrochureItem = {
    id: 'sgs-brochure',
    title: { EN: 'Postgraduate Prospectus', BM: 'Prospektus Pascasiswazah' },
    description: {
      EN: 'The official postgraduate prospectus outlining academic programmes and study opportunities at UTeM.',
      BM: 'Prospektus pascasiswazah rasmi yang menggariskan program akademik dan peluang pengajian di UTeM.',
    },
    pages: [
      '/images/SGS-Brochure/Brochure1.png',
      '/images/SGS-Brochure/Brochure2.png',
    ],
    pdf: '/images/SGS-Brochure/PROGRAMME FEES POST GRADUATE SPS.pdf',
  };

  const content = {
    title: { EN: 'SGS Brochure', BM: 'Broshur SGS' },
    subtitle: {
      EN: 'Official publications and guides for postgraduate studies at UTeM',
      BM: 'Penerbitan rasmi dan panduan untuk pengajian pascasiswazah di UTeM',
    },
    downloadBtn: { EN: 'Download PDF', BM: 'Muat Turun PDF' },
  };

  return (
    <div className="min-h-screen bg-[#eceae7] pt-24 pb-24">
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="space-y-4">
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>{lang === 'EN' ? 'Student' : 'Pelajar'}</span>
              <ChevronRight size={10} />
              <span>{lang === 'EN' ? 'Future Students' : 'Bakal Pelajar'}</span>
              <ChevronRight size={10} />
              <span className="text-[#A51C30]">{content.title[lang]}</span>
            </nav>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-gray-900"
            >
              {content.title[lang]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl text-lg font-light leading-relaxed text-gray-500"
            >
              {content.subtitle[lang]}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-[900px]"
          >
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  <FileText size={14} />
                  Official Document
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#550000]">
                  {brochure.title[lang]}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-500">
                  {brochure.description[lang]}
                </p>
              </div>
              <a
                href={brochure.pdf}
                download
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#A51C30] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-sm transition-colors hover:bg-[#670E10]"
              >
                <Download size={15} />
                {content.downloadBtn[lang]}
              </a>
            </div>

            <div className="rounded-[24px] border border-gray-200/80 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(15,23,42,0.18)] md:p-5">
              <div className="overflow-hidden rounded-[18px] border border-gray-100 bg-white transition-transform duration-700 hover:scale-[1.006]">
                {brochure.pages.map((page, pageIndex) => (
                  <img
                    key={page}
                    src={page}
                    alt={`${brochure.title[lang]} page ${pageIndex + 1}`}
                    className="block h-auto w-full object-contain"
                  />
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
};

export default SGSBrochure;
