import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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
  createdAt: string;
  lastLogin: string | null;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  updateProgress: (progress: Partial<User['progress']>) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Axios instance with credentials
  const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // ✅ crucial for cookies
  });

  // Check existing session on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.get('/auth/verify-token');
        if (data.success) setUser(data.user);
      } catch (err) {
        console.log('No valid session found:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.post('/auth/login', { email, password });
      setUser(data.user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.post('/auth/register', { name, email, password, confirmPassword: password });
      setUser(data.user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Signup failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    setError(null);
    try {
      const { data } = await api.put('/auth/profile', updates);
      if (data.success) setUser(data.user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Profile update failed');
      throw err;
    }
  };

  const updateProgress = async (progress: Partial<User['progress']>) => {
    setError(null);
    try {
      const { data } = await api.put('/auth/progress', progress);
      if (data.success) setUser(data.user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Progress update failed');
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signup, updateProfile, updateProgress, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};