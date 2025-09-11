import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, BarChart2, ChevronDown, XCircle } from 'lucide-react';

// --- DATA (Unchanged) ---
const collegesData = [
  { id: 1, name: 'Stanford University', location: 'Stanford, CA', state: null, ranking: 3, nirfRanking: null, degrees: ['Engineering', 'Business', 'Arts', 'Law'], logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png' },
  { id: 2, name: 'Massachusetts Institute of Technology (MIT)', location: 'Cambridge, MA', state: null, ranking: 1, nirfRanking: null, degrees: ['Engineering', 'Science', 'Architecture'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1200px-MIT_Seal.svg.png' },
  { id: 3, name: 'Harvard University', location: 'Cambridge, MA', state: null, ranking: 2, nirfRanking: null, degrees: ['Law', 'Business', 'Arts', 'Medicine'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png' },
  { id: 4, name: 'Indian Institute of Technology Bombay (IITB)', location: 'Mumbai, India', state: 'Maharashtra', ranking: 45, nirfRanking: 3, degrees: ['Engineering', 'Science', 'Design'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png' },
  { id: 5, name: 'University of Oxford', location: 'Oxford, UK', state: null, ranking: 4, nirfRanking: null, degrees: ['Arts', 'Science', 'Medicine', 'Law'], logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png'},
  { id: 6, name: 'Indian Institute of Technology Delhi (IITD)', location: 'New Delhi, India', state: 'Delhi', ranking: 46, nirfRanking: 2, degrees: ['Engineering', 'Science', 'Management'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png' },
  { id: 7, name: 'Indian Institute of Science (IISc)', location: 'Bengaluru, India', state: 'Karnataka', ranking: 155, nirfRanking: 1, degrees: ['Science', 'Engineering', 'Research'], logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Indian_Institute_of_Science_logo.svg/1200px-Indian_Institute_of_Science_logo.svg.png' },
];

// --- ANIMATION VARIANTS (Unchanged) ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }, // Added exit animation
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Custom Select Component for better styling ---
const FilterSelect = ({ label, id, value, onChange, options }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="appearance-none block w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  </div>
);


const Colleges: React.FC = () => {
  // --- STATE FOR FILTERS ---
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDegree, setSelectedDegree] = useState('All');

  // --- DYNAMICALLY GENERATE FILTER OPTIONS ---
  const states = useMemo(() => ['All', ...new Set(collegesData.map(c => c.state).filter(Boolean))], []);
  const degrees = useMemo(() => ['All', ...new Set(collegesData.flatMap(c => c.degrees))].sort(), []);

  // --- FILTERING LOGIC ---
  const filteredColleges = useMemo(() => {
    return collegesData.filter(college => {
        const stateMatch = selectedState === 'All' || college.state === selectedState;
        const degreeMatch = selectedDegree === 'All' || college.degrees.includes(selectedDegree);
        return stateMatch && degreeMatch;
    });
  }, [selectedState, selectedDegree]);

  const handleResetFilters = () => {
    setSelectedState('All');
    setSelectedDegree('All');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="initial" animate="animate" variants={staggerContainer} className="mb-10 text-center">
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Explore Colleges
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300">
            Find your dream college from our curated list.
          </motion.p>
        </motion.div>

        {/* --- IMPROVED FILTER BAR --- */}
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          animate="animate" 
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
              <FilterSelect 
                label="Filter by State"
                id="state-filter"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                options={states}
              />
              <FilterSelect 
                label="Filter by Degree"
                id="degree-filter"
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                options={degrees}
              />
            </div>
            <button 
                onClick={handleResetFilters}
                className="mt-4 md:mt-0 w-full md:w-auto flex-shrink-0 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors font-semibold"
            >
                Reset
            </button>
          </div>
        </motion.div>
        
        {/* --- RESULTS COUNT --- */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mb-6 px-2">
            <p className="text-md text-gray-600 dark:text-gray-400 font-semibold">
                Showing <span className="text-blue-600 dark:text-blue-400">{filteredColleges.length}</span> of {collegesData.length} colleges
            </p>
        </motion.div>


        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={staggerContainer}
          className="space-y-6"
        >
          <AnimatePresence>
            {filteredColleges.length > 0 ? (
              filteredColleges.map(college => (
                <motion.div 
                  key={college.id}
                  variants={fadeInUp}
                  exit={{ opacity: 0, x: -50 }}
                  layout 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                >
                  <img src={college.logo} alt={`${college.name} logo`} className="w-20 h-20 object-contain flex-shrink-0 rounded-full bg-white p-2 shadow-sm" />
                  <div className="flex-grow text-center sm:text-left">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{college.name}</h2>
                    <div className="flex items-center justify-center sm:justify-start text-gray-500 dark:text-gray-400 mt-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{college.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-right space-x-6 flex-shrink-0">
                    {college.nirfRanking && (
                      <div className="text-gray-600 dark:text-gray-300 text-center">
                        <p className="font-semibold text-sm">NIRF Rank</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">{college.nirfRanking}</p>
                      </div>
                    )}
                    <div className="text-gray-600 dark:text-gray-300 text-center">
                      <p className="font-semibold text-sm">Global Rank</p>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{college.ranking}</p>
                    </div>
                    <BarChart2 className="w-8 h-8 text-blue-400 ml-4 hidden sm:block flex-shrink-0" />
                  </div>
                </motion.div>
              ))
            ) : (
                <motion.div
                    variants={fadeInUp}
                    className="text-center py-16 px-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                >
                    <XCircle className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No Colleges Found</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Your filter criteria did not match any colleges. Try clearing the filters.
                    </p>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Colleges;