import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Archive, ChevronRight, FileImage, LibraryBig } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface ElectronicArchivesProps {
  lang: Language;
}

type ArchiveYear = '2021' | '2022' | '2024' | '2025';

interface ArchiveImage {
  year: ArchiveYear;
  src: string;
  filename: string;
}

const archiveYears: ArchiveYear[] = ['2021', '2022', '2024', '2025'];

const archiveModules = import.meta.glob('../images/ElecArc/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const filenameFromPath = (path: string) => path.split('/').pop() || path;

const ElectronicArchives: React.FC<ElectronicArchivesProps> = ({ lang }) => {
  const [activeYear, setActiveYear] = useState<ArchiveYear>('2025');

  const archiveImages = useMemo(() => {
    return archiveYears.reduce<Record<ArchiveYear, ArchiveImage[]>>((acc, year) => {
      acc[year] = Object.entries(archiveModules)
        .filter(([path]) => path.includes(`/ElecArc/${year}/`))
        .map(([path, src]) => ({
          year,
          src,
          filename: filenameFromPath(path),
        }))
        .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));
      return acc;
    }, { 2021: [], 2022: [], 2024: [], 2025: [] });
  }, []);

  const activeImages = archiveImages[activeYear];

  return (
    <div className="min-h-screen bg-[#eceae7] pt-24">
      <section className="relative overflow-hidden border-b border-black/5 bg-[#f5f2ed] px-6 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="pointer-events-none absolute right-[-8rem] top-[-10rem] h-[26rem] w-[26rem] rounded-full bg-[#A51C30]/[0.06]" />
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">
              Home
            </Link>
            <ChevronRight size={12} className="text-gray-300" />
            <Link to="/about" className="transition-colors hover:text-[#A51C30]">
              About Us
            </Link>
            <ChevronRight size={12} className="text-gray-300" />
            <span className="text-[#A51C30]">
              {lang === 'EN' ? 'Electronic Archives' : 'Arkib Elektronik'}
            </span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center bg-[#A51C30] text-white shadow-lg shadow-[#A51C30]/20">
                  <Archive size={22} strokeWidth={1.7} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#A51C30]">
                  School of Graduate Studies
                </span>
              </div>
              <h1 className="font-serif text-5xl leading-tight tracking-tight text-gray-950 md:text-7xl">
                {lang === 'EN' ? 'Electronic Archives' : 'Arkib Elektronik'}
              </h1>
              <p className="mt-6 max-w-3xl text-base font-light leading-relaxed text-gray-500 md:text-lg">
                {lang === 'EN'
                  ? 'Official archive collections and reference materials from the School of Graduate Studies.'
                  : 'Koleksi arkib rasmi dan bahan rujukan daripada Sekolah Pengajian Siswazah.'}
              </p>
            </motion.div>

            <div className="border-l border-[#A51C30]/20 pl-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">
                {lang === 'EN' ? 'Available Collections' : 'Koleksi Tersedia'}
              </p>
              <p className="mt-3 font-serif text-4xl text-[#A51C30]">{archiveYears.length}</p>
              <p className="mt-2 text-sm font-light leading-relaxed text-gray-500">
                {lang === 'EN'
                  ? 'Browse by archive year using the collection tabs below.'
                  : 'Lihat mengikut tahun arkib melalui tab koleksi di bawah.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-6 border-b border-gray-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">
                {lang === 'EN' ? 'Archive Year' : 'Tahun Arkib'}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-gray-950">
                {lang === 'EN' ? 'Select Collection' : 'Pilih Koleksi'}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {archiveYears.map((year) => {
                const isActive = year === activeYear;
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setActiveYear(year)}
                    className={`min-w-[92px] border px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                      isActive
                        ? 'border-[#A51C30] bg-[#A51C30] text-white shadow-lg shadow-[#A51C30]/20'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-[#A51C30]/40 hover:text-[#A51C30]'
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-gray-200 bg-white text-[#A51C30]">
                <LibraryBig size={20} strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">
                  {lang === 'EN' ? 'Active Collection' : 'Koleksi Aktif'}
                </p>
                <h3 className="font-serif text-2xl text-gray-950">{activeYear}</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              <FileImage size={15} />
              <span>
                {activeImages.length} {lang === 'EN' ? 'document image(s)' : 'imej dokumen'}
              </span>
            </div>
          </div>

          <div className="space-y-10">
            {activeImages.map((image, index) => (
              <motion.article
                key={`${image.year}-${image.filename}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="mx-auto max-w-[1100px] border border-gray-200 bg-white p-3 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.55)] sm:p-5 md:p-7"
              >
                <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#A51C30]">
                    {activeYear}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex justify-center bg-gray-50/70 p-2 sm:p-4">
                  <img
                    src={image.src}
                    alt={`Electronic archive document ${activeYear}-${index + 1}`}
                    className="h-auto max-h-none w-full max-w-[1000px] object-contain"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectronicArchives;
