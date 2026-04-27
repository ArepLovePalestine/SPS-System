import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChevronDown,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Library,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Language } from '../types';

interface ResourcesProps {
  lang: Language;
}

type ResourceCategory =
  | 'ISO Document'
  | 'Research Proposal Template'
  | 'Programme Structure'
  | 'Academic Matters'
  | 'Room Reservation'
  | 'Facilities'
  | 'Information for Students'
  | 'Information for Academics';

interface ResourceItem {
  title: string;
  href: string;
  category: ResourceCategory;
  type: 'PDF' | 'LINK';
  action: 'View' | 'Download' | 'Open';
  description?: string;
  external?: boolean;
}

interface ResourceGroup {
  category: ResourceCategory;
  description: string;
  icon: React.ElementType;
  items: ResourceItem[];
}

const documentModules = import.meta.glob('../Document file/**/*.pdf', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const academicForms = [
  'Add Subject Form Penambahan Matapelajaran 2024.pdf',
  'Additional or Change Of Supervisor Perubahan atau Pertukaran Penyelia 2024 (1).pdf',
  'Additional or Change Of Supervisor Perubahan atau Pertukaran Penyelia 2024.pdf',
  'BORANG PERMOHONAN PENUKARAN PERINGKAT PENGAJIAN SARJANA PENYELIDIKAN KE PERINGKAT DOKTOR FALSAFAH PhD 2024(!).pdf',
  'BORANG PERMOHONAN PENUKARAN PERINGKAT PENGAJIAN SARJANA PENYELIDIKAN KE PERINGKAT DOKTOR FALSAFAH PhD 2024.pdf',
  'Candidate Particulars  Borang Maklumat Pelajar Siswazah 2024.pdf',
  'Change Of Programme Pertukaran Program 2024.pdf',
  'Deferment Of Study Tangguh Pengajian 2024.pdf',
  'Extension Of Candidature Perlanjutan Tempoh Pengajian 2024.pdf',
  'Letter Application Form Borang Permohonan Surat 2024.pdf',
  'Personal Particular Form International Student 2024.pdf',
  'Pertukaran Mod Pendaftaran.pdf',
  'Referee Form Borang Penyokong 2024.pdf',
  'Transfer or Exemption Of Credits Pemindahanm atau Pengecualian Kredit 2024.pdf',
  'Withdrawal From Studies Form Borang Tarik Diri Pengajian new 2.pdf',
  'Withdrawal From Subject Form  Borang Tarik Diri Matapelajaran 2024.pdf',
];

const financialForms = [
  'Borang Permohonan Penangguhan Yuran Pengajian.pdf',
  'borang TUNTUTAN khairat Kematian.pdf',
  'Fee Reduction Form for staff Borang Pengurangan Yuran Pengajian untuk Staff 2024.pdf',
  'Payment Form Borang Pembayaran 2024.pdf',
];

const thesisForms = [
  'Borang Pembetulan Tesis 2024.pdf',
  'Borang Pembetulan Tesis Resubmit o Reviva 2024.pdf',
  'Checklist For Hardbound Thesis Submission New 2024.pdf',
  'DECLARATION OF MASTER AND DOCTORAL THESIS 2024.pdf',
  'FINAL THESIS SUBMISSION FORM  julai 2024.pdf',
  'Guidelines for Thesis Dissertation  Report.pdf',
  'Laporan Kemajuan Penyelidikan 2024.pdf',
];

const isoForms = [
  'Borang Bayaran Saguhati Penceramah Fasilitator Sambilan 2024.pdf',
  'Borang Jawapan Pemeriksa 2024.pdf',
  'Borang Penghantaran Soalan Final Exam 2024.pdf',
  'Template Jadual Peperiksaan Akhir Pasca Siswazah.pdf',
  'Template Penawaran Mata Pelajaran 2024.pdf',
];

const roomReservationFiles = [
  'Borang tempahan ruang Auditorium.pdf',
  'Tatacara Pemohonan Tempahan Bilik Kuliah,Auditorium,Bilik Mesyuarat Utama Dan Bilik Jamuan PPS(Penguguna Biasa - StafPelajar).pdf',
  'Tatacara Pemohonan Tempahan Bilik Kuliah,Auditorium,Bilik Mesyuarat Utama Dan Bilik Jamuan PPS.pdf',
];

const toTitle = (filename: string) => filename.replace(/\.pdf$/i, '').replace(/\s+/g, ' ').trim();
const fileHref = (folder: string, filename: string) => {
  const sourcePath = `../${folder}/${filename}`;
  return documentModules[sourcePath] || `/${folder}/${filename}`;
};

const groups: ResourceGroup[] = [
  {
    category: 'ISO Document',
    description: 'Quality management documents, ISO templates, examination forms, and examiner report templates.',
    icon: ShieldCheck,
    items: [
      {
        title: 'ISO Documents',
        href: '/about/iso-documents',
        category: 'ISO Document',
        type: 'LINK',
        action: 'Open',
        description: 'Browse the dedicated ISO document page.',
      },
      {
        title: 'ISO Forms & Templates',
        href: '/resources/iso-forms',
        category: 'ISO Document',
        type: 'LINK',
        action: 'Open',
        description: 'View the searchable ISO forms collection.',
      },
      ...isoForms.map((filename): ResourceItem => ({
        title: toTitle(filename),
        href: fileHref('Document file/ISO Form & Template', filename),
        category: 'ISO Document',
        type: 'PDF',
        action: 'Download',
      })),
    ],
  },
  {
    category: 'Research Proposal Template',
    description: 'Templates used for preparing and defending postgraduate research proposals.',
    icon: BookOpen,
    items: [
      {
        title: 'Research Proposal Templates',
        href: '/resources/research-proposal',
        category: 'Research Proposal Template',
        type: 'LINK',
        action: 'Open',
        description: 'Open the dedicated research proposal templates page.',
      },
    ],
  },
  {
    category: 'Programme Structure',
    description: 'Programme pages, faculty pathways, postgraduate brochures, fees, and academic structure references.',
    icon: GraduationCap,
    items: [
      { title: 'Programme Dashboard', href: '/programmes', category: 'Programme Structure', type: 'LINK', action: 'Open' },
      { title: 'Postgraduate Programmes', href: '/programmes/postgraduate', category: 'Programme Structure', type: 'LINK', action: 'Open' },
      { title: 'Master Taught Programmes', href: '/programmes/master-taught', category: 'Programme Structure', type: 'LINK', action: 'Open' },
      { title: 'Master Research Programmes', href: '/programmes/master-research', category: 'Programme Structure', type: 'LINK', action: 'Open' },
      { title: 'Master Mixed Mode Programmes', href: '/programmes/master-mixed', category: 'Programme Structure', type: 'LINK', action: 'Open' },
      { title: 'Doctoral Programmes', href: '/programmes/doctoral', category: 'Programme Structure', type: 'LINK', action: 'Open' },
      { title: 'Faculty Brochure', href: '/student/brochure-faculty', category: 'Programme Structure', type: 'LINK', action: 'Open' },
      { title: 'SGS Brochure', href: '/student/brochure-sgs', category: 'Programme Structure', type: 'LINK', action: 'Open' },
      {
        title: 'Programme Fees',
        href: '/programmes/fees',
        category: 'Programme Structure',
        type: 'LINK',
        action: 'Open',
      },
    ],
  },
  {
    category: 'Academic Matters',
    description: 'Academic forms, thesis documents, financial forms, academic calendar, regulations, and examination resources.',
    icon: FileText,
    items: [
      { title: 'Academic Forms', href: '/resources/academic-forms', category: 'Academic Matters', type: 'LINK', action: 'Open' },
      { title: 'Thesis Forms & Templates', href: '/resources/thesis-forms', category: 'Academic Matters', type: 'LINK', action: 'Open' },
      { title: 'Financial Forms', href: '/resources/financial-forms', category: 'Academic Matters', type: 'LINK', action: 'Open' },
      { title: 'Academic Calendar', href: '/calendar', category: 'Academic Matters', type: 'LINK', action: 'Open' },
      { title: 'Academic Regulations', href: '/regulations', category: 'Academic Matters', type: 'LINK', action: 'Open' },
      { title: 'Final Examination Information', href: '/student/examination-info', category: 'Academic Matters', type: 'LINK', action: 'Open' },
      ...academicForms.map((filename): ResourceItem => ({
        title: toTitle(filename),
        href: fileHref('Document file/Academic Forms file', filename),
        category: 'Academic Matters',
        type: 'PDF',
        action: 'Download',
      })),
      ...thesisForms.map((filename): ResourceItem => ({
        title: toTitle(filename),
        href: fileHref('Document file/Thesis Forms file', filename),
        category: 'Academic Matters',
        type: 'PDF',
        action: 'Download',
      })),
      ...financialForms.map((filename): ResourceItem => ({
        title: toTitle(filename),
        href: fileHref('Document file/Financial Forms file', filename),
        category: 'Academic Matters',
        type: 'PDF',
        action: 'Download',
      })),
    ],
  },
  {
    category: 'Room Reservation',
    description: 'Forms and procedures for room, auditorium, and meeting space reservations at SPS.',
    icon: Library,
    items: [
      { title: 'Room Reservation', href: '/facilities/reservation', category: 'Room Reservation', type: 'LINK', action: 'Open' },
      ...roomReservationFiles.map((filename): ResourceItem => ({
        title: toTitle(filename),
        href: fileHref('Document file/Reservation Files', filename),
        category: 'Room Reservation',
        type: 'PDF',
        action: 'Download',
      })),
    ],
  },
  {
    category: 'Facilities',
    description: 'Facilities information, rental references, payment guidance, and university facility links.',
    icon: Building2,
    items: [
      { title: 'Facilities', href: '/facilities', category: 'Facilities', type: 'LINK', action: 'Open' },
      { title: 'Room Reservation', href: '/facilities/reservation', category: 'Facilities', type: 'LINK', action: 'Open' },
      { title: 'Payment Hub - Application Procedure', href: '/images/resources/Payment Hub - Application Procedure.pdf', category: 'Facilities', type: 'PDF', action: 'View' },
      { title: 'UTeM Facilities', href: 'https://www.utem.edu.my/en/facilities.html', category: 'Facilities', type: 'LINK', action: 'Open', external: true },
    ],
  },
  {
    category: 'Information for Students',
    description: 'Student-facing resources, convocation information, research support, gallery, and application access.',
    icon: Users,
    items: [
      { title: 'Student Information', href: '/student/student-info', category: 'Information for Students', type: 'LINK', action: 'Open' },
      { title: 'UTeM Convocation', href: '/student/student-info/utem-convocation', category: 'Information for Students', type: 'LINK', action: 'Open' },
      { title: 'Student Research Hub', href: '/student/future/research', category: 'Information for Students', type: 'LINK', action: 'Open' },
      { title: 'Academic Awards', href: '/student/academic-awards', category: 'Information for Students', type: 'LINK', action: 'Open' },
      { title: 'Picture Gallery', href: '/gallery', category: 'Information for Students', type: 'LINK', action: 'Open' },
      { title: 'Apply Now', href: '/apply-now', category: 'Information for Students', type: 'LINK', action: 'Open' },
    ],
  },
  {
    category: 'Information for Academics',
    description: 'Administrative directories, staff references, quality documents, and academic support pages.',
    icon: Library,
    items: [
      { title: 'Person in Charge', href: '/about/staff', category: 'Information for Academics', type: 'LINK', action: 'Open' },
      { title: 'Staff Directory', href: '/about/directory', category: 'Information for Academics', type: 'LINK', action: 'Open' },
      { title: 'Organizational Chart', href: '/about/org-chart', category: 'Information for Academics', type: 'LINK', action: 'Open' },
      { title: 'Organization Chart by Unit', href: '/about/org-chart-unit', category: 'Information for Academics', type: 'LINK', action: 'Open' },
      { title: 'MQA Standards and Program Standards', href: '/accreditation/mqa-standards', category: 'Information for Academics', type: 'LINK', action: 'Open' },
    ],
  },
];

const categories = groups.map((group) => group.category);

const Resources: React.FC<ResourcesProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'All'>('All');

  const allItems = useMemo(() => groups.flatMap((group) => group.items), []);
  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return groups
      .filter((group) => selectedCategory === 'All' || group.category === selectedCategory)
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          if (!query) return true;
          return [item.title, item.category, item.type, item.description || '']
            .join(' ')
            .toLowerCase()
            .includes(query);
        }),
      }))
      .filter((group) => group.items.length > 0);
  }, [searchQuery, selectedCategory]);

  const resultCount = filteredGroups.reduce((total, group) => total + group.items.length, 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section className="border-b border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">
            <Link to="/" className="transition-colors hover:text-[#A51C30]">
              HOME
            </Link>
            <ChevronRight size={11} />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'RESOURCES' : 'SUMBER'}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#A51C30]">
                School of Graduate Studies
              </p>
              <h1 className="mb-5 font-serif text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                {lang === 'EN' ? 'Resources' : 'Sumber'}
              </h1>
              <p className="max-w-3xl text-lg font-light leading-relaxed text-gray-600">
                {lang === 'EN'
                  ? 'Access official forms, templates, academic documents, facilities information, and student resources.'
                  : 'Akses borang rasmi, templat, dokumen akademik, maklumat kemudahan, dan sumber pelajar.'}
              </p>
            </motion.div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                  Resource Index
                </span>
                <span className="font-serif text-3xl font-bold text-[#A51C30]">{allItems.length}</span>
              </div>
              <p className="pt-4 text-sm font-light leading-relaxed text-gray-500">
                {lang === 'EN'
                  ? 'Documents and links are grouped by official postgraduate service area.'
                  : 'Dokumen dan pautan dikumpulkan mengikut bidang perkhidmatan pascasiswazah rasmi.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-8 lg:flex-row lg:items-center lg:px-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={lang === 'EN' ? 'Search by document name' : 'Cari mengikut nama dokumen'}
              className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm text-gray-700 outline-none transition focus:border-[#A51C30] focus:ring-4 focus:ring-[#A51C30]/10"
            />
          </div>

          <div className="relative min-w-full lg:min-w-[280px]">
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value as ResourceCategory | 'All')}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-4 pr-11 text-sm text-gray-700 outline-none transition focus:border-[#A51C30] focus:ring-4 focus:ring-[#A51C30]/10"
            >
              <option value="All">{lang === 'EN' ? 'All Categories' : 'Semua Kategori'}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                {lang === 'EN' ? 'Resource Hub' : 'Hab Sumber'}
              </h2>
              <p className="mt-2 text-sm font-light text-gray-500">
                {resultCount} {lang === 'EN' ? 'resources available' : 'sumber tersedia'}
              </p>
            </div>
            <Link
              to="/resources/academic-forms"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#A51C30] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#A51C30]/15 transition hover:bg-[#8B1829]"
            >
              <span>{lang === 'EN' ? 'Browse Forms' : 'Lihat Borang'}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-8">
            {filteredGroups.map((group, groupIndex) => {
              const Icon = group.icon;

              return (
                <motion.section
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className="border-b border-gray-100 p-6 md:p-8">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#A51C30]/10 text-[#A51C30]">
                          <Icon size={23} />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-bold text-gray-900">{group.category}</h3>
                          <p className="mt-2 max-w-3xl text-sm font-light leading-relaxed text-gray-500">{group.description}</p>
                        </div>
                      </div>
                      <div className="w-fit rounded-full border border-gray-200 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                        {group.items.length} {lang === 'EN' ? 'items' : 'item'}
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {group.items.map((item) => {
                      const isInternalRoute = item.href.startsWith('/') && !item.href.includes('.');
                      const actionLabel = lang === 'EN' ? item.action : item.action === 'Open' ? 'Buka' : item.action === 'View' ? 'Lihat' : 'Muat Turun';
                      const content = (
                        <>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                {item.type}
                              </span>
                              <h4 className="text-sm font-bold text-gray-900 transition group-hover:text-[#A51C30] md:text-base">
                                {item.title}
                              </h4>
                            </div>
                            {item.description && (
                              <p className="mt-2 text-xs font-light leading-relaxed text-gray-500">{item.description}</p>
                            )}
                          </div>
                          <div className="flex flex-shrink-0 items-center gap-3">
                            <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:inline">
                              {actionLabel}
                            </span>
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition group-hover:bg-[#A51C30] group-hover:text-white">
                              {item.action === 'Download' ? <Download size={15} /> : item.external ? <ExternalLink size={15} /> : <ArrowRight size={15} />}
                            </div>
                          </div>
                        </>
                      );

                      return isInternalRoute ? (
                        <Link
                          key={`${item.category}-${item.title}`}
                          to={item.href}
                          className="group flex items-center gap-4 p-5 transition hover:bg-gray-50 md:p-6"
                        >
                          {content}
                        </Link>
                      ) : (
                        <a
                          key={`${item.category}-${item.title}`}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 p-5 transition hover:bg-gray-50 md:p-6"
                        >
                          {content}
                        </a>
                      );
                    })}
                  </div>
                </motion.section>
              );
            })}
          </div>

          {filteredGroups.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-white py-20 text-center">
              <Search size={32} className="mx-auto mb-4 text-gray-300" />
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                {lang === 'EN' ? 'No resources found' : 'Tiada sumber ditemui'}
              </h3>
              <p className="mt-2 text-sm font-light text-gray-500">
                {lang === 'EN' ? 'Try a different document name or category.' : 'Cuba nama dokumen atau kategori lain.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
