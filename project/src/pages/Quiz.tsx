import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BrainCircuit, Briefcase, ChevronRight, Clock, HelpCircle } from 'lucide-react';

const quizzes = [
  {
    id: 1,
    title: 'Career Path Finder',
    description: 'Answer a few questions to discover career paths that match your personality and interests.',
    questions: 20,
    duration: 15, // in minutes
    icon: Briefcase,
  },
  {
    id: 2,
    title: 'Subject Strength Assessment',
    description: 'Identify your strongest academic subjects to help you choose the right college major.',
    questions: 30,
    duration: 25,
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Logical Reasoning Challenge',
    description: 'Test your problem-solving and critical thinking skills with these brain teasers.',
    questions: 15,
    duration: 20,
    icon: BrainCircuit,
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

const Quiz: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="initial" animate="animate" variants={staggerContainer} className="mb-10">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Available Quizzes
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Test your knowledge and find the perfect career path.
          </motion.p>
        </motion.div>

        {/* Quizzes Grid */}
        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {quizzes.map((quiz) => {
            const Icon = quiz.icon;
            return (
              <motion.div
                key={quiz.id}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{quiz.title}</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{quiz.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
                    <span className="flex items-center">
                      <HelpCircle className="w-4 h-4 mr-1.5" />
                      {quiz.questions} Questions
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {quiz.duration} mins
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 mt-auto px-6 py-4">
                  <button className="w-full flex items-center justify-center font-semibold text-blue-600 dark:text-blue-400 group">
                    Start Quiz
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;