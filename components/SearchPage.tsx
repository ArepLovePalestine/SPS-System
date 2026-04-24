import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Language, NavItem } from '../types';

interface SearchPageProps {
  lang: Language;
}

interface SearchEntry {
  label: string;
  href: string;
  parent: string;
}

const collectEntries = (items: NavItem[], lang: Language, trail: string[] = []): SearchEntry[] => {
  return items.flatMap((item) => {
    const currentTrail = [...trail, item.label[lang]];
    const entries: SearchEntry[] =
      item.href && item.href !== '#'
        ? [
            {
              label: item.label[lang],
              href: item.href,
              parent: trail.join(' / '),
            },
          ]
        : [];

    if (!item.children) {
      return entries;
    }

    return [...entries, ...collectEntries(item.children, lang, currentTrail)];
  });
};

const SearchPage: React.FC<SearchPageProps> = ({ lang }) => {
  const [query, setQuery] = useState('');

  const entries = useMemo(() => collectEntries(NAV_ITEMS, lang), [lang]);

  const filteredEntries = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return entries.slice(0, 12);
    }

    return entries.filter((entry) => {
      const haystack = `${entry.label} ${entry.parent} ${entry.href}`.toLowerCase();
      return haystack.includes(keyword);
    });
  }, [entries, query]);

  const sectionTitle = lang === 'BM' ? 'Carian' : 'Search';
  const heading = lang === 'BM' ? 'Cari halaman dan pautan penting' : 'Find pages and important links';
  const description =
    lang === 'BM'
      ? 'Cari akses pantas ke halaman About Us, Student, Program, dokumen dan pautan penting lain.'
      : 'Quickly search About Us, Student, Program, document pages, and other important links.';
  const placeholder =
    lang === 'BM' ? 'Cari halaman, kata kunci, atau pautan...' : 'Search pages, keywords, or links...';
  const resultsLabel =
    lang === 'BM'
      ? `${filteredEntries.length} hasil dijumpai`
      : `${filteredEntries.length} result${filteredEntries.length === 1 ? '' : 's'} found`;
  const emptyLabel =
    lang === 'BM'
      ? 'Tiada padanan dijumpai. Cuba kata kunci lain.'
      : 'No matching pages found. Try another keyword.';

  return (
    <section className="min-h-screen bg-[#f7f4ef] px-6 pb-20 pt-32 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{sectionTitle}</p>
          <h1 className="font-serif text-4xl text-gray-900 md:text-5xl">{heading}</h1>
          <p className="max-w-2xl text-gray-600">{description}</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <label className="flex items-center gap-4 rounded-xl border border-gray-200 bg-[#fcfbf8] px-4 py-4 focus-within:border-[#A51C30] focus-within:ring-2 focus-within:ring-[#A51C30]/10">
            <Search size={20} className="text-gray-500" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              className="w-full bg-transparent text-base text-gray-800 outline-none placeholder:text-gray-400"
            />
          </label>

          <div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-4">
            <p className="text-sm font-medium text-gray-600">{resultsLabel}</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredEntries.length > 0 ? (
              filteredEntries.map((entry) => {
                const isInternal = entry.href.startsWith('/');
                const content = (
                  <>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-gray-900">{entry.label}</p>
                      {entry.parent ? (
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{entry.parent}</p>
                      ) : null}
                      <p className="text-sm text-gray-500">{entry.href}</p>
                    </div>
                    <ArrowRight size={18} className="shrink-0 text-[#A51C30] transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                );

                if (isInternal) {
                  return (
                    <Link
                      key={`${entry.href}-${entry.label}`}
                      to={entry.href}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-[#A51C30]/40 hover:bg-[#fffaf8]"
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <a
                    key={`${entry.href}-${entry.label}`}
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-[#A51C30]/40 hover:bg-[#fffaf8]"
                  >
                    {content}
                  </a>
                );
              })
            ) : (
              <div className="rounded-xl border border-dashed border-gray-200 bg-[#fcfbf8] p-8 text-center text-gray-500 md:col-span-2">
                {emptyLabel}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
