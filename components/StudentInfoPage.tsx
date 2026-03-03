import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const accordionItems = [
  'REGISTRATION PROCESS',
  'ACTIVE SMPS ACCOUNT',
  'ACTIVE EMAIL ACCOUNT',
  'PROCEDURE UPLOADING RESEARCH PROGRESS REPORT',
  'CALL FOR PAPER / JOURNAL ARTICLES',
  'RESEARCH STUDENT OUTLINE',
  'RESEARCH STUDENT GOT STRATEGY',
];

const StudentInfoPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20 space-y-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[#A51C30]">Student Info</p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">Welcome</h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            We&apos;re proud that you chose to join us. Visit www.sps.utem.edu.my for full details.
          </p>
        </div>

        {/* Banner */}
        <div className="w-full rounded-3xl overflow-hidden shadow-md bg-gradient-to-br from-[#0b1e3c] via-white to-[#0b1e3c] border border-gray-100">
          <div className="bg-white/70 backdrop-blur px-6 sm:px-10 lg:px-16 py-12 flex flex-col items-center text-center space-y-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1e2b4d]">
              WELCOME
            </div>
            <p className="text-sm sm:text-base text-[#1e2b4d]/80">
              WE&apos;RE PROUD THAT YOU CHOSE TO JOIN US
            </p>
            <p className="text-sm sm:text-base text-[#A51C30] font-semibold">
              www.sps.utem.edu.my
            </p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
          {accordionItems.map((item, idx) => (
            <div
              key={item}
              className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-5 hover:bg-gray-50 transition"
            >
              <span className="text-[12px] sm:text-sm md:text-base tracking-[0.2em] uppercase text-gray-800">
                {item}
              </span>
              <Plus className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Quick link to Convocation */}
        <div className="flex justify-center">
          <Link
            to="/student/student-info/utem-convocation"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#A51C30] text-white text-sm font-semibold tracking-wide shadow-md hover:bg-[#8a182c] transition"
          >
            Go to UTeM Convocation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudentInfoPage;
