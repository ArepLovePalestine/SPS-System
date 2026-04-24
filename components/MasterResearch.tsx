
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Users, Clock, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface MasterResearchProps {
  lang: Language;
}

const MasterResearch: React.FC<MasterResearchProps> = ({ lang }) => {
  const programmes = [
    { EN: 'Master of Electrical Engineering (By Research)', BM: 'Sarjana Kejuruteraan Elektrik (Penyelidikan)' },
    { EN: 'Master of Electronics Engineering (By Research)', BM: 'Sarjana Kejuruteraan Elektronik (Penyelidikan)' },
    { EN: 'Master of Mechanical Engineering (By Research)', BM: 'Sarjana Kejuruteraan Mekanikal (Penyelidikan)' },
    { EN: 'Master of Manufacturing Engineering (By Research)', BM: 'Sarjana Kejuruteraan Pembuatan (Penyelidikan)' },
    { EN: 'Master of Information & Communication Technology (By Research)', BM: 'Sarjana Teknologi Maklumat & Komunikasi (Penyelidikan)' },
    { EN: 'Master of Technology Management (By Research)', BM: 'Sarjana Pengurusan Teknologi (Penyelidikan)' },
  ];

  const faculties = [
    { name: 'FKE', email: 'fke_postgrad@utem.edu.my', phone: '+606 270 1234' },
    { name: 'FKEKK', email: 'fkekk_postgrad@utem.edu.my', phone: '+606 270 2345' },
    { name: 'FKM', email: 'fkm_postgrad@utem.edu.my', phone: '+606 270 3456' },
    { name: 'FKP', email: 'fkp_postgrad@utem.edu.my', phone: '+606 270 4567' },
    { name: 'FTMK', email: 'ftmk_postgrad@utem.edu.my', phone: '+606 270 5678' },
    { name: 'FPTT', email: 'fptt_postgrad@utem.edu.my', phone: '+606 270 6789' },
    { name: 'SPS (General Office)', email: 'sps@utem.edu.my', phone: '+606 270 1000' },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 mb-20 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#A51C30] transition-colors">HOME</Link>
            <ChevronRight size={10} />
            <Link to="/programmes" className="hover:text-[#A51C30] transition-colors">PROGRAMMES</Link>
            <ChevronRight size={10} />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'MASTER BY RESEARCH' : 'SARJANA PENYELIDIKAN'}</span>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              {lang === 'EN' ? 'Master of Science (By Research)' : 'Sarjana Sains (Secara Penyelidikan)'}
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              {lang === 'EN'
                ? 'Our research-based Master’s programmes empower students to dive deep into a specific technical or management domain, contributing original knowledge through a supervised thesis.'
                : 'Program Sarjana berasaskan penyelidikan kami membolehkan pelajar mendalami domain teknikal atau pengurusan tertentu, menyumbang pengetahuan asal melalui tesis yang diselia.'}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-20">
          
          {/* Programmes Offered */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 flex items-center space-x-4">
              <span className="w-12 h-[1px] bg-[#A51C30]" />
              <span>{lang === 'EN' ? 'Programmes Offered' : 'Program yang Ditawarkan'}</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {programmes.map((prog, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 text-[#A51C30]">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg text-gray-800 font-medium">{prog[lang]}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Mode & Duration */}
          <section className="bg-[#A51C30]/5 p-12 rounded-[2.5rem] border border-[#A51C30]/10">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">{lang === 'EN' ? 'Mode of Registration' : 'Mod Pendaftaran'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#A51C30]">
                  <Clock size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest text-xs">Full-Time</h3>
                </div>
                <ul className="text-gray-600 space-y-2 font-light">
                  <li>Minimum: 1.5 Years (3 Semesters)</li>
                  <li>Maximum: 3 Years (6 Semesters)</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#A51C30]">
                  <Clock size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest text-xs">Part-Time</h3>
                </div>
                <ul className="text-gray-600 space-y-2 font-light">
                  <li>Minimum: 2 Years (4 Semesters)</li>
                  <li>Maximum: 5 Years (10 Semesters)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Programme Structure */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 flex items-center space-x-4">
              <span className="w-12 h-[1px] bg-[#A51C30]" />
              <span>{lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}</span>
            </h2>
            <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border-spacing-0 min-w-[520px]">
                  <thead className="bg-[#D9EAD3]">
                    <tr className="border-b-2 border-gray-800">
                      <th className="p-5 border-r-2 border-gray-800 text-left text-[11px] font-bold uppercase tracking-widest text-gray-900">
                        Subjects
                      </th>
                      <th className="p-5 text-center text-[11px] font-bold uppercase tracking-widest text-gray-900">
                        Credit Hours
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-800">
                      <td className="p-5 border-r-2 border-gray-800 text-sm font-medium text-gray-900">
                        Compulsory Subject : Research Methodology
                      </td>
                      <td className="p-5 text-center text-sm font-bold text-gray-900 font-mono">
                        3
                      </td>
                    </tr>
                    <tr className="bg-[#FFF2CC]/50 border-b border-gray-800">
                      <td className="p-5 border-r-2 border-gray-800 text-sm font-medium text-gray-900">
                        Thesis
                      </td>
                      <td className="p-5 text-center text-sm font-bold text-gray-900 font-mono">
                        33
                      </td>
                    </tr>
                    <tr className="bg-[#A51C30]/5">
                      <td className="p-5 border-r-2 border-gray-800 text-sm font-bold text-gray-900">
                        Total Credit Hours
                      </td>
                      <td className="p-5 text-center text-sm font-bold text-[#A51C30] font-mono">
                        36
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Data: Contacts */}
        <aside className="space-y-12">
          <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-10 sticky top-32">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 border-b border-gray-50 pb-6">
              {lang === 'EN' ? 'Contact Information' : 'Maklumat Hubungan'}
            </h3>
            <div className="space-y-8">
              {faculties.map((f, i) => (
                <div key={i} className="group">
                  <h4 className="font-bold text-[#A51C30] text-xs uppercase tracking-widest mb-3">{f.name}</h4>
                  <div className="space-y-2">
                    <a href={`mailto:${f.email}`} className="flex items-center space-x-3 text-gray-500 hover:text-black transition-colors text-sm font-light">
                      <Mail size={14} className="text-[#A51C30]" />
                      <span>{f.email}</span>
                    </a>
                    <div className="flex items-center space-x-3 text-gray-500 text-sm font-light">
                      <Phone size={14} className="text-[#A51C30]" />
                      <span>{f.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-50">
              <button className="w-full bg-[#1a1a1a] text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#A51C30] transition-colors duration-300">
                Download Research Guide
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MasterResearch;
