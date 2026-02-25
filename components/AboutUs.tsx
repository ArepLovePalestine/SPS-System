
import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, BookOpen, Quote } from 'lucide-react';
import { Language } from '../types';

interface AboutUsProps {
  lang: Language;
}

const AboutUs: React.FC<AboutUsProps> = ({ lang }) => {
  const content = {
    hero: {
      EN: { title: 'About Us', subtitle: 'Excellence in Graduate Education' },
      BM: { title: 'Tentang Kami', subtitle: 'Kecemerlangan dalam Pendidikan Siswazah' }
    },
    foreword: {
      EN: {
        title: "Dean's Foreword",
        name: "Prof. Ir. Dr. Mohd Rizal bin Alkahari",
        role: "Dean, School of Graduate Studies",
        text: "Welcome to the School of Graduate Studies (SPS) at Universiti Teknikal Malaysia Melaka (UTeM). As a premier technical university, we are committed to providing a vibrant and intellectually stimulating environment for our graduate students. Our mission is to nurture technical leaders and innovators who can contribute significantly to the global industry and society. At SPS, we offer a wide range of specialized Master and PhD programs that combine rigorous academic training with practical research applications. We invite you to join our community of scholars and embark on a journey of discovery and excellence."
      },
      BM: {
        title: "Perutusan Dekan",
        name: "Prof. Ir. Dr. Mohd Rizal bin Alkahari",
        role: "Dekan, Pusat Pengajian Siswazah",
        text: "Selamat datang ke Pusat Pengajian Siswazah (SPS) di Universiti Teknikal Malaysia Melaka (UTeM). Sebagai universiti teknikal terkemuka, kami komited untuk menyediakan persekitaran yang rancak dan merangsang intelektual bagi pelajar siswazah kami. Misi kami adalah untuk melahirkan pemimpin teknikal dan inovator yang dapat menyumbang secara signifikan kepada industri dan masyarakat global. Di SPS, kami menawarkan pelbagai program Sarjana dan PhD pengkhususan yang menggabungkan latihan akademik yang ketat dengan aplikasi penyelidikan praktikal. Kami menjemput anda untuk menyertai komuniti sarjana kami dan memulakan perjalanan penemuan dan kecemerlangan."
      }
    },
    overview: {
      EN: {
        title: "Overview",
        text: "The School of Graduate Studies (SPS) at UTeM is the central hub for all postgraduate activities. We manage and coordinate academic programs, research initiatives, and student support services for our growing community of local and international graduate students. Our focus is on technical excellence, innovation, and industry relevance, ensuring that our graduates are well-equipped for the challenges of the modern world."
      },
      BM: {
        title: "Gambaran Keseluruhan",
        text: "Pusat Pengajian Siswazah (SPS) di UTeM adalah hab pusat bagi semua aktiviti pascasiswazah. Kami mengurus dan menyelaraskan program akademik, inisiatif penyelidikan, dan perkhidmatan sokongan pelajar untuk komuniti pelajar siswazah tempatan dan antarabangsa kami yang semakin berkembang. Fokus kami adalah pada kecemerlangan teknikal, inovasi, dan kaitan industri, memastikan graduan kami dilengkapi dengan baik untuk cabaran dunia moden."
      }
    },
    visionMission: [
      {
        id: 'vision',
        icon: Eye,
        title: { EN: 'Vision', BM: 'Visi' },
        text: {
          EN: 'To be a premier technical university that leads in graduate education and research excellence.',
          BM: 'Menjadi universiti teknikal terkemuka yang menerajui pendidikan siswazah dan kecemerlangan penyelidikan.'
        }
      },
      {
        id: 'mission',
        icon: Target,
        title: { EN: 'Mission', BM: 'Misi' },
        text: {
          EN: 'To provide high-quality graduate programs and a stimulating research environment that produces innovative technical leaders.',
          BM: 'Menyediakan program siswazah berkualiti tinggi dan persekitaran penyelidikan yang merangsang yang melahirkan pemimpin teknikal yang inovatif.'
        }
      }
    ],
    objectives: {
      EN: {
        title: "Objectives",
        items: [
          "To provide quality postgraduate programs that meet the needs of the industry.",
          "To produce graduates who are competent, innovative, and ethical.",
          "To enhance research and innovation activities among postgraduate students.",
          "To provide excellent support services for postgraduate students.",
          "To establish strategic partnerships with local and international institutions."
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
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
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
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-100">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Dean" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
            className="space-y-8"
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
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              {content.foreword[lang].text}
            </p>
            <div className="pt-4">
              <div className="h-px w-24 bg-gray-200 mb-6" />
              <p className="font-serif text-xl text-gray-400 italic">Mohd Rizal</p>
            </div>
          </motion.div>
        </section>

        {/* Overview */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#A51C30]">
              {content.overview[lang].title}
            </h2>
            <p className="text-3xl font-serif text-gray-900 leading-snug">
              {content.overview[lang].text}
            </p>
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
