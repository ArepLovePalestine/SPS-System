
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Language, NavItem } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLanguage: () => void;
}

const MegaMenuPanel: React.FC<{ item: NavItem; lang: Language; isOpen: boolean }> = ({ item, lang, isOpen }) => {
  if (!item.children || !isOpen) return null;

  // Custom layout mapping to ensure balanced columns as per user request
  const renderColumns = () => {
    const label = item.label.EN;

    if (label === 'ABOUT US') {
      const staffInfo = item.children.find(c => c.label.EN === 'Staff Info');
      const others = item.children.filter(c => c.label.EN !== 'Staff Info');
      
      return (
        <div className="grid grid-cols-2 gap-x-16 divide-x divide-gray-100">
          <div className="space-y-8">
            <div className="pl-2">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Staff Information</h4>
              <ul className="space-y-2">
                {staffInfo?.children?.map((link, idx) => (
                  <MenuLink key={idx} href={link.href} label={link.label[lang]} />
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-12 pl-16">
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Documents & Resources</h4>
              <ul className="space-y-2">
                <MenuLink href="#" label={others.find(o => o.label.EN === 'ISO Documents')?.label[lang] || ''} />
                <MenuLink href="#" label={others.find(o => o.label.EN === 'Electronic Archives')?.label[lang] || ''} />
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Partnerships</h4>
              <ul className="space-y-2">
                <MenuLink href="#" label={others.find(o => o.label.EN === 'MOU & MQA')?.label[lang] || ''} />
                <MenuLink href="#" label={others.find(o => o.label.EN === 'Tuah Tenaga')?.label[lang] || ''} />
              </ul>
            </div>
          </div>
        </div>
      );
    }

    if (label === 'STUDENT') {
      const future = item.children.find(c => c.label.EN === 'Future Students');
      const current = item.children.find(c => c.label.EN === 'Current Student');
      const forms = item.children.find(c => c.label.EN === 'Download Forms');
      const upgrade = item.children.find(c => c.label.EN === 'UPGRADE Association');
      
      return (
        <div className="grid grid-cols-4 gap-x-12 divide-x divide-gray-100">
          <div className="pl-2">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Prospective</h4>
            <ul className="space-y-2">
              <MenuLink href="#" label={future?.label[lang] || ''} />
              {future?.children?.filter(c => c.label.EN !== 'Research').map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} />
              ))}
            </ul>
          </div>
          <div className="pl-12">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Current</h4>
            <ul className="space-y-2">
              {current?.children?.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} />
              ))}
              <MenuLink href="#" label={item.children.find(o => o.label.EN === 'UTeM Convocation')?.label[lang] || ''} />
            </ul>
          </div>
          <div className="pl-12">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Resources</h4>
            <ul className="space-y-2">
              {forms?.children?.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} />
              ))}
            </ul>
          </div>
          <div className="pl-12">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Graduate</h4>
            <ul className="space-y-2">
              {upgrade?.children?.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} />
              ))}
              <MenuLink href="#" label="Research Hub" />
            </ul>
          </div>
        </div>
      );
    }

    if (label === 'PROGRAM') {
      const accreditation = item.children.find(c => c.label.EN === 'Accreditation');
      const others = item.children.filter(c => c.label.EN !== 'Accreditation');

      return (
        <div className="grid grid-cols-2 gap-x-16 divide-x divide-gray-100">
          <div className="pl-2">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Academic Programmes</h4>
            <ul className="space-y-2">
              {accreditation?.children?.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} />
              ))}
            </ul>
          </div>
          <div className="pl-16">
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">Opportunities</h4>
            <ul className="space-y-2">
              {others.map((link, idx) => (
                <MenuLink key={idx} href={link.href} label={link.label[lang]} />
              ))}
            </ul>
          </div>
        </div>
      );
    }

    // Default Fallback
    return (
      <div className="grid grid-cols-3 gap-12">
        {item.children.map((section, sIdx) => (
          <div key={sIdx}>
            <h4 className="text-[14px] font-bold uppercase tracking-[0.8px] text-[#A51C30] mb-6">{section.label[lang]}</h4>
            {section.children && (
              <ul className="space-y-2">
                {section.children.map((link, lIdx) => (
                  <li key={lIdx}>
                    <MenuLink href={link.href} label={link.label[lang]} />
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

const MenuLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  const isInternal = href.startsWith('/');
  
  if (isInternal) {
    return (
      <Link 
        to={href} 
        className="group flex items-center justify-between py-2 px-3 -mx-3 rounded-md text-[14px] text-gray-600 hover:text-[#A51C30] hover:bg-[#f7fafc] border-l-[3px] border-transparent hover:border-[#A51C30] transition-all duration-200"
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
      className="group flex items-center justify-between py-2 px-3 -mx-3 rounded-md text-[14px] text-gray-600 hover:text-[#A51C30] hover:bg-[#f7fafc] border-l-[3px] border-transparent hover:border-[#A51C30] transition-all duration-200"
    >
      <span className="transform group-hover:translate-x-1 transition-transform duration-200 leading-tight">
        {label}
      </span>
      <ChevronRight size={14} className="text-gray-300 group-hover:text-[#A51C30] opacity-0 group-hover:opacity-100 transition-all duration-200" />
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ lang, onToggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileIndices, setExpandedMobileIndices] = useState<number[]>([]);

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

  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] transition-opacity duration-500 z-[45] pointer-events-none ${
          activeMegaMenu ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || activeMegaMenu
            ? 'bg-white border-b border-gray-100 shadow-sm py-0' 
            : 'bg-transparent py-4'
        }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between h-20 md:h-24">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center group cursor-pointer z-[60]">
            <div className={`w-12 h-12 transition-all duration-500 flex items-center justify-center border-t-[3px] ${
              isScrolled || activeMegaMenu ? 'border-[#A51C30] bg-[#A51C30]' : 'border-white bg-white/10'
            }`}>
              <span className="font-serif font-bold text-2xl text-white">U</span>
            </div>
            <div className="ml-4">
              <h1 className={`text-xl font-serif font-bold tracking-tight transition-colors duration-500 ${isScrolled || activeMegaMenu ? 'text-[#A51C30]' : 'text-white'}`}>
                UTeM
              </h1>
              <p className={`text-[9px] font-bold tracking-[0.25em] uppercase transition-colors duration-500 ${isScrolled || activeMegaMenu ? 'text-gray-500' : 'text-white/80'}`}>
                GRADUATE STUDIES
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full relative">
            {NAV_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className="h-full group/nav"
                onMouseEnter={() => setActiveMegaMenu(item.label.EN)}
              >
                <Link 
                  to={item.href}
                  className={`flex items-center h-full px-6 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative ${
                    isScrolled || activeMegaMenu 
                      ? 'text-gray-700 hover:text-[#A51C30]' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.label[lang]}
                  {item.children && <ChevronDown size={12} className={`ml-2 opacity-40 transition-transform duration-300 ${activeMegaMenu === item.label.EN ? 'rotate-180' : ''}`} />}
                  
                  {/* Underline for main nav */}
                  <span className={`absolute bottom-0 left-6 right-6 h-[2px] bg-[#A51C30] transform scale-x-0 transition-transform duration-300 ${activeMegaMenu === item.label.EN ? 'scale-x-100' : ''}`} />
                </Link>
              </div>
            ))}
          </nav>

          {/* Action Bar */}
          <div className="flex items-center space-x-8 z-[60]">
            <button 
              onClick={onToggleLanguage}
              className={`flex items-center space-x-2 px-4 py-2 border-l border-r transition-all duration-500 text-[10px] font-bold tracking-widest uppercase ${
                isScrolled || activeMegaMenu
                  ? 'border-gray-100 text-gray-700 hover:text-[#A51C30]' 
                  : 'border-white/10 text-white hover:border-white'
              }`}
            >
              <Globe size={14} strokeWidth={2.5} />
              <span>{lang}</span>
            </button>

            <button className={`${isScrolled || activeMegaMenu ? 'text-gray-700' : 'text-white'} hover:text-[#A51C30] transition-colors flex items-center space-x-2`}>
              <Search size={20} strokeWidth={2.5} />
            </button>

            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="text-gray-900" />
              ) : (
                <Menu className={isScrolled || activeMegaMenu ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* The Mega Menus are now triggered from within the relative nav container's absolute positioning context */}
        <div className="absolute top-full left-0 w-full flex justify-center pointer-events-none">
          {NAV_ITEMS.map((item, idx) => (
            <div key={idx} className="pointer-events-auto">
              <MegaMenuPanel 
                item={item} 
                lang={lang} 
                isOpen={activeMegaMenu === item.label.EN} 
              />
            </div>
          ))}
        </div>

        {/* Mobile Menu Drawer */}
        <div 
          className={`fixed inset-0 bg-white z-[100] transform transition-transform duration-500 ease-in-out lg:hidden pt-24 px-8 overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-gray-50 pb-3">
                <div 
                  className="flex items-center justify-between py-2 cursor-pointer"
                  onClick={() => item.children ? toggleMobileAccordion(idx) : null}
                >
                  <Link 
                    to={item.href} 
                    className="text-[14px] font-bold tracking-widest uppercase text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label[lang]}
                  </Link>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedMobileIndices.includes(idx) ? 'rotate-180' : ''}`} />
                  )}
                </div>
                
                {item.children && expandedMobileIndices.includes(idx) && (
                  <div className="mt-4 ml-4 space-y-6 border-l border-gray-100 pl-4 animate-accordion-down">
                    {item.children.map((child, cIdx) => (
                      <div key={cIdx}>
                        <h5 className="text-[12px] font-bold uppercase tracking-wider text-[#A51C30] mb-3">
                          {child.label[lang]}
                        </h5>
                        {child.children && (
                          <div className="space-y-3">
                            {child.children.map((gChild, gIdx) => (
                              <a key={gIdx} href={gChild.href} className="text-[14px] text-gray-500 block">
                                {gChild.label[lang]}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
      `}</style>
    </>
  );
};

export default Header;
