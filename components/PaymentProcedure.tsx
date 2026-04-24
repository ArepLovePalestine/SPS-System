
import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, Mail, Info, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface PaymentProcedureProps {
  lang: Language;
}

const PaymentProcedure: React.FC<PaymentProcedureProps> = ({ lang }) => {
  const content = {
    title: { EN: 'Payment Hub Procedure', BM: 'Prosedur Hab Pembayaran' },
    subtitle: {
      EN: 'Visual guide and step-by-step instructions for university payment processes.',
      BM: 'Panduan visual dan arahan langkah demi langkah untuk proses pembayaran universiti.'
    },
    intro: {
      EN: 'This document contains the comprehensive payment workflow and Payment Hub guidance for students. It covers international and local student payment gateways, supported methods, and verification steps.',
      BM: 'Dokumen ini mengandungi aliran kerja pembayaran yang komprehensif dan panduan Hab Pembayaran untuk pelajar. Ia merangkumi gerbang pembayaran pelajar antarabangsa dan tempatan, kaedah yang disokong, dan langkah pengesahan.'
    },
    actions: {
      view: { EN: 'Open Full Document', BM: 'Buka Dokumen Penuh' },
      download: { EN: 'Download PDF', BM: 'Muat Turun PDF' }
    },
    details: {
      title: { EN: 'Document Details', BM: 'Butiran Dokumen' },
      typeLabel: { EN: 'Document Type', BM: 'Jenis Dokumen' },
      typeValue: { EN: 'Official Procedural Guide (SOP)', BM: 'Panduan Prosedur Rasmi (SOP)' },
      processLabel: { EN: 'Related Process', BM: 'Proses Berkaitan' },
      processValue: { EN: 'Financial Clearance & Registration', BM: 'Pelepasan Kewangan & Pendaftaran' },
      contactLabel: { EN: 'Assistance', BM: 'Bantuan' },
      contactValue: { EN: 'SPS Financial Unit', BM: 'Unit Kewangan SPS' }
    },
    note: {
      EN: 'For complete instructions and policy details, please refer to the full document linked above.',
      BM: 'Untuk arahan lengkap dan butiran polisi, sila rujuk dokumen penuh yang dipautkan di atas.'
    }
  };

  const pdfUrl = "/images/resources/Payment%20Hub%20-%20Application%20Procedure.pdf";

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#A51C30]/10 rounded-xl flex items-center justify-center text-[#A51C30]">
                  <FileText size={24} />
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#A51C30] uppercase">Official Document</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-gray-900 tracking-tight mb-6 capitalize">
                {content.title[lang]}
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {content.intro[lang]}
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-8 py-4 bg-[#A51C30] text-white text-[12px] font-bold uppercase tracking-widest hover:bg-[#821424] transition-all duration-300 shadow-xl shadow-[#A51C30]/20"
            >
              <ExternalLink size={18} />
              <span>{content.actions.view[lang]}</span>
            </a>
            <a 
              href={pdfUrl} 
              download
              className="flex items-center space-x-3 px-8 py-4 bg-white border border-gray-200 text-gray-900 text-[12px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              <Download size={18} />
              <span>{content.actions.download[lang]}</span>
            </a>
          </motion.div>
        </div>

        {/* Native PDF Viewer */}
        <motion.div 
          className="relative bg-[#2f2f2f] rounded-sm shadow-2xl overflow-hidden border border-gray-200 h-[620px] md:h-[760px] lg:h-[820px]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title="Payment Hub Procedure PDF"
          ></iframe>
        </motion.div>

        {/* Supporting Info Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <motion.div 
              className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif text-gray-900 mb-6 flex items-center">
                <Info size={20} className="mr-3 text-[#A51C30]" />
                {content.details.title[lang]}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    {content.details.typeLabel[lang]}
                  </label>
                  <p className="text-sm text-gray-700 font-medium">{content.details.typeValue[lang]}</p>
                </div>
                
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    {content.details.processLabel[lang]}
                  </label>
                  <p className="text-sm text-gray-700 font-medium">{content.details.processValue[lang]}</p>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    {content.details.contactLabel[lang]}
                  </label>
                  <div className="flex items-center space-x-2 text-sm text-[#A51C30] font-bold hover:underline cursor-pointer">
                    <Mail size={14} />
                    <span>{content.details.contactValue[lang]}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-50">
                <p className="text-xs text-gray-400 italic leading-relaxed">
                  {content.note[lang]}
                </p>
              </div>
            </motion.div>

            {/* Quick Summary / Status */}
            <motion.div 
              className="bg-[#A51C30] p-8 rounded-2xl text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Security Verified</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Secure Transactions</h4>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                All UTeM Payment Hub transactions are encrypted and follow international banking security standards.
              </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcedure;
