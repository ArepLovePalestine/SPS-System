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
  | 'Information for Academics'
  | 'Convocation'
  | 'Registration Info'
  | 'Upgrade Gallery'
  | 'UTeM Scholarship';

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

const pdfModules = import.meta.glob('../src/assets/Document file/All resources/**/*.pdf', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const docModules = import.meta.glob('../src/assets/Document file/All resources/**/*.{doc,docx}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const allDocuments = { ...pdfModules, ...docModules };

const toTitle = (filename: string) => {
  return filename
    .replace(/\.(pdf|doc|docx)$/i, '')
    .replace(/[\-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const getAcademicFormsItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Academic Matters/Academic Forms file') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Academic Matters', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getThesisFormsItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Academic Matters/Thesis Forms file') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Academic Matters', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getFinancialFormsItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Academic Matters/Financial Forms file') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Academic Matters', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getISOFormsItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Academic Matters/ISO Form') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'ISO Document', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getResearchProposalItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Research Proposal file') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Research Proposal Template', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getAcademicCalendarItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Programme Structure/Academic Calender') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Programme Structure', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getReservationItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Reservation Files/') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Room Reservation', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getFacilitiesItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Facilities/') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        const pathParts = key.replace(/\\/g, '/').split('/');
        const facilitiesIndex = pathParts.findIndex(p => p === 'Facilities');
        if (facilitiesIndex !== -1 && facilitiesIndex + 1 < pathParts.length) {
          const roomName = pathParts[facilitiesIndex + 1];
          items.push({ title: `${toTitle(roomName)} - ${toTitle(filename)}`, href: allDocuments[key], category: 'Facilities', type: 'PDF', action: 'Download', external: true });
        }
      }
    }
  }
  return items;
};

const getStudentInfoItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Information For Students/')) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.') && !processedKeys.has(key)) {
        processedKeys.add(key);
        const pathParts = key.replace(/\\/g, '/').split('/');
        const studentIndex = pathParts.findIndex(p => p === 'Information For Students');
        let title = toTitle(filename);
        if (studentIndex !== -1 && studentIndex + 1 < pathParts.length) {
          const subfolder = pathParts[studentIndex + 1];
          if (subfolder && !subfolder.includes(filename)) {
            title = `${toTitle(subfolder)} - ${toTitle(filename)}`;
          }
        }
        items.push({ title, href: allDocuments[key], category: 'Information for Students', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getAcademicsInfoItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Information For Academics/')) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.') && !processedKeys.has(key)) {
        processedKeys.add(key);
        const pathParts = key.replace(/\\/g, '/').split('/');
        const academicIndex = pathParts.findIndex(p => p === 'Information For Academics');
        let title = toTitle(filename);
        if (academicIndex !== -1 && academicIndex + 1 < pathParts.length) {
          const subfolder = pathParts[academicIndex + 1];
          if (subfolder && !subfolder.includes(filename)) {
            title = `${toTitle(subfolder)} - ${toTitle(filename)}`;
          }
        }
        items.push({ title, href: allDocuments[key], category: 'Information for Academics', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

// ✅ Fungsi baru — letak LUAR dari fungsi lain
const getConvocationItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Convocation/') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Convocation', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getRegistrationInfoItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Registration Info/') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Registration Info', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getUpgradeGalleryItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('Upgrade Gallery/') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'Upgrade Gallery', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const getUTemScholarshipItems = (): ResourceItem[] => {
  const items: ResourceItem[] = [];
  const processedKeys = new Set<string>();
  for (const key in allDocuments) {
    if (key.includes('UTeM Scholarship/') && !processedKeys.has(key)) {
      const filename = key.split('/').pop() || '';
      if (filename && !filename.startsWith('.')) {
        processedKeys.add(key);
        items.push({ title: toTitle(filename), href: allDocuments[key], category: 'UTeM Scholarship', type: 'PDF', action: 'Download', external: true });
      }
    }
  }
  return items;
};

const groups: ResourceGroup[] = [
  { category: 'ISO Document', description: 'ISO related documents and templates.', icon: ShieldCheck, items: getISOFormsItems() },
  { category: 'Research Proposal Template', description: 'Templates for research proposal preparation.', icon: BookOpen, items: getResearchProposalItems() },
  { category: 'Programme Structure', description: 'Programme structure and academic calendar.', icon: GraduationCap, items: getAcademicCalendarItems() },
  { category: 'Academic Matters', description: 'Academic forms, thesis, and financial documents.', icon: FileText, items: [...getAcademicFormsItems(), ...getThesisFormsItems(), ...getFinancialFormsItems()] },
  { category: 'Room Reservation', description: 'Room booking and reservation documents.', icon: Library, items: getReservationItems() },
  { category: 'Facilities', description: 'Facilities and rooms available.', icon: Building2, items: getFacilitiesItems() },
  { category: 'Information for Students', description: 'Guides and student-related information.', icon: Users, items: getStudentInfoItems() },
  { category: 'Information for Academics', description: 'Academic staff and policy references.', icon: Library, items: getAcademicsInfoItems() },
  { category: 'Convocation', description: 'Convocation related documents and information.', icon: GraduationCap, items: getConvocationItems() },
  { category: 'Registration Info', description: 'Registration information and guidelines.', icon: FileText, items: getRegistrationInfoItems() },
  { category: 'Upgrade Gallery', description: 'Upgrade gallery documents and references.', icon: Library, items: getUpgradeGalleryItems() },
  { category: 'UTeM Scholarship', description: 'UTeM scholarship information and application forms.', icon: BookOpen, items: getUTemScholarshipItems() },
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
          return [item.title, item.category, item.type, item.description || ''].join(' ').toLowerCase().includes(query);
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
            <Link to="/" className="transition-colors hover:text-[#A51C30]">HOME</Link>
            <ChevronRight size={11} />
            <span className="text-[#A51C30]">{lang === 'EN' ? 'RESOURCES' : 'SUMBER'}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
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
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">Resource Index</span>
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
                <option key={category} value={category}>{category}</option>
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
                        <Link key={`${item.category}-${item.title}`} to={item.href} className="group flex items-center gap-4 p-5 transition hover:bg-gray-50 md:p-6">
                          {content}
                        </Link>
                      ) : (
                        <a key={`${item.category}-${item.title}`} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 transition hover:bg-gray-50 md:p-6">
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