import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Page Imports
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Coaching from './pages/Coaching';
import Courses from './pages/Courses';
import Practice from './pages/Practice';
import News from './pages/News';
import Apply from './pages/Apply';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Profile from './pages/Profile';
import CareerPage from './pages/CareerPage';

// Add these missing imports for the new pages
import Quiz from './pages/Quiz';
import Colleges from './pages/Colleges';
import Scholarships from './pages/Scholarships';
import Timeline from './pages/Timeline';
import CareerSearch from './pages/CareerSearch';
import QuizInterface from './components/QuizInterface';
import LiveMentorship from './pages/LiveMentorship';


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Standalone routes without the main layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Routes that use the main Layout (Header, Footer, etc.) */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              
              {/* Protected Routes */}
              <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
              <Route path="courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
              <Route path="career-search" element={<ProtectedRoute><CareerSearch /></ProtectedRoute>} />
              <Route path="colleges" element={<ProtectedRoute><Colleges /></ProtectedRoute>} />
              <Route path="scholarships" element={<ProtectedRoute><Scholarships /></ProtectedRoute>} />
              <Route path="timeline" element={<ProtectedRoute><Timeline /></ProtectedRoute>} />
              <Route path="coaching" element={<ProtectedRoute><Coaching /></ProtectedRoute>} />
              <Route path="test-center" element={<ProtectedRoute><Practice /></ProtectedRoute>} />
              <Route path="news" element={<ProtectedRoute><News /></ProtectedRoute>} />
              <Route path="apply" element={<ProtectedRoute><Apply /></ProtectedRoute>} />
              <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="live-mentorship" element={<ProtectedRoute><LiveMentorship /></ProtectedRoute>} />


              {/* Public Routes */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="careers" element={<Careers />} />
              <Route path="/quiz/:quizId/take" element={<QuizInterface />} />
              <Route path="/career-companion" element={<CareerPage />} />

            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;