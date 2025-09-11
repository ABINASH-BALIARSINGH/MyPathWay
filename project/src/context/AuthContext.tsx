import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
  signup: (name: string, email: string, password: string, role?: string) => Promise<void>;
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

  const apiCall = async (endpoint: string, options: RequestInit = {}) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // ✅ important for cookies
      ...options,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const msg = data.message || data.errors?.join(', ') || 'Something went wrong';
      throw new Error(msg);
    }

    return data;
  };

  // Check existing session on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await apiCall('/auth/verify-token');
        if (data.success) setUser(data.user);
        else setUser(null);
      } catch (err) {
        console.log('No valid session found:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Login
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiCall('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      setUser(data.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Signup
  const signup = async (name: string, email: string, password: string, role = 'learner') => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiCall('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, role: 'learner', confirmPassword: password }),
      });
      setUser(data.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    setLoading(true);
    try {
      await apiCall('/auth/logout', { method: 'POST' });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      setLoading(false);
    }
  };

  // Update profile
  const updateProfile = async (updates: Partial<User>) => {
    setError(null);
    try {
      const data = await apiCall('/auth/profile', {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
      if (data.success) setUser(data.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Profile update failed');
      throw err;
    }
  };

  // Update progress
  const updateProgress = async (progress: Partial<User['progress']>) => {
    setError(null);
    try {
      const data = await apiCall('/auth/progress', {
        method: 'PUT',
        body: JSON.stringify(progress),
      });
      if (data.success) setUser(data.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Progress update failed');
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        updateProfile,
        updateProgress,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
