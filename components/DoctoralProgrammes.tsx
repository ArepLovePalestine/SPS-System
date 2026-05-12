import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Cpu, GraduationCap, Settings, LineChart, Mail, Phone, Globe } from 'lucide-react';
import { Language } from '../types';
const DEngPlanImage = '/images/pages/Postgraduate Program/Doctoral/deng.png';
const DEngCourseworkImage = '/images/pages/Postgraduate Program/Doctoral/deng_cw.png';

interface DoctoralProgrammesProps {
  lang: Language;
}

interface ContactItem {
  title: string;
  phone: string;
  email: string;
  website: string;
}

interface StructureRow {
  subject: string;
  credit: string;
}

interface PlanRow {
  phase: string;
  year1Sem1?: string;
  year1Sem2?: string;
  year2Sem1?: string;
  year2Sem2?: string;
  year3Sem1?: string;
  year3Sem2?: string;
  year4Sem1?: string;
  year4Sem2?: string;
  total: string;
}

const phdContacts: ContactItem[] = [
  {
    title: 'School for Graduate Studies',
    phone: '+606-229 2116',
    email: 'sps@utem.edu.my',
    website: 'https://sps.utem.edu.my/',
  },
  {
    title: 'Faculty of Electrical Technology and Engineering',
    phone: '+606-229 2117',
    email: 'ftke@utem.edu.my',
    website: 'https://ftke.utem.edu.my/index.php/en/',
  },
  {
    title: 'Faculty of Electronics and Computer Technology and Engineering',
    phone: '+606-229 2118',
    email: 'ftkek@utem.edu.my',
    website: 'https://ftkek.utem.edu.my/',
  },
  {
    title: 'Faculty of Industrial and Manufacturing Technology and Engineering',
    phone: '+606-229 2120',
    email: 'ftkip@utem.edu.my',
    website: 'https://ftkip.utem.edu.my/',
  },
  {
    title: 'Faculty of Mechanical Technology and Engineering',
    phone: '+606-229 2119',
    email: 'ftkm@utem.edu.my',
    website: 'https://ftkm.utem.edu.my/',
  },
  {
    title: 'Faculty of Information and Communication Technology',
    phone: '+606-229 2121',
    email: 'ftmk@utem.edu.my',
    website: 'https://ftmk.utem.edu.my/web/',
  },
  {
    title: 'Faculty of Technology Management and Technopreneurship',
    phone: '+606-229 2122',
    email: 'fptt@utem.edu.my',
    website: 'https://fptt.utem.edu.my/',
  },
  {
    title: 'Institute of Technology Management and Entrepreneurship',
    phone: '+606-229 2123',
    email: 'iptk@utem.edu.my',
    website: 'https://iptk.utem.edu.my/',
  },
];

const phdStructure: StructureRow[] = [
  { subject: 'Compulsory Subject : Research Methodology', credit: '3' },
  { subject: 'Thesis', credit: '87' },
  { subject: 'Total Credit Hours', credit: '90' },
];

const dtmPlan: PlanRow[] = [
  {
    phase: 'Coursework',
    year1Sem1: '15 credits',
    year1Sem2: '15 credits',
    year2Sem1: '15 credits',
    year2Sem2: '3 credits',
    total: '48 credits',
  },
  {
    phase: 'Research Preparation',
    year2Sem2: '10 credits',
    total: '10 credits',
  },
  {
    phase: 'Research',
    year3Sem1: '13 credits',
    year3Sem2: '12 credits',
    total: '25 credits',
  },
  {
    phase: 'Total',
    total: '83 credits',
  },
];

const ditPlan: PlanRow[] = [
  {
    phase: 'P1: Coursework',
    year1Sem1: '9 credits',
    year1Sem2: '12 credits',
    total: '21 credits',
  },
  {
    phase: 'P2: Research Preparation',
    year2Sem1: '14 credits',
    total: '14 credits',
  },
  {
    phase: 'P3: Research',
    year2Sem2: '14 credits',
    year3Sem1: '14 credits',
    year3Sem2: '14 credits',
    year4Sem1: '14 credits',
    total: '56 credits',
  },
  {
    phase: 'Total',
    total: '91 credits',
  },
];

const sectionCard =
  'rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:p-8';

const ProgrammeHeader: React.FC<{
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  title: string;
  subtitle: string;
}> = ({ icon: Icon, color, title, subtitle }) => (
  <div className="mb-8 flex flex-col gap-5 border-b border-gray-100 pb-6 md:flex-row md:items-end md:justify-between">
    <div className="flex items-start gap-4">
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
        <Icon size={28} />
      </span>
      <div>
        <h2 className="font-serif text-3xl text-gray-950 md:text-4xl">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">{subtitle}</p>
      </div>
    </div>
  </div>
);

const InfoTable: React.FC<{
  headers: string[];
  rows: string[][];
}> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-[1.5rem] border border-gray-200">
    <table className="min-w-full border-collapse bg-white text-left">
      <thead className="bg-[#f6efe7]">
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500 md:px-5"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={`${row[0]}-${idx}`} className="border-t border-gray-100">
            {row.map((cell, cellIdx) => (
              <td
                key={`${cell}-${cellIdx}`}
                className={`px-4 py-3 text-sm leading-6 text-gray-700 md:px-5 ${
                  cellIdx === row.length - 1 ? 'font-semibold text-gray-900' : ''
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ContactGrid: React.FC<{ contacts: ContactItem[] }> = ({ contacts }) => (
  <div className="grid gap-5 md:grid-cols-2">
    {contacts.map((contact) => (
      <div key={contact.title} className="rounded-[1.5rem] border border-gray-200 bg-[#faf8f4] p-5">
        <h4 className="font-serif text-xl text-gray-950">{contact.title}</h4>
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <Phone size={15} className="text-[#A51C30]" />
            <span>{contact.phone}</span>
          </p>
          <p className="flex items-center gap-2 break-all">
            <Mail size={15} className="text-[#A51C30]" />
            <span>{contact.email}</span>
          </p>
          <p className="flex items-center gap-2 break-all">
            <Globe size={15} className="text-[#A51C30]" />
            <a href={contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#A51C30]">
              {contact.website}
            </a>
          </p>
        </div>
      </div>
    ))}
  </div>
);

const DoctoralProgrammes: React.FC<DoctoralProgrammesProps> = ({ lang }) => {
  const [openProgramme, setOpenProgramme] = useState<'phd' | 'deng' | 'dtm' | 'dit' | null>(null);

  const toggleProgramme = (programme: 'phd' | 'deng' | 'dtm' | 'dit') => {
    setOpenProgramme((current) => (current === programme ? null : programme));
  };

  return (
    <div className="min-h-screen bg-white pb-20 pt-24">
      <section className="relative overflow-hidden border-b border-gray-100 bg-[#fbf8f3] py-16">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">
              HOME
            </Link>
            <ChevronRight size={10} />
            <Link to="/programmes" className="transition-colors hover:text-[#A51C30]">
              PROGRAMMES
            </Link>
            <ChevronRight size={10} />
            <span className="text-[#A51C30]">DOCTORAL PROGRAMMES</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <h1 className="font-serif text-4xl text-gray-950 md:text-6xl">Doctoral Programmes</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              {lang === 'EN'
                ? 'Explore advanced doctoral pathways designed for original research, industry-focused scholarship, and high-level professional development.'
                : 'Terokai laluan doktoral lanjutan yang direka untuk penyelidikan asli, kesarjanaan berfokus industri, dan pembangunan profesional peringkat tinggi.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl space-y-10 px-6 sm:px-8 lg:px-12">
        <article className={`${sectionCard} programme-card ${openProgramme === 'phd' ? 'active' : ''}`}>
          <button
            type="button"
            onClick={() => toggleProgramme('phd')}
            className="programme-header flex w-full cursor-pointer items-start justify-between gap-4 border-b border-gray-100 pb-6 text-left"
            aria-expanded={openProgramme === 'phd'}
          >
            <div className="flex min-w-0 flex-1 items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <GraduationCap size={28} />
              </span>
              <div>
                <h2 className="font-serif text-3xl text-gray-950 md:text-4xl">Doctor of Philosophy (PhD)</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                  Research-based doctoral study across engineering, technology, ICT, and management-related
                  disciplines.
                </p>
              </div>
            </div>
            <span
              className={`arrow mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform duration-300 ${
                openProgramme === 'phd' ? 'rotate-180 text-[#A51C30]' : ''
              }`}
            >
              <ChevronDown size={18} />
            </span>
          </button>

          <div
            className={`programme-content overflow-hidden transition-all duration-300 ease-in-out ${
              openProgramme === 'phd' ? 'mt-4 max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-8 pt-2">
            <div className="space-y-4 text-sm leading-8 text-gray-600 md:text-base">
              <p>
                The Doctoral candidate by research is supervised by an academic staff (or a panel of supervisors) from
                the faculty. The directed research work will focus on a particular subject that introduces candidate to
                the processes by which new knowledge is developed or/and applied accordingly.
              </p>
              <p>
                The specific topic of investigation will be agreed upon by the supervisor (or panel of supervisors) and
                the candidate. The academic progress of a candidate is assessed through a research. Progress report is
                submitted at the end of each semester.
              </p>
              <p>
                The degree is awarded based on an oral examination (viva-voce) of the thesis submitted by the
                candidate on completion of the study. Candidates intending to study by research may submit their
                application for admission throughout the year.
              </p>
            </div>

            <InfoTable
              headers={['Mode of Registration', 'Full Time', 'Part Time*']}
              rows={[['Duration (years)', '3 - 8', '4 - 8'], ['Note', '-', '*Not applicable for International applicant(s)']]}
            />

            <div>
              <h3 className="mb-4 font-serif text-2xl text-gray-950">Programme Structure</h3>
              <InfoTable
                headers={['Subjects', 'Credit Hours']}
                rows={phdStructure.map((row) => [row.subject, row.credit])}
              />
            </div>

            <div>
              <h3 className="mb-4 font-serif text-2xl text-gray-950">For Further Information</h3>
              <ContactGrid contacts={phdContacts} />
            </div>
          </div>
          </div>
        </article>

        <article className={`${sectionCard} programme-card ${openProgramme === 'deng' ? 'active' : ''}`}>
          <button
            type="button"
            onClick={() => toggleProgramme('deng')}
            className="programme-header flex w-full cursor-pointer items-start justify-between gap-4 border-b border-gray-100 pb-6 text-left"
            aria-expanded={openProgramme === 'deng'}
          >
            <div className="flex min-w-0 flex-1 items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Settings size={28} />
              </span>
              <div>
                <h2 className="font-serif text-3xl text-gray-950 md:text-4xl">Doctor of Engineering (DEng)</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                  An industry-based doctoral programme combining advanced engineering research, scholarship, and real-world problem solving.
                </p>
              </div>
            </div>
            <span
              className={`arrow mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform duration-300 ${
                openProgramme === 'deng' ? 'rotate-180 text-[#A51C30]' : ''
              }`}
            >
              <ChevronDown size={18} />
            </span>
          </button>

          <div
            className={`programme-content overflow-hidden transition-all duration-300 ease-in-out ${
              openProgramme === 'deng' ? 'mt-4 max-h-[6000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-8 pt-2">
              <div className="space-y-4 text-sm leading-8 text-gray-600 md:text-base">
                <p>
                  The Doctor of Engineering (DEng) is a 4 years doctoral level programme combining academic research and scholarship with industrial problem-solving and project management. The programme incorporates the industrial relevant research, team leadership and unique university-industry partnership. The academic degree awarded on the basis of advanced study and research in engineering is equivalent to a PhD degree in engineering / applied sciences. The innovative research output from the programme is expected to be immediately useful to the participating company.
                </p>
                <p>
                  The DEng programme offers an opportunity for outstanding engineers to enhance their qualification through a mix of broadly based technical and professional training while completing an industry based research project. Successful researchers after completing the programme not only graduate with a title Doctor of Engineering, but also with the important mix of professional skills, technical knowledge and research experience that will enable them to progress to senior positions within industry at an acceleration rate.
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">Participating Faculties</h3>
                <ul className="grid gap-3 text-sm leading-7 text-gray-600 md:grid-cols-2 md:text-base">
                  <li>- Faculty of Electrical Technology and Engineering</li>
                  <li>- Faculty of Electronic and Computer Technology and Engineering</li>
                  <li>- Faculty of Mechanical Technology and Engineering</li>
                  <li>- Faculty of Industrial and Manufacturing Technology and Engineering</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">Entry Requirements</h3>
                <ul className="space-y-3 text-sm leading-7 text-gray-600 md:text-base">
                  <li>- A Master degree (or equivalent) from any institution of higher learning recognized by the Malaysian Government with CGPA at least 2.75; AND</li>
                  <li>- Have at least 3 years of working experience AND</li>
                  <li>- Has obtained the approval from employer to accommodate the research project in the workplace OR</li>
                  <li>- A Master degree student who has obtained Senate approval to enroll for the programme.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">Programme Structure</h3>
                <p className="mb-4 text-sm leading-7 text-gray-600 md:text-base">
                  DEng programme consists of two components, i.e. taught course and research.
                </p>
                <InfoTable
                  headers={['Components', 'Particular']}
                  rows={[
                    ['Taught Course', 'Modules are designed to enhance candidates? knowledge in the related Engineering and Business Management subjects'],
                    ['Research', 'Based on real industrial problems'],
                  ]}
                />
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">Taught Course</h3>
                <p className="mb-4 text-sm leading-7 text-gray-600 md:text-base">
                  Candidates in this programme are expected to undertake 18 credit hours of subjects. The following is the proposed schedule of the taught component:
                </p>
                <div className="rounded-[1.5rem] border border-gray-200 bg-[#faf8f4] p-4 md:p-5">
                  <img src={DEngPlanImage} alt="DEng taught course schedule" className="mx-auto w-full max-w-4xl object-contain" />
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">Course Work Subjects</h3>
                <p className="mb-4 text-sm leading-7 text-gray-600 md:text-base">
                  Depending on the faculty at which the student is based the subjects consist of the following:
                </p>
                <div className="rounded-[1.5rem] border border-gray-200 bg-[#faf8f4] p-4 md:p-5">
                  <img src={DEngCourseworkImage} alt="DEng course work subjects by faculty" className="mx-auto w-full max-w-5xl object-contain" />
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">Research</h3>
                <p className="text-sm leading-8 text-gray-600 md:text-base">
                  The candidate will normally be advised by one academic supervisor and one industrial supervisor. The topic for the research will be jointly decided by the faculty and the participating company. It can be a single project, or a series of projects, firmly based on a real industrial problem and having significant challenging and innovative engineering content. The candidate will spend majority of his/her time (about 80%) with the collaborating company.
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">For Further Information</h3>
                <ContactGrid contacts={phdContacts} />
              </div>
            </div>
          </div>
        </article>

        <article className={`${sectionCard} programme-card ${openProgramme === 'dtm' ? 'active' : ''}`}>
          <button
            type="button"
            onClick={() => toggleProgramme('dtm')}
            className="programme-header flex w-full cursor-pointer items-start justify-between gap-4 border-b border-gray-100 pb-6 text-left"
            aria-expanded={openProgramme === 'dtm'}
          >
            <div className="flex min-w-0 flex-1 items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <LineChart size={28} />
              </span>
              <div>
                <h2 className="font-serif text-3xl text-gray-950 md:text-4xl">Doctor of Technology Management (DTM)</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                  A blended coursework-and-research doctorate for professionals in technology-intensive organisations.
                </p>
              </div>
            </div>
            <span
              className={`arrow mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform duration-300 ${
                openProgramme === 'dtm' ? 'rotate-180 text-[#A51C30]' : ''
              }`}
            >
              <ChevronDown size={18} />
            </span>
          </button>

          <div
            className={`programme-content overflow-hidden transition-all duration-300 ease-in-out ${
              openProgramme === 'dtm' ? 'mt-4 max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-8 pt-2">
              <div className="space-y-4 text-sm leading-8 text-gray-600 md:text-base">
                <p>
                  A Doctor of Technology Management (DTM) is a 3-year programme that involves 1 1/2 years of coursework and the remaining 1 1/2 years of research study. Whereby candidates are required to complete 48 credits of coursework and 32 credits for research.
                </p>
                <p>
                  This program is designed to emphasize contemporary management thinking involving real-world, business oriented critical thinking and problem solving skills embedded in the coursework and research activities. A DTM degree focuses on theoretical understanding that is applicable to manage high-tech organisation subsequently equipting candidates with the relevant knowledge and skills to advance their career.
                </p>
                <p>
                  This program employs academic discourse through blended learning, case study analysis, problem-based assignment, industrial talk and presentation to name a few. The experience gathered from the coursework will enrich the candidates with knowledge and skills needed to embark on their research journey.
                </p>
                <p>
                  During the research programme, candidate will be supervised by the faculty academic staff and undergo Viva-voce session in final semester of their study. The degree will be awarded once the candidates completed the coursework and oral examination (Viva-voce) of the thesis submitted on completion of the study. Candidates that interested to join this programme may submit their application for admission throughout the year. Successful candidates should begin their studies in common semester according to the university academic calendar. Candidates will be awarded Doctor of Technology Management (DTM) once they completed the coursework, pass the viva-voce session and submit the research thesis.
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">Additional Entry Requirements</h3>
                <ul className="space-y-3 text-sm leading-7 text-gray-600 md:text-base">
                  <li>- A relevant master degree with at least CGPA 2.75 in related field from any accredited institutions of higher learning recognised and approved by the Senate.</li>
                  <li>- Candidate must have at least a First Degree or Master in Management field.</li>
                  <li>- Candidate must have at least TWO (2) years of working experience.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-2xl text-gray-950">Programme Plan</h3>
                <InfoTable
                  headers={['Phase', 'Year 1 Sem 1', 'Year 1 Sem 2', 'Year 2 Sem 1', 'Year 2 Sem 2', 'Year 3 Sem 1', 'Year 3 Sem 2', 'Total Credit']}
                  rows={dtmPlan.map((row) => [
                    row.phase,
                    row.year1Sem1 || '-',
                    row.year1Sem2 || '-',
                    row.year2Sem1 || '-',
                    row.year2Sem2 || '-',
                    row.year3Sem1 || '-',
                    row.year3Sem2 || '-',
                    row.total,
                  ])}
                />
              </div>

              <div className="rounded-[1.5rem] border border-gray-200 bg-[#faf8f4] p-6">
                <h3 className="mb-4 font-serif text-2xl text-gray-950">For Further Information</h3>
                <div className="space-y-2 text-sm leading-7 text-gray-600 md:text-base">
                  <p className="font-semibold text-gray-900">Faculty of Technology Management and Technopreneurship (FPTT)</p>
                  <p>Universiti Teknikal Malaysia Melaka (UTeM), Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia.</p>
                  <p>Telephone: +606-2292122</p>
                  <p>E-mail: fptt@utem.edu.my</p>
                  <p>
                    Website:{' '}
                    <a href="https://fptt.utem.edu.my/" target="_blank" rel="noopener noreferrer" className="hover:text-[#A51C30]">
                      https://fptt.utem.edu.my/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className={`${sectionCard} programme-card ${openProgramme === 'dit' ? 'active' : ''}`}>
          <button
            type="button"
            onClick={() => toggleProgramme('dit')}
            className="programme-header flex w-full cursor-pointer items-start justify-between gap-4 border-b border-gray-100 pb-6 text-left"
            aria-expanded={openProgramme === 'dit'}
          >
            <div className="flex min-w-0 flex-1 items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                <Cpu size={28} />
              </span>
              <div>
                <h2 className="font-serif text-3xl text-gray-950 md:text-4xl">Doctor of Information Technology (DIT)</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                  A professional doctorate combining advanced ICT coursework with industry-based research.
                </p>
              </div>
            </div>
            <span
              className={`arrow mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform duration-300 ${
                openProgramme === 'dit' ? 'rotate-180 text-[#A51C30]' : ''
              }`}
            >
              <ChevronDown size={18} />
            </span>
          </button>

          <div
            className={`programme-content overflow-hidden transition-all duration-300 ease-in-out ${
              openProgramme === 'dit' ? 'mt-4 max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-8 pt-2">
            <div className="space-y-4 text-sm leading-8 text-gray-600 md:text-base">
              <p>
                Doctor of Information Technology offers a unique 3 1/2 year program that consists of coursework (7
                modules) and research studies to extend fundamental knowledge of information and communication
                technology in solving industrial relevant problems.
              </p>
              <p>
                During the research studies, candidate is supervised by an academic staff from the university and an
                industrial supervisor from the related research field. The directed research work will focus on an
                industrial problem that engages the candidate in industry-based problem solving by which new knowledge
                is developed or/and applied accordingly.
              </p>
              <p>
                The supervisor (or panel of supervisors), the industry supervisor and the candidate will select the
                topic of investigation. The academic progress of the candidate is assessed through assignments, written
                tests, and research progress report throughout the studies.
              </p>
              <p>
                The degree is awarded based on the completion of coursework, and an oral examination (viva-voce) of
                the thesis submitted by the candidate on completion of the study. Interested candidates may submit
                their application for admission throughout the year. Successful candidates should begin their studies
                in common semester according to the university academic calendar.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-2xl text-gray-950">Areas of Research</h3>
              <ul className="space-y-3 text-sm leading-7 text-gray-600 md:text-base">
                <li>- Software and Information Systems Engineering</li>
                <li>- Data and Knowledge Engineering</li>
                <li>- Artificial Intelligence, Modeling and Decision Technology</li>
                <li>- Networking and Internet Computing</li>
                <li>- Computer Systems and Security</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-2xl text-gray-950">Additional Entry Requirements</h3>
              <ul className="space-y-3 text-sm leading-7 text-gray-600 md:text-base">
                <li>- A Master?s degree (or equivalent) from any institution of higher learning recognized by the Malaysian Government.</li>
                <li>- A candidate must obtain at least one computing-related degree.</li>
                <li>- A candidate must be working in an industry with at least 2 years&apos; experience and has obtained the approval from employer to accommodate research project in the workplace.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-2xl text-gray-950">Programme Plan</h3>
              <p className="mb-4 text-sm leading-7 text-gray-600 md:text-base">
                Candidate is suggested to complete 91 credits of graduation requirement in 3 phases as follows:
              </p>
              <InfoTable
                headers={['Phase', 'Y1 S1', 'Y1 S2', 'Y2 S1', 'Y2 S2', 'Y3 S1', 'Y3 S2', 'Y4 S1', 'Y4 S2', 'Total Credit']}
                rows={ditPlan.map((row) => [
                  row.phase,
                  row.year1Sem1 || '-',
                  row.year1Sem2 || '-',
                  row.year2Sem1 || '-',
                  row.year2Sem2 || '-',
                  row.year3Sem1 || '-',
                  row.year3Sem2 || '-',
                  row.year4Sem1 || '-',
                  row.year4Sem2 || '-',
                  row.total,
                ])}
              />
            </div>

            <div className="rounded-[1.5rem] border border-gray-200 bg-[#faf8f4] p-6">
              <h3 className="mb-4 font-serif text-2xl text-gray-950">For Further Information</h3>
              <div className="space-y-2 text-sm leading-7 text-gray-600 md:text-base">
                <p className="font-semibold text-gray-900">Faculty of Information and Communication Technology (FTMK)</p>
                <p>Universiti Teknikal Malaysia Melaka (UTeM), Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia.</p>
                <p>Telephone: +606-229 2121</p>
                <p>E-mail: ftmk@utem.edu.my</p>
                <p>
                  Website:{' '}
                  <a href="https://ftmk.utem.edu.my/web/" target="_blank" rel="noopener noreferrer" className="hover:text-[#A51C30]">
                    https://ftmk.utem.edu.my/web/
                  </a>
                </p>
              </div>
            </div>
          </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DoctoralProgrammes;
