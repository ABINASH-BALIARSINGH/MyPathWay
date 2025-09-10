import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer a comprehensive range of courses including web development, mobile app development, data science, machine learning, cybersecurity, and cloud computing. All courses are designed by industry experts and updated regularly to reflect current market demands."
    },
    {
      question: "How long are the courses?",
      answer: "Course duration varies depending on the program. Our bootcamp-style courses typically run 12-24 weeks, while individual skill courses can be completed in 4-8 weeks. We also offer self-paced options for flexible learning."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes! We have a dedicated career services team that provides resume reviews, interview preparation, portfolio development, and connects you with our network of hiring partners. Our job placement rate is over 85% within 6 months of graduation."
    },
    {
      question: "What are the prerequisites for enrollment?",
      answer: "Prerequisites vary by course. Most beginner courses require no prior experience, while advanced courses may require foundational knowledge. We provide detailed prerequisites for each course and offer preparatory materials to help you get ready."
    },
    {
      question: "Is financial aid available?",
      answer: "We offer various financing options including scholarships, income share agreements, and flexible payment plans. We also accept GI Bill benefits for eligible veterans and work with several third-party financing partners."
    },
    {
      question: "Can I learn remotely?",
      answer: "Absolutely! We offer both in-person and remote learning options. Our online platform provides the same quality education with live instruction, interactive projects, and peer collaboration opportunities."
    },
    {
      question: "What kind of support do students receive?",
      answer: "Students receive comprehensive support including dedicated instructors, teaching assistants, peer study groups, technical support, and career counseling. We maintain small class sizes to ensure personalized attention."
    },
    {
      question: "Do you offer corporate training?",
      answer: "Yes, we provide customized corporate training programs for businesses looking to upskill their teams. Our enterprise solutions include on-site training, custom curriculum development, and ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our courses, enrollment process, and support services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems.includes(index) ? 'auto' : 0,
                    opacity: openItems.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 dark:border-gray-600 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;