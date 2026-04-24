import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2, ArrowRight, CheckCircle2, Mail, Phone, Globe2, MapPin } from 'lucide-react';
import { Language } from '../types';

interface MasterMixedProps {
  lang: Language;
}

type MixedFaculty = 'FTKE' | 'FTKM';

type CourseRow =
  | { type: 'section'; label: string }
  | { type: 'course'; subject: string; credit: string }
  | { type: 'total'; subject: string; credit: string };

const MasterMixed: React.FC<MasterMixedProps> = ({ lang }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<MixedFaculty>('FTKE');

  const mixedData: Record<MixedFaculty, {
    name: string;
    shortName: string;
    intro: string;
    focusAreas: string[];
    registration: { fullTime: string; partTime: string };
    programmes: { title: string; rows: CourseRow[] }[];
    contact: {
      address: string[];
      phone: string;
      email: string;
      website: string;
    };
  }> = {
    FTKE: {
      name: 'Faculty of Electrical Technology and Engineering',
      shortName: 'FTKE',
      intro: 'Faculty of Electrical Engineering offers one Mixed Mode programme:',
      focusAreas: ['Industrial Power'],
      registration: { fullTime: '2-3', partTime: '-' },
      programmes: [
        {
          title: 'Master of Electrical Engineering (Industrial Power)',
          rows: [
            { type: 'section', label: '1st Semester (Taught Courses)' },
            { type: 'course', subject: 'Research Methodology', credit: '3' },
            { type: 'course', subject: 'Power Quality & Energy Efficiency', credit: '3' },
            { type: 'course', subject: 'Advanced Control Systems', credit: '3' },
            { type: 'course', subject: 'Power System Modelling', credit: '3' },
            { type: 'section', label: '2nd Semester (Taught Courses)' },
            { type: 'course', subject: 'Engineering and Technology Management', credit: '3' },
            { type: 'course', subject: 'Power System Protection & Stability', credit: '3' },
            { type: 'course', subject: 'Power System Operation and Control', credit: '3' },
            { type: 'section', label: '3rd & 4th Semester (Research)' },
            { type: 'course', subject: 'Dissertation', credit: '21' },
            { type: 'total', subject: 'Total Credit Hours', credit: '42' },
          ],
        },
      ],
      contact: {
        address: [
          'Faculty of Electrical Technology and Engineering,',
          'Universiti Teknikal Malaysia Melaka (UTeM),',
          'Hang Tuah Jaya,',
          '76100 Durian Tunggal, Melaka, Malaysia.',
        ],
        phone: '+606-229 2117',
        email: 'ftke@utem.edu.my',
        website: 'https://ftke.utem.edu.my/index.php/en/',
      },
    },
    FTKM: {
      name: 'Faculty of Mechanical Technology and Engineering',
      shortName: 'FTKM',
      intro: 'Faculty of Mechanical Engineering offers three Mixed Mode programmes:',
      focusAreas: ['Applied Mechanics', 'Energy', 'Automotive'],
      registration: { fullTime: '2-3', partTime: '3-5' },
      programmes: [
        {
          title: 'Master of Mechanical Engineering (Energy)',
          rows: [
            { type: 'section', label: '1st Semester (Taught Courses)' },
            { type: 'course', subject: 'Engineering and Technology Management', credit: '3' },
            { type: 'course', subject: 'Mechanical System Design', credit: '3' },
            { type: 'course', subject: 'Engineering Modeling & Simulation', credit: '3' },
            { type: 'course', subject: 'Energy Management System', credit: '3' },
            { type: 'section', label: '2nd Semester (Taught Courses)' },
            { type: 'course', subject: 'Research Methodology', credit: '3' },
            { type: 'course', subject: 'Renewable Energy', credit: '3' },
            { type: 'course', subject: 'Energy Technology', credit: '3' },
            { type: 'section', label: '3rd & 4th Semester (Research)' },
            { type: 'course', subject: 'Dissertation', credit: '21' },
            { type: 'total', subject: 'Total Credit Hours', credit: '42' },
          ],
        },
        {
          title: 'Master of Mechanical Engineering (Applied Mechanics)',
          rows: [
            { type: 'section', label: '1st Semester (Taught Courses)' },
            { type: 'course', subject: 'Engineering and Technology Management', credit: '3' },
            { type: 'course', subject: 'Mechanical System Design', credit: '3' },
            { type: 'course', subject: 'Engineering Modeling & Simulation', credit: '3' },
            { type: 'course', subject: 'Advance Material Engineering', credit: '3' },
            { type: 'section', label: '2nd Semester (Taught Courses)' },
            { type: 'course', subject: 'Research Methodology', credit: '3' },
            { type: 'course', subject: 'Failure Mechanics', credit: '3' },
            { type: 'course', subject: 'Crashworthiness and Impact', credit: '3' },
            { type: 'section', label: '3rd & 4th Semester (Research)' },
            { type: 'course', subject: 'Dissertation', credit: '21' },
            { type: 'total', subject: 'Total Credit Hours', credit: '42' },
          ],
        },
        {
          title: 'Master of Mechanical Engineering (Automotive)',
          rows: [
            { type: 'section', label: '1st Semester (Taught Courses)' },
            { type: 'course', subject: 'Engineering and Technology Management', credit: '3' },
            { type: 'course', subject: 'Mechanical System Design', credit: '3' },
            { type: 'course', subject: 'Engineering Modeling & Simulation', credit: '3' },
            { type: 'course', subject: 'Advance Material Engineering', credit: '3' },
            { type: 'section', label: '2nd Semester (Taught Courses)' },
            { type: 'course', subject: 'Research Methodology', credit: '3' },
            { type: 'course', subject: 'Vehicle Power Train System', credit: '3' },
            { type: 'course', subject: 'Intelligent Vehicle Dynamics Control', credit: '3' },
            { type: 'section', label: '3rd & 4th Semester (Research)' },
            { type: 'course', subject: 'Dissertation', credit: '21' },
            { type: 'total', subject: 'Total Credit Hours', credit: '42' },
          ],
        },
      ],
      contact: {
        address: [
          'Faculty of Mechanical Technology and Engineering,',
          'Universiti Teknikal Malaysia Melaka (UTeM),',
          'Hang Tuah Jaya,',
          '76100 Durian Tunggal, Melaka, Malaysia.',
        ],
        phone: '+606-229 2119',
        email: 'ftkm@utem.edu.my',
        website: 'https://ftkm.utem.edu.my/',
      },
    },
  };

  const selectedData = mixedData[selectedFaculty];

  const renderProgrammeTable = (programme: typeof selectedData.programmes[number]) => (
    <div key={programme.title} className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]">
      <div className="border-b border-gray-100 bg-gray-50/50 p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight text-gray-900">
          {programme.title}
        </h3>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[680px] border-collapse border-spacing-0">
          <thead className="bg-[#D9EAD3]">
            <tr className="border-b-2 border-gray-800">
              <th className="border-r-2 border-gray-800 p-5 text-left text-[11px] font-bold uppercase tracking-widest text-gray-900">
                Subjects
              </th>
              <th className="w-40 p-5 text-center text-[11px] font-bold uppercase tracking-widest text-gray-900">
                Credit
              </th>
            </tr>
          </thead>
          <tbody>
            {programme.rows.map((row, index) => {
              if (row.type === 'section') {
                return (
                  <tr key={`${programme.title}-${index}`} className="border-b border-gray-800 bg-[#FFF2CC]/60">
                    <td colSpan={2} className="p-4 text-[11px] font-bold uppercase tracking-widest text-gray-900">
                      {row.label}
                    </td>
                  </tr>
                );
              }

              return (
                <tr
                  key={`${programme.title}-${index}`}
                  className={`${row.type === 'total' ? 'bg-[#A51C30]/5' : 'bg-white'} border-b border-gray-800 last:border-b-0`}
                >
                  <td className={`border-r-2 border-gray-800 p-5 text-sm text-gray-900 ${row.type === 'total' ? 'font-bold' : 'font-medium'}`}>
                    {row.subject}
                  </td>
                  <td className={`p-5 text-center text-sm font-bold font-mono ${row.type === 'total' ? 'text-[#A51C30]' : 'text-gray-900'}`}>
                    {row.credit}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <section className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#A51C30] transition-colors">HOME</Link>
            <ChevronRight size={10} />
            <Link to="/programmes" className="hover:text-[#A51C30] transition-colors">PROGRAMMES</Link>
            <ChevronRight size={10} />
            <span className="text-[#A51C30] font-bold">{lang === 'EN' ? 'MASTER BY MIXED MODE' : 'SARJANA MOD CAMPURAN'}</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              {lang === 'EN' ? 'Master by Mixed Mode' : 'Sarjana secara Mod Campuran'}
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              {lang === 'EN'
                ? 'Explore mixed-mode postgraduate programmes combining taught courses with supervised research and dissertation work.'
                : 'Terokai program pascasiswazah mod campuran yang menggabungkan kursus pengajaran dengan penyelidikan dan disertasi terselia.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Faculty Selection */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              {lang === 'EN' ? 'Select Faculty' : 'Pilih Fakulti'}
            </h3>
            <div className="space-y-4">
              {(['FTKE', 'FTKM'] as MixedFaculty[]).map((fac) => (
                <button
                  key={fac}
                  onClick={() => setSelectedFaculty(fac)}
                  className={`w-full text-left p-8 rounded-3xl border-2 transition-all duration-300 flex items-center justify-between group ${
                    selectedFaculty === fac
                      ? 'border-[#A51C30] bg-[#A51C30]/5 text-[#A51C30]'
                      : 'border-gray-100 hover:border-[#A51C30]/50 bg-white text-gray-500'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      selectedFaculty === fac ? 'bg-[#A51C30] text-white' : 'bg-gray-50 text-gray-400'
                    }`}>
                      <Building2 size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest mb-1">{fac}</span>
                      <span className={`text-xl font-serif font-bold ${selectedFaculty === fac ? 'text-gray-900' : ''}`}>
                        {mixedData[fac].name.replace('Faculty of ', '')}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={20} className={`transform transition-transform ${selectedFaculty === fac ? 'translate-x-1' : ''}`} />
                </button>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-gray-100 bg-gray-50 p-8">
              <h4 className="font-bold text-gray-900 text-sm mb-4">Mixed Mode Overview</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-light">
                <li className="flex items-start space-x-2">
                  <div className="mt-1 text-[#A51C30]"><CheckCircle2 size={14} /></div>
                  <span>Structured taught courses in the first study phase.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="mt-1 text-[#A51C30]"><CheckCircle2 size={14} /></div>
                  <span>Research dissertation component in later semesters.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="mt-1 text-[#A51C30]"><CheckCircle2 size={14} /></div>
                  <span>Total credit hours: 42.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Details Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFaculty}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div className="rounded-[2.5rem] border border-gray-100 bg-white p-10 lg:p-14 shadow-2xl shadow-gray-200/50">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A51C30]">
                    {selectedData.shortName}
                  </p>
                  <h2 className="mb-6 font-serif text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                    {selectedData.name.toUpperCase()}
                  </h2>
                  <p className="mb-8 text-lg font-light leading-relaxed text-gray-600">
                    {selectedData.intro}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedData.focusAreas.map((area) => (
                      <span key={area} className="rounded-full border border-[#A51C30]/10 bg-[#A51C30]/5 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#A51C30]">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]">
                  <div className="border-b border-gray-100 bg-gray-50/50 p-6 md:p-8">
                    <h3 className="font-serif text-2xl font-bold text-gray-900">Programme Structure</h3>
                  </div>
                  <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full min-w-[560px] border-collapse border-spacing-0">
                      <thead className="bg-[#D9EAD3]">
                        <tr className="border-b-2 border-gray-800">
                          <th className="border-r-2 border-gray-800 p-5 text-left text-[11px] font-bold uppercase tracking-widest text-gray-900">
                            Mode of Registration
                          </th>
                          <th className="border-r-2 border-gray-800 p-5 text-center text-[11px] font-bold uppercase tracking-widest text-gray-900">
                            Full Time
                          </th>
                          <th className="p-5 text-center text-[11px] font-bold uppercase tracking-widest text-gray-900">
                            Part Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border-r-2 border-gray-800 p-5 text-sm font-bold text-gray-900">Duration (years)</td>
                          <td className="border-r-2 border-gray-800 p-5 text-center text-sm font-bold text-gray-900 font-mono">{selectedData.registration.fullTime}</td>
                          <td className="p-5 text-center text-sm font-bold text-gray-900 font-mono">{selectedData.registration.partTime}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-10">
                  {selectedData.programmes.map(renderProgrammeTable)}
                </div>

                <div className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
                  <h3 className="mb-6 font-serif text-2xl font-bold text-gray-900">For Further Information</h3>
                  <div className="grid gap-6 text-sm text-gray-600 md:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#A51C30]" />
                      <p className="font-light leading-relaxed">{selectedData.contact.address.map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</p>
                    </div>
                    <div className="space-y-4">
                      <a href={`tel:${selectedData.contact.phone}`} className="flex items-center gap-4 hover:text-[#A51C30] transition-colors">
                        <Phone className="h-5 w-5 text-[#A51C30]" />
                        <span>{selectedData.contact.phone}</span>
                      </a>
                      <a href={`mailto:${selectedData.contact.email}`} className="flex items-center gap-4 hover:text-[#A51C30] transition-colors">
                        <Mail className="h-5 w-5 text-[#A51C30]" />
                        <span>{selectedData.contact.email}</span>
                      </a>
                      <a href={selectedData.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#A51C30] transition-colors">
                        <Globe2 className="h-5 w-5 text-[#A51C30]" />
                        <span>{selectedData.contact.website}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterMixed;
