import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface PageHeaderBreadcrumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  breadcrumbs: PageHeaderBreadcrumb[];
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ breadcrumbs, title, subtitle, actions }) => {
  return (
    <section className="bg-white border-b border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="space-y-4">
          <nav className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {breadcrumbs.map((breadcrumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={`${breadcrumb.label}-${index}`}>
                  {breadcrumb.to && !isLast ? (
                    <Link to={breadcrumb.to} className="hover:text-[#A51C30] transition-colors">
                      {breadcrumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-[#A51C30]' : ''}>{breadcrumb.label}</span>
                  )}
                  {!isLast && <ChevronRight size={10} />}
                </React.Fragment>
              );
            })}
          </nav>
          <div className={actions ? 'flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between' : ''}>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-serif text-gray-900"
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-gray-500 max-w-2xl text-lg font-light"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
            {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
