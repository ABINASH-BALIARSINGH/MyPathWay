import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Linkedin as LinkedIn, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MyPathWay</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering learners with adaptive digital education, practical skills, and career opportunities. 
              Bridge the gap between learning and professional success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                <LinkedIn className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">Courses</Link></li>
              <li><Link to="/test-center" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">Practice Tests</Link></li>
              <li><Link to="/certification" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">Certifications</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">News & Updates</Link></li>
              <li><Link to="/apply" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">Opportunities</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">Careers</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white dark:hover:text-blue-300 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-400 dark:text-blue-300" />
              <span className="text-gray-300">hello@MyPathWay.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-400 dark:text-blue-300" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-400 dark:text-blue-300" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MyPathWay. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white dark:hover:text-blue-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white dark:hover:text-blue-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Designed by MyPathWay Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;