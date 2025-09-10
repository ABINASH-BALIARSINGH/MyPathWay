import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap,
  Upload,
  Download,
  Edit,
  Save,
  Camera,
  FileText,
  Award,
  Star,
  TrendingUp,
  Target,
  BookOpen,
  Clock,
  CheckCircle
} from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'User',
    email: 'user@MyPathWay.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate learner focused on web development and data science. Always eager to take on new challenges and grow professionally.',
    title: 'Full Stack Developer',
    company: 'Tech Innovations Inc.',
    experience: '3 years',
    education: 'Bachelor of Computer Science',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS'],
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
  });

  const [achievements] = useState([
    { title: 'React Expert', date: '2024-11-15', icon: Award, color: 'text-blue-600' },
    { title: 'JavaScript Master', date: '2024-10-20', icon: Star, color: 'text-yellow-600' },
    { title: 'Problem Solver', date: '2024-09-10', icon: Target, color: 'text-green-600' },
    { title: 'Quick Learner', date: '2024-08-05', icon: TrendingUp, color: 'text-purple-600' }
  ]);

  const [stats] = useState({
    coursesCompleted: 15,
    certificatesEarned: 8,
    hoursLearned: 240,
    streakDays: 45
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillAdd = (skill: string) => {
    if (skill && !profileData.skills.includes(skill)) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Profile saved:', profileData);
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-8"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
              <p className="text-gray-600 dark:text-gray-300">Manage your personal information and preferences</p>
            </div>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="lg:col-span-2 space-y-8"
          >
            {/* Basic Information */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-start space-x-6">
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={profileData.avatar}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {isEditing && (
                    <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Basic Info */}
                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="text-3xl font-bold bg-transparent border-b-2 border-blue-600 focus:outline-none text-gray-900 dark:text-white w-full"
                      />
                      <input
                        type="text"
                        value={profileData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="text-xl bg-transparent border-b border-gray-300 focus:outline-none text-blue-600 w-full"
                      />
                      <textarea
                        value={profileData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        rows={3}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{profileData.name}</h2>
                      <p className="text-xl text-blue-600 mb-4">{profileData.title}</p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{profileData.bio}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">{profileData.email}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">{profileData.phone}</span>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">{profileData.location}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">{profileData.company}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {profileData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium flex items-center space-x-2"
                  >
                    <span>{skill}</span>
                    {isEditing && (
                      <button
                        onClick={() => handleSkillRemove(skill)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                      >
                        ×
                      </button>
                    )}
                  </span>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const skill = prompt('Enter a new skill:');
                      if (skill) handleSkillAdd(skill);
                    }}
                    className="px-4 py-2 border-2 border-dashed border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    + Add Skill
                  </button>
                )}
              </div>
            </motion.div>

            {/* Resume Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Resume</h3>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-4">Upload your resume to showcase your experience</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Upload Resume</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download Current</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-8"
          >
            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Learning Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600 dark:text-gray-300">Courses</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{stats.coursesCompleted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600 dark:text-gray-300">Certificates</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{stats.certificatesEarned}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-600 dark:text-gray-300">Hours</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{stats.hoursLearned}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-600 dark:text-gray-300">Streak</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{stats.streakDays} days</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center`}>
                      <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{achievement.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  <Download className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Download Certificate</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Verify Skills</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                  <Star className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Share Profile</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;