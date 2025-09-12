// controllers/quizController.js
const Quiz = require('../models/Quiz');
const { pool } = require('../config/database');

class QuizController {
  // Get all quizzes with filters
  static async getAllQuizzes(req, res) {
    try {
      const { category_id, difficulty_level, search } = req.query;
      
      const filters = {};
      if (category_id) filters.category_id = category_id;
      if (difficulty_level) filters.difficulty_level = difficulty_level;
      if (search) filters.search = search;
      
      const quizzes = await Quiz.getAllWithCategory(filters);
      
      res.json({
        success: true,
        data: quizzes,
        count: quizzes.length
      });
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch quizzes'
      });
    }
  }

  // Get quiz categories
  static async getCategories(req, res) {
    try {
      const [categories] = await pool.execute(
        'SELECT * FROM quiz_categories ORDER BY name'
      );
      
      res.json({
        success: true,
        data: categories
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch categories'
      });
    }
  }

  // Get quiz details with questions
  static async getQuizById(req, res) {
    try {
      const { quizId } = req.params;
      
      const quiz = await Quiz.getQuizWithQuestions(quizId);
      
      if (!quiz) {
        return res.status(404).json({
          success: false,
          message: 'Quiz not found'
        });
      }
      
      res.json({
        success: true,
        data: quiz
      });
    } catch (error) {
      console.error('Error fetching quiz:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch quiz details'
      });
    }
  }

  // Start quiz attempt
  static async startQuiz(req, res) {
    try {
      const { quizId } = req.params;
      const userId = req.user.userId;
      
      const attemptId = await Quiz.createAttempt(userId, quizId);
      
      res.json({
        success: true,
        data: {
          attemptId,
          message: 'Quiz attempt started successfully'
        }
      });
    } catch (error) {
      console.error('Error starting quiz:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to start quiz'
      });
    }
  }

  // Submit quiz attempt
  static async submitQuiz(req, res) {
    try {
      const { attemptId } = req.params;
      const { answers } = req.body;
      
      if (!answers || typeof answers !== 'object') {
        return res.status(400).json({
          success: false,
          message: 'Invalid answers format'
        });
      }
      
      const result = await Quiz.submitAttempt(attemptId, answers);
      
      res.json({
        success: true,
        data: result,
        message: 'Quiz submitted successfully'
      });
    } catch (error) {
      console.error('Error submitting quiz:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to submit quiz'
      });
    }
  }

  // Get user's quiz history
  static async getUserQuizHistory(req, res) {
    try {
      const userId = req.user.userId;
      const limit = parseInt(req.query.limit) || 10;
      
      const attempts = await Quiz.getUserAttempts(userId, limit);
      
      res.json({
        success: true,
        data: attempts
      });
    } catch (error) {
      console.error('Error fetching quiz history:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch quiz history'
      });
    }
  }

  // Get quiz statistics
  static async getQuizStats(req, res) {
    try {
      const { quizId } = req.params;
      
      const stats = await Quiz.getQuizStats(quizId);
      
      res.json({
        success: true,
        data: stats
      });
    } catch (error) {
      console.error('Error fetching quiz stats:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch quiz statistics'
      });
    }
  }

  // Get quiz leaderboard
  static async getQuizLeaderboard(req, res) {
    try {
      const { quizId } = req.params;
      const limit = parseInt(req.query.limit) || 10;
      
      const [leaderboard] = await pool.execute(
        `SELECT u.name, u.avatar, qa.percentage, qa.grade, qa.time_taken_minutes, qa.created_at
         FROM quiz_attempts qa
         JOIN users u ON qa.user_id = u.id
         WHERE qa.quiz_id = ? AND qa.is_completed = TRUE
         ORDER BY qa.percentage DESC, qa.time_taken_minutes ASC
         LIMIT ?`,
        [quizId, limit]
      );
      
      res.json({
        success: true,
        data: leaderboard
      });
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch leaderboard'
      });
    }
  }

  // Get attempt details with answers
  static async getAttemptDetails(req, res) {
    try {
      const { attemptId } = req.params;
      const userId = req.user.userId;
      
      const [attemptRows] = await pool.execute(
        `SELECT qa.*, q.title as quiz_title, q.total_questions
         FROM quiz_attempts qa
         JOIN quizzes q ON qa.quiz_id = q.id
         WHERE qa.id = ? AND qa.user_id = ?`,
        [attemptId, userId]
      );
      
      if (!attemptRows[0]) {
        return res.status(404).json({
          success: false,
          message: 'Quiz attempt not found'
        });
      }
      
      const attempt = attemptRows[0];
      attempt.answers = JSON.parse(attempt.answers || '{}');
      
      // Get questions with correct answers for review
      const [questionRows] = await pool.execute(
        `SELECT id, question_text, options, correct_answer, explanation, marks
         FROM quiz_questions 
         WHERE quiz_id = ?`,
        [attempt.quiz_id]
      );
      
      const questions = questionRows.map(q => ({
        ...q,
        options: JSON.parse(q.options || '[]'),
        user_answer: attempt.answers[q.id] || null
      }));
      
      res.json({
        success: true,
        data: {
          attempt,
          questions
        }
      });
    } catch (error) {
      console.error('Error fetching attempt details:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch attempt details'
      });
    }
  }

  // Get dashboard stats for user
  static async getDashboardStats(req, res) {
    try {
      const userId = req.user.userId;
      
      // Get user stats
      const [userStats] = await pool.execute(
        `SELECT 
          COUNT(*) as total_attempts,
          AVG(percentage) as average_score,
          MAX(percentage) as best_score,
          COUNT(CASE WHEN percentage >= 60 THEN 1 END) as quizzes_passed,
          SUM(time_taken_minutes) as total_time_spent
         FROM quiz_attempts 
         WHERE user_id = ? AND is_completed = TRUE`,
        [userId]
      );
      
      // Get recent attempts
      const [recentAttempts] = await pool.execute(
        `SELECT qa.*, q.title as quiz_title, qc.name as category_name
         FROM quiz_attempts qa
         JOIN quizzes q ON qa.quiz_id = q.id
         LEFT JOIN quiz_categories qc ON q.category_id = qc.id
         WHERE qa.user_id = ? AND qa.is_completed = TRUE
         ORDER BY qa.created_at DESC
         LIMIT 5`,
        [userId]
      );
      
      // Get category performance
      const [categoryStats] = await pool.execute(
        `SELECT qc.name as category_name, 
                COUNT(*) as attempts,
                AVG(qa.percentage) as average_score
         FROM quiz_attempts qa
         JOIN quizzes q ON qa.quiz_id = q.id
         JOIN quiz_categories qc ON q.category_id = qc.id
         WHERE qa.user_id = ? AND qa.is_completed = TRUE
         GROUP BY qc.id, qc.name
         ORDER BY average_score DESC`,
        [userId]
      );
      
      res.json({
        success: true,
        data: {
          stats: userStats[0] || {},
          recentAttempts,
          categoryPerformance: categoryStats
        }
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch dashboard statistics'
      });
    }
  }
}

module.exports = QuizController;