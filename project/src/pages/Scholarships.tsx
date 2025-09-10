import React from 'react';
import { motion } from 'framer-motion';
import { Award, DollarSign, Calendar, Target } from 'lucide-react';

const scholarshipsData = [
  {
    id: 1, title: 'Future Leaders Grant', provider: 'Tech Solutions Inc.', amount: 5000,
    deadline: '2025-11-30', eligibility: 'STEM Students',
  },
  {
    id: 2, title: 'Creative Minds Scholarship', provider: 'Art & Design Foundation', amount: 3000,
    deadline: '2025-12-15', eligibility: 'Fine Arts Majors',
  },
  {
    id: 3, title: 'Global Citizen Award', provider: 'International Studies Org', amount: 7500,
    deadline: '2026-01-20', eligibility: 'Open to all majors',
  },
  {
    id: 4, title: 'Medical Excellence Scholarship', provider: 'Healthcare Heroes Fund', amount: 10000,
    deadline: '2026-02-01', eligibility: 'Pre-Med Students',
  },
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

const Scholarships: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="initial" animate="animate" variants={staggerContainer} className="mb-10">
          <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Find Scholarships
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300">
            Discover funding opportunities for your education.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {scholarshipsData.map(scholarship => (
            <motion.div 
              key={scholarship.id}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 group hover:border-blue-500 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{scholarship.provider}</p>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{scholarship.title}</h2>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <DollarSign className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="font-semibold text-lg">${scholarship.amount.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 ml-1">Award</span>
                </div>
                 <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="font-semibold">
                    {new Date(scholarship.deadline).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                   <span className="text-sm text-gray-500 ml-1.5">Deadline</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Target className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="font-semibold">{scholarship.eligibility}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
                  <button className="font-semibold text-blue-600 dark:text-blue-400">
                    View & Apply
                  </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Scholarships;