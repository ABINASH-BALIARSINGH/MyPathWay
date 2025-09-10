import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  Globe, 
  Heart,
  BookOpen,
  Brain,
  Zap,
  TrendingUp,
  Shield,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Debadatta Rout",
      role: "Full Stack Developer",
      email: "routdebadatta22@gmail.com",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      skills: ["React", "Node.js", "AI Integration"]
    },
    {
      name: "Karishma Afrin",
      role: "UI/UX Designer",
      email: "karishmaafrin@gmail.com",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      skills: ["Design Systems", "User Research", "Prototyping"]
    },
    {
      name: "Gyana Ranjan Sahoo",
      role: "Backend Engineer",
      email: "gyanaranjan0033@gmail.com",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      skills: ["Database Design", "API Development", "Security"]
    },
    {
      name: "Smrutirekha Sethi",
      role: "Data Scientist",
      email: "is20169smrutirekhasethi@gmail.com",
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      skills: ["Machine Learning", "Analytics", "AI Models"]
    },
    {
      name: "Anuj Agrawal",
      role: "Product Manager",
      email: "anujagrawal2089@gmail.com",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      skills: ["Strategy", "User Experience", "Project Management"]
    }
  ];

  const highlights = [
    {
      icon: Users,
      title: "Dashboard Tracking",
      description: "Progress, achievements, and skill trends monitoring"
    },
    {
      icon: Brain,
      title: "Smart Practice Center",
      description: "AI-powered quiz modes with personalized feedback"
    },
    {
      icon: BookOpen,
      title: "Course Library",
      description: "Video, reading, and interactive content"
    },
    {
      icon: Award,
      title: "Test & Certification",
      description: "Mock exams and certificate generation"
    },
    {
      icon: Star,
      title: "Badge System",
      description: "Gamified learning with achievement rewards"
    },
    {
      icon: Globe,
      title: "News & Trends Hub",
      description: "Real-time tech news linked to micro-courses"
    },
    {
      icon: Target,
      title: "Opportunity Portal",
      description: "Explore and apply to internships and courses"
    },
    {
      icon: Shield,
      title: "Admin Tools",
      description: "Comprehensive user and content management"
    }
  ];

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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MyPathWay</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Adaptive Digital Empowerment Platform
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="prose max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg mb-6">
              We are a group of five passionate undergraduate students from <strong>C.V. Raman Global University, Bhubaneswar</strong>, 
              who came together to participate in the Infosys Hackathon. During the event, we encountered a pressing problem statement 
              that deeply resonated with us — <em>"Digital Empowerment through Skilling"</em>. It challenged us to ideate and implement 
              a sustainable, scalable, and inclusive digital platform that can empower individuals by helping them acquire relevant 
              skills and access real-world opportunities.
            </p>

            <p className="text-lg mb-6">
              Driven by our shared commitment to innovation and societal impact, we envisioned and created <strong>MyPathWay</strong>, 
              an Adaptive Digital Empowerment Platform — not just as a project for a hackathon, but as a continuous mission to 
              contribute a meaningful solution to a global challenge.
            </p>
          </motion.div>
        </motion.div>

        {/* What is MyPathWay */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🌐 What is MyPathWay?</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              MyPathWay is a comprehensive, AI-powered digital learning and opportunity platform designed to bridge the gap 
              between skill development and real-world application. We've built this solution to cater to students, freshers, 
              working professionals, and lifelong learners who want to learn, grow, practice, and apply their skills meaningfully.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Personalized Learning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Mock Tests</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Certifications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Career Tools</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Problem Statement Table */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📌 Problem Statement & Our Approach</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Problem Area</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Our Approach (MyPathWay Solution)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-6 text-gray-900 dark:text-white font-medium">
                      Lack of personalized, adaptive learning platforms
                    </td>
                    <td className="px-6 py-6 text-gray-700 dark:text-gray-300">
                      We use AI to personalize course suggestions, adapt quiz difficulty based on facial emotion detection, 
                      and provide smart learning progress dashboards.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-6 text-gray-900 dark:text-white font-medium">
                      Fragmented skill development and job portals
                    </td>
                    <td className="px-6 py-6 text-gray-700 dark:text-gray-300">
                      Our platform integrates both — learning and career — offering micro-internships, application simulations, 
                      and real-time opportunities under a single roof.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-6 text-gray-900 dark:text-white font-medium">
                      Certification without real feedback
                    </td>
                    <td className="px-6 py-6 text-gray-700 dark:text-gray-300">
                      Learners earn dynamic badges and downloadable certificates after assessments and assignments, 
                      with mentor or AI-generated feedback.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-6 text-gray-900 dark:text-white font-medium">
                      Static, unengaging practice tools
                    </td>
                    <td className="px-6 py-6 text-gray-700 dark:text-gray-300">
                      Practice becomes engaging with peer-vs-AI challenges, reverse practice (answer-first), 
                      mock test simulations, and a daily performance journal with self-reflection prompts.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-6 text-gray-900 dark:text-white font-medium">
                      One-size-fits-all content
                    </td>
                    <td className="px-6 py-6 text-gray-700 dark:text-gray-300">
                      MyPathWay offers multilingual support, accessibility options, and tailored content depending 
                      on user interests, roles, and levels.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-6 text-gray-900 dark:text-white font-medium">
                      Irrelevant news with no learning value
                    </td>
                    <td className="px-6 py-6 text-gray-700 dark:text-gray-300">
                      Every news article links to related micro-learning resources, career tips, or mock interviews 
                      to convert reading into actionable knowledge.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>

        {/* Platform Highlights */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🚀 Platform Highlights</h2>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Five passionate students from C.V. Raman Global University, united by innovation and commitment to digital empowerment.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{member.email}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Vision & Commitment */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl text-white p-8 md:p-12"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6">💡 Our Vision & Commitment</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                Our Journey
              </h3>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">
                Our journey began with a spark at the Infosys Hackathon, but the mission didn't end there. 
                We continue to actively develop, enhance, and scale this platform, working on feedback loops, 
                industry relevance, and learner-centric design.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Our Commitment
              </h3>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">
                We believe that skill empowerment shouldn't be restricted by geography, background, or cost. 
                We are committed to ensuring equitable access to skill development and real-world engagement 
                for everyone through MyPathWay.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <p className="text-lg text-blue-100 dark:text-blue-200 mb-6">
              Whether you're a student preparing for exams, a job seeker looking for internships, or a professional 
              trying to upskill — MyPathWay is built to adapt to your journey, and support you every step of the way.
            </p>
            <p className="text-xl font-semibold">
              Thank you for being a part of our mission.
            </p>
            <p className="text-blue-200 dark:text-blue-300 mt-4">
              — Team MyPathWay<br />
              C.V. Raman Global University
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;