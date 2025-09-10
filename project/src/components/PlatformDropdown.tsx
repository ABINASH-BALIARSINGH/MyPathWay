import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Star, Users, BookOpen, Code, Brain, Target } from 'lucide-react';

interface Platform {
  name: string;
  url: string;
  description: string;
  category: string;
  featured?: boolean;
  icon: React.ComponentType<any>;
}

const platforms: Platform[] = [
  // Learning Platforms
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', description: 'Computer science fundamentals and interview prep', category: 'Learning', icon: BookOpen, featured: true },
  { name: 'W3Schools', url: 'https://www.w3schools.com/', description: 'Web technologies with interactive examples', category: 'Learning', icon: Code },
  { name: 'Coursera', url: 'https://www.coursera.org/', description: 'University courses and specializations', category: 'Learning', icon: BookOpen, featured: true },
  { name: 'edX', url: 'https://www.edx.org/', description: 'Harvard, MIT and leading institution courses', category: 'Learning', icon: BookOpen },
  { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', description: 'Free coding curriculum with certifications', category: 'Learning', icon: Code, featured: true },
  { name: 'Khan Academy', url: 'https://www.khanacademy.org/', description: 'Free courses across multiple subjects', category: 'Learning', icon: BookOpen },
  { name: 'Codecademy', url: 'https://www.codecademy.com/', description: 'Interactive coding exercises', category: 'Learning', icon: Code },
  { name: 'Udemy', url: 'https://www.udemy.com/', description: 'Marketplace with thousands of courses', category: 'Learning', icon: BookOpen },
  { name: 'Pluralsight', url: 'https://www.pluralsight.com/', description: 'Professional development for IT', category: 'Learning', icon: BookOpen },
  { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/', description: 'Professional skills development', category: 'Learning', icon: BookOpen },
  { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/', description: 'Microsoft technologies and certifications', category: 'Learning', icon: BookOpen },
  { name: 'AWS Skill Builder', url: 'https://aws.amazon.com/training/digital-training/', description: 'Amazon Web Services training', category: 'Learning', icon: BookOpen },
  { name: 'Google Skillshop', url: 'https://skillshop.withgoogle.com/', description: 'Google products and digital marketing', category: 'Learning', icon: BookOpen },
  { name: 'DataCamp', url: 'https://www.datacamp.com/', description: 'Data science and AI learning', category: 'Learning', icon: Brain },
  { name: 'SoloLearn', url: 'https://www.sololearn.com/', description: 'Mobile-first coding education', category: 'Learning', icon: Code },
  { name: 'The Odin Project', url: 'https://www.theodinproject.com/', description: 'Full-stack web development curriculum', category: 'Learning', icon: Code },
  { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/', description: 'Free MIT course materials', category: 'Learning', icon: BookOpen },

  // Practice Platforms
  { name: 'LeetCode', url: 'https://leetcode.com/', description: 'Technical interview preparation', category: 'Practice', icon: Target, featured: true },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/', description: 'Coding challenges and competitions', category: 'Practice', icon: Target, featured: true },
  { name: 'CodeChef', url: 'https://www.codechef.com/', description: 'Competitive programming platform', category: 'Practice', icon: Target },
  { name: 'Codeforces', url: 'https://codeforces.com/', description: 'Programming contests and practice', category: 'Practice', icon: Target },
  { name: 'InterviewBit', url: 'https://www.interviewbit.com/', description: 'Interview preparation with hints', category: 'Practice', icon: Target },
  { name: 'Codewars', url: 'https://www.codewars.com/', description: 'Gamified coding challenges', category: 'Practice', icon: Target },
  { name: 'TopCoder', url: 'https://www.topcoder.com/', description: 'Competitive programming and design', category: 'Practice', icon: Target },
  { name: 'Exercism', url: 'https://exercism.org/', description: 'Coding exercises with mentor feedback', category: 'Practice', icon: Target },
  { name: 'Project Euler', url: 'https://projecteuler.net/', description: 'Mathematical programming problems', category: 'Practice', icon: Target },
  { name: 'Coderbyte', url: 'https://www.coderbyte.com/', description: 'Interview preparation challenges', category: 'Practice', icon: Target },
  { name: 'CodinGame', url: 'https://www.codingame.com/', description: 'Learn coding through games', category: 'Practice', icon: Target },
  { name: 'Edabit', url: 'https://edabit.com/', description: 'Bite-sized coding challenges', category: 'Practice', icon: Target },
  { name: 'CodeSignal', url: 'https://codesignal.com/', description: 'Real-world coding assessments', category: 'Practice', icon: Target },

  // Documentation & Resources
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'Web technologies documentation', category: 'Resources', icon: BookOpen, featured: true },
  { name: 'CSS-Tricks', url: 'https://css-tricks.com/', description: 'CSS tutorials and articles', category: 'Resources', icon: Code },
  { name: 'DigitalOcean Community', url: 'https://www.digitalocean.com/community', description: 'High-quality tech tutorials', category: 'Resources', icon: BookOpen },
  { name: 'Real Python', url: 'https://realpython.com/', description: 'Python tutorials and resources', category: 'Resources', icon: Code },
  { name: 'Tutorials Point', url: 'https://www.tutorialspoint.com/', description: 'Programming tutorials and references', category: 'Resources', icon: BookOpen },
  { name: 'Scaler', url: 'https://www.scaler.com/', description: 'Tech education for professionals', category: 'Learning', icon: BookOpen }
];

const PlatformDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Learning', 'Practice', 'Resources'];
  
  const filteredPlatforms = selectedCategory === 'All' 
    ? platforms 
    : platforms.filter(platform => platform.category === selectedCategory);

  const featuredPlatforms = platforms.filter(platform => platform.featured);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
      >
        <Code className="w-5 h-5" />
        <span>Explore Platforms</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-96 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Learning Platforms</h3>
              
              {/* Category Filter */}
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Section */}
            {selectedCategory === 'All' && (
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  Featured
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {featuredPlatforms.slice(0, 4).map((platform) => (
                    <motion.a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-colors"
                    >
                      <platform.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white truncate">{platform.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            {/* Platform List */}
            <div className="max-h-64 overflow-y-auto">
              {filteredPlatforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="flex items-start space-x-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <platform.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{platform.name}</h4>
                      {platform.featured && (
                        <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                      )}
                      <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{platform.description}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-full">
                      {platform.category}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Click any platform to visit their website
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default PlatformDropdown;