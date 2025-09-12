// routes/quiz.js
const express = require('express');
const QuizController = require('../controllers/quizController');
const { authenticateToken } = require('../middleware/auth'); // ✅ import correctly

const router = express.Router();

// Public routes (no authentication required)
router.get('/categories', QuizController.getCategories);
router.get('/', QuizController.getAllQuizzes);
router.get('/:quizId/stats', QuizController.getQuizStats);
router.get('/:quizId/leaderboard', QuizController.getQuizLeaderboard);

// Protected routes (authentication required)
router.use(authenticateToken); // ✅ now it's a function

router.get('/dashboard', QuizController.getDashboardStats);
router.get('/history', QuizController.getUserQuizHistory);
router.get('/:quizId', QuizController.getQuizById);
router.post('/:quizId/start', QuizController.startQuiz);
router.post('/attempts/:attemptId/submit', QuizController.submitQuiz);
router.get('/attempts/:attemptId', QuizController.getAttemptDetails);

module.exports = router;
