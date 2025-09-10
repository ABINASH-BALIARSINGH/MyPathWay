import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
  CheckCircle,
  User,
  MessageSquare
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@MyPathWay.com",
      description: "Send us an email anytime",
      link: "mailto:hello@MyPathWay.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Mon-Fri from 9am to 6pm",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "C.V. Raman Global University",
      description: "Bhubaneswar, Odisha, India",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/MyPathWay",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/MyPathWay",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/MyPathWay",
      color: "hover:text-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/MyPathWay",
      color: "hover:text-pink-600"
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
            Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Have questions about MyPathWay? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="lg:col-span-2"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 dark:text-white font-medium mb-1">{info.content}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{info.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Office Hours */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Office Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                  <span className="text-gray-900 dark:text-white font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                  <span className="text-gray-900 dark:text-white font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                  <span className="text-gray-900 dark:text-white font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  <strong>Note:</strong> We typically respond to emails within 24 hours during business days.
                </p>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 transition-colors group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-current transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Response */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white p-6"
            >
              <h3 className="text-lg font-semibold mb-2">Need Quick Help?</h3>
              <p className="text-green-100 dark:text-green-200 text-sm mb-4">
                Check out our FAQ section for instant answers to common questions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-green-100 transition-colors"
              >
                View FAQ
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;