import React, { useState, useEffect, useCallback } from 'react';
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Trophy,
  Target,
  TrendingUp,
  Award,
  RotateCcw
} from 'lucide-react';

interface QuizInterfaceProps {
  quizId: string;
  onExit: () => void;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({ quizId, onExit }) => {
  const [quiz, setQuiz] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Mock quiz data - replace with API call
  const mockQuiz = {
    id: quizId,
    title: 'Numerical Aptitude Test',
    description: 'Test your numerical reasoning skills',
    duration_minutes: 30,
    total_questions: 10,
    questions: [
      {
        id: 'q1',
        question_text: 'If a train travels 60 km in 45 minutes, what is its speed in km/hr?',
        options: ['70 km/hr', '75 km/hr', '80 km/hr', '85 km/hr'],
        correct_answer: '80 km/hr',
        marks: 2
      },
      {
        id: 'q2',
        question_text: 'What is 25% of 240?',
        options: ['50', '60', '70', '80'],
        correct_answer: '60',
        marks: 1
      },
      {
        id: 'q3',
        question_text: 'A product costs Rs. 200. After a 15% discount, what is the selling price?',
        options: ['Rs. 170', 'Rs. 175', 'Rs. 180', 'Rs. 185'],
        correct_answer: 'Rs. 170',
        marks: 2
      },
      {
        id: 'q4',
        question_text: 'If x + 5 = 12, what is the value of x?',
        options: ['5', '6', '7', '8'],
        correct_answer: '7',
        marks: 1
      },
      {
        id: 'q5',
        question_text: 'What is the next number in the sequence: 2, 4, 8, 16, ?',
        options: ['24', '28', '32', '36'],
        correct_answer: '32',
        marks: 2
      },
      {
        id: 'q6',
        question_text: 'If 3x = 21, what is x?',
        options: ['6', '7', '8', '9'],
        correct_answer: '7',
        marks: 1
      },
      {
        id: 'q7',
        question_text: 'What is 30% of 150?',
        options: ['45', '50', '55', '60'],
        correct_answer: '45',
        marks: 1
      },
      {
        id: 'q8',
        question_text: 'If a rectangle has length 8 and width 6, what is its area?',
        options: ['42', '46', '48', '52'],
        correct_answer: '48',
        marks: 2
      },
      {
        id: 'q9',
        question_text: 'What is the square root of 144?',
        options: ['10', '11', '12', '13'],
        correct_answer: '12',
        marks: 1
      },
      {
        id: 'q10',
        question_text: 'If a car travels 120 km in 2 hours, what is its average speed?',
        options: ['50 km/hr', '55 km/hr', '60 km/hr', '65 km/hr'],
        correct_answer: '60 km/hr',
        marks: 2
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setQuiz(mockQuiz);
      setTimeRemaining(mockQuiz.duration_minutes * 60); // Convert to seconds
      setLoading(false);
    }, 1000);
  }, [quizId]);

  // Timer effect
  useEffect(() => {
    if (timeRemaining > 0 && !results) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeRemaining, results]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleQuestionNavigation = (index: number) => {
    setCurrentQuestion(index);
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const handleSubmitQuiz = () => {
    setIsSubmitting(true);
    
    // Calculate results
    let correctAnswers = 0;
    let totalMarks = 0;
    let earnedMarks = 0;
    
    quiz.questions.forEach((question: any) => {
      totalMarks += question.marks;
      const userAnswer = answers[question.id];
      if (userAnswer === question.correct_answer) {
        correctAnswers++;
        earnedMarks += question.marks;
      }
    });
    
    const percentage = (earnedMarks / totalMarks) * 100;
    const grade = getGrade(percentage);
    
    const mockResults = {
      totalQuestions: quiz.questions.length,
      correctAnswers,
      wrongAnswers: Object.keys(answers).length - correctAnswers,
      unanswered: quiz.questions.length - Object.keys(answers).length,
      totalMarks,
      earnedMarks,
      percentage: Math.round(percentage * 100) / 100,
      grade,
      timeTaken: quiz.duration_minutes * 60 - timeRemaining,
      passed: percentage >= 60
    };
    
    setTimeout(() => {
      setResults(mockResults);
      setIsSubmitting(false);
    }, 2000);
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    return 'F';
  };

  const getGradeColor = (grade: string) => {
    const colors: Record<string, string> = {
      'A+': 'text-green-600 dark:text-green-400',
      'A': 'text-green-600 dark:text-green-400',
      'B+': 'text-blue-600 dark:text-blue-400',
      'B': 'text-blue-600 dark:text-blue-400',
      'C+': 'text-yellow-600 dark:text-yellow-400',
      'C': 'text-yellow-600 dark:text-yellow-400',
      'F': 'text-red-600 dark:text-red-400'
    };
    return colors[grade] || 'text-gray-600 dark:text-gray-400';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="text-center mb-8">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
              results.passed 
                ? 'bg-green-100 dark:bg-green-900/30' 
                : 'bg-red-100 dark:bg-red-900/30'
            }`}>
              {results.passed ? (
                <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
              ) : (
                <Target className="w-12 h-12 text-red-600 dark:text-red-400" />
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Quiz Completed!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {results.passed ? 'Congratulations! You passed the quiz.' : 'Keep practicing to improve your score.'}
            </p>
          </div>

          {/* Score Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {results.percentage}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold ${getGradeColor(results.grade)}`}>
                  {results.grade}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Grade</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {Math.floor(results.timeTaken / 60)}:{(results.timeTaken % 60).toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Time Taken</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {results.correctAnswers}/{results.totalQuestions}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Overall Performance</span>
                <span>{results.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    results.passed 
                      ? 'bg-gradient-to-r from-green-500 to-green-600' 
                      : 'bg-gradient-to-r from-red-500 to-red-600'
                  }`}
                  style={{ width: `${Math.min(results.percentage, 100)}%` }}
                ></div>
              </div>
            </div>
            
            {/* Detailed Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-300">
                    Correct: {results.correctAnswers}
                  </span>
                </div>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
                  <span className="text-sm font-medium text-red-800 dark:text-red-300">
                    Wrong: {results.wrongAnswers}
                  </span>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center">
                  <RotateCcw className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    Unanswered: {results.unanswered}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onExit}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Back to Quizzes
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quiz.questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const progressPercentage = (answeredCount / quiz.total_questions) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onExit}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {quiz.title}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Question {currentQuestion + 1} of {quiz.total_questions}
                </p>
              </div>
            </div>
            
            {/* Timer */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className={`w-5 h-5 ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`} />
                <span className={`font-mono text-lg font-semibold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-900 dark:text-white'}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              
              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Submit Quiz
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Progress: {answeredCount}/{quiz.total_questions} answered</span>
              <span>{Math.round(progressPercentage)}% complete</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {/* Question Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    Q{currentQuestion + 1}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {currentQ.marks} mark{currentQ.marks !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <button
                  onClick={() => toggleFlag(currentQ.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    flaggedQuestions.has(currentQ.id)
                      ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Flag className="w-5 h-5" />
                </button>
              </div>
              
              {/* Question Text */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white leading-relaxed">
                  {currentQ.question_text}
                </h2>
              </div>
              
              {/* Answer Options */}
              <div className="space-y-3 mb-8">
                {currentQ.options.map((option: string, index: number) => {
                  const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
                  const isSelected = answers[currentQ.id] === option;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQ.id, option)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                          isSelected
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                        }`}>
                          {optionLetter}
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleQuestionNavigation(currentQuestion - 1)}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {currentQuestion + 1} of {quiz.total_questions}
                  </span>
                </div>
                
                <button
                  onClick={() => handleQuestionNavigation(currentQuestion + 1)}
                  disabled={currentQuestion === quiz.total_questions - 1}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Questions
              </h3>
              
              <div className="grid grid-cols-5 lg:grid-cols-4 gap-2 mb-6">
                {quiz.questions.map((question: any, index: number) => {
                  const isAnswered = answers[question.id];
                  const isFlagged = flaggedQuestions.has(question.id);
                  const isCurrent = index === currentQuestion;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuestionNavigation(index)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold border-2 transition-all relative ${
                        isCurrent
                          ? 'border-blue-500 bg-blue-500 text-white shadow-lg'
                          : isAnswered
                            ? 'border-green-500 bg-green-500 text-white'
                            : isFlagged
                              ? 'border-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                              : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                    >
                      {index + 1}
                      {isFlagged && !isCurrent && !isAnswered && (
                        <Flag className="w-3 h-3 absolute -top-1 -right-1 text-yellow-500" />
                      )}
                    </button>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-400">Answered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-500 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-400">Flagged</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-400">Not visited</span>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Answered:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {answeredCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Flagged:</span>
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                      {flaggedQuestions.size}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Remaining:</span>
                    <span className="font-semibold text-gray-600 dark:text-gray-400">
                      {quiz.total_questions - answeredCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Submit Quiz?
              </h3>
              
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Are you sure you want to submit your quiz? You won't be able to change your answers after submission.
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Answered:</span>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {answeredCount} / {quiz.total_questions}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Time remaining:</span>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {formatTime(timeRemaining)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitQuiz}
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submitting Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Submitting Quiz...
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Please wait while we process your answers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizInterface;