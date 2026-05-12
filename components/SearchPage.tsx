import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search, X } from 'lucide-react';
import { Language } from '../types';

interface SearchPageProps {
  lang: Language;
}

interface SearchItem {
  title: { EN: string; BM: string };
  description: { EN: string; BM: string };
  category: { EN: string; BM: string };
  href: string;
  programmeName?: { EN: string; BM: string };
  facultyName?: { EN: string; BM: string };
  keywords?: { EN: string[]; BM: string[] };
}

const SEARCH_INDEX: SearchItem[] = [
  {
    title: { EN: 'Staff Directory', BM: 'Direktori Staf' },
    description: { EN: 'Browse postgraduate office contacts and staff details.', BM: 'Semak maklumat staf dan pegawai pascasiswazah.' },
    category: { EN: 'About Us', BM: 'Tentang Kami' },
    href: '/about/directory',
    keywords: { EN: ['staff', 'directory', 'contact', 'pegawai'], BM: ['staf', 'direktori', 'hubungi', 'pegawai'] },
  },
  {
    title: { EN: 'Person in Charge', BM: 'Pegawai Bertanggungjawab' },
    description: { EN: 'View key officers and leadership profiles for SGS.', BM: 'Lihat profil pegawai utama dan kepimpinan SGS.' },
    category: { EN: 'About Us', BM: 'Tentang Kami' },
    href: '/about/staff',
    keywords: { EN: ['person in charge', 'leadership', 'dean', 'officer'], BM: ['pegawai', 'kepimpinan', 'dekan'] },
  },
  {
    title: { EN: 'Programmes Overview', BM: 'Gambaran Program' },
    description: { EN: 'Explore postgraduate study pathways and academic routes at UTeM.', BM: 'Terokai laluan pengajian pascasiswazah dan program akademik di UTeM.' },
    category: { EN: 'Programmes', BM: 'Program' },
    href: '/programmes',
    keywords: { EN: ['programme', 'program', 'course', 'postgraduate'], BM: ['program', 'kursus', 'pascasiswazah'] },
  },
  {
    title: { EN: 'Programme Fees', BM: 'Yuran Program' },
    description: { EN: 'Review tuition and fee information for postgraduate programmes.', BM: 'Semak maklumat yuran dan fi program pascasiswazah.' },
    category: { EN: 'Administration', BM: 'Pentadbiran' },
    href: '/programmes/fees',
    keywords: { EN: ['fees', 'fee', 'tuition', 'payment'], BM: ['yuran', 'fi', 'bayaran'] },
  },
  {
    title: { EN: 'Doctoral Programmes', BM: 'Program Doktoral' },
    description: { EN: 'Discover PhD, DEng, DTM, and DIT doctoral pathways.', BM: 'Ketahui laluan PhD, DEng, DTM, dan DIT.' },
    category: { EN: 'Programmes', BM: 'Program' },
    href: '/programmes/doctoral',
    keywords: { EN: ['phd', 'doctoral', 'doctor of philosophy', 'deng', 'dtm', 'dit'], BM: ['doktoral', 'phd', 'doktor falsafah'] },
  },
  {
    title: { EN: 'Master by Taught Course', BM: 'Sarjana Kerja Kursus' },
    description: { EN: 'View taught-course postgraduate options across UTeM faculties.', BM: 'Lihat pilihan sarjana kerja kursus merentas fakulti UTeM.' },
    category: { EN: 'Programmes', BM: 'Program' },
    href: '/programmes/master-taught',
    keywords: { EN: ['taught course', 'master', 'coursework'], BM: ['kerja kursus', 'sarjana'] },
  },
  {
    title: { EN: 'Master by Research', BM: 'Sarjana Penyelidikan' },
    description: { EN: 'Find research-based masters programmes and faculty options.', BM: 'Cari program sarjana berasaskan penyelidikan dan pilihan fakulti.' },
    category: { EN: 'Programmes', BM: 'Program' },
    href: '/programmes/master-research',
    keywords: { EN: ['research', 'master research', 'thesis'], BM: ['penyelidikan', 'tesis', 'sarjana penyelidikan'] },
  },
  {
    title: { EN: 'Master by Mixed Mode', BM: 'Sarjana Mod Campuran' },
    description: { EN: 'Review mixed-mode masters pathways with coursework and research.', BM: 'Semak laluan sarjana mod campuran dengan kerja kursus dan penyelidikan.' },
    category: { EN: 'Programmes', BM: 'Program' },
    href: '/programmes/master-mixed',
    keywords: { EN: ['mixed mode', 'coursework and research'], BM: ['mod campuran'] },
  },
  {
    title: { EN: 'FTKM Taught Course Portfolio', BM: 'Portfolio Kerja Kursus FTKM' },
    description: { EN: 'Mechanical Engineering taught-course portfolio for FTKM.', BM: 'Portfolio kerja kursus Kejuruteraan Mekanikal untuk FTKM.' },
    category: { EN: 'Faculty Programme', BM: 'Program Fakulti' },
    href: '/programmes/faculty?faculty=fkm&category=taught',
    facultyName: { EN: 'Faculty of Mechanical Technology and Engineering (FTKM)', BM: 'Fakulti Teknologi dan Kejuruteraan Mekanikal (FTKM)' },
    programmeName: { EN: 'Mechanical Engineering', BM: 'Kejuruteraan Mekanikal' },
    keywords: { EN: ['mechan', 'mechanical', 'ftkm', 'energy engineering', 'automotive', 'product design'], BM: ['mekanikal', 'ftkm', 'automotif', 'reka bentuk produk'] },
  },
  {
    title: { EN: 'FTMK Postgraduate Programmes', BM: 'Program Pascasiswazah FTMK' },
    description: { EN: 'Information and communication technology postgraduate study options.', BM: 'Pilihan pengajian pascasiswazah teknologi maklumat dan komunikasi.' },
    category: { EN: 'Faculty Programme', BM: 'Program Fakulti' },
    href: '/programmes/faculty?faculty=ftmk&category=research',
    facultyName: { EN: 'Faculty of Information and Communication Technology (FTMK)', BM: 'Fakulti Teknologi Maklumat dan Komunikasi (FTMK)' },
    programmeName: { EN: 'Information Technology and ICT', BM: 'Teknologi Maklumat dan ICT' },
    keywords: { EN: ['ftmk', 'ict', 'information technology', 'software', 'data'], BM: ['ftmk', 'ict', 'teknologi maklumat'] },
  },
  {
    title: { EN: 'Final Examination Information', BM: 'Maklumat Peperiksaan Akhir' },
    description: { EN: 'Access final examination notices, protocols, and timetables.', BM: 'Akses notis, protokol, dan jadual peperiksaan akhir.' },
    category: { EN: 'Student Info', BM: 'Maklumat Pelajar' },
    href: '/student/examination-info',
    keywords: { EN: ['exam', 'examination', 'final exam', 'timetable'], BM: ['exam', 'peperiksaan', 'jadual peperiksaan'] },
  },
  {
    title: { EN: 'Academic Regulations', BM: 'Peraturan Akademik' },
    description: { EN: 'Read postgraduate academic policies, rules, and regulations.', BM: 'Baca polisi, peraturan, dan syarat akademik pascasiswazah.' },
    category: { EN: 'Regulations', BM: 'Peraturan' },
    href: '/regulations',
    keywords: { EN: ['regulation', 'academic', 'rules', 'policy'], BM: ['peraturan', 'akademik', 'polisi'] },
  },
  {
    title: { EN: 'Resources', BM: 'Sumber' },
    description: { EN: 'Access forms, templates, and downloadable academic resources.', BM: 'Akses borang, templat, dan sumber akademik untuk dimuat turun.' },
    category: { EN: 'Resources', BM: 'Sumber' },
    href: '/resources',
    keywords: { EN: ['resources', 'forms', 'download'], BM: ['sumber', 'borang', 'muat turun'] },
  },
  {
    title: { EN: 'SGS Brochure', BM: 'Broshur SGS' },
    description: { EN: 'Open the School of Graduate Studies brochure.', BM: 'Buka broshur School of Graduate Studies.' },
    category: { EN: 'Brochure', BM: 'Broshur' },
    href: '/student/brochure-sgs',
    keywords: { EN: ['brochure', 'prospectus', 'sgs brochure'], BM: ['broshur', 'prospektus'] },
  },
  {
    title: { EN: 'Kesidang Scholarship', BM: 'Biasiswa Kesidang' },
    description: { EN: 'Check scholarship details, eligibility, and announcements.', BM: 'Semak maklumat biasiswa, kelayakan, dan pengumuman.' },
    category: { EN: 'Financial Assistance', BM: 'Bantuan Kewangan' },
    href: '/kesidang-scholarship',
    keywords: { EN: ['kesidang', 'scholarship', 'financial aid'], BM: ['kesidang', 'biasiswa', 'bantuan kewangan'] },
  },
  {
    title: { EN: 'Kesidang Form', BM: 'Borang Kesidang' },
    description: { EN: 'Open the Kesidang scholarship page for form-related information and downloads.', BM: 'Buka halaman biasiswa Kesidang untuk maklumat dan muat turun borang.' },
    category: { EN: 'Financial Assistance', BM: 'Bantuan Kewangan' },
    href: '/kesidang-scholarship',
    keywords: { EN: ['kesidang form', 'form', 'scholarship form'], BM: ['borang kesidang', 'borang biasiswa'] },
  },
  {
    title: { EN: 'Facilities', BM: 'Kemudahan' },
    description: { EN: 'View SGS facilities and campus support spaces.', BM: 'Lihat kemudahan SGS dan ruang sokongan kampus.' },
    category: { EN: 'Facilities', BM: 'Kemudahan' },
    href: '/facilities',
    keywords: { EN: ['facilities', 'building', 'library', 'postgraduate room'], BM: ['kemudahan', 'bangunan', 'perpustakaan'] },
  },
  {
    title: { EN: 'Room Reservation', BM: 'Tempahan Ruang' },
    description: { EN: 'Reserve postgraduate rooms and facilities online.', BM: 'Tempah ruang dan kemudahan pascasiswazah secara dalam talian.' },
    category: { EN: 'Facilities', BM: 'Kemudahan' },
    href: '/facilities/reservation',
    keywords: { EN: ['room', 'reservation', 'meeting room', 'booking'], BM: ['ruang', 'tempahan', 'bilik', 'tempah'] },
  },
  {
    title: { EN: 'UTeM Convocation', BM: 'Konvokesyen UTeM' },
    description: { EN: 'Find convocation information for graduating students.', BM: 'Cari maklumat konvokesyen untuk pelajar bergraduat.' },
    category: { EN: 'Student Info', BM: 'Maklumat Pelajar' },
    href: '/student/student-info/utem-convocation',
    keywords: { EN: ['convocation', 'graduation'], BM: ['konvokesyen', 'graduasi'] },
  },
  {
    title: { EN: 'ISO Documents', BM: 'Dokumen ISO' },
    description: { EN: 'Open SGS ISO and quality-related documents.', BM: 'Buka dokumen ISO dan dokumen berkaitan kualiti SGS.' },
    category: { EN: 'Quality Documents', BM: 'Dokumen Kualiti' },
    href: '/about/iso-documents',
    keywords: { EN: ['iso', 'quality', 'document'], BM: ['iso', 'kualiti', 'dokumen'] },
  },
  {
    title: { EN: 'Electronic Archives', BM: 'Arkib Elektronik' },
    description: { EN: 'View archived posters, notices, and digital documentation.', BM: 'Lihat poster arkib, notis, dan dokumentasi digital.' },
    category: { EN: 'Archives', BM: 'Arkib' },
    href: '/about/electronic-archives',
    keywords: { EN: ['archives', 'archive', 'poster', 'electronic'], BM: ['arkib', 'poster', 'elektronik'] },
  },
  {
    title: { EN: 'Academic Forms', BM: 'Borang Akademik' },
    description: { EN: 'Download official academic forms for postgraduate students.', BM: 'Muat turun borang akademik rasmi untuk pelajar pascasiswazah.' },
    category: { EN: 'Resources', BM: 'Sumber' },
    href: '/resources/academic-forms',
    keywords: { EN: ['academic form', 'form', 'document'], BM: ['borang akademik', 'borang'] },
  },
  {
    title: { EN: 'Research Proposal Templates', BM: 'Templat Cadangan Penyelidikan' },
    description: { EN: 'Access research proposal templates and submission forms.', BM: 'Akses templat cadangan penyelidikan dan borang penyerahan.' },
    category: { EN: 'Resources', BM: 'Sumber' },
    href: '/resources/research-proposal',
    keywords: { EN: ['research proposal', 'template', 'proposal'], BM: ['cadangan penyelidikan', 'templat'] },
  },
  {
    title: { EN: 'Thesis Forms & Templates', BM: 'Borang & Templat Tesis' },
    description: { EN: 'Find thesis preparation and submission templates.', BM: 'Cari templat penyediaan dan penyerahan tesis.' },
    category: { EN: 'Resources', BM: 'Sumber' },
    href: '/resources/thesis-forms',
    keywords: { EN: ['thesis', 'template', 'submission'], BM: ['tesis', 'templat', 'penyerahan'] },
  },
  {
    title: { EN: 'Financial Forms', BM: 'Borang Kewangan' },
    description: { EN: 'Access financial claim and assistance forms.', BM: 'Akses borang tuntutan dan bantuan kewangan.' },
    category: { EN: 'Resources', BM: 'Sumber' },
    href: '/resources/financial-forms',
    keywords: { EN: ['financial form', 'claim', 'funding'], BM: ['borang kewangan', 'tuntutan'] },
  },
  {
    title: { EN: 'ISO Forms & Templates', BM: 'Borang & Templat ISO' },
    description: { EN: 'Open ISO templates and quality-management forms.', BM: 'Buka templat ISO dan borang pengurusan kualiti.' },
    category: { EN: 'Resources', BM: 'Sumber' },
    href: '/resources/iso-forms',
    keywords: { EN: ['iso form', 'quality template'], BM: ['borang iso', 'templat kualiti'] },
  },
];

const popularSuggestions = {
  EN: ['programme fees', 'exam', 'mechanical', 'kesidang', 'room reservation'],
  BM: ['yuran', 'peperiksaan', 'mekanikal', 'kesidang', 'tempahan ruang'],
};

const normalizeValue = (value: string) => value.toLowerCase().replace(/\s+/g, ' ').trim();
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const isInternalLink = (href: string) => href.startsWith('/');

const SearchPage: React.FC<SearchPageProps> = ({ lang }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '');
  const minimumQueryLength = 2;
  const trimmedQuery = query.trim();
  const normalizedQuery = normalizeValue(trimmedQuery);
  const queryTerms = normalizedQuery ? normalizedQuery.split(' ').filter(Boolean) : [];

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams);
    if (trimmedQuery) {
      nextParams.set('q', trimmedQuery);
    } else {
      nextParams.delete('q');
    }
    setSearchParams(nextParams, { replace: true });
  }, [query, trimmedQuery, searchParams, setSearchParams]);

  const results = useMemo(() => {
    if (trimmedQuery.length < minimumQueryLength) {
      return [];
    }

    return SEARCH_INDEX.map((item) => {
      const searchableValues = [
        item.title[lang],
        item.title[lang === 'EN' ? 'BM' : 'EN'],
        item.description[lang],
        item.description[lang === 'EN' ? 'BM' : 'EN'],
        item.category[lang],
        item.category[lang === 'EN' ? 'BM' : 'EN'],
        item.programmeName?.[lang] ?? '',
        item.programmeName?.[lang === 'EN' ? 'BM' : 'EN'] ?? '',
        item.facultyName?.[lang] ?? '',
        item.facultyName?.[lang === 'EN' ? 'BM' : 'EN'] ?? '',
        item.href,
        ...(item.keywords?.[lang] ?? []),
        ...(item.keywords?.[lang === 'EN' ? 'BM' : 'EN'] ?? []),
      ];

      const haystack = normalizeValue(searchableValues.join(' '));
      const titleValue = normalizeValue(item.title[lang]);
      const alternateTitleValue = normalizeValue(item.title[lang === 'EN' ? 'BM' : 'EN']);
      const matchedTerms = queryTerms.filter((term) => haystack.includes(term));
      const matched = matchedTerms.length > 0 || haystack.includes(normalizedQuery);
      if (!matched) {
        return null;
      }

      const score = queryTerms.reduce((total, term) => {
        let nextScore = total;
        if (titleValue.includes(term) || alternateTitleValue.includes(term)) nextScore += 7;
        if (normalizeValue(item.category[lang]).includes(term) || normalizeValue(item.category[lang === 'EN' ? 'BM' : 'EN']).includes(term)) nextScore += 4;
        if (normalizeValue(item.programmeName?.[lang] ?? '').includes(term) || normalizeValue(item.programmeName?.[lang === 'EN' ? 'BM' : 'EN'] ?? '').includes(term)) nextScore += 5;
        if (normalizeValue(item.facultyName?.[lang] ?? '').includes(term) || normalizeValue(item.facultyName?.[lang === 'EN' ? 'BM' : 'EN'] ?? '').includes(term)) nextScore += 5;
        if (normalizeValue(item.description[lang]).includes(term) || normalizeValue(item.description[lang === 'EN' ? 'BM' : 'EN']).includes(term)) nextScore += 3;
        if ((item.keywords?.[lang] ?? []).some((keyword) => normalizeValue(keyword).includes(term))) nextScore += 4;
        if ((item.keywords?.[lang === 'EN' ? 'BM' : 'EN'] ?? []).some((keyword) => normalizeValue(keyword).includes(term))) nextScore += 4;
        if (normalizeValue(item.href).includes(term)) nextScore += 2;
        return nextScore;
      }, 0);

      const phraseBonus = haystack.includes(normalizedQuery) ? 10 : 0;
      const completeMatchBonus = matchedTerms.length === queryTerms.length ? 6 : 0;

      return { item, score: score + phraseBonus + completeMatchBonus };
    })
      .filter((entry): entry is { item: SearchItem; score: number } => entry !== null)
      .sort((a, b) => b.score - a.score || a.item.title[lang].localeCompare(b.item.title[lang]));
  }, [lang, queryTerms, trimmedQuery.length]);

  const highlightText = (text: string) => {
    if (!queryTerms.length) return text;
    const pattern = new RegExp(`(${queryTerms.map(escapeRegExp).join('|')})`, 'ig');
    const parts = text.split(pattern);
    return parts.map((part, index) => {
      const matched = queryTerms.some((term) => part.toLowerCase() === term.toLowerCase());
      return matched ? (
        <mark key={`${part}-${index}`} className="rounded bg-[#A51C30]/12 px-1 text-[#A51C30]">
          {part}
        </mark>
      ) : (
        <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
      );
    });
  };

  const title = lang === 'BM' ? 'Carian Pintar' : 'Smart Search';
  const heading = lang === 'BM' ? 'Cari halaman, program, dan dokumen dengan pantas' : 'Search pages, programmes, and documents instantly';
  const description =
    lang === 'BM'
      ? 'Taip sekurang-kurangnya dua huruf untuk melihat hasil berkaitan secara langsung berdasarkan tajuk, fakulti, kategori, program, penerangan, dan kata kunci.'
      : 'Type at least two characters to see live related results based on title, faculty, category, programme, description, and keywords.';
  const placeholder = lang === 'BM' ? 'Contoh: mekanikal, yuran, exam, kesidang...' : 'Example: mechan, fee, exam, kesidang...';
  const helper = lang === 'BM' ? 'Taip sekurang-kurangnya 2 aksara untuk mula mencari.' : 'Type at least 2 characters to begin searching.';
  const noResults = lang === 'BM' ? 'Tiada hasil berkaitan ditemui.' : 'No related results found.';
  const clearLabel = lang === 'BM' ? 'Padam' : 'Clear';
  const openLabel = lang === 'BM' ? 'Buka' : 'Open';
  const resultLabel =
    lang === 'BM'
      ? `${results.length} hasil berkaitan`
      : `${results.length} related result${results.length === 1 ? '' : 's'}`;

  return (
    <section className="min-h-screen bg-[#f7f4ef] px-4 pb-20 pt-32 sm:px-6 lg:px-12">
      <div className="mx-auto w-full max-w-[1180px] space-y-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#A51C30]">{title}</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-gray-950 md:text-5xl">
            {heading}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-gray-600">{description}</p>
        </div>

        <div className="rounded-[28px] border border-[#e5ddd4] bg-white p-5 shadow-[0_18px_50px_rgba(23,23,23,0.08)] sm:p-7 lg:p-8">
          <div className="rounded-[22px] border border-[#e8e1d8] bg-[#fcfbf8] p-3 sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-transparent bg-white px-4 py-4 shadow-sm ring-1 ring-[#ece5dc] transition focus-within:ring-2 focus-within:ring-[#A51C30]/20">
                <Search size={19} className="shrink-0 text-gray-500" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={placeholder}
                  className="w-full min-w-0 bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400"
                />
              </label>

              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#e7ddd2] bg-white px-4 py-4 text-sm font-semibold text-gray-600 transition hover:border-[#A51C30]/40 hover:text-[#A51C30]"
                >
                  <X size={16} />
                  {clearLabel}
                </button>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <span>{trimmedQuery.length >= minimumQueryLength ? resultLabel : helper}</span>
              {trimmedQuery.length < minimumQueryLength && (
                <>
                  <span className="text-gray-300">|</span>
                  <div className="flex flex-wrap gap-2">
                    {popularSuggestions[lang].map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => setQuery(suggestion)}
                        className="rounded-full border border-[#eadfd5] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#A51C30] transition hover:border-[#A51C30]/40"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-6 max-h-[70vh] overflow-y-auto pr-1">
            {trimmedQuery.length >= minimumQueryLength ? (
              results.length ? (
                <div className="space-y-4">
                  {results.map(({ item }) => {
                    const action = (
                      <>
                        <div className="min-w-0 space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex rounded-full bg-[#A51C30]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A51C30]">
                              {item.category[lang]}
                            </span>
                            {item.facultyName ? (
                              <span className="text-xs font-medium uppercase tracking-[0.14em] text-gray-400">
                                {highlightText(item.facultyName[lang])}
                              </span>
                            ) : null}
                          </div>

                          <h2 className="font-serif text-2xl leading-snug text-gray-950">
                            {highlightText(item.title[lang])}
                          </h2>

                          <p className="text-sm leading-7 text-gray-600">{highlightText(item.description[lang])}</p>

                          {item.programmeName ? (
                            <p className="text-sm font-medium text-gray-500">
                              {highlightText(item.programmeName[lang])}
                            </p>
                          ) : null}
                        </div>

                        <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e9ddd4] bg-white px-4 py-2 text-sm font-semibold text-[#A51C30] transition group-hover:border-[#A51C30]/40 group-hover:bg-[#fff8f5]">
                          {openLabel}
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </>
                    );

                    const classes = 'group flex flex-col gap-5 rounded-[24px] border border-[#ece2d8] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#A51C30]/25 hover:shadow-[0_16px_30px_rgba(23,23,23,0.08)] sm:flex-row sm:items-center sm:justify-between';

                    return isInternalLink(item.href) ? (
                      <Link key={`${item.href}-${item.title.EN}`} to={item.href} className={classes}>
                        {action}
                      </Link>
                    ) : (
                      <a key={`${item.href}-${item.title.EN}`} href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>
                        {action}
                      </a>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-[24px] border border-dashed border-[#e6ddd3] bg-[#fcfbf8] px-6 py-12 text-center text-gray-500">
                  {noResults}
                </div>
              )
            ) : (
              <div className="rounded-[24px] border border-dashed border-[#e6ddd3] bg-[#fcfbf8] px-6 py-12 text-center text-gray-500">
                {helper}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
