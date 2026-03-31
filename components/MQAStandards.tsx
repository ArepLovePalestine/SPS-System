
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Info, 
  X, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Language, MQADocument } from '../types';
import { Link } from 'react-router-dom';

interface MQAStandardsProps {
  lang: Language;
}

const documents: MQADocument[] = [
  {
    id: 'mqf-2nd-edition',
    title: { 
      EN: 'Malaysian Qualifications Framework (MQF) 2nd Edition', 
      BM: 'Kerangka Kelayakan Malaysia (MQF) Edisi ke-2' 
    },
    edition: '2nd Edition',
    year: '2018',
    category: 'MQF',
    tag: 'Popular',
    fileUrl: 'https://www.mqa.gov.my/pv4/document/mqf/2019/MQF%20Ed%202%2002102019.pdf',
    fileSize: '1.02 MB',
    publishDate: '02 October 2019'
  },
  {
    id: 'ps-computing',
    title: { 
      EN: 'Programme Standards: Computing', 
      BM: 'Standard Program: Pengkomputeran' 
    },
    edition: '',
    year: '2015',
    category: 'Computing',
    tag: 'New',
    fileUrl: 'https://www.mqa.gov.my/pv4/document/ps/2022/PS%20Computing%202nd%20Edition.pdf',
    publishDate: '2022'
  },
  {
    id: 'ps-engineering',
    title: { 
      EN: 'Programme Standards: Engineering and Engineering Technology', 
      BM: 'Standard Program: Kejuruteraan dan Teknologi Kejuruteraan' 
    },
    edition: '',
    year: '2011',
    category: 'Engineering',
    tag: 'Updated',
    fileUrl: 'https://www.mqa.gov.my/pv4/document/ps/2019/PS%20Engineering%20&%20Engineering%20Technology.pdf',
    publishDate: '2019'
  },
  {
    id: 'ps-business',
    title: { 
      EN: 'Programme Standards: Business Studies', 
      BM: 'Standard Program: Pengajian Perniagaan' 
    },
    edition: '2nd Edition',
    year: '2021',
    category: 'Business',
    fileUrl: 'https://www.mqa.gov.my/pv4/document/ps/2021/PS%20Business%20Studies%202nd%20Edition.pdf',
    publishDate: '2021'
  },
  {
    id: 'copa-research',
    title: { 
      EN: 'Standards: Master\'s and Doctoral Degree', 
      BM: 'Kod Amalan Akreditasi Program: Ijazah Penyelidikan' 
    },
    edition: '1st Edition',
    year: '2020',
    category: 'MQF',
    tag: 'Popular',
    fileUrl: 'https://www.mqa.gov.my/pv4/document/copa/2020/COPA%20Research%20Degree.pdf',
    publishDate: '2020'
  }
];

const MQAStandards: React.FC<MQAStandardsProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [previewDoc, setPreviewDoc] = useState<MQADocument | null>(null);
  const [detailsDoc, setDetailsDoc] = useState<MQADocument | null>(null);

  const detailsContent = {
    title: { EN: 'Document Details', BM: 'Butiran Dokumen' },
    fileSize: { EN: 'File Size', BM: 'Saiz Fail' },
    publishDate: { EN: 'Date', BM: 'Tarikh' },
    category: { EN: 'Category', BM: 'Kategori' },
    edition: { EN: 'Edition', BM: 'Edisi' },
    fallback: { EN: 'Refer to source document', BM: 'Rujuk dokumen sumber' },
    close: { EN: 'Close', BM: 'Tutup' }
  };

  const filteredDocs = useMemo(() => {
    return documents.filter(doc => {
      const matchesSearch = doc.title[lang].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || doc.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter, lang]);

  const categories = ['All', 'MQF', 'Engineering', 'Computing', 'Business'];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="space-y-4">
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              <Link to="/" className="hover:text-[#A51C30] transition-colors">HOME</Link>
              <ChevronRight size={10} />
              <span className="text-[#A51C30]">{lang === 'EN' ? 'ACCREDITATION' : 'AKREDITASI'}</span>
            </nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900"
            >
              {lang === 'EN' ? 'MQA Standards and Programme Standards' : 'Standard MQA dan Standard Program'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl text-lg font-light"
            >
              {lang === 'EN' 
                ? 'Official accreditation and programme standard documents.' 
                : 'Dokumen akreditasi rasmi dan standard program.'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder={lang === 'EN' ? 'Search document name...' : 'Cari nama dokumen...'}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#A51C30]/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="flex items-center space-x-2 text-gray-400">
                <Filter size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'EN' ? 'Filter by' : 'Tapis mengikut'}</span>
              </div>
              <select 
                className="bg-gray-50 border-none rounded-2xl px-6 py-3 text-sm font-bold text-gray-600 focus:ring-2 focus:ring-[#A51C30]/20 transition-all cursor-pointer"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Document Grid */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDocs.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row gap-8 group"
                >
                  {/* Icon & Info */}
                  <div className="flex-grow flex gap-6">
                    <div className="w-16 h-16 bg-[#A51C30]/5 rounded-2xl flex items-center justify-center text-[#A51C30] shrink-0 group-hover:bg-[#A51C30] group-hover:text-white transition-colors duration-500">
                      <FileText size={32} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                          {doc.category}
                        </span>
                        {doc.tag && (
                          <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${
                            doc.tag === 'New' ? 'bg-emerald-50 text-emerald-600' : 
                            doc.tag === 'Updated' ? 'bg-blue-50 text-blue-600' : 
                            'bg-amber-50 text-amber-600'
                          }`}>
                            {doc.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight group-hover:text-[#A51C30] transition-colors duration-300">
                        {doc.title[lang]}
                      </h3>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                        {doc.edition} • {doc.year}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-3 justify-center md:justify-start shrink-0">
                    <button 
                      onClick={() => setPreviewDoc(doc)}
                      className="flex-grow md:flex-none flex items-center justify-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-600 px-5 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all"
                    >
                      <Eye size={14} />
                      <span>{lang === 'EN' ? 'Preview' : 'Pratonton'}</span>
                    </button>
                    <button
                      onClick={() => setDetailsDoc(doc)}
                      className="flex-grow md:flex-none flex items-center justify-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-600 px-5 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all"
                    >
                      <Info size={14} />
                      <span>{lang === 'EN' ? 'Details' : 'Butiran'}</span>
                    </button>
                    <a 
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow md:flex-none flex items-center justify-center space-x-2 bg-[#A51C30] hover:bg-[#800000] text-white px-5 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-maroon-900/10"
                    >
                      <Download size={14} />
                      <span>{lang === 'EN' ? 'Download' : 'Muat Turun'}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredDocs.length === 0 && (
            <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-light italic">
                {lang === 'EN' ? 'No documents found matching your criteria.' : 'Tiada dokumen dijumpai yang sepadan dengan kriteria anda.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Preview Modal */}
      <AnimatePresence>
        {detailsDoc && (
          <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailsDoc(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <p className="text-[10px] font-bold text-[#A51C30] uppercase tracking-widest mb-2">
                    {detailsContent.title[lang]}
                  </p>
                  <h2 className="text-xl font-serif font-bold text-gray-900">
                    {detailsDoc.title[lang]}
                  </h2>
                </div>
                <button
                  onClick={() => setDetailsDoc(null)}
                  className="p-3 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{detailsContent.fileSize[lang]}</p>
                  <p className="text-base font-semibold text-gray-900">{detailsDoc.fileSize || detailsContent.fallback[lang]}</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{detailsContent.publishDate[lang]}</p>
                  <p className="text-base font-semibold text-gray-900">{detailsDoc.publishDate || detailsDoc.year}</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{detailsContent.category[lang]}</p>
                  <p className="text-base font-semibold text-gray-900">{detailsDoc.category}</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{detailsContent.edition[lang]}</p>
                  <p className="text-base font-semibold text-gray-900">{detailsDoc.edition || detailsContent.fallback[lang]}</p>
                </div>
              </div>

              <div className="px-6 pb-6 flex justify-end">
                <button
                  onClick={() => setDetailsDoc(null)}
                  className="bg-[#A51C30] text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#800000] transition-colors"
                >
                  {detailsContent.close[lang]}
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {previewDoc && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewDoc(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#A51C30]/5 rounded-xl flex items-center justify-center text-[#A51C30]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-serif font-bold text-gray-900 line-clamp-1">
                      {previewDoc.title[lang]}
                    </h2>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {previewDoc.category} • {previewDoc.edition}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <a 
                    href={previewDoc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#A51C30] text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#800000] transition-colors shadow-lg shadow-maroon-900/10"
                  >
                    <Download size={14} />
                    <span>{lang === 'EN' ? 'Download PDF' : 'Muat Turun PDF'}</span>
                  </a>
                  <button 
                    onClick={() => setPreviewDoc(null)}
                    className="p-3 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-xl transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content (Iframe Preview) */}
              <div className="flex-grow bg-gray-100 relative">
                <iframe 
                  src={`${previewDoc.fileUrl}#toolbar=0`} 
                  className="w-full h-full border-none"
                  title="PDF Preview"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/20 flex items-center space-x-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {lang === 'EN' ? 'Preview Mode' : 'Mod Pratonton'}
                  </span>
                  <div className="w-px h-4 bg-gray-200" />
                  <a 
                    href={previewDoc.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-[#A51C30] uppercase tracking-widest flex items-center space-x-2 hover:underline"
                  >
                    <span>{lang === 'EN' ? 'Open in New Tab' : 'Buka di Tab Baru'}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MQAStandards;
