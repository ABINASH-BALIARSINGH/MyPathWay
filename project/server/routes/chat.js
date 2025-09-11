const express = require('express');
const rateLimit = require('express-rate-limit');
const ChatController = require('../controllers/chatController');
const { authenticateToken, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// Rate limiting for chat endpoints
const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // 10 messages per minute
  message: {
    success: false,
    message: 'Too many messages. Please wait a moment before sending another message.'
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

// Chat routes
router.post('/message', chatLimiter, optionalAuth, ChatController.sendMessage);
router.get('/history', generalLimiter, authenticateToken, ChatController.getChatHistory);

module.exports = router;