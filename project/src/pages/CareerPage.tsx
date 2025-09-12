import React, { useState, useEffect } from 'react';
import {
    Clock,
    TrendingUp,
    Users,
    Zap,
    X,
    ExternalLink,
    User,
    Star,
    Download,
    BookOpen,
    Calendar,
    DollarSign,
    Trophy,
    Share2,
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Code,
    Database,
    Cloud,
    Brain,
    Smartphone,
    Globe,
    Shield,
    Wrench,
    ArrowRight,
    Sparkles,
    HelpCircle,
    Video,
    CheckCircle,
    Lightbulb,
} from 'lucide-react';

// From types/career.ts
export interface RoadmapStep {
    id: string;
    title: string;
    description: string;
    tips: string[];
    tools: string[];
    duration: string;
    completed?: boolean;
}

export interface Career {
    id: string;
    title: string;
    icon: string;
    field: string;
    stream: string[];
    description: string;
    salaryRange: string;
    roadmap: RoadmapStep[];
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    timeToComplete: string;
}

export interface Theme {
    isDark: boolean;
}

// From data/careers.ts
export const careers: Career[] = [
    {
        id: 'data-engineer',
        title: 'Data Engineer',
        icon: '💾',
        field: 'Data & Analytics',
        stream: ['B.Tech', 'B.Sc', 'BCA'],
        description: 'Build and maintain data pipelines, ensuring data quality and accessibility for analysis.',
        salaryRange: '₹8-25 LPA',
        difficulty: 'Intermediate',
        timeToComplete: '12-18 months',
        roadmap: [
            {
                id: 'learn-python',
                title: 'Learn Python',
                description: 'Master Python fundamentals for data manipulation and processing.',
                tips: ['Start with basic syntax', 'Practice data structures', 'Work with libraries'],
                tools: ['Python', 'Jupyter Notebook', 'PyCharm'],
                duration: '2-3 months',
            },
            {
                id: 'sql-databases',
                title: 'SQL & Databases',
                description: 'Learn SQL for database operations and understand database design principles.',
                tips: ['Practice complex queries', 'Learn indexing', 'Understand normalization'],
                tools: ['PostgreSQL', 'MySQL', 'MongoDB'],
                duration: '2 months',
            },
            {
                id: 'data-structures',
                title: 'Data Structures & Algorithms',
                description: 'Strengthen problem-solving skills with DSA concepts.',
                tips: ['Practice on LeetCode', 'Focus on time complexity', 'Learn system design basics'],
                tools: ['LeetCode', 'HackerRank', 'GeeksforGeeks'],
                duration: '3-4 months',
            },
            {
                id: 'big-data',
                title: 'Big Data Technologies',
                description: 'Learn Hadoop, Spark, and distributed computing frameworks.',
                tips: ['Start with Hadoop ecosystem', 'Practice with real datasets', 'Learn streaming'],
                tools: ['Hadoop', 'Apache Spark', 'Kafka'],
                duration: '3 months',
            },
            {
                id: 'cloud-tools',
                title: 'Cloud Platforms',
                description: 'Master cloud services for data storage and processing.',
                tips: ['Get AWS/Azure certified', 'Practice with cloud databases', 'Learn DevOps basics'],
                tools: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
                duration: '2-3 months',
            },
            {
                id: 'projects',
                title: 'Build Projects',
                description: 'Create end-to-end data engineering projects to showcase your skills.',
                tips: ['Build ETL pipelines', 'Work with real data', 'Document your work'],
                tools: ['GitHub', 'Docker', 'Airflow'],
                duration: '2-3 months',
            },
        ],
    },
    {
        id: 'software-developer',
        title: 'Software Developer',
        icon: '💻',
        field: 'Software Engineering',
        stream: ['B.Tech', 'BCA', 'B.Sc'],
        description: 'Design, develop, and maintain software applications across various platforms.',
        salaryRange: '₹6-20 LPA',
        difficulty: 'Beginner',
        timeToComplete: '8-12 months',
        roadmap: [
            {
                id: 'programming-language',
                title: 'Choose Programming Language',
                description: 'Master a programming language like Java, Python, or JavaScript.',
                tips: ['Pick based on career goals', 'Focus on fundamentals', 'Practice daily'],
                tools: ['Java', 'Python', 'JavaScript', 'C++'],
                duration: '2-3 months',
            },
            {
                id: 'dsa-basics',
                title: 'Data Structures & Algorithms',
                description: 'Build strong problem-solving foundation with DSA.',
                tips: ['Start with arrays and strings', 'Practice pattern recognition', 'Time complexity matters'],
                tools: ['LeetCode', 'Codeforces', 'HackerRank'],
                duration: '3-4 months',
            },
            {
                id: 'oop-concepts',
                title: 'Object-Oriented Programming',
                description: 'Learn OOP principles and design patterns.',
                tips: ['Understand inheritance', 'Practice polymorphism', 'Learn design patterns'],
                tools: ['Java', 'C++', 'Python'],
                duration: '1-2 months',
            },
            {
                id: 'version-control',
                title: 'Version Control & Git',
                description: 'Master Git for code versioning and collaboration.',
                tips: ['Learn branching strategies', 'Practice with GitHub', 'Understand merge conflicts'],
                tools: ['Git', 'GitHub', 'GitLab'],
                duration: '2-3 weeks',
            },
            {
                id: 'development-tools',
                title: 'Development Tools',
                description: 'Learn IDEs, debugging, and testing frameworks.',
                tips: ['Master your IDE', 'Learn debugging techniques', 'Write unit tests'],
                tools: ['VS Code', 'IntelliJ', 'Eclipse', 'JUnit'],
                duration: '1 month',
            },
            {
                id: 'internships',
                title: 'Internships & Experience',
                description: 'Apply for internships to gain real-world experience.',
                tips: ['Build a strong resume', 'Practice coding interviews', 'Network with professionals'],
                tools: ['LinkedIn', 'AngelList', 'Internshala'],
                duration: '3-6 months',
            },
        ],
    },
    {
        id: 'ui-ux-designer',
        title: 'UI/UX Designer',
        icon: '🎨',
        field: 'Design',
        stream: ['B.Des', 'BCA', 'Any'],
        description: 'Create intuitive and engaging user interfaces and experiences for digital products.',
        salaryRange: '₹4-15 LPA',
        difficulty: 'Beginner',
        timeToComplete: '6-10 months',
        roadmap: [
            {
                id: 'design-basics',
                title: 'Design Fundamentals',
                description: 'Learn color theory, typography, and design principles.',
                tips: ['Study design theory', 'Practice daily sketching', 'Analyze good designs'],
                tools: ['Adobe Creative Suite', 'Sketch', 'Figma'],
                duration: '2 months',
            },
            {
                id: 'design-tools',
                title: 'Design Tools Mastery',
                description: 'Master Figma, Adobe XD, and other design tools.',
                tips: ['Learn shortcuts', 'Practice with real projects', 'Explore plugins'],
                tools: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
                duration: '1-2 months',
            },
            {
                id: 'ux-research',
                title: 'UX Research Methods',
                description: 'Learn user research, personas, and usability testing.',
                tips: ['Conduct user interviews', 'Create user personas', 'A/B testing'],
                tools: ['Miro', 'Hotjar', 'UserTesting', 'Google Analytics'],
                duration: '2 months',
            },
            {
                id: 'prototyping',
                title: 'Prototyping & Wireframing',
                description: 'Create interactive prototypes and wireframes.',
                tips: ['Start with low-fidelity', 'Focus on user flow', 'Test early and often'],
                tools: ['Figma', 'Adobe XD', 'InVision', 'Marvel'],
                duration: '1-2 months',
            },
            {
                id: 'design-projects',
                title: 'Build Design Projects',
                description: 'Create a diverse portfolio of design projects.',
                tips: ['Show design process', 'Include case studies', 'Get feedback'],
                tools: ['Behance', 'Dribbble', 'Portfolio websites'],
                duration: '2-3 months',
            },
            {
                id: 'job-application',
                title: 'Portfolio & Job Applications',
                description: 'Create a stunning portfolio and apply for positions.',
                tips: ['Tailor portfolio to roles', 'Practice design challenges', 'Network with designers'],
                tools: ['Behance', 'LinkedIn', 'AngelList'],
                duration: '1-2 months',
            },
        ],
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        icon: '📊',
        field: 'Data & Analytics',
        stream: ['B.Sc', 'B.Tech', 'B.Com'],
        description: 'Extract insights from data using statistical analysis and machine learning.',
        salaryRange: '₹10-30 LPA',
        difficulty: 'Advanced',
        timeToComplete: '12-18 months',
        roadmap: [
            {
                id: 'python-basics',
                title: 'Python Programming',
                description: 'Master Python for data science applications.',
                tips: ['Focus on data manipulation', 'Learn functional programming', 'Practice with datasets'],
                tools: ['Python', 'Jupyter', 'Google Colab'],
                duration: '2-3 months',
            },
            {
                id: 'statistics',
                title: 'Statistics & Mathematics',
                description: 'Learn statistical concepts and mathematical foundations.',
                tips: ['Focus on hypothesis testing', 'Understand distributions', 'Practice with real data'],
                tools: ['R', 'Python', 'Excel', 'SPSS'],
                duration: '3-4 months',
            },
            {
                id: 'data-libraries',
                title: 'Data Libraries',
                description: 'Master Pandas, NumPy, and data manipulation libraries.',
                tips: ['Practice data cleaning', 'Learn data visualization', 'Work with APIs'],
                tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
                duration: '2 months',
            },
            {
                id: 'machine-learning',
                title: 'Machine Learning',
                description: 'Learn ML algorithms and model building.',
                tips: ['Start with supervised learning', 'Practice feature engineering', 'Understand model evaluation'],
                tools: ['Scikit-learn', 'TensorFlow', 'PyTorch'],
                duration: '3-4 months',
            },
            {
                id: 'ml-projects',
                title: 'ML Projects',
                description: 'Build end-to-end machine learning projects.',
                tips: ['Choose diverse problem types', 'Deploy models', 'Document your process'],
                tools: ['GitHub', 'Streamlit', 'Flask', 'AWS'],
                duration: '2-3 months',
            },
            {
                id: 'kaggle-competitions',
                title: 'Kaggle & Competitions',
                description: 'Participate in data science competitions.',
                tips: ['Start with beginner competitions', 'Learn from kernels', 'Build your ranking'],
                tools: ['Kaggle', 'Google Colab', 'Jupyter'],
                duration: '3-6 months',
            },
        ],
    },
    {
        id: 'cybersecurity-analyst',
        title: 'Cybersecurity Analyst',
        icon: '🔐',
        field: 'Security',
        stream: ['B.Tech', 'BCA', 'B.Sc'],
        description: 'Protect organizations from cyber threats and security vulnerabilities.',
        salaryRange: '₹8-25 LPA',
        difficulty: 'Intermediate',
        timeToComplete: '10-15 months',
        roadmap: [
            {
                id: 'networking-basics',
                title: 'Networking Fundamentals',
                description: 'Learn network protocols, TCP/IP, and network architecture.',
                tips: ['Understand OSI model', 'Learn subnetting', 'Practice with packet analysis'],
                tools: ['Wireshark', 'Cisco Packet Tracer', 'Nmap'],
                duration: '2-3 months',
            },
            {
                id: 'operating-systems',
                title: 'Operating Systems',
                description: 'Master Windows and Linux system administration.',
                tips: ['Learn command line', 'Practice system hardening', 'Understand file systems'],
                tools: ['Linux', 'Windows Server', 'VMware'],
                duration: '2 months',
            },
            {
                id: 'ethical-hacking',
                title: 'Ethical Hacking',
                description: 'Learn penetration testing and vulnerability assessment.',
                tips: ['Practice on legal platforms', 'Learn OWASP Top 10', 'Understand attack vectors'],
                tools: ['Kali Linux', 'Metasploit', 'Burp Suite'],
                duration: '3-4 months',
            },
            {
                id: 'security-tools',
                title: 'Security Tools',
                description: 'Master security tools for monitoring and analysis.',
                tips: ['Learn SIEM platforms', 'Practice incident response', 'Understand forensics'],
                tools: ['Splunk', 'Nessus', 'Wireshark', 'Nmap'],
                duration: '2-3 months',
            },
            {
                id: 'certifications',
                title: 'Security Certifications',
                description: 'Pursue industry-recognized security certifications.',
                tips: ['Start with CompTIA Security+', 'Consider CEH', 'Plan for CISSP'],
                tools: ['CompTIA', 'EC-Council', 'SANS'],
                duration: '3-6 months',
            },
            {
                id: 'security-internships',
                title: 'Security Internships',
                description: 'Gain practical experience in cybersecurity roles.',
                tips: ['Apply to SOC positions', 'Practice incident response', 'Build security projects'],
                tools: ['LinkedIn', 'CyberSeek', 'InfoSec-Jobs'],
                duration: '6 months',
            },
        ],
    },
    {
        id: 'ai-ml-engineer',
        title: 'AI/ML Engineer',
        icon: '🤖',
        field: 'Artificial Intelligence',
        stream: ['B.Tech', 'B.Sc', 'M.Tech'],
        description: 'Develop and deploy artificial intelligence and machine learning solutions.',
        salaryRange: '₹12-35 LPA',
        difficulty: 'Advanced',
        timeToComplete: '15-24 months',
        roadmap: [
            {
                id: 'python-advanced',
                title: 'Advanced Python',
                description: 'Master Python for AI/ML development.',
                tips: ['Learn object-oriented programming', 'Practice algorithmic thinking', 'Understand memory management'],
                tools: ['Python', 'PyCharm', 'Jupyter'],
                duration: '2-3 months',
            },
            {
                id: 'machine-learning-fundamentals',
                title: 'Machine Learning Fundamentals',
                description: 'Learn ML algorithms and mathematical foundations.',
                tips: ['Focus on linear algebra', 'Understand calculus', 'Practice with datasets'],
                tools: ['Scikit-learn', 'Pandas', 'NumPy'],
                duration: '4-5 months',
            },
            {
                id: 'deep-learning',
                title: 'Deep Learning',
                description: 'Master neural networks and deep learning frameworks.',
                tips: ['Start with basic neural networks', 'Learn CNN and RNN', 'Practice with image/text data'],
                tools: ['TensorFlow', 'PyTorch', 'Keras'],
                duration: '4-6 months',
            },
            {
                id: 'ml-frameworks',
                title: 'ML Frameworks',
                description: 'Master TensorFlow, PyTorch, and other ML frameworks.',
                tips: ['Build end-to-end projects', 'Learn model optimization', 'Understand deployment'],
                tools: ['TensorFlow', 'PyTorch', 'Hugging Face'],
                duration: '3-4 months',
            },
            {
                id: 'ai-projects',
                title: 'AI Projects',
                description: 'Build comprehensive AI projects across different domains.',
                tips: ['Choose diverse problem types', 'Deploy models to production', 'Document your work'],
                tools: ['GitHub', 'Docker', 'AWS', 'GCP'],
                duration: '3-4 months',
            },
            {
                id: 'ai-competitions',
                title: 'Competitions & Research',
                description: 'Participate in AI competitions and research projects.',
                tips: ['Join Kaggle competitions', 'Read research papers', 'Contribute to open source'],
                tools: ['Kaggle', 'Papers With Code', 'GitHub'],
                duration: '6+ months',
            },
        ],
    },
    {
        id: 'product-manager',
        title: 'Product Manager',
        icon: '📦',
        field: 'Product Management',
        stream: ['B.Tech', 'MBA', 'BBA'],
        description: 'Drive product strategy, development, and launch across the product lifecycle.',
        salaryRange: '₹15-40 LPA',
        difficulty: 'Advanced',
        timeToComplete: '18-24 months',
        roadmap: [
            {
                id: 'industry-knowledge',
                title: 'Industry Knowledge',
                description: 'Build deep understanding of your target industry.',
                tips: ['Choose a specific domain', 'Study market trends', 'Learn from case studies'],
                tools: ['Industry Reports', 'TechCrunch', 'Product Hunt'],
                duration: '3-4 months',
            },
            {
                id: 'agile-methodologies',
                title: 'Agile & Scrum',
                description: 'Master agile development methodologies.',
                tips: ['Get Scrum certified', 'Practice with real teams', 'Learn sprint planning'],
                tools: ['Jira', 'Trello', 'Asana', 'Scrum.org'],
                duration: '1-2 months',
            },
            {
                id: 'product-roadmapping',
                title: 'Product Roadmapping',
                description: 'Learn to create and manage product roadmaps.',
                tips: ['Prioritize features', 'Balance stakeholder needs', 'Use data for decisions'],
                tools: ['ProductPlan', 'Roadmunk', 'Aha!'],
                duration: '2-3 months',
            },
            {
                id: 'design-thinking',
                title: 'Design Thinking',
                description: 'Master user-centered design and problem-solving.',
                tips: ['Practice empathy mapping', 'Learn prototyping', 'Validate assumptions'],
                tools: ['Figma', 'Miro', 'Design Thinking Toolkit'],
                duration: '2 months',
            },
            {
                id: 'mba-business',
                title: 'Business Education',
                description: 'Pursue MBA or business courses.',
                tips: ['Focus on strategy', 'Learn financial analysis', 'Build network'],
                tools: ['MBA Programs', 'Coursera', 'edX'],
                duration: '12-24 months',
            },
            {
                id: 'pm-case-studies',
                title: 'Case Studies & Applications',
                description: 'Practice with real product management scenarios.',
                tips: ['Study successful products', 'Practice PM interviews', 'Build a portfolio'],
                tools: ['PM Interview books', 'Glassdoor', 'LinkedIn'],
                duration: '3-6 months',
            },
        ],
    },
    {
        id: 'full-stack-developer',
        title: 'Full Stack Developer',
        icon: '🌐',
        field: 'Web Development',
        stream: ['B.Tech', 'BCA', 'B.Sc'],
        description: 'Develop both frontend and backend components of web applications.',
        salaryRange: '₹8-25 LPA',
        difficulty: 'Intermediate',
        timeToComplete: '10-15 months',
        roadmap: [
            {
                id: 'html-css-js',
                title: 'Frontend Basics',
                description: 'Master HTML, CSS, and JavaScript fundamentals.',
                tips: ['Build responsive layouts', 'Learn ES6+ features', 'Practice DOM manipulation'],
                tools: ['HTML5', 'CSS3', 'JavaScript', 'VS Code'],
                duration: '2-3 months',
            },
            {
                id: 'react-frontend',
                title: 'React Development',
                description: 'Learn React for building interactive user interfaces.',
                tips: ['Master hooks', 'Learn state management', 'Build reusable components'],
                tools: ['React', 'Redux', 'React Router'],
                duration: '2-3 months',
            },
            {
                id: 'nodejs-backend',
                title: 'Node.js & Backend',
                description: 'Build server-side applications with Node.js.',
                tips: ['Learn Express.js', 'Understand middleware', 'Build RESTful APIs'],
                tools: ['Node.js', 'Express', 'npm'],
                duration: '2-3 months',
            },
            {
                id: 'database-mongodb',
                title: 'Database Management',
                description: 'Learn MongoDB and database design.',
                tips: ['Practice CRUD operations', 'Learn aggregation', 'Understand indexing'],
                tools: ['MongoDB', 'Mongoose', 'MongoDB Atlas'],
                duration: '1-2 months',
            },
            {
                id: 'devops-basics',
                title: 'DevOps & Deployment',
                description: 'Learn deployment and DevOps practices.',
                tips: ['Use version control', 'Learn CI/CD', 'Deploy to cloud'],
                tools: ['Git', 'Docker', 'AWS', 'Netlify'],
                duration: '2 months',
            },
            {
                id: 'fullstack-projects',
                title: 'Full Stack Projects',
                description: 'Build complete web applications from scratch.',
                tips: ['Create diverse projects', 'Focus on user experience', 'Deploy to production'],
                tools: ['React', 'Node.js', 'MongoDB', 'GitHub'],
                duration: '3-4 months',
            },
        ],
    },
    {
        id: 'chartered-accountant',
        title: 'Chartered Accountant',
        icon: '🧾',
        field: 'Finance & Accounting',
        stream: ['B.Com', 'Any Graduate'],
        description: 'Provide financial advice, auditing, and accounting services.',
        salaryRange: '₹8-30 LPA',
        difficulty: 'Advanced',
        timeToComplete: '36-48 months',
        roadmap: [
            {
                id: 'ca-foundation',
                title: 'CA Foundation',
                description: 'Clear the CA Foundation examination.',
                tips: ['Focus on fundamentals', 'Practice regularly', 'Take mock tests'],
                tools: ['CA Study Materials', 'Test Series', 'Coaching'],
                duration: '6-12 months',
            },
            {
                id: 'ca-intermediate',
                title: 'CA Intermediate',
                description: 'Complete CA Intermediate level.',
                tips: ['Choose groups wisely', 'Practice case studies', 'Focus on practical applications'],
                tools: ['ICAI Materials', 'Reference Books', 'Online Classes'],
                duration: '12-18 months',
            },
            {
                id: 'articleship',
                title: 'Articleship Training',
                description: 'Complete 3-year articleship training.',
                tips: ['Choose good CA firm', 'Learn practical skills', 'Build professional network'],
                tools: ['CA Firm Experience', 'Audit Software', 'Tally'],
                duration: '36 months',
            },
            {
                id: 'ca-final',
                title: 'CA Final',
                description: 'Clear the CA Final examination.',
                tips: ['Focus on advanced topics', 'Practice case studies', 'Stay updated with changes'],
                tools: ['ICAI Study Materials', 'Revision Classes', 'Mock Tests'],
                duration: '6-12 months',
            },
            {
                id: 'ca-internship',
                title: 'Professional Experience',
                description: 'Gain practical experience in accounting and finance.',
                tips: ['Work with different clients', 'Learn industry practices', 'Build specialization'],
                tools: ['Accounting Software', 'ERP Systems', 'Excel'],
                duration: '6-12 months',
            },
            {
                id: 'ca-practice',
                title: 'Practice or Employment',
                description: 'Start your own practice or join an organization.',
                tips: ['Choose your path', 'Build client base', 'Continuous learning'],
                tools: ['Professional Network', 'Client Management', 'CPE Programs'],
                duration: 'Ongoing',
            },
        ],
    },
    {
        id: 'investment-banker',
        title: 'Investment Banker',
        icon: '📈',
        field: 'Finance & Investment',
        stream: ['B.Com', 'MBA', 'BBA'],
        description: 'Provide financial services including mergers, acquisitions, and capital raising.',
        salaryRange: '₹12-50 LPA',
        difficulty: 'Advanced',
        timeToComplete: '24-36 months',
        roadmap: [
            {
                id: 'economics-finance',
                title: 'Economics & Finance',
                description: 'Build strong foundation in economics and finance.',
                tips: ['Study macroeconomics', 'Learn financial markets', 'Understand monetary policy'],
                tools: ['Economics Textbooks', 'Financial News', 'Bloomberg'],
                duration: '6 months',
            },
            {
                id: 'finance-fundamentals',
                title: 'Finance Fundamentals',
                description: 'Learn corporate finance, valuation, and financial analysis.',
                tips: ['Master financial statements', 'Learn valuation methods', 'Practice DCF modeling'],
                tools: ['Excel', 'Financial Calculators', 'CFA Materials'],
                duration: '6 months',
            },
            {
                id: 'excel-modeling',
                title: 'Excel & Financial Modeling',
                description: 'Master advanced Excel and financial modeling.',
                tips: ['Learn VBA', 'Build complex models', 'Practice with real cases'],
                tools: ['Excel', 'VBA', 'Financial Modeling Books'],
                duration: '3-4 months',
            },
            {
                id: 'cfa-mba',
                title: 'CFA or MBA',
                description: 'Pursue CFA certification or MBA degree.',
                tips: ['Choose based on goals', 'Prepare thoroughly', 'Network with professionals'],
                tools: ['CFA Institute', 'MBA Programs', 'Study Groups'],
                duration: '12-24 months',
            },
            {
                id: 'case-studies',
                title: 'Case Studies & Practice',
                description: 'Practice with real investment banking cases.',
                tips: ['Study M&A deals', 'Practice pitch books', 'Learn industry analysis'],
                tools: ['Case Study Books', 'Wall Street Prep', 'Wharton Online'],
                duration: '3-6 months',
            },
            {
                id: 'ib-internships',
                title: 'Investment Banking Internships',
                description: 'Secure internships at investment banks.',
                tips: ['Apply early', 'Prepare for interviews', 'Build strong resume'],
                tools: ['LinkedIn', 'Banking Firms', 'Placement Services'],
                duration: '6-12 months',
            },
        ],
    },
    {
        id: 'cloud-engineer',
        title: 'Cloud Engineer',
        icon: '☁️',
        field: 'Cloud Computing',
        stream: ['B.Tech', 'BCA', 'B.Sc'],
        description: 'Design, implement, and manage cloud infrastructure and services.',
        salaryRange: '₹10-30 LPA',
        difficulty: 'Intermediate',
        timeToComplete: '12-18 months',
        roadmap: [
            {
                id: 'linux-basics',
                title: 'Linux Administration',
                description: 'Master Linux system administration.',
                tips: ['Learn command line', 'Practice shell scripting', 'Understand file systems'],
                tools: ['Ubuntu', 'CentOS', 'Bash', 'SSH'],
                duration: '2-3 months',
            },
            {
                id: 'networking-cloud',
                title: 'Networking Fundamentals',
                description: 'Learn networking concepts for cloud computing.',
                tips: ['Understand TCP/IP', 'Learn subnetting', 'Practice with VPCs'],
                tools: ['Wireshark', 'Packet Tracer', 'AWS VPC'],
                duration: '2 months',
            },
            {
                id: 'aws-azure',
                title: 'AWS/Azure Platform',
                description: 'Master a major cloud platform.',
                tips: ['Start with core services', 'Practice with free tier', 'Build projects'],
                tools: ['AWS', 'Azure', 'Google Cloud'],
                duration: '4-6 months',
            },
            {
                id: 'cicd-devops',
                title: 'CI/CD & DevOps',
                description: 'Learn continuous integration and deployment.',
                tips: ['Practice with pipelines', 'Learn infrastructure as code', 'Automate deployments'],
                tools: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
                duration: '3-4 months',
            },
            {
                id: 'devops-tools',
                title: 'DevOps Tools',
                description: 'Master containerization and orchestration.',
                tips: ['Learn Docker basics', 'Practice with Kubernetes', 'Understand microservices'],
                tools: ['Docker', 'Kubernetes', 'Helm'],
                duration: '2-3 months',
            },
            {
                id: 'cloud-certification',
                title: 'Cloud Certifications',
                description: 'Pursue cloud platform certifications.',
                tips: ['Choose AWS or Azure', 'Practice with hands-on labs', 'Take practice exams'],
                tools: ['AWS Certifications', 'Azure Certifications', 'Practice Tests'],
                duration: '3-6 months',
            },
        ],
    },
    {
        id: 'blockchain-developer',
        title: 'Blockchain Developer',
        icon: '🔗',
        field: 'Blockchain',
        stream: ['B.Tech', 'BCA', 'B.Sc'],
        description: 'Develop decentralized applications and smart contracts.',
        salaryRange: '₹8-25 LPA',
        difficulty: 'Advanced',
        timeToComplete: '12-18 months',
        roadmap: [
            {
                id: 'blockchain-basics',
                title: 'Blockchain Fundamentals',
                description: 'Learn blockchain technology and cryptocurrency basics.',
                tips: ['Understand distributed ledger', 'Learn consensus mechanisms', 'Study Bitcoin and Ethereum'],
                tools: ['Books', 'Online Courses', 'Blockchain Explorers'],
                duration: '2-3 months',
            },
            {
                id: 'solidity-programming',
                title: 'Solidity Programming',
                description: 'Master Solidity for Ethereum smart contracts.',
                tips: ['Start with simple contracts', 'Practice with Remix', 'Learn security best practices'],
                tools: ['Solidity', 'Remix IDE', 'Truffle'],
                duration: '3-4 months',
            },
            {
                id: 'smart-contracts',
                title: 'Smart Contract Development',
                description: 'Build and deploy smart contracts.',
                tips: ['Focus on security', 'Practice testing', 'Learn gas optimization'],
                tools: ['Truffle', 'Hardhat', 'Ganache'],
                duration: '3-4 months',
            },
            {
                id: 'web3-development',
                title: 'Web3 Development',
                description: 'Learn Web3.js and DApp development.',
                tips: ['Connect frontend to blockchain', 'Learn MetaMask integration', 'Practice with real DApps'],
                tools: ['Web3.js', 'Ethers.js', 'React', 'MetaMask'],
                duration: '2-3 months',
            },
            {
                id: 'blockchain-security',
                title: 'Blockchain Security',
                description: 'Learn smart contract security and auditing.',
                tips: ['Study common vulnerabilities', 'Practice security testing', 'Learn audit processes'],
                tools: ['MythX', 'Slither', 'OpenZeppelin'],
                duration: '2 months',
            },
            {
                id: 'blockchain-projects',
                title: 'Blockchain Projects',
                description: 'Build comprehensive blockchain projects.',
                tips: ['Create diverse DApps', 'Participate in hackathons', 'Contribute to open source'],
                tools: ['GitHub', 'Hackathons', 'Dev Communities'],
                duration: '3-6 months',
            },
        ],
    },
    {
        id: 'business-analyst',
        title: 'Business Analyst',
        icon: '📋',
        field: 'Business Analysis',
        stream: ['BBA', 'B.Com', 'Any'],
        description: 'Analyze business processes and provide data-driven insights.',
        salaryRange: '₹6-20 LPA',
        difficulty: 'Beginner',
        timeToComplete: '8-12 months',
        roadmap: [
            {
                id: 'excel-advanced',
                title: 'Advanced Excel',
                description: 'Master Excel for data analysis and reporting.',
                tips: ['Learn pivot tables', 'Master formulas', 'Practice with VBA'],
                tools: ['Excel', 'Google Sheets', 'VBA'],
                duration: '1-2 months',
            },
            {
                id: 'sql-databases',
                title: 'SQL & Databases',
                description: 'Learn SQL for data extraction and analysis.',
                tips: ['Practice complex queries', 'Learn joins', 'Understand database design'],
                tools: ['MySQL', 'PostgreSQL', 'SQL Server'],
                duration: '2-3 months',
            },
            {
                id: 'data-visualization',
                title: 'Data Visualization',
                description: 'Master Power BI, Tableau, and visualization tools.',
                tips: ['Create interactive dashboards', 'Learn storytelling with data', 'Practice with real datasets'],
                tools: ['Power BI', 'Tableau', 'Qlik'],
                duration: '2-3 months',
            },
            {
                id: 'statistics-basics',
                title: 'Statistics & Analytics',
                description: 'Learn statistical analysis and business metrics.',
                tips: ['Focus on descriptive statistics', 'Learn A/B testing', 'Understand KPIs'],
                tools: ['Excel', 'R', 'Python'],
                duration: '2 months',
            },
            {
                id: 'business-projects',
                title: 'Business Analysis Projects',
                description: 'Work on real business analysis projects.',
                tips: ['Choose diverse industries', 'Document your methodology', 'Present findings clearly'],
                tools: ['Excel', 'Power BI', 'PowerPoint'],
                duration: '2-3 months',
            },
            {
                id: 'ba-case-studies',
                title: 'Case Studies & Applications',
                description: 'Practice with business case studies and apply for roles.',
                tips: ['Study industry cases', 'Practice presentation skills', 'Build a portfolio'],
                tools: ['Case Study Books', 'LinkedIn', 'Job Portals'],
                duration: '1-2 months',
            },
        ],
    },
    {
        id: 'graphic-designer',
        title: 'Graphic Designer',
        icon: '🖌️',
        field: 'Design',
        stream: ['Any', 'B.Des', 'BFA'],
        description: 'Create visual content for digital and print media.',
        salaryRange: '₹3-12 LPA',
        difficulty: 'Beginner',
        timeToComplete: '6-10 months',
        roadmap: [
            {
                id: 'design-software',
                title: 'Design Software',
                description: 'Master Photoshop, Illustrator, and design tools.',
                tips: ['Start with Photoshop', 'Learn vector graphics', 'Practice with real projects'],
                tools: ['Photoshop', 'Illustrator', 'Canva', 'Figma'],
                duration: '2-3 months',
            },
            {
                id: 'design-theory',
                title: 'Design Theory',
                description: 'Learn typography, color theory, and design principles.',
                tips: ['Study color psychology', 'Master typography', 'Understand layout principles'],
                tools: ['Design Books', 'Online Courses', 'Dribbble'],
                duration: '2 months',
            },
            {
                id: 'branding-design',
                title: 'Branding & Identity',
                description: 'Learn brand design and visual identity creation.',
                tips: ['Study successful brands', 'Practice logo design', 'Learn brand guidelines'],
                tools: ['Illustrator', 'Brand Books', 'Behance'],
                duration: '2-3 months',
            },
            {
                id: 'design-portfolio',
                title: 'Portfolio Development',
                description: 'Build a strong design portfolio.',
                tips: ['Show diverse work', 'Include process shots', 'Get feedback'],
                tools: ['Behance', 'Dribbble', 'Personal Website'],
                duration: '2 months',
            },
            {
                id: 'client-work',
                title: 'Client Work & Freelancing',
                description: 'Start working with clients and freelancing.',
                tips: ['Start with small projects', 'Build testimonials', 'Learn client communication'],
                tools: ['Upwork', 'Fiverr', 'Freelancer'],
                duration: '3-6 months',
            },
            {
                id: 'agency-applications',
                title: 'Agency or In-house Roles',
                description: 'Apply for design positions at agencies or companies.',
                tips: ['Tailor portfolio to roles', 'Practice design challenges', 'Network with designers'],
                tools: ['LinkedIn', 'AngelList', 'Design Jobs'],
                duration: '1-3 months',
            },
        ],
    },
    {
        id: 'civil-services',
        title: 'Civil Services Officer',
        icon: '🏛️',
        field: 'Government',
        stream: ['Any Graduate'],
        description: 'Serve in administrative roles in government and public sector.',
        salaryRange: '₹8-25 LPA',
        difficulty: 'Advanced',
        timeToComplete: '18-36 months',
        roadmap: [
            {
                id: 'ncert-foundation',
                title: 'NCERT Foundation',
                description: 'Build strong foundation with NCERT textbooks.',
                tips: ['Start with Class 6-12 NCERTs', 'Focus on understanding concepts', 'Make notes'],
                tools: ['NCERT Books', 'Online Resources', 'Study Notes'],
                duration: '6-8 months',
            },
            {
                id: 'general-studies',
                title: 'General Studies Subjects',
                description: 'Master all four General Studies papers.',
                tips: ['Create study plan', 'Practice answer writing', 'Stay updated with current affairs'],
                tools: ['Standard Books', 'The Hindu', 'PIB'],
                duration: '12-18 months',
            },
            {
                id: 'mock-tests',
                title: 'Mock Tests & Practice',
                description: 'Regular practice with mock tests and previous papers.',
                tips: ['Analyze performance', 'Improve weak areas', 'Time management'],
                tools: ['Test Series', 'Previous Papers', 'Online Platforms'],
                duration: '6-12 months',
            },
            {
                id: 'coaching-guidance',
                title: 'Coaching & Guidance',
                description: 'Join coaching or get mentorship.',
                tips: ['Choose reputed coaching', 'Regular revision', 'Group discussions'],
                tools: ['Coaching Institutes', 'Study Groups', 'Online Classes'],
                duration: '12-18 months',
            },
            {
                id: 'mains-preparation',
                title: 'Mains Preparation',
                description: 'Prepare for UPSC Mains examination.',
                tips: ['Practice answer writing', 'Improve presentation', 'Mock interviews'],
                tools: ['Answer Writing Books', 'Mains Test Series', 'Interview Guidance'],
                duration: '6-12 months',
            },
            {
                id: 'interview-preparation',
                title: 'Interview Preparation',
                description: 'Prepare for personality test and interview.',
                tips: ['Practice mock interviews', 'Stay confident', 'Current affairs preparation'],
                tools: ['Mock Interview Services', 'Personality Development', 'Current Affairs'],
                duration: '2-3 months',
            },
        ],
    },
    {
        id: 'freelance-developer',
        title: 'Freelance Developer',
        icon: '🌍',
        field: 'Freelancing',
        stream: ['Any CS Background'],
        description: 'Work independently on development projects for various clients.',
        salaryRange: '₹5-50 LPA',
        difficulty: 'Intermediate',
        timeToComplete: '8-15 months',
        roadmap: [
            {
                id: 'skill-development',
                title: 'Skill Development',
                description: 'Master programming languages and frameworks.',
                tips: ['Choose your tech stack', 'Build strong fundamentals', 'Practice regularly'],
                tools: ['Programming Languages', 'Frameworks', 'Development Tools'],
                duration: '4-6 months',
            },
            {
                id: 'portfolio-building',
                title: 'Portfolio Building',
                description: 'Create a strong portfolio of projects.',
                tips: ['Showcase diverse projects', 'Include case studies', 'Highlight results'],
                tools: ['GitHub', 'Personal Website', 'Project Documentation'],
                duration: '2-3 months',
            },
            {
                id: 'freelance-platforms',
                title: 'Freelance Platforms',
                description: 'Join platforms like Upwork, Fiverr, and Freelancer.',
                tips: ['Create compelling profiles', 'Start with small projects', 'Build ratings'],
                tools: ['Upwork', 'Fiverr', 'Freelancer', 'Toptal'],
                duration: '1-2 months',
            },
            {
                id: 'personal-website',
                title: 'Personal Website',
                description: 'Build a professional website to showcase your work.',
                tips: ['Include portfolio', 'Add testimonials', 'Make it mobile-friendly'],
                tools: ['WordPress', 'React', 'HTML/CSS'],
                duration: '1 month',
            },
            {
                id: 'client-networking',
                title: 'Client Networking',
                description: 'Build network and find clients.',
                tips: ['Use social media', 'Attend events', 'Ask for referrals'],
                tools: ['LinkedIn', 'Twitter', 'Local Events'],
                duration: '3-6 months',
            },
            {
                id: 'business-skills',
                title: 'Business & Communication',
                description: 'Develop business and communication skills.',
                tips: ['Learn project management', 'Improve communication', 'Handle finances'],
                tools: ['Project Management Tools', 'Communication Skills', 'Accounting Software'],
                duration: '2-3 months',
            },
        ],
    },
    {
        id: 'ar-vr-developer',
        title: 'AR/VR Developer',
        icon: '🕶️',
        field: 'Extended Reality',
        stream: ['B.Tech', 'Game Dev', 'B.Sc'],
        description: 'Develop immersive augmented and virtual reality experiences.',
        salaryRange: '₹8-30 LPA',
        difficulty: 'Advanced',
        timeToComplete: '12-18 months',
        roadmap: [
            {
                id: 'unity-basics',
                title: 'Unity Game Engine',
                description: 'Master Unity for AR/VR development.',
                tips: ['Learn Unity interface', 'Practice with 3D scenes', 'Understand physics'],
                tools: ['Unity', 'Unity Hub', 'Visual Studio'],
                duration: '3-4 months',
            },
            {
                id: 'csharp-programming',
                title: 'C# Programming',
                description: 'Learn C# for Unity scripting.',
                tips: ['Master OOP concepts', 'Practice with Unity scripts', 'Learn debugging'],
                tools: ['C#', 'Visual Studio', 'Unity'],
                duration: '2-3 months',
            },
            {
                id: '3d-modeling',
                title: '3D Modeling & Animation',
                description: 'Learn 3D modeling and animation for VR/AR.',
                tips: ['Start with Blender', 'Learn texturing', 'Practice character animation'],
                tools: ['Blender', 'Maya', '3ds Max'],
                duration: '3-4 months',
            },
            {
                id: 'vr-development',
                title: 'VR Development',
                description: 'Build virtual reality applications.',
                tips: ['Learn VR SDKs', 'Practice with VR headsets', 'Focus on user experience'],
                tools: ['Oculus SDK', 'OpenXR', 'SteamVR'],
                duration: '2-3 months',
            },
            {
                id: 'ar-development',
                title: 'AR Development',
                description: 'Create augmented reality experiences.',
                tips: ['Learn ARCore/ARKit', 'Practice with mobile AR', 'Understand computer vision'],
                tools: ['ARCore', 'ARKit', 'Vuforia'],
                duration: '2-3 months',
            },
            {
                id: 'xr-portfolio',
                title: 'XR Portfolio & Demos',
                description: 'Build portfolio with AR/VR projects.',
                tips: ['Create diverse experiences', 'Document your process', 'Share demos online'],
                tools: ['GitHub', 'YouTube', 'Portfolio Website'],
                duration: '2-3 months',
            },
        ],
    },
    {
        id: 'technical-writer',
        title: 'Technical Writer',
        icon: '✍️',
        field: 'Technical Writing',
        stream: ['Any', 'Writing Background'],
        description: 'Create technical documentation, manuals, and educational content.',
        salaryRange: '₹4-15 LPA',
        difficulty: 'Beginner',
        timeToComplete: '6-12 months',
        roadmap: [
            {
                id: 'writing-skills',
                title: 'Writing Skills',
                description: 'Develop strong writing and communication skills.',
                tips: ['Practice daily writing', 'Learn grammar rules', 'Study technical writing styles'],
                tools: ['Grammar Books', 'Writing Tools', 'Style Guides'],
                duration: '2-3 months',
            },
            {
                id: 'tech-concepts',
                title: 'Technical Concepts',
                description: 'Learn basic technical concepts and terminology.',
                tips: ['Choose a tech domain', 'Learn programming basics', 'Understand software concepts'],
                tools: ['Online Courses', 'Technical Books', 'Programming Languages'],
                duration: '3-4 months',
            },
            {
                id: 'documentation-tools',
                title: 'Documentation Tools',
                description: 'Master tools for technical documentation.',
                tips: ['Learn markdown', 'Practice with documentation platforms', 'Version control basics'],
                tools: ['Markdown', 'Git', 'Confluence', 'Notion'],
                duration: '1-2 months',
            },
            {
                id: 'content-creation',
                title: 'Content Creation',
                description: 'Start creating technical content and blogs.',
                tips: ['Write tutorials', 'Create how-to guides', 'Build your blog'],
                tools: ['Medium', 'Dev.to', 'Personal Blog'],
                duration: '2-3 months',
            },
            {
                id: 'freelance-writing',
                title: 'Freelance Writing',
                description: 'Start freelance technical writing projects.',
                tips: ['Build writing portfolio', 'Find clients', 'Deliver quality work'],
                tools: ['Upwork', 'Contently', 'Freelancer'],
                duration: '3-6 months',
            },
            {
                id: 'writing-career',
                title: 'Writing Career',
                description: 'Apply for technical writing positions.',
                tips: ['Build strong portfolio', 'Network with writers', 'Apply to companies'],
                tools: ['LinkedIn', 'Writing Communities', 'Job Boards'],
                duration: '2-3 months',
            },
        ],
    },
    {
        id: 'digital-marketer',
        title: 'Digital Marketer',
        icon: '📱',
        field: 'Digital Marketing',
        stream: ['BBA', 'Any'],
        description: 'Promote products and services through digital channels.',
        salaryRange: '₹4-18 LPA',
        difficulty: 'Beginner',
        timeToComplete: '6-12 months',
        roadmap: [
            {
                id: 'marketing-basics',
                title: 'Marketing Fundamentals',
                description: 'Learn basic marketing concepts and principles.',
                tips: ['Study consumer behavior', 'Learn marketing mix', 'Understand digital landscape'],
                tools: ['Marketing Books', 'Online Courses', 'Google Digital Garage'],
                duration: '1-2 months',
            },
            {
                id: 'seo-basics',
                title: 'SEO & Content Marketing',
                description: 'Master search engine optimization and content strategy.',
                tips: ['Learn keyword research', 'Practice on-page SEO', 'Create quality content'],
                tools: ['Google Analytics', 'SEMrush', 'Ahrefs'],
                duration: '2-3 months',
            },
            {
                id: 'social-media',
                title: 'Social Media Marketing',
                description: 'Learn social media strategy and management.',
                tips: ['Understand each platform', 'Create engaging content', 'Learn advertising'],
                tools: ['Facebook Ads', 'Instagram', 'LinkedIn', 'Twitter'],
                duration: '2 months',
            },
            {
                id: 'analytics-tools',
                title: 'Analytics & Tools',
                description: 'Master marketing analytics and measurement tools.',
                tips: ['Learn Google Analytics', 'Understand KPIs', 'Create reports'],
                tools: ['Google Analytics', 'Google Tag Manager', 'Data Studio'],
                duration: '1-2 months',
            },
            {
                id: 'marketing-campaigns',
                title: 'Campaign Management',
                description: 'Plan and execute marketing campaigns.',
                tips: ['Create campaign strategies', 'A/B testing', 'Budget management'],
                tools: ['Google Ads', 'Facebook Ads Manager', 'Email Marketing Tools'],
                duration: '2-3 months',
            },
            {
                id: 'marketing-career',
                title: 'Marketing Career',
                description: 'Build portfolio and apply for marketing roles.',
                tips: ['Document your campaigns', 'Show results', 'Network with marketers'],
                tools: ['Portfolio', 'LinkedIn', 'Marketing Communities'],
                duration: '2-3 months',
            },
        ],
    },
    {
        id: 'entrepreneur',
        title: 'Entrepreneur/Startup Founder',
        icon: '🚀',
        field: 'Entrepreneurship',
        stream: ['Any Stream'],
        description: 'Start and scale your own business or startup.',
        salaryRange: '₹0-∞ LPA',
        difficulty: 'Advanced',
        timeToComplete: '12-60 months',
        roadmap: [
            {
                id: 'problem-identification',
                title: 'Problem Identification',
                description: 'Identify a real problem worth solving.',
                tips: ['Research market gaps', 'Talk to potential customers', 'Validate pain points'],
                tools: ['Customer Interviews', 'Market Research', 'Surveys'],
                duration: '2-3 months',
            },
            {
                id: 'market-research',
                title: 'Market Research',
                description: 'Conduct thorough market and competitor analysis.',
                tips: ['Study competitors', 'Analyze market size', 'Identify target audience'],
                tools: ['Google Trends', 'Industry Reports', 'Competitor Analysis'],
                duration: '2-3 months',
            },
            {
                id: 'mvp-development',
                title: 'MVP Development',
                description: 'Build a minimum viable product.',
                tips: ['Start simple', 'Focus on core features', 'Get user feedback'],
                tools: ['No-code Tools', 'Development Platforms', 'Prototyping Tools'],
                duration: '3-6 months',
            },
            {
                id: 'funding-strategy',
                title: 'Funding Strategy',
                description: 'Develop funding and investment strategy.',
                tips: ['Bootstrap initially', 'Prepare pitch deck', 'Network with investors'],
                tools: ['Pitch Deck Templates', 'Angel Networks', 'VC Platforms'],
                duration: '2-4 months',
            },
            {
                id: 'business-launch',
                title: 'Business Launch',
                description: 'Launch your product and acquire first customers.',
                tips: ['Start with beta users', 'Gather feedback', 'Iterate quickly'],
                tools: ['Landing Pages', 'Analytics', 'Customer Feedback Tools'],
                duration: '3-6 months',
            },
            {
                id: 'scaling-growth',
                title: 'Scaling & Growth',
                description: 'Scale your business and grow customer base.',
                tips: ['Focus on product-market fit', 'Hire the right team', 'Optimize operations'],
                tools: ['CRM Systems', 'Marketing Tools', 'Management Software'],
                duration: '12+ months',
            },
        ],
    },
];

// From components/CareerCard.tsx
interface CareerCardProps {
    career: Career;
    theme: Theme;
    onClick: () => void;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, theme, onClick }) => {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Beginner':
                return 'text-green-500';
            case 'Intermediate':
                return 'text-yellow-500';
            case 'Advanced':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    const getDifficultyIcon = (difficulty: string) => {
        switch (difficulty) {
            case 'Beginner':
                return <Zap className="w-4 h-4" />;
            case 'Intermediate':
                return <TrendingUp className="w-4 h-4" />;
            case 'Advanced':
                return <Users className="w-4 h-4" />;
            default:
                return <Clock className="w-4 h-4" />;
        }
    };

    return (
        <div
            onClick={onClick}
            className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
                theme.isDark
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-300'
            }`}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-2">{career.icon}</div>
                    <div
                        className={`flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${
                            theme.isDark ? 'bg-gray-700' : 'bg-gray-100'
                        }`}
                    >
                        {getDifficultyIcon(career.difficulty)}
                        <span className={getDifficultyColor(career.difficulty)}>{career.difficulty}</span>
                    </div>
                </div>

                {/* Title & Field */}
                <h3
                    className={`text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors ${
                        theme.isDark ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    {career.title}
                </h3>

                <p className={`text-sm font-medium mb-3 ${theme.isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                    {career.field}
                </p>

                {/* Description */}
                <p className={`text-sm mb-4 leading-relaxed ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {career.description}
                </p>

                {/* Streams */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {career.stream.map((stream, index) => (
                        <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full ${
                                theme.isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                            }`}
                        >
                            {stream}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className={`text-xs ${theme.isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {career.timeToComplete}
                        </span>
                    </div>
                    <div className={`text-sm font-semibold ${theme.isDark ? 'text-green-400' : 'text-green-600'}`}>
                        {career.salaryRange}
                    </div>
                </div>

                {/* Roadmap Preview */}
                <div className="mt-4 flex items-center justify-center">
                    <div className="flex space-x-1">
                        {career.roadmap.slice(0, 6).map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all group-hover:scale-110 ${
                                    theme.isDark ? 'bg-blue-500/30' : 'bg-blue-300'
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hover Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                <div className={`w-full h-full rounded-2xl ${theme.isDark ? 'bg-gray-800' : 'bg-white'}`}></div>
            </div>
        </div>
    );
};

// From components/CareerGrid.tsx
interface CareerGridProps {
    careers: Career[];
    theme: Theme;
    onCareerClick: (career: Career) => void;
}

const CareerGrid: React.FC<CareerGridProps> = ({ careers, theme, onCareerClick }) => {
    return (
        <section
            id="careers"
            className={`py-20 ${
                theme.isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800'
                    : 'bg-gradient-to-br from-gray-50 to-white'
            }`}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-6 ${
                            theme.isDark ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        Explore Your
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-3">
                            Career Options
                        </span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Discover 20+ carefully curated career paths with interactive roadmaps, salary insights, and step-by-step
                        learning plans tailored for every graduate.
                    </p>
                </div>

                {/* Results Count */}
                <div className={`mb-8 text-center ${theme.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p className="text-lg">
                        Showing <span className="font-semibold text-blue-500">{careers.length}</span> career
                        {careers.length !== 1 ? 's' : ''}
                        {careers.length === 0 && ' - Try adjusting your search or filter'}
                    </p>
                </div>

                {/* Career Grid */}
                {careers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {careers.map((career, index) => (
                            <div
                                key={career.id}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CareerCard career={career} theme={theme} onClick={() => onCareerClick(career)} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className={`text-2xl font-bold mb-4 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                            No careers found
                        </h3>
                        <p className={`text-lg ${theme.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Try adjusting your search terms or filter settings
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

// From components/CareerHelpModal.tsx
interface CareerHelpModalProps {
    isOpen: boolean;
    theme: Theme;
    onClose: () => void;
}

const CareerHelpModal: React.FC<CareerHelpModalProps> = ({ isOpen, theme, onClose }) => {
    if (!isOpen) return null;

    const careerCoaches = [
        {
            name: 'Mindler',
            type: 'Platform',
            specialization: 'Comprehensive Career Counseling',
            description: 'Leading online career counseling platform for students Class 8-12 and graduates.',
            features: [
                'World-class career assessments',
                'Personalized guidance',
                'Virtual career internships',
                'Exhaustive career library',
                'Overseas application guidance',
            ],
            idealFor: 'Students from Class 8 onwards, stream selection, career planning',
            contact: {
                website: 'https://www.mindler.com',
                type: 'website',
            },
            rating: 4.8,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'iDreamCareer',
            type: 'Platform',
            specialization: 'International Career Guidance',
            description: 'Prominent platform for Indian and international career guidance with 850+ certified coaches.',
            features: [
                'Counseling for India and abroad',
                '850+ certified career coaches',
                'University shortlisting',
                'Impact on 1M+ students',
            ],
            idealFor: 'Students planning abroad or elite colleges in India',
            contact: {
                website: 'https://www.idreamcareer.com',
                type: 'website',
            },
            rating: 4.7,
            color: 'from-purple-500 to-pink-500',
        },
        {
            name: 'CareerGuide.com',
            type: 'Platform',
            specialization: 'Psychometric Assessments',
            description: 'Wide range of psychometric assessments and career expert marketplace.',
            features: [
                '30+ career assessment tests',
                '1:1 online career counseling',
                'Career expert marketplace',
                'Stream, skill, personality tests',
            ],
            idealFor: 'Students (Class 9-12), undergraduates, working professionals',
            contact: {
                website: 'https://www.careerguide.com',
                email: 'info@careerguide.com',
                type: 'website',
            },
            rating: 4.5,
            color: 'from-green-500 to-teal-500',
        },
        {
            name: 'Diksha Arora',
            type: 'Individual Coach',
            specialization: 'Interview Coach & Influencer',
            description: 'National bestselling author focusing on resume writing, LinkedIn optimization, and interview prep.',
            features: ['Job search strategies', 'Interview skills training', 'Personal branding', 'Salary negotiation'],
            idealFor: 'Fresh graduates and experienced professionals',
            contact: {
                instagram: '@edu_dikshaarora',
                youtube: '@dikshaarora',
                type: 'social',
            },
            rating: 4.6,
            color: 'from-orange-500 to-red-500',
        },
        {
            name: 'Narendra (@placementdrive)',
            type: 'Influencer',
            specialization: 'Job Updates & Tech Courses',
            description: 'Leading career resource providing job updates, internships, and free tech courses.',
            features: [
                'Job updates and internships',
                'Free tech courses (Cisco, IBM, Google)',
                'Making job hunting accessible',
                'Tech field specialization',
            ],
            idealFor: 'Indian students, especially in tech fields',
            contact: {
                instagram: '@placementdrive',
                type: 'social',
            },
            rating: 4.4,
            color: 'from-indigo-500 to-purple-500',
        },
        {
            name: 'Jitin Chawla',
            type: 'Individual Coach',
            specialization: 'Career Development & Study Abroad',
            description: 'Well-regarded career counselor offering personalized guidance and study abroad support.',
            features: [
                'Personalized career counseling',
                'Study abroad guidance',
                'Profile building for admissions',
                'Application services',
            ],
            idealFor: 'Students seeking comprehensive counseling and study abroad assistance',
            contact: {
                website: 'https://www.jitinchawla.com',
                type: 'website',
            },
            rating: 4.7,
            color: 'from-teal-500 to-blue-500',
        },
        {
            name: 'Anjali Saraogi (Career Saarthi)',
            type: 'Individual Coach',
            specialization: 'Strategic Career Planning',
            description: 'IIM-Ahmedabad alumna specializing in personalized strategic career planning.',
            features: [
                'Personalized strategic planning',
                'Transforming futures focus',
                'Two detailed counseling sessions',
                '1-year post-counseling support',
            ],
            idealFor: 'Students and professionals seeking in-depth career planning',
            contact: {
                platform: 'Edumilestones',
                search: 'Career Saarthi',
                type: 'platform',
            },
            rating: 4.8,
            color: 'from-pink-500 to-rose-500',
        },
        {
            name: 'Dr. Karan Gupta',
            type: 'Individual Coach',
            specialization: 'Psychometric Assessment Expert',
            description: 'Renowned career counselor certified to administer various psychometric assessments.',
            features: [
                'Personalized 1-on-1 sessions',
                'MBTI, Strong assessments',
                'Career development guidance',
                'Entrance exam guidance',
            ],
            idealFor: 'Individuals seeking in-depth self-assessment',
            contact: {
                website: 'Contact via official website',
                type: 'website',
            },
            rating: 4.6,
            color: 'from-violet-500 to-purple-500',
        },
        {
            name: 'Aman Dhattarwal',
            type: 'Educator & Entrepreneur',
            specialization: 'Academic Preparation & Motivation',
            description: 'Dynamic educator who founded Apni Kaksha, focusing on academic and career guidance.',
            features: ['Academic preparation', 'Career guidance', 'Motivational content', 'Entrepreneurship insights'],
            idealFor: 'Engineering students and those seeking motivation',
            contact: {
                youtube: 'Aman Dhattarwal',
                website: 'Apni Kaksha',
                type: 'social',
            },
            rating: 4.5,
            color: 'from-yellow-500 to-orange-500',
        },
        {
            name: 'Shweta Arora',
            type: 'Influencer',
            specialization: 'Career Growth & Personal Development',
            description: 'IIM-A graduate empowering students and young professionals with career advice.',
            features: ['Career growth strategies', 'Personal development', 'IIM-A insights', 'Professional advancement'],
            idealFor: 'Students and young professionals seeking inspiration',
            contact: {
                instagram: '@shwetaarora.in',
                youtube: 'Shweta Arora',
                type: 'social',
            },
            rating: 4.4,
            color: 'from-emerald-500 to-teal-500',
        },
    ];

    const getContactIcon = (contactType: string) => {
        switch (contactType) {
            case 'website':
                return <ExternalLink className="w-4 h-4" />;
            case 'social':
                return <MessageCircle className="w-4 h-4" />;
            case 'platform':
                return <User className="w-4 h-4" />;
            default:
                return <ExternalLink className="w-4 h-4" />;
        }
    };

    const handleContactClick = (coach: any) => {
        if (coach.contact.website) {
            window.open(coach.contact.website, '_blank');
        } else if (coach.contact.instagram) {
            window.open(`https://instagram.com/${coach.contact.instagram.replace('@', '')}`, '_blank');
        } else if (coach.contact.youtube) {
            window.open(`https://youtube.com/search?q=${encodeURIComponent(coach.contact.youtube)}`, '_blank');
        } else {
            alert('Please search for this coach online or check their official platforms for contact information.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
                className={`relative max-w-7xl w-full max-h-[90vh] overflow-hidden rounded-2xl ${
                    theme.isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                }`}
            >
                {/* Header */}
                <div
                    className={`sticky top-0 z-10 p-6 border-b backdrop-blur-lg ${
                        theme.isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className={`text-3xl font-bold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                🎯 Career Guidance Experts
                            </h2>
                            <p className={`text-lg mt-2 ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Top career coaches and influencers to guide your professional journey in India
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className={`p-2 rounded-lg transition-all hover:scale-105 ${
                                theme.isDark
                                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                            }`}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {careerCoaches.map((coach, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                    theme.isDark
                                        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50'
                                        : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-300'
                                }`}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${coach.color} text-white`}>
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-bold ${
                                                        theme.isDark ? 'text-white' : 'text-gray-900'
                                                    }`}
                                                >
                                                    {coach.name}
                                                </h3>
                                                <span
                                                    className={`text-sm px-2 py-1 rounded-full ${
                                                        theme.isDark
                                                            ? 'bg-blue-500/20 text-blue-300'
                                                            : 'bg-blue-100 text-blue-700'
                                                    }`}
                                                >
                                                    {coach.type}
                                                </span>
                                            </div>
                                        </div>

                                        <p
                                            className={`text-lg font-semibold mb-2 ${
                                                theme.isDark ? 'text-blue-400' : 'text-blue-600'
                                            }`}
                                        >
                                            {coach.specialization}
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                        <span
                                            className={`text-sm font-semibold ${
                                                theme.isDark ? 'text-gray-300' : 'text-gray-600'
                                            }`}
                                        >
                                            {coach.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`text-sm mb-4 leading-relaxed ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {coach.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className={`text-sm font-semibold mb-2 ${theme.isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-1">
                                        {coach.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className={`text-xs flex items-start ${
                                                    theme.isDark ? 'text-gray-400' : 'text-gray-600'
                                                }`}
                                            >
                                                <span className="text-green-500 mr-2">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Ideal For */}
                                <div className="mb-4">
                                    <h4 className={`text-sm font-semibold mb-1 ${theme.isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                        Ideal For:
                                    </h4>
                                    <p className={`text-xs ${theme.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {coach.idealFor}
                                    </p>
                                </div>

                                {/* Contact Button */}
                                <button
                                    onClick={() => handleContactClick(coach)}
                                    className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                                        theme.isDark
                                            ? `bg-gradient-to-r ${coach.color} text-white hover:shadow-lg`
                                            : `bg-gradient-to-r ${coach.color} text-white hover:shadow-lg`
                                    }`}
                                >
                                    {getContactIcon(coach.contact.type)}
                                    <span>Connect Now</span>
                                </button>

                                {/* Contact Info */}
                                <div className="mt-3 text-xs text-center">
                                    {coach.contact.website && (
                                        <p className={theme.isDark ? 'text-gray-400' : 'text-gray-500'}>
                                            Website: {coach.contact.website.replace('https://', '')}
                                        </p>
                                    )}
                                    {coach.contact.instagram && (
                                        <p className={theme.isDark ? 'text-gray-400' : 'text-gray-500'}>
                                            Instagram: {coach.contact.instagram}
                                        </p>
                                    )}
                                    {coach.contact.youtube && (
                                        <p className={theme.isDark ? 'text-gray-400' : 'text-gray-500'}>
                                            YouTube: {coach.contact.youtube}
                                        </p>
                                    )}
                                    {coach.contact.email && (
                                        <p className={theme.isDark ? 'text-gray-400' : 'text-gray-500'}>Email: {coach.contact.email}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Tips */}
                    <div
                        className={`mt-12 p-6 rounded-2xl border ${
                            theme.isDark
                                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700'
                                : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200'
                        } backdrop-blur-lg`}
                    >
                        <h3 className={`text-xl font-bold mb-4 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                            💡 How to Find Contact Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h4 className={`font-semibold mb-2 ${theme.isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    Official Websites:
                                </h4>
                                <p className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
                                    Most coaches have "Contact Us" pages with phone numbers, emails, or contact forms.
                                </p>
                            </div>
                            <div>
                                <h4 className={`font-semibold mb-2 ${theme.isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    LinkedIn:
                                </h4>
                                <p className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
                                    Search for their names on LinkedIn for direct messaging or contact information.
                                </p>
                            </div>
                            <div>
                                <h4 className={`font-semibold mb-2 ${theme.isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    Social Media:
                                </h4>
                                <p className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
                                    Check Instagram/YouTube bios for "Business Inquiries" emails or direct messaging.
                                </p>
                            </div>
                            <div>
                                <h4 className={`font-semibold mb-2 ${theme.isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    Platforms:
                                </h4>
                                <p className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
                                    Websites like Edumilestones list career counselors with booking options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// From components/CareerModal.tsx
interface CareerModalProps {
    career: Career | null;
    theme: Theme;
    onClose: () => void;
}

const CareerModal: React.FC<CareerModalProps> = ({ career, theme, onClose }) => {
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (career) {
            const saved = localStorage.getItem(`career_progress_${career.id}`);
            if (saved) {
                const savedSteps = JSON.parse(saved);
                setCompletedSteps(savedSteps);
                setProgress((savedSteps.length / career.roadmap.length) * 100);
            } else {
                setCompletedSteps([]);
                setProgress(0);
            }
        }
    }, [career]);

    const toggleStepComplete = (stepId: string) => {
        if (!career) return;

        const newCompleted = completedSteps.includes(stepId)
            ? completedSteps.filter((id) => id !== stepId)
            : [...completedSteps, stepId];

        setCompletedSteps(newCompleted);
        setProgress((newCompleted.length / career.roadmap.length) * 100);
        localStorage.setItem(`career_progress_${career.id}`, JSON.stringify(newCompleted));
    };

    const downloadRoadmap = () => {
        if (!career) return;

        const content = `
${career.title} - Career Roadmap

Description: ${career.description}
Field: ${career.field}
Salary Range: ${career.salaryRange}
Time to Complete: ${career.timeToComplete}
Difficulty: ${career.difficulty}

ROADMAP:
${career.roadmap
    .map(
        (step, index) => `
${index + 1}. ${step.title} (${step.duration})
   ${step.description}
   
   Tips:
   ${step.tips.map((tip) => `    • ${tip}`).join('\n')}
   
   Tools:
   ${step.tools.map((tool) => `    • ${tool}`).join('\n')}
`
    )
    .join('\n')}

Generated by Career Companion
    `;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${career.title.replace(/\s+/g, '_')}_roadmap.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const shareRoadmap = () => {
        if (!career) return;

        if (navigator.share) {
            navigator.share({
                title: `${career.title} Career Roadmap`,
                text: `Check out this career roadmap for ${career.title}!`,
                url: window.location.href,
            });
        } else {
            // Fallback: copy to clipboard
            const url = window.location.href;
            navigator.clipboard.writeText(url);
            alert('Link copied to clipboard!');
        }
    };

    if (!career) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
                className={`relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl ${
                    theme.isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                }`}
            >
                {/* Header */}
                <div
                    className={`sticky top-0 z-10 p-6 border-b backdrop-blur-lg ${
                        theme.isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
                    }`}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="text-4xl">{career.icon}</div>
                                <div>
                                    <h2 className={`text-3xl font-bold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {career.title}
                                    </h2>
                                    <p className={`text-lg ${theme.isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                        {career.field}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mb-4">
                                <div className="flex items-center space-x-2">
                                    <DollarSign className="w-4 h-4 text-green-500" />
                                    <span className={`text-sm ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {career.salaryRange}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4 text-blue-500" />
                                    <span className={`text-sm ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {career.timeToComplete}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <TrendingUp className="w-4 h-4 text-purple-500" />
                                    <span className={`text-sm ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {career.difficulty}
                                    </span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-sm font-medium ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Progress
                                    </span>
                                    <span className="text-sm font-bold text-blue-500">{Math.round(progress)}%</span>
                                </div>
                                <div className={`w-full h-2 rounded-full ${theme.isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                    <div
                                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            <p className={`text-sm leading-relaxed ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {career.description}
                            </p>
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                            <button
                                onClick={shareRoadmap}
                                className={`p-2 rounded-lg transition-all hover:scale-105 ${
                                    theme.isDark
                                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                                }`}
                            >
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={downloadRoadmap}
                                className={`p-2 rounded-lg transition-all hover:scale-105 ${
                                    theme.isDark
                                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                                }`}
                            >
                                <Download className="w-5 h-5" />
                            </button>
                            <button
                                onClick={onClose}
                                className={`p-2 rounded-lg transition-all hover:scale-105 ${
                                    theme.isDark
                                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                                }`}
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                    {/* Streams */}
                    <div className="mb-6">
                        <h3 className={`text-lg font-semibold mb-3 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                            Suitable for graduates from:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {career.stream.map((stream, index) => (
                                <span
                                    key={index}
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        theme.isDark
                                            ? 'bg-purple-500/20 text-purple-300'
                                            : 'bg-purple-100 text-purple-700'
                                    }`}
                                >
                                    {stream}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Roadmap */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <BookOpen className="w-6 h-6 text-blue-500" />
                            <h3 className={`text-2xl font-bold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                Career Roadmap
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {career.roadmap.map((step, index) => (
                                <RoadmapStepComponent
                                    key={step.id}
                                    step={step}
                                    theme={theme}
                                    isCompleted={completedSteps.includes(step.id)}
                                    stepNumber={index + 1}
                                    onToggleComplete={() => toggleStepComplete(step.id)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Completion Badge */}
                    {progress === 100 && (
                        <div
                            className={`mt-8 p-6 rounded-2xl text-center ${
                                theme.isDark
                                    ? 'bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/50'
                                    : 'bg-gradient-to-r from-green-50 to-green-100 border border-green-300'
                            }`}
                        >
                            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className={`text-2xl font-bold mb-2 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                Congratulations! 🎉
                            </h3>
                            <p className={`text-lg ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                You're now ready to pursue a career in {career.title}!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// From components/Contact.tsx
interface ContactProps {
    theme: Theme;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email Us',
            details: 'skillbridge@cvrgu.edu.in',
            description: 'Send us your queries anytime',
            action: 'mailto:skillbridge@cvrgu.edu.in',
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Call Us',
            details: '+91 98765 43210',
            description: 'Mon-Fri, 9:00 AM - 6:00 PM',
            action: 'tel:+919876543210',
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Visit Us',
            details: 'C.V. Raman Global University',
            description: 'Bhubaneswar, Odisha, India',
            action: 'https://maps.google.com/?q=CV+Raman+Global+University+Bhubaneswar',
        },
    ];

    const supportOptions = [
        {
            icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
            title: 'General Inquiry',
            description: 'Questions about our platform, features, or career guidance',
            example: 'How do I choose the right career path for my background?',
        },
        {
            icon: <Users className="w-8 h-8 text-green-500" />,
            title: 'Partnership',
            description: 'Collaborate with us or integrate our platform',
            example: "We'd like to partner with SkillBridge for our students",
        },
        {
            icon: <Clock className="w-8 h-8 text-purple-500" />,
            title: 'Technical Support',
            description: 'Report bugs, suggest features, or get technical help',
            example: "I'm having trouble accessing my saved roadmaps",
        },
    ];

    return (
        <section
            id="contact"
            className={`py-20 ${
                theme.isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800'
                    : 'bg-gradient-to-br from-gray-50 to-white'
            }`}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-6 ${
                            theme.isDark ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        Get In
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-3">
                            Touch
                        </span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Have questions about your career journey? Need guidance on our platform? We're here to help you succeed
                        every step of the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div
                        className={`p-8 rounded-2xl border ${
                            theme.isDark
                                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                        }`}
                    >
                        <h3 className={`text-2xl font-bold mb-6 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                            Send us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            theme.isDark ? 'text-gray-300' : 'text-gray-700'
                                        }`}
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                            theme.isDark
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            theme.isDark ? 'text-gray-300' : 'text-gray-700'
                                        }`}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                            theme.isDark
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={`block text-sm font-medium mb-2 ${theme.isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Subject
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                        theme.isDark
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="career-guidance">Career Guidance</option>
                                    <option value="technical-support">Technical Support</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="feedback">Feedback & Suggestions</option>
                                </select>
                            </div>

                            <div>
                                <label className={`block text-sm font-medium mb-2 ${theme.isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                                        theme.isDark
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                                    theme.isDark
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                                }`}
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.action}
                                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className={`block p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                        theme.isDark
                                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50'
                                            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-300'
                                    }`}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className={`p-3 rounded-lg ${
                                                theme.isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                                            }`}
                                        >
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4
                                                className={`text-lg font-semibold mb-1 ${
                                                    theme.isDark ? 'text-white' : 'text-gray-900'
                                                }`}
                                            >
                                                {info.title}
                                            </h4>
                                            <p
                                                className={`font-medium mb-1 ${
                                                    theme.isDark ? 'text-blue-400' : 'text-blue-600'
                                                }`}
                                            >
                                                {info.details}
                                            </p>
                                            <p className={`text-sm ${theme.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Support Options */}
                        <div
                            className={`p-6 rounded-2xl border ${
                                theme.isDark
                                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700'
                                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200'
                            } backdrop-blur-lg`}
                        >
                            <h4 className={`text-xl font-bold mb-4 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                How can we help you?
                            </h4>
                            <div className="space-y-4">
                                {supportOptions.map((option, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0">{option.icon}</div>
                                        <div>
                                            <h5
                                                className={`font-semibold mb-1 ${
                                                    theme.isDark ? 'text-white' : 'text-gray-900'
                                                }`}
                                            >
                                                {option.title}
                                            </h5>
                                            <p
                                                className={`text-sm mb-2 ${
                                                    theme.isDark ? 'text-gray-300' : 'text-gray-600'
                                                }`}
                                            >
                                                {option.description}
                                            </p>
                                            <p
                                                className={`text-xs italic ${
                                                    theme.isDark ? 'text-gray-400' : 'text-gray-500'
                                                }`}
                                            >
                                                Example: "{option.example}"
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Response Time */}
                        <div
                            className={`p-6 rounded-2xl border text-center ${
                                theme.isDark
                                    ? 'bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500/50'
                                    : 'bg-gradient-to-br from-green-50 to-green-100 border-green-300'
                            }`}
                        >
                            <Clock className="w-8 h-8 text-green-500 mx-auto mb-3" />
                            <h4 className={`text-lg font-semibold mb-2 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                Quick Response Time
                            </h4>
                            <p className={`text-sm ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                We typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// From components/FreeRoadmapModal.tsx
interface FreeRoadmapModalProps {
    isOpen: boolean;
    theme: Theme;
    onClose: () => void;
}

const FreeRoadmapModal: React.FC<FreeRoadmapModalProps> = ({ isOpen, theme, onClose }) => {
    if (!isOpen) return null;

    const roadmaps = [
        {
            category: 'Frontend Development',
            icon: <Globe className="w-6 h-6" />,
            color: 'from-blue-500 to-cyan-500',
            items: [
                { name: 'Frontend Roadmap', url: 'https://roadmap.sh/frontend', description: 'Complete guide to becoming a frontend developer' },
                { name: 'Frontend Beginner Roadmap', url: 'https://roadmap.sh/frontend?r=frontend-beginner', description: 'Step-by-step path for beginners' },
                { name: 'React Roadmap', url: 'https://roadmap.sh/react', description: 'Master React.js development' },
                { name: 'Vue Roadmap', url: 'https://roadmap.sh/vue', description: 'Learn Vue.js framework' },
                { name: 'Angular Roadmap', url: 'https://roadmap.sh/angular', description: 'Complete Angular development guide' }
            ]
        },
        {
            category: 'Backend Development',
            icon: <Database className="w-6 h-6" />,
            color: 'from-green-500 to-emerald-500',
            items: [
                { name: 'Backend Roadmap', url: 'https://roadmap.sh/backend', description: 'Complete backend development guide' },
                { name: 'Backend Beginner Roadmap', url: 'https://roadmap.sh/backend?r=backend-beginner', description: 'Backend basics for beginners' },
                { name: 'Node.js Roadmap', url: 'https://roadmap.sh/nodejs', description: 'Master Node.js development' },
                { name: 'PHP Roadmap', url: 'https://roadmap.sh/php', description: 'Learn PHP development' },
                { name: 'Spring Boot Roadmap', url: 'https://roadmap.sh/spring-boot', description: 'Java Spring Boot framework' }
            ]
        },
        {
            category: 'Full Stack & DevOps',
            icon: <Cloud className="w-6 h-6" />,
            color: 'from-purple-500 to-pink-500',
            items: [
                { name: 'Full Stack Roadmap', url: 'https://roadmap.sh/full-stack', description: 'Complete full stack development' },
                { name: 'DevOps Roadmap', url: 'https://roadmap.sh/devops', description: 'DevOps engineering path' },
                { name: 'DevOps Beginner Roadmap', url: 'https://roadmap.sh/devops?r=devops-beginner', description: 'DevOps for beginners' },
                { name: 'Docker Roadmap', url: 'https://roadmap.sh/docker', description: 'Containerization with Docker' },
                { name: 'Kubernetes Roadmap', url: 'https://roadmap.sh/kubernetes', description: 'Container orchestration' }
            ]
        },
        {
            category: 'Programming Languages',
            icon: <Code className="w-6 h-6" />,
            color: 'from-orange-500 to-red-500',
            items: [
                { name: 'JavaScript Roadmap', url: 'https://roadmap.sh/javascript', description: 'Master JavaScript programming' },
                { name: 'TypeScript Roadmap', url: 'https://roadmap.sh/typescript', description: 'Learn TypeScript development' },
                { name: 'Python Roadmap', url: 'https://roadmap.sh/python', description: 'Python programming guide' },
                { name: 'Java Roadmap', url: 'https://roadmap.sh/java', description: 'Java development path' },
                { name: 'C++ Roadmap', url: 'https://roadmap.sh/cpp', description: 'C++ programming mastery' },
                { name: 'Go Roadmap', url: 'https://roadmap.sh/go', description: 'Go programming language' },
                { name: 'Rust Roadmap', url: 'https://roadmap.sh/rust', description: 'Systems programming with Rust' }
            ]
        },
        {
            category: 'Mobile Development',
            icon: <Smartphone className="w-6 h-6" />,
            color: 'from-indigo-500 to-purple-500',
            items: [
                { name: 'Android Roadmap', url: 'https://roadmap.sh/android', description: 'Android app development' },
                { name: 'iOS Roadmap', url: 'https://roadmap.sh/ios', description: 'iOS app development' },
                { name: 'Flutter Roadmap', url: 'https://roadmap.sh/flutter', description: 'Cross-platform with Flutter' },
                { name: 'React Native Roadmap', url: 'https://roadmap.sh/react-native', description: 'Mobile apps with React Native' }
            ]
        },
        {
            category: 'Data & AI',
            icon: <Brain className="w-6 h-6" />,
            color: 'from-teal-500 to-blue-500',
            items: [
                { name: 'AI and Data Scientist Roadmap', url: 'https://roadmap.sh/ai-data-scientist', description: 'Data science and AI path' },
                { name: 'AI Engineer Roadmap', url: 'https://roadmap.sh/ai-engineer', description: 'AI engineering specialization' },
                { name: 'Data Analyst Roadmap', url: 'https://roadmap.sh/data-analyst', description: 'Data analysis career path' },
                { name: 'MLOps Roadmap', url: 'https://roadmap.sh/mlops', description: 'Machine Learning Operations' },
                { name: 'Data Structures and Algorithms', url: 'https://roadmap.sh/datastructures-and-algorithms', description: 'DSA fundamentals' }
            ]
        },
        {
            category: 'Cloud & Infrastructure',
            icon: <Cloud className="w-6 h-6" />,
            color: 'from-cyan-500 to-blue-500',
            items: [
                { name: 'AWS Roadmap', url: 'https://roadmap.sh/aws', description: 'Amazon Web Services mastery' },
                { name: 'Cloudflare Roadmap', url: 'https://roadmap.sh/cloudflare', description: 'Cloudflare platform guide' },
                { name: 'Linux Roadmap', url: 'https://roadmap.sh/linux', description: 'Linux system administration' },
                { name: 'Terraform Roadmap', url: 'https://roadmap.sh/terraform', description: 'Infrastructure as Code' }
            ]
        },
        {
            category: 'Security & Quality',
            icon: <Shield className="w-6 h-6" />,
            color: 'from-red-500 to-pink-500',
            items: [
                { name: 'Cyber Security Roadmap', url: 'https://roadmap.sh/cyber-security', description: 'Cybersecurity career path' },
                { name: 'QA Roadmap', url: 'https://roadmap.sh/qa', description: 'Quality Assurance testing' },
                { name: 'AI Red Teaming Roadmap', url: 'https://roadmap.sh/ai-red-teaming', description: 'AI security testing' }
            ]
        },
        {
            category: 'Databases & APIs',
            icon: <Database className="w-6 h-6" />,
            color: 'from-emerald-500 to-teal-500',
            items: [
                { name: 'PostgreSQL Roadmap', url: 'https://roadmap.sh/postgresql-dba', description: 'PostgreSQL database administration' },
                { name: 'SQL Roadmap', url: 'https://roadmap.sh/sql', description: 'SQL database querying' },
                { name: 'MongoDB Roadmap', url: 'https://roadmap.sh/mongodb', description: 'NoSQL with MongoDB' },
                { name: 'Redis Roadmap', url: 'https://roadmap.sh/redis', description: 'In-memory data structure store' },
                { name: 'API Design Roadmap', url: 'https://roadmap.sh/api-design', description: 'RESTful API design' },
                { name: 'GraphQL Roadmap', url: 'https://roadmap.sh/graphql', description: 'GraphQL query language' }
            ]
        },
        {
            category: 'Specialized Paths',
            icon: <Wrench className="w-6 h-6" />,
            color: 'from-yellow-500 to-orange-500',
            items: [
                { name: 'Game Developer Roadmap', url: 'https://roadmap.sh/game-developer', description: 'Game development career' },
                { name: 'Server Side Game Developer', url: 'https://roadmap.sh/server-side-game-developer', description: 'Backend game development' },
                { name: 'Blockchain Roadmap', url: 'https://roadmap.sh/blockchain', description: 'Blockchain development' },
                { name: 'UX Design Roadmap', url: 'https://roadmap.sh/ux-design', description: 'User experience design' },
                { name: 'Technical Writer Roadmap', url: 'https://roadmap.sh/technical-writer', description: 'Technical writing career' },
                { name: 'Prompt Engineering Roadmap', url: 'https://roadmap.sh/prompt-engineering', description: 'AI prompt engineering' }
            ]
        },
        {
            category: 'Management & Architecture',
            icon: <BookOpen className="w-6 h-6" />,
            color: 'from-violet-500 to-purple-500',
            items: [
                { name: 'Product Manager Roadmap', url: 'https://roadmap.sh/product-manager', description: 'Product management career' },
                { name: 'Engineering Manager Roadmap', url: 'https://roadmap.sh/engineering-manager', description: 'Engineering leadership' },
                { name: 'Software Architect Roadmap', url: 'https://roadmap.sh/software-architect', description: 'Software architecture design' },
                { name: 'System Design Roadmap', url: 'https://roadmap.sh/system-design', description: 'Large-scale system design' },
                { name: 'Software Design and Architecture', url: 'https://roadmap.sh/software-design-architecture', description: 'Design patterns and architecture' }
            ]
        },
        {
            category: 'Additional Resources',
            icon: <Globe className="w-6 h-6" />,
            color: 'from-pink-500 to-rose-500',
            items: [
                { name: 'Computer Science Roadmap', url: 'https://roadmap.sh/computer-science', description: 'CS fundamentals' },
                { name: 'Git and GitHub', url: 'https://roadmap.sh/git-github', description: 'Version control mastery' },
                { name: 'Design System Roadmap', url: 'https://roadmap.sh/design-system', description: 'Design system creation' },
                { name: 'ASP.NET Core Roadmap', url: 'https://roadmap.sh/aspnet-core', description: 'Microsoft web framework' },
                { name: 'DevRel Engineer Roadmap', url: 'https://roadmap.sh/devrel', description: 'Developer relations career' },
                { name: 'AI Agents Roadmap', url: 'https://roadmap.sh/ai-agents', description: 'AI agent development' }
            ]
        }
    ];

    const bestPractices = [
        { name: 'Backend Performance Best Practices', url: 'https://roadmap.sh/best-practices/backend-performance' },
        { name: 'Frontend Performance Best Practices', url: 'https://roadmap.sh/best-practices/frontend-performance' },
        { name: 'Code Review Best Practices', url: 'https://roadmap.sh/best-practices/code-review' },
        { name: 'API Security Best Practices', url: 'https://roadmap.sh/best-practices/api-security' },
        { name: 'AWS Best Practices', url: 'https://roadmap.sh/best-practices/aws' }
    ];

    const questions = [
        { name: 'JavaScript Questions', url: 'https://roadmap.sh/questions/javascript' },
        { name: 'Node.js Questions', url: 'https://roadmap.sh/questions/nodejs' },
        { name: 'React Questions', url: 'https://roadmap.sh/questions/react' },
        { name: 'Backend Questions', url: 'https://roadmap.sh/questions/backend' },
        { name: 'Frontend Questions', url: 'https://roadmap.sh/questions/frontend' }
    ];

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
                className={`relative max-w-7xl w-full max-h-[90vh] overflow-hidden rounded-2xl ${
                    theme.isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                }`}
            >
                {/* Header */}
                <div
                    className={`sticky top-0 z-10 p-6 border-b backdrop-blur-lg ${
                        theme.isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className={`text-3xl font-bold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                🚀 Start Free Learning with Roadmaps
                            </h2>
                            <p className={`text-lg mt-2 ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Interactive roadmaps, guides and other educational content to help developers grow in their career.
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className={`p-2 rounded-lg transition-all hover:scale-105 ${
                                theme.isDark
                                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                            }`}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    {/* Roadmaps Grid */}
                    <div className="space-y-8">
                        {roadmaps.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                                        {category.icon}
                                    </div>
                                    <h3 className={`text-2xl font-bold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {category.category}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {category.items.map((item, itemIndex) => (
                                        <a
                                            key={itemIndex}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                                                theme.isDark
                                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50'
                                                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-300'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <h4
                                                    className={`font-semibold group-hover:text-blue-500 transition-colors ${
                                                        theme.isDark ? 'text-white' : 'text-gray-900'
                                                    }`}
                                                >
                                                    {item.name}
                                                </h4>
                                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                            </div>
                                            <p className={`text-sm ${theme.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {item.description}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Best Practices Section */}
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className={`text-2xl font-bold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Best Practices
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {bestPractices.map((practice, index) => (
                                    <a
                                        key={index}
                                        href={practice.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                                            theme.isDark
                                                ? 'bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500/50'
                                                : 'bg-gradient-to-br from-green-50 to-green-100 border-green-300'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <h4
                                                className={`font-semibold group-hover:text-green-500 transition-colors ${
                                                    theme.isDark ? 'text-white' : 'text-gray-900'
                                                }`}
                                            >
                                                {practice.name}
                                            </h4>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Questions Section */}
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h3 className={`text-2xl font-bold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Practice Questions
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {questions.map((question, index) => (
                                    <a
                                        key={index}
                                        href={question.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                                            theme.isDark
                                                ? 'bg-gradient-to-br from-purple-900/30 to-purple-800/30 border-purple-500/50'
                                                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <h4
                                                className={`font-semibold group-hover:text-purple-500 transition-colors ${
                                                    theme.isDark ? 'text-white' : 'text-gray-900'
                                                }`}
                                            >
                                                {question.name}
                                            </h4>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div
                        className={`mt-12 p-6 rounded-2xl border text-center ${
                            theme.isDark
                                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700'
                                : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200'
                        } backdrop-blur-lg`}
                    >
                        <p className={`text-lg font-semibold mb-2 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                            All roadmaps are provided by Roadmap.sh
                        </p>
                        <p className={`text-sm ${theme.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Interactive roadmaps, guides and other educational content to help developers grow in their career.
                        </p>
                        <a
                            href="https://roadmap.sh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 mt-4 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                                theme.isDark
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                            }`}
                        >
                            <ExternalLink className="w-5 h-5" />
                            <span>Visit Roadmap.sh</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// From components/Hero.tsx
interface HeroProps {
    theme: Theme;
    onOpenFreeRoadmap: () => void;
    onOpenCareerHelp: () => void;
}

const Hero: React.FC<HeroProps> = ({ theme, onOpenFreeRoadmap, onOpenCareerHelp }) => {
    const scrollToCareers = () => {
        document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
                theme.isDark
                    ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
                    : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
            }`}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
                        theme.isDark ? 'bg-blue-500' : 'bg-purple-400'
                    }`}
                ></div>
                <div
                    className={`absolute -bottom-40 -left-40 w-60 h-60 rounded-full opacity-20 animate-pulse ${
                        theme.isDark ? 'bg-purple-500' : 'bg-blue-400'
                    }`}
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    className={`absolute top-20 left-20 w-32 h-32 rounded-full opacity-10 animate-bounce ${
                        theme.isDark ? 'bg-pink-500' : 'bg-green-400'
                    }`}
                    style={{ animationDelay: '1s' }}
                ></div>
                <div
                    className={`absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-10 animate-bounce ${
                        theme.isDark ? 'bg-green-500' : 'bg-pink-400'
                    }`}
                    style={{ animationDelay: '3s' }}
                ></div>
            </div>

            <div className="container mx-auto px-4 py-20 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div
                        className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
                            theme.isDark
                                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                                : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200'
                        }`}
                    >
                        <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                        <span className={`text-sm font-medium ${theme.isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                            AI-Powered Career Guidance
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1
                        className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
                            theme.isDark ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        Shape Your Career{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            One Step at a Time
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Discover your perfect career path with interactive roadmaps, personalized guidance, and step-by-step
                        learning plans tailored for every graduate.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-blue-500" />
                            <span className={`font-semibold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                20+ Career Paths
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-purple-500" />
                            <span className={`font-semibold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                Interactive Roadmaps
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-pink-500" />
                            <span className={`font-semibold ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                                Personalized Guidance
                            </span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
                        <button
                            onClick={scrollToCareers}
                            className={`group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                                theme.isDark
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                            }`}
                        >
                            <span className="relative z-10 flex items-center">
                                Explore Career Paths
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        {/* Free Learning Button with Animation */}
                        <button
                            onClick={onOpenFreeRoadmap}
                            className={`group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-pulse ${
                                theme.isDark
                                    ? 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700'
                                    : 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700'
                            }`}
                            style={{
                                animation: 'pulse 2s infinite, bounce 3s infinite',
                            }}
                        >
                            <span className="relative z-10 flex items-center">
                                <BookOpen className="w-5 h-5 mr-2 animate-bounce" />
                                Start Free Learning
                                <Sparkles className="w-5 h-5 ml-2 animate-spin" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-teal-400 opacity-30 blur-lg animate-ping"></div>
                        </button>
                    </div>

                    {/* Career Help Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={onOpenCareerHelp}
                            className={`group relative inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 hover:shadow-2xl ${
                                theme.isDark
                                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
                                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
                            }`}
                            style={{
                                animation: 'pulse 2s infinite, bounce 4s infinite',
                            }}
                        >
                            <span className="relative z-10 flex items-center">
                                <HelpCircle className="w-5 h-5 mr-2 animate-pulse" />
                                Career Help & Guidance
                                <Sparkles className="w-4 h-4 ml-2 animate-spin" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 blur-lg animate-ping"></div>
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className={`mt-12 text-sm ${theme.isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <p>✨ No registration required • 🚀 Start your journey today • 💡 Expert-curated content</p>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-ping`}></div>
                <div
                    className={`absolute top-1/3 right-10 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-ping`}
                    style={{ animationDelay: '1s' }}
                ></div>
                <div
                    className={`absolute bottom-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-60 animate-ping`}
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    className={`absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-500 rounded-full opacity-60 animate-ping`}
                    style={{ animationDelay: '3s' }}
                ></div>
                <div
                    className={`absolute top-1/2 left-1/2 w-5 h-5 bg-green-400 rounded-full opacity-40 animate-bounce`}
                    style={{ animationDelay: '4s' }}
                ></div>
            </div>
        </section>
    );
};

// From components/Resources.tsx
interface ResourcesProps {
    theme: Theme;
}

const Resources: React.FC<ResourcesProps> = ({ theme }) => {
    const resources = [
        {
            career: 'Data Engineer',
            websites: [
                { name: 'Awesome Data Engineering', url: 'https://awesomedataengineering.com/' },
                { name: 'Data with Baraa Newsletter', url: 'https://datawithbaraa.substack.com' },
                { name: 'Microsoft Fabric Community', url: 'https://community.fabric.microsoft.com' },
                { name: 'Rivery Blog', url: 'https://rivery.io' },
            ],
            videos: [{ name: 'Data Engineering Roadmap 2025', url: 'https://www.youtube.com/watch?v=odZHmYgebbw' }],
        },
        {
            career: 'Data Engineer (Alternative)',
            websites: [
                {
                    name: 'DataCamp - How to Learn Data Engineering',
                    url: 'https://www.datacamp.com/blog/how-to-learn-data-engineering',
                },
            ],
            videos: [{ name: 'Data Engineering Channel', url: 'https://www.youtube.com/channel/UC9xghV-TcBwGvK-aEMhpt5w' }],
        },
        {
            career: 'Software Developer',
            websites: [
                {
                    name: 'GeeksforGeeks Full Stack Roadmap',
                    url: 'https://www.geeksforgeeks.org/full-stack-developer-roadmap/',
                },
                { name: 'Scaler Full Stack Roadmap', url: 'https://www.scaler.com/blog/full-stack-developer-roadmap/' },
            ],
            videos: [{ name: 'Scaler Academy YouTube', url: 'https://www.youtube.com/@ScalerAcademy' }],
        },
        {
            career: 'UI/UX Designer',
            websites: [
                {
                    name: 'IT Industry Career Guide',
                    url: 'https://www.thesun.co.uk/money/28212176/land-your-next-role-in-the-it-industry/',
                },
                { name: 'UX Design Roadmap', url: 'https://roadmap.sh/ux-design' },
            ],
            videos: [
                {
                    name: 'UI UX Career Roadmap 2025',
                    url: 'https://www.youtube.com/results?search_query=UI+UX+career+roadmap+2025',
                },
            ],
        },
        {
            career: 'Data Scientist',
            websites: [
                {
                    name: 'DataCamp Data Engineering Path',
                    url: 'https://www.datacamp.com/blog/how-to-become-a-data-engineer',
                },
                {
                    name: 'GeeksforGeeks Data Scientist Roadmap',
                    url: 'https://www.geeksforgeeks.org/how-to-become-data-scientist-a-complete-roadmap/',
                },
            ],
            videos: [
                { name: '3Blue1Brown (Visual Math/ML)', url: 'https://www.youtube.com/@3blue1brown' },
                { name: 'freeCodeCamp ML Videos', url: 'https://www.youtube.com/@freecodecamp' },
            ],
        },
        {
            career: 'Cybersecurity Analyst',
            websites: [
                { name: 'Edureka Cyber Security Roadmap', url: 'https://www.edureka.co/blog/cyber-security-roadmap/' },
                { name: 'Cybersecurity Career Path', url: 'https://roadmap.sh/cyber-security' },
            ],
            videos: [
                {
                    name: 'Cybersecurity Roadmap for Beginners',
                    url: 'https://www.youtube.com/results?search_query=cybersecurity+roadmap+beginners',
                },
            ],
        },
        {
            career: 'AI/ML Engineer',
            websites: [
                {
                    name: 'GeeksforGeeks Data Scientist Roadmap',
                    url: 'https://www.geeksforgeeks.org/how-to-become-data-scientist-a-complete-roadmap/',
                },
                { name: 'Machine Learning Roadmap', url: 'https://roadmap.sh/ai-data-scientist' },
            ],
            videos: [{ name: '3Blue1Brown (ML Concepts)', url: 'https://www.youtube.com/@3blue1brown' }],
        },
        {
            career: 'Product Manager',
            websites: [
                {
                    name: 'Coursera PM Career Pathways',
                    url: 'https://www.coursera.org/resources/job-leveling-matrix-for-product-management-career-pathways',
                },
                { name: 'Product Manager Roadmap', url: 'https://roadmap.sh/product-manager' },
            ],
            videos: [
                {
                    name: 'Product Manager Roadmap',
                    url: 'https://www.youtube.com/results?search_query=product+manager+roadmap',
                },
            ],
        },
        {
            career: 'Full Stack Developer',
            websites: [
                { name: 'Scaler Full Stack Roadmap', url: 'https://www.scaler.com/blog/full-stack-developer-roadmap/' },
                { name: 'Full Stack Developer Roadmap', url: 'https://roadmap.sh/full-stack' },
            ],
            videos: [{ name: 'Scaler Academy YouTube', url: 'https://www.youtube.com/@ScalerAcademy' }],
        },
        {
            career: 'Cloud Engineer',
            websites: [
                {
                    name: 'Simplilearn Cloud Engineer Roadmap',
                    url: 'https://www.simplilearn.com/cloud-engineer-roadmap-article',
                },
                { name: 'DevOps Roadmap', url: 'https://roadmap.sh/devops' },
            ],
            videos: [
                {
                    name: 'Cloud Engineer Roadmap',
                    url: 'https://www.youtube.com/results?search_query=cloud+engineer+roadmap',
                },
            ],
        },
        {
            career: 'Blockchain Developer',
            websites: [
                { name: 'Blockchain Developer Roadmap', url: 'https://roadmap.sh/blockchain' },
                { name: 'Web3 Developer Resources', url: 'https://web3.career/learn-web3' },
            ],
            videos: [
                {
                    name: 'Blockchain Developer Roadmap',
                    url: 'https://www.youtube.com/results?search_query=blockchain+developer+roadmap',
                },
            ],
        },
        {
            career: 'Business Analyst',
            websites: [
                {
                    name: 'Investopedia BA Career Path',
                    url: 'https://www.investopedia.com/articles/professionals/120915/business-analyst-career-path-and-qualifications.asp',
                },
                { name: 'Business Analyst Roadmap', url: 'https://roadmap.sh/business-analyst' },
            ],
            videos: [
                {
                    name: 'Business Analyst Career Path',
                    url: 'https://www.youtube.com/results?search_query=business+analyst+career+path',
                },
            ],
        },
        {
            career: 'Graphic Designer',
            websites: [
                {
                    name: 'Wikipedia Graphic Design Occupations',
                    url: 'https://en.wikipedia.org/wiki/Graphic_design_occupations',
                },
                { name: 'Design Career Resources', url: 'https://www.behance.net/galleries/graphic-design' },
            ],
            videos: [
                {
                    name: 'Graphic Designer Roadmap 2025',
                    url: 'https://www.youtube.com/results?search_query=graphic+designer+roadmap+2025',
                },
            ],
        },
        {
            career: 'Digital Marketer',
            websites: [
                {
                    name: 'Coursera Digital Marketing Pathways',
                    url: 'https://www.coursera.org/resources/job-leveling-matrix-for-digital-marketing-career-pathways',
                },
                { name: 'Google Digital Marketing Course', url: 'https://skillshop.withgoogle.com/' },
            ],
            videos: [
                {
                    name: 'Digital Marketing Career Roadmap',
                    url: 'https://www.youtube.com/results?search_query=digital+marketing+career+roadmap',
                },
            ],
        },
        {
            career: 'Entrepreneur / Startup Founder',
            websites: [
                { name: 'Wired - How to Become Entrepreneur', url: 'https://www.wired.com/story/how-become-entrepreneur/' },
                { name: 'Y Combinator Startup School', url: 'https://www.startupschool.org/' },
            ],
            videos: [
                {
                    name: 'Startup Founder Career Roadmap',
                    url: 'https://www.youtube.com/results?search_query=startup+founder+career+roadmap',
                },
            ],
        },
        {
            career: 'Chartered Accountant (CA)',
            websites: [
                { name: 'ICAI Official Website', url: 'https://www.icai.org/' },
                {
                    name: 'CA Career Path Guide',
                    url: 'https://www.shiksha.com/commerce/articles/chartered-accountant-career-blogId-12043',
                },
            ],
            videos: [
                {
                    name: 'Chartered Accountant Roadmap',
                    url: 'https://www.youtube.com/results?search_query=Chartered+Accountant+roadmap',
                },
            ],
        },
        {
            career: 'Investment Banker',
            websites: [
                {
                    name: 'Wall Street Prep Career Guide',
                    url: 'https://www.wallstreetprep.com/knowledge/investment-banking-career-path/',
                },
                { name: 'CFA Institute Resources', url: 'https://www.cfainstitute.org/' },
            ],
            videos: [
                {
                    name: 'Investment Banker Career Path',
                    url: 'https://www.youtube.com/results?search_query=investment+banker+career+path',
                },
            ],
        },
        {
            career: 'Technical Writer',
            websites: [
                {
                    name: 'Technical Writing Career Guide',
                    url: 'https://www.indeed.com/career-advice/finding-a-job/how-to-become-technical-writer',
                },
                { name: 'Google Technical Writing Courses', url: 'https://developers.google.com/tech-writing' },
            ],
            videos: [
                {
                    name: 'Technical Writer Career Roadmap',
                    url: 'https://www.youtube.com/results?search_query=technical+writer+career+roadmap',
                },
            ],
        },
        {
            career: 'Freelance Developer',
            websites: [
                {
                    name: 'Upwork Freelance Guide',
                    url: 'https://www.upwork.com/resources/how-to-become-freelance-developer',
                },
                {
                    name: 'Freelancer Career Resources',
                    url: 'https://www.freelancer.com/articles/freelancing/how-to-become-a-freelance-developer',
                },
            ],
            videos: [
                {
                    name: 'Freelance Software Developer Roadmap',
                    url: 'https://www.youtube.com/results?search_query=freelance+software+developer+roadmap',
                },
            ],
        },
        {
            career: 'Programming Fundamentals',
            websites: [
                {
                    name: 'Data with Baraa - Ultimate DE Roadmap',
                    url: 'https://datawithbaraa.substack.com/p/the-ultimate-data-engineering-roadmap',
                },
                { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' },
            ],
            videos: [
                {
                    name: 'Programming Fundamentals',
                    url: 'https://www.youtube.com/results?search_query=programming+fundamentals+roadmap',
                },
            ],
        },
        {
            career: 'General Learning / Science',
            websites: [
                { name: 'Crash Course Wikipedia', url: 'https://en.wikipedia.org/wiki/Crash_Course_(web_series)' },
                { name: 'Khan Academy', url: 'https://www.khanacademy.org/' },
            ],
            videos: [{ name: 'Crash Course YouTube Channel', url: 'https://www.youtube.com/@crashcourse' }],
        },
    ];

    return (
        <section
            id="resources"
            className={`py-20 ${
                theme.isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800'
                    : 'bg-gradient-to-br from-gray-50 to-white'
            }`}
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-6 ${
                            theme.isDark ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                        Learning
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-3">
                            Resources
                        </span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Curated collection of the best websites, articles, and video resources to accelerate your career journey
                        across all domains.
                    </p>
                </div>

                {/* Resources Table */}
                <div
                    className={`overflow-x-auto rounded-2xl border ${
                        theme.isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'
                    } backdrop-blur-lg`}
                >
                    <table className="w-full">
                        <thead>
                            <tr className={`border-b ${theme.isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                                <th
                                    className={`text-left p-6 font-bold text-lg ${
                                        theme.isDark ? 'text-white' : 'text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <BookOpen className="w-5 h-5 text-blue-500" />
                                        <span>Career Option</span>
                                    </div>
                                </th>
                                <th
                                    className={`text-left p-6 font-bold text-lg ${
                                        theme.isDark ? 'text-white' : 'text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <Globe className="w-5 h-5 text-green-500" />
                                        <span>Website / Article Resources</span>
                                    </div>
                                </th>
                                <th
                                    className={`text-left p-6 font-bold text-lg ${
                                        theme.isDark ? 'text-white' : 'text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <Video className="w-5 h-5 text-red-500" />
                                        <span>YouTube / Video Resources</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {resources.map((resource, index) => (
                                <tr
                                    key={index}
                                    className={`border-b transition-colors hover:bg-opacity-50 ${
                                        theme.isDark ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'
                                    }`}
                                >
                                    <td
                                        className={`p-6 font-semibold ${
                                            theme.isDark ? 'text-blue-400' : 'text-blue-600'
                                        }`}
                                    >
                                        {resource.career}
                                    </td>
                                    <td className="p-6">
                                        <div className="space-y-2">
                                            {resource.websites.map((website, idx) => (
                                                <a
                                                    key={idx}
                                                    href={website.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all hover:scale-105 mr-2 mb-2 ${
                                                        theme.isDark
                                                            ? 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
                                                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                                                    }`}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span>{website.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="space-y-2">
                                            {resource.videos.map((video, idx) => (
                                                <a
                                                    key={idx}
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all hover:scale-105 mr-2 mb-2 ${
                                                        theme.isDark
                                                            ? 'bg-red-500/20 text-red-300 hover:bg-red-500/30'
                                                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                                                    }`}
                                                >
                                                    <Video className="w-4 h-4" />
                                                    <span>{video.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Additional Resources */}
                <div className="mt-12 text-center">
                    <p className={`text-lg mb-6 ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Can't find what you're looking for? Explore more resources:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://roadmap.sh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                                theme.isDark
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                            }`}
                        >
                            <Globe className="w-5 h-5" />
                            <span>Roadmap.sh</span>
                        </a>
                        <a
                            href="https://www.freecodecamp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                                theme.isDark
                                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700'
                                    : 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700'
                            }`}
                        >
                            <BookOpen className="w-5 h-5" />
                            <span>freeCodeCamp</span>
                        </a>
                        <a
                            href="https://www.coursera.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                                theme.isDark
                                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                                    : 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                            }`}
                        >
                            <Video className="w-5 h-5" />
                            <span>Coursera</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// From components/RoadmapStep.tsx
interface RoadmapStepProps {
    step: RoadmapStep;
    theme: Theme;
    isCompleted: boolean;
    stepNumber: number;
    onToggleComplete: () => void;
}

const RoadmapStepComponent: React.FC<RoadmapStepProps> = ({ step, theme, isCompleted, stepNumber, onToggleComplete }) => {
    return (
        <div
            className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                isCompleted
                    ? theme.isDark
                        ? 'bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500/50'
                        : 'bg-gradient-to-br from-green-50 to-green-100 border-green-300'
                    : theme.isDark
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-300'
            }`}
        >
            {/* Step Number */}
            <div
                className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isCompleted
                        ? 'bg-green-500 text-white'
                        : theme.isDark
                        ? 'bg-blue-500 text-white'
                        : 'bg-blue-500 text-white'
                }`}
            >
                {isCompleted ? <CheckCircle className="w-4 h-4" /> : stepNumber}
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${theme.isDark ? 'text-white' : 'text-gray-900'}`}>
                        {step.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className={`text-sm ${theme.isDark ? 'text-gray-400' : 'text-gray-500'}`}>{step.duration}</span>
                    </div>
                </div>
                <button
                    onClick={onToggleComplete}
                    className={`p-2 rounded-full transition-all hover:scale-110 ${
                        isCompleted
                            ? 'bg-green-500 text-white'
                            : theme.isDark
                            ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                    }`}
                >
                    <CheckCircle className="w-5 h-5" />
                </button>
            </div>

            {/* Description */}
            <p className={`text-sm mb-4 leading-relaxed ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {step.description}
            </p>

            {/* Tips */}
            <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    <span className={`text-sm font-medium ${theme.isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                        Pro Tips
                    </span>
                </div>
                <ul className="space-y-1">
                    {step.tips.map((tip, index) => (
                        <li key={index} className={`text-sm ${theme.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            • {tip}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tools */}
            <div>
                <div className="flex items-center space-x-2 mb-2">
                    <Wrench className="w-4 h-4 text-blue-500" />
                    <span className={`text-sm font-medium ${theme.isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        Tools & Resources
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool, index) => (
                        <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full ${
                                theme.isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                            }`}
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main Page Component
const CareerPage: React.FC = () => {
    const [theme, setTheme] = useState<Theme>({ isDark: true }); // Default to dark theme
    const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
    const [isCareerModalOpen, setCareerModalOpen] = useState(false);
    const [isHelpModalOpen, setHelpModalOpen] = useState(false);
    const [isFreeRoadmapModalOpen, setFreeRoadmapModalOpen] = useState(false);

    const handleCareerClick = (career: Career) => {
        setSelectedCareer(career);
        setCareerModalOpen(true);
    };

    const handleCloseModal = () => {
        setCareerModalOpen(false);
        setSelectedCareer(null);
    };

    const handleOpenHelpModal = () => {
        setHelpModalOpen(true);
    };

    const handleCloseHelpModal = () => {
        setHelpModalOpen(false);
    };

    const handleOpenFreeRoadmapModal = () => {
        setFreeRoadmapModalOpen(true);
    };

    const handleCloseFreeRoadmapModal = () => {
        setFreeRoadmapModalOpen(false);
    };

    return (
        <div className={theme.isDark ? 'dark' : ''}>
            <Hero theme={theme} onOpenFreeRoadmap={handleOpenFreeRoadmapModal} onOpenCareerHelp={handleOpenHelpModal} />
            <CareerGrid careers={careers} theme={theme} onCareerClick={handleCareerClick} />
            <Resources theme={theme} />
            <Contact theme={theme} />

            {isCareerModalOpen && <CareerModal career={selectedCareer} theme={theme} onClose={handleCloseModal} />}
            {isHelpModalOpen && <CareerHelpModal isOpen={isHelpModalOpen} theme={theme} onClose={handleCloseHelpModal} />}
            {isFreeRoadmapModalOpen && (
                <FreeRoadmapModal isOpen={isFreeRoadmapModalOpen} theme={theme} onClose={handleCloseFreeRoadmapModal} />
            )}
        </div>
    );
};

export default CareerPage;