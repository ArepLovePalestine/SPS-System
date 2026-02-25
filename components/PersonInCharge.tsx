
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, ChevronRight, User, Briefcase, ListChecks } from 'lucide-react';
import { Language } from '../types';

interface StaffMember {
  id: number;
  name: string;
  position: { EN: string; BM: string };
  responsibilities: { EN: string[]; BM: string[] };
  email: string;
  image: string;
}

interface PersonInChargeProps {
  lang: Language;
}

const PersonInCharge: React.FC<PersonInChargeProps> = ({ lang }) => {
  const staffData: StaffMember[] = [
    {
      id: 1,
      name: "PROF. MADYA IR. TS. DR. JEFFERIE BIN ABD RAZAK",
      position: { EN: "Deputy Dean", BM: "Timbalan Dekan" },
      responsibilities: {
        EN: [
          "Accreditation of Postgraduate Programme/MQA",
          "MoU and MoA SPS",
          "Postgraduate Programme Promotions",
          "Research Proposal Defend"
        ],
        BM: [
          "Akreditasi Program Pascasiswazah/MQA",
          "MoU dan MoA SPS",
          "Promosi Program Pascasiswazah",
          "Pembelaan Cadangan Penyelidikan"
        ]
      },
      email: "jefferie@utem.edu.my",
      image: "https://picsum.photos/seed/staff1/400/500"
    },
    {
      id: 2,
      name: "MRS. JUNAIDAH BINTI KASIM",
      position: { EN: "Deputy Registrar", BM: "Timbalan Pendaftar" },
      responsibilities: {
        EN: [
          "ISO 9001:2015",
          "Data/Statistics",
          "Financial/Asset",
          "Office Administration"
        ],
        BM: [
          "ISO 9001:2015",
          "Data/Statistik",
          "Kewangan/Aset",
          "Pentadbiran Pejabat"
        ]
      },
      email: "junaidah@utem.edu.my",
      image: "https://picsum.photos/seed/staff2/400/500"
    },
    {
      id: 3,
      name: "MR. MOHAMMAD SYARIN BIN SAPUAN",
      position: { EN: "Assistant Registrar (Academic)", BM: "Penolong Pendaftar (Akademik)" },
      responsibilities: {
        EN: [
          "Admission and Registration",
          "Examination Result",
          "Conferment of Degree"
        ],
        BM: [
          "Kemasukan dan Pendaftaran",
          "Keputusan Peperiksaan",
          "Penganugerahan Ijazah"
        ]
      },
      email: "syarin@utem.edu.my",
      image: "https://picsum.photos/seed/staff3/400/500"
    },
    {
      id: 4,
      name: "DR. AHMAD FAIZAL BIN MOHD YUSOF",
      position: { EN: "Senior Lecturer", BM: "Pensyarah Kanan" },
      responsibilities: {
        EN: [
          "Postgraduate Curriculum Development",
          "Student Welfare Committee",
          "International Student Liaison"
        ],
        BM: [
          "Pembangunan Kurikulum Pascasiswazah",
          "Jawatankuasa Kebajikan Pelajar",
          "Perhubungan Pelajar Antarabangsa"
        ]
      },
      email: "faizal.yusof@utem.edu.my",
      image: "https://picsum.photos/seed/staff4/400/500"
    },
    {
      id: 5,
      name: "MRS. NORAINI BINTI ABDULLAH",
      position: { EN: "Administrative Assistant", BM: "Pembantu Tadbir" },
      responsibilities: {
        EN: [
          "Student Record Management",
          "Official Correspondence",
          "Counter Services"
        ],
        BM: [
          "Pengurusan Rekod Pelajar",
          "Surat-menyurat Rasmi",
          "Perkhidmatan Kaunter"
        ]
      },
      email: "noraini.abd@utem.edu.my",
      image: "https://picsum.photos/seed/staff5/400/500"
    },
    {
      id: 6,
      name: "MR. KHAIRUL ANUAR BIN ZAINAL",
      position: { EN: "Information Technology Officer", BM: "Pegawai Teknologi Maklumat" },
      responsibilities: {
        EN: [
          "SPS Website Maintenance",
          "Online Application System",
          "Technical Support"
        ],
        BM: [
          "Penyelenggaraan Laman Web SPS",
          "Sistem Permohonan Dalam Talian",
          "Sokongan Teknikal"
        ]
      },
      email: "khairul.anuar@utem.edu.my",
      image: "https://picsum.photos/seed/staff6/400/500"
    },
    {
      id: 7,
      name: "MRS. SITI HAJAR BINTI ISMAIL",
      position: { EN: "Financial Officer", BM: "Pegawai Kewangan" },
      responsibilities: {
        EN: [
          "Tuition Fee Management",
          "Scholarship Disbursement",
          "Budget Planning"
        ],
        BM: [
          "Pengurusan Yuran Pengajian",
          "Pembayaran Biasiswa",
          "Perancangan Bajet"
        ]
      },
      email: "hajar.ismail@utem.edu.my",
      image: "https://picsum.photos/seed/staff7/400/500"
    },
    {
      id: 8,
      name: "DR. LING CHEN WEI",
      position: { EN: "Research Coordinator", BM: "Penyelaras Penyelidikan" },
      responsibilities: {
        EN: [
          "Thesis Submission Monitoring",
          "Viva-Voce Coordination",
          "Research Grant Administration"
        ],
        BM: [
          "Pemantauan Penyerahan Tesis",
          "Penyelarasan Viva-Voce",
          "Pentadbiran Geran Penyelidikan"
        ]
      },
      email: "ling.cw@utem.edu.my",
      image: "https://picsum.photos/seed/staff8/400/500"
    },
    {
      id: 9,
      name: "MRS. FARIDAH BINTI OTHMAN",
      position: { EN: "Executive Officer", BM: "Pegawai Eksekutif" },
      responsibilities: {
        EN: [
          "Marketing and Branding",
          "Event Management",
          "Alumni Relations"
        ],
        BM: [
          "Pemasaran dan Penjenamaan",
          "Pengurusan Acara",
          "Perhubungan Alumni"
        ]
      },
      email: "faridah.o@utem.edu.my",
      image: "https://picsum.photos/seed/staff9/400/500"
    },
    {
      id: 10,
      name: "MR. ZULKIFLI BIN HASSAN",
      position: { EN: "Office Assistant", BM: "Pembantu Pejabat" },
      responsibilities: {
        EN: [
          "Logistics Support",
          "Document Archiving",
          "Facility Maintenance"
        ],
        BM: [
          "Sokongan Logistik",
          "Pengarkiban Dokumen",
          "Penyelenggaraan Kemudahan"
        ]
      },
      email: "zulkifli.h@utem.edu.my",
      image: "https://picsum.photos/seed/staff10/400/500"
    }
  ];

  const content = {
    title: { EN: "Person in Charge", BM: "Pegawai Bertanggungjawab" },
    subtitle: { EN: "Meet our dedicated team at the School of Graduate Studies", BM: "Kenali pasukan kami di Pusat Pengajian Siswazah" },
    responsibilitiesLabel: { EN: "Responsibilities", BM: "Tanggungjawab" },
    emailLabel: { EN: "Email Address", BM: "Alamat Emel" }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop" 
            alt="Person in Charge" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-maroon-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <Link to="/about" className="hover:text-white transition-colors">{lang === 'EN' ? 'ABOUT US' : 'TENTANG KAMI'}</Link>
            <ChevronRight size={12} />
            <span className="text-white">{lang === 'EN' ? 'PERSON IN CHARGE' : 'PEGAWAI BERTANGGUNGJAWAB'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            {content.title[lang]}
          </motion.h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">
            {content.subtitle[lang]}
          </p>
        </div>
      </section>

      {/* Staff Grid Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffData.map((staff, index) => (
              <motion.div
                key={staff.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col"
              >
                {/* Profile Photo */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 text-[#A51C30] mb-2">
                      <Briefcase size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        {staff.position[lang]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase leading-tight mb-2">
                      {staff.name}
                    </h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <div className="flex items-center space-x-2 text-gray-400 mb-3">
                        <ListChecks size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          {content.responsibilitiesLabel[lang]}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {staff.responsibilities[lang].map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-gray-600 font-light">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-50">
                    <div className="flex items-center space-x-2 text-gray-400 mb-2">
                      <Mail size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {content.emailLabel[lang]}
                      </span>
                    </div>
                    <a 
                      href={`mailto:${staff.email}`}
                      className="text-sm text-[#A51C30] hover:underline font-medium break-all"
                    >
                      {staff.email}
                    </a>
                  </div>
                </div>
              </motion.div>
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

export default PersonInCharge;
