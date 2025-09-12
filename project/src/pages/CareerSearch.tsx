import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  RefreshCw,
  Rocket,
  FlaskConical,
  Briefcase,
  Palette,
  Wrench,
  GraduationCap,
  HeartPulse,
  Building,
  Shield,
  Atom,
  BarChart2,
  Calculator,
  BookOpen,
  Scale,
  Landmark,
  Brush,
  Mic,
  Users,
  Laptop,
  CheckCircle,
  MapPin,
  Star,
  PenTool,
  HelpCircle,
  Clock,
  TrendingUp,
  UserCheck,
  Lightbulb,
  Target,
} from 'lucide-react'

// --- Data for the Career Flowchart ---
const after10thFlow = {
  question: 'Great! Which stream are you interested in for your 12th?',
  options: [
    {
      text: 'Science',
      icon: 'FlaskConical',
      description: 'Explore fields in engineering, medicine, research and technology',
      next: {
        question: 'Science is vast! Which combination?',
        options: [
          {
            text: 'PCM',
            description: 'Physics, Chemistry, Mathematics - for engineering and technical fields',
            next: {
              question: 'With PCM, you can aim for:',
              options: [
                {
                  text: 'Engineering',
                  icon: 'Rocket',
                  isLeaf: true,
                  details: {
                    title: 'Path to Becoming an Engineer',
                    path: ['10th', 'Science (PCM)', 'B.Tech / B.E.'],
                    exams: ['JEE Main', 'JEE Advanced', 'BITSAT'],
                    careers: ['Software Developer', 'Architect', 'Researcher'],
                    duration: '4 years for B.Tech',
                    avgSalary: '₹6-15 LPA for freshers',
                    growth: 'High demand with 15% projected growth',
                  },
                },
                {
                  text: 'Architecture',
                  icon: 'Building',
                  isLeaf: true,
                  details: {
                    title: 'Path to Becoming an Architect',
                    path: ['10th', 'Science (PCM)', 'B.Arch'],
                    exams: ['NATA', 'JEE Main (Paper 2)'],
                    careers: [
                      'Architect',
                      'Urban Planner',
                      'Interior Designer',
                    ],
                    duration: '5 years for B.Arch',
                    avgSalary: '₹4-10 LPA for freshers',
                    growth: 'Steady growth in construction and design sectors',
                  },
                },
                {
                  text: 'Defence',
                  icon: 'Shield',
                  isLeaf: true,
                  details: {
                    title: 'Path to Joining the Defence Forces',
                    path: ['10th', 'Science (PCM)', 'NDA'],
                    exams: ['NDA', 'CDS'],
                    careers: [
                      'Army Officer',
                      'Navy Officer',
                      'Air Force Pilot',
                    ],
                    duration: '3-4 years training',
                    avgSalary: '₹8-12 LPA starting',
                    growth: 'Stable career with excellent benefits',
                  },
                },
                {
                  text: 'IT / Software',
                  icon: 'Laptop',
                  isLeaf: true,
                  details: {
                    title: 'Path to IT & Software',
                    path: ['10th', 'Science (PCM)', 'BCA / B.Tech'],
                    exams: ['University Entrances'],
                    careers: [
                      'Software Developer',
                      'Data Scientist',
                      'Cybersecurity Analyst',
                    ],
                    duration: '3-4 years for degree',
                    avgSalary: '₹5-20 LPA based on skills',
                    growth: 'Extremely high demand with global opportunities',
                  },
                },
              ],
            },
          },
          {
            text: 'PCB',
            description: 'Physics, Chemistry, Biology - for medical and life sciences',
            next: {
              question: 'With PCB, the medical field awaits:',
              options: [
                {
                  text: 'Medical (Doctor)',
                  icon: 'HeartPulse',
                  isLeaf: true,
                  details: {
                    title: 'Path to Becoming a Doctor',
                    path: ['10th', 'Science (PCB)', 'MBBS/BDS/BAMS'],
                    exams: ['NEET'],
                    careers: [
                      'Doctor (MBBS)',
                      'Dentist (BDS)',
                      'Ayurvedic Doctor (BAMS)',
                    ],
                    duration: '5.5 years for MBBS',
                    avgSalary: '₹8-15 LPA for junior doctors',
                    growth: 'Always in demand with high respect',
                  },
                },
                {
                  text: 'Pharmacy',
                  icon: 'FlaskConical',
                  isLeaf: true,
                  details: {
                    title: 'Path in Pharmacy',
                    path: ['10th', 'Science (PCB)', 'B.Pharm'],
                    exams: ['State CETs', 'NEET'],
                    careers: [
                      'Pharmacist',
                      'Researcher',
                      'Drug Inspector',
                    ],
                    duration: '4 years for B.Pharm',
                    avgSalary: '₹3-6 LPA for freshers',
                    growth: 'Stable career in healthcare sector',
                  },
                },
              ],
            },
          },
          {
            text: 'PCMB',
            description: 'Physics, Chemistry, Mathematics, Biology - keeping all options open',
            next: {
              question: 'With PCMB, you have diverse options:',
              options: [
                {
                  text: 'Research Scientist',
                  icon: 'Atom',
                  isLeaf: true,
                  details: {
                    title: 'Path to Becoming a Scientist',
                    path: ['10th', 'Science (PCMB)', 'B.Sc -> M.Sc -> PhD'],
                    exams: ['University Entrances'],
                    careers: ['Scientist', 'Researcher', 'Professor'],
                    duration: '3-7 years for higher education',
                    avgSalary: '₹6-12 LPA for researchers',
                    growth: 'Specialized field with academic opportunities',
                  },
                },
                {
                  text: 'Biotechnology',
                  icon: 'HeartPulse',
                  isLeaf: true,
                  details: {
                    title: 'Path in Biotechnology',
                    path: ['10th', 'Science (PCMB)', 'B.Tech Biotechnology'],
                    exams: ['JEE', 'BITSAT'],
                    careers: [
                      'Biotechnologist',
                      'Research Scientist',
                      'Genetic Engineer',
                    ],
                    duration: '4 years for B.Tech',
                    avgSalary: '₹4-8 LPA for freshers',
                    growth: 'Emerging field with high potential',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      text: 'Commerce',
      icon: 'Briefcase',
      description: 'Explore business, finance, accounting and economics',
      next: {
        question: 'Commerce opens doors to the business world:',
        options: [
          {
            text: 'Business & Management',
            icon: 'BarChart2',
            isLeaf: true,
            details: {
              title: 'Path in Business & Management',
              path: ['10th', 'Commerce', 'BBA / BCom'],
              exams: ['University Entrances'],
              careers: ['Business Analyst', 'Manager', 'Entrepreneur'],
              duration: '3 years for BBA/BCom',
              avgSalary: '₹3-7 LPA for freshers',
              growth: 'Versatile career with corporate opportunities',
            },
          },
          {
            text: 'Finance & Accounting',
            icon: 'Calculator',
            isLeaf: true,
            details: {
              title: 'Path in Finance & Accounting',
              path: ['10th', 'Commerce', 'CA / CS / CFA'],
              exams: ['CA Foundation', 'CS Foundation'],
              careers: [
                'Chartered Accountant',
                'Financial Analyst',
                'Banker',
              ],
              duration: '3-5 years for professional courses',
              avgSalary: '₹6-15 LPA for qualified professionals',
              growth: 'High demand in financial sector',
            },
          },
          {
            text: 'Economics',
            icon: 'BookOpen',
            isLeaf: true,
            details: {
              title: 'Path in Economics',
              path: ['10th', 'Commerce', 'B.A. Economics'],
              exams: ['University Entrances'],
              careers: ['Economist', 'Data Analyst', 'Policy Advisor'],
              duration: '3 years for BA Economics',
              avgSalary: '₹4-9 LPA for freshers',
              growth: 'Analytical roles in various sectors',
            },
          },
        ],
      },
    },
    {
      text: 'Arts / Humanities',
      icon: 'Palette',
      description: 'Explore creative fields, law, civil services and social sciences',
      next: {
        question:
          'Arts & Humanities nurture creativity and critical thinking:',
        options: [
          {
            text: 'Law',
            icon: 'Scale',
            isLeaf: true,
            details: {
              title: 'Path to a Career in Law',
              path: ['10th', 'Arts/Humanities', 'BA LLB / LLB'],
              exams: ['CLAT', 'LSAT India'],
              careers: ['Lawyer', 'Corporate Counsel', 'Judge'],
              duration: '5 years for integrated BA LLB',
              avgSalary: '₹5-12 LPA for fresh lawyers',
              growth: 'Respected profession with diverse opportunities',
            },
          },
          {
            text: 'Civil Services (UPSC)',
            icon: 'Landmark',
            isLeaf: true,
            details: {
              title: 'Path to Becoming a Civil Servant',
              path: ['10th', 'Any Stream', 'Graduation', 'UPSC CSE'],
              exams: ['UPSC Civil Services Exam'],
              careers: ['IAS', 'IPS', 'IFS', 'IRS'],
              duration: 'Graduation + 1-3 years preparation',
              avgSalary: '₹8-15 LPA starting (plus benefits)',
              growth: 'Prestigious career with societal impact',
            },
          },
          {
            text: 'Design & Creative',
            icon: 'Brush',
            isLeaf: true,
            details: {
              title: 'Path in Design & Creative Fields',
              path: ['10th', 'Arts/Humanities', 'Design Degree'],
              exams: ['NID', 'NIFT', 'UCEED'],
              careers: ['Fashion Designer', 'Graphic Designer', 'Animator'],
              duration: '4 years for design degrees',
              avgSalary: '₹3-8 LPA for freshers',
              growth: 'Creative industry with freelance opportunities',
            },
          },
          {
            text: 'Journalism',
            icon: 'Mic',
            isLeaf: true,
            details: {
              title: 'Path in Media & Journalism',
              path: ['10th', 'Arts/Humanities', 'BA in Journalism'],
              exams: ['University Entrances'],
              careers: ['Journalist', 'Content Creator', 'Reporter'],
              duration: '3 years for BA Journalism',
              avgSalary: '₹3-6 LPA for freshers',
              growth: 'Media industry with digital expansion',
            },
          },
          {
            text: 'Social Work / Psychology',
            icon: 'Users',
            isLeaf: true,
            details: {
              title: 'Path in Social Work & Psychology',
              path: ['10th', 'Arts/Humanities', 'BA/MA'],
              exams: ['University Entrances'],
              careers: ['Counselor', 'Social Worker', 'NGO Professional'],
              duration: '3-5 years for degree',
              avgSalary: '₹3-6 LPA for freshers',
              growth: 'Rewarding career helping others',
            },
          },
        ],
      },
    },
    {
      text: 'Vocational',
      icon: 'Wrench',
      description: 'Skill-based training for immediate employment opportunities',
      next: {
        question: 'Vocational courses offer skill-based training:',
        options: [
          {
            text: 'ITI / Diploma',
            isLeaf: true,
            details: {
              title: 'Path after ITI / Diploma',
              path: ['10th', 'Vocational', 'ITI/Diploma'],
              exams: [],
              careers: ['Electrician', 'Mechanic', 'Technician'],
              duration: '1-3 years for certification',
              avgSalary: '₹2-5 LPA for skilled technicians',
              growth: 'Always in demand with hands-on work',
            },
          },
          {
            text: 'Paramedical',
            isLeaf: true,
            details: {
              title: 'Path in Paramedical Fields',
              path: ['10th', 'Vocational', 'Diploma'],
              exams: [],
              careers: ['Lab Technician', 'Radiographer', 'Physiotherapist'],
              duration: '2-3 years for diploma',
              avgSalary: '₹3-5 LPA for paramedical staff',
              growth: 'Essential healthcare support roles',
            },
          },
          {
            text: 'Hospitality',
            isLeaf: true,
            details: {
              title: 'Path in Hospitality',
              path: ['10th', 'Vocational', 'Diploma'],
              exams: [],
              careers: ['Hotel Manager', 'Chef', 'Event Manager'],
              duration: '1-3 years for certification',
              avgSalary: '₹3-6 LPA in hospitality sector',
              growth: 'Growing tourism industry opportunities',
            },
          },
        ],
      },
    },
  ],
}

const after12thFlow = {
  question: 'You finished 12th! Which stream were you in?',
  options: [
    {
      text: 'Science (PCM)',
      icon: 'FlaskConical',
      description: 'Physics, Chemistry, Mathematics background',
      next: {
        question: 'With a background in PCM, you can pursue:',
        options: [
          {
            text: 'Engineering (B.Tech)',
            icon: 'Rocket',
            isLeaf: true,
            details: {
              title: 'Path to an Engineering Career',
              path: ['12th (PCM)', 'B.Tech / B.E.'],
              exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'State CETs'],
              careers: [
                'Software Engineer',
                'Mechanical Engineer',
                'Civil Engineer',
              ],
              duration: '4 years for B.Tech',
              avgSalary: '₹6-15 LPA for freshers',
              growth: 'High demand with specialization options',
            },
          },
          {
            text: 'Architecture (B.Arch)',
            icon: 'Building',
            isLeaf: true,
            details: {
              title: 'Path to an Architecture Career',
              path: ['12th (PCM)', 'B.Arch'],
              exams: ['NATA', 'JEE Main (Paper 2)'],
              careers: ['Architect', 'Urban Planner', 'Landscape Architect'],
              duration: '5 years for B.Arch',
              avgSalary: '₹4-10 LPA for freshers',
              growth: 'Creative and technical field with project-based work',
            },
          },
          {
            text: 'Bachelor of Science (B.Sc)',
            icon: 'Atom',
            isLeaf: true,
            details: {
              title: 'Path in Pure Sciences',
              path: ['12th (PCM)', 'B.Sc (Physics, Chem, Maths)'],
              exams: ['University Entrances', 'IISER Aptitude Test'],
              careers: ['Researcher', 'Data Analyst', 'Teacher/Professor'],
              duration: '3 years for B.Sc',
              avgSalary: '₹3-6 LPA for freshers',
              growth: 'Foundation for higher studies and research',
            },
          },
        ],
      },
    },
    {
      text: 'Science (PCB)',
      icon: 'HeartPulse',
      description: 'Physics, Chemistry, Biology background',
      next: {
        question: 'With a background in PCB, you can pursue:',
        options: [
          {
            text: 'Medical (MBBS/BDS)',
            icon: 'HeartPulse',
            isLeaf: true,
            details: {
              title: 'Path to a Medical Career',
              path: ['12th (PCB)', 'MBBS / BDS / BAMS'],
              exams: ['NEET'],
              careers: [
                'Doctor (Allopathic)',
                'Dentist',
                'Ayurvedic Doctor',
              ],
              duration: '5.5 years for MBBS',
              avgSalary: '₹8-15 LPA for junior doctors',
              growth: 'Prestigious and always in-demand profession',
            },
          },
          {
            text: 'Pharmacy (B.Pharm)',
            icon: 'FlaskConical',
            isLeaf: true,
            details: {
              title: 'Path to a Pharmacy Career',
              path: ['12th (PCB)', 'B.Pharm'],
              exams: ['NEET', 'State CETs'],
              careers: ['Pharmacist', 'Drug Inspector', 'Medical Researcher'],
              duration: '4 years for B.Pharm',
              avgSalary: '₹3-6 LPA for freshers',
              growth: 'Healthcare sector with retail and hospital opportunities',
            },
          },
          {
            text: 'Nursing',
            icon: 'Users',
            isLeaf: true,
            details: {
              title: 'Path to a Nursing Career',
              path: ['12th (PCB)', 'B.Sc Nursing'],
              exams: ['AIIMS Nursing', 'State Entrances'],
              careers: ['Registered Nurse', 'Nurse Practitioner', 'Educator'],
              duration: '4 years for B.Sc Nursing',
              avgSalary: '₹3-5 LPA for staff nurses',
              growth: 'Critical healthcare role with global opportunities',
            },
          },
        ],
      },
    },
    {
      text: 'Commerce',
      icon: 'Briefcase',
      description: 'Commerce and business studies background',
      next: {
        question: 'With a background in Commerce, you can pursue:',
        options: [
          {
            text: 'B.Com / BBA',
            icon: 'BarChart2',
            isLeaf: true,
            details: {
              title: 'Path in Business and Commerce',
              path: ['12th (Commerce)', 'B.Com / BBA'],
              exams: ['University Entrances (e.g., DU JAT, NPAT)'],
              careers: ['Accountant', 'Business Manager', 'Marketing Analyst'],
              duration: '3 years for B.Com/BBA',
              avgSalary: '₹3-7 LPA for freshers',
              growth: 'Versatile business education for corporate roles',
            },
          },
          {
            text: 'Professional Courses',
            icon: 'Calculator',
            isLeaf: true,
            details: {
              title: 'Path to Professional Certifications',
              path: ['12th (Commerce)', 'CA / CS / CMA'],
              exams: ['CA Foundation', 'CS Foundation', 'CMA Foundation'],
              careers: [
                'Chartered Accountant',
                'Company Secretary',
                'Cost Accountant',
              ],
              duration: '3-5 years for certification',
              avgSalary: '₹6-15 LPA for qualified professionals',
              growth: 'Highly respected professions with excellent earning potential',
            },
          },
        ],
      },
    },
    {
      text: 'Arts / Humanities',
      icon: 'Palette',
      description: 'Arts, humanities and social sciences background',
      next: {
        question: 'With a background in Arts, you can pursue:',
        options: [
          {
            text: 'Law (BA LLB)',
            icon: 'Scale',
            isLeaf: true,
            details: {
              title: 'Path to a Legal Career',
              path: ['12th (Arts)', 'BA LLB (5-Year Integrated)'],
              exams: ['CLAT', 'AILET', 'LSAT India'],
              careers: ['Lawyer', 'Judge', 'Corporate Counsel'],
              duration: '5 years for integrated BA LLB',
              avgSalary: '₹5-12 LPA for fresh lawyers',
              growth: 'Diverse practice areas from litigation to corporate law',
            },
          },
          {
            text: 'Journalism / Design',
            icon: 'PenTool',
            isLeaf: true,
            details: {
              title: 'Path in Creative Fields',
              path: ['12th (Arts)', 'BA Journalism / B.Des'],
              exams: ['NID DAT', 'NIFT Entrance', 'University Entrances'],
              careers: ['Journalist', 'Graphic Designer', 'UI/UX Designer'],
              duration: '3-4 years for degree',
              avgSalary: '₹3-8 LPA for freshers',
              growth: 'Expanding digital media and design opportunities',
            },
          },
          {
            text: 'Civil Services (UPSC)',
            icon: 'Landmark',
            isLeaf: true,
            details: {
              title: 'Path to Civil Services',
              path: ['12th (Any Stream)', 'Graduation', 'UPSC CSE'],
              exams: ['UPSC Civil Services Exam'],
              careers: ['IAS Officer', 'IPS Officer', 'IFS Officer'],
              duration: 'Graduation + 1-3 years preparation',
              avgSalary: '₹8-15 LPA starting (plus benefits)',
              growth: 'Most prestigious administrative roles in India',
            },
          },
        ],
      },
    },
  ],
}

const proJobFlow = {
  question: 'Great! Which professional role are you aiming for?',
  options: [
    {
      text: 'Engineer',
      icon: 'Rocket',
      isLeaf: true,
      details: {
        title: 'Roadmap to Become an Engineer',
        path: ['10th', 'Science (PCM)', 'B.Tech / B.E.', 'Specialization'],
        exams: ['JEE Main & Advanced', 'BITSAT', 'State CETs'],
        careers: ['Software', 'Civil', 'Mechanical', 'Electrical Engineer'],
        duration: '4 years degree + specialization',
        avgSalary: '₹6-15 LPA for freshers',
        growth: 'Continuous learning with emerging technologies',
      },
    },
    {
      text: 'Doctor',
      icon: 'HeartPulse',
      isLeaf: true,
      details: {
        title: 'Roadmap to Become a Doctor',
        path: ['10th', 'Science (PCB)', 'MBBS', 'MD/MS Specialization'],
        exams: ['NEET UG', 'NEET PG'],
        careers: ['General Physician', 'Surgeon', 'Specialist Doctor'],
        duration: '5.5 years MBBS + 3 years specialization',
        avgSalary: '₹8-15 LPA for junior doctors, higher for specialists',
        growth: 'Lifelong learning profession with high respect',
      },
    },
    {
      text: 'Architect',
      icon: 'Building',
      isLeaf: true,
      details: {
        title: 'Roadmap to Become an Architect',
        path: ['10th', 'Science (PCM)', 'B.Arch', 'Internship'],
        exams: ['NATA', 'JEE Main (Paper 2)'],
        careers: ['Corporate Architect', 'Urban Planner', 'Freelance Designer'],
        duration: '5 years B.Arch + 1-2 years internship',
        avgSalary: '₹4-10 LPA for freshers',
        growth: 'Creative field with sustainable design focus',
      },
    },
    {
      text: 'Lawyer',
      icon: 'Scale',
      isLeaf: true,
      details: {
        title: 'Roadmap to Become a Lawyer',
        path: ['12th (Any Stream)', 'BA LLB / LLB', 'Bar Exam'],
        exams: ['CLAT', 'AILET', 'LSAT India'],
        careers: ['Corporate Lawyer', 'Litigator', 'Judge'],
        duration: '5 years integrated or 3 years LLB after graduation',
        avgSalary: '₹5-12 LPA for fresh lawyers',
        growth: 'Diverse practice areas with court and corporate options',
      },
    },
    {
      text: 'Designer',
      icon: 'Brush',
      isLeaf: true,
      details: {
        title: 'Roadmap to Become a Designer',
        path: ['12th (Any Stream)', 'B.Des / M.Des', 'Portfolio'],
        exams: ['NID DAT', 'UCEED', 'NIFT Entrance'],
        careers: ['Graphic Designer', 'UI/UX Designer', 'Fashion Designer'],
        duration: '4 years B.Des + portfolio development',
        avgSalary: '₹3-8 LPA for freshers',
        growth: 'Expanding digital design opportunities globally',
      },
    },
    {
      text: 'Civil Servant (IAS/IPS)',
      icon: 'Landmark',
      isLeaf: true,
      details: {
        title: 'Roadmap to Become a Civil Servant',
        path: ['12th (Any Stream)', 'Graduation', 'UPSC Preparation'],
        exams: ['UPSC Civil Services Exam (CSE)'],
        careers: ['IAS', 'IPS', 'IFS', 'IRS Officer'],
        duration: 'Graduation + 1-3 years dedicated preparation',
        avgSalary: '₹8-15 LPA starting (plus housing, transport benefits)',
        growth: 'Highest administrative roles with societal impact',
      },
    },
  ],
}

const careerData = {
  question: "Let's find your path. Are you planning your studies or aiming for a specific job?",
  options: [
    {
      text: 'Pro Class (Plan Studies)',
      icon: 'BookOpen',
      description: 'I want to plan my educational path based on my current academic level',
      next: {
        question: 'Which academic stage are you at?',
        options: [
          { 
            text: 'After 10th', 
            icon: 'GraduationCap', 
            description: 'Planning for senior secondary education',
            next: after10thFlow 
          },
          { 
            text: 'After 12th', 
            icon: 'GraduationCap', 
            description: 'Planning for graduation and beyond',
            next: after12thFlow 
          },
        ],
      },
    },
    {
      text: 'Pro Job (Choose Role)',
      icon: 'Briefcase',
      description: 'I know which career I want and need the roadmap to get there',
      next: proJobFlow,
    },
  ],
}

// --- Icon Component Map ---
const icons = {
  ArrowLeft,
  RefreshCw,
  Rocket,
  FlaskConical,
  Briefcase,
  Palette,
  Wrench,
  GraduationCap,
  HeartPulse,
  Building,
  Shield,
  Atom,
  BarChart2,
  Calculator,
  BookOpen,
  Scale,
  Landmark,
  Brush,
  Mic,
  Users,
  Laptop,
  CheckCircle,
  MapPin,
  Star,
  PenTool,
  HelpCircle,
  Clock,
  TrendingUp,
  UserCheck,
  Lightbulb,
  Target,
}

const OptionButton = ({ option, onSelect }) => {
  const Icon = icons[option.icon]
  return (
    <motion.button
      onClick={() => onSelect(option)}
      className="w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex items-start space-x-5 border border-gray-100 dark:border-gray-700 group"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className="flex-1">
        <span className="text-lg font-semibold text-gray-800 dark:text-white block mb-2">
          {option.text}
        </span>
        {option.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {option.description}
          </p>
        )}
      </div>
    </motion.button>
  )
}

const ResultCard = ({ result, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl"
    >
      <div className="flex justify-center items-center mb-6">
        <Target className="w-8 h-8 text-yellow-300 mr-3" />
        <h2 className="text-3xl font-bold text-center">{result.details.title}</h2>
      </div>

      <div className="bg-white/10 rounded-xl p-5 my-6">
        <h3 className="font-semibold mb-3 text-blue-200 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Recommended Path
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {result.details.path.map((step, index) => (
            <React.Fragment key={index}>
              <span className="bg-white/20 px-3 py-1.5 rounded-lg font-medium">{step}</span>
              {index < result.details.path.length - 1 && (
                <span className="text-blue-200">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
        <div className="bg-white/10 p-5 rounded-xl">
          <h4 className="font-bold text-blue-200 flex items-center mb-3">
            <CheckCircle className="w-5 h-5 mr-2" />
            Key Exams
          </h4>
          <ul className="space-y-2">
            {result.details.exams.length > 0 ? (
              result.details.exams.map((exam) => (
                <li key={exam} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{exam}</span>
                </li>
              ))
            ) : (
              <li>No specific entrance exams required</li>
            )}
          </ul>
        </div>
        <div className="bg-white/10 p-5 rounded-xl">
          <h4 className="font-bold text-blue-200 flex items-center mb-3">
            <UserCheck className="w-5 h-5 mr-2" />
            Career Opportunities
          </h4>
          <ul className="space-y-2">
            {result.details.careers.map((career) => (
              <li key={career} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>{career}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white/10 p-5 rounded-xl">
          <h4 className="font-bold text-blue-200 flex items-center mb-3">
            <Clock className="w-5 h-5 mr-2" />
            Duration
          </h4>
          <p>{result.details.duration}</p>
        </div>
        <div className="bg-white/10 p-5 rounded-xl">
          <h4 className="font-bold text-blue-200 flex items-center mb-3">
            <TrendingUp className="w-5 h-5 mr-2" />
            Average Starting Salary
          </h4>
          <p>{result.details.avgSalary}</p>
          <p className="text-sm text-blue-200 mt-1">{result.details.growth}</p>
        </div>
      </div>

      <div className="bg-white/10 p-5 rounded-xl mt-6">
        <h4 className="font-bold text-blue-200 flex items-center mb-3">
          <Lightbulb className="w-5 h-5 mr-2" />
          Pro Tip
        </h4>
        <p className="text-sm">
          {result.details.title.includes('Engineer') && 
            "Focus on building practical projects alongside your degree to stand out to employers."}
          {result.details.title.includes('Doctor') && 
            "Develop strong communication skills and empathy alongside medical knowledge for patient care."}
          {result.details.title.includes('Architect') && 
            "Build a strong portfolio of designs and learn modern software tools alongside your degree."}
          {result.details.title.includes('Lawyer') && 
            "Participate in moot courts and legal aid clinics during your studies to gain practical experience."}
          {result.details.title.includes('Designer') && 
            "Create a diverse portfolio showcasing your best work and personal style to attract clients."}
          {result.details.title.includes('Civil Servant') && 
            "Stay updated on current affairs and develop a holistic understanding of governance issues."}
          {!result.details.title.includes('Engineer') && 
           !result.details.title.includes('Doctor') && 
           !result.details.title.includes('Architect') && 
           !result.details.title.includes('Lawyer') && 
           !result.details.title.includes('Designer') && 
           !result.details.title.includes('Civil Servant') && 
           "Gain practical experience through internships and build a professional network in your chosen field."}
        </p>
      </div>

      <button
        onClick={onReset}
        className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group w-full sm:w-auto mx-auto shadow-lg"
      >
        <RefreshCw className="mr-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        Explore Another Path
      </button>
    </motion.div>
  )
}

const ProgressIndicator = ({ currentIndex, total }) => {
  const progress = (currentIndex / total) * 100
  
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

export default function CareerSearch() {
  const [path, setPath] = useState([careerData])
  const currentNode = path[path.length - 1]
  const isLeaf = currentNode.isLeaf || false

  const handleSelect = (option) => {
    if (option.next) {
      setPath([...path, option.next])
    } else {
      setPath([...path, option])
    }
  }

  const handleBack = () => {
    if (path.length > 1) {
      setPath(path.slice(0, -1))
    }
  }

  const handleReset = () => {
    setPath([careerData])
  }

  // Generate breadcrumbs from the current path
  const breadcrumbs = path
    .slice(1)
    .map((p) => {
        // Find the text of the choice that led to this node p
        const prevNode = path[path.indexOf(p) - 1];
        const choice = prevNode.options.find(opt => opt.next === p || opt === p);
        return choice ? choice.text : '';
    })
    .filter(Boolean); // Filter out any empty strings

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Career Path</span>
          </motion.h2><motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Navigate through your educational journey and explore various career opportunities tailored to your interests
          </motion.p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-8 mb-8 transition-colors duration-300">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
              <button 
                onClick={handleBack}
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mr-2"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </button>
              <span className="mr-2">|</span>
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">›</span>}
                  <span className="truncate max-w-xs">{crumb}</span>
                </span>
              ))}
            </div>
          )}

          {/* Progress Indicator */}
          <ProgressIndicator currentIndex={path.length} total={6} />

          <AnimatePresence mode="wait">
            {isLeaf ? (
              <ResultCard result={currentNode} onReset={handleReset} />
            ) : (
              <motion.div
                key={currentNode.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-blue-500 mr-3" />
                  {currentNode.question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {currentNode.options.map((option, index) => (
                    <motion.div
                      key={option.text}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                    >
                      <OptionButton option={option} onSelect={handleSelect} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Explore various career paths and find the one that matches your interests and skills</p>
        </div>
      </div>
    </section>
  )
}