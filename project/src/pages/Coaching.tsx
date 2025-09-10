import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  GraduationCap, 
  Building, 
  User, 
  MessageCircle, 
  Video, 
  FileText, 
  BookOpen,
  BarChart3,
  Calendar,
  Settings,
  Bell,
  Search,
  Send,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Monitor,
  Phone,
  PhoneOff,
  MoreVertical,
  ThumbsUp,
  Heart,
  Smile,
  PlusCircle,
  Download,
  Upload,
  Edit,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Award,
  Target,
  TrendingUp,
  Globe,
  Zap,
  Brain,
  Lightbulb
} from 'lucide-react';

const Coaching: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'John Doe', message: 'Great explanation!', time: '10:30 AM', type: 'chat' },
    { id: 2, user: 'Sarah Kim', message: 'Can you repeat the last part?', time: '10:32 AM', type: 'chat' },
    { id: 3, user: 'System', message: 'Poll started: What is React?', time: '10:35 AM', type: 'poll' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [activePoll, setActivePoll] = useState({
    question: 'What is the main benefit of React hooks?',
    options: ['State management', 'Performance', 'Code reusability', 'All of the above'],
    votes: [12, 8, 15, 25],
    isActive: true
  });

  const roles = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access courses, join live sessions, and track your progress',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'college-trainer',
      title: 'College Trainer',
      description: 'Teach college students and manage academic courses',
      icon: Building,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'institute-trainer',
      title: 'Institute Trainer',
      description: 'Conduct professional training programs and workshops',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'corporate-trainer',
      title: 'Corporate Trainer',
      description: 'Deliver corporate training and skill development programs',
      icon: Building,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'other-trainer',
      title: 'Other Trainer',
      description: 'Specialized training in soft skills, aptitude, and more',
      icon: User,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const dashboardStats = {
    student: [
      { label: 'Courses Enrolled', value: '12', icon: BookOpen, color: 'text-blue-600' },
      { label: 'Live Sessions', value: '8', icon: Video, color: 'text-green-600' },
      { label: 'Assignments', value: '15', icon: FileText, color: 'text-purple-600' },
      { label: 'Progress', value: '78%', icon: TrendingUp, color: 'text-orange-600' }
    ],
    trainer: [
      { label: 'Active Students', value: '156', icon: Users, color: 'text-blue-600' },
      { label: 'Live Sessions', value: '24', icon: Video, color: 'text-green-600' },
      { label: 'Course Materials', value: '89', icon: FileText, color: 'text-purple-600' },
      { label: 'Completion Rate', value: '92%', icon: Award, color: 'text-orange-600' }
    ]
  };

  const upcomingSessions = [
    {
      id: 1,
      title: 'React Fundamentals',
      time: '2:00 PM - 3:30 PM',
      date: 'Today',
      participants: 45,
      type: 'Live Class'
    },
    {
      id: 2,
      title: 'JavaScript Advanced Concepts',
      time: '10:00 AM - 11:30 AM',
      date: 'Tomorrow',
      participants: 32,
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'Career Guidance Session',
      time: '4:00 PM - 5:00 PM',
      date: 'Dec 18',
      participants: 78,
      type: 'Webinar'
    }
  ];

  const courseNotes = [
    {
      id: 1,
      title: 'React Hooks Overview',
      subject: 'React Development',
      date: 'Dec 15, 2024',
      size: '2.4 MB',
      type: 'PDF'
    },
    {
      id: 2,
      title: 'JavaScript ES6 Features',
      subject: 'JavaScript',
      date: 'Dec 14, 2024',
      size: '1.8 MB',
      type: 'PDF'
    },
    {
      id: 3,
      title: 'Database Design Principles',
      subject: 'Database',
      date: 'Dec 13, 2024',
      size: '3.2 MB',
      type: 'PDF'
    }
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setActiveTab('dashboard');
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        user: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'chat' as const
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  const handlePollVote = (optionIndex: number) => {
    const newVotes = [...activePoll.votes];
    newVotes[optionIndex]++;
    setActivePoll({ ...activePoll, votes: newVotes });
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

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Coaching Hub</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Choose your role to access personalized learning and teaching tools
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {roles.map((role) => (
              <motion.div
                key={role.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleRoleSelect(role.id)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all group"
              >
                <div className={`h-2 bg-gradient-to-r ${role.color}`} />
                
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{role.description}</p>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                    Select Role
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  if (isInMeeting) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col">
        {/* Meeting Header */}
        <div className="bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-white font-semibold">React Fundamentals - Live Session</h2>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">LIVE</span>
            <span className="text-gray-300 text-sm">45 participants</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 text-sm">2:15 PM</span>
            <button
              onClick={() => setIsInMeeting(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <PhoneOff className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Main Video Area */}
          <div className="flex-1 bg-gray-800 flex items-center justify-center relative">
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold">Instructor Screen</h3>
                <p className="text-gray-300">Sharing presentation...</p>
              </div>
            </div>

            {/* Screen Share Controls */}
            {selectedRole !== 'student' && (
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
                  <Monitor className="w-4 h-4" />
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Chat and Poll Sidebar */}
          <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm">
                  Chat
                </button>
                <button className="flex-1 bg-gray-700 text-gray-300 py-2 rounded-lg text-sm">
                  Poll
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`${msg.type === 'poll' ? 'bg-purple-900/50' : 'bg-gray-700'} p-3 rounded-lg`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-blue-400 text-sm font-medium">{msg.user}</span>
                    <span className="text-gray-400 text-xs">{msg.time}</span>
                  </div>
                  <p className="text-white text-sm">{msg.message}</p>
                </div>
              ))}

              {/* Active Poll */}
              {activePoll.isActive && (
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-3">{activePoll.question}</h4>
                  <div className="space-y-2">
                    {activePoll.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handlePollVote(index)}
                        className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span>{option}</span>
                          <span className="text-purple-400">{activePoll.votes[index]}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Meeting Controls */}
        <div className="bg-gray-800 p-4 flex items-center justify-center space-x-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-full ${isMuted ? 'bg-red-600' : 'bg-gray-600'} hover:bg-opacity-80 transition-colors`}
          >
            {isMuted ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
          </button>
          <button
            onClick={() => setIsCameraOff(!isCameraOff)}
            className={`p-3 rounded-full ${isCameraOff ? 'bg-red-600' : 'bg-gray-600'} hover:bg-opacity-80 transition-colors`}
          >
            {isCameraOff ? <CameraOff className="w-5 h-5 text-white" /> : <Camera className="w-5 h-5 text-white" />}
          </button>
          <button className="p-3 rounded-full bg-gray-600 hover:bg-opacity-80 transition-colors">
            <Monitor className="w-5 h-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-gray-600 hover:bg-opacity-80 transition-colors">
            <MoreVertical className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    );
  }

  const currentRole = roles.find(r => r.id === selectedRole);
  const isTrainer = selectedRole !== 'student';
  const stats = isTrainer ? dashboardStats.trainer : dashboardStats.student;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${currentRole?.color} rounded-xl flex items-center justify-center`}>
              {currentRole && <currentRole.icon className="w-6 h-6 text-white" />}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{currentRole?.title} Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300">Welcome back! Here's your overview.</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedRole(null)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Switch Role
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-200 dark:bg-gray-800 rounded-lg p-1 mb-8">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'messages', label: 'Messages', icon: MessageCircle },
            { id: 'meetings', label: 'Live Meetings', icon: Video },
            { id: 'notes', label: 'Notes', icon: FileText },
            { id: 'courses', label: 'Courses', icon: BookOpen }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Sessions</h2>
                {isTrainer && (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Schedule New
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Video className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{session.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{session.date} • {session.time}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{session.participants} participants • {session.type}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsInMeeting(true)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Other tab contents would go here */}
        {activeTab === 'notes' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Course Notes</h2>
              {isTrainer && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Upload Note
                </button>
              )}
            </div>
            <div className="space-y-4">
              {courseNotes.map((note) => (
                <div key={note.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{note.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{note.subject} • {note.date}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{note.type} • {note.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Access Full Course Library</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Explore our comprehensive course collection with interactive content and assessments.
              </p>
              <a
                href="/courses"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>Browse Courses</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coaching;