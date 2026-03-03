
import { NavItem, SlideData, AcademicBlock, AdmissionStep, Testimonial, FeatureCard } from './types';
import { 
  BookOpen, 
  UserCheck, 
  FileText, 
  CheckCircle, 
  UserPlus, 
  UserCircle, 
  Users, 
  Coffee, 
  Image as ImageIcon, 
  Building2, 
  Calendar, 
  ShieldCheck, 
  Library 
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: { EN: 'HOME', BM: 'UTAMA' }, href: '/' },
  { 
    label: { EN: 'ABOUT US', BM: 'TENTANG KAMI' }, 
    href: '/about',
    children: [
      { 
        label: { EN: 'Staff Info', BM: 'Maklumat Staf' }, 
        href: '#',
        children: [
          { label: { EN: 'Organizational Chart', BM: 'Carta Organisasi' }, href: '/about/org-chart' },
          { label: { EN: 'Person in Charge', BM: 'Pegawai Bertanggungjawab' }, href: '/about/staff' },
          { label: { EN: 'Organization Chart by Unit', BM: 'Carta Organisasi Mengikut Unit' }, href: '/about/org-chart-unit' },
          { label: { EN: 'Staff Directory', BM: 'Direktori Staf' }, href: '/about/directory' },
          { label: { EN: 'Staff Portal', BM: 'Portal Staf' }, href: 'https://portal.utem.edu.my/iutem/' },
          { label: { EN: 'Staff Email', BM: 'Emel Staf' }, href: 'https://login.microsoftonline.com/?whr=utem.edu.my&sso_reload=true' },
          { label: { EN: 'Best Employee (APC)', BM: 'Anugerah Perkhidmatan Cemerlang' }, href: '/about/best-employee' },
          { label: { EN: 'Award', BM: 'Anugerah' }, href: '/about/energy-award' },
        ]
      },
      { label: { EN: 'ISO Documents', BM: 'Dokumen ISO' }, href: '#' },
      { label: { EN: 'Tuah Tenaga', BM: 'Tuah Tenaga' }, href: '#' },
      { label: { EN: 'MOU & MQA', BM: 'MOU & MQA' }, href: '#' },
      { label: { EN: 'Electronic Archives', BM: 'Arkib Elektronik' }, href: '#' },
    ]
  },
  { 
    label: { EN: 'STUDENT', BM: 'PELAJAR' }, 
    href: '#',
    children: [
      { 
        label: { EN: 'Future Students', BM: 'Bakal Pelajar' }, 
        href: '#',
        children: [
          { label: { EN: 'Faculties', BM: 'Fakulti' }, href: '#' },
          { label: { EN: 'SGS Brochure', BM: 'Broshur SGS' }, href: '/student/brochure-sgs' },
          { label: { EN: 'Faculty Brochure', BM: 'Broshur Fakulti' }, href: '/student/brochure-faculty' },
          { 
            label: { EN: 'Research', BM: 'Penyelidikan' }, 
            href: '#',
            children: [
              { label: { EN: 'Office of Deputy Vice Chancellor (R&I)', BM: 'Pejabat TNC (P&I)' }, href: 'https://pejtncpi.utem.edu.my/' },
              { label: { EN: 'Centre for Research Innovation & Management', BM: 'Pusat Pengurusan Inovasi & Penyelidikan' }, href: 'https://crim.utem.edu.my/' },
            ]
          },
        ]
      },
      { 
        label: { EN: 'Student Info', BM: 'Maklumat Pelajar' }, 
        href: '/student/student-info',
        children: [
          { label: { EN: 'UTeM Convocation', BM: 'Konvokesyen UTeM' }, href: '/student/student-info/utem-convocation' },
        ]
      },
      { label: { EN: 'Customer Feedback', BM: 'Maklum Balas Pelanggan' }, href: '#' },
      { 
        label: { EN: 'Download Forms', BM: 'Muat Turun Borang' }, 
        href: '/resources',
        children: [
          { label: { EN: 'Academic Forms', BM: 'Borang Akademik' }, href: '#' },
          { label: { EN: 'Research Proposal Template', BM: 'Templat Cadangan Penyelidikan' }, href: '#' },
          { label: { EN: 'Thesis Forms & Template', BM: 'Borang & Templat Tesis' }, href: '#' },
          { label: { EN: 'Financial Forms', BM: 'Borang Kewangan' }, href: '#' },
          { label: { EN: 'ISO Forms & Template', BM: 'Borang & Templat ISO' }, href: '#' },
        ]
      },
      { 
        label: { EN: 'Current Student', BM: 'Pelajar Sedia Ada' }, 
        href: '#',
        children: [
          { label: { EN: 'Compulsory Course', BM: 'Kursus Wajib' }, href: '#' },
          { label: { EN: 'Final Examination Info', BM: 'Maklumat Peperiksaan Akhir' }, href: '#' },
          { label: { EN: 'Class Timetable', BM: 'Jadual Waktu Kelas' }, href: '#' },
          { label: { EN: 'Academic Award', BM: 'Anugerah Akademik' }, href: '#' },
          { label: { EN: 'Alumni', BM: 'Alumni' }, href: '#' },
        ]
      },
      { 
        label: { EN: 'UPGRADE Association', BM: 'Persatuan UPGRADE' }, 
        href: '#',
        children: [
          { label: { EN: 'About UPGRADE', BM: 'Mengenai UPGRADE' }, href: '#' },
          { label: { EN: 'UPGRADE Organizational Chart', BM: 'Carta Organisasi UPGRADE' }, href: '#' },
          { label: { EN: 'UPGRADE Profession', BM: 'Profesion UPGRADE' }, href: '#' },
        ]
      },
    ]
  },
  { 
    label: { EN: 'PROGRAM', BM: 'PROGRAM' }, 
    href: '#',
    children: [
      { 
        label: { EN: 'Accreditation', BM: 'Akreditasi' }, 
        href: '#',
        children: [
          { label: { EN: 'Postgraduate Programme', BM: 'Program Pascasiswazah' }, href: '/programmes/dashboard' },
          { label: { EN: 'Quality Assurance Documents', BM: 'Dokumen Jaminan Kualiti' }, href: 'https://www2.mqa.gov.my/qad/v2/typesofqad.cfm' },
          { label: { EN: 'MQA Standards and Program Standards', BM: 'Standard MQA dan Standard Program' }, href: '/accreditation/mqa-standards' },
        ]
      },
    ]
  },
  { label: { EN: 'FINANCIAL ASSISTANT', BM: 'BANTUAN KEWANGAN' }, href: '#' },
  { 
    label: { EN: 'VISITOR', BM: 'PELAWAT' }, 
    href: '#',
    children: [
      { label: { EN: 'Job Vacancies', BM: 'Jawatan Kosong' }, href: 'https://www.utem.edu.my/en/job-vacancies.html' },
      { label: { EN: 'Procurement', BM: 'Perolehan' }, href: 'https://perolehan.utem.edu.my/index.php?lang=ms' },
      { label: { EN: 'Endowment & Wakaf', BM: 'Endowmen & Wakaf' }, href: 'https://sumbangan.utem.edu.my/' },
    ]
  },
];

export const SLIDES: SlideData[] = [
  {
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
    title: 'School of Graduate Studies',
    subtitle: 'NURTURING RESEARCH IN WORLD-CLASS FACILITIES'
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop',
    title: 'School of Graduate Studies',
    subtitle: 'ADVANCING KNOWLEDGE THROUGH INNOVATIVE SCHOLARSHIP'
  },
  {
    url: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop',
    title: 'School of Graduate Studies',
    subtitle: 'EMPOWERING THE NEXT GENERATION OF GLOBAL LEADERS'
  },
  {
    url: 'https://images.unsplash.com/photo-1523240715630-362a98f1f58b?q=80&w=2070&auto=format&fit=crop',
    title: 'School of Graduate Studies',
    subtitle: 'A LEGACY OF TECHNICAL EXCELLENCE AND MASTERY'
  }
];

export const GRADUATE_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dr. Muhammad Akmal bin Mohd Zakaria',
    location: 'Malaysia',
    degree: 'PhD in Manufacturing Engineering',
    batch: 'Batch of 2023',
    position: 'Senior Lecturer of Mechanical Engineering Studies at College of Engineering, Universiti Teknologi MARA, Penang Branch, Permatang Pauh Campus',
    company: '',
    quote: 'My PhD journey at UTeM has been a rewarding yet demanding experience. Each day brought new insights and lessons that have significantly contributed to my academic and personal development. The challenges of critical thinking, engaging in thorough research, and adjusting to the dynamic academic environment have helped me grow into a more mature and open-minded person. The opportunity to engage with lecturers, supervisors, peers, and experts in my field has been a great source of inspiration and invaluable knowledge. I am grateful to Allah SWT for granting me the opportunity to pursue my studies at this prestigious university, and I hope UTeM will continue to be a source of inspiration in building a better world.',
    image: '/images/Graduate_testimonial/Wan_Amirul.png'
  },
  {
    name: 'Siti Aminah Zahra',
    location: 'Melaka, Malaysia',
    degree: 'PhD in Information Technology',
    batch: 'Batch of 2022',
    position: 'Senior Data Scientist',
    company: 'TechGlobal Solutions',
    quote: 'The research culture at UTeM SPS is truly empowering. Having access to cutting-edge AI labs and mentorship from world-class professors allowed me to publish my research in top-tier international journals while completing my doctorate.',
    image: '/images/Graduate_testimonial/Wan_Amirul.png'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai, India',
    degree: 'Master of Electrical Engineering',
    batch: 'Batch of 2020',
    position: 'Power Systems Consultant',
    company: 'Energy Grid Corp',
    quote: 'As an international student, the welcoming atmosphere at UTeM was exceptional. The hands-on technical approach in the laboratories gave me the practical confidence I needed to lead large-scale energy projects globally.',
    image: '/images/Graduate_testimonial/Wan_Amirul.png'
  },
  {
    name: 'Elena Petrova',
    location: 'Moscow, Russia',
    degree: 'Master of Manufacturing Engineering',
    batch: 'Batch of 2023',
    position: 'Supply Chain Analyst',
    company: 'Global Logistics Hub',
    quote: 'UTeM provides a unique bridge between academic theory and industrial reality. My time at the School of Graduate Studies redefined how I approach complex manufacturing challenges in an international context.',
    image: '/images/Graduate_testimonial/Wan_Amirul.png'
  },
  {
    name: 'Chen Wei Ling',
    location: 'Shanghai, China',
    degree: 'PhD in Electronics Engineering',
    batch: 'Batch of 2021',
    position: 'Principal Research Engineer',
    company: 'MicroChip Innovations',
    quote: 'The multidisciplinary approach at UTeM allowed me to collaborate across different faculties. This breadth of experience was vital for my current role in semiconductor research and development.',
    image: '/images/Graduate_testimonial/Wan_Amirul.png'
  },
  {
    name: 'Ahmad Faiz',
    location: 'Kuala Lumpur, Malaysia',
    degree: 'Master of Business Administration (Tech)',
    batch: 'Batch of 2022',
    position: 'Tech Entrepreneur',
    company: 'Nexus Ventures',
    quote: 'The MBA program at UTeM is uniquely technical and practical. It provided me with the perfect foundation to launch my own technology startup, combining leadership skills with deep technical understanding.',
    image: '/images/Graduate_testimonial/Wan_Amirul.png'
  },
  {
    name: 'Muhammad Akmal',
    location: 'Malaysia',
    degree: 'Master of Computer Science',
    batch: 'Batch of 2023',
    position: 'Software Engineer',
    company: 'UTeM Alumni Network',
    quote: 'UTeM sharpened my technical depth and leadership skills, helping me deliver production-grade solutions with confidence.',
    image: '/images/Graduate_testimonial/Muhammad_Akmal.jpeg'
  }
];

export const ACADEMIC_BLOCKS: AcademicBlock[] = [
  {
    id: 'about',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop',
    title: { EN: 'About Us', BM: 'Tentang Kami' },
    description: { 
      EN: 'Founded on the principles of technical mastery and research innovation, UTeM SPS provides an elite platform for graduate scholars to achieve international recognition.',
      BM: 'Diasaskan atas prinsip kepakaran teknikal dan inovasi penyelidikan, UTeM SPS menyediakan platform elit bagi sarjana siswazah untuk mencapai pengiktirafan antarabangsa.'
    },
    cta: { EN: 'Discover More', BM: 'Ketahui Lebih Lanjut' },
    layout: 'left'
  },
  {
    id: 'programs',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop',
    title: { EN: 'Advanced Programs', BM: 'Program Termaju' },
    description: { 
      EN: 'Our specialized Master and PhD programs are meticulously designed to meet the requested demands of global technical industries and academia.',
      BM: 'Program Sarjana dan PhD pengkhususan kami direka dengan teliti untuk memenuhi tuntutan industri teknikal global dan akademik.'
    },
    cta: { EN: 'Explore Curricula', BM: 'Terokai Kurikulum' },
    layout: 'right'
  },
  {
    id: 'scholarships',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=2070&auto=format&fit=crop',
    title: { EN: 'Prestigious Funding', BM: 'Pembiayaan Berprestij' },
    description: { 
      EN: 'Empowering brilliance through comprehensive financial assistance. We offer exclusive scholarships for candidates with exceptional research potential.',
      BM: 'Memperkasakan kecemerlangan melalui bantuan kewangan yang komprehensif. Kami menawarkan biasiswa eksklusif untuk calon yang mempunyai potensi penyelidikan yang luar biasa.'
    },
    cta: { EN: 'Apply for Aid', BM: 'Mohon Bantuan' },
    layout: 'left'
  }
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    number: '01',
    icon: ImageIcon,
    title: { EN: 'Picture Gallery', BM: 'Galeri Gambar' },
    description: {
      EN: 'Explore the vibrant campus life and historical architectural legacy of UTeM through our curated visual collection.',
      BM: 'Terokai kehidupan kampus yang ceria dan warisan seni bina bersejarah UTeM melalui koleksi visual terpilih kami.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '02',
    icon: Building2,
    title: { EN: 'Our Facilities', BM: 'Kemudahan Kami' },
    description: {
      EN: 'State-of-the-art technical laboratories, expansive libraries, and advanced research hubs designed for innovation.',
      BM: 'Makmal teknikal canggih, perpustakaan yang luas, dan hab penyelidikan termaju yang direka untuk inovasi.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '03',
    icon: UserCircle,
    title: { EN: 'Person in Charge', BM: 'Pegawai Bertanggungjawab' },
    description: {
      EN: 'Connect with our dedicated administrative leadership and academic support team for personalized guidance.',
      BM: 'Berhubung dengan kepimpinan pentadbiran dan pasukan sokongan akademik kami untuk bimbingan peribadi.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '04',
    icon: Calendar,
    title: { EN: 'Academic Calendar', BM: 'Kalendar Akademik' },
    description: {
      EN: 'Stay informed with critical dates, semester schedules, and key academic milestones throughout the year.',
      BM: 'Sentiasa maklum dengan tarikh-tarikh penting, jadual semester, dan pencapaian akademik utama sepanjang tahun.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: { EN: 'Academic Regulation', BM: 'Peraturan Akademik' },
    description: {
      EN: 'Access comprehensive guidelines, ethical standards, and governance protocols for postgraduate scholarship.',
      BM: 'Akses garis panduan komprehensif, piawaian etika, dan protokol tadbir urus untuk biasiswa pascasiswazah.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '06',
    icon: Library,
    title: { EN: 'Resources', BM: 'Sumber' },
    description: {
      EN: 'Utilize our extensive digital repositories, software licenses, and scholarly databases to fuel your research.',
      BM: 'Gunakan repositori digital kami yang luas, lesen perisian, dan pangkalan data ilmiah untuk memacu penyelidikan anda.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop'
  }
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'research',
    icon: BookOpen,
    title: { EN: 'Research Excellence', BM: 'Kecemerlangan Penyelidikan' },
    description: {
      EN: 'Access to state-of-the-art laboratories and world-class research mentorship for all postgraduate scholars.',
      BM: 'Akses ke makmal canggih dan bimbingan penyelidikan bertaraf dunia untuk semua sarjana siswazah.'
    }
  },
  {
    id: 'industry',
    icon: UserPlus,
    title: { EN: 'Industry Integration', BM: 'Integrasi Industri' },
    description: {
      EN: 'Programs designed in collaboration with technical leaders to ensure career readiness and high impact research.',
      BM: 'Program yang direka dengan kerjasama pemimpin teknikal untuk memastikan kesediaan kerjaya dan penyelidikan berimpak tinggi.'
    }
  },
  {
    id: 'global',
    icon: Users,
    title: { EN: 'Global Network', BM: 'Rangkaian Global' },
    description: {
      EN: 'Join a diverse community of international researchers and alumni spanning technical sectors worldwide.',
      BM: 'Sertai komuniti penyelidik antarabangsa dan alumni yang pelbagai merentasi sektor teknikal di seluruh dunia.'
    }
  },
  {
    id: 'support',
    icon: Coffee,
    title: { EN: 'Scholar Support', BM: 'Sokongan Sarjana' },
    description: {
      EN: 'Dedicated graduate spaces, psychological wellness support, and comprehensive academic writing resources.',
      BM: 'Ruang siswazah khas, sokongan kesejahteraan psikologi, dan sumber penulisan akademik yang komprehensif.'
    }
  }
];
