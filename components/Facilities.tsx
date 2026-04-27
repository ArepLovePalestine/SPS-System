
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Building2, 
  Monitor, 
  Wifi, 
  Phone, 
  Mail, 
  CreditCard, 
  Info, 
  ExternalLink,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Briefcase,
  X,
  UserCircle
} from 'lucide-react';
import { Language } from '../types';
import PageHeader from './PageHeader';

interface FacilitiesProps {
  lang: Language;
}

const Facilities: React.FC<FacilitiesProps> = ({ lang }) => {
  const [openFloor, setOpenFloor] = useState<string | null>(null);
  const [activeRentalTab, setActiveRentalTab] = useState<'lecture' | 'auditorium'>('lecture');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const facilitiesOverviewImage = '/images/Facilities_pic/facilities_overview.jpeg';
  const floorImages = {
    first: '/images/Facilities_pic/SPS floor/first_floor.jpeg',
    second: '/images/Facilities_pic/SPS floor/second_floor.jpeg',
    third: '/images/Facilities_pic/SPS floor/third_floor.jpeg',
  };
  const rentalImages = {
    lecture: '/images/Facilities_pic/Facilities_rental_pic/LectureRoom/LectureRoom_pic.jpeg',
    auditorium: '/images/Facilities_pic/Facilities_rental_pic/Auditorium/Auditorium_pic.jpeg',
    lecturePrivateRate: '/images/Facilities_pic/Facilities_rental_pic/LectureRoom/RentalRate/Private_rate.jpeg',
    lectureGovRate: '/images/Facilities_pic/Facilities_rental_pic/LectureRoom/RentalRate/Gov_rate.jpeg',
    auditoriumPrivateRate: '/images/Facilities_pic/Facilities_rental_pic/Auditorium/Rental_rate/private_rate.jpeg',
    auditoriumGovRate: '/images/Facilities_pic/Facilities_rental_pic/Auditorium/Rental_rate/gov_rate.jpeg',
  };

  const t = {
    EN: {
      header: {
        title: "Facilities",
        subtitle: "Explore the facilities and support services available at the School of Graduate Studies."
      },
      location: {
        title: "Location Overview",
        intro: "The School of Graduate Studies (SGS) serves as the central administrative hub for all postgraduate activities at UTeM, providing essential support services for students, faculty, and researchers. Our office is strategically located to be accessible to all members of the university community.",
        caption: "School of Graduate Studies and Dean Office"
      },
      floorPlans: {
        title: "School of Graduate Studies and Dean Office",
        intro: "The SPS Office, located on the second floor, is the administrative hub of postgraduate studies in UTeM. The office can assist with general queries, booking of SPS facilities and support services on the process of postgraduate studies in UTeM.",
        floors: [
          {
            id: "1st",
            title: "1st FLOOR OF SCHOOL FOR GRADUATE STUDIES",
            image: floorImages.first,
            legend: [
              { label: "A", name: "Auditorium" },
              { label: "B", name: "Viva Room (MAIN)" },
              { label: "C", name: "Viva Room 2" },
              { label: "D", name: "Lecture Room 1" },
              { label: "E", name: "Lecture Room 2" },
              { label: "F", name: "Lecture Room 3" }
            ]
          },
          {
            id: "2nd",
            title: "2nd FLOOR OF SCHOOL FOR GRADUATE STUDIES",
            image: floorImages.second,
            legend: [
              { label: "H", name: "Main Meeting Room" },
              { label: "I", name: "Prayer Room (Female)" },
              { label: "-", name: "Dean SPS Room" },
              { label: "-", name: "School for Graduate Studies Office" },
              { label: "-", name: "Muslimah Prayer Room" },
              { label: "-", name: "IPTK Office" }
            ]
          },
          {
            id: "3rd",
            title: "3rd FLOOR OF SCHOOL FOR GRADUATE STUDIES",
            image: floorImages.third,
            legend: [
              { label: "-", name: "Computer Laboratory" },
              { label: "-", name: "Postgraduate Student Room" },
              { label: "-", name: "Academic Support Area" }
            ]
          }
        ]
      },
      rental: {
        title: "Facilities Rental",
        lecture: {
          title: "Lecture Room",
          capacity: "-",
          desc: "Modern executive lecture rooms equipped with advanced audio-visual systems and ergonomic seating.",
          images: [
            rentalImages.lecture
          ],
          rateImages: {
            private: rentalImages.lecturePrivateRate,
            gov: rentalImages.lectureGovRate
          }
        },
        auditorium: {
          title: "Auditorium",
          capacity: "120 Pax",
          desc: "Spacious grand auditorium suitable for large-scale academic events and international conferences.",
          images: [
            rentalImages.auditorium
          ],
          rateImages: {
            private: rentalImages.auditoriumPrivateRate,
            gov: rentalImages.auditoriumGovRate
          }
        },
        payment: {
          title: "Payment Information",
          intro: "Please confirm your request to us if agreed to this rental. The payment needs to be paid fully before the program starts. Payment to UTeM can be made in the form of Check/Bank Draft and be crossed in the name of the Bendahari UTeM or if the payment via Electronic Fund Transfer (EFT)/Telegraphic Transfer (Transas)/Interbank GIRO (IBG) is credited directly to the following account:",
          accName: "Universiti Teknikal Malaysia Melaka",
          accNum: "04042010000833",
          bank: "Bank Islam Malaysia Berhad",
          branch: "Cawangan Ayer Keroh, Melaka",
          swift: "BIMBMYKL",
          note: "*If payment has been made through online, please submit a payment slip as proof of payment has been made for confirmation and further action by our side."
        },
        contact: {
          title: "Person in Charge",
          name: "Fadhil Bin Ahmad",
          phone: "012-9255100",
          email: "fadhil@utem.edu.my"
        }
      },
      it: {
        title: "IT Support",
        services: [
          "UTeM Staff WIFI (High-speed secure access)",
          "UTeM Student WIFI (Campus-wide connectivity)",
          "UTeM-X Visitor WIFI (Guest access portal)",
          "Computer laboratory availability on third floor",
          "More than 20 computers available for academic usage"
        ]
      },
      other: {
        title: "Other Facilities",
        items: [
          "Auditorium room",
          "Two viva rooms",
          "Three lecture rooms",
          "Prayer room (Surau)",
          "Postgraduate student room",
          "Room booking availability seven days per week"
        ],
        note: "Refer to room reservation page for booking"
      },
      university: {
        title: "University Facilities",
        text: "Explore the wider range of facilities available across the entire UTeM campus.",
        btn: "Visit University Facilities Page"
      }
    },
    BM: {
      header: {
        title: "Kemudahan",
        subtitle: "Terokai kemudahan dan perkhidmatan sokongan yang tersedia di Sekolah Pengajian Siswazah."
      },
      location: {
        title: "Gambaran Lokasi",
        intro: "Sekolah Pengajian Siswazah (SGS) berfungsi sebagai hab pentadbiran pusat untuk semua aktiviti pascasiswazah di UTeM, menyediakan perkhidmatan sokongan penting untuk pelajar, fakulti, dan penyelidik. Pejabat kami terletak secara strategik agar mudah diakses oleh semua ahli komuniti universiti.",
        caption: "Sekolah Pengajian Siswazah dan Pejabat Dekan"
      },
      floorPlans: {
        title: "Sekolah Pengajian Siswazah dan Pejabat Dekan",
        intro: "Pejabat SPS, yang terletak di aras dua, merupakan hab pentadbiran pengajian pascasiswazah di UTeM. Pejabat ini boleh membantu dengan pertanyaan umum, tempahan kemudahan SPS dan perkhidmatan sokongan dalam proses pengajian pascasiswazah di UTeM.",
        floors: [
          {
            id: "1st",
            title: "ARAS 1 SEKOLAH PENGAJIAN SISWAZAH",
            image: floorImages.first,
            legend: [
              { label: "A", name: "Auditorium" },
              { label: "B", name: "Bilik Viva (UTAMA)" },
              { label: "C", name: "Bilik Viva 2" },
              { label: "D", name: "Bilik Kuliah 1" },
              { label: "E", name: "Bilik Kuliah 2" },
              { label: "F", name: "Bilik Kuliah 3" }
            ]
          },
          {
            id: "2nd",
            title: "ARAS 2 SEKOLAH PENGAJIAN SISWAZAH",
            image: floorImages.second,
            legend: [
              { label: "H", name: "Bilik Mesyuarat Utama" },
              { label: "I", name: "Bilik Solat (Wanita)" },
              { label: "-", name: "Bilik Dekan SPS" },
              { label: "-", name: "Pejabat Sekolah Pengajian Siswazah" },
              { label: "-", name: "Bilik Solat Muslimah" },
              { label: "-", name: "Pejabat IPTK" }
            ]
          },
          {
            id: "3rd",
            title: "ARAS 3 SEKOLAH PENGAJIAN SISWAZAH",
            image: floorImages.third,
            legend: [
              { label: "-", name: "Makmal Komputer" },
              { label: "-", name: "Bilik Pelajar Pascasiswazah" },
              { label: "-", name: "Ruang Sokongan Akademik" }
            ]
          }
        ]
      },
      rental: {
        title: "Sewa Kemudahan",
        lecture: {
          title: "Bilik Kuliah",
          capacity: "40-50 Orang",
          desc: "Bilik kuliah eksekutif moden yang dilengkapi dengan sistem audio-visual canggih dan tempat duduk ergonomik.",
          images: [
            rentalImages.lecture
          ],
          rateImages: {
            private: rentalImages.lecturePrivateRate,
            gov: rentalImages.lectureGovRate
          }
        },
        auditorium: {
          title: "Auditorium",
          capacity: "200-250 Orang",
          desc: "Auditorium utama yang luas sesuai untuk acara akademik berskala besar dan persidangan antarabangsa.",
          images: [
            rentalImages.auditorium
          ],
          rateImages: {
            private: rentalImages.auditoriumPrivateRate,
            gov: rentalImages.auditoriumGovRate
          }
        },
        payment: {
          title: "Maklumat Pembayaran",
          intro: "Sila sahkan permohonan anda kepada kami jika bersetuju dengan sewaan ini. Pembayaran perlu dijelaskan sepenuhnya sebelum program bermula. Pembayaran kepada UTeM boleh dibuat dalam bentuk Cek/Draf Bank atas nama Bendahari UTeM atau jika pembayaran melalui Pindahan Dana Elektronik (EFT)/Pindahan Telegrafik (Transas)/Interbank GIRO (IBG) dikreditkan terus ke akaun berikut:",
          accName: "Universiti Teknikal Malaysia Melaka",
          accNum: "04042010000833",
          bank: "Bank Islam Malaysia Berhad",
          branch: "Cawangan Ayer Keroh, Melaka",
          swift: "BIMBMYKL",
          note: "*Jika pembayaran telah dibuat secara dalam talian, sila kemukakan slip pembayaran sebagai bukti pembayaran telah dibuat untuk pengesahan dan tindakan lanjut dari pihak kami."
        },
        contact: {
          title: "Person in Charge",
          name: "Mrs. Norhaslinda binti Abu Bakar",
          phone: "+606 270 1234",
          email: "sgs@utem.edu.my"
        }
      },
      it: {
        title: "Sokongan IT",
        services: [
          "WIFI Kakitangan UTeM (Akses selamat berkelajuan tinggi)",
          "WIFI Pelajar UTeM (Kesambungan seluruh kampus)",
          "WIFI Pelawat UTeM-X (Portal akses tetamu)",
          "Ketersediaan makmal komputer di aras tiga",
          "Lebih daripada 20 komputer tersedia untuk kegunaan akademik"
        ]
      },
      other: {
        title: "Kemudahan Lain",
        items: [
          "Bilik auditorium",
          "Dua bilik viva",
          "Tiga bilik kuliah",
          "Surau",
          "Bilik pelajar pascasiswazah",
          "Ketersediaan tempahan bilik tujuh hari seminggu"
        ],
        note: "Rujuk halaman tempahan bilik untuk tempahan"
      },
      university: {
        title: "Kemudahan Universiti",
        text: "Terokai pelbagai kemudahan yang tersedia di seluruh kampus UTeM.",
        btn: "Layari Halaman Kemudahan Universiti"
      }
    }
  };

  const content = t[lang];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <PageHeader
        breadcrumbs={[
          { label: lang === 'EN' ? 'Home' : 'Utama', to: '/' },
          { label: content.header.title },
        ]}
        title={content.header.title}
        subtitle={content.header.subtitle}
      />

      {/* Group A: Overview (Location + SGS Office) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          {/* Location Overview */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
              {lang === 'EN' ? 'Campus Location' : 'Lokasi Kampus'}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
              {content.location.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-10">
              {content.location.intro}
            </p>
            <div className="relative group max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 bg-gray-50">
                <img 
                  src={facilitiesOverviewImage} 
                  alt="Campus Map" 
                  className="w-full aspect-[775/450] object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A51C30] flex items-center justify-center space-x-3">
                  <span className="w-6 h-px bg-[#A51C30]/30"></span>
                  <span>{content.location.caption}</span>
                  <span className="w-6 h-px bg-[#A51C30]/30"></span>
                </p>
              </div>
            </div>
          </div>

          {/* Floor Plan Directory */}
          <div className="mt-24 pt-20 border-t border-gray-100">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-gray-50 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 shadow-sm">
                {lang === 'EN' ? 'Building Directory' : 'Direktori Bangunan'}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
                {content.floorPlans.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-8">
                {content.floorPlans.intro}
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {content.floorPlans.floors.map((floor, idx) => {
                const isOpen = openFloor === floor.id;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button 
                      onClick={() => setOpenFloor(isOpen ? null : floor.id)}
                      className="w-full px-6 py-4 flex items-center justify-between group hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-[#A51C30] text-white' : 'bg-gray-100 text-gray-400 group-hover:text-[#A51C30]'}`}>
                          <Building2 size={16} />
                        </div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900">
                          {floor.title}
                        </h3>
                      </div>
                      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown size={18} className="text-gray-400" />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-8 md:px-10 md:pb-10 border-t border-gray-50 pt-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                              <div className="lg:col-span-7">
                                <div className="relative group cursor-zoom-in">
                                  <div className="overflow-hidden rounded-xl border border-gray-100 shadow-inner bg-gray-50">
                                    <img 
                                      src={floor.image} 
                                      alt={floor.title} 
                                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                      referrerPolicy="no-referrer"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="lg:col-span-5">
                                <div className="bg-gray-50 rounded-xl p-5 h-full">
                                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-200 pb-2">
                                    Room Legend
                                  </h4>
                                  <div className="grid grid-cols-1 gap-3">
                                    {floor.legend.map((item, lIdx) => (
                                      <div key={lIdx} className="flex items-start space-x-3 group">
                                        <div className="w-5 h-5 rounded bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-[#A51C30] group-hover:bg-[#A51C30] group-hover:text-white transition-colors">
                                          {item.label}
                                        </div>
                                        <span className="text-xs text-gray-600 font-light group-hover:text-gray-900 transition-colors">
                                          {item.name}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Group B: Facilities & Services (Rental + IT + Other) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-8">
          {/* Facilities Rental */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 shadow-sm">
              {lang === 'EN' ? 'Event Spaces' : 'Ruang Acara'}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
              {content.rental.title}
            </h2>
            
            <div className="flex justify-center p-1 bg-gray-200/50 rounded-xl w-fit mx-auto mb-10">
              <button 
                onClick={() => setActiveRentalTab('lecture')}
                className={`px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeRentalTab === 'lecture' ? 'bg-white text-[#A51C30] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {content.rental.lecture.title}
              </button>
              <button 
                onClick={() => setActiveRentalTab('auditorium')}
                className={`px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeRentalTab === 'auditorium' ? 'bg-white text-[#A51C30] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {content.rental.auditorium.title}
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRentalTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                {content.rental[activeRentalTab].images.map((img, idx) => (
                  <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-md border border-gray-100">
                    <img 
                      src={img} 
                      alt={`${content.rental[activeRentalTab].title} ${idx + 1}`}
                      className="w-full h-auto object-contain bg-gray-50 transition-transform duration-700 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                      <p className="text-[9px] font-bold uppercase tracking-widest opacity-80 mb-0.5">
                        {content.rental[activeRentalTab].title}
                      </p>
                      <p className="text-[10px] font-medium">
                        {lang === 'EN' ? 'Capacity' : 'Kapasiti'}: {content.rental[activeRentalTab].capacity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-w-2xl mx-auto text-center">
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  {content.rental[activeRentalTab].desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-[#A51C30]">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {lang === 'EN' ? "Private Rate" : "Kadar Swasta"}
                      </h4>
                      <p className="text-base font-serif font-bold text-gray-900">Corporate & Individual</p>
                    </div>
                  </div>
                  <div 
                    className="relative group cursor-zoom-in rounded-xl overflow-hidden border border-gray-100 bg-gray-50 max-h-[200px]"
                    onClick={() => setSelectedImage(content.rental[activeRentalTab].rateImages.private)}
                  >
                    <img 
                      src={content.rental[activeRentalTab].rateImages.private} 
                      alt="Private Rates" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-900 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                        View Full Table
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-[#A51C30]">
                      <UserCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {lang === 'EN' ? "Government Rate" : "Kadar Kerajaan"}
                      </h4>
                      <p className="text-base font-serif font-bold text-gray-900">Institutional & Public</p>
                    </div>
                  </div>
                  <div 
                    className="relative group cursor-zoom-in rounded-xl overflow-hidden border border-gray-100 bg-gray-50 max-h-[200px]"
                    onClick={() => setSelectedImage(content.rental[activeRentalTab].rateImages.gov)}
                  >
                    <img 
                      src={content.rental[activeRentalTab].rateImages.gov} 
                      alt="Government Rates" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-900 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                        View Full Table
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-[#A51C30]">
                  <CreditCard size={20} />
                </div>
                <h4 className="text-lg font-serif font-bold text-gray-900">{content.rental.payment.title}</h4>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed mb-6">
                {content.rental.payment.intro}
              </p>
              <div className="space-y-2">
                <InfoRow label={lang === 'EN' ? "Account Name" : "Nama Akaun"} value={content.rental.payment.accName} />
                <InfoRow label={lang === 'EN' ? "Account Number" : "No. Akaun"} value={content.rental.payment.accNum} />
                <InfoRow label={lang === 'EN' ? "Bank Name" : "Nama Bank"} value={content.rental.payment.bank} />
                <InfoRow label={lang === 'EN' ? "Branch Name" : "Nama Cawangan"} value={content.rental.payment.branch} />
                <InfoRow label={lang === 'EN' ? "Swift Code" : "Kod Swift"} value={content.rental.payment.swift} />
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-start space-x-2">
                <Info size={14} className="text-[#A51C30] mt-0.5 flex-shrink-0" />
                <p className="text-[10px] text-gray-500 font-medium italic">
                  {content.rental.payment.note}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col justify-center min-h-[420px]">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-5 text-gray-400">
                  <UserCircle size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">{content.rental.contact.title}</h4>
                <p className="text-[#A51C30] font-bold text-sm">{content.rental.contact.name}</p>
              </div>
              <div className="space-y-4 max-w-sm mx-auto w-full">
                <a href={`tel:${content.rental.contact.phone}`} className="flex items-center space-x-5 px-5 py-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#A51C30] transition-colors shadow-sm">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{content.rental.contact.phone}</span>
                </a>
                <a href={`mailto:${content.rental.contact.email}`} className="flex items-center space-x-5 px-5 py-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#A51C30] transition-colors shadow-sm">
                    <Mail size={14} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{content.rental.contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* IT Support Section */}
          <div className="mt-24 bg-gray-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative border border-white/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#A51C30]"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-[#A51C30] rounded-2xl flex items-center justify-center shadow-xl shadow-red-900/20">
                  <Monitor size={32} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-1.5">
                    {lang === 'EN' ? 'Digital Infrastructure' : 'Infrastruktur Digital'}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">{content.it.title}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {content.it.services.map((service, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group">
                      <div className="mt-1">
                        <Wifi size={16} className="text-[#A51C30] group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-white transition-colors">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="relative hidden lg:block">
                  <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                      alt="IT Lab" 
                      className="w-full h-full object-cover opacity-50"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Facilities Section */}
          <div className="mt-12 bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
              <Building2 size={200} />
            </div>
            
            <div className="relative z-10">
              <div className="mb-10">
                <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-2">
                  {lang === 'EN' ? 'Additional Infrastructure' : 'Infrastruktur Tambahan'}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-tight">{content.other.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-10">
                {content.other.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 size={16} className="text-[#A51C30] flex-shrink-0" />
                    <span className="text-sm text-gray-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-gray-50 rounded-2xl gap-4">
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-gray-400" />
                  <p className="text-xs font-medium text-gray-600">{content.other.note}</p>
                </div>
                <Link
                  to="/facilities/reservation"
                  className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all"
                >
                  Room Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Facilities Link Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{content.university.title}</h2>
          <p className="text-sm text-gray-500 font-light mb-8 max-w-xl mx-auto">
            {content.university.text}
          </p>
          <a
            href="https://www.utem.edu.my/en/facilities.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-3.5 border-2 border-[#A51C30] text-[#A51C30] rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#A51C30] hover:text-white transition-all duration-500 group"
          >
            <span>{content.university.btn}</span>
            <ExternalLink size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-gray-950/90 backdrop-blur-md cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-7xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg transition-all group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
              <div className="p-4 md:p-8 overflow-auto max-h-[85vh]">
                <img 
                  src={selectedImage} 
                  alt="Enlarged Rate Table" 
                  className="w-full h-auto rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Rental Rate Table Preview
                </p>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-[10px] font-bold uppercase tracking-widest text-[#A51C30] hover:underline"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-200/50 gap-1">
    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">{label}</span>
    <span className="text-xs font-medium text-gray-700">{value}</span>
  </div>
);

export default Facilities;
