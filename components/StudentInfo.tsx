
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, DollarSign, GraduationCap, Calendar, ShieldCheck, Mail, Building2 } from 'lucide-react';
import { Language } from '../types';

interface StudentInfoProps {
  lang: Language;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ lang }) => {
  const sections = [
    {
      icon: DollarSign,
      title: { EN: 'Fees & Finance', BM: 'Yuran & Kewangan' },
      desc: { EN: 'Detailed breakdown of tuition fees, registration costs, and payment methods.', BM: 'Pecahan terperinci yuran pengajian, kos pendaftaran, dan kaedah pembayaran.' },
      link: '#'
    },
    {
      icon: GraduationCap,
      title: { EN: 'Scholarships', BM: 'Biasiswa' },
      desc: { EN: 'Explore internal and external funding opportunities for your postgraduate studies.', BM: 'Terokai peluang pembiayaan dalaman dan luaran untuk pengajian pascasiswazah anda.' },
      link: '#'
    },
    {
      icon: Calendar,
      title: { EN: 'Academic Calendar', BM: 'Kalendar Akademik' },
      desc: { EN: 'Important dates for registration, semesters, and examinations.', BM: 'Tarikh-tarikh penting untuk pendaftaran, semester, dan peperiksaan.' },
      link: '/calendar'
    },
    {
      icon: ShieldCheck,
      title: { EN: 'Regulations', BM: 'Peraturan' },
      desc: { EN: 'Academic rules, ethical standards, and governance protocols.', BM: 'Peraturan akademik, piawaian etika, dan protokol tadbir urus.' },
      link: '/regulations'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240715630-362a98f1f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Student Info" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <span className="text-white">{lang === 'EN' ? 'STUDENT INFO' : 'MAKLUMAT PELAJAR'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            {lang === 'EN' ? 'Student Resources' : 'Sumber Pelajar'}
          </motion.h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">
            {lang === 'EN' 
              ? 'Everything you need to succeed in your postgraduate journey.' 
              : 'Segala yang anda perlukan untuk berjaya dalam perjalanan pascasiswazah anda.'}
          </p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <Link 
                key={idx} 
                to={section.link}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-[#A51C30]/5 rounded-2xl flex items-center justify-center text-[#A51C30] shrink-0 group-hover:bg-[#A51C30] group-hover:text-white transition-colors duration-500">
                  <section.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-[#A51C30] transition-colors">
                    {section.title[lang]}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {section.desc[lang]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Office */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="bg-[#A51C30] rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                {lang === 'EN' ? 'Visit Our Office' : 'Kunjungi Pejabat Kami'}
              </h2>
              <p className="text-white/70 text-lg font-light mb-10">
                {lang === 'EN' 
                  ? 'The School of Graduate Studies office is open for walk-in inquiries and administrative support.' 
                  : 'Pejabat Sekolah Pengajian Siswazah dibuka untuk pertanyaan terus dan sokongan pentadbiran.'}
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Building2 size={20} className="text-white/50" />
                  <span className="font-light">Aras 4, Bangunan Canselori, Kampus Induk UTeM.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail size={20} className="text-white/50" />
                  <span className="font-light">sps@utem.edu.my</span>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <a 
                href="mailto:sps@utem.edu.my"
                className="bg-white text-[#A51C30] px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-gray-100 transition-all inline-block"
              >
                {lang === 'EN' ? 'Contact Us' : 'Hubungi Kami'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-12 border-t border-gray-100 text-center">
        <Link to="/" className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest transition-colors">
          {lang === 'EN' ? 'Back to Home' : 'Kembali ke Utama'}
        </Link>
      </div>
    </div>
  );
};

export default StudentInfo;
