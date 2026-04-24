import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import QuickAccess from './components/QuickAccess';
import TestimonialSection from './components/TestimonialSection';
import AdmissionJourney from './components/AdmissionJourney';
import AboutUs from './components/AboutUs';
import OrganizationalChart from './components/OrganizationalChart';
import PersonInCharge from './components/PersonInCharge';
import OrgChartByUnit from './components/OrgChartByUnit';
import StaffDirectory from './components/StaffDirectory';
import BestEmployee from './components/BestEmployee';
import Awards from './components/Awards';
import SGSBrochure from './components/SGSBrochure';
import FacultyBrochure from './components/FacultyBrochure';
import ProgrammesPage from './components/ProgrammesPage';
import FacultyProgrammes from './components/FacultyProgrammes';
import MasterTaught from './components/MasterTaught';
import MasterResearch from './components/MasterResearch';
import MasterMixed from './components/MasterMixed';
import DoctoralProgrammes from './components/DoctoralProgrammes';
import PostgraduateProgrammes from './components/PostgraduateProgrammes';
import ISODocuments from './components/ISODocuments';
import MQAStandards from './components/MQAStandards';
import ApplyNow from './components/ApplyNow';
import StudentInfoPage from './components/StudentInfoPage';
import UtemConvocationPage from './components/UtemConvocationPage';
import PictureGallery from './components/PictureGallery';
import Facilities from './components/Facilities';
import Resources from './components/Resources';
import CalendarPage from './components/Calendar';
import AcademicAwards from './components/AcademicAwards';
import Regulations from './components/Regulations';
import DocumentSystem from './components/DocumentSystem';
import AboutUPgrade from './components/AboutUPgrade';
import UPgradeProfession from './components/UPgradeProfession';
import SearchPage from './components/SearchPage';
import AnnouncementPopup from './components/AnnouncementPopup';
import RoomReservation from './components/RoomReservation';
import ScrollToTop from './components/ScrollToTop';
import PaymentProcedure from './components/PaymentProcedure';
import { Language } from './types';
import StudentResearchHub from './components/StudentResearchHub';
import ExaminationInfo from './components/ExaminationInfo';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M16.5 3c.33 2.25 1.68 3.86 3.95 4.02v3.11a7.3 7.3 0 0 1-3.89-1.18v5.78c0 3.72-2.43 6.27-5.84 6.27A5.53 5.53 0 0 1 5 15.42c0-3.35 2.72-5.82 6.18-5.54v3.24c-1.58-.24-2.92.66-2.92 2.21 0 1.34 1.02 2.32 2.38 2.32 1.51 0 2.42-.91 2.42-2.89V3h3.44Z" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M13.68 10.62 20.44 3h-1.6l-5.87 6.62L8.28 3H2.88l7.09 10.01L2.88 21h1.6l6.2-7 4.96 7h5.4l-7.36-10.38Zm-2.19 2.47-.72-1-5.71-7.87h2.45l4.61 6.35.72 1 6 8.27h-2.45l-4.9-6.75Z" />
  </svg>
);

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/MyUTeM/', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/utemofficial/', Icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@UTeMOfficial', Icon: Youtube },
  { label: 'Twitter (X)', href: 'https://twitter.com/vcutem', Icon: XIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@utemofficial', Icon: TikTokIcon },
];

const HomePage: React.FC<{ lang: Language }> = ({ lang }) => (
  <>
    {/* Page 01 */}
    <Hero lang={lang} />

    {/* Page 02 */}
    <InfoSection lang={lang} />
    
    {/* Page 03 - Moved here as requested */}
    <QuickAccess lang={lang} />
    
    <AdmissionJourney lang={lang} />
    <TestimonialSection lang={lang} />
  </>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLang(prev => prev === 'EN' ? 'BM' : 'EN');
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#eceae7]">
        <ScrollToTop />
        <Header lang={lang} onToggleLanguage={toggleLanguage} />
        <AnnouncementPopup lang={lang} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/about" element={<AboutUs lang={lang} />} />
            <Route path="/about/org-chart" element={<OrganizationalChart lang={lang} />} />
            <Route path="/about/staff" element={<PersonInCharge lang={lang} />} />
            <Route path="/about/org-chart-unit" element={<OrgChartByUnit lang={lang} />} />
            <Route path="/about/directory" element={<StaffDirectory lang={lang} />} />
            <Route path="/about/best-employee" element={<BestEmployee lang={lang} />} />
            <Route path="/about/awards" element={<Awards lang={lang} />} />
            <Route path="/student/brochure-sgs" element={<SGSBrochure lang={lang} />} />
            <Route path="/student/brochure-faculty" element={<FacultyBrochure lang={lang} />} />
            <Route path="/programmes" element={<ProgrammesPage lang={lang} />} />
             <Route path="/programmes/master-taught" element={<MasterTaught lang={lang} />} />
            <Route path="/programmes/master-research" element={<MasterResearch lang={lang} />} />
            <Route path="/programmes/master-mixed" element={<MasterMixed lang={lang} />} />
            <Route path="/programmes/doctoral" element={<DoctoralProgrammes lang={lang} />} />
            <Route path="/programmes/postgraduate" element={<PostgraduateProgrammes lang={lang} />} />
            <Route path="/programmes/faculty" element={<FacultyProgrammes lang={lang} />} />
            <Route path="/accreditation/mqa-standards" element={<MQAStandards lang={lang} />} />
            <Route path="/about/iso-documents" element={<ISODocuments lang={lang} />} />
            <Route path="/apply-now" element={<ApplyNow lang={lang} />} />
            <Route path="/student/student-info" element={<StudentInfoPage />} />
            <Route path="/student/examination-info" element={<ExaminationInfo lang={lang} />} />
            <Route path="/student/student-info/utem-convocation" element={<UtemConvocationPage lang={lang} />} />
            <Route path="/gallery" element={<PictureGallery lang={lang} />} />
            <Route path="/facilities" element={<Facilities lang={lang} />} />
            <Route path="/facilities/reservation" element={<RoomReservation lang={lang} />} />
            <Route path="/resources" element={<Resources lang={lang} />} />
            <Route path="/calendar" element={<CalendarPage lang={lang} />} />
            <Route path="/student/academic-awards" element={<AcademicAwards lang={lang} />} />
            <Route path="/regulations" element={<Regulations lang={lang} />} />
            <Route path="/search" element={<SearchPage lang={lang} />} />
            <Route path="/student/future/research" element={<StudentResearchHub />} />
            <Route path="/upgrade" element={<AboutUPgrade lang={lang} />} />
            <Route path="/upgrade/profession" element={<UPgradeProfession lang={lang} />} />
            <Route path="/programmes/payment-hub" element={<PaymentProcedure lang={lang} />} />
          
                        {/* Document System Pages */}
            <Route path="/resources/academic-forms" element={
              <DocumentSystem 
                lang={lang} 
                title={{ EN: 'Academic Forms', BM: 'Borang Akademik' }}
                subtitle={{ EN: 'Access official academic forms for postgraduate students.', BM: 'Akses borang akademik rasmi untuk pelajar pascasiswazah.' }}
                initialCategory="Academic"
              />
            } />
            <Route path="/resources/research-proposal" element={
              <DocumentSystem 
                lang={lang} 
                title={{ EN: 'Research Proposal Templates', BM: 'Templat Cadangan Penyelidikan' }}
                subtitle={{ EN: 'Standardized templates for research proposal submission.', BM: 'Templat standard untuk penyerahan cadangan penyelidikan.' }}
                initialCategory="Research Proposal"
              />
            } />
            <Route path="/resources/thesis-forms" element={
              <DocumentSystem 
                lang={lang} 
                title={{ EN: 'Thesis Forms & Templates', BM: 'Borang & Templat Tesis' }}
                subtitle={{ EN: 'Official forms and templates for thesis preparation and submission.', BM: 'Borang dan templat rasmi untuk penyediaan dan penyerahan tesis.' }}
                initialCategory="Thesis"
              />
            } />
            <Route path="/resources/financial-forms" element={
              <DocumentSystem 
                lang={lang} 
                title={{ EN: 'Financial Forms', BM: 'Borang Kewangan' }}
                subtitle={{ EN: 'Forms for financial assistance, claims, and funding applications.', BM: 'Borang untuk bantuan kewangan, tuntutan, dan permohonan pembiayaan.' }}
                initialCategory="Financial"
              />
            } />
            <Route path="/resources/iso-forms" element={
              <DocumentSystem 
                lang={lang} 
                title={{ EN: 'ISO Forms & Templates', BM: 'Borang & Templat ISO' }}
                subtitle={{ EN: 'Quality management system documentation and ISO compliance forms.', BM: 'Dokumen sistem pengurusan kualiti dan borang pematuhan ISO.' }}
                initialCategory="ISO"
              />
            } />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="relative overflow-hidden bg-[#1a1a1a] px-6 pt-16 pb-12 text-white border-t border-gray-800 sm:px-8">
          <div
            className="pointer-events-none absolute inset-0 bg-bottom bg-no-repeat opacity-[0.1]"
            style={{
              backgroundImage: "url('/images/homepages/bangunan_design.png')",
              backgroundSize: '68% auto',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.85fr)_minmax(170px,0.7fr)_minmax(220px,0.85fr)] lg:gap-12 xl:gap-14">
            <div className="space-y-4">
              <img
                src="/images/homepages/SPS logo.png"
                alt="School of Graduate Studies logo"
                className="h-14 w-auto object-contain sm:h-16"
              />
              <h3 className="font-serif text-3xl mb-3 text-[#A51C30]">CONTACT US</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-md">
                School of Graduate Studies<br />
                Universiti Teknikal Malaysia Melaka,<br />
                Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia
              </p>
              <p className="text-gray-500 text-sm italic">
                +606-229 2307 (Information Counter)<br />
                +606-229 2116 (Office Secretary)<br />
                +606-229 2416 (Fax)<br />
                sps@utem.edu.my
              </p>
            </div>
            <div className="hidden md:block" aria-hidden="true" />
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-gray-500 mb-1">Quick Access</h4>
              <a href="https://www.utem.edu.my/en/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">UTeM Website</a>
              <a href="https://sustainability.utem.edu.my/en/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">SDG UTeM</a>
              <a href="https://portal.utem.edu.my/admission/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Online Application</a>
              <a href="/calendar" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Academic Calendar</a>
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-gray-500 mb-1">Other Links</h4>
              <a href="https://www.mqa.gov.my/new/index.cfm#gsc.tab=0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Malaysia Qualification Agency (MQA)</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Majlis Perwakilan Pelajar (MPP UTeM)</a>
              <a href="https://portal.utem.edu.my/admission/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Online Application</a>
              <a href="/calendar" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Academic Calendar</a>
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto border-t border-gray-800/50 mt-10 pt-8 text-center">
            <h4 className="font-bold uppercase tracking-[0.25em] text-[11px] text-gray-400 mb-4">Connect with Us</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#A51C30] hover:bg-[#A51C30] hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto border-t border-gray-800/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase font-bold text-gray-600">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span>© 2026 School Of Graduate Studies, Universiti Teknikal Malaysia Melaka.</span>
              <span className="font-serif text-[10px] normal-case tracking-[0.2em] text-gray-500">Haziq Nazim</span>
            </div>
            <span className="mt-4 md:mt-0">Legacy of Technical Excellence</span>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
