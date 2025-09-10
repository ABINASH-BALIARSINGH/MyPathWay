import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle,
  Coffee,
  Laptop,
  Lightbulb,
  Target,
  TrendingUp,
  Star
} from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Positions' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Bhubaneswar, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our core engineering team to build scalable learning platforms and AI-powered features.',
      requirements: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Design intuitive and engaging user experiences for our adaptive learning platform.',
      requirements: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'product',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Lead product strategy and roadmap for our innovative learning and career platform.',
      requirements: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Bhubaneswar, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and maintain our cloud infrastructure to support millions of learners.',
      requirements: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Content Marketing Specialist',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Create compelling content to engage our learning community and drive growth.',
      requirements: ['Content Strategy', 'SEO', 'Social Media', 'Analytics'],
      posted: '1 week ago'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Laptop,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours and remote options'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Continuous learning budget and career development programs'
    },
    {
      icon: Coffee,
      title: 'Great Culture',
      description: 'Collaborative environment with team events and celebrations'
    },
    {
      icon: Award,
      title: 'Competitive Package',
      description: 'Attractive salary, equity options, and performance bonuses'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on products that empower learners worldwide'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries to create better learning experiences'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe great things happen when diverse minds work together'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure success by the positive change we create in learners\' lives'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for quality in everything we do, from code to user experience'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

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
          className="text-center mb-16"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Help us build the future of adaptive digital learning and empower millions of learners worldwide
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="dark:text-gray-300">50+ Team Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="dark:text-gray-300">Remote-First Culture</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span className="dark:text-gray-300">Fast Growing</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape our culture
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive environment for your growth
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our team and help shape the future of digital learning
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <motion.div 
            variants={staggerChildren}
            className="space-y-6"
          >
            {filteredPositions.map((position) => (
              <motion.div
                key={position.id}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span>Posted {position.posted}</span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPositions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Briefcase className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No positions available</h3>
              <p className="text-gray-600 dark:text-gray-400">Check back soon for new opportunities in this department.</p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl text-white p-8 md:p-12 text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-4"
          >
            Don't See the Right Role?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-blue-100 dark:text-blue-200 text-lg mb-8 max-w-2xl mx-auto"
          >
            We're always looking for talented individuals who share our passion for education and innovation. 
            Send us your resume and let's explore opportunities together.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Send Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;