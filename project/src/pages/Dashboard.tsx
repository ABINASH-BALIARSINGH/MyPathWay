import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

import { 
  BarChart3,
  Book,
  ClipboardCheck,
  School,
  GraduationCap,
  GanttChartSquare,
  TrendingUp,
  Map,
  BookOpen,
  Award,
  LineChart,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  const [showConfetti, setShowConfetti] = useState(false);
  const [stats, setStats] = useState({ colleges: 0, courses: 0, quizzes: 0 });
  const [trendingCareers, setTrendingCareers] = useState([
    { name: 'AI/ML Engineer', count: 120 },
    { name: 'Data Scientist', count: 110 },
    { name: 'Cloud Architect', count: 95 },
    { name: 'Cybersecurity Analyst', count: 80 },
    { name: 'UX/UI Designer', count: 70 },
  ]);

  useEffect(() => {
    const hasShownConfetti = sessionStorage.getItem('hasShownConfetti');
    if (!hasShownConfetti) {
      setShowConfetti(true);
      sessionStorage.setItem('hasShownConfetti', 'true');
      setTimeout(() => setShowConfetti(false), 5000);
    }

    setTimeout(() => {
      setStats({ colleges: 2350, courses: 840, quizzes: 450 });
    }, 1000);

    const intervalId = setInterval(() => {
      setTrendingCareers(prevCareers => 
        prevCareers.map(career => ({
          ...career,
          count: Math.max(20, career.count + Math.floor(Math.random() * 10) - 5),
        })).sort((a, b) => b.count - a.count)
      );
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  const quickCards = [
    { title: 'Take a Quiz', icon: ClipboardCheck, path: '/quiz' },
    { title: 'Browse Courses', icon: Book, path: '/courses' },
    { title: 'Explore Colleges', icon: School, path: '/colleges' },
    { title: 'Find Scholarships', icon: GraduationCap, path: '/scholarships' },
    { title: 'My Timeline', icon: GanttChartSquare, path: '/timeline' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Hello, {user.name} 👋
          </motion.h1>
        </motion.div>

        {/* Quick Cards Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10"
        >
          {quickCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={fadeInUp}>
                <Link to={card.path}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center text-center hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-md font-semibold text-gray-900 dark:text-white">{card.title}</p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Career Roadmap Section */}
        <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-10"
        >
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-300 rounded-full opacity-70 hidden md:block"></div>
            <div className="absolute bottom-4 left-1/2 w-4 h-4 bg-pink-400 rounded-full opacity-70 hidden md:block"></div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left Side: Information */}
                <div className="lg:w-1/2">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                           <Map className="w-6 h-6 text-orange-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Career Roadmap</h2>
                        <span className="bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400 text-xs font-semibold px-2 py-1 rounded-full">GUIDE</span>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        It helps in guiding students through well made career roadmaps and free learning according to the roadmaps which helps students to follow and achieve a career goal.
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6 text-gray-700 dark:text-gray-300">
                        <div className="flex items-center gap-2"><Map className="w-5 h-5 text-orange-500" /> Structured Paths</div>
                        <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-red-500" /> Free Learning</div>
                        <div className="flex items-center gap-2"><Award className="w-5 h-5 text-purple-500" /> Goal Achievement</div>
                        <div className="flex items-center gap-2"><LineChart className="w-5 h-5 text-green-500" /> Progress Tracking</div>
                    </div>
                    {/* --- THIS LINK IS NOW UPDATED --- */}
                    <Link to="/careers">
                        <button className="mt-8 flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                            Start Your Journey
                            <ExternalLink className="w-5 h-5" />
                        </button>
                    </Link>
                </div>

                {/* Right Side: Interactive Guidance */}
                <div className="lg:w-1/2 w-full bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-6 h-6" />
                        <h3 className="font-bold">Career Guidance</h3>
                    </div>
                    <div className="space-y-3">
                       <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm border border-white/30">
                           <p className="text-sm opacity-80">"I want to become a Full Stack Developer"</p>
                       </div>
                       <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm border border-white/30">
                           <p className="text-sm font-semibold">Perfect! Here's your personalized roadmap: Start with HTML/CSS → JavaScript → React → Node.js → Database. Estimated timeline: 6-8 months.</p>
                       </div>
                    </div>
                </div>
            </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Stats Widget */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Platform Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-sm text-gray-600 dark:text-gray-400">Colleges Listed</h3>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.colleges.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-sm text-gray-600 dark:text-gray-400">Available Courses</h3>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">{stats.courses.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-sm text-gray-600 dark:text-gray-400">Quizzes Available</h3>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.quizzes.toLocaleString()}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Realtime Trending Careers Widget */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Trending Careers Today</h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-4">
                {trendingCareers.map((career) => (
                  <div key={career.name}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{career.name}</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{career.count}</p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(career.count / 150) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;