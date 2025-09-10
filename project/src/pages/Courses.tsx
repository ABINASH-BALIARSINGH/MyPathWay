import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Star, Users, BookOpen, Play, FileText, Headphones } from 'lucide-react';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [activeTab, setActiveTab] = useState('courses');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'free', name: 'Free' },
    { id: 'paid', name: 'Paid' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete React Development Course',
      description: 'Master React from basics to advanced concepts including hooks, context, and testing',
      instructor: 'Sarah Johnson',
      duration: '12 weeks',
      level: 'intermediate',
      category: 'programming',
      type: 'paid',
      price: '$89',
      rating: 4.9,
      students: 15420,
      lessons: 45,
      thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      title: 'Python for Data Science',
      description: 'Learn Python programming with focus on data analysis, visualization, and machine learning',
      instructor: 'Dr. Michael Chen',
      duration: '10 weeks',
      level: 'beginner',
      category: 'data-science',
      type: 'free',
      price: 'Free',
      rating: 4.8,
      students: 23150,
      lessons: 38,
      thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      tags: ['Python', 'Data Science', 'Machine Learning']
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      description: 'Create beautiful and functional user interfaces with modern design principles',
      instructor: 'Emily Rodriguez',
      duration: '8 weeks',
      level: 'beginner',
      category: 'design',
      type: 'paid',
      price: '$69',
      rating: 4.7,
      students: 8930,
      lessons: 32,
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      tags: ['Design', 'UI/UX', 'Figma']
    },
    {
      id: 4,
      title: 'Digital Marketing Mastery',
      description: 'Complete guide to digital marketing including SEO, social media, and paid advertising',
      instructor: 'James Wilson',
      duration: '14 weeks',
      level: 'intermediate',
      category: 'marketing',
      type: 'paid',
      price: '$129',
      rating: 4.6,
      students: 12580,
      lessons: 52,
      thumbnail: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      tags: ['Marketing', 'SEO', 'Social Media']
    },
    {
      id: 5,
      title: 'Machine Learning with TensorFlow',
      description: 'Build and deploy machine learning models using TensorFlow and Python',
      instructor: 'Dr. Lisa Park',
      duration: '16 weeks',
      level: 'advanced',
      category: 'data-science',
      type: 'paid',
      price: '$159',
      rating: 4.9,
      students: 7420,
      lessons: 68,
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      tags: ['Machine Learning', 'TensorFlow', 'AI']
    },
    {
      id: 6,
      title: 'Business Strategy & Planning',
      description: 'Learn strategic planning, market analysis, and business development techniques',
      instructor: 'Robert Martinez',
      duration: '6 weeks',
      level: 'intermediate',
      category: 'business',
      type: 'free',
      price: 'Free',
      rating: 4.5,
      students: 19870,
      lessons: 24,
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      tags: ['Business', 'Strategy', 'Planning']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesType = selectedType === 'all' || course.type === selectedType;

    return matchesSearch && matchesCategory && matchesLevel && matchesType;
  });

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Learning Hub
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-300"
          >
            Discover courses that will help you advance your career
          </motion.p>
        </motion.div>
        {/* Tab Navigation */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="flex justify-center mb-8"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-xl p-1 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex space-x-1">
              {[
                { id: 'courses', label: 'Video Courses', icon: Play },
                { id: 'reading', label: 'Reading Materials', icon: FileText },
                { id: 'audio', label: 'Audio Lessons', icon: Headphones }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <motion.div variants={fadeInUp} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab === 'courses' ? 'courses' : activeTab === 'reading' ? 'books and articles' : 'podcasts and audio lessons'}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </motion.div>

            {/* Filters */}
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
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-6"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-300"
          >
            Found {filteredCourses.length} {activeTab === 'courses' ? 'courses' : activeTab === 'reading' ? 'reading materials' : 'audio lessons'}
          </motion.p>
        </motion.div>

        {/* Content based on active tab */}
        {activeTab === 'courses' && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map(course => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.type === 'free' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {course.price}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-blue-600 p-3 rounded-full">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      course.level === 'beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="mr-4">by {course.instructor}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {course.lessons} lessons
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {course.type === 'free' ? 'Enroll Now' : 'Enroll Now'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Reading Materials */}
        {activeTab === 'reading' && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', pages: 1096, rating: 4.8, category: 'Programming', free: false },
              { title: 'You Don\'t Know JS', author: 'Kyle Simpson', pages: 278, rating: 4.9, category: 'Programming', free: true },
              { title: 'Clean Code', author: 'Robert Martin', pages: 464, rating: 4.7, category: 'Programming', free: false },
              { title: 'Design Patterns', author: 'Gang of Four', pages: 395, rating: 4.6, category: 'Programming', free: false },
              { title: 'The Pragmatic Programmer', author: 'Andy Hunt', pages: 352, rating: 4.8, category: 'Programming', free: false },
              { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', pages: 472, rating: 4.5, category: 'Programming', free: true }
            ].map((book, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{book.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">by {book.author}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{book.pages} pages</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{book.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        book.free ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {book.free ? 'Free' : 'Premium'}
                      </span>
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                        Read Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Audio Lessons */}
        {activeTab === 'audio' && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { title: 'Tech Talk Daily', host: 'Sarah Johnson', episodes: 245, duration: '30 min avg', category: 'Technology', rating: 4.8 },
              { title: 'Code Newbie Podcast', host: 'Saron Yitbarek', episodes: 180, duration: '45 min avg', category: 'Programming', rating: 4.7 },
              { title: 'The Changelog', host: 'Adam Stacoviak', episodes: 420, duration: '60 min avg', category: 'Open Source', rating: 4.9 },
              { title: 'JavaScript Jabber', host: 'Charles Max Wood', episodes: 380, duration: '50 min avg', category: 'JavaScript', rating: 4.6 },
              { title: 'React Podcast', host: 'Michael Chan', episodes: 120, duration: '35 min avg', category: 'React', rating: 4.8 },
              { title: 'Full Stack Radio', host: 'Adam Wathan', episodes: 150, duration: '40 min avg', category: 'Web Development', rating: 4.7 }
            ].map((podcast, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{podcast.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Hosted by {podcast.host}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{podcast.episodes} episodes</span>
                      <span>{podcast.duration}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{podcast.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                        {podcast.category}
                      </span>
                      <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                        <Play className="w-4 h-4" />
                        <span>Listen</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No {activeTab} found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Courses;