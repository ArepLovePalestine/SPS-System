import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import PageHeader from './PageHeader';

interface ProgrammeFeesProps {
  lang: Language;
}

const BASE = import.meta.env.BASE_URL;

// Untuk tambah gambar baru: tambah file di folder public/images/pages/ProgrammeFees/ dengan nama sama dengan nama fail dalam array ni
const FEE_FILES = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

const feeImages = FEE_FILES.map((filename) => ({
  src: `${BASE}images/pages/ProgrammeFees/${filename}`,
  filename,
}));

const ProgrammeFees: React.FC<ProgrammeFeesProps> = ({ lang }) => {
  const content = {
    breadcrumbProgrammes: { EN: 'Programmes', BM: 'Program' },
    title: { EN: 'Programme Fees', BM: 'Yuran Program' },
    subtitle: {
      EN: 'Fee structure for postgraduate programmes at Universiti Teknikal Malaysia Melaka (UTeM)',
      BM: 'Struktur yuran bagi program pascasiswazah di Universiti Teknikal Malaysia Melaka (UTeM)',
    },
    note: {
      EN: 'For the latest fee information and payment-related enquiries, please contact the School of Graduate Studies.',
      BM: 'Untuk maklumat yuran terkini dan pertanyaan berkaitan pembayaran, sila hubungi Sekolah Pengajian Siswazah.',
    },
    empty: {
      EN: 'Programme fee images are not available at the moment.',
      BM: 'Imej yuran program tidak tersedia pada masa ini.',
    },
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <PageHeader
        breadcrumbs={[
          { label: 'HOME', to: '/' },
          { label: content.breadcrumbProgrammes[lang], to: '/programmes' },
          { label: content.title[lang] },
        ]}
        title={content.title[lang]}
        subtitle={content.subtitle[lang]}
      />

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <div className="space-y-8 md:space-y-10">
            {feeImages.length > 0 ? (
              feeImages.map((image, index) => (
                <motion.article
                  key={image.filename}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                  className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="bg-white p-4 md:p-6">
                    <div className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-[#faf8f6]">
                      <img
                        src={image.src}
                        alt={`${content.title[lang]} ${index + 1}`}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="rounded-[2rem] border border-dashed border-gray-300 bg-white px-8 py-16 text-center text-gray-500 shadow-sm">
                {content.empty[lang]}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-10 rounded-[1.75rem] border border-gray-200 bg-white px-6 py-6 text-center shadow-sm md:mt-12 md:px-8"
          >
            <p className="mx-auto max-w-3xl text-sm font-light leading-7 text-gray-600 md:text-base">
              {content.note[lang]}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammeFees;