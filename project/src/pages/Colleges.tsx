import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, BarChart2 } from 'lucide-react';

// --- UPDATED DATA ---
const collegesData = [
  { id: 1, name: 'Stanford University', location: 'Stanford, CA', state: null, ranking: 3, nirfRanking: null, degrees: ['Engineering', 'Business', 'Arts', 'Law'], logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png' },
  { id: 2, name: 'Massachusetts Institute of Technology (MIT)', location: 'Cambridge, MA', state: null, ranking: 1, nirfRanking: null, degrees: ['Engineering', 'Science', 'Architecture'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1200px-MIT_Seal.svg.png' },
  { id: 3, name: 'Harvard University', location: 'Cambridge, MA', state: null, ranking: 2, nirfRanking: null, degrees: ['Law', 'Business', 'Arts', 'Medicine'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png' },
  { id: 4, name: 'Indian Institute of Technology Bombay (IITB)', location: 'Mumbai, India', state: 'Maharashtra', ranking: 45, nirfRanking: 3, degrees: ['Engineering', 'Science', 'Design'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png' },
  { id: 5, name: 'University of Oxford', location: 'Oxford, UK', state: null, ranking: 4, nirfRanking: null, degrees: ['Arts', 'Science', 'Medicine', 'Law'], logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png'},
  { id: 6, name: 'Indian Institute of Technology Delhi (IITD)', location: 'New Delhi, India', state: 'Delhi', ranking: 46, nirfRanking: 2, degrees: ['Engineering', 'Science', 'Management'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png' },
  { id: 7, name: 'Indian Institute of Science (IISc)', location: 'Bengaluru, India', state: 'Karnataka', ranking: 155, nirfRanking: 1, degrees: ['Science', 'Engineering', 'Research'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Indian_Institute_of_Science_logo.svg/1200px-Indian_Institute_of_Science_logo.svg.png' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Colleges: React.FC = () => {
  // --- STATE FOR FILTERS ---
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDegree, setSelectedDegree] = useState('All');

  // --- DYNAMICALLY GENERATE FILTER OPTIONS ---
  const states = useMemo(() => ['All', ...new Set(collegesData.map(c => c.state).filter(Boolean))], []);
  const degrees = useMemo(() => ['All', ...new Set(collegesData.flatMap(c => c.degrees))], []);

  // --- FILTERING LOGIC ---
  const filteredColleges = collegesData.filter(college => {
    const stateMatch = selectedState === 'All' || college.state === selectedState;
    const degreeMatch = selectedDegree === 'All' || college.degrees.includes(selectedDegree);
    return stateMatch && degreeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="initial" animate="animate" variants={staggerContainer} className="mb-10">
          <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Explore Colleges
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300">
            Find your dream college from our curated list.
          </motion.p>
        </motion.div>

        {/* --- FILTER BAR --- */}
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          animate="animate" 
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="state-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Filter by State
              </label>
              <select
                id="state-filter"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="degree-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Filter by Degree
              </label>
              <select
                id="degree-filter"
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {degrees.map(degree => (
                  <option key={degree} value={degree}>{degree}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={staggerContainer}
          className="space-y-6"
        >
          {filteredColleges.map(college => (
            <motion.div 
              key={college.id}
              variants={fadeInUp}
              layout // Add layout prop for smooth filtering animation
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex items-center space-x-6 hover:border-blue-500 transition-colors"
            >
              <img src={college.logo} alt={`${college.name} logo`} className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{college.name}</h2>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{college.location}</span>
                </div>
              </div>
              {/* --- UPDATED RANKING SECTION --- */}
              <div className="flex items-center text-right space-x-6">
                {college.nirfRanking && (
                    <div className="text-gray-600 dark:text-gray-300">
                        <p className="font-semibold text-sm">NIRF Rank</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">{college.nirfRanking}</p>
                    </div>
                )}
                <div className="text-gray-600 dark:text-gray-300">
                    <p className="font-semibold text-sm">Global Rank</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{college.ranking}</p>
                </div>
                <BarChart2 className="w-8 h-8 text-blue-400 ml-4 hidden sm:block flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Colleges;