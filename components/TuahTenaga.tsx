import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bolt, ChevronDown, ChevronRight, FileImage } from 'lucide-react';
import { Language } from '../types';

interface TuahTenagaProps {
  lang: Language;
}

const imageModules = import.meta.glob(
  '/images/pages/Tuah Tenaga/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>;

const sortByFilename = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true });
const filenameFromPath = (path: string) => path.split('/').pop() || path;

const singleImageFromFolder = (folderName: string) =>
  Object.entries(imageModules)
    .filter(([path]) => path.includes(`/Tuah Tenaga/${folderName}/`))
    .sort((a, b) => sortByFilename(a[0], b[0]))[0]?.[1] ?? '';

const imagesFromFolder = (folderName: string) =>
  Object.entries(imageModules)
    .filter(([path]) => path.includes(`/Tuah Tenaga/${folderName}/`))
    .sort((a, b) => sortByFilename(a[0], b[0]))
    .map(([path, src]) => ({
      src,
      filename: filenameFromPath(path),
      path,
    }));

const reportImagesByYear = () => {
  const folders = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];

  return folders
    .map((year) => ({
      year,
      images: Object.entries(imageModules)
        .filter(([path]) => path.includes(`/Tuah Tenaga/Laporan bulanan/${year}/`))
        .sort((a, b) => sortByFilename(a[0], b[0]))
        .map(([path, src]) => ({
          src,
          filename: filenameFromPath(path),
        })),
    }))
    .filter((group) => group.images.length > 0);
};

const dasarImage = singleImageFromFolder('Dasar dan garis panduan');
const deklarasiImage = singleImageFromFolder('Deklarasi komitmen');
const jawatankuasaImage = singleImageFromFolder('Jawatankuasa');
const brochureImages = imagesFromFolder('Broucher penjimatan tenaga');
const posterLogoImages = imagesFromFolder('Poster dan logo');
const monthlyReportGroups = reportImagesByYear();

const posterTitleFromFilename = (filename: string, lang: Language) => {
  const normalized = filename.toLowerCase();
  if (normalized.includes('tuah_tenaga')) {
    return lang === 'EN' ? 'Tuah Tenaga Logo' : 'Logo Tuah Tenaga';
  }
  if (normalized.includes('stiker')) {
    return lang === 'EN' ? 'Energy Saving Sticker' : 'Stiker Penjimatan Tenaga';
  }
  if (normalized.includes('tutup-sebelum-pulang')) {
    return lang === 'EN' ? 'Switch Off Before Leaving Poster' : 'Poster Tutup Sebelum Pulang';
  }
  return lang === 'EN' ? 'Energy Saving Poster' : 'Poster Penjimatan Tenaga';
};

const ImageCard: React.FC<{
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}> = ({ src, alt, caption, priority = false }) => (
  <div className="mx-auto inline-block w-fit max-w-full rounded-[20px] border border-gray-200 bg-white p-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)] md:p-4">
    <img
      src={src}
      alt={alt}
      className="block h-auto max-h-[72vh] w-auto max-w-full rounded-[14px] object-contain"
      loading={priority ? 'eager' : 'lazy'}
    />
    {caption ? <p className="mt-3 text-center text-sm font-medium text-gray-500">{caption}</p> : null}
  </div>
);

const AccordionSection: React.FC<{
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}> = ({ id, title, isOpen, onToggle, children }) => (
  <section className="rounded-[28px] border border-gray-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
    <button
      type="button"
      onClick={() => onToggle(id)}
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-[#fcfaf7] md:px-8"
      aria-expanded={isOpen}
    >
      <h2 className="font-serif text-2xl text-gray-950 md:text-3xl">{title}</h2>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-[#A51C30]' : ''
        }`}
      >
        <ChevronDown size={18} />
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="border-t border-gray-100 px-6 py-6 md:px-8 md:py-8">{children}</div>
    </div>
  </section>
);

const TuahTenaga: React.FC<TuahTenagaProps> = ({ lang }) => {
  const [openSection, setOpenSection] = useState<string | null>('dasar');

  const sections = useMemo(
    () => [
      {
        id: 'dasar',
        title: 'Dasar dan Garis Panduan Pengurusan Tenaga',
        content: (
          <div className="flex justify-center">
            {/* UBAH GAMBAR DI SINI: gantikan fail dalam folder src/assets/images/Tuah Tenaga/Dasar dan garis panduan/ */}
            <ImageCard src={dasarImage} alt="Dasar dan Garis Panduan Pengurusan Tenaga" priority />
          </div>
        ),
      },
      {
        id: 'deklarasi',
        title: 'Deklarasi Komitmen',
        content: (
          <div className="flex justify-center">
            {/* UBAH GAMBAR DI SINI: gantikan fail dalam folder src/assets/images/Tuah Tenaga/Deklarasi komitmen/ */}
            <ImageCard src={deklarasiImage} alt="Deklarasi Komitmen" />
          </div>
        ),
      },
      {
        id: 'jawatankuasa',
        title: 'Jawatankuasa Pengurusan Tenaga SPS',
        content: (
          <div className="flex justify-center">
            {/* UBAH GAMBAR DI SINI: gantikan fail dalam folder src/assets/images/Tuah Tenaga/Jawatankuasa/ */}
            <ImageCard src={jawatankuasaImage} alt="Jawatankuasa Pengurusan Tenaga SPS" />
          </div>
        ),
      },
      {
        id: 'laporan',
        title: 'Laporan Bulanan Penggunaan Tenaga SPS',
        content: (
          <div className="space-y-8">
            <p className="text-sm leading-7 text-gray-600">
              {lang === 'EN'
                ? 'Monthly energy usage reports are organized by year for quick reference.'
                : 'Laporan penggunaan tenaga bulanan disusun mengikut tahun untuk rujukan yang lebih mudah.'}
            </p>

            {/* TAMBAH FILE DI SINI: letakkan gambar baru dalam src/assets/images/Tuah Tenaga/Laporan bulanan/[TAHUN]/ */}
            {monthlyReportGroups.map((group) => (
              <div key={group.year} className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h3 className="font-serif text-2xl text-gray-950">{group.year}</h3>
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#A51C30]">
                    {group.images.length} {lang === 'EN' ? 'image(s)' : 'imej'}
                  </span>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {group.images.map((image, index) => (
                    <div key={`${group.year}-${image.filename}-${index}`} className="flex justify-center">
                      <ImageCard src={image.src} alt={`${group.year} ${image.filename}`} caption={image.filename} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: 'poster',
        title: 'Poster dan Logo',
        content: (
          <div className="space-y-6">
            <p className="text-sm leading-7 text-gray-600">
              {lang === 'EN'
                ? 'Official campaign visuals for Tuah Tenaga, including logo, posters, and awareness stickers.'
                : 'Visual rasmi kempen Tuah Tenaga termasuk logo, poster, dan stiker kesedaran.'}
            </p>
            {/* TAMBAH FILE DI SINI: tambah poster/logo baharu dalam src/assets/images/Tuah Tenaga/Poster dan logo/ */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {posterLogoImages.map((image, index) => (
                <div key={`${image.filename}-${index}`} className="flex justify-center">
                  <ImageCard
                    src={image.src}
                    alt={posterTitleFromFilename(image.filename, lang)}
                    caption={posterTitleFromFilename(image.filename, lang)}
                  />
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'brochure',
        title: 'Broucher Penjimatan Tenaga',
        content: (
          <div className="space-y-6">
            <p className="text-sm leading-7 text-gray-600">
              {lang === 'EN'
                ? 'Brochure pages for energy-saving awareness and communication.'
                : 'Halaman brosur untuk kesedaran dan komunikasi penjimatan tenaga.'}
            </p>
            {/* UBAH / TAMBAH FILE DI SINI: folder src/assets/images/Tuah Tenaga/Broucher penjimatan tenaga/ */}
            <div className="grid gap-5 md:grid-cols-2">
              {brochureImages.map((image, index) => (
                <div key={`${image.filename}-${index}`} className="flex justify-center">
                  <ImageCard src={image.src} alt={`Broucher Penjimatan Tenaga ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
    [lang]
  );

  const toggleSection = (id: string) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] pt-24 pb-20">
      <section className="border-b border-black/5 bg-[#fbf8f3] px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">
              Home
            </Link>
            <ChevronRight size={12} className="text-gray-300" />
            <Link to="/about" className="transition-colors hover:text-[#A51C30]">
              About Us
            </Link>
            <ChevronRight size={12} className="text-gray-300" />
            <span className="text-[#A51C30]">Tuah Tenaga</span>
          </nav>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A51C30] text-white shadow-lg shadow-[#A51C30]/20">
                  <Bolt size={22} strokeWidth={1.7} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#A51C30]">
                  School of Graduate Studies
                </span>
              </div>
              <h1 className="font-serif text-4xl tracking-tight text-gray-950 md:text-6xl">Pengurusan Tenaga</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
                {lang === 'EN'
                  ? 'A structured energy management reference page covering policy, commitment, committee structure, monthly usage reports, and communication materials for SPS.'
                  : 'Halaman rujukan pengurusan tenaga yang tersusun merangkumi dasar, komitmen, struktur jawatankuasa, laporan penggunaan bulanan, dan bahan komunikasi untuk SPS.'}
              </p>
            </div>

            <div className="rounded-[24px] border border-[#A51C30]/12 bg-white px-6 py-5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">
                {lang === 'EN' ? 'Sections Available' : 'Jumlah Bahagian'}
              </p>
              <p className="mt-2 font-serif text-4xl text-[#A51C30]">{sections.length}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1180px] space-y-5">
          {sections.map((section) => (
            <AccordionSection
              key={section.id}
              id={section.id}
              title={section.title}
              isOpen={openSection === section.id}
              onToggle={toggleSection}
            >
              {section.content}
            </AccordionSection>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1180px] rounded-[24px] border border-dashed border-gray-300 bg-white/60 px-6 py-5 text-sm leading-7 text-gray-500">
          <div className="flex items-start gap-3">
            <FileImage size={18} className="mt-1 text-[#A51C30]" />
            <p>
              {lang === 'EN'
                ? 'Staff note: to update this page later, just replace or add image files inside the matching Tuah Tenaga folders. The page will load them automatically where configured.'
                : 'Nota staf: untuk kemas kini halaman ini kemudian, hanya gantikan atau tambah fail imej dalam folder Tuah Tenaga yang sepadan. Halaman ini akan memuatkan imej tersebut secara automatik mengikut tetapan.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TuahTenaga;
