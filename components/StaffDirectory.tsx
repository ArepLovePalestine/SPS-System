
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Mail, Phone, Building2, ChevronRight, User, X } from 'lucide-react';
import { Language } from '../types';

interface StaffMember {
  id: number;
  name: string;
  position: { EN: string; BM: string };
  unit: { EN: string; BM: string };
  email: string;
  phone: string;
  image: string;
}

interface StaffDirectoryProps {
  lang: Language;
}

const StaffDirectory: React.FC<StaffDirectoryProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('All');

  const staffData: StaffMember[] = [
    {
      id: 1,
      name: "PROF. MADYA IR. TS. DR. JEFFERIE BIN ABD RAZAK",
      position: { EN: "Deputy Dean", BM: "Timbalan Dekan" },
      unit: { EN: "Management", BM: "Pengurusan" },
      email: "jefferie@utem.edu.my",
      phone: "+606-270 1000",
      image: "https://picsum.photos/seed/staff1/400/400"
    },
    {
      id: 2,
      name: "MRS. JUNAIDAH BINTI KASIM",
      position: { EN: "Deputy Registrar", BM: "Timbalan Pendaftar" },
      unit: { EN: "Administration & Finance", BM: "Pentadbiran & Kewangan" },
      email: "junaidah@utem.edu.my",
      phone: "+606-270 1001",
      image: "https://picsum.photos/seed/staff2/400/400"
    },
    {
      id: 3,
      name: "MR. MOHAMMAD SYARIN BIN SAPUAN",
      position: { EN: "Assistant Registrar (Academic)", BM: "Penolong Pendaftar (Akademik)" },
      unit: { EN: "Academic", BM: "Akademik" },
      email: "syarin@utem.edu.my",
      phone: "+606-270 1002",
      image: "https://picsum.photos/seed/staff3/400/400"
    },
    {
      id: 4,
      name: "DR. AHMAD FAIZAL BIN MOHD YUSOF",
      position: { EN: "Senior Lecturer", BM: "Pensyarah Kanan" },
      unit: { EN: "Research", BM: "Penyelidikan" },
      email: "faizal.yusof@utem.edu.my",
      phone: "+606-270 1003",
      image: "https://picsum.photos/seed/staff4/400/400"
    },
    {
      id: 5,
      name: "MRS. NORAINI BINTI ABDULLAH",
      position: { EN: "Administrative Assistant", BM: "Pembantu Tadbir" },
      unit: { EN: "Administration & Finance", BM: "Pentadbiran & Kewangan" },
      email: "noraini.abd@utem.edu.my",
      phone: "+606-270 1004",
      image: "https://picsum.photos/seed/staff5/400/400"
    },
    {
      id: 6,
      name: "MR. KHAIRUL ANUAR BIN ZAINAL",
      position: { EN: "IT Officer", BM: "Pegawai TM" },
      unit: { EN: "Management", BM: "Pengurusan" },
      email: "khairul.anuar@utem.edu.my",
      phone: "+606-270 1005",
      image: "https://picsum.photos/seed/staff6/400/400"
    },
    {
      id: 7,
      name: "MRS. SITI HAJAR BINTI ISMAIL",
      position: { EN: "Financial Officer", BM: "Pegawai Kewangan" },
      unit: { EN: "Administration & Finance", BM: "Pentadbiran & Kewangan" },
      email: "hajar.ismail@utem.edu.my",
      phone: "+606-270 1006",
      image: "https://picsum.photos/seed/staff7/400/400"
    },
    {
      id: 8,
      name: "DR. LING CHEN WEI",
      position: { EN: "Research Coordinator", BM: "Penyelaras Penyelidikan" },
      unit: { EN: "Research", BM: "Penyelidikan" },
      email: "ling.cw@utem.edu.my",
      phone: "+606-270 1007",
      image: "https://picsum.photos/seed/staff8/400/400"
    },
    {
      id: 9,
      name: "MRS. FARIDAH BINTI OTHMAN",
      position: { EN: "Executive Officer", BM: "Pegawai Eksekutif" },
      unit: { EN: "Student Affairs", BM: "Hal Ehwal Pelajar" },
      email: "faridah.o@utem.edu.my",
      phone: "+606-270 1008",
      image: "https://picsum.photos/seed/staff9/400/400"
    },
    {
      id: 10,
      name: "MR. ZULKIFLI BIN HASSAN",
      position: { EN: "Office Assistant", BM: "Pembantu Pejabat" },
      unit: { EN: "Administration & Finance", BM: "Pentadbiran & Kewangan" },
      email: "zulkifli.h@utem.edu.my",
      phone: "+606-270 1009",
      image: "https://picsum.photos/seed/staff10/400/400"
    }
  ];

  const units = useMemo(() => {
    const uniqueUnits = Array.from(new Set(staffData.map(s => s.unit.EN)));
    return ['All', ...uniqueUnits];
  }, []);

  const filteredStaff = useMemo(() => {
    return staffData.filter(staff => {
      const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            staff.unit[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                            staff.position[lang].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesUnit = selectedUnit === 'All' || staff.unit.EN === selectedUnit;
      return matchesSearch && matchesUnit;
    });
  }, [searchQuery, selectedUnit, lang]);

  const content = {
    title: { EN: 'Staff Directory', BM: 'Direktori Staf' },
    subtitle: { EN: 'Find and connect with our academic and administrative staff', BM: 'Cari dan hubungi kakitangan akademik dan pentadbiran kami' },
    searchPlaceholder: { EN: 'Search by name, position or unit...', BM: 'Cari mengikut nama, jawatan atau unit...' },
    filterLabel: { EN: 'Filter by Unit', BM: 'Tapis mengikut Unit' },
    noResults: { EN: 'No staff members found matching your criteria.', BM: 'Tiada kakitangan ditemui mengikut kriteria anda.' },
    resultsCount: { EN: 'Showing {count} staff members', BM: 'Memaparkan {count} orang kakitangan' }
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

      {/* Search & Filter Section */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder={content.searchPlaceholder[lang]}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] outline-none transition-all text-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <select 
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] outline-none transition-all text-sm appearance-none cursor-pointer"
                >
                  {units.map(unit => (
                    <option key={unit} value={unit}>
                      {unit === 'All' ? (lang === 'EN' ? 'All Units' : 'Semua Unit') : unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {content.resultsCount[lang].replace('{count}', filteredStaff.length.toString())}
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <AnimatePresence mode="popLayout">
            {filteredStaff.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredStaff.map((staff) => (
                  <motion.div
                    key={staff.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#A51C30]/10 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-50 group-hover:border-[#A51C30]/20 transition-colors">
                          <img 
                            src={staff.image} 
                            alt={staff.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#A51C30]">
                          <User size={14} />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-gray-900 uppercase leading-tight line-clamp-2 min-h-[2.5rem]">
                          {staff.name}
                        </h3>
                        <p className="text-[11px] font-medium text-[#A51C30] uppercase tracking-wider">
                          {staff.position[lang]}
                        </p>
                      </div>

                      <div className="w-full pt-4 space-y-3 border-t border-gray-50">
                        <div className="flex items-center space-x-3 text-gray-500 group-hover:text-gray-900 transition-colors">
                          <Building2 size={14} className="flex-shrink-0" />
                          <span className="text-xs font-medium truncate">{staff.unit[lang]}</span>
                        </div>
                        <a 
                          href={`mailto:${staff.email}`}
                          className="flex items-center space-x-3 text-gray-500 hover:text-[#A51C30] transition-colors"
                        >
                          <Mail size={14} className="flex-shrink-0" />
                          <span className="text-xs font-medium truncate">{staff.email}</span>
                        </a>
                        <div className="flex items-center space-x-3 text-gray-500">
                          <Phone size={14} className="flex-shrink-0" />
                          <span className="text-xs font-medium">{staff.phone}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 mb-6">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">{content.noResults[lang]}</h3>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedUnit('All'); }}
                  className="text-[#A51C30] font-bold uppercase tracking-widest text-[10px] hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default StaffDirectory;
