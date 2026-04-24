
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, ChevronRight, User, Filter } from 'lucide-react';
import { Language } from '../types';

interface APCRecipient {
  id: number;
  year: string;
  name: string;
  position: { EN: string; BM: string };
  image: string;
}

interface BestEmployeeProps {
  lang: Language;
}

const BestEmployee: React.FC<BestEmployeeProps> = ({ lang }) => {
  const [selectedYear, setSelectedYear] = useState('All');

  const recipients: APCRecipient[] = [
    { id: 1, year: "2012", name: "MOHD SUHAIRI BIN MOHD SAAD", position: { EN: "Administrative Assistant", BM: "Pembantu Tadbir" }, image: "/images/about-staff/Suhairi.jpeg" },
    { id: 2, year: "2013", name: "NORERNI BINTI A. RAHMAN", position: { EN: "Office Secretary", BM: "Setiausaha Pejabat" }, image: "/images/about-staff/Noerni.jpeg" },
    { id: 3, year: "2014", name: "PM DR. SAJAHAN BIN MAIDIN", position: { EN: "Deputy Dean", BM: "Timbalan Dekan" }, image: "/images/about-staff/Sajahan.jpeg" },
    { id: 4, year: "2015", name: "NORSUHADA BINTI MANSOR", position: { EN: "Assistant Registrar", BM: "Penolong Pendaftar" }, image: "/images/about-staff/Suhada.jpeg" },
    { id: 5, year: "2016", name: "MOHD ADZNAN BIN MOHD NAYAN", position: { EN: "Assistant Registrar", BM: "Penolong Pendaftar" }, image: "/images/about-staff/Adznan.jpeg" },
    { id: 6, year: "2017", name: "PM DR. TAY CHOO CHUAN", position: { EN: "Deputy Dean", BM: "Timbalan Dekan" }, image: "/images/about-staff/Tay.jpeg" },
    { id: 7, year: "2018", name: "SAFUAN BIN BIDIN", position: { EN: "Senior Administrative Assistant", BM: "Pembantu Tadbir Kanan" }, image: "/images/about-staff/Safuan.jpeg" },
    { id: 8, year: "2019", name: "FADHIL BIN AHMAD", position: { EN: "Assistant Engineer", BM: "Penolong Jurutera" }, image: "/images/about-staff/Fadhil.jpeg" },
    { id: 9, year: "2020", name: "MOHD FUAD BIN JA'AFAR", position: { EN: "Senior Assistant Administration Office", BM: "Penolong Pegawai Tadbir Kanan" }, image: "/images/about-staff/Fuad.jpeg" },
    { id: 10, year: "2021", name: "MUHAMAD FIRDAUS BIN MAZLI", position: { EN: "General Office Assistant", BM: "Pembantu Pejabat" }, image: "/images/about-staff/Firdaus.png" },
    { id: 11, year: "2022", name: "NURUL SYUHADA' BINTI HARON", position: { EN: "Assistant Registrar", BM: "Penolong Pendaftar" }, image: "/images/about-staff/Syuhada.jpeg" },
    { id: 12, year: "2023", name: "JUNAIDAH BINTI KASIM", position: { EN: "Deputy Registrar", BM: "Timbalan Pendaftar" }, image: "/images/about-staff/Junaidah.jpeg" },
    { id: 13, year: "2024", name: "NOOR AZMAN BIN MANSOR", position: { EN: "Assistant Administration Officer", BM: "Pegawai Tadbir (Pentadbiran)" }, image: "/images/about-staff/Azman.jpeg" }
  ];

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(recipients.map(r => r.year))).sort((a, b) => b.localeCompare(a));
    return ['All', ...uniqueYears];
  }, []);

  const filteredRecipients = useMemo(() => {
    const sorted = [...recipients].sort((a, b) => b.year.localeCompare(a.year));
    return selectedYear === 'All' 
      ? sorted 
      : sorted.filter(r => r.year === selectedYear);
  }, [selectedYear]);

  const content = {
    title: { EN: 'BEST EMPLOYEE (APC)', BM: 'ANUGERAH PERKHIDMATAN CEMERLANG' },
    subtitle: { 
      EN: 'Honoring the dedication and exceptional service of our staff members.', 
      BM: 'Menghargai dedikasi dan perkhidmatan luar biasa kakitangan kami.' 
    },
    filterLabel: { EN: 'Filter by Year', BM: 'Tapis mengikut Tahun' },
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 px-8 lg:px-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-[#A51C30] flex items-center">
              {content.title[lang]}
              <div className="ml-4 h-px flex-grow bg-gray-100 hidden md:block" />
            </h1>
            <p className="text-gray-500 text-sm font-light">
              {content.subtitle[lang]}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">
              {content.filterLabel[lang]}
            </span>
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] outline-none transition-all text-xs font-bold text-gray-700 appearance-none cursor-pointer"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'All' ? (lang === 'EN' ? 'All Years' : 'Semua Tahun') : year}
                </option>
              ))}
            </select>
          </div>
        </div>
        </div>
      </section>

      {/* Recipients List */}
      <section className="px-8 lg:px-12 max-w-7xl mx-auto space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredRecipients.map((recipient, idx) => (
            <motion.div
              key={recipient.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Horizontal Banner Card */}
              <div className="relative overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                {/* Abstract Background Elements inspired by the image */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-tr from-[#A51C30]/10 to-transparent rounded-full blur-3xl" />
                  <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-bl from-[#A51C30]/5 to-transparent rounded-full blur-3xl" />
                  {/* Decorative Waves */}
                  <svg className="absolute bottom-0 left-0 w-full h-24 opacity-10" viewBox="0 0 1440 320">
                    <path fill="#A51C30" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 md:gap-16">
                  {/* Left Content: Year and Info */}
                  <div className="flex-grow text-center md:text-left space-y-4">
                    <div className="text-6xl md:text-8xl font-serif font-bold text-gray-200/80 tracking-tighter">
                      {recipient.year}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight uppercase">
                        {recipient.name}
                      </h3>
                      <p className="text-lg md:text-xl font-serif italic text-gray-500">
                        {recipient.position[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Right Content: Photo and Logo */}
                  <div className="flex-shrink-0 relative">
                    {/* SPS Logo Placeholder */}
                    <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-20">
                      <div className="bg-white p-2 rounded-lg shadow-md border border-gray-50">
                        <img
                          src="/images/homepages/SPS logo.png"
                          alt="SPS logo"
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Profile Photo */}
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={recipient.image} 
                        alt={recipient.name} 
                        className="w-full h-full object-cover grayscale-0 filter-none transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Bar */}
                <div className="h-2 w-full bg-gradient-to-r from-[#A51C30] via-[#F27D26] to-[#A51C30] opacity-80" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default BestEmployee;
