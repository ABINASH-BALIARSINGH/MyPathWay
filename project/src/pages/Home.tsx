import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
    ArrowRight, 
    BookOpen, 
    Target, 
    Award, 
    Users, 
    TrendingUp,
    Play,
    Bot,
    Sparkles,
    Brain,
    Zap,
    Send,
    MessageCircle,
    X,
    Rocket,
    MapPin,
    Briefcase, // Added for Career Companion
    Compass,    // Added for Career Companion button
} from 'lucide-react';

// Separate Modal Component to prevent re-rendering
// Replace the AIModal component in your Home.tsx with this fixed version
// Updated AIModal component with better debugging and error handling
const AIModal = ({ isOpen, onClose, chatHistory, setChatHistory }) => {
    const [userMessage, setUserMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAIChat = useCallback(async () => {
        if (!userMessage.trim()) return;

        setIsLoading(true);
        const currentMessage = userMessage;
        setUserMessage('');

        setChatHistory(prev => [...prev, { type: 'user', message: currentMessage }]);

        try {
            console.log('🚀 Sending request to:', '/api/chat/message');
            console.log('📝 Message:', currentMessage);
            console.log('🍪 Document cookies:', document.cookie);
            
            // Check if we're running in development
            const baseURL = import.meta.env.DEV ? 'http://localhost:5000' : '';
            const fullURL = baseURL + '/api/chat/message';
            
            console.log('🌐 Full URL:', fullURL);

            const { data } = await axios.post(
                fullURL,
                { message: currentMessage },
                { 
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        // Add authorization header if no cookies
                        ...(document.cookie.includes('token') ? {} : {
                            'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
                        })
                    },
                    timeout: 10000 // 10 second timeout
                }
            );

            console.log('✅ Response received:', data);

            if (data.success) {
                setChatHistory(prev => [...prev, { type: 'ai', message: data.response }]);
            } else {
                console.error('❌ Server returned error:', data.error);
                setChatHistory(prev => [...prev, { 
                    type: 'ai', 
                    message: `Error: ${data.error || 'Unknown server error'}` 
                }]);
            }
        } catch (error) {
            console.error('💥 Full error object:', error);
            console.error('📊 Error response:', error.response);
            console.error('📋 Error request:', error.request);
            console.error('💬 Error message:', error.message);
            
            let errorMessage = 'Sorry, I encountered an error. Please try again.';
            
            if (error.code === 'ECONNABORTED') {
                errorMessage = 'Request timeout. Please check your connection and try again.';
            } else if (error.response) {
                const status = error.response.status;
                const responseData = error.response.data;
                
                console.log('🔍 Response status:', status);
                console.log('🔍 Response data:', responseData);
                
                switch (status) {
                    case 400:
                        errorMessage = `Bad request: ${responseData.error || 'Invalid input'}`;
                        break;
                    case 401:
                        errorMessage = 'Authentication required. Please log in to continue.';
                        // Optionally redirect to login
                        break;
                    case 403:
                        errorMessage = 'Access forbidden. You don\'t have permission to use this feature.';
                        break;
                    case 404:
                        errorMessage = 'Chat service not found. Please contact support.';
                        break;
                    case 429:
                        errorMessage = 'Too many requests. Please wait a moment before trying again.';
                        break;
                    case 500:
                        errorMessage = `Server error: ${responseData.error || 'Internal server error'}`;
                        if (responseData.details) {
                            console.error('🔧 Server error details:', responseData.details);
                        }
                        break;
                    default:
                        errorMessage = `Unexpected error (${status}): ${responseData.error || 'Please try again'}`;
                }
            } else if (error.request) {
                console.error('🌐 No response received:', error.request);
                errorMessage = 'No response from server. Please check your connection.';
            } else {
                console.error('⚙️ Request setup error:', error.message);
                errorMessage = `Request error: ${error.message}`;
            }
            
            setChatHistory(prev => [...prev, { type: 'ai', message: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    }, [userMessage, setChatHistory]);

    // Add connection test function
    const testConnection = useCallback(async () => {
        try {
            const baseURL = import.meta.env.DEV ? 'http://localhost:5000' : '';
            const response = await axios.get(baseURL + '/api/chat/test', { 
                withCredentials: true,
                timeout: 5000 
            });
            console.log('🔗 Connection test result:', response.data);
            setChatHistory(prev => [...prev, { 
                type: 'ai', 
                message: `Connection test successful! Server time: ${response.data.timestamp}` 
            }]);
        } catch (error) {
            console.error('🔗 Connection test failed:', error);
            setChatHistory(prev => [...prev, { 
                type: 'ai', 
                message: `Connection test failed: ${error.message}` 
            }]);
        }
    }, [setChatHistory]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAIChat();
        }
    }, [handleAIChat]);

    const clearChat = useCallback(() => {
        setChatHistory([]);
        setUserMessage('');
    }, [setChatHistory]);

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Learning Assistant</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Ask me anything about learning!</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={testConnection} 
                            className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-md hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                        >
                            Test
                        </button>
                        <button 
                            onClick={clearChat} 
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                            Clear
                        </button>
                        <button 
                            onClick={onClose} 
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-grow h-96 overflow-y-auto p-6 space-y-4">
                    {chatHistory.length === 0 ? (
                        <div className="text-center text-gray-500 dark:text-gray-400 mt-20">
                            <Bot className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p>Start a conversation with your AI learning companion!</p>
                            <p className="text-sm mt-2">Try asking: "How can I learn React faster?"</p>
                            <button 
                                onClick={testConnection}
                                className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                            >
                                Test Connection
                            </button>
                        </div>
                    ) : (
                        chatHistory.map((chat, index) => (
                            <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                                    chat.type === 'user' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                                }`}>
                                    <p className="text-sm whitespace-pre-wrap">{chat.message}</p>
                                </div>
                            </div>
                        ))
                    )}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <div className="flex space-x-3">
                        <textarea
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything..."
                            className="flex-1 resize-none border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            rows="1"
                            disabled={isLoading}
                            autoFocus
                        />
                        <button
                            onClick={handleAIChat}
                            disabled={isLoading || !userMessage.trim()}
                            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center min-w-[44px]"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Home = () => {
    const [isAIModalOpen, setIsAIModalOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);

    const features = [
        { icon: BookOpen, title: 'Interactive Courses', description: 'Engage with hands-on projects and real-world scenarios', color: 'bg-blue-500' },
        { icon: Target, title: 'Skill Assessment', description: 'Test your knowledge with adaptive quizzes and mock exams', color: 'bg-green-500' },
        { icon: Award, title: 'Certifications', description: 'Earn industry-recognized certificates and digital badges', color: 'bg-purple-500' },
        { icon: Users, title: 'Community', description: 'Connect with learners and experts in your field', color: 'bg-orange-500' }
    ];

    const stats = [
        { label: 'Active Learners', value: '50K+', icon: Users },
        { label: 'Courses Available', value: '1,200+', icon: BookOpen },
        { label: 'Certificates Issued', value: '25K+', icon: Award },
        { label: 'Success Rate', value: '95%', icon: TrendingUp }
    ];

    const fadeInUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
    const staggerChildren = { animate: { transition: { staggerChildren: 0.1 } } };

    const AIAssistantButton = useMemo(() => (
        <motion.button
            onClick={() => setIsAIModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
            <Bot className="w-5 h-5" />
            <span>Try AI Assistant</span>
        </motion.button>
    ), []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* AI Modal */}
            <AIModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} chatHistory={chatHistory} setChatHistory={setChatHistory} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-blue-800 dark:via-purple-800 dark:to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="initial" animate="animate" variants={staggerChildren} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Bridge Your Skills to <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Success</span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-8 max-w-lg">
                                Transform your career with adaptive digital learning, practical skills, and real opportunities. Join thousands of learners achieving their goals.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                                <Link to="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group">
                                    Start Learning <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/test-center" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center group">
                                    <Play className="mr-2 w-5 h-5" /> Take Assessment
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div variants={fadeInUp} className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat) => (
                                        <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                                            <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                                            <div className="text-2xl font-bold">{stat.value}</div>
                                            <div className="text-sm text-blue-100">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerChildren} className="text-center mb-16">
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose MyPathWay?</motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">We provide a comprehensive learning ecosystem designed for your success</motion.p>
                    </motion.div>
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <motion.div key={feature.title} variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Career Search CTA Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial="initial" 
                        whileInView="animate" 
                        viewport={{ once: true, amount: 0.3 }} 
                        variants={staggerChildren}
                        className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 border border-purple-100 dark:border-purple-800"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <motion.div variants={fadeInUp}>
                                 <div className="flex items-center space-x-3 mb-6">
                                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                                           <Rocket className="w-6 h-6 text-white" />
                                      </div>
                                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Chart Your Future</h2>
                                 </div>
                                 <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                    Feeling lost in the maze of career options? Our interactive Career Search tool provides a step-by-step flowchart to help you discover the perfect path based on your education and interests.
                                 </p>
                                 <Link to="/career-search">
                                      <motion.button
                                           whileHover={{ scale: 1.02 }}
                                           whileTap={{ scale: 0.98 }}
                                           className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                                      >
                                           <MapPin className="w-5 h-5" />
                                           <span>Find Your Career Path</span>
                                      </motion.button>
                                 </Link>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="hidden lg:flex justify-center items-center">
                                <Rocket className="w-64 h-64 text-blue-100 dark:text-blue-900/50 rotate-12" strokeWidth={1}/>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* NEW: Career Companion Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial="initial" 
                        whileInView="animate" 
                        viewport={{ once: true, amount: 0.3 }} 
                        variants={staggerChildren}
                        className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 md:p-12 border border-green-100 dark:border-green-800"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <motion.div variants={fadeInUp} className="hidden lg:flex justify-center items-center order-last lg:order-first">
                                <Briefcase className="w-64 h-64 text-green-100 dark:text-green-900/50 -rotate-12" strokeWidth={1}/>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                 <div className="flex items-center space-x-3 mb-6">
                                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                                           <Briefcase className="w-6 h-6 text-white" />
                                      </div>
                                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Your Career Companion</h2>
                                 </div>
                                 <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                    Navigate your professional journey with personalized guidance. Our Career Companion helps you identify skill gaps, suggests relevant courses, and tracks your progress towards your dream job.
                                 </p>
                                 <Link to="/career-companion">
                                      <motion.button
                                           whileHover={{ scale: 1.02 }}
                                           whileTap={{ scale: 0.98 }}
                                           className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                                      >
                                           <Compass className="w-5 h-5" />
                                           <span>Explore Your Career Plan</span>
                                      </motion.button>
                                 </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* AI Assistant Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerChildren} className="text-center mb-12">
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Your AI Learning Companion</motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Get personalized assistance, instant answers, and smart study recommendations.</motion.p>
                    </motion.div>
                    <motion.div variants={fadeInUp} viewport={{ once: true }} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-blue-800">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"><Bot className="w-6 h-6 text-white" /></div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">MyPathWay AI Assistant</h3>
                                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full">LIVE</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">Your personal AI tutor that understands your learning style and creates customized study plans to accelerate your progress.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center space-x-3"><div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"><Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" /></div><span className="text-gray-700 dark:text-gray-300 font-medium">Smart Recommendations</span></div>
                                    <div className="flex items-center space-x-3"><div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" /></div><span className="text-gray-700 dark:text-gray-300 font-medium">Instant Answers</span></div>
                                    <div className="flex items-center space-x-3"><div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"><Target className="w-4 h-4 text-green-600 dark:text-green-400" /></div><span className="text-gray-700 dark:text-gray-300 font-medium">Personalized Plans</span></div>
                                    <div className="flex items-center space-x-3"><div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center"><Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" /></div><span className="text-gray-700 dark:text-gray-300 font-medium">24/7 Available</span></div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">{AIAssistantButton}</div>
                            </div>
                            <div className="relative hidden lg:block">
                                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                                    <div className="flex items-center space-x-3 mb-4"><div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Bot className="w-4 h-4" /></div><span className="font-semibold">AI Assistant</span><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div></div>
                                    <div className="space-y-3"><div className="bg-white/10 rounded-lg p-3"><p className="text-sm">"How can I improve my React skills?"</p></div><div className="bg-white/20 rounded-lg p-3"><p className="text-sm">I recommend starting with our Advanced React course and practicing with 3 specific projects. Would you like a study plan?</p></div>
                                        <div className="bg-white/10 rounded-lg p-2 text-center">
                                            <button onClick={() => setIsAIModalOpen(true)} className="text-xs text-white/80 hover:text-white transition-colors flex items-center justify-center space-x-1 w-full"><MessageCircle className="w-3 h-3" /><span>Try it now!</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce"><Sparkles className="w-4 h-4 text-yellow-800" /></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerChildren}>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of successful learners who chose MyPathWay to achieve their goals</motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group">Get Started Free <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                            <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">Contact Sales</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;