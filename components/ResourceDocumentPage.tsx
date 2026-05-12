import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Download, ExternalLink, FileText } from 'lucide-react';
import { Language } from '../types';

interface ResourceDocumentPageProps {
  title: {
    EN: string;
    BM: string;
  };
  description?: {
    EN: string;
    BM: string;
  };
  folderPath: string; // Path to search for files, e.g., "Facilities/Auditorium"
  lang: Language;
}

// Dynamically import all PDF and DOC files
const pdfModules = import.meta.glob('../src/assets/Document file/All resources/**/*.pdf', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const docModules = import.meta.glob('../src/assets/Document file/All resources/**/*.{doc,docx}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const allDocuments = { ...pdfModules, ...docModules };

const toTitle = (filename: string) => {
  return filename
    .replace(/\.(pdf|doc|docx)$/i, '')
    .replace(/[\-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

interface DocumentItem {
  title: string;
  href: string;
  type: string;
}

const getDocumentsForFolder = (folderPath: string): DocumentItem[] => {
  const items: DocumentItem[] = [];
  const processedKeys = new Set<string>();

  for (const key in allDocuments) {
    if (key.includes(`All resources/${folderPath}`) && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        const fileType = filename.toLowerCase().endsWith('.pdf') ? 'PDF' : 'DOC';
        items.push({
          title: toTitle(filename),
          href: allDocuments[key],
          type: fileType,
        });
      }
    }
  }

  return items;
};

const ResourceDocumentPage: React.FC<ResourceDocumentPageProps> = ({
  title,
  description,
  folderPath,
  lang,
}) => {
  const displayTitle = title[lang];
  const displayDescription = description?.[lang];

  const documents = useMemo(() => getDocumentsForFolder(folderPath), [folderPath]);

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
            <Link to="/resources" className="transition-colors hover:text-[#A51C30]">
              {lang === 'EN' ? 'RESOURCES' : 'SUMBER'}
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
            {displayDescription && (
              <p className="max-w-3xl text-lg font-light leading-relaxed text-gray-600">
                {displayDescription}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
          {documents.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-gray-900">
                  {lang === 'EN' ? 'Documents' : 'Dokumen'}
                </h2>
                <p className="mt-2 text-sm font-light text-gray-500">
                  {documents.length} {lang === 'EN' ? 'document(s) available' : 'dokumen tersedia'}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                <div className="divide-y divide-gray-100">
                  {documents.map((doc, index) => (
                    <motion.a
                      key={doc.href}
                      href={doc.href}
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
                              {doc.type}
                            </span>
                            <h3 className="text-sm font-bold text-gray-900 transition group-hover:text-[#A51C30] md:text-base break-words">
                              {doc.title}
                            </h3>
                          </div>
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
            </>
          ) : (
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
                {lang === 'EN' ? 'No Documents Yet' : 'Tiada Dokumen'}
              </h2>

              <p className="mx-auto max-w-md text-gray-600 font-light leading-relaxed mb-8">
                {lang === 'EN'
                  ? 'Documents for this resource will be uploaded soon. Please check back later.'
                  : 'Dokumen untuk sumber ini akan dimuat naik tidak lama lagi. Sila periksa semula kemudian.'}
              </p>

              <Link
                to="/resources"
                className="inline-flex items-center gap-2 rounded-lg bg-[#A51C30] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#A51C30]/15 transition hover:bg-[#8B1829]"
              >
                {lang === 'EN' ? 'Back to Resources' : 'Kembali ke Sumber'}
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourceDocumentPage;
