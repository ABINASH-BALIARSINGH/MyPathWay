import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Calendar, Flag } from 'lucide-react';

const timelineData = [
  { 
    id: 1, title: 'Completed Career Path Quiz', date: '2025-08-15', 
    description: 'Discovered top career matches in Tech and Design.', 
    status: 'Completed', icon: CheckCircle 
  },
  { 
    id: 2, title: 'College Applications Due', date: '2025-11-01', 
    description: 'Deadline for early applications to top choice universities.', 
    status: 'Upcoming', icon: Calendar 
  },
  { 
    id: 3, title: 'Finalize Scholarship Essays', date: '2025-12-05', 
    description: 'Review and submit all required scholarship application essays.', 
    status: 'Upcoming', icon: Clock 
  },
  { 
    id: 4, title: 'Start "Intro to Python" Course', date: '2026-01-10', 
    description: 'Begin foundational programming course to build skills.', 
    status: 'Future', icon: Flag 
  },
];

const statusStyles = {
  Completed: { bg: 'bg-green-500', iconColor: 'text-green-500' },
  Upcoming: { bg: 'bg-yellow-500', iconColor: 'text-yellow-500' },
  Future: { bg: 'bg-blue-500', iconColor: 'text-blue-500' },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Timeline: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="initial" animate="animate" variants={staggerContainer} className="mb-12 text-center">
          <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            My Timeline
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300">
            Track your progress, milestones, and upcoming deadlines.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const styles = statusStyles[item.status] || statusStyles['Future'];
            const isLeft = index % 2 === 0;

            return (
              <motion.div 
                key={item.id}
                variants={fadeInUp}
                className={`relative mb-12 flex items-center ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
              >
                <div className={`hidden sm:block w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}></div>
                <div className="w-full sm:w-1/2 sm:px-8">
                  <div className={`absolute left-5 sm:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 ${styles.bg} rounded-full flex items-center justify-center border-4 border-gray-50 dark:border-gray-900`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 ml-10 sm:ml-0">
                    <p className={`font-semibold text-sm ${styles.iconColor}`}>
                      {new Date(item.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;