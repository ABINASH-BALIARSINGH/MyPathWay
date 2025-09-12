import React, { useState, useEffect } from 'react';
import { Search, Filter, Clock, BarChart3, Star, TrendingUp, Award } from 'lucide-react';
import QuizInterface from '../components/QuizInterface';

interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: number;
  questions: number;
  rating: number;
  attempts: number;
}

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState<string | null>(null);
  const [showQuizInterface, setShowQuizInterface] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Mock quiz data
  const availableQuizzes: Quiz[] = [
    { 
      id: 'numerical-aptitude', 
      title: 'Numerical Aptitude', 
      description: 'Test your numerical reasoning and calculation skills', 
      category: 'Mathematics',
      difficulty: 'Medium',
      duration: 30,
      questions: 20,
      rating: 4.5,
      attempts: 1245
    },
    { 
      id: 'verbal-reasoning', 
      title: 'Verbal Reasoning', 
      description: 'Evaluate your language and comprehension abilities', 
      category: 'Language',
      difficulty: 'Medium',
      duration: 25,
      questions: 18,
      rating: 4.2,
      attempts: 987
    },
    { 
      id: 'logical-thinking', 
      title: 'Logical Thinking', 
      description: 'Challenge your logical and analytical reasoning', 
      category: 'Logic',
      difficulty: 'Hard',
      duration: 35,
      questions: 22,
      rating: 4.7,
      attempts: 856
    },
    { 
      id: 'data-interpretation', 
      title: 'Data Interpretation', 
      description: 'Analyze and interpret complex data sets', 
      category: 'Mathematics',
      difficulty: 'Hard',
      duration: 40,
      questions: 25,
      rating: 4.3,
      attempts: 723
    },
    { 
      id: 'english-grammar', 
      title: 'English Grammar', 
      description: 'Test your knowledge of English grammar rules', 
      category: 'Language',
      difficulty: 'Easy',
      duration: 20,
      questions: 15,
      rating: 4.0,
      attempts: 1562
    },
    { 
      id: 'general-knowledge', 
      title: 'General Knowledge', 
      description: 'Assess your awareness of current affairs and facts', 
      category: 'General',
      difficulty: 'Easy',
      duration: 15,
      questions: 12,
      rating: 4.1,
      attempts: 2104
    },
  ];

  // Extract unique categories
  const categories = ['All', ...new Set(availableQuizzes.map(quiz => quiz.category))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  // Filter quizzes based on search and filters
  const filteredQuizzes = availableQuizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || quiz.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || quiz.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleStartQuiz = (quizId: string) => {
    setCurrentQuiz(quizId);
    setShowQuizInterface(true);
  };

  const handleExitQuiz = () => {
    setShowQuizInterface(false);
    setCurrentQuiz(null);
  };

  if (showQuizInterface && currentQuiz) {
    return <QuizInterface quizId={currentQuiz} onExit={handleExitQuiz} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Practice <span className="text-blue-600 dark:text-blue-400">Quizzes</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Test your knowledge, improve your skills, and prepare for exams with our comprehensive quiz collection
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search quizzes..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-300 font-medium"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg animate-fade-in-down">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Difficulty</h3>
                  <div className="flex flex-wrap gap-2">
                    {difficulties.map(difficulty => (
                      <button
                        key={difficulty}
                        onClick={() => setSelectedDifficulty(difficulty)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedDifficulty === difficulty
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {difficulty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredQuizzes.length} of {availableQuizzes.length} quizzes
          </p>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz, index) => (
            <div
              key={quiz.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Quiz Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      quiz.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : quiz.difficulty === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                    }`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {quiz.rating}
                    </span>
                  </div>
                </div>
                
                {/* Quiz Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {quiz.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {quiz.description}
                </p>
                
                {/* Quiz Meta Information */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {quiz.duration} min
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <BarChart3 className="w-4 h-4 mr-1" />
                    {quiz.questions} Qs
                  </div>
                </div>
                
                {/* Category and Attempts */}
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    {quiz.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {quiz.attempts.toLocaleString()} attempts
                  </span>
                </div>
                
                {/* Start Quiz Button */}
                <button
                  onClick={() => handleStartQuiz(quiz.id)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium flex items-center justify-center group"
                >
                  Start Quiz
                  <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredQuizzes.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No quizzes found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Quiz;