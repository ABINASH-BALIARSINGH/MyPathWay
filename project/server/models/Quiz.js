// models/Quiz.js
const { pool } = require('../config/database');
const crypto = require('crypto');

class Quiz {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.category_id = data.category_id;
    this.difficulty_level = data.difficulty_level;
    this.total_questions = data.total_questions;
    this.duration_minutes = data.duration_minutes;
    this.passing_score = parseFloat(data.passing_score) || 60;
    this.is_active = data.is_active;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }

  // Get all active quizzes with categories
  static async getAllWithCategory(filters = {}) {
    let query = `
      SELECT q.*, qc.name as category_name, qc.icon as category_icon
      FROM quizzes q
      LEFT JOIN quiz_categories qc ON q.category_id = qc.id
      WHERE q.is_active = TRUE
    `;
    
    const params = [];
    
    // Apply filters
    if (filters.category_id) {
      query += ' AND q.category_id = ?';
      params.push(filters.category_id);
    }
    
    if (filters.difficulty_level) {
      query += ' AND q.difficulty_level = ?';
      params.push(filters.difficulty_level);
    }
    
    if (filters.search) {
      query += ' AND (q.title LIKE ? OR q.description LIKE ?)';
      params.push(`%${filters.search}%`, `%${filters.search}%`);
    }
    
    query += ' ORDER BY q.created_at DESC';
    
    const [rows] = await pool.execute(query, params);
    return rows.map(row => ({
      ...new Quiz(row),
      category_name: row.category_name,
      category_icon: row.category_icon
    }));
  }

  // Get quiz by ID with questions
  static async getQuizWithQuestions(quizId) {
    // Get quiz details
    const [quizRows] = await pool.execute(
      `SELECT q.*, qc.name as category_name, qc.icon as category_icon
       FROM quizzes q
       LEFT JOIN quiz_categories qc ON q.category_id = qc.id
       WHERE q.id = ? AND q.is_active = TRUE`,
      [quizId]
    );
    
    if (!quizRows[0]) return null;
    
    // Get questions
    const [questionRows] = await pool.execute(
      `SELECT id, question_text, question_type, options, marks, difficulty
       FROM quiz_questions 
       WHERE quiz_id = ? 
       ORDER BY created_at`,
      [quizId]
    );
    
    const quiz = new Quiz(quizRows[0]);
    quiz.category_name = quizRows[0].category_name;
    quiz.category_icon = quizRows[0].category_icon;
    quiz.questions = questionRows.map(q => ({
      ...q,
      options: JSON.parse(q.options || '[]')
    }));
    
    return quiz;
  }

  // Create quiz attempt
  static async createAttempt(userId, quizId) {
    const attemptId = crypto.randomUUID();
    
    // Get quiz details for max score calculation
    const [quizRows] = await pool.execute(
      'SELECT total_questions FROM quizzes WHERE id = ?',
      [quizId]
    );
    
    if (!quizRows[0]) throw new Error('Quiz not found');
    
    const maxScore = quizRows[0].total_questions; // Assuming 1 mark per question
    
    await pool.execute(
      `INSERT INTO quiz_attempts 
       (id, user_id, quiz_id, max_score, answers) 
       VALUES (?, ?, ?, ?, '{}')`,
      [attemptId, userId, quizId, maxScore]
    );
    
    return attemptId;
  }

  // Submit quiz attempt
  static async submitAttempt(attemptId, answers) {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();
      
      // Get attempt and quiz details
      const [attemptRows] = await connection.execute(
        `SELECT qa.*, q.total_questions 
         FROM quiz_attempts qa
         JOIN quizzes q ON qa.quiz_id = q.id
         WHERE qa.id = ?`,
        [attemptId]
      );
      
      if (!attemptRows[0]) throw new Error('Quiz attempt not found');
      const attempt = attemptRows[0];
      
      // Get correct answers
      const [questionRows] = await connection.execute(
        'SELECT id, correct_answer, marks FROM quiz_questions WHERE quiz_id = ?',
        [attempt.quiz_id]
      );
      
      // Calculate score
      let totalScore = 0;
      let correctAnswers = 0;
      let wrongAnswers = 0;
      let unanswered = 0;
      
      const questionMap = {};
      questionRows.forEach(q => {
        questionMap[q.id] = {
          correct_answer: q.correct_answer,
          marks: parseFloat(q.marks)
        };
      });
      
      Object.keys(answers).forEach(questionId => {
        const userAnswer = answers[questionId];
        const question = questionMap[questionId];
        
        if (!question) return;
        
        if (!userAnswer || userAnswer.trim() === '') {
          unanswered++;
        } else if (userAnswer.toLowerCase().trim() === question.correct_answer.toLowerCase().trim()) {
          totalScore += question.marks;
          correctAnswers++;
        } else {
          wrongAnswers++;
        }
      });
      
      // Calculate missing answers
      const answeredQuestions = Object.keys(answers).length;
      unanswered += attempt.total_questions - answeredQuestions;
      
      const percentage = (totalScore / attempt.max_score) * 100;
      const grade = calculateGrade(percentage);
      
      // Calculate time taken
      const timeTaken = Math.floor((Date.now() - new Date(attempt.start_time)) / (1000 * 60));
      
      // Update attempt
      await connection.execute(
        `UPDATE quiz_attempts 
         SET end_time = NOW(), total_score = ?, percentage = ?, grade = ?, 
             time_taken_minutes = ?, is_completed = TRUE, answers = ?
         WHERE id = ?`,
        [totalScore, percentage, grade, timeTaken, JSON.stringify(answers), attemptId]
      );
      
      // Insert results summary
      const resultId = crypto.randomUUID();
      const accuracyPercentage = attempt.total_questions > 0 ? 
        (correctAnswers / attempt.total_questions) * 100 : 0;
      const timePerQuestion = attempt.total_questions > 0 ? 
        timeTaken / attempt.total_questions : 0;
      
      await connection.execute(
        `INSERT INTO quiz_results 
         (id, attempt_id, user_id, quiz_id, total_questions, correct_answers, 
          wrong_answers, unanswered, accuracy_percentage, time_per_question)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [resultId, attemptId, attempt.user_id, attempt.quiz_id, 
         attempt.total_questions, correctAnswers, wrongAnswers, unanswered,
         accuracyPercentage, timePerQuestion]
      );
      
      await connection.commit();
      
      return {
        attemptId,
        totalScore,
        maxScore: attempt.max_score,
        percentage,
        grade,
        correctAnswers,
        wrongAnswers,
        unanswered,
        timeTaken,
        accuracyPercentage
      };
      
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // Get user's quiz history
  static async getUserAttempts(userId, limit = 10) {
    const [rows] = await pool.execute(
      `SELECT qa.*, q.title as quiz_title, qc.name as category_name
       FROM quiz_attempts qa
       JOIN quizzes q ON qa.quiz_id = q.id
       LEFT JOIN quiz_categories qc ON q.category_id = qc.id
       WHERE qa.user_id = ? AND qa.is_completed = TRUE
       ORDER BY qa.created_at DESC
       LIMIT ?`,
      [userId, limit]
    );
    
    return rows;
  }

  // Get quiz statistics
  static async getQuizStats(quizId) {
    const [stats] = await pool.execute(
      `SELECT 
        COUNT(*) as total_attempts,
        AVG(percentage) as average_score,
        AVG(time_taken_minutes) as average_time,
        COUNT(CASE WHEN percentage >= 60 THEN 1 END) as passed_attempts
       FROM quiz_attempts 
       WHERE quiz_id = ? AND is_completed = TRUE`,
      [quizId]
    );
    
    return stats[0] || {};
  }
}

// Helper function to calculate grade
function calculateGrade(percentage) {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B+';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C+';
  if (percentage >= 40) return 'C';
  return 'F';
}

module.exports = Quiz;