import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen, 
  Target, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Star,
  Play,
  Bot,
  Sparkles,
  Brain,
  Zap,
  ExternalLink,
  Trophy,
  Globe
} from 'lucide-react';
import AIAssistantButton from '../components/AIAssistantButton';

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Courses',
      description: 'Engage with hands-on projects and real-world scenarios',
      color: 'bg-blue-500'
    },
    {
      icon: Target,
      title: 'Skill Assessment',
      description: 'Test your knowledge with adaptive quizzes and mock exams',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn industry-recognized certificates and digital badges',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with learners and experts in your field',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { label: 'Active Learners', value: '50K+', icon: Users },
    { label: 'Courses Available', value: '1,200+', icon: BookOpen },
    { label: 'Certificates Issued', value: '25K+', icon: Award },
    { label: 'Success Rate', value: '95%', icon: TrendingUp }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-blue-800 dark:via-purple-800 dark:to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Bridge Your Skills to 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Success</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-blue-100 mb-8 max-w-lg"
              >
                Transform your career with adaptive digital learning, practical skills, and real opportunities. Join thousands of learners achieving their goals.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/courses"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
                >
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/test-center"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center group"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Take Assessment
                </Link>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      variants={fadeInUp}
                      className="text-center"
                    >
                      <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Why Choose MyPathWay?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              We provide a comprehensive learning ecosystem designed for your success
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* AI Assistant Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="mt-20"
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Meet Your AI Learning Companion
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get personalized assistance, instant answers, and smart study recommendations
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-blue-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">MyPathWay AI Assistant</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full">
                      NEW
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    Your personal AI tutor that understands your learning style, provides instant help, 
                    and creates customized study plans to accelerate your progress.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Smart Recommendations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Instant Answers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Personalized Plans</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">24/7 Available</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <AIAssistantButton />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <span className="font-semibold">AI Assistant</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-sm">"How can I improve my React skills?"</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <p className="text-sm">I recommend starting with our Advanced React course, practicing with 3 specific projects, and taking the React certification exam. Would you like me to create a personalized study plan?</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-4 h-4 text-yellow-800" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Learn through Game Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mt-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Learn Through Gaming
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Relax and learn with interactive games, lessons, and GK challenges
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 border border-green-100 dark:border-green-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">GameLearn Hub</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-bold rounded-full">
                    FUN
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  Transform learning into an adventure with educational games, interactive lessons, 
                  and knowledge challenges that make studying enjoyable and effective.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Interactive Games</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Lesson Reading</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">GK Challenges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Rewards System</span>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => window.open('https://stirring-banoffee-8d1f8e.netlify.app/', '_blank', 'noopener,noreferrer')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group mr-4"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-green-500 to-blue-600"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Start Gaming</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.button>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4" />
                    </div>
                    <span className="font-semibold">Game Mode Active</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm">"What's the best way to learn JavaScript?"</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">I suggest starting with our JavaScript Fundamentals course, then building 5 practice projects. Let me create a custom learning path for you!</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-4 h-4 text-yellow-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* TechGlobe Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="mt-20"
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Global Tech Landscape
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover technology adoption, innovation hubs, and talent distribution worldwide
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 border border-cyan-100 dark:border-cyan-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">TechGlobe</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-bold rounded-full">
                      EXPLORE
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    Global Technology Landscape - Discover technology adoption, innovation hubs, 
                    and talent distribution across the globe. Hover over countries to reveal detailed 
                    insights about their tech ecosystems.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Global Insights</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Innovation Hubs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Talent Distribution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Tech Ecosystems</span>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => window.open('https://candid-buttercream-e156f3.netlify.app/', '_blank', 'noopener,noreferrer')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <Globe className="w-5 h-5" />
                      <span>Explore TechGlobe</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </motion.button>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Globe className="w-4 h-4" />
                      </div>
                      <span className="font-semibold">Global Tech Map</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-sm">"Show me tech trends in Asia"</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <p className="text-sm">Asia leads in mobile technology with 65% adoption rate. India shows strong growth in AI and software development sectors.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-4 h-4 text-yellow-800" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Career Roadmap Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="mt-20"
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Navigate Your Career Path
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Follow structured roadmaps and free learning resources to achieve your career goals
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 md:p-12 border border-orange-100 dark:border-orange-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Career Roadmap</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-bold rounded-full">
                      GUIDE
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    It helps in guiding students through well made career roadmaps and free learning 
                    according to the roadmaps which helps students to follow and achieve a career goal.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Structured Paths</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Free Learning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Goal Achievement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Progress Tracking</span>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => window.open('https://ubiquitous-queijadas-0ac6ce.netlify.app/', '_blank', 'noopener,noreferrer')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 via-orange-500 to-red-600"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span>Start Your Journey</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </motion.button>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4" />
                      </div>
                      <span className="font-semibold">Career Guidance</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-sm">"I want to become a Full Stack Developer"</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <p className="text-sm">Perfect! Here's your personalized roadmap: Start with HTML/CSS → JavaScript → React → Node.js → Database. Estimated timeline: 6-8 months.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-4 h-4 text-yellow-800" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Career?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of successful learners who chose MyPathWay to achieve their goals
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;