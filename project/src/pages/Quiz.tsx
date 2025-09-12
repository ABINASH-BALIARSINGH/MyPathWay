import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  BrainCircuit, 
  Briefcase, 
  ChevronRight, 
  Clock, 
  HelpCircle, 
  Search,
  Filter,
  Star,
  Trophy,
  Target,
  CheckCircle,
  XCircle,
  Timer,
  Award,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  Stethoscope
} from 'lucide-react';

// Mock API functions (replace with actual API calls)
const api = {
  getQuizzes: async (filters = {}) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockQuizzes = [
      {
        id: '1',
        title: 'Numerical Aptitude Test',
        description: 'Test your numerical reasoning and mathematical problem-solving skills with comprehensive questions covering arithmetic, algebra, and data interpretation.',
        category_id: 'apt-1',
        category_name: 'Aptitude',
        category_icon: 'BrainCircuit',
        difficulty_level: 'intermediate',
        total_questions: 20,
        duration_minutes: 30,
        passing_score: 60,
        created_at: '2024-01-15T10:00:00Z'
      },
      {
        id: '2',
        title: 'Logical Reasoning Challenge',
        description: 'Enhance your logical thinking abilities through pattern recognition, analytical reasoning, and critical thinking problems.',
        category_id: 'rea-1',
        category_name: 'Reasoning',
        category_icon: 'Lightbulb',
        difficulty_level: 'intermediate',
        total_questions: 15,
        duration_minutes: 25,
        passing_score: 60,
        created_at: '2024-01-14T10:00:00Z'
      },
      {
        id: '3',
        title: 'JEE Physics Mock Test',
        description: 'Comprehensive physics test covering mechanics, thermodynamics, and electromagnetism for JEE Main preparation.',
        category_id: 'jee-1',
        category_name: 'JEE',
        category_icon: 'BookOpen',
        difficulty_level: 'advanced',
        total_questions: 30,
        duration_minutes: 45,
        passing_score: 70,
        created_at: '2024-01-13T10:00:00Z'
      },
      {
        id: '4',
        title: 'NEET Biology Fundamentals',
        description: 'Essential biology concepts including cell biology, genetics, and human physiology for NEET preparation.',
        category_id: 'neet-1',
        category_name: 'NEET',
        category_icon: 'Stethoscope',
        difficulty_level: 'intermediate',
        total_questions: 25,
        duration_minutes: 35,
        passing_score: 65,
        created_at: '2024-01-12T10:00:00Z'
      },
      {
        id: '5',
        title: 'Career Interest Assessment',
        description: 'Discover your career interests and personality traits to find the most suitable career paths and academic programs.',
        category_id: 'car-1',
        category_name: 'Career Assessment',
        category_icon: 'Briefcase',
        difficulty_level: 'beginner',
        total_questions: 50,
        duration_minutes: 20,
        passing_score: 50,
        created_at: '2024-01-11T10:00:00Z'
      },
      {
        id: '6',
        title: 'Advanced Mathematical Reasoning',
        description: 'Challenge yourself with complex mathematical problems involving calculus, statistics, and advanced algebra.',
        category_id: 'apt-1',
        category_name: 'Aptitude',
        category_icon: 'BrainCircuit',
        difficulty_level: 'advanced',
        total_questions: 18,
        duration_minutes: 40,
        passing_score: 75,
        created_at: '2024-01-10T10:00:00Z'
      }
    ];
    
    // Apply filters
    let filteredQuizzes = mockQuizzes;
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredQuizzes = filteredQuizzes.filter(quiz => 
        quiz.title.toLowerCase().includes(searchLower) ||
        quiz.description.toLowerCase().includes(searchLower) ||
        quiz.category_name.toLowerCase().includes(searchLower)
      );
    }
    
    if (filters.category) {
      filteredQuizzes = filteredQuizzes.filter(quiz => 
        quiz.category_name === filters.category
      );
    }
    
    if (filters.difficulty) {
      filteredQuizzes = filteredQuizzes.filter(quiz => 
        quiz.difficulty_level === filters.difficulty
      );
    }
    
    return filteredQuizzes;
  },
  
  getCategories: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return [
      { id: 'apt-1', name: 'Aptitude', icon: 'BrainCircuit' },
      { id: 'rea-1', name: 'Reasoning', icon: 'Lightbulb' },
      { id: 'jee-1', name: 'JEE', icon: 'BookOpen' },
      { id: 'neet-1', name: 'NEET', icon: 'Stethoscope' },
      { id: 'car-1', name: 'Career Assessment', icon: 'Briefcase' }
    ];
  }
};

const iconMap = {
  BookOpen,
  BrainCircuit,
  Briefcase,
  Lightbulb,
  Stethoscope
};

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
};

const difficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
};

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    difficulty: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showQuizModal, setShowQuizModal] = useState(false);

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    loadQuizzes();
  }, [filters]);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      const [quizzesData, categoriesData] = await Promise.all([
        api.getQuizzes(),
        api.getCategories()
      ]);
      setQuizzes(quizzesData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadQuizzes = async () => {
    try {
      const quizzesData = await api.getQuizzes(filters);
      setQuizzes(quizzesData);
    } catch (error) {
      console.error('Error loading quizzes:', error);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      difficulty: ''
    });
  };

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setShowQuizModal(true);
  };

  const QuizModal = ({ quiz, onClose, onStart }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Quiz Details
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <XCircle className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {quiz.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {quiz.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Questions
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {quiz.total_questions}
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  Duration
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {quiz.duration_minutes} mins
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Target className="w-4 h-4 mr-2" />
                  Passing Score
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {quiz.passing_score}%
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Difficulty
                </div>
                <div className={`text-sm font-medium px-2 py-1 rounded-full inline-block ${difficultyColors[quiz.difficulty_level]}`}>
                  {difficultyLabels[quiz.difficulty_level]}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h5 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Quiz Instructions
              </h5>
              <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
                <li>• Read each question carefully before answering</li>
                <li>• You can navigate between questions freely</li>
                <li>• Your progress is automatically saved</li>
                <li>• Submit only when you're ready - no changes after submission</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => onStart(quiz)}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-64 mb-4"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-96 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Available Quizzes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Test your knowledge and skills across various subjects and domains
          </p>
          
          {/* Search and Filter Bar */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  showFilters 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
            
            {/* Expandable Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Categories</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Difficulty Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Difficulty
                    </label>
                    <select
                      value={filters.difficulty}
                      onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">All Levels</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  
                  {/* Clear Filters */}
                  <div className="flex items-end">
                    <button
                      onClick={clearFilters}
                      className="w-full px-4 py-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Found {quizzes.length} quiz{quizzes.length !== 1 ? 'es' : ''}
            {(filters.search || filters.category || filters.difficulty) && ' matching your criteria'}
          </p>
        </div>

        {/* Quizzes Grid */}
        {quizzes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => {
              const IconComponent = iconMap[quiz.category_icon] || BrainCircuit;
              
              return (
                <div
                  key={quiz.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="p-6">
                    {/* Quiz Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
                            {quiz.title}
                          </h3>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {quiz.category_name}
                          </span>
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[quiz.difficulty_level]}`}>
                        {difficultyLabels[quiz.difficulty_level]}
                      </span>
                    </div>
                    
                    {/* Quiz Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {quiz.description}
                    </p>
                    
                    {/* Quiz Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        {quiz.total_questions} Questions
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {quiz.duration_minutes} mins
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Target className="w-4 h-4 mr-2" />
                        {quiz.passing_score}% to pass
                      </div>
                    </div>
                    
                    {/* Progress Bar (Mock) */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>Average Score</span>
                        <span>{Math.floor(Math.random() * 30) + 60}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.floor(Math.random() * 30) + 60}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quiz Action */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-t border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => handleStartQuiz(quiz)}
                      className="w-full flex items-center justify-center font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                    >
                      Start Quiz
                      <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No quizzes found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              {filters.search || filters.category || filters.difficulty
                ? 'Try adjusting your search criteria or filters to find more quizzes.'
                : 'No quizzes are currently available. Please check back later.'
              }
            </p>
            {(filters.search || filters.category || filters.difficulty) && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}
        
        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Quiz Platform Statistics
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of learners improving their skills
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                50K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Active Users
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Quiz Topics
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                1M+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Tests Completed
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                95%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Success Rate
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Timer className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Timed Assessments
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Practice under exam conditions with our carefully timed quiz sessions
            </p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Detailed Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Get comprehensive performance insights and track your improvement over time
            </p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Progress Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Monitor your learning journey with detailed progress reports and achievements
            </p>
          </div>
        </div>
      </div>

      {/* Quiz Details Modal */}
      {showQuizModal && selectedQuiz && (
        <QuizModal
          quiz={selectedQuiz}
          onClose={() => {
            setShowQuizModal(false);
            setSelectedQuiz(null);
          }}
          onStart={(quiz) => {
            // Here you would typically navigate to the quiz taking interface
            console.log('Starting quiz:', quiz.title);
            alert(`Starting ${quiz.title}! This would navigate to the quiz interface.`);
            setShowQuizModal(false);
            setSelectedQuiz(null);
          }}
        />
      )}
    </div>
  );
};

export default Quiz;