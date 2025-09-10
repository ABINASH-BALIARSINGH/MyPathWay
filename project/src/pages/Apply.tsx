import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialPlatformDropdown from '../components/SocialPlatformDropdown';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Users, 
  Calendar,
  ExternalLink,
  Bookmark,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Target,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  Zap,
  Brain,
  FileText,
  Upload,
  Download,
  Star,
  ChevronRight,
  Bot,
  Lightbulb,
  Play,
  BarChart3,
  Shield
} from 'lucide-react';

const Apply: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);
  const [applicationStatus, setApplicationStatus] = useState<'idle' | 'filling' | 'simulating' | 'ready'>('idle');
  const [readinessScore, setReadinessScore] = useState(0);

  const categories = [
    { id: 'all', name: 'All Opportunities', icon: Globe },
    { id: 'jobs', name: 'Full-time Jobs', icon: Briefcase },
    { id: 'internships', name: 'Internships', icon: GraduationCap },
    { id: 'micro-internships', name: 'Micro-Internships', icon: Zap },
    { id: 'fellowships', name: 'Fellowships', icon: Award },
    { id: 'scholarships', name: 'Scholarships', icon: Star }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'remote', name: 'Remote' },
    { id: 'hybrid', name: 'Hybrid' },
    { id: 'onsite', name: 'On-site' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'usa', name: 'United States' },
    { id: 'canada', name: 'Canada' },
    { id: 'uk', name: 'United Kingdom' },
    { id: 'germany', name: 'Germany' },
    { id: 'singapore', name: 'Singapore' }
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      type: 'jobs',
      location: 'San Francisco, CA',
      workType: 'hybrid',
      salary: '$120k - $160k',
      experience: '3-5 years',
      deadline: '2024-12-30',
      description: 'Join our team to build next-generation web applications using React and modern technologies.',
      requirements: ['React', 'TypeScript', 'Node.js', 'AWS'],
      benefits: ['Health Insurance', 'Stock Options', 'Remote Work', '401k'],
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      verified: true,
      skillMatch: 92,
      applications: 156,
      microInternship: false
    },
    {
      id: 2,
      title: 'AI Research Intern',
      company: 'DeepMind',
      type: 'internships',
      location: 'London, UK',
      workType: 'onsite',
      salary: '£2,500/month',
      experience: 'Student',
      deadline: '2024-12-25',
      description: 'Work on cutting-edge AI research projects with world-class researchers.',
      requirements: ['Python', 'Machine Learning', 'TensorFlow', 'Research Experience'],
      benefits: ['Mentorship', 'Research Publication', 'Networking'],
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      verified: true,
      skillMatch: 78,
      applications: 89,
      microInternship: false
    },
    {
      id: 3,
      title: 'Frontend Code Review - 1 Week',
      company: 'StartupXYZ',
      type: 'micro-internships',
      location: 'Remote',
      workType: 'remote',
      salary: '$500',
      experience: 'Any',
      deadline: '2024-12-20',
      description: 'Review and improve our React codebase over one week. Perfect for building portfolio.',
      requirements: ['React', 'JavaScript', 'Code Review'],
      benefits: ['Portfolio Project', 'Reference Letter', 'Networking'],
      logo: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      verified: true,
      skillMatch: 95,
      applications: 23,
      microInternship: true
    },
    {
      id: 4,
      title: 'Google AI Fellowship',
      company: 'Google',
      type: 'fellowships',
      location: 'Mountain View, CA',
      workType: 'hybrid',
      salary: '$80k stipend',
      experience: 'PhD Student',
      deadline: '2024-12-31',
      description: 'One-year fellowship program for PhD students working on AI research.',
      requirements: ['PhD in CS/AI', 'Research Publications', 'Machine Learning'],
      benefits: ['Research Funding', 'Mentorship', 'Google Resources'],
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      verified: true,
      skillMatch: 65,
      applications: 234,
      microInternship: false
    }
  ];

  const applicationHistory = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechStart',
      status: 'interview',
      appliedDate: '2024-12-10',
      lastUpdate: '2024-12-14'
    },
    {
      id: 2,
      title: 'React Intern',
      company: 'WebCorp',
      status: 'accepted',
      appliedDate: '2024-12-05',
      lastUpdate: '2024-12-12'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'DesignHub',
      status: 'rejected',
      appliedDate: '2024-12-01',
      lastUpdate: '2024-12-08'
    }
  ];

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || opportunity.type === selectedCategory;
    const matchesType = selectedType === 'all' || opportunity.workType === selectedType;
    const matchesLocation = selectedLocation === 'all' || opportunity.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  const simulateApplication = async (opportunity: any) => {
    setApplicationStatus('filling');
    setSelectedOpportunity(opportunity);
    
    // Simulate auto-fill process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setApplicationStatus('simulating');
    
    // Simulate pre-application tests
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Calculate readiness score
    const score = Math.floor(Math.random() * 30) + 70; // 70-100
    setReadinessScore(score);
    setApplicationStatus('ready');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'text-green-600 bg-green-100';
      case 'interview': return 'text-blue-600 bg-blue-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days left`;
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

  if (applicationStatus !== 'idle') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            {applicationStatus === 'filling' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Auto-Fill Assistant</h2>
                <p className="text-gray-600 mb-6">Analyzing your profile and auto-filling application...</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <motion.div 
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2 }}
                  />
                </div>
                <p className="text-sm text-gray-500">Using your MyPathWay profile data...</p>
              </div>
            )}

            {applicationStatus === 'simulating' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-purple-600 animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Application Simulation</h2>
                <p className="text-gray-600 mb-6">Running screening tests and resume analysis...</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Resume Scanner</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Technical Assessment</span>
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Behavioral Questions</span>
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  </div>
                </div>
              </div>
            )}

            {applicationStatus === 'ready' && (
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  readinessScore >= 85 ? 'bg-green-100' : readinessScore >= 70 ? 'bg-yellow-100' : 'bg-red-100'
                }`}>
                  <span className={`text-2xl font-bold ${
                    readinessScore >= 85 ? 'text-green-600' : readinessScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {readinessScore}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Readiness Score</h2>
                <p className="text-gray-600 mb-8">
                  {readinessScore >= 85 ? 'Excellent! You\'re well-prepared for this application.' :
                   readinessScore >= 70 ? 'Good preparation! Consider reviewing a few areas.' :
                   'Some preparation needed. Check our recommendations below.'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Resume Match</h3>
                    <p className="text-2xl font-bold text-blue-600">92%</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <Brain className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Skill Alignment</h3>
                    <p className="text-2xl font-bold text-green-600">88%</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Interview Prep</h3>
                    <p className="text-2xl font-bold text-purple-600">75%</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all">
                    Submit Application
                  </button>
                  <button 
                    onClick={() => setApplicationStatus('idle')}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Back to Opportunities
                  </button>
                </div>
              </div>
            )}
          </motion.div>
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
            Opportunity Connector
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover jobs, internships, and opportunities with AI-powered application assistance
          </motion.p>
        </motion.div>

        {/* Social Platform Buttons */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <motion.div variants={fadeInUp}>
            <SocialPlatformDropdown type="internship" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SocialPlatformDropdown type="jobs" />
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
            <motion.div variants={fadeInUp} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
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

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Opportunities List */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {filteredOpportunities.map(opportunity => (
                <motion.div
                  key={opportunity.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={opportunity.logo}
                        alt={opportunity.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                          {opportunity.verified && (
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                          )}
                          {opportunity.microInternship && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                              MICRO
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 font-medium">{opportunity.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{opportunity.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{opportunity.workType}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{opportunity.salary}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        opportunity.skillMatch >= 90 ? 'bg-green-100 text-green-800' :
                        opportunity.skillMatch >= 70 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {opportunity.skillMatch}% Match
                      </span>
                      <p className="text-sm text-gray-500 mt-2">{formatDeadline(opportunity.deadline)}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{opportunity.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {opportunity.requirements.map(req => (
                      <span key={req} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {req}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{opportunity.applications} applicants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Posted 2 days ago</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => simulateApplication(opportunity)}
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2"
                      >
                        <Bot className="w-4 h-4" />
                        <span>Smart Apply</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-6"
          >
            {/* Application History */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application History</h3>
              <div className="space-y-4">
                {applicationHistory.map(app => (
                  <div key={app.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{app.title}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{app.company}</p>
                    <p className="text-xs text-gray-500">Applied {app.appliedDate}</p>
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
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">Resume Builder</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
                  <Target className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Interview Prep</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-900">Skill Assessment</span>
                </button>
              </div>
            </motion.div>

            {/* Recommended for You */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                Recommended for You
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm">React Developer Course</h4>
                  <p className="text-xs text-gray-600 mt-1">Boost your React skills for better job matches</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm">Portfolio Review</h4>
                  <p className="text-xs text-gray-600 mt-1">Get expert feedback on your projects</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm">Mock Interview</h4>
                  <p className="text-xs text-gray-600 mt-1">Practice with AI interviewer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Apply;