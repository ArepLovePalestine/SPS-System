import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface ApplyNowProps {
  lang: Language;
}

const portalUrl = 'https://portal.utem.edu.my/admission/default';

const localItems = [
  'A recent copy of passport-sized photograph',
  'A copy of an Identity Card',
  'A copy of SPM/MCE/Diploma/Degree and other Professional qualifications',
  'A copy of academic transcript',
  'The processing fee of RM50.00 in the form of a Postal Order/Money Order/Banker\'s Draft payable to the "Bendahari Universiti Teknikal Melaka". Payment of processing fees can also be made online using debit or credit card',
  'A Letter of Guarantee from your sponsor (for those under scholarships/sponsorships)',
  'A Preliminary Research Proposal with the maximum of 5 pages (applicable to application for Master\'s By Research and all Doctorate programmes)',
  'A permission letter from your employer to pursue your studies on a full time basis (only applicable for those who are employed). Otherwise, you are required to opt for a part-time programme',
];

const internationalItems = [
  'A recent copy of passport-sized photograph',
  'A copy of passport',
  'A copy of an academic transcript',
  'A copy of Degree and Professional qualifications',
  'The processing fee of RM100.00 in the form of an International Banker\'s Cheque payable to the "Bendahari Universiti Teknikal Malaysia Melaka". Payment of processing fees can also be made online using debit or credit card',
  'A letter of financial support. A self-financing international applicant must provide an acceptable letter of financial guarantee from his/her banker or relevant financial institution.',
  'A Preliminary Research Proposal with the maximum of 5 pages (applicable to application for Master\'s By Research and all Doctorate programmes)',
  'A letter of certification from the respective Ministry of Education verifying nationality and academic qualifications of an applicant. For an international student applying within Malaysia, the certification letter can be obtained from the Embassy/Consulate/High Commission of the applicant\'s home country situated in Malaysia',
  'Academic transcripts and supporting documents must be certified as true copies by a senior public official from the applicant\'s country or from Malaysia',
];

const SectionBlock: React.FC<{
  title: string;
  intro: React.ReactNode[];
  items: string[];
}> = ({ title, intro, items }) => (
  <section className="space-y-6">
    <div className="bg-[#ffd3a8] px-5 py-3 text-center">
      <h2 className="text-lg font-bold uppercase tracking-[0.03em] text-gray-900 md:text-2xl">{title}</h2>
    </div>

    <div className="space-y-4 px-1 text-[15px] leading-8 text-gray-800 md:text-base">
      {intro.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <div className="space-y-2">
        <p>An application form should include the following :-</p>
        <ol className="space-y-2 pl-5">
          {items.map((item, index) => (
            <li key={index} className="list-none">
              <span className="font-medium">{String.fromCharCode(97 + index)}) </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const ApplyNow: React.FC<ApplyNowProps> = ({ lang }) => {
  return (
    <div className="min-h-screen bg-white pb-20 pt-24">
      <section className="border-b border-black/5 bg-[#fbf8f3] px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">
              Home
            </Link>
            <ChevronRight size={12} className="text-gray-300" />
            <Link to="/programmes" className="transition-colors hover:text-[#A51C30]">
              Programmes
            </Link>
            <ChevronRight size={12} className="text-gray-300" />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'How to Apply' : 'Cara Memohon'}</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl tracking-tight text-gray-950 md:text-6xl">
              {lang === 'EN' ? 'How to Apply' : 'Cara Memohon'}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              {lang === 'EN'
                ? 'Application guidance for local and international candidates applying to postgraduate programmes at UTeM.'
                : 'Panduan permohonan untuk calon tempatan dan antarabangsa yang memohon program pascasiswazah di UTeM.'}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1180px] rounded-[28px] border border-gray-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8 md:p-10">
          <div className="space-y-12">
            <SectionBlock
              title="LOCAL CANDIDATES (MALAYSIAN CITIZEN)"
              intro={[
                <>
                  1. Application must be submitted online via{' '}
                  <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[#A51C30] underline decoration-[#A51C30]/40 underline-offset-4 hover:text-[#8a1026]">
                    {portalUrl}
                  </a>
                </>,
                <>
                  2. For programmes by coursework, a completed application form should be submitted before the advertised closing date. However, applications for research programmes are open throughout the year.
                </>,
                <>
                  3. A completed application should include the following :-
                </>,
              ]}
              items={localItems}
            />

            <SectionBlock
              title="INTERNATIONAL CANDIDATES"
              intro={[
                <>1. All international students are required to register as Full-Time students at UTeM and should have the financial capability to meet the course fees and living expenses for the full duration of the programme.</>,
                <>2. The medium of instruction and research for international students is English.</>,
                <>
                  3. Application must be submitted online via{' '}
                  <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[#A51C30] underline decoration-[#A51C30]/40 underline-offset-4 hover:text-[#8a1026]">
                    {portalUrl}
                  </a>
                </>,
                <>4. A completed form should include the following :-</>,
              ]}
              items={internationalItems}
            />
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-7 text-gray-500">
              {lang === 'EN'
                ? 'Applicants may proceed directly to the official admission portal for submission.'
                : 'Pemohon boleh terus ke portal kemasukan rasmi untuk penghantaran permohonan.'}
            </p>
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#A51C30] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#8a1026]"
            >
              {lang === 'EN' ? 'Open Admission Portal' : 'Buka Portal Kemasukan'}
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
