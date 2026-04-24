import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Building2, ChevronLeft, X } from 'lucide-react';
import { Language } from '../types';

type BrochureModule = {
  default: string;
};

type FacultyCardData = {
  id: string;
  name: { EN: string; BM: string };
  folderNames: string[];
  websiteUrl: string;
};

type FacultyBrochureCardProps = {
  faculty: FacultyCardData;
  images: string[];
  lang: Language;
  onOpenPreview: (facultyName: string, images: string[], initialIndex: number) => void;
};

const brochureModules = import.meta.glob<BrochureModule>(
  '../images/Faculty-Brochure/**/*.{png,jpg,jpeg,JPG,JPEG,PNG}',
  { eager: true }
);

const brochureEntries = Object.entries(brochureModules).map(([path, mod]) => ({
  path,
  src: mod.default,
}));

const FACULTY_CARDS: FacultyCardData[] = [
  {
    id: 'ftke',
    name: {
      EN: 'Faculty of Electrical Technology and Engineering (FTKE)',
      BM: 'Fakulti Teknologi dan Kejuruteraan Elektrik (FTKE)',
    },
    folderNames: ['Ftke brochure'],
    websiteUrl: 'https://ftke.utem.edu.my/en/',
  },
  {
    id: 'ftkek',
    name: {
      EN: 'Faculty of Electronics and Computer Technology and Engineering (FTKEK)',
      BM: 'Fakulti Teknologi dan Kejuruteraan Elektronik dan Komputer (FTKEK)',
    },
    folderNames: ['Ftkek brochure'],
    websiteUrl: 'https://ftkek.utem.edu.my/',
  },
  {
    id: 'ftkm',
    name: {
      EN: 'Faculty of Mechanical Technology and Engineering (FTKM)',
      BM: 'Fakulti Teknologi dan Kejuruteraan Mekanikal (FTKM)',
    },
    folderNames: ['Ftkm brochure'],
    websiteUrl: 'https://ftkm.utem.edu.my/',
  },
  {
    id: 'ftkip',
    name: {
      EN: 'Faculty of Industrial and Manufacturing Technology and Engineering (FTKIP)',
      BM: 'Fakulti Teknologi dan Kejuruteraan Industri dan Pembuatan (FTKIP)',
    },
    folderNames: ['Ftkip brohure'],
    websiteUrl: 'https://ftkip.utem.edu.my/',
  },
  {
    id: 'ftmk',
    name: {
      EN: 'Faculty of Information And Communications Technology (FTMK)',
      BM: 'Fakulti Teknologi Maklumat dan Komunikasi (FTMK)',
    },
    folderNames: ['Ftmk brochure'],
    websiteUrl: 'https://ftmk.utem.edu.my/web/',
  },
  {
    id: 'fptt',
    name: {
      EN: 'Faculty of Technology Management And Technopreneurship (FPTT)',
      BM: 'Fakulti Pengurusan Teknologi dan Teknokeusahawanan (FPTT)',
    },
    folderNames: ['Fptt brochure'],
    websiteUrl: 'https://fptt.utem.edu.my/',
  },
  {
    id: 'iptk',
    name: {
      EN: 'Institute of Technology Management And Entrepreneurship (IPTK)',
      BM: 'Institut Pengurusan Teknologi dan Keusahawanan (IPTK)',
    },
    folderNames: ['Iptk brochure'],
    websiteUrl: 'https://iptk.utem.edu.my/en/',
  },
  {
    id: 'faix',
    name: {
      EN: 'Faculty of Artificial Intelligence and Cyber Security (FAIX)',
      BM: 'Fakulti Kecerdasan Buatan dan Keselamatan Siber (FAIX)',
    },
    folderNames: ['Faix brochure'],
    websiteUrl: 'https://faix.utem.edu.my/en/',
  },
];

const clampIndex = (index: number, length: number) => {
  if (length === 0) return 0;
  if (index < 0) return length - 1;
  if (index >= length) return 0;
  return index;
};

const FacultyBrochureCard: React.FC<FacultyBrochureCardProps> = ({
  faculty,
  images,
  lang,
  onOpenPreview,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const tapRef = useRef<{ time: number; index: number }>({ time: 0, index: 0 });

  const hasImages = images.length > 0;
  const activeImage = hasImages ? images[currentIndex] : null;

  const goToIndex = (nextIndex: number) => {
    setCurrentIndex(clampIndex(nextIndex, images.length));
  };

  const handleDoubleTap = (index: number) => {
    const now = Date.now();
    if (tapRef.current.index === index && now - tapRef.current.time < 300) {
      onOpenPreview(faculty.name[lang], images, index);
    }
    tapRef.current = { time: now, index };
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null || !hasImages) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 40) {
      goToIndex(currentIndex + (distance < 0 ? 1 : -1));
    }
    setTouchStartX(null);
  };

  return (
    <motion.article
      layout
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden bg-gray-100"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={() => hasImages && onOpenPreview(faculty.name[lang], images, currentIndex)}
      >
        {hasImages ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={`${faculty.id}-${currentIndex}`}
                src={activeImage || ''}
                alt={`${faculty.name[lang]} brochure ${currentIndex + 1}`}
                className="h-full w-full object-contain bg-gray-50"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={() => handleDoubleTap(currentIndex)}
              />
            </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent" />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goToIndex(currentIndex - 1)}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition hover:bg-white"
                  aria-label={`Previous brochure for ${faculty.name[lang]}`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => goToIndex(currentIndex + 1)}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition hover:bg-white"
                  aria-label={`Next brochure for ${faculty.name[lang]}`}
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            <div className="absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-gray-500">
            No brochure available
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start gap-3">
          <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#A51C30]/5 text-[#A51C30]">
            <Building2 size={20} />
          </div>
          <h3 className="text-lg font-serif leading-tight text-gray-900">
            {faculty.name[lang]}
          </h3>
        </div>

        {hasImages && images.length > 1 && (
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {images.map((_, imageIndex) => (
              <button
                key={`${faculty.id}-dot-${imageIndex}`}
                type="button"
                onClick={() => goToIndex(imageIndex)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  imageIndex === currentIndex ? 'w-8 bg-[#A51C30]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View brochure ${imageIndex + 1} for ${faculty.name[lang]}`}
              />
            ))}
          </div>
        )}

        {hasImages && (
          <div className="mt-auto space-y-3">
            <button
              type="button"
              onClick={() => onOpenPreview(faculty.name[lang], images, currentIndex)}
              className="w-full rounded-2xl bg-[#A51C30] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#8E1728]"
            >
              {lang === 'EN' ? 'Open Preview' : 'Buka Pratonton'}
            </button>
            <a
              href={faculty.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${faculty.id.toUpperCase()} official website`}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-600 transition hover:border-[#A51C30] hover:text-[#A51C30]"
            >
              {lang === 'EN' ? 'Click For More Info' : 'Klik Untuk Maklumat Lanjut'}
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
};

interface FacultyBrochureProps {
  lang: Language;
}

const FacultyBrochure: React.FC<FacultyBrochureProps> = ({ lang }) => {
  const [preview, setPreview] = useState<{ title: string; images: string[]; index: number } | null>(null);
  const previewTouchStart = useRef<number | null>(null);

  const facultiesWithImages = useMemo(
    () =>
      FACULTY_CARDS.map((faculty) => ({
        ...faculty,
        images: brochureEntries
          .filter((entry) => faculty.folderNames.some((folderName) => entry.path.includes(`/Faculty-Brochure/${folderName}/`)))
          .sort((a, b) => a.path.localeCompare(b.path))
          .map((entry) => entry.src),
      })),
    []
  );

  const content = {
    title: { EN: 'Faculty Brochure', BM: 'Broshur Fakulti' },
    subtitle: {
      EN: 'Specific postgraduate program brochures categorized by faculty',
      BM: 'Broshur program pascasiswazah khusus mengikut fakulti',
    },
  };

  const setPreviewIndex = (nextIndex: number) => {
    setPreview((currentPreview) => {
      if (!currentPreview) return currentPreview;
      return {
        ...currentPreview,
        index: clampIndex(nextIndex, currentPreview.images.length),
      };
    });
  };

  const handlePreviewTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    previewTouchStart.current = event.changedTouches[0].clientX;
  };

  const handlePreviewTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!preview || previewTouchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - previewTouchStart.current;
    if (Math.abs(distance) > 40) {
      setPreviewIndex(preview.index + (distance < 0 ? 1 : -1));
    }
    previewTouchStart.current = null;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-24">
      <section className="border-b border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
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
              className="text-4xl font-serif text-gray-900 md:text-5xl"
            >
              {content.title[lang]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl text-lg font-light text-gray-500"
            >
              {content.subtitle[lang]}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {facultiesWithImages.map((faculty) => (
              <FacultyBrochureCard
                key={faculty.id}
                faculty={faculty}
                images={faculty.images}
                lang={lang}
                onOpenPreview={(title, images, initialIndex) =>
                  setPreview({ title, images, index: initialIndex })
                }
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 p-4 backdrop-blur-sm md:p-8"
            onClick={() => setPreview(null)}
          >
            <div className="flex h-full items-center justify-center">
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-4 md:px-8">
                  <div className="min-w-0 pr-2">
                    <h2 className="text-lg font-serif text-gray-900 md:text-2xl">{preview.title}</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {preview.index + 1} / {preview.images.length}
                    </p>
                  </div>
                  <div className="relative z-10 flex shrink-0 items-center gap-2">
                    {preview.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setPreviewIndex(preview.index - 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-[#A51C30] hover:text-[#A51C30] md:h-10 md:w-10"
                          aria-label="Previous preview image"
                        >
                          <ChevronLeft size={17} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewIndex(preview.index + 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-[#A51C30] hover:text-[#A51C30] md:h-10 md:w-10"
                          aria-label="Next preview image"
                        >
                          <ChevronRight size={17} />
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => setPreview(null)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 md:h-10 md:w-10"
                      aria-label="Close preview"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                <div
                  className="relative bg-gray-50 p-4 pt-6 md:p-8"
                  onTouchStart={handlePreviewTouchStart}
                  onTouchEnd={handlePreviewTouchEnd}
                >
                  <img
                    src={preview.images[preview.index]}
                    alt={`${preview.title} preview ${preview.index + 1}`}
                    className="mx-auto max-h-[75vh] w-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FacultyBrochure;
