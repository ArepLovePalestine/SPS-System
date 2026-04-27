import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Language } from '../types';
import PageHeader from './PageHeader';

interface KesidangScholarshipProps {
  lang: Language;
}

type TabId = 'biasiswa' | 'scholarship';

const TAB_IMAGES: Record<TabId, string[]> = {
  biasiswa: [
    '/images/KesidangPic/Biasiswa/POSTER_BIASISWA_KESIDANG__BM-1.jpg',
    '/images/KesidangPic/Biasiswa/POSTER_BIASISWA_KESIDANG__BM-2.jpg',
    '/images/KesidangPic/Biasiswa/POSTER_BIASISWA_KESIDANG__BM-3.jpg',
    '/images/KesidangPic/Biasiswa/POSTER_BIASISWA_KESIDANG__BM-4.jpg',
    '/images/KesidangPic/Biasiswa/POSTER_BIASISWA_KESIDANG__BM-5.jpg',
    '/images/KesidangPic/Biasiswa/POSTER_BIASISWA_KESIDANG__BM-6.jpg',
    '/images/KesidangPic/Biasiswa/POSTER_BIASISWA_KESIDANG__BM-7.jpg'
  ],
  scholarship: [
    '/images/KesidangPic/Scholarship/POSTER_KESIDANG_SCHOLARSHIP_BI-1.jpg',
    '/images/KesidangPic/Scholarship/POSTER_KESIDANG_SCHOLARSHIP_BI-2.jpg',
    '/images/KesidangPic/Scholarship/POSTER_KESIDANG_SCHOLARSHIP_BI-3.jpg',
    '/images/KesidangPic/Scholarship/POSTER_KESIDANG_SCHOLARSHIP_BI-4.jpg',
    '/images/KesidangPic/Scholarship/POSTER_KESIDANG_SCHOLARSHIP_BI-5.jpg',
    '/images/KesidangPic/Scholarship/POSTER_KESIDANG_SCHOLARSHIP_BI-6.jpg',
    '/images/KesidangPic/Scholarship/POSTER_KESIDANG_SCHOLARSHIP_BI-7.jpg'
  ]
};

const KesidangScholarship: React.FC<KesidangScholarshipProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<TabId>('biasiswa');

  const content = {
    title: { EN: 'Kesidang Scholarship', BM: 'Biasiswa Kesidang' },
    subtitle: {
      EN: 'Official scholarship information presented in continuous document format for postgraduate applicants and students.',
      BM: 'Maklumat rasmi biasiswa dipaparkan dalam format dokumen berterusan untuk pemohon dan pelajar pascasiswazah.'
    },
    home: { EN: 'HOME', BM: 'UTAMA' },
    scholarship: { EN: 'SCHOLARSHIP', BM: 'BIASISWA' },
    tabs: {
      biasiswa: { EN: 'Biasiswa Kesidang', BM: 'Biasiswa Kesidang' },
      scholarship: { EN: 'Kesidang Scholarship', BM: 'Kesidang Scholarship' }
    },
    note: {
      EN: 'Please review the document pages below for the complete scholarship information.',
      BM: 'Sila semak halaman dokumen di bawah untuk maklumat biasiswa yang lengkap.'
    }
  };

  const activeImages = TAB_IMAGES[activeTab];

  return (
    <div className="min-h-screen bg-[#f6f3ef]">
      <div className="pt-24">
        <PageHeader
          breadcrumbs={[
            { label: content.home[lang], to: '/' },
            { label: content.scholarship[lang] },
            { label: content.title[lang] },
          ]}
          title={content.title[lang]}
          subtitle={content.subtitle[lang]}
        />
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="inline-flex w-full rounded-full border border-gray-200 bg-white p-2 shadow-sm md:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('biasiswa')}
                className={`flex-1 rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all md:flex-none ${
                  activeTab === 'biasiswa'
                    ? 'bg-[#A51C30] text-white shadow-lg shadow-[#A51C30]/20'
                    : 'text-gray-500 hover:text-[#A51C30]'
                }`}
              >
                {content.tabs.biasiswa[lang]}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('scholarship')}
                className={`flex-1 rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all md:flex-none ${
                  activeTab === 'scholarship'
                    ? 'bg-[#A51C30] text-white shadow-lg shadow-[#A51C30]/20'
                    : 'text-gray-500 hover:text-[#A51C30]'
                }`}
              >
                {content.tabs.scholarship[lang]}
              </button>
            </div>

            <p className="text-sm font-light leading-7 text-gray-500 md:max-w-md md:text-right">
              {content.note[lang]}
            </p>
          </div>

             <div className="mt-10 rounded-[2rem] border border-gray-200 bg-white px-5 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:px-10 md:py-10 lg:px-14 lg:py-12">
            <div className="mx-auto max-w-[840px] overflow-hidden rounded-[1.25rem] border border-gray-200 bg-[#fbfaf8]">
              {activeImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`${content.tabs[activeTab][lang]} page ${index + 1}`}
                  className={`block h-auto w-full object-contain ${index !== 0 ? 'border-t border-gray-100' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KesidangScholarship;
