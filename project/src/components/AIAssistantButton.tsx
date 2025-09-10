import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, ExternalLink, Zap, Brain, MessageCircle } from 'lucide-react';

const AIAssistantButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open('https://spiffy-semolina-dc9ddb.netlify.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative">
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-500"
          animate={{
            x: isHovered ? 0 : '-100%',
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Sparkle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center space-x-2">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Bot className="w-5 h-5" />
          </motion.div>
          <span>MyPathWay AI Assistant</span>
          <motion.div
            animate={{ x: isHovered ? 2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* New launch badge */}
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
          NEW
        </div>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg p-3 shadow-xl z-50"
          >
            <div className="flex items-start space-x-2">
              <Brain className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Personal AI Learning Assistant</p>
                <p className="text-gray-300 text-xs">Get personalized help, study plans, and instant answers to your learning questions.</p>
                <div className="flex items-center space-x-3 mt-2">
                  <div className="flex items-center space-x-1">
                    <Zap className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-gray-300">Instant Help</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-gray-300">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistantButton;