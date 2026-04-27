
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, Settings, Cpu, LineChart, Mail, Globe, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface DoctoralProgrammesProps {
  lang: Language;
}

const DoctoralProgrammes: React.FC<DoctoralProgrammesProps> = ({ lang }) => {
  const doctoralList = [
    {
      id: 'phd',
      title: 'Doctor of Philosophy (PhD)',
      icon: GraduationCap,
      description: {
        EN: 'Acquire high-level research expertise in various engineering, technology, and management disciplines. Contribution of original knowledge through a rigorous thesis process.',
        BM: 'Peroleh kepakaran penyelidikan peringkat tinggi dalam pelbagai disiplin kejuruteraan, teknologi, dan pengurusan. Sumbangan pengetahuan asal melalui proses tesis yang rapi.'
      },
      tags: ['Research-based', 'Diverse Disciplines', 'Academic Excellence'],
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      id: 'deng',
      title: 'Doctor of Engineering (DEng)',
      icon: Settings,
      description: {
        EN: 'An industry-focused professional doctorate designed for engineering practitioners. Solve real-world complex industrial problems through applied research.',
        BM: 'Doktorat profesional berfokuskan industri yang dirancang untuk pengamal kejuruteraan. Selesaikan masalah industri kompleks dunia sebenar melalui penyelidikan gunaan.'
      },
      tags: ['Industry-linked', 'Professional Doctorate', 'Applied Research'],
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 'dtm',
      title: 'Doctor of Technology Management (DTM)',
      icon: LineChart,
      description: {
        EN: 'Designed for leaders in technology-intensive organizations. Focuses on innovation strategy, technopreneurship, and high-level management practices.',
        BM: 'Dirancang untuk pemimpin dalam organisasi intensif teknologi. Berfokus pada strategi inovasi, teknokeusahawanan, dan amalan pengurusan peringkat tinggi.'
      },
      tags: ['Leadership', 'Innovation Strategy', 'Management Focus'],
      color: 'bg-amber-50 text-amber-600'
    },
    {
      id: 'dit',
      title: 'Doctor of Information Technology (DIT)',
      icon: Cpu,
      description: {
        EN: 'Advanced professional study for ICT experts. Master cutting-edge technologies including AI, Cybersecurity, and Data Science through professional projects.',
        BM: 'Pengajian profesional lanjutan untuk pakar TMK. Kuasai teknologi terkini termasuk AI, Keselamatan Siber, dan Sains Data melalui projek profesional.'
      },
      tags: ['Advanced ICT', 'Professional Project', 'Tech Specialist'],
      color: 'bg-cyan-50 text-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-white py-16 mb-20 border-b border-gray-100 relative overflow-hidden">
        {/* Background Decor */}
        <div className="hidden" />

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#A51C30] transition-colors">HOME</Link>
            <ChevronRight size={10} />
            <Link to="/programmes" className="hover:text-[#A51C30] transition-colors">PROGRAMMES</Link>
            <ChevronRight size={10} />
            <span className="text-[#A51C30] font-bold">DOCTORAL PROGRAMMES</span>
          </nav>

          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif text-gray-900"
            >
              Doctorer Programmes
            </motion.h1>
            <p className="mt-4 text-gray-500 max-w-2xl text-lg font-light">
              {lang === 'EN'
                ? 'Join a community of global thinkers. Our doctoral offerings provide the foundation for significant contributions to your field of expertise.'
                : 'Sertai komuniti pemikir global. Tawaran doktoral kami menyediakan asas untuk sumbangan penting kepada bidang kepakaran anda.'}
            </p>
          </div>
        </div>
      </section>

      {/* Doctoral Cards */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {doctoralList.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-start"
            >
              <div className={`w-16 h-16 ${doc.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                <doc.icon size={32} />
              </div>
              
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6 group-hover:text-[#A51C30] transition-colors">
                {doc.title}
              </h3>
              
              <p className="text-gray-500 font-light leading-relaxed mb-10 text-lg flex-grow">
                {doc.description[lang]}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {doc.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-50 text-gray-500 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-full flex items-center justify-between pt-8 border-t border-gray-50">
                <button className="flex items-center space-x-2 text-[11px] font-bold text-[#A51C30] uppercase tracking-[0.2em] group/btn">
                  <span>Entry Requirements</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Mail size={18} className="text-gray-400 hover:text-[#A51C30] cursor-pointer" />
                  <Globe size={18} className="text-gray-400 hover:text-[#A51C30] cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Support */}
      <section className="py-24 mt-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Embark on Your Doctoral Journey</h2>
            <p className="text-gray-600 text-lg font-light mb-12">
              Ready to take the next step? Our academic advisors are here to help you choose the right program and process your application.
            </p>
            <div className="flex flex-col sm:row justify-center gap-6">
              <button className="bg-[#A51C30] text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#800000] transition-all duration-300 shadow-xl shadow-maroon-900/20">
                Start Admission Process
              </button>
              <button className="bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] border-2 border-gray-200 hover:border-[#A51C30] transition-all duration-300">
                Request a Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctoralProgrammes;
