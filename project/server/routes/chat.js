const express = require('express');
const rateLimit = require('express-rate-limit');
const ChatController = require('../controllers/chatController');
const { optionalAuth, authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Rate limiting for chat endpoints
const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // 10 messages per minute
  message: {
    success: false,
    message: 'Too many messages. Please slow down and try again.',
    response: 'I need a moment to catch up! Please wait a bit before sending another message.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Chat routes
router.post('/message', chatLimiter, optionalAuth, ChatController.sendMessage);
router.get('/suggestions', authenticateToken, ChatController.getSuggestions);

module.exports = router;