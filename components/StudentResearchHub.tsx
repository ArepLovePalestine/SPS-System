import React from 'react';

const StudentResearchHub: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-16 space-y-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-[#A51C30]">Student</p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">Research Hub</h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Placeholder page for /student/future/research. Content will be updated with detailed research resources and pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3 bg-white">
            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              This section will outline research opportunities, supervision, and facilities for future students.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3 bg-white">
            <h2 className="text-xl font-semibold text-gray-900">Highlights</h2>
            <p className="text-gray-600 leading-relaxed">
              Key programmes, labs, and innovation centres will be highlighted here.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3 bg-white md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900">Contact / More Info</h2>
            <p className="text-gray-600 leading-relaxed">
              Contact details and links to further resources will be added. Stay tuned for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentResearchHub;
