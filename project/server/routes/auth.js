const express = require('express');
const rateLimit = require('express-rate-limit');
const AuthController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: {
    success: false,
    message: 'Too many authentication attempts. Please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: {
    success: false,
    message: 'Too many requests. Please try again later.'
  }
});

// Public routes
router.post('/register', authLimiter, AuthController.register);
router.post('/login', authLimiter, AuthController.login);
router.post('/logout', generalLimiter, AuthController.logout);
router.get('/verify-token', generalLimiter, authenticateToken, AuthController.verifyToken);

// Protected routes
router.get('/profile', generalLimiter, authenticateToken, AuthController.getProfile);
router.put('/profile', generalLimiter, authenticateToken, AuthController.updateProfile);
router.put('/progress', generalLimiter, authenticateToken, AuthController.updateProgress);

module.exports = router;