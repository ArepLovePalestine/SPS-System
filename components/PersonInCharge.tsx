import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ListChecks, ShieldCheck, Square, ArrowRight, Hash, Phone, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface StaffMember {
  id: string;
  name: string;
  position: { EN: string; BM: string };
  responsibilities: { EN: string[]; BM: string[] };
  email: string;
  image: string;
  department: { EN: string; BM: string };
  phone?: string;
}

interface PersonInChargeProps {
  lang: Language;
}

const PersonInCharge: React.FC<PersonInChargeProps> = ({ lang }) => {
  const staffData: StaffMember[] = [
    {
      id: "PIC-01",
      name: "Prof. Madya IR. TS. Dr. Jeefferie bin Abd Razak",
      position: { EN: "Deputy Dean", BM: "Timbalan Dekan" },
      department: { EN: "Management & Strategy", BM: "Pengurusan & Strategi" },
      responsibilities: {
        EN: [
          "Accreditation of Postgraduate Programme/MQA",
          "MoU and MoA SPS",
          "Postgraduate Programme Promotions",
          "Postgraduate Student Activities/Postgraduate Club (UPGRADE)",
          "Doctor of Engineering Administration",
          "Conversion from Master (by Research) to PhD Programme",
          "Research Proposal Defend"
        ],
        BM: [
          "Akreditasi Program Pascasiswazah/MQA",
          "MoU dan MoA SPS",
          "Promosi Program Pascasiswazah",
          "Aktiviti Pelajar Pascasiswazah/Kelab Pascasiswazah (UPGRADE)",
          "Pentadbiran Doktor Kejuruteraan",
          "Pertukaran daripada Sarjana (Penyelidikan) ke Program PhD",
          "Pembelaan Cadangan Penyelidikan"
        ]
      },
      email: "jeefferie@utem.edu.my",
      image: "/images/about-pic/Jeefferie.jpeg"
    },
    {
      id: "PIC-02",
      name: "Mrs. Junaidah binti Kasim",
      position: { EN: "Deputy Registrar", BM: "Timbalan Pendaftar" },
      department: { EN: "Administrative Division", BM: "Bahagian Pentadbiran" },
      responsibilities: {
        EN: [
          "ISO 9001:2015",
          "MyRA",
          "MyMohes",
          "Data/Statistics",
          "Financial/Asset",
          "Postgraduate Offshore Programmes",
          "Office Administration"
        ],
        BM: [
          "ISO 9001:2015",
          "MyRA",
          "MyMohes",
          "Data/Statistik",
          "Kewangan/Aset",
          "Program Pascasiswazah Luar Kampus",
          "Pentadbiran Pejabat"
        ]
      },
      email: "junaidahkasim@utem.edu.my",
      image: "/images/about-pic/Junaidah.jpeg"
    },
    {
      id: "PIC-03",
      name: "Mr. Mohammad Syarin bin Sapuan",
      position: { EN: "Assistant Registrar (Academic)", BM: "Penolong Pendaftar (Akademik)" },
      department: { EN: "Academic Affairs", BM: "Hal Ehwal Akademik" },
      responsibilities: {
        EN: [
          "Admission and Registration of Postgraduate Students",
          "Examination Result",
          "Conferment of Degree",
          "Other Academic Matters"
        ],
        BM: [
          "Kemasukan dan Pendaftaran Pelajar Pascasiswazah",
          "Keputusan Peperiksaan",
          "Penganugerahan Ijazah",
          "Perkara Akademik Lain"
        ]
      },
      email: "syarin@utem.edu.my",
      image: "/images/about-pic/Syarin.jpeg"
    },
    {
      id: "PIC-04",
      name: "Ms. Idura binti Yaakup",
      position: { EN: "Assistant Registrar (Examination and Scholarship)", BM: "Penolong Pendaftar (Peperiksaan dan Biasiswa)" },
      department: { EN: "Evaluation Unit", BM: "Unit Penilaian" },
      responsibilities: {
        EN: [
          "Final Examination Management",
          "Oral Examination (Viva-voce)",
          "Scholarship (Kesidang Scheme/MyBrain15/PTPTN)",
          "Graduation and Letter of Convocation",
          "Postgraduate Student Welfare"
        ],
        BM: [
          "Pengurusan Peperiksaan Akhir",
          "Peperiksaan Lisan (Viva-voce)",
          "Biasiswa (Skim Kesidang/MyBrain15/PTPTN)",
          "Graduasi dan Surat Konvokesyen",
          "Kebajikan Pelajar Pascasiswazah"
        ]
      },
      email: "idura@utem.edu.my",
      image: "/images/about-pic/Idura.jpeg"
    },
    {
      id: "PIC-05",
      name: "Mr. Noor Azman bin Mansor",
      position: { EN: "Assistant Administration Officer (Viva-Voce)", BM: "Penolong Pegawai Pentadbiran (Viva-Voce)" },
      department: { EN: "Examination Unit", BM: "Unit Peperiksaan" },
      responsibilities: {
        EN: ["Oral Examination Process (Viva-Voce)", "E-viva System"],
        BM: ["Proses Peperiksaan Lisan (Viva-Voce)", "Sistem E-viva"]
      },
      email: "noorazman@utem.edu.my",
      image: "/images/about-pic/Azman.jpeg"
    },
    {
      id: "PIC-06",
      name: "Mrs. Zuriana binti Omar",
      position: { EN: "Office Secretary", BM: "Setiausaha Pejabat" },
      department: { EN: "Dean's Office", BM: "Pejabat Dekan" },
      responsibilities: { 
        EN: ["Secretarial Matters"], 
        BM: ["Urusan Kesetiausahaan"] 
      },
      email: "zuriana@utem.edu.my",
      phone: "06-229 2307",
      image: "/images/about-pic/Zuriana.jpeg"
    },
    {
      id: "PIC-07",
      name: "Nooraznina Irma Binti Mustafa",
      position: { EN: "Senior Administrative Assistant (Academic)", BM: "Pembantu Tadbir Kanan (Akademik)" },
      department: { EN: "Academic Support", BM: "Sokongan Akademik" },
      responsibilities: {
        EN: [
          "Offer Letter Status",
          "Student Confirmation Letter",
          "Updating Postgraduate Student Personal Information in SMPS"
        ],
        BM: [
          "Status Surat Tawaran",
          "Surat Pengesahan Pelajar",
          "Mengemaskini Maklumat Peribadi Pelajar Pascasiswazah dalam SMPS"
        ]
      },
      email: "aznina@utem.edu.my",
      phone: "06-229 2307",
      image: "/images/about-pic/Noraznina.jpeg"
    },
    {
      id: "PIC-08",
      name: "Mrs. Aiza Azwadi binti Abdul Wahab",
      position: { EN: "Senior Administrative Assistant (Academic)", BM: "Pembantu Tadbir Kanan (Akademik)" },
      department: { EN: "Academic Support", BM: "Sokongan Akademik" },
      responsibilities: {
        EN: ["Offer Letter Status", "Students Application Status", "Appointment of Supervisor"],
        BM: ["Status Surat Tawaran", "Status Permohonan Pelajar", "Pelantikan Penyelia"]
      },
      email: "aswadi@utem.edu.my",
      image: "/images/about-pic/Aswadi.jpeg"
    },
    {
      id: "PIC-09",
      name: "Mr. Fadhil Bin Ahmad",
      position: { EN: "Assistant Engineer", BM: "Penolong Jurutera" },
      department: { EN: "Facility & Infrastructure", BM: "Kemudahan & Infrastruktur" },
      responsibilities: {
        EN: ["Space/Room Reservations", "Postgraduate Lab", "Technical Issues", "SPS Website and Social Media"],
        BM: ["Tempahan Ruang/Bilik", "Makmal Pascasiswazah", "Isu Teknika", "Laman Web dan Media Sosial SPS"]
      },
      email: "fadhil@utem.edu.my",
      phone: "012-9255100",
      image: "/images/about-pic/Fadhil.jpeg"
    },
    {
      id: "PIC-10",
      name: "Ms. Nur Afiqah binti Mohd Hamdan",
      position: { EN: "Administrative Assistant", BM: "Pembantu Tadbir" },
      department: { EN: "Front Desk Operations", BM: "Operasi Pentadbiran" },
      responsibilities: {
        EN: [
          "Kesidang - Application/ Status/ Offer Letter/ Continuation Letter",
          "Confirmation Letter for EPF Withdrawal",
          "Letter of Completion Study for Research, Coursework and Mixed Mode Programme",
          "Postgraduate Academic Transcript and Scroll"
        ],
        BM: [
          "Kesidang - Permohonan/ Status/ Surat Tawaran/ Surat Sambungan",
          "Surat Pengesahan untuk Pengeluaran KWSP",
          "Surat Tamat Pengajian untuk Program Penyelidikan, Kerja Kursus dan Mod Campuran",
          "Transkrip Akademik Pascasiswazah dan Skrol"
        ]
      },
      email: "nur.afiqah@utem.edu.my",
      image: "/images/about-pic/Afiqah.jpeg"
    }
  ];

  const [activeStaffId, setActiveStaffId] = React.useState(staffData[0].id);
  const activeStaff = staffData.find(s => s.id === activeStaffId) || staffData[0];

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-32 selection:bg-[#A51C30]/10 selection:text-[#A51C30]">
      {/* Global Academic Typography Alignment */}
      <style>{`
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        .content-panel {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          height: 1px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
        }
      `}</style>

      {/* Section 1: Image Hero */}
      <section
        className="relative mb-24 overflow-hidden bg-cover bg-center pt-32 pb-28"
        style={{ backgroundImage: "url('/images/homepages/Pic2.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-bold uppercase tracking-[0.24em] mb-8"
          >
            <Link to="/about" className="text-white/65 transition-colors hover:text-white">
              {lang === 'EN' ? 'About Us' : 'Tentang Kami'}
            </Link>
            <ChevronRight size={12} className="text-white/35" />
            <span className="text-white/65">
              {lang === 'EN' ? 'Staff Info' : 'Maklumat Staf'}
            </span>
            <ChevronRight size={12} className="text-white/35" />
            <span className="text-white">
              {lang === 'EN' ? 'Person in Charge' : 'Pegawai Bertanggungjawab'}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-serif text-white mb-8 tracking-tight font-medium drop-shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
          >
            {lang === 'EN' ? 'Person in Charge' : 'Pegawai Bertanggungjawab'}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-lg font-sans text-white/75 font-light leading-relaxed"
          >
            {lang === 'EN' 
              ? 'Meet the executive team coordinating postgraduate excellence at UTeM.' 
              : 'Kenali pasukan eksekutif yang menyelaras kecemerlangan pascasiswazah di UTeM.'}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section 2: Split Layout (Sidebar + Content) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Sidebar: Role Navigation */}
          <aside className="w-full lg:w-80 shrink-0">
            <header className="mb-8 hidden lg:block">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                Staff Directory
              </h3>
            </header>
            
            <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 custom-scrollbar gap-1 lg:gap-1">
              {staffData.map((staff) => (
                <button
                  key={staff.id}
                  onClick={() => setActiveStaffId(staff.id)}
                  className={`
                    relative px-4 py-4 rounded-lg text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal group
                    ${activeStaffId === staff.id 
                      ? 'bg-[#A51C30]/5 text-[#A51C30]' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                  `}
                >
                  <div className="flex items-center space-x-4">
                    {activeStaffId === staff.id && (
                      <motion.div 
                        layoutId="sidebarIndicator"
                        className="absolute left-0 w-1 h-6 bg-[#A51C30] rounded-full hidden lg:block"
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                      />
                    )}
                    <span className={`text-sm font-medium leading-snug ${activeStaffId === staff.id ? 'font-semibold' : ''}`}>
                      {staff.position[lang]}
                    </span>
                  </div>
                  
                  {/* Bottom indicator for mobile */}
                  {activeStaffId === staff.id && (
                    <motion.div 
                      layoutId="mobileIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51C30] lg:hidden"
                    />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Area: Selected Profile Details */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStaffId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-2xl border border-gray-100 content-panel"
              >
                <div className="flex flex-col xl:flex-row">
                  
                  {/* Visual & Basic Info */}
                  <div className="w-full xl:w-[400px] p-10 lg:p-14 border-b xl:border-b-0 xl:border-r border-gray-50">
                     <div className="relative mb-10 w-full max-w-[240px] aspect-[3/4] overflow-hidden rounded-xl bg-gray-50 mx-auto xl:mx-0">
                       <img 
                         src={activeStaff.image} 
                         alt={activeStaff.name} 
                         className="w-full h-full object-cover transition-all duration-700"
                         referrerPolicy="no-referrer"
                       />
                     </div>
                     
                     <div className="space-y-6">
                        <div className="space-y-1">
                          <h2 className="text-[1.35rem] lg:text-[1.7rem] font-serif text-gray-900 leading-snug font-semibold">
                            {activeStaff.name}
                          </h2>
                          <p className="text-xs font-bold text-[#A51C30] uppercase tracking-widest mt-2">
                            {activeStaff.position[lang]}
                          </p>
                        </div>

                        <div className="pt-8 border-t border-gray-100 space-y-4">
                          <a 
                            href={`mailto:${activeStaff.email}`}
                            className="flex items-center space-x-4 text-gray-600 hover:text-[#A51C30] transition-colors group"
                          >
                            <Mail size={16} className="text-gray-300 group-hover:text-[#A51C30]" />
                            <span className="text-sm font-medium">{activeStaff.email}</span>
                          </a>

                          {activeStaff.phone && (
                            <div className="flex items-center space-x-4 text-gray-600">
                              <Phone size={16} className="text-gray-300" />
                              <span className="text-sm font-medium">{activeStaff.phone}</span>
                            </div>
                          )}
                          
                          <div className="flex items-center space-x-4 text-gray-400">
                            <ShieldCheck size={16} className="text-gray-200" />
                            <span className="text-xs font-medium tracking-wide">
                              {activeStaff.department[lang]}
                            </span>
                          </div>
                        </div>
                     </div>
                  </div>

                  {/* Detail Panel: Mandates */}
                  <div className="flex-grow p-10 lg:p-14 bg-[#FAFAFA]/40">
                    <div className="max-w-xl">
                      <header className="mb-12">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                           Professional Responsibilities
                        </h3>
                      </header>
                      
                      <div className="space-y-8">
                        {activeStaff.responsibilities[lang].map((res, i) => (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + (i * 0.05) }}
                            key={i} 
                            className="flex items-start group"
                          >
                             <div className="mt-2.5 w-1.5 h-[1.5px] bg-gray-200 group-hover:bg-[#A51C30] group-hover:w-4 transition-all mr-6 shrink-0" />
                             <p className="text-base font-sans text-gray-600 leading-relaxed group-hover:text-gray-950 transition-colors">
                               {res}
                             </p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-20 pt-10 border-t border-gray-50 flex justify-between items-center opacity-30">
                         <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Personnel Key: {activeStaff.id}</span>
                         <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">UTeM-SPS Official Directory</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Home Navigation */}
        <div className="mt-32 flex justify-center">
           <Link 
             to="/" 
             className="text-[9px] font-bold tracking-[0.6em] text-gray-300 hover:text-[#A51C30] transition-all uppercase flex items-center group"
           >
             <span>BACK TO HUB</span>
             <div className="w-4 h-px bg-gray-100 ml-4 group-hover:w-8 group-hover:bg-[#A51C30] transition-all" />
           </Link>
        </div>
      </div>
    </div>
  );
};



export default PersonInCharge;
