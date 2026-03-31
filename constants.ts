
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
      { label: { EN: 'ISO Documents', BM: 'Dokumen ISO' }, href: '/about/iso-documents' },
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
          { label: { EN: 'Faculties', BM: 'Fakulti' }, href: 'https://www.utem.edu.my/en/corporate-info/faculties-department-centres.html' },
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
          { label: { EN: 'Compulsory Course', BM: 'Kursus Wajib' }, href: 'https://www.flipbookpdf.net/web/site/0ba3678afc469c6679f54f4e54af94080a225463202112.pdf.html#page/4' },
          { label: { EN: 'Final Examination Info', BM: 'Maklumat Peperiksaan Akhir' }, href: '#' },
          { label: { EN: 'Class Timetable', BM: 'Jadual Waktu Kelas' }, href: '#' },
          { label: { EN: 'Academic Award', BM: 'Anugerah Akademik' }, href: '#' },
          { label: { EN: 'Alumni', BM: 'Alumni' }, href: 'https://alumniapp.utem.edu.my/' },
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
      }
    ]
  },
  { 
    label: { EN: 'FINANCIAL ASSISTANT', BM: 'BANTUAN KEWANGAN' }, 
    href: '#',
    children: [
      { 
        label: { EN: 'Scholarship', BM: 'Biasiswa' }, 
        href: '#',
        children: [
          { label: { EN: 'KESIDANG', BM: 'KESIDANG' }, href: '#' },
          { label: { EN: 'KESIDANG Form', BM: 'Borang KESIDANG' }, href: '#' },
          { label: { EN: 'Yayasan Bank Rakyat', BM: 'Yayasan Bank Rakyat' }, href: 'https://yayasanbankrakyat.com.my/' },
        ]
      },
      { 
        label: { EN: 'Loan', BM: 'Pinjaman' }, 
        href: '#',
        children: [
          { label: { EN: 'PTPTN', BM: 'PTPTN' }, href: 'https://www.ptptn.gov.my/' },
          { label: { EN: 'MARA', BM: 'MARA' }, href: 'https://mara.gov.my/bm/pendidikan/pembiayaan-pelajaran/peringkat-pasca-siswazah/' },
          { label: { EN: 'KWSP', BM: 'KWSP' }, href: 'https://www.kwsp.gov.my/' },
        ]
      },
      { label: { EN: 'GRA Vacancy', BM: 'Kekosongan GRA' }, href: 'https://crim.utem.edu.my/postgraduate-information/' },
    ]
  },
  { 
    label: { EN: 'VISITOR', BM: 'PELAWAT' }, 
    href: '#',
    children: [
      { 
        label: { EN: 'Opportunities', BM: 'Peluang' }, 
        href: '#',
        children: [
          { label: { EN: 'Job Vacancies', BM: 'Jawatan Kosong' }, href: 'https://www.utem.edu.my/en/job-vacancies.html' },
          { label: { EN: 'Procurement', BM: 'Perolehan' }, href: 'https://perolehan.utem.edu.my/index.php?lang=ms' },
          { label: { EN: 'Endowment & Wakaf', BM: 'Endowmen & Wakaf' }, href: 'https://sumbangan.utem.edu.my/' },
        ]
      },
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
    batch: '2023',
    position: 'Senior Lecturer of Mechanical Engineering Studies at College of Engineering, Universiti Teknologi MARA, Penang Branch, Permatang Pauh Campus',
    company: 'College of Engineering, Universiti Teknologi MARA, Penang Branch, Permatang Pauh Campus',
    quote: 'My PhD journey at UTeM has been a rewarding yet demanding experience. Each day brought new insights and lessons that have significantly contributed to my academic and personal development. The challenges of critical thinking, engaging in thorough research, and adjusting to the dynamic academic environment have helped me grow into a more mature and open-minded person. The opportunity to engage with lecturers, supervisors, peers, and experts in my field has been a great source of inspiration and invaluable knowledge. I am grateful to Allah SWT for granting me the opportunity to pursue my studies at this prestigious university, and I hope UTeM will continue to be a source of inspiration in buuilding a better world.',
    image: '/images/Graduate_testimonial/Muhammad_Akmal.png'
  },
  {
    name: 'Mohd Khairul Nizam bin Ab Ghani',
    location: 'Malaysia',
    degree: 'Master of Manufacturing Engineering',
    batch: '2018',
    position: 'Vocational Training Officer',
    company: 'ILP Tangkak',
    quote: 'UTeM gave me a lot of support to complete my taught course programme. All of the lecturers are very helpful and always help me to understand the subjects.',
    image: '/images/Graduate_testimonial/Mohd Khairul Nizam.png'
  },
  {
    name: 'Ts. Dr. Mohd Fairuz Bin Jaafar',
    location: 'Malaysia',
    degree: 'PhD in Manufacturing Engineering',
    batch: '2021',
    position: 'Head of Department of External Relations and Agencies',
    company: 'Kolej Vokasional Datuk Seri Mohd Zin, Melaka',
    quote: 'As a proud alumnus of Universiti Teknikal Malaysia Melaka (UTeM), I am grateful for the transformative experience I had during my PhD journey. The rigorous academic environment and the support of esteemed faculty not only honed my research skills but also ignited my passion for innovation. Throughout my studies, I was encouraged to explore Advancing Machining, which culminated in my research titled Customized Drill Reamer Geometry for Carbon Fibre Reinforced Plastics Application. This work was not just an academic exercise; it provided valuable insights that i have since applied in my professional career. The university fostered a collaborative atmosphere that allowed me to engage with brilliant minds from diverse backgrounds. The opportunities to participate in seminars, workshops, and conferences were instrumental in developing my networking skills and gaining exposure to cutting-edge research. I am proud to say that my time at UTeM laid a strong foundation for my life and carrier. The knowledge and experiences I gained continue to influence my work and drive my passion for advancing technology and research. I highly recommend UTeM to aspiring researchers and professionals. It is a place where you can cultivate your potential and make meaningful contributions to your field.',
    image: '/images/Graduate_testimonial/Ts. Dr. Mohd Fairuz.png'
  },
  {
    name: 'Dr. Bong Cheng Siong',
    location: 'Malaysia',
    degree: 'Doctor of Engineering in Manufacturing Engineering',
    batch: '2019',
    position: 'General Manager',
    company: 'Micro-Nano Precision Sdn Bhd',
    quote: 'I had the privilege of earning my Doctorate of Engineering (EngD) Degree from Universiti Teknikal Malaysia Melaka (UTeM) in 2019. Looking back, at the beginning l often questioned if i made the right decision to pursue the postgraduate degree. But it was the supportive community-my peers and supervisors-that encouraged me to push through the doubts. Its an honor to share here a journey that has profoundly shaped who I am today. There were moments of intense struggle-long nights, research hurdles, journal and conference papers, not to forget the ever-daunting thesis. Yet, each challenge was a stepping stone. They taught me resilience, critical thinking, and the importance of perseverance. I learned that failure is not the end; its an essential part of the learning process. Since graduating, Ive had the opportunity to go extra miles of holding a senior management position in a technology driven company. Holding a doctoral qualification has also boosted my confidence to pave a new path into the world of consultancy based on my expertise. Each step Ive taken is rooted in the foundation laid during my time at UTeM. Now 1 have my own company set up to provide training and consultancy in various fields such as Quality Management, Performance Management, Project Management and Operations Improvement. I had like to take this opportunity to express my deepest gratitude to my mentors and supervisor who guided me with their wisdom and passion. Your encouragement and dedication made all the difference. To the current students, embrace the journey, both the highs and the lows. Dont shy away from asking for help, and remember that you are not alone. Your perseverance will lead to growth and discovery beyond your expectations. Thank you for allowing me to share my thoughts here. I am excited to see how we, as alumni, can shape the future of UTeM and continue to make a positive impact in our communities.',
    image: '/images/Graduate_testimonial/Dr. Bong Cheng Siong.png'
  },
  {
    name: 'Dr. Fitrah Rumaisa',
    location: 'Indonesia',
    degree: 'Doctor of Philosophy in ICT',
    batch: '2024',
    position: 'Lecturer',
    company: 'Universitas Widyatama',
    quote: 'Studying at UTeM has been an enjoyable experience. Complete facilities, especially the library. In the UTeM Laman Hikmah Library, there is a special PhD room where we can concentrate better on reading literature or writing our thesis. In addition, my supervisor, Dr. Halijah Basiron, was very helpful in discussing the issues I faced during my research. I hope UTeM can develop further and improve its world university ranking.',
    image: '/images/Graduate_testimonial/Dr. Fitrah Rumaisa.png'
  },
  {
    name: 'Dr. Eko Haryadi Badri',
    location: 'Indonesia',
    degree: 'Doctor of Philosophy in ICT',
    batch: '2024',
    position: 'Lecturer',
    company: 'BSI, Indonesia',
    quote: 'A very pleasant experience to be able to gain knowledge and complete studies in Malaysia. Get to know more about Malay culture and get closer to Malaysian citizens.',
    image: '/images/Graduate_testimonial/Dr. Eko Haryadi.png'
  },
  {
    name: 'Wan Zulaikha Binti Wan Yaacob',
    location: 'Malaysia',
    degree: 'Master of Science in ICT',
    batch: '2024',
    position: 'IT Executive',
    company: 'AFA Group (AFA Systems and Services)',
    quote: 'In my MSc in Information and Communication Technology, I have gained an in-depth understanding of both theoretical foundations and practical applications of ICT including networking, cloud computing, data analytics, cybersecurity, and software engineering. I was able to enhance my technical skills, especially in data management, information systems, and ICT infrastructures, while also learning about emerging technologies like Al and loT. Throughout the course, I worked on multiple hands-on projects that involved problem-solving, critical thinking, and collaboration with peers. These projects allowed me to apply my knowledge to real-world scenarios, such as designing ICT solutions for businesses and optimizing system performance. The program not only strengthened my technical expertise but also helped me develop project management and communication skills essential for working in multidisciplinary environments.',
    image: '/images/Graduate_testimonial/Wan Zulaikha.png'
  },
  {
    name: 'Nurul Izzati Akmal binti Muhamed Rafaizul',
    location: 'Malaysia',
    degree: 'Master of Science in Mechanical Engineering',
    batch: '2024',
    position: 'Graduate',
    company: 'Universiti Teknikal Malaysia Melaka',
    quote: 'Completing my Master’s degree at UTeM has been a highly rewarding journey. The program not only deepened my expertise in mechanical engineering but but also allowed me to stay focused and dedicated to my goals. My experience was further enriched by participating in a mobility program, which expanded my global perspective and gave me invaluable exposure to international research collaborations. The strong foundation I have gained from UTeM is essential as I prepare for future roles in the industry. The unwavering support from my supervisor and peers has made this journey invaluable, shaping my aspirations and contributing to my readiness for the professional world.  ',
    image: '/images/Graduate_testimonial/Nurul Izzati.png'
  },
  {
    name: 'Ng Lim Huat',
    location: 'Malaysia / Singapore',
    degree: 'Master of Mechanical Engineering (Product Design)',
    batch: '2021',
    position: 'Manufacturing Engineer',
    company: 'Dou Yee Manufacturing Sdn Bhd',
    quote: 'Completing a Master\'s degree at UTeM has made me a more competitive candidate which could lead to salary increases, greater job opportunities and job position. Throughout the program, I am able to emphasize both theoretical knowledge and practical application as well as the specific skills such as Critical Thinking and Analysis, Research Skills, Communication Skills, Leadership and Decision Making.',
    image: '/images/Graduate_testimonial/Ng Lim Huat.png'
  },
  {
    name: 'Dr. Fadhil Abdulameer Sachit',
    location: 'Iraq',
    degree: 'PhD in Mechanical Engineering',
    batch: '2021',
    position: 'Head of Solar Substation Department',
    company: 'Centre of Renewable Energy, Ministry of Electricity, Iraq',
    quote: 'My journey to obtain a PhD at UTeM has been challenging and rewarding. It required dedication, hard work, and perseverance. I faced numerous academic hurdles, but the support of my supervisors, professors, staff of UTeM, and colleagues helped me push through. The research opportunities expanded my knowledge and the experience has shaped me profesionally and personally.',
    image: '/images/Graduate_testimonial/Dr. Fadhil.png'
  },
  {
    name: 'Dr. Mohammad Hamdan bin Mohd Sanusi',
    location: 'Malaysia',
    degree: 'PhD in Manufacturing Engineering',
    batch: '2017',
    position: 'Head of Business Development',
    company: 'CTRM Aero Composites Sdn Bhd',
    quote: 'My PhD journey at UTeM has been a transformative experience filled with challenges and rewards. Every day has presented new knowledge and opportunities for growth, enriching my academic abilities and shaping my character. The demands of conducting thorough research, developing critical thinking skills, and adapting to the fast-paced academic environment have fostered my development into a more thoughtful, resilient, and open-minded individual. The interactions with esteemed lecturers, dedicated supervisors, and fellow scholars have not only expanded my understanding but also served as a continuous source of motivation. ',
    image: '/images/Graduate_testimonial/Dr. Mohammad Hamdan.png'
  },
  {
    name: 'Dr. Madihah Binti Haji Maharof',
    location: 'Malaysia',
    degree: 'PhD in Manufacturing Engineering',
    batch: '2021',
    position: 'Assistant Professor',
    company: 'Department of Mechanical and Production Engineering (MPE), Islamic University of Technology (IUT), Bangladesh',
    quote: 'I am deeply honored to have completed my academic journey from degree to master\'s and PhD at Universiti Teknikal Malaysia Melaka (UTeM). he years I spent at UTeM provided me with invaluable knowledge, skills, and experiences that have shaped both my personal and professional growth. Currently, as an assistant professor at the Islamic University of Technology in Bangladesh, I carry with me the values and principles instilled in me throughout my time at UTeM. This institution has not only prepared me for the academic world but has also inspired me to contribute to the global academic community.',
    image: '/images/Graduate_testimonial/Dr. Madihah.png'
  },
  {
    name: 'Dr. Nashrullah Setiawan',
    location: 'Indonesia',
    degree: 'PhD in Manufacturing Engineering',
    batch: '2024',
    position: 'Lecturer of Industrial Engineering Department',
    company: 'Faculty of Industrial Technology at Universitas Islam Indonesia',
    quote: 'My PhD journey at UTeM has been a rewarding yet demanding experience. Each day brought new insights and lessons that have significantly contributed to my academic and personal development. The challenges of critical thinking, engaging in thorough research, and adjusting to the dynamic academic environment have helped me grow into a more mature and open-minded person. The opportunity to engage with lecturers, supervisors, peers, and experts in my field has been a great source of inspiration and invaluable knowledge. I am grateful to Allah SWT for granting me the opportunity to pursue my studies at this prestigious university, and I hope UTeM will continue to be a source of inspiration in building a better world.',
    image: '/images/Graduate_testimonial/Dr. Nashrullah.png'
  },
  {
    name: 'Dr. Azlan bin Ramli',
    location: 'Malaysia',
    degree: 'PhD in Manufacturing Engineering',
    batch: '2020',
    position: 'Senior Lecturer',
    company: 'Mechanical Engineering Department, Polytechnic Muadzam Shah, Pahang',
    quote: 'Studying at UTeM was a valuable and enriching experience. Throughout my studies, I had the opportunity to utilize advanced laboratory facilities and receive guidance from experienced lecturers and supervisors. Moreover, I was involved in research projects that had a significant impact on the manufacturing engineering industry. Collaborating with classmates also enriched my experience, helping me build a professional network in research that continues to be beneficial to this day. I am deeply thankful to all the faculty members and the university for their continuous support throughout my academic journey. Achievements in carrying out research in this advanced manufacturing process field can be an inspiration to me and other students to continue to strive to achieve success in the latest and advanced manufacturing fields. ',
    image: '/images/Graduate_testimonial/Dr. Azlan.png'
  }
];

export const ACADEMIC_BLOCKS: AcademicBlock[] = [
  {
    id: 'about',
    image: '/images/homepages/About-us.jpeg',
    title: { EN: 'About Us', BM: 'Tentang Kami' },
    description: { 
      EN: 'The School of Graduate Studies (SPS), Universiti Teknikal Malaysia Melaka (UTeM) oversees the administration and development of postgraduate programmes across the university. SPS is dedicated to promoting academic excellence, research innovation, and a supportive environment for postgraduate scholars.\n\nThrough strong collaboration with faculties and industry partners, SPS prepares graduates to become competent researchers, professionals, and leaders who contribute to technological and societal advancement.',
      BM: 'The School of Graduate Studies (SPS), Universiti Teknikal Malaysia Melaka (UTeM) oversees the administration and development of postgraduate programmes across the university. SPS is dedicated to promoting academic excellence, research innovation, and a supportive environment for postgraduate scholars.\n\nThrough strong collaboration with faculties and industry partners, SPS prepares graduates to become competent researchers, professionals, and leaders who contribute to technological and societal advancement.'
    },
    cta: { EN: 'Discover More', BM: 'Ketahui Lebih Lanjut' },
    layout: 'left'
  },
  {
    id: 'programs',
    image: '/images/homepages/Programs.png',
    title: { EN: 'Our Programmes', BM: 'Program Termaju' },
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
    imageUrl: '/images/homepages/Pic-gallery.png'
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
    imageUrl: '/images/homepages/PIC.jpg'
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
