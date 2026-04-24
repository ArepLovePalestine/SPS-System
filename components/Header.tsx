
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Globe, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Language, NavItem } from '../types';
const SPSLogo = '/images/homepages/SPS logo.png';

interface HeaderProps {
  lang: Language;
  onToggleLanguage: () => void;
}

const isInternalHref = (href: string) => href.startsWith('/');

const isPathMatch = (pathname: string, href: string) => {
  if (!isInternalHref(href)) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
};

const hasActiveChild = (item: NavItem, pathname: string): boolean => {
  if (isPathMatch(pathname, item.href)) return true;
  return item.children?.some((child) => hasActiveChild(child, pathname)) ?? false;
};

const isExactInternalPath = (pathname: string, href: string) => {
  if (!isInternalHref(href)) return false;
  return pathname === href;
};

const routeGroups: Record<string, string[]> = {
  STUDENT: ['/student', '/resources', '/gallery', '/calendar', '/regulations', '/upgrade'],
  PROGRAM: ['/programmes', '/accreditation'],
  'FINANCIAL ASSISTANT': ['/apply-now'],
};

const isNavItemActive = (item: NavItem, pathname: string) => {
  if (hasActiveChild(item, pathname)) return true;
  return routeGroups[item.label.EN]?.some((href) => isPathMatch(pathname, href)) ?? false;
};

const MegaMenuPanel: React.FC<{ item: NavItem; lang: Language; isOpen: boolean; onNavigate: () => void }> = ({
  item,
  lang,
  isOpen,
  onNavigate,
}) => {
  if (!item.children || !isOpen) return null;
  const children = item.children;

  // Custom layout mapping to ensure balanced columns as per user request
  const renderColumns = () => {
    const label = item.label.EN;

    if (label === 'ABOUT US') {
      const staffInfo = children.find(c => c.label.EN === 'Staff Info');
      const others = children.filter(c => c.label.EN !== 'Staff Info');
      const isoDocuments = others.find(o => o.label.EN === 'ISO Documents');
      const electronicArchives = others.find(o => o.label.EN === 'Electronic Archives');
      const facilities = others.find(o => o.label.EN === 'Facilities');
      const roomReservation = others.find(o => o.label.EN === 'Room Reservation');
      const mouAndMqa = others.find(o => o.label.EN === 'MOU & MQA');
      const tuahTenaga = others.find(o => o.label.EN === 'Tuah Tenaga');
      
      return (
        <div className="grid grid-cols-2 gap-x-16 divide-x divide-gray-100">
          <div className="space-y-8">
            <div className="pl-2">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Staff Information</h4>
              <ul className="space-y-2">
                {staffInfo?.children?.map((link, idx) => (
                  <MenuLink key={idx} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-12 pl-16">
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Documents & Resources</h4>
              <ul className="space-y-2">
                <MenuLink href={isoDocuments?.href || '#'} label={isoDocuments?.label[lang] || ''} onNavigate={onNavigate} />
                <MenuLink href={electronicArchives?.href || '#'} label={electronicArchives?.label[lang] || ''} onNavigate={onNavigate} />
                <MenuLink href={facilities?.href || '#'} label={facilities?.label[lang] || ''} onNavigate={onNavigate} />
                <MenuLink href={roomReservation?.href || '#'} label={roomReservation?.label[lang] || ''} onNavigate={onNavigate} />
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Partnerships</h4>
              <ul className="space-y-2">
                <MenuLink href={mouAndMqa?.href || '#'} label={mouAndMqa?.label[lang] || ''} onNavigate={onNavigate} />
                <MenuLink href={tuahTenaga?.href || '#'} label={tuahTenaga?.label[lang] || ''} onNavigate={onNavigate} />
              </ul>
            </div>
          </div>
        </div>
      );
    }

    if (label === 'STUDENT') {
      const future = children.find(c => c.label.EN === 'Future Students');
      const studentInfo = children.find(c => c.label.EN === 'Student Info');
      const current = children.find(c => c.label.EN === 'Current Student');
      const forms = children.find(c => c.label.EN === 'Download Forms');
      const upgrade = children.find(c => c.label.EN === 'UPGRADE Association');
      
      return (
        <div className="grid grid-cols-5 gap-x-10">
          <div className="pl-2">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">{future?.label[lang] || 'Future Students'}</h4>
            <ul className="space-y-2">
              {future?.children?.filter(c => c.label.EN !== 'Research').map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
              ))}
            </ul>
          </div>
          <div className="pl-6">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">{studentInfo?.label[lang] || 'Student Info'}</h4>
            <ul className="space-y-2">
              <MenuLink href={studentInfo?.href || '#'} label={studentInfo?.label[lang] || ''} onNavigate={onNavigate} />
              {studentInfo?.children?.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
              ))}
            </ul>
          </div>
          <div className="pl-6">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Current</h4>
            <ul className="space-y-2">
              {current?.children?.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
              ))}
            </ul>
          </div>
          <div className="pl-6">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Resources</h4>
            <ul className="space-y-2">
              {forms?.children?.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
              ))}
            </ul>
          </div>
          <div className="pl-6">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Graduate</h4>
            <ul className="space-y-2">
              {upgrade?.children?.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
              ))}
              <MenuLink href="#" label="Research Hub" onNavigate={onNavigate} />
            </ul>
          </div>
        </div>
      );
    }

    if (label === 'PROGRAM') {
      const academic = children.find(c => c.label.EN === 'Academic Programmes');
      const administration = children.find(c => c.label.EN === 'Administration / Services');
      const standards = children.find(c => c.label.EN === 'Standards & Quality');

      return (
        <div className="grid grid-cols-2 gap-x-16 divide-x divide-gray-100">
          <div className="pl-2 pr-10">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">
              {academic?.label[lang] || 'Academic Programmes'}
            </h4>
            <ul className="space-y-2">
              {academic?.children?.map((link) => (
                <MenuLink key={link.label.EN} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
              ))}
            </ul>
          </div>

          <div className="pl-16 space-y-12">
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">
                {administration?.label[lang] || 'Administration / Services'}
              </h4>
              <ul className="space-y-2">
                {administration?.children?.map((link) => (
                  <MenuLink key={link.label.EN} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">
                {standards?.label[lang] || 'Standards & Quality'}
              </h4>
              <ul className="space-y-2">
                {standards?.children?.map((link) => (
                  <MenuLink key={link.label.EN} href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    if (label === 'FINANCIAL ASSISTANT') {
      return (
        <div className="grid grid-cols-3 gap-x-16">
          {children.map((section, sIdx) => (
            <div key={sIdx} className="pl-2">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">
                {section.label[lang]}
              </h4>
              {section.children ? (
                <ul className="space-y-2">
                  {section.children.map((link, lIdx) => (
                    <li key={lIdx}>
                      <MenuLink href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2">
                  <li>
                    <MenuLink href={section.href} label={section.label[lang]} onNavigate={onNavigate} />
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Default Fallback
    return (
      <div className="grid grid-cols-3 gap-12">
        {children.map((section, sIdx) => (
          <div key={sIdx}>
            <h4
              className={`text-[14px] font-bold uppercase tracking-[0.8px] mb-6 ${
                item.label.EN === 'VISITOR' && section.label.EN !== 'Opportunities' ? 'text-gray-800' : 'text-[#A51C30]'
              }`}
            >
              {section.label[lang]}
            </h4>
            {section.children && (
              <ul className="space-y-2">
                {section.children.map((link, lIdx) => (
                  <li key={lIdx}>
                    <MenuLink href={link.href} label={link.label[lang]} onNavigate={onNavigate} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div 
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-full max-w-[1200px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-t-[3px] border-[#A51C30] rounded-b-lg overflow-hidden transition-all duration-300 transform origin-top
        ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div className="px-[60px] py-[48px]">
        {renderColumns()}
      </div>
      <div className="bg-gray-50/50 py-4 px-[60px] border-t border-gray-100 flex justify-between items-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">School of Graduate Studies | UTeM</span>
        <button className="text-[11px] font-bold text-[#A51C30] uppercase tracking-widest hover:underline flex items-center group">
          SPS Help Centre <ChevronRight size={12} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const MenuLink: React.FC<{ href: string; label: string; onNavigate?: () => void }> = ({ href, label, onNavigate }) => {
  const location = useLocation();
  const isInternal = href.startsWith('/');
  const isActive = isExactInternalPath(location.pathname, href);
  const className = `group flex items-center justify-between py-2 px-3 -mx-3 rounded-md text-[15px] font-bold border-l-[3px] transition-all duration-200 ${
    isActive
      ? 'text-[#A51C30] bg-[#f7fafc] border-[#A51C30]'
      : 'text-gray-600 hover:text-[#A51C30] hover:bg-[#f7fafc] border-transparent hover:border-[#A51C30]'
  }`;
  
  if (isInternal) {
    return (
      <Link 
        to={href} 
        aria-current={isActive ? 'page' : undefined}
        onClick={onNavigate}
        className={className}
      >
        <span className="transform group-hover:translate-x-1 transition-transform duration-200 leading-tight">
          {label}
        </span>
        <ChevronRight size={14} className="text-gray-300 group-hover:text-[#A51C30] opacity-0 group-hover:opacity-100 transition-all duration-200" />
      </Link>
    );
  }

  return (
    <a 
      href={href} 
      onClick={onNavigate}
      className={className}
    >
      <span className="transform group-hover:translate-x-1 transition-transform duration-200 leading-tight">
        {label}
      </span>
      <ChevronRight size={14} className="text-gray-300 group-hover:text-[#A51C30] opacity-0 group-hover:opacity-100 transition-all duration-200" />
    </a>
  );
};

const MobileSubLink: React.FC<{
  item: NavItem;
  lang: Language;
  depth?: number;
  onNavigate: () => void;
}> = ({ item, lang, depth = 0, onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = isPathMatch(location.pathname, item.href);
  const isInternal = isInternalHref(item.href);

  if (item.children?.length) {
    return (
      <div className={depth > 0 ? 'mt-4 border-l border-gray-100 pl-4' : ''}>
        <h6 className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
          {item.label[lang]}
        </h6>
        <div className="space-y-1.5">
          {item.children.map((child) => (
            <MobileSubLink
              key={`${item.label.EN}-${child.label.EN}`}
              item={child}
              lang={lang}
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    );
  }

  const className = `group flex items-center justify-between rounded-lg border-l-2 px-3 py-2.5 text-left text-[14px] font-semibold leading-snug transition-all duration-200 ${
    isActive
      ? 'border-[#A51C30] bg-[#A51C30]/5 text-[#A51C30]'
      : 'border-transparent text-gray-600 hover:border-[#A51C30] hover:bg-gray-50 hover:text-[#A51C30]'
  } ${depth > 1 ? 'ml-2' : ''}`;

  if (isInternal) {
    return (
      <button
        type="button"
        className={className}
        aria-current={isActive ? 'page' : undefined}
        onClick={() => {
          onNavigate();
          navigate(item.href);
        }}
      >
        <span>{item.label[lang]}</span>
        <ChevronRight size={13} className="shrink-0 text-gray-300 transition-colors group-hover:text-[#A51C30]" />
      </button>
    );
  }

  return (
    <a
      href={item.href}
      target={item.href === '#' ? undefined : '_blank'}
      rel={item.href === '#' ? undefined : 'noopener noreferrer'}
      className={className}
      onClick={onNavigate}
    >
      <span>{item.label[lang]}</span>
      <ChevronRight size={13} className="shrink-0 text-gray-300 transition-colors group-hover:text-[#A51C30]" />
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ lang, onToggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileIndices, setExpandedMobileIndices] = useState<number[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const activeNavIndex = NAV_ITEMS.findIndex((item) => isNavItemActive(item, location.pathname));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileAccordion = (index: number) => {
    setExpandedMobileIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    if (activeNavIndex < 0) return;
    setExpandedMobileIndices(prev => (
      prev.includes(activeNavIndex) ? prev : [...prev, activeNavIndex]
    ));
  }, [activeNavIndex]);

  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] transition-opacity duration-500 z-[45] pointer-events-none ${
          activeMegaMenu ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || activeMegaMenu || !isHome
            ? 'bg-white border-b border-gray-100 shadow-sm py-0' 
            : 'bg-transparent py-4'
        }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="absolute left-0 top-0 h-[5px] w-full bg-[#A51C30]" />
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[auto_auto] items-center gap-x-3 px-4 sm:h-24 sm:gap-x-4 sm:px-5 lg:grid-cols-[minmax(250px,300px)_minmax(0,1fr)_auto] lg:gap-x-6 lg:px-7 xl:max-w-[1520px] xl:grid-cols-[minmax(280px,330px)_minmax(0,1fr)_auto] xl:gap-x-8 xl:px-8">
          
          {/* Logo Section */}
          <Link to="/" className="group z-[60] cursor-pointer flex-shrink-0">
            <div className="flex w-[210px] flex-nowrap items-center justify-start pl-3 sm:w-[240px] sm:pl-4 lg:w-full lg:max-w-[300px] xl:max-w-[330px]">
              <img
                src={SPSLogo}
                alt="School of Graduate Studies logo"
                className="h-12 w-auto object-contain drop-shadow-sm sm:h-14 lg:h-[72px] xl:h-20"
                loading="lazy"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="relative hidden h-full min-w-0 items-center justify-center gap-1.5 overflow-visible px-2 lg:flex lg:justify-self-stretch xl:gap-2 xl:px-4"
          >
            {NAV_ITEMS.map((item, idx) => {
              const isActive = isNavItemActive(item, location.pathname);
              const shouldUseLightHeader = isScrolled || activeMegaMenu || !isHome;

              return (
                <div 
                  key={idx} 
                  className="group/nav flex h-full flex-shrink-0 items-center"
                  onMouseEnter={() => setActiveMegaMenu(item.label.EN)}
                >
                  <Link 
                    to={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative flex h-full items-center justify-center px-2.5 py-2 text-[13px] font-bold uppercase transition-all duration-300 lg:px-3 lg:text-[13px] lg:tracking-[0.04em] xl:px-4 xl:text-[14px] xl:tracking-[0.06em] ${
                      item.label.EN === 'FINANCIAL ASSISTANT' ? 'min-w-[112px] whitespace-normal text-center leading-tight xl:min-w-[124px]' : 'whitespace-nowrap'
                    } ${
                      isActive
                        ? 'text-[#A51C30]'
                        : shouldUseLightHeader
                          ? 'text-gray-700 hover:text-[#A51C30]' 
                          : 'text-white hover:text-white/80'
                    }`}
                  >
                    {/* Responsive label shortening for long items */}
                    <span className="relative inline-flex h-full items-center justify-center">
                      {item.label.EN === 'FINANCIAL ASSISTANT' ? (
                        <span className="block leading-tight">
                          <span className="block">Financial</span>
                          <span className="block">Assistant</span>
                        </span>
                      ) : item.label.EN === 'ABOUT US' ? (
                        <>
                          <span className="hidden xl:inline">{item.label[lang]}</span>
                          <span className="inline xl:hidden">About</span>
                        </>
                      ) : (
                        item.label[lang]
                      )}
                      <span className={`absolute -bottom-2 left-1/2 h-[2px] w-full min-w-12 -translate-x-1/2 bg-[#A51C30] transform transition-transform duration-300 ${activeMegaMenu === item.label.EN || isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                    </span>
                    {item.children && <ChevronDown size={12} className={`ml-2 opacity-40 transition-transform duration-300 ${activeMegaMenu === item.label.EN ? 'rotate-180' : ''}`} />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Action Bar */}
          <div className="z-[60] col-start-2 flex items-center justify-end gap-3 sm:gap-4 lg:col-start-3 lg:min-w-[160px] lg:gap-4 lg:justify-self-end xl:min-w-[176px] xl:gap-5">
            <button 
              onClick={onToggleLanguage}
              className={`flex min-w-[82px] items-center justify-center gap-2.5 px-3 py-2 sm:px-4 lg:min-w-[88px] border-l border-r transition-all duration-500 text-[10px] font-bold tracking-widest uppercase ${
                isScrolled || activeMegaMenu || !isHome
                  ? 'border-gray-100 text-gray-700 hover:text-[#A51C30]' 
                  : 'border-white/10 text-white hover:border-white'
              }`}
            >
              <Globe size={14} strokeWidth={2.5} />
              <span>{lang}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveMegaMenu(null);
                setIsMobileMenuOpen(false);
                navigate('/search');
              }}
              className={`${isScrolled || activeMegaMenu || !isHome ? 'text-gray-700' : 'text-white'} hover:text-[#A51C30] transition-colors flex h-10 w-10 items-center justify-center`}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={2.5} />
            </button>

            <button 
              className="xl:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="text-gray-900" />
              ) : (
                <Menu className={isScrolled || activeMegaMenu || !isHome ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* The Mega Menus are now triggered from within the relative nav container's absolute positioning context */}
        <div className="absolute top-full left-0 w-full flex justify-center pointer-events-auto">
          {NAV_ITEMS.map((item, idx) => (
            <div key={idx} className="pointer-events-auto">
              <MegaMenuPanel 
                item={item} 
                lang={lang} 
                isOpen={activeMegaMenu === item.label.EN} 
                onNavigate={() => setActiveMegaMenu(null)}
              />
            </div>
          ))}
        </div>

        {/* Mobile Menu Drawer */}
        <div 
          className={`fixed inset-0 bg-white z-[100] transform transition-transform duration-500 ease-in-out lg:hidden pt-24 px-5 sm:px-8 overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">Navigation</p>
              <p className="mt-1 text-sm font-medium text-gray-500">School of Graduate Studies</p>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-full border border-gray-200 text-gray-900 hover:text-[#A51C30] hover:border-[#A51C30] transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col space-y-3 pb-10">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = isNavItemActive(item, location.pathname);
              const isExpanded = expandedMobileIndices.includes(idx);

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? 'border-[#A51C30]/15 bg-white shadow-lg shadow-gray-900/5'
                      : 'border-gray-100 bg-white'
                  }`}
                >
                  <div 
                    className={`flex items-center justify-between px-4 py-4 cursor-pointer ${
                      isExpanded ? 'border-l-4 border-[#A51C30]' : 'border-l-4 border-transparent'
                    }`}
                    onClick={() => item.children ? toggleMobileAccordion(idx) : null}
                  >
                    {item.children ? (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        className={`text-left text-[14px] font-bold tracking-[0.18em] uppercase transition-colors ${
                          isActive || isExpanded ? 'text-[#A51C30]' : 'text-gray-900'
                        }`}
                      >
                        {item.label[lang]}
                      </button>
                    ) : (
                      <Link 
                        to={item.href} 
                        aria-current={isActive ? 'page' : undefined}
                        className={`text-[14px] font-bold tracking-[0.18em] uppercase transition-colors ${
                          isActive ? 'text-[#A51C30]' : 'text-gray-900'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label[lang]}
                      </Link>
                    )}
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#A51C30]' : isActive ? 'text-[#A51C30]' : ''}`} />
                    )}
                  </div>
                
                  {item.children && expandedMobileIndices.includes(idx) && (
                    <div className="animate-accordion-down space-y-5 border-t border-gray-100 bg-gray-50/70 px-4 py-5">
                      {item.children.map((child, cIdx) => (
                        <div key={cIdx} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                          <h5 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A51C30]">
                            {child.label[lang]}
                          </h5>
                          {child.children ? (
                            <div className="space-y-1.5">
                              {child.children.map((gChild) => (
                                <MobileSubLink
                                  key={`${child.label.EN}-${gChild.label.EN}`}
                                  item={gChild}
                                  lang={lang}
                                  onNavigate={() => setIsMobileMenuOpen(false)}
                                />
                              ))}
                            </div>
                          ) : (
                            <MobileSubLink
                              item={child}
                              lang={lang}
                              onNavigate={() => setIsMobileMenuOpen(false)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </header>

      <style>{`
        @keyframes accordion-down {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 2000px; }
        }
        .animate-accordion-down {
          animation: accordion-down 0.4s ease-out forwards;
          overflow: hidden;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default Header;

