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
} from 'lucide-react'

// --- Data for the Career Flowchart ---
const after10thFlow = {
  question: 'Great! Which stream are you interested in for your 12th?',
  options: [
    {
      text: 'Science',
      icon: 'FlaskConical',
      next: {
        question: 'Science is vast! Which combination?',
        options: [
          {
            text: 'PCM',
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
                  },
                },
              ],
            },
          },
          {
            text: 'PCB',
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
                  },
                },
              ],
            },
          },
          {
            text: 'PCMB',
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
            },
          },
        ],
      },
    },
    {
      text: 'Arts / Humanities',
      icon: 'Palette',
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
            },
          },
        ],
      },
    },
    {
      text: 'Vocational',
      icon: 'Wrench',
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
            },
          },
        ],
      },
    },
    {
      text: 'Science (PCB)',
      icon: 'HeartPulse',
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
            },
          },
        ],
      },
    },
    {
      text: 'Commerce',
      icon: 'Briefcase',
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
            },
          },
        ],
      },
    },
    {
      text: 'Arts / Humanities',
      icon: 'Palette',
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
      next: {
        question: 'Which academic stage are you at?',
        options: [
          { text: 'After 10th', icon: 'GraduationCap', next: after10thFlow },
          { text: 'After 12th', icon: 'GraduationCap', next: after12thFlow },
        ],
      },
    },
    {
      text: 'Pro Job (Choose Role)',
      icon: 'Briefcase',
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
}

const OptionButton = ({ option, onSelect }) => {
  const Icon = icons[option.icon]
  return (
    <motion.button
      onClick={() => onSelect(option)}
      className="w-full bg-white dark:bg-gray-700/50 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left flex items-center space-x-5 border border-gray-100 dark:border-gray-700"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && (
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <span className="text-lg font-semibold text-gray-800 dark:text-white">
        {option.text}
      </span>
    </motion.button>
  )
}

const ResultCard = ({ result, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl text-center w-full max-w-2xl"
    >
      <div className="flex justify-center items-center mb-4">
        <Star className="w-8 h-8 text-yellow-300 mr-2" />
        <h2 className="text-3xl font-bold">{result.details.title}</h2>
      </div>

      <div className="bg-white/10 rounded-xl p-4 my-6">
        <h3 className="font-semibold mb-2 text-blue-200">Recommended Path</h3>
        <p className="text-lg font-medium">{result.details.path.join(' → ')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white/10 p-4 rounded-xl">
          <h4 className="font-bold text-blue-200 flex items-center mb-2">
            <CheckCircle className="w-5 h-5 mr-2" />
            Key Exams
          </h4>
          <ul className="list-inside space-y-1">
            {result.details.exams.length > 0 ? (
              result.details.exams.map((exam) => <li key={exam}>{exam}</li>)
            ) : (
              <li>N/A</li>
            )}
          </ul>
        </div>
        <div className="bg-white/10 p-4 rounded-xl">
          <h4 className="font-bold text-blue-200 flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2" />
            Career Opportunities
          </h4>
          <ul className="list-inside space-y-1">
            {result.details.careers.map((career) => (
              <li key={career}>{career}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group w-full sm:w-auto mx-auto"
      >
        <RefreshCw className="mr-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        Start Over
      </button>
    </motion.div>
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
        // Find the text of the choice that led to this node `p`
        const prevNode = path[path.indexOf(p) - 1];
        const choice = prevNode.options.find(opt => opt.next === p || opt === p);
        return choice ? choice.text : '';
    })
    .filter(Boolean); // Filter out any empty strings


  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Career Path
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Answer a few questions to discover a personalized career roadmap.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800/50 rounded-3xl shadow-xl p-6 sm:p-10 min-h-[400px] flex flex-col items-center justify-center transition-all duration-500">
          <AnimatePresence mode="wait">
            {!isLeaf ? (
              <motion.div
                key={path.length}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-8">
                  {path.length > 1 ? (
                    <button
                      onClick={handleBack}
                      className="flex items-center text-sm font-semibold text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  <button
                    onClick={handleReset}
                    className="flex items-center text-sm font-semibold text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" /> Reset
                  </button>
                </div>

                <div className="h-10 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  {breadcrumbs.join(' > ')}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  {currentNode.question}
                </h3>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {currentNode.options.map((option) => (
                    <OptionButton
                      key={option.text}
                      option={option}
                      onSelect={handleSelect}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <ResultCard result={currentNode} onReset={handleReset} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

