import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import QuickAccess from './components/QuickAccess';
import TestimonialSection from './components/TestimonialSection';
import AdmissionJourney from './components/AdmissionJourney';
import SlidingFeatures from './components/SlidingFeatures';
import AboutUs from './components/AboutUs';
import OrganizationalChart from './components/OrganizationalChart';
import PersonInCharge from './components/PersonInCharge';
import OrgChartByUnit from './components/OrgChartByUnit';
import StaffDirectory from './components/StaffDirectory';
import BestEmployee from './components/BestEmployee';
import EnergySavingAward from './components/EnergySavingAward';
import SGSBrochure from './components/SGSBrochure';
import FacultyBrochure from './components/FacultyBrochure';
import ProgrammesPage from './components/ProgrammesPage';
import FacultyDashboard from './components/FacultyDashboard';
import FacultyProgrammes from './components/FacultyProgrammes';
import ISODocuments from './components/ISODocuments';
import MQAStandards from './components/MQAStandards';
import ApplyNow from './components/ApplyNow';
import StudentInfoPage from './components/StudentInfoPage';
import UtemConvocationPage from './components/UtemConvocationPage';
import PictureGallery from './components/PictureGallery';
import Facilities from './components/Facilities';
import Resources from './components/Resources';
import CalendarPage from './components/Calendar';
import Regulations from './components/Regulations';
import DocumentSystem from './components/DocumentSystem';
import AnnouncementPopup from './components/AnnouncementPopup';
import ScrollToTop from './components/ScrollToTop';
import { Language } from './types';
import StudentResearchHub from './components/StudentResearchHub';
import { Facebook, Instagram, Twitter } from 'lucide-react';

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
    <SlidingFeatures lang={lang} />
  </>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLang(prev => prev === 'EN' ? 'BM' : 'EN');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
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
            <Route path="/about/energy-award" element={<EnergySavingAward lang={lang} />} />
            <Route path="/student/brochure-sgs" element={<SGSBrochure lang={lang} />} />
            <Route path="/student/brochure-faculty" element={<FacultyBrochure lang={lang} />} />
            <Route path="/programmes" element={<ProgrammesPage lang={lang} />} />
            <Route path="/programmes/dashboard" element={<FacultyDashboard lang={lang} />} />
            <Route path="/programmes/faculty" element={<FacultyProgrammes lang={lang} />} />
            <Route path="/accreditation/mqa-standards" element={<MQAStandards lang={lang} />} />
            <Route path="/about/iso-documents" element={<ISODocuments lang={lang} />} />
            <Route path="/apply-now" element={<ApplyNow lang={lang} />} />
            <Route path="/student/student-info" element={<StudentInfoPage />} />
            <Route path="/student/student-info/utem-convocation" element={<UtemConvocationPage />} />
            <Route path="/gallery" element={<PictureGallery lang={lang} />} />
            <Route path="/facilities" element={<Facilities lang={lang} />} />
            <Route path="/resources" element={<Resources lang={lang} />} />
            <Route path="/calendar" element={<CalendarPage lang={lang} />} />
            <Route path="/regulations" element={<Regulations lang={lang} />} />
            <Route path="/student/future/research" element={<StudentResearchHub />} />
          
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
        <footer className="bg-[#1a1a1a] text-white py-24 px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <h3 className="font-serif text-3xl mb-4 text-[#A51C30]">CONTACT US</h3>
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
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-gray-500 mb-2">Quick Access</h4>
              <a href="https://www.utem.edu.my/en/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">UTeM Website</a>
              <a href="https://sustainability.utem.edu.my/en/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">SDG UTeM</a>
              <a href="https://portal.utem.edu.my/admission/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Online Application</a>
              <a href="/calendar" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Academic Calendar</a>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-gray-500 mb-2">Other Links</h4>
              <a href="https://www.mqa.gov.my/new/index.cfm#gsc.tab=0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Malaysia Qualification Agency (MQA)</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Majlis Perwakilan Pelajar (MPP UTeM)</a>
              <a href="https://portal.utem.edu.my/admission/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Online Application</a>
              <a href="/calendar" className="text-gray-300 hover:text-[#A51C30] transition-colors text-sm font-light">Academic Calendar</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-gray-800/50 mt-20 pt-10 flex flex-col md:row justify-between items-center text-[10px] tracking-widest uppercase font-bold text-gray-600">
            <span>© 2026 School Of Graduate Studies, Universiti Teknikal Malaysia Melaka.</span>
            <span className="mt-4 md:mt-0">Legacy of Technical Excellence</span>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
