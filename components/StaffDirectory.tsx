
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
      id: 0,
      name: "PROF. DR. MASRULLIZAM BIN MAT IBRAHIM",
      position: { EN: "Dean", BM: "Dekan" },
      unit: { EN: "Management", BM: "Pengurusan" },
      email: "masrullizam@utem.edu.my",
      phone: "+606-229 2307",
      image: "/images/about-staff/Masrulizam.png"
    },
    {
      id: 1,
      name: "PROF. MADYA IR. TS. DR. JEFFERIE BIN ABD RAZAK",
      position: { EN: "Deputy Dean", BM: "Timbalan Dekan" },
      unit: { EN: "Management", BM: "Pengurusan" },
      email: "jefferie@utem.edu.my",
      phone: "+606-270 1000",
      image: "/images/about-staff/Jeefferie.jpeg"
    },
    {
      id: 2,
      name: "MRS. JUNAIDAH BINTI KASIM",
      position: { EN: "Deputy Registrar", BM: "Timbalan Pendaftar" },
      unit: { EN: "Administration & Finance", BM: "Pentadbiran & Kewangan" },
      email: "junaidah@utem.edu.my",
      phone: "+606-270 1001",
      image: "/images/about-staff/Junaidah.jpeg"
    },
    {
      id: 3,
      name: "NOOR AZMAN BIN MANSOR",
      position: { EN: "Assistant Administration Officer (Viva -Voice)", BM: "Penolong Pendaftar (Akademik)" },
      unit: { EN: "Academic", BM: "Akademik" },
      email: "noorazman@utem.edu.my",
      phone: "+606-270 2484",
      image: "/images/about-staff/Azman.jpeg"
    },
    {
      id: 4,
      name: "SITI ZURIANA BINTI OMAR",
      position: { EN: "Office Secretary", BM: "Pensyarah Kanan" },
      unit: { EN: "Research", BM: "Penyelidikan" },
      email: "zuriana@utem.edu.my",
      phone: "+606-270 2791/2268",
      image: "/images/about-staff/Zuriana.jpeg"
    },
    {
      id: 5,
      name: "FADHIL BIN AHMAD",
      position: { EN: "Assistant Engineer", BM: "Pembantu Tadbir" },
      unit: { EN: "Administration & Finance", BM: "Pentadbiran & Kewangan" },
      email: "fadhil@utem.edu.my",
      phone: "+606-270 2795 / 012 -9255100",
      image: "/images/about-staff/Fadhil.jpeg"
    },
    {
      id: 6,
      name: "SITI SUHAILAH BINTI ZAINI",
      position: { EN: "SENIOR ADMINISTRATIVE ASSISTANT (ADMINISTRATION AND FINANCIAL)", BM: "Pegawai TM" },
      unit: { EN: "Management", BM: "Pengurusan" },
      email: "suhailah@utem.edu.my",
      phone: "+606-270 8012",
      image: "/images/about-staff/Suhailah.jpeg"
    },
    {
      id: 7,
      name: "AIZA AZWADI BIN ABDUL WAHAB",
      position: { EN: "Senior Administrative Assistant(Academic)", BM: "Pegawai Kewangan" },
      unit: { EN: "Administration & Finance", BM: "Pentadbiran & Kewangan" },
      email: "aswadi@utem.edu.my",
      phone: "+606-270 1677",
      image: "/images/about-staff/Aswadi.jpeg"
    },
    {
      id: 8,
      name: "NOORAZNINA IRMA BINTI MUSTAFA",
      position: { EN: "Senior Administrative Asisstant(Academic)", BM: "Penyelaras Penyelidikan" },
      unit: { EN: "Research", BM: "Penyelidikan" },
      email: "aznina@utem.edu.my",
      phone: "+606-270 8012",
      image: "/images/about-staff/Noraznina.jpeg"
    },
    {
      id: 9,
      name: "NUR AFIQAH BINTI MOHD HAMDAN",
      position: { EN: "Administrative Assistant (Examination And Scholarship)", BM: "Pegawai Eksekutif" },
      unit: { EN: "Student Affairs", BM: "Hal Ehwal Pelajar" },
      email: "nur.afiqah@utem.edu.my",
      phone: "+606-270 2801",
      image: "/images/about-staff/Afiqah.jpeg"
    },
    {
      id: 10,
      name: "MUAHAMMAD FIRDAUS BIN MAZLI",
      position: { EN: "General Officer Assistant", BM: "Pembantu Pejabat" },
      unit: { EN: "Administration & Finance", BM: "Pentadbiran & Kewangan" },
      email: "Muhammad.firdaus@utem.edu.my",
      phone: "+606-270 2798",
      image: "/images/about-staff/Firdaus.png"
    }
  ];

  const units = useMemo(() => {
    const uniqueUnits = Array.from(new Set(staffData.map(s => s.unit.EN)));
    return ['All', ...uniqueUnits];
  }, [staffData]);

  const filteredStaff = useMemo(() => {
    return staffData.filter(staff => {
      const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            staff.unit[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                            staff.position[lang].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesUnit = selectedUnit === 'All' || staff.unit.EN === selectedUnit;
      return matchesSearch && matchesUnit;
    });
  }, [searchQuery, selectedUnit, lang, staffData]);

  const content = {
    about: { EN: 'About Us', BM: 'Tentang Kami' },
    staffInfo: { EN: 'Staff Info', BM: 'Maklumat Staf' },
    title: { EN: 'Staff Directory', BM: 'Direktori Staf' },
    subtitle: { EN: 'Find and connect with our academic and administrative staff', BM: 'Cari dan hubungi kakitangan akademik dan pentadbiran kami' },
    searchPlaceholder: { EN: 'Search by name, position or unit...', BM: 'Cari mengikut nama, jawatan atau unit...' },
    filterLabel: { EN: 'Filter by Unit', BM: 'Tapis mengikut Unit' },
    noResults: { EN: 'No staff members found matching your criteria.', BM: 'Tiada kakitangan ditemui mengikut kriteria anda.' },
    resultsCount: { EN: 'Showing {count} staff members', BM: 'Memaparkan {count} orang kakitangan' },
    allUnits: { EN: 'All Units', BM: 'Semua Unit' },
    clearFilters: { EN: 'Clear all filters', BM: 'Kosongkan semua penapis' }
  };

  const profileLinks: Record<string, string> = {
    "PROF. DR. MASRULLIZAM BIN MAT IBRAHIM": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=34F$28A$2EB$290$253$1C8$17C$124$10E$82$4D",
    "PROF. MADYA IR. TS. DR. JEFFERIE BIN ABD RAZAK": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=29A$228$1E3$1A4$15E$114$F6$92$45",
    "MRS. JUNAIDAH BINTI KASIM": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=2968$2D3F$2A1C$24C1$2760$251C$239E$25C8$2674$227B$286E$2481$2578$AE0$AC0$AA0$A80$A60$A40$A20$A00$9E0$9C0$9A0$980$960$940$920$900$8E0$8C0$8A0$880$860$840$820$800$7E0$7C0$7A0$780$760$740$720$700$6E0$6C0$6A0$680$660$640$620$600$5E0$5C0$5A0$580$560$540$520$500$4E0$4C0$4A0$480$460$440$420$400$3E0$3C0$3A0$380$360$340$320$300$2E0$2C0$2A0$280$260$240$220$200$1E0$1C0$1A0$180$160$140$120$100$E0$C0$A0$80$60$40$20",
    "NOOR AZMAN BIN MANSOR": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=2AF8$2AED$2A7E$2B32$2460$2D46$2806$233D$2788$B60$B40$B20$B00$AE0$AC0$AA0$A80$A60$A40$A20$A00$9E0$9C0$9A0$980$960$940$920$900$8E0$8C0$8A0$880$860$840$820$800$7E0$7C0$7A0$780$760$740$720$700$6E0$6C0$6A0$680$660$640$620$600$5E0$5C0$5A0$580$560$540$520$500$4E0$4C0$4A0$480$460$440$420$400$3E0$3C0$3A0$380$360$340$320$300$2E0$2C0$2A0$280$260$240$220$200$1E0$1C0$1A0$180$160$140$120$100$E0$C0$A0$80$60$40$20",
    "SITI ZURIANA BINTI OMAR": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=276$1FE$19A$124$C3$9C$41",
    "FADHIL BIN AHMAD": "https://dev.utem.edu.my/sps/administrator/index.php?option=com_ajax&p=customizer&templateStyle=13&section=builder&format=html&site=https%3A%2F%2Fdev.utem.edu.my%2Fsps%2Fabout-us%2Fstaff-info%2Fstaff-directory.html&return=https%3A%2F%2Fdev.utem.edu.my%2Fsps%2Fadministrator%2Findex.php%3Foption%3Dcom_content%26view%3Darticle%26return%3Dfeatured%26layout%3Dedit%26id%3D197%26return%3Dfeatured",
    "SITI SUHAILAH BINTI ZAINI": "https://dev.utem.edu.my/sps/administrator/index.php?option=com_ajax&p=customizer&templateStyle=13&section=builder&format=html&site=https%3A%2F%2Fdev.utem.edu.my%2Fsps%2Fabout-us%2Fstaff-info%2Fstaff-directory.html&return=https%3A%2F%2Fdev.utem.edu.my%2Fsps%2Fadministrator%2Findex.php%3Foption%3Dcom_content%26view%3Darticle%26return%3Dfeatured%26layout%3Dedit%26id%3D197%26return%3Dfeatured",
    "AIZA AZWADI BIN ABDUL WAHAB": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=25E4$2C79$2D8E$24C1$2580$26F7$BC0$BA0$B80$B60$B40$B20$B00$AE0$AC0$AA0$A80$A60$A40$A20$A00$9E0$9C0$9A0$980$960$940$920$900$8E0$8C0$8A0$880$860$840$820$800$7E0$7C0$7A0$780$760$740$720$700$6E0$6C0$6A0$680$660$640$620$600$5E0$5C0$5A0$580$560$540$520$500$4E0$4C0$4A0$480$460$440$420$400$3E0$3C0$3A0$380$360$340$320$300$2E0$2C0$2A0$280$260$240$220$200$1E0$1C0$1A0$180$160$140$120$100$E0$C0$A0$80$60$40$20",
    "NOORAZNINA IRMA BINTI MUSTAFA": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=25E4$2F2E$2A1C$27C9$2940$23FF$BC0$BA0$B80$B60$B40$B20$B00$AE0$AC0$AA0$A80$A60$A40$A20$A00$9E0$9C0$9A0$980$960$940$920$900$8E0$8C0$8A0$880$860$840$820$800$7E0$7C0$7A0$780$760$740$720$700$6E0$6C0$6A0$680$660$640$620$600$5E0$5C0$5A0$580$560$540$520$500$4E0$4C0$4A0$480$460$440$420$400$3E0$3C0$3A0$380$360$340$320$300$2E0$2C0$2A0$280$260$240$220$200$1E0$1C0$1A0$180$160$140$120$100$E0$C0$A0$80$60$40$20",
    "NUR AFIQAH BINTI MOHD HAMDAN": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=2AF8$2D3F$2BA4$116E$2460$25DA$268E$290D$22DC$24F8$B40$B20$B00$AE0$AC0$AA0$A80$A60$A40$A20$A00$9E0$9C0$9A0$980$960$940$920$900$8E0$8C0$8A0$880$860$840$820$800$7E0$7C0$7A0$780$760$740$720$700$6E0$6C0$6A0$680$660$640$620$600$5E0$5C0$5A0$580$560$540$520$500$4E0$4C0$4A0$480$460$440$420$400$3E0$3C0$3A0$380$360$340$320$300$2E0$2C0$2A0$280$260$240$220$200$1E0$1C0$1A0$180$160$140$120$100$E0$C0$A0$80$60$40$20",
    "MUAHAMMAD FIRDAUS BIN MAZLI": "https://portal.utem.edu.my/iuris/frm_e-cv.asp?search=2A94$2D3F$27D0$24C1$28E0$23FF$24B8$10B6$24A8$2553$2814$22C4$2158$27C3$26A2$AA0$A80$A60$A40$A20$A00$9E0$9C0$9A0$980$960$940$920$900$8E0$8C0$8A0$880$860$840$820$800$7E0$7C0$7A0$780$760$740$720$700$6E0$6C0$6A0$680$660$640$620$600$5E0$5C0$5A0$580$560$540$520$500$4E0$4C0$4A0$480$460$440$420$400$3E0$3C0$3A0$380$360$340$320$300$2E0$2C0$2A0$280$260$240$220$200$1E0$1C0$1A0$180$160$140$120$100$E0$C0$A0$80$60$40$20"
  };
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="space-y-4">
            <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>{content.about[lang]}</span>
              <ChevronRight size={10} />
              <span>{content.staffInfo[lang]}</span>
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
                      {unit === 'All' ? content.allUnits[lang] : unit}
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
              >
                {filteredStaff.map((staff) => (
                  <motion.div
                    key={staff.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#A51C30]/10 transition-all duration-300 group w-full max-w-sm"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-50 group-hover:border-[#A51C30]/20 transition-colors">
                          {profileLinks[staff.name] ? (
                            <a
                              href={profileLinks[staff.name]}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View profile of ${staff.name}`}
                            >
                              <img 
                                src={staff.image} 
                                alt={staff.name} 
                                className="w-full h-full object-cover transition-all duration-500 transform translate-y-1 object-center"
                                referrerPolicy="no-referrer"
                              />
                            </a>
                          ) : (
                            <img 
                              src={staff.image} 
                              alt={staff.name} 
                              className="w-full h-full object-cover transition-all duration-500 transform translate-y-1 object-center"
                              referrerPolicy="no-referrer"
                            />
                          )}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#A51C30]">
                          <User size={14} />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-gray-900 uppercase leading-tight line-clamp-2 min-h-[2.5rem]">
                          {profileLinks[staff.name] ? (
                            <a
                              href={profileLinks[staff.name]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#A51C30] transition-colors"
                            >
                              {staff.name}
                            </a>
                          ) : (
                            staff.name
                          )}
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
                  {content.clearFilters[lang]}
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
