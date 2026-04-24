
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, User, Users, GraduationCap, Briefcase, Mail, Globe, Camera, Cpu, BookOpen, Microscope, Layout, Building2, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface CommitteeMember {
  name: string;
  title: string;
  image: string;
  responsibilities: string[];
  faculty?: string;
}

interface RoleGroup {
  id: string;
  label: { EN: string; BM: string };
  icon: any;
  members: CommitteeMember[];
}

interface UPgradeProfessionProps {
  lang: Language;
}

const UPgradeProfession: React.FC<UPgradeProfessionProps> = ({ lang }) => {
  const [activeRoleId, setActiveRoleId] = useState('advisor');
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  const committeeData: RoleGroup[] = [
    {
      id: 'advisor',
      label: { EN: 'Advisor', BM: 'Penasihat' },
      icon: User,
      members: [
        {
          name: "PROF. MADYA. IR. TS. DR. JEEFFERIE BIN RAZAK",
          title: "UPgrade Advisor",
          image: "/images/UPgradeAssociation_pic/Dr.Jef.jpeg",
          responsibilities: [
            "Extract dynamic role in advising the student association.",
            "Perceive comprehensive aspiration towards student association and intimate with every assistance.",
            "Knowledgeable about and adhere to University policies and procedures which concern to student association.",
            "Propound advice to the association on goal context and association management."
          ]
        }
      ]
    },
    {
      id: 'president',
      label: { EN: 'President', BM: 'Presiden' },
      icon: GraduationCap,
      members: [
        {
          name: "NASRI BIN SEMIN",
          title: "UPgrade President 2018/2019",
          image: "/images/UPgradeAssociation_pic/Nasri.jpeg",
          responsibilities: [
            "Assure the committee members communicates with postgraduate students clearly and effectively function as a source of information for the association.",
            "Inaugurate the smooth running of the student association.",
            "Chair committee meeting and the Annual General Meeting.",
            "Represents and promotes the student association among postgraduate students.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'vice-president',
      label: { EN: 'Vice President', BM: 'Naib Presiden' },
      icon: GraduationCap,
      members: [
        {
          name: "NURBATRISYIA BINTI NORHAZLIN",
          title: "UPgrade Vice President",
          image: "/images/UPgradeAssociation_pic/Nurbatrisyia.jpeg",
          responsibilities: [
            "Inaugurate a good interpersonal network that helps committee members work together.",
            "Determining and defining the structures and procedures of the student association, assisting committee members, defining issues and summarising progress.",
            "Evaluate the effectiveness of the committee members on an ongoing basis so that it moves forward.",
            "Evaluate events the committee members has staged.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'secretary',
      label: { EN: 'Secretary', BM: 'Setiausaha' },
      icon: Layout,
      members: [
        {
          name: "MUHAMMAD IRFAN BIN AZMAN",
          title: "UPgrade Secretary",
          image: "/images/UPgradeAssociation_pic/Irfan.jpeg",
          responsibilities: [
            "Organises the agenda for relevant meetings.",
            "All decisions are properly understood and recorded (minutes).",
            "Publicises and organises the student association's meetings and postgraduate student events.",
            "Compiles the student association's annual report.",
            "Informs committee members on decisions and checks to make sure tasks have been carried out.",
            "Receives, records and responds to all student association's correspondence.",
            "Maintains and files all student association's records.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'treasurer',
      label: { EN: 'Treasurer', BM: 'Bendahari' },
      icon: Building2,
      members: [
        {
          name: "NUR AFIQAH AINA BINTI ZAIHAM",
          title: "UPgrade Treasurer",
          image: "/images/UPgradeAssociation_pic/Afiqah_Aina.jpeg",
          responsibilities: [
            "Strategized student association budget.",
            "Organizing fundraising events and seek sponsorship, if required.",
            "Detailed records of income and expenditure.",
            "Compile an end of year financial report to be submitted along with the Secretaries annual report.",
            "Collect any moneys that is owed to the student association.",
            "Report on any transitions at committee meeting.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'technical',
      label: { EN: 'Technical Exco', BM: 'Exco Teknikal' },
      icon: Cpu,
      members: [
        {
          name: "MUHAMAD AFIQ BIN SHARUM",
          title: "Exco Technical",
          image: "/images/UPgradeAssociation_pic/Afiq.jpeg",
          responsibilities: [
            "Ensure all technical equipment is in good working condition and ready for use.",
            "Perform routine maintenance on the equipment being used.",
            "Collaborate with other EXCOs or teams involved in the project to ensure that technical aspects align with other requirements.",
            "Provide technical input or recommendations at every stage of the event or activity.",
            "Monitor the event or project's progress from a technical perspective to ensure smooth operation, and provide reports or evaluations afterward."
          ]
        },
        {
          name: "FAWZAN HANAFI BIN MOHD FAZDHLI",
          title: "Exco Technical",
          image: "/images/UPgradeAssociation_pic/Fawzan.jpeg",
          responsibilities: [
            "Ensure all technical equipment is in good working condition and ready for use.",
            "Perform routine maintenance on the equipment being used.",
            "Collaborate with other EXCOs or teams involved in the project to ensure that technical aspects align with other requirements.",
            "Provide technical input or recommendations at every stage of the event or activity.",
            "Monitor the event or project's progress from a technical perspective to ensure smooth operation, and provide reports or evaluations afterward."
          ]
        }
      ]
    },
    {
      id: 'international',
      label: { EN: 'International Exco', BM: 'Exco Antarabangsa' },
      icon: Globe,
      members: [
        {
          name: "MUHAMMAD FAHRUR ROZI",
          title: "Exco International",
          image: "/images/UPgradeAssociation_pic/Fahrur.jpeg",
          responsibilities: [
            "Organize student exchange programs involving students from various countries to broaden cultural and academic horizons.",
            "Plan and coordinate international delegations visiting educational institutions abroad or hosting delegations from other countries.",
            "Design programs that allow students to gain hands-on experience through international activities, such as conferences, seminars, or internships.",
            "Provide translation and interpretation services to ensure effective communication between participants from different countries.",
            "Organize cultural events or festivals involving international students to foster mutual understanding and celebrate cultural differences.",
            "Hold social events, discussions, or meetings aimed at strengthening relationships between students from various countries."
          ]
        },
        {
          name: "NIK NURDINI BINTI WOLSELEY",
          title: "Exco International",
          image: "/images/UPgradeAssociation_pic/Nik Nurdini.jpeg",
          responsibilities: [
            "Organize student exchange programs involving students from various countries to broaden cultural and academic horizons.",
            "Plan and coordinate international delegations visiting educational institutions abroad or hosting delegations from other countries.",
            "Design programs that allow students to gain hands-on experience through international activities, such as conferences, seminars, or internships.",
            "Provide translation and interpretation services to ensure effective communication between participants from different countries.",
            "Organize cultural events or festivals involving international students to foster mutual understanding and celebrate cultural differences.",
            "Hold social events, discussions, or meetings aimed at strengthening relationships between students from various countries."
          ]
        }
      ]
    },
    {
      id: 'media',
      label: { EN: 'Media Exco', BM: 'Exco Media' },
      icon: Camera,
      members: [
        {
          name: "MUHAMMAD AMIN BIN PANGIRAN A.",
          title: "Exco Media",
          image: "/images/UPgradeAssociation_pic/Amin.jpeg",
          responsibilities: [
            "Create and manage content for various media platforms such as social media, websites, and newsletters.",
            "Manage the official social media accounts of the student union, such as Instagram, Facebook, Twitter, or TikTok, to ensure relevant, engaging, and up-to-date content.",
            "Create graphics, videos, or infographics for specific events or campaigns that are engaging and informative."
          ]
        },
        {
          name: "NUR AYUNI ASHYIRA BINTI MOHAMMAD Y.",
          title: "Exco Media",
          image: "/images/UPgradeAssociation_pic/Ayuni.jpeg",
          responsibilities: [
            "Create and manage content for various media platforms such as social media, websites, and newsletters.",
            "Manage the official social media accounts of the student union, such as Instagram, Facebook, Twitter, or TikTok, to ensure relevant, engaging, and up-to-date content.",
            "Create graphics, videos, or infographics for specific events or campaigns that are engaging and informative."
          ]
        }
      ]
    },
    {
      id: 'ftkip',
      label: { EN: 'FTKIP Rep', BM: 'Wakil FTKIP' },
      icon: Briefcase,
      members: [
        {
          name: "HASHEMI BIN HASHIM",
          title: "UPgrade FTKIP Faculty Exco",
          faculty: "FTKIP",
          image: "/images/UPgradeAssociation_pic/Hashemi.jpeg",
          responsibilities: [
            "Organises and plans a program of events and activities throughout the year for the postgraduate students of FTKIP.",
            "Understands and provides direction to new and existing postgraduate students of FTKIP on guidelines.",
            "Coordinates FTKIP activities through the student association committee.",
            "Prepare information packs for incoming new postgraduate students of FTKIP.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        },
        {
          name: "WAN SOFIYA BINTI WAN AHMAD KAMIL",
          title: "UPgrade FTKIP Faculty Exco",
          faculty: "FTKIP",
          image: "/images/UPgradeAssociation_pic/Sofiya.jpeg",
          responsibilities: [
            "Organises and plans a program of events and activities throughout the year for the postgraduate students of FTKIP.",
            "Understands and provides direction to new and existing postgraduate students of FTKIP on guidelines.",
            "Coordinates FTKIP activities through the student association committee.",
            "Prepare information packs for incoming new postgraduate students of FTKIP.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'ftke',
      label: { EN: 'FTKE Rep', BM: 'Wakil FTKE' },
      icon: Briefcase,
      members: [
        {
          name: "SYED ABRAR BIN SYED AHMAD Z.",
          title: "UPgrade FTKE Faculty Exco",
          faculty: "FTKE",
          image: "/images/UPgradeAssociation_pic/Syed.jpeg",
          responsibilities: [
            "Organises and plans a program of events and activities throughout the year for the postgraduate students of FTKE.",
            "Understands and provides direction to new and existing postgraduate students of FTKE on guidelines.",
            "Coordinates FTKE activities through the student association committee.",
            "Prepare information packs for incoming new postgraduate students of FTKE.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        },
        {
          name: "NUR NAJWA BINTI MOHD AZRI",
          title: "UPgrade FTKE Faculty Exco",
          faculty: "FTKE",
          image: "/images/UPgradeAssociation_pic/Najwa.jpeg",
          responsibilities: [
            "Organises and plans a program of events and activities throughout the year for the postgraduate students of FTKE.",
            "Understands and provides direction to new and existing postgraduate students of FTKE on guidelines.",
            "Coordinates FTKE activities through the student association committee.",
            "Prepare information packs for incoming new postgraduate students of FTKE.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'fkekk',
      label: { EN: 'FKEKK Rep', BM: 'Wakil FKEKK' },
      icon: Briefcase,
      members: [
        {
          name: "FATIAH BINTI BADRUDIN",
          title: "UPgrade FTKEK Faculty Exco",
          faculty: "FKEKK",
          image: "/images/UPgradeAssociation_pic/Fathiah.jpeg",
          responsibilities: [
            "Organises and plans a program of events and activities throughout the year for the postgraduate students of FTKEK.",
            "Understands and provides direction to new and existing postgraduate students of FTKEK on guidelines.",
            "Coordinates FTKEK activities through the student association committee.",
            "Prepare information packs for incoming new postgraduate students of FTKEK.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'fkm',
      label: { EN: 'FKM Rep', BM: 'Wakil FKM' },
      icon: Briefcase,
      members: [
        {
          name: "NABIL ASHRAF BIN ALI",
          title: "UPgrade FTKM Faculty Exco",
          faculty: "FKM",
          image: "/images/UPgradeAssociation_pic/Nabil.jpeg",
          responsibilities: [
            "Organises and plans a program of events and activities throughout the year for the postgraduate students of FTKM.",
            "Understands and provides direction to new and existing postgraduate students of FTKM on guidelines.",
            "Coordinates FTKM activities through the student association committee.",
            "Prepare information packs for incoming new postgraduate students of FTKM.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'fptt',
      label: { EN: 'FPTT Rep', BM: 'Wakil FPTT' },
      icon: Briefcase,
      members: [
        {
          name: "NORSHAHIRA BINTI SHAHARIN",
          title: "UPgrade FPTT Faculty Exco",
          faculty: "FPTT",
          image: "/images/UPgradeAssociation_pic/Norshahira.jpeg",
          responsibilities: [
            "Organises and plans a program of events and activities throughout the year for the postgraduate students of FPTT.",
            "Understands and provides direction to new and existing postgraduate students of FPTT on guidelines.",
            "Coordinates FPTT activities through the student association committee.",
            "Prepare information packs for incoming new postgraduate students of FPTT.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    },
    {
      id: 'iptk',
      label: { EN: 'IPTK Rep', BM: 'Wakil IPTK' },
      icon: Briefcase,
      members: [
        {
          name: "NUR NADIA BINTI ZAINUL ARIFIN",
          title: "UPgrade IPTK Faculty Exco",
          faculty: "IPTK",
          image: "/images/UPgradeAssociation_pic/NurNadia.jpeg",
          responsibilities: [
            "Organises and plans a program of events and activities throughout the year for the postgraduate students of IPTK.",
            "Understands and provides direction to new and existing postgraduate students of IPTK on guidelines.",
            "Coordinates IPTK activities through the student association committee.",
            "Prepare information packs for incoming new postgraduate students of IPTK.",
            "Should actively participate in all student association events and activities throughout the year."
          ]
        }
      ]
    }
  ];

  const activeRole = useMemo(() => 
    committeeData.find(r => r.id === activeRoleId) || committeeData[0], 
  [activeRoleId]);

  const activeMember = activeRole.members[activeMemberIndex] || activeRole.members[0];

  const handleRoleChange = (id: string) => {
    setActiveRoleId(id);
    setActiveMemberIndex(0);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#f6f1e8] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_34%),linear-gradient(180deg,#fbf8f2_0%,#f1eadf_52%,#f8f5ef_100%)]">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <nav className="flex items-center justify-start space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
            <span>{lang === 'EN' ? 'Student Life' : 'Kehidupan Pelajar'}</span>
            <ChevronRight size={10} />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'UPgrade Profession' : 'Profesion UPgrade'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-gray-950 tracking-tight leading-tight mb-4"
          >
            {lang === 'EN' ? 'UPgrade Profession' : 'Profesion UPgrade'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-3xl mx-auto text-lg font-light leading-relaxed"
          >
            {lang === 'EN' 
              ? 'The leadership and professional structure representing postgraduate students at the School of Graduate Studies.' 
              : 'Struktur kepimpinan dan profesional yang mewakili pelajar pascasiswazah di Pusat Pengajian Siswazah.'}
          </motion.p>
        </div>
      </section>

      {/* Role Navigation System */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 lg:px-10">
          {/* Desktop/Tablet: Horizontal Scrollable Selector */}
          <div className="upgrade-role-slider hidden md:flex items-center overflow-x-auto py-6 pb-8 space-x-2">
            {committeeData.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleChange(role.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeRoleId === role.id 
                    ? 'bg-[#A51C30] text-white shadow-xl shadow-maroon-900/20' 
                    : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <role.icon size={14} />
                <span>{role.label[lang]}</span>
              </button>
            ))}
          </div>

          {/* Mobile: Dropdown Menu */}
          <div className="md:hidden py-6">
            <div className="relative">
              <select
                value={activeRoleId}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="w-full pl-6 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold uppercase tracking-widest text-gray-900 appearance-none outline-none focus:ring-2 focus:ring-[#A51C30]/20"
              >
                {committeeData.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.label[lang]}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Profile Display Section */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-x-0 top-0 h-40 bg-white/35 blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-8 lg:px-10">
          
          {/* Sub-profile tabs for multiple members */}
          {activeRole.members.length > 1 && (
            <div className="flex justify-center mb-10 space-x-4">
              {activeRole.members.map((member, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMemberIndex(idx)}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeMemberIndex === idx 
                      ? 'bg-gray-950 text-white shadow-lg' 
                      : 'bg-white text-gray-400 border border-gray-100 hover:border-gray-200'
                  }`}
                >
                  {lang === 'EN' ? `Member ${idx + 1}` : `Ahli ${idx + 1}`}
                </button>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeRoleId}-${activeMemberIndex}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white/95 rounded-[2rem] shadow-[0_24px_70px_rgba(88,71,51,0.14)] border border-white/80 ring-1 ring-[#d8cdbd]/50 overflow-hidden backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Portrait Photo */}
                <div className="lg:col-span-4 bg-[#f7f3ec] flex items-center justify-center p-10 lg:p-12 border-r border-[#e7ded1]">
                  <div className="relative">
                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
                      <img 
                        src={activeMember.image} 
                        alt={activeMember.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -inset-6 border border-[#A51C30]/5 rounded-full animate-pulse pointer-events-none" />
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-8 p-10 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 text-[#A51C30] mb-4">
                      <div className="h-[2px] w-8 bg-[#A51C30]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{activeMember.title}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-950 leading-tight mb-4 uppercase tracking-tight">
                      {activeMember.name}
                    </h2>
                    {activeMember.faculty && (
                      <div className="flex items-center space-x-2 text-gray-400 bg-gray-50 w-fit px-3 py-1.5 rounded-lg">
                        <Building2 size={14} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">Faculty of {activeMember.faculty}</span>
                      </div>
                    )}
                  </div>

                  {/* Responsibilities Section */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <BookOpen size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
                        {lang === 'EN' ? 'Key Responsibilities' : 'Tanggungjawab Utama'}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {activeMember.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start space-x-4 group">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A51C30] flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                            {resp}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Button */}
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <button className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#A51C30] transition-all group">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#A51C30]/5 transition-colors">
                        <Mail size={16} />
                      </div>
                      <span>Contact Committee Member</span>
                      <ChevronRight size={14} className="transition-transform group-hover:translate-x-2" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 mx-auto mb-8">
            <Users size={24} />
          </div>
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            {lang === 'EN' ? 'Representing the Student Voice' : 'Mewakili Suara Pelajar'}
          </h3>
          <p className="text-gray-500 font-light leading-relaxed">
            {lang === 'EN' 
              ? 'The UPgrade association works closely with the School of Graduate Studies to ensure the best possible academic and social experience for all postgraduate students.' 
              : 'Persatuan UPgrade bekerjasama rapat dengan Pusat Pengajian Siswazah untuk memastikan pengalaman akademik dan sosial yang terbaik untuk semua pelajar pascasiswazah.'}
          </p>
        </div>
      </section>

      <style>{`
        .upgrade-role-slider {
          scrollbar-color: #7f7f7f #f3f4f6;
          scrollbar-width: thin;
        }

        .upgrade-role-slider::-webkit-scrollbar {
          height: 10px;
        }

        .upgrade-role-slider::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 999px;
        }

        .upgrade-role-slider::-webkit-scrollbar-thumb {
          background: #7f7f7f;
          border-radius: 999px;
        }

        .upgrade-role-slider::-webkit-scrollbar-thumb:hover {
          background: #5f5f5f;
        }
      `}</style>
    </div>
  );
};

export default UPgradeProfession;
