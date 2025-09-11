const { GoogleGenerativeAI } = require('@google/generative-ai');
const { validateChatMessage } = require('../utils/validation');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

class ChatController {
  static async sendMessage(req, res) {
    try {
      // Validate input
      const { error, value } = validateChatMessage(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: error.details.map(detail => detail.message)
        });
      }

      const { message } = value;
      const user = req.user; // From authentication middleware

      // Create personalized prompt based on user data
      const userContext = user ? `
        User Profile:
        - Name: ${user.name}
        - Role: ${user.role}
        - Skills: ${user.skills.join(', ') || 'None specified'}
        - Progress: ${user.courses_completed}/${user.total_courses} courses completed
        - Average Score: ${user.average_score}%
      ` : '';

      const prompt = `You are MyPathWay AI Assistant, a helpful learning companion for students and professionals. 
      You provide personalized, encouraging, and educational responses about learning, career guidance, 
      skill development, and academic topics. Keep responses concise but informative and supportive.
      
      ${userContext}
      
      User question: ${message}
      
      Please provide a helpful response tailored to their learning journey.`;

      // Get the generative model
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      // Generate content
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiMessage = response.text();

      res.status(200).json({
        success: true,
        response: aiMessage,
        user: user ? user.getPublicInfo() : null
      });

    } catch (error) {
      console.error('AI chat error:', error);
      
      // Handle different types of errors
      if (error.message.includes('API_KEY')) {
        return res.status(503).json({
          success: false,
          message: 'AI service is currently unavailable. Please try again later.'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Sorry, I encountered an error. Please try again.',
        response: 'I apologize, but I\'m having trouble processing your request right now. Please try again in a moment.'
      });
    }
  }

  // Get AI suggestions based on user profile
  static async getSuggestions(req, res) {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required for personalized suggestions'
        });
      }

      const prompt = `Based on this user's profile, suggest 5 personalized learning recommendations:
      
      User Profile:
      - Name: ${user.name}
      - Role: ${user.role}
      - Current Skills: ${user.skills.join(', ') || 'None specified'}
      - Courses Completed: ${user.courses_completed}
      - Total Courses: ${user.total_courses}
      - Average Score: ${user.average_score}%
      
      Provide 5 specific, actionable learning suggestions that would help them advance their career.
      Format as a JSON array of objects with 'title', 'description', and 'category' fields.`;

      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiMessage = response.text();

      // Try to parse JSON response
      let suggestions;
      try {
        suggestions = JSON.parse(aiMessage);
      } catch (parseError) {
        // If JSON parsing fails, return a formatted response
        suggestions = [
          {
            title: "Continue Learning",
            description: aiMessage,
            category: "General"
          }
        ];
      }

      res.status(200).json({
        success: true,
        suggestions,
        user: user.getPublicInfo()
      });

    } catch (error) {
      console.error('AI suggestions error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to generate suggestions'
      });
    }
  }
}

module.exports = ChatController;