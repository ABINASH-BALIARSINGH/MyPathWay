import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Globe, 
  TrendingUp, 
  Clock, 
  Eye, 
  Heart, 
  Share2, 
  BookOpen,
  Lightbulb,
  MapPin,
  Calendar,
  Tag,
  ExternalLink,
  Play,
  Users,
  Brain,
  Zap,
  Target,
  Award,
  ChevronRight,
  Star,
  MessageCircle,
  Bookmark,
  ThumbsUp,
  Sparkles
} from 'lucide-react';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [viewMode, setViewMode] = useState<'feed' | 'map' | 'trends'>('feed');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All News', icon: Globe },
    { id: 'ai-ml', name: 'AI & ML', icon: Brain },
    { id: 'web-dev', name: 'Web Development', icon: BookOpen },
    { id: 'data-science', name: 'Data Science', icon: TrendingUp },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Target },
    { id: 'career', name: 'Career', icon: Award }
  ];

  const regions = [
    { id: 'global', name: 'Global' },
    { id: 'north-america', name: 'North America' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'africa', name: 'Africa' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'OpenAI Releases GPT-5: Revolutionary Breakthrough in AI Reasoning',
      summary: 'The latest model shows unprecedented capabilities in complex problem-solving and multi-step reasoning tasks.',
      content: 'OpenAI has unveiled GPT-5, marking a significant leap forward in artificial intelligence capabilities...',
      category: 'ai-ml',
      region: 'global',
      author: 'Dr. Sarah Chen',
      publishedAt: '2024-12-15T10:30:00Z',
      readTime: 8,
      views: 15420,
      likes: 892,
      comments: 156,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      tags: ['AI', 'GPT-5', 'Machine Learning', 'OpenAI'],
      trending: true,
      skillMatch: 95,
      relatedCourses: ['Advanced Machine Learning', 'Natural Language Processing'],
      interviewQuestions: [
        'How would you implement a similar reasoning system?',
        'What are the ethical implications of advanced AI?'
      ]
    },
    {
      id: 2,
      title: 'React 19 Beta: Concurrent Features and Server Components',
      summary: 'New React version introduces game-changing features for modern web development.',
      content: 'React 19 beta brings revolutionary concurrent features and enhanced server components...',
      category: 'web-dev',
      region: 'global',
      author: 'Mike Rodriguez',
      publishedAt: '2024-12-14T14:15:00Z',
      readTime: 6,
      views: 8930,
      likes: 567,
      comments: 89,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
      skillMatch: 88,
      relatedCourses: ['Advanced React Development', 'Modern JavaScript'],
      interviewQuestions: [
        'Explain the benefits of concurrent rendering',
        'How do server components improve performance?'
      ]
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthrough: IBM Achieves 1000-Qubit Processor',
      summary: 'IBM\'s latest quantum processor marks a milestone in quantum computing development.',
      content: 'IBM has successfully developed a 1000-qubit quantum processor, bringing us closer to practical quantum computing...',
      category: 'ai-ml',
      region: 'north-america',
      author: 'Dr. Lisa Park',
      publishedAt: '2024-12-13T09:45:00Z',
      readTime: 10,
      views: 12750,
      likes: 734,
      comments: 203,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      tags: ['Quantum Computing', 'IBM', 'Technology', 'Innovation'],
      skillMatch: 72,
      relatedCourses: ['Quantum Computing Fundamentals', 'Advanced Physics'],
      interviewQuestions: [
        'What are the practical applications of quantum computing?',
        'How does quantum supremacy impact current computing?'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Alert: New Zero-Day Vulnerability in Popular Framework',
      summary: 'Security researchers discover critical vulnerability affecting millions of applications.',
      content: 'A critical zero-day vulnerability has been discovered in a widely-used web framework...',
      category: 'cybersecurity',
      region: 'global',
      author: 'Alex Thompson',
      publishedAt: '2024-12-12T16:20:00Z',
      readTime: 5,
      views: 6840,
      likes: 423,
      comments: 67,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      tags: ['Cybersecurity', 'Vulnerability', 'Security', 'Framework'],
      urgent: true,
      skillMatch: 91,
      relatedCourses: ['Ethical Hacking', 'Web Security'],
      interviewQuestions: [
        'How would you mitigate this type of vulnerability?',
        'What security measures should be implemented?'
      ]
    }
  ];

  const trendingSkills = [
    { skill: 'Artificial Intelligence', growth: '+45%', region: 'Global', color: 'bg-purple-500' },
    { skill: 'Cloud Computing', growth: '+38%', region: 'North America', color: 'bg-blue-500' },
    { skill: 'Cybersecurity', growth: '+42%', region: 'Europe', color: 'bg-red-500' },
    { skill: 'Data Science', growth: '+35%', region: 'Asia', color: 'bg-green-500' },
    { skill: 'DevOps', growth: '+29%', region: 'Global', color: 'bg-orange-500' }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesRegion = selectedRegion === 'global' || article.region === selectedRegion;

    return matchesSearch && matchesCategory && matchesRegion;
  });

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>Back to News</span>
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedArticle.urgent ? 'bg-red-100 text-red-800' :
                  selectedArticle.trending ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {selectedArticle.urgent ? 'URGENT' : selectedArticle.trending ? 'TRENDING' : 'NEWS'}
                </span>
                <span className="text-sm text-gray-500">{formatTimeAgo(selectedArticle.publishedAt)}</span>
                <span className="text-sm text-gray-500">{selectedArticle.readTime} min read</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{selectedArticle.summary}</p>
              
              <div className="flex items-center space-x-6 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedArticle.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedArticle.likes}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedArticle.comments}</span>
                </div>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <Bookmark className="w-4 h-4" />
                  <span className="text-sm">Save</span>
                </button>
              </div>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">{selectedArticle.content}</p>
              </div>

              {/* AI-Generated Learning Bridge */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                  AI Learning Bridge
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Related Courses</h4>
                    <div className="space-y-2">
                      {selectedArticle.relatedCourses.map((course: string, index: number) => (
                        <button key={index} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                          <Play className="w-4 h-4" />
                          <span className="text-sm">{course}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Interview Questions</h4>
                    <div className="space-y-2">
                      {selectedArticle.interviewQuestions.map((question: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-green-500 mt-0.5" />
                          <span className="text-sm text-gray-700">{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="text-center mb-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Intelligent News Hub
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Stay ahead with AI-curated news, skill trends, and career-aligned learning opportunities
          </motion.p>
        </motion.div>

        {/* View Mode Selector */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="flex justify-center mb-8"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex space-x-1">
              {[
                { id: 'feed', label: 'News Feed', icon: Globe },
                { id: 'map', label: 'Skill Trends', icon: TrendingUp },
                { id: 'trends', label: 'Global Map', icon: MapPin }
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                    viewMode === mode.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <mode.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{mode.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {viewMode === 'feed' && (
          <>
            {/* Search and Filters */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                <motion.div variants={fadeInUp} className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search news, technologies, or topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {regions.map(region => (
                      <option key={region.id} value={region.id}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>
            </motion.div>

            {/* News Grid */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {filteredArticles.map(article => (
                    <motion.article
                      key={article.id}
                      variants={fadeInUp}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            {article.urgent && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                                URGENT
                              </span>
                            )}
                            {article.trending && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                TRENDING
                              </span>
                            )}
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              article.skillMatch >= 90 ? 'bg-green-100 text-green-800' :
                              article.skillMatch >= 70 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {article.skillMatch}% Match
                            </span>
                          </div>

                          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-2">{article.summary}</p>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-4">
                              <span>by {article.author}</span>
                              <span>{formatTimeAgo(article.publishedAt)}</span>
                              <span>{article.readTime} min read</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {article.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{article.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span>{article.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Trending Skills */}
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    Trending Skills
                  </h3>
                  <div className="space-y-4">
                    {trendingSkills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${skill.color}`} />
                          <div>
                            <div className="font-medium text-gray-900">{skill.skill}</div>
                            <div className="text-xs text-gray-500">{skill.region}</div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-green-600">{skill.growth}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                      <Brain className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900">AI News Digest</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
                      <Target className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">Mock Interview</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-gray-900">Related Courses</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}

        {viewMode === 'map' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technology Insights Gallery</h2>
            
            {/* Image Gallery */}
            <ImageGallery />
            
            {/* Trending Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {trendingSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.skill}</h3>
                    <span className="text-2xl font-bold text-green-600">{skill.growth}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{skill.region}</span>
                  </div>
                  <div className={`h-2 rounded-full ${skill.color} opacity-20 mb-4`}>
                    <div className={`h-2 rounded-full ${skill.color} w-3/4`} />
                  </div>
                  <button className="w-full bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                    View Details
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {viewMode === 'trends' && (
          <div className="space-y-8">
            {/* Technology Insights Feature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technology Insights</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                  Deep dive into the technologies that are shaping our world. From AI to cybersecurity, 
                  explore how different regions contribute to global innovation.
                </p>
                
                <motion.button
                  onClick={() => window.open('https://candid-buttercream-e156f3.netlify.app/', '_blank', 'noopener,noreferrer')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-blue-500 to-purple-600"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-75 blur-lg group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Explore Technology Insights</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  
                  {/* Pulse rings */}
                  <div className="absolute inset-0 rounded-xl">
                    <div className="absolute inset-0 rounded-xl bg-white/20 animate-ping" />
                    <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse" />
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Trending Skills Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {trendingSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.skill}</h3>
                    <span className="text-2xl font-bold text-green-600">{skill.growth}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.region}</span>
                  </div>
                  <div className={`h-2 rounded-full ${skill.color} opacity-20 mb-4`}>
                    <div className={`h-2 rounded-full ${skill.color} w-3/4`} />
                  </div>
                  <button className="w-full bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    View Details
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

// Image Gallery Component
const ImageGallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const images = [
    { src: '/1.png', title: 'Country-wise Technology Contribution', description: 'Global technology distribution across different sectors' },
    { src: '/2.png', title: 'Job Opportunities vs Layoffs', description: 'Employment trends in technology sector by country' },
    { src: '/3.png', title: 'India\'s Technology Sector', description: 'Breakdown of India\'s contribution to global tech' },
    { src: '/4.png', title: 'AI vs Job Opportunities Trend', description: 'Correlation between AI advancement and job market' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };
  return (
    <>
      <div className="relative bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
        <div className="relative h-96">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].title}
            className="w-full h-full object-contain cursor-pointer"
            onClick={openFullscreen}
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Image Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold mb-2">{images[currentImage].title}</h3>
            <p className="text-gray-200 text-sm">{images[currentImage].description}</p>
          </div>
        </div>
        {/* Thumbnail Navigation */}
        <div className="flex space-x-2 p-4 bg-white dark:bg-gray-800">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === index 
                  ? 'border-blue-500 scale-110' 
                  : 'border-gray-300 dark:border-gray-600 hover:border-blue-300'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImage].src}
                alt={images[currentImage].title}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <span className="w-6 h-6 flex items-center justify-center text-xl">×</span>
              </button>
              {/* Navigation in Fullscreen */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8 rotate-180" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4">
                <h3 className="text-white text-2xl font-semibold mb-2">{images[currentImage].title}</h3>
                <p className="text-gray-200">{images[currentImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default News;