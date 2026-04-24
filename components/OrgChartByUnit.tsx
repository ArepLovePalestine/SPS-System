
import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Users, Layout, BookOpen, Microscope, UserCircle } from 'lucide-react';
import { Language } from '../types';

interface UnitSection {
  id: string;
  title: { EN: string; BM: string };
  icon: any;
  image: string;
  staff?: { EN: string[]; BM: string[] };
}

interface OrgChartByUnitProps {
  lang: Language;
}

const OrgChartByUnit: React.FC<OrgChartByUnitProps> = ({ lang }) => {
  const units: UnitSection[] = [
    {
      id: 'admin-finance',
      title: { EN: 'Administration & Finance Unit', BM: 'Unit Pentadbiran & Kewangan' },
      icon: Layout,
      image: '/images/about-org-chart-unit/org-by-unit-pic-1.jpeg',
      staff: {
        EN: ['Deputy Registrar', 'Senior Administrative Assistant', 'Assistant Engineer', 'General Office Assistant'],
        BM: ['Timbalan Pendaftar', 'Pembantu Tadbir Kanan', 'Penolong Jurutera', 'Pembantu Pejabat']
      }
    },
    {
      id: 'academic',
      title: { EN: 'Academic Unit', BM: 'Unit Akademik' },
      icon: BookOpen,
      image: '/images/about-org-chart-unit/org-by-unit-pic-2.jpeg',
      staff: {
        EN: ['Senior Assistant Registrar', 'Senior Administrative Assistant', 'Senior Administrative Assistant', '-'],
        BM: ['Penolong Pendaftar Kanan', 'Pembantu Tadbir Kanan', 'Pembantu Tadbir Kanan', '-']
      }
    },
    {
      id: 'research',
      title: { EN: 'Examination and Scholarship Unit', BM: 'Unit Peperiksaan dan Biasiswa' },
      icon: Microscope,
      image: '/images/about-org-chart-unit/org-by-unit-pic-3.jpeg',
      staff: {
        EN: ['Assistant Registrar', 'Assistant Administrative Officer', 'Administrative Assistant'],
        BM: ['Penolong Pendaftar', 'Penolong Pegawai Tadbir', 'Pembantu Tadbir']
      }
    },
  ];

  const content = {
    title: { EN: 'Organization Chart by Unit', BM: 'Carta Organisasi Mengikut Unit' },
    subtitle: { 
      EN: 'Detailed departmental structures within the School of Graduate Studies', 
      BM: 'Struktur jabatan terperinci di dalam Pusat Pengajian Siswazah' 
    },
    staffLabel: { EN: 'Key Personnel Roles', BM: 'Peranan Kakitangan Utama' }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="space-y-4">
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>{lang === 'EN' ? 'About Us' : 'Tentang Kami'}</span>
              <ChevronRight size={10} />
              <span>{lang === 'EN' ? 'Staff Info' : 'Maklumat Staf'}</span>
              <ChevronRight size={10} />
              <span className="text-[#A51C30]">{content.title[lang]}</span>
            </nav>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif text-gray-900"
            >
              {content.title[lang]}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl text-lg font-light"
            >
              {content.subtitle[lang]}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 space-y-24">
          {units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Unit Header */}
              <div className="p-8 md:p-12 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-[#A51C30]/5 rounded-2xl flex items-center justify-center text-[#A51C30]">
                    <unit.icon size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                      {unit.title[lang]}
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">
                      {lang === 'EN' ? 'Departmental Structure' : 'Struktur Jabatan'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Unit Chart Image */}
              <div className="p-4 md:p-12 bg-gray-50/50">
                <div className="relative rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                  <img 
                    src={unit.image} 
                    alt={unit.title[lang]} 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Staff List */}
              {unit.staff && (
                <div className="p-8 md:p-12 bg-white">
                  <div className="flex items-center space-x-2 text-gray-400 mb-8">
                    <Users size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {content.staffLabel[lang]}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {unit.staff[lang].map((member, mIdx) => (
                      <div key={mIdx} className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 border border-transparent hover:border-[#A51C30]/20 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A51C30]" />
                        <span className="text-sm font-medium text-gray-700">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrgChartByUnit;
