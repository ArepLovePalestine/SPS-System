import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, ExternalLink, GraduationCap, Mail, Phone, Search, X, ZoomIn, ZoomOut } from 'lucide-react';
import { Language } from '../types';

interface AdmissionRequirementsProps {
  lang: Language;
}

const admissionModules = import.meta.glob(
  '/images/pages/Admission Req/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>;

const sortByPath = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true });

const getFolderImages = (folderName: string) =>
  Object.entries(admissionModules)
    .filter(([path]) => path.includes(`/Admission Req/${folderName}/`))
    .sort((a, b) => sortByPath(a[0], b[0]))
    .map(([path, src]) => ({
      src,
      filename: path.split('/').pop() || path,
    }));

const doctoralImages = getFolderImages('Doc Prog');
const masterImages = getFolderImages('Master Deg Prog');
const languageImages = getFolderImages('Language Req');
const englishPrepImages = getFolderImages('Eng Preparatory  Course');

const AccordionSection: React.FC<{
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}> = ({ id, title, isOpen, onToggle, children }) => (
  <section className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)]">
    <button
      type="button"
      onClick={() => onToggle(id)}
      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[#fcfaf7] md:px-7 md:py-5"
      aria-expanded={isOpen}
    >
      <h2 className="font-serif text-xl text-gray-950 md:text-2xl">{title}</h2>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 ${
          isOpen ? 'rotate-180 border-[#A51C30]/30 text-[#A51C30]' : ''
        }`}
      >
        <ChevronDown size={18} />
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[6000px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="border-t border-gray-100 px-5 py-5 md:px-7 md:py-7">{children}</div>
    </div>
  </section>
);

const ImageGrid: React.FC<{
  images: { src: string; filename: string }[];
  columns?: string;
  joined?: boolean;
  clickable?: boolean;
  onImageClick?: (image: { src: string; filename: string }) => void;
}> = ({ images, columns = 'md:grid-cols-2 xl:grid-cols-3', joined = false, clickable = false, onImageClick }) => (
  <div className={`grid ${joined ? 'gap-0' : 'gap-5'} ${columns}`}>
    {images.map((image, index) => (
      <button
        type="button"
        key={`${image.filename}-${index}`}
        onClick={() => clickable && onImageClick?.(image)}
        className={`${joined ? 'flex justify-center' : 'group relative flex justify-center rounded-[20px] border border-gray-200 bg-white p-3 shadow-sm transition hover:border-[#A51C30]/25 hover:shadow-md md:p-4'} ${
          clickable ? 'cursor-zoom-in' : 'cursor-default'
        }`}
      >
        <img
          src={image.src}
          alt={image.filename}
          className={`block h-auto max-w-full object-contain ${joined ? 'w-full rounded-none' : 'max-h-[72vh] rounded-[14px]'}`}
          loading={index < 2 ? 'eager' : 'lazy'}
        />
        {clickable && !joined ? (
          <span className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/92 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A51C30] shadow-sm">
            <Search size={12} />
            View
          </span>
        ) : null}
      </button>
    ))}
  </div>
);

const AdmissionRequirements: React.FC<AdmissionRequirementsProps> = ({ lang }) => {
  const [openSection, setOpenSection] = useState<string | null>('doctoral');
  const [selectedImage, setSelectedImage] = useState<{ src: string; filename: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (!selectedImage) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
        setZoomLevel(1);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  const sections = useMemo(
    () => [
      {
        id: 'doctoral',
        title: 'Doctoral Programme',
        content: (
          <div className="space-y-5">
            <p className="text-sm leading-7 text-gray-600">
              {lang === 'EN'
                ? 'Doctoral admission requirements by discipline are shown below.'
                : 'Syarat kemasukan program doktoral mengikut bidang dipaparkan di bawah.'}
            </p>
            <ImageGrid images={doctoralImages} clickable onImageClick={(image) => { setSelectedImage(image); setZoomLevel(1); }} />
          </div>
        ),
      },
      {
        id: 'master',
        title: 'Master Degree Programmes',
        content: (
          <div className="space-y-5">
            <p className="text-sm leading-7 text-gray-600">
              {lang === 'EN'
                ? 'Master degree admission requirements are arranged by study cluster.'
                : 'Syarat kemasukan program sarjana disusun mengikut kluster pengajian.'}
            </p>
            <ImageGrid images={masterImages} clickable onImageClick={(image) => { setSelectedImage(image); setZoomLevel(1); }} />
          </div>
        ),
      },
      {
        id: 'language',
        title: 'Language Requirements',
        content: (
          <div className="space-y-5">
            <p className="text-sm leading-7 text-gray-600">
              {lang === 'EN'
                ? 'English language and additional requirement references for applicants.'
                : 'Rujukan syarat bahasa Inggeris dan syarat tambahan untuk pemohon.'}
            </p>
            <ImageGrid images={languageImages} columns="md:grid-cols-2" />
          </div>
        ),
      },
      {
        id: 'english-prep',
        title: 'English Preparatory Course for Postgraduate International Students',
        content: (
          <div className="space-y-6">
            <div className="rounded-[22px] border border-[#A51C30]/10 bg-[#fcfaf7] p-5 md:p-6">
              <p className="text-base leading-8 text-gray-700">
                <strong>English Preparatory Course for Postgraduate International Students</strong>
              </p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 md:text-[15px]">
                <p>
                  Are you an international student planning to pursue postgraduate studies but do not meet the English language requirement?
                </p>
                <p>
                  Join our Intensive English Language Course, specially designed to help you achieve the required proficiency for academic success. This course focuses on English for Academic Purposes, covering essential skills in reading, writing, listening, and speaking.
                </p>
                <div className="space-y-2 font-medium text-gray-700">
                  <p>Tailored for International students without English qualifications</p>
                  <p>Supportive learning environment</p>
                  <p>Prepares you for MUET/IELTS and university-level English</p>
                </div>
                <p>
                  For more details or to register, kindly contact:
                </p>
                <div className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">Madam SUBATIRA A/P BALAKRISHNAN</p>
                  <div className="mt-3 space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <Mail size={16} className="text-[#A51C30]" />
                      <a href="mailto:subatira@utem.edu.my" className="hover:text-[#A51C30]">
                        subatira@utem.edu.my
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-[#A51C30]" />
                      <a href="tel:+6062702739" className="hover:text-[#A51C30]">
                        +606 270 2739
                      </a>
                    </p>
                  </div>
                </div>
                <a
                  href="https://cell.utem.edu.my/en/for-visitors/allcategories-en-gb/2-uncategorised/106-academic-english-2.html"
                  className="inline-flex items-center gap-2 rounded-full bg-[#A51C30] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#8a1026]"
                >
                  Click Here
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-7 text-gray-600">
                {lang === 'EN'
                  ? 'Course brochure pages are shown continuously below.'
                  : 'Halaman brosur kursus dipaparkan secara bersambung di bawah.'}
              </p>
              <div className="overflow-hidden rounded-[22px] border border-gray-200 bg-white p-3 shadow-sm md:p-4">
                <ImageGrid images={englishPrepImages} columns="grid-cols-1" joined />
              </div>
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
    <div className="min-h-screen bg-[#f7f4ef] pb-20 pt-24">
      <section className="border-b border-black/5 bg-[#fbf8f3] px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">
              Home
            </Link>
            <ChevronRight size={12} className="text-gray-300" />
            <Link to="/student/student-info" className="transition-colors hover:text-[#A51C30]">
              Student
            </Link>
            <ChevronRight size={12} className="text-gray-300" />
            <span className="text-[#A51C30]">
              {lang === 'EN' ? 'Admission Requirements' : 'Syarat Kemasukan'}
            </span>
          </nav>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              
              <h1 className="font-serif text-4xl tracking-tight text-gray-950 md:text-6xl">
                {lang === 'EN' ? 'Admission Requirements' : 'Syarat Kemasukan'}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
                {lang === 'EN'
                  ? 'Review the admission requirements for doctoral and master degree programmes, language requirements, and English preparatory support for international applicants.'
                  : 'Semak syarat kemasukan bagi program doktoral dan sarjana, syarat bahasa, serta sokongan kursus persediaan bahasa Inggeris untuk pemohon antarabangsa.'}
              </p>
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

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => {
            setSelectedImage(null);
            setZoomLevel(1);
          }}
        >
          <div
            className="relative w-full max-w-6xl rounded-[24px] bg-white p-4 shadow-2xl md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Image Viewer' : 'Paparan Imej'}
                </p>
                <p className="truncate text-sm text-gray-500">{selectedImage.filename}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel((current) => Math.max(1, Number((current - 0.25).toFixed(2))))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#A51C30]/30 hover:text-[#A51C30]"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={17} />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((current) => Math.min(3, Number((current + 0.25).toFixed(2))))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#A51C30]/30 hover:text-[#A51C30]"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={17} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedImage(null);
                    setZoomLevel(1);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#A51C30]/30 hover:text-[#A51C30]"
                  aria-label="Close image viewer"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            <div className="max-h-[78vh] overflow-auto rounded-[18px] bg-[#faf8f4] p-3 md:p-4">
              <div className="flex min-h-[320px] items-start justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.filename}
                  className="h-auto max-w-none origin-top transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdmissionRequirements;