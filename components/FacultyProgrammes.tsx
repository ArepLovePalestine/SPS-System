
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, BookOpen, Search, GraduationCap, Settings, ArrowRight, ExternalLink, Clock, DollarSign, Mail, Phone, Globe } from 'lucide-react';
import { FacultyDetail, Language, Programme } from '../types';
import FTKMImg from '../images/Faculty_TaughtCourse/FTKM.jpeg';
import FTKEImg from '../images/Faculty_TaughtCourse/FTKE.jpeg';
import FTMKImg from '../images/Faculty_TaughtCourse/FTMK.jpeg';
import FPTTImg from '../images/Faculty_TaughtCourse/FPTT.jpeg';
import FTKEKImg from '../images/Faculty_TaughtCourse/FTKEK.jpeg';
import FTKIPImg from '../images/Faculty_TaughtCourse/FTKIP.jpeg';
import IPTKImg from '../images/Faculty_TaughtCourse/IPTK.jpeg';
import FTMKPagePic from '../images/Faculty_TaughtCourse/EachPagePic/FTMK_pic.jpg';
import PageHeader from './PageHeader';

interface FacultyProgrammesProps {
  lang: Language;
}

const faculties: FacultyDetail[] = [
  {
    id: 'fkm',
    shortName: 'FTKM',
    fullName: { EN: 'Faculty of Mechanical Technology and Engineering (FTKM)', BM: 'Fakulti Teknologi dan Kejuruteraan Mekanikal (FTKM)' },
    image: FTKMImg,
    bannerImage: FTKMImg
  },
  {
    id: 'fke',
    shortName: 'FTKE',
    fullName: { EN: 'Faculty of Electrical Technology and Engineering (FTKE)', BM: 'Fakulti Teknologi dan Kejuruteraan Elektrik (FTKE)' },
    image: FTKEImg,
    bannerImage: FTKEImg
  },
  {
    id: 'ftmk',
    shortName: 'FTMK',
    fullName: { EN: 'Faculty of Information and Communications Technology (FTMK)', BM: 'Fakulti Teknologi Maklumat dan Komunikasi (FTMK)' },
    image: FTMKImg,
    bannerImage: FTMKPagePic
  },
  {
    id: 'fptt',
    shortName: 'FPTT',
    fullName: { EN: 'Faculty of Technology Management and Technopreneurship (FPTT)', BM: 'Fakulti Pengurusan Teknologi dan Teknokeusahawanan (FPTT)' },
    image: FPTTImg,
    bannerImage: FPTTImg
  },
  {
    id: 'fkp',
    shortName: 'FTKIP',
    fullName: { EN: 'Faculty of Industrial and Manufacturing Technology and Engineering (FTKIP)', BM: 'Fakulti Teknologi dan Kejuruteraan Industri dan Pembuatan (FTKIP)' },
    image: FTKIPImg,
    bannerImage: FTKIPImg
  },
  {
    id: 'fkekk',
    shortName: 'FTKEK',
    fullName: { EN: 'Faculty of Electronics and Technology Computer and Engineering (FTKEK)', BM: 'Fakulti Teknologi dan Kejuruteraan Elektronik dan Komputer (FTKEK)' },
    image: FTKEKImg,
    bannerImage: FTKEKImg
  },
  {
    id: 'ftkip',
    shortName: 'FTKIP',
    fullName: { EN: 'Faculty of Industrial and Manufacturing Technology and Engineering (FTKIP)', BM: 'Fakulti Teknologi dan Kejuruteraan Industri dan Pembuatan (FTKIP)' },
    image: FTKIPImg,
    bannerImage: FTKIPImg
  },
  {
    id: 'iptk',
    shortName: 'IPTK',
    fullName: { EN: 'Institute of Technology Management and Entrepreneurship (IPTK)', BM: 'Institut Pengurusan Teknologi dan Keusahawanan (IPTK)' },
    image: IPTKImg,
    bannerImage: IPTKImg
  }
];

const allProgrammes: Programme[] = [
  // FTMK
  {
    id: 'ftmk-phd',
    title: { EN: 'Doctor of Philosophy (Information and Communication Technology)', BM: 'Doktor Falsafah (Teknologi Maklumat dan Komunikasi)' },
    description: { EN: 'Advanced research in ICT domains.', BM: 'Penyelidikan lanjutan dalam domain TMK.' },
    image: '',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'ftmk',
    category: 'phd',
    link: 'https://ftmk.utem.edu.my'
  },
  {
    id: 'ftmk-master-research',
    title: { EN: 'Master of Science (Information and Communication Technology)', BM: 'Sarjana Sains (Teknologi Maklumat dan Komunikasi)' },
    description: { EN: 'Research-based master programme.', BM: 'Program sarjana berasaskan penyelidikan.' },
    image: '',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '1.5 - 3 Years', BM: '1.5 - 3 Tahun' },
    faculty: 'ftmk',
    category: 'research',
    link: 'https://ftmk.utem.edu.my'
  },
  {
    id: 'ftmk-master-coursework',
    title: { EN: 'Master of Information Technology', BM: 'Sarjana Teknologi Maklumat' },
    description: { EN: 'Coursework-based master programme.', BM: 'Program sarjana berasaskan kerja kursus.' },
    image: '',
    mode: { EN: 'Coursework', BM: 'Kerja Kursus' },
    duration: { EN: '1.5 - 3 Years', BM: '1.5 - 3 Tahun' },
    faculty: 'ftmk',
    category: 'taught',
    link: 'https://ftmk.utem.edu.my'
  },
  // FKM
  {
    id: 'fkm-phd',
    title: { EN: 'Doctor of Philosophy in Mechanical Engineering', BM: 'Doktor Falsafah dalam Kejuruteraan Mekanikal' },
    description: { EN: 'Research in mechanical systems.', BM: 'Penyelidikan dalam sistem mekanikal.' },
    image: '',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'fkm',
    category: 'phd',
    link: 'https://fkm.utem.edu.my'
  },
  {
    id: 'fkm-engd',
    title: { EN: 'Doctor of Engineering (Mechanical)', BM: 'Doktor Kejuruteraan (Mekanikal)' },
    description: { EN: 'Industry-focused engineering doctorate.', BM: 'Doktorat kejuruteraan berfokuskan industri.' },
    image: '',
    mode: { EN: 'Research', BM: 'Penyelidikan' },
    duration: { EN: '3 - 6 Years', BM: '3 - 6 Tahun' },
    faculty: 'fkm',
    category: 'engd',
    link: 'https://fkm.utem.edu.my'
  }
];

const categories = [
  { id: 'taught', label: { EN: 'TAUGHT COURSE', BM: 'KERJA KURSUS' }, icon: BookOpen, desc: { EN: 'Programmes focused on structured coursework and exams.', BM: 'Program yang berfokus pada kerja kursus terstruktur dan peperiksaan.' } },
  { id: 'research', label: { EN: 'RESEARCH', BM: 'PENYELIDIKAN' }, icon: Search, desc: { EN: 'Master programmes based on original research and thesis.', BM: 'Program sarjana berasaskan penyelidikan asli dan tesis.' } },
  { id: 'phd', label: { EN: 'DOCTOR OF PHILOSOPHY', BM: 'DOKTOR FALSAFAH' }, icon: GraduationCap, desc: { EN: 'Highest academic degree based on significant research contribution.', BM: 'Ijazah akademik tertinggi berasaskan sumbangan penyelidikan yang signifikan.' } },
  { id: 'engd', label: { EN: 'DOCTOR OF ENGINEERING', BM: 'DOKTOR KEJURUTERAAN' }, icon: Settings, desc: { EN: 'Professional doctorate for engineering practitioners in industry.', BM: 'Doktorat profesional untuk pengamal kejuruteraan dalam industri.' } }
];

type CurriculumGroup = {
  category: string;
  selectionNote?: string;
  entries: Array<{ course: string; credit: string }>;
};

type DetailedTaughtProgramme = {
  id: string;
  title: string;
  summary: string;
  durationFullTime: string;
  durationPartTime: string;
  totalCredits: string;
  accreditation?: string;
  modeLabel?: string;
  mqaLevel?: string;
  necField?: string;
  studyMode?: string;
  programmeType?: string;
  fees?: {
    malaysian: string;
    international: string;
  };
  structure: CurriculumGroup[];
};

const FTKM_TAUGHT_PROGRAMMES: DetailedTaughtProgramme[] = [
  {
    id: 'ftkm-energy',
    title: 'Master of Mechanical Engineering (Energy Engineering)',
    summary: 'Specialised coursework pathway centred on energy systems, thermal engineering, and sustainable technology applications.',
    durationFullTime: '1.5 - 2.5 years',
    durationPartTime: '3 - 5 years',
    totalCredits: '40',
    accreditation: 'MQA / FA1498',
    structure: [
      { category: 'Compulsory Subjects', entries: [{ course: 'Research Methodology', credit: '3' }] },
      {
        category: 'University Elective Subjects',
        selectionNote: 'Choose one',
        entries: [
          { course: 'Entrepreneurship', credit: '3' },
          { course: 'Engineering & Technology Management', credit: '' },
          { course: 'Project Management', credit: '' },
          { course: 'Quality Systems Management', credit: '' }
        ]
      },
      {
        category: 'Faculty Core',
        entries: [
          { course: 'Mechanical System Design', credit: '3' },
          { course: 'Numerical Analysis', credit: '3' },
          { course: 'Master Project', credit: '10' }
        ]
      },
      {
        category: 'Programme Core',
        entries: [
          { course: 'Advanced Heat Transfer', credit: '3' },
          { course: 'Monitoring & Verification', credit: '3' },
          { course: 'Energy Management', credit: '3' },
          { course: 'Renewable Energy Technology', credit: '3' },
          { course: 'Computational Fluid Dynamics', credit: '3' }
        ]
      },
      {
        category: 'Programme Electives',
        selectionNote: 'Choose one',
        entries: [
          { course: 'Bio-Fuel Technology', credit: '3' },
          { course: 'Waste Heat Recovery', credit: '' },
          { course: 'Small Scale Electric Hydro', credit: '' }
        ]
      }
    ]
  },
  {
    id: 'ftkm-automotive',
    title: 'Master of Mechanical Engineering (Automotive)',
    summary: 'Advanced coursework programme focusing on intelligent vehicle systems, performance, and automotive engineering integration.',
    durationFullTime: '1.5 - 2.5 years',
    durationPartTime: '3 - 5 years',
    totalCredits: '40',
    accreditation: 'MQA / FA1499',
    structure: [
      { category: 'Compulsory Subjects', entries: [{ course: 'Research Methodology', credit: '3' }] },
      {
        category: 'University Elective Subjects',
        selectionNote: 'Choose one',
        entries: [
          { course: 'Entrepreneurship', credit: '3' },
          { course: 'Engineering & Technology Management', credit: '' },
          { course: 'Project Management', credit: '' },
          { course: 'Quality Systems Management', credit: '' }
        ]
      },
      {
        category: 'Faculty Core',
        entries: [
          { course: 'Mechanical System Design', credit: '3' },
          { course: 'Numerical Analysis', credit: '3' },
          { course: 'Master Project', credit: '10' }
        ]
      },
      {
        category: 'Programme Core',
        entries: [
          { course: 'Green Technology Vehicle', credit: '3' },
          { course: 'Vehicle Electrical & Electronics System', credit: '3' },
          { course: 'Intelligent Vehicle Control', credit: '3' },
          { course: 'Noise, Vibration & Harshness', credit: '3' },
          { course: 'Automotive Human Factor', credit: '3' }
        ]
      },
      {
        category: 'Programme Electives',
        selectionNote: 'Choose two',
        entries: [
          { course: 'Emission Control Technology', credit: '3' },
          { course: 'Vehicle Power Train and Driveline', credit: '3' },
          { course: 'Vehicle Braking System', credit: '' },
          { course: 'Tyre Behaviour & Performance Control', credit: '' },
          { course: 'Advanced Vehicle Dynamics', credit: '3' }
        ]
      }
    ]
  },
  {
    id: 'ftkm-product-design',
    title: 'Master of Mechanical Engineering (Product Design)',
    summary: 'Premium design-focused pathway blending product engineering, manufacturing strategy, and reliability-centred design methods.',
    durationFullTime: '1.5 - 2.5 years',
    durationPartTime: '3 - 5 years',
    totalCredits: '40',
    structure: [
      { category: 'Compulsory Subjects', entries: [{ course: 'Research Methodology', credit: '3' }] },
      {
        category: 'University Elective Subjects',
        selectionNote: 'Choose one',
        entries: [
          { course: 'Entrepreneurship', credit: '3' },
          { course: 'Engineering & Technology Management', credit: '' },
          { course: 'Project Management', credit: '' },
          { course: 'Quality Systems Management', credit: '' }
        ]
      },
      {
        category: 'Faculty Core',
        entries: [
          { course: 'Mechanical System Design', credit: '3' },
          { course: 'Numerical Analysis', credit: '3' },
          { course: 'Master Project', credit: '10' }
        ]
      },
      {
        category: 'Programme Core',
        entries: [
          { course: 'Computer Aided Engineering', credit: '3' },
          { course: 'Time Compression Technologies', credit: '3' },
          { course: 'Fatigue & Fracture Mechanics', credit: '3' },
          { course: 'Thermal System Design', credit: '3' }
        ]
      },
      {
        category: 'Programme Electives',
        selectionNote: 'Choose two',
        entries: [
          { course: 'Industrial & Design Engineering', credit: '3' },
          { course: 'Human Factors in Design', credit: '3' },
          { course: 'Product Reliability & Integrity', credit: '' },
          { course: 'Design for Manufacturing and Assembly', credit: '' }
        ]
      }
    ]
  },
  {
    id: 'ftkm-mechanical',
    title: 'Master of Mechanical Engineering',
    summary: 'A contemporary taught-course programme introduced for advanced mechanical engineering practice with flexible registration modes.',
    durationFullTime: '1 - 2 years',
    durationPartTime: '2 - 3 years',
    totalCredits: '40',
    accreditation: 'MQA / FA10825',
    modeLabel: 'Taught Course',
    mqaLevel: '7',
    necField: '521 - Mechanics and Metal Work',
    studyMode: 'Full-Time (1-2 years) / Part-Time (2-3 years)',
    programmeType: 'New taught course programme introduced in 2019',
    fees: {
      malaysian: 'RM 8,710.00',
      international: 'RM 14,710.00'
    },
    structure: [
      { category: 'Compulsory Subjects', entries: [{ course: 'Research Methodology', credit: '3' }] },
      { category: 'University Elective', entries: [{ course: 'Project Management', credit: '3' }] },
      {
        category: 'Programme Core',
        entries: [
          { course: 'Numerical Analysis', credit: '3' },
          { course: 'Mechanical System Design', credit: '3' },
          { course: 'Applied Heat Transfer', credit: '10' },
          { course: 'Applied Engineering Statistics', credit: '3' },
          { course: 'Advanced Material Engineering', credit: '3' },
          { course: '3D Modelling', credit: '3' },
          { course: 'Structural Dynamic', credit: '3' }
        ]
      },
      {
        category: 'Elective',
        selectionNote: 'Choose one only',
        entries: [
          { course: 'Computational Fluid Dynamics', credit: '3' },
          { course: 'Solid Mechanics Computer Modelling', credit: '' },
          { course: 'Intelligent Vehicle Control', credit: '' },
          { course: 'Computer Aided Engineering', credit: '' }
        ]
      },
      {
        category: 'Master Project',
        entries: [
          { course: 'Master Project I', credit: '4' },
          { course: 'Master Project II', credit: '6' }
        ]
      }
    ]
  }
];

const FTKM_CONTACT = {
  faculty: 'Faculty of Mechanical Technology and Engineering (FTKM)',
  university: 'Universiti Teknikal Malaysia Melaka (UTeM)',
  address: 'Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia.',
  phone: '+606-229 2119',
  email: 'ftkm@utem.edu.my',
  website: 'https://ftkm.utem.edu.my/'
};

const FTKIP_PROGRAMMES_OFFERED = [
  { programme: 'Master of Manufacturing Engineering (Manufacturing System Engineering)', fullTime: '1-2 years', partTime: '2-4 years' },
  { programme: 'Master of Manufacturing Engineering (Quality System Engineering)', fullTime: '1-2 years', partTime: '2-4 years' },
  { programme: 'Master of Manufacturing Engineering (Industrial Engineering)', fullTime: '1-2 years', partTime: '2-4 years' },
  { programme: 'Master of Manufacturing Engineering (Advanced Materials & Processing)', fullTime: '1-2 years', partTime: '2-4 years' }
];

const FTKIP_PROGRAMME_CORE_SUBJECTS = [
  { subject: 'Sustainable Product Design and Manufacturing', credit: '3' },
  { subject: 'Advanced Manufacturing Process', credit: '3' },
  { subject: 'Engineering Optimization', credit: '3' },
  { subject: 'Engineering Economy', credit: '3' },
  { subject: 'Master Project 1', credit: '4' },
  { subject: 'Master Project 2', credit: '6' },
  { subject: 'Seminar on Manufacturing Engineering', credit: '*HW' }
];

const FTKIP_SPECIALISATIONS = [
  {
    title: 'MANUFACTURING SYSTEM ENGINEERING',
    subjects: [
      { subject: 'Intelligent Manufacturing', credit: '3' },
      { subject: 'Design of Manufacturing', credit: '3' },
      { subject: 'Lean Manufacturing', credit: '3' },
      { subject: 'Robotics & Automation', credit: '3' },
      { subject: 'Engineering Economy and Decision Analysis', credit: '3' }
    ]
  },
  {
    title: 'INDUSTRIAL ENGINEERING',
    subjects: [
      { subject: 'Production Planning and Control System', credit: '3' },
      { subject: 'Supply Chain Management', credit: '3' },
      { subject: 'Manufacturing Cost and Economy', credit: '3' },
      { subject: 'Industrial and Work System Design', credit: '3' },
      { subject: 'Facilities Planning', credit: '3' }
    ]
  },
  {
    title: 'QUALITY SYSTEM ENGINEERING',
    subjects: [
      { subject: 'Advanced Metrology', credit: '3' },
      { subject: 'Total Quality Management', credit: '3' },
      { subject: 'Reliability Engineering', credit: '3' },
      { subject: 'Statistical Quality Control and Six Sigma', credit: '3' },
      { subject: 'Engineering Economy and Cost Analysis', credit: '3' }
    ]
  },
  {
    title: 'PRECISION ENGINEERING',
    subjects: [
      { subject: 'Design for Quality', credit: '3' },
      { subject: 'Micromachining Technology', credit: '3' },
      { subject: 'Computer Aided Engineering', credit: '3' },
      { subject: 'Precision Engineering', credit: '3' },
      { subject: 'Quality and Reliability', credit: '3' }
    ]
  },
  {
    title: 'ADVANCED MATERIALS & PROCESSING',
    subjects: [
      { subject: 'Advanced Technique for Materials Characterization', credit: '3' },
      { subject: 'Corrosion Science and Technology', credit: '3' },
      { subject: 'Non-Destructive Testing of Materials', credit: '3' },
      { subject: 'Materials Design & Selection', credit: '3' },
      { subject: 'Electronics Materials & Devices', credit: '3' },
      { subject: 'Advanced Composites Materials', credit: '3' }
    ]
  }
];

const FTKIP_PROGRAMME_FEE = {
  programme: 'Master of Manufacturing Engineering (Advanced Materials & Processing)',
  mode: 'Taught Course',
  fullTime: '1-2',
  partTime: '2-4',
  malaysian: '6,790',
  international: '11,290'
};

const FTKIP_CONTACT = {
  faculty: 'Faculty of Industrial and Manufacturing Technology and Engineering (FTKIP)',
  university: 'Universiti Teknikal Malaysia Melaka (UTeM)',
  address: 'Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia',
  phone: '+606-270 2579',
  email: 'ftkip@utem.edu.my',
  website: 'https://ftkip.utem.edu.my/'
};

const FPTT_PROGRAMMES_OFFERED = [
  { programme: 'Master of Business Administration (Advanced Operations Management)', fullTime: '2-4 years', partTime: '2-6 years' },
  { programme: 'Master of Business Administration (Technology and Innovation Management)', fullTime: '2-4 years', partTime: '2-6 years' }
];

const FPTT_MBA_CORE = [
  { subject: 'Global Management & Organizational Behaviour', credit: '3' },
  { subject: 'Technopreneurship & Industrial Leadership', credit: '3' },
  { subject: 'Economics for Managers', credit: '3' },
  { subject: 'Accounting & Finance For Managers', credit: '3' },
  { subject: 'Marketing Management and Technology', credit: '3' },
  { subject: 'Marketing Management and Technology', credit: '3' },
  { subject: 'Managing Human Side of Technology', credit: '3' },
  { subject: 'Strategic Technology Management', credit: '3' },
  { subject: 'Information Technology and E-Commerce', credit: '3' },
  { subject: 'Research Methodology', credit: '3' },
  { subject: 'Project Paper', credit: '6' }
];

const FPTT_SPECIALISATIONS = [
  {
    title: 'ADVANCED OPERATIONS MANAGEMENT',
    subjects: [
      { subject: 'Advanced Manufacturing and Service Management', credit: '3' },
      { subject: 'Supply Chain Management', credit: '3' },
      { subject: 'Quality Management', credit: '3' }
    ],
    coreHours: '3',
    totalHours: '45'
  },
  {
    title: 'TECHNOLOGY AND INNOVATION MANAGEMENT',
    subjects: [
      { subject: 'Technology Forecast', credit: '3' },
      { subject: 'Managing Innovation and Technological Change', credit: '3' },
      { subject: 'Technology Transfer', credit: '3' }
    ],
    coreHours: '3',
    totalHours: '45'
  }
];

const FPTT_MTV_SEMESTERS = {
  semester1: [
    { subject: 'MTVT 5013 Managing Human Side of Technology', credit: '3' },
    { subject: 'MTVT 5023 Managerial Finance', credit: '3' },
    { subject: 'MTVT 5033 Strategic Innovation Management', credit: '3' },
    { subject: 'MTVT 5043 High Technology Marketing Strategy', credit: '3' },
    { subject: 'MTVT 5053 Total Quality Management', credit: '3' }
  ],
  semester2: [
    { subject: 'MTVT 5063 Technology Transfer', credit: '3' },
    { subject: 'MTVT 5073 New Product/Service Development', credit: '3' },
    { subject: 'MTVT 5073 New Product/Service Development', credit: '3' },
    { subject: 'MTVT 5093 Business Law, Technology Protection and Commercialisation', credit: '3' },
    { subject: 'MTVT 5104 Research Methodology', credit: '4' }
  ],
  semester3: [
    { subject: '-', credit: '-' },
    { subject: '-', credit: '-' },
    { subject: '-', credit: '-' },
    { subject: '-', credit: '-' },
    { subject: '-', credit: '-' }
  ]
};

const FPTT_CONTACT = {
  faculty: 'Faculty of Technology Management and Technopreneurship (FPTT)',
  university: 'Universiti Teknikal Malaysia Melaka (UTeM)',
  address: 'Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia',
  phone: '+606-229 2122',
  email: 'fptt@utem.edu.my',
  website: 'http://www.fptt.utem.edu.my/web/'
};

const FTMK_PROGRAMMES_OFFERED = [
  { programme: 'Master of Computer Science (Internetworking Technology)', fullTime: '1-3 years', partTime: '2-4 years' },
  { programme: 'Master of Computer Science (Database Technology)', fullTime: '1-3 years', partTime: '2-4 years' },
  { programme: 'Master of Computer Science (Software Engineering)', fullTime: '1-3 years', partTime: '2-4 years' },
  { programme: 'Master of Computer Science (Security Science)', fullTime: '1-3 years', partTime: '2-4 years' },
  { programme: 'Master of Computer Science (Multimedia Computing)', fullTime: '1-3 years', partTime: '2-4 years' }
];

const FTMK_PROGRAMME_CORE = [
  { subject: 'Theory of Computation', credit: '3' },
  { subject: 'Advanced Human-Computer Interaction', credit: '3' },
  { subject: 'Advanced Data Communication & Networks', credit: '3' },
  { subject: 'Computer Architecture & Compiler', credit: '3' },
  { subject: 'Algorithm Analysis and Design', credit: '3' },
  { subject: 'Project I', credit: '3' },
  { subject: 'Project II', credit: '6' }
];

const FTMK_SPECIALISATIONS = [
  {
    title: 'INTERNETWORKING TECHNOLOGY',
    subjects: [
      { subject: 'Parallel Processing', credit: '3' },
      { subject: 'Advanced Scalable Internetworking', credit: '3' },
      { subject: 'Advanced Network Design and Diagnostics', credit: '3' },
      { subject: 'Distributed Computing Systems', credit: '3' },
      { subject: 'Advanced High Performance Network', credit: '3' },
      { subject: 'Advanced Mobile Computing', credit: '3' }
    ]
  },
  {
    title: 'SECURITY SCIENCE',
    subjects: [
      { subject: 'Public Key Infrastructure', credit: '3' },
      { subject: 'Computer Forensics', credit: '3' },
      { subject: 'Systems and Networking Hacking', credit: '3' },
      { subject: 'Cryptography and Data Security', credit: '3' },
      { subject: 'Intrusion Detection and Prevention', credit: '3' },
      { subject: 'Security Management Practices', credit: '3' },
      { subject: 'Watermarking', credit: '3' }
    ]
  },
  {
    title: 'SOFTWARE ENGINEERING',
    subjects: [
      { subject: 'Advanced Software Engineering', credit: '3' },
      { subject: 'Artificial Intelligence', credit: '3' },
      { subject: 'Requirement Elicitation', credit: '3' },
      { subject: 'Knowledge Representation & Reasoning', credit: '3' },
      { subject: 'Advanced Topics in Software Intelligent', credit: '3' }
    ]
  },
  {
    title: 'MULTIMEDIA COMPUTING',
    subjects: [
      { subject: '3D Modeling', credit: '3' },
      { subject: 'Advanced 3D Animation', credit: '3' },
      { subject: 'Computer Graphics & Visualisation', credit: '3' },
      { subject: 'Advanced Audio and Video Technology', credit: '3' },
      { subject: 'Mobile Application Development', credit: '3' },
      { subject: 'Advanced Web Programming', credit: '3' },
      { subject: 'Multimedia Professional Ethics', credit: '3' },
      { subject: 'Multimedia Based Instructional Design', credit: '3' }
    ]
  },
  {
    title: 'DATABASE TECHNOLOGY',
    subjects: [
      { subject: 'Database Programming', credit: '3' },
      { subject: 'Database Administration Security', credit: '3' },
      { subject: 'Mobile Database', credit: '3' },
      { subject: 'Advanced and Deductive Database Systems', credit: '3' },
      { subject: 'Data Warehousing and Data Mining', credit: '3' },
      { subject: 'Advanced Web Programming', credit: '3' },
      { subject: 'Distributed Database', credit: '3' },
      { subject: 'Current Trend of Database Technology', credit: '3' }
    ]
  }
];

const FTMK_MOBILE_DEVELOPMENT_CORE = [
  { subject: 'Native Mobile Development I', credit: '3' },
  { subject: 'Internet of Things Development', credit: '3' },
  { subject: 'User Experience Design & UI Practice', credit: '3' },
  { subject: 'Mobile Analytics', credit: '3' },
  { subject: 'Mobile Testing', credit: '3' },
  { subject: 'Mobile Back-end', credit: '3' }
];

const FTMK_MOBILE_DEVELOPMENT_ELECTIVES = [
  { subject: 'Agile Project Management', credit: '3' },
  { subject: 'Mobile App Architecture', credit: '3' },
  { subject: 'Native Mobile Development II', credit: '3' },
  { subject: 'Mobile Security and Privacy', credit: '3' }
];

const FTMK_DATA_SCIENCE_CORE = [
  { subject: 'Fundamental of Data Science', credit: '3' },
  { subject: 'Big Data Management', credit: '3' },
  { subject: 'Applied Statistical Methods', credit: '3' },
  { subject: 'Applied Machine Learning', credit: '3' },
  { subject: 'Big Data Analytics and Visualization', credit: '3' },
  { subject: 'Modelling and Decision Making', credit: '3' }
];

const FTMK_DATA_SCIENCE_ELECTIVES = [
  { subject: 'Special Topics in Applied Data Science', credit: '3' },
  { subject: 'Manufacturing Analytics', credit: '3' },
  { subject: 'Social Media Analytics', credit: '3' },
  { subject: 'Geospatial Analytics', credit: '3' },
  { subject: 'Healthcare Analytics', credit: '3' },
  { subject: 'Tourism Analytics', credit: '3' },
  { subject: 'Customer and Financial Analytics', credit: '3' }
];

const FTMK_CONTACT = {
  faculty: 'Faculty of Information and Communication Technology (FTMK)',
  university: 'Universiti Teknikal Malaysia Melaka (UTeM)',
  address: 'Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia',
  phone: '+606-229 2121',
  email: 'ftmk@utem.edu.my',
  website: 'http://ftmk.utem.edu.my/web/'
};

const IPTK_PROGRAMMES_OFFERED = [
  { programme: 'Master of Engineering Business Management (MIEM)', fullTime: '1-2 years', partTime: '2-4 years' },
  { programme: 'Master of Business Information Management (MIIM)', fullTime: '1-2 years', partTime: '2-4 years' }
];

const IPTK_ENTRY_REQUIREMENTS = [
  'Bachelor’s degree (MQF Level 6) in related fields with minimum CGPA 2.50; OR',
  'Bachelor’s degree with CGPA 2.00 (subject to internal assessment); OR',
  'Non-related degree with relevant experience (subject to assessment); OR',
  'Non-related degree without experience (subject to pre-requisite courses); OR',
  'Other equivalent qualifications recognized by Malaysian Government'
];

const IPTK_ENGLISH_REQUIREMENT = {
  toefl: '550',
  toeflIbt: '60',
  ielts: '6.0',
  muet: '4'
};

const IPTK_MIEM_COURSES = [
  { course: 'Research Methodology', credit: '3' },
  { course: 'Quality System Management', credit: '3' },
  { course: 'Financial Analysis', credit: '3' },
  { course: 'Sustainability Management', credit: '3' },
  { course: 'Managing People and Organizations', credit: '3' },
  { course: 'Business Data Analytics', credit: '3' },
  { course: 'Commercialization of New Technology', credit: '3' },
  { course: 'Supply Chain Management', credit: '3' },
  { course: 'Digital Marketing / Manufacturing Process Management (Select 1)', credit: '3' },
  { course: 'Smart Manufacturing / System Optimization (Select 1)', credit: '3' }
];

const IPTK_MIIM_COURSES = [
  { course: 'Research Methodology', credit: '3' },
  { course: 'Entrepreneurship / Project Management (Select 1)', credit: '3' },
  { course: 'Financial Analysis', credit: '3' },
  { course: 'Knowledge Management', credit: '3' },
  { course: 'Managing People and Organizations', credit: '3' },
  { course: 'Business Data Analytics', credit: '3' },
  { course: 'Business Process Modelling and Analysis', credit: '3' },
  { course: 'Enterprise Architecture', credit: '3' },
  { course: 'Digital Marketing / Managing Business Growth (Select 1)', credit: '3' },
  { course: 'Enterprise Cyber Security / Business Software Construction (Select 1)', credit: '3' }
];

const IPTK_CONTACT = {
  faculty: 'Institute of Technology Management and Entrepreneurship (IPTK)',
  university: 'Universiti Teknikal Malaysia Melaka (UTeM)',
  address: 'Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia',
  phone: '+606-229 2123',
  email: 'iptk@utem.edu.my',
  website: 'https://iptk.utem.edu.my/en/'
};

const FacultyProgrammes: React.FC<FacultyProgrammesProps> = ({ lang }) => {
  const [searchParams] = useSearchParams();
  const facultyId = searchParams.get('faculty');
  const categoryId = searchParams.get('category');

  const faculty = faculties.find(f => f.id === facultyId);
  const category = categories.find(c => c.id === categoryId);

  if (!faculty) return <div className="pt-40 text-center">Faculty not found</div>;

  const filteredProgrammes = allProgrammes.filter(p => p.faculty === facultyId && p.category === categoryId);
  const isFtkmTaught = facultyId === 'fkm' && categoryId === 'taught';
  const isFtkipTaught = (facultyId === 'ftkip' || facultyId === 'fkp') && categoryId === 'taught';
  const isFpttTaught = facultyId === 'fptt' && categoryId === 'taught';
  const isFtmkTaught = facultyId === 'ftmk' && categoryId === 'taught';
  const isIptkTaught = facultyId === 'iptk' && categoryId === 'taught';
  const getSharedSelectionCredit = (group: CurriculumGroup) => {
    if (!group.selectionNote) return null;
    const credits = group.entries.map((entry) => entry.credit).filter(Boolean);
    if (credits.length === 0) return null;
    return credits.every((credit) => credit === credits[0]) ? credits[0] : null;
  };

  return (
    <>
      <style>{`
        .ftkm-typography .ftkm-h1 {
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.2;
          font-weight: 600;
          word-break: normal;
          overflow-wrap: break-word;
        }
        .ftkm-typography .ftkm-h2 {
          font-size: clamp(22px, 3vw, 32px);
          line-height: 1.3;
          font-weight: 600;
          word-break: normal;
          overflow-wrap: break-word;
        }
        .ftkm-typography .ftkm-h3 {
          font-size: clamp(18px, 2.5vw, 24px);
          line-height: 1.4;
          font-weight: 600;
          word-break: normal;
          overflow-wrap: break-word;
        }
        @media (max-width: 768px) {
          .ftkm-typography .ftkm-h1 {
            font-size: clamp(24px, 6vw, 32px);
          }
          .ftkm-typography .ftkm-h2 {
            font-size: clamp(20px, 5vw, 26px);
          }
        }
      `}</style>
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white pt-24">
      <PageHeader
        breadcrumbs={[
          { label: 'HOME', to: '/' },
          { label: 'PROGRAMMES', to: '/programmes' },
          { label: faculty.shortName, to: `/programmes/faculty?faculty=${facultyId}` },
          ...(category ? [{ label: category.label[lang] }] : []),
        ]}
        title={faculty.fullName[lang]}
        subtitle={
          lang === 'EN'
            ? `Postgraduate Programmes at ${faculty.shortName}`
            : `Program Pascasiswazah di ${faculty.shortName}`
        }
      />
      {/* SECTION 1 — HERO BANNER */}
      <section className="hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={faculty.bannerImage} 
            alt={faculty.fullName[lang]} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#A51C30]/90 to-[#A51C30]/40 mix-blend-multiply" />
        </div>
        <div className={`relative z-10 mx-auto w-full px-[clamp(16px,4vw,48px)] pb-6 sm:pb-0 ${isFtkmTaught ? 'max-w-[1180px] ftkm-typography' : 'max-w-[1180px]'}`}>
          <nav className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 sm:mb-8 sm:text-[10px] sm:tracking-[0.2em]">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <Link to="/programmes" className="hover:text-white transition-colors">PROGRAMMES</Link>
            <ChevronRight size={12} />
            <Link to={`/programmes/faculty?faculty=${facultyId}`} className="hover:text-white transition-colors">{faculty.shortName}</Link>
            {category && (
              <>
                <ChevronRight size={12} />
                <span className="text-white">{category.label[lang]}</span>
              </>
            )}
          </nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 font-serif text-white ${isFtkmTaught ? 'ftkm-h1 max-w-[12ch] sm:max-w-[14ch] md:max-w-none' : 'max-w-[10ch] text-[2.15rem] font-bold leading-[0.95] sm:max-w-[12ch] md:max-w-none sm:text-4xl md:text-6xl'}`}
            style={isFtkmTaught ? { marginBottom: '20px' } : undefined}
          >
            {faculty.fullName[lang]}
          </motion.h1>
          <p className="max-w-sm text-sm font-light text-white/90 sm:text-xl">
            {lang === 'EN' 
              ? `Postgraduate Programmes at ${faculty.shortName}` 
              : `Program Pascasiswazah di ${faculty.shortName}`}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="min-h-[60vh] bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className={`mx-auto w-full px-[clamp(16px,4vw,48px)] ${isFtkmTaught ? 'max-w-[1180px] ftkm-typography' : 'max-w-[1180px]'}`}>
          {!categoryId ? (
            /* PAGE 2 — Category Selection */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {categories.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col group"
                >
                  <div className="w-16 h-16 bg-[#A51C30]/5 rounded-2xl flex items-center justify-center text-[#A51C30] mb-8 group-hover:bg-[#A51C30] group-hover:text-white transition-colors duration-500">
                    <cat.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{cat.label[lang]}</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                    {cat.desc[lang]}
                  </p>
                  <Link 
                    to={`/programmes/faculty?faculty=${facultyId}&category=${cat.id}`}
                    className="flex items-center space-x-2 text-[11px] font-bold text-[#A51C30] uppercase tracking-[0.2em] group/btn"
                  >
                    <span>{lang === 'EN' ? 'View Programmes' : 'Lihat Program'}</span>
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : isIptkTaught ? (
            <div className="space-y-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {lang === 'EN' ? 'IPTK Taught-Course Portfolio' : 'Portfolio Kerja Kursus IPTK'}
                </h2>
                <Link
                  to={`/programmes/faculty?faculty=${facultyId}`}
                  className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest flex items-center space-x-2"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  <span>{lang === 'EN' ? 'Back to Categories' : 'Kembali ke Kategori'}</span>
                </Link>
              </div>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#A51C30]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programmes Offered' : 'Program Ditawarkan'}
                  </span>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {IPTK_PROGRAMMES_OFFERED.map((programme) => (
                        <tr key={programme.programme}>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">{programme.programme}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.fullTime}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.partTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">MASTER OF ENGINEERING BUSINESS MANAGEMENT (MIEM)</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">Description:</h4>
                    <p className="text-base leading-8 text-gray-600">
                      The integration of business management and technology is a key pillar in industrial operations. The MIEM programme is designed as a hybrid programme that combines management and technical knowledge. The programme is modular, requiring completion of 40 credits including coursework and projects.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">DURATION</h4>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f4e9e3]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Mode</th>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Minimum</th>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Maximum</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="px-5 py-4 text-sm font-medium text-gray-900">Full-time</td>
                            <td className="px-5 py-4 text-sm text-gray-600">1 year</td>
                            <td className="px-5 py-4 text-sm text-gray-600">2 years</td>
                          </tr>
                          <tr>
                            <td className="px-5 py-4 text-sm font-medium text-gray-900">Part-time</td>
                            <td className="px-5 py-4 text-sm text-gray-600">2 years</td>
                            <td className="px-5 py-4 text-sm text-gray-600">4 years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">ENTRY REQUIREMENTS</h4>
                    <ul className="space-y-3 text-base leading-8 text-gray-600">
                      {IPTK_ENTRY_REQUIREMENTS.map((requirement) => (
                        <li key={requirement} className="flex items-start gap-3">
                          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#A51C30]" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">ENGLISH REQUIREMENT</h4>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#fff34a]">
                          <tr>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">TOEFL</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">TOEFL iBT</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">IELTS</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">MUET</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{IPTK_ENGLISH_REQUIREMENT.toefl}</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{IPTK_ENGLISH_REQUIREMENT.toeflIbt}</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{IPTK_ENGLISH_REQUIREMENT.ielts}</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{IPTK_ENGLISH_REQUIREMENT.muet}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">COURSE STRUCTURE</h4>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f4e9e3]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {IPTK_MIEM_COURSES.map((course) => (
                            <tr key={course.course}>
                              <td className="px-5 py-4 text-sm text-gray-800">{course.course}</td>
                              <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{course.credit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Project:</h4>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#fff34a]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td className="px-5 py-4 text-sm text-gray-800">Project 1</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">4</td>
                          </tr>
                          <tr>
                            <td className="px-5 py-4 text-sm text-gray-800">Project 2</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">6</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">Total Credit Hours: 40</div>
                  </div>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Fee' : 'Yuran Program'}
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Mode' : 'Mod'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Malaysian (RM)' : 'Malaysia (RM)'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'International (RM)' : 'Antarabangsa (RM)'}</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-900">Master of Engineering Business Management</td>
                        <td className="px-5 py-4 text-sm text-gray-600">Taught Course</td>
                        <td className="px-5 py-4 text-sm text-gray-600">1-2</td>
                        <td className="px-5 py-4 text-sm text-gray-600">2-4</td>
                        <td className="px-5 py-4 text-sm text-gray-900">19,505.00</td>
                        <td className="px-5 py-4 text-sm text-gray-900">28,205.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">MASTER OF BUSINESS INFORMATION MANAGEMENT (MIIM)</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">Description:</h4>
                    <p className="text-base leading-8 text-gray-600">
                      This programme focuses on managing information as a strategic resource to improve business performance. It combines analytical and business knowledge, implemented through modular learning.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">DURATION</h4>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f4e9e3]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Mode</th>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Minimum</th>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Maximum</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="px-5 py-4 text-sm font-medium text-gray-900">Full-time</td>
                            <td className="px-5 py-4 text-sm text-gray-600">1 year</td>
                            <td className="px-5 py-4 text-sm text-gray-600">2 years</td>
                          </tr>
                          <tr>
                            <td className="px-5 py-4 text-sm font-medium text-gray-900">Part-time</td>
                            <td className="px-5 py-4 text-sm text-gray-600">2 years</td>
                            <td className="px-5 py-4 text-sm text-gray-600">4 years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">ENTRY REQUIREMENTS</h4>
                    <p className="text-base leading-8 text-gray-600">(Same as MIEM)</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">ENGLISH REQUIREMENT</h4>
                    <p className="text-base leading-8 text-gray-600">(Same as MIEM)</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">COURSE STRUCTURE</h4>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f4e9e3]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {IPTK_MIIM_COURSES.map((course) => (
                            <tr key={course.course}>
                              <td className="px-5 py-4 text-sm text-gray-800">{course.course}</td>
                              <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{course.credit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Project:</h4>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#fff34a]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td className="px-5 py-4 text-sm text-gray-800">Project 1</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">4</td>
                          </tr>
                          <tr>
                            <td className="px-5 py-4 text-sm text-gray-800">Project 2</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">6</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">Total Credit Hours: 40</div>
                  </div>
                </div>
              </section>

              <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)]">
                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programme Fee' : 'Yuran Program'}
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#f4e9e3]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Mode' : 'Mod'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Malaysian (RM)' : 'Malaysia (RM)'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'International (RM)' : 'Antarabangsa (RM)'}</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">Master of Business Information Management</td>
                          <td className="px-5 py-4 text-sm text-gray-600">Taught Course</td>
                          <td className="px-5 py-4 text-sm text-gray-600">1-2</td>
                          <td className="px-5 py-4 text-sm text-gray-600">2-4</td>
                          <td className="px-5 py-4 text-sm text-gray-900">19,505.00</td>
                          <td className="px-5 py-4 text-sm text-gray-900">28,205.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Further Information' : 'Maklumat Lanjut'}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">{IPTK_CONTACT.faculty}</h3>
                  <p className="text-sm leading-7 text-gray-600">
                    {IPTK_CONTACT.university}<br />
                    {IPTK_CONTACT.address}
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <Phone size={16} className="text-[#A51C30]" />
                      <span>{IPTK_CONTACT.phone}</span>
                    </div>
                    <a href={`mailto:${IPTK_CONTACT.email}`} className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Mail size={16} className="text-[#A51C30]" />
                      <span>{IPTK_CONTACT.email}</span>
                    </a>
                    <a href={IPTK_CONTACT.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Globe size={16} className="text-[#A51C30]" />
                      <span>{IPTK_CONTACT.website}</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          ) : isFtmkTaught ? (
            <div className="space-y-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {lang === 'EN' ? 'FTMK Taught-Course Portfolio' : 'Portfolio Kerja Kursus FTMK'}
                </h2>
                <Link
                  to={`/programmes/faculty?faculty=${facultyId}`}
                  className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest flex items-center space-x-2"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  <span>{lang === 'EN' ? 'Back to Categories' : 'Kembali ke Kategori'}</span>
                </Link>
              </div>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#A51C30]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programmes Offered' : 'Program Ditawarkan'}
                  </span>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {FTMK_PROGRAMMES_OFFERED.map((programme) => (
                        <tr key={programme.programme}>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">{programme.programme}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.fullTime}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.partTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">(i) Programme Core</h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#fff34a]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Subject' : 'Subjek'}</th>
                        <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 bg-[#c7f3f3]">
                      {FTMK_PROGRAMME_CORE.map((subject) => (
                        <tr key={subject.subject}>
                          <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                          <td className="px-5 py-4 text-center text-sm font-semibold text-gray-900">{subject.credit}</td>
                        </tr>
                      ))}
                      <tr className="bg-[#98f28c]">
                        <td className="px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-gray-800">Programme Core Credit Hours</td>
                        <td className="px-5 py-4 text-center text-sm font-bold text-gray-900">24</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">(ii) CORE COURSE (Choose TWO subjects only for each specialization)</h3>
              </section>

              <section className="grid gap-6 xl:grid-cols-2">
                {FTMK_SPECIALISATIONS.map((specialisation) => (
                  <article key={specialisation.title} className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                    <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                      {specialisation.title}
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f4e9e3]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Subject' : 'Subjek'}</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {specialisation.subjects.map((subject) => (
                            <tr key={subject.subject}>
                              <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                              <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{subject.credit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </article>
                ))}
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'New Taught Course Programmes' : 'Program Kerja Kursus Baharu'}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Master of Software Engineering (Mobile Development)</h3>
                <div className="grid gap-4 md:grid-cols-3 mb-6">
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">MQF Level</div>
                    <div className="mt-2 text-sm font-semibold text-gray-900">7</div>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">NEC Field</div>
                    <div className="mt-2 text-sm font-semibold text-gray-900">481 – Computer Science</div>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Mode' : 'Mod'}</div>
                    <div className="mt-2 text-sm font-semibold text-gray-900">Full-Time (1-2 years) / Part-Time (3-4 years)</div>
                  </div>
                </div>
                <p className="text-base leading-8 text-gray-600">
                  Designed to meet industry demand for mobile application developers, focusing on iOS and Android platforms, integrating UI/UX design, development skills, and industry practices.
                </p>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Section' : 'Bahagian'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                        <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-900">Compulsory</td>
                        <td className="px-5 py-4 text-sm text-gray-800">Research Methodology</td>
                        <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">3</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-900">University Elective</td>
                        <td className="px-5 py-4 text-sm text-gray-800">Entrepreneurship</td>
                        <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Programme Core:</h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#fff34a]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                          <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {FTMK_MOBILE_DEVELOPMENT_CORE.map((subject) => (
                          <tr key={subject.subject}>
                            <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{subject.credit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Elective (choose two):</h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#f4e9e3]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                          <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {FTMK_MOBILE_DEVELOPMENT_ELECTIVES.map((subject) => (
                          <tr key={subject.subject}>
                            <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{subject.credit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>Master Project I & II: 10</p>
                  <p>Total Credit Hours: 40</p>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Fee' : 'Yuran Program'}
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Mode' : 'Mod'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Malaysian (RM)' : 'Malaysia (RM)'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'International (RM)' : 'Antarabangsa (RM)'}</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-900">Master of Software Engineering (Mobile Development)</td>
                        <td className="px-5 py-4 text-sm text-gray-600">Taught Course</td>
                        <td className="px-5 py-4 text-sm text-gray-600">1-2</td>
                        <td className="px-5 py-4 text-sm text-gray-600">2-4</td>
                        <td className="px-5 py-4 text-sm text-gray-900">11,910.00</td>
                        <td className="px-5 py-4 text-sm text-gray-900">20,310.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'New Programme' : 'Program Baharu'}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Master of Technology (Data Science and Analytics)</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">MQF Level</div>
                    <div className="mt-2 text-sm font-semibold text-gray-900">7</div>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">NEC Field</div>
                    <div className="mt-2 text-sm font-semibold text-gray-900">482 – Computer Use</div>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Mode' : 'Mod'}</div>
                    <div className="mt-2 text-sm font-semibold text-gray-900">Full-Time (1-2 years) / Part-Time (3-4 years)</div>
                  </div>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Section' : 'Bahagian'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                        <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-900">Compulsory</td>
                        <td className="px-5 py-4 text-sm text-gray-800">Research Methodology</td>
                        <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">3</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 text-sm font-medium text-gray-900">University Elective</td>
                        <td className="px-5 py-4 text-sm text-gray-800">Entrepreneurship</td>
                        <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Programme Core:</h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#fff34a]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                          <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {FTMK_DATA_SCIENCE_CORE.map((subject) => (
                          <tr key={subject.subject}>
                            <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{subject.credit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Elective (choose two):</h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#f4e9e3]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                          <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {FTMK_DATA_SCIENCE_ELECTIVES.map((subject) => (
                          <tr key={subject.subject}>
                            <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{subject.credit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>Master Project I & II: 10</p>
                  <p>Total Credit Hours: 40</p>
                </div>
              </section>

              <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)]">
                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programme Fee' : 'Yuran Program'}
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#f4e9e3]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Mode' : 'Mod'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Malaysian (RM)' : 'Malaysia (RM)'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'International (RM)' : 'Antarabangsa (RM)'}</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">Master of Technology (Data Science and Analytics)</td>
                          <td className="px-5 py-4 text-sm text-gray-600">Taught Course</td>
                          <td className="px-5 py-4 text-sm text-gray-600">1-2</td>
                          <td className="px-5 py-4 text-sm text-gray-600">2-4</td>
                          <td className="px-5 py-4 text-sm text-gray-900">11,910.00</td>
                          <td className="px-5 py-4 text-sm text-gray-900">20,310.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Further Information' : 'Maklumat Lanjut'}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">{FTMK_CONTACT.faculty}</h3>
                  <p className="text-sm leading-7 text-gray-600">
                    {FTMK_CONTACT.university}<br />
                    {FTMK_CONTACT.address}
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <Phone size={16} className="text-[#A51C30]" />
                      <span>{FTMK_CONTACT.phone}</span>
                    </div>
                    <a href={`mailto:${FTMK_CONTACT.email}`} className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Mail size={16} className="text-[#A51C30]" />
                      <span>{FTMK_CONTACT.email}</span>
                    </a>
                    <a href={FTMK_CONTACT.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Globe size={16} className="text-[#A51C30]" />
                      <span>{FTMK_CONTACT.website}</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          ) : isFpttTaught ? (
            <div className="space-y-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {lang === 'EN' ? 'FPTT Taught-Course Portfolio' : 'Portfolio Kerja Kursus FPTT'}
                </h2>
                <Link
                  to={`/programmes/faculty?faculty=${facultyId}`}
                  className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest flex items-center space-x-2"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  <span>{lang === 'EN' ? 'Back to Categories' : 'Kembali ke Kategori'}</span>
                </Link>
              </div>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#A51C30]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programmes Offered' : 'Program Ditawarkan'}
                  </span>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {FPTT_PROGRAMMES_OFFERED.map((programme) => (
                        <tr key={programme.programme}>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">{programme.programme}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.fullTime}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.partTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">(i) Master of Business Administration (Programme Core)</h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#fff34a]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Subject' : 'Subjek'}</th>
                        <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 bg-[#c7f3f3]">
                      {FPTT_MBA_CORE.map((subject) => (
                        <tr key={`${subject.subject}-${subject.credit}`}>
                          <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                          <td className="px-5 py-4 text-center text-sm font-semibold text-gray-900">{subject.credit}</td>
                        </tr>
                      ))}
                      <tr className="bg-[#98f28c]">
                        <td className="px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-gray-800">Programme Core Credit Hours</td>
                        <td className="px-5 py-4 text-center text-sm font-bold text-gray-900">36</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">(ii) CORE COURSE (Specialization)</h3>
              </section>

              <section className="grid gap-6 xl:grid-cols-2">
                {FPTT_SPECIALISATIONS.map((specialisation) => (
                  <article key={specialisation.title} className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                    <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                      {specialisation.title}
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f4e9e3]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Subject' : 'Subjek'}</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {specialisation.subjects.map((subject) => (
                            <tr key={subject.subject}>
                              <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                              <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{subject.credit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-5 space-y-1 text-sm text-gray-600">
                      <p>{specialisation.title === 'TECHNOLOGY AND INNOVATION MANAGEMENT' ? 'Core Course Credit Hours' : 'Course Core Credit Hours'}: {specialisation.coreHours}</p>
                      <p>Total Credit Hours: {specialisation.totalHours}</p>
                    </div>
                  </article>
                ))}
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'New Taught Course Programme' : 'Program Kerja Kursus Baharu'}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Programme: Master of Technovation (MTV)</h3>
                <p className="text-base leading-8 text-gray-600">
                  UTeM is offering MTV to meet the needs of professionals who aspire to or hold management positions in technical and non-technical organizations. The programme aims to extend knowledge and competency in effective management, including leadership skills, policy management, resource management, and innovation strategies.
                </p>
              </section>

              <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                  {lang === 'EN' ? 'Programme Structure (MTV)' : 'Struktur Program (MTV)'}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Semester Structure</h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Semester 1</th>
                        <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Semester 2</th>
                        <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Semester 3</th>
                        <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {FPTT_MTV_SEMESTERS.semester1.map((row, index) => (
                        <tr key={`${row.subject}-${index}`}>
                          <td className="px-5 py-4 text-sm text-gray-800">{row.subject}</td>
                          <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{row.credit}</td>
                          <td className="px-5 py-4 text-sm text-gray-800">{FPTT_MTV_SEMESTERS.semester2[index].subject}</td>
                          <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{FPTT_MTV_SEMESTERS.semester2[index].credit}</td>
                          <td className="px-5 py-4 text-sm text-gray-800">{FPTT_MTV_SEMESTERS.semester3[index].subject}</td>
                          <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{FPTT_MTV_SEMESTERS.semester3[index].credit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-5 space-y-1 text-sm text-gray-600">
                  <p>Total Credit Semester 1: 15</p>
                  <p>Total Credit Semester 2: 16</p>
                </div>
              </section>

              <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)]">
                <div className="space-y-5">
                  <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                    <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                      {lang === 'EN' ? 'Research Component' : 'Komponen Penyelidikan'}
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#fff34a]">
                          <tr>
                            <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                            <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td className="px-5 py-4 text-sm text-gray-800">Research Project</td>
                            <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                    <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                      {lang === 'EN' ? 'Credit Notes' : 'Nota Kredit'}
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Total credit per semester: 12–19 credits</p>
                      <p>More than 20 credits: Subject to Dean approval</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Further Information' : 'Maklumat Lanjut'}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">{FPTT_CONTACT.faculty}</h3>
                  <p className="text-sm leading-7 text-gray-600">
                    {FPTT_CONTACT.university}<br />
                    {FPTT_CONTACT.address}
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <Phone size={16} className="text-[#A51C30]" />
                      <span>{FPTT_CONTACT.phone}</span>
                    </div>
                    <a href={`mailto:${FPTT_CONTACT.email}`} className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Mail size={16} className="text-[#A51C30]" />
                      <span>{FPTT_CONTACT.email}</span>
                    </a>
                    <a href={FPTT_CONTACT.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Globe size={16} className="text-[#A51C30]" />
                      <span>{FPTT_CONTACT.website}</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          ) : isFtkipTaught ? (
            <div className="space-y-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {lang === 'EN' ? 'FTKIP Taught-Course Portfolio' : 'Portfolio Kerja Kursus FTKIP'}
                </h2>
                <Link
                  to={`/programmes/faculty?faculty=${facultyId}`}
                  className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest flex items-center space-x-2"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  <span>{lang === 'EN' ? 'Back to Categories' : 'Kembali ke Kategori'}</span>
                </Link>
              </div>

              <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#A51C30]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programmes Offered' : 'Program Ditawarkan'}
                  </span>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {FTKIP_PROGRAMMES_OFFERED.map((programme) => (
                        <tr key={programme.programme}>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">{programme.programme}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.fullTime}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.partTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-8">
                <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Programme Core Subjects</h3>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#fff34a]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Subject' : 'Subjek'}</th>
                          <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 bg-[#c7f3f3]">
                        {FTKIP_PROGRAMME_CORE_SUBJECTS.map((subject) => (
                          <tr key={subject.subject}>
                            <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                            <td className="px-5 py-4 text-center text-sm font-semibold text-gray-900">{subject.credit}</td>
                          </tr>
                        ))}
                        <tr className="bg-[#98f28c]">
                          <td className="px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-gray-800">
                            Programme Core Credit Hours
                          </td>
                          <td className="px-5 py-4 text-center text-sm font-bold text-gray-900">36</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-5 space-y-2 text-sm text-gray-600">
                    <p>*HW = Compulsory Attendance</p>
                  </div>
                </section>

                <section className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Core Course Subjects</h3>
                  <p className="text-sm text-gray-600">(Student must choose FOUR subjects only – 12 credits)</p>
                </section>

                <section className="grid gap-6 xl:grid-cols-2">
                  {FTKIP_SPECIALISATIONS.map((specialisation) => (
                    <article key={specialisation.title} className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                      <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                        {specialisation.title}
                      </div>
                      <div className="overflow-x-auto rounded-2xl border border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-[#f4e9e3]">
                            <tr>
                              <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Subject' : 'Subjek'}</th>
                              <th className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {specialisation.subjects.map((subject) => (
                              <tr key={subject.subject}>
                                <td className="px-5 py-4 text-sm text-gray-800">{subject.subject}</td>
                                <td className="px-5 py-4 text-center text-sm font-medium text-gray-900">{subject.credit}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </article>
                  ))}
                </section>
              </div>

              <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)]">
                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programme Fee' : 'Yuran Program'}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Master of Manufacturing Engineering (Advanced Materials & Processing)</h3>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#f4e9e3]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Programme' : 'Program'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Mode' : 'Mod'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Malaysian (RM)' : 'Malaysia (RM)'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'International (RM)' : 'Antarabangsa (RM)'}</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">{FTKIP_PROGRAMME_FEE.programme}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{FTKIP_PROGRAMME_FEE.mode}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{FTKIP_PROGRAMME_FEE.fullTime}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{FTKIP_PROGRAMME_FEE.partTime}</td>
                          <td className="px-5 py-4 text-sm text-gray-900">{FTKIP_PROGRAMME_FEE.malaysian}</td>
                          <td className="px-5 py-4 text-sm text-gray-900">{FTKIP_PROGRAMME_FEE.international}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Further Information' : 'Maklumat Lanjut'}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">{FTKIP_CONTACT.faculty}</h3>
                  <p className="text-sm leading-7 text-gray-600">
                    {FTKIP_CONTACT.university}<br />
                    {FTKIP_CONTACT.address}
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <Phone size={16} className="text-[#A51C30]" />
                      <span>{FTKIP_CONTACT.phone}</span>
                    </div>
                    <a href={`mailto:${FTKIP_CONTACT.email}`} className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Mail size={16} className="text-[#A51C30]" />
                      <span>{FTKIP_CONTACT.email}</span>
                    </a>
                    <a href={FTKIP_CONTACT.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Globe size={16} className="text-[#A51C30]" />
                      <span>{FTKIP_CONTACT.website}</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          ) : isFtkmTaught ? (
              <div className="w-full max-w-full space-y-8 sm:space-y-10">
              <div className="mb-2 flex flex-col gap-3 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="ftkm-h2 max-w-[14ch] font-serif text-gray-900 sm:max-w-none" style={{ marginBottom: '20px' }}>
                  {lang === 'EN' ? 'FTKM Taught-Course Portfolio' : 'Portfolio Kerja Kursus FTKM'}
                </h2>
                <Link 
                  to={`/programmes/faculty?faculty=${facultyId}`}
                  className="inline-flex items-center space-x-2 self-start text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400 hover:text-[#A51C30] sm:self-auto sm:text-[10px] sm:tracking-widest"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  <span>{lang === 'EN' ? 'Back to Categories' : 'Kembali ke Kategori'}</span>
                </Link>
              </div>

              <div className="mx-auto w-full max-w-full rounded-[1.5rem] border border-gray-200 bg-white p-4 shadow-sm sm:rounded-[1.75rem] sm:p-7">
                <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-12 bg-[#A51C30]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A51C30] sm:text-[11px] sm:tracking-[0.28em]">
                      {lang === 'EN' ? 'Programmes Offered' : 'Program Ditawarkan'}
                    </span>
                  </div>
                  <div className="inline-flex self-start rounded-full border border-[#A51C30]/15 bg-[#faf7f5] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#A51C30] sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.22em]">
                    {lang === 'EN' ? '4 taught-course pathways' : '4 laluan kerja kursus'}
                  </div>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full min-w-[560px] divide-y divide-gray-200 sm:min-w-full">
                    <thead className="bg-[#f4e9e3]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                          {lang === 'EN' ? 'Programme' : 'Program'}
                        </th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                          {lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}
                        </th>
                        <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                          {lang === 'EN' ? 'Part Time' : 'Separuh Masa'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {FTKM_TAUGHT_PROGRAMMES.map((programme) => (
                        <tr key={programme.id}>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">{programme.title}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.durationFullTime}</td>
                          <td className="px-5 py-4 text-sm text-gray-600">{programme.durationPartTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {FTKM_TAUGHT_PROGRAMMES.map((programme, idx) => (
                  <motion.article
                    key={programme.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="mx-auto w-full max-w-full overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-sm sm:rounded-[1.75rem]"
                  >
                    <div className="border-b border-gray-200 bg-[#fcfaf8] px-4 py-5 sm:px-7 sm:py-7">
                      <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                        <div className="max-w-3xl">
                          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A51C30] sm:mb-4 sm:text-[11px] sm:tracking-[0.28em]">
                            {programme.programmeType || (lang === 'EN' ? 'Taught-Course Programme' : 'Program Kerja Kursus')}
                          </div>
                          <h3 className="ftkm-h2 max-w-[16ch] font-serif text-gray-900 sm:max-w-none" style={{ marginBottom: '20px' }}>
                            {programme.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                            {programme.summary}
                          </p>
                        </div>
                        <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-3 xl:min-w-[340px]">
                          <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
                            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400 sm:text-[10px] sm:tracking-[0.22em]">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</div>
                            <div className="mt-2 break-words text-sm font-semibold text-gray-900">{programme.durationFullTime}</div>
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
                            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400 sm:text-[10px] sm:tracking-[0.22em]">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</div>
                            <div className="mt-2 break-words text-sm font-semibold text-gray-900">{programme.durationPartTime}</div>
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
                            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400 sm:text-[10px] sm:tracking-[0.22em]">{lang === 'EN' ? 'Total Credits' : 'Jumlah Kredit'}</div>
                            <div className="mt-2 break-words text-sm font-semibold text-gray-900">{programme.totalCredits}</div>
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
                            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400 sm:text-[10px] sm:tracking-[0.22em]">Accreditation</div>
                            <div className="mt-2 break-words text-sm font-semibold text-gray-900">{programme.accreditation || '-'}</div>
                          </div>
                        </div>
                      </div>

                      {(programme.mqaLevel || programme.necField || programme.studyMode || programme.fees) && (
                        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                          {programme.mqaLevel && (
                          <div className="min-w-0 rounded-2xl bg-white px-4 py-4 border border-gray-200 sm:px-5">
                              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">MQA Level</div>
                              <div className="mt-2 text-sm font-semibold text-gray-900">{programme.mqaLevel}</div>
                            </div>
                          )}
                          {programme.necField && (
                          <div className="min-w-0 rounded-2xl bg-white px-4 py-4 border border-gray-200 sm:px-5">
                              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">NEC Field</div>
                              <div className="mt-2 text-sm font-semibold text-gray-900">{programme.necField}</div>
                            </div>
                          )}
                          {programme.studyMode && (
                          <div className="min-w-0 rounded-2xl bg-white px-4 py-4 border border-gray-200 sm:px-5">
                              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Mode of Study' : 'Mod Pengajian'}</div>
                              <div className="mt-2 text-sm font-semibold text-gray-900">{programme.studyMode}</div>
                            </div>
                          )}
                          {programme.fees && (
                          <div className="min-w-0 rounded-2xl bg-white px-4 py-4 border border-gray-200 sm:px-5">
                              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">{lang === 'EN' ? 'Academic Fee' : 'Yuran Akademik'}</div>
                              <div className="mt-2 text-sm font-semibold text-gray-900">{programme.fees.malaysian}</div>
                              <div className="text-xs text-gray-500">{lang === 'EN' ? 'Malaysian' : 'Malaysia'}</div>
                              <div className="mt-3 text-sm font-semibold text-gray-900">{programme.fees.international}</div>
                              <div className="text-xs text-gray-500">{lang === 'EN' ? 'International' : 'Antarabangsa'}</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="px-4 py-5 sm:px-7 sm:py-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#A51C30]/70" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A51C30] sm:text-[11px] sm:tracking-[0.26em]">
                          {lang === 'EN' ? 'Programme Structure' : 'Struktur Program'}
                        </span>
                      </div>
                    <div className="max-w-full overflow-x-auto rounded-2xl border border-gray-200">
                        <table className="w-full min-w-[760px] divide-y divide-gray-200">
                          <thead className="bg-[#fff34a]">
                            <tr>
                              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.18em] text-gray-900">{lang === 'EN' ? 'Category' : 'Kategori'}</th>
                              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.18em] text-gray-900">{lang === 'EN' ? 'Course' : 'Kursus'}</th>
                              <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-gray-900">{lang === 'EN' ? 'Credit' : 'Kredit'}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-300 bg-[#c7f3f3]">
                            {programme.structure.map((group) => {
                              const sharedCredit = getSharedSelectionCredit(group);
                              return group.entries.map((entry, entryIndex) => (
                                <tr key={`${group.category}-${entry.course}`} className="align-top">
                                  {entryIndex === 0 && (
                                    <td rowSpan={group.entries.length} className="align-top bg-[#c7f3f3] px-4 py-3 text-[13px] font-semibold leading-5 text-gray-900 border-r border-gray-300">
                                      <div>{group.category}</div>
                                      {group.selectionNote && (
                                        <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#A51C30]">
                                          {group.selectionNote}
                                        </div>
                                      )}
                                    </td>
                                  )}
                                  <td className="px-4 py-2.5 text-[13px] leading-5 text-gray-700">{entry.course}</td>
                                  {sharedCredit ? (
                                    entryIndex === 0 && (
                                      <td rowSpan={group.entries.length} className="bg-[#c7f3f3] px-4 py-3 text-center text-[13px] font-semibold leading-5 text-gray-900 border-l border-gray-300 align-middle">
                                        {sharedCredit}
                                      </td>
                                    )
                                  ) : (
                                    <td className="px-4 py-2.5 text-center text-[13px] font-semibold leading-5 text-gray-900">{entry.credit}</td>
                                  )}
                                </tr>
                              ));
                            })}
                            <tr className="bg-[#98f28c]">
                              <td colSpan={2} className="px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-gray-800">
                                {lang === 'EN' ? 'Total Credit Hours' : 'Jumlah Jam Kredit'}
                              </td>
                              <td className="px-4 py-3 text-center text-sm font-bold text-gray-900">{programme.totalCredits}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <section className="grid gap-4 sm:gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)]">
                <div className="min-w-0 rounded-[1.5rem] border border-gray-200 bg-white p-4 shadow-sm sm:rounded-[1.75rem] sm:p-7">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Programme Fees' : 'Yuran Program'}
                  </div>
                  <h3 className="ftkm-h2 mb-4 max-w-[16ch] font-serif text-gray-900 sm:max-w-none">Master of Mechanical Engineering</h3>
                  <p className="mb-6 break-words text-sm leading-7 text-gray-600">
                    {lang === 'EN'
                      ? 'Academic fees for the newly introduced Master of Mechanical Engineering taught-course programme.'
                      : 'Yuran akademik untuk program kerja kursus Sarjana Kejuruteraan Mekanikal yang baharu diperkenalkan.'}
                  </p>
                  <div className="max-w-full overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full min-w-[620px] divide-y divide-gray-200">
                      <thead className="bg-[#f4e9e3]">
                        <tr>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Study Mode' : 'Mod Pengajian'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Full Time' : 'Sepenuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Part Time' : 'Separuh Masa'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'Malaysian' : 'Malaysia'}</th>
                          <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">{lang === 'EN' ? 'International' : 'Antarabangsa'}</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="px-5 py-4 text-sm font-semibold text-gray-900">Taught Course</td>
                          <td className="px-5 py-4 text-sm text-gray-600">1 - 2</td>
                          <td className="px-5 py-4 text-sm text-gray-600">2 - 3</td>
                          <td className="px-5 py-4 text-sm text-gray-900">RM 8,710.00</td>
                          <td className="px-5 py-4 text-sm text-gray-900">RM 14,710.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="min-w-0 rounded-[1.5rem] border border-gray-200 bg-white p-4 shadow-sm sm:rounded-[1.75rem] sm:p-7">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A51C30]">
                    {lang === 'EN' ? 'Further Information' : 'Maklumat Lanjut'}
                  </div>
                  <h3 className="mb-4 break-words font-serif text-[1.55rem] font-bold leading-[1.12] text-gray-900 sm:text-3xl">{FTKM_CONTACT.faculty}</h3>
                  <p className="break-words text-sm leading-7 text-gray-600">
                    {FTKM_CONTACT.university}<br />
                    {FTKM_CONTACT.address}
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex min-w-0 items-start gap-4 text-sm text-gray-700">
                      <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#A51C30]" />
                      <span className="min-w-0 break-words">{FTKM_CONTACT.phone}</span>
                    </div>
                    <a href={`mailto:${FTKM_CONTACT.email}`} className="flex min-w-0 items-start gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#A51C30]" />
                      <span className="min-w-0 break-all">{FTKM_CONTACT.email}</span>
                    </a>
                    <a href={FTKM_CONTACT.website} target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-start gap-4 text-sm text-gray-700 transition-colors hover:text-[#A51C30]">
                      <Globe size={16} className="mt-0.5 flex-shrink-0 text-[#A51C30]" />
                      <span className="min-w-0 break-all">{FTKM_CONTACT.website}</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            /* PAGE 3 — Programme List */
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {category?.label[lang]}
                </h2>
                <Link 
                  to={`/programmes/faculty?faculty=${facultyId}`}
                  className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest flex items-center space-x-2"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  <span>{lang === 'EN' ? 'Back to Categories' : 'Kembali ke Kategori'}</span>
                </Link>
              </div>

              {filteredProgrammes.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredProgrammes.map((prog, idx) => (
                    <motion.div
                      key={prog.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between group hover:shadow-md transition-all"
                    >
                      <div className="space-y-4 md:max-w-2xl">
                        <h4 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#A51C30] transition-colors">
                          {prog.title[lang]}
                        </h4>
                        <div className="flex flex-wrap gap-6">
                          <div className="flex items-center space-x-2 text-gray-500">
                            <BookOpen size={14} className="text-[#A51C30]" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{prog.mode[lang]}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <Clock size={14} className="text-[#A51C30]" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{prog.duration[lang]}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <DollarSign size={14} className="text-[#A51C30]" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{lang === 'EN' ? 'Competitive Fees' : 'Yuran Kompetitif'}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 md:mt-0">
                        <a 
                          href={prog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-gray-50 hover:bg-[#A51C30] text-gray-600 hover:text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
                        >
                          <span>{lang === 'EN' ? 'More Information' : 'Maklumat Lanjut'}</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-20 rounded-3xl text-center border border-dashed border-gray-200">
                  <p className="text-gray-400 font-light italic">
                    {lang === 'EN' 
                      ? 'No programmes currently listed for this category. Please check back later or contact the faculty.' 
                      : 'Tiada program disenaraikan buat masa ini untuk kategori ini. Sila semak semula nanti atau hubungi fakulti.'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
};

export default FacultyProgrammes;

