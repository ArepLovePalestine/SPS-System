import React from 'react';

const cards = [
  {
    title: 'UTeM Convocation Official Website',
    href: 'https://konvo.utem.edu.my/ms/'
  },
  {
    title: 'Graduate Checklist',
    href: 'https://portal.utem.edu.my/ismp/konvo/'
  },
  {
    title: 'Fees & Debt Review',
    href: 'https://payment.utem.edu.my/en/'
  }
];

const UtemConvocationPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#A51C30]">Student Info</p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">UTeM Convocation</h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Access the official convocation resources, checklist, and payment portals.
          </p>
        </div>

        <div className="space-y-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-[#fbe0c2] rounded-xl p-6">
              <p className="text-center text-base md:text-lg font-semibold text-gray-900 mb-4">{card.title}</p>
              <div className="flex justify-center">
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#e63946] text-white font-semibold text-sm shadow-md hover:bg-[#c92f3a] transition border border-[#b91d2c]"
                >
                  CLICK HERE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UtemConvocationPage;
