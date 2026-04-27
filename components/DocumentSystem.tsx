
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Search, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Eye, 
  X,
  FileIcon,
  Calendar,
  HardDrive
} from 'lucide-react';
import { Language } from '../types';

interface Document {
  id: string;
  title: { EN: string; BM: string };
  description: { EN: string; BM: string };
  category: string;
  updatedAt: string;
  fileSize: string;
  format: string;
  fileUrl: string;
}

interface DocumentSystemProps {
  lang: Language;
  title: { EN: string; BM: string };
  subtitle: { EN: string; BM: string };
  initialCategory?: string;
}

const pdfModules = import.meta.glob('../Document file/**/*.pdf', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const CATEGORY_META = {
  Academic: {
    EN: 'Official academic form for postgraduate administration and student matters.',
    BM: 'Borang akademik rasmi untuk urusan pentadbiran dan hal ehwal pelajar pascasiswazah.'
  },
  'Research Proposal': {
    EN: 'Research proposal document and template for postgraduate submission.',
    BM: 'Dokumen dan templat cadangan penyelidikan untuk penyerahan pascasiswazah.'
  },
  Thesis: {
    EN: 'Official thesis form, checklist, or guideline for submission and examination.',
    BM: 'Borang, senarai semak, atau garis panduan tesis rasmi untuk penyerahan dan peperiksaan.'
  },
  Financial: {
    EN: 'Financial form for payment, deferment, claim, or fee reduction matters.',
    BM: 'Borang kewangan untuk urusan bayaran, penangguhan, tuntutan, atau pengurangan yuran.'
  },
  ISO: {
    EN: 'ISO form or template related to quality management processes.',
    BM: 'Borang atau templat ISO berkaitan proses pengurusan kualiti.'
  }
} as const;

const RAW_DOCUMENTS = [
  { id: 'acad-01', folder: 'Academic Forms file', filename: 'Add Subject Form Penambahan Matapelajaran.pdf', category: 'Academic', bytes: 199893 },
  { id: 'acad-03', folder: 'Academic Forms file', filename: 'Additional or Change Of Supervisor Perubahan atau Pertukaran Penyelia.pdf', category: 'Academic', bytes: 194409 },
  { id: 'acad-05', folder: 'Academic Forms file', filename: 'BORANG PERMOHONAN PENUKARAN PERINGKAT PENGAJIAN SARJANA PENYELIDIKAN KE PERINGKAT DOKTOR FALSAFAH PhD.pdf', category: 'Academic', bytes: 455769 },
  { id: 'acad-06', folder: 'Academic Forms file', filename: 'Candidate Particulars  Borang Maklumat Pelajar Siswazah.pdf', category: 'Academic', bytes: 232028 },
  { id: 'acad-07', folder: 'Academic Forms file', filename: 'Change Of Programme Pertukaran Program.pdf', category: 'Academic', bytes: 229320 },
  { id: 'acad-08', folder: 'Academic Forms file', filename: 'Deferment Of Study Tangguh Pengajian.pdf', category: 'Academic', bytes: 188875 },
  { id: 'acad-09', folder: 'Academic Forms file', filename: 'Extension Of Candidature Perlanjutan Tempoh Pengajian.pdf', category: 'Academic', bytes: 350430 },
  { id: 'acad-10', folder: 'Academic Forms file', filename: 'Letter Application Form Borang Permohonan Surat.pdf', category: 'Academic', bytes: 205113 },
  { id: 'acad-11', folder: 'Academic Forms file', filename: 'Personal Particular Form International Student.pdf', category: 'Academic', bytes: 89609 },
  { id: 'acad-12', folder: 'Academic Forms file', filename: 'Pertukaran Mod Pendaftaran.pdf', category: 'Academic', bytes: 219097 },
  { id: 'acad-13', folder: 'Academic Forms file', filename: 'Referee Form Borang Penyokong.pdf', category: 'Academic', bytes: 168931 },
  { id: 'acad-14', folder: 'Academic Forms file', filename: 'Transfer or Exemption Of Credits Pemindahanm atau Pengecualian Kredit.pdf', category: 'Academic', bytes: 224792 },
  { id: 'acad-15', folder: 'Academic Forms file', filename: 'Withdrawal From Studies Form Borang Tarik Diri Pengajian new 2.pdf', category: 'Academic', bytes: 153696 },
  { id: 'acad-16', folder: 'Academic Forms file', filename: 'Withdrawal From Subject Form  Borang Tarik Diri Matapelajaran.pdf', category: 'Academic', bytes: 235049 },
  { id: 'fin-01', folder: 'Financial Forms file', filename: 'Borang Permohonan Penangguhan Yuran Pengajian.pdf', category: 'Financial', bytes: 1175289 },
  { id: 'fin-02', folder: 'Financial Forms file', filename: 'borang TUNTUTAN khairat Kematian.pdf', category: 'Financial', bytes: 612641 },
  { id: 'fin-03', folder: 'Financial Forms file', filename: 'Fee Reduction Form for staff Borang Pengurangan Yuran Pengajian untuk Staff.pdf', category: 'Financial', bytes: 119781 },
  { id: 'fin-04', folder: 'Financial Forms file', filename: 'Payment Form Borang Pembayaran.pdf', category: 'Financial', bytes: 116192 },
  { id: 'iso-01', folder: 'ISO Form & Template', filename: 'Borang Bayaran Saguhati Penceramah Fasilitator Sambilan.pdf', category: 'ISO', bytes: 70130 },
  { id: 'iso-02', folder: 'ISO Form & Template', filename: 'Borang Jawapan Pemeriksa .pdf', category: 'ISO', bytes: 218583 },
  { id: 'iso-03', folder: 'ISO Form & Template', filename: 'Borang Penghantaran Soalan Final Exam.pdf', category: 'ISO', bytes: 110343 },
  { id: 'iso-04', folder: 'ISO Form & Template', filename: 'Template Jadual Peperiksaan Akhir Pasca Siswazah.pdf', category: 'ISO', bytes: 96514 },
  { id: 'iso-05', folder: 'ISO Form & Template', filename: 'Template Penawaran Mata Pelajaran.pdf', category: 'ISO', bytes: 40123 },
  { id: 'the-01', folder: 'Thesis Forms file', filename: 'Borang Pembetulan Tesis.pdf', category: 'Thesis', bytes: 417643 },
  { id: 'the-02', folder: 'Thesis Forms file', filename: 'Borang Pembetulan Tesis Resubmit o Reviva.pdf', category: 'Thesis', bytes: 419451 },
  { id: 'the-03', folder: 'Thesis Forms file', filename: 'Checklist For Hardbound Thesis Submission New.pdf', category: 'Thesis', bytes: 538555 },
  { id: 'the-04', folder: 'Thesis Forms file', filename: 'DECLARATION OF MASTER AND DOCTORAL THESIS.pdf', category: 'Thesis', bytes: 144370 },
  { id: 'the-05', folder: 'Thesis Forms file', filename: 'FINAL THESIS SUBMISSION FORM  julai.pdf', category: 'Thesis', bytes: 181322 },
  { id: 'the-06', folder: 'Thesis Forms file', filename: 'Guidelines for Thesis Dissertation  Report.pdf', category: 'Thesis', bytes: 1521521 },
  { id: 'the-07', folder: 'Thesis Forms file', filename: 'Laporan Kemajuan Penyelidikan.pdf', category: 'Thesis', bytes: 348342 }
] as const;

const formatFileSize = (bytes: number) => {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
};

const extractYear = (filename: string) => {
  const match = filename.match(/\b(20\d{2})\b/);
  return match ? match[1] : 'N/A';
};

const cleanTitle = (filename: string) => filename.replace(/\.pdf$/i, '').replace(/\s+/g, ' ').trim();

const resolvePdfUrl = (folder: string, filename: string) => {
  const key = `../Document file/${folder}/${filename}`;
  return pdfModules[key] || '#';
};

const REAL_DOCUMENTS: Document[] = RAW_DOCUMENTS.map((doc) => ({
  id: doc.id,
  title: { EN: cleanTitle(doc.filename), BM: cleanTitle(doc.filename) },
  description: { EN: CATEGORY_META[doc.category].EN, BM: CATEGORY_META[doc.category].BM },
  category: doc.category,
  updatedAt: extractYear(doc.filename),
  fileSize: formatFileSize(doc.bytes),
  format: 'PDF',
  fileUrl: resolvePdfUrl(doc.folder, doc.filename)
}));

const CATEGORIES = ['Academic', 'Research Proposal', 'Thesis', 'Financial', 'ISO'];

const DocumentSystem: React.FC<DocumentSystemProps> = ({ lang, title, subtitle, initialCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(initialCategory || 'All');
    setSearchQuery('');
    setCurrentPage(1);
    setSelectedDoc(null);
    setIsPreviewOpen(false);
  }, [initialCategory]);

  // Dynamic Title Logic
  const dynamicTitle = useMemo(() => {
    if (selectedCategory === 'All') return title[lang];
    
    if (lang === 'EN') {
      const suffix = selectedCategory === 'Research Proposal' ? ' Forms' : ' Forms';
      return `${selectedCategory}${suffix}`;
    } else {
      // BM Translations
      const translations: { [key: string]: string } = {
        'Academic': 'Borang Akademik',
        'Research Proposal': 'Borang Cadangan Penyelidikan',
        'Thesis': 'Borang Tesis',
        'Financial': 'Borang Kewangan',
        'ISO': 'Borang ISO'
      };
      return translations[selectedCategory] || title[lang];
    }
  }, [selectedCategory, lang, title]);

  const filteredDocs = useMemo(() => {
    return REAL_DOCUMENTS.filter(doc => {
      const matchesSearch = doc.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, lang]);

  const totalPages = Math.ceil(filteredDocs.length / itemsPerPage);
  const paginatedDocs = filteredDocs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const pageStart = filteredDocs.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const pageEnd = Math.min(currentPage * itemsPerPage, filteredDocs.length);

  const handleDocClick = (doc: Document) => {
    setSelectedDoc(doc);
  };

  const hasPreview = selectedDoc?.fileUrl && selectedDoc.fileUrl !== '#';

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Page Header */}
      <section className="py-16 bg-white border-b border-gray-100 mb-12">
        <div className="max-w-[900px] mx-auto px-8">
          <nav className="mb-8 flex items-center justify-start space-x-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">
            <Link to="/resources" className="transition-colors hover:text-[#A51C30]">
              Resources
            </Link>
            <ChevronRight size={10} className="text-gray-300" />
            <span className="text-[#A51C30]">{dynamicTitle}</span>
          </nav>
          <motion.h1 
            id="pageTitle"
            key={dynamicTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight text-center"
          >
            {dynamicTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-light text-center"
          >
            {subtitle[lang]}
          </motion.p>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-8">
        {/* Search & Filter System */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder={lang === 'EN' ? "Search forms..." : "Cari borang..."}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative min-w-[200px]">
            <select 
              id="categoryFilter"
              className="w-full appearance-none pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] transition-all text-sm cursor-pointer"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1); // Reset to first page on filter change
              }}
            >
              <option value="All">{lang === 'EN' ? 'All Categories' : 'Semua Kategori'}</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Document List */}
        <div className="space-y-1">
          {paginatedDocs.length > 0 ? (
            paginatedDocs.map((doc) => (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group flex items-center justify-between p-6 hover:bg-gray-50 transition-all rounded-xl border-b border-gray-100 last:border-0 cursor-pointer"
                onClick={() => handleDocClick(doc)}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                    <FileIcon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[17px] font-bold text-gray-900 group-hover:text-[#A51C30] transition-colors">
                      {doc.title[lang]}
                    </h3>
                    <p className="text-sm text-gray-500 font-light line-clamp-1">
                      {doc.description[lang]}
                    </p>
                    <div className="flex items-center space-x-4 text-[11px] font-bold uppercase tracking-widest text-gray-400 pt-1">
                      <span className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{doc.updatedAt}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <HardDrive size={12} />
                        <span>{doc.fileSize}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-300 group-hover:text-[#A51C30] transform group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))
          ) : (
            <div className="py-20 text-center text-gray-400 font-light">
              {selectedCategory === 'Research Proposal'
                ? (lang === 'EN'
                    ? 'No PDF documents are available yet for Research Proposal.'
                    : 'Tiada dokumen PDF tersedia lagi untuk Cadangan Penyelidikan.')
                : (lang === 'EN'
                    ? 'No documents found matching your search.'
                    : 'Tiada dokumen dijumpai yang sepadan dengan carian anda.')}
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredDocs.length > 0 && (
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-8">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">{lang === 'EN' ? 'Show' : 'Papar'}</span>
              <select 
                className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#A51C30]"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-500">{lang === 'EN' ? 'per page' : 'setiap halaman'}</span>
            </div>

            <div className="text-sm text-gray-500">
              {lang === 'EN'
                ? `Showing ${pageStart}-${pageEnd} of ${filteredDocs.length}`
                : `Memaparkan ${pageStart}-${pageEnd} daripada ${filteredDocs.length}`}
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                      currentPage === page 
                        ? 'bg-[#A51C30] text-white shadow-lg shadow-[#A51C30]/20' 
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Document Detail Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedDoc(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <button 
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                  onClick={() => setSelectedDoc(null)}
                >
                  <X size={24} />
                </button>

                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8">
                  <FileIcon size={32} />
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                  {selectedDoc.title[lang]}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  {selectedDoc.description[lang]}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 p-6 bg-gray-50 rounded-2xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">{lang === 'EN' ? 'Date' : 'Tarikh'}</span>
                    <span className="text-sm font-medium text-gray-900">{selectedDoc.updatedAt}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">{lang === 'EN' ? 'File Size' : 'Saiz Fail'}</span>
                    <span className="text-sm font-medium text-gray-900">{selectedDoc.fileSize}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">{lang === 'EN' ? 'Category' : 'Kategori'}</span>
                    <span className="text-sm font-medium text-gray-900">{selectedDoc.category}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">{lang === 'EN' ? 'Format' : 'Format'}</span>
                    <span className="text-sm font-medium text-gray-900">{selectedDoc.format}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => hasPreview && setIsPreviewOpen(true)}
                    disabled={!hasPreview}
                    className="flex-1 flex items-center justify-center space-x-2 py-4 bg-gray-900 text-white rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-gray-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Eye size={16} />
                    <span>{lang === 'EN' ? 'Preview' : 'Pratonton'}</span>
                  </button>
                  <a 
                    href={selectedDoc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center space-x-2 py-4 bg-[#A51C30] text-white rounded-xl font-bold tracking-widest uppercase text-xs transition-all shadow-lg shadow-[#A51C30]/20 ${hasPreview ? 'hover:bg-[#8a1728]' : 'pointer-events-none opacity-40'}`}
                  >
                    <Download size={16} />
                    <span>{lang === 'EN' ? 'Download' : 'Muat Turun'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PDF Preview Modal (Simplified) */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-[1000px] h-[80vh] bg-white rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
                <span className="font-bold text-sm text-gray-900 truncate pr-8">
                  {selectedDoc?.title[lang]}
                </span>
                <button 
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                  onClick={() => setIsPreviewOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-grow bg-gray-200 flex items-center justify-center">
                {selectedDoc ? (
                  <iframe
                    src={selectedDoc.fileUrl}
                    className="w-full h-full border-none bg-white"
                    title={selectedDoc.title[lang]}
                  />
                ) : null}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DocumentSystem;
