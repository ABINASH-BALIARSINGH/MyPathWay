import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: isDarkMode ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          animate={{
            rotate: isDarkMode ? 180 : 0,
            scale: isDarkMode ? 0.8 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <Moon className="w-3 h-3 text-blue-600" />
          ) : (
            <Sun className="w-3 h-3 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.div
          animate={{
            opacity: isDarkMode ? 0 : 1,
            scale: isDarkMode ? 0.5 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-3 h-3 text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDarkMode ? 1 : 0,
            scale: isDarkMode ? 1 : 0.5
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-3 h-3 text-blue-400" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;