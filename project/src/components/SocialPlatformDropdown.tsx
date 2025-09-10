import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Users, Briefcase, Building, Globe } from 'lucide-react';

interface Platform {
  name: string;
  url: string;
  description: string;
  category: string;
  featured?: boolean;
}

const platforms = {
  internship: [
    { name: 'AICTE', url: 'https://internship.aicte-india.org/login_new.php', description: 'Official AICTE internship portal', category: 'Government', featured: true },
    { name: 'Internshala', url: 'https://internshala.com/', description: 'India\'s largest internship platform', category: 'Platform', featured: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', description: 'Professional networking and opportunities', category: 'Social', featured: true },
    { name: 'Naukri.com', url: 'https://www.naukri.com/', description: 'Leading job and internship portal', category: 'Platform' },
    { name: 'LetsIntern', url: 'http://www.letsintern.com/', description: 'Internship opportunities for students', category: 'Platform' },
    { name: 'Indeed', url: 'https://in.indeed.com/', description: 'Global job search engine', category: 'Platform' },
    { name: 'Superset', url: 'https://joinsuperset.com/', description: 'Tech internships and jobs', category: 'Platform' },
    { name: 'Glassdoor', url: 'https://www.glassdoor.co.in/', description: 'Company reviews and opportunities', category: 'Platform' },
    { name: 'Twenty19', url: 'https://twenty19.in/', description: 'Tech talent platform', category: 'Platform' },
    { name: 'FreshersWorld', url: 'https://www.freshersworld.com/', description: 'Opportunities for fresh graduates', category: 'Platform' },
    { name: 'Unstop', url: 'https://unstop.com/', description: 'Competitions and opportunities', category: 'Platform' },
    { name: 'TCS', url: 'https://careers.tcs.com/', description: 'Tata Consultancy Services careers', category: 'Company', featured: true },
    { name: 'Infosys', url: 'https://www.infosys.com/careers.html', description: 'Infosys career opportunities', category: 'Company', featured: true },
    { name: 'Microsoft', url: 'https://careers.microsoft.com/v2/global/en/home.html', description: 'Microsoft global careers', category: 'Company', featured: true }
  ],
  jobs: [
    { name: 'Naukri.com', url: 'https://www.naukri.com/', description: 'India\'s leading job portal', category: 'Platform', featured: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', description: 'Professional networking platform', category: 'Social', featured: true },
    { name: 'Indeed', url: 'https://in.indeed.com/', description: 'Global job search engine', category: 'Platform', featured: true },
    { name: 'Foundit', url: 'https://www.foundit.in/', description: 'Formerly Monster India', category: 'Platform' },
    { name: 'FreshersWorld', url: 'https://www.freshersworld.com/', description: 'Jobs for fresh graduates', category: 'Platform' },
    { name: 'Superset', url: 'https://joinsuperset.com/', description: 'Tech jobs and opportunities', category: 'Platform' },
    { name: 'Unstop', url: 'https://unstop.com/', description: 'Competitions and job opportunities', category: 'Platform' },
    { name: 'Placewit', url: 'https://placewit.com/', description: 'Job placement platform', category: 'Platform' },
    { name: 'Internguru', url: 'https://internguru.com/', description: 'Internships and job opportunities', category: 'Platform' },
    { name: 'Shine.com', url: 'https://www.shine.com/', description: 'Career opportunities platform', category: 'Platform' },
    { name: 'CutShort', url: 'https://cutshort.io/', description: 'Tech jobs platform', category: 'Platform' },
    { name: 'Hirist', url: 'https://www.hirist.com/', description: 'IT jobs platform', category: 'Platform' },
    { name: 'Hirect', url: 'https://hirect.in/', description: 'Direct chat with recruiters', category: 'Platform' },
    { name: 'NCS', url: 'https://www.ncs.gov.in/', description: 'National Career Service', category: 'Government' },
    { name: 'OPSC', url: 'https://opsc.gov.in/', description: 'Odisha Public Service Commission', category: 'Government' }
  ]
};

interface SocialPlatformDropdownProps {
  type: 'internship' | 'jobs';
}

const SocialPlatformDropdown: React.FC<SocialPlatformDropdownProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const currentPlatforms = platforms[type];
  const categories = ['All', ...Array.from(new Set(currentPlatforms.map(p => p.category)))];
  
  const filteredPlatforms = selectedCategory === 'All' 
    ? currentPlatforms 
    : currentPlatforms.filter(platform => platform.category === selectedCategory);

  const featuredPlatforms = currentPlatforms.filter(platform => platform.featured);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Company': return Building;
      case 'Government': return Globe;
      case 'Social': return Users;
      default: return Briefcase;
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
      >
        <Users className="w-5 h-5" />
        <span>{type === 'internship' ? 'Internship Platforms' : 'Job Platforms'}</span>
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {type === 'internship' ? 'Internship' : 'Job'} Opportunities
              </h3>
              
              {/* Category Filter */}
              <div className="flex space-x-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
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
                  <Users className="w-4 h-4 text-green-500 mr-1" />
                  Featured
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {featuredPlatforms.slice(0, 4).map((platform) => {
                    const IconComponent = getIcon(platform.category);
                    return (
                      <motion.a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-2 p-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 transition-colors"
                      >
                        <IconComponent className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white truncate">{platform.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Platform List */}
            <div className="max-h-64 overflow-y-auto">
              {filteredPlatforms.map((platform) => {
                const IconComponent = getIcon(platform.category);
                return (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ backgroundColor: 'rgba(34, 197, 94, 0.05)' }}
                    className="flex items-start space-x-3 p-4 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{platform.name}</h4>
                        <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{platform.description}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-full">
                        {platform.category}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
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

export default SocialPlatformDropdown;