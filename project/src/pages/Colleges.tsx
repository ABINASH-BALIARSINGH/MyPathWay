import React from 'react';
import { motion } from 'framer-motion';
import { School, MapPin, BarChart2 } from 'lucide-react';

const collegesData = [
  { id: 1, name: 'Stanford University', location: 'Stanford, CA', ranking: 3, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png' },
  { id: 2, name: 'Massachusetts Institute of Technology (MIT)', location: 'Cambridge, MA', ranking: 1, logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1200px-MIT_Seal.svg.png' },
  { id: 3, name: 'Harvard University', location: 'Cambridge, MA', ranking: 2, logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png' },
  { id: 4, name: 'Indian Institute of Technology Bombay (IITB)', location: 'Mumbai, India', ranking: 45, logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png' },
  { id: 5, name: 'University of Oxford', location: 'Oxford, UK', ranking: 4, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png'},
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

        <motion.div 
            initial="initial" 
            animate="animate" 
            variants={staggerContainer}
            className="space-y-6"
        >
          {collegesData.map(college => (
            <motion.div 
              key={college.id}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex items-center space-x-6 hover:border-blue-500 transition-colors"
            >
              <img src={college.logo} alt={`${college.name} logo`} className="w-16 h-16 object-contain" />
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{college.name}</h2>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{college.location}</span>
                </div>
              </div>
              <div className="flex items-center text-right">
                 <div className="text-gray-600 dark:text-gray-300">
                     <p className="font-semibold">Global Rank</p>
                     <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{college.ranking}</p>
                 </div>
                 <BarChart2 className="w-8 h-8 text-blue-400 ml-4 hidden sm:block" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Colleges;