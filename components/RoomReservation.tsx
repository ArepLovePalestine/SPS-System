
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Download,
  Eye, 
  Search, 
  Calendar, 
  Info,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface RoomReservationProps {
  lang: Language;
}

interface ResourceCard {
  id: string;
  title: { EN: string; BM: string };
  subtitle: { EN: string; BM: string };
  description: { EN: string; BM: string };
  category: 'Guideline' | 'Form' | 'Procedure';
  file: string;
  badge?: 'New' | 'Updated';
  details: { EN: string[]; BM: string[] };
}

const reservationFileBase = '/Document file/Reservation Files';
const categoryLabels: Record<ResourceCard['category'] | 'All', { EN: string; BM: string }> = {
  All: { EN: 'All', BM: 'Semua' },
  Guideline: { EN: 'Guideline', BM: 'Garis Panduan' },
  Form: { EN: 'Form', BM: 'Borang' },
  Procedure: { EN: 'Procedure', BM: 'Tatacara' },
};

const RoomReservation: React.FC<RoomReservationProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<ResourceCard['category'] | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState<ResourceCard | null>(null);
  const [previewResource, setPreviewResource] = useState<ResourceCard | null>(null);

  const resources: ResourceCard[] = [
    {
      id: '1',
      title: { EN: 'Room Booking Procedure', BM: 'Tatacara Permohonan Tempahan Ruang' },
      subtitle: { EN: 'Guidelines for booking lecture rooms, auditoriums, main meeting rooms, and PPS banquet rooms.', BM: 'Garis panduan untuk tempahan bilik kuliah, auditorium, bilik mesyuarat utama, dan bilik jamuan PPS.' },
      description: { EN: 'Official procedures for staff and formal university event organizers.', BM: 'Prosedur rasmi untuk staf dan penganjur acara rasmi universiti.' },
      category: 'Procedure',
      file: `${reservationFileBase}/Tatacara Pemohonan Tempahan Bilik Kuliah,Auditorium,Bilik Mesyuarat Utama Dan Bilik Jamuan PPS.pdf`,
      details: {
        EN: [
          'Applicable for all lecture rooms and auditoriums.',
          'Requires approval from the School of Graduate Studies.',
          'Must be submitted at least 7 working days before the event.',
          'Includes technical support and basic facility setup.'
        ],
        BM: [
          'Terpakai untuk semua bilik kuliah dan auditorium.',
          'Memerlukan kelulusan daripada Sekolah Pengajian Siswazah.',
          'Mestilah dihantar sekurang-kurangnya 7 hari bekerja sebelum acara.',
          'Termasuk sokongan teknikal dan penyediaan kemudahan asas.'
        ]
      }
    },
    {
      id: '2',
      title: { EN: 'Room Booking Procedure for General Users', BM: 'Tatacara Permohonan Tempahan Ruang (Pengguna Biasa)' },
      subtitle: { EN: 'Guidelines for staff and students when applying to book lecture rooms, auditoriums, main meeting rooms, and PPS banquet rooms.', BM: 'Garis panduan untuk staf dan pelajar apabila memohon untuk menempah bilik kuliah, auditorium, bilik mesyuarat utama, dan bilik jamuan PPS.' },
      description: { EN: 'Simplified process for student associations and individual staff requests.', BM: 'Proses yang dipermudahkan untuk persatuan pelajar dan permintaan staf individu.' },
      category: 'Procedure',
      file: `${reservationFileBase}/Tatacara Pemohonan Tempahan Bilik Kuliah,Auditorium,Bilik Mesyuarat Utama Dan Bilik Jamuan PPS(Penguguna Biasa - StafPelajar).pdf`,
      badge: 'Updated',
      details: {
        EN: [
          'Specific guidelines for student-led activities.',
          'Requires recommendation from student affairs or faculty.',
          'Usage is subject to availability after academic priority.',
          'Standard cleaning and safety protocols apply.'
        ],
        BM: [
          'Garis panduan khusus untuk aktiviti yang diterajui pelajar.',
          'Memerlukan syor daripada hal ehwal pelajar atau fakulti.',
          'Penggunaan tertakluk kepada ketersediaan selepas keutamaan akademik.',
          'Protokol pembersihan dan keselamatan standard terpakai.'
        ]
      }
    },
    {
      id: '3',
      title: { EN: 'Auditorium Reservation Form', BM: 'Borang Tempahan Ruang (Auditorium)' },
      subtitle: { EN: 'Official form for auditorium space reservation.', BM: 'Borang rasmi untuk tempahan ruang auditorium.' },
      description: { EN: 'Required application document for securing auditorium facilities.', BM: 'Dokumen permohonan yang diperlukan untuk mendapatkan kemudahan auditorium.' },
      category: 'Form',
      file: `${reservationFileBase}/Borang tempahan ruang Auditorium.pdf`,
      badge: 'New',
      details: {
        EN: [
          'Complete all sections of the reservation form.',
          'Attach event proposal or official letter.',
          'Submit to the administrative counter or via email.',
          'Confirmation will be sent within 3 working days.'
        ],
        BM: [
          'Lengkapkan semua bahagian borang tempahan.',
          'Lampirkan kertas kerja acara atau surat rasmi.',
          'Hantar ke kaunter pentadbiran atau melalui emel.',
          'Pengesahan akan dihantar dalam tempoh 3 hari bekerja.'
        ]
      }
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesFilter = activeFilter === 'All' || res.category === activeFilter;
    const matchesSearch = res.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.subtitle[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters: Array<ResourceCard['category'] | 'All'> = ['All', 'Procedure', 'Form'];

  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A51C30]/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#A51C30] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-900/20">
                <Calendar size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                {lang === 'EN' ? 'Facilities Management' : 'Pengurusan Kemudahan'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
              {lang === 'EN' ? 'Room Reservation' : 'Tempahan Ruang'}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
              {lang === 'EN' 
                ? 'Browse guidelines and forms for booking lecture rooms, auditoriums, meeting rooms, and related facilities.' 
                : 'Layari garis panduan dan borang untuk tempahan bilik kuliah, auditorium, bilik mesyuarat, dan kemudahan berkaitan.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          {/* Filter Tabs */}
          <div className="flex p-1 bg-gray-200/50 rounded-xl w-fit">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-white text-[#A51C30] shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {categoryLabels[filter][lang]}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative group max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#A51C30] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder={lang === 'EN' ? "Search resources..." : "Cari sumber..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 bg-white border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#A51C30]/20 focus:border-[#A51C30] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource, idx) => (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col relative overflow-hidden"
              >
                {/* Badge */}
                {resource.badge && (
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                      resource.badge === 'New' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {resource.badge}
                    </span>
                  </div>
                )}

                {/* Category Tag */}
                <div className="mb-6">
                  <span className="px-3 py-1 bg-gray-50 text-gray-400 rounded-full text-[9px] font-bold uppercase tracking-widest border border-gray-100">
                    {categoryLabels[resource.category][lang]}
                  </span>
                </div>

                <div className="mb-8 flex-grow">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-[#A51C30] transition-colors">
                    {resource.title[lang]}
                  </h3>
                  <p className="text-[11px] font-bold text-[#A51C30]/60 uppercase tracking-widest mb-4">
                    {resource.subtitle[lang]}
                  </p>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {resource.description[lang]}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <button 
                    onClick={() => setSelectedResource(resource)}
                    className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#A51C30] transition-colors group/btn"
                  >
                    <span>{lang === 'EN' ? 'View Details' : 'Lihat Butiran'}</span>
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={resource.file}
                    download
                    className="p-3 bg-gray-50 text-gray-400 hover:bg-[#A51C30] hover:text-white rounded-xl transition-all duration-300 shadow-sm"
                    aria-label={`Download ${resource.title[lang]}`}
                  >
                    <Download size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
              {lang === 'EN' ? 'No resources found' : 'Tiada sumber ditemui'}
            </h3>
            <p className="text-gray-500 font-light">
              {lang === 'EN' ? 'Try adjusting your search or filters.' : 'Cuba laraskan carian atau penapis anda.'}
            </p>
          </div>
        )}
      </section>

      {/* Resource Detail Modal */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResource(null)}
              className="absolute inset-0 bg-gray-950/90 backdrop-blur-md cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="p-10 md:p-16">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#A51C30]">
                      <FileText size={24} />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        {categoryLabels[selectedResource.category][lang]}
                      </span>
                      <h2 className="text-2xl font-serif font-bold text-gray-900">
                        {selectedResource.title[lang]}
                      </h2>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedResource(null)}
                    className="w-10 h-10 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-4 flex items-center space-x-2">
                      <Info size={14} />
                      <span>{lang === 'EN' ? 'Important Information' : 'Maklumat Penting'}</span>
                    </h4>
                    <div className="space-y-4">
                      {selectedResource.details[lang].map((detail, i) => (
                        <div key={i} className="flex items-start space-x-4 group">
                          <div className="mt-1 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 size={12} className="text-green-600" />
                          </div>
                          <p className="text-sm text-gray-600 font-light leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewResource(selectedResource);
                        setSelectedResource(null);
                      }}
                      className="flex-grow py-4 bg-[#A51C30] text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#8B1829] transition-all shadow-lg shadow-red-900/20 flex items-center justify-center space-x-3"
                      aria-label={`Preview ${selectedResource.title[lang]}`}
                    >
                      <Eye size={16} />
                      <span>{lang === 'EN' ? 'Preview Document' : 'Pratonton Dokumen'}</span>
                    </button>
                    <button 
                      onClick={() => setSelectedResource(null)}
                      className="px-8 py-4 bg-gray-50 text-gray-500 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-all"
                    >
                      {lang === 'EN' ? 'Close' : 'Tutup'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {previewResource && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewResource(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              className="relative flex h-[82vh] w-full max-w-[1000px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4">
                <span className="truncate pr-8 text-sm font-bold text-gray-900">
                  {previewResource.title[lang]}
                </span>
                <button
                  type="button"
                  onClick={() => setPreviewResource(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                  aria-label={lang === 'EN' ? 'Close PDF preview' : 'Tutup pratonton PDF'}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-grow bg-gray-200">
                <iframe
                  src={encodeURI(previewResource.file)}
                  title={previewResource.title[lang]}
                  className="h-full w-full border-0 bg-white"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const X: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default RoomReservation;
