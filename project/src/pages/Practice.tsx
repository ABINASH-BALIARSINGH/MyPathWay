import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Zap, 
  BookOpen, 
  Timer, 
  Trophy, 
  Target, 
  Camera,
  Smile,
  Frown,
  Meh,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle,
  X,
  Lightbulb,
  Globe,
  Bot
} from 'lucide-react';
import PlatformDropdown from '../components/PlatformDropdown';
import AIAssistantButton from '../components/AIAssistantButton';

const Practice: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [emotionDetection, setEmotionDetection] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<'focused' | 'confused' | 'bored' | 'excited'>('focused');
  const [practiceSession, setPracticeSession] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const practiceModesData = [
    {
      id: 'emotion-adaptive',
      title: 'Emotion-Adaptive Practice',
      description: 'AI monitors your expressions and adapts difficulty in real-time',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Webcam emotion detection', 'Dynamic difficulty adjustment', 'Break suggestions', 'Focus tracking'],
      beta: true
    },
    {
      id: 'ai-peer-challenge',
      title: 'AI vs Peer Challenges',
      description: 'Compete with AI or global peers in real-time practice battles',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time competition', 'Global leaderboards', 'AI opponent matching', 'Peer discovery'],
      popular: true
    },
    {
      id: 'reverse-practice',
      title: 'Reverse Practice Mode',
      description: 'Create questions from given answers to enhance understanding',
      icon: RotateCcw,
      color: 'from-green-500 to-emerald-500',
      features: ['Answer-to-question format', 'Creative thinking boost', 'Higher-order learning', 'Innovation training']
    },
    {
      id: 'practice-journal',
      title: 'Personal Practice Journal',
      description: 'AI-generated learning insights and progress tracking',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      features: ['Daily insights', 'Mistake analysis', 'Confidence tracking', 'Mood correlation']
    }
  ];

  const mockQuestions = [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1,
      difficulty: "intermediate",
      subject: "Data Structures"
    },
    {
      id: 2,
      question: "Which React hook is used for side effects?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correct: 1,
      difficulty: "beginner",
      subject: "React"
    },
    {
      id: 3,
      question: "What does SQL stand for?",
      options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
      correct: 0,
      difficulty: "beginner",
      subject: "Database"
    }
  ];

  const journalEntries = [
    {
      date: "Today",
      confidence: 85,
      questionsAttempted: 15,
      accuracy: 87,
      mood: "focused",
      insights: ["Strong in algorithms", "Need practice with databases", "Best performance in morning sessions"]
    },
    {
      date: "Yesterday",
      confidence: 78,
      questionsAttempted: 12,
      accuracy: 75,
      mood: "tired",
      insights: ["Struggled with complex problems", "Good improvement in React concepts"]
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", score: 2450, streak: 15, avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2" },
    { rank: 2, name: "Sarah Kim", score: 2380, streak: 12, avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2" },
    { rank: 3, name: "You", score: 2250, streak: 8, avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2" },
    { rank: 4, name: "Mike Johnson", score: 2180, streak: 6, avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2" }
  ];

  useEffect(() => {
    if (practiceSession && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [practiceSession, timeLeft]);

  const startPracticeSession = (mode: string) => {
    setSelectedMode(mode);
    setPracticeSession(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(300);
    setShowResult(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex.toString());
    
    setTimeout(() => {
      if (answerIndex === mockQuestions[currentQuestion].correct) {
        setScore(score + 1);
      }
      
      if (currentQuestion < mockQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        setPracticeSession(false);
      }
    }, 1000);
  };

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case 'focused': return <Smile className="w-5 h-5 text-green-500" />;
      case 'confused': return <Frown className="w-5 h-5 text-red-500" />;
      case 'bored': return <Meh className="w-5 h-5 text-yellow-500" />;
      case 'excited': return <Zap className="w-5 h-5 text-blue-500" />;
      default: return <Smile className="w-5 h-5 text-green-500" />;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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

  if (practiceSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Practice Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Practice Session</h1>
                  <p className="text-gray-600">Question {currentQuestion + 1} of {mockQuestions.length}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                {emotionDetection && (
                  <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <Camera className="w-4 h-4 text-gray-500" />
                    {getEmotionIcon(currentEmotion)}
                    <span className="text-sm text-gray-600 capitalize">{currentEmotion}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <Timer className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">{formatTime(timeLeft)}</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
                  <Trophy className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">{score}/{mockQuestions.length}</span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Question Card */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {mockQuestions[currentQuestion].subject}
                </span>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  mockQuestions[currentQuestion].difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                  mockQuestions[currentQuestion].difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {mockQuestions[currentQuestion].difficulty}
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {mockQuestions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-4">
              {mockQuestions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === index.toString()
                      ? index === mockQuestions[currentQuestion].correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-red-500 bg-red-50 text-red-800'
                      : selectedAnswer !== null && index === mockQuestions[currentQuestion].correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index.toString()
                        ? index === mockQuestions[currentQuestion].correct
                          ? 'border-green-500 bg-green-500'
                          : 'border-red-500 bg-red-500'
                        : selectedAnswer !== null && index === mockQuestions[currentQuestion].correct
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                    }`}>
                      {selectedAnswer !== null && (
                        selectedAnswer === index.toString()
                          ? index === mockQuestions[currentQuestion].correct
                            ? <CheckCircle className="w-4 h-4 text-white" />
                            : <X className="w-4 h-4 text-white" />
                          : index === mockQuestions[currentQuestion].correct
                            ? <CheckCircle className="w-4 h-4 text-white" />
                            : null
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Practice Complete!</h2>
            <p className="text-gray-600 mb-8">Great job! Here's how you performed:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{score}/{mockQuestions.length}</div>
                <div className="text-sm text-gray-600">Questions Correct</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">{Math.round((score / mockQuestions.length) * 100)}%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">{formatTime(300 - timeLeft)}</div>
                <div className="text-sm text-gray-600">Time Taken</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setShowResult(false);
                  setSelectedMode(null);
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Try Another Mode
              </button>
              <button
                onClick={() => startPracticeSession(selectedMode!)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Practice Again
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="text-center mb-12"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Smart Practice Lab
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Experience next-generation adaptive learning with AI-powered practice modes designed for optimal skill development
          </motion.p>
        </motion.div>
        {/* Action Buttons */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.div variants={fadeInUp}>
            <PlatformDropdown />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <AIAssistantButton />
          </motion.div>
        </motion.div>

        {/* Practice Modes Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {practiceModesData.map((mode) => (
            <motion.div
              key={mode.id}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => startPracticeSession(mode.id)}
            >
              <div className={`h-2 bg-gradient-to-r ${mode.color}`} />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${mode.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <mode.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex space-x-2">
                    {mode.beta && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        BETA
                      </span>
                    )}
                    {mode.popular && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {mode.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{mode.description}</p>
                
                <div className="space-y-2 mb-6">
                  {mode.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center group">
                  Start Practice
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Practice Journal */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="lg:col-span-2"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Practice Journal</h2>
                <Calendar className="w-6 h-6 text-gray-400 dark:text-gray-500" />
              </div>
              
              <div className="space-y-6">
                {journalEntries.map((entry, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{entry.date}</h3>
                      <div className="flex items-center space-x-2">
                        {getEmotionIcon(entry.mood)}
                        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">{entry.mood}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{entry.confidence}%</div>
                        <div className="text-xs text-gray-500">Confidence</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{entry.questionsAttempted}</div>
                        <div className="text-xs text-gray-500">Questions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{entry.accuracy}%</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">AI Insights:</h4>
                      <ul className="space-y-1">
                        {entry.insights.map((insight, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Lightbulb className="w-3 h-3 text-yellow-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Global Leaderboard</h3>
                <Globe className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </div>
              
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div key={user.rank} className={`flex items-center space-x-3 p-3 rounded-lg ${
                    user.name === 'You' ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                      user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                      user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {user.rank}
                    </div>
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{user.score} points</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">{user.streak}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Practice Streak</span>
                  <span className="font-semibold text-orange-600">8 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Questions</span>
                  <span className="font-semibold text-blue-600">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Average Accuracy</span>
                  <span className="font-semibold text-green-600">84%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Badges Earned</span>
                  <span className="font-semibold text-purple-600">12</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Practice;