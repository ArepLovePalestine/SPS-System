
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, BookOpen, Quote } from 'lucide-react';
import { Language } from '../types';

interface AboutUsProps {
  lang: Language;
}

const AboutUs: React.FC<AboutUsProps> = ({ lang }) => {
  const [isForewordExpanded, setIsForewordExpanded] = useState(false);

  const content = {
    hero: {
      EN: { title: 'About Us', subtitle: 'Excellence in Graduate Education' },
      BM: { title: 'Tentang Kami', subtitle: 'Kecemerlangan dalam Pendidikan Siswazah' }
    },
    foreword: {
      EN: {
        title: "Dean's Foreword",
        name: "Prof. Dr. Masrullizam bin Mat Ibrahim",
        role: "Dean, School of Graduate Studies",
        summary: "Universiti Teknikal Malaysia Melaka (UTeM) is renowned as Malaysia's first Technical Public University, strategically located in a beautifully landscaped campus just 20 kilometers from the historical city of Melaka. UTeM currently operates from two campuses namely the Main Campus and the Technology Campus. UTeM has six distinct faculties which provide in-depth specialization in engineering, engineering technology, ICT and technology management disciplines along with the Institute of Technology Management and Tecnopreneurship and Centre For Language Learning.\n\nThe faculties are Faculty of Electronics and Computer Technology and Engineering, Faculty of Electrical Technology and Engineering, Faculty of Mechanical Technology and Engineering, Faculty of Industrial and Manufacturing Technology and Engineering, Faculty of Information And Communications Technology and Faculty of Technology Management And Technopreneurship....",
        text: "Universiti Teknikal Malaysia Melaka (UTeM) is renowned as Malaysia's first Technical Public University, strategically located in a beautifully landscaped campus just 20 kilometers from the historical city of Melaka. UTeM currently operates from two campuses namely the Main Campus and the Technology Campus. UTeM has six distinct faculties which provide in-depth specialization in engineering, engineering technology, ICT and technology management disciplines along with the Institute of Technology Management and Tecnopreneurship and Centre For Language Learning.\n\nThe faculties are Faculty of Electronics and Computer Technology and Engineering, Faculty of Electrical Technology and Engineering, Faculty of Mechanical Technology and Engineering, Faculty of Industrial and Manufacturing Technology and Engineering, Faculty of Information And Communications Technology and Faculty of Technology Management And Technopreneurship.\n\nUTeM’s graduate study programs present unique and challenging opportunities for both fresh graduates and professionals seeking to expand their expertise. These programs are designed to offer advanced knowledge across a range of engineering disciplines, ICT, and technology management, while also providing an in-depth focus on management, entrepreneurial skills, and the latest industry trends. The curriculum is structured in alignment with the Malaysian Qualification Agency (MQA) requirements, ensuring graduates are well-equipped with the technical, managerial, and entrepreneurial competencies needed to thrive in today’s rapidly evolving and competitive business landscape.\n\nAt UTeM, graduate students benefit from a wealth of expertise delivered by a highly trained faculty, many of whom hold PhDs and have extensive industry experience. The university is committed to fostering research and innovation, offering state-of-the-art equipment, machinery, and ICT facilities that support both academic learning and practical application. These resources create an ideal environment for students to engage in cutting-edge research and innovation within their chosen fields.\n\nThe university’s diverse student body, representing various cultural and ethnic backgrounds, creates a dynamic and inclusive learning atmosphere where collaboration and intercultural understanding flourish. The School of Graduate Studies plays an integral role in enhancing this global learning environment by organizing both educational and recreational activities that bring students together, fostering a sense of community and cooperation.\n\nWe invite you to explore our Postgraduate Prospectus, which provides detailed information on the graduate study opportunities available at UTeM, designed to cater to the ambitions of prospective students. For further details, please visit our website at www.utem.edu.my.\n\nBy joining UTeM, you will be part of a forward-thinking institution that is shaping the future of technical and professional education."
      },
      BM: {
        title: "Perutusan Dekan",
        name: "Prof. Dr. Masrullizam bin Mat Ibrahim",
        role: "Dekan, Pusat Pengajian Siswazah",
        summary: "Selamat datang ke Pusat Pengajian Siswazah (SPS) di Universiti Teknikal Malaysia Melaka (UTeM). Kami komited menyediakan persekitaran pascasiswazah yang menyokong kecemerlangan akademik, penyelidikan dan inovasi.",
        text: "Selamat datang ke Pusat Pengajian Siswazah (SPS) di Universiti Teknikal Malaysia Melaka (UTeM). Sebagai universiti teknikal terkemuka, kami komited untuk menyediakan persekitaran yang rancak dan merangsang intelektual bagi pelajar siswazah kami. Misi kami adalah untuk melahirkan pemimpin teknikal dan inovator yang dapat menyumbang secara signifikan kepada industri dan masyarakat global. Di SPS, kami menawarkan pelbagai program Sarjana dan PhD pengkhususan yang menggabungkan latihan akademik yang ketat dengan aplikasi penyelidikan praktikal. Kami menjemput anda untuk menyertai komuniti sarjana kami dan memulakan perjalanan penemuan dan kecemerlangan."
      }
    },
    overview: {
      EN: {
        title: "Overview",
        paragraphs: [
          "The School Of Graduate Studies (SGS) of Universiti Teknikal Malaysia Melaka (UTeM) was established to further enhance the contributions in the area of engineering, technology and management through rigorous and dedicated academic research. The research activities at UTeM are geared towards the combinations of applied industrial and academic excellence.",
          "SGS strives to provide higher degree education that is of high quality and relevant to the needs of the varied participants on the range of programmes offered. The ability to respond to participant’s need is facilitated by a programme structure, which permits the maximum flexibility consistent with the maintenance of academic requirements and standards with an emphasis on close professional relationships between staff and students within the Centre. It is part of an academic community, which prides itself on an outstanding services and facilities. In the spirit of supportive fraternity, all students, regardless of creed and background, benefit from the challenges and opportunities presented by such environment."
        ],
        bullets: [
          "To facilitate and manage the offering of the graduate programmes, which are innovative and relevant to the current and future market demands.",
          "To develop and enhance the quality of the graduate programmes for recognition and meeting the accreditation requirements.",
          "To become a one stop and leading centre for all information that relates to the graduate study programme at this university.",
          "To act as the catalyst to the development of the graduate studies programme and to be responsible in promoting the graduate studies programme.",
          "To increase the intake of the graduate students to the ratio of at least 10% of the total number of student enrolment through intensive activities and promotion, client-friendly procedures and attractive financial aid schemes.",
          "To make the graduate studies programme a major channel toward the increase of research and development activities.",
          "To become the main choice of students through the improvement of quality, infrastructure and conducive environment in UTeM graduate studies programme with international recognition and accreditation."
        ]
      },
      BM: {
        title: "Gambaran Keseluruhan",
        paragraphs: [
          "Pusat Pengajian Siswazah (SPS) di UTeM adalah hab pusat bagi semua aktiviti pascasiswazah. Kami mengurus dan menyelaraskan program akademik, inisiatif penyelidikan, dan perkhidmatan sokongan pelajar untuk komuniti pelajar siswazah tempatan dan antarabangsa kami yang semakin berkembang. Fokus kami adalah pada kecemerlangan teknikal, inovasi, dan kaitan industri, memastikan graduan kami dilengkapi dengan baik untuk cabaran dunia moden."
        ],
        bullets: []
      }
    },
    visionMission: [
      {
        id: 'vision',
        icon: Eye,
        title: { EN: 'Vision', BM: 'Visi' },
        text: {
          EN: 'To be a centre for postgraduate studies which excels nationally and recognized globally.',
          BM: 'Menjadi universiti teknikal terkemuka yang menerajui pendidikan siswazah dan kecemerlangan penyelidikan.'
        }
      },
      {
        id: 'mission',
        icon: Target,
        title: { EN: 'Mission', BM: 'Misi' },
        text: {
          EN: "To provide efficient, responsive, and effective post graduate academic services and management to fulfill client's expectations.",
          BM: 'Menyediakan program siswazah berkualiti tinggi dan persekitaran penyelidikan yang merangsang yang melahirkan pemimpin teknikal yang inovatif.'
        }
      }
    ],
    objectives: {
      EN: {
        title: "Objectives",
        items: [
          "To improve the graduate studies programmes by offering programmes, which are innovative and relevant to the current and future market demands.",
          "To develop and enhance the quality and accreditation of the graduates for recognition of accreditation from all parties.",
          "To gather and coordinate all graduate studies programmes by the faculties.",
          "To construct the graduate studies programme as the medium of expansion for the research and development activities with the emphasis on research and knowledge-generating programmes.",
          "To become a one stop and leading centre for all information that relates to the graduate study programme at this university.",
          "To act as the catalyst to the development of the graduate studies programme and to be responsible in promoting the graduate studies programme.",
          "To increase the intake of the graduate students to the ratio of at least 15% of the total number of students through intensive activities and promotion, client-friendly procedures and attractive aid schemes.",
          "To make the graduate studies programme a major channel toward the increase of research and development activities by placing emphasis on the research based and knowledge generating programmes.",
          "To develop excellence in selected graduate programmes by expanding the expertise of the academic staff and to build cooperation and collaboration with specific local and international institutions.",
          "To become the main choice of students through the improvement of quality, infrastructure and conducive environment in UTeM graduate studies programme with international recognition and accreditation."
        ]
      },
      BM: {
        title: "Objektif",
        items: [
          "Menyediakan program pascasiswazah berkualiti yang memenuhi keperluan industri.",
          "Melahirkan graduan yang kompeten, inovatif, dan beretika.",
          "Meningkatkan aktiviti penyelidikan dan inovasi dalam kalangan pelajar pascasiswazah.",
          "Menyediakan perkhidmatan sokongan yang cemerlang untuk pelajar pascasiswazah.",
          "Menjalin kerjasama strategik dengan institusi tempatan dan antarabangsa."
        ]
      }
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/images/homepages/About-us.jpeg" 
            alt="Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-4"
          >
            {content.hero[lang].title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 uppercase tracking-[0.3em] text-xs md:text-sm font-bold"
          >
            {content.hero[lang].subtitle}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Dean's Foreword */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start border-b border-gray-100">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="rounded-2xl shadow-2xl bg-white/60 min-h-[620px] w-full max-w-[520px] flex items-center justify-center p-6">
              <img 
                src="/images/about/Dean.png"
                alt="Dean" 
                className="w-full h-full object-contain grayscale-0 filter-none transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#A51C30] p-8 rounded-xl text-white shadow-xl max-w-xs">
              <Quote className="mb-4 opacity-50" size={32} />
              <p className="font-serif italic text-lg leading-relaxed">
                "Nurturing technical leaders for a global future."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#A51C30] mb-4">
                {content.foreword[lang].title}
              </h2>
              <h3 className="text-4xl font-serif text-gray-900 mb-2">
                {content.foreword[lang].name}
              </h3>
              <p className="text-gray-500 font-medium italic">
                {content.foreword[lang].role}
              </p>
            </div>
            <div className="max-w-3xl space-y-5 text-left">
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base font-light">
                {(isForewordExpanded ? content.foreword[lang].text : content.foreword[lang].summary).split('\n\n').map((para, idx) => (
                  <p key={idx}>
                    {para}
                  </p>
                ))}
              </div>
              <button
                type="button"
                aria-expanded={isForewordExpanded}
                onClick={() => setIsForewordExpanded((current) => !current)}
                className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#A51C30] transition-all duration-300 hover:text-[#7f1626] hover:underline underline-offset-4"
              >
                {isForewordExpanded
                  ? (lang === 'EN' ? 'Read Less' : 'Ringkaskan')
                  : (lang === 'EN' ? 'Read More' : 'Baca Lagi')}
              </button>
              <div className="pt-5">
                <div className="h-px w-32 bg-gray-200 mb-6" />
                <p className="font-serif text-base md:text-lg text-gray-400 italic leading-relaxed">
                  Prof. Dr. Masrullizam bin Mat Ibrahim
                  <br />
                  Dean,
                  <br />
                  School Of Graduate Studies
                  <br />
                  Universiti Teknikal Malaysia Melaka
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Overview */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#A51C30] text-left">
              {content.overview[lang].title}
            </h2>

            <div className="flex justify-center">
              <div className="max-w-4xl w-full rounded-2xl shadow-xl bg-white overflow-hidden border border-gray-100 flex items-center justify-center p-4">
                <img 
                  src="/images/about/Overview/Overview_pict.jpeg" 
                  alt="SGS overview" 
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base max-w-5xl">
              {content.overview[lang].paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {content.overview[lang].bullets.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ul className="space-y-3 list-disc list-outside text-gray-700 text-base">
                  {content.overview[lang].bullets.slice(0, 4).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <ul className="space-y-3 list-disc list-outside text-gray-700 text-base">
                  {content.overview[lang].bullets.slice(4).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-100">
          {content.visionMission.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-50 p-12 rounded-3xl space-y-6 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              <div className="w-16 h-16 bg-[#A51C30] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <item.icon size={32} />
              </div>
              <h3 className="text-3xl font-serif text-gray-900">
                {item.title[lang]}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.text[lang]}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Objectives */}
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#A51C30] mb-6">
                {content.objectives[lang].title}
              </h2>
              <h3 className="text-5xl font-serif text-gray-900 leading-tight">
                Our Strategic Goals
              </h3>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.objectives[lang].items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="mt-2 w-2 h-2 rounded-full bg-[#A51C30] group-hover:scale-150 transition-transform" />
                  <p className="text-gray-600 text-lg font-light leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
