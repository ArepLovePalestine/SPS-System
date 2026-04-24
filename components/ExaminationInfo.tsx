
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useIsPresent } from 'motion/react';
import { 
  ChevronRight, 
  FileText, 
  Calendar, 
  ExternalLink, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  ClipboardCheck,
  Download,
  Eye,
  X,
  ChevronDown,
  Info
} from 'lucide-react';
import { Language } from '../types';

interface ExaminationInfoProps {
  lang: Language;
}

interface ExpandedDocumentPreviewProps {
  title: { EN: string; BM: string };
  images?: string[];
  lang: Language;
}

const akadImages = [
  '/images/ExamInfo/Akad/Akad_Peperiksaan-1.jpg',
  '/images/ExamInfo/Akad/Akad_Peperiksaan-2.jpg',
];

const finalExamTimetableImages = [
  '/images/ExamInfo/FE_TT/web/_FE_Pasca_SEM_I_2024-2025_SPS1_Page_1.png',
  '/images/ExamInfo/FE_TT/web/_FE_Pasca_SEM_I_2024-2025_SPS1_Page_2.png',
];

const questionPaperSubmissionImage = '/images/ExamInfo/Borang_Penghantaran_Kertas_Soalan_Peperiksaan_Akhir-1.jpg';
const examInfoImages = [
  questionPaperSubmissionImage,
  ...akadImages,
  ...finalExamTimetableImages,
];

const ExpandedDocumentPreview: React.FC<ExpandedDocumentPreviewProps> = ({ title, images, lang }) => {
  const isPresent = useIsPresent();

  return (
    <div className="border-t border-gray-100 mt-6 pt-6">
      <motion.div 
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -8, opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="mx-auto max-w-5xl"
        style={{ visibility: isPresent ? 'visible' : 'hidden' }}
      >
        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_70px_-35px_rgba(15,23,42,0.45)]">
          <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/80 px-5 py-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                {title[lang]}
              </p>
              <p className="mt-1 text-[11px] text-gray-400">
                {lang === 'EN' ? 'Connected document preview' : 'Pratonton dokumen bersambung'}
              </p>
            </div>
            <span className="hidden rounded-full border border-gray-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 sm:inline-flex">
              {images?.length || 0} Pages
            </span>
          </div>

          <div className="max-h-[72vh] overflow-y-auto bg-white">
            {images?.map((img, pIdx) => (
              <img
                key={img}
                src={img}
                alt={`${title[lang]} page ${pIdx + 1}`}
                className="block w-full h-auto object-contain object-top"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="mt-5 rounded-2xl bg-gray-50 px-5 py-3.5 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center justify-center space-x-3 sm:justify-start">
          <Info size={20} className="text-[#A51C30]" />
          <p className="text-xs text-gray-500 font-medium italic">These resources are for institutional reference only. Reproduction without authorization is strictly prohibited.</p>
        </div>
        <span className="mt-3 block text-[10px] font-bold text-gray-300 uppercase tracking-widest sm:mt-0">SPS-EXAM-SPEC-2024</span>
      </div>
    </div>
  );
};

const ExaminationInfo: React.FC<ExaminationInfoProps> = ({ lang }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const browserWindow = window as Window & typeof globalThis & {
      requestIdleCallback?: (callback: IdleRequestCallback) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const preloadImages = () => {
      examInfoImages.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.decoding = 'async';
        img.decode?.().catch(() => undefined);
      });
    };

    if (browserWindow.requestIdleCallback && browserWindow.cancelIdleCallback) {
      const idleId = browserWindow.requestIdleCallback(preloadImages);
      return () => browserWindow.cancelIdleCallback?.(idleId);
    }

    const timeoutId = browserWindow.setTimeout(preloadImages, 300);
    return () => browserWindow.clearTimeout(timeoutId);
  }, []);

  const cards = [
    {
      id: 'submission',
      title: { 
        EN: 'Question Paper Submission Form', 
        BM: 'Borang Penyerahan Kertas Soalan' 
      },
      description: {
        EN: 'Official digital portal for lecturers to securely submit final examination question papers for vetting and printing.',
        BM: 'Portal digital rasmi bagi pensyarah untuk menyerahkan kertas soalan peperiksaan akhir secara selamat untuk semakan dan pencetakan.'
      },
      icon: ClipboardCheck,
      image: questionPaperSubmissionImage,
      cta: { EN: 'Submit Form', BM: 'Hantar Borang' },
      type: 'preview'
    },
    {
      id: 'akad',
      title: { 
        EN: 'Akad Peperiksaan', 
        BM: 'Akad Peperiksaan' 
      },
      description: {
        EN: 'The formal academic integrity agreement and protocols required for all students sitting for final examinations.',
        BM: 'Perjanjian integriti akademik formal dan protokol yang diperlukan bagi semua pelajar yang menduduki peperiksaan akhir.'
      },
      icon: ShieldCheck,
      image: akadImages[0],
      cta: { EN: 'View Protocols', BM: 'Lihat Protokol' },
      type: 'expandable',
      pairImages: akadImages
    },
    {
      id: 'timetable',
      title: { 
        EN: 'Final Examination Timetable', 
        BM: 'Jadual Waktu Peperiksaan Akhir' 
      },
      description: {
        EN: 'Comprehensive schedule of all final examination sessions across various faculties for the current semester.',
        BM: 'Jadual komprehensif bagi semua sesi peperiksaan akhir merentasi pelbagai fakulti bagi semester semasa.'
      },
      icon: Calendar,
      image: finalExamTimetableImages[0],
      cta: { EN: 'Access Timetable', BM: 'Akses Jadual Waktu' },
      type: 'expandable',
      pairImages: finalExamTimetableImages
    }
  ];

  const handleCardClick = (id: string, type: string) => {
    if (type === 'expandable') {
      setExpandedId(expandedId === id ? null : id);
    } else {
      setShowPreview(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Editorial Hero Header */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A51C30]/[0.02] skew-x-12 transform translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <motion.nav 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-9"
          >
            <Link to="/" className="hover:text-gray-900 transition-colors">HOME</Link>
            <ChevronRight size={10} className="text-gray-300" />
            <Link to="/student-info" className="hover:text-gray-900 transition-colors">STUDENT INFO</Link>
            <ChevronRight size={10} className="text-gray-300" />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'EXAMINATION INFO' : 'MAKLUMAT PEPERIKSAAN'}</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight"
            >
              {lang === 'EN' ? 'Final Examination' : 'Peperiksaan'} <br />
              <span className="text-[#A51C30] italic font-normal">Information</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500 font-light leading-relaxed italic"
            >
              {lang === 'EN' 
                ? "Access critical resources and administrative documents for the successful conduct and participation in UTeM's final examinations." 
                : "Akses sumber kritikal dan dokumen pentadbiran untuk pelaksanaan dan penyertaan yang berjaya dalam peperiksaan akhir UTeM."}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Typographic Modular Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-8 lg:px-12">
        <div className="space-y-12">
          {cards.map((card, idx) => {
            const isExpanded = expandedId === card.id;
            
            return (
              <div 
                key={card.id} 
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  onClick={() => handleCardClick(card.id, card.type)}
                  className={`group p-7 lg:p-12 border border-gray-100 rounded-[3.5rem] bg-white cursor-pointer shadow-[0_18px_55px_-42px_rgba(15,23,42,0.35)] hover:border-[#A51C30]/20 transition-[border-color,transform] duration-150 ease-out relative overflow-hidden flex flex-col transform-gpu hover:-translate-y-0.5`}
                  style={{ contain: 'layout paint style', willChange: 'transform' }}
                >
                  {/* Card ID Background Decoration - Large and subtle */}
                  <motion.div 
                    className="absolute -top-12 -right-12 text-[22rem] font-serif font-bold text-gray-50/70 select-none pointer-events-none group-hover:text-[#A51C30]/5 transition-colors duration-200"
                  >
                    {idx + 1}
                  </motion.div>

                  {/* Header Row: Visual Anchor and Main Text */}
                  <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    {/* Left Anchor Image: Only shows when NOT expanded */}
                    <AnimatePresence mode="popLayout" initial={false}>
                      {!isExpanded && (
                        <motion.div 
                          key="visual-anchor"
                          initial={{ opacity: 0, x: -24, scale: 0.96 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.12, ease: "easeOut" }}
                          exit={{ 
                            opacity: 0, 
                            x: -32,
                            width: 0, 
                            marginRight: 0,
                            scale: 0.96,
                            transition: { duration: 0.18, ease: "easeOut" }
                          }}
                          className="lg:w-[30%] w-full aspect-square lg:aspect-auto lg:h-[310px] relative flex-shrink-0"
                        >
                          {card.type === 'preview' ? (
                            <div className="w-full h-full bg-gray-50 border-2 border-gray-100 rounded-[2.25rem] p-5 flex flex-col items-center justify-center relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-2 bg-[#A51C30]" />
                              <img
                                src={card.image}
                                alt={card.title[lang]}
                                className="h-full w-full object-contain object-top"
                              />
                              <div className="absolute bottom-6 right-6 px-4 py-2 bg-red-600 text-white rounded text-[10px] font-black tracking-widest uppercase">
                                OFFICIAL FORM
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full rounded-[2.25rem] overflow-hidden shadow-[0_18px_45px_-30px_rgba(15,23,42,0.5)] relative border border-gray-50 transform-gpu">
                              <img src={card.image} alt="" className="w-full h-full object-cover" loading="eager" decoding="async" />
                              <div className="absolute bottom-5 right-5 p-3.5 bg-white/20 rounded-full border border-white/25 text-white shadow-sm">
                                <ChevronDown size={24} />
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Content Section: Always visible, slides to left when anchor exits */}
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-5">
                        <div className="h-px w-10 bg-[#A51C30]/30" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">
                           {card.id === 'submission' ? 'Vetting Portal' : card.id === 'akad' ? 'Academic Ethics' : 'Internal Schedule'}
                        </span>
                      </div>
                      
                      <h2 
                        className={`text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight transition-colors duration-200 ${isExpanded ? 'text-[#A51C30]' : 'group-hover:text-[#A51C30]'}`}
                      >
                        {card.title[lang]}
                      </h2>
                      
                      <p className="text-gray-500 font-light text-lg leading-relaxed mb-9 italic serif max-w-2xl">
                        {card.description[lang]}
                      </p>

                      <div className="flex flex-wrap items-center gap-8">
                        {card.type === 'preview' ? (
                          <>
                            <button 
                              onClick={(e) => { e.stopPropagation(); setShowPreview(true); }}
                              className="bg-[#A51C30] text-white px-9 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#800000] shadow-lg shadow-[#A51C30]/15 flex items-center space-x-4 transition-[background-color,transform] duration-150 hover:-translate-y-0.5"
                            >
                              <Eye size={18} />
                              <span>Preview Document</span>
                            </button>
                            <button className="text-[11px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 flex items-center space-x-3 group/dl transition-colors duration-150">
                              <Download size={18} className="group-hover/dl:translate-y-0.5 transition-transform duration-150" />
                              <span>Download PDF</span>
                            </button>
                          </>
                        ) : (
                          <div className="flex items-center space-x-7">
                             <div className={`flex items-center space-x-4 px-10 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-colors duration-150 ${isExpanded ? 'bg-[#A51C30] text-white' : 'bg-gray-50 text-[#A51C30] group-hover:bg-[#A51C30] group-hover:text-white'}`}>
                              {isExpanded ? <X size={18} /> : <ChevronDown size={18} />}
                              <span>{isExpanded ? 'Close View' : card.cta[lang]}</span>
                            </div>
                            {!isExpanded && (
                              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em] animate-pulse">Expand for more</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expansion Area: Appears from below when expanded */}
                  <AnimatePresence initial={false}>
                    {isExpanded && card.type === 'expandable' && (
                      <motion.div
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 900, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden transform-origin-top"
                        style={{ willChange: 'max-height, opacity' }}
                      >
                        <ExpandedDocumentPreview title={card.title} images={card.pairImages} lang={lang} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreview(false)}
              className="absolute inset-0 bg-gray-900/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[85vh]"
            >
              <div className="flex items-center justify-between p-8 border-b border-gray-100">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 uppercase tracking-tight">Question Paper Submission Form</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">Institutional Specimen • Ref: SPS-FORM-SUB-2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                   <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gray-50 text-gray-700 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-all">
                    <Download size={14} />
                    <span>Download PDF</span>
                  </button>
                  <button 
                    onClick={() => setShowPreview(false)}
                    className="p-3 bg-gray-100 rounded-full text-gray-500 hover:bg-[#A51C30] hover:text-white transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex-grow bg-gray-800 p-8 overflow-y-auto flex justify-center custom-scrollbar">
                <div className="w-full max-w-4xl bg-white shadow-2xl overflow-hidden">
                  <img
                    src={questionPaperSubmissionImage}
                    alt="Question Paper Submission Form"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Document Ref: UTM-SPS-2024-PDF-FRM</span>
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] text-gray-400 font-light">Page 1 of 4</span>
                  <button className="p-2 hover:bg-gray-200 rounded transition-colors text-gray-400 hover:text-gray-900">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back to Home Navigation */}
      <div className="py-20 text-center border-t border-gray-50 bg-white">
        <Link to="/" className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-[0.4em] transition-all">
          Back to Institutional Hub
        </Link>
      </div>
    </div>
  );
};

export default ExaminationInfo;
