
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Rocket, 
  Award, 
  Users, 
  FileText, 
  Download, 
  Maximize2, 
  X, 
  ChevronDown,
  Lightbulb,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { Language } from '../types';

interface AboutUPgradeProps {
  lang: Language;
}

type TabId = 'vision' | 'objective' | 'motto' | 'certificate' | 'org-chart';

const AboutUPgrade: React.FC<AboutUPgradeProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<TabId>('vision');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);
  const [openAccordions, setOpenAccordions] = useState<TabId[]>(['vision']);
  const upgradeLogo = '/images/UPgrade/logo_UPgrade.jpeg';
  const certificateImage = '/images/UPgrade/Cert.jpeg';
  const orgChartImage = '/images/UPgrade/upgrade_org.jpeg';
  const toggleAccordion = (id: TabId) => {
    if (openAccordions.includes(id)) {
      setOpenAccordions(openAccordions.filter(a => a !== id));
    } else {
      setOpenAccordions([...openAccordions, id]);
    }
  };

  const tabs = [
    { id: 'vision', label: { EN: 'Vision & Mission', BM: 'Visi & Misi' } },
    { id: 'objective', label: { EN: 'Objective', BM: 'Objektif' } },
    { id: 'motto', label: { EN: 'Overview Motto', BM: 'Moto Keseluruhan' } },
    { id: 'certificate', label: { EN: 'Registration Certificate', BM: 'Sijil Pendaftaran' } },
    { id: 'org-chart', label: { EN: 'Organizational Chart', BM: 'Carta Organisasi' } },
  ];

  const openModal = (src: string, title: string) => {
    setModalImage({ src, title });
    setIsModalOpen(true);
  };

  const content = {
    EN: {
      hero: {
        title: "UTeM Postgraduate Association (UPgrade)",
        subtitle: "Official Postgraduate Student Association of the School of Graduate Studies"
      },
      vision: {
        title: "Vision",
        text: "To be the most competitive and admired postgraduate association in Malaysia.",
        missionTitle: "Mission",
        missionItems: [
          "Provide publishing support platform",
          "Organize motivational programs",
          "Support Graduate On Time (GOT)",
          "Promote university through conferences, forums, industrial visits and MoU collaborations"
        ]
      },
      objectives: [
        { icon: <Target className="w-6 h-6" />, text: "To foster a spirit of cooperation and intellectual growth among postgraduate students." },
        { icon: <Zap className="w-6 h-6" />, text: "To act as a bridge between students and the university administration." },
        { icon: <Globe className="w-6 h-6" />, text: "To enhance the visibility of UTeM research at national and international levels." },
        { icon: <ShieldCheck className="w-6 h-6" />, text: "To uphold the welfare and academic rights of all postgraduate members." }
      ],
      motto: "STRIVE TOGETHER",
      certificate: {
        title: "Registration Certificate",
        viewBtn: "View Full Size",
        downloadBtn: "Download Certificate"
      },
      orgChart: {
        title: "Organizational Chart",
        caption: "UPgrade Organizational Structure 2024",
        downloadBtn: "Download Chart"
      }
    },
    BM: {
      hero: {
        title: "Persatuan Pascasiswazah UTeM (UPgrade)",
        subtitle: "Persatuan Pelajar Pascasiswazah Rasmi Sekolah Pengajian Siswazah"
      },
      vision: {
        title: "Visi",
        text: "Menjadi persatuan pascasiswazah yang paling kompetitif dan dikagumi di Malaysia.",
        missionTitle: "Misi",
        missionItems: [
          "Menyediakan platform sokongan penerbitan",
          "Menganjurkan program motivasi",
          "Menyokong Graduasi Tepat Pada Masanya (GOT)",
          "Mempromosikan universiti melalui persidangan, forum, lawatan industri dan kerjasama MoU"
        ]
      },
      objectives: [
        { icon: <Target className="w-6 h-6" />, text: "Memupuk semangat kerjasama dan pertumbuhan intelek dalam kalangan pelajar pascasiswazah." },
        { icon: <Zap className="w-6 h-6" />, text: "Bertindak sebagai jambatan antara pelajar dan pentadbiran universiti." },
        { icon: <Globe className="w-6 h-6" />, text: "Meningkatkan keterlihatan penyelidikan UTeM di peringkat kebangsaan dan antarabangsa." },
        { icon: <ShieldCheck className="w-6 h-6" />, text: "Mempertahankan kebajikan dan hak akademik semua ahli pascasiswazah." }
      ],
      motto: "STRIVE TOGETHER",
      certificate: {
        title: "Sijil Pendaftaran",
        viewBtn: "Lihat Saiz Penuh",
        downloadBtn: "Muat Turun Sijil"
      },
      orgChart: {
        title: "Carta Organisasi",
        caption: "Struktur Organisasi UPgrade 2024",
        downloadBtn: "Muat Turun Carta"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
            alt="Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#0a0a0a]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/10 overflow-hidden">
              <img
                src={upgradeLogo}
                alt="UPgrade logo"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation / Accordion */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1000px] mx-auto px-8">
          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-between">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`py-6 px-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative ${
                  activeTab === tab.id ? 'text-[#A51C30]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.label[lang]}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#A51C30]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-[1000px] mx-auto px-8 py-20">
        {/* Vision & Mission Section */}
        <div className="mb-8 md:mb-0">
          <button 
            onClick={() => toggleAccordion('vision')}
            className="w-full md:hidden py-6 border-b border-gray-100 flex justify-between items-center group"
          >
            <h3 className={`font-bold uppercase tracking-widest transition-colors ${openAccordions.includes('vision') ? 'text-[#A51C30]' : 'text-gray-400 group-hover:text-gray-600'}`}>
              {tabs[0].label[lang]}
            </h3>
            <ChevronDown className={`w-5 h-5 transition-transform ${openAccordions.includes('vision') ? 'rotate-180 text-[#A51C30]' : 'text-gray-300'}`} />
          </button>

          <AnimatePresence mode="wait">
            {(activeTab === 'vision' || openAccordions.includes('vision')) && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`overflow-hidden ${activeTab !== 'vision' ? 'md:hidden' : ''} ${!openAccordions.includes('vision') ? 'hidden md:block' : ''}`}
              >
                <div className="py-12 md:py-0">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-[#A51C30]/5 rounded-xl flex items-center justify-center text-[#A51C30]">
                          <Lightbulb className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900">{t.vision.title}</h2>
                      </div>
                      <p className="text-xl text-gray-600 font-light leading-relaxed italic">
                        "{t.vision.text}"
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-[#A51C30]/5 rounded-xl flex items-center justify-center text-[#A51C30]">
                          <Rocket className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900">{t.vision.missionTitle}</h2>
                      </div>
                      <ul className="space-y-4">
                        {t.vision.missionItems.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-4 group">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A51C30] group-hover:scale-150 transition-transform" />
                            <span className="text-gray-600 font-light leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Objective Section */}
        <div className="mb-8 md:mb-0">
          <button 
            onClick={() => toggleAccordion('objective')}
            className="w-full md:hidden py-6 border-b border-gray-100 flex justify-between items-center group"
          >
            <h3 className={`font-bold uppercase tracking-widest transition-colors ${openAccordions.includes('objective') ? 'text-[#A51C30]' : 'text-gray-400 group-hover:text-gray-600'}`}>
              {tabs[1].label[lang]}
            </h3>
            <ChevronDown className={`w-5 h-5 transition-transform ${openAccordions.includes('objective') ? 'rotate-180 text-[#A51C30]' : 'text-gray-300'}`} />
          </button>

          <AnimatePresence mode="wait">
            {(activeTab === 'objective' || openAccordions.includes('objective')) && (
              <motion.div
                key="objective"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`overflow-hidden ${activeTab !== 'objective' ? 'md:hidden' : ''} ${!openAccordions.includes('objective') ? 'hidden md:block' : ''}`}
              >
                <div className="py-12 md:py-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {t.objectives.map((obj, idx) => (
                      <div key={idx} className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-500 group">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#A51C30] mb-6 shadow-sm group-hover:bg-[#A51C30] group-hover:text-white transition-colors">
                          {obj.icon}
                        </div>
                        <p className="text-gray-700 font-light leading-relaxed">
                          {obj.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Motto Section */}
        <div className="mb-8 md:mb-0">
          <button 
            onClick={() => toggleAccordion('motto')}
            className="w-full md:hidden py-6 border-b border-gray-100 flex justify-between items-center group"
          >
            <h3 className={`font-bold uppercase tracking-widest transition-colors ${openAccordions.includes('motto') ? 'text-[#A51C30]' : 'text-gray-400 group-hover:text-gray-600'}`}>
              {tabs[2].label[lang]}
            </h3>
            <ChevronDown className={`w-5 h-5 transition-transform ${openAccordions.includes('motto') ? 'rotate-180 text-[#A51C30]' : 'text-gray-300'}`} />
          </button>

          <AnimatePresence mode="wait">
            {(activeTab === 'motto' || openAccordions.includes('motto')) && (
              <motion.div
                key="motto"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`overflow-hidden ${activeTab !== 'motto' ? 'md:hidden' : ''} ${!openAccordions.includes('motto') ? 'hidden md:block' : ''}`}
              >
                <div className="py-12 md:py-0">
                  <div className="py-24 px-8 bg-[#A51C30]/5 rounded-[3rem] text-center border border-[#A51C30]/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A51C30] mb-8 block">Association Motto</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#A51C30] tracking-widest">
                      {t.motto}
                    </h2>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Certificate Section */}
        <div className="mb-8 md:mb-0">
          <button 
            onClick={() => toggleAccordion('certificate')}
            className="w-full md:hidden py-6 border-b border-gray-100 flex justify-between items-center group"
          >
            <h3 className={`font-bold uppercase tracking-widest transition-colors ${openAccordions.includes('certificate') ? 'text-[#A51C30]' : 'text-gray-400 group-hover:text-gray-600'}`}>
              {tabs[3].label[lang]}
            </h3>
            <ChevronDown className={`w-5 h-5 transition-transform ${openAccordions.includes('certificate') ? 'rotate-180 text-[#A51C30]' : 'text-gray-300'}`} />
          </button>

          <AnimatePresence mode="wait">
            {(activeTab === 'certificate' || openAccordions.includes('certificate')) && (
              <motion.div
                key="certificate"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`overflow-hidden ${activeTab !== 'certificate' ? 'md:hidden' : ''} ${!openAccordions.includes('certificate') ? 'hidden md:block' : ''}`}
              >
                <div className="py-12 md:py-0">
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 group relative overflow-hidden">
                      <img 
                        src={certificateImage}
                        alt="Certificate" 
                        className="w-full h-auto rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          onClick={() => openModal(certificateImage, t.certificate.title)}
                          className="p-4 bg-white rounded-full text-[#A51C30] shadow-xl transform scale-75 group-hover:scale-100 transition-transform"
                        >
                          <Maximize2 size={24} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={() => openModal(certificateImage, t.certificate.title)}
                        className="flex items-center justify-center space-x-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold tracking-widest uppercase text-[10px] hover:bg-gray-800 transition-all"
                      >
                        <Maximize2 size={16} />
                        <span>{t.certificate.viewBtn}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Org Chart Section */}
        <div className="mb-8 md:mb-0">
          <button 
            onClick={() => toggleAccordion('org-chart')}
            className="w-full md:hidden py-6 border-b border-gray-100 flex justify-between items-center group"
          >
            <h3 className={`font-bold uppercase tracking-widest transition-colors ${openAccordions.includes('org-chart') ? 'text-[#A51C30]' : 'text-gray-400 group-hover:text-gray-600'}`}>
              {tabs[4].label[lang]}
            </h3>
            <ChevronDown className={`w-5 h-5 transition-transform ${openAccordions.includes('org-chart') ? 'rotate-180 text-[#A51C30]' : 'text-gray-300'}`} />
          </button>

          <AnimatePresence mode="wait">
            {(activeTab === 'org-chart' || openAccordions.includes('org-chart')) && (
              <motion.div
                key="org-chart"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`overflow-hidden ${activeTab !== 'org-chart' ? 'md:hidden' : ''} ${!openAccordions.includes('org-chart') ? 'hidden md:block' : ''}`}
              >
                <div className="py-12 md:py-0">
                  <div className="space-y-12">
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group relative">
                      <img 
                        src={orgChartImage}
                        alt="Organizational Chart" 
                        className="w-full h-auto rounded-xl block"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                        <button 
                          onClick={() => openModal(orgChartImage, t.orgChart.title)}
                          className="p-4 bg-white rounded-full text-[#A51C30] shadow-xl"
                        >
                          <Maximize2 size={24} />
                        </button>
                      </div>
                    </div>

                    <div className="text-center space-y-6">
                      <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400">
                        {t.orgChart.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && modalImage && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-auto max-w-[92vw] max-h-[92vh] flex flex-col items-center"
            >
              <div className="absolute -top-12 right-0 flex items-center space-x-6">
                <span className="text-white text-xs font-bold uppercase tracking-widest">{modalImage.title}</span>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-[#A51C30] transition-colors"
                >
                  <X size={32} />
                </button>
              </div>
              <img 
                src={modalImage.src} 
                alt="Full Size" 
                className="block max-w-[92vw] max-h-[88vh] w-auto h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUPgrade;
