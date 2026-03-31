import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, ChevronRight, Briefcase, ListChecks, Phone } from 'lucide-react';
import { Language } from '../types';

interface StaffMember {
  id: number;
  name: string;
  position: { EN: string; BM: string };
  responsibilities: { EN: string[]; BM: string[] };
  email: string;
  image: string;
  phone?: string;
}

interface PersonInChargeProps {
  lang: Language;
}

const PersonInCharge: React.FC<PersonInChargeProps> = ({ lang }) => {
  const content = {
    title: { EN: 'Person in Charge', BM: 'Pegawai Bertanggungjawab' },
    subtitle: {
      EN: 'Meet the dedicated team powering the School of Graduate Studies.',
      BM: 'Kenali pasukan dedikasi yang menggerakkan Pusat Pengajian Siswazah.'
    },
    responsibilitiesLabel: { EN: 'Responsibilities', BM: 'Tanggungjawab' },
    emailLabel: { EN: 'Email', BM: 'Emel' }
  };

  const staffData: StaffMember[] = [
    {
      id: 1,
      name: 'Prof. Madya IR. TS. Dr. Jeefferie bin Abd Razak',
      position: { EN: 'Deputy Dean', BM: 'Deputy Dean' },
      responsibilities: {
        EN: [
          'Accreditation of Postgraduate Programme/MQA',
          'MoU and MoA SPS',
          'Postgraduate Programme Promotions',
          'Postgraduate Student Activities/Postgraduate Club (UPGRADE)',
          'Doctor of Engineering Administration',
          'Conversion from Master (by Research) to PhD Programme',
          'Research Proposal Defend'
        ],
        BM: [
          'Accreditation of Postgraduate Programme/MQA',
          'MoU and MoA SPS',
          'Postgraduate Programme Promotions',
          'Postgraduate Student Activities/Postgraduate Club (UPGRADE)',
          'Doctor of Engineering Administration',
          'Conversion from Master (by Research) to PhD Programme',
          'Research Proposal Defend'
        ]
      },
      email: 'jeefferie@utem.edu.my',
      image: '/images/about-pic/Jeefferie.jpeg'
    },
    {
      id: 2,
      name: 'Mrs. Junaidah binti Kasim',
      position: { EN: 'Deputy Registrar', BM: 'Deputy Registrar' },
      responsibilities: {
        EN: [
          'ISO 9001:2015',
          'MyRA',
          'MyMohes',
          'Data/Statistics',
          'Financial/Asset',
          'Postgraduate Offshore Programmes',
          'Office Administration'
        ],
        BM: [
          'ISO 9001:2015',
          'MyRA',
          'MyMohes',
          'Data/Statistics',
          'Financial/Asset',
          'Postgraduate Offshore Programmes',
          'Office Administration'
        ]
      },
      email: 'junaidahkasim@utem.edu.my',
      image: '/images/about-pic/Junaidah.jpeg'
    },
    {
      id: 3,
      name: 'Mr. Mohammad Syarin bin Sapuan',
      position: { EN: 'Assistant Registrar (Academic)', BM: 'Assistant Registrar (Academic)' },
      responsibilities: {
        EN: [
          'Admission and Registration of Postgraduate Students',
          'Examination Result',
          'Conferment of Degree',
          'Other Academic Matters'
        ],
        BM: [
          'Admission and Registration of Postgraduate Students',
          'Examination Result',
          'Conferment of Degree',
          'Other Academic Matters'
        ]
      },
      email: 'syarin@utem.edu.my',
      image: '/images/about-pic/Syarin.jpeg'
    },
    {
      id: 4,
      name: 'Ms. Idura binti Yaakup',
      position: { EN: 'Assistant Registrar (Examination and Scholarship)', BM: 'Assistant Registrar (Examination and Scholarship)' },
      responsibilities: {
        EN: [
          'Final Examination Management',
          'Oral Examination (Viva-voce)',
          'Scholarship (Kesidang Scheme/MyBrain15/PTPTN)',
          'Graduation and Letter of Convocation',
          'Postgraduate Student Welfare'
        ],
        BM: [
          'Final Examination Management',
          'Oral Examination (Viva-voce)',
          'Scholarship (Kesidang Scheme/MyBrain15/PTPTN)',
          'Graduation and Letter of Convocation',
          'Postgraduate Student Welfare'
        ]
      },
      email: 'idura@utem.edu.my',
      image: '/images/about-pic/Idura.jpeg'
    },
    {
      id: 5,
      name: 'Mr. Noor Azman bin Mansor',
      position: { EN: 'Assistant Administration Officer (Viva-Voce)', BM: 'Assistant Administration Officer (Viva-Voce)' },
      responsibilities: {
        EN: ['Oral Examination Process (Viva-Voce)', 'E-viva System'],
        BM: ['Oral Examination Process (Viva-Voce)', 'E-viva System']
      },
      email: 'noorazman@utem.edu.my',
      image: '/images/about-pic/Azman.jpeg'
    },
    {
      id: 6,
      name: 'Mrs. Zuriana binti Omar',
      position: { EN: 'Office Secretary', BM: 'Office Secretary' },
      responsibilities: { EN: ['Secretarial Matters'], BM: ['Secretarial Matters'] },
      email: 'zuriana@utem.edu.my',
      phone: '06-229 2307',
      image: '/images/about-pic/Zuriana.jpeg'
    },
    {
      id: 7,
      name: 'Nooraznina Irma Binti Mustafa',
      position: { EN: 'Senior Administrative Assistant (Academic)', BM: 'Senior Administrative Assistant (Academic)' },
      responsibilities: {
        EN: [
          'Offer Letter Status',
          'Student Confirmation Letter',
          'Updating Postgraduate Student Personal Information in SMPS'
        ],
        BM: [
          'Offer Letter Status',
          'Student Confirmation Letter',
          'Updating Postgraduate Student Personal Information in SMPS'
        ]
      },
      email: 'aznina@utem.edu.my',
      phone: '06-229 2307',
      image: '/images/about-pic/Noraznina.jpeg'
    },
    {
      id: 8,
      name: 'Mrs. Aiza Azwadi binti Abdul Wahab',
      position: { EN: 'Senior Administrative Assistant (Academic)', BM: 'Senior Administrative Assistant (Academic)' },
      responsibilities: {
        EN: ['Offer Letter Status', 'Students Application Status', 'Appointment of Supervisor'],
        BM: ['Offer Letter Status', 'Students Application Status', 'Appointment of Supervisor']
      },
      email: 'aswadi@utem.edu.my',
      image: '/images/about-pic/Aswadi.jpeg'
    },
    {
      id: 9,
      name: 'Mr. Fadhil Bin Ahmad',
      position: { EN: 'Assistant Engineer', BM: 'Assistant Engineer' },
      responsibilities: {
        EN: ['Space/Room Reservations', 'Postgraduate Lab', 'Technical Issues', 'SPS Website and Social Media'],
        BM: ['Space/Room Reservations', 'Postgraduate Lab', 'Technical Issues', 'SPS Website and Social Media']
      },
      email: 'fadhil@utem.edu.my',
      phone: '012-9255100',
      image: '/images/about-pic/Fadhil.jpeg'
    },
    {
      id: 10,
      name: 'Ms. Nur Afiqah binti Mohd Hamdan',
      position: { EN: 'Administrative Assistant', BM: 'Administrative Assistant' },
      responsibilities: {
        EN: [
          'Kesidang -Application/ Status/ Offer Letter/ Continuation Letter',
          'Confirmation Letter for EPF Withdrawal',
          'Letter of Completion Study for Research, Coursework and Mixed Mode Programme',
          'Postgraduate Academic Transcript and Scroll'
        ],
        BM: [
          'Kesidang -Application/ Status/ Offer Letter/ Continuation Letter',
          'Confirmation Letter for EPF Withdrawal',
          'Letter of Completion Study for Research, Coursework and Mixed Mode Programme',
          'Postgraduate Academic Transcript and Scroll'
        ]
      },
      email: 'nur.afiqah@utem.edu.my',
      image: '/images/about-pic/Afiqah.jpeg'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/homepages/PIC.jpg"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
            {staffData.map((staff, index) => (
              <motion.div
                key={staff.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col h-full max-w-sm w-full mx-auto"
              >
                <div className="h-60 bg-white flex items-center justify-center rounded-t-2xl overflow-hidden">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="max-h-full max-w-full object-contain object-center transition-all duration-700"
                  />
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-[#A51C30] mb-2">
                      <Briefcase size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        {staff.position[lang]}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 uppercase leading-tight mb-2">
                      {staff.name}
                    </h3>
                  </div>

                  <div className="space-y-4 flex-grow">
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

                  <div className="mt-6 pt-4 border-t border-gray-50 space-y-2">
                    <div className="flex items-center space-x-2 text-gray-400">
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
                    {staff.phone && (
                      <div className="flex items-center space-x-2 text-gray-600 text-sm">
                        <Phone size={14} className="text-gray-400" />
                        <a href={`tel:${staff.phone.replace(/[^\\d+]/g, '')}`} className="hover:text-[#A51C30]">
                          {staff.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 border-t border-gray-100 text-center">
        <Link to="/" className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest transition-colors">
          {lang === 'EN' ? 'Back to Home' : 'Kembali ke Utama'}
        </Link>
      </div>
    </div>
  );
};

export default PersonInCharge;
