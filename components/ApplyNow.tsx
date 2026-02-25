
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, ArrowRight, HelpCircle, Mail, Phone } from 'lucide-react';
import { Language } from '../types';

interface ApplyNowProps {
  lang: Language;
}

const ApplyNow: React.FC<ApplyNowProps> = ({ lang }) => {
  const steps = [
    {
      title: { EN: 'Check Eligibility', BM: 'Semak Kelayakan' },
      desc: { EN: 'Ensure you meet the academic and English language requirements for your chosen programme.', BM: 'Pastikan anda memenuhi syarat akademik dan bahasa Inggeris untuk program pilihan anda.' }
    },
    {
      title: { EN: 'Prepare Documents', BM: 'Sediakan Dokumen' },
      desc: { EN: 'Gather certified copies of transcripts, certificates, research proposal, and identification.', BM: 'Kumpulkan salinan transkrip, sijil, cadangan penyelidikan, dan pengenalan diri yang disahkan.' }
    },
    {
      title: { EN: 'Online Application', BM: 'Permohonan Dalam Talian' },
      desc: { EN: 'Submit your application through our official UTeM Postgraduate Portal.', BM: 'Hantar permohonan anda melalui Portal Pascasiswazah rasmi UTeM.' }
    },
    {
      title: { EN: 'Payment & Submission', BM: 'Pembayaran & Penghantaran' },
      desc: { EN: 'Pay the processing fee and submit your application for review.', BM: 'Bayar yuran pemprosesan dan hantar permohonan anda untuk semakan.' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" 
            alt="Apply Now" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#A51C30]/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <span className="text-white">{lang === 'EN' ? 'APPLY NOW' : 'MOHON SEKARANG'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            {lang === 'EN' ? 'Start Your Journey' : 'Mulakan Perjalanan Anda'}
          </motion.h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">
            {lang === 'EN' 
              ? 'Join our community of innovators and researchers at UTeM.' 
              : 'Sertai komuniti inovator dan penyelidik kami di UTeM.'}
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {lang === 'EN' ? 'How to Apply' : 'Cara Memohon'}
            </h2>
            <div className="h-1 w-20 bg-[#A51C30] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group">
                <div className="text-4xl font-serif font-black text-gray-100 absolute top-4 right-6 group-hover:text-[#A51C30]/10 transition-colors">
                  0{idx + 1}
                </div>
                <div className="w-12 h-12 bg-[#A51C30]/5 rounded-xl flex items-center justify-center text-[#A51C30] mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{step.title[lang]}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Portal */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                {lang === 'EN' ? 'General Requirements' : 'Syarat Umum'}
              </h2>
              <ul className="space-y-4">
                {[
                  { EN: 'A recognized Bachelor\'s degree for Master\'s application.', BM: 'Ijazah Sarjana Muda yang diiktiraf untuk permohonan Sarjana.' },
                  { EN: 'A recognized Master\'s degree for PhD application.', BM: 'Ijazah Sarjana yang diiktiraf untuk permohonan PhD.' },
                  { EN: 'Minimum CGPA requirements as specified by faculty.', BM: 'Syarat PNGK minimum seperti yang ditetapkan oleh fakulti.' },
                  { EN: 'English proficiency (IELTS/TOEFL) for international students.', BM: 'Tahap penguasaan bahasa Inggeris (IELTS/TOEFL) untuk pelajar antarabangsa.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A51C30] shrink-0" />
                    <span className="text-gray-600 font-light">{item[lang]}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <a 
                  href="https://sps.utem.edu.my/apply" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#A51C30] text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#800000] transition-all inline-flex items-center space-x-3 group"
                >
                  <span>{lang === 'EN' ? 'Access Application Portal' : 'Akses Portal Permohonan'}</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-[#A51C30] rounded-2xl flex items-center justify-center text-white">
                  <HelpCircle size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">{lang === 'EN' ? 'Need Help?' : 'Perlukan Bantuan?'}</h3>
              </div>
              <p className="text-gray-500 mb-8 font-light">
                {lang === 'EN' 
                  ? 'Our admission team is here to guide you through every step of your application.' 
                  : 'Pasukan kemasukan kami sedia membimbing anda melalui setiap langkah permohonan anda.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-600">
                  <Mail size={18} className="text-[#A51C30]" />
                  <span className="text-sm font-medium">sps@utem.edu.my</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <Phone size={18} className="text-[#A51C30]" />
                  <span className="text-sm font-medium">+606 270 1000</span>
                </div>
              </div>
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

export default ApplyNow;
