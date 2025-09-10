import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'learner' | 'instructor' | 'admin';
  avatar?: string;
  skills: string[];
  progress: {
    coursesCompleted: number;
    totalCourses: number;
    certificatesEarned: number;
    testsTaken: number;
    averageScore: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user session
    const savedUser = localStorage.getItem('MyPathWay_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        role: 'learner',
        skills: ['JavaScript', 'React', 'Node.js'],
        progress: {
          coursesCompleted: 12,
          totalCourses: 20,
          certificatesEarned: 8,
          testsTaken: 45,
          averageScore: 87
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('MyPathWay_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name: name,
        email: email,
        role: 'learner',
        skills: [],
        progress: {
          coursesCompleted: 0,
          totalCourses: 0,
          certificatesEarned: 0,
          testsTaken: 0,
          averageScore: 0
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('MyPathWay_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('MyPathWay_user');
  };

  const value = {
    user,
    login,
    logout,
    signup,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};