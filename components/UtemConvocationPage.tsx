
import React from 'react';
import { motion } from 'motion/react';
import { Globe, ClipboardCheck, CreditCard, ChevronRight, GraduationCap, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Language } from '../types';
import PageHeader from './PageHeader';

interface ConvocationProps {
  lang: Language;
}

const Convocation: React.FC<ConvocationProps> = ({ lang }) => {
  const mainPortal = {
    title: { EN: 'UTeM Convocation Official Website', BM: 'Laman Web Rasmi Konvokesyen UTeM' },
    description: { 
      EN: 'The central hub for all graduation-related information, including official announcements, ceremony schedules, and live updates.', 
      BM: 'Hab pusat untuk semua maklumat berkaitan graduasi, termasuk pengumuman rasmi, jadual majlis, dan kemas kini langsung.' 
    },
    action: { EN: 'Enter Official Portal', BM: 'Masuk Portal Rasmi' },
    icon: Globe,
    href: 'https://konvokesyen.utem.edu.my/'
  };

  const secondaryItems = [
    {
      title: { EN: 'Graduate Checklist', BM: 'Senarai Semak Graduan' },
      description: { 
        EN: 'A step-by-step guide to ensure you have met all academic and administrative requirements before your big day.', 
        BM: 'Panduan langkah demi langkah untuk memastikan anda telah memenuhi semua keperluan akademik dan pentadbiran.' 
      },
      action: { EN: 'View Checklist', BM: 'Lihat Senarai Semak' },
      icon: ClipboardCheck,
      href: '#'
    },
    {
      title: { EN: 'Fees & Debt Review', BM: 'Semakan Yuran & Hutang' },
      description: { 
        EN: 'Check your financial status and settle any outstanding balances to ensure a smooth graduation process.', 
        BM: 'Semak status kewangan anda dan jelaskan sebarang baki tertunggak untuk memastikan proses graduasi yang lancar.' 
      },
      action: { EN: 'Review Fees', BM: 'Semak Yuran' },
      icon: CreditCard,
      href: '#'
    }
  ];

  return (
    <div className="pt-24 pb-32 min-h-screen bg-[#fcfcfc]">
      <PageHeader
        breadcrumbs={[
          { label: lang === 'EN' ? 'Student' : 'Pelajar' },
          { label: lang === 'EN' ? 'UTeM Convocation' : 'Konvokesyen UTeM' },
        ]}
        title={lang === 'EN' ? 'UTeM Convocation' : 'Konvokesyen UTeM'}
        subtitle={
          lang === 'EN'
            ? 'Access the official convocation resources, checklist, and payment portals for your graduation journey at Universiti Teknikal Malaysia Melaka.'
            : 'Akses sumber rasmi konvokesyen, senarai semak, dan portal pembayaran untuk perjalanan konvokesyen anda di Universiti Teknikal Malaysia Melaka.'
        }
      />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 gap-8">
          
          {/* Featured Main Portal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A51C30] to-[#800000] rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white rounded-[2rem] p-8 md:p-16 border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
              {/* Decorative Background Icon */}
              <div className="absolute -right-20 -bottom-20 text-gray-50 opacity-50 group-hover:text-[#A51C30]/5 transition-colors duration-700">
                <mainPortal.icon size={400} strokeWidth={0.5} />
              </div>

              <div className="w-24 h-24 bg-[#A51C30] rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-red-900/20 flex-shrink-0 z-10">
                <mainPortal.icon size={48} strokeWidth={1.5} />
              </div>

              <div className="flex-grow space-y-6 z-10 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">
                  {mainPortal.title[lang]}
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl">
                  {mainPortal.description[lang]}
                </p>
                <div className="pt-4">
                  <a 
                    href={mainPortal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-5 bg-[#A51C30] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#800000] transition-all shadow-xl shadow-red-900/20 group/btn"
                  >
                    <span>{mainPortal.action[lang]}</span>
                    <ExternalLink size={16} className="ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#A51C30] mb-8 group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
                  {item.title[lang]}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-10 flex-grow">
                  {item.description[lang]}
                </p>
                <a 
                  href={item.href}
                  className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#A51C30] group/link"
                >
                  <span>{item.action[lang]}</span>
                  <ArrowRight size={16} className="ml-3 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer Support */}
      <section className="mt-32 max-w-4xl mx-auto px-8 text-center">
        <div className="py-12 border-t border-gray-100">
          <div className="flex items-center justify-center space-x-4 text-gray-400 mb-4">
            <GraduationCap size={20} />
            <span className="w-12 h-px bg-gray-100"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">School of Graduate Studies</span>
          </div>
          <p className="text-gray-400 text-xs font-light">
            {lang === 'EN' 
              ? 'For further assistance regarding convocation, please contact the secretariat at konvokesyen@utem.edu.my' 
              : 'Untuk bantuan lanjut mengenai konvokesyen, sila hubungi urusetia di konvokesyen@utem.edu.my'}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Convocation;
