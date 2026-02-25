
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Building2, Library, Microscope, Wifi, Coffee, Users } from 'lucide-react';
import { Language } from '../types';

interface FacilitiesProps {
  lang: Language;
}

const Facilities: React.FC<FacilitiesProps> = ({ lang }) => {
  const items = [
    {
      icon: Microscope,
      title: { EN: 'Advanced Laboratories', BM: 'Makmal Termaju' },
      desc: { EN: 'State-of-the-art technical labs for engineering and technology research.', BM: 'Makmal teknikal canggih untuk penyelidikan kejuruteraan dan teknologi.' }
    },
    {
      icon: Library,
      title: { EN: 'Digital Library', BM: 'Perpustakaan Digital' },
      desc: { EN: 'Extensive collection of scholarly journals, databases, and research materials.', BM: 'Koleksi luas jurnal ilmiah, pangkalan data, dan bahan penyelidikan.' }
    },
    {
      icon: Wifi,
      title: { EN: 'Campus Connectivity', BM: 'Ketersambungan Kampus' },
      desc: { EN: 'High-speed internet and seamless digital infrastructure across campus.', BM: 'Internet berkelajuan tinggi dan infrastruktur digital yang lancar di seluruh kampus.' }
    },
    {
      icon: Coffee,
      title: { EN: 'Student Hubs', BM: 'Hab Pelajar' },
      desc: { EN: 'Comfortable spaces for collaboration, study, and social interaction.', BM: 'Ruang yang selesa untuk kerjasama, pengajian, dan interaksi sosial.' }
    },
    {
      icon: Users,
      title: { EN: 'Research Centers', BM: 'Pusat Penyelidikan' },
      desc: { EN: 'Dedicated hubs for multidisciplinary research and innovation.', BM: 'Hab khas untuk penyelidikan dan inovasi pelbagai disiplin.' }
    },
    {
      icon: Building2,
      title: { EN: 'Graduate Lounge', BM: 'Ruang Siswazah' },
      desc: { EN: 'Exclusive lounge area for postgraduate students to focus and network.', BM: 'Kawasan ruang tamu eksklusif untuk pelajar pascasiswazah untuk fokus dan rangkaian.' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop" 
            alt="Facilities" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <span className="text-white">{lang === 'EN' ? 'OUR FACILITIES' : 'KEMUDAHAN KAMI'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            {lang === 'EN' ? 'World-Class Infrastructure' : 'Infrastruktur Bertaraf Dunia'}
          </motion.h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">
            {lang === 'EN' 
              ? 'Providing the tools and environment for research excellence.' 
              : 'Menyediakan alatan dan persekitaran untuk kecemerlangan penyelidikan.'}
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {items.map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{item.title[lang]}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.desc[lang]}</p>
              </div>
            ))}
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

export default Facilities;
