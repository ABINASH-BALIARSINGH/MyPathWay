import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Loader } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const AIAssistantButton: React.FC = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Create axios instance with proper base URL
  const apiClient = axios.create({
    baseURL: import.meta.env.DEV ? 'http://localhost:5000' : '',
    withCredentials: true,
    timeout: 10000, // 10 second timeout
    headers: {
      'Content-Type': 'application/json'
    }
  });

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: 'ai',
          text: "Hello! I'm your MyPathWay AI Assistant. Ask me anything about learning, careers, or skills.",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      console.log('🚀 Sending message to:', '/api/chat/message');
      console.log('📝 Message:', userMessage);

      const { data } = await apiClient.post('/api/chat/message', { 
        message: userMessage 
      });

      console.log('✅ Response received:', data);

      if (data.success) {
        setMessages(prev => [...prev, { sender: 'ai', text: data.response }]);
      } else {
        throw new Error(data.message || 'Unknown server error');
      }
    } catch (err: any) {
      console.error('💥 AI chat error:', err);
      
      let errorMessage = "Sorry, I'm having trouble connecting. Please try again later.";
      
      if (err.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check your connection and try again.';
      } else if (err.response) {
        const status = err.response.status;
        switch (status) {
          case 401:
            errorMessage = 'Please log in to use the AI assistant.';
            break;
          case 429:
            errorMessage = 'Too many messages. Please wait a moment before trying again.';
            break;
          case 500:
            errorMessage = 'Server error. Please try again in a few moments.';
            break;
          default:
            errorMessage = `Error (${status}): ${err.response.data?.message || 'Please try again'}`;
        }
      } else if (err.request) {
        errorMessage = 'Cannot connect to server. Please check your internet connection.';
      }

      setMessages(prev => [
        ...prev,
        { sender: 'ai', text: errorMessage },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="text-blue-500" />
                <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                  AI Learning Assistant
                </h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Bot size={20} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <User size={20} className="text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-200 dark:bg-gray-700">
                    <Loader className="animate-spin text-gray-500" size={20} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={30} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Bot size={30} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AIAssistantButton;