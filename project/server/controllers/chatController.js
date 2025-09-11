const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

class ChatController {
  static async sendMessage(req, res) {
    try {
      console.log('--- Chat endpoint hit ---');
      const { message } = req.body;

      if (!message || !message.trim()) {
        return res.status(400).json({
          success: false,
          message: 'Message is required'
        });
      }

      console.log('User message:', message);

      // Create a learning-focused prompt
      const prompt = `You are MyPathWay AI Learning Assistant, a helpful educational AI that helps students learn and grow. 
      
      Instructions:
      - Provide clear, educational responses
      - Be encouraging and supportive
      - Focus on learning and skill development
      - Keep responses concise but informative
      - If the question is about learning, studying, careers, or education, provide detailed help
      - For other topics, still be helpful but gently guide towards educational content
      
      User question: ${message}
      
      Please provide a helpful response:`;

      // Call Gemini AI
      const result = await model.generateContent(prompt);
      const response = result.response;
      const aiResponse = response.text();

      console.log('AI response generated successfully');

      res.json({
        success: true,
        response: aiResponse,
        user: req.user ? req.user.getPublicInfo() : null
      });

    } catch (error) {
      console.error('Chat error:', error);
      
      // Fallback response if AI fails
      let fallbackResponse = "I apologize, but I'm having trouble processing your request right now. ";
      
      // Provide some basic responses for common queries
      const message = req.body.message?.toLowerCase() || '';
      if (message.includes('react')) {
        fallbackResponse += "React is a popular JavaScript library for building user interfaces, especially web applications. It uses a component-based architecture and virtual DOM for efficient updates.";
      } else if (message.includes('database')) {
        fallbackResponse += "A database is an organized collection of information designed for efficient storage, retrieval, and management. It's like a digital filing system for your data.";
      } else if (message.includes('javascript') || message.includes('js')) {
        fallbackResponse += "JavaScript is a versatile programming language used for web development, both frontend and backend. It's essential for creating interactive websites and applications.";
      } else {
        fallbackResponse += "Please try asking about programming, web development, databases, or other technical topics I can help you learn!";
      }

      res.json({
        success: true,
        response: fallbackResponse,
        user: req.user ? req.user.getPublicInfo() : null,
        note: "This is a fallback response. The AI service is temporarily unavailable."
      });
    }
  }

  static async getChatHistory(req, res) {
    try {
      // This would typically fetch from a database
      // For now, return empty array as chat history isn't implemented yet
      res.json({
        success: true,
        messages: [],
        message: "Chat history feature coming soon!"
      });
    } catch (error) {
      console.error('Get chat history error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve chat history'
      });
    }
  }
}

module.exports = ChatController;