
import React, { useState, useMemo } from 'react';
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
  fileUrl: string;
}

interface DocumentSystemProps {
  lang: Language;
  title: { EN: string; BM: string };
  subtitle: { EN: string; BM: string };
  initialCategory?: string;
}

const MOCK_DOCUMENTS: Document[] = [
  // Academic
  {
    id: 'acad-01',
    title: { EN: 'Course Registration Form', BM: 'Borang Pendaftaran Kursus' },
    description: { EN: 'Official form for manual course registration and amendments.', BM: 'Borang rasmi untuk pendaftaran kursus secara manual dan pindaan.' },
    category: 'Academic',
    updatedAt: '2024-03-15',
    fileSize: '245 KB',
    fileUrl: '#'
  },
  {
    id: 'acad-02',
    title: { EN: 'Deferment of Study Application', BM: 'Permohonan Penangguhan Pengajian' },
    description: { EN: 'Form to apply for temporary leave or deferment of semester.', BM: 'Borang untuk memohon cuti sementara atau penangguhan semester.' },
    category: 'Academic',
    updatedAt: '2024-01-10',
    fileSize: '180 KB',
    fileUrl: '#'
  },
  // Research Proposal
  {
    id: 'res-01',
    title: { EN: 'Research Proposal Template (PhD)', BM: 'Templat Cadangan Penyelidikan (PhD)' },
    description: { EN: 'Standardized template for PhD research proposal submission.', BM: 'Templat standard untuk penyerahan cadangan penyelidikan PhD.' },
    category: 'Research Proposal',
    updatedAt: '2023-11-20',
    fileSize: '1.2 MB',
    fileUrl: '#'
  },
  // Thesis
  {
    id: 'the-01',
    title: { EN: 'Thesis Formatting Guidelines', BM: 'Garis Panduan Format Tesis' },
    description: { EN: 'Comprehensive guide for UTeM thesis formatting and submission.', BM: 'Panduan komprehensif untuk format dan penyerahan tesis UTeM.' },
    category: 'Thesis',
    updatedAt: '2024-02-05',
    fileSize: '3.5 MB',
    fileUrl: '#'
  },
  // Financial
  {
    id: 'fin-01',
    title: { EN: 'Zakat Assistance Application', BM: 'Permohonan Bantuan Zakat' },
    description: { EN: 'Application form for financial assistance through Zakat funds.', BM: 'Borang permohonan bantuan kewangan melalui dana Zakat.' },
    category: 'Financial',
    updatedAt: '2024-03-01',
    fileSize: '320 KB',
    fileUrl: '#'
  },
  // ISO
  {
    id: 'iso-01',
    title: { EN: 'Quality Management Manual', BM: 'Manual Pengurusan Kualiti' },
    description: { EN: 'Internal ISO documentation for quality assurance processes.', BM: 'Dokumen ISO dalaman untuk proses jaminan kualiti.' },
    category: 'ISO',
    updatedAt: '2023-12-15',
    fileSize: '2.1 MB',
    fileUrl: '#'
  }
];

const CATEGORIES = ['Academic', 'Research Proposal', 'Thesis', 'Financial', 'ISO'];

const DocumentSystem: React.FC<DocumentSystemProps> = ({ lang, title, subtitle, initialCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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
    return MOCK_DOCUMENTS.filter(doc => {
      const matchesSearch = doc.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, lang]);

  const totalPages = Math.ceil(filteredDocs.length / itemsPerPage);
  const paginatedDocs = filteredDocs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleDocClick = (doc: Document) => {
    setSelectedDoc(doc);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Page Header */}
      <section className="py-16 bg-gray-50 border-b border-gray-100 mb-12">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <motion.h1 
            id="pageTitle"
            key={dynamicTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight"
          >
            {dynamicTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-light"
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
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative min-w-[200px]">
            <select 
              id="categoryFilter"
              className="w-full appearance-none pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] transition-all text-sm cursor-pointer"
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
              {lang === 'EN' ? 'No documents found matching your search.' : 'Tiada dokumen dijumpai yang sepadan dengan carian anda.'}
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
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-500">{lang === 'EN' ? 'per page' : 'setiap halaman'}</span>
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

                <div className="grid grid-cols-2 gap-6 mb-10 p-6 bg-gray-50 rounded-2xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Last Updated</span>
                    <span className="text-sm font-medium text-gray-900">{selectedDoc.updatedAt}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">File Size</span>
                    <span className="text-sm font-medium text-gray-900">{selectedDoc.fileSize}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsPreviewOpen(true)}
                    className="flex-1 flex items-center justify-center space-x-2 py-4 bg-gray-900 text-white rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-gray-800 transition-all"
                  >
                    <Eye size={16} />
                    <span>{lang === 'EN' ? 'Preview' : 'Pratonton'}</span>
                  </button>
                  <a 
                    href={selectedDoc.fileUrl}
                    download
                    className="flex-1 flex items-center justify-center space-x-2 py-4 bg-[#A51C30] text-white rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-[#8a1728] transition-all shadow-lg shadow-[#A51C30]/20"
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
                <div className="text-center space-y-4">
                  <FileText size={64} className="mx-auto text-gray-400" />
                  <p className="text-gray-500 font-light">PDF Preview Placeholder</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">In a real app, this would be an iframe or PDF viewer</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DocumentSystem;
