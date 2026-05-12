import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileText,
  GraduationCap,
  Library,
  Mail,
  NotebookText,
  ScrollText,
  Send,
  UserCircle,
} from 'lucide-react';
import { Language } from '../types';

interface StudentInfoProps {
  lang: Language;
}

interface StudentAccordionItem {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: { EN: string; BM: string };
  link?: string;
  linkLabel?: { EN: string; BM: string };
  external?: boolean;
}

interface AssetItem {
  src: string;
  filename: string;
}

const studentDocModules = import.meta.glob('../src/assets/Document file/Student info Doc/**/*.{pdf,jpg,jpeg,png,JPG,JPEG,PNG,PDF}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const sortByPath = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true });

const getAssets = (folderName: string) =>
  Object.entries(studentDocModules)
    .filter(([path]) => path.includes(`/Student info Doc/${folderName}/`))
    .sort((a, b) => sortByPath(a[0], b[0]))
    .map(([path, src]) => ({
      src,
      filename: path.split('/').pop() || path,
    }));

const registrationAssets = getAssets('Registration Process');
const activeSmpsAssets = getAssets('Activate Smps Acc');
const activeEmailAssets = getAssets('Active email');
const progressAssets = getAssets('Procedure Upload Research');
const gotAssets = getAssets('Research Student GOT');
const callForPaperAssets = getAssets('Call for paper');

const callForPaperPdfEntry = Object.entries(studentDocModules)
  .find(([path]) => path.includes('/Student info Doc/Call for paper/') && path.toLowerCase().endsWith('.pdf'));
const callForPaperPdfSrc = callForPaperPdfEntry ? callForPaperPdfEntry[1] : '';

const items: StudentAccordionItem[] = [
  { id: 'registration-process', icon: GraduationCap, title: { EN: 'Registration Process', BM: 'Proses Pendaftaran' } },
  { id: 'active-smps-account', icon: UserCircle, title: { EN: 'Active SMPS Account', BM: 'Akaun SMPS Aktif' } },
  { id: 'active-email-account', icon: Mail, title: { EN: 'Active Email Account', BM: 'Akaun Emel Aktif' } },
  { id: 'research-progress', icon: ScrollText, title: { EN: 'Procedure Uploading Research Progress Report', BM: 'Prosedur Muat Naik Laporan Kemajuan Penyelidikan' } },
  { id: 'call-for-paper', icon: Send, title: { EN: 'Call for Paper / Journal Articles', BM: 'Panggilan Kertas Kerja / Artikel Jurnal' } },
  { id: 'research-student-outline', icon: FileText, title: { EN: 'Research Student Outline', BM: 'Garis Panduan Pelajar Penyelidikan' } },
  { id: 'research-student-strategy', icon: NotebookText, title: { EN: 'Research Student GOT Strategy', BM: 'Strategi GOT Pelajar Penyelidikan' } },
  {
    id: 'library-research-resources',
    icon: Library,
    title: { EN: 'Library Research Resources', BM: 'Sumber Penyelidikan Perpustakaan' },
    link: 'https://library.utem.edu.my/en/research-resources.html',
    linkLabel: { EN: 'Open Library Research Resources', BM: 'Buka Sumber Penyelidikan Perpustakaan' },
    external: true,
  },
  {
    id: 'library-user-education',
    icon: BookOpen,
    title: { EN: 'Library User Education Module', BM: 'Modul Pendidikan Pengguna Perpustakaan' },
    link: 'https://library.utem.edu.my/en/user-education-program.html',
    linkLabel: { EN: 'Open Library User Education Module', BM: 'Buka Modul Pendidikan Pengguna Perpustakaan' },
    external: true,
  },
];

const cardClass = 'rounded-[22px] border border-gray-100 bg-[#fcfbf8] p-5 sm:p-6';

const ImagePreviewGrid: React.FC<{ assets: AssetItem[]; columns?: string; titlePrefix?: string }> = ({
  assets,
  columns = 'md:grid-cols-2 xl:grid-cols-3',
  titlePrefix,
}) => (
  <div className={`grid gap-4 ${columns}`}>
    {assets.map((asset, index) => (
      <a
        key={`${asset.filename}-${index}`}
        href={asset.src}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-[20px] border border-gray-200 bg-white p-3 shadow-sm transition hover:border-[#A51C30]/25 hover:shadow-md md:p-4"
      >
        <img src={asset.src} alt={asset.filename} className="h-auto max-h-[420px] w-full rounded-[14px] object-contain" loading={index < 2 ? 'eager' : 'lazy'} />
        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-gray-500">
          <span className="truncate">{titlePrefix ? `${titlePrefix} ${index + 1}` : asset.filename}</span>
          <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-[0.14em] text-[#A51C30]">
            View
            <ExternalLink size={12} />
          </span>
        </div>
      </a>
    ))}
  </div>
);

// ── Call for Paper: button toggle component ──────────────────────────────────
interface CfpItem {
  label: { EN: string; BM: string };
  link?: string;
  imageName: string;
}

const CallForPaperSection: React.FC<{
  lang: Language;
  assets: AssetItem[];
  cfpItems: CfpItem[];
}> = ({ lang, assets, cfpItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? cfpItems[selectedIndex] : null;
  const selectedAsset = selectedItem
    ? assets.find((a) => a.filename === selectedItem.imageName) ?? null
    : null;

  return (
    <div className="space-y-5">
      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {cfpItems.map((item, index) => {
          const isActive = selectedIndex === index;
          return (
            <button
              key={item.label.EN}
              type="button"
              onClick={() => setSelectedIndex(isActive ? null : index)}
              className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition
                ${isActive
                  ? 'border-[#A51C30] bg-[#A51C30] text-white shadow-md'
                  : 'border-[#A51C30]/30 bg-white text-[#A51C30] hover:border-[#A51C30] hover:bg-[#fff8f5]'
                }`}
            >
              {item.label[lang]}
            </button>
          );
        })}
      </div>

      {/* Image shown below buttons when a button is selected */}
      {selectedIndex !== null && selectedItem && (
        <div className="mt-2">
          {selectedAsset ? (
            <a
              href={selectedItem.link || selectedAsset.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[20px] border border-gray-200 bg-white p-3 shadow-sm transition hover:border-[#A51C30]/25 hover:shadow-md md:p-4"
            >
              <img
                src={selectedAsset.src}
                alt={selectedItem.label[lang]}
                className="h-auto max-h-[600px] w-full rounded-[14px] object-contain"
                loading="lazy"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-gray-700">{selectedItem.label[lang]}</span>
                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-[#A51C30]">
                  View <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ) : (
            <div className="flex h-[180px] w-full items-center justify-center rounded-[14px] bg-gray-100 text-xs text-gray-400">
              No image
            </div>
          )}
        </div>
      )}
    </div>
  );
};
// ────────────────────────────────────────────────────────────────────────────

const StudentInfo: React.FC<StudentInfoProps> = ({ lang }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const heroTitle = lang === 'EN' ? 'Welcome' : 'Selamat Datang';
  const heroSubtitle =
    lang === 'EN'
      ? 'We are proud that you chose to join us'
      : 'Kami berbangga anda memilih untuk bersama kami';

  const progressSteps = useMemo(
    () => [
      {
        step: '01',
        lines: [
          'The student portal url is: https://portal.utem.edu.my/iutem/',
          'Type your student matric card number (as USER ID).',
          'Type your password and click the Login button.',
        ],
      },
      {
        step: '02',
        lines: [
          'If you encounter this pop up (error message), while trying to login into the student portal.',
          'Just click the OK button and proceed to the next step.',
        ],
      },
      {
        step: '03',
        lines: [
          'After closing the pop up (error message), you can see change of USER ID into (IC No/Passport/SSM ID/KKM ID).',
          'Type your IC No. for the Local Student and Passport No. for the International Student that you have register first time when applying for your education enrollment.',
          'Type your password and click the Login button.',
        ],
      },
      {
        step: '04',
        lines: ['Once you have login into the Student Portal.', 'Click on the System To Use.'],
      },
      {
        step: '05',
        lines: [
          'Once you have click on the System To Use.',
          'Your overall system that you can use and utilize in UTeM will be appeared.',
          'Click on the icon stating SMPS (Sistem Maklumat Pengajian Siswazah).',
        ],
      },
      {
        step: '06',
        lines: [
          'Once you have click the icon SMPS.',
          'A new sub webpage will be automatically pop up and appeared.',
          'This is your SMPS webpage that contains full information regarding yourself.',
          'For the purpose of uploading your progress report, click on the Marks.',
        ],
      },
      {
        step: '07',
        lines: ['Once you have click on the Marks.', 'A dropdown menu bar will be appeared, click on the progress report.'],
      },
      {
        step: '08',
        lines: [
          'Once click on the progress report.',
          'You will be looking at the Progress Report webpage that contains your Name and Matric No appearing automatically.',
          'The first (1) step that you need to do is download the form: Progress Report.doc.',
          'Once you have completed filling up and signing the Progress Report.doc.',
          'The second (2) step that you need to do is converting the document into pdf format and upload it in the system by clicking the Browse button.',
        ],
      },
      {
        step: '10',
        lines: [
          'A pop up Fail page will be appearing.',
          'Click on the Browse for uploading the Progress Report.pdf from your device.',
          'Click on the Save button to store the document in the system database.',
        ],
      },
      {
        step: '11',
        lines: [
          'Once you have click the Save button.',
          'Automatically the Progress Report.pdf will be generated into your matric no and the current semester will be saved.',
          'The saved File Name will be appearing in your device screen with your matric no and the current semester.',
        ],
      },
      {
        step: '12',
        lines: [
          'For confirming your file have been saved succesfully.',
          'You can view it in your Progress Report page under File Name.',
          'You can click the Checklist for confirming it.',
        ],
      },
      {
        step: '13',
        lines: [
          'Once click on the Checklist.',
          'The Form Checklist will be appearing and you can view the details.',
          'Under the Student Progress of Study: For Research Students only will be ticked in green colour as Completed indicating that you have successfully saved your Progress Report document.',
        ],
      },
    ],
    []
  );

  const callForPaperItems: CfpItem[] = [
    { label: { EN: 'Research Resources', BM: 'Sumber Penyelidikan' }, link: '', imageName: 'Click here- Research resources.jpg' },
    { label: { EN: 'Blacklisted Journals', BM: 'Jurnal Disenarai Hitam' }, link: '', imageName: 'Blacklisted Journal.jpg' },
    { label: { EN: 'How to Identify Indexed Journal', BM: 'Cara Kenal Pasti Jurnal Berindeks' }, link: callForPaperPdfSrc, imageName: 'How_to_Identify_Indexed_journals.jpg' },
  ];

  const renderContent = (id: string) => {
    switch (id) {
      case 'registration-process':
        return (
          <div className={cardClass}>
            <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
              <p>
                Follow the official registration instructions directly in the embedded PDF viewer below.
              </p>
              {registrationAssets.length > 0 ? (
                <>
                  <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm">
                    <iframe
                      src={`${registrationAssets[0].src}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                      title="Registration Process PDF"
                      className="h-[780px] w-full bg-white"
                    />
                  </div>
                  <a
                    href={registrationAssets[0].src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#A51C30]/20 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#A51C30] transition hover:border-[#A51C30] hover:bg-[#fff8f5]"
                  >
                    Open PDF in New Tab
                    <ExternalLink size={14} />
                  </a>
                </>
              ) : null}
            </div>
          </div>
        );
      case 'active-smps-account':
        return (
          <div className={cardClass}>
            <p className="mb-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
              Activate and verify your SMPS access using the uploaded guide below.
            </p>
            <ImagePreviewGrid assets={activeSmpsAssets} columns="grid-cols-1 md:grid-cols-1" titlePrefix="SMPS Guide" />
          </div>
        );
      case 'active-email-account':
        return (
          <div className={cardClass}>
            <p className="mb-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
              Use the official activation guide below to activate your student email account and maintain regular access for university communication.
            </p>
            <ImagePreviewGrid assets={activeEmailAssets} columns="grid-cols-1 md:grid-cols-1" titlePrefix="Student Email Guide" />
          </div>
        );
      case 'research-progress':
        return (
          <div className="space-y-5">
            <div className={cardClass}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#A51C30]">Student Portal Interface Procedure Uploading</p>
              <div className="mt-5 overflow-hidden rounded-[18px] border border-gray-200 bg-white">
                <div className="hidden grid-cols-[110px_minmax(0,1fr)] border-b border-gray-200 bg-[#f7f3ee] text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 md:grid">
                  <div className="px-4 py-3">Step</div>
                  <div className="border-l border-gray-200 px-4 py-3">Guide and Screenshot</div>
                </div>
                {progressSteps.map((entry, index) => {
                  const image = progressAssets.find((asset) => asset.filename === `${entry.step}.jpg`);
                  return (
                    <div
                      key={entry.step}
                      className={`${index !== progressSteps.length - 1 ? 'border-b border-gray-200' : ''} md:grid md:grid-cols-[110px_minmax(0,1fr)]`}
                    >
                      <div className="px-4 pt-4 md:flex md:items-start md:justify-center md:pt-4">
                        <span className="inline-flex rounded-full bg-[#0d2a5c]/6 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0d2a5c]">
                          Step {entry.step}
                        </span>
                      </div>
                      <div className="space-y-4 px-4 py-4 md:border-l md:border-gray-200">
                        <div className="space-y-2 text-sm leading-7 text-gray-600 sm:text-[15px]">
                          {entry.lines.map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                        {image ? (
                          <a
                            href={image.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block overflow-hidden rounded-[16px] border border-gray-200 bg-[#fcfbf8] p-3 transition hover:border-[#A51C30]/25"
                          >
                            <img
                              src={image.src}
                              alt={`Progress Report Step ${entry.step}`}
                              className="h-auto max-h-[340px] w-full rounded-[12px] object-contain"
                              loading="lazy"
                            />
                            <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A51C30]">
                              View Step {entry.step} Image
                              <ExternalLink size={13} />
                            </div>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      // ── EDITED: Call for Paper — buttons toggle image below ──────────────
      case 'call-for-paper':
        return (
          <div className={cardClass}>
            <p className="mb-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
              {lang === 'EN'
                ? 'Use these research publishing references when preparing journal submissions and paper planning.'
                : 'Gunakan rujukan penerbitan penyelidikan ini semasa menyediakan penyerahan jurnal dan perancangan kertas kerja.'}
            </p>
            <CallForPaperSection lang={lang} assets={callForPaperAssets} cfpItems={callForPaperItems} />
          </div>
        );
      // ────────────────────────────────────────────────────────────────────

      case 'research-student-outline':
        return (
          <div className="space-y-5">
            <div className={cardClass}>
              <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
                <p>
                  <strong>INFORMATION FOR RESEARCH STUDENT</strong>
                </p>
                <p>
                  Universiti Teknikal Malaysia Melaka-PPS commit to guide as much of key information you will need during your studies. You should also read the postgraduate regulations and PPS ISO documents which is provided in the website.
                </p>
                <p>
                  Who is responsible for postgraduate research in UTeM? Refer Section Person-In-Charge.
                </p>
              </div>
            </div>
            <div className={cardClass}>
              <h3 className="font-serif text-2xl text-gray-950">Academic Progress</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
                <p>1. After registration, meeting with your supervisors is critical. Your supervisors are responsible for guiding you during your study period.</p>
                <p>2. You and your supervisory team will be conduct research based on your research plan.</p>
                <p>3. Monitoring active status in the system. You are responsible to register at the beginning of each semester. It is your responsible also to ensure that you in active status during the study period. Refer Postgraduate Regulations.</p>
                <p>4. Undergo Research Proposal Defense (RPD). At the maximum of allocation time given, you should submit a report to your faculty to fulfil the requirement of Research Proposal Defense (RPD).</p>
                <p>5. Submit Progress Report. Please remember that you have to submit progress report at the end of every semester. Your supervisor will complete an online report on your progress. Refer Section SPS ISO.</p>
                <p>6. Publish Journal papers. During your study, you are expected to publish journal article(s) as part of your graduation requirement. This action is compulsory and very good practice. Refer Postgraduate Regulations.</p>
                <p>7. Thesis Preparation and Submission. You are advised to familiarise yourself with thesis guidance in order for you to prepare your thesis. You should also always consult with your supervisor in every aspects of the thesis. When you are ready to submit your thesis, please follow the procedure at SPS ISO document. Thesis must be submitted through Turnitin. It is your responsibility to check your thesis originality.</p>
                <p>8. Undergo Oral Examination.</p>
                <p>9. If you do not submit your thesis or finished your graduate requirements within the maximum period of your study, it is your responsible to extend your study. Refer Postgraduate Regulations.</p>
                <p>We expect all researchers to gain the key information of the processes involved during the study period in guiding you to develop yourself, your research aspects and professional skills to become world-class researchers.</p>
                <p>We also welcome feedback on this section and anything relating to postgraduate research process and development. Please email feedback to sps@utem.edu.my.</p>
              </div>
            </div>
            <div className={cardClass}>
              <h3 className="font-serif text-2xl text-gray-950">Graduation Requirements</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
                <p>1) The graduation requirements for a postgraduate student</p>
                <div className="space-y-2 pl-5">
                  <p>a. Pass all the required courses for the registered programme.</p>
                  <p>b. Carry out all the necessary research work at the University or Industry to the required quality.</p>
                  <p>c. Submit and pass the Master Project for Master by Taught Course, Dissertation for Mixed Mode or Project Paper for MBA.</p>
                  <p>d. Submit thesis and pass the viva-voce for Master (by Research) or Doctoral.</p>
                </div>
                <p>2) During the study period of Research Mode Student,</p>
                <div className="space-y-2 pl-5">
                  <p>a. Master degree - to publish at least one (1) journal paper indexed by Scopus or ISI-Web of Science (WOS).</p>
                  <p>b. PhD degree - to publish at least two (2) journal paper(s) indexed by Scopus or ISI-Web of Science (WOS).</p>
                  <p>c. Industrial PhD - to publish at least one (1) paper indexed by Scopus or ISI-Web of Science (WOS) and provide evidence of innovation in their research work endorsed by the participating company.</p>
                </div>
              </div>
            </div>
          </div>
        );

      // ── EDITED: Research Student GOT Strategy — text first, images below ─
      case 'research-student-strategy':
        return (
          <div className={cardClass}>
            <p className="mb-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
              Refer to the uploaded Research Student GOT Strategy material below.
            </p>
            <div className="space-y-4">
              {gotAssets.map((asset, index) => (
                <a
                  key={`${asset.filename}-${index}`}
                  href={asset.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition hover:border-[#A51C30]/25 hover:shadow-md"
                >
                  <img
                    src={asset.src}
                    alt={asset.filename}
                    className="h-auto w-full rounded-[20px] object-contain"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </a>
              ))}
            </div>
          </div>
        );
      // ────────────────────────────────────────────────────────────────────

      case 'library-research-resources':
        return (
          <div className={cardClass}>
            <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
              <p>Explore library databases, e-journals, institutional repositories, and reference tools that support postgraduate research.</p>
              <p>Use research guides, citation support, and discovery services available through the university library to strengthen literature review and academic writing.</p>
              <a
                href="https://library.utem.edu.my/en/research-resources.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#A51C30]/20 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#A51C30] transition hover:border-[#A51C30] hover:bg-[#fff8f5]"
              >
                Open Library Research Resources
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        );
      case 'library-user-education':
        return (
          <div className={cardClass}>
            <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
              <p>The library user education module helps students build stronger search, evaluation, and referencing skills for academic work.</p>
              <p>It is recommended for coursework preparation, proposal development, research writing, and independent scholarly learning.</p>
              <a
                href="https://library.utem.edu.my/en/user-education-program.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#A51C30]/20 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#A51C30] transition hover:border-[#A51C30] hover:bg-[#fff8f5]"
              >
                Open Library User Education Module
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] pb-20 pt-24">
      <section className="border-b border-black/5 bg-[#fbf8f3] px-4 py-10 sm:px-6 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1180px]">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">HOME</Link>
            <ChevronRight size={12} className="text-gray-300" />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'STUDENT INFO' : 'MAKLUMAT PELAJAR'}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[32px] border border-[#dbe3ef] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
          >
            <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
              <div className="pointer-events-none absolute inset-0 opacity-100">
                <div className="absolute inset-y-0 left-0 w-24 bg-[linear-gradient(135deg,#0d2a5c_0%,#0d2a5c_42%,#f5f7fb_42%,#f5f7fb_52%,#f4b400_52%,#f4b400_61%,#0d2a5c_61%,#0d2a5c_100%)] sm:w-32" />
                <div className="absolute inset-y-0 right-0 w-24 bg-[linear-gradient(315deg,#0d2a5c_0%,#0d2a5c_42%,#f5f7fb_42%,#f5f7fb_52%,#f4b400_52%,#f4b400_61%,#0d2a5c_61%,#0d2a5c_100%)] sm:w-32" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_32%,rgba(13,42,92,0.03)_32%,rgba(13,42,92,0.03)_36%,transparent_36%,transparent_63%,rgba(13,42,92,0.03)_63%,rgba(13,42,92,0.03)_67%,transparent_67%,transparent_100%)]" />
              </div>

              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="font-serif text-4xl uppercase tracking-[0.04em] text-[#0d2a5c] sm:text-6xl lg:text-7xl">
                  {heroTitle}
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base font-medium uppercase tracking-[0.16em] text-[#2e6797] sm:text-xl sm:tracking-[0.2em]">
                  {heroSubtitle}
                </p>
                <p className="mt-8 text-lg text-[#2e6797] sm:text-2xl">www.sps.utem.edu.my</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1180px]">
          <div className="space-y-3 rounded-[28px] border border-gray-200 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-6 lg:p-8">
            {items.map((item) => {
              const Icon = item.icon;
              const isOpen = openItem === item.id;

              return (
                <div key={item.id} className="overflow-hidden border-b border-gray-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenItem((current) => (current === item.id ? null : item.id))}
                    className="flex w-full items-center gap-4 px-3 py-5 text-left transition hover:bg-[#fbf8f3] sm:px-4"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0d2a5c]/6 text-[#0d2a5c]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#0d2a5c] sm:text-xs sm:tracking-[0.34em]">
                        {item.title[lang]}
                      </h2>
                    </div>
                    <span className={`text-[#0d2a5c] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[12000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-3 pb-5 sm:px-4">{renderContent(item.id)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentInfo;