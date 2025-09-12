import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  MessageCircle,
  User,
  Star,
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  Send,
  Users,
  Shield,
  Award
} from 'lucide-react';

// Types for TypeScript
interface Mentor {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  sessionsCompleted: number;
  image: string;
  bio: string;
  expertise: string[];
}

interface Message {
  id: string;
  text: string;
  sender: 'mentor' | 'user';
  timestamp: Date;
}

const LiveMentorship: React.FC = () => {
  // State for video call and mentorship session
  const [isVideoActive, setIsVideoActive] = useState(true);
  const [isAudioActive, setIsAudioActive] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [isConnecting, setIsConnecting] = useState(true);

  // Refs for video elements
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  // Simulate fetching mentor data
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchMentorData = () => {
      const mockMentor: Mentor = {
        id: '1',
        name: 'Dr. Sarah Johnson',
        specialization: 'Software Engineering & Career Development',
        rating: 4.9,
        sessionsCompleted: 247,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        bio: 'Senior Software Engineer with 10+ years of experience at tech companies. Specialized in career coaching for software developers and interview preparation.',
        expertise: ['Software Engineering', 'Interview Prep', 'Career Growth', 'Resume Review']
      };
      setMentor(mockMentor);
      
      // Simulate connection delay
      setTimeout(() => {
        setIsConnecting(false);
        // Add welcome message from mentor
        setMessages([
          {
            id: '1',
            text: "Hi there! I'm Sarah. Thanks for booking a session with me. What would you like to focus on today?",
            sender: 'mentor',
            timestamp: new Date()
          }
        ]);
      }, 2000);
    };

    fetchMentorData();

    // Set up timer for session duration
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time for display (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate mentor response after a short delay
    setTimeout(() => {
      const mentorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "That's a great question. Let me think about how best to advise you on that...",
        sender: 'mentor',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, mentorResponse]);
    }, 1500);
  };

  // Toggle video
  const toggleVideo = () => {
    setIsVideoActive(prev => !prev);
  };

  // Toggle audio
  const toggleAudio = () => {
    setIsAudioActive(prev => !prev);
  };

  // End call
  const endCall = () => {
    // In a real app, this would disconnect from the video call
    alert('Call ended. Thank you for your session!');
  };

  if (isConnecting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Connecting you with a mentor</h2>
          <p className="text-gray-600 mb-6">Please wait while we connect you to your mentorship session.</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Live Mentorship Session</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white py-1 px-3 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-blue-600 mr-1" />
              <span className="text-sm font-medium">{formatTime(sessionTime)}</span>
            </div>
            <button 
              onClick={() => setShowChat(prev => !prev)}
              className={`p-2 rounded-full ${showChat ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600'}`}
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Video Section */}
          <div className={`${showChat ? 'lg:w-2/3' : 'w-full'} flex flex-col`}>
            <div className="bg-black rounded-2xl overflow-hidden shadow-xl aspect-video relative">
              {/* Mentor Video */}
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-purple-600 mx-auto flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white font-medium">{mentor?.name}</p>
                  <p className="text-gray-300 text-sm">Senior Software Engineer</p>
                </div>
              </div>
              
              {/* Local Video (Small overlay) */}
              {isVideoActive && (
                <div className="absolute bottom-4 right-4 w-1/4 max-w-xs rounded-lg overflow-hidden shadow-lg bg-black">
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center p-2">
                      <div className="w-12 h-12 rounded-full bg-blue-600 mx-auto flex items-center justify-center mb-2">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white text-xs">You</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Call Controls */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={toggleVideo}
                className={`p-4 rounded-full ${isVideoActive ? 'bg-gray-200 text-gray-700' : 'bg-red-500 text-white'}`}
              >
                {isVideoActive ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
              </button>
              
              <button
                onClick={toggleAudio}
                className={`p-4 rounded-full ${isAudioActive ? 'bg-gray-200 text-gray-700' : 'bg-red-500 text-white'}`}
              >
                {isAudioActive ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
              </button>
              
              <button
                onClick={endCall}
                className="p-4 rounded-full bg-red-600 text-white"
              >
                <PhoneOff className="w-6 h-6" />
              </button>
            </div>

            {/* Mentor Info Card */}
            <div className="bg-white rounded-2xl p-6 mt-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={mentor?.image} 
                    alt={mentor?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{mentor?.name}</h3>
                  <p className="text-gray-600">{mentor?.specialization}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(mentor?.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-gray-500 text-sm ml-2">{mentor?.rating} ({mentor?.sessionsCompleted} sessions)</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{mentor?.bio}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor?.expertise.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-1" />
                <span>This session is private and secure</span>
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          {showChat && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3 bg-white rounded-2xl shadow-xl flex flex-col"
            >
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Session Chat</h3>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: '500px' }}>
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
                  >
                    <div
                      className={`inline-block p-3 rounded-2xl max-w-xs ${message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : ''}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 border rounded-l-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white p-2 rounded-r-2xl"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Session Notes Section */}
        <div className="bg-white rounded-2xl p-6 mt-6 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Session Notes</h3>
          <textarea
            placeholder="Take notes during your session here. These will be saved and available to you after the session ends."
            className="w-full h-32 border rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end mt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMentorship;